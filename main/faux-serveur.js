/* Faux client Supabase, utilisé uniquement pour les tests automatiques
   (variable d'environnement FRIGOURMAND_FAUX_SERVEUR=chemin/vers/fichier.json).
   Il imite le petit sous-ensemble de l'API utilisé par Frigourmand. Code de confirmation : 123456. */
'use strict';

const fs = require('fs');
const crypto = require('crypto');

const CLES = {
  garde_manger: ['utilisateur_id', 'ingredient_id'],
  courses: ['utilisateur_id', 'cle'],
  ingredients_perso: ['id'],
  recettes_perso: ['id'],
  favoris: ['utilisateur_id', 'recette_id'],
  reglages: ['utilisateur_id', 'cle']
};

function creerFauxClient(fichier) {
  const lire = () => { try { return JSON.parse(fs.readFileSync(fichier, 'utf8')); } catch (_) { return { comptes: {}, tables: {}, horsLigne: false }; } };
  const ecrire = (d) => fs.writeFileSync(fichier, JSON.stringify(d, null, 1));
  let session = null;
  const fichierSession = fichier + '.session';
  try { session = JSON.parse(fs.readFileSync(fichierSession, 'utf8')); } catch (_) { /* rien */ }
  const garderSession = (s) => { session = s; if (s) fs.writeFileSync(fichierSession, JSON.stringify(s)); else fs.rmSync(fichierSession, { force: true }); };
  const reseau = () => { if (lire().horsLigne) throw new Error('fetch failed'); };
  const err = (code, message) => ({ data: { user: null, session: null }, error: { code, message } });
  const sessionPour = (c) => ({ access_token: 'faux', user: { id: c.id, email: c.email, user_metadata: { nom: c.nom } } });

  const auth = {
    async getSession() { return { data: { session }, error: null }; },
    async signUp({ email, password, options }) {
      reseau();
      const d = lire();
      if (d.comptes[email]) return err('user_already_exists', 'User already registered');
      if (password.length < 6) return err('weak_password', 'Password should be at least 6 characters');
      d.comptes[email] = { id: crypto.randomUUID(), email, password, nom: (options && options.data && options.data.nom) || '', confirme: false };
      ecrire(d);
      return { data: { user: { id: d.comptes[email].id, email }, session: null }, error: null };
    },
    async verifyOtp({ email, token, type }) {
      reseau();
      const d = lire();
      const c = d.comptes[email];
      if (!c || token !== '123456') return err('otp_expired', 'Token has expired or is invalid');
      if (type === 'signup' || type === 'email') c.confirme = true;
      ecrire(d);
      const s = sessionPour(c);
      garderSession(s);
      return { data: { user: s.user, session: s }, error: null };
    },
    async resend() { reseau(); return { data: {}, error: null }; },
    async resetPasswordForEmail() { reseau(); return { data: {}, error: null }; },
    async signInWithPassword({ email, password }) {
      reseau();
      const c = lire().comptes[email];
      if (!c || c.password !== password) return err('invalid_credentials', 'Invalid login credentials');
      if (!c.confirme) return err('email_not_confirmed', 'Email not confirmed');
      const s = sessionPour(c);
      garderSession(s);
      return { data: { user: s.user, session: s }, error: null };
    },
    async updateUser({ password }) {
      reseau();
      const d = lire();
      const c = Object.values(d.comptes).find((x) => session && x.id === session.user.id);
      if (!c) return err('no_session', 'Auth session missing');
      c.password = password;
      ecrire(d);
      return { data: { user: session.user }, error: null };
    },
    async signInWithOAuth({ options }) {
      reseau();
      return { data: { url: options.redirectTo + '?code=faux-google' }, error: null };
    },
    async exchangeCodeForSession(code) {
      reseau();
      if (code !== 'faux-google') return err('bad_code', 'invalid flow state');
      const d = lire();
      const email = d.emailGoogle || 'google@exemple.fr';
      if (!d.comptes[email]) d.comptes[email] = { id: crypto.randomUUID(), email, password: null, nom: 'Camille', confirme: true };
      d.comptes[email].confirme = true;
      ecrire(d);
      const s = sessionPour(d.comptes[email]);
      garderSession(s);
      return { data: { user: s.user, session: s }, error: null };
    },
    async signOut() { garderSession(null); return { error: null }; }
  };

  function from(table) {
    const cles = CLES[table];
    const uid = () => session && session.user.id;
    return {
      async select() {
        reseau();
        return { data: (lire().tables[table] || []).filter((l) => l.utilisateur_id === uid()), error: null };
      },
      async upsert(ligne) {
        reseau();
        const d = lire();
        const t = (d.tables[table] = d.tables[table] || []);
        if (ligne.utilisateur_id !== uid()) return { error: { message: 'new row violates row-level security policy' } };
        const i = t.findIndex((l) => cles.every((k) => l[k] === ligne[k]));
        if (i >= 0) t[i] = Object.assign({}, t[i], ligne); else t.push(ligne);
        ecrire(d);
        return { error: null };
      },
      delete() {
        const filtres = [];
        const chaine = {
          eq(col, val) { filtres.push([col, val]); return chaine; },
          then(ok, ko) {
            try {
              reseau();
              const d = lire();
              d.tables[table] = (d.tables[table] || []).filter((l) => !(l.utilisateur_id === uid() && filtres.every(([c, v]) => l[c] === v)));
              ecrire(d);
              return Promise.resolve({ error: null }).then(ok, ko);
            } catch (e) {
              return Promise.reject(e).then(ok, ko);
            }
          }
        };
        return chaine;
      }
    };
  }

  return { auth, from, estFaux: true, enLigne: async () => !lire().horsLigne };
}

module.exports = { creerFauxClient };
