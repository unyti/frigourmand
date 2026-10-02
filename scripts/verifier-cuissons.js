// Repère les étapes de cuisson sans durée ou sans puissance de feu.
// Usage : node scripts/verifier-cuissons.js [fragment du nom de fichier]   (ex. : variantes-pates)
'use strict';
const fs = require('fs');
const path = require('path');
const dossier = path.join(__dirname, '..', 'donnees');
const filtre = process.argv[2] || '';

const CUISSON = /\b(cuire|cuisson|revenir|dorer|rissoler|mijoter|saisir|frire|griller|po[êe]ler|sauter|fondre|suer|blondir|caram[ée]liser|r[ée]duire|bouillir|fr[ée]mir|pocher|blanchir|r[ôo]tir|enfourner|gratiner|braiser|compoter|colorer|torr[ée]fier|chauffer|r[ée]chauffer|[ée]paissir)\b/i;
const DUREE = /\d+\s*(?:à\s*\d+\s*)?(?:min|h\b|s\b|sec|heure|minute)|\d+\s*h\s*\d+|le temps indiqué|selon le paquet|quelques (?:secondes|instants|minutes)/i;
const FEU = /feu (?:vif|moyen|doux|tr[èe]s doux|fort|moyen-vif)|feu doux|°C|four|gril|[ée]bullition|bouillant|fr[ée]miss|bain-marie|micro-ondes|barbecue|friteuse|grille-pain|gaufrier|vapeur|hors du feu|cuiseur|plancha|appareil à|cr[êe]pi[èe]re|cocotte-minute/i;

const recettes = [];
function R(id, nom, cuisine, type, minutes, difficulte, personnes, ingredients, etapes) { recettes.push({ id, nom, etapes, fichier: courant }); }
let courant = '';
for (const f of fs.readdirSync(dossier).filter((x) => /^recettes.*\.js$/.test(x))) {
  if (f === 'recettes.js') continue;
  courant = f;
  require(path.join(dossier, f))(R);
}
// recettes.js contient ses propres recettes : on les lit via le module complet.
const toutes = require(path.join(dossier, 'recettes.js'));
const connus = new Set(recettes.map((r) => r.id));
for (const r of toutes) if (!connus.has(r.id)) recettes.push({ id: r.id, nom: r.nom, etapes: r.etapes, fichier: 'recettes.js' });

let n = 0;
const parFichier = {};
for (const r of recettes) {
  if (filtre && !r.fichier.includes(filtre)) continue;
  r.etapes.forEach((etape, i) => {
    let e = etape;
    e = e.replace(/pr[ée]chauff\S+[^.]*\./gi, ' ').trim();   // « Préchauffer le four à 180 °C. » n'est pas une cuisson
    if (!e || !CUISSON.test(e)) return;
    const manque = [];
    if (!DUREE.test(e)) manque.push('durée');
    if (!FEU.test(e)) manque.push('feu/four');
    if (!manque.length) return;
    n++;
    parFichier[r.fichier] = (parFichier[r.fichier] || 0) + 1;
    if (filtre) console.log(`${r.id} [étape ${i + 1}] sans ${manque.join(' ni ')} : ${e}`);
  });
}
console.log(filtre ? `${n} étape(s) à vérifier` : parFichier, filtre ? '' : `total ${n}`);
