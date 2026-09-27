/* Mises à jour automatiques via les versions publiées sur GitHub (dépôt unyti/frigourmand).
   Actif uniquement dans l'application installée ; en développement, on renvoie « dev ». */
'use strict';

const { app, ipcMain } = require('electron');

let autoUpdater = null;
let dernierEtat = { etat: 'inactif' };

function initialiser(fenetre) {
  const envoyer = (etat) => {
    dernierEtat = etat;
    const f = fenetre();
    if (f && !f.isDestroyed()) f.webContents.send('maj:etat', etat);
  };

  ipcMain.handle('maj:etat', () => dernierEtat);
  ipcMain.handle('maj:verifier', async () => {
    if (!autoUpdater) return { etat: 'dev' };
    try {
      await autoUpdater.checkForUpdates();
    } catch (e) {
      envoyer({ etat: 'erreur', message: e.message });
    }
    return dernierEtat;
  });
  ipcMain.handle('maj:installer', () => {
    if (autoUpdater) setImmediate(() => autoUpdater.quitAndInstall(false, true));
    return true;
  });

  if (!app.isPackaged) {
    dernierEtat = { etat: 'dev' };
    return;
  }

  ({ autoUpdater } = require('electron-updater'));
  autoUpdater.autoDownload = true;
  autoUpdater.autoInstallOnAppQuit = true;

  autoUpdater.on('checking-for-update', () => envoyer({ etat: 'verification' }));
  autoUpdater.on('update-available', (i) => envoyer({ etat: 'telechargement', version: i.version, pourcent: 0 }));
  autoUpdater.on('update-not-available', () => envoyer({ etat: 'a-jour' }));
  autoUpdater.on('download-progress', (p) => envoyer({ etat: 'telechargement', version: dernierEtat.version, pourcent: Math.round(p.percent) }));
  autoUpdater.on('update-downloaded', (i) => envoyer({ etat: 'prete', version: i.version }));
  autoUpdater.on('error', (e) => envoyer({ etat: 'erreur', message: e ? e.message : 'inconnue' }));

  // Vérification au démarrage, puis toutes les 6 heures.
  setTimeout(() => autoUpdater.checkForUpdates().catch(() => {}), 5000);
  setInterval(() => autoUpdater.checkForUpdates().catch(() => {}), 6 * 60 * 60 * 1000);
}

module.exports = { initialiser };
