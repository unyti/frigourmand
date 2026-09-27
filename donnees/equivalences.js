/* Ingrédients qui peuvent en remplacer d'autres dans une recette.
   - GROUPES : interchangeables entre eux (n'importe lequel convient pour n'importe quel autre).
   - REMPLACANTS : dans un seul sens (« ail » peut être remplacé par « ail en poudre », pas l'inverse).
   - APPROXIMATIFS : remplacements possibles mais qui changent le goût ou la texture (« à adapter ») :
     la recette reste proposée, mais c'est signalé dès la liste des recettes.
   L'appli cherche d'abord l'ingrédient exact, puis un remplaçant exact, puis un remplaçant approximatif. */
'use strict';

const GROUPES = [
  // Féculents
  ['pates', 'spaghetti', 'tagliatelles', 'linguine', 'pates-fraiches'],
  ['riz', 'riz-basmati', 'riz-complet'],
  ['riz-rond', 'riz-risotto'],
  // Crèmerie
  ['creme-fraiche', 'creme-liquide', 'creme-fraiche-legere'],
  ['lait', 'lait-entier'],
  ['fromage-rape', 'emmental', 'gruyere', 'comte'],
  ['parmesan', 'pecorino'],
  ['chevre', 'chevre-frais'],
  // Viandes
  ['poulet', 'blanc-de-poulet', 'aiguillettes-de-poulet'],
  ['cuisses-poulet', 'hauts-de-cuisse-de-poulet', 'pilons-de-poulet'],
  ['lardons', 'bacon'],
  ['boeuf-poeler', 'bavette'],
  ['boeuf-braiser', 'joue-de-boeuf'],
  ['porc-epaule', 'palette-de-porc'],
  // Légumes et aromates (frais / surgelés)
  ['oignons', 'oignons-blancs', 'oignons-surgeles', 'echalotes'],
  ['haricots-verts', 'haricots-verts-surgeles'],
  ['epinards', 'epinards-surgeles'],
  ['brocoli', 'brocolis-surgeles'],
  ['champignons', 'champignons-bruns'],
  ['poivrons', 'poivrons-rouges', 'poivrons-verts', 'poivrons-jaunes'],
  ['salade', 'laitue'],
  ['thym', 'thym-frais'],
  ['crevettes', 'crevettes-surgelees'],
  // Épicerie
  ['tomates-concassees', 'tomates-pelees'],
  ['coulis-tomate', 'sauce-tomate-cuisinee'],
  ['huile', 'huile-de-colza'],
  ['vinaigre', 'vinaigre-de-cidre', 'vinaigre-blanc', 'vinaigre-de-xeres'],
  ['moutarde', 'moutarde-a-l-ancienne'],
  ['sucre', 'sucre-roux'],
  ['lait-coco', 'creme-de-coco'],
  ['piment', 'piment-de-cayenne'],
  ['pate-feuilletee', 'pate-feuilletee-surgelee']
];

const REMPLACANTS = {
  ail: ['ail-en-poudre'],
  'oignon-rouge': ['oignons', 'oignons-blancs'],
  citron: ['jus-de-citron'],
  persil: ['persil-seche'],
  ciboulette: ['ciboulette-sechee'],
  basilic: ['basilic-seche'],
  huile: ['huile-olive'],
  'huile-olive': ['huile', 'huile-de-colza'],
  vinaigre: ['vinaigre-balsamique'],
  'tomates-concassees': ['coulis-tomate', 'sauce-tomate-cuisinee'],
  'cuisses-poulet': ['poulet', 'blanc-de-poulet'],
  'pilons-de-poulet': ['poulet'],
  'hauts-de-cuisse-de-poulet': ['poulet'],
  ciboule: ['oignons', 'ciboulette']
};

/* « recette > stock » : remplacement qui change le résultat. Les autres sont considérés comme équivalents. */
const APPROXIMATIFS = new Set([
  'vinaigre>vinaigre-balsamique', 'vinaigre-de-xeres>vinaigre-blanc', 'vinaigre-de-cidre>vinaigre-blanc',
  'ail>ail-en-poudre', 'persil>persil-seche', 'ciboulette>ciboulette-sechee', 'basilic>basilic-seche',
  'ciboule>oignons', 'ciboule>ciboulette',
  'echalotes>oignons', 'echalotes>oignons-blancs', 'echalotes>oignons-surgeles',
  'oignons>echalotes', 'oignons-blancs>echalotes', 'oignons-surgeles>echalotes',
  'creme-liquide>creme-fraiche', 'creme-liquide>creme-fraiche-legere', 'creme-fraiche>creme-liquide', 'creme-fraiche>creme-fraiche-legere',
  'cuisses-poulet>poulet', 'cuisses-poulet>blanc-de-poulet', 'pilons-de-poulet>poulet', 'hauts-de-cuisse-de-poulet>poulet',
  'tomates-concassees>coulis-tomate', 'tomates-concassees>sauce-tomate-cuisinee',
  'huile-olive>huile', 'huile-olive>huile-de-colza', 'sucre>sucre-roux', 'sucre-roux>sucre',
  'parmesan>pecorino', 'pecorino>parmesan', 'riz>riz-complet', 'riz-basmati>riz-complet', 'riz-complet>riz', 'riz-complet>riz-basmati',
  'lait-coco>creme-de-coco', 'creme-de-coco>lait-coco', 'lardons>bacon', 'bacon>lardons'
]);

/** { idRecette: [{ id, approx }] } dans l'ordre de préférence : remplaçants exacts d'abord. */
function construire(idsConnus) {
  const r = {};
  const ajouter = (a, b) => {
    if (a === b || (idsConnus && (!idsConnus.has(a) || !idsConnus.has(b)))) return;
    const liste = (r[a] = r[a] || []);
    if (!liste.some((x) => x.id === b)) liste.push({ id: b, approx: APPROXIMATIFS.has(a + '>' + b) });
  };
  for (const g of GROUPES) for (const a of g) for (const b of g) ajouter(a, b);
  for (const [a, liste] of Object.entries(REMPLACANTS)) for (const b of liste) ajouter(a, b);
  for (const liste of Object.values(r)) liste.sort((x, y) => x.approx - y.approx);
  return r;
}

module.exports = { GROUPES, REMPLACANTS, APPROXIMATIFS, construire };
