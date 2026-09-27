/* Base de données locale de Frigourmand (SQLite intégré à Node / Electron).

   Le schéma est volontairement « serveur-compatible » : chaque donnée personnelle porte un
   utilisateur_id (« local » sur le bureau). Le même modèle pourra être repris tel quel sur
   PostgreSQL le jour où Frigourmand aura un site web avec des comptes. */
'use strict';

const crypto = require('crypto');
const { DatabaseSync } = require('node:sqlite');
const { INGREDIENTS, RANGEMENTS, RAYONS } = require('../donnees/ingredients');
const RECETTES = require('../donnees/recettes');

const UTILISATEUR_LOCAL = 'local';

const MIGRATIONS = [
  // Version 1
  `
  CREATE TABLE meta (
    cle TEXT PRIMARY KEY,
    valeur TEXT
  );

  CREATE TABLE utilisateurs (
    id TEXT PRIMARY KEY,
    nom TEXT,
    cree_le TEXT NOT NULL
  );

  -- Ingrédients : proprietaire NULL = catalogue commun, sinon ingrédient créé par un utilisateur.
  CREATE TABLE ingredients (
    id TEXT PRIMARY KEY,
    proprietaire TEXT REFERENCES utilisateurs(id) ON DELETE CASCADE,
    nom TEXT NOT NULL,
    rangement TEXT NOT NULL,
    rayon TEXT NOT NULL,
    unite TEXT NOT NULL DEFAULT '',
    piece_singulier TEXT,
    piece_pluriel TEXT,
    piece_g REAL,
    entier INTEGER NOT NULL DEFAULT 0,
    basique INTEGER NOT NULL DEFAULT 0,
    alias TEXT NOT NULL DEFAULT '[]'
  );
  CREATE INDEX ingredients_proprietaire ON ingredients(proprietaire);

  -- Recettes : proprietaire NULL = recette de base, sinon recette personnelle.
  CREATE TABLE recettes (
    id TEXT PRIMARY KEY,
    proprietaire TEXT REFERENCES utilisateurs(id) ON DELETE CASCADE,
    nom TEXT NOT NULL,
    cuisine TEXT NOT NULL,
    type TEXT NOT NULL,
    minutes INTEGER NOT NULL,
    difficulte TEXT NOT NULL,
    personnes INTEGER NOT NULL,
    etapes TEXT NOT NULL DEFAULT '[]',
    cree_le TEXT NOT NULL,
    modifie_le TEXT NOT NULL
  );
  CREATE INDEX recettes_proprietaire ON recettes(proprietaire);

  CREATE TABLE recette_ingredients (
    recette_id TEXT NOT NULL REFERENCES recettes(id) ON DELETE CASCADE,
    position INTEGER NOT NULL,
    ingredient_id TEXT NOT NULL,
    quantite REAL,
    unite TEXT,
    facultatif INTEGER NOT NULL DEFAULT 0,
    PRIMARY KEY (recette_id, position)
  );
  CREATE INDEX recette_ingredients_ingredient ON recette_ingredients(ingredient_id);

  CREATE TABLE garde_manger (
    utilisateur_id TEXT NOT NULL REFERENCES utilisateurs(id) ON DELETE CASCADE,
    ingredient_id TEXT NOT NULL,
    quantite REAL,
    unite TEXT NOT NULL DEFAULT '',
    rangement TEXT,
    modifie_le TEXT NOT NULL,
    PRIMARY KEY (utilisateur_id, ingredient_id)
  );

  CREATE TABLE courses (
    utilisateur_id TEXT NOT NULL REFERENCES utilisateurs(id) ON DELETE CASCADE,
    cle TEXT NOT NULL,
    position INTEGER NOT NULL DEFAULT 0,
    ingredient_id TEXT,
    nom TEXT,
    quantite REAL,
    unite TEXT NOT NULL DEFAULT '',
    sources TEXT NOT NULL DEFAULT '[]',
    coche INTEGER NOT NULL DEFAULT 0,
    PRIMARY KEY (utilisateur_id, cle)
  );

  CREATE TABLE favoris (
    utilisateur_id TEXT NOT NULL REFERENCES utilisateurs(id) ON DELETE CASCADE,
    recette_id TEXT NOT NULL,
    ajoute_le TEXT NOT NULL,
    PRIMARY KEY (utilisateur_id, recette_id)
  );

  CREATE TABLE reglages (
    utilisateur_id TEXT NOT NULL REFERENCES utilisateurs(id) ON DELETE CASCADE,
    cle TEXT NOT NULL,
    valeur TEXT NOT NULL,
    PRIMARY KEY (utilisateur_id, cle)
  );
  `,
  // Version 2 : file d'attente des modifications à envoyer au serveur (synchronisation hors ligne).
  `
  CREATE TABLE file_attente (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    utilisateur_id TEXT NOT NULL,
    ops TEXT NOT NULL,
    cree_le TEXT NOT NULL
  );
  CREATE INDEX file_attente_utilisateur ON file_attente(utilisateur_id, id);
  `
];

