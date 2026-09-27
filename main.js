'use strict';

const { app, BrowserWindow, ipcMain, nativeTheme, dialog, shell } = require('electron');
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

let base = null;
let fenetre = null;

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

/* ─── Données ─── */

ipcMain.handle('donnees:charger', () => base.charger());
ipcMain.handle('donnees:appliquer', (_e, ops) => base.appliquer(ops));

ipcMain.handle('donnees:exporter', async (e) => {
  const win = BrowserWindow.fromWebContents(e.sender);
  const date = new Date().toISOString().slice(0, 10);
  const res = await dialog.showSaveDialog(win, {
    title: 'Exporter mes données Frigourmand',
    defaultPath: path.join(app.getPath('documents'), `frigourmand-${date}.json`),
    filters: [{ name: 'Sauvegarde Frigourmand', extensions: ['json'] }]
  });
  if (res.canceled || !res.filePath) return false;
  fs.writeFileSync(res.filePath, JSON.stringify(base.exporter(), null, 2), 'utf8');
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
  base.importer(d);
  return base.charger();
});

ipcMain.handle('donnees:toutEffacer', () => {
  base.effacer();
  return base.charger();
});

ipcMain.handle('theme:definir', (_e, theme) => {
  nativeTheme.themeSource = theme === 'clair' ? 'light' : theme === 'sombre' ? 'dark' : 'system';
  return true;
});

ipcMain.handle('appli:infos', () => ({
  version: app.getVersion(),
  donnees: path.join(app.getPath('userData'), 'frigourmand.sqlite'),
  installee: app.isPackaged
}));

/* ─── Démarrage ─── */

app.whenReady().then(() => {
  ouvrirBase();
  creerFenetre();
  majAuto.initialiser(() => fenetre);
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) creerFenetre();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

app.on('will-quit', () => {
  if (base) base.fermer();
});
