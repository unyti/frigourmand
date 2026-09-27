/* Comptes utilisateurs (Supabase Auth) : inscription, confirmation par code, connexion,
   mot de passe oublié, déconnexion. La session est conservée chiffrée sur le disque
   (DPAPI sous Windows via safeStorage) pour rester connecté entre deux lancements. */
'use strict';

const fs = require('fs');
const path = require('path');

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
  return { id: u.id, email: u.email, nom: (u.user_metadata && u.user_metadata.nom) || '' };
}

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
  }

  memoriser(u) {
    try {
      if (u) fs.writeFileSync(this.fichierDernier, JSON.stringify(u));
      else fs.rmSync(this.fichierDernier, { force: true });
    } catch (_) { /* rien */ }
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
    return { utilisateur: null, horsLigne: false };
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

  connecter(email, motDePasse) {
    return this.resultat(this.client.auth.signInWithPassword({ email, password: motDePasse }));
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
    return { ok: true };
  }
}

module.exports = { Compte, stockageSession, traduire };
