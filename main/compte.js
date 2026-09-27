/* Comptes utilisateurs (Supabase Auth) : inscription, confirmation par code, connexion,
   mot de passe oublié, déconnexion. La session est conservée chiffrée sur le disque
   (DPAPI sous Windows via safeStorage) pour rester connecté entre deux lancements. */
'use strict';

const fs = require('fs');
const path = require('path');
const http = require('http');

/** Port local qui reçoit le retour de Google (à déclarer dans Supabase : Redirect URLs). */
const PORT_GOOGLE = 53117;
const RETOUR_GOOGLE = `http://127.0.0.1:${PORT_GOOGLE}/connexion`;

/** Stockage de session pour supabase-js, chiffré quand le système le permet. */
function stockageSession(fichier, safeStorage) {
  const lire = () => {
    try {
      const brut = fs.readFileSync(fichier);
      const texte = safeStorage && safeStorage.isEncryptionAvailable() && brut[0] !== 0x7b
        ? safeStorage.decryptString(brut)
        : brut.toString('utf8');
      return JSON.parse(texte);
    } catch (_) {
      return {};
    }
  };
  const ecrire = (obj) => {
    const texte = JSON.stringify(obj);
    fs.mkdirSync(path.dirname(fichier), { recursive: true });
    fs.writeFileSync(fichier, safeStorage && safeStorage.isEncryptionAvailable() ? safeStorage.encryptString(texte) : texte);
  };
  return {
    getItem: (cle) => (cle in lire() ? lire()[cle] : null),
    setItem: (cle, valeur) => { const o = lire(); o[cle] = valeur; ecrire(o); },
    removeItem: (cle) => { const o = lire(); delete o[cle]; ecrire(o); }
  };
}

const MESSAGES = {
  invalid_credentials: 'Adresse e-mail ou mot de passe incorrect.',
  email_not_confirmed: 'Ton adresse e-mail n’est pas encore confirmée. Saisis le code reçu par e-mail.',
  user_already_exists: 'Un compte existe déjà avec cette adresse. Connecte-toi ou utilise « Mot de passe oublié ».',
  email_exists: 'Un compte existe déjà avec cette adresse. Connecte-toi ou utilise « Mot de passe oublié ».',
  weak_password: 'Mot de passe trop faible : utilise au moins 8 caractères, en mélangeant lettres et chiffres.',
  otp_expired: 'Ce code est invalide ou a expiré. Demande un nouveau code.',
  over_email_send_rate_limit: 'Trop d’e-mails envoyés pour le moment. Réessaie dans quelques minutes.',
  over_request_rate_limit: 'Trop de tentatives. Réessaie dans quelques minutes.',
  email_address_invalid: 'Cette adresse e-mail n’est pas valide.',
  same_password: 'Le nouveau mot de passe doit être différent de l’ancien.',
  signup_disabled: 'Les inscriptions sont fermées pour le moment.'
};

function traduire(erreur) {
  if (!erreur) return null;
  const code = erreur.code || '';
  const msg = String(erreur.message || '');
  if (MESSAGES[code]) return MESSAGES[code];
  if (/invalid login credentials/i.test(msg)) return MESSAGES.invalid_credentials;
  if (/email not confirmed/i.test(msg)) return MESSAGES.email_not_confirmed;
  if (/already registered/i.test(msg)) return MESSAGES.user_already_exists;
  if (/expired|invalid.*(otp|token)/i.test(msg)) return MESSAGES.otp_expired;
  if (/rate limit/i.test(msg)) return MESSAGES.over_email_send_rate_limit;
  if (/password/i.test(msg) && /(least|weak|short)/i.test(msg)) return MESSAGES.weak_password;
  if (/fetch failed|network|ENOTFOUND|ECONNREFUSED|timeout/i.test(msg) || erreur.status === 0) {
    return 'Impossible de joindre le serveur : vérifie ta connexion Internet.';
  }
  return 'Une erreur est survenue : ' + msg;
}

function utilisateurPublic(u) {
  if (!u) return null;
  const m = u.user_metadata || {};
  // Compte Google : pas de champ « nom », on prend le prénom du nom complet.
  const nom = m.nom || m.given_name || String(m.full_name || m.name || '').split(' ')[0] || '';
  return { id: u.id, email: u.email, nom };
}

