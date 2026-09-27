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
  surMaj: (fn) => ipcRenderer.on('maj:etat', (_e, etat) => fn(etat)),
  compte: {
    etat: () => ipcRenderer.invoke('compte:etat'),
    inscrire: (email, mdp, nom) => ipcRenderer.invoke('compte:inscrire', email, mdp, nom),
    confirmer: (email, code) => ipcRenderer.invoke('compte:confirmer', email, code),
    renvoyerCode: (email) => ipcRenderer.invoke('compte:renvoyerCode', email),
    connecter: (email, mdp) => ipcRenderer.invoke('compte:connecter', email, mdp),
    demanderReinitialisation: (email) => ipcRenderer.invoke('compte:demanderReinitialisation', email),
    reinitialiser: (email, code, mdp) => ipcRenderer.invoke('compte:reinitialiser', email, code, mdp),
    changerMotDePasse: (mdp) => ipcRenderer.invoke('compte:changerMotDePasse', mdp),
    ouvrir: (utilisateur) => ipcRenderer.invoke('compte:ouvrir', utilisateur),
    deconnecter: () => ipcRenderer.invoke('compte:deconnecter')
  },
  synchroniser: () => ipcRenderer.invoke('synchro:maintenant'),
  surSynchro: (fn) => ipcRenderer.on('synchro:etat', (_e, etat) => fn(etat)),
  surDonneesDistantes: (fn) => ipcRenderer.on('synchro:donnees', () => fn())
});