const maintenant = () => new Date().toISOString();
const n = (v) => (v === undefined ? null : v);
const json = (v, defaut) => { try { return JSON.parse(v); } catch (_) { return defaut; } };

function ligneVersIngredient(l) {
  const i = { id: l.id, nom: l.nom, rangement: l.rangement, rayon: l.rayon, unite: l.unite };
  if (l.piece_singulier) i.piece = [l.piece_singulier, l.piece_pluriel || l.piece_singulier];
  if (l.piece_g != null) i.pieceG = l.piece_g;
  if (l.entier) i.entier = 1;
  if (l.basique) i.basique = 1;
  const alias = json(l.alias, []);
  if (alias.length) i.alias = alias;
  return i;
}

class Base {
  constructor(fichier) {
    this.db = new DatabaseSync(fichier);
    this.db.exec('PRAGMA journal_mode = WAL; PRAGMA foreign_keys = ON;');
    this.migrer();
    this.assurerUtilisateur(UTILISATEUR_LOCAL);
    this.amorcerCatalogue();
  }

  fermer() { this.db.close(); }

  transaction(fn) {
    this.db.exec('BEGIN');
    try {
      const r = fn();
      this.db.exec('COMMIT');
      return r;
    } catch (e) {
      this.db.exec('ROLLBACK');
      throw e;
    }
  }

  migrer() {
    const version = this.db.prepare('PRAGMA user_version').get().user_version;
    for (let v = version; v < MIGRATIONS.length; v++) {
      this.transaction(() => {
        this.db.exec(MIGRATIONS[v]);
        this.db.exec(`PRAGMA user_version = ${v + 1}`);
      });
    }
  }

  meta(cle, valeur) {
    if (valeur === undefined) {
      const l = this.db.prepare('SELECT valeur FROM meta WHERE cle = ?').get(cle);
      return l ? l.valeur : null;
    }
    this.db.prepare('INSERT INTO meta (cle, valeur) VALUES (?, ?) ON CONFLICT(cle) DO UPDATE SET valeur = excluded.valeur').run(cle, String(valeur));
    return valeur;
  }

  assurerUtilisateur(id) {
    this.db.prepare('INSERT OR IGNORE INTO utilisateurs (id, nom, cree_le) VALUES (?, ?, ?)').run(id, id === UTILISATEUR_LOCAL ? 'Moi' : id, maintenant());
  }

  /* ─── Catalogue commun ─── */

