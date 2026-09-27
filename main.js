'use strict';

const { app, BrowserWindow, ipcMain, nativeTheme, dialog, shell, safeStorage } = require('electron');
const path = require('path');
const fs = require('fs');

// SQLite est encore marqué « expérimental » dans Node : on masque uniquement cet avertissement.
const emettreAvertissement = process.emitWarning;
process.emitWarning = function (avertissement, ...reste) {
  if (String(avertissement).includes('SQLite')) return;
  return emettreAvertissement.call(process, avertissement, ...reste);
};

const { Base } = require('./main/base');
const majAuto = require('./main/mises-a-jour');
const { Compte, stockageSession } = require('./main/compte');
const { Synchro } = require('./main/synchro');
const { SUPABASE_URL, SUPABASE_CLE } = require('./main/configuration');

let base = null;
let fenetre = null;
let compte = null;
let client = null;
let uid = null;
let synchro = null;

// Dossier de données alternatif (tests, développement) : FRIGOURMAND_DONNEES=chemin
if (process.env.FRIGOURMAND_DONNEES) app.setPath('userData', process.env.FRIGOURMAND_DONNEES);

// Une seule fenêtre Frigourmand à la fois : un second lancement ramène la première au premier plan.
if (!app.requestSingleInstanceLock()) app.quit();
app.on('second-instance', () => {
  if (fenetre) {
    if (fenetre.isMinimized()) fenetre.restore();
    fenetre.focus();
  }
});

function ouvrirBase() {
  const dossier = app.getPath('userData');
  fs.mkdirSync(dossier, { recursive: true });
  const fichier = path.join(dossier, 'frigourmand.sqlite');

  // L'appli s'appelait « Popote » pendant son développement : on reprend sa base si elle existe.
  const ancienDossier = path.join(app.getPath('appData'), 'Popote');
  const ancienneBase = path.join(ancienDossier, 'popote.sqlite');
  if (!fs.existsSync(fichier) && fs.existsSync(ancienneBase)) {
    for (const suffixe of ['', '-wal', '-shm']) {
      if (fs.existsSync(ancienneBase + suffixe)) fs.copyFileSync(ancienneBase + suffixe, fichier + suffixe);
    }
  }

  base = new Base(fichier);

  // Reprise du fichier JSON de la toute première version (0.1), une seule fois.
  const anciensJson = [path.join(dossier, 'popote-donnees.json'), path.join(ancienDossier, 'popote-donnees.json')];
  const ancien = anciensJson.find((f) => fs.existsSync(f));
  if (ancien && !base.meta('json_migre')) {
    try {
      base.importer(JSON.parse(fs.readFileSync(ancien, 'utf8')));
      fs.renameSync(ancien, ancien + '.migre');
    } catch (e) {
      console.error('Migration du fichier JSON impossible :', e);
    }
    base.meta('json_migre', new Date().toISOString());
  }
}

