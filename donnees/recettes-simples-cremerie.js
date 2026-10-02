/* Recettes simples ajoutées en 0.9 (même format que recettes.js). */
'use strict';

module.exports = function ajouter(R) {

  /* ───────────── Fromages : entrées ───────────── */

  R('camembert-roti', 'Camembert rôti au four', 'Française', 'Entrée', 25, 'Facile', 4, [
    ['camembert', 1], ['ail', 1], ['thym-frais', 2, 'pc', 'opt'], ['miel', 1, 'cs', 'opt'],
    ['baguette', 1], ['poivre', null]
  ], [
    'Préchauffer le four à 200 °C. Retirer le papier du camembert et le remettre dans le fond de sa boîte en bois (sans le couvercle), ou dans un petit plat.',
    'Entailler le dessus en croisillons avec un couteau, glisser l’ail coupé en lamelles dans les entailles, parsemer de thym, arroser de miel et poivrer.',
    'Enfourner 15 min à 200 °C, jusqu’à ce que le cœur soit bien coulant.',
    'Pendant ce temps, couper la baguette en tranches et les faire griller 3 à 4 min au four à 200 °C. Servir aussitôt en trempant le pain dans le fromage.'
  ]);

  R('beignets-camembert', 'Beignets de camembert', 'Française', 'Entrée', 30, 'Facile', 4, [
    ['camembert', 1], ['oeufs', 2], ['farine', 40, 'g'], ['chapelure', 80, 'g'], ['huile', 50, 'cl'],
    ['confiture', 60, 'g', 'opt'], ['poivre', null]
  ], [
    'Bien refroidir le camembert au réfrigérateur, puis le couper en 8 parts.',
    'Battre les œufs avec un peu de poivre. Passer chaque part successivement dans la farine, l’œuf puis la chapelure ; recommencer œuf et chapelure pour une double panure bien étanche.',
    'Chauffer l’huile à 170 °C dans une petite casserole (un morceau de pain doit dorer en 1 min).',
    'Frire les beignets 1 à 2 min par fournée dans l’huile à 170 °C, jusqu’à ce qu’ils soient bien dorés, puis les égoutter sur du papier absorbant.',
    'Servir aussitôt, avec la confiture (airelles, figues ou cerises noires).'
  ]);

  R('brie-feuillete', 'Brie en croûte feuilletée', 'Française', 'Entrée', 40, 'Facile', 6, [
    ['brie', 400, 'g'], ['pate-feuilletee', 1], ['oeufs', 1], ['cerneaux-de-noix', 30, 'g', 'opt'],
    ['miel', 1, 'cs', 'opt']
  ], [
    'Préchauffer le four à 200 °C. Dérouler la pâte sur une plaque couverte de papier cuisson.',
    'Poser le brie au centre, le napper de miel et le parsemer de noix concassées.',
    'Rabattre la pâte sur le fromage en plissant les bords, et retourner le paquet pour que la soudure soit dessous. Couper l’excédent de pâte.',
    'Badigeonner d’œuf battu et percer une petite cheminée au centre.',
    'Cuire 25 min au four à 200 °C, jusqu’à ce que la pâte soit bien gonflée et dorée. Laisser reposer 5 min avant de couper.'
  ]);

  R('tartines-seigle-chevre-miel', 'Tartines de seigle au chèvre et au miel', 'Française', 'Entrée', 15, 'Facile', 4, [
    ['pain-de-seigle', 4], ['crottins-de-chevre', 2], ['miel', 2, 'cs'], ['thym-frais', 1, 'pc', 'opt'],
    ['mache', 80, 'g', 'opt'], ['poivre', null]
  ], [
    'Allumer le gril du four. Couper chaque crottin en 4 rondelles.',
    'Poser 2 rondelles de chèvre sur chaque tranche de pain, arroser d’un filet de miel, parsemer de thym effeuillé et poivrer.',
    'Passer 4 à 5 min sous le gril du four, à 10 cm de la résistance, jusqu’à ce que le chèvre soit fondant et légèrement doré.',
    'Servir aussitôt, sur un peu de mâche.'
  ]);

  R('tarte-fine-tomates-crottin', 'Tarte fine tomates et crottin de chèvre', 'Française', 'Entrée', 40, 'Facile', 4, [
    ['pate-feuilletee', 1], ['tomates', 3], ['crottins-de-chevre', 2], ['moutarde', 1, 'cs'],
    ['huile-olive', 1, 'cs'], ['thym-frais', 2, 'pc', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Préchauffer le four à 200 °C. Dérouler la pâte sur une plaque, la piquer à la fourchette et la tartiner de moutarde en laissant 1 cm de bord.',
    'Couper les tomates et les crottins en rondelles. Les disposer en rosace sur la pâte, en les alternant.',
    'Arroser d’huile d’olive, parsemer de thym effeuillé, saler légèrement et poivrer.',
    'Cuire 25 min au four à 200 °C, jusqu’à ce que la pâte soit dorée et croustillante sur les bords.'
  ]);

  R('salade-bleu-poires-noix', 'Salade au bleu d’Auvergne, poires et noix', 'Française', 'Entrée', 15, 'Facile', 4, [
    ['salade', 1], ['bleu-d-auvergne', 150, 'g'], ['poires', 2], ['cerneaux-de-noix', 50, 'g'],
    ['huile-de-noix', 3, 'cs'], ['vinaigre', 1, 'cs'], ['sel', null], ['poivre', null]
  ], [
    'Laver et essorer la salade.',
    'Préparer la vinaigrette : mélanger le vinaigre avec le sel et le poivre, puis ajouter l’huile de noix.',
    'Peler les poires, les épépiner et les couper en lamelles. Émietter le bleu et concasser grossièrement les noix.',
    'Mélanger la salade à la vinaigrette, puis répartir les poires, le bleu et les noix par-dessus. Servir aussitôt.'
  ]);

  R('salade-tiede-saint-nectaire', 'Salade tiède au saint-nectaire et lardons', 'Française', 'Entrée', 20, 'Facile', 4, [
    ['salade', 1], ['saint-nectaire', 200, 'g'], ['lardons', 150, 'g'], ['pain', 2],
    ['huile', 3, 'cs'], ['vinaigre', 1, 'cs'], ['moutarde', 1, 'cc'], ['sel', null], ['poivre', null]
  ], [
    'Laver et essorer la salade. Retirer la croûte du saint-nectaire et le couper en dés.',
    'Couper le pain en cubes. Faire revenir les lardons à sec 5 min à feu moyen, ajouter le pain et dorer encore 3 min en remuant.',
    'Préparer la vinaigrette : mélanger la moutarde, le vinaigre, le sel et le poivre, puis ajouter l’huile.',
    'Mélanger la salade à la vinaigrette, répartir le saint-nectaire puis les lardons et croûtons chauds, qui font légèrement fondre le fromage. Servir aussitôt.'
  ]);

  R('salade-rocamadour', 'Salade de rocamadour chaud aux noix', 'Française', 'Entrée', 20, 'Facile', 4, [
    ['rocamadour', 4], ['baguette', 0.5], ['mache', 150, 'g'], ['cerneaux-de-noix', 40, 'g'],
    ['miel', 1, 'cs', 'opt'], ['huile-de-noix', 3, 'cs'], ['vinaigre', 1, 'cs'], ['sel', null], ['poivre', null]
  ], [
    'Préchauffer le four à 200 °C. Couper la baguette en 4 tranches épaisses, en biais.',
    'Poser un rocamadour sur chaque tranche, arroser d’un peu de miel et enfourner 6 à 8 min à 200 °C, jusqu’à ce que les fromages soient fondants et dorés.',
    'Pendant ce temps, préparer la vinaigrette avec le vinaigre, le sel, le poivre et l’huile de noix, et y mélanger la mâche.',
    'Répartir la salade dans les assiettes, parsemer de noix et poser les toasts chauds par-dessus.'
  ]);

  R('salade-brebis-jambon-cru', 'Salade basque au fromage de brebis', 'Française', 'Entrée', 15, 'Facile', 4, [
    ['salade', 1], ['tomme-de-brebis', 150, 'g'], ['jambon-cru', 4], ['confiture', 80, 'g', 'opt'],
    ['huile-olive', 3, 'cs'], ['vinaigre', 1, 'cs'], ['piment', 1, 'pincee', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Laver et essorer la salade. Couper le fromage de brebis en fines lamelles et le jambon en lanières.',
    'Préparer la vinaigrette : mélanger le vinaigre, le sel, le poivre et le piment, puis ajouter l’huile d’olive.',
    'Mélanger la salade à la vinaigrette, puis disposer le brebis et le jambon par-dessus.',
    'Servir avec une cuillerée de confiture de cerises noires, qui accompagne traditionnellement le brebis.'
  ]);

  R('tostas-manchego-chorizo', 'Tostas au manchego et chorizo', 'Espagnole', 'Entrée', 15, 'Facile', 4, [
    ['baguette', 1], ['manchego', 120, 'g'], ['chorizo', 80, 'g'], ['tomates', 1],
    ['piquillos', 100, 'g', 'opt'], ['huile-olive', 2, 'cs']
  ], [
    'Couper la baguette en tranches de 1 cm et les faire griller 3 min sous le gril du four ou au grille-pain.',
    'Frotter chaque tranche encore chaude avec la tomate coupée en deux, puis arroser d’un filet d’huile d’olive.',
    'Couper le manchego en fines lamelles et le chorizo en rondelles fines.',
    'Garnir chaque tosta d’une lamelle de manchego, d’une rondelle de chorizo et d’un morceau de piquillo. Servir aussitôt.'
  ]);

  R('halloumi-grille-pasteque', 'Halloumi grillé, pastèque et menthe', 'Méditerranéenne', 'Entrée', 15, 'Facile', 4, [
    ['halloumi', 250, 'g'], ['pasteque', 0.25], ['menthe', 0.5], ['citron-vert', 1],
    ['huile-olive', 2, 'cs'], ['poivre', null]
  ], [
    'Couper la pastèque en dés en retirant l’écorce et les pépins. Les répartir sur un plat avec les feuilles de menthe ciselées.',
    'Couper le halloumi en tranches de 1 cm et les sécher dans du papier absorbant.',
    'Chauffer une poêle à feu vif avec 1 cs d’huile et saisir le halloumi 1 à 2 min par face, jusqu’à ce qu’il soit bien doré.',
    'Poser le halloumi chaud sur la pastèque, arroser du jus du citron vert et du reste d’huile, poivrer et servir aussitôt.'
  ]);

  R('tarte-fine-pesto-rouge', 'Tarte fine au pesto rouge et mozzarella', 'Italienne', 'Entrée', 35, 'Facile', 4, [
    ['pate-feuilletee', 1], ['pesto-rouge', 80, 'g'], ['tomates', 2], ['mozzarella', 125, 'g'],
    ['basilic', 0.25, 'pc', 'opt'], ['poivre', null]
  ], [
    'Préchauffer le four à 200 °C. Dérouler la pâte sur une plaque et la piquer à la fourchette.',
    'Étaler le pesto rouge sur la pâte en laissant 1 cm de bord.',
    'Couper les tomates et la mozzarella égouttée en rondelles, les disposer en les alternant et poivrer.',
    'Cuire 20 à 25 min au four à 200 °C, jusqu’à ce que la pâte soit dorée. Parsemer de basilic avant de servir.'
  ]);

  R('tarte-pont-l-eveque-pommes', 'Tarte fine au pont-l’évêque et aux pommes', 'Française', 'Entrée', 40, 'Facile', 4, [
    ['pate-feuilletee', 1], ['pont-l-eveque', 200, 'g'], ['pommes', 2], ['creme-fraiche', 5, 'cl'],
    ['poivre', null]
  ], [
    'Préchauffer le four à 200 °C. Dérouler la pâte sur une plaque, la piquer et la tartiner de crème en laissant 1 cm de bord.',
    'Peler les pommes, les épépiner et les couper en fines lamelles. Couper le pont-l’évêque en tranches fines, avec la croûte.',
    'Disposer les lamelles de pomme sur la crème, puis le fromage par-dessus. Poivrer.',
    'Cuire 25 min au four à 200 °C, jusqu’à ce que la pâte soit dorée et le fromage fondu. Servir tiède, avec une salade verte.'
  ]);

  R('cake-mimolette-olives', 'Cake à la mimolette et aux olives', 'Française', 'Entrée', 60, 'Facile', 6, [
    ['farine', 180, 'g'], ['oeufs', 3], ['levure-chimique', 1], ['lait', 12, 'cl'], ['huile', 8, 'cs'], ['beurre', 10, 'g'],
    ['mimolette', 150, 'g'], ['olives-vertes', 100, 'g'], ['sel', 1], ['poivre', null]
  ], [
    'Préchauffer le four à 180 °C. Beurrer et fariner un moule à cake.',
    'Mélanger la farine et la levure. Ajouter les œufs un à un en fouettant, puis le lait tiède et l’huile, jusqu’à obtenir une pâte lisse. Saler peu et poivrer.',
    'Râper grossièrement la mimolette et couper les olives dénoyautées en rondelles. Les incorporer à la pâte.',
    'Verser dans le moule et cuire 40 à 45 min au four à 180 °C, jusqu’à ce que la lame d’un couteau ressorte sèche.',
    'Laisser tiédir avant de démouler. Servir tiède ou froid, en tranches.'
  ]);

  R('gressins-jambon-cru', 'Gressins au jambon cru', 'Italienne', 'Entrée', 10, 'Facile', 4, [
    ['gressins', 100, 'g'], ['jambon-cru', 8], ['fromage-frais-a-tartiner', 60, 'g', 'opt'], ['poivre', null]
  ], [
    'Couper chaque tranche de jambon en deux dans la longueur.',
    'Tartiner très légèrement chaque bande de fromage frais, poivrer.',
    'Enrouler une bande de jambon en spirale autour du haut de chaque gressin, en serrant bien.',
    'Servir aussitôt, debout dans un verre, pour que les gressins restent croustillants.'
  ]);

  R('fougasse-lardons', 'Fougasse aux lardons', 'Française', 'Entrée', 50, 'Facile', 6, [
    ['pate-a-pain', 1], ['lardons', 150, 'g'], ['huile-olive', 2, 'cs'], ['farine', 20, 'g'],
    ['herbes-provence', 1, 'cc', 'opt']
  ], [
    'Faire revenir les lardons à sec 5 min à feu moyen, sans trop les colorer, puis les égoutter.',
    'Sur le plan de travail fariné, incorporer les lardons à la pâte en la pliant plusieurs fois.',
    'Étaler la pâte en une feuille ovale de 1,5 cm d’épaisseur sur une plaque couverte de papier cuisson. Pratiquer 6 à 8 entailles en épi avec un couteau et bien les écarter avec les doigts.',
    'Badigeonner d’huile d’olive, parsemer d’herbes et laisser lever 20 min. Pendant ce temps, préchauffer le four à 230 °C.',
    'Cuire 15 à 18 min au four à 230 °C, jusqu’à ce que la fougasse soit bien dorée et sonne creux. Servir tiède.'
  ]);

  /* ───────────── Fromages et crèmerie : plats ───────────── */

  R('galettes-forestieres', 'Galettes forestières', 'Française', 'Plat', 30, 'Facile', 4, [
    ['galettes-de-sarrasin', 4], ['champignons', 300, 'g'], ['echalotes', 1], ['jambon', 4],
    ['creme-fraiche-legere', 10, 'cl'], ['gruyere', 120, 'g'], ['beurre', 30, 'g'], ['sel', null], ['poivre', null]
  ], [
    'Émincer l’échalote et les champignons. Les faire revenir dans 10 g de beurre 8 min à feu vif, jusqu’à ce que l’eau des champignons se soit évaporée.',
    'Ajouter la crème, saler, poivrer et laisser réduire 2 min à feu moyen.',
    'Chauffer une grande poêle à feu moyen avec un peu de beurre. Y poser une galette, la parsemer de gruyère râpé, ajouter une tranche de jambon et un quart des champignons.',
    'Laisser cuire 3 min à feu moyen, jusqu’à ce que le fromage fonde et que le dessous soit croustillant, puis replier les bords en carré.',
    'Recommencer avec les autres galettes et servir aussitôt.'
  ]);

  R('galettes-normandes', 'Galettes normandes au camembert', 'Française', 'Plat', 30, 'Facile', 4, [
    ['galettes-de-sarrasin', 4], ['camembert', 1], ['andouille', 150, 'g'], ['pommes', 2],
    ['beurre', 40, 'g'], ['poivre', null]
  ], [
    'Peler les pommes, les épépiner et les couper en lamelles. Les dorer dans 20 g de beurre 8 min à feu moyen, jusqu’à ce qu’elles soient tendres.',
    'Couper le camembert en tranches et l’andouille en fines rondelles.',
    'Chauffer une grande poêle à feu moyen avec un peu de beurre. Y poser une galette, répartir un quart de l’andouille, des pommes et du camembert, et poivrer.',
    'Laisser cuire 3 à 4 min à feu moyen, jusqu’à ce que le fromage fonde, puis replier les bords en carré.',
    'Recommencer avec les autres galettes et servir aussitôt.'
  ]);

  R('galettes-chevre-epinards', 'Galettes chèvre et épinards', 'Française', 'Plat', 30, 'Facile', 4, [
    ['galettes-de-sarrasin', 4], ['crottins-de-chevre', 2], ['epinards', 400, 'g'], ['ail', 1],
    ['creme-fraiche-legere', 10, 'cl'], ['beurre', 30, 'g'], ['miel', 1, 'cs', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Laver les épinards et les équeuter. Les faire tomber 3 min à feu vif dans 10 g de beurre avec l’ail haché, puis bien les égoutter en les pressant.',
    'Les remettre dans la poêle avec la crème, saler, poivrer et laisser réduire 2 min à feu moyen. Couper les crottins en rondelles.',
    'Chauffer une grande poêle à feu moyen avec un peu de beurre. Y poser une galette, répartir un quart des épinards et du chèvre, et arroser d’un filet de miel.',
    'Laisser cuire 3 min à feu moyen, jusqu’à ce que le chèvre soit fondant, puis replier les bords en carré.',
    'Recommencer avec les autres galettes et servir aussitôt.'
  ]);

  R('ficelles-picardes', 'Ficelles picardes', 'Française', 'Plat', 45, 'Facile', 4, [
    ['crepes', 8], ['jambon', 8], ['champignons', 300, 'g'], ['echalotes', 2], ['creme-fraiche', 30, 'cl'],
    ['gruyere', 100, 'g'], ['beurre', 30, 'g'], ['muscade', 1, 'pincee', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Préchauffer le four à 200 °C. Hacher les échalotes et émincer les champignons.',
    'Faire fondre les échalotes dans le beurre 3 min à feu moyen, ajouter les champignons et cuire 8 min à feu vif, jusqu’à évaporation de leur eau.',
    'Ajouter 10 cl de crème, saler, poivrer, et laisser réduire 2 min à feu vif.',
    'Poser une tranche de jambon sur chaque crêpe, puis une cuillerée de champignons. Rouler les crêpes et les ranger dans un plat beurré.',
    'Napper du reste de crème assaisonnée de muscade, parsemer de gruyère râpé et gratiner 15 à 20 min au four à 200 °C, jusqu’à ce que le dessus soit doré.'
  ]);

  R('croque-brie-jambon', 'Croque-monsieur au brie', 'Française', 'Plat', 20, 'Facile', 4, [
    ['pain-complet', 8], ['brie', 200, 'g'], ['jambon', 4], ['beurre', 30, 'g'], ['moutarde', 1, 'cs', 'opt']
  ], [
    'Préchauffer le four à 200 °C. Beurrer les tranches de pain sur une face.',
    'Retourner 4 tranches, les tartiner d’un peu de moutarde, puis poser une tranche de jambon pliée et le brie en lamelles.',
    'Couvrir avec les 4 autres tranches, face beurrée vers l’extérieur.',
    'Cuire 10 à 12 min au four à 200 °C sur une plaque, en retournant à mi-cuisson, jusqu’à ce que le pain soit doré et le brie fondu.'
  ]);

  R('tartiflette-munster', 'Tartiflette au munster', 'Française', 'Plat', 60, 'Facile', 4, [
    ['pommes-de-terre', 1000, 'g'], ['munster', 300, 'g'], ['lardons', 200, 'g'], ['oignons', 1],
    ['creme-fraiche', 10, 'cl'], ['graines-de-carvi', 1, 'cc', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Cuire les pommes de terre avec la peau 20 à 25 min dans l’eau salée frémissante, jusqu’à ce qu’elles soient juste tendres à la pointe du couteau. Les peler et les couper en rondelles.',
    'Préchauffer le four à 200 °C. Faire revenir l’oignon émincé et les lardons 8 min à feu moyen, jusqu’à ce qu’ils soient dorés.',
    'Mélanger les pommes de terre, les lardons et la crème dans un plat à gratin. Poivrer (ne pas saler, le munster l’est assez).',
    'Couper le munster en deux dans l’épaisseur, avec la croûte, et le poser sur les pommes de terre. Parsemer de carvi.',
    'Cuire 20 min au four à 200 °C, jusqu’à ce que le fromage soit fondu et gratiné.'
  ]);

  R('mont-d-or-chaud', 'Mont-d’or chaud au four', 'Française', 'Plat', 50, 'Facile', 4, [
    ['mont-d-or', 500, 'g'], ['vin-blanc', 5, 'cl'], ['ail', 1], ['pommes-de-terre', 1000, 'g'],
    ['jambon-cru', 8, 'pc', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Cuire les pommes de terre avec la peau 25 min dans l’eau salée frémissante, jusqu’à ce qu’elles soient tendres à la pointe du couteau.',
    'Pendant ce temps, préchauffer le four à 200 °C. Envelopper la boîte en bois du mont-d’or dans du papier aluminium, sans le couvercle.',
    'Creuser un petit puits au centre du fromage, y glisser l’ail en lamelles, verser le vin blanc et poivrer.',
    'Enfourner 20 à 25 min à 200 °C, jusqu’à ce que le fromage soit coulant et doré en surface.',
    'Servir aussitôt dans sa boîte, avec les pommes de terre et la charcuterie, en nappant de fromage à la cuillère.'
  ]);

  R('truffade', 'Truffade', 'Française', 'Plat', 45, 'Facile', 4, [
    ['pommes-de-terre', 1000, 'g'], ['cantal', 300, 'g'], ['ail', 2], ['graisse-de-canard', 3, 'cs'],
    ['persil', 0.25, 'pc', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Peler les pommes de terre et les couper en fines rondelles. Couper le cantal (jeune de préférence) en fines lamelles.',
    'Chauffer la graisse dans une grande poêle à feu moyen et y cuire les pommes de terre 25 min, en les retournant régulièrement, jusqu’à ce qu’elles soient tendres et un peu dorées. Saler et poivrer.',
    'Ajouter l’ail haché, puis le cantal, et mélanger à la spatule 3 à 4 min à feu doux, jusqu’à ce que le fromage fonde et file.',
    'Laisser dorer 2 min à feu moyen sans remuer, puis faire glisser sur un plat. Parsemer de persil et servir aussitôt, avec une salade verte.'
  ]);

  R('croutes-morbier', 'Croûtes au morbier et au jambon', 'Française', 'Plat', 30, 'Facile', 4, [
    ['pain', 8], ['morbier', 250, 'g'], ['jambon', 4], ['vin-blanc', 10, 'cl'], ['ail', 1],
    ['beurre', 20, 'g'], ['poivre', null]
  ], [
    'Préchauffer le four à 200 °C. Beurrer un grand plat et y ranger les tranches de pain.',
    'Frotter le pain avec l’ail coupé en deux, puis l’arroser de vin blanc.',
    'Poser une demi-tranche de jambon sur chaque tartine, puis des lamelles de morbier. Poivrer.',
    'Cuire 15 min au four à 200 °C, jusqu’à ce que le fromage soit fondu et doré. Servir aussitôt, avec une salade.'
  ]);

  R('quiche-coulommiers-poireaux', 'Quiche au coulommiers et aux poireaux', 'Française', 'Plat', 65, 'Facile', 6, [
    ['pate-brisee', 1], ['coulommiers', 0.5], ['poireaux', 2], ['oeufs', 3], ['creme-fraiche', 20, 'cl'],
    ['beurre', 20, 'g'], ['sel', null], ['poivre', null]
  ], [
    'Préchauffer le four à 180 °C. Foncer un moule à tarte avec la pâte et la piquer à la fourchette.',
    'Émincer les poireaux et les faire fondre 12 min dans le beurre à feu doux avec une pincée de sel, sans les colorer.',
    'Battre les œufs avec la crème et poivrer.',
    'Étaler les poireaux sur la pâte, disposer le coulommiers en tranches avec la croûte, et verser l’appareil.',
    'Cuire 35 à 40 min au four à 180 °C, jusqu’à ce que la quiche soit dorée et le centre pris.'
  ]);

  R('pommes-terre-saint-marcellin', 'Pommes de terre au four au saint-marcellin', 'Française', 'Plat', 70, 'Facile', 4, [
    ['pommes-de-terre', 1200, 'g'], ['saint-marcellin', 2], ['creme-fraiche', 10, 'cl'], ['ciboulette', 0.5, 'pc', 'opt'],
    ['gros-sel', 150, 'g'], ['poivre', null]
  ], [
    'Préchauffer le four à 200 °C. Laver 4 grosses pommes de terre, les piquer à la fourchette et les poser sur un lit de gros sel.',
    'Cuire 50 min à 1 h au four à 200 °C, jusqu’à ce que la pointe d’un couteau s’enfonce sans résistance.',
    'Fendre les pommes de terre en croix et écarter la chair à la fourchette. Garnir d’une cuillerée de crème et d’un demi saint-marcellin.',
    'Remettre 5 min au four à 200 °C, jusqu’à ce que le fromage coule. Poivrer, parsemer de ciboulette et servir, avec une salade.'
  ]);

  R('pates-fraiches-gorgonzola', 'Tagliatelles fraîches au gorgonzola', 'Italienne', 'Plat', 15, 'Facile', 4, [
    ['pates-fraiches', 500, 'g'], ['gorgonzola', 150, 'g'], ['creme-liquide', 20, 'cl'],
    ['cerneaux-de-noix', 40, 'g', 'opt'], ['parmesan', 30, 'g', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Porter une grande casserole d’eau salée à ébullition, à feu vif.',
    'Pendant ce temps, faire fondre le gorgonzola dans la crème 5 min à feu doux, en remuant, jusqu’à obtenir une sauce lisse. Poivrer.',
    'Cuire les pâtes fraîches 2 à 3 min dans l’eau bouillante (selon le paquet), puis les égoutter en gardant une louche d’eau de cuisson.',
    'Mélanger les pâtes à la sauce, en détendant si besoin avec un peu d’eau de cuisson. Servir avec les noix concassées et le parmesan.'
  ]);

  R('pates-fraiches-pesto-tomates', 'Pâtes fraîches au pesto et tomates cerises', 'Italienne', 'Plat', 15, 'Facile', 4, [
    ['pates-fraiches', 500, 'g'], ['pesto', 120, 'g'], ['tomates-cerises', 250, 'g'],
    ['parmesan', 40, 'g', 'opt'], ['pignons', 20, 'g', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Porter une grande casserole d’eau salée à ébullition, à feu vif. Couper les tomates cerises en deux.',
    'Faire griller les pignons 2 min à sec dans une poêle à feu moyen, en surveillant.',
    'Cuire les pâtes fraîches 2 à 3 min dans l’eau bouillante (selon le paquet), puis les égoutter en gardant une louche d’eau de cuisson.',
    'Mélanger aussitôt les pâtes avec le pesto, les tomates et un peu d’eau de cuisson, hors du feu pour que le basilic ne cuise pas.',
    'Servir avec le parmesan en copeaux et les pignons. Poivrer.'
  ]);

  R('raviolis-gratines', 'Raviolis gratinés', 'Française', 'Plat', 30, 'Facile', 4, [
    ['raviolis', 600, 'g'], ['sauce-tomate-cuisinee', 40, 'cl'], ['gruyere', 120, 'g'],
    ['herbes-provence', 1, 'cc', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Préchauffer le four à 200 °C. Cuire les raviolis 2 min dans l’eau salée bouillante (2 min de moins que le temps du paquet : ils finissent de cuire au four), puis les égoutter.',
    'Les mélanger dans un plat à gratin avec la sauce tomate et les herbes. Poivrer.',
    'Couvrir de gruyère râpé et gratiner 15 min au four à 200 °C, jusqu’à ce que le fromage soit doré et bouillonnant.'
  ]);

  R('raviolis-beurre-sauge', 'Raviolis au beurre de sauge', 'Italienne', 'Plat', 15, 'Facile', 4, [
    ['raviolis', 600, 'g'], ['beurre', 60, 'g'], ['sauge-fraiche', 12], ['parmesan', 50, 'g'], ['sel', null], ['poivre', null]
  ], [
    'Porter une grande casserole d’eau salée à ébullition et y cuire les raviolis 3 à 4 min à petits bouillons (selon le paquet), jusqu’à ce qu’ils remontent à la surface.',
    'Pendant ce temps, faire fondre le beurre à feu moyen dans une grande poêle avec les feuilles de sauge, 3 à 4 min, jusqu’à ce qu’il devienne noisette et que la sauge soit croustillante.',
    'Égoutter les raviolis en gardant un peu d’eau de cuisson et les verser dans la poêle avec 2 cs de cette eau. Mélanger 1 min à feu doux pour les enrober.',
    'Servir aussitôt avec le parmesan râpé et un tour de poivre.'
  ]);

  R('coquillettes-fromage-fondu', 'Coquillettes crémeuses au fromage fondu', 'Française', 'Plat', 20, 'Facile', 4, [
    ['pates', 400, 'g'], ['fromage-fondu-en-portions', 8], ['lait', 10, 'cl'], ['beurre', 20, 'g'],
    ['des-de-jambon', 150, 'g', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Cuire les coquillettes dans une grande casserole d’eau salée bouillante 8 à 10 min (selon le paquet), jusqu’à ce qu’elles soient tendres, puis les égoutter.',
    'Dans la même casserole, faire fondre à feu doux le beurre, le lait et les portions de fromage en fouettant, 2 à 3 min, jusqu’à obtenir une sauce lisse.',
    'Ajouter les coquillettes et les dés de jambon, mélanger 1 min à feu doux. Poivrer et servir aussitôt.'
  ]);

  R('poelee-tofu-fume-poireaux', 'Poêlée de pommes de terre, poireaux et tofu fumé', 'Végétarienne', 'Plat', 40, 'Facile', 4, [
    ['pommes-de-terre', 800, 'g'], ['poireaux', 2], ['tofu-fume', 200, 'g'], ['creme-de-soja', 20, 'cl'],
    ['huile-olive', 3, 'cs'], ['sel', null], ['poivre', null]
  ], [
    'Peler les pommes de terre et les couper en dés de 1,5 cm. Les cuire 20 min dans une grande poêle avec 2 cs d’huile, à feu moyen, en remuant souvent, jusqu’à ce qu’elles soient dorées et tendres.',
    'Pendant ce temps, émincer les poireaux et les faire fondre 10 min dans une autre poêle avec le reste d’huile, à feu doux. Couper le tofu en petits dés.',
    'Ajouter le tofu et les poireaux aux pommes de terre et faire dorer 3 min à feu vif.',
    'Verser la crème de soja, saler, poivrer et laisser épaissir 2 min à feu doux. Servir aussitôt.'
  ]);

  R('jambon-sauce-madere', 'Jambon braisé sauce madère', 'Française', 'Plat', 30, 'Facile', 4, [
    ['jambon', 8], ['madere', 10, 'cl'], ['echalotes', 2], ['fond-de-veau', 20, 'g'],
    ['champignons', 200, 'g', 'opt'], ['beurre', 30, 'g'], ['poivre', null]
  ], [
    'Délayer le fond de veau dans 25 cl d’eau chaude.',
    'Hacher les échalotes et les faire fondre 3 min dans 20 g de beurre à feu moyen. Ajouter les champignons émincés et cuire 5 min à feu vif.',
    'Verser le madère et laisser réduire de moitié 2 à 3 min à feu vif, puis ajouter le fond de veau et laisser mijoter 8 min à feu doux, jusqu’à ce que la sauce nappe la cuillère. Poivrer et incorporer le reste de beurre.',
    'Plier les tranches de jambon en deux, les poser dans la sauce et les réchauffer 3 min à feu doux, sans faire bouillir. Servir avec une purée ou des épinards.'
  ]);

  R('burger-gouda', 'Cheeseburger au gouda', 'Américaine', 'Plat', 25, 'Facile', 4, [
    ['pain-burger', 4], ['steak', 4], ['gouda', 120, 'g'], ['oignon-rouge', 1], ['salade', 0.5],
    ['tomates', 1], ['ketchup', 4, 'cs', 'opt'], ['moutarde', 1, 'cs', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Couper l’oignon et la tomate en rondelles, laver quelques feuilles de salade. Couper le gouda en tranches.',
    'Faire toaster les pains coupés en deux 2 min à feu moyen, face coupée contre une poêle chaude, jusqu’à ce qu’ils soient dorés.',
    'Saisir les steaks 2 à 3 min par face à feu vif, selon la cuisson voulue. Saler, poivrer, poser le gouda dessus et couvrir 1 min à feu doux pour le faire fondre.',
    'Garnir les pains de sauce, salade, steak au gouda, tomate et oignon. Servir aussitôt.'
  ]);

  R('bagels-saumon', 'Bagels au saumon fumé', 'Américaine', 'Plat', 15, 'Facile', 4, [
    ['bagels', 4], ['saumon-fume', 8], ['fromage-frais-a-tartiner', 150, 'g'], ['oignon-rouge', 0.5],
    ['citron', 0.5], ['aneth', 0.25, 'pc', 'opt'], ['capres', 1, 'cs', 'opt'], ['poivre', null]
  ], [
    'Couper les bagels en deux et les faire toaster 2 min au grille-pain, jusqu’à ce qu’ils soient légèrement dorés.',
    'Mélanger le fromage frais avec l’aneth ciselé, un filet de jus de citron et du poivre.',
    'Tartiner généreusement les bagels de fromage, garnir de saumon fumé, de fines rondelles d’oignon rouge et de câpres.',
    'Refermer et servir aussitôt.'
  ]);

  R('hot-dogs', 'Hot-dogs', 'Américaine', 'Plat', 15, 'Facile', 4, [
    ['pain-a-hot-dog', 4], ['saucisses-de-strasbourg', 4], ['moutarde', 2, 'cs'], ['ketchup', 2, 'cs', 'opt'],
    ['oignons-frits', 30, 'g', 'opt'], ['cornichons', 40, 'g', 'opt']
  ], [
    'Pocher les saucisses 5 min dans une casserole d’eau frémissante, sans faire bouillir pour qu’elles n’éclatent pas.',
    'Pendant ce temps, fendre les pains sans les séparer et les réchauffer 3 min au four à 180 °C.',
    'Glisser une saucisse égouttée dans chaque pain, napper de moutarde et de ketchup, et garnir d’oignons frits et de cornichons en rondelles. Servir aussitôt.'
  ]);

  R('wraps-houmous-crudites', 'Wraps au houmous et crudités', 'Méditerranéenne', 'Plat', 15, 'Facile', 4, [
    ['tortillas', 4], ['houmous', 200, 'g'], ['carottes', 2], ['concombre', 0.5], ['jeunes-pousses', 60, 'g'],
    ['feta', 100, 'g', 'opt'], ['poivre', null]
  ], [
    'Râper les carottes et couper le concombre en bâtonnets fins.',
    'Tartiner chaque tortilla de houmous en laissant 2 cm de bord.',
    'Répartir les jeunes pousses, les carottes, le concombre et la feta émiettée sur la moitié basse de chaque tortilla. Poivrer.',
    'Rouler bien serré en rabattant les côtés, puis couper en deux en biais.'
  ]);

  R('sandwich-focaccia', 'Focaccia garnie jambon cru, mozzarella et pesto', 'Italienne', 'Plat', 15, 'Facile', 4, [
    ['focaccia', 500, 'g'], ['pesto', 80, 'g'], ['mozzarella', 250, 'g'], ['jambon-cru', 8], ['tomates', 2],
    ['roquette', 50, 'g', 'opt']
  ], [
    'Couper la focaccia en 4 parts, puis chaque part en deux dans l’épaisseur.',
    'Tartiner l’intérieur de pesto.',
    'Garnir de mozzarella égouttée en tranches, de jambon cru, de rondelles de tomate et de roquette.',
    'Refermer et, pour un sandwich chaud, passer 5 min au four à 200 °C jusqu’à ce que la mozzarella commence à fondre.'
  ]);

  R('oeufs-benedicte', 'Œufs Bénédicte', 'Américaine', 'Plat', 40, 'Moyenne', 4, [
    ['muffins-anglais', 4], ['oeufs', 11], ['bacon', 8], ['beurre', 150, 'g'], ['citron', 0.5],
    ['vinaigre-blanc', 2, 'cs'], ['sel', null], ['poivre', null]
  ], [
    'Sauce hollandaise : faire fondre le beurre 2 min à feu doux. Au bain-marie frémissant, à feu doux, fouetter 3 jaunes avec 2 cs d’eau 3 à 4 min, jusqu’à ce qu’ils deviennent mousseux et épais, sans les laisser coaguler. Hors du feu, verser le beurre en filet en fouettant, puis ajouter le jus du citron, du sel et du poivre. Garder au chaud au-dessus du bain-marie éteint.',
    'Porter une casserole d’eau à frémissement avec le vinaigre (sans sel). Casser chaque œuf dans une tasse, créer un tourbillon et y faire glisser l’œuf. Pocher 3 min dans l’eau frémissante, jusqu’à ce que le blanc soit pris et le jaune coulant, puis égoutter sur du papier absorbant. Pocher ainsi les 8 œufs restants, 2 ou 3 à la fois.',
    'Pendant ce temps, dorer le bacon 2 min par face à sec dans une poêle à feu moyen et toaster les muffins coupés en deux 2 min au grille-pain.',
    'Garnir chaque demi-muffin de bacon puis d’un œuf poché, napper de hollandaise et servir aussitôt.'
  ]);

  R('croissants-jambon', 'Croissants au jambon', 'Française', 'Plat', 30, 'Facile', 4, [
    ['croissants', 4], ['jambon', 4], ['beurre', 20, 'g'], ['farine', 20, 'g'], ['lait', 25, 'cl'],
    ['gruyere', 80, 'g'], ['muscade', 1, 'pincee', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Préchauffer le four à 180 °C. Béchamel : faire fondre le beurre à feu moyen, ajouter la farine et remuer 1 min, puis verser le lait froid en fouettant. Cuire 3 à 4 min en fouettant, jusqu’à ce que la sauce épaississe. Saler, poivrer, ajouter la muscade et la moitié du gruyère.',
    'Ouvrir les croissants en deux dans l’épaisseur, sans les séparer complètement.',
    'Garnir chacun d’une cuillerée de béchamel et d’une tranche de jambon pliée, refermer, puis napper le dessus d’un peu de béchamel et parsemer du reste de gruyère.',
    'Cuire 12 à 15 min au four à 180 °C, jusqu’à ce que le fromage soit doré. Servir chaud, avec une salade verte.'
  ]);

  R('brochettes-halloumi-legumes', 'Brochettes d’halloumi et de légumes', 'Méditerranéenne', 'Plat', 30, 'Facile', 4, [
    ['halloumi', 250, 'g'], ['courgettes', 1], ['poivrons', 1], ['oignon-rouge', 1], ['tomates-cerises', 200, 'g'],
    ['huile-olive', 3, 'cs'], ['origan', 1, 'cc'], ['citron', 0.5], ['poivre', null]
  ], [
    'Couper le halloumi en cubes de 2 cm, la courgette en demi-rondelles épaisses, le poivron et l’oignon en morceaux.',
    'Mélanger le tout avec les tomates cerises, l’huile, l’origan et du poivre (pas de sel, le halloumi est salé).',
    'Enfiler sur des piques en alternant fromage et légumes.',
    'Cuire 8 à 10 min au barbecue ou dans une poêle-gril bien chaude, à feu vif, en tournant régulièrement, jusqu’à ce que le halloumi soit doré et les légumes marqués. Arroser de jus de citron avant de servir.'
  ]);

  R('croque-muffins-cheddar', 'Croque-muffins au cheddar', 'Anglaise', 'Plat', 15, 'Facile', 4, [
    ['muffins-anglais', 4], ['jambon', 4], ['cheddar', 8], ['beurre', 20, 'g'], ['moutarde', 1, 'cs', 'opt']
  ], [
    'Allumer le gril du four. Ouvrir les muffins en deux et les faire toaster 2 min au grille-pain.',
    'Beurrer les moitiés, tartiner d’un peu de moutarde, poser une demi-tranche de jambon pliée puis une tranche de cheddar.',
    'Passer 3 à 4 min sous le gril du four, jusqu’à ce que le cheddar soit fondu et bouillonnant. Servir aussitôt.'
  ]);

  /* ───────────── Desserts ───────────── */

  R('pain-perdu-brioche', 'Pain perdu brioché', 'Française', 'Dessert', 20, 'Facile', 4, [
    ['brioche', 300, 'g'], ['oeufs', 2], ['lait', 20, 'cl'], ['sucre', 40, 'g'], ['beurre', 30, 'g'],
    ['sucre-vanille', 1, 'pc', 'opt'], ['cannelle', 0.5, 'cc', 'opt']
  ], [
    'Couper la brioche (de la veille de préférence) en 8 tranches épaisses.',
    'Battre les œufs avec le lait, 20 g de sucre, le sucre vanillé et la cannelle dans une assiette creuse.',
    'Tremper rapidement chaque tranche dans le mélange, 10 s par face : la brioche s’imbibe très vite.',
    'Faire mousser le beurre dans une poêle à feu moyen et dorer les tranches 2 min par face. Saupoudrer du reste de sucre en fin de cuisson pour les caraméliser légèrement. Servir tiède.'
  ]);

  R('bostock', 'Bostock (brioche à la crème d’amande)', 'Française', 'Dessert', 30, 'Facile', 4, [
    ['brioche', 300, 'g'], ['amandes-poudre', 60, 'g'], ['beurre', 50, 'g'], ['sucre', 80, 'g'], ['oeufs', 1],
    ['amandes-effilees', 30, 'g'], ['fleur-d-oranger', 1, 'cs', 'opt'], ['sucre-glace', 10, 'g', 'opt']
  ], [
    'Préchauffer le four à 180 °C. Couper la brioche en 8 tranches épaisses.',
    'Sirop : porter à ébullition 10 cl d’eau avec 20 g de sucre, 2 min à feu vif, puis ajouter la fleur d’oranger hors du feu.',
    'Crème d’amande : mélanger le beurre mou avec 60 g de sucre, puis ajouter l’œuf et la poudre d’amandes.',
    'Imbiber légèrement les tranches de sirop au pinceau, les tartiner de crème d’amande et parsemer d’amandes effilées.',
    'Cuire 12 à 15 min au four à 180 °C sur une plaque, jusqu’à ce que les amandes soient dorées. Saupoudrer de sucre glace et servir tiède.'
  ]);

  R('croissants-amandes', 'Croissants aux amandes', 'Française', 'Dessert', 30, 'Facile', 4, [
    ['croissants', 4], ['amandes-poudre', 60, 'g'], ['beurre', 50, 'g'], ['sucre', 80, 'g'], ['oeufs', 1],
    ['amandes-effilees', 30, 'g'], ['rhum', 1, 'cl', 'opt'], ['sucre-glace', 10, 'g', 'opt']
  ], [
    'Préchauffer le four à 170 °C. Sirop : porter à ébullition 10 cl d’eau avec 20 g de sucre, 2 min à feu vif, et ajouter le rhum hors du feu.',
    'Crème d’amande : mélanger le beurre mou avec 60 g de sucre, puis ajouter l’œuf et la poudre d’amandes.',
    'Ouvrir les croissants (de la veille, idéalement) en deux dans l’épaisseur. Imbiber l’intérieur de sirop au pinceau, garnir de crème d’amande et refermer.',
    'Étaler un peu de crème sur le dessus et parsemer d’amandes effilées.',
    'Cuire 15 à 18 min au four à 170 °C, jusqu’à ce que les amandes soient dorées. Laisser tiédir et saupoudrer de sucre glace.'
  ]);

  R('pudding-pains-au-chocolat', 'Pudding de pains au chocolat', 'Française', 'Dessert', 55, 'Facile', 6, [
    ['pains-au-chocolat', 4], ['oeufs', 3], ['lait', 30, 'cl'], ['creme-liquide', 20, 'cl'], ['sucre', 60, 'g'],
    ['beurre', 10, 'g'], ['sucre-vanille', 1, 'pc', 'opt']
  ], [
    'Préchauffer le four à 170 °C. Beurrer un plat à gratin.',
    'Couper les pains au chocolat (rassis de préférence) en tranches de 2 cm et les ranger dans le plat en les chevauchant.',
    'Fouetter les œufs avec le sucre et le sucre vanillé, puis ajouter le lait et la crème.',
    'Verser sur les viennoiseries et laisser imbiber 10 min en appuyant avec une fourchette.',
    'Cuire 30 à 35 min au four à 170 °C, jusqu’à ce que le pudding soit pris et bien doré. Servir tiède.'
  ]);

  R('aumonieres-pommes-calvados', 'Aumônières de crêpes aux pommes et au calvados', 'Française', 'Dessert', 35, 'Facile', 4, [
    ['crepes', 4], ['pommes', 4], ['beurre', 40, 'g'], ['sucre', 50, 'g'], ['calvados', 4, 'cl'],
    ['cannelle', 0.5, 'cc', 'opt']
  ], [
    'Préchauffer le four à 180 °C. Peler les pommes, les épépiner et les couper en dés.',
    'Les faire dorer dans 30 g de beurre 8 min à feu moyen, ajouter le sucre et la cannelle et cuire encore 3 min, jusqu’à ce qu’elles soient caramélisées.',
    'Verser le calvados, laisser bouillir 1 min à feu vif pour évaporer l’alcool (ou flamber avec précaution).',
    'Déposer un quart des pommes au centre de chaque crêpe, rassembler les bords en bourse et fermer avec une pique ou un brin de ficelle alimentaire.',
    'Poser sur une plaque, badigeonner du reste de beurre fondu et enfourner 8 min à 180 °C, jusqu’à ce que les bords soient croustillants. Servir tiède.'
  ]);

  R('crumble-fruits-rouges-creme-anglaise', 'Crumble aux fruits rouges et crème anglaise', 'Française', 'Dessert', 45, 'Facile', 6, [
    ['fruits-rouges-surgeles', 500, 'g'], ['farine', 120, 'g'], ['beurre', 100, 'g'], ['sucre', 100, 'g'],
    ['creme-anglaise', 50, 'cl']
  ], [
    'Préchauffer le four à 180 °C. Étaler les fruits rouges encore surgelés dans un plat et les saupoudrer de 20 g de sucre.',
    'Mélanger du bout des doigts la farine, le reste de sucre et le beurre froid en dés, jusqu’à obtenir une grosse chapelure.',
    'Répartir la pâte sur les fruits sans tasser.',
    'Cuire 30 à 35 min au four à 180 °C, jusqu’à ce que le dessus soit bien doré et que le jus des fruits bouillonne sur les bords.',
    'Servir tiède avec la crème anglaise bien froide.'
  ]);

  R('faisselle-coulis-fruits-rouges', 'Faisselle au coulis de fruits rouges', 'Française', 'Dessert', 15, 'Facile', 4, [
    ['faisselle', 400, 'g'], ['framboises', 250, 'g'], ['sucre', 40, 'g'], ['citron', 0.5]
  ], [
    'Égoutter la faisselle dans sa passoire au réfrigérateur pendant la préparation du coulis.',
    'Mixer les framboises avec le sucre et le jus du demi-citron, puis passer au chinois pour retirer les graines.',
    'Démouler la faisselle dans des coupelles et napper de coulis bien froid.'
  ]);

  R('verrines-petits-suisses-fraises', 'Verrines de petits-suisses, fraises et spéculoos', 'Française', 'Dessert', 15, 'Facile', 4, [
    ['petits-suisses', 6], ['fraises', 250, 'g'], ['speculoos', 8], ['sucre', 30, 'g']
  ], [
    'Laver, équeuter et couper les fraises en dés. Les mélanger avec 10 g de sucre.',
    'Fouetter les petits-suisses avec le reste de sucre pour les rendre bien lisses.',
    'Émietter grossièrement les spéculoos.',
    'Dans des verrines, alterner spéculoos, petits-suisses et fraises, en finissant par des fraises et quelques miettes de biscuit. Servir bien frais.'
  ]);

  R('skyr-fruits-rouges-muesli', 'Skyr aux myrtilles et au muesli', 'Scandinave', 'Dessert', 10, 'Facile', 4, [
    ['skyr', 500, 'g'], ['myrtilles', 200, 'g'], ['muesli', 80, 'g'], ['miel', 2, 'cs']
  ], [
    'Répartir le skyr dans des bols.',
    'Ajouter les myrtilles et le muesli par-dessus au dernier moment, pour qu’il reste croquant.',
    'Arroser d’un filet de miel et servir aussitôt.'
  ]);

  R('riz-au-lait-vegetal', 'Riz au lait végétal à la vanille', 'Française', 'Dessert', 50, 'Facile', 4, [
    ['riz-rond', 100, 'g'], ['lait-vegetal', 75, 'cl'], ['sucre', 60, 'g'], ['gousses-de-vanille', 1],
    ['cannelle', 0.5, 'cc', 'opt']
  ], [
    'Rincer le riz. Le blanchir 2 min dans une casserole d’eau bouillante, puis l’égoutter.',
    'Porter le lait végétal (amande, avoine ou riz) à frémissement à feu moyen, 5 min environ, avec la gousse de vanille fendue et grattée.',
    'Ajouter le riz et cuire 35 à 40 min à feu très doux, en remuant souvent, jusqu’à ce que le riz soit fondant et le mélange crémeux.',
    'Hors du feu, ajouter le sucre et retirer la gousse. Servir tiède ou froid, saupoudré de cannelle.'
  ]);

  R('tiramisu-amaretto', 'Tiramisu à l’amaretto', 'Italienne', 'Dessert', 270, 'Facile', 6, [
    ['mascarpone', 250, 'g'], ['oeufs', 3], ['sucre', 75, 'g'], ['boudoirs', 24], ['cafe', 30, 'cl'],
    ['amaretto', 6, 'cl'], ['cacao-en-poudre', 15, 'g']
  ], [
    'Préparer le café fort, le laisser refroidir et y ajouter 4 cl d’amaretto.',
    'Séparer les blancs des jaunes. Fouetter les jaunes avec le sucre jusqu’à ce qu’ils blanchissent, puis incorporer le mascarpone et le reste d’amaretto.',
    'Monter les blancs en neige ferme et les incorporer délicatement à la spatule.',
    'Tremper rapidement les boudoirs dans le café et en tapisser le fond d’un plat. Couvrir de la moitié de la crème, puis recommencer une couche.',
    'Réfrigérer au moins 4 h. Saupoudrer de cacao juste avant de servir.'
  ]);

  R('fraises-creme-de-cassis', 'Fraises à la crème de cassis et chantilly', 'Française', 'Dessert', 45, 'Facile', 4, [
    ['fraises', 500, 'g'], ['creme-de-cassis', 4, 'cl'], ['sucre', 20, 'g'], ['creme-liquide', 20, 'cl'],
    ['sucre-glace', 20, 'g'], ['menthe', 0.25, 'pc', 'opt']
  ], [
    'Laver, équeuter et couper les fraises en deux. Les mélanger avec le sucre et la crème de cassis.',
    'Laisser macérer 30 min au réfrigérateur.',
    'Monter la crème liquide très froide en chantilly en ajoutant le sucre glace en fin de battage.',
    'Répartir les fraises et leur jus dans des coupes, ajouter la chantilly et quelques feuilles de menthe.'
  ]);
};
