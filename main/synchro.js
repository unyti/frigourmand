/* Synchronisation entre la base locale (SQLite) et le serveur (Supabase / PostgreSQL).

   Principe « local d'abord » :
   - chaque modification est appliquée tout de suite en local, puis mise en file d'attente ;
   - la file est envoyée au serveur dès que possible (et réessayée tant qu'on est hors ligne) ;
   - au démarrage, au retour sur la fenêtre et toutes les 2 minutes, on récupère l'état du serveur
     (seulement quand la file est vide, pour ne jamais écraser une modification pas encore envoyée). */
'use strict';

const crypto = require('crypto');
const { Base } = require('./base');

const TABLES = ['ingredients_perso', 'recettes_perso', 'garde_manger', 'courses', 'favoris', 'reglages'];

/** Ligne à écrire côté serveur pour une opération locale. */
function versDistant(op, uid) {
  const v = op.val || {};
  const t = new Date().toISOString();
  switch (op.col) {
    case 'gardeManger':
      return { table: 'garde_manger', conflit: 'utilisateur_id,ingredient_id', cle: { ingredient_id: op.cle },
        ligne: { utilisateur_id: uid, ingredient_id: op.cle, quantite: v.qte == null ? null : v.qte, unite: v.unite || '', rangement: v.rangement || null, modifie_le: t } };
    case 'courses':
      return { table: 'courses', conflit: 'utilisateur_id,cle', cle: { cle: op.cle },
        ligne: { utilisateur_id: uid, cle: op.cle, position: v.position || 0, ingredient_id: v.id || null, nom: v.nom || null,
          quantite: v.qte == null ? null : v.qte, unite: v.unite || '', sources: v.sources || [], coche: !!v.coche, modifie_le: t } };
    case 'ingredientsPerso':
      return { table: 'ingredients_perso', conflit: 'id', cle: { id: op.cle },
        ligne: { id: op.cle, utilisateur_id: uid, nom: v.nom, rangement: v.rangement || 'placard', rayon: v.rayon || 'div', unite: v.unite || '',
          piece_singulier: v.piece ? v.piece[0] : null, piece_pluriel: v.piece ? v.piece[1] : null, piece_g: v.pieceG == null ? null : v.pieceG,
          entier: !!v.entier, alias: v.alias || [], modifie_le: t } };
    case 'recettesPerso':
      return { table: 'recettes_perso', conflit: 'id', cle: { id: op.cle },
        ligne: { id: op.cle, utilisateur_id: uid, nom: v.nom, cuisine: v.cuisine, type: ['Entrée', 'Plat', 'Dessert'].includes(v.type) ? v.type : 'Plat',
          minutes: Math.max(1, parseInt(v.minutes, 10) || 1), difficulte: v.difficulte || 'Facile',
          personnes: Math.max(1, parseInt(v.personnes, 10) || 1), ingredients: (v.ingredients || []).map((l) => l.map((x) => (x === undefined ? null : x))), etapes: v.etapes || [], modifie_le: t } };
    case 'favoris':
      return { table: 'favoris', conflit: 'utilisateur_id,recette_id', cle: { recette_id: op.cle },
        ligne: { utilisateur_id: uid, recette_id: op.cle } };
    case 'reglages':
      return { table: 'reglages', conflit: 'utilisateur_id,cle', cle: { cle: op.cle },
        ligne: { utilisateur_id: uid, cle: op.cle, valeur: op.val } };
    default:
      throw new Error('Collection inconnue : ' + op.col);
  }
}

/** Reconstruit l'état « export » à partir des lignes du serveur. */
function depuisDistant(t) {
  const reglages = {};
  for (const r of t.reglages) reglages[r.cle] = r.valeur;
  return {
    ingredientsPerso: t.ingredients_perso.map((l) => {
      const i = { id: l.id, nom: l.nom, rangement: l.rangement, rayon: l.rayon, unite: l.unite };
      if (l.piece_singulier) i.piece = [l.piece_singulier, l.piece_pluriel || l.piece_singulier];
      if (l.piece_g != null) i.pieceG = l.piece_g;
      if (l.entier) i.entier = 1;
      if (l.alias && l.alias.length) i.alias = l.alias;
      return i;
    }),
    recettesPerso: t.recettes_perso.map((l) => ({
      id: l.id, nom: l.nom, cuisine: l.cuisine, type: l.type, minutes: l.minutes, difficulte: l.difficulte, personnes: l.personnes,
      etapes: l.etapes || [],
      ingredients: (l.ingredients || []).map(([id, q, u, opt]) => {
        const r = [id, q];
        if (u !== null && u !== undefined) r.push(u); else if (opt) r.push(undefined);
        if (opt) r.push('opt');
        return r;
      })
    })),
    gardeManger: t.garde_manger.map((l) => ({ id: l.ingredient_id, qte: l.quantite, unite: l.unite, rangement: l.rangement })),
    courses: t.courses.slice().sort((a, b) => a.position - b.position)
      .map((l) => ({ cle: l.cle, id: l.ingredient_id, nom: l.nom, qte: l.quantite, unite: l.unite, sources: l.sources || [], coche: !!l.coche })),
    favoris: t.favoris.map((l) => l.recette_id),
    reglages
  };
}

class Synchro {
  /**
   * @param {object} o
   * @param {Base} o.base
   * @param {object} o.client client Supabase
   * @param {string} o.uid identifiant de l'utilisateur connecté
   * @param {Function} o.signaler (evenement, donnees) => void
   */
  constructor(o) {
    this.base = o.base;
    this.client = o.client;
    this.uid = o.uid;
    this.signaler = o.signaler || (() => {});
    this.envoiEnCours = null;
    this.relance = null;
    this.derniereEmpreinte = null;
    this.dernierTirage = 0;
    this.minuteur = null;
    this.etat = { etat: 'inconnu', enAttente: 0 };
  }

