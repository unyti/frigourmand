'use strict';

const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('frigourmandBureau', {
  charger: () => ipcRenderer.invoke('donnees:charger'),
  appliquer: (ops) => ipcRenderer.invoke('donnees:appliquer', ops),
  exporter: () => ipcRenderer.invoke('donnees:exporter'),
  importer: () => ipcRenderer.invoke('donnees:importer'),
  confirmerImport: (jeton) => ipcRenderer.invoke('donnees:confirmerImport', jeton),
  toutEffacer: () => ipcRenderer.invoke('donnees:toutEffacer'),
  definirTheme: (theme) => ipcRenderer.invoke('theme:definir', theme),
  infos: () => ipcRenderer.invoke('appli:infos'),
  majEtat: () => ipcRenderer.invoke('maj:etat'),
  majVerifier: () => ipcRenderer.invoke('maj:verifier'),
  majInstaller: () => ipcRenderer.invoke('maj:installer'),
  surMaj: (fn) => ipcRenderer.on('maj:etat', (_e, etat) => fn(etat))
});