const PAGE_RETOUR = (titre, texte) => `<!doctype html><html lang="fr"><head><meta charset="utf-8"><title>Frigourmand</title>
<style>body{font:17px/1.5 system-ui,sans-serif;background:#F6EFE3;color:#2B2520;display:grid;place-items:center;min-height:90vh;margin:0}
main{max-width:30rem;padding:2rem;text-align:center}h1{font-weight:600;font-size:1.5rem}
@media (prefers-color-scheme:dark){body{background:#1C1916;color:#EFE6D8}}</style></head>
<body><main><h1>${titre}</h1><p>${texte}</p></main></body></html>`;

class Compte {
  /**
   * @param {object} o
   * @param {object} o.client client Supabase (ou faux client de test)
   * @param {string} o.fichierDernier fichier où l'on garde le dernier utilisateur connecté (mode hors ligne)
   * @param {Function} o.enLigne () => Promise<boolean>
   */
  constructor(o) {
    this.client = o.client;
    this.fichierDernier = o.fichierDernier;
    this.enLigne = o.enLigne;
    this.ouvrirNavigateur = o.ouvrirNavigateur || (() => {});
    const dossier = path.dirname(o.fichierDernier);
    this.fichierAdresse = path.join(dossier, 'derniere-adresse.json');
    this.fichierTemporaire = path.join(dossier, 'session-temporaire');
    this.attenteGoogle = null;
  }

  memoriser(u) {
    try {
      if (u) {
        fs.writeFileSync(this.fichierDernier, JSON.stringify(u));
        // L'adresse est gardée même après une déconnexion, pour pré-remplir la connexion.
        fs.writeFileSync(this.fichierAdresse, JSON.stringify({ email: u.email }));
      } else fs.rmSync(this.fichierDernier, { force: true });
    } catch (_) { /* rien */ }
  }

  derniereAdresse() {
    try { return JSON.parse(fs.readFileSync(this.fichierAdresse, 'utf8')).email || ''; } catch (_) { return ''; }
  }

  /** « Rester connecté » décoché : la session sera oubliée au prochain lancement. */
  resterConnecte(rester) {
    try {
      if (rester === false) fs.writeFileSync(this.fichierTemporaire, '1');
      else fs.rmSync(this.fichierTemporaire, { force: true });
    } catch (_) { /* rien */ }
  }

  /** À appeler au démarrage, avant de créer le client : efface une session marquée temporaire. */
  static oublierSessionTemporaire(dossier, fichierSession) {
    const drapeau = path.join(dossier, 'session-temporaire');
    if (!fs.existsSync(drapeau)) return false;
    for (const f of [fichierSession, path.join(dossier, 'dernier-compte.json'), drapeau]) fs.rmSync(f, { force: true });
    return true;
  }

  dernier() {
    try { return JSON.parse(fs.readFileSync(this.fichierDernier, 'utf8')); } catch (_) { return null; }
  }

  /** Utilisateur connecté au démarrage : session valide, ou dernière session si l'on est hors ligne. */
  async etat() {
    let session = null;
    try {
      const { data } = await this.client.auth.getSession();
      session = data && data.session;
    } catch (_) { /* rien */ }
    if (session) {
      const u = utilisateurPublic(session.user);
      this.memoriser(u);
      return { utilisateur: u, horsLigne: false };
    }
    const dernier = this.dernier();
    if (dernier && !(await this.enLigne())) return { utilisateur: dernier, horsLigne: true };
    return { utilisateur: null, horsLigne: false, derniereAdresse: this.derniereAdresse() };
  }

  async resultat(promesse) {
    try {
      const { data, error } = await promesse;
      if (error) return { erreur: traduire(error), code: error.code || null };
      const u = utilisateurPublic((data && (data.user || (data.session && data.session.user))) || null);
      if (data && data.session) this.memoriser(u);
      return { utilisateur: data && data.session ? u : null, attenteConfirmation: !!(data && data.user && !data.session) };
    } catch (e) {
      return { erreur: traduire(e) };
    }
  }

  inscrire(email, motDePasse, nom) {
    return this.resultat(this.client.auth.signUp({ email, password: motDePasse, options: { data: { nom: nom || '' } } }));
  }

  async connecter(email, motDePasse, rester) {
    const r = await this.resultat(this.client.auth.signInWithPassword({ email, password: motDePasse }));
    if (r.utilisateur) this.resterConnecte(rester);
    return r;
  }

