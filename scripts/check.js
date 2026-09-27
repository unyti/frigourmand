// Vérifie la cohérence du catalogue et des recettes : node scripts/check.js
'use strict';
const fs = require('fs');
const path = require('path');

const { INGREDIENTS, RANGEMENTS, RAYONS } = require('../donnees/ingredients');
const recettes = require('../donnees/recettes');
const UNITES = ['g', 'kg', 'ml', 'cl', 'l', 'cs', 'cc', 'pc', 'pincee'];
const erreurs = [];
const ids = new Set();
for (const i of INGREDIENTS) {
  if (ids.has(i.id)) erreurs.push('Ingrédient en double : ' + i.id);
  ids.add(i.id);
  if (!RANGEMENTS.some((r) => r.id === i.rangement)) erreurs.push('Rangement inconnu : ' + i.id);
  if (!RAYONS.some((r) => r.id === i.rayon)) erreurs.push('Rayon inconnu : ' + i.id);
  if (!UNITES.includes(i.unite)) erreurs.push('Unité inconnue : ' + i.id);
  if (i.unite === 'pc' && !i.piece) erreurs.push('Unité pièce sans libellé : ' + i.id);
  if (!/^[a-z0-9-]+$/.test(i.id)) erreurs.push('Identifiant invalide : ' + i.id);
}
const rids = new Set();
const utilises = new Set();
for (const r of recettes) {
  if (rids.has(r.id)) erreurs.push('Recette en double : ' + r.id);
  rids.add(r.id);
  for (const [id, q, u, opt] of r.ingredients) {
    utilises.add(id);
    if (!ids.has(id)) erreurs.push(`${r.id} : ingrédient inconnu ${id}`);
    if (u && !UNITES.includes(u)) erreurs.push(`${r.id} : unité inconnue ${u}`);
    if (q !== null && typeof q !== 'number') erreurs.push(`${r.id} : quantité invalide pour ${id}`);
    if (opt && opt !== 'opt') erreurs.push(`${r.id} : drapeau invalide pour ${id}`);
  }
  if (!r.etapes.length) erreurs.push(r.id + ' : aucune étape');
  if (!/^[a-z0-9-]+$/.test(r.id)) erreurs.push('Identifiant de recette invalide : ' + r.id);
  if (!['Entrée', 'Plat', 'Dessert'].includes(r.type)) erreurs.push(r.id + ' : type invalide ' + r.type);
}
const parCuisine = {};
for (const r of recettes) parCuisine[r.cuisine] = (parCuisine[r.cuisine] || 0) + 1;
console.log(recettes.length + ' recettes, ' + INGREDIENTS.length + ' ingrédients');
console.log(parCuisine);
const inutiles = INGREDIENTS.filter((i) => !utilises.has(i.id)).map((i) => i.id);
console.log(inutiles.length + ' ingrédients hors recettes de base');
// Noms en double (après normalisation) : gênent la recherche.
const norm = (s) => s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\(.*?\)/g, '').trim();
const vus = new Map();
for (const i of INGREDIENTS) {
  const n = norm(i.nom);
  if (vus.has(n)) erreurs.push('Nom en double : ' + i.nom + ' (' + vus.get(n) + ', ' + i.id + ')');
  vus.set(n, i.id);
}
if (erreurs.length) { console.error(erreurs.join('\n')); process.exit(1); }
console.log('OK');