  amorcerCatalogue() {
    const signature = crypto.createHash('sha1').update(JSON.stringify([INGREDIENTS, RECETTES])).digest('hex');
    if (this.meta('catalogue_signature') === signature) return;
    this.transaction(() => {
      const insIng = this.db.prepare(`
        INSERT INTO ingredients (id, proprietaire, nom, rangement, rayon, unite, piece_singulier, piece_pluriel, piece_g, entier, basique, alias)
        VALUES (?, NULL, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        ON CONFLICT(id) DO UPDATE SET nom = excluded.nom, rangement = excluded.rangement, rayon = excluded.rayon,
          unite = excluded.unite, piece_singulier = excluded.piece_singulier, piece_pluriel = excluded.piece_pluriel,
          piece_g = excluded.piece_g, entier = excluded.entier, basique = excluded.basique, alias = excluded.alias
        WHERE ingredients.proprietaire IS NULL`);
      for (const i of INGREDIENTS) {
        insIng.run(i.id, i.nom, i.rangement, i.rayon, i.unite || '', i.piece ? i.piece[0] : null, i.piece ? i.piece[1] : null,
          n(i.pieceG), i.entier ? 1 : 0, i.basique ? 1 : 0, JSON.stringify(i.alias || []));
      }
      const ids = new Set(RECETTES.map((r) => r.id));
      for (const l of this.db.prepare('SELECT id FROM recettes WHERE proprietaire IS NULL').all()) {
        if (!ids.has(l.id)) this.db.prepare('DELETE FROM recettes WHERE id = ?').run(l.id);
      }
      for (const r of RECETTES) this.ecrireRecette(r, null);
      this.meta('catalogue_signature', signature);
    });
  }

  ecrireRecette(r, proprietaire) {
    const t = maintenant();
    this.db.prepare(`
      INSERT INTO recettes (id, proprietaire, nom, cuisine, type, minutes, difficulte, personnes, etapes, cree_le, modifie_le)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      ON CONFLICT(id) DO UPDATE SET nom = excluded.nom, cuisine = excluded.cuisine, type = excluded.type, minutes = excluded.minutes,
        difficulte = excluded.difficulte, personnes = excluded.personnes, etapes = excluded.etapes, modifie_le = excluded.modifie_le`)
      .run(r.id, proprietaire, r.nom, r.cuisine, r.type, r.minutes, r.difficulte, r.personnes, JSON.stringify(r.etapes || []), t, t);
    this.db.prepare('DELETE FROM recette_ingredients WHERE recette_id = ?').run(r.id);
    const ins = this.db.prepare('INSERT INTO recette_ingredients (recette_id, position, ingredient_id, quantite, unite, facultatif) VALUES (?, ?, ?, ?, ?, ?)');
    r.ingredients.forEach(([id, q, u, opt], pos) => ins.run(r.id, pos, id, n(q), n(u), opt ? 1 : 0));
  }

  lireRecettes(proprietaire) {
    const recettes = proprietaire == null
      ? this.db.prepare('SELECT * FROM recettes WHERE proprietaire IS NULL ORDER BY rowid').all()
      : this.db.prepare('SELECT * FROM recettes WHERE proprietaire = ? ORDER BY nom').all(proprietaire);
    const lignes = this.db.prepare('SELECT * FROM recette_ingredients WHERE recette_id = ? ORDER BY position');
    return recettes.map((r) => ({
      id: r.id,
      nom: r.nom,
      cuisine: r.cuisine,
      type: r.type,
      minutes: r.minutes,
      difficulte: r.difficulte,
      personnes: r.personnes,
      etapes: json(r.etapes, []),
      source: proprietaire == null ? 'catalogue' : 'perso',
      ingredients: lignes.all(r.id).map((l) => {
        const t = [l.ingredient_id, l.quantite];
        if (l.unite !== null || l.facultatif) t.push(l.unite === null ? undefined : l.unite);
        if (l.facultatif) t.push('opt');
        return t;
      })
    }));
  }

  /* ─── Lecture de toutes les données d'un utilisateur ─── */