  changerEtat(etat, extra) {
    this.etat = Object.assign({ etat, enAttente: this.base.tailleFile(this.uid) }, extra || {});
    this.signaler('synchro:etat', this.etat);
  }

  /** Premier lancement pour ce compte : reprise des données locales ou récupération du serveur. */
  async ouvrir(options) {
    const o = options || {};
    await this.vider();
    const distant = await this.lireDistant().catch(() => null);
    if (distant) {
      const vide = TABLES.every((t) => !distant[t].length);
      if (vide && o.donneesAReprendre) {
        // Premier compte sur cet ordinateur : on envoie les données saisies avant la création du compte.
        this.base.importer(o.donneesAReprendre, this.uid);
        this.enfiler(Base.opsDepuisExport(o.donneesAReprendre));
        await this.vider();
      } else if (!this.base.tailleFile(this.uid)) {
        this.appliquerDistant(distant);
      }
    } else {
      this.changerEtat('hors-ligne');
    }
    this.ouvert = true;
    this.minuteur = setInterval(() => this.tirer().catch(() => {}), 2 * 60 * 1000);
  }

  arreter() {
    clearInterval(this.minuteur);
    clearTimeout(this.relance);
  }

  enfiler(ops) {
    if (!ops || !ops.length) return;
    this.base.enfiler(ops, this.uid);
    this.vider();
  }

  /** Envoie la file au serveur, dans l'ordre. S'arrête au premier échec et réessaie 30 s plus tard. */
  vider() {
    if (this.envoiEnCours) return this.envoiEnCours;
    this.envoiEnCours = (async () => {
      clearTimeout(this.relance);
      let lot;
      if (this.base.tailleFile(this.uid)) this.changerEtat('envoi');
      while ((lot = this.base.premierEnAttente(this.uid))) {
        try {
          await this.envoyer(lot.ops);
          this.base.retirerDeLaFile(lot.id);
        } catch (e) {
          const message = String(e && e.message);
          const reseau = /fetch|network|ENOTFOUND|ECONN|timeout|allowlist/i.test(message);
          // Tables absentes côté serveur (schéma pas encore installé) : on garde tout et on réessaiera.
          const serveurIncomplet = /does not exist|could not find the table|schema cache/i.test(message);
          if (!reseau && !serveurIncomplet) {
            // Refus définitif (donnée invalide) : on écarte ce lot pour ne pas bloquer les suivants.
            console.error('Synchronisation : lot refusé par le serveur, ignoré.', message, JSON.stringify(lot.ops).slice(0, 500));
            this.base.retirerDeLaFile(lot.id);
            this.derniereErreur = message;
            continue;
          }
          this.changerEtat(reseau ? 'hors-ligne' : 'erreur', { message });
          this.relance = setTimeout(() => this.vider(), 30 * 1000);
          return false;
        }
      }
      this.changerEtat('ok');
      return true;
    })().finally(() => { this.envoiEnCours = null; });
    return this.envoiEnCours;
  }

  async envoyer(ops) {
    for (const op of ops) {
      const d = versDistant(op, this.uid);
      const q = this.client.from(d.table);
      let r;
      if (op.type === 'put') r = await q.upsert(d.ligne, { onConflict: d.conflit });
      else {
        let del = q.delete().eq('utilisateur_id', this.uid);
        for (const [col, val] of Object.entries(d.cle)) del = del.eq(col, val);
        r = await del;
      }
      if (r && r.error) throw new Error(r.error.message || 'Erreur serveur');
    }
  }

  async lireDistant() {
    const t = {};
    for (const table of TABLES) {
      const { data, error } = await this.client.from(table).select('*');
      if (error) throw new Error(error.message);
      t[table] = data || [];
    }
    return t;
  }

  appliquerDistant(distant) {
    const etat = depuisDistant(distant);
    const empreinte = crypto.createHash('sha1').update(JSON.stringify(etat)).digest('hex');
    this.dernierTirage = Date.now();
    if (empreinte === this.derniereEmpreinte) return false;
    this.derniereEmpreinte = empreinte;
    // Évite de réécrire la base si elle contient déjà exactement ces données.
    const local = this.base.exporter(this.uid);
    const memeContenu = JSON.stringify(depuisDistant(distant)) === JSON.stringify({
      ingredientsPerso: local.ingredientsPerso, recettesPerso: local.recettesPerso.map(({ source, ...r }) => r),
      gardeManger: local.gardeManger, courses: local.courses, favoris: local.favoris, reglages: local.reglages
    });
    if (!memeContenu) {
      this.base.importer(etat, this.uid);
      // Pendant l'ouverture, l'interface charge les données elle-même : pas besoin de la prévenir.
      if (this.ouvert) this.signaler('synchro:donnees', null);
    }
    this.changerEtat('ok');
    return !memeContenu;
  }

  /** Récupère l'état du serveur si rien n'est en attente d'envoi. */
  async tirer(forcer) {
    if (!forcer && Date.now() - this.dernierTirage < 20 * 1000) return false;
    const envoye = await this.vider();
    if (!envoye || this.base.tailleFile(this.uid)) return false;
    let distant;
    try {
      distant = await this.lireDistant();
    } catch (e) {
      this.changerEtat('hors-ligne');
      return false;
    }
    // Une modification a pu arriver pendant la lecture : on ne l'écrase pas.
    if (this.base.tailleFile(this.uid)) return false;
    return this.appliquerDistant(distant);
  }
}

module.exports = { Synchro, versDistant, depuisDistant, TABLES };