function creerFenetre() {
  fenetre = new BrowserWindow({
    width: 1320,
    height: 900,
    minWidth: 960,
    minHeight: 640,
    title: 'Frigourmand',
    icon: path.join(__dirname, 'build', 'icon.png'),
    backgroundColor: nativeTheme.shouldUseDarkColors ? '#1C1916' : '#F6EFE3',
    autoHideMenuBar: true,
    show: false,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: true,
      spellcheck: true
    }
  });

  fenetre.once('ready-to-show', () => fenetre.show());

  // Les liens externes s'ouvrent dans le navigateur, jamais dans l'appli.
  fenetre.webContents.setWindowOpenHandler(({ url }) => {
    if (/^https?:\/\//.test(url)) shell.openExternal(url);
    return { action: 'deny' };
  });
  fenetre.webContents.on('will-navigate', (e, url) => {
    if (!url.startsWith('file://')) {
      e.preventDefault();
      if (/^https?:\/\//.test(url)) shell.openExternal(url);
    }
  });

  fenetre.loadFile(path.join(__dirname, 'src', 'index.html'));
}

/* ─── Compte et synchronisation ─── */

function creerClient() {
  if (process.env.FRIGOURMAND_FAUX_SERVEUR) {
    return require('./main/faux-serveur').creerFauxClient(process.env.FRIGOURMAND_FAUX_SERVEUR);
  }
  const { createClient } = require('@supabase/supabase-js');
  return createClient(SUPABASE_URL, SUPABASE_CLE, {
    auth: {
      flowType: 'pkce',
      storage: stockageSession(path.join(app.getPath('userData'), 'session.bin'), safeStorage),
      persistSession: true,
      autoRefreshToken: true,
      detectSessionInUrl: false
    }
  });
}

/** Changement d'adresse du serveur (déménagement de la base) : l'ancienne session n'y est pas valable.
    On l'oublie pour repartir de l'écran de connexion ; les modifications en attente sont gardées. */
function oublierSessionSiServeurChange() {
  if (process.env.FRIGOURMAND_FAUX_SERVEUR) return;
  const dossier = app.getPath('userData');
  const fichier = path.join(dossier, 'serveur.txt');
  let ancien = null;
  try { ancien = fs.readFileSync(fichier, 'utf8').trim(); } catch (_) { /* premier lancement */ }
  if (ancien && ancien !== SUPABASE_URL) {
    for (const f of ['session.bin', 'dernier-compte.json']) fs.rmSync(path.join(dossier, f), { force: true });
  }
  if (ancien !== SUPABASE_URL) fs.writeFileSync(fichier, SUPABASE_URL);
}

async function enLigne() {
  if (client.estFaux) return client.enLigne();
  try {
    const r = await fetch(SUPABASE_URL + '/auth/v1/health', { headers: { apikey: SUPABASE_CLE }, signal: AbortSignal.timeout(5000) });
    return r.ok;
  } catch (_) {
    return false;
  }
}

function signaler(evenement, donnees) {
  if (fenetre && !fenetre.isDestroyed()) fenetre.webContents.send(evenement, donnees);
}

/** Ouvre la session de travail d'un utilisateur connecté : synchronisation puis données locales. */
async function ouvrirSession(utilisateur) {
  if (synchro) synchro.arreter();
  uid = utilisateur.id;
  base.assurerUtilisateur(uid);
  // Données saisies avant l'arrivée des comptes : reprises par le premier compte ouvert sur ce PC.
  const aReprendre = !base.meta('local_repris') && base.aDesDonnees('local') ? base.exporter('local') : null;
  synchro = new Synchro({ base, client, uid, signaler });
  await synchro.ouvrir({ donneesAReprendre: aReprendre });
  if (aReprendre) base.meta('local_repris', uid);
  return { utilisateur, donnees: base.charger(uid), synchro: synchro.etat };
}

function exigerSession() {
  if (!uid) throw new Error('Aucun utilisateur connecté.');
}

/** Opérations qui remplacent toutes les données de l'utilisateur (import, effacement). */
function opsRemplacement(avant, apres) {
  const dels = [];
  for (const i of avant.ingredientsPerso) dels.push({ col: 'ingredientsPerso', type: 'del', cle: i.id });
  for (const r of avant.recettesPerso) dels.push({ col: 'recettesPerso', type: 'del', cle: r.id });
  for (const x of avant.gardeManger) dels.push({ col: 'gardeManger', type: 'del', cle: x.id });
  for (const c of avant.courses) dels.push({ col: 'courses', type: 'del', cle: c.cle });
  for (const f of avant.favoris) dels.push({ col: 'favoris', type: 'del', cle: f });
  return dels.concat(Base.opsDepuisExport(apres));
}

ipcMain.handle('compte:etat', () => compte.etat());
ipcMain.handle('compte:inscrire', (_e, email, mdp, nom) => compte.inscrire(email, mdp, nom));
ipcMain.handle('compte:confirmer', (_e, email, code) => compte.confirmer(email, code));
ipcMain.handle('compte:renvoyerCode', (_e, email) => compte.renvoyerCode(email));
ipcMain.handle('compte:connecter', (_e, email, mdp, rester) => compte.connecter(email, mdp, rester));
ipcMain.handle('compte:google', async (_e, rester) => {
  const r = await compte.connecterGoogle(rester);
  // Le navigateur est passé devant : on ramène Frigourmand au premier plan.
  if (fenetre && !fenetre.isDestroyed() && !r.annule) {
    if (fenetre.isMinimized()) fenetre.restore();
    fenetre.show();
    fenetre.focus();
  }
  return r;
});
ipcMain.handle('compte:annulerGoogle', () => compte.annulerGoogle());
ipcMain.handle('compte:demanderReinitialisation', (_e, email) => compte.demanderReinitialisation(email));
ipcMain.handle('compte:reinitialiser', (_e, email, code, mdp) => compte.reinitialiser(email, code, mdp));
ipcMain.handle('compte:changerMotDePasse', (_e, mdp) => compte.changerMotDePasse(mdp));
ipcMain.handle('compte:ouvrir', (_e, utilisateur) => ouvrirSession(utilisateur));
ipcMain.handle('compte:deconnecter', async () => {
  if (synchro) { await synchro.vider(); synchro.arreter(); }
  synchro = null;
  uid = null;
  return compte.deconnecter();
});
ipcMain.handle('synchro:maintenant', async () => {
  if (!synchro) return null;
  await synchro.tirer(true);
  return synchro.etat;
});

/* ─── Données ─── */

ipcMain.handle('donnees:charger', () => { exigerSession(); return base.charger(uid); });
// Catalogue seul (recettes et ingrédients communs) : sert à la page de présentation, avant la connexion.
ipcMain.handle('donnees:catalogue', () => base.charger('local').catalogue);
ipcMain.handle('donnees:appliquer', (_e, ops) => {
  exigerSession();
  base.appliquer(ops, uid);
  synchro.enfiler(ops);
  return true;
});

ipcMain.handle('donnees:exporter', async (e) => {
  const win = BrowserWindow.fromWebContents(e.sender);
  const date = new Date().toISOString().slice(0, 10);
  const res = await dialog.showSaveDialog(win, {
    title: 'Exporter mes données Frigourmand',
    defaultPath: path.join(app.getPath('documents'), `frigourmand-${date}.json`),
    filters: [{ name: 'Sauvegarde Frigourmand', extensions: ['json'] }]
  });
  if (res.canceled || !res.filePath) return false;
  fs.writeFileSync(res.filePath, JSON.stringify(base.exporter(uid), null, 2), 'utf8');
  return true;
});

ipcMain.handle('donnees:importer', async (e) => {
  const win = BrowserWindow.fromWebContents(e.sender);
  const res = await dialog.showOpenDialog(win, {
    title: 'Importer une sauvegarde Frigourmand',
    properties: ['openFile'],
    filters: [{ name: 'Sauvegarde Frigourmand', extensions: ['json'] }]
  });
  if (res.canceled || !res.filePaths.length) return null;
  let d;
  try {
    d = JSON.parse(fs.readFileSync(res.filePaths[0], 'utf8'));
  } catch (_) {
    return { erreur: 'Ce fichier n’est pas une sauvegarde Frigourmand lisible.' };
  }
  if (!d || typeof d !== 'object' || (!d.gardeManger && !d.reglages)) {
    return { erreur: 'Ce fichier n’est pas une sauvegarde Frigourmand.' };
  }
  return { apercu: { gardeManger: (d.gardeManger || []).length, recettes: (d.recettesPerso || []).length, courses: (d.courses || []).length }, jeton: stockerImport(d) };
});

// L'import se fait en deux temps (aperçu puis confirmation) : on garde le contenu côté processus principal.
const importsEnAttente = new Map();
function stockerImport(d) {
  const jeton = Math.random().toString(36).slice(2);
  importsEnAttente.set(jeton, d);
  return jeton;
}
ipcMain.handle('donnees:confirmerImport', (_e, jeton) => {
  const d = importsEnAttente.get(jeton);
  importsEnAttente.delete(jeton);
  if (!d) return null;
  exigerSession();
  const avant = base.exporter(uid);
  base.importer(d, uid);
  synchro.enfiler(opsRemplacement(avant, base.exporter(uid)));
  return base.charger(uid);
});

ipcMain.handle('donnees:toutEffacer', () => {
  exigerSession();
  const avant = base.exporter(uid);
  base.effacer(uid);
  synchro.enfiler(opsRemplacement(avant, base.exporter(uid)));
  return base.charger(uid);
});

ipcMain.handle('theme:definir', (_e, theme) => {
  nativeTheme.themeSource = theme === 'clair' ? 'light' : theme === 'sombre' ? 'dark' : 'system';
  return true;
});

ipcMain.handle('appli:infos', () => ({
  version: app.getVersion(),
  donnees: path.join(app.getPath('userData'), 'frigourmand.sqlite'),
  installee: app.isPackaged,
  // Pour la page de présentation (avant connexion) : taille du catalogue.
  nbRecettes: base.db.prepare('SELECT COUNT(*) AS n FROM recettes WHERE proprietaire IS NULL').get().n,
  nbIngredients: base.db.prepare('SELECT COUNT(*) AS n FROM ingredients WHERE proprietaire IS NULL').get().n
}));

/* ─── Démarrage ─── */

app.whenReady().then(() => {
  ouvrirBase();
  // « Rester connecté » décoché à la dernière connexion : on repart de l'écran de connexion.
  Compte.oublierSessionTemporaire(app.getPath('userData'), process.env.FRIGOURMAND_FAUX_SERVEUR
    ? process.env.FRIGOURMAND_FAUX_SERVEUR + '.session'
    : path.join(app.getPath('userData'), 'session.bin'));
  oublierSessionSiServeurChange();
  client = creerClient();
  compte = new Compte({
    client,
    fichierDernier: path.join(app.getPath('userData'), 'dernier-compte.json'),
    enLigne,
    // Tests : le faux serveur « ouvre » la page Google en appelant directement l'adresse de retour.
    ouvrirNavigateur: client.estFaux ? (url) => { setTimeout(() => fetch(url).catch(() => {}), 200); } : (url) => shell.openExternal(url)
  });
  creerFenetre();
  // Retour sur la fenêtre : on récupère les modifications faites ailleurs (site, autre appareil).
  fenetre.on('focus', () => { if (synchro) synchro.tirer().catch(() => {}); });
  majAuto.initialiser(() => fenetre);
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) creerFenetre();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

app.on('will-quit', () => {
  if (synchro) synchro.arreter();
  if (base) base.fermer();
});