  charger(u) {
    const utilisateur = u || UTILISATEUR_LOCAL;
    const reglages = {};
    for (const l of this.db.prepare('SELECT cle, valeur FROM reglages WHERE utilisateur_id = ?').all(utilisateur)) {
      reglages[l.cle] = json(l.valeur, null);
    }
    return {
      catalogue: {
        ingredients: this.db.prepare('SELECT * FROM ingredients WHERE proprietaire IS NULL ORDER BY rowid').all().map(ligneVersIngredient),
        rangements: RANGEMENTS,
        rayons: RAYONS,
        recettes: this.lireRecettes(null)
      },
      ingredientsPerso: this.db.prepare('SELECT * FROM ingredients WHERE proprietaire = ? ORDER BY nom').all(utilisateur).map(ligneVersIngredient),
      recettesPerso: this.lireRecettes(utilisateur),
      gardeManger: this.db.prepare('SELECT * FROM garde_manger WHERE utilisateur_id = ? ORDER BY modifie_le').all(utilisateur)
        .map((l) => ({ id: l.ingredient_id, qte: l.quantite, unite: l.unite, rangement: l.rangement })),
      courses: this.db.prepare('SELECT * FROM courses WHERE utilisateur_id = ? ORDER BY position').all(utilisateur)
        .map((l) => ({ cle: l.cle, id: l.ingredient_id, nom: l.nom, qte: l.quantite, unite: l.unite, sources: json(l.sources, []), coche: !!l.coche })),
      favoris: this.db.prepare('SELECT recette_id FROM favoris WHERE utilisateur_id = ? ORDER BY ajoute_le').all(utilisateur).map((l) => l.recette_id),
      reglages: Object.keys(reglages).length ? reglages : null
    };
  }

  /* ─── Écritures : liste d'opérations appliquées dans une seule transaction ───
     { col: 'gardeManger' | 'courses' | 'ingredientsPerso' | 'recettesPerso' | 'favoris' | 'reglages',
       type: 'put' | 'del', cle, val } */

  appliquer(ops, u) {
    this.assurerUtilisateur(u || UTILISATEUR_LOCAL);
    this.transaction(() => this.appliquerSansTransaction(ops, u));
    return true;
  }

