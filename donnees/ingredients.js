/* Catalogue des ingrédients connus de Frigourmand.
   Chaque ligne : [id, nom, rangement, rayon, unité par défaut, options]
   rangement : frigo | congel | legumes | placard | epices
   rayon (courses) : fl | bou | poi | cre | boul | epi | monde | surg | div
   options : alias (autres noms reconnus à la saisie), piece [singulier, pluriel] pour l'unité « pc », pieceG (poids d'une pièce en g),
             entier (se compte en entiers), basique (considéré toujours disponible par défaut) */
'use strict';

const SUPPLEMENTAIRES = require('./ingredients-supplementaires');

  const RANGEMENTS = [
    { id: 'frigo', nom: 'Frigo' },
    { id: 'legumes', nom: 'Fruits et légumes' },
    { id: 'placard', nom: 'Placard' },
    { id: 'epices', nom: 'Épices et condiments' },
    { id: 'congel', nom: 'Congélateur' }
  ];

  const RAYONS = [
    { id: 'fl', nom: 'Fruits et légumes' },
    { id: 'bou', nom: 'Boucherie et charcuterie' },
    { id: 'poi', nom: 'Poissonnerie' },
    { id: 'cre', nom: 'Crèmerie' },
    { id: 'boul', nom: 'Boulangerie' },
    { id: 'epi', nom: 'Épicerie' },
    { id: 'monde', nom: 'Épicerie du monde' },
    { id: 'surg', nom: 'Surgelés' },
    { id: 'div', nom: 'Divers' }
  ];

  const BOTTE = { piece: ['botte', 'bottes'] };
  const L = [
    // Crèmerie, œufs, frais
    ['oeufs', 'Œufs', 'frigo', 'cre', 'pc', { piece: ['œuf', 'œufs'], entier: 1, pieceG: 55, alias: ['œuf'] }],
    ['lait', 'Lait', 'frigo', 'cre', 'cl', { alias: ['lait demi-écrémé', 'lait écrémé'] }],
    ['beurre', 'Beurre', 'frigo', 'cre', 'g', { alias: ['beurre doux'] }],
    ['creme-fraiche', 'Crème fraîche épaisse', 'frigo', 'cre', 'cl', { alias: ['crème fraîche', 'crème épaisse'] }],
    ['creme-liquide', 'Crème liquide', 'frigo', 'cre', 'cl', { alias: ['crème fleurette', 'crème liquide entière', 'crème entière'] }],
    ['yaourt', 'Yaourts nature', 'frigo', 'cre', 'pc', { piece: ['yaourt', 'yaourts'], entier: 1, pieceG: 125 }],
    ['fromage-rape', 'Fromage râpé (emmental, gruyère)', 'frigo', 'cre', 'g', { alias: ['gruyère', 'gruyère râpé', 'emmental râpé', 'fromage râpé', 'fromage'] }],
    ['parmesan', 'Parmesan', 'frigo', 'cre', 'g', { alias: ['parmigiano', 'grana padano'] }],
    ['mozzarella', 'Mozzarella', 'frigo', 'cre', 'g', { piece: ['boule', 'boules'], pieceG: 125, alias: ['mozzarella di bufala', 'mozzarella râpée'] }],
    ['chevre', 'Fromage de chèvre (bûche)', 'frigo', 'cre', 'g', { alias: ['chèvre', 'bûche de chèvre'] }],
    ['reblochon', 'Reblochon', 'frigo', 'cre', 'pc', { piece: ['reblochon', 'reblochons'], entier: 1, pieceG: 450 }],
    ['feta', 'Feta', 'frigo', 'cre', 'g'],
    ['cheddar', 'Cheddar', 'frigo', 'cre', 'pc', { piece: ['tranche', 'tranches'], entier: 1, pieceG: 20 }],
    ['mascarpone', 'Mascarpone', 'frigo', 'cre', 'g'],
    ['pate-brisee', 'Pâte brisée', 'frigo', 'cre', 'pc', { piece: ['rouleau', 'rouleaux'], entier: 1, alias: ['pâte à tarte'] }],
    ['pate-feuilletee', 'Pâte feuilletée', 'frigo', 'cre', 'pc', { piece: ['rouleau', 'rouleaux'], entier: 1 }],
    ['pate-pizza', 'Pâte à pizza', 'frigo', 'cre', 'pc', { piece: ['pâte', 'pâtes'], entier: 1 }],
    ['tofu', 'Tofu ferme', 'frigo', 'monde', 'g'],

    // Viandes, charcuterie
    ['lardons', 'Lardons', 'frigo', 'bou', 'g', { alias: ['lardons fumés', 'lardons nature', 'allumettes'] }],
    ['jambon', 'Jambon blanc', 'frigo', 'bou', 'pc', { piece: ['tranche', 'tranches'], entier: 1, pieceG: 45, alias: ['jambon', 'jambon de paris'] }],
    ['chorizo', 'Chorizo', 'frigo', 'bou', 'g'],
    ['poulet', 'Blancs de poulet', 'frigo', 'bou', 'g', { piece: ['blanc', 'blancs'], pieceG: 150, alias: ['poulet', 'filets de poulet', 'escalopes de poulet', 'blanc de poulet'] }],
    ['cuisses-poulet', 'Cuisses de poulet', 'frigo', 'bou', 'pc', { piece: ['cuisse', 'cuisses'], entier: 1, pieceG: 250 }],
    ['poulet-entier', 'Poulet entier', 'frigo', 'bou', 'pc', { piece: ['poulet', 'poulets'], entier: 1, pieceG: 1500, alias: ['poulet fermier', 'poulet label rouge'] }],
    ['boeuf-hache', 'Bœuf haché', 'frigo', 'bou', 'g', { alias: ['steak haché', 'steaks hachés', 'viande hachée'] }],
    ['boeuf-braiser', 'Bœuf à braiser (paleron, joue, macreuse)', 'frigo', 'bou', 'g', { alias: ['paleron', 'macreuse', 'gîte', 'viande à braiser', 'bœuf bourguignon', 'bœuf pour bourguignon'] }],
    ['boeuf-poeler', 'Bœuf à poêler (rumsteck, bavette)', 'frigo', 'bou', 'g', { alias: ['rumsteck', 'pièce de bœuf', 'bœuf à griller'] }],
    ['steak', 'Steaks', 'frigo', 'bou', 'pc', { piece: ['steak', 'steaks'], entier: 1, pieceG: 180, alias: ['pavé de bœuf', 'steak de bœuf', 'biftecks'] }],
    ['veau', 'Veau à blanquette (épaule, tendron)', 'frigo', 'bou', 'g', { alias: ['tendron', 'épaule de veau', 'sauté de veau', 'veau'] }],
    ['agneau', 'Épaule d’agneau en morceaux', 'frigo', 'bou', 'g', { alias: ['épaule d’agneau', 'collier d’agneau', 'sauté d’agneau', 'agneau'] }],
    ['porc-epaule', 'Échine ou épaule de porc', 'frigo', 'bou', 'g', { alias: ['échine', 'échine de porc', 'épaule de porc', 'rôti d’échine'] }],
    ['chair-saucisse', 'Chair à saucisse', 'frigo', 'bou', 'g'],
    ['saucisses', 'Saucisses de Toulouse', 'frigo', 'bou', 'pc', { piece: ['saucisse', 'saucisses'], entier: 1, pieceG: 120, alias: ['saucisses', 'saucisse de toulouse'] }],
    ['merguez', 'Merguez', 'frigo', 'bou', 'pc', { piece: ['merguez', 'merguez'], entier: 1, pieceG: 70 }],
    ['confit-canard', 'Cuisses de canard confites', 'placard', 'epi', 'pc', { piece: ['cuisse', 'cuisses'], entier: 1, alias: ['confit de canard', 'confit', 'cuisses confites'] }],

    // Poissons
    ['saumon', 'Pavés de saumon', 'frigo', 'poi', 'pc', { piece: ['pavé', 'pavés'], entier: 1, pieceG: 125, alias: ['saumon', 'saumon frais', 'filets de saumon'] }],
    ['cabillaud', 'Dos de cabillaud', 'frigo', 'poi', 'g', { alias: ['cabillaud', 'filets de cabillaud', 'pavé de cabillaud'] }],
    ['crevettes', 'Crevettes décortiquées', 'frigo', 'poi', 'g', { alias: ['crevettes', 'crevettes cuites', 'crevettes crues', 'crevettes crues décortiquées'] }],
    ['moules', 'Moules', 'frigo', 'poi', 'kg', { alias: ['moules de bouchot'] }],
    ['thon-boite', 'Thon en boîte', 'placard', 'epi', 'g', { alias: ['thon', 'miettes de thon', 'thon au naturel'] }],

    // Fruits et légumes
    ['oignons', 'Oignons', 'legumes', 'fl', 'pc', { piece: ['oignon', 'oignons'], pieceG: 100, alias: ['oignons jaunes'] }],
    ['oignon-rouge', 'Oignons rouges', 'legumes', 'fl', 'pc', { piece: ['oignon rouge', 'oignons rouges'], pieceG: 100 }],
    ['echalotes', 'Échalotes', 'legumes', 'fl', 'pc', { piece: ['échalote', 'échalotes'], pieceG: 30 }],
    ['ail', 'Ail', 'legumes', 'fl', 'pc', { piece: ['gousse', 'gousses'], entier: 1, pieceG: 5, alias: ['gousses d’ail', 'tête d’ail'] }],
    ['pommes-de-terre', 'Pommes de terre', 'legumes', 'fl', 'g', { piece: ['pomme de terre', 'pommes de terre'], pieceG: 150, alias: ['patates', 'grenailles', 'pommes de terre nouvelles', 'rattes'] }],
    ['patate-douce', 'Patates douces', 'legumes', 'fl', 'pc', { piece: ['patate douce', 'patates douces'], pieceG: 300 }],
    ['carottes', 'Carottes', 'legumes', 'fl', 'pc', { piece: ['carotte', 'carottes'], pieceG: 100 }],
    ['courgettes', 'Courgettes', 'legumes', 'fl', 'pc', { piece: ['courgette', 'courgettes'], pieceG: 200 }],
    ['aubergines', 'Aubergines', 'legumes', 'fl', 'pc', { piece: ['aubergine', 'aubergines'], pieceG: 300 }],
    ['poivrons', 'Poivrons', 'legumes', 'fl', 'pc', { piece: ['poivron', 'poivrons'], pieceG: 150 }],
    ['tomates', 'Tomates', 'legumes', 'fl', 'pc', { piece: ['tomate', 'tomates'], pieceG: 120, alias: ['tomates grappe'] }],
    ['tomates-cerises', 'Tomates cerises', 'legumes', 'fl', 'g'],
    ['concombre', 'Concombre', 'legumes', 'fl', 'pc', { piece: ['concombre', 'concombres'], pieceG: 300 }],
    ['salade', 'Salade verte', 'legumes', 'fl', 'pc', { piece: ['salade', 'salades'], entier: 1 }],
    ['epinards', 'Épinards frais', 'legumes', 'fl', 'g'],
    ['champignons', 'Champignons de Paris', 'legumes', 'fl', 'g'],
    ['poireaux', 'Poireaux', 'legumes', 'fl', 'pc', { piece: ['poireau', 'poireaux'], pieceG: 200 }],
    ['endives', 'Endives', 'legumes', 'fl', 'pc', { piece: ['endive', 'endives'], entier: 1, pieceG: 150 }],
    ['celeri', 'Céleri branche', 'legumes', 'fl', 'pc', { piece: ['branche', 'branches'], entier: 1 }],
    ['navets', 'Navets', 'legumes', 'fl', 'pc', { piece: ['navet', 'navets'], pieceG: 100 }],
    ['chou', 'Chou (vert ou blanc)', 'legumes', 'fl', 'pc', { piece: ['chou', 'choux'], pieceG: 1000 }],
    ['chou-fleur', 'Chou-fleur', 'legumes', 'fl', 'pc', { piece: ['chou-fleur', 'choux-fleurs'], pieceG: 800 }],
    ['brocoli', 'Brocoli', 'legumes', 'fl', 'pc', { piece: ['brocoli', 'brocolis'], pieceG: 400 }],
    ['haricots-verts', 'Haricots verts', 'legumes', 'fl', 'g'],
    ['potiron', 'Potiron ou butternut', 'legumes', 'fl', 'g', { alias: ['butternut', 'courge butternut', 'citrouille', 'courge'] }],
    ['germes-soja', 'Pousses de soja', 'legumes', 'fl', 'g'],
    ['avocat', 'Avocats', 'legumes', 'fl', 'pc', { piece: ['avocat', 'avocats'], entier: 1 }],
    ['citron', 'Citrons', 'legumes', 'fl', 'pc', { piece: ['citron', 'citrons'], pieceG: 120 }],
    ['citron-vert', 'Citrons verts', 'legumes', 'fl', 'pc', { piece: ['citron vert', 'citrons verts'], pieceG: 70, alias: ['lime', 'limes'] }],
    ['pommes', 'Pommes', 'legumes', 'fl', 'pc', { piece: ['pomme', 'pommes'], pieceG: 150 }],
    ['poires', 'Poires', 'legumes', 'fl', 'pc', { piece: ['poire', 'poires'], pieceG: 150 }],
    ['cerises', 'Cerises', 'legumes', 'fl', 'g'],
    ['gingembre', 'Gingembre frais', 'legumes', 'fl', 'g'],
    ['citronnelle', 'Citronnelle', 'legumes', 'monde', 'pc', { piece: ['tige', 'tiges'], entier: 1 }],
    ['persil', 'Persil frais', 'legumes', 'fl', 'pc', Object.assign({ alias: ['persil', 'persil plat', 'persil frisé'] }, BOTTE)],
    ['coriandre', 'Coriandre fraîche', 'legumes', 'fl', 'pc', Object.assign({ alias: ['coriandre'] }, BOTTE)],
    ['basilic', 'Basilic frais', 'legumes', 'fl', 'pc', Object.assign({ alias: ['basilic'] }, BOTTE)],
    ['menthe', 'Menthe fraîche', 'legumes', 'fl', 'pc', Object.assign({ alias: ['menthe'] }, BOTTE)],
    ['ciboulette', 'Ciboulette', 'legumes', 'fl', 'pc', BOTTE],
    ['ciboule', 'Ciboule (oignons nouveaux)', 'legumes', 'fl', 'pc', Object.assign({ alias: ['oignons nouveaux', 'oignons verts', 'cébettes'] }, BOTTE)],

    // Surgelés
    ['petits-pois', 'Petits pois', 'congel', 'surg', 'g'],

    // Boulangerie
    ['pain', 'Pain de campagne', 'placard', 'boul', 'pc', { piece: ['tranche', 'tranches'], entier: 1, pieceG: 40, alias: ['pain', 'pain au levain'] }],
    ['baguette', 'Baguette', 'placard', 'boul', 'pc', { piece: ['baguette', 'baguettes'], entier: 1 }],
    ['pain-mie', 'Pain de mie', 'placard', 'boul', 'pc', { piece: ['tranche', 'tranches'], entier: 1, pieceG: 25 }],
    ['pain-burger', 'Pains à burger', 'placard', 'boul', 'pc', { piece: ['pain', 'pains'], entier: 1 }],

    // Placard : féculents
    ['pates', 'Pâtes (penne, coquillettes…)', 'placard', 'epi', 'g', { alias: ['penne', 'coquillettes', 'macaronis', 'fusilli', 'farfalle', 'tagliatelles', 'rigatoni', 'torsades', 'conchiglie', 'pâtes sèches'] }],
    ['spaghetti', 'Spaghetti', 'placard', 'epi', 'g'],
    ['lasagnes', 'Feuilles de lasagnes', 'placard', 'epi', 'g', { alias: ['lasagnes', 'plaques de lasagnes'] }],
    ['riz', 'Riz', 'placard', 'epi', 'g', { alias: ['riz basmati', 'riz thaï', 'riz long'] }],
    ['riz-risotto', 'Riz à risotto (arborio)', 'placard', 'epi', 'g'],
    ['nouilles', 'Nouilles de blé', 'placard', 'monde', 'g'],
    ['nouilles-riz', 'Nouilles ou vermicelles de riz', 'placard', 'monde', 'g', { alias: ['vermicelles de riz', 'nouilles de riz'] }],
    ['galettes-riz', 'Galettes de riz', 'placard', 'monde', 'pc', { piece: ['galette', 'galettes'], entier: 1, alias: ['feuilles de riz', 'galettes de riz vietnamiennes'] }],
    ['tortillas', 'Tortillas de blé', 'placard', 'monde', 'pc', { piece: ['tortilla', 'tortillas'], entier: 1, alias: ['wraps'] }],
    ['semoule', 'Semoule de couscous', 'placard', 'epi', 'g', { alias: ['semoule', 'couscous', 'semoule fine'] }],
    ['boulgour', 'Boulgour fin', 'placard', 'epi', 'g'],
    ['lentilles', 'Lentilles vertes', 'placard', 'epi', 'g', { alias: ['lentilles du puy'] }],
    ['lentilles-corail', 'Lentilles corail', 'placard', 'epi', 'g'],
    ['pois-chiches', 'Pois chiches (cuits)', 'placard', 'epi', 'g'],
    ['haricots-blancs', 'Haricots blancs (cuits)', 'placard', 'epi', 'g'],
    ['haricots-rouges', 'Haricots rouges (cuits)', 'placard', 'epi', 'g'],
    ['farine', 'Farine', 'placard', 'epi', 'g', { alias: ['farine de blé'] }],
    ['farine-sarrasin', 'Farine de sarrasin', 'placard', 'epi', 'g'],
    ['maizena', 'Fécule de maïs (Maïzena)', 'placard', 'epi', 'g', { alias: ['maïzena', 'maizena'] }],
    ['chapelure', 'Chapelure', 'placard', 'epi', 'g'],

    // Placard : sucré
    ['sucre', 'Sucre', 'placard', 'epi', 'g', { basique: 1, alias: ['sucre en poudre', 'sucre semoule', 'sucre blanc'] }],
    ['sucre-vanille', 'Sucre vanillé', 'placard', 'epi', 'pc', { piece: ['sachet', 'sachets'], entier: 1 }],
    ['levure-chimique', 'Levure chimique', 'placard', 'epi', 'pc', { piece: ['sachet', 'sachets'], entier: 1 }],
    ['chocolat-noir', 'Chocolat noir pâtissier', 'placard', 'epi', 'g', { alias: ['chocolat', 'chocolat noir'] }],
    ['miel', 'Miel', 'placard', 'epi', 'cs'],
    ['boudoirs', 'Biscuits à la cuillère', 'placard', 'epi', 'pc', { piece: ['biscuit', 'biscuits'], entier: 1 }],
    ['cafe', 'Café', 'placard', 'epi', 'cl'],
    ['gelatine', 'Gélatine', 'placard', 'epi', 'pc', { piece: ['feuille', 'feuilles'], entier: 1 }],
    ['pruneaux', 'Pruneaux', 'placard', 'epi', 'g'],
    ['amandes-poudre', 'Poudre d’amande', 'placard', 'epi', 'g', { alias: ['amandes en poudre', 'amande en poudre'] }],
    ['pignons', 'Pignons de pin', 'placard', 'epi', 'g'],
    ['cacahuetes', 'Cacahuètes non salées', 'placard', 'epi', 'g'],
    ['cajou', 'Noix de cajou', 'placard', 'epi', 'g'],
    ['olives', 'Olives noires', 'placard', 'epi', 'g'],

    // Placard : conserves, liquides
    ['tomates-concassees', 'Tomates concassées (boîte)', 'placard', 'epi', 'g', { alias: ['pulpe de tomate', 'tomates en dés'] }],
    ['coulis-tomate', 'Coulis de tomate (passata)', 'placard', 'epi', 'cl', { alias: ['passata'] }],
    ['concentre-tomate', 'Concentré de tomate', 'placard', 'epi', 'cs'],
    ['lait-coco', 'Lait de coco', 'placard', 'monde', 'cl'],
    ['bouillon', 'Bouillon (cube, volaille ou légumes)', 'placard', 'epi', 'pc', { piece: ['cube', 'cubes'], entier: 1, alias: ['bouillon cube', 'cube de bouillon', 'bouillon', 'bouillon de volaille', 'bouillon de légumes', 'bouillon de bœuf', 'fond de volaille'] }],
    ['vin-rouge', 'Vin rouge', 'placard', 'div', 'cl'],
    ['vin-blanc', 'Vin blanc sec', 'placard', 'div', 'cl'],
    ['biere', 'Bière brune', 'placard', 'div', 'cl'],

    // Condiments
    ['huile-olive', 'Huile d’olive', 'epices', 'epi', 'cs', { basique: 1 }],
    ['huile', 'Huile neutre (tournesol, colza)', 'epices', 'epi', 'cs', { basique: 1, alias: ['huile', 'huile de tournesol', 'huile de colza', 'huile d’arachide', 'huile de pépins de raisin', 'huile de friture'] }],
    ['vinaigre', 'Vinaigre de vin', 'epices', 'epi', 'cs', { alias: ['vinaigre de vin rouge'] }],
    ['moutarde', 'Moutarde de Dijon', 'epices', 'epi', 'cs'],
    ['sauce-soja', 'Sauce soja', 'epices', 'monde', 'cs'],
    ['sauce-poisson', 'Sauce poisson (nuoc-mâm)', 'epices', 'monde', 'cs', { alias: ['nuoc mam', 'nuoc-mâm'] }],
    ['sauce-huitre', 'Sauce d’huître', 'epices', 'monde', 'cs'],
    ['huile-sesame', 'Huile de sésame', 'epices', 'monde', 'cs'],
    ['vinaigre-riz', 'Vinaigre de riz', 'epices', 'monde', 'cs'],
    ['miso', 'Pâte miso', 'frigo', 'monde', 'cs'],
    ['gochujang', 'Gochujang (pâte de piment coréenne)', 'frigo', 'monde', 'cs'],
    ['pate-curry-rouge', 'Pâte de curry rouge', 'frigo', 'monde', 'cs'],
    ['pate-curry-verte', 'Pâte de curry vert', 'frigo', 'monde', 'cs'],
    ['tahini', 'Tahini (crème de sésame)', 'placard', 'monde', 'cs'],
    ['harissa', 'Harissa', 'epices', 'monde', 'cc'],
    ['citron-confit', 'Citrons confits', 'placard', 'monde', 'pc', { piece: ['citron confit', 'citrons confits'], entier: 1 }],
    ['graines-sesame', 'Graines de sésame', 'epices', 'epi', 'cs', { alias: ['sésame'] }],

    // Épices et herbes sèches
    ['sel', 'Sel', 'epices', 'epi', 'pincee', { basique: 1, alias: ['sel fin'] }],
    ['poivre', 'Poivre', 'epices', 'epi', 'pincee', { basique: 1, alias: ['poivre du moulin', 'poivre noir'] }],
    ['muscade', 'Noix de muscade', 'epices', 'epi', 'pincee', { alias: ['muscade'] }],
    ['cumin', 'Cumin', 'epices', 'epi', 'cc'],
    ['curry', 'Curry en poudre', 'epices', 'epi', 'cc'],
    ['curcuma', 'Curcuma', 'epices', 'epi', 'cc'],
    ['paprika', 'Paprika', 'epices', 'epi', 'cc'],
    ['piment', 'Piment (Espelette ou en poudre)', 'epices', 'epi', 'pincee', { alias: ['piment d’espelette', 'espelette', 'piment en poudre'] }],
    ['cannelle', 'Cannelle', 'epices', 'epi', 'cc'],
    ['garam-masala', 'Garam masala', 'epices', 'monde', 'cc'],
    ['ras-el-hanout', 'Ras el hanout', 'epices', 'monde', 'cc'],
    ['herbes-provence', 'Herbes de Provence', 'epices', 'epi', 'cc'],
    ['origan', 'Origan', 'epices', 'epi', 'cc'],
    ['thym', 'Thym', 'epices', 'epi', 'pc', { piece: ['branche', 'branches'], entier: 1, alias: ['thym séché'] }],
    ['laurier', 'Laurier', 'epices', 'epi', 'pc', { piece: ['feuille', 'feuilles'], entier: 1 }],
    ['bouquet-garni', 'Bouquet garni', 'epices', 'epi', 'pc', { piece: ['bouquet', 'bouquets'], entier: 1 }]
  ];

  const INGREDIENTS = L.map(([id, nom, rangement, rayon, unite, opt]) => Object.assign(
    { id, nom, rangement, rayon, unite },
    opt || {}
  )).concat(SUPPLEMENTAIRES);

module.exports = { INGREDIENTS, RANGEMENTS, RAYONS };
