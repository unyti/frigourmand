/* Frigourmand — interface principale.
   Vanilla JS, aucune dépendance. Le rendu se fait par vue (chaîne HTML échappée),
   les interactions passent par des attributs data-action délégués sur la page. */
(function () {
  'use strict';

  // Catalogue commun, chargé depuis la base au démarrage.
  let INGREDIENTS = [];
  let RANGEMENTS = [];
  let RAYONS = [];
  let RECETTES_BASE = [];
  let EQUIVALENCES = {};
  let infosAppli = { version: '', donnees: '', installee: false };
  let etatMaj = { etat: 'inactif' };
  let utilisateur = null;
  let etatSynchro = { etat: 'inconnu', enAttente: 0 };
  const bureau = window.frigourmandBureau || null;

  /* ═════════════ Utilitaires ═════════════ */

  const $ = (sel, racine) => (racine || document).querySelector(sel);
  const esc = (s) => String(s == null ? '' : s).replace(/[&<>"']/g, (c) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  })[c]);
  const norm = (s) => String(s || '').toLowerCase().replace(/œ/g, 'oe').replace(/æ/g, 'ae')
    .normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[’'`-]/g, ' ').replace(/\s+/g, ' ').trim();
  const cleAccents = (s) => String(s || '').replace(/\(.*?\)/g, '').toLowerCase().replace(/[’']/g, ' ').replace(/\s+/g, ' ').trim()
    .split(' ').map((m) => m.replace(/[sx]$/, '')).join(' ');
  const cleNom = (s) => norm(String(s || '').replace(/\(.*?\)/g, '')).split(' ').map((m) => m.replace(/[sx]$/, '')).join(' ');
  const uid = () => Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
  const parseNombre = (s) => {
    if (s == null) return null;
    const v = parseFloat(String(s).replace(',', '.').trim());
    return Number.isFinite(v) && v > 0 ? v : null;
  };
  const trierFr = (a, b) => a.localeCompare(b, 'fr', { sensitivity: 'base' });
  const pluriel = (n, s, p) => n + ' ' + (n > 1 ? (p || s + 's') : s);

  function nombreFr(v, decimales) {
    const d = decimales == null ? 2 : decimales;
    const r = Math.round(v * Math.pow(10, d)) / Math.pow(10, d);
    return String(r).replace('.', ',');
  }
  function fraction(v) {
    const ent = Math.floor(v + 1e-9);
    const reste = Math.round((v - ent) * 100) / 100;
    const f = { 0.25: '¼', 0.5: '½', 0.75: '¾' }[reste];
    if (f) return ent ? ent + ' ' + f : f;
    return nombreFr(v, 2);
  }
  function duree(min) {
    if (min < 60) return min + ' min';
    const h = Math.floor(min / 60);
    const m = min % 60;
    return h + ' h' + (m ? ' ' + String(m).padStart(2, '0') : '');
  }

  /* ═════════════ Unités et quantités ═════════════ */

  const UNITES = {
    g: { fam: 'm', k: 1 }, kg: { fam: 'm', k: 1000 },
    ml: { fam: 'v', k: 1 }, cl: { fam: 'v', k: 10 }, l: { fam: 'v', k: 1000 },
    cs: { fam: 'v', k: 15 }, cc: { fam: 'v', k: 5 },
    pc: { fam: 'p', k: 1 }, pincee: { fam: 'x', k: 1 }
  };
  const UNITES_STOCK = [
    ['', 'non suivie'], ['g', 'g'], ['kg', 'kg'], ['ml', 'ml'], ['cl', 'cl'], ['l', 'L'], ['pc', 'pièce(s)']
  ];
  const UNITES_RECETTE = [
    ['g', 'g'], ['kg', 'kg'], ['ml', 'ml'], ['cl', 'cl'], ['l', 'L'], ['cs', 'c. à soupe'],
    ['cc', 'c. à café'], ['pc', 'pièce(s)'], ['pincee', 'pincée'], ['', 'selon goût']
  ];
  const fam = (u) => (UNITES[u] ? UNITES[u].fam : 'x');
  const k = (u) => (UNITES[u] ? UNITES[u].k : 1);

  function convertirFam(v, de, vers, ing) {
    if (de === vers) return v;
    if (de === 'p' && vers === 'm' && ing && ing.pieceG) return v * ing.pieceG;
    if (de === 'm' && vers === 'p' && ing && ing.pieceG) return v / ing.pieceG;
    return null;
  }

  function arrondir(v, pas) { return Math.round(v / pas) * pas; }
  function arrondirHaut(v, pas) { return Math.ceil(v / pas - 1e-9) * pas; }

  /** Adapte une quantité de recette au nombre de personnes, avec des arrondis lisibles. */
  function echelle(q, u, facteur, ing) {
    if (q == null) return null;
    const v = q * facteur;
    switch (u) {
      case 'g': case 'ml': return v < 20 ? Math.max(1, Math.round(v)) : v < 200 ? arrondir(v, 5) : arrondir(v, 10);
      case 'cl': return v < 5 ? Math.max(0.5, arrondir(v, 0.5)) : Math.round(v);
      case 'kg': case 'l': return Math.max(0.05, arrondir(v, 0.05));
      case 'cs': case 'cc': return Math.max(0.5, arrondir(v, 0.5));
      case 'pincee': return Math.max(1, Math.round(v));
      case 'pc':
        if (ing && ing.entier) return Math.max(1, Math.round(v));
        return v < 1 ? Math.max(0.25, arrondir(v, 0.25)) : arrondir(v, 0.5);
      default: return v;
    }
  }

  function motPiece(ing, q) {
    if (!ing || !ing.piece) return '';
    return q > 1 ? ing.piece[1] : ing.piece[0];
  }

  /** Quantité complète, ex. « 1,2 kg », « 2 c. à soupe », « 3 gousses ». */
  function formatQte(q, u, ing) {
    if (q == null) return u === '' || u == null ? '' : 'selon goût';
    switch (u) {
      case 'g': return q >= 1000 ? nombreFr(q / 1000) + ' kg' : nombreFr(q, 0) + ' g';
      case 'kg': return q < 1 ? nombreFr(q * 1000, 0) + ' g' : nombreFr(q) + ' kg';
      case 'ml': return q >= 1000 ? nombreFr(q / 1000) + ' L' : nombreFr(q, 0) + ' ml';
      case 'cl': return q >= 100 ? nombreFr(q / 100) + ' L' : nombreFr(q, 1) + ' cl';
      case 'l': return q < 1 ? nombreFr(q * 100, 0) + ' cl' : nombreFr(q) + ' L';
      case 'cs': return fraction(q) + ' c. à soupe';
      case 'cc': return fraction(q) + ' c. à café';
      case 'pincee': return q > 1 ? q + ' pincées' : '1 pincée';
      case 'pc': {
        const mot = motPiece(ing, q);
        return fraction(q) + (mot ? ' ' + mot : '');
      }
      default: return nombreFr(q);
    }
  }

  function nomCourant(ing) {
    const n = String(ing.nom).replace(/\s*\(.*?\)\s*/g, ' ').trim();
    return n.charAt(0).toLowerCase() + n.slice(1);
  }
  function prefixePiece(ing) {
    // Renvoie la longueur du mot de pièce qui ouvre le nom (« œufs », « pavés de saumon »), sinon 0.
    if (!ing || !ing.piece) return 0;
    const n = norm(nomCourant(ing));
    const [s, p] = ing.piece.map(norm);
    if (n === p || n.startsWith(p + ' ')) return ing.piece[1].length;
    if (n === s || n.startsWith(s + ' ')) return ing.piece[0].length;
    return 0;
  }
  const de = (mot) => (/^[aeiouyàâäéèêëîïôöûüœæ]/i.test(mot) ? 'd’' : 'de ') + mot;

  /** Quantité courte pour une colonne à côté du nom (« 3 » plutôt que « 3 œufs »). */
  function formatQteCourt(q, u, ing) {
    if (u === 'pc' && q != null && prefixePiece(ing)) return fraction(q);
    return formatQte(q, u, ing);
  }

  /** Libellé naturel d'un article : « 2 œufs », « 600 g de blancs de poulet », « 2 gousses d’ail ». */
  function libelleArticle(ing, q, u) {
    const nom = nomCourant(ing);
    if (q == null || !u) return nom;
    if (u === 'pc') {
      const lg = prefixePiece(ing);
      if (lg) return fraction(q) + ' ' + motPiece(ing, q) + nom.slice(lg);
      const mot = motPiece(ing, q);
      return mot ? fraction(q) + ' ' + mot + ' ' + de(nom) : fraction(q) + ' ' + nom;
    }
    return formatQte(q, u, ing) + ' ' + de(nom);
  }

  /* ═════════════ État et persistance ═════════════ */

  const BASIQUES_CANDIDATS = ['sel', 'poivre', 'huile-olive', 'huile', 'sucre', 'farine', 'vinaigre', 'moutarde',
    'bouillon', 'herbes-provence', 'thym', 'laurier', 'beurre', 'lait'];

  /* Apparence gardée sur cet ordinateur : l'écran de connexion garde le thème choisi, même déconnecté. */
  function apparenceLocale() {
    try { return JSON.parse(localStorage.getItem('frigourmand-apparence')) || {}; } catch (_) { return {}; }
  }
  function reglagesDefaut() {
    const a = apparenceLocale();
    return {
      theme: ['systeme', 'clair', 'sombre'].includes(a.theme) ? a.theme : 'systeme',
      texte: ['normal', 'grand', 'tres-grand'].includes(a.texte) ? a.texte : 'normal',
      personnes: 4,
      basiques: INGREDIENTS.filter((i) => i.basique).map((i) => i.id),
      exclus: []
    };
  }
  function etatDefaut() {
    return { gardeManger: [], ingredientsPerso: [], courses: [], recettesPerso: [], favoris: [], reglages: reglagesDefaut() };
  }

  let etat = etatDefaut();

  /** Reçoit le résultat de la base (catalogue + données de l'utilisateur). */
  function initialiserDepuis(d) {
    INGREDIENTS = d.catalogue.ingredients;
    RANGEMENTS = d.catalogue.rangements;
    RAYONS = d.catalogue.rayons;
    RECETTES_BASE = d.catalogue.recettes;
    EQUIVALENCES = d.catalogue.equivalences || {};
    const tab = (x) => (Array.isArray(x) ? x : []);
    etat = {
      gardeManger: tab(d.gardeManger),
      ingredientsPerso: tab(d.ingredientsPerso),
      courses: tab(d.courses),
      // Anciennes recettes perso de type « Soupe » ou « Accompagnement » : désormais des plats.
      recettesPerso: tab(d.recettesPerso).map((r) => (['Entrée', 'Plat', 'Dessert'].includes(r.type) ? r : Object.assign({}, r, { type: 'Plat' }))),
      favoris: tab(d.favoris),
      reglages: Object.assign(reglagesDefaut(), d.reglages || {})
    };
    indexIngredients = null;
    instantane = photographier(etat);
    // Premiers réglages : on les écrit pour qu'ils existent en base.
    if (!d.reglages) sauvegarder();
  }

  /* Persistance par différence : on compare l'état à la dernière photo enregistrée et on
     n'envoie à la base que les lignes ajoutées, modifiées ou supprimées. */
  const COLLECTIONS = { gardeManger: 'id', courses: 'cle', recettesPerso: 'id', ingredientsPerso: 'id' };
  let instantane = null;

  function photographier(e) {
    const p = {};
    for (const [col, cle] of Object.entries(COLLECTIONS)) {
      p[col] = new Map(e[col].map((x, pos) => [x[cle], JSON.stringify(col === 'courses' ? Object.assign({}, x, { position: pos }) : x)]));
    }
    p.favoris = new Set(e.favoris);
    p.reglages = new Map(Object.entries(e.reglages).map(([k2, v]) => [k2, JSON.stringify(v)]));
    return p;
  }

  function differences() {
    const ops = [];
    const avant = instantane;
    const apres = photographier(etat);
    // Ingrédients perso d'abord (ils peuvent être utilisés par le garde-manger ou une recette).
    for (const col of ['ingredientsPerso', 'recettesPerso', 'gardeManger', 'courses']) {
      for (const [cle, val] of apres[col]) if (avant[col].get(cle) !== val) ops.push({ col, type: 'put', cle, val: JSON.parse(val) });
      for (const cle of avant[col].keys()) if (!apres[col].has(cle)) ops.push({ col, type: 'del', cle });
    }
    for (const id of apres.favoris) if (!avant.favoris.has(id)) ops.push({ col: 'favoris', type: 'put', cle: id });
    for (const id of avant.favoris) if (!apres.favoris.has(id)) ops.push({ col: 'favoris', type: 'del', cle: id });
    for (const [cle, val] of apres.reglages) if (avant.reglages.get(cle) !== val) ops.push({ col: 'reglages', type: 'put', cle, val: JSON.parse(val) });
    return { ops, apres };
  }

  let minuteurSauvegarde = null;
  let fileSauvegarde = Promise.resolve();
  function sauvegarder() {
    clearTimeout(minuteurSauvegarde);
    minuteurSauvegarde = setTimeout(enregistrerMaintenant, 150);
  }
  function enregistrerMaintenant() {
    clearTimeout(minuteurSauvegarde);
    if (!bureau || !instantane) return fileSauvegarde;
    const { ops, apres } = differences();
    if (!ops.length) return fileSauvegarde;
    instantane = apres;
    fileSauvegarde = fileSauvegarde.then(() => bureau.appliquer(ops)).catch((e) => {
      console.error(e);
      toast('Impossible d’enregistrer la dernière modification.');
    });
    return fileSauvegarde;
  }

  /** Applique une modification d'état, sauvegarde et redessine. */
  function modifier(fn, options) {
    fn();
    indexIngredients = null;
    sauvegarder();
    rendre(options);
  }

  /* ═════════════ Ingrédients ═════════════ */

  let indexIngredients = null;
  function index() {
    if (indexIngredients) return indexIngredients;
    const parId = new Map();
    const parNom = new Map();
    const tous = INGREDIENTS.concat(etat.ingredientsPerso);
    const recherche = [];
    // Popularité : nombre de recettes qui utilisent l'ingrédient (départage les suggestions).
    const usages = new Map();
    for (const r of RECETTES_BASE.concat(etat.recettesPerso)) for (const [id] of r.ingredients) usages.set(id, (usages.get(id) || 0) + 1);
    // Les noms passent avant les alias : « emmental » désigne l'emmental, pas le fromage râpé.
    for (const i of tous) {
      parId.set(i.id, i);
      for (const c of [cleNom(i.nom), cleNom(i.nom.replace(/\s*\(.*?\)/g, ''))]) if (c && !parNom.has(c)) parNom.set(c, i);
      recherche.push({ i, usages: usages.get(i.id) || 0, noms: [norm(i.nom.replace(/\s*\(.*?\)/g, ''))], alias: (i.alias || []).map(norm).concat(/\(/.test(i.nom) ? [norm(i.nom)] : []) });
    }
    for (const i of tous) for (const a of i.alias || []) { const c = cleNom(a); if (c && !parNom.has(c)) parNom.set(c, i); }
    const parNomAccents = new Map();
    for (const i of tous) { const c = cleAccents(i.nom); if (c && !parNomAccents.has(c)) parNomAccents.set(c, i); }
    for (const i of tous) for (const a of i.alias || []) { const c = cleAccents(a); if (c && !parNomAccents.has(c)) parNomAccents.set(c, i); }
    indexIngredients = { parId, parNom, parNomAccents, recherche, usages };
    return indexIngredients;
  }
  const ing = (id) => index().parId.get(id) || { id, nom: id, rangement: 'placard', rayon: 'div', unite: '' };

  /** Retrouve un ingrédient d'après ce que l'on tape : nom exact, alias, puis début de nom (« curry » → « Curry en poudre »). */
  function ingParNom(nom) {
    const c = cleNom(nom);
    if (!c) return null;
    const { parNom, parNomAccents } = index();
    // Avec les accents d'abord : « pâté » ne doit pas donner « pâtes ».
    const ca = cleAccents(nom);
    if (parNomAccents.has(ca)) return parNomAccents.get(ca);
    if (parNom.has(c)) return parNom.get(c);
    // Sinon, début de nom : on préfère l'ingrédient le plus utilisé, puis le plus court.
    const { usages } = index();
    let meilleur = null;
    let rang = null;
    for (const [cle, i] of parNom) {
      if (!cle.startsWith(c + ' ')) continue;
      const r = [-(usages.get(i.id) || 0), cle.length];
      if (!rang || r[0] < rang[0] || (r[0] === rang[0] && r[1] < rang[1])) { meilleur = i; rang = r; }
    }
    return meilleur;
  }

  /** Suggestions pour la recherche : début du nom, puis début d'un mot, puis contenu ; alias un peu moins prioritaires. */
  function suggestions(texte, max) {
    const q = norm(texte);
    if (!q) return [];
    const res = [];
    for (const { i, noms, alias, usages } of index().recherche) {
      let score = Infinity;
      const noter = (n, bonus) => {
        let sc = Infinity;
        if (n === q) sc = 0;
        else if (n.startsWith(q)) sc = 1;
        else if ((' ' + n).includes(' ' + q)) sc = 2;
        else if (q.length >= 3 && n.includes(q)) sc = 3;
        if (sc + bonus < score) score = sc + bonus;
      };
      noms.forEach((n) => noter(n, 0));
      alias.forEach((n) => noter(n, 0.5));
      if (score < Infinity) res.push({ i, score, usages });
    }
    res.sort((a, b) => a.score - b.score || Math.min(b.usages, 3) - Math.min(a.usages, 3) || a.i.nom.length - b.i.nom.length || trierFr(a.i.nom, b.i.nom));
    return res.slice(0, max || 8).map((r) => r.i);
  }

  function creerIngredientPerso(nom, rangement) {
    const i = { id: 'perso-' + uid(), nom: nom.trim().charAt(0).toUpperCase() + nom.trim().slice(1), rangement: rangement || 'placard', rayon: 'div', unite: '' };
    etat.ingredientsPerso.push(i);
    indexIngredients = null;
    return i;
  }

  const enStock = (id) => etat.gardeManger.find((x) => x.id === id) || null;
  const estBasique = (id) => etat.reglages.basiques.includes(id);
  const dansListe = (id) => etat.courses.some((c) => c.id === id && !c.coche);
  const estFavori = (id) => etat.favoris.includes(id);

  function additionner(q1, u1, q2, u2, i) {
    const v2 = convertirFam(q2 * k(u2), fam(u2), fam(u1), i);
    if (v2 == null || fam(u1) === 'x') return null;
    return Math.round(((q1 * k(u1) + v2) / k(u1)) * 100) / 100;
  }

  function ajouterAuStock(id, qte, unite, rangement) {
    const ex = enStock(id);
    if (!ex) {
      etat.gardeManger.push({ id, qte: qte == null ? null : qte, unite: qte == null ? '' : unite, rangement: rangement || null });
      return 'ajoute';
    }
    if (qte == null) return 'deja';
    if (ex.qte == null) { ex.qte = qte; ex.unite = unite; return 'maj'; }
    const somme = additionner(ex.qte, ex.unite, qte, unite, ing(id));
    if (somme == null) { ex.qte = qte; ex.unite = unite; } else ex.qte = somme;
    return 'maj';
  }

  /* ═════════════ Correspondance recettes / garde-manger ═════════════ */

  const toutesRecettes = () => RECETTES_BASE.concat(etat.recettesPerso);
  /** Ingrédients exclus (allergies, goûts) : les recettes qui en contiennent sont masquées.
      Un ingrédient exclu mais facultatif ne masque pas la recette. */
  const exclus = () => new Set(etat.reglages.exclus || []);
  const exclusDe = (r) => { const e = exclus(); return r.ingredients.filter(([id, , , opt]) => !opt && e.has(id)).map(([id]) => id); };
  const recettesVisibles = () => { const e = exclus(); return e.size ? toutesRecettes().filter((r) => !r.ingredients.some(([id, , , opt]) => !opt && e.has(id))) : toutesRecettes(); };
  const recetteParId = (id) => toutesRecettes().find((r) => r.id === id) || null;

  function comparer(q, u, stock, i) {
    if (!stock) return { etat: 'absent' };
    if (q == null || fam(u) === 'x' || stock.qte == null || !stock.unite) return { etat: 'ok' };
    const besoin = q * k(u);
    const detenu = convertirFam(stock.qte * k(stock.unite), fam(stock.unite), fam(u), i);
    if (detenu == null) return { etat: 'ok' };
    if (detenu >= besoin * 0.98) return { etat: 'ok' };
    return { etat: 'partiel', manque: (besoin - detenu) / k(u), detenu: detenu / k(u) };
  }

  function analyser(recette, personnes) {
    const facteur = personnes / recette.personnes;
    const lignes = recette.ingredients.map(([id, q0, u0, opt]) => {
      const i = ing(id);
      const unite = u0 === undefined ? i.unite : u0;
      const q = echelle(q0, unite, facteur, i);
      const stock = enStock(id);
      const l = { id, ing: i, q, u: unite, opt: !!opt, statut: 'ok', manque: null, detenu: null };
      if (opt) l.statut = stock ? 'ok' : 'facultatif';
      else if (estBasique(id)) l.statut = 'basique';
      else {
        let c = comparer(q, unite, stock, i);
        // Pas assez ou pas du tout : un ingrédient équivalent en stock peut le remplacer (ail en poudre pour l'ail…).
        if (c.etat !== 'ok') {
          for (const sub of EQUIVALENCES[id] || []) {
            const s2 = enStock(sub);
            if (estBasique(sub) || (s2 && comparer(q, unite, s2, ing(sub)).etat === 'ok')) { l.substitut = sub; c = { etat: 'ok' }; break; }
          }
        }
        if (c.etat === 'absent') { l.statut = 'manque'; l.manque = q; }
        else if (c.etat === 'partiel') { l.statut = 'manque'; l.partiel = true; l.manque = c.manque; l.detenu = c.detenu; }
      }
      return l;
    });
    const manquants = lignes.filter((l) => l.statut === 'manque');
    // Gravité : un ingrédient principal qui manque pèse plus qu'une herbe ; un manque partiel pèse moins qu'un manque total.
    let gravite = 0;
    for (const l of manquants) {
      l.poids = poidsIngredient(recette, l.ing, recette.ingredients.findIndex(([id]) => id === l.id));
      let part = 1;
      if (l.partiel && l.q) part = Math.min(1, Math.max(0.25, l.manque / l.q));
      gravite += l.poids * part;
    }
    return { lignes, manquants, nb: manquants.length, gravite, partiels: manquants.filter((l) => l.partiel).length };
  }

  /* Importance d'un ingrédient dans une recette :
     3 = principal (viande, poisson, œufs, ingrédient cité dans le nom de la recette),
     0.4 = aromate ou condiment (herbes, épices, sauces), 1 sinon. */
  const AROMATES = new Set(['persil', 'ciboulette', 'coriandre', 'basilic', 'basilic-thai', 'menthe', 'aneth', 'estragon', 'cerfeuil',
    'thym', 'romarin', 'laurier', 'sauge', 'origan', 'bouquet-garni', 'herbes-provence', 'zeste', 'graines-de-sesame']);
  const PRINCIPAUX = new Set(['oeufs', 'tofu', 'tofu-soyeux']);
  function poidsIngredient(recette, i, position) {
    if (AROMATES.has(i.id) || i.rangement === 'epices') return 0.4;
    if (PRINCIPAUX.has(i.id) || i.rayon === 'bou' || i.rayon === 'poi') return 3;
    const titre = ' ' + cleNom(recette.nom) + ' ';
    const mots = cleNom(i.nom).split(' ').filter((m) => m.length >= 4 && !['sauce', 'pate', 'fraiche', 'frai', 'blanc', 'rouge', 'vert', 'noir'].includes(m));
    if (mots.some((m) => titre.includes(' ' + m + ' '))) return 3;
    // Sinon : selon la part de l'ingrédient dans le poids total de la recette (400 g de tomme pèsent plus qu'un sachet de levure).
    let total = 0;
    let part = 0;
    recette.ingredients.forEach(([id, q, u, opt], n) => {
      if (opt) return;
      const x = ing(id);
      const g = grammes(q, u === undefined ? x.unite : u, x);
      total += g;
      if (n === position) part = g;
    });
    const poids = total ? 0.5 + 4 * (part / total) : 1;
    return Math.min(2.5, Math.max(position === 0 ? 2 : 0.5, poids));
  }
  /** Poids approximatif en grammes, seulement pour comparer l'importance des ingrédients. */
  function grammes(q, u, i) {
    if (q == null) return 0;
    switch (u) {
      case 'g': case 'ml': return q;
      case 'kg': case 'l': return q * 1000;
      case 'cl': return q * 10;
      case 'cs': return q * 15;
      case 'cc': return q * 5;
      case 'pincee': return 0.5;
      case 'pc': return q * (i.pieceG || 50);
      default: return q;
    }
  }

  /** Quantité à acheter pour couvrir un manque (arrondie vers le haut, en unités « de magasin »). */
  function quantiteAchat(l) {
    if (l.manque == null || ['cs', 'cc', 'pincee', ''].includes(l.u)) return { q: null, u: '' };
    const v = l.manque;
    switch (l.u) {
      case 'pc': return { q: Math.max(1, arrondirHaut(v, 1)), u: 'pc' };
      case 'g': case 'ml': return { q: v <= 50 ? arrondirHaut(v, 5) : arrondirHaut(v, 10), u: l.u };
      case 'cl': return { q: arrondirHaut(v, 1), u: 'cl' };
      case 'kg': case 'l': return { q: arrondirHaut(v, 0.1), u: l.u };
      default: return { q: v, u: l.u };
    }
  }

  function ajouterALaListe(id, q, u, source) {
    const i = ing(id);
    const ex = etat.courses.find((c) => c.id === id && !c.coche);
    if (!ex) {
      etat.courses.push({ cle: uid(), id, nom: null, qte: q, unite: q == null ? '' : u, sources: source ? [source] : [], coche: false });
      return;
    }
    if (source && !ex.sources.includes(source)) ex.sources.push(source);
    if (q == null) return;
    if (ex.qte == null) { ex.qte = q; ex.unite = u; return; }
    const s = additionner(ex.qte, ex.unite, q, u, i);
    if (s != null) ex.qte = s;
  }

  function ajouterManquants(recette, personnes) {
    const a = analyser(recette, personnes);
    let n = 0;
    for (const l of a.manquants) {
      const ex = etat.courses.find((c) => c.id === l.id && !c.coche);
      if (ex) {
        // Déjà dans la liste : on note seulement la recette, sans doubler la quantité.
        if (!ex.sources.includes(recette.nom)) ex.sources.push(recette.nom);
        continue;
      }
      const achat = quantiteAchat(l);
      ajouterALaListe(l.id, achat.q, achat.u, recette.nom);
      n++;
    }
    return n;
  }

  /* ═════════════ Interface : état d'affichage ═════════════ */

  const ui = {
    route: 'accueil',
    params: [],
    filtres: { q: '', cuisine: '', type: '', temps: '', personnes: null, favoris: '' },
    ouvert3: false,
    personnesFiche: {},
    erreurs: {},
    brouillon: null,
    auth: null
  };
  const personnesFiltre = () => ui.filtres.personnes || etat.reglages.personnes;

  const ICONES = {
    casserole: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M3 10h18"/><path d="M5 10v7a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3v-7"/><path d="M1.5 12H3M21 12h1.5"/><path d="M9 7c0-1 1-1.5 1-2.5M13.5 7c0-1 1-1.5 1-2.5"/></svg>',
    lune: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z"/></svg>',
    crayon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M4 20h4L19 9l-4-4L4 16v4z"/></svg>',
    croix: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" aria-hidden="true" focusable="false"><path d="M6 6l12 12M18 6L6 18"/></svg>',
    coche: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M5 12l5 5L19 7"/></svg>',
    plus: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" aria-hidden="true" focusable="false"><path d="M12 5v14M5 12h14"/></svg>',
    alerte: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" aria-hidden="true" focusable="false"><path d="M12 6v8M12 18.5v.5"/></svg>',
    chevron: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M9 6l6 6-6 6"/></svg>',
    etoile: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M12 3.5l2.6 5.3 5.8.8-4.2 4.1 1 5.8L12 16.8l-5.2 2.7 1-5.8-4.2-4.1 5.8-.8z"/></svg>',
    etoilePleine: '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M12 3.5l2.6 5.3 5.8.8-4.2 4.1 1 5.8L12 16.8l-5.2 2.7 1-5.8-4.2-4.1 5.8-.8z"/></svg>',
    partiel: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true" focusable="false"><circle cx="12" cy="12" r="8.5"/><path d="M12 3.5a8.5 8.5 0 0 1 0 17z" fill="currentColor"/></svg>',
    retour: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M15 6l-6 6 6 6"/></svg>'
  };

  const COULEUR_RANGEMENT = { frigo: 'bleu', legumes: 'vert', placard: 'ocre', epices: 'rouge', congel: 'violet' };
  const COULEUR_RAYON = { fl: 'vert', bou: 'rouge', poi: 'bleu', cre: 'violet', boul: 'ocre', epi: 'ocre', monde: 'rouge', surg: 'bleu', div: 'gris' };

  function themeEffectif() {
    if (etat.reglages.theme === 'clair' || etat.reglages.theme === 'sombre') return etat.reglages.theme;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'sombre' : 'clair';
  }
  function appliquerApparence() {
    const racine = document.documentElement;
    racine.dataset.theme = etat.reglages.theme;
    racine.dataset.texte = etat.reglages.texte;
    if (bureau) bureau.definirTheme(etat.reglages.theme);
    try { localStorage.setItem('frigourmand-apparence', JSON.stringify({ theme: etat.reglages.theme, texte: etat.reglages.texte })); } catch (_) { /* rien */ }
  }

  /* ═════════════ Vues ═════════════ */

  function texteSynchro() {
    const e = etatSynchro;
    const attente = e.enAttente ? ' · ' + pluriel(e.enAttente, 'modification', 'modifications') + ' en attente' : '';
    switch (e.etat) {
      case 'ok': return ['ok', 'Synchronisé'];
      case 'envoi': return ['envoi', 'Synchronisation…'];
      case 'hors-ligne': return ['hors-ligne', 'Hors ligne' + attente];
      case 'erreur': return ['erreur', 'Synchronisation en échec' + attente];
      default: return ['envoi', 'Connexion au serveur…'];
    }
  }

  function vueEntete() {
    if (!utilisateur) return `<button type="button" class="marque bouton-marque" id="lien-marque" data-action="auth-mode" data-mode="accueil" aria-label="Frigourmand : accueil">${ICONES.casserole}Frigourmand</button>`;
    const [classeSynchro, libelleSynchro] = texteSynchro();
    const onglets = [
      ['accueil', 'Accueil'],
      ['garde-manger', 'Garde-manger'],
      ['recettes', 'Recettes'],
      ['courses', 'Liste de courses' + (etat.courses.length ? ' (' + etat.courses.length + ')' : '')],
      ['mes-recettes', 'Mes recettes']
    ];
    const actif = ui.route === 'recette' ? 'recettes' : ui.route === 'editeur' ? 'mes-recettes' : ui.route;
    const sombre = themeEffectif() === 'sombre';
    return `
      <a href="#accueil" class="marque" id="lien-marque" aria-label="Frigourmand : accueil">${ICONES.casserole}Frigourmand</a>
      <nav class="nav" aria-label="Navigation principale">
        ${onglets.map(([r, l]) => `<a href="#${r}" id="nav-${r}"${actif === r ? ' aria-current="page"' : ''}>${esc(l)}</a>`).join('')}
      </nav>
      <a href="#parametres" class="synchro synchro-${classeSynchro}" id="indicateur-synchro" title="État de la synchronisation"><span class="point" aria-hidden="true"></span>${esc(libelleSynchro)}</a>
      <button type="button" class="bouton-theme" id="bouton-theme" data-action="basculer-theme" aria-pressed="${sombre}">${ICONES.lune}Mode sombre</button>
      <a href="#parametres" id="nav-parametres" class="lien-entete"${actif === 'parametres' ? ' aria-current="page"' : ''}>Paramètres</a>`;
  }

  function optionsSelect(liste, valeur) {
    return liste.map(([v, l]) => `<option value="${esc(v)}"${String(v) === String(valeur) ? ' selected' : ''}>${esc(l)}</option>`).join('');
  }
  /** Champ de recherche d'ingrédient accessible (motif « combobox » ARIA 1.2). */
  function champRecherche(id, options) {
    const o = options || {};
    const decrit = ['aide-recherche'].concat(ui.erreurs[o.cleErreur || id] ? [(o.cleErreur || id) + '-err'] : []).join(' ');
    return `<div class="recherche${o.enLigne ? ' en-ligne' : ''}">
      <input class="saisie" id="${id}" role="combobox" aria-autocomplete="list" aria-expanded="false" aria-controls="${id}-liste"
        aria-describedby="${decrit}" autocomplete="off" spellcheck="false" data-recherche="${o.mode || 'ingredient'}"
        ${o.attrs || ''} value="${esc(o.valeur || '')}" placeholder="${esc(o.placeholder || '')}"${ui.erreurs[o.cleErreur || id] ? ' aria-invalid="true"' : ''}>
      <ul class="suggestions" id="${id}-liste" role="listbox" aria-label="Suggestions d’ingrédients" hidden></ul>
    </div>`;
  }
  function erreurChamp(cle) {
    return ui.erreurs[cle] ? `<p class="erreur" id="${cle}-err">${esc(ui.erreurs[cle])}</p>` : '';
  }
  const ariaErreur = (cle) => (ui.erreurs[cle] ? ` aria-invalid="true" aria-describedby="${cle}-err"` : '');

  /* ─── Connexion, inscription, codes ─── */

  const RE_EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function champAuth(id, libelle, type, options) {
    const o = options || {};
    const a = ui.auth;
    const err = a.erreursChamps[id];
    const aide = o.aide ? `<p class="aide aide-champ" id="${id}-aide">${esc(o.aide)}</p>` : '';
    const decrit = [o.aide ? id + '-aide' : '', err ? id + '-err' : ''].filter(Boolean).join(' ');
    const saisie = `<input class="saisie" id="${id}" type="${type}" data-auth="${id}" value="${esc(a.valeurs[id] || '')}"
      autocomplete="${o.autocomplete || 'off'}"${o.inputmode ? ` inputmode="${o.inputmode}"` : ''}${o.requis === false ? '' : ' required'}
      ${decrit ? `aria-describedby="${decrit}"` : ''}${err ? ' aria-invalid="true"' : ''}${o.maxlength ? ` maxlength="${o.maxlength}"` : ''}>`;
    return `<div class="champ">
      <label class="etiquette" for="${id}">${esc(libelle)}${o.requis === false ? ' <span class="facultatif">(facultatif)</span>' : ''}</label>
      ${type === 'password' ? `<div class="mot-de-passe">${saisie}<button type="button" class="bouton-lien bouton-voir" data-action="auth-voir" data-cible="${id}" aria-pressed="false" aria-label="Afficher le mot de passe">Afficher</button></div>` : saisie}
      ${aide}
      ${err ? `<p class="erreur" id="${id}-err">${esc(err)}</p>` : ''}
    </div>`;
  }

  /* ─── Cartes de recettes (accueil, présentation) ─── */

  const ILLU = window.FrigourmandIllustrations;
  const TEINTE_TYPE = { 'Entrée': 'vert', Plat: 'ocre', Dessert: 'violet' };

  function carteRecette(r, o) {
    const opt = o || {};
    const titre = opt.lien === false ? esc(r.nom) : `<a href="#recette/${esc(r.id)}${opt.suffixe || ''}" id="${opt.prefixe || 'carte'}-${esc(r.id)}">${esc(r.nom)}</a>`;
    return `<li class="carte-recette">
        <div class="carte-illu teinte-${TEINTE_TYPE[r.type] || 'ocre'}">${ILLU.pourRecette(r, ing)}</div>
        <div class="carte-corps">
          <h3 class="carte-titre">${titre}</h3>
          <p class="carte-meta">${esc(r.type)} · ${esc(duree(r.minutes))}${estFavori(r.id) ? ' · <span class="favori-texte">favori</span>' : ''}</p>
          ${opt.extra || ''}
        </div>
      </li>`;
  }

  /* ─── Présentation (avant connexion) ─── */

  const DEMO_INGREDIENTS = ['oeufs', 'lait', 'beurre', 'farine', 'pates', 'lardons', 'creme-fraiche', 'fromage-rape',
    'pommes-de-terre', 'oignons', 'ail', 'tomates', 'poulet', 'riz', 'champignons', 'chocolat-noir'];
  const DEMO_DEPART = ['oeufs', 'lait', 'beurre', 'farine', 'pates', 'lardons', 'creme-fraiche', 'fromage-rape', 'pommes-de-terre', 'oignons', 'tomates'];

  function analyseDemo() {
    const dispo = new Set(ui.demo);
    const basiques = new Set(reglagesDefaut().basiques);
    return RECETTES_BASE.map((r) => ({
      r,
      manque: r.ingredients.filter(([id, , , opt]) => !opt && !dispo.has(id) && !basiques.has(id)).map(([id]) => ing(id).nom)
    }));
  }

  function vueVitrine() {
    if (!ui.demo) ui.demo = DEMO_DEPART.slice();
    const a = analyseDemo();
    const ok = a.filter((x) => !x.manque.length).sort((x, y) => x.r.minutes - y.r.minutes);
    const un = a.filter((x) => x.manque.length === 1);
    const parType = (t) => RECETTES_BASE.filter((r) => r.type === t).length;
    const cuisines = [...new Set(RECETTES_BASE.map((r) => r.cuisine))].sort(trierFr);
    return `
      <div class="vitrine">
        <section class="vitrine-haut" aria-labelledby="auth-titre">
          <div class="vitrine-intro">
            <p class="surtitre">Cuisine du quotidien, sans gaspiller</p>
            <h1 class="titre titre-vitrine" id="auth-titre" tabindex="-1">Ouvre ton frigo, Frigourmand trouve la recette.</h1>
            <p class="vitrine-texte">Tu notes ce que tu as. Frigourmand te montre ce que tu peux cuisiner tout de suite, ce qu’il te manque pour le reste, et prépare ta liste de courses.</p>
            <div class="barre-actions">
              <button type="button" class="bouton" id="vitrine-inscription" data-action="auth-mode" data-mode="inscription">Créer un compte gratuit</button>
              <button type="button" class="bouton-secondaire" id="vitrine-connexion" data-action="auth-mode" data-mode="connexion">J’ai déjà un compte</button>
            </div>
          </div>
          <div class="vitrine-image">${ILLU.frigo()}</div>
        </section>

        <section class="panneau vitrine-demo" aria-labelledby="demo-titre">
          <div class="demo-choix">
            <h2 id="demo-titre" class="titre-section">Essaie : qu’as-tu dans ta cuisine ?</h2>
            <p class="aide">Touche les ingrédients pour les ajouter ou les retirer.</p>
            <div class="puces" role="group" aria-label="Ingrédients de l’essai">
              ${DEMO_INGREDIENTS.map((id) => `<button type="button" class="puce" id="demo-${id}" data-action="demo-basculer" data-id="${id}" aria-pressed="${ui.demo.includes(id)}">${esc(ing(id).nom.replace(/\s*\(.*?\)/, ''))}</button>`).join('')}
            </div>
          </div>
          <div class="demo-resultat" aria-live="polite">
            <p class="demo-compte"><strong>${ok.length}</strong> ${ok.length > 1 ? 'recettes réalisables' : 'recette réalisable'}
              <span class="note-inline">et ${un.length} où il ne manque qu’un ingrédient</span></p>
            ${ok.length ? `<ul class="cartes cartes-demo">${ok.slice(0, 6).map(({ r }) => carteRecette(r, { lien: false })).join('')}</ul>`
              : '<p class="aide">Ajoute quelques ingrédients pour voir des recettes.</p>'}
          </div>
        </section>

        <section class="vitrine-etapes" aria-labelledby="vitrine-comment">
          <h2 id="vitrine-comment" class="titre-section">Comment ça marche</h2>
          <ol>
            <li><div class="etape-illu">${ILLU.plat('salade')}</div><h3>Note ce que tu as</h3><p>Frigo, placards, congélateur, avec la quantité si tu veux.</p></li>
            <li><div class="etape-illu">${ILLU.plat('pates')}</div><h3>Choisis une recette</h3><p>Réalisables d’abord, puis celles où il manque peu de chose.</p></li>
            <li><div class="etape-illu">${ILLU.plat('gateau')}</div><h3>Complète tes courses</h3><p>Ce qui manque va dans ta liste, en bonnes quantités.</p></li>
          </ol>
        </section>

        <section class="vitrine-catalogue" aria-labelledby="vitrine-cat">
          <h2 id="vitrine-cat" class="titre-section">${RECETTES_BASE.length} recettes vérifiées</h2>
          <ul class="chiffres-types">
            <li class="teinte-vert"><strong>${parType('Entrée')}</strong> entrées</li>
            <li class="teinte-ocre"><strong>${parType('Plat')}</strong> plats</li>
            <li class="teinte-violet"><strong>${parType('Dessert')}</strong> desserts</li>
          </ul>
          <p class="note">Cuisines : ${esc(cuisines.join(', '))}.</p>
          <p class="note">Tes données sont synchronisées entre tes appareils. L’appli se règle en mode sombre ou en grand texte, et se pilote entièrement au clavier.</p>
        </section>
      </div>`;
  }

  function vueAuth() {
    const a = ui.auth;
    if (a.mode === 'accueil') return vueVitrine();
    const bouton = (texte, enCours) => `<button type="submit" class="bouton bouton-plein" id="auth-valider"${a.occupe ? ' disabled' : ''}>${esc(a.occupe ? enCours : texte)}</button>`;
    const lien = (mode, texte, id) => `<button type="button" class="bouton-lien" id="${id}" data-action="auth-mode" data-mode="${mode}">${esc(texte)}</button>`;
    const google = `<button type="button" class="bouton-secondaire bouton-google" id="auth-google" data-action="auth-google"${a.occupe ? ' disabled' : ''}>Continuer avec Google</button>
      <p class="separateur-auth"><span>ou avec ton adresse e-mail</span></p>`;
    const rester = `<div class="choix"><input type="checkbox" class="case" id="auth-rester" data-action="auth-rester"${a.rester ? ' checked' : ''}><label for="auth-rester">Rester connecté sur cet ordinateur</label></div>`;
    const MODES = {
      connexion: {
        titre: 'Connexion',
        intro: 'Connecte-toi pour retrouver ton garde-manger, tes listes et tes recettes sur tous tes appareils.',
        avant: google,
        corps: champAuth('auth-email', 'Adresse e-mail', 'email', { autocomplete: 'email' })
          + champAuth('auth-mdp', 'Mot de passe', 'password', { autocomplete: 'current-password' })
          + rester
          + bouton('Se connecter', 'Connexion…'),
        liens: lien('oubli', 'Mot de passe oublié ?', 'lien-oubli') + lien('inscription', 'Pas encore de compte ? Créer un compte', 'lien-inscription') + lien('accueil', 'Découvrir Frigourmand', 'lien-accueil')
      },
      inscription: {
        titre: 'Créer un compte',
        intro: 'Ton compte permet de synchroniser Frigourmand entre cet ordinateur, le futur site et d’autres appareils.',
        avant: google,
        corps: champAuth('auth-nom', 'Prénom', 'text', { autocomplete: 'given-name', requis: false })
          + champAuth('auth-email', 'Adresse e-mail', 'email', { autocomplete: 'email' })
          + champAuth('auth-mdp', 'Mot de passe', 'password', { autocomplete: 'new-password', aide: '8 caractères minimum.' })
          + bouton('Créer mon compte', 'Création…'),
        liens: lien('connexion', 'J’ai déjà un compte', 'lien-connexion') + lien('accueil', 'Découvrir Frigourmand', 'lien-accueil')
      },
      code: {
        titre: 'Confirme ton adresse',
        intro: 'Un code de confirmation a été envoyé à ' + (a.valeurs['auth-email'] || 'ton adresse') + '. Saisis-le ci-dessous.',
        corps: champAuth('auth-code', 'Code reçu par e-mail', 'text', { autocomplete: 'one-time-code', inputmode: 'numeric', maxlength: 10 })
          + bouton('Valider', 'Vérification…'),
        liens: `<button type="button" class="bouton-lien" id="lien-renvoyer" data-action="auth-renvoyer"${a.occupe ? ' disabled' : ''}>Renvoyer le code</button>`
          + lien('inscription', 'Changer d’adresse', 'lien-changer')
      },
      oubli: {
        titre: 'Mot de passe oublié',
        intro: 'Indique ton adresse : tu recevras un code pour choisir un nouveau mot de passe.',
        corps: champAuth('auth-email', 'Adresse e-mail', 'email', { autocomplete: 'email' }) + bouton('Recevoir un code', 'Envoi…'),
        liens: lien('connexion', 'Retour à la connexion', 'lien-connexion')
      },
      reinit: {
        titre: 'Nouveau mot de passe',
        intro: 'Saisis le code reçu à ' + (a.valeurs['auth-email'] || 'ton adresse') + ' et choisis un nouveau mot de passe.',
        corps: champAuth('auth-code', 'Code reçu par e-mail', 'text', { autocomplete: 'one-time-code', inputmode: 'numeric', maxlength: 10 })
          + champAuth('auth-mdp', 'Nouveau mot de passe', 'password', { autocomplete: 'new-password', aide: '8 caractères minimum.' })
          + bouton('Changer le mot de passe', 'Enregistrement…'),
        liens: lien('oubli', 'Renvoyer un code', 'lien-oubli') + lien('connexion', 'Retour à la connexion', 'lien-connexion')
      },
      google: {
        titre: 'Connexion avec Google',
        intro: 'La page de connexion Google s’est ouverte dans ton navigateur. Choisis ton compte, puis reviens ici : Frigourmand continuera tout seul.',
        corps: '',
        liens: `<button type="button" class="bouton-lien" id="auth-annuler-google" data-action="auth-annuler-google">Annuler et revenir à la connexion</button>`
      },
      chargement: { titre: 'Un instant…', intro: 'Synchronisation de tes données.', corps: '', liens: '' }
    };
    const m = MODES[a.mode];
    return `
      <div class="auth">
        <section class="panneau auth-carte" aria-labelledby="auth-titre">
          <h1 class="titre" id="auth-titre" tabindex="-1">${esc(m.titre)}</h1>
          <p class="auth-intro">${esc(m.intro)}</p>
          ${a.erreur ? `<div class="alerte" role="alert" id="auth-erreur" tabindex="-1">${esc(a.erreur)}</div>` : ''}
          ${a.message ? `<p class="info" role="status" id="auth-message">${esc(a.message)}</p>` : ''}
          ${m.avant || ''}
          ${m.corps ? `<form class="auth-formulaire" data-action="auth-${a.mode}" novalidate>${m.corps}</form>` : ''}
          ${m.liens ? `<div class="auth-liens">${m.liens}</div>` : ''}
        </section>
      </div>`;
  }

  function changerModeAuth(mode, message) {
    Object.assign(ui.auth, { mode, erreur: null, message: message || null, erreursChamps: {}, occupe: false });
    const premier = { accueil: true, connexion: ui.auth.valeurs['auth-email'] ? 'auth-mdp' : 'auth-email', inscription: 'auth-nom', code: 'auth-code', oubli: 'auth-email', reinit: 'auth-code' }[mode];
    rendre({ focus: premier || true });
  }

  function validerAuth(champs) {
    const v = ui.auth.valeurs;
    const e = {};
    for (const c of champs) {
      const val = (v[c] || '').trim();
      if (c === 'auth-email' && !RE_EMAIL.test(val)) e[c] = 'Indique une adresse e-mail valide, par exemple nom@exemple.fr.';
      if (c === 'auth-mdp' && ui.auth.mode !== 'connexion' && (v[c] || '').length < 8) e[c] = 'Le mot de passe doit contenir au moins 8 caractères.';
      if (c === 'auth-mdp' && ui.auth.mode === 'connexion' && !v[c]) e[c] = 'Indique ton mot de passe.';
      if (c === 'auth-code' && !/^\d{6,10}$/.test(val.replace(/\s/g, ''))) e[c] = 'Le code est composé de chiffres (6 en général).';
    }
    ui.auth.erreursChamps = e;
    ui.auth.erreur = null;
    if (Object.keys(e).length) {
      rendre({ focus: Object.keys(e)[0] });
      return false;
    }
    return true;
  }

  async function executerAuth(appel, suite) {
    ui.auth.occupe = true;
    ui.auth.message = null;
    rendre();
    const r = await appel();
    ui.auth.occupe = false;
    if (r && r.erreur) {
      if (r.code === 'email_not_confirmed') { changerModeAuth('code', r.erreur); return; }
      ui.auth.erreur = r.erreur;
      rendre({ focus: 'auth-erreur' });
      return;
    }
    await suite(r || {});
  }

  async function terminerConnexion(u) {
    ui.auth.mode = 'chargement';
    ui.auth.erreur = null;
    rendre({ focus: true });
    try {
      const r = await bureau.compte.ouvrir(u);
      utilisateur = r.utilisateur;
      etatSynchro = r.synchro || etatSynchro;
      initialiserDepuis(r.donnees);
      appliquerApparence();
      ui.auth = etatAuthInitial();
      if (location.hash && location.hash !== '#accueil') location.hash = '#accueil'; else lireRoute();
      toast('Bienvenue' + (utilisateur.nom ? ' ' + utilisateur.nom : '') + ' !');
    } catch (e) {
      console.error(e);
      ui.auth.mode = 'connexion';
      ui.auth.erreur = 'Impossible d’ouvrir tes données : ' + e.message;
      rendre({ focus: 'auth-erreur' });
    }
  }

  function actionAuth(mode) {
    const v = ui.auth.valeurs;
    const email = (v['auth-email'] || '').trim();
    const code = (v['auth-code'] || '').replace(/\s/g, '');
    switch (mode) {
      case 'connexion':
        if (!validerAuth(['auth-email', 'auth-mdp'])) return;
        executerAuth(() => bureau.compte.connecter(email, v['auth-mdp'], ui.auth.rester), (r) => terminerConnexion(r.utilisateur));
        break;
      case 'inscription':
        if (!validerAuth(['auth-email', 'auth-mdp'])) return;
        executerAuth(() => bureau.compte.inscrire(email, v['auth-mdp'], (v['auth-nom'] || '').trim()), (r) => {
          if (r.utilisateur) terminerConnexion(r.utilisateur);
          else changerModeAuth('code', 'Compte créé. Vérifie ta boîte mail (et les indésirables).');
        });
        break;
      case 'code':
        if (!validerAuth(['auth-code'])) return;
        executerAuth(() => bureau.compte.confirmer(email, code), (r) => terminerConnexion(r.utilisateur));
        break;
      case 'oubli':
        if (!validerAuth(['auth-email'])) return;
        executerAuth(() => bureau.compte.demanderReinitialisation(email), () => changerModeAuth('reinit', 'Si un compte existe pour cette adresse, un code vient d’être envoyé.'));
        break;
      case 'reinit':
        if (!validerAuth(['auth-code', 'auth-mdp'])) return;
        executerAuth(() => bureau.compte.reinitialiser(email, code, v['auth-mdp']), (r) => terminerConnexion(r.utilisateur));
        break;
      default: break;
    }
  }

  let derniereAdresse = '';
  const etatAuthInitial = () => ({
    mode: 'accueil', valeurs: derniereAdresse ? { 'auth-email': derniereAdresse } : {},
    erreursChamps: {}, erreur: null, message: null, occupe: false, rester: true
  });

  async function connexionGoogle() {
    const depuis = ui.auth.mode;
    Object.assign(ui.auth, { mode: 'google', erreur: null, message: null, erreursChamps: {} });
    rendre({ focus: true });
    const r = await bureau.compte.google(ui.auth.rester);
    if (r.annule) return;
    if (r.erreur) {
      Object.assign(ui.auth, { mode: depuis === 'inscription' ? 'inscription' : 'connexion', erreur: r.erreur });
      rendre({ focus: 'auth-erreur' });
      return;
    }
    terminerConnexion(r.utilisateur);
  }

  /* ─── Accueil (connecté) ─── */

  function momentDuJour() {
    const h = new Date().getHours();
    if (h >= 5 && h < 11) return { libelle: 'Idée pour aujourd’hui', type: null };
    if (h >= 11 && h < 15) return { libelle: 'Idée pour ce midi', type: 'Plat' };
    if (h >= 15 && h < 18) return { libelle: 'Idée pour le goûter', type: 'Dessert' };
    return { libelle: 'Idée pour ce soir', type: 'Plat' };
  }
  /** Ordre qui change chaque jour (mais reste stable dans la journée). */
  function melangeDuJour(liste) {
    const jour = new Date().toISOString().slice(0, 10);
    const h = (s) => { let x = 0; for (const c of jour + s) x = (x * 31 + c.charCodeAt(0)) | 0; return x; };
    return liste.slice().sort((a, b) => h(a.r.id) - h(b.r.id));
  }

  function vueAccueil() {
    const pers = personnesFiltre();
    const analyses = recettesVisibles().map((r) => ({ r, a: analyser(r, pers) }));
    const realisables = analyses.filter((x) => x.a.nb === 0);
    for (const x of analyses) x.p = maxPersonnes(x.r, pers, x.a);
    const reduits = analyses.filter((x) => x.p);
    const presque = analyses.filter((x) => x.a.nb === 1 && !x.p).sort((x, y) => x.a.gravite - y.a.gravite || x.r.minutes - y.r.minutes);
    const favoris = analyses.filter((x) => estFavori(x.r.id)).sort((x, y) => x.a.nb - y.a.nb);
    const aAcheter = etat.courses.filter((c) => !c.coche).length;
    const moment = momentDuJour();

    // Idée du moment : une recette réalisable (du bon type si possible), sinon une presque prête.
    let pool = realisables.filter((x) => !moment.type || x.r.type === moment.type);
    if (!pool.length) pool = realisables;
    if (!pool.length) pool = reduits;
    if (!pool.length) pool = presque.slice(0, 12);
    pool = melangeDuJour(pool).sort((x, y) => estFavori(y.r.id) - estFavori(x.r.id));
    const idee = pool.length ? pool[(ui.idee || 0) % pool.length] : null;

    const filtre = ui.filtreAccueil || '';
    const affichees = melangeDuJour(realisables).concat(melangeDuJour(reduits)).filter((x) => !filtre || x.r.type === filtre);
    const manques = (a) => a.manquants.map((l) => `<span class="pastille ${l.partiel ? 'partiel' : 'manque'}">${l.partiel ? ICONES.partiel : ICONES.alerte}${esc(l.ing.nom.replace(/\s*\(.*?\)/, ''))}${l.partiel ? ' (pas assez)' : ''}</span>`).join('');
    const ligneResume = (href, id, n, texte) => `<li><a href="${href}" id="${id}"><strong>${n}</strong> ${esc(texte)}</a></li>`;
    const segments = [['', 'Tout'], ['Entrée', 'Entrées'], ['Plat', 'Plats'], ['Dessert', 'Desserts']];

    return `
      <h1 class="sr-only" tabindex="-1">Accueil</h1>
      <div class="accueil-haut">
        ${idee ? `
        <section class="panneau idee" aria-labelledby="idee-titre">
          <div class="idee-illu teinte-${TEINTE_TYPE[idee.r.type] || 'ocre'}">${ILLU.pourRecette(idee.r, ing)}</div>
          <div class="idee-corps">
            <p class="surtitre">${esc(moment.libelle)}${utilisateur && utilisateur.nom ? ', ' + esc(utilisateur.nom) : ''}</p>
            <h2 class="idee-titre" id="idee-titre">${esc(idee.r.nom)}</h2>
            <p class="carte-meta">${esc(idee.r.type)} · ${esc(duree(idee.r.minutes))} · ${esc(idee.r.difficulte)} · ${esc(idee.r.cuisine)}</p>
            <p class="idee-etat">${idee.p ? `<span class="pastille ok">${ICONES.coche}Tu as tout pour ${pluriel(idee.p, 'personne')}</span>` : idee.a.nb ? `Il te manque : ${manques(idee.a)}` : `<span class="pastille ok">${ICONES.coche}Tu as tout ce qu’il faut</span>`}</p>
            <div class="barre-actions">
              <a class="bouton" href="#recette/${esc(idee.r.id)}${idee.p ? '/' + idee.p : ''}" id="idee-voir">Voir la recette</a>
              ${pool.length > 1 ? '<button type="button" class="bouton-secondaire" id="idee-autre" data-action="idee-autre">Une autre idée</button>' : ''}
            </div>
          </div>
        </section>` : `
        <section class="panneau idee" aria-labelledby="idee-titre">
          <div class="idee-illu teinte-bleu">${ILLU.frigo()}</div>
          <div class="idee-corps">
            <p class="surtitre">Pour commencer</p>
            <h2 class="idee-titre" id="idee-titre">Remplis ton garde-manger</h2>
            <p>Ajoute ce que tu as : les idées de recettes apparaîtront ici.</p>
            <div class="barre-actions"><a class="bouton" href="#garde-manger" id="acc-remplir">Ouvrir le garde-manger</a></div>
          </div>
        </section>`}
        <aside class="panneau resume" aria-labelledby="resume-titre">
          <h2 id="resume-titre" class="titre-section">Ta cuisine</h2>
          <ul class="liste-resume">
            ${ligneResume('#garde-manger', 'res-gm', etat.gardeManger.length, etat.gardeManger.length > 1 ? 'ingrédients en stock' : 'ingrédient en stock')}
            ${ligneResume('#recettes', 'res-rec', realisables.length, realisables.length > 1 ? 'recettes réalisables' : 'recette réalisable')}
            ${ligneResume('#courses', 'res-courses', aAcheter, aAcheter > 1 ? 'articles à acheter' : 'article à acheter')}
            ${ligneResume('#mes-recettes', 'res-fav', etat.favoris.length, etat.favoris.length > 1 ? 'favoris' : 'favori')}
          </ul>
          ${etat.gardeManger.length < 6 ? `
            <h3 class="titre-bloc">Ajout rapide</h3>
            <div class="puces">${DEMO_INGREDIENTS.filter((id) => !enStock(id)).slice(0, 8).map((id) => `<button type="button" class="puce" id="rapide-${id}" data-action="ajout-rapide" data-id="${id}">+ ${esc(ing(id).nom.replace(/\s*\(.*?\)/, ''))}</button>`).join('')}</div>` : ''}
        </aside>
      </div>

      ${realisables.length + reduits.length ? `
      <section class="bloc-accueil" aria-labelledby="acc-maintenant">
        <div class="bloc-tete">
          <h2 id="acc-maintenant" class="titre-section">Tu peux cuisiner maintenant</h2>
          <div class="segments" role="group" aria-label="Type de recette">
            ${segments.map(([v, l]) => `<button type="button" class="segment" id="seg-${v || 'tout'}" data-action="filtre-accueil" data-type="${v}" aria-pressed="${filtre === v}">${l}</button>`).join('')}
          </div>
        </div>
        ${affichees.length ? `<ul class="cartes">${affichees.slice(0, 8).map((x) => carteRecette(x.r, {
          prefixe: 'acc-r', suffixe: x.p ? '/' + x.p : '',
          extra: x.p ? `<p class="carte-manque"><span class="pastille ok">${ICONES.coche}pour ${pluriel(x.p, 'personne')}</span></p>` : ''
        })).join('')}</ul>` : '<p class="aide">Aucune recette de ce type pour l’instant.</p>'}
        ${realisables.length > 8 ? `<p><a href="#recettes" id="acc-toutes">Voir les ${realisables.length} recettes réalisables</a></p>` : ''}
      </section>` : ''}

      ${presque.length ? `
      <section class="bloc-accueil" aria-labelledby="acc-presque">
        <h2 id="acc-presque" class="titre-section">Il ne manque presque rien</h2>
        <ul class="cartes">${presque.slice(0, 4).map((x) => carteRecette(x.r, {
          prefixe: 'acc-p',
          extra: `<p class="carte-manque">${manques(x.a)}</p>${x.a.manquants.every((l) => dansListe(l.id))
            ? `<span class="deja">${ICONES.coche}Dans la liste</span>`
            : `<button type="button" class="bouton-secondaire bouton-petit" id="acc-aj-${esc(x.r.id)}" data-action="liste-ajouter-recette" data-id="${esc(x.r.id)}" aria-label="Ajouter à la liste ce qui manque pour ${esc(x.r.nom)}">Ajouter à la liste</button>`}`
        })).join('')}</ul>
      </section>` : ''}

      ${favoris.length ? `
      <section class="bloc-accueil" aria-labelledby="acc-favoris">
        <h2 id="acc-favoris" class="titre-section">Tes favoris</h2>
        <ul class="cartes">${favoris.slice(0, 4).map((x) => carteRecette(x.r, {
          prefixe: 'acc-f',
          extra: x.a.nb ? `<p class="carte-manque">${manques(x.a)}</p>` : `<p class="carte-manque"><span class="pastille ok">${ICONES.coche}réalisable</span></p>`
        })).join('')}</ul>
      </section>` : ''}`;
  }

  /* ─── Garde-manger ─── */

  function vueGardeManger() {
    const items = etat.gardeManger.map((x) => ({ x, i: ing(x.id) }));
    const groupes = RANGEMENTS.map((r) => ({
      r,
      items: items.filter(({ x, i }) => (x.rangement || i.rangement) === r.id).sort((a, b) => trierFr(a.i.nom, b.i.nom))
    })).filter((g) => g.items.length);
    const basiques = etat.reglages.basiques.map((id) => ing(id).nom);

    const pers = personnesFiltre();
    const realisables = items.length ? recettesVisibles().filter((r) => analyser(r, pers).nb === 0).length : 0;

    return `
      <div class="titre-page">
        <h1 class="titre" tabindex="-1">Garde-manger</h1>
        <p class="sous-titre">${items.length ? pluriel(items.length, 'ingrédient') : 'Vide pour l’instant'}</p>
      </div>

      <div class="mise-deux-colonnes">
        <aside class="colonne-laterale">
          <form class="panneau formulaire-lateral" data-action="gm-ajouter" novalidate aria-labelledby="gm-titre-ajout">
            <h2 id="gm-titre-ajout" class="titre-bloc">Ajouter un ingrédient</h2>
            <div class="champ">
              <label class="etiquette" for="gm-nom">Ingrédient</label>
              ${champRecherche('gm-nom', { placeholder: 'ex. œufs, tomates, crème…', enLigne: true })}
              ${erreurChamp('gm-nom')}
            </div>
            <div class="rangee-champs">
              <div class="champ">
                <label class="etiquette" for="gm-qte">Quantité</label>
                <input class="saisie" id="gm-qte" inputmode="decimal" autocomplete="off" placeholder="facultatif"${ariaErreur('gm-qte')}>
              </div>
              <div class="champ">
                <label class="etiquette" for="gm-unite">Unité</label>
                <select class="saisie" id="gm-unite">${optionsSelect(UNITES_STOCK, 'g')}</select>
              </div>
            </div>
            ${erreurChamp('gm-qte')}
            <div class="champ">
              <label class="etiquette" for="gm-rangement">Rangé dans</label>
              <select class="saisie" id="gm-rangement">${optionsSelect(RANGEMENTS.map((r) => [r.id, r.nom]), 'frigo')}</select>
            </div>
            <button type="submit" class="bouton bouton-plein" id="gm-bouton-ajouter">Ajouter</button>
          </form>
          ${items.length ? `<p class="encart-info"><strong>${pluriel(realisables, 'recette réalisable', 'recettes réalisables')}</strong> avec ce que tu as, pour ${pluriel(pers, 'personne')}. <a href="#recettes">Voir les recettes</a></p>` : ''}
        </aside>

        <div class="colonne-principale">
        ${groupes.length ? `<div class="colonnes-rangements">${groupes.map(({ r, items: liste }) => `
          <section class="panneau bloc-rangement" aria-labelledby="gm-g-${r.id}">
            <div class="panneau-tete teinte-${COULEUR_RANGEMENT[r.id]}">
              <span class="marqueur" aria-hidden="true"></span>
              <h2 id="gm-g-${r.id}">${esc(r.nom)}</h2>
              <span class="compte">${liste.length}</span>
            </div>
            <ul class="lignes">
              ${liste.map(({ x, i }) => `
                <li class="ligne">
                  <span class="ligne-nom">${esc(i.nom)}</span>
                  <span class="ligne-qte">${esc(x.qte == null ? '' : formatQteCourt(x.qte, x.unite, i))}</span>
                  <button type="button" class="bouton-icone" id="gm-mod-${esc(x.id)}" data-action="gm-modifier" data-id="${esc(x.id)}" aria-label="Modifier ${esc(i.nom)}">${ICONES.crayon}</button>
                  <button type="button" class="bouton-icone" id="gm-sup-${esc(x.id)}" data-action="gm-retirer" data-id="${esc(x.id)}" aria-label="Retirer ${esc(i.nom)} du garde-manger">${ICONES.croix}</button>
                </li>`).join('')}
            </ul>
          </section>`).join('')}</div>` : `
          <div class="vide">
            <h2>Ton garde-manger est vide</h2>
            <p>Ajoute ce que tu as dans le frigo et les placards. La quantité est facultative : sans quantité, Frigourmand considère que tu en as assez.</p>
          </div>`}
        </div>
      </div>
      <footer class="pied-page">
        <p class="note">Toujours considérés comme disponibles : ${esc(basiques.join(', ') || 'aucun')}. <a href="#parametres">Modifier</a></p>
      </footer>`;
  }

  /* ─── Recettes ─── */

  function filtrerRecettes() {
    const f = ui.filtres;
    const q = norm(f.q);
    return recettesVisibles().filter((r) => {
      if (f.cuisine && r.cuisine !== f.cuisine) return false;
      if (f.type && r.type !== f.type) return false;
      if (f.temps && r.minutes > Number(f.temps)) return false;
      if (f.favoris && !estFavori(r.id)) return false;
      if (q) {
        const texte = norm(r.nom + ' ' + r.cuisine + ' ' + r.ingredients.map(([id]) => ing(id).nom).join(' '));
        if (!q.split(' ').every((m) => texte.includes(m))) return false;
      }
      return true;
    });
  }

  function celluleAchats(a) {
    return a.manquants.map((l) => {
      const achat = quantiteAchat(l);
      const txt = libelleArticle(l.ing, achat.q, achat.u);
      const note = l.detenu != null ? `<span class="note-inline">tu en as ${esc(formatQteCourt(Math.round(l.detenu * 100) / 100, l.u, l.ing))}</span>` : '';
      const classe = l.partiel ? 'partiel' : 'manque';
      const sr = l.partiel ? '<span class="sr-only">(quantité insuffisante)</span>' : '<span class="sr-only">(absent)</span>';
      return `<span class="achat"><span class="pastille ${classe}">${l.partiel ? ICONES.partiel : ICONES.alerte}${esc(txt)}${sr}</span>${note}</span>`;
    }).join('');
  }

  /** Plus grand nombre de personnes (moins que demandé) pour lequel on a tout : 0 si aucun. */
  function maxPersonnes(r, pers, a) {
    if (!a.nb || !a.manquants.every((l) => l.partiel)) return 0;
    for (let p = pers - 1; p >= 1; p--) if (analyser(r, p).nb === 0) return p;
    return 0;
  }

  function tableauRecettes(liste, avecAchats, idSection) {
    const pers = personnesFiltre();
    return `
      <table class="tableau">
        <thead><tr>
          <th scope="col" class="col-nom">Recette</th>
          <th scope="col" class="col-cuisine">Cuisine</th>
          <th scope="col" class="col-temps">Temps</th>
          <th scope="col">${avecAchats ? 'À acheter (pour ' + pluriel(pers, 'personne') + ')' : idSection === 'moins' ? 'Possible pour' : 'Type'}</th>
          <th scope="col" class="col-action"><span class="sr-only">Actions</span></th>
        </tr></thead>
        <tbody>
          ${liste.map(({ r, a, p }) => {
            const tousDansListe = a.manquants.every((l) => dansListe(l.id));
            return `<tr>
              <th scope="row" class="col-nom"><a href="#recette/${esc(r.id)}${p ? '/' + p : ''}" id="lien-${idSection}-${esc(r.id)}">${esc(r.nom)}</a>${r.source === 'perso' ? ' <span class="etiquette-perso">perso</span>' : ''}</th>
              <td class="col-cuisine">${esc(r.cuisine)}</td>
              <td class="col-temps">${esc(duree(r.minutes))}</td>
              <td>${avecAchats ? `<span class="achats">${celluleAchats(a)}</span>` : p ? `<span class="pastille ok">${ICONES.coche}pour ${pluriel(p, 'personne')}</span> <span class="note-inline">limité par ${esc(a.manquants.map((l) => l.ing.nom.replace(/\s*\(.*?\)/, '').toLowerCase()).join(', '))}</span>` : esc(r.type)}</td>
              <td class="col-action"><div class="actions-recette">
                ${avecAchats ? (tousDansListe
                  ? `<span class="deja">${ICONES.coche}Dans la liste</span>`
                  : `<button type="button" class="bouton-secondaire" id="aj-${idSection}-${esc(r.id)}" data-action="liste-ajouter-recette" data-id="${esc(r.id)}" aria-label="Ajouter à la liste de courses ce qui manque pour ${esc(r.nom)}">Ajouter à la liste</button>`) : ''}
                <button type="button" class="bouton-etoile" id="fav-${idSection}-${esc(r.id)}" data-action="favori" data-id="${esc(r.id)}" aria-pressed="${estFavori(r.id)}" aria-label="Favori : ${esc(r.nom)}" title="${estFavori(r.id) ? 'Retirer des favoris' : 'Ajouter aux favoris'}">${estFavori(r.id) ? ICONES.etoilePleine : ICONES.etoile}</button>
              </div></td>
            </tr>`;
          }).join('')}
        </tbody>
      </table>`;
  }

  function vueRecettes() {
    const pers = personnesFiltre();
    const analyses = filtrerRecettes().map((r) => ({ r, a: analyser(r, pers) }))
      .sort((x, y) => x.a.nb - y.a.nb || x.a.gravite - y.a.gravite || trierFr(x.r.nom, y.r.nom));
    const sections = [
      { cle: 'ok', titre: 'Réalisables maintenant', teinte: 'vert', liste: analyses.filter((x) => x.a.nb === 0), achats: false },
      { cle: 'un', titre: 'Il manque 1 ingrédient', teinte: 'ocre', liste: analyses.filter((x) => x.a.nb === 1), achats: true },
      { cle: 'deux', titre: 'Il manque 2 ingrédients', teinte: 'rouge', liste: analyses.filter((x) => x.a.nb === 2), achats: true }
    ];
    // Il ne manque que de la quantité : réalisable pour moins de personnes ?
    for (const x of analyses) x.p = maxPersonnes(x.r, pers, x.a);
    sections.splice(1, 0, { cle: 'moins', titre: 'Réalisables pour moins de personnes', teinte: 'bleu', liste: analyses.filter((x) => x.p), achats: false });
    for (const sec of sections) if (sec.cle !== 'moins') sec.liste = sec.liste.filter((x) => !x.p);
    const plus = analyses.filter((x) => x.a.nb >= 3 && !x.p);
    const cuisines = [...new Set(toutesRecettes().map((r) => r.cuisine))].sort(trierFr);
    const types = ['Entrée', 'Plat', 'Dessert'];
    const f = ui.filtres;

    return `
      <div class="titre-page titre-page-filtres">
        <div>
          <h1 class="titre" tabindex="-1">Recettes</h1>
          <p class="sous-titre">D’après ton garde-manger · ${pluriel(analyses.length, 'recette')}${(etat.reglages.exclus || []).length ? ` · <a href="#parametres">${pluriel(toutesRecettes().length - recettesVisibles().length, 'masquée', 'masquées')}</a>` : ''}</p>
        </div>
        <div class="filtres" role="group" aria-label="Filtrer les recettes">
          <div class="champ">
            <label class="etiquette" for="f-q">Rechercher</label>
            <input class="saisie" id="f-q" type="search" value="${esc(f.q)}" placeholder="nom, ingrédient…" data-action="filtre" data-cle="q" autocomplete="off">
          </div>
          <div class="champ">
            <label class="etiquette" for="f-personnes">Pour</label>
            <select class="saisie" id="f-personnes" data-action="filtre" data-cle="personnes">${optionsSelect(Array.from({ length: 12 }, (_, n) => [n + 1, pluriel(n + 1, 'personne')]), pers)}</select>
          </div>
          <div class="champ">
            <label class="etiquette" for="f-cuisine">Cuisine</label>
            <select class="saisie" id="f-cuisine" data-action="filtre" data-cle="cuisine">${optionsSelect([['', 'Toutes']].concat(cuisines.map((c) => [c, c])), f.cuisine)}</select>
          </div>
          <div class="champ">
            <label class="etiquette" for="f-type">Type</label>
            <select class="saisie" id="f-type" data-action="filtre" data-cle="type">${optionsSelect([['', 'Tous']].concat(types.map((t) => [t, t])), f.type)}</select>
          </div>
          <div class="champ">
            <label class="etiquette" for="f-favoris">Afficher</label>
            <select class="saisie" id="f-favoris" data-action="filtre" data-cle="favoris">${optionsSelect([['', 'Toutes'], ['1', 'Mes favoris']], f.favoris)}</select>
          </div>
          <div class="champ">
            <label class="etiquette" for="f-temps">Temps</label>
            <select class="saisie" id="f-temps" data-action="filtre" data-cle="temps">${optionsSelect([['', 'Peu importe'], ['20', '20 min max'], ['30', '30 min max'], ['45', '45 min max'], ['60', '1 h max'], ['90', '1 h 30 max']], f.temps)}</select>
          </div>
        </div>
      </div>

      ${etat.gardeManger.length ? `<p class="legende"><span class="pastille partiel">${ICONES.partiel}pas assez</span> <span class="pastille manque">${ICONES.alerte}à acheter</span></p>` : ''}
      ${etat.gardeManger.length ? '' : `<p class="bandeau">Ton garde-manger est vide : toutes les recettes sont rangées dans « 3 ingrédients ou plus ». <a href="#garde-manger">Ajouter des ingrédients</a></p>`}

      ${sections.filter((s) => s.liste.length).map((s) => `
        <section class="panneau" aria-labelledby="sec-${s.cle}">
          <div class="panneau-tete teinte-${s.teinte}">
            <span class="marqueur" aria-hidden="true"></span>
            <h2 id="sec-${s.cle}">${s.titre}</h2>
            <span class="compte">${pluriel(s.liste.length, 'recette')}</span>
          </div>
          ${tableauRecettes(s.liste, s.achats, s.cle)}
        </section>`).join('')}

      ${plus.length ? `
        <section class="section-repliable" aria-labelledby="sec-plus">
          <h2 id="sec-plus" class="titre-repliable">
            <button type="button" class="bouton-repli" id="bouton-plus" data-action="basculer-plus" aria-expanded="${ui.ouvert3}" aria-controls="zone-plus">
              <span class="chevron${ui.ouvert3 ? ' ouvert' : ''}">${ICONES.chevron}</span>Il manque 3 ingrédients ou plus <span class="note-inline">(${plus.length})</span>
            </button>
          </h2>
          <div id="zone-plus"${ui.ouvert3 ? '' : ' hidden'}>
            <div class="panneau">${ui.ouvert3 ? tableauRecettes(plus, true, 'plus') : ''}</div>
          </div>
        </section>` : ''}

      ${analyses.length ? '' : `<div class="vide"><h2>Aucune recette</h2><p>${f.favoris && !etat.favoris.length ? 'Tu n’as pas encore de favori : ouvre une recette et choisis « Ajouter aux favoris ».' : 'Aucune recette ne correspond à ces filtres.'}</p></div>`}`;
  }

  /* ─── Fiche recette ─── */

  function vueFiche() {
    const r = recetteParId(ui.params[0]);
    if (!r) return `<h1 class="titre" tabindex="-1">Recette introuvable</h1><p><a href="#recettes">Retour aux recettes</a></p>`;
    const pers = ui.personnesFiche[r.id] || Number(ui.params[1]) || personnesFiltre();
    const a = analyser(r, pers);
    const libellePers = pluriel(pers, 'personne');
    const statut = (l) => {
      if (exclus().has(l.id)) return `<span class="pastille manque">${ICONES.alerte}exclu</span>`;
      if (l.statut === 'ok' && l.substitut) return `<span class="pastille ok">${ICONES.coche}remplacé par ${esc(ing(l.substitut).nom.replace(/\s*\(.*?\)/, ''))}</span>`;
      if (l.statut === 'ok') return `<span class="pastille ok">${ICONES.coche}en stock</span>`;
      if (l.statut === 'basique') return '<span class="pastille neutre">basique</span>';
      if (l.statut === 'facultatif') return '<span class="pastille neutre">facultatif</span>';
      const achat = quantiteAchat(l);
      const txt = l.manque == null || achat.q == null ? (l.partiel ? 'pas assez' : 'à acheter') : 'il en manque ' + formatQteCourt(achat.q, achat.u, l.ing);
      const detenu = l.partiel && l.detenu != null ? ` (tu en as ${formatQteCourt(Math.round(l.detenu * 100) / 100, l.u, l.ing)})` : '';
      return `<span class="pastille ${l.partiel ? 'partiel' : 'manque'}">${l.partiel ? ICONES.partiel : ICONES.alerte}${esc(txt + detenu)}</span>${dansListe(l.id) ? '<span class="note-inline">dans ta liste</span>' : ''}`;
    };
    const tousDansListe = a.manquants.every((l) => dansListe(l.id));
    const interdits = exclusDe(r);

    return `
      <a href="#recettes" class="lien-retour" id="lien-retour">${ICONES.retour}Retour aux recettes</a>
      ${interdits.length ? `<p class="alerte" role="note">Contient ${esc(interdits.map((id) => ing(id).nom).join(', '))}, que tu as exclu${interdits.length > 1 ? 's' : ''} dans les paramètres.</p>` : ''}
      <div class="titre-fiche">
        <h1 class="titre titre-grand" tabindex="-1">${esc(r.nom)}</h1>
        <ul class="meta" aria-label="Informations">
          <li class="pastille neutre">${esc(r.cuisine)}</li>
          <li class="pastille neutre">${esc(r.type)}</li>
          <li class="pastille neutre">${esc(duree(r.minutes))}</li>
          <li class="pastille neutre">${esc(r.difficulte)}</li>
          ${r.source === 'perso' ? '<li class="pastille neutre">Ma recette</li>' : ''}
        </ul>
        <div class="actions-fiche">
          <button type="button" class="bouton-secondaire bouton-favori" id="fiche-favori" data-action="favori" data-id="${esc(r.id)}" aria-pressed="${estFavori(r.id)}">${estFavori(r.id) ? ICONES.etoilePleine + 'Dans mes favoris' : ICONES.etoile + 'Ajouter aux favoris'}</button>
          ${r.source === 'perso'
            ? `<a class="bouton-secondaire" href="#editeur/${esc(r.id)}" id="fiche-modifier">Modifier</a>
               <button type="button" class="bouton-secondaire" id="fiche-supprimer" data-action="recette-supprimer" data-id="${esc(r.id)}">Supprimer</button>`
            : `<button type="button" class="bouton-secondaire" id="fiche-copier" data-action="recette-copier" data-id="${esc(r.id)}">Créer une copie modifiable</button>`}
        </div>
      </div>

      <div class="fiche">
        <section class="panneau panneau-ingredients" aria-labelledby="h-ing">
          <div class="panneau-tete teinte-ocre">
            <h2 id="h-ing">Ingrédients</h2>
            <div class="stepper" role="group" aria-label="Nombre de personnes">
              <button type="button" class="bouton-pas" id="pers-moins" data-action="pers" data-delta="-1" aria-label="Une personne de moins"${pers <= 1 ? ' disabled' : ''}>−</button>
              <span class="stepper-valeur" aria-live="polite" aria-atomic="true">${esc(libellePers)}</span>
              <button type="button" class="bouton-pas" id="pers-plus" data-action="pers" data-delta="1" aria-label="Une personne de plus"${pers >= 24 ? ' disabled' : ''}>+</button>
            </div>
          </div>
          <table class="tableau tableau-ingredients">
            <caption class="sr-only">Ingrédients pour ${esc(libellePers)}</caption>
            <thead class="sr-only"><tr><th scope="col">Quantité</th><th scope="col">Ingrédient</th><th scope="col">Disponibilité</th></tr></thead>
            <tbody>
              ${a.lignes.map((l) => `<tr>
                <td class="col-qte">${esc(formatQteCourt(l.q, l.u, l.ing))}</td>
                <td>${esc(l.ing.nom)}</td>
                <td class="col-statut">${statut(l)}</td>
              </tr>`).join('')}
            </tbody>
          </table>
          <div class="pied-panneau" aria-live="polite">
            ${a.nb === 0
              ? `<p class="message-ok">${ICONES.coche}Tu as tout ce qu’il faut pour ${esc(libellePers)}.</p>`
              : tousDansListe
                ? `<p class="message-neutre">Les ingrédients manquants sont dans ta liste de courses. <a href="#courses">Voir la liste</a></p>`
                : `<button type="button" class="bouton" id="fiche-ajouter" data-action="liste-ajouter-recette" data-id="${esc(r.id)}">${a.nb > 1 ? 'Ajouter les ' + a.nb + ' manquants à la liste de courses' : 'Ajouter le manquant à la liste de courses'}</button>`}
            <button type="button" class="bouton-secondaire" id="fiche-cuisine" data-action="recette-cuisinee" data-id="${esc(r.id)}">J’ai cuisiné cette recette</button>
          </div>
        </section>

        <section class="panneau panneau-etapes" aria-labelledby="h-prep">
          <div class="panneau-tete teinte-bleu"><h2 id="h-prep">Préparation</h2></div>
          <ol class="etapes">
            ${r.etapes.map((e, n) => `<li><span class="num-etape" aria-hidden="true">${n + 1}</span><p><span class="sr-only">Étape ${n + 1} : </span>${esc(e)}</p></li>`).join('')}
          </ol>
        </section>
      </div>`;
  }

  /* ─── Liste de courses ─── */

  function vueCourses() {
    const nbCoches = etat.courses.filter((c) => c.coche).length;
    const groupes = RAYONS.map((ray) => ({
      ray,
      items: etat.courses.filter((c) => (c.id ? ing(c.id).rayon : 'div') === ray.id)
        .sort((a, b) => trierFr(a.id ? ing(a.id).nom : a.nom, b.id ? ing(b.id).nom : b.nom))
    })).filter((g) => g.items.length);

    return `
      <div class="titre-page">
        <h1 class="titre" tabindex="-1">Liste de courses</h1>
        <p class="sous-titre">${etat.courses.length ? pluriel(etat.courses.length, 'article') + ', ' + pluriel(nbCoches, 'coché') : 'Vide'}</p>
      </div>
      <div class="mise-courses">
        <section class="panneau panneau-courses" aria-label="Articles à acheter">
          <form class="ajout-courses" data-action="courses-ajouter" novalidate>
            <label for="c-ajout" class="sr-only">Ajouter un article</label>
            ${champRecherche('c-ajout', { mode: 'courses', placeholder: 'Ajouter un article, ex. 6 œufs, 500 g de pâtes, lait' })}
            <button type="submit" class="bouton" id="c-bouton-ajouter">Ajouter</button>
          </form>
          ${erreurChamp('c-ajout')}
          ${etat.courses.length ? `<div class="barre-selection" role="group" aria-label="Actions sur les articles">
            <span>${nbCoches ? pluriel(nbCoches, 'article coché', 'articles cochés') : 'Coche des articles pour agir dessus'}</span>
            <button type="button" class="bouton-secondaire" id="c-tout" data-action="courses-tout-cocher">${nbCoches === etat.courses.length ? 'Tout décocher' : 'Tout cocher'}</button>
            ${nbCoches ? `<button type="button" class="bouton-secondaire bouton-danger" id="c-sup-coches" data-action="courses-supprimer-coches">Supprimer ${nbCoches > 1 ? 'les ' + nbCoches + ' articles cochés' : 'l’article coché'}</button>` : ''}
          </div>` : ''}
          ${groupes.length ? groupes.map(({ ray, items }) => `
            <div class="groupe-rayon">
              <h2 class="tete-rayon teinte-${COULEUR_RAYON[ray.id]}"><span class="marqueur" aria-hidden="true"></span>${esc(ray.nom)}</h2>
              <ul class="lignes">
                ${items.map((c) => {
                  const i = c.id ? ing(c.id) : null;
                  const nom = i ? i.nom : c.nom;
                  const pour = c.sources.length ? 'pour ' + c.sources.join(', ') : 'ajouté à la main';
                  return `<li class="ligne ligne-course${c.coche ? ' cochee' : ''}">
                    <input type="checkbox" class="case" id="c-${esc(c.cle)}" data-action="courses-cocher" data-cle="${esc(c.cle)}"${c.coche ? ' checked' : ''}>
                    <label for="c-${esc(c.cle)}" class="ligne-nom">${esc(nom)}</label>
                    <span class="ligne-qte">${esc(c.qte == null ? '' : formatQteCourt(c.qte, c.unite, i))}</span>
                    <span class="ligne-source">${esc(pour)}</span>
                    <button type="button" class="bouton-icone" id="c-sup-${esc(c.cle)}" data-action="courses-retirer" data-cle="${esc(c.cle)}" aria-label="Retirer ${esc(nom)} de la liste">${ICONES.croix}</button>
                  </li>`;
                }).join('')}
              </ul>
            </div>`).join('') : `<div class="vide vide-interne"><h2>Rien à acheter</h2><p>Ajoute des articles ici, ou depuis une recette avec « Ajouter à la liste ».</p></div>`}
        </section>
        <aside class="panneau encart" aria-labelledby="h-apres">
          <h2 id="h-apres" class="titre-encart">Après les courses</h2>
          <p>Les articles cochés passent dans le garde-manger avec leur quantité, et les recettes se mettent à jour.</p>
          <button type="button" class="bouton" id="c-ranger" data-action="courses-ranger"${nbCoches ? '' : ' disabled'}>Ranger les articles cochés${nbCoches ? ' (' + nbCoches + ')' : ''}</button>
          <button type="button" class="bouton-secondaire" id="c-copier" data-action="courses-copier"${etat.courses.length ? '' : ' disabled'}>Copier la liste</button>
          <button type="button" class="bouton-secondaire" id="c-vider" data-action="courses-vider"${etat.courses.length ? '' : ' disabled'}>Vider la liste</button>
        </aside>
      </div>`;
  }

  /* ─── Mes recettes ─── */

  function vueMesRecettes() {
    const liste = etat.recettesPerso.slice().sort((a, b) => trierFr(a.nom, b.nom));
    const favoris = etat.favoris.map(recetteParId).filter(Boolean).sort((a, b) => trierFr(a.nom, b.nom));
    const pers = personnesFiltre();
    return `
      <div class="titre-page titre-page-filtres">
        <div>
          <h1 class="titre" tabindex="-1">Mes recettes</h1>
          <p class="sous-titre">${pluriel(favoris.length, 'favori')} · ${pluriel(liste.length, 'recette perso', 'recettes perso')}</p>
        </div>
        <a class="bouton" href="#editeur" id="nouvelle-recette">Nouvelle recette</a>
      </div>

      <section class="panneau" aria-labelledby="h-favoris">
        <div class="panneau-tete teinte-ocre">
          <span class="marqueur" aria-hidden="true"></span>
          <h2 id="h-favoris">Favoris</h2>
          <span class="compte">${pluriel(favoris.length, 'recette')}</span>
        </div>
        ${favoris.length ? `
          <table class="tableau">
            <thead><tr><th scope="col" class="col-nom">Recette</th><th scope="col" class="col-cuisine">Cuisine</th><th scope="col" class="col-temps">Temps</th><th scope="col">Disponibilité (pour ${pluriel(pers, 'personne')})</th><th scope="col" class="col-action"><span class="sr-only">Actions</span></th></tr></thead>
            <tbody>${favoris.map((r) => {
              const a = analyser(r, pers);
              return `<tr>
              <th scope="row" class="col-nom"><a href="#recette/${esc(r.id)}" id="fav-${esc(r.id)}">${esc(r.nom)}</a></th>
              <td class="col-cuisine">${esc(r.cuisine)}</td><td class="col-temps">${esc(duree(r.minutes))}</td>
              <td>${a.nb ? `<span class="pastille manque">${ICONES.alerte}${pluriel(a.nb, 'ingrédient manquant', 'ingrédients manquants')}</span>` : `<span class="pastille ok">${ICONES.coche}réalisable</span>`}</td>
              <td class="col-action"><button type="button" class="bouton-secondaire" id="fav-sup-${esc(r.id)}" data-action="favori" data-id="${esc(r.id)}" aria-label="Retirer ${esc(r.nom)} des favoris">Retirer</button></td>
            </tr>`;
            }).join('')}</tbody>
          </table>` : '<p class="vide-interne note">Ouvre une recette et choisis « Ajouter aux favoris » pour la retrouver ici.</p>'}
      </section>

      ${liste.length ? `
        <section class="panneau" aria-labelledby="h-mes">
          <div class="panneau-tete teinte-bleu">
            <span class="marqueur" aria-hidden="true"></span>
            <h2 id="h-mes">Mes recettes perso</h2>
            <span class="compte">${pluriel(liste.length, 'recette')}</span>
          </div>
          <table class="tableau">
            <thead><tr><th scope="col">Recette</th><th scope="col">Cuisine</th><th scope="col">Type</th><th scope="col">Temps</th><th scope="col"><span class="sr-only">Actions</span></th></tr></thead>
            <tbody>${liste.map((r) => `<tr>
              <th scope="row"><a href="#recette/${esc(r.id)}" id="mr-${esc(r.id)}">${esc(r.nom)}</a></th>
              <td>${esc(r.cuisine)}</td><td>${esc(r.type)}</td><td>${esc(duree(r.minutes))}</td>
              <td class="col-action actions-ligne">
                <a class="bouton-secondaire" href="#editeur/${esc(r.id)}" aria-label="Modifier ${esc(r.nom)}">Modifier</a>
                <button type="button" class="bouton-secondaire" id="mr-sup-${esc(r.id)}" data-action="recette-supprimer" data-id="${esc(r.id)}" aria-label="Supprimer ${esc(r.nom)}">Supprimer</button>
              </td></tr>`).join('')}</tbody>
          </table>
        </section>` : `
        <div class="vide">
          <h2>Ajoute tes propres recettes</h2>
          <p>Elles seront prises en compte dans les recettes possibles, comme celles de Frigourmand. Tu peux aussi ouvrir une recette existante et choisir « Créer une copie modifiable ».</p>
        </div>`}`;
  }

  function brouillonDepuis(r) {
    if (!r) {
      return { id: null, nom: '', cuisine: 'Française', type: 'Plat', minutes: 30, difficulte: 'Facile', personnes: 4,
        lignes: [{ k: uid(), nom: '', q: '', u: 'g', opt: false }], etapes: '' };
    }
    return {
      id: r.id, nom: r.nom, cuisine: r.cuisine, type: r.type, minutes: r.minutes, difficulte: r.difficulte, personnes: r.personnes,
      lignes: r.ingredients.map(([id, q, u, opt]) => {
        const i = ing(id);
        return { k: uid(), nom: i.nom, q: q == null ? '' : String(q).replace('.', ','), u: u === undefined ? i.unite : (q == null ? '' : u), opt: !!opt };
      }),
      etapes: r.etapes.join('\n')
    };
  }

  function vueEditeur() {
    const b = ui.brouillon;
    const cuisines = [...new Set(toutesRecettes().map((r) => r.cuisine))].sort(trierFr);
    const types = ['Entrée', 'Plat', 'Dessert'];
    const nbErreurs = Object.keys(ui.erreurs).filter((c) => c.startsWith('ed-')).length;
    return `
      <a href="#mes-recettes" class="lien-retour" id="lien-retour">${ICONES.retour}Mes recettes</a>
      <h1 class="titre" tabindex="-1">${b.id ? 'Modifier la recette' : 'Nouvelle recette'}</h1>
      ${nbErreurs ? `<div class="resume-erreurs" role="alert" tabindex="-1" id="resume-erreurs"><h2>La recette ne peut pas être enregistrée</h2><ul>${Object.entries(ui.erreurs).filter(([c]) => c.startsWith('ed-')).map(([c, m]) => `<li><a href="#" data-action="aller-champ" data-champ="${esc(c)}">${esc(m)}</a></li>`).join('')}</ul></div>` : ''}
      <form class="editeur" data-action="editeur-enregistrer" novalidate>
        <section class="panneau corps-panneau" aria-labelledby="ed-h-infos">
          <h2 id="ed-h-infos" class="titre-section">Informations</h2>
          <div class="grille-champs">
            <div class="champ champ-plein">
              <label class="etiquette" for="ed-nom">Nom de la recette</label>
              <input class="saisie" id="ed-nom" data-b="nom" value="${esc(b.nom)}" autocomplete="off"${ariaErreur('ed-nom')}>
              ${erreurChamp('ed-nom')}
            </div>
            <div class="champ">
              <label class="etiquette" for="ed-cuisine">Cuisine</label>
              <input class="saisie" id="ed-cuisine" data-b="cuisine" list="liste-cuisines" value="${esc(b.cuisine)}" autocomplete="off">
              <datalist id="liste-cuisines">${cuisines.map((c) => `<option value="${esc(c)}"></option>`).join('')}</datalist>
            </div>
            <div class="champ">
              <label class="etiquette" for="ed-type">Type</label>
              <select class="saisie" id="ed-type" data-b="type">${optionsSelect(types.map((t) => [t, t]), b.type)}</select>
            </div>
            <div class="champ">
              <label class="etiquette" for="ed-minutes">Temps total (minutes)</label>
              <input class="saisie" id="ed-minutes" data-b="minutes" inputmode="numeric" value="${esc(b.minutes)}"${ariaErreur('ed-minutes')}>
              ${erreurChamp('ed-minutes')}
            </div>
            <div class="champ">
              <label class="etiquette" for="ed-difficulte">Difficulté</label>
              <select class="saisie" id="ed-difficulte" data-b="difficulte">${optionsSelect([['Facile', 'Facile'], ['Moyenne', 'Moyenne'], ['Difficile', 'Difficile']], b.difficulte)}</select>
            </div>
            <div class="champ">
              <label class="etiquette" for="ed-personnes">Pour combien de personnes</label>
              <input class="saisie" id="ed-personnes" data-b="personnes" inputmode="numeric" value="${esc(b.personnes)}"${ariaErreur('ed-personnes')}>
              ${erreurChamp('ed-personnes')}
            </div>
          </div>
        </section>

        <section class="panneau corps-panneau" aria-labelledby="ed-h-ing">
          <h2 id="ed-h-ing" class="titre-section">Ingrédients</h2>
          ${erreurChamp('ed-lignes')}
          <ol class="lignes-editeur">
            ${b.lignes.map((l, n) => `<li class="ligne-editeur">
              <div class="champ champ-large">
                <label class="etiquette" for="ed-l-nom-${l.k}">Ingrédient ${n + 1}</label>
                ${champRecherche('ed-l-nom-' + l.k, { valeur: l.nom, attrs: `data-l="${l.k}" data-champ="nom"` })}
              </div>
              <div class="champ champ-qte">
                <label class="etiquette" for="ed-l-q-${l.k}">Quantité</label>
                <input class="saisie" id="ed-l-q-${l.k}" data-l="${l.k}" data-champ="q" inputmode="decimal" value="${esc(l.q)}">
              </div>
              <div class="champ champ-unite">
                <label class="etiquette" for="ed-l-u-${l.k}">Unité</label>
                <select class="saisie" id="ed-l-u-${l.k}" data-l="${l.k}" data-champ="u">${optionsSelect(UNITES_RECETTE, l.u)}</select>
              </div>
              <div class="champ champ-case">
                <input type="checkbox" class="case" id="ed-l-o-${l.k}" data-l="${l.k}" data-champ="opt"${l.opt ? ' checked' : ''}>
                <label for="ed-l-o-${l.k}">Facultatif</label>
              </div>
              <button type="button" class="bouton-icone" id="ed-l-sup-${l.k}" data-action="ed-retirer-ligne" data-l="${l.k}" aria-label="Retirer l’ingrédient ${n + 1}${l.nom ? ' (' + esc(l.nom) + ')' : ''}"${b.lignes.length <= 1 ? ' disabled' : ''}>${ICONES.croix}</button>
            </li>`).join('')}
          </ol>
          <button type="button" class="bouton-secondaire" id="ed-ajouter-ligne" data-action="ed-ajouter-ligne">${ICONES.plus}Ajouter un ingrédient</button>
        </section>

        <section class="panneau corps-panneau" aria-labelledby="ed-h-etapes">
          <h2 id="ed-h-etapes" class="titre-section">Préparation</h2>
          <div class="champ">
            <label class="etiquette" for="ed-etapes">Étapes, une par ligne</label>
            <textarea class="saisie zone-texte" id="ed-etapes" data-b="etapes" rows="8"${ariaErreur('ed-etapes')}>${esc(b.etapes)}</textarea>
            ${erreurChamp('ed-etapes')}
          </div>
        </section>

        <div class="barre-actions">
          <button type="submit" class="bouton" id="ed-enregistrer">Enregistrer la recette</button>
          <a class="bouton-secondaire" href="#mes-recettes">Annuler</a>
        </div>
      </form>`;
  }

  /* ─── Paramètres ─── */

  function vueParametres() {
    const r = etat.reglages;
    const radios = (nom, liste, valeur) => liste.map(([v, l]) => `
      <div class="choix"><input type="radio" class="case" name="${nom}" id="${nom}-${v}" value="${v}" data-action="reglage" data-cle="${nom}"${valeur === v ? ' checked' : ''}><label for="${nom}-${v}">${esc(l)}</label></div>`).join('');
    return `
      <h1 class="titre" tabindex="-1">Paramètres</h1>
      <div class="grille-2 grille-parametres">
        <div class="colonne-parametres">
        <section class="panneau corps-panneau" aria-labelledby="p-compte">
          <h2 id="p-compte" class="titre-section">Mon compte</h2>
          <p>Connecté${utilisateur && utilisateur.nom ? ' en tant que <strong>' + esc(utilisateur.nom) + '</strong>' : ''} avec l’adresse <strong>${esc(utilisateur ? utilisateur.email : '')}</strong>.</p>
          <p class="etat-maj">Synchronisation : <span id="p-etat-synchro">${esc(texteSynchro()[1])}</span></p>
          <div class="barre-actions">
            <button type="button" class="bouton-secondaire" id="p-synchro" data-action="synchro-maintenant">Synchroniser maintenant</button>
            <button type="button" class="bouton-secondaire" id="p-mdp" data-action="compte-mdp">Changer le mot de passe</button>
            <button type="button" class="bouton-secondaire bouton-danger" id="p-deconnexion" data-action="compte-deconnecter">Se déconnecter</button>
          </div>
        </section>

        <section class="panneau corps-panneau" aria-labelledby="p-recettes">
          <h2 id="p-recettes" class="titre-section">Recettes</h2>
          <div class="champ">
            <label class="etiquette" for="p-personnes">Nombre de personnes par défaut</label>
            <select class="saisie saisie-courte" id="p-personnes" data-action="reglage" data-cle="personnes">${optionsSelect(Array.from({ length: 12 }, (_, n) => [n + 1, pluriel(n + 1, 'personne')]), r.personnes)}</select>
          </div>
          <fieldset class="groupe-choix">
            <legend>Ingrédients toujours disponibles</legend>
            <p class="aide">Ils ne sont jamais comptés comme manquants, même s’ils ne sont pas dans le garde-manger.</p>
            <div class="grille-cases">
              ${BASIQUES_CANDIDATS.map((id) => `<div class="choix"><input type="checkbox" class="case" id="bq-${id}" data-action="basique" data-id="${id}"${r.basiques.includes(id) ? ' checked' : ''}><label for="bq-${id}">${esc(ing(id).nom)}</label></div>`).join('')}
            </div>
          </fieldset>
        </section>

        <section class="panneau corps-panneau" aria-labelledby="p-exclus">
          <h2 id="p-exclus" class="titre-section">Ingrédients exclus</h2>
          <p class="aide">Allergie ou goût : les recettes qui en contiennent sont masquées partout.</p>
          <form class="rangee-exclus" data-action="exclu-ajouter" novalidate>
            <div class="champ">
              <label class="etiquette" for="ex-nom">Exclure un ingrédient</label>
              ${champRecherche('ex-nom', { mode: 'exclu', placeholder: 'ex. arachides, crevettes…', enLigne: true })}
              ${erreurChamp('ex-nom')}
            </div>
            <button type="submit" class="bouton-secondaire" id="ex-ajouter">Exclure</button>
          </form>
          ${(r.exclus || []).length ? `<ul class="puces liste-exclus" aria-label="Ingrédients exclus">${r.exclus.map((id) => `<li class="puce puce-exclu">${esc(ing(id).nom)}<button type="button" class="bouton-icone" id="ex-sup-${esc(id)}" data-action="exclu-retirer" data-id="${esc(id)}" aria-label="Ne plus exclure ${esc(ing(id).nom)}">${ICONES.croix}</button></li>`).join('')}</ul>
            <p class="note">${pluriel(toutesRecettes().length - recettesVisibles().length, 'recette masquée', 'recettes masquées')}. Vérifie toujours les étiquettes des produits tout prêts (bouillon, pâte feuilletée…).</p>` : ''}
        </section>
        </div>
        <div class="colonne-parametres">
        <section class="panneau corps-panneau" aria-labelledby="p-apparence">
          <h2 id="p-apparence" class="titre-section">Apparence</h2>
          <fieldset class="groupe-choix"><legend>Thème</legend>${radios('theme', [['systeme', 'Comme le système'], ['clair', 'Clair'], ['sombre', 'Sombre']], r.theme)}</fieldset>
          <fieldset class="groupe-choix"><legend>Taille du texte</legend>${radios('texte', [['normal', 'Normale'], ['grand', 'Grande'], ['tres-grand', 'Très grande']], r.texte)}</fieldset>
        </section>

        <section class="panneau corps-panneau" aria-labelledby="p-donnees">
          <h2 id="p-donnees" class="titre-section">Mes données</h2>
          <p class="aide">Tes données sont enregistrées sur ton compte et gardées aussi sur cet ordinateur, pour fonctionner sans Internet. L’export crée un fichier de sauvegarde que tu peux réimporter plus tard.</p>
          <div class="barre-actions">
            <button type="button" class="bouton-secondaire" id="p-exporter" data-action="exporter">Exporter</button>
            <button type="button" class="bouton-secondaire" id="p-importer" data-action="importer">Importer</button>
            <button type="button" class="bouton-secondaire bouton-danger" id="p-effacer" data-action="tout-effacer">Tout effacer</button>
          </div>
        </section>

        <section class="panneau corps-panneau" aria-labelledby="p-apropos">
          <h2 id="p-apropos" class="titre-section">À propos et mises à jour</h2>
          <p>Frigourmand ${esc(infosAppli.version)} · ${RECETTES_BASE.length} recettes de base, ${INGREDIENTS.length} ingrédients connus.</p>
          <p class="aide">Base de données : ${esc(infosAppli.donnees)}</p>
          <p id="etat-maj" class="etat-maj" role="status">${esc(texteMaj())}</p>
          <div class="barre-actions">
            ${etatMaj.etat === 'prete'
              ? '<button type="button" class="bouton" id="p-maj-installer" data-action="maj-installer">Redémarrer et installer</button>'
              : `<button type="button" class="bouton-secondaire" id="p-maj" data-action="maj-verifier"${etatMaj.etat === 'dev' || etatMaj.etat === 'verification' || etatMaj.etat === 'telechargement' ? ' disabled' : ''}>Rechercher des mises à jour</button>`}
          </div>
          <p class="aide">Raccourcis : Alt + 1 à 5 pour changer d’onglet.</p>
        </section>
        </div>
      </div>`;
  }

  /* ═════════════ Rendu ═════════════ */

  const VUES = {
    accueil: vueAccueil, 'garde-manger': vueGardeManger, recettes: vueRecettes, recette: vueFiche, courses: vueCourses,
    'mes-recettes': vueMesRecettes, editeur: vueEditeur, parametres: vueParametres
  };
  const TITRES = {
    accueil: 'Accueil', 'garde-manger': 'Garde-manger', recettes: 'Recettes', courses: 'Liste de courses',
    'mes-recettes': 'Mes recettes', editeur: 'Éditeur de recette', parametres: 'Paramètres'
  };

  function rendre(options) {
    const o = options || {};
    const actif = document.activeElement;
    const idActif = actif && actif.id;
    const selection = actif && typeof actif.selectionStart === 'number' ? [actif.selectionStart, actif.selectionEnd] : null;
    const defilement = window.scrollY;

    $('#entete').innerHTML = vueEntete();
    $('#bandeau-maj').innerHTML = vueBandeauMaj();
    $('#contenu').innerHTML = utilisateur ? (VUES[ui.route] || vueGardeManger)() : vueAuth();

    const r = ui.route === 'recette' ? recetteParId(ui.params[0]) : null;
    document.title = utilisateur ? (r ? r.nom : TITRES[ui.route] || 'Frigourmand') + ' · Frigourmand' : 'Connexion · Frigourmand';

    if (o.focus) {
      const cible = typeof o.focus === 'string' ? document.getElementById(o.focus) : $('#contenu h1');
      if (cible) cible.focus();
      if (o.focus === true) window.scrollTo(0, 0);
      return;
    }
    if (idActif) {
      const el = document.getElementById(idActif);
      if (el) {
        el.focus({ preventScroll: true });
        if (selection && typeof el.setSelectionRange === 'function') {
          try { el.setSelectionRange(selection[0], selection[1]); } catch (_) { /* rien */ }
        }
      }
    }
    window.scrollTo(0, defilement);
  }

  function lireRoute() {
    if (!utilisateur) { rendre({ focus: true }); return; }
    const h = decodeURIComponent(location.hash.replace(/^#/, '')) || 'accueil';
    const [route, ...params] = h.split('/');
    ui.route = VUES[route] ? route : 'accueil';
    ui.params = params;
    ui.erreurs = {};
    if (ui.route === 'editeur') {
      const r = params[0] ? recetteParId(params[0]) : null;
      ui.brouillon = brouillonDepuis(r && r.source === 'perso' ? r : null);
    }
    rendre({ focus: true });
  }

  /* ═════════════ Toast et dialogues ═════════════ */

  let minuteurToast = null;
  let actionToast = null;
  function masquerToast() {
    $('#toast').classList.remove('visible');
    $('#toast-action').hidden = true;
    $('#toast-texte').textContent = '';
    actionToast = null;
  }
  function toast(texte, action) {
    const bouton = $('#toast-action');
    const zone = $('#toast-texte');
    clearTimeout(minuteurToast);
    zone.textContent = '';
    actionToast = action || null;
    bouton.hidden = !action;
    if (action) bouton.textContent = action.libelle;
    // Petit délai pour que les lecteurs d'écran annoncent bien le nouveau message.
    setTimeout(() => {
      zone.textContent = texte;
      $('#toast').classList.add('visible');
    }, 60);
    minuteurToast = setTimeout(masquerToast, action ? 9000 : 5000);
  }

  function dialogue(html, init) {
    const d = $('#dialogue');
    const retour = document.activeElement;
    d.innerHTML = html;
    return new Promise((resoudre) => {
      const fermer = (valeur) => {
        d.close();
        d.onclick = null;
        d.oncancel = null;
        resoudre(valeur);
        if (retour && document.body.contains(retour)) retour.focus();
      };
      d.onclick = (e) => {
        const b = e.target.closest('[data-reponse]');
        if (b) { e.preventDefault(); fermer(b.dataset.reponse === 'ok' ? (init ? init.valeur() : true) : false); }
      };
      d.oncancel = (e) => { e.preventDefault(); fermer(false); };
      const form = d.querySelector('form');
      if (form) form.onsubmit = (e) => { e.preventDefault(); fermer(init ? init.valeur() : true); };
      d.showModal();
      const premier = d.querySelector('[autofocus]') || d.querySelector('input, select, button');
      if (premier) premier.focus();
    });
  }

  function confirmer(titre, texte, libelleOk, danger) {
    return dialogue(`
      <h2 id="dialogue-titre">${esc(titre)}</h2>
      <p>${esc(texte)}</p>
      <div class="barre-actions">
        <button type="button" class="bouton${danger ? ' bouton-rouge' : ''}" data-reponse="ok">${esc(libelleOk)}</button>
        <button type="button" class="bouton-secondaire" data-reponse="non" autofocus>Annuler</button>
      </div>`);
  }

  /* ═════════════ Actions ═════════════ */

  function actionAjouterGardeManger() {
    ui.erreurs = {};
    const nom = $('#gm-nom').value.trim();
    const qteTxt = $('#gm-qte').value.trim();
    const unite = $('#gm-unite').value;
    const rangement = $('#gm-rangement').value;
    const qte = parseNombre(qteTxt);
    if (!nom) ui.erreurs['gm-nom'] = 'Indique le nom de l’ingrédient.';
    if (qteTxt && qte == null) ui.erreurs['gm-qte'] = 'Indique un nombre, par exemple 250 ou 1,5.';
    if (qte != null && !unite) ui.erreurs['gm-qte'] = 'Choisis une unité pour cette quantité.';
    if (Object.keys(ui.erreurs).length) {
      const vals = { nom, qteTxt, unite, rangement };
      rendre({ focus: ui.erreurs['gm-nom'] ? 'gm-nom' : 'gm-qte' });
      $('#gm-nom').value = vals.nom; $('#gm-qte').value = vals.qteTxt; $('#gm-unite').value = vals.unite; $('#gm-rangement').value = vals.rangement;
      return;
    }
    let i = ingParNom(nom);
    let rang = rangement;
    modifier(() => {
      if (!i) i = creerIngredientPerso(nom, rangement);
      if (rangement === i.rangement) rang = null;
      const res = ajouterAuStock(i.id, qte, qte == null ? '' : unite, rang);
      if (res === 'ajoute' && rang) enStock(i.id).rangement = rang;
      toast(res === 'ajoute' ? i.nom + ' ajouté au garde-manger.' : res === 'maj' ? i.nom + ' : quantité mise à jour.' : i.nom + ' est déjà dans le garde-manger.');
    }, { focus: 'gm-nom' });
  }

  function actionAjouterExclu() {
    ui.erreurs = {};
    const champ = $('#ex-nom');
    const nom = champ.value.trim();
    const i = nom ? ingParNom(nom) : null;
    if (!i) {
      ui.erreurs['ex-nom'] = nom ? 'Ingrédient inconnu : choisis-le dans la liste des suggestions.' : 'Indique l’ingrédient à exclure.';
      rendre({ focus: 'ex-nom' });
      $('#ex-nom').value = nom;
      return;
    }
    if ((etat.reglages.exclus || []).includes(i.id)) { toast(i.nom + ' est déjà exclu.'); return; }
    const avant = recettesVisibles().length;
    modifier(() => { etat.reglages.exclus = (etat.reglages.exclus || []).concat(i.id); }, { focus: 'ex-nom' });
    toast(i.nom + ' exclu : ' + pluriel(avant - recettesVisibles().length, 'recette masquée', 'recettes masquées') + '.');
  }

  /** Préremplit unité et rangement quand le nom tapé correspond à un ingrédient connu. */
  function suggestionGardeManger() {
    const i = ingParNom($('#gm-nom').value);
    if (!i) return;
    const u = $('#gm-unite');
    const unite = i.unite === 'pincee' || i.unite === 'cs' || i.unite === 'cc' ? '' : i.unite;
    if ([...u.options].some((o) => o.value === unite)) u.value = unite;
    $('#gm-rangement').value = i.rangement;
  }

  async function actionModifierStock(id) {
    const x = enStock(id);
    if (!x) return;
    const i = ing(id);
    const res = await dialogue(`
      <form method="dialog" novalidate>
        <h2 id="dialogue-titre">${esc(i.nom)}</h2>
        <div class="grille-champs grille-dialogue">
          <div class="champ">
            <label class="etiquette" for="dl-qte">Quantité</label>
            <input class="saisie" id="dl-qte" inputmode="decimal" value="${esc(x.qte == null ? '' : String(x.qte).replace('.', ','))}" placeholder="non suivie" autofocus>
          </div>
          <div class="champ">
            <label class="etiquette" for="dl-unite">Unité</label>
            <select class="saisie" id="dl-unite">${optionsSelect(UNITES_STOCK, x.unite || '')}</select>
          </div>
          <div class="champ">
            <label class="etiquette" for="dl-rangement">Rangé dans</label>
            <select class="saisie" id="dl-rangement">${optionsSelect(RANGEMENTS.map((r) => [r.id, r.nom]), x.rangement || i.rangement)}</select>
          </div>
        </div>
        <p class="aide">Laisse la quantité vide si tu ne veux pas la suivre : l’ingrédient comptera comme disponible en quantité suffisante.</p>
        <div class="barre-actions">
          <button type="submit" class="bouton">Enregistrer</button>
          <button type="button" class="bouton-secondaire" data-reponse="non">Annuler</button>
        </div>
      </form>`, {
      valeur: () => ({ qte: parseNombre($('#dl-qte').value), vide: !$('#dl-qte').value.trim(), unite: $('#dl-unite').value, rangement: $('#dl-rangement').value })
    });
    if (!res) return;
    modifier(() => {
      const el = enStock(id);
      if (!el) return;
      if (res.vide || res.qte == null || !res.unite) { el.qte = null; el.unite = ''; } else { el.qte = res.qte; el.unite = res.unite; }
      el.rangement = res.rangement === i.rangement ? null : res.rangement;
      toast(i.nom + ' mis à jour.');
    });
  }

  function actionRetirerStock(id) {
    const pos = etat.gardeManger.findIndex((x) => x.id === id);
    if (pos < 0) return;
    const ancien = etat.gardeManger[pos];
    const nom = ing(id).nom;
    // Le focus passe à l'élément suivant de la liste pour ne pas se perdre.
    const boutons = [...document.querySelectorAll('[data-action="gm-retirer"]')];
    const idx = boutons.findIndex((b) => b.dataset.id === id);
    const suivant = boutons[idx + 1] || boutons[idx - 1];
    modifier(() => { etat.gardeManger.splice(pos, 1); }, { focus: suivant ? suivant.id : 'gm-nom' });
    toast(nom + ' retiré du garde-manger.', {
      libelle: 'Annuler',
      fn: () => modifier(() => { etat.gardeManger.splice(Math.min(pos, etat.gardeManger.length), 0, ancien); }, { focus: 'gm-sup-' + id })
    });
  }

  function actionAjouterRecetteALaListe(id) {
    const r = recetteParId(id);
    if (!r) return;
    const pers = ui.route === 'recette' ? (ui.personnesFiche[r.id] || personnesFiltre()) : personnesFiltre();
    let n = 0;
    const boutons = [...document.querySelectorAll('[data-action="liste-ajouter-recette"]')];
    const idx = boutons.findIndex((b) => b.dataset.id === id);
    const suivant = ui.route === 'recette' ? 'fiche-cuisine' : (boutons[idx + 1] || boutons[idx - 1] || {}).id;
    modifier(() => { n = ajouterManquants(r, pers); }, suivant ? { focus: suivant } : undefined);
    toast(n ? pluriel(n, 'ingrédient ajouté', 'ingrédients ajoutés') + ' à la liste pour ' + r.nom + '.' : 'Rien de plus à ajouter pour ' + r.nom + '.');
  }

  async function actionRecetteCuisinee(id) {
    const r = recetteParId(id);
    if (!r) return;
    const pers = ui.personnesFiche[r.id] || Number(ui.params[1]) || personnesFiltre();
    const a = analyser(r, pers);
    const utilises = a.lignes.filter((l) => l.statut === 'ok' && enStock(l.id));
    if (!utilises.length) { toast('Aucun ingrédient du garde-manger à retirer.'); return; }
    const ok = await confirmer('Mettre à jour le garde-manger ?',
      'Les quantités utilisées pour ' + pluriel(pers, 'personne') + ' seront déduites : ' + utilises.map((l) => nomCourant(l.ing)).join(', ') + '. Les ingrédients sans quantité suivie restent en place.',
      'Déduire les quantités');
    if (!ok) return;
    let retires = 0;
    modifier(() => {
      for (const l of utilises) {
        const s = enStock(l.id);
        if (!s || s.qte == null || l.q == null || fam(l.u) === 'x') continue;
        const utilise = convertirFam(l.q * k(l.u), fam(l.u), fam(s.unite), l.ing);
        if (utilise == null) continue;
        const reste = s.qte * k(s.unite) - utilise;
        if (reste <= 0.01 * s.qte * k(s.unite)) {
          etat.gardeManger.splice(etat.gardeManger.indexOf(s), 1);
          retires++;
        } else s.qte = Math.round((reste / k(s.unite)) * 100) / 100;
      }
    }, { focus: 'fiche-cuisine' });
    toast('Garde-manger mis à jour' + (retires ? ' : ' + pluriel(retires, 'ingrédient épuisé', 'ingrédients épuisés') + '.' : '.'));
  }

  function actionCopierRecette(id) {
    const r = recetteParId(id);
    if (!r) return;
    const copie = JSON.parse(JSON.stringify(r));
    copie.id = 'perso-' + uid();
    copie.nom = r.nom + ' (ma version)';
    copie.source = 'perso';
    modifier(() => { etat.recettesPerso.push(copie); });
    location.hash = '#editeur/' + copie.id;
  }

  async function actionSupprimerRecette(id) {
    const r = recetteParId(id);
    if (!r || r.source !== 'perso') return;
    const ok = await confirmer('Supprimer « ' + r.nom + ' » ?', 'Cette recette sera définitivement supprimée.', 'Supprimer', true);
    if (!ok) return;
    etat.recettesPerso = etat.recettesPerso.filter((x) => x.id !== id);
    sauvegarder();
    toast('Recette supprimée.');
    if (ui.route === 'mes-recettes') rendre({ focus: 'nouvelle-recette' });
    else location.hash = '#mes-recettes';
  }

  function analyserSaisieCourse(txt) {
    const m = txt.match(/^\s*(\d+(?:[.,]\d+)?)\s*(kg|g|cl|ml|l|litres?|pi[eè]ces?|pc)?\.?\s+(?:de\s+|d[’'])?(.+)$/i);
    if (m) {
      const q = parseNombre(m[1]);
      let u = (m[2] || '').toLowerCase();
      if (/^lit/.test(u)) u = 'l';
      if (/^pi|^pc/.test(u)) u = 'pc';
      const i = ingParNom(m[3]);
      if (i) return { id: i.id, q, u: u || (i.piece ? 'pc' : i.unite === 'pincee' ? '' : i.unite) };
      if (u) return { nom: m[3].trim(), q, u };
    }
    const i = ingParNom(txt);
    if (i) return { id: i.id, q: null, u: '' };
    return { nom: txt.trim(), q: null, u: '' };
  }

  function actionAjouterCourse() {
    ui.erreurs = {};
    const txt = $('#c-ajout').value.trim();
    if (!txt) {
      ui.erreurs['c-ajout'] = 'Écris l’article à ajouter.';
      rendre({ focus: 'c-ajout' });
      return;
    }
    const a = analyserSaisieCourse(txt);
    modifier(() => {
      if (a.id) ajouterALaListe(a.id, a.q, a.u, null);
      else etat.courses.push({ cle: uid(), id: null, nom: a.nom.charAt(0).toUpperCase() + a.nom.slice(1), qte: a.q, unite: a.u, sources: [], coche: false });
    }, { focus: 'c-ajout' });
    toast((a.id ? ing(a.id).nom : a.nom) + ' ajouté à la liste.');
  }

  function actionRangerCourses() {
    const coches = etat.courses.filter((c) => c.coche);
    if (!coches.length) return;
    modifier(() => {
      for (const c of coches) {
        let id = c.id;
        if (!id) {
          const existant = ingParNom(c.nom);
          id = existant ? existant.id : creerIngredientPerso(c.nom, 'placard').id;
        }
        ajouterAuStock(id, c.qte, c.unite, null);
      }
      etat.courses = etat.courses.filter((c) => !c.coche);
    }, { focus: 'c-ajout' });
    toast(pluriel(coches.length, 'article rangé', 'articles rangés') + ' dans le garde-manger.');
  }

  async function actionCopierCourses() {
    const lignes = [];
    for (const ray of RAYONS) {
      const items = etat.courses.filter((c) => (c.id ? ing(c.id).rayon : 'div') === ray.id && !c.coche);
      if (!items.length) continue;
      lignes.push(ray.nom.toUpperCase());
      for (const c of items) {
        const i = c.id ? ing(c.id) : null;
        lignes.push('- ' + (i ? libelleArticle(i, c.qte, c.unite) : (c.qte != null ? formatQte(c.qte, c.unite) + ' ' : '') + c.nom));
      }
      lignes.push('');
    }
    try {
      await navigator.clipboard.writeText(lignes.join('\n').trim());
      toast('Liste copiée : tu peux la coller dans un message ou une note.');
    } catch (_) {
      toast('La copie n’a pas fonctionné.');
    }
  }

  function lireBrouillonDepuisDom() {
    const b = ui.brouillon;
    if (!b) return;
    document.querySelectorAll('[data-b]').forEach((el) => { b[el.dataset.b] = el.value; });
    document.querySelectorAll('[data-l]').forEach((el) => {
      const l = b.lignes.find((x) => x.k === el.dataset.l);
      if (!l || !el.dataset.champ) return;
      l[el.dataset.champ] = el.type === 'checkbox' ? el.checked : el.value;
    });
  }

  function actionEnregistrerRecette() {
    lireBrouillonDepuisDom();
    const b = ui.brouillon;
    ui.erreurs = {};
    const minutes = parseInt(b.minutes, 10);
    const personnes = parseInt(b.personnes, 10);
    const lignes = b.lignes.filter((l) => l.nom.trim());
    const etapes = String(b.etapes).split('\n').map((s) => s.trim()).filter(Boolean);
    if (!b.nom.trim()) ui.erreurs['ed-nom'] = 'Donne un nom à la recette.';
    if (!(minutes > 0)) ui.erreurs['ed-minutes'] = 'Indique un temps en minutes, par exemple 45.';
    if (!(personnes > 0 && personnes <= 50)) ui.erreurs['ed-personnes'] = 'Indique un nombre de personnes entre 1 et 50.';
    if (!lignes.length) ui.erreurs['ed-lignes'] = 'Ajoute au moins un ingrédient.';
    const qteInvalide = lignes.find((l) => l.q.trim() && parseNombre(l.q) == null);
    if (qteInvalide) ui.erreurs['ed-lignes'] = 'La quantité de « ' + qteInvalide.nom + ' » doit être un nombre, par exemple 250 ou 1,5.';
    if (!etapes.length) ui.erreurs['ed-etapes'] = 'Décris au moins une étape.';
    if (Object.keys(ui.erreurs).length) {
      rendre({ focus: 'resume-erreurs' });
      return;
    }
    const id = b.id || 'perso-' + uid();
    modifier(() => {
      const ingredients = lignes.map((l) => {
        const i = ingParNom(l.nom) || creerIngredientPerso(l.nom, 'placard');
        const q = parseNombre(l.q);
        const t = [i.id, q, q == null ? (l.u === 'pincee' ? 'pincee' : i.unite) : (l.u || i.unite)];
        if (l.opt) t.push('opt');
        return t;
      });
      const recette = {
        id, nom: b.nom.trim(), cuisine: (b.cuisine || 'Autre').trim(), type: b.type, minutes, difficulte: b.difficulte,
        personnes, ingredients, etapes, source: 'perso'
      };
      const pos = etat.recettesPerso.findIndex((r) => r.id === id);
      if (pos >= 0) etat.recettesPerso[pos] = recette; else etat.recettesPerso.push(recette);
    });
    toast('Recette enregistrée.');
    location.hash = '#recette/' + id;
  }

  async function actionImporter() {
    await enregistrerMaintenant();
    const d = await bureau.importer();
    if (!d) return;
    if (d.erreur) { toast(d.erreur); return; }
    const a = d.apercu;
    const ok = await confirmer('Remplacer les données actuelles ?',
      'Le fichier contient ' + pluriel(a.gardeManger, 'ingrédient') + ' de garde-manger, ' + pluriel(a.courses, 'article') + ' de courses et '
      + pluriel(a.recettes, 'recette perso', 'recettes perso') + '. Tes données actuelles seront remplacées.', 'Remplacer');
    if (!ok) return;
    const nouvelles = await bureau.confirmerImport(d.jeton);
    if (!nouvelles) return;
    initialiserDepuis(nouvelles);
    appliquerApparence();
    rendre({ focus: true });
    toast('Données importées.');
  }

  async function actionToutEffacer() {
    const ok = await confirmer('Tout effacer ?', 'Le garde-manger, la liste de courses, tes recettes, tes favoris et tes réglages seront supprimés. Pense à exporter d’abord si tu veux les garder.', 'Tout effacer', true);
    if (!ok) return;
    await enregistrerMaintenant();
    initialiserDepuis(await bureau.toutEffacer());
    appliquerApparence();
    rendre({ focus: true });
    toast('Toutes les données ont été effacées.');
  }

  function vueBandeauMaj() {
    if (etatMaj.etat !== 'prete') return '';
    return `<div class="bandeau-maj" role="region" aria-label="Mise à jour">
      <span>La version ${esc(etatMaj.version)} de Frigourmand est prête.</span>
      <button type="button" class="bouton" id="bandeau-maj-installer" data-action="maj-installer">Redémarrer et mettre à jour</button>
    </div>`;
  }

  async function actionChangerMotDePasse() {
    const res = await dialogue(`
      <form method="dialog" novalidate>
        <h2 id="dialogue-titre">Changer le mot de passe</h2>
        <div class="champ">
          <label class="etiquette" for="dl-mdp">Nouveau mot de passe</label>
          <input class="saisie" id="dl-mdp" type="password" autocomplete="new-password" aria-describedby="dl-mdp-aide" autofocus>
          <p class="aide aide-champ" id="dl-mdp-aide">8 caractères minimum.</p>
        </div>
        <div class="champ">
          <label class="etiquette" for="dl-mdp2">Confirmer le mot de passe</label>
          <input class="saisie" id="dl-mdp2" type="password" autocomplete="new-password">
        </div>
        <div class="barre-actions">
          <button type="submit" class="bouton">Enregistrer</button>
          <button type="button" class="bouton-secondaire" data-reponse="non">Annuler</button>
        </div>
      </form>`, { valeur: () => ({ a: $('#dl-mdp').value, b: $('#dl-mdp2').value }) });
    if (!res) return;
    if (res.a.length < 8) { toast('Le mot de passe doit contenir au moins 8 caractères.'); return; }
    if (res.a !== res.b) { toast('Les deux mots de passe ne correspondent pas.'); return; }
    const r = await bureau.compte.changerMotDePasse(res.a);
    toast(r.erreur || 'Mot de passe modifié.');
  }

  function texteMaj() {
    const e = etatMaj;
    switch (e.etat) {
      case 'dev': return 'Mises à jour automatiques : actives uniquement dans la version installée.';
      case 'verification': return 'Recherche de mises à jour…';
      case 'a-jour': return 'Frigourmand est à jour.';
      case 'telechargement': return 'Téléchargement de la version ' + (e.version || '') + '… ' + (e.pourcent || 0) + ' %';
      case 'prete': return 'La version ' + e.version + ' est prête. Elle sera installée au prochain démarrage, ou tout de suite avec le bouton ci-dessous.';
      case 'erreur': return 'La recherche de mises à jour n’a pas abouti (connexion ?). Nouvel essai plus tard.';
      default: return 'Les mises à jour sont recherchées automatiquement au démarrage.';
    }
  }

  function recevoirEtatMaj(e) {
    const avant = etatMaj.etat;
    etatMaj = e || { etat: 'inactif' };
    const zone = document.getElementById('etat-maj');
    if (ui.route === 'parametres' && (avant !== etatMaj.etat)) rendre();
    else if (zone) zone.textContent = texteMaj();
    if (etatMaj.etat === 'prete' && avant !== 'prete') {
      $('#bandeau-maj').innerHTML = vueBandeauMaj();
      toast('La version ' + etatMaj.version + ' de Frigourmand est prête : un bandeau en haut de la fenêtre permet de redémarrer.');
    }
  }

  /* ═════════════ Recherche d'ingrédient (combobox) ═════════════ */

  const RE_QUANTITE = /^(\s*\d+(?:[.,]\d+)?\s*(?:kg|g|cl|ml|l|litres?|pi[eè]ces?|pc)?\.?\s+(?:de\s+|d[’'])?)(.*)$/i;
  let minuteurAnnonce = null;

  function decouperSaisie(el) {
    if (el.dataset.recherche !== 'courses') return { prefixe: '', terme: el.value };
    const m = el.value.match(RE_QUANTITE);
    return m ? { prefixe: m[1], terme: m[2] } : { prefixe: '', terme: el.value };
  }

  function listeDe(el) { return document.getElementById(el.getAttribute('aria-controls')); }

  function fermerSuggestions(el) {
    const liste = listeDe(el);
    if (!liste) return;
    liste.hidden = true;
    liste.innerHTML = '';
    el.setAttribute('aria-expanded', 'false');
    el.removeAttribute('aria-activedescendant');
  }

  function ouvrirSuggestions(el) {
    const liste = listeDe(el);
    const { terme } = decouperSaisie(el);
    const t = terme.trim();
    if (!liste) return;
    if (!t) { fermerSuggestions(el); return; }
    const res = suggestions(t, 8);
    const exact = res.length && cleNom(res[0].nom) === cleNom(t);
    const noms = Object.fromEntries(RANGEMENTS.map((r) => [r.id, r.nom]));
    let html = res.map((i, n) => `<li role="option" class="option" id="${el.id}-opt-${n}" data-id="${esc(i.id)}" aria-selected="false">
        <span class="option-nom">${esc(i.nom)}</span><span class="option-info">${esc(noms[i.rangement] || '')}</span></li>`).join('');
    if (!exact && !['courses', 'exclu'].includes(el.dataset.recherche)) {
      html += `<li role="option" class="option option-nouveau" id="${el.id}-opt-nouveau" data-nouveau="1" aria-selected="false">
        <span class="option-nom">Ajouter « ${esc(t)} » comme nouvel ingrédient</span></li>`;
    }
    liste.innerHTML = html;
    liste.hidden = false;
    el.setAttribute('aria-expanded', 'true');
    el.removeAttribute('aria-activedescendant');
    clearTimeout(minuteurAnnonce);
    minuteurAnnonce = setTimeout(() => {
      $('#annonce-recherche').textContent = res.length
        ? pluriel(res.length, 'suggestion') + ', flèche du bas pour parcourir.'
        : 'Aucun ingrédient connu pour « ' + t + ' ».';
    }, 500);
  }

  function activerOption(el, sens) {
    const liste = listeDe(el);
    if (!liste || liste.hidden) { ouvrirSuggestions(el); if (liste && !liste.hidden) activerOption(el, sens); return; }
    const options = [...liste.querySelectorAll('[role="option"]')];
    if (!options.length) return;
    const actuel = options.findIndex((o) => o.id === el.getAttribute('aria-activedescendant'));
    let suivant = actuel + sens;
    if (suivant < 0) suivant = options.length - 1;
    if (suivant >= options.length) suivant = 0;
    options.forEach((o, i) => { o.setAttribute('aria-selected', String(i === suivant)); o.classList.toggle('active', i === suivant); });
    el.setAttribute('aria-activedescendant', options[suivant].id);
    options[suivant].scrollIntoView({ block: 'nearest' });
  }

  function choisirOption(el, option) {
    const { prefixe } = decouperSaisie(el);
    if (!option.dataset.nouveau) {
      const i = ing(option.dataset.id);
      el.value = prefixe + (el.dataset.recherche === 'courses' && prefixe ? nomCourant(i) : i.nom);
    }
    fermerSuggestions(el);
    el.focus();
    if (el.id === 'gm-nom') suggestionGardeManger();
    if (ui.route === 'editeur') lireBrouillonDepuisDom();
    $('#annonce-recherche').textContent = option.dataset.nouveau ? 'Nouvel ingrédient conservé.' : el.value + ' choisi.';
  }

  document.addEventListener('keydown', (e) => {
    const el = e.target;
    if (!el.dataset || !el.dataset.recherche) return;
    const liste = listeDe(el);
    const ouverte = liste && !liste.hidden;
    if (e.key === 'ArrowDown') { e.preventDefault(); activerOption(el, 1); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); if (ouverte) activerOption(el, -1); }
    else if (e.key === 'Enter' && ouverte) {
      const actif = el.getAttribute('aria-activedescendant');
      if (actif) { e.preventDefault(); choisirOption(el, document.getElementById(actif)); } else fermerSuggestions(el);
    } else if (e.key === 'Escape' && ouverte) { e.preventDefault(); e.stopPropagation(); fermerSuggestions(el); }
    else if (e.key === 'Tab' && ouverte) fermerSuggestions(el);
  });
  document.addEventListener('mousedown', (e) => {
    const option = e.target.closest('.suggestions [role="option"]');
    if (!option) return;
    e.preventDefault();
    const el = document.querySelector(`[aria-controls="${option.parentElement.id}"]`);
    if (el) choisirOption(el, option);
  });
  document.addEventListener('focusout', (e) => {
    const el = e.target;
    if (el.dataset && el.dataset.recherche) setTimeout(() => { if (document.activeElement !== el) fermerSuggestions(el); }, 0);
  });

  /* ═════════════ Délégation des évènements ═════════════ */

  document.addEventListener('submit', (e) => {
    const f = e.target.closest('form[data-action]');
    if (!f) return;
    e.preventDefault();
    const a = f.dataset.action;
    if (a.startsWith('auth-')) actionAuth(a.slice(5));
    else if (a === 'gm-ajouter') actionAjouterGardeManger();
    else if (a === 'exclu-ajouter') actionAjouterExclu();
    else if (a === 'courses-ajouter') actionAjouterCourse();
    else if (a === 'editeur-enregistrer') actionEnregistrerRecette();
  });

  document.addEventListener('click', (e) => {
    if (e.target.closest('#toast-action')) {
      const act = actionToast;
      clearTimeout(minuteurToast);
      masquerToast();
      if (act) act.fn();
      return;
    }
    const el = e.target.closest('[data-action]');
    if (!el || el.tagName === 'FORM' || el.tagName === 'SELECT' || (el.tagName === 'INPUT' && el.type !== 'button')) return;
    const a = el.dataset.action;
    const id = el.dataset.id;
    switch (a) {
      case 'basculer-theme':
        etat.reglages.theme = themeEffectif() === 'sombre' ? 'clair' : 'sombre';
        appliquerApparence(); sauvegarder(); rendre();
        break;
      case 'auth-mode': changerModeAuth(el.dataset.mode); break;
      case 'auth-google': connexionGoogle(); break;
      case 'demo-basculer': {
        const d = new Set(ui.demo);
        if (d.has(id)) d.delete(id); else d.add(id);
        ui.demo = [...d];
        rendre();
        break;
      }
      case 'idee-autre': ui.idee = (ui.idee || 0) + 1; rendre({ focus: 'idee-autre' }); break;
      case 'filtre-accueil': ui.filtreAccueil = el.dataset.type; rendre(); break;
      case 'ajout-rapide':
        modifier(() => { ajouterAuStock(id, null, '', null); }, { focus: 'res-gm' });
        toast(ing(id).nom + ' ajouté au garde-manger.');
        break;
      case 'exclu-retirer':
        modifier(() => { etat.reglages.exclus = (etat.reglages.exclus || []).filter((x) => x !== id); }, { focus: 'ex-nom' });
        toast(ing(id).nom + ' n’est plus exclu.');
        break;
      case 'auth-annuler-google':
        bureau.compte.annulerGoogle();
        changerModeAuth('connexion');
        break;
      case 'auth-voir': {
        const champ = document.getElementById(el.dataset.cible);
        const visible = champ.type === 'password';
        champ.type = visible ? 'text' : 'password';
        el.setAttribute('aria-pressed', String(visible));
        el.textContent = visible ? 'Masquer' : 'Afficher';
        el.setAttribute('aria-label', visible ? 'Masquer le mot de passe' : 'Afficher le mot de passe');
        break;
      }
      case 'auth-renvoyer':
        executerAuth(() => bureau.compte.renvoyerCode((ui.auth.valeurs['auth-email'] || '').trim()), () => {
          ui.auth.message = 'Un nouveau code vient d’être envoyé.';
          rendre({ focus: 'auth-code' });
        });
        break;
      case 'compte-deconnecter':
        confirmer('Se déconnecter ?', 'Tes données restent enregistrées sur ton compte. Il faudra te reconnecter pour les retrouver.', 'Se déconnecter').then(async (ok) => {
          if (!ok) return;
          await enregistrerMaintenant();
          await bureau.compte.deconnecter();
          derniereAdresse = utilisateur ? utilisateur.email : derniereAdresse;
          utilisateur = null;
          ui.auth = etatAuthInitial();
          etat = etatDefaut();
          location.hash = '';
          rendre({ focus: true });
        });
        break;
      case 'compte-mdp': actionChangerMotDePasse(); break;
      case 'synchro-maintenant':
        bureau.synchroniser().then((e) => { if (e) recevoirEtatSynchro(e); toast(e && e.etat === 'ok' ? 'Données synchronisées.' : 'Synchronisation impossible pour le moment.'); });
        break;
      case 'gm-modifier': actionModifierStock(id); break;
      case 'gm-retirer': actionRetirerStock(id); break;
      case 'basculer-plus':
        ui.ouvert3 = !ui.ouvert3; rendre();
        break;
      case 'liste-ajouter-recette': actionAjouterRecetteALaListe(id); break;
      case 'pers': {
        const r = recetteParId(ui.params[0]);
        const actuel = ui.personnesFiche[r.id] || personnesFiltre();
        ui.personnesFiche[r.id] = Math.min(24, Math.max(1, actuel + Number(el.dataset.delta)));
        rendre();
        break;
      }
      case 'recette-cuisinee': actionRecetteCuisinee(id); break;
      case 'recette-copier': actionCopierRecette(id); break;
      case 'recette-supprimer': actionSupprimerRecette(id); break;
      case 'courses-retirer': {
        const c = etat.courses.find((x) => x.cle === el.dataset.cle);
        const boutons = [...document.querySelectorAll('[data-action="courses-retirer"]')];
        const idx = boutons.indexOf(el);
        const suivant = boutons[idx + 1] || boutons[idx - 1];
        modifier(() => { etat.courses = etat.courses.filter((x) => x !== c); }, { focus: suivant ? suivant.id : 'c-ajout' });
        if (c) toast((c.id ? ing(c.id).nom : c.nom) + ' retiré de la liste.');
        break;
      }
      case 'courses-ranger': actionRangerCourses(); break;
      case 'courses-tout-cocher': {
        const tout = etat.courses.every((c) => c.coche);
        modifier(() => { etat.courses.forEach((c) => { c.coche = !tout; }); });
        break;
      }
      case 'courses-supprimer-coches': {
        const retires = etat.courses.filter((c) => c.coche);
        if (!retires.length) break;
        const avant = etat.courses.slice();
        modifier(() => { etat.courses = etat.courses.filter((c) => !c.coche); }, { focus: 'c-ajout' });
        toast(pluriel(retires.length, 'article retiré', 'articles retirés') + ' de la liste.', {
          libelle: 'Annuler',
          fn: () => modifier(() => { etat.courses = avant; }, { focus: 'c-ajout' })
        });
        break;
      }
      case 'courses-copier': actionCopierCourses(); break;
      case 'courses-vider':
        confirmer('Vider la liste de courses ?', 'Tous les articles seront retirés de la liste.', 'Vider la liste', true).then((ok) => {
          if (ok) { modifier(() => { etat.courses = []; }, { focus: 'c-ajout' }); toast('Liste vidée.'); }
        });
        break;
      case 'ed-ajouter-ligne': {
        lireBrouillonDepuisDom();
        const l = { k: uid(), nom: '', q: '', u: 'g', opt: false };
        ui.brouillon.lignes.push(l);
        rendre({ focus: 'ed-l-nom-' + l.k });
        break;
      }
      case 'ed-retirer-ligne': {
        lireBrouillonDepuisDom();
        const lignes = ui.brouillon.lignes;
        const pos = lignes.findIndex((x) => x.k === el.dataset.l);
        lignes.splice(pos, 1);
        const cible = lignes[Math.min(pos, lignes.length - 1)];
        rendre({ focus: cible ? 'ed-l-nom-' + cible.k : 'ed-ajouter-ligne' });
        break;
      }
      case 'aller-champ': {
        e.preventDefault();
        const c = el.dataset.champ;
        const cible = c === 'ed-lignes' ? document.querySelector('[data-champ="nom"]') : document.getElementById(c);
        if (cible) cible.focus();
        break;
      }
      case 'exporter':
        enregistrerMaintenant().then(() => bureau.exporter()).then((ok) => ok && toast('Données exportées.'));
        break;
      case 'favori': {
        const deja = estFavori(id);
        const r = recetteParId(id);
        modifier(() => {
          etat.favoris = deja ? etat.favoris.filter((x) => x !== id) : etat.favoris.concat(id);
        }, ui.route === 'mes-recettes' ? { focus: 'nouvelle-recette' } : undefined);
        toast((r ? r.nom : 'Recette') + (deja ? ' retirée des favoris.' : ' ajoutée aux favoris.'));
        break;
      }
      case 'maj-verifier':
        bureau.majVerifier().then(recevoirEtatMaj);
        break;
      case 'maj-installer':
        enregistrerMaintenant().then(() => bureau.majInstaller());
        break;
      case 'importer': actionImporter(); break;
      case 'tout-effacer': actionToutEffacer(); break;
      default: break;
    }
  });

  document.addEventListener('change', (e) => {
    const el = e.target;
    const a = el.dataset.action;
    if (a === 'filtre' && el.dataset.cle !== 'q') {
      ui.filtres[el.dataset.cle] = el.dataset.cle === 'personnes' ? Number(el.value) : el.value;
      if (el.dataset.cle === 'personnes') ui.personnesFiche = {};
      rendre();
    } else if (a === 'courses-cocher') {
      const c = etat.courses.find((x) => x.cle === el.dataset.cle);
      modifier(() => { if (c) c.coche = el.checked; });
    } else if (a === 'reglage') {
      const cle = el.dataset.cle;
      etat.reglages[cle] = cle === 'personnes' ? Number(el.value) : el.value;
      if (cle === 'personnes') ui.filtres.personnes = null;
      appliquerApparence();
      sauvegarder();
      rendre();
    } else if (a === 'auth-rester') {
      ui.auth.rester = el.checked;
    } else if (a === 'basique') {
      const id = el.dataset.id;
      modifier(() => {
        const s = new Set(etat.reglages.basiques);
        if (el.checked) s.add(id); else s.delete(id);
        etat.reglages.basiques = [...s];
      });
    } else if (el.id === 'gm-nom') {
      suggestionGardeManger();
    }
  });

  let minuteurRecherche = null;
  document.addEventListener('input', (e) => {
    const el = e.target;
    if (el.dataset && el.dataset.auth) { ui.auth.valeurs[el.dataset.auth] = el.value; return; }
    if (el.dataset.action === 'filtre' && el.dataset.cle === 'q') {
      ui.filtres.q = el.value;
      clearTimeout(minuteurRecherche);
      minuteurRecherche = setTimeout(() => rendre(), 200);
    } else if (el.dataset.recherche) {
      ouvrirSuggestions(el);
      if (el.id === 'gm-nom') suggestionGardeManger();
      if (ui.route === 'editeur') lireBrouillonDepuisDom();
    } else if (ui.route === 'editeur' && (el.dataset.b || el.dataset.l)) {
      lireBrouillonDepuisDom();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.altKey && !e.ctrlKey && !e.metaKey && ['1', '2', '3', '4', '5'].includes(e.key) && utilisateur) {
      e.preventDefault();
      location.hash = '#' + ['accueil', 'garde-manger', 'recettes', 'courses', 'mes-recettes'][Number(e.key) - 1];
    }
  });

  window.addEventListener('hashchange', lireRoute);
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
    if (etat.reglages.theme === 'systeme') rendre();
  });
  window.addEventListener('beforeunload', () => { enregistrerMaintenant(); });

  /* ═════════════ Démarrage ═════════════ */

  async function demarrer() {
    if (!bureau) {
      $('#contenu').innerHTML = '<h1 class="titre">Frigourmand</h1><p>Cette page doit être ouverte depuis l’application Frigourmand.</p>';
      return;
    }
    const [etatCompte, infos, maj, catalogue] = await Promise.all([bureau.compte.etat(), bureau.infos(), bureau.majEtat(), bureau.catalogue()]);
    // Catalogue disponible dès la page de présentation (essai sans compte).
    INGREDIENTS = catalogue.ingredients; RANGEMENTS = catalogue.rangements; RAYONS = catalogue.rayons; RECETTES_BASE = catalogue.recettes;
    EQUIVALENCES = catalogue.equivalences || {};
    indexIngredients = null;
    infosAppli = infos;
    etatMaj = maj;
    bureau.surMaj(recevoirEtatMaj);
    bureau.surSynchro(recevoirEtatSynchro);
    bureau.surDonneesDistantes(recevoirDonneesDistantes);
    derniereAdresse = etatCompte.derniereAdresse || '';
    ui.auth = etatAuthInitial();
    appliquerApparence();
    if (etatCompte.utilisateur) {
      await terminerConnexionSilencieuse(etatCompte.utilisateur, etatCompte.horsLigne);
    } else {
      rendre({ focus: true });
    }
  }
  async function terminerConnexionSilencieuse(u, horsLigne) {
    ui.auth.mode = 'chargement';
    rendre();
    const r = await bureau.compte.ouvrir(u);
    utilisateur = r.utilisateur;
    etatSynchro = horsLigne ? { etat: 'hors-ligne', enAttente: r.synchro.enAttente } : r.synchro;
    initialiserDepuis(r.donnees);
    appliquerApparence();
    lireRoute();
  }

  function recevoirEtatSynchro(e) {
    const avant = etatSynchro.etat;
    etatSynchro = e;
    const el = document.getElementById('indicateur-synchro');
    if (el && utilisateur) {
      const [classe, libelle] = texteSynchro();
      el.className = 'synchro synchro-' + classe;
      el.lastChild.textContent = libelle;
    }
    const zone = document.getElementById('p-etat-synchro');
    if (zone) zone.textContent = texteSynchro()[1];
    if (avant !== 'hors-ligne' && e.etat === 'hors-ligne' && utilisateur) {
      toast('Connexion perdue : tes modifications sont gardées et seront envoyées dès le retour d’Internet.');
    }
  }

  async function recevoirDonneesDistantes() {
    if (!utilisateur) return;
    // Pas de rechargement pendant l'édition d'une recette : on attendra la prochaine synchronisation.
    if (ui.route === 'editeur' || document.querySelector('dialog[open]')) return;
    await enregistrerMaintenant();
    initialiserDepuis(await bureau.charger());
    appliquerApparence();
    rendre();
  }

  demarrer().catch((e) => {
    console.error(e);
    $('#contenu').innerHTML = '<h1 class="titre">Frigourmand n’a pas pu démarrer</h1><p>' + esc(e.message) + '</p>';
  });

  // Exposé pour les tests uniquement.
  window.__frigourmand = { analyser, echelle, formatQte, libelleArticle, quantiteAchat, ingParNom, analyserSaisieCourse, etat: () => etat };
})();