  /**
   * Connexion avec Google : la page Google s'ouvre dans le navigateur, qui revient ensuite
   * sur un petit serveur local (127.0.0.1) avec un code échangé contre une session (PKCE).
   */
  async connecterGoogle(rester) {
    this.annulerGoogle();
    let serveur;
    try {
      const code = await new Promise((resolve, reject) => {
        serveur = http.createServer((req, res) => {
          const url = new URL(req.url, RETOUR_GOOGLE);
          if (url.pathname !== '/connexion') { res.writeHead(404); res.end(); return; }
          const c = url.searchParams.get('code');
          const erreur = url.searchParams.get('error_description') || url.searchParams.get('error');
          res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
          res.end(c
            ? PAGE_RETOUR('Connexion réussie', 'Tu peux fermer cet onglet et revenir dans Frigourmand.')
            : PAGE_RETOUR('Connexion annulée', 'Reviens dans Frigourmand pour réessayer.'));
          if (c) resolve(c); else reject(Object.assign(new Error(erreur || 'annulé'), { code: 'google_annule' }));
        });
        serveur.on('error', (e) => reject(e.code === 'EADDRINUSE'
          ? Object.assign(new Error('port'), { code: 'google_port' }) : e));
        const minuteur = setTimeout(() => reject(Object.assign(new Error('délai'), { code: 'google_delai' })), 5 * 60 * 1000);
        this.attenteGoogle = () => { clearTimeout(minuteur); reject(Object.assign(new Error('annulé'), { code: 'google_stop' })); };
        serveur.listen(PORT_GOOGLE, '127.0.0.1', async () => {
          try {
            const { data, error } = await this.client.auth.signInWithOAuth({
              provider: 'google',
              options: { redirectTo: RETOUR_GOOGLE, skipBrowserRedirect: true, queryParams: { prompt: 'select_account' } }
            });
            if (error) throw error;
            await this.ouvrirNavigateur(data.url);
          } catch (e) { reject(e); }
        });
      });
      const r = await this.resultat(this.client.auth.exchangeCodeForSession(code));
      if (r.utilisateur) this.resterConnecte(rester);
      return r;
    } catch (e) {
      if (e.code === 'google_stop') return { annule: true };
      if (e.code === 'google_annule') return { erreur: 'La connexion avec Google a été annulée.' };
      if (e.code === 'google_delai') return { erreur: 'La connexion avec Google a pris trop de temps. Réessaie.' };
      if (e.code === 'google_port') return { erreur: 'Une autre connexion Google est déjà en cours. Ferme l’onglet ouvert puis réessaie.' };
      if (/provider is not enabled|unsupported provider/i.test(String(e.message))) {
        return { erreur: 'La connexion avec Google n’est pas encore activée sur le serveur.' };
      }
      return { erreur: traduire(e) };
    } finally {
      this.attenteGoogle = null;
      if (serveur) serveur.close();
    }
  }

  annulerGoogle() {
    if (this.attenteGoogle) this.attenteGoogle();
    return true;
  }

  /** Confirme l'adresse avec le code reçu après l'inscription. */
  async confirmer(email, code) {
    const r = await this.resultat(this.client.auth.verifyOtp({ email, token: code, type: 'signup' }));
    if (!r.erreur) return r;
    const r2 = await this.resultat(this.client.auth.verifyOtp({ email, token: code, type: 'email' }));
    return r2.erreur ? r : r2;
  }

  renvoyerCode(email) {
    return this.resultat(this.client.auth.resend({ type: 'signup', email }));
  }

  demanderReinitialisation(email) {
    return this.resultat(this.client.auth.resetPasswordForEmail(email));
  }

  /** Vérifie le code de réinitialisation, puis enregistre le nouveau mot de passe. */
  async reinitialiser(email, code, motDePasse) {
    const r = await this.resultat(this.client.auth.verifyOtp({ email, token: code, type: 'recovery' }));
    if (r.erreur) return r;
    const r2 = await this.resultat(this.client.auth.updateUser({ password: motDePasse }));
    if (r2.erreur) return r2;
    return r;
  }

  async changerMotDePasse(motDePasse) {
    const r = await this.resultat(this.client.auth.updateUser({ password: motDePasse }));
    return r.erreur ? r : { ok: true };
  }

  async deconnecter() {
    try {
      const { error } = await this.client.auth.signOut();
      // Hors ligne, la déconnexion côté serveur échoue : on oublie quand même la session sur ce PC.
      if (error) await this.client.auth.signOut({ scope: 'local' });
    } catch (_) {
      try { await this.client.auth.signOut({ scope: 'local' }); } catch (__) { /* rien */ }
    }
    this.memoriser(null);
    this.resterConnecte(true);
    return { ok: true };
  }
}

module.exports = { Compte, stockageSession, traduire, RETOUR_GOOGLE };