  appliquerSansTransaction(ops, u) {
    const utilisateur = u || UTILISATEUR_LOCAL;
    const t = maintenant();
    const s = {
      gmPut: this.db.prepare(`INSERT INTO garde_manger (utilisateur_id, ingredient_id, quantite, unite, rangement, modifie_le) VALUES (?, ?, ?, ?, ?, ?)
        ON CONFLICT(utilisateur_id, ingredient_id) DO UPDATE SET quantite = excluded.quantite, unite = excluded.unite, rangement = excluded.rangement, modifie_le = excluded.modifie_le`),
      gmDel: this.db.prepare('DELETE FROM garde_manger WHERE utilisateur_id = ? AND ingredient_id = ?'),
      coPut: this.db.prepare(`INSERT INTO courses (utilisateur_id, cle, position, ingredient_id, nom, quantite, unite, sources, coche) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
        ON CONFLICT(utilisateur_id, cle) DO UPDATE SET position = excluded.position, ingredient_id = excluded.ingredient_id, nom = excluded.nom,
          quantite = excluded.quantite, unite = excluded.unite, sources = excluded.sources, coche = excluded.coche`),
      coDel: this.db.prepare('DELETE FROM courses WHERE utilisateur_id = ? AND cle = ?'),
      ipPut: this.db.prepare(`INSERT INTO ingredients (id, proprietaire, nom, rangement, rayon, unite, piece_singulier, piece_pluriel, piece_g, entier, basique, alias)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 0, ?)
        ON CONFLICT(id) DO UPDATE SET nom = excluded.nom, rangement = excluded.rangement, rayon = excluded.rayon, unite = excluded.unite
        WHERE ingredients.proprietaire = excluded.proprietaire`),
      ipDel: this.db.prepare('DELETE FROM ingredients WHERE id = ? AND proprietaire = ?'),
      rpDel: this.db.prepare('DELETE FROM recettes WHERE id = ? AND proprietaire = ?'),
      faPut: this.db.prepare('INSERT OR IGNORE INTO favoris (utilisateur_id, recette_id, ajoute_le) VALUES (?, ?, ?)'),
      faDel: this.db.prepare('DELETE FROM favoris WHERE utilisateur_id = ? AND recette_id = ?'),
      rgPut: this.db.prepare('INSERT INTO reglages (utilisateur_id, cle, valeur) VALUES (?, ?, ?) ON CONFLICT(utilisateur_id, cle) DO UPDATE SET valeur = excluded.valeur')
    };
    for (const op of ops) {
        const v = op.val || {};
        switch (op.col + ':' + op.type) {
          case 'gardeManger:put': s.gmPut.run(utilisateur, op.cle, n(v.qte), v.unite || '', n(v.rangement), t); break;
          case 'gardeManger:del': s.gmDel.run(utilisateur, op.cle); break;
          case 'courses:put':
            s.coPut.run(utilisateur, op.cle, v.position || 0, n(v.id), n(v.nom), n(v.qte), v.unite || '', JSON.stringify(v.sources || []), v.coche ? 1 : 0);
            break;
          case 'courses:del': s.coDel.run(utilisateur, op.cle); break;
          case 'ingredientsPerso:put':
            s.ipPut.run(op.cle, utilisateur, v.nom, v.rangement || 'placard', v.rayon || 'div', v.unite || '',
              v.piece ? v.piece[0] : null, v.piece ? v.piece[1] : null, n(v.pieceG), v.entier ? 1 : 0, JSON.stringify(v.alias || []));
            break;
          case 'ingredientsPerso:del': s.ipDel.run(op.cle, utilisateur); break;
          case 'recettesPerso:put': {
            const ex = this.db.prepare('SELECT proprietaire FROM recettes WHERE id = ?').get(op.cle);
            if (ex && ex.proprietaire !== utilisateur) throw new Error('Recette non modifiable : ' + op.cle);
            this.ecrireRecette(Object.assign({}, v, { id: op.cle }), utilisateur);
            break;
          }
          case 'recettesPerso:del': s.rpDel.run(op.cle, utilisateur); break;
          case 'favoris:put': s.faPut.run(utilisateur, op.cle, t); break;
          case 'favoris:del': s.faDel.run(utilisateur, op.cle); break;
          case 'reglages:put': s.rgPut.run(utilisateur, op.cle, JSON.stringify(op.val)); break;
          default: throw new Error('Opération inconnue : ' + op.col + ':' + op.type);
        }
    }
  }

  /* ─── Sauvegarde complète (export / import / migration) ─── */

  exporter(u) {
    const d = this.charger(u);
    return {
      application: 'Frigourmand',
      format: 2,
      exporte_le: maintenant(),
      gardeManger: d.gardeManger,
      ingredientsPerso: d.ingredientsPerso,
      courses: d.courses,
      recettesPerso: d.recettesPerso,
      favoris: d.favoris,
      reglages: d.reglages || {}
    };
  }

  effacer(u) {
    this.transaction(() => this.effacerSansTransaction(u));
  }

  effacerSansTransaction(u) {
    const utilisateur = u || UTILISATEUR_LOCAL;
    for (const table of ['garde_manger', 'courses', 'favoris', 'reglages']) {
      this.db.prepare(`DELETE FROM ${table} WHERE utilisateur_id = ?`).run(utilisateur);
    }
    this.db.prepare('DELETE FROM recettes WHERE proprietaire = ?').run(utilisateur);
    this.db.prepare('DELETE FROM ingredients WHERE proprietaire = ?').run(utilisateur);
  }

  /** Remplace toutes les données de l'utilisateur par celles d'un export (format 1 = ancien fichier JSON, ou 2). */
  importer(etat, u) {
    const utilisateur = u || UTILISATEUR_LOCAL;
    this.assurerUtilisateur(utilisateur);
    const tab = (x) => (Array.isArray(x) ? x : []);
    const ops = [];
    for (const i of tab(etat.ingredientsPerso)) if (i && i.id && i.nom) ops.push({ col: 'ingredientsPerso', type: 'put', cle: i.id, val: i });
    for (const x of tab(etat.gardeManger)) if (x && x.id) ops.push({ col: 'gardeManger', type: 'put', cle: x.id, val: x });
    tab(etat.courses).forEach((c, position) => { if (c && c.cle) ops.push({ col: 'courses', type: 'put', cle: c.cle, val: Object.assign({}, c, { position }) }); });
    for (const r of tab(etat.recettesPerso)) if (r && r.id && r.nom && Array.isArray(r.ingredients)) ops.push({ col: 'recettesPerso', type: 'put', cle: r.id, val: r });
    for (const id of tab(etat.favoris)) if (typeof id === 'string') ops.push({ col: 'favoris', type: 'put', cle: id });
    for (const [cle, val] of Object.entries(etat.reglages || {})) ops.push({ col: 'reglages', type: 'put', cle, val });
    this.transaction(() => {
      this.effacerSansTransaction(utilisateur);
      this.appliquerSansTransaction(ops, utilisateur);
    });
  }
}

/* ─── File d'attente de synchronisation ─── */

Base.prototype.enfiler = function (ops, u) {
  if (!ops.length) return;
  this.db.prepare('INSERT INTO file_attente (utilisateur_id, ops, cree_le) VALUES (?, ?, ?)').run(u, JSON.stringify(ops), maintenant());
};
Base.prototype.premierEnAttente = function (u) {
  const l = this.db.prepare('SELECT id, ops FROM file_attente WHERE utilisateur_id = ? ORDER BY id LIMIT 1').get(u);
  return l ? { id: l.id, ops: JSON.parse(l.ops) } : null;
};
Base.prototype.retirerDeLaFile = function (id) {
  this.db.prepare('DELETE FROM file_attente WHERE id = ?').run(id);
};
Base.prototype.tailleFile = function (u) {
  return this.db.prepare('SELECT COUNT(*) AS n FROM file_attente WHERE utilisateur_id = ?').get(u).n;
};

/** Vrai si l'utilisateur a des données personnelles en local. */
Base.prototype.aDesDonnees = function (u) {
  const n = (sql) => this.db.prepare(sql).get(u).n;
  return n('SELECT COUNT(*) AS n FROM garde_manger WHERE utilisateur_id = ?') + n('SELECT COUNT(*) AS n FROM courses WHERE utilisateur_id = ?')
    + n('SELECT COUNT(*) AS n FROM favoris WHERE utilisateur_id = ?') + n('SELECT COUNT(*) AS n FROM recettes WHERE proprietaire = ?') > 0;
};

/** Transforme un export complet en liste d'opérations (pour tout envoyer au serveur). */
Base.opsDepuisExport = function (e) {
  const ops = [];
  for (const i of e.ingredientsPerso || []) ops.push({ col: 'ingredientsPerso', type: 'put', cle: i.id, val: i });
  for (const r of e.recettesPerso || []) ops.push({ col: 'recettesPerso', type: 'put', cle: r.id, val: r });
  for (const x of e.gardeManger || []) ops.push({ col: 'gardeManger', type: 'put', cle: x.id, val: x });
  (e.courses || []).forEach((c, position) => ops.push({ col: 'courses', type: 'put', cle: c.cle, val: Object.assign({}, c, { position }) }));
  for (const id of e.favoris || []) ops.push({ col: 'favoris', type: 'put', cle: id });
  for (const [cle, val] of Object.entries(e.reglages || {})) ops.push({ col: 'reglages', type: 'put', cle, val });
  return ops;
};

module.exports = { Base, UTILISATEUR_LOCAL };
