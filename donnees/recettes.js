/* Recettes de base de Frigourmand.
   R(id, nom, cuisine, type, minutes, difficulté, personnes, ingrédients, étapes) — type : Entrée | Plat | Dessert
   Ingrédient : [idCatalogue, quantité, unité?, 'opt'?]
   - unité omise : unité par défaut du catalogue
   - quantité null : « selon goût »
   - 'opt' : ingrédient facultatif, jamais compté comme manquant */
'use strict';

  const recettes = [];
  // Trois types seulement : les soupes et les accompagnements comptent comme des plats.
  const TYPES = { 'Entrée': 'Entrée', 'Plat': 'Plat', 'Dessert': 'Dessert', 'Soupe': 'Plat', 'Accompagnement': 'Plat' };
  function R(id, nom, cuisine, type, minutes, difficulte, personnes, ingredients, etapes) {
    if (!TYPES[type]) throw new Error('Type de recette inconnu : ' + type + ' (' + id + ')');
    recettes.push({ id, nom, cuisine, type: TYPES[type], minutes, difficulte, personnes, ingredients, etapes, source: 'catalogue' });
  }

  /* ───────────── Cuisine française ───────────── */

  R('quiche-lorraine', 'Quiche lorraine', 'Française', 'Plat', 60, 'Facile', 6, [
    ['pate-brisee', 1], ['lardons', 200, 'g'], ['oeufs', 4], ['creme-fraiche', 20, 'cl'], ['lait', 20, 'cl'],
    ['muscade', 1, 'pincee', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Préchauffer le four à 180 °C. Foncer un moule à tarte de 26 à 28 cm avec la pâte et la piquer à la fourchette.',
    'Faire revenir les lardons à sec 5 min à feu moyen, puis les égoutter sur du papier absorbant.',
    'Battre les œufs avec la crème et le lait. Poivrer, saler légèrement (les lardons sont salés) et ajouter la muscade.',
    'Répartir les lardons sur la pâte et verser l’appareil par-dessus.',
    'Enfourner 35 à 40 min, jusqu’à ce que la quiche soit dorée et que le centre soit pris.'
  ]);

  R('quiche-poireaux', 'Quiche aux poireaux', 'Française', 'Plat', 65, 'Facile', 6, [
    ['pate-brisee', 1], ['poireaux', 3], ['oeufs', 3], ['creme-fraiche', 20, 'cl'], ['lait', 10, 'cl'],
    ['beurre', 20, 'g'], ['fromage-rape', 70, 'g', 'opt'], ['muscade', 1, 'pincee', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Préchauffer le four à 180 °C. Foncer un moule à tarte avec la pâte et la piquer à la fourchette.',
    'Émincer finement les poireaux et les faire fondre 15 min dans le beurre à feu doux, avec une pincée de sel, sans les colorer.',
    'Battre les œufs avec la crème et le lait, poivrer et ajouter la muscade.',
    'Étaler les poireaux sur la pâte, verser l’appareil et parsemer de fromage.',
    'Cuire 35 à 40 min, jusqu’à ce que le dessus soit doré et le centre pris.'
  ]);

  R('gratin-dauphinois', 'Gratin dauphinois', 'Française', 'Accompagnement', 90, 'Facile', 6, [
    ['pommes-de-terre', 1200, 'g'], ['lait', 50, 'cl'], ['creme-liquide', 25, 'cl'], ['ail', 1],
    ['beurre', 10, 'g'], ['muscade', 1, 'pincee', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Préchauffer le four à 160 °C. Frotter un plat à gratin avec la gousse d’ail coupée en deux, puis le beurrer.',
    'Éplucher les pommes de terre et les couper en rondelles de 3 mm, sans les laver pour garder l’amidon.',
    'Les mettre dans une casserole avec le lait, le sel, le poivre et la muscade. Porter à frémissement à feu moyen et cuire 10 min en remuant délicatement.',
    'Verser le tout dans le plat et napper de crème.',
    'Cuire 1 h, jusqu’à ce que le dessus soit doré et que la pointe d’un couteau s’enfonce sans résistance.'
  ]);

  R('soupe-oignon', 'Soupe à l’oignon gratinée', 'Française', 'Soupe', 65, 'Facile', 4, [
    ['oignons', 6], ['beurre', 40, 'g'], ['farine', 20, 'g'], ['vin-blanc', 10, 'cl', 'opt'], ['bouillon', 1],
    ['pain', 8], ['fromage-rape', 150, 'g'], ['sel', null], ['poivre', null]
  ], [
    'Émincer finement les oignons et les faire fondre 20 à 25 min dans le beurre à feu moyen, en remuant souvent, jusqu’à ce qu’ils soient bien dorés.',
    'Saupoudrer de farine et remuer 1 min, puis déglacer au vin blanc.',
    'Ajouter 1 L d’eau et le cube de bouillon. Porter à ébullition puis laisser mijoter 20 min à feu doux. Saler et poivrer.',
    'Pendant ce temps, faire griller les tranches de pain. Allumer le gril du four.',
    'Répartir la soupe dans des bols allant au four, poser le pain grillé et couvrir de fromage.',
    'Gratiner 5 min sous le gril, jusqu’à ce que le fromage soit doré et bouillonnant.'
  ]);

  R('hachis-parmentier', 'Hachis parmentier', 'Française', 'Plat', 65, 'Facile', 4, [
    ['pommes-de-terre', 1000, 'g'], ['boeuf-hache', 500, 'g'], ['oignons', 2], ['ail', 1],
    ['lait', 20, 'cl'], ['beurre', 60, 'g'], ['fromage-rape', 60, 'g'], ['concentre-tomate', 1, 'cs', 'opt'],
    ['muscade', 1, 'pincee', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Éplucher les pommes de terre, les couper en morceaux et les cuire 20 à 25 min dans une grande casserole d’eau salée frémissante, jusqu’à ce qu’elles soient tendres.',
    'Pendant ce temps, faire revenir les oignons et l’ail hachés dans 10 g de beurre, 5 min à feu moyen. Ajouter la viande et le concentré de tomate, et cuire 8 min à feu vif en égrenant. Saler, poivrer.',
    'Égoutter les pommes de terre et les écraser avec le lait chaud, 50 g de beurre et la muscade. Saler.',
    'Préchauffer le four à 200 °C. Étaler la viande dans un plat, couvrir de purée et de fromage râpé.',
    'Gratiner 20 min, jusqu’à ce que le dessus soit doré.'
  ]);

  R('boeuf-bourguignon', 'Bœuf bourguignon', 'Française', 'Plat', 225, 'Moyenne', 6, [
    ['boeuf-braiser', 1500, 'g'], ['vin-rouge', 75, 'cl'], ['lardons', 200, 'g'], ['carottes', 3], ['oignons', 2],
    ['champignons', 250, 'g'], ['ail', 2], ['farine', 30, 'g'], ['bouquet-garni', 1], ['beurre', 30, 'g'],
    ['huile', 2, 'cs'], ['sel', null], ['poivre', null]
  ], [
    'Couper la viande en cubes de 5 cm. Les faire dorer à feu vif, par petites quantités, dans l’huile chaude, dans une cocotte. Réserver.',
    'Dans la même cocotte, faire revenir à feu moyen les lardons, les oignons émincés et les carottes en rondelles, 5 min.',
    'Remettre la viande, saupoudrer de farine et remuer 2 min.',
    'Verser le vin, ajouter l’ail écrasé et le bouquet garni. Compléter d’eau à hauteur si besoin, saler légèrement et poivrer. Porter à ébullition.',
    'Couvrir et laisser mijoter 3 h à feu très doux : la viande doit se couper à la cuillère.',
    'Faire sauter les champignons coupés en quatre dans le beurre, 5 min à feu vif, et les ajouter 15 min avant la fin. Retirer le bouquet garni avant de servir.'
  ]);

  R('blanquette-veau', 'Blanquette de veau', 'Française', 'Plat', 135, 'Moyenne', 6, [
    ['veau', 1200, 'g'], ['carottes', 3], ['oignons', 1], ['clous-de-girofle', 2, 'pc', 'opt'], ['poireaux', 1],
    ['champignons', 250, 'g'], ['bouquet-garni', 1], ['bouillon', 1], ['beurre', 50, 'g'], ['farine', 40, 'g'],
    ['creme-fraiche', 20, 'cl'], ['oeufs', 1], ['citron', 0.5, 'pc', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Couper la viande en morceaux, la mettre dans une cocotte, couvrir d’eau froide, porter à ébullition à feu vif et écumer.',
    'Ajouter le cube de bouillon, les carottes en tronçons, l’oignon piqué des clous de girofle, le poireau et le bouquet garni. Couvrir et laisser frémir 1 h 30 à feu doux.',
    'Faire revenir les champignons émincés dans 10 g de beurre, 5 min à feu moyen.',
    'Égoutter la viande et les carottes en gardant le bouillon. Dans une casserole, faire fondre 40 g de beurre à feu moyen, ajouter la farine et remuer 1 min, puis verser 75 cl de bouillon filtré. Laisser épaissir 5 min en fouettant.',
    'Hors du feu, ajouter la crème mélangée au jaune d’œuf et un filet de jus de citron. Saler, poivrer.',
    'Remettre la viande, les carottes et les champignons dans la sauce. Réchauffer à feu doux sans faire bouillir.'
  ]);

  R('pot-au-feu', 'Pot-au-feu', 'Française', 'Plat', 240, 'Facile', 6, [
    ['boeuf-braiser', 1500, 'g'], ['carottes', 6], ['poireaux', 3], ['navets', 4], ['pommes-de-terre', 800, 'g'],
    ['oignons', 1], ['clous-de-girofle', 3, 'pc', 'opt'], ['bouquet-garni', 1], ['sel', null], ['poivre', null],
    ['gros-sel', null, 'g', 'opt'], ['moutarde', null, 'cs', 'opt']
  ], [
    'Mettre la viande dans un grand faitout, couvrir largement d’eau froide et porter à ébullition à feu vif. Écumer.',
    'Ajouter l’oignon piqué des clous de girofle et le bouquet garni, saler, poivrer et laisser frémir 2 h 30 à feu doux, à couvert.',
    'Ajouter les carottes, les poireaux ficelés et les navets, et cuire encore 45 min.',
    'Cuire les pommes de terre à part dans une casserole de bouillon prélevé, 25 min à frémissement.',
    'Servir la viande et les légumes avec du gros sel et de la moutarde. Le bouillon dégraissé se boit en entrée.'
  ]);

  R('poulet-roti', 'Poulet rôti et pommes de terre', 'Française', 'Plat', 120, 'Facile', 4, [
    ['poulet-entier', 1], ['pommes-de-terre', 1000, 'g'], ['ail', 4], ['thym', 2, 'pc', 'opt'], ['beurre', 30, 'g'],
    ['huile-olive', 2, 'cs'], ['sel', null], ['poivre', null]
  ], [
    'Sortir le poulet du réfrigérateur 30 min avant la cuisson. Préchauffer le four à 200 °C.',
    'Masser le poulet avec le beurre mou, saler et poivrer. Glisser le thym et une gousse d’ail à l’intérieur.',
    'Couper les pommes de terre en quartiers et les mélanger avec l’huile, les 3 gousses d’ail restantes en chemise, du sel et du poivre.',
    'Poser le poulet dans un grand plat et disposer les pommes de terre autour.',
    'Cuire 1 h 15 en arrosant toutes les 20 min : le jus qui s’écoule de la cuisse piquée doit être clair.',
    'Laisser reposer 10 min sous une feuille d’aluminium avant de découper.'
  ]);

  R('poulet-basquaise', 'Poulet basquaise', 'Française', 'Plat', 80, 'Facile', 4, [
    ['cuisses-poulet', 4], ['poivrons', 3], ['tomates', 4], ['oignons', 2], ['ail', 2],
    ['piment', 2, 'pincee', 'opt'], ['vin-blanc', 10, 'cl', 'opt'], ['huile-olive', 3, 'cs'], ['sel', null], ['poivre', null]
  ], [
    'Faire dorer les cuisses de poulet sur toutes les faces dans l’huile d’olive, à feu moyen-vif, dans une cocotte, 10 min. Réserver.',
    'Dans la même cocotte, faire revenir à feu moyen les oignons émincés et les poivrons en lanières, 10 min.',
    'Ajouter l’ail haché, les tomates en morceaux, le piment d’Espelette et le vin blanc.',
    'Remettre le poulet, saler, poivrer, couvrir et laisser mijoter 45 min à feu doux, jusqu’à ce que la viande se détache de l’os.'
  ]);

  R('poulet-champignons-creme', 'Poulet aux champignons à la crème', 'Française', 'Plat', 35, 'Facile', 4, [
    ['poulet', 600, 'g'], ['champignons', 300, 'g'], ['echalotes', 2], ['creme-fraiche', 20, 'cl'],
    ['vin-blanc', 10, 'cl', 'opt'], ['beurre', 20, 'g'], ['persil', 0.5, 'pc', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Couper le poulet en morceaux et le faire dorer dans le beurre, 5 min à feu vif. Réserver.',
    'Dans la même poêle, faire revenir à feu moyen les échalotes hachées et les champignons émincés, 8 min.',
    'Déglacer au vin blanc, ajouter la crème et remettre le poulet.',
    'Laisser mijoter 10 min à feu doux, saler, poivrer et parsemer de persil ciselé. Servir avec du riz ou des pâtes.'
  ]);

  R('poulet-moutarde', 'Poulet à la moutarde', 'Française', 'Plat', 55, 'Facile', 4, [
    ['cuisses-poulet', 4], ['moutarde', 3, 'cs'], ['creme-fraiche', 20, 'cl'], ['oignons', 1],
    ['vin-blanc', 10, 'cl', 'opt'], ['huile', 1, 'cs'], ['sel', null], ['poivre', null]
  ], [
    'Badigeonner les cuisses de poulet avec 2 cs de moutarde.',
    'Les faire dorer dans l’huile à feu moyen avec l’oignon émincé, 10 min.',
    'Déglacer au vin blanc (ou 10 cl d’eau), couvrir et cuire 35 min à feu doux.',
    'Ajouter la crème mélangée au reste de moutarde et laisser épaissir 5 min à feu doux. Saler et poivrer.'
  ]);

  R('ratatouille', 'Ratatouille', 'Française', 'Plat', 90, 'Facile', 4, [
    ['aubergines', 1], ['courgettes', 2], ['poivrons', 2], ['tomates', 4], ['oignons', 2], ['ail', 2],
    ['herbes-provence', 1, 'cc'], ['huile-olive', 4, 'cs'], ['sel', null], ['poivre', null]
  ], [
    'Couper tous les légumes en dés de même taille.',
    'Faire revenir séparément dans l’huile d’olive, à feu moyen-vif, l’aubergine, puis les courgettes, puis les poivrons, 5 min chacun. Réserver.',
    'Dans une cocotte, faire fondre les oignons émincés 5 min à feu moyen, ajouter l’ail et les tomates.',
    'Ajouter tous les légumes et les herbes, saler, poivrer. Laisser mijoter 40 min à feu doux à couvert, puis 10 min sans couvercle pour réduire le jus.'
  ]);

  R('tian-legumes', 'Tian de légumes provençal', 'Française', 'Accompagnement', 85, 'Facile', 4, [
    ['courgettes', 2], ['tomates', 4], ['aubergines', 1], ['oignons', 1], ['ail', 2],
    ['herbes-provence', 1, 'cc'], ['huile-olive', 4, 'cs'], ['sel', null], ['poivre', null]
  ], [
    'Préchauffer le four à 180 °C. Faire fondre l’oignon émincé et l’ail haché dans 1 cs d’huile, 5 min à feu moyen, et en tapisser le fond d’un plat à gratin.',
    'Couper les légumes en rondelles fines et les disposer debout en les alternant.',
    'Arroser du reste d’huile, saler, poivrer et parsemer d’herbes.',
    'Cuire 1 h, en couvrant d’aluminium à mi-cuisson si le dessus colore trop.'
  ]);

  R('tartiflette', 'Tartiflette', 'Française', 'Plat', 70, 'Facile', 4, [
    ['pommes-de-terre', 1000, 'g'], ['reblochon', 1], ['lardons', 200, 'g'], ['oignons', 2],
    ['vin-blanc', 10, 'cl', 'opt'], ['creme-fraiche', 10, 'cl', 'opt'], ['poivre', null]
  ], [
    'Cuire les pommes de terre avec la peau 20 min dans une casserole d’eau salée frémissante, puis les éplucher et les couper en rondelles.',
    'Faire revenir les lardons et les oignons émincés 10 min à feu moyen, puis déglacer au vin blanc.',
    'Préchauffer le four à 200 °C. Dans un plat, alterner pommes de terre et lardons, ajouter la crème et poivrer.',
    'Couper le reblochon en deux dans l’épaisseur et le poser croûte vers le haut.',
    'Cuire 25 min, jusqu’à ce que le fromage soit fondu et doré.'
  ]);

  R('croque-monsieur', 'Croque-monsieur', 'Française', 'Plat', 25, 'Facile', 4, [
    ['pain-mie', 8], ['jambon', 4], ['fromage-rape', 100, 'g'], ['beurre', 30, 'g'], ['farine', 15, 'g'],
    ['lait', 15, 'cl'], ['muscade', 1, 'pincee', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Préchauffer le four à 220 °C.',
    'Préparer une béchamel rapide : faire fondre 15 g de beurre à feu moyen, ajouter la farine, puis le lait en fouettant. Laisser épaissir 3 min, saler, poivrer et ajouter la muscade.',
    'Beurrer légèrement l’extérieur des tranches de pain avec le reste du beurre.',
    'Sur 4 tranches, étaler un peu de béchamel, une tranche de jambon et du fromage. Refermer.',
    'Napper le dessus du reste de béchamel et de fromage.',
    'Cuire 10 min au four, jusqu’à ce que le dessus soit doré.'
  ]);

  R('omelette-champignons', 'Omelette aux champignons', 'Française', 'Plat', 15, 'Facile', 2, [
    ['oeufs', 5], ['champignons', 150, 'g'], ['beurre', 15, 'g'], ['ciboulette', 0.25, 'pc', 'opt'],
    ['sel', null], ['poivre', null]
  ], [
    'Faire sauter les champignons émincés dans la moitié du beurre, 5 min à feu vif. Réserver.',
    'Battre les œufs avec le sel, le poivre et la ciboulette ciselée.',
    'Faire fondre le reste du beurre à feu moyen, verser les œufs et cuire en ramenant les bords vers le centre.',
    'Ajouter les champignons quand l’omelette est encore baveuse, plier et servir.'
  ]);

  R('oeufs-cocotte', 'Œufs cocotte à la crème', 'Française', 'Entrée', 20, 'Facile', 4, [
    ['oeufs', 4], ['creme-fraiche', 8, 'cl'], ['beurre', 10, 'g'], ['jambon', 1, 'pc', 'opt'],
    ['ciboulette', 0.25, 'pc', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Préchauffer le four à 180 °C. Beurrer 4 ramequins.',
    'Mettre au fond un peu de jambon émincé et une cuillère de crème.',
    'Casser un œuf dans chaque ramequin, saler, poivrer.',
    'Poser les ramequins dans un plat, verser de l’eau chaude à mi-hauteur et cuire 8 à 10 min : le blanc doit être pris et le jaune coulant. Parsemer de ciboulette.'
  ]);

  R('crepes', 'Crêpes', 'Française', 'Dessert', 75, 'Facile', 4, [
    ['farine', 250, 'g'], ['oeufs', 4], ['lait', 50, 'cl'], ['beurre', 60, 'g'], ['sucre', 30, 'g'],
    ['sucre-vanille', 1, 'pc', 'opt'], ['sel', 1, 'pincee']
  ], [
    'Mélanger la farine, le sucre, le sucre vanillé et le sel. Creuser un puits et ajouter les œufs.',
    'Incorporer le lait petit à petit en fouettant pour éviter les grumeaux.',
    'Ajouter 50 g de beurre fondu. Laisser reposer 30 min.',
    'Graisser légèrement une poêle avec le reste du beurre et la chauffer à feu moyen-vif. Verser une petite louche de pâte, l’étaler en inclinant la poêle et cuire 1 min, jusqu’à ce que les bords dorent, puis 30 s sur l’autre face.'
  ]);

  R('galettes-completes', 'Galettes complètes', 'Française', 'Plat', 70, 'Moyenne', 4, [
    ['farine-sarrasin', 250, 'g'], ['oeufs', 5], ['jambon', 4], ['fromage-rape', 150, 'g'], ['beurre', 40, 'g'],
    ['sel', 1, 'pincee']
  ], [
    'Mélanger la farine de sarrasin, le sel, 1 œuf et 50 cl d’eau froide jusqu’à obtenir une pâte lisse. Laisser reposer 30 min.',
    'Chauffer une grande poêle à feu moyen-vif et la beurrer. Verser une louche de pâte et l’étaler finement.',
    'Quand le dessous est doré (2 min), baisser à feu moyen, parsemer de fromage, poser le jambon et casser un œuf au centre.',
    'Rabattre les bords en carré et cuire 3 à 4 min, jusqu’à ce que le blanc soit pris. Garder au chaud et recommencer.'
  ]);

  R('salade-nicoise', 'Salade niçoise', 'Française', 'Plat', 30, 'Facile', 4, [
    ['tomates', 4], ['oeufs', 4], ['thon-boite', 200, 'g'], ['haricots-verts', 200, 'g'], ['olives', 60, 'g'],
    ['anchois', 50, 'g', 'opt'], ['poivrons', 1, 'pc', 'opt'], ['oignon-rouge', 1, 'pc', 'opt'], ['huile-olive', 4, 'cs'],
    ['vinaigre', 1, 'cs'], ['sel', null], ['poivre', null]
  ], [
    'Cuire les œufs 9 min dans l’eau bouillante, les refroidir dans l’eau froide et les écaler.',
    'Cuire les haricots verts 8 min dans l’eau bouillante salée, puis les plonger dans l’eau glacée.',
    'Couper les tomates et les œufs en quartiers, le poivron en lanières et l’oignon en fines rondelles.',
    'Disposer le tout avec le thon émietté, les anchois et les olives. Assaisonner d’huile d’olive, de vinaigre, de sel et de poivre.'
  ]);

  R('salade-chevre-chaud', 'Salade de chèvre chaud', 'Française', 'Entrée', 20, 'Facile', 4, [
    ['salade', 1], ['chevre', 200, 'g'], ['baguette', 0.5], ['miel', 1, 'cs'], ['huile-olive', 3, 'cs'],
    ['vinaigre', 1, 'cs'], ['moutarde', 1, 'cc', 'opt'], ['cerneaux-de-noix', 30, 'g', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Préchauffer le four en position gril.',
    'Couper la baguette en 8 tranches et le chèvre en 8 rondelles. Poser une rondelle sur chaque tranche.',
    'Arroser d’un filet de miel et passer 5 min sous le gril, jusqu’à ce que le fromage soit doré.',
    'Préparer une vinaigrette avec la moutarde, le vinaigre, l’huile, du sel et du poivre. Assaisonner la salade, parsemer de noix et servir avec les toasts chauds.'
  ]);

  R('salade-lyonnaise', 'Salade lyonnaise', 'Française', 'Plat', 25, 'Facile', 4, [
    ['frisee', 1], ['lardons', 200, 'g'], ['oeufs', 4], ['pain', 4], ['vinaigre', 3, 'cs'], ['moutarde', 1, 'cs'],
    ['huile', 4, 'cs'], ['sel', null], ['poivre', null]
  ], [
    'Faire dorer les lardons à sec, 5 min à feu moyen. Les réserver, puis faire dorer dans leur graisse le pain coupé en dés, 3 min.',
    'Porter une casserole d’eau non salée à frémissement avec 2 cs de vinaigre. Y casser les œufs un à un et les pocher 3 min, puis les égoutter.',
    'Préparer une vinaigrette avec la moutarde, le reste du vinaigre, l’huile, du sel et du poivre.',
    'Assaisonner la frisée, ajouter les lardons et les croûtons, et poser un œuf poché sur chaque assiette.'
  ]);

  R('poireaux-vinaigrette', 'Poireaux vinaigrette', 'Française', 'Entrée', 35, 'Facile', 4, [
    ['poireaux', 6], ['moutarde', 1, 'cs'], ['vinaigre', 2, 'cs'], ['huile', 5, 'cs'],
    ['echalotes', 1, 'pc', 'opt'], ['oeufs', 2, 'pc', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Nettoyer les poireaux et les cuire 15 à 20 min dans une grande casserole d’eau bouillante salée (ou à la vapeur), jusqu’à ce qu’ils soient tendres. Bien égoutter.',
    'Si vous le souhaitez, cuire les œufs 10 min dans l’eau bouillante, les écaler et les hacher.',
    'Préparer une vinaigrette avec la moutarde, le vinaigre, l’huile, l’échalote hachée, du sel et du poivre.',
    'Napper les poireaux tièdes de vinaigrette et parsemer d’œuf.'
  ]);

  R('carottes-rapees', 'Carottes râpées au citron', 'Française', 'Entrée', 15, 'Facile', 4, [
    ['carottes', 5], ['citron', 1], ['huile-olive', 3, 'cs'], ['moutarde', 1, 'cc', 'opt'],
    ['persil', 0.25, 'pc', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Éplucher et râper finement les carottes.',
    'Mélanger le jus du citron, la moutarde, l’huile, le sel et le poivre.',
    'Assaisonner les carottes et parsemer de persil ciselé.'
  ]);

  R('salade-lentilles', 'Salade de lentilles', 'Française', 'Plat', 40, 'Facile', 4, [
    ['lentilles', 250, 'g'], ['carottes', 1], ['echalotes', 1], ['moutarde', 1, 'cs'], ['vinaigre', 2, 'cs'],
    ['huile', 4, 'cs'], ['lardons', 100, 'g', 'opt'], ['persil', 0.5, 'pc', 'opt'], ['laurier', 1, 'pc', 'opt'],
    ['sel', null], ['poivre', null]
  ], [
    'Mettre les lentilles rincées dans 3 fois leur volume d’eau froide avec la carotte en dés et le laurier. Porter à ébullition puis cuire 20 à 25 min à feu doux. Saler en fin de cuisson et égoutter.',
    'Si vous en mettez, faire dorer les lardons à sec, 5 min à feu moyen.',
    'Préparer la vinaigrette avec l’échalote hachée, la moutarde, le vinaigre, l’huile, du sel et du poivre.',
    'Mélanger les lentilles tièdes avec la vinaigrette, les lardons et le persil ciselé.'
  ]);

  R('veloute-potiron', 'Velouté de potiron', 'Française', 'Soupe', 45, 'Facile', 4, [
    ['potiron', 1000, 'g'], ['pommes-de-terre', 200, 'g'], ['oignons', 1], ['bouillon', 1], ['beurre', 20, 'g'],
    ['creme-liquide', 10, 'cl', 'opt'], ['muscade', 1, 'pincee', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Faire fondre l’oignon émincé dans le beurre, 5 min à feu doux.',
    'Ajouter le potiron épluché et la pomme de terre en cubes, couvrir d’environ 1 L d’eau et ajouter le cube de bouillon.',
    'Porter à ébullition, puis cuire 25 min à feu moyen, jusqu’à ce que les légumes soient tendres. Mixer finement.',
    'Ajouter la crème et la muscade, rectifier l’assaisonnement.'
  ]);

  R('soupe-legumes', 'Soupe de légumes', 'Française', 'Soupe', 45, 'Facile', 4, [
    ['carottes', 3], ['poireaux', 2], ['pommes-de-terre', 400, 'g'], ['navets', 2, 'pc', 'opt'], ['celeri', 1, 'pc', 'opt'],
    ['bouillon', 1], ['beurre', 20, 'g'], ['sel', null], ['poivre', null]
  ], [
    'Éplucher et couper tous les légumes en morceaux.',
    'Les faire revenir 5 min dans le beurre à feu moyen.',
    'Couvrir de 1,5 L d’eau, ajouter le cube de bouillon, porter à ébullition et cuire 30 min à feu moyen.',
    'Mixer ou laisser en morceaux selon les goûts. Saler et poivrer.'
  ]);

  R('veloute-poireaux', 'Velouté poireaux pommes de terre', 'Française', 'Soupe', 40, 'Facile', 4, [
    ['poireaux', 3], ['pommes-de-terre', 500, 'g'], ['oignons', 1], ['bouillon', 1], ['beurre', 20, 'g'],
    ['creme-liquide', 10, 'cl', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Faire fondre les poireaux émincés et l’oignon dans le beurre, 10 min à feu doux.',
    'Ajouter les pommes de terre en cubes, 1 L d’eau et le cube de bouillon.',
    'Porter à ébullition et cuire 25 min à feu moyen. Mixer, puis ajouter la crème. Saler et poivrer.'
  ]);

  R('soupe-pistou', 'Soupe au pistou', 'Française', 'Soupe', 75, 'Moyenne', 6, [
    ['haricots-blancs', 250, 'g'], ['haricots-verts', 200, 'g'], ['courgettes', 2], ['carottes', 2],
    ['pommes-de-terre', 300, 'g'], ['tomates', 2], ['pates', 100, 'g'], ['basilic', 1], ['ail', 3],
    ['parmesan', 50, 'g'], ['huile-olive', 5, 'cs'], ['sel', null], ['poivre', null]
  ], [
    'Couper les carottes, les pommes de terre, les courgettes, les haricots verts et une tomate en petits dés. Les mettre dans 2 L d’eau salée, porter à ébullition et cuire 40 min à feu moyen.',
    'Ajouter les haricots blancs égouttés et les pâtes (de petites pâtes, type coquillettes), et cuire encore 10 min. Poivrer.',
    'Pour le pistou, piler ou mixer les feuilles de basilic avec l’ail, la seconde tomate pelée, le parmesan râpé et l’huile d’olive.',
    'Hors du feu, incorporer le pistou à la soupe juste avant de servir.'
  ]);

  R('lentilles-saucisses', 'Lentilles aux saucisses', 'Française', 'Plat', 55, 'Facile', 4, [
    ['lentilles', 300, 'g'], ['saucisses', 4], ['carottes', 2], ['oignons', 1], ['lardons', 100, 'g', 'opt'],
    ['bouquet-garni', 1, 'pc', 'opt'], ['huile', 1, 'cs'], ['sel', null], ['poivre', null]
  ], [
    'Faire dorer les saucisses et les lardons dans l’huile, dans une cocotte, 5 min à feu moyen. Réserver.',
    'Dans la même cocotte, faire revenir l’oignon émincé et les carottes en rondelles, 5 min à feu moyen.',
    'Ajouter les lentilles rincées, le bouquet garni et environ 1 L d’eau (3 fois leur volume). Porter à ébullition.',
    'Remettre les saucisses et les lardons, couvrir et cuire 30 à 35 min à feu doux, jusqu’à ce que les lentilles soient tendres. Saler en fin de cuisson et poivrer.'
  ]);

  R('cassoulet', 'Cassoulet', 'Française', 'Plat', 180, 'Moyenne', 6, [
    ['haricots-blancs', 1000, 'g'], ['confit-canard', 3], ['saucisses', 6], ['porc-epaule', 400, 'g'],
    ['tomates-concassees', 400, 'g'], ['oignons', 2], ['ail', 3], ['bouquet-garni', 1], ['chapelure', 30, 'g', 'opt'],
    ['sel', null], ['poivre', null]
  ], [
    'Dans une cocotte, faire fondre 2 cs de graisse prélevée sur les cuisses de canard. Y faire dorer les saucisses et le porc en morceaux, 10 min à feu moyen-vif.',
    'Ajouter les oignons et l’ail hachés, puis les tomates et le bouquet garni. Couvrir d’eau à hauteur (environ 50 cl), saler, poivrer et laisser mijoter 1 h à feu doux.',
    'Préchauffer le four à 160 °C. Dans une grande cocotte ou un plat en terre, alterner haricots égouttés, viandes, cuisses de canard coupées en deux et sauce. Le liquide doit arriver juste à hauteur.',
    'Parsemer de chapelure et enfourner 1 h 30. Casser la croûte qui se forme et l’enfoncer 2 ou 3 fois pendant la cuisson, en ajoutant un peu d’eau si le cassoulet se dessèche.'
  ]);

  R('steak-frites', 'Steak frites maison', 'Française', 'Plat', 50, 'Facile', 4, [
    ['steak', 4], ['pommes-de-terre', 1200, 'g'], ['huile', 1, 'l'], ['beurre', 20, 'g'],
    ['echalotes', 2, 'pc', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Éplucher les pommes de terre, les couper en bâtonnets de 1 cm, les rincer et bien les sécher dans un torchon.',
    'Chauffer l’huile à 160 °C dans une friteuse ou une grande casserole. Première cuisson : 6 à 8 min, par petites quantités, sans coloration. Égoutter.',
    'Cuire les steaks dans le beurre, dans une poêle à feu vif, 2 à 3 min par face selon la cuisson souhaitée. Saler, poivrer et réserver. Si vous le souhaitez, faire fondre les échalotes hachées 2 min à feu moyen dans le jus de cuisson et les verser sur la viande.',
    'Chauffer l’huile à 180 °C. Deuxième cuisson des frites : 2 à 3 min, jusqu’à ce qu’elles soient dorées et croustillantes. Égoutter et saler.'
  ]);

  R('pates-lardons-creme', 'Pâtes aux lardons et à la crème', 'Française', 'Plat', 20, 'Facile', 4, [
    ['pates', 400, 'g'], ['lardons', 200, 'g'], ['creme-fraiche', 20, 'cl'], ['oignons', 1, 'pc', 'opt'],
    ['fromage-rape', 50, 'g', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Cuire les pâtes dans 4 L d’eau bouillante salée, le temps indiqué sur le paquet.',
    'Pendant ce temps, faire revenir les lardons et l’oignon émincé 5 min à feu moyen, sans matière grasse.',
    'Ajouter la crème, poivrer généreusement et laisser chauffer 2 min à feu doux.',
    'Mélanger avec les pâtes égouttées et servir avec le fromage.'
  ]);

  R('gratin-pates-jambon', 'Gratin de pâtes au jambon', 'Française', 'Plat', 35, 'Facile', 4, [
    ['pates', 400, 'g'], ['jambon', 4], ['creme-fraiche', 20, 'cl'], ['lait', 10, 'cl'], ['fromage-rape', 150, 'g'],
    ['sel', null], ['poivre', null]
  ], [
    'Préchauffer le four à 200 °C. Cuire les pâtes dans 4 L d’eau bouillante salée, 2 min de moins que le temps indiqué. Égoutter.',
    'Mélanger les pâtes avec le jambon en lanières, la crème, le lait et la moitié du fromage. Poivrer.',
    'Verser dans un plat, couvrir du reste de fromage et gratiner 15 min, jusqu’à ce que le dessus soit doré.'
  ]);

  R('gratin-chou-fleur', 'Gratin de chou-fleur', 'Française', 'Accompagnement', 50, 'Facile', 4, [
    ['chou-fleur', 1], ['beurre', 40, 'g'], ['farine', 40, 'g'], ['lait', 50, 'cl'], ['fromage-rape', 100, 'g'],
    ['muscade', 1, 'pincee', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Détailler le chou-fleur en bouquets et les cuire 8 à 10 min dans l’eau bouillante salée : ils doivent rester un peu fermes. Bien égoutter.',
    'Préparer une béchamel : faire fondre le beurre à feu moyen, ajouter la farine et remuer 1 min, puis verser le lait en fouettant. Laisser épaissir 5 min, saler, poivrer et ajouter la muscade.',
    'Préchauffer le four à 200 °C. Mettre le chou-fleur dans un plat, napper de béchamel et couvrir de fromage.',
    'Gratiner 20 min, jusqu’à ce que le dessus soit doré.'
  ]);

  R('gratin-courgettes', 'Gratin de courgettes', 'Française', 'Accompagnement', 50, 'Facile', 4, [
    ['courgettes', 4], ['oeufs', 2], ['creme-fraiche', 20, 'cl'], ['fromage-rape', 80, 'g'], ['ail', 1, 'pc', 'opt'],
    ['huile-olive', 1, 'cs'], ['sel', null], ['poivre', null]
  ], [
    'Préchauffer le four à 180 °C. Couper les courgettes en rondelles et les faire revenir 10 min à feu moyen dans l’huile avec l’ail haché, pour qu’elles rendent leur eau. Égoutter.',
    'Battre les œufs avec la crème et la moitié du fromage, saler et poivrer.',
    'Mettre les courgettes dans un plat, verser l’appareil et couvrir du reste de fromage.',
    'Cuire 25 à 30 min, jusqu’à ce que l’appareil soit pris et doré.'
  ]);

  R('endives-jambon', 'Endives au jambon', 'Française', 'Plat', 65, 'Facile', 4, [
    ['endives', 8], ['jambon', 8], ['beurre', 40, 'g'], ['farine', 40, 'g'], ['lait', 50, 'cl'],
    ['fromage-rape', 100, 'g'], ['muscade', 1, 'pincee', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Retirer le cône amer à la base des endives. Les cuire 20 min à la vapeur ou dans l’eau bouillante salée, puis bien les presser pour retirer l’eau.',
    'Préparer une béchamel : faire fondre le beurre à feu moyen, ajouter la farine et remuer 1 min, puis verser le lait en fouettant. Laisser épaissir 5 min, saler, poivrer et ajouter la muscade.',
    'Préchauffer le four à 200 °C. Rouler chaque endive dans une tranche de jambon et les ranger dans un plat.',
    'Napper de béchamel, parsemer de fromage et gratiner 20 à 25 min.'
  ]);

  R('tomates-farcies', 'Tomates farcies', 'Française', 'Plat', 85, 'Facile', 4, [
    ['tomates', 8], ['chair-saucisse', 400, 'g'], ['oignons', 1], ['ail', 1], ['riz', 150, 'g'],
    ['chapelure', 20, 'g', 'opt'], ['persil', 0.5, 'pc', 'opt'], ['huile-olive', 2, 'cs'], ['sel', null], ['poivre', null]
  ], [
    'Préchauffer le four à 180 °C. Couper un chapeau aux tomates, les évider en gardant la pulpe, saler l’intérieur et les retourner 10 min pour les égoutter.',
    'Mélanger la chair à saucisse avec l’oignon, l’ail et le persil hachés. Poivrer.',
    'Remplir les tomates, parsemer de chapelure et reposer les chapeaux.',
    'Mettre le riz cru et la pulpe hachée au fond du plat avec 30 cl d’eau salée, et poser les tomates dessus.',
    'Arroser d’huile d’olive et cuire 1 h, jusqu’à ce que la farce soit cuite et le riz tendre. Ajouter un peu d’eau en cours de cuisson si le riz sèche.'
  ]);

  R('saumon-papillote', 'Saumon en papillote', 'Française', 'Plat', 30, 'Facile', 4, [
    ['saumon', 4], ['citron', 1], ['tomates-cerises', 200, 'g'], ['courgettes', 1, 'pc', 'opt'],
    ['huile-olive', 2, 'cs'], ['ciboulette', 0.5, 'pc', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Préchauffer le four à 200 °C.',
    'Sur 4 feuilles de papier cuisson, poser la courgette en fines rondelles, un pavé de saumon, des tomates cerises coupées en deux et une rondelle de citron.',
    'Arroser d’huile, saler, poivrer et fermer hermétiquement les papillotes.',
    'Cuire 15 min : la chair doit être rosée à cœur. Parsemer de ciboulette à l’ouverture.'
  ]);

  R('cabillaud-poireaux', 'Cabillaud à la fondue de poireaux', 'Française', 'Plat', 45, 'Facile', 4, [
    ['cabillaud', 600, 'g'], ['poireaux', 3], ['creme-liquide', 20, 'cl'], ['beurre', 30, 'g'],
    ['citron', 1, 'pc', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Émincer les poireaux et les faire fondre 20 min dans le beurre à couvert, à feu doux, avec une pincée de sel.',
    'Ajouter la crème, poivrer et laisser réduire 5 min à feu doux.',
    'Saler le cabillaud, le poser sur la fondue, couvrir et cuire 8 à 10 min à feu doux, jusqu’à ce que la chair soit nacrée et se détache en lamelles.',
    'Servir avec un filet de jus de citron.'
  ]);

  R('moules-marinieres', 'Moules marinières', 'Française', 'Plat', 30, 'Facile', 4, [
    ['moules', 2, 'kg'], ['echalotes', 3], ['vin-blanc', 20, 'cl'], ['beurre', 40, 'g'],
    ['persil', 0.5, 'pc', 'opt'], ['creme-fraiche', 10, 'cl', 'opt'], ['poivre', null]
  ], [
    'Gratter et rincer les moules. Jeter celles qui sont cassées ou ouvertes et qui ne se referment pas quand on les tapote.',
    'Faire fondre les échalotes hachées dans le beurre, 3 min à feu doux, dans un grand faitout.',
    'Ajouter le vin blanc et les moules, couvrir et cuire à feu vif 5 à 7 min en secouant le faitout, jusqu’à ce qu’elles soient toutes ouvertes.',
    'Ajouter la crème et le persil haché, poivrer, mélanger et servir aussitôt. Jeter les moules restées fermées.'
  ]);

  R('navarin-agneau', 'Navarin d’agneau', 'Française', 'Plat', 120, 'Moyenne', 6, [
    ['agneau', 1200, 'g'], ['pommes-de-terre', 600, 'g'], ['carottes', 4], ['navets', 4], ['oignons', 2], ['ail', 2],
    ['concentre-tomate', 1, 'cs'], ['farine', 20, 'g'], ['bouquet-garni', 1], ['petits-pois', 200, 'g', 'opt'],
    ['huile', 2, 'cs'], ['sel', null], ['poivre', null]
  ], [
    'Faire dorer l’agneau dans l’huile, dans une cocotte, 10 min à feu vif. Ajouter les oignons émincés et cuire 3 min à feu moyen.',
    'Saupoudrer de farine et remuer 1 min. Ajouter le concentré de tomate, l’ail écrasé, le bouquet garni et couvrir d’eau à hauteur (environ 1 L). Saler, poivrer.',
    'Porter à ébullition, puis couvrir et laisser mijoter 1 h à feu doux.',
    'Ajouter les carottes, les navets et les pommes de terre en morceaux, et cuire 30 min.',
    'Ajouter les petits pois 10 min avant la fin. Rectifier l’assaisonnement.'
  ]);

  R('carbonade-flamande', 'Carbonade flamande', 'Française', 'Plat', 190, 'Moyenne', 6, [
    ['boeuf-braiser', 1200, 'g'], ['biere', 75, 'cl'], ['oignons', 4], ['pain-d-epices', 2], ['moutarde', 2, 'cs'],
    ['sucre-roux', 15, 'g'], ['beurre', 30, 'g'], ['bouquet-garni', 1], ['vinaigre', 1, 'cs', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Couper la viande en gros cubes et la faire dorer dans le beurre, dans une cocotte, à feu vif, par petites quantités. Réserver.',
    'Dans la même cocotte, faire fondre les oignons émincés avec la cassonade, 15 min à feu moyen, jusqu’à ce qu’ils caramélisent légèrement.',
    'Remettre la viande, verser la bière, ajouter le bouquet garni, saler et poivrer.',
    'Tartiner les tranches de pain d’épices de moutarde et les poser sur le dessus.',
    'Couvrir et laisser mijoter 2 h 30 à feu très doux : le pain d’épices se délite et épaissit la sauce. Ajouter le vinaigre en fin de cuisson.'
  ]);

  R('boeuf-carottes', 'Bœuf carottes', 'Française', 'Plat', 180, 'Facile', 6, [
    ['boeuf-braiser', 1200, 'g'], ['carottes', 10], ['oignons', 2], ['vin-blanc', 25, 'cl'], ['bouquet-garni', 1],
    ['huile', 2, 'cs'], ['sel', null], ['poivre', null]
  ], [
    'Couper la viande en cubes et la faire dorer dans l’huile, dans une cocotte, à feu vif. Ajouter les oignons émincés et cuire 5 min à feu moyen.',
    'Ajouter le vin blanc, le bouquet garni et de l’eau à hauteur. Saler, poivrer et porter à ébullition.',
    'Couvrir et cuire 1 h 30 à feu doux.',
    'Ajouter les carottes en rondelles épaisses et cuire encore 1 h, jusqu’à ce que la viande soit fondante. Rectifier l’assaisonnement.'
  ]);

  R('pissaladiere', 'Pissaladière', 'Française', 'Plat', 75, 'Facile', 6, [
    ['pate-pizza', 1], ['oignons', 10], ['anchois', 50, 'g'], ['olives', 50, 'g'], ['huile-olive', 4, 'cs'],
    ['thym', 2, 'pc', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Émincer les oignons et les faire compoter 40 min à feu doux dans l’huile d’olive avec le thym, sans les colorer. Saler légèrement et poivrer.',
    'Préchauffer le four à 220 °C. Étaler la pâte sur une plaque.',
    'Répartir les oignons, disposer les filets d’anchois en croisillons et placer une olive dans chaque losange.',
    'Cuire 20 min, jusqu’à ce que la pâte soit dorée. Délicieuse tiède ou froide.'
  ]);

  R('flammekueche', 'Flammekueche', 'Française', 'Plat', 30, 'Facile', 4, [
    ['pate-pizza', 1], ['creme-fraiche', 20, 'cl'], ['fromage-blanc', 100, 'g', 'opt'], ['lardons', 200, 'g'], ['oignons', 2],
    ['muscade', 1, 'pincee', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Préchauffer le four à 250 °C. Étaler la pâte très finement sur une plaque.',
    'Mélanger la crème et le fromage blanc, assaisonner de sel, de poivre et de muscade, et étaler sur la pâte.',
    'Parsemer d’oignons en fines lamelles et de lardons crus.',
    'Cuire 10 à 12 min, jusqu’à ce que les bords soient bien dorés.'
  ]);

  R('tarte-tomate-moutarde', 'Tarte à la tomate et à la moutarde', 'Française', 'Plat', 50, 'Facile', 6, [
    ['pate-brisee', 1], ['tomates', 5], ['moutarde', 3, 'cs'], ['fromage-rape', 60, 'g', 'opt'],
    ['herbes-provence', 1, 'cc'], ['huile-olive', 2, 'cs'], ['sel', null], ['poivre', null]
  ], [
    'Préchauffer le four à 200 °C. Foncer un moule à tarte avec la pâte et la piquer à la fourchette.',
    'Tartiner le fond de moutarde et parsemer de fromage.',
    'Couper les tomates en rondelles, les égoutter quelques minutes sur du papier absorbant, puis les disposer sur la tarte. Arroser d’huile, saler, poivrer et parsemer d’herbes.',
    'Cuire 30 à 35 min, jusqu’à ce que la pâte soit dorée.'
  ]);

  R('cake-sale', 'Cake salé jambon olives', 'Française', 'Entrée', 65, 'Facile', 6, [
    ['farine', 200, 'g'], ['oeufs', 3], ['levure-chimique', 1], ['lait', 12, 'cl'], ['huile', 7, 'cs'],
    ['jambon', 4], ['olives', 80, 'g'], ['fromage-rape', 100, 'g'], ['sel', null], ['poivre', null]
  ], [
    'Préchauffer le four à 180 °C. Huiler un moule à cake ou le chemiser de papier cuisson.',
    'Mélanger la farine et la levure, ajouter les œufs un à un, puis le lait et l’huile.',
    'Ajouter le jambon en dés, les olives et le fromage. Saler peu et poivrer.',
    'Verser dans le moule et cuire 45 min : la lame d’un couteau doit ressortir sèche. Laisser tiédir avant de démouler.'
  ]);

  R('puree-maison', 'Purée maison', 'Française', 'Accompagnement', 35, 'Facile', 4, [
    ['pommes-de-terre', 1000, 'g'], ['lait', 25, 'cl'], ['beurre', 60, 'g'], ['muscade', 1, 'pincee', 'opt'],
    ['sel', null], ['poivre', null]
  ], [
    'Éplucher les pommes de terre, les couper en morceaux et les cuire 20 à 25 min dans une grande casserole d’eau salée frémissante, jusqu’à ce qu’elles soient tendres.',
    'Faire chauffer le lait. Égoutter les pommes de terre et les écraser au presse-purée.',
    'Incorporer le beurre, puis le lait chaud petit à petit. Saler, poivrer et ajouter la muscade.'
  ]);

  R('pommes-sautees', 'Pommes de terre sautées', 'Française', 'Accompagnement', 35, 'Facile', 4, [
    ['pommes-de-terre', 1000, 'g'], ['huile', 3, 'cs'], ['beurre', 20, 'g'], ['ail', 2, 'pc', 'opt'],
    ['persil', 0.5, 'pc', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Éplucher les pommes de terre (à chair ferme), les couper en cubes, les rincer et bien les sécher.',
    'Les faire dorer 25 min dans une grande poêle à feu moyen, dans l’huile et le beurre, en remuant régulièrement, jusqu’à ce qu’elles soient dorées et tendres.',
    'Ajouter l’ail et le persil hachés 2 min avant la fin. Saler et poivrer.'
  ]);

  R('carottes-vichy', 'Carottes Vichy', 'Française', 'Accompagnement', 35, 'Facile', 4, [
    ['carottes', 8], ['beurre', 30, 'g'], ['sucre', 10, 'g'], ['persil', 0.5, 'pc', 'opt'], ['sel', null]
  ], [
    'Éplucher les carottes et les couper en rondelles fines.',
    'Les mettre dans une sauteuse avec le beurre, le sucre, une pincée de sel et de l’eau à hauteur.',
    'Cuire à découvert à feu moyen jusqu’à évaporation complète de l’eau, environ 25 min. Les carottes doivent être tendres et brillantes.',
    'Parsemer de persil ciselé.'
  ]);

  R('mousse-chocolat', 'Mousse au chocolat', 'Française', 'Dessert', 200, 'Facile', 6, [
    ['chocolat-noir', 200, 'g'], ['oeufs', 6], ['sucre', 30, 'g', 'opt'], ['sel', 1, 'pincee']
  ], [
    'Faire fondre le chocolat au bain-marie, à feu doux, puis le laisser tiédir.',
    'Séparer les blancs des jaunes. Incorporer les jaunes au chocolat tiédi.',
    'Monter les blancs en neige ferme avec le sel, en ajoutant le sucre à la fin.',
    'Incorporer délicatement les blancs au chocolat en soulevant la masse.',
    'Répartir dans des verrines et réserver au moins 3 h au réfrigérateur.'
  ]);

  R('fondant-chocolat', 'Fondant au chocolat', 'Française', 'Dessert', 40, 'Facile', 6, [
    ['chocolat-noir', 200, 'g'], ['beurre', 160, 'g'], ['sucre', 120, 'g'], ['oeufs', 4], ['farine', 50, 'g']
  ], [
    'Préchauffer le four à 180 °C. Beurrer un moule de 22 cm avec 10 g de beurre.',
    'Faire fondre le chocolat avec le reste du beurre, au bain-marie ou à feu très doux.',
    'Fouetter les œufs avec le sucre, ajouter le chocolat fondu puis la farine.',
    'Verser dans le moule et cuire 20 à 22 min : le centre doit rester tremblotant.'
  ]);

  R('gateau-yaourt', 'Gâteau au yaourt', 'Française', 'Dessert', 45, 'Facile', 8, [
    ['yaourt', 1], ['sucre', 200, 'g'], ['farine', 210, 'g'], ['oeufs', 3], ['huile', 4, 'cs'],
    ['levure-chimique', 1], ['sucre-vanille', 1, 'pc', 'opt']
  ], [
    'Préchauffer le four à 180 °C. Huiler un moule de 24 cm.',
    'Verser le yaourt dans un saladier et garder le pot pour mesurer : 2 pots de sucre, 3 pots de farine.',
    'Ajouter les œufs, le sucre et le sucre vanillé, puis la farine, la levure et l’huile. Bien mélanger.',
    'Verser dans le moule et cuire 30 à 35 min : la lame d’un couteau doit ressortir sèche.'
  ]);

  R('tarte-pommes', 'Tarte aux pommes', 'Française', 'Dessert', 55, 'Facile', 8, [
    ['pate-brisee', 1], ['pommes', 5], ['sucre', 40, 'g'], ['beurre', 20, 'g'],
    ['sucre-vanille', 1, 'pc', 'opt'], ['cannelle', 0.5, 'cc', 'opt']
  ], [
    'Préchauffer le four à 200 °C. Foncer un moule à tarte avec la pâte et la piquer à la fourchette.',
    'Éplucher les pommes, les épépiner et les couper en fines lamelles.',
    'Les disposer en rosace, saupoudrer de sucre, de sucre vanillé et de cannelle, et parsemer de noisettes de beurre.',
    'Cuire 35 min, jusqu’à ce que la pâte et les pommes soient dorées.'
  ]);

  R('crumble-pommes', 'Crumble aux pommes', 'Française', 'Dessert', 55, 'Facile', 6, [
    ['pommes', 6], ['farine', 150, 'g'], ['beurre', 100, 'g'], ['sucre', 100, 'g'], ['cannelle', 1, 'cc', 'opt']
  ], [
    'Préchauffer le four à 180 °C. Éplucher les pommes, les couper en dés et les mettre dans un plat avec la cannelle.',
    'Sabler du bout des doigts la farine, le sucre et le beurre froid en dés.',
    'Recouvrir les pommes de cette pâte sableuse.',
    'Cuire 35 à 40 min, jusqu’à ce que le dessus soit doré.'
  ]);

  R('clafoutis-cerises', 'Clafoutis aux cerises', 'Française', 'Dessert', 55, 'Facile', 6, [
    ['cerises', 500, 'g'], ['oeufs', 3], ['farine', 60, 'g'], ['sucre', 80, 'g'], ['lait', 25, 'cl'], ['beurre', 20, 'g']
  ], [
    'Préchauffer le four à 180 °C. Beurrer un plat et y répartir les cerises lavées et équeutées (avec les noyaux, c’est la tradition).',
    'Fouetter les œufs avec le sucre, ajouter la farine puis le lait.',
    'Verser sur les cerises et cuire 35 à 40 min, jusqu’à ce que le clafoutis soit doré et pris.'
  ]);

  R('riz-au-lait', 'Riz au lait', 'Française', 'Dessert', 55, 'Facile', 6, [
    ['riz-rond', 150, 'g'], ['lait', 100, 'cl'], ['sucre', 80, 'g'], ['sucre-vanille', 1], ['cannelle', 0.5, 'cc', 'opt']
  ], [
    'Porter le lait à ébullition à feu moyen avec le sucre vanillé.',
    'Ajouter le riz, baisser à feu très doux et cuire 40 min à petits frémissements, en remuant souvent, jusqu’à ce que le riz soit fondant et crémeux.',
    'Ajouter le sucre en fin de cuisson. Servir tiède ou froid, saupoudré de cannelle.'
  ]);

  R('pain-perdu', 'Pain perdu', 'Française', 'Dessert', 20, 'Facile', 4, [
    ['pain', 8], ['oeufs', 3], ['lait', 25, 'cl'], ['sucre', 40, 'g'], ['beurre', 30, 'g'], ['cannelle', 0.5, 'cc', 'opt']
  ], [
    'Fouetter les œufs avec le lait, le sucre et la cannelle.',
    'Tremper les tranches de pain (idéalement rassis) dans ce mélange.',
    'Les faire dorer dans le beurre, dans une poêle à feu moyen, 2 à 3 min de chaque côté.'
  ]);

  R('poires-belle-helene', 'Poires Belle-Hélène', 'Française', 'Dessert', 65, 'Facile', 4, [
    ['poires', 4], ['sucre', 100, 'g'], ['chocolat-noir', 100, 'g'], ['creme-liquide', 10, 'cl'], ['sucre-vanille', 1, 'pc', 'opt'],
    ['glace-a-la-vanille', 0.5, 'l', 'opt']
  ], [
    'Éplucher les poires en gardant la queue.',
    'Porter 1 L d’eau à ébullition avec le sucre et le sucre vanillé. Y pocher les poires 20 min à feu doux, à frémissement : la pointe d’un couteau doit s’enfoncer facilement. Laisser refroidir 30 min dans le sirop.',
    'Faire fondre le chocolat avec la crème, à feu doux, en remuant.',
    'Servir les poires égouttées avec une boule de glace à la vanille, nappées de sauce chocolat chaude.'
  ]);

  R('far-breton', 'Far breton', 'Française', 'Dessert', 75, 'Facile', 8, [
    ['farine', 200, 'g'], ['sucre', 120, 'g'], ['oeufs', 4], ['lait', 75, 'cl'], ['beurre', 30, 'g'],
    ['pruneaux', 200, 'g'], ['sel', 1, 'pincee']
  ], [
    'Préchauffer le four à 200 °C. Beurrer généreusement un plat.',
    'Mélanger la farine, le sucre et le sel, ajouter les œufs puis le lait petit à petit, en fouettant pour éviter les grumeaux.',
    'Répartir les pruneaux dans le plat et verser la pâte.',
    'Cuire 10 min à 200 °C, puis 45 min à 180 °C, jusqu’à ce que le dessus soit bien doré. Laisser tiédir avant de servir.'
  ]);

  R('ile-flottante', 'Île flottante', 'Française', 'Dessert', 110, 'Moyenne', 4, [
    ['oeufs', 4], ['lait', 50, 'cl'], ['sucre', 100, 'g'], ['sucre-vanille', 1]
  ], [
    'Crème anglaise : porter le lait à frémissement à feu moyen avec le sucre vanillé. Séparer les blancs des jaunes. Fouetter les jaunes avec 50 g de sucre et verser le lait chaud dessus en fouettant.',
    'Remettre dans la casserole à feu doux et remuer sans cesse jusqu’à ce que la crème nappe la cuillère (83 °C), sans jamais bouillir. Laisser refroidir, puis réserver 1 h au réfrigérateur.',
    'Monter les blancs en neige ferme en ajoutant le reste du sucre à la fin.',
    'Former des quenelles de blancs et les pocher 1 min de chaque côté dans de l’eau frémissante. Égoutter sur un linge.',
    'Servir les blancs sur la crème anglaise bien froide.'
  ]);

  /* ───────────── Italienne ───────────── */

  R('spaghetti-carbonara', 'Spaghetti carbonara', 'Italienne', 'Plat', 25, 'Facile', 4, [
    ['spaghetti', 400, 'g'], ['guanciale', 150, 'g'], ['oeufs', 4], ['pecorino', 80, 'g'], ['poivre', null], ['sel', null]
  ], [
    'Porter 4 L d’eau à ébullition, saler et y cuire les spaghetti al dente, selon le temps indiqué sur le paquet.',
    'Pendant ce temps, couper le guanciale (ou à défaut de la pancetta) en lardons et le faire dorer à sec, 5 à 6 min à feu moyen, jusqu’à ce que le gras soit fondu et translucide. Couper le feu.',
    'Mélanger 3 jaunes et 1 œuf entier avec le pecorino râpé et beaucoup de poivre.',
    'Mettre les pâtes égouttées dans la poêle hors du feu, mélanger avec le guanciale, puis ajouter l’appareil aux œufs et quelques cuillères d’eau de cuisson en remuant vivement pour obtenir une sauce crémeuse. Pas de crème !'
  ]);

  R('spaghetti-bolognaise', 'Spaghetti bolognaise', 'Italienne', 'Plat', 60, 'Facile', 4, [
    ['spaghetti', 400, 'g'], ['boeuf-hache', 400, 'g'], ['tomates-concassees', 400, 'g'], ['oignons', 1], ['carottes', 1],
    ['celeri', 1, 'pc', 'opt'], ['ail', 1], ['concentre-tomate', 1, 'cs'], ['vin-rouge', 10, 'cl', 'opt'], ['huile-olive', 2, 'cs'],
    ['parmesan', 40, 'g', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Faire revenir l’oignon, la carotte, le céleri et l’ail hachés finement dans l’huile, 5 min à feu moyen.',
    'Ajouter la viande et la faire dorer 5 min à feu vif en l’égrenant. Déglacer au vin.',
    'Ajouter les tomates et le concentré, saler, poivrer. Laisser mijoter 40 min à feu doux, à couvert.',
    'Cuire les spaghetti al dente dans 4 L d’eau bouillante salée. Les servir avec la sauce et le parmesan râpé.'
  ]);

  R('lasagnes', 'Lasagnes à la bolognaise', 'Italienne', 'Plat', 110, 'Moyenne', 6, [
    ['lasagnes', 250, 'g'], ['boeuf-hache', 500, 'g'], ['tomates-concassees', 800, 'g'], ['oignons', 1], ['carottes', 1],
    ['ail', 2], ['beurre', 50, 'g'], ['farine', 50, 'g'], ['lait', 70, 'cl'], ['parmesan', 80, 'g'],
    ['muscade', 1, 'pincee', 'opt'], ['huile-olive', 2, 'cs'], ['sel', null], ['poivre', null]
  ], [
    'Sauce bolognaise : faire revenir l’oignon, la carotte et l’ail hachés dans l’huile, 5 min à feu moyen. Ajouter la viande et la faire dorer 5 min à feu vif, puis les tomates. Saler, poivrer et laisser mijoter 30 min à feu doux.',
    'Béchamel : faire fondre le beurre à feu moyen, ajouter la farine et remuer 1 min, puis verser le lait en fouettant. Laisser épaissir 5 min et assaisonner de sel, de poivre et de muscade.',
    'Préchauffer le four à 180 °C. Dans un plat, alterner sauce, feuilles de lasagne (sans précuisson), béchamel, en finissant par la béchamel.',
    'Parsemer de parmesan râpé et cuire 40 min, jusqu’à ce que le dessus soit doré et que les pâtes soient tendres. Laisser reposer 10 min avant de couper.'
  ]);

  R('risotto-champignons', 'Risotto aux champignons', 'Italienne', 'Plat', 40, 'Moyenne', 4, [
    ['riz-risotto', 300, 'g'], ['champignons', 300, 'g'], ['oignons', 1], ['vin-blanc', 10, 'cl'], ['bouillon', 1],
    ['parmesan', 60, 'g'], ['beurre', 40, 'g'], ['huile-olive', 2, 'cs'], ['sel', null], ['poivre', null]
  ], [
    'Délayer le cube dans 1 L d’eau bouillante et garder ce bouillon frémissant à feu doux.',
    'Faire revenir les champignons émincés dans 10 g de beurre, 5 min à feu vif. Réserver.',
    'Faire fondre l’oignon haché dans l’huile, 3 min à feu moyen. Ajouter le riz et le nacrer 2 min en remuant, jusqu’à ce qu’il devienne translucide.',
    'Déglacer au vin blanc, puis ajouter le bouillon louche par louche, en attendant qu’il soit absorbé et en remuant, pendant environ 18 min : le riz doit être tendre mais encore légèrement ferme.',
    'Hors du feu, incorporer les champignons, le reste du beurre et le parmesan râpé. Poivrer, goûter avant de saler, couvrir 2 min et servir.'
  ]);

  R('pates-pesto', 'Pâtes au pesto', 'Italienne', 'Plat', 20, 'Facile', 4, [
    ['pates', 400, 'g'], ['basilic', 1], ['parmesan', 50, 'g'], ['pignons', 30, 'g'], ['ail', 1],
    ['huile-olive', 8, 'cs'], ['sel', null]
  ], [
    'Cuire les pâtes dans 4 L d’eau bouillante salée, le temps indiqué sur le paquet.',
    'Faire griller les pignons à sec, 2 à 3 min à feu doux, en remuant.',
    'Mixer les feuilles de basilic avec l’ail, les pignons, le parmesan râpé et l’huile d’olive. Saler légèrement.',
    'Mélanger le pesto avec les pâtes égouttées et un peu d’eau de cuisson, hors du feu.'
  ]);

  R('pates-arrabbiata', 'Penne all’arrabbiata', 'Italienne', 'Plat', 25, 'Facile', 4, [
    ['pates', 400, 'g'], ['tomates-concassees', 400, 'g'], ['ail', 2], ['piment', 2, 'pincee'],
    ['huile-olive', 3, 'cs'], ['persil', 0.5, 'pc', 'opt'], ['sel', null]
  ], [
    'Faire revenir l’ail émincé et le piment dans l’huile d’olive, 1 à 2 min à feu doux, sans colorer.',
    'Ajouter les tomates, saler et laisser réduire 15 min à feu moyen.',
    'Pendant ce temps, cuire les penne al dente dans 4 L d’eau bouillante salée.',
    'Mélanger les pâtes égouttées avec la sauce et parsemer de persil ciselé.'
  ]);

  R('pates-thon-tomate', 'Pâtes au thon et à la tomate', 'Italienne', 'Plat', 25, 'Facile', 4, [
    ['pates', 400, 'g'], ['thon-boite', 200, 'g'], ['tomates-concassees', 400, 'g'], ['oignons', 1], ['ail', 1],
    ['olives', 50, 'g', 'opt'], ['huile-olive', 2, 'cs'], ['sel', null], ['poivre', null]
  ], [
    'Faire revenir l’oignon et l’ail hachés dans l’huile d’olive, 5 min à feu moyen.',
    'Ajouter les tomates, saler, poivrer et laisser mijoter 10 min à feu doux.',
    'Pendant ce temps, cuire les pâtes al dente dans 4 L d’eau bouillante salée.',
    'Ajouter le thon égoutté et émietté et les olives à la sauce, réchauffer 2 min, puis mélanger avec les pâtes égouttées.'
  ]);

  R('pizza-margherita', 'Pizza margherita', 'Italienne', 'Plat', 35, 'Facile', 2, [
    ['pate-pizza', 1], ['coulis-tomate', 10, 'cl'], ['mozzarella', 125, 'g'], ['basilic', 0.25, 'pc', 'opt'],
    ['origan', 0.5, 'cc', 'opt'], ['huile-olive', 1, 'cs'], ['sel', null]
  ], [
    'Préchauffer le four au maximum (250 °C) pendant 20 min, avec la plaque à l’intérieur.',
    'Étaler la pâte sur du papier cuisson, la couvrir de coulis de tomate salé et d’origan.',
    'Répartir la mozzarella égouttée et coupée en morceaux, et arroser d’huile.',
    'Faire glisser sur la plaque chaude et cuire 10 à 12 min, jusqu’à ce que les bords soient dorés. Ajouter le basilic frais à la sortie du four.'
  ]);

  R('aubergines-parmigiana', 'Aubergines à la parmigiana', 'Italienne', 'Plat', 90, 'Moyenne', 4, [
    ['aubergines', 3], ['tomates-concassees', 800, 'g'], ['mozzarella', 250, 'g'], ['parmesan', 80, 'g'], ['ail', 1],
    ['basilic', 0.5, 'pc', 'opt'], ['huile-olive', 6, 'cs'], ['sel', null], ['poivre', null]
  ], [
    'Préchauffer le four à 200 °C. Couper les aubergines en tranches de 1 cm, les badigeonner d’huile, saler et les faire griller au four 20 min, jusqu’à ce qu’elles soient dorées et fondantes.',
    'Pendant ce temps, faire revenir l’ail haché dans 1 cs d’huile, 1 min à feu doux, ajouter les tomates, saler, poivrer et laisser mijoter 15 min à feu moyen.',
    'Baisser le four à 180 °C. Dans un plat, alterner sauce, aubergines, mozzarella en tranches, feuilles de basilic et parmesan râpé, en finissant par la sauce et le parmesan.',
    'Cuire 30 min, jusqu’à ce que le dessus soit doré et bouillonnant. Laisser reposer 10 min avant de servir.'
  ]);

  R('salade-caprese', 'Salade caprese', 'Italienne', 'Entrée', 10, 'Facile', 4, [
    ['tomates', 4], ['mozzarella', 250, 'g'], ['basilic', 0.5], ['huile-olive', 3, 'cs'], ['sel', null], ['poivre', null]
  ], [
    'Couper les tomates et la mozzarella en tranches.',
    'Les alterner dans un plat avec des feuilles de basilic.',
    'Arroser d’huile d’olive, saler et poivrer.'
  ]);

  R('tiramisu', 'Tiramisu', 'Italienne', 'Dessert', 270, 'Facile', 6, [
    ['mascarpone', 500, 'g'], ['oeufs', 4], ['sucre', 100, 'g'], ['boudoirs', 30], ['cafe', 30, 'cl'],
    ['cacao-en-poudre', 15, 'g']
  ], [
    'Préparer le café et le laisser refroidir.',
    'Séparer les blancs des jaunes. Fouetter les jaunes avec le sucre jusqu’à ce que le mélange blanchisse, puis ajouter le mascarpone.',
    'Monter les blancs en neige ferme et les incorporer délicatement.',
    'Tremper rapidement les biscuits dans le café et alterner les couches de biscuits et de crème, en finissant par la crème.',
    'Réserver au moins 4 h au réfrigérateur. Saupoudrer de cacao avant de servir.'
  ]);

  R('panna-cotta', 'Panna cotta', 'Italienne', 'Dessert', 255, 'Facile', 4, [
    ['creme-liquide', 50, 'cl'], ['sucre', 80, 'g'], ['gelatine', 3], ['sucre-vanille', 1, 'pc', 'opt'],
    ['fruits-rouges-surgeles', 200, 'g', 'opt']
  ], [
    'Faire ramollir la gélatine 5 min dans un bol d’eau froide.',
    'Chauffer la crème avec 60 g de sucre et le sucre vanillé, à feu moyen, jusqu’aux premiers frémissements, sans faire bouillir.',
    'Hors du feu, ajouter la gélatine essorée et bien mélanger.',
    'Verser dans des verrines et réserver 4 h au réfrigérateur.',
    'Pour le coulis, mixer les fruits rouges décongelés avec le reste du sucre. En napper les panna cotta au moment de servir.'
  ]);

  /* ───────────── Espagnole, grecque ───────────── */

  R('tortilla', 'Tortilla de patatas', 'Espagnole', 'Plat', 45, 'Moyenne', 4, [
    ['pommes-de-terre', 600, 'g'], ['oeufs', 6], ['oignons', 1], ['huile-olive', 10, 'cs'], ['sel', null]
  ], [
    'Éplucher les pommes de terre, les couper en fines lamelles et l’oignon en fines tranches.',
    'Les faire confire 20 min dans l’huile d’olive à feu moyen-doux, sans qu’ils dorent : les pommes de terre doivent être tendres. Égoutter en gardant l’huile.',
    'Battre les œufs avec du sel, y mélanger les pommes de terre et laisser reposer 5 min.',
    'Chauffer 1 cs de l’huile réservée dans une poêle de 24 cm à feu moyen, verser le mélange et cuire 5 min. Retourner à l’aide d’une assiette et cuire encore 3 min : le centre doit rester moelleux.'
  ]);

  R('gaspacho', 'Gaspacho', 'Espagnole', 'Soupe', 135, 'Facile', 4, [
    ['tomates', 8], ['concombre', 1], ['poivrons', 1], ['oignons', 0.5], ['ail', 1], ['pain', 2, 'pc', 'opt'],
    ['huile-olive', 4, 'cs'], ['vinaigre-de-xeres', 2, 'cs'], ['sel', null], ['poivre', null]
  ], [
    'Couper grossièrement les tomates, le concombre épluché, le poivron épépiné, l’oignon et l’ail.',
    'Mixer avec le pain trempé, l’huile, le vinaigre, le sel et le poivre jusqu’à obtenir une soupe lisse. Passer au chinois pour plus de finesse.',
    'Réserver au moins 2 h au réfrigérateur. Servir bien froid.'
  ]);

  R('paella', 'Paella poulet et crevettes', 'Espagnole', 'Plat', 65, 'Moyenne', 4, [
    ['riz-rond', 300, 'g'], ['poulet', 400, 'g'], ['crevettes', 200, 'g'], ['poivrons', 1],
    ['tomates', 2], ['oignons', 1], ['ail', 2], ['petits-pois', 100, 'g', 'opt'], ['bouillon', 1],
    ['paprika', 1, 'cc'], ['safran', 1, 'pincee'], ['huile-olive', 4, 'cs'], ['citron', 1, 'pc', 'opt'], ['sel', null]
  ], [
    'Délayer le cube dans 90 cl d’eau bouillante avec le safran et garder chaud.',
    'Dans une grande poêle à paella, faire dorer le poulet en morceaux dans l’huile, 5 min à feu vif. Réserver.',
    'À feu moyen, faire revenir l’oignon, l’ail et le poivron hachés 5 min, puis ajouter les tomates râpées et cuire 3 min.',
    'Ajouter le riz et le paprika, remuer 1 min pour enrober le riz.',
    'Verser le bouillon chaud, remettre le poulet, répartir uniformément et ne plus remuer. Cuire 15 min à feu moyen.',
    'Ajouter les crevettes et les petits pois, cuire encore 5 min à feu doux, jusqu’à ce que le liquide soit absorbé. Laisser reposer 5 min sous un torchon. Servir avec des quartiers de citron.'
  ]);

  R('moussaka', 'Moussaka', 'Grecque', 'Plat', 110, 'Moyenne', 6, [
    ['aubergines', 3], ['boeuf-hache', 500, 'g'], ['tomates-concassees', 400, 'g'], ['oignons', 1], ['ail', 2],
    ['cannelle', 0.5, 'cc'], ['beurre', 40, 'g'], ['farine', 40, 'g'], ['lait', 50, 'cl'], ['oeufs', 1],
    ['parmesan', 50, 'g'], ['huile-olive', 5, 'cs'], ['sel', null], ['poivre', null]
  ], [
    'Préchauffer le four à 200 °C. Couper les aubergines en tranches de 1 cm, les huiler, les saler et les rôtir 20 min au four.',
    'Faire revenir l’oignon et l’ail hachés dans 1 cs d’huile, 5 min à feu moyen. Ajouter la viande et la faire dorer 5 min à feu vif, puis les tomates et la cannelle. Saler, poivrer et laisser mijoter 20 min à feu doux.',
    'Préparer une béchamel : faire fondre le beurre à feu moyen, ajouter la farine, puis le lait en fouettant. Laisser épaissir 5 min, assaisonner et, hors du feu, incorporer l’œuf battu.',
    'Baisser le four à 180 °C. Alterner aubergines et viande dans un plat, couvrir de béchamel et de parmesan râpé.',
    'Cuire 40 min, jusqu’à ce que le dessus soit doré. Laisser reposer 10 min avant de couper.'
  ]);

  R('salade-grecque', 'Salade grecque', 'Grecque', 'Entrée', 15, 'Facile', 4, [
    ['tomates', 4], ['concombre', 1], ['feta', 200, 'g'], ['oignon-rouge', 1], ['olives', 60, 'g'],
    ['poivrons', 1, 'pc', 'opt'], ['origan', 1, 'cc'], ['huile-olive', 4, 'cs'], ['sel', null]
  ], [
    'Couper les tomates, le concombre et le poivron en morceaux, et l’oignon en fines rondelles.',
    'Ajouter les olives et poser la feta en bloc ou en cubes.',
    'Arroser d’huile d’olive, saupoudrer d’origan et saler légèrement.'
  ]);

  R('tzatziki', 'Tzatziki', 'Grecque', 'Entrée', 20, 'Facile', 4, [
    ['yaourt-grec', 400, 'g'], ['concombre', 1], ['ail', 1], ['menthe', 0.25, 'pc', 'opt'], ['huile-olive', 1, 'cs'],
    ['citron', 0.5, 'pc', 'opt'], ['sel', null]
  ], [
    'Râper le concombre, le saler et le laisser dégorger 10 min, puis bien le presser.',
    'Mélanger avec le yaourt, l’ail écrasé, la menthe ciselée, l’huile et un filet de jus de citron.',
    'Servir frais avec du pain pita ou des crudités.'
  ]);

  /* ───────────── Maghrébine, orientale ───────────── */

  R('couscous-legumes', 'Couscous aux légumes', 'Maghrébine', 'Plat', 80, 'Moyenne', 6, [
    ['semoule', 500, 'g'], ['pois-chiches', 250, 'g'], ['carottes', 4], ['courgettes', 3], ['navets', 3],
    ['oignons', 2], ['tomates-concassees', 400, 'g'], ['ras-el-hanout', 2, 'cc'], ['merguez', 6, 'pc', 'opt'],
    ['harissa', 1, 'cc', 'opt'], ['huile-olive', 4, 'cs'], ['beurre', 30, 'g'], ['sel', null], ['poivre', null]
  ], [
    'Dans un grand faitout, faire revenir les oignons émincés dans l’huile avec le ras el hanout, 5 min à feu moyen.',
    'Ajouter les tomates, les carottes et les navets en gros morceaux, couvrir de 2 L d’eau, saler et poivrer. Porter à ébullition, puis cuire 30 min à feu moyen.',
    'Ajouter les courgettes en tronçons et les pois chiches égouttés, et cuire encore 20 min.',
    'Préparer la semoule : la verser dans un saladier, ajouter 50 cl d’eau bouillante salée, couvrir 5 min, puis égrener à la fourchette avec le beurre.',
    'Cuire les merguez 8 à 10 min à la poêle à feu moyen. Servir la semoule avec les légumes, le bouillon, les merguez et la harissa à part.'
  ]);

  R('tajine-poulet-citron', 'Tajine de poulet aux citrons confits', 'Maghrébine', 'Plat', 85, 'Moyenne', 4, [
    ['cuisses-poulet', 4], ['citron-confit', 2], ['olives-vertes', 100, 'g'], ['oignons', 2], ['ail', 2],
    ['gingembre', 10, 'g', 'opt'], ['curcuma', 1, 'cc'], ['coriandre', 0.5, 'pc', 'opt'], ['huile-olive', 3, 'cs'],
    ['sel', null], ['poivre', null]
  ], [
    'Faire dorer le poulet dans l’huile, dans un tajine ou une cocotte, 10 min à feu moyen, avec les oignons émincés, l’ail et le gingembre râpé. Ajouter le curcuma, saler peu et poivrer.',
    'Ajouter 30 cl d’eau, couvrir et cuire 45 min à feu doux.',
    'Ajouter les citrons confits en quartiers et les olives, et cuire encore 15 min à découvert pour réduire la sauce.',
    'Parsemer de coriandre ciselée avant de servir.'
  ]);

  R('chakchouka', 'Chakchouka', 'Maghrébine', 'Plat', 40, 'Facile', 4, [
    ['poivrons', 2], ['tomates', 4], ['oeufs', 4], ['oignons', 1], ['ail', 2], ['cumin', 1, 'cc'],
    ['paprika', 1, 'cc'], ['harissa', 1, 'cc', 'opt'], ['huile-olive', 3, 'cs'], ['coriandre', 0.25, 'pc', 'opt'],
    ['sel', null], ['poivre', null]
  ], [
    'Faire revenir l’oignon émincé et les poivrons en lanières dans l’huile d’olive, 10 min à feu moyen.',
    'Ajouter l’ail, les épices, la harissa et les tomates en dés. Saler, poivrer et laisser mijoter 15 min à feu doux.',
    'Creuser 4 puits et y casser les œufs. Couvrir et cuire 5 à 8 min à feu doux, jusqu’à ce que les blancs soient pris et les jaunes encore coulants.',
    'Parsemer de coriandre et servir avec du pain.'
  ]);

  R('harira', 'Harira', 'Maghrébine', 'Soupe', 80, 'Moyenne', 6, [
    ['lentilles', 100, 'g'], ['pois-chiches', 250, 'g'], ['tomates-concassees', 400, 'g'], ['oignons', 1],
    ['celeri', 2], ['coriandre', 1], ['persil', 1], ['farine', 30, 'g'], ['agneau', 200, 'g', 'opt'],
    ['vermicelles', 50, 'g', 'opt'], ['gingembre', 5, 'g', 'opt'], ['curcuma', 1, 'cc'], ['cannelle', 0.5, 'cc'],
    ['concentre-tomate', 1, 'cs'], ['huile-olive', 2, 'cs'], ['citron', 1, 'pc', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Dans un grand faitout, faire revenir l’agneau en petits dés et l’oignon haché dans l’huile avec le gingembre râpé et les épices, 5 min à feu moyen.',
    'Ajouter le céleri émincé, les herbes hachées, les tomates, le concentré et les lentilles rincées. Couvrir de 2 L d’eau, saler, poivrer et porter à ébullition.',
    'Cuire 45 min à feu moyen, puis ajouter les pois chiches égouttés et les vermicelles.',
    'Délayer la farine dans 20 cl d’eau froide et l’ajouter en remuant pour épaissir. Cuire 10 min à feu doux en remuant.',
    'Servir avec un quartier de citron.'
  ]);

  R('salade-carottes-cumin', 'Salade de carottes au cumin', 'Maghrébine', 'Entrée', 25, 'Facile', 4, [
    ['carottes', 6], ['ail', 1], ['cumin', 1, 'cc'], ['citron', 1], ['huile-olive', 3, 'cs'],
    ['coriandre', 0.25, 'pc', 'opt'], ['sel', null]
  ], [
    'Éplucher les carottes, les couper en rondelles et les cuire 10 min dans l’eau bouillante salée : elles doivent rester fermes. Égoutter.',
    'Mélanger l’huile, le jus du citron, l’ail écrasé et le cumin.',
    'Assaisonner les carottes tièdes et parsemer de coriandre. Servir tiède ou frais.'
  ]);

  R('houmous', 'Houmous', 'Libanaise', 'Entrée', 10, 'Facile', 4, [
    ['pois-chiches', 400, 'g'], ['tahini', 3, 'cs'], ['citron', 1], ['ail', 1], ['huile-olive', 3, 'cs'],
    ['cumin', 0.5, 'cc', 'opt'], ['paprika', 1, 'pincee', 'opt'], ['sel', null]
  ], [
    'Égoutter les pois chiches en gardant un peu de leur jus.',
    'Mixer avec le tahini, le jus du citron, l’ail, le cumin, le sel et 4 cs de jus (ou d’eau glacée), jusqu’à obtenir une crème lisse.',
    'Servir dans une assiette creuse, arrosé d’huile d’olive et saupoudré de paprika.'
  ]);

  R('taboule', 'Taboulé libanais', 'Libanaise', 'Entrée', 25, 'Facile', 4, [
    ['persil', 3], ['menthe', 1], ['tomates', 3], ['boulgour', 50, 'g'], ['oignons', 0.5], ['citron', 2],
    ['huile-olive', 5, 'cs'], ['sel', null], ['poivre', null]
  ], [
    'Faire tremper le boulgour 10 min dans l’eau froide, puis bien l’essorer.',
    'Hacher très finement le persil et la menthe (sans les tiges), couper les tomates en petits dés et l’oignon finement.',
    'Mélanger le tout avec le jus des citrons, l’huile, le sel et le poivre. C’est une salade d’herbes : le persil domine.'
  ]);

  R('falafels', 'Falafels', 'Libanaise', 'Plat', 60, 'Moyenne', 4, [
    ['pois-chiches', 400, 'g'], ['oignons', 1], ['ail', 2], ['persil', 0.5], ['coriandre', 0.5], ['cumin', 1, 'cc'],
    ['farine', 30, 'g'], ['levure-chimique', 0.5, 'pc', 'opt'], ['huile', 50, 'cl'], ['sel', null]
  ], [
    'Mixer grossièrement les pois chiches bien égouttés et séchés avec l’oignon, l’ail, les herbes, le cumin et le sel.',
    'Ajouter la farine et la levure. La pâte doit se tenir ; ajouter un peu de farine si besoin. Réserver 20 min au réfrigérateur.',
    'Former des boulettes légèrement aplaties.',
    'Chauffer l’huile à 175 °C dans une casserole et y frire les falafels 3 à 4 min, jusqu’à ce qu’ils soient bien dorés. Égoutter sur du papier absorbant. Servir avec du houmous ou une sauce au yaourt.'
  ]);

  /* ───────────── Indienne ───────────── */

  R('curry-pois-chiches', 'Curry de pois chiches', 'Indienne', 'Plat', 35, 'Facile', 4, [
    ['pois-chiches', 500, 'g'], ['lait-coco', 40, 'cl'], ['tomates-concassees', 400, 'g'], ['oignons', 1], ['ail', 2],
    ['gingembre', 10, 'g', 'opt'], ['curry', 2, 'cc'], ['cumin', 1, 'cc', 'opt'], ['huile', 2, 'cs'],
    ['coriandre', 0.25, 'pc', 'opt'], ['sel', null]
  ], [
    'Faire revenir l’oignon haché dans l’huile, 5 min à feu moyen. Ajouter l’ail, le gingembre râpé et les épices, et cuire 1 min en remuant.',
    'Ajouter les tomates et laisser réduire 5 min.',
    'Ajouter les pois chiches égouttés et le lait de coco, et laisser mijoter 15 min à feu doux. Saler.',
    'Parsemer de coriandre et servir avec du riz.'
  ]);

  R('dal-lentilles-corail', 'Dal de lentilles corail', 'Indienne', 'Plat', 35, 'Facile', 4, [
    ['lentilles-corail', 250, 'g'], ['lait-coco', 20, 'cl'], ['tomates-concassees', 200, 'g'], ['oignons', 1], ['ail', 2],
    ['gingembre', 10, 'g', 'opt'], ['curcuma', 1, 'cc'], ['cumin', 1, 'cc'], ['garam-masala', 1, 'cc', 'opt'],
    ['huile', 2, 'cs'], ['citron', 0.5, 'pc', 'opt'], ['sel', null]
  ], [
    'Faire revenir l’oignon haché dans l’huile, 5 min à feu moyen. Ajouter l’ail, le gingembre râpé et les épices, et cuire 1 min en remuant.',
    'Ajouter les lentilles rincées, les tomates et 75 cl d’eau. Porter à ébullition.',
    'Cuire 20 min à feu doux en remuant régulièrement : les lentilles doivent se défaire.',
    'Ajouter le lait de coco, saler et finir avec un filet de jus de citron.'
  ]);

  R('poulet-coco-curry', 'Poulet coco-curry', 'Indienne', 'Plat', 35, 'Facile', 4, [
    ['poulet', 600, 'g'], ['lait-coco', 40, 'cl'], ['oignons', 1], ['ail', 2], ['gingembre', 10, 'g', 'opt'],
    ['curry', 2, 'cc'], ['tomates', 2, 'pc', 'opt'], ['huile', 2, 'cs'], ['coriandre', 0.25, 'pc', 'opt'], ['sel', null]
  ], [
    'Faire dorer le poulet en morceaux dans l’huile, 5 min à feu vif. Réserver.',
    'Baisser à feu moyen et faire revenir l’oignon émincé 3 min, puis l’ail, le gingembre râpé et le curry 1 min.',
    'Ajouter les tomates en dés et le lait de coco, remettre le poulet et saler.',
    'Laisser mijoter 20 min à feu doux. Parsemer de coriandre et servir avec du riz basmati.'
  ]);

  R('butter-chicken', 'Butter chicken', 'Indienne', 'Plat', 85, 'Moyenne', 4, [
    ['poulet', 600, 'g'], ['yaourt', 1], ['tomates-concassees', 400, 'g'], ['creme-liquide', 15, 'cl'], ['beurre', 50, 'g'],
    ['oignons', 1], ['ail', 3], ['gingembre', 15, 'g'], ['garam-masala', 2, 'cc'], ['curcuma', 0.5, 'cc'],
    ['piment', 1, 'pincee', 'opt'], ['sel', null]
  ], [
    'Couper le poulet en morceaux et le mariner avec le yaourt, 1 cc de garam masala, le curcuma et le sel, au moins 30 min au réfrigérateur.',
    'Faire griller le poulet égoutté dans 10 g de beurre, dans une poêle à feu vif, 5 à 6 min. Réserver.',
    'Faire fondre le reste du beurre à feu moyen, y cuire l’oignon haché 5 min, puis l’ail et le gingembre râpés, le reste du garam masala et le piment, 1 min.',
    'Ajouter les tomates, cuire 10 min à feu moyen, puis mixer.',
    'Ajouter la crème et le poulet, et laisser mijoter 10 min à feu doux. Servir avec du riz ou des naans.'
  ]);

  R('aloo-gobi', 'Aloo gobi (pommes de terre et chou-fleur)', 'Indienne', 'Plat', 45, 'Facile', 4, [
    ['pommes-de-terre', 500, 'g'], ['chou-fleur', 1], ['oignons', 1], ['tomates', 2], ['ail', 2],
    ['gingembre', 10, 'g', 'opt'], ['curcuma', 1, 'cc'], ['cumin', 1, 'cc'], ['garam-masala', 1, 'cc', 'opt'],
    ['huile', 3, 'cs'], ['coriandre', 0.25, 'pc', 'opt'], ['sel', null]
  ], [
    'Faire grésiller le cumin dans l’huile chaude 30 s à feu moyen, puis ajouter l’oignon émincé, l’ail et le gingembre râpé, et cuire 5 min.',
    'Ajouter les pommes de terre en cubes et le chou-fleur en petits bouquets, puis le curcuma et le sel. Faire revenir 3 min.',
    'Ajouter les tomates en dés et 10 cl d’eau, couvrir et cuire 25 min à feu doux, jusqu’à ce que les légumes soient tendres.',
    'Finir avec le garam masala et la coriandre ciselée.'
  ]);

  /* ───────────── Chinoise ───────────── */

  R('riz-saute-oeufs', 'Riz sauté aux œufs', 'Chinoise', 'Plat', 60, 'Facile', 3, [
    ['riz', 250, 'g'], ['oeufs', 3], ['ciboule', 1], ['sauce-soja', 2, 'cs'], ['huile', 2, 'cs'],
    ['huile-sesame', 1, 'cc', 'opt'], ['sel', null]
  ], [
    'Cuire le riz dans une grande casserole d’eau bouillante salée, environ 12 min, l’égoutter, l’étaler sur un plat et le laisser refroidir au moins 30 min au réfrigérateur (ou utiliser du riz cuit la veille) : un riz froid saute mieux.',
    'Chauffer l’huile dans un wok à feu vif, y brouiller les œufs battus 1 min, puis les réserver.',
    'Faire sauter le riz 3 min à feu vif, puis ajouter la sauce soja.',
    'Remettre les œufs, ajouter la ciboule émincée et l’huile de sésame, sauter encore 1 min et rectifier le sel.'
  ]);

  R('riz-cantonais', 'Riz cantonais', 'Chinoise', 'Plat', 60, 'Facile', 4, [
    ['riz', 300, 'g'], ['oeufs', 3], ['jambon', 3], ['petits-pois', 150, 'g'], ['crevettes', 150, 'g', 'opt'],
    ['ciboule', 0.5, 'pc', 'opt'], ['sauce-soja', 3, 'cs'], ['huile', 3, 'cs']
  ], [
    'Cuire le riz dans une grande casserole d’eau bouillante salée, environ 12 min, l’égoutter, l’étaler sur un plat et le laisser refroidir au moins 30 min au réfrigérateur (ou utiliser du riz cuit la veille).',
    'Battre les œufs et cuire une omelette fine dans 1 cs d’huile, à feu moyen. La rouler et la couper en lanières.',
    'Dans un wok, faire sauter les petits pois, le jambon en dés et les crevettes dans le reste d’huile, 3 min à feu vif.',
    'Ajouter le riz et la sauce soja, et sauter 3 min à feu vif. Ajouter l’omelette et la ciboule émincée.'
  ]);

  R('poulet-cajou', 'Poulet aux noix de cajou', 'Chinoise', 'Plat', 30, 'Facile', 4, [
    ['poulet', 600, 'g'], ['cajou', 80, 'g'], ['poivrons', 1], ['oignons', 1], ['ail', 2], ['gingembre', 10, 'g', 'opt'],
    ['sauce-soja', 3, 'cs'], ['sauce-huitre', 2, 'cs', 'opt'], ['maizena', 10, 'g'], ['sucre', 5, 'g'], ['huile', 2, 'cs']
  ], [
    'Couper le poulet en dés et l’enrober de maïzena et de 1 cs de sauce soja.',
    'Faire griller les noix de cajou à sec dans un wok, 3 min à feu moyen. Réserver.',
    'Saisir le poulet dans l’huile à feu vif, 5 min, jusqu’à ce qu’il soit doré. Réserver.',
    'Faire sauter l’oignon, le poivron, l’ail et le gingembre 3 min à feu vif.',
    'Remettre le poulet, ajouter le reste de sauce soja, la sauce d’huître, le sucre et 5 cl d’eau. Laisser épaissir 1 à 2 min, puis ajouter les noix de cajou.'
  ]);

  R('boeuf-oignons', 'Bœuf sauté aux oignons', 'Chinoise', 'Plat', 30, 'Facile', 4, [
    ['boeuf-poeler', 500, 'g'], ['oignons', 3], ['ail', 2], ['gingembre', 10, 'g', 'opt'], ['sauce-soja', 3, 'cs'],
    ['sauce-huitre', 2, 'cs', 'opt'], ['maizena', 10, 'g'], ['sucre', 5, 'g'], ['huile', 3, 'cs']
  ], [
    'Couper le bœuf en fines lamelles et le mariner 15 min avec la maïzena et 1 cs de sauce soja.',
    'Saisir le bœuf 2 min à feu très vif dans l’huile, dans un wok. Réserver.',
    'Faire sauter les oignons en quartiers avec l’ail et le gingembre, 4 min à feu vif.',
    'Remettre le bœuf avec le reste des sauces et le sucre, et sauter 1 min. Servir avec du riz.'
  ]);

  R('nouilles-sautees', 'Nouilles sautées aux légumes', 'Chinoise', 'Plat', 25, 'Facile', 4, [
    ['nouilles', 300, 'g'], ['carottes', 2], ['poivrons', 1], ['chou', 0.25, 'pc', 'opt'], ['germes-soja', 150, 'g', 'opt'],
    ['oignons', 1], ['ail', 2], ['sauce-soja', 4, 'cs'], ['sauce-huitre', 1, 'cs', 'opt'], ['huile', 3, 'cs']
  ], [
    'Cuire les nouilles dans une grande casserole d’eau bouillante, le temps indiqué sur le paquet, puis les égoutter et les rincer à l’eau froide.',
    'Couper tous les légumes en fines lanières.',
    'Les faire sauter 4 min à feu vif dans l’huile avec l’ail haché, dans un wok : ils doivent rester croquants.',
    'Ajouter les nouilles et les sauces, et sauter 2 min à feu vif.'
  ]);

  /* ───────────── Japonaise ───────────── */

  R('poulet-teriyaki', 'Poulet teriyaki', 'Japonaise', 'Plat', 30, 'Facile', 4, [
    ['poulet', 600, 'g'], ['sauce-soja', 4, 'cs'], ['mirin', 3, 'cs'], ['miel', 1, 'cs'], ['gingembre', 10, 'g', 'opt'],
    ['graines-sesame', 1, 'cs', 'opt'], ['huile', 1, 'cs'], ['riz', 300, 'g']
  ], [
    'Rincer le riz, puis le cuire à couvert dans 45 cl d’eau salée : porter à ébullition, puis 12 min à feu très doux et 10 min de repos hors du feu.',
    'Mélanger la sauce soja, le mirin, le miel et le gingembre râpé.',
    'Faire dorer le poulet en morceaux dans l’huile, 6 min à feu moyen-vif.',
    'Verser la sauce et laisser réduire 3 à 4 min à feu moyen, jusqu’à ce qu’elle soit sirupeuse et nappe le poulet.',
    'Parsemer de sésame et servir sur le riz.'
  ]);

  R('oyakodon', 'Oyakodon (bol de riz poulet et œufs)', 'Japonaise', 'Plat', 35, 'Facile', 2, [
    ['riz', 200, 'g'], ['poulet', 250, 'g'], ['oeufs', 3], ['oignons', 1], ['sauce-soja', 3, 'cs'], ['sucre', 10, 'g'],
    ['mirin', 1, 'cs', 'opt'], ['bouillon', 0.5], ['ciboule', 0.25, 'pc', 'opt']
  ], [
    'Rincer le riz, puis le cuire à couvert dans 30 cl d’eau : porter à ébullition, puis 12 min à feu très doux et 10 min de repos hors du feu.',
    'Dans une petite poêle, porter à frémissement 20 cl d’eau avec le demi-cube de bouillon, la sauce soja, le mirin et le sucre.',
    'Ajouter l’oignon émincé et le poulet en petits morceaux, et cuire 8 min à feu moyen.',
    'Verser les œufs légèrement battus, couvrir et cuire 1 min à feu doux : ils doivent rester baveux.',
    'Glisser sur le riz et parsemer de ciboule émincée.'
  ]);

  R('okonomiyaki', 'Okonomiyaki', 'Japonaise', 'Plat', 30, 'Facile', 2, [
    ['chou', 0.25], ['farine', 100, 'g'], ['oeufs', 2], ['bacon', 4, 'pc', 'opt'], ['ciboule', 0.5, 'pc', 'opt'],
    ['sauce-soja', 1, 'cs'], ['mayonnaise', 2, 'cs', 'opt'], ['huile', 1, 'cs']
  ], [
    'Émincer très finement le chou.',
    'Mélanger la farine, les œufs et 10 cl d’eau, puis ajouter le chou et la ciboule émincée.',
    'Chauffer l’huile dans une poêle à feu moyen, verser la pâte en une galette épaisse et poser les tranches de bacon dessus.',
    'Cuire 5 min, retourner et cuire encore 5 min à feu moyen, jusqu’à ce que la galette soit dorée et cuite à cœur.',
    'Servir nappé de mayonnaise et d’un filet de sauce soja.'
  ]);

  R('soupe-miso', 'Soupe miso', 'Japonaise', 'Soupe', 15, 'Facile', 4, [
    ['miso', 3, 'cs'], ['tofu-soyeux', 150, 'g'], ['ciboule', 0.5], ['shiitakes', 80, 'g', 'opt']
  ], [
    'Porter 1 L d’eau (idéalement du dashi) à frémissement, à feu moyen.',
    'Ajouter le tofu en petits cubes et les shiitakés émincés, et cuire 3 min.',
    'Hors du feu, délayer le miso dans une louche de bouillon et l’ajouter : il ne doit pas bouillir.',
    'Parsemer de ciboule émincée.'
  ]);

  /* ───────────── Thaïlandaise ───────────── */

  R('pad-thai', 'Pad thaï', 'Thaïlandaise', 'Plat', 30, 'Moyenne', 4, [
    ['nouilles-riz', 250, 'g'], ['crevettes', 250, 'g'], ['oeufs', 2], ['germes-soja', 150, 'g'], ['cacahuetes', 50, 'g'],
    ['ciboule', 0.5], ['ail', 2], ['sauce-poisson', 3, 'cs'], ['pate-de-tamarin', 1, 'cs', 'opt'], ['sucre', 20, 'g'],
    ['citron-vert', 1], ['piment', 1, 'pincee', 'opt'], ['tofu', 100, 'g', 'opt'], ['huile', 3, 'cs']
  ], [
    'Faire tremper les nouilles 10 min dans de l’eau chaude (non bouillante), jusqu’à ce qu’elles soient souples, puis les égoutter.',
    'Mélanger la sauce poisson, le tamarin, le sucre, le jus d’un demi-citron vert et 2 cs d’eau.',
    'Dans un wok à feu vif, faire sauter l’ail haché, les crevettes et le tofu en dés dans l’huile, 2 min. Pousser sur le côté et brouiller les œufs.',
    'Ajouter les nouilles et la sauce, et sauter 3 min à feu vif, jusqu’à ce que la sauce soit absorbée.',
    'Ajouter les pousses de soja et la ciboule émincée, sauter 30 s. Servir avec les cacahuètes concassées, le piment et des quartiers de citron vert.'
  ]);

  R('curry-vert-poulet', 'Curry vert au poulet', 'Thaïlandaise', 'Plat', 30, 'Facile', 4, [
    ['poulet', 500, 'g'], ['pate-curry-verte', 2, 'cs'], ['lait-coco', 40, 'cl'], ['courgettes', 1], ['aubergines', 1, 'pc', 'opt'],
    ['sauce-poisson', 1, 'cs'], ['sucre', 5, 'g'], ['basilic-thai', 0.5, 'pc', 'opt'], ['huile', 1, 'cs']
  ], [
    'Faire revenir la pâte de curry dans l’huile avec 5 cl de lait de coco, 2 min à feu moyen, jusqu’à ce qu’elle embaume.',
    'Ajouter le poulet en lamelles et le cuire 5 min à feu moyen.',
    'Ajouter le reste du lait de coco, la courgette et l’aubergine en morceaux, la sauce poisson et le sucre.',
    'Laisser mijoter 12 min à feu doux, jusqu’à ce que les légumes soient tendres. Ajouter le basilic thaï et servir avec du riz.'
  ]);

  R('curry-rouge-crevettes', 'Curry rouge aux crevettes', 'Thaïlandaise', 'Plat', 25, 'Facile', 4, [
    ['crevettes', 400, 'g'], ['pate-curry-rouge', 2, 'cs'], ['lait-coco', 40, 'cl'], ['poivrons', 1],
    ['sauce-poisson', 1, 'cs'], ['citron-vert', 1, 'pc', 'opt'], ['coriandre', 0.25, 'pc', 'opt'], ['huile', 1, 'cs']
  ], [
    'Faire revenir la pâte de curry dans l’huile, 1 min à feu moyen.',
    'Ajouter le lait de coco et le poivron en lanières, et laisser mijoter 8 min à feu doux.',
    'Ajouter les crevettes et la sauce poisson, et cuire 3 min, jusqu’à ce que les crevettes soient roses.',
    'Finir avec un filet de jus de citron vert et la coriandre ciselée.'
  ]);

  R('tom-kha-kai', 'Soupe tom kha kaï', 'Thaïlandaise', 'Soupe', 30, 'Facile', 4, [
    ['poulet', 300, 'g'], ['lait-coco', 40, 'cl'], ['champignons', 150, 'g'], ['citronnelle', 2],
    ['feuilles-de-citronnier-kaffir', 4, 'pc', 'opt'], ['gingembre', 20, 'g'], ['citron-vert', 2], ['sauce-poisson', 2, 'cs'],
    ['bouillon', 0.5], ['piments-frais', 1, 'pc', 'opt'], ['coriandre', 0.25, 'pc', 'opt']
  ], [
    'Porter à frémissement, à feu moyen, 50 cl d’eau avec le demi-cube de bouillon, le lait de coco, le gingembre en lamelles, la citronnelle écrasée et coupée en tronçons, les feuilles de kaffir et le piment.',
    'Ajouter le poulet en fines lamelles et les champignons émincés, et cuire 10 min à feu doux, sans faire bouillir.',
    'Hors du feu, ajouter le jus des citrons verts et la sauce poisson. Goûter et ajuster.',
    'Parsemer de coriandre.'
  ]);

  /* ───────────── Vietnamienne, coréenne ───────────── */

  R('bo-bun', 'Bò bún', 'Vietnamienne', 'Plat', 40, 'Moyenne', 4, [
    ['nouilles-riz', 250, 'g'], ['boeuf-poeler', 400, 'g'], ['carottes', 2], ['concombre', 0.5], ['salade', 0.5],
    ['germes-soja', 100, 'g', 'opt'], ['cacahuetes', 50, 'g'], ['menthe', 0.5], ['coriandre', 0.5, 'pc', 'opt'],
    ['oignons', 1], ['ail', 2], ['sauce-poisson', 5, 'cs'], ['sucre', 40, 'g'], ['citron-vert', 1], ['huile', 2, 'cs']
  ], [
    'Sauce : mélanger 4 cs de sauce poisson, le sucre, le jus du citron vert, une gousse d’ail hachée et 10 cl d’eau.',
    'Cuire les vermicelles 3 à 4 min dans l’eau bouillante, puis les rincer à l’eau froide et les égoutter.',
    'Couper le bœuf en fines lamelles et le mariner 10 min avec l’autre gousse d’ail hachée et le reste de sauce poisson. Le saisir 2 à 3 min à feu vif dans l’huile avec l’oignon émincé.',
    'Dans chaque bol : salade émincée, vermicelles, carottes râpées, concombre en bâtonnets, pousses de soja, herbes, bœuf chaud et cacahuètes concassées. Arroser de sauce.'
  ]);

  R('rouleaux-printemps', 'Rouleaux de printemps', 'Vietnamienne', 'Entrée', 40, 'Moyenne', 4, [
    ['galettes-riz', 12], ['crevettes', 200, 'g'], ['nouilles-riz', 100, 'g'], ['salade', 0.5], ['carottes', 2],
    ['menthe', 0.5], ['coriandre', 0.5, 'pc', 'opt'], ['sauce-poisson', 2, 'cs', 'opt'], ['sucre', 15, 'g', 'opt'],
    ['citron-vert', 0.5, 'pc', 'opt']
  ], [
    'Cuire les vermicelles 3 min dans l’eau bouillante, les rincer à l’eau froide et les égoutter. Râper les carottes.',
    'Tremper une galette 5 s dans l’eau tiède et la poser sur un torchon humide.',
    'Garnir de salade, vermicelles, carottes, herbes et crevettes cuites coupées en deux.',
    'Rouler serré en rabattant les côtés. Recommencer avec les autres galettes.',
    'Pour la sauce, mélanger la sauce poisson, le sucre, le jus du citron vert et 4 cs d’eau.'
  ]);

  R('porc-caramel', 'Porc au caramel', 'Vietnamienne', 'Plat', 65, 'Facile', 4, [
    ['porc-epaule', 700, 'g'], ['sucre', 60, 'g'], ['sauce-poisson', 4, 'cs'], ['oignons', 1], ['ail', 3],
    ['ciboule', 0.25, 'pc', 'opt'], ['poivre', null]
  ], [
    'Dans une cocotte, faire un caramel brun à feu moyen avec le sucre et 2 cs d’eau, sans remuer.',
    'Hors du feu, ajouter la sauce poisson (attention aux projections), puis l’oignon émincé et l’ail haché.',
    'Ajouter le porc en cubes, bien l’enrober, poivrer et couvrir d’eau à mi-hauteur (environ 30 cl).',
    'Laisser mijoter 45 min à feu doux, à découvert, en remuant de temps en temps, jusqu’à ce que la sauce soit sirupeuse. Parsemer de ciboule et servir avec du riz.'
  ]);

  R('bibimbap', 'Bibimbap', 'Coréenne', 'Plat', 50, 'Moyenne', 4, [
    ['riz', 300, 'g'], ['boeuf-hache', 300, 'g'], ['epinards', 200, 'g'], ['carottes', 2], ['courgettes', 1],
    ['germes-soja', 150, 'g', 'opt'], ['oeufs', 4], ['gochujang', 2, 'cs'], ['sauce-soja', 3, 'cs'], ['ail', 2],
    ['huile-sesame', 2, 'cs'], ['graines-sesame', 1, 'cs', 'opt'], ['huile', 2, 'cs']
  ], [
    'Rincer le riz, puis le cuire à couvert dans 45 cl d’eau : porter à ébullition, puis 12 min à feu très doux et 10 min de repos hors du feu.',
    'Faire revenir le bœuf avec l’ail haché dans 1 cs d’huile, 5 min à feu vif, puis ajouter la sauce soja.',
    'Faire sauter séparément chaque légume dans un peu d’huile, à feu vif : carottes et courgette en bâtonnets 2 à 3 min, épinards et pousses de soja 1 min. Assaisonner chacun d’un filet d’huile de sésame.',
    'Cuire les œufs au plat à feu moyen, en gardant le jaune coulant.',
    'Dans chaque bol, poser le riz, les légumes en couronne, la viande et l’œuf. Servir avec le gochujang et parsemer de sésame.'
  ]);

  /* ───────────── Mexicaine, américaine ───────────── */

  R('chili-con-carne', 'Chili con carne', 'Mexicaine', 'Plat', 60, 'Facile', 4, [
    ['boeuf-hache', 500, 'g'], ['haricots-rouges', 500, 'g'], ['tomates-concassees', 400, 'g'], ['oignons', 1],
    ['poivrons', 1], ['ail', 2], ['cumin', 1, 'cc'], ['paprika', 1, 'cc'], ['piment', 2, 'pincee'],
    ['concentre-tomate', 1, 'cs', 'opt'], ['huile', 2, 'cs'], ['sel', null]
  ], [
    'Faire revenir l’oignon, le poivron et l’ail hachés dans l’huile, 5 min à feu moyen.',
    'Ajouter la viande et les épices, et cuire 5 min à feu vif en égrenant.',
    'Ajouter les tomates, le concentré et 15 cl d’eau. Saler et laisser mijoter 30 min à feu doux.',
    'Ajouter les haricots rouges égouttés et cuire encore 10 min. Servir avec du riz.'
  ]);

  R('fajitas-poulet', 'Fajitas au poulet', 'Mexicaine', 'Plat', 40, 'Facile', 4, [
    ['tortillas', 8], ['poulet', 500, 'g'], ['poivrons', 2], ['oignons', 1], ['paprika', 1, 'cc'], ['cumin', 1, 'cc'],
    ['citron-vert', 1], ['avocat', 1, 'pc', 'opt'], ['creme-fraiche', 10, 'cl', 'opt'], ['huile', 2, 'cs'], ['sel', null]
  ], [
    'Couper le poulet en lanières et le mariner 15 min avec les épices, le jus du citron vert, l’huile et le sel.',
    'Saisir le poulet 5 min à feu vif dans une grande poêle, puis ajouter les poivrons et l’oignon en lanières et cuire 5 min : les légumes doivent rester croquants.',
    'Réchauffer les tortillas 30 s de chaque côté dans une poêle sèche.',
    'Garnir chaque tortilla de poulet, de légumes, d’avocat en tranches et de crème.'
  ]);

  R('guacamole', 'Guacamole', 'Mexicaine', 'Entrée', 10, 'Facile', 4, [
    ['avocat', 3], ['citron-vert', 1], ['oignon-rouge', 0.5], ['tomates', 1, 'pc', 'opt'], ['coriandre', 0.25, 'pc', 'opt'],
    ['piment', 1, 'pincee', 'opt'], ['sel', null]
  ], [
    'Écraser la chair des avocats à la fourchette avec le jus du citron vert.',
    'Ajouter l’oignon finement haché, la tomate en petits dés, la coriandre ciselée et le piment.',
    'Saler et servir aussitôt.'
  ]);

  R('burgers-maison', 'Burgers maison', 'Américaine', 'Plat', 30, 'Facile', 4, [
    ['pain-burger', 4], ['boeuf-hache', 600, 'g'], ['cheddar', 4], ['tomates', 1], ['salade', 0.25],
    ['oignon-rouge', 1], ['moutarde', 1, 'cs', 'opt'], ['ketchup', 2, 'cs', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Former 4 steaks de 150 g, un peu plus larges que les pains, sans trop tasser la viande.',
    'Les cuire dans une poêle à feu vif, 3 min de chaque côté. Saler, poivrer et poser le cheddar la dernière minute, à couvert, pour qu’il fonde.',
    'Toaster les pains, face coupée, 1 min dans la poêle.',
    'Monter les burgers avec la moutarde et le ketchup, la salade, la tomate et l’oignon en rondelles, et la viande.'
  ]);

  R('pancakes', 'Pancakes', 'Américaine', 'Dessert', 30, 'Facile', 4, [
    ['farine', 250, 'g'], ['oeufs', 2], ['lait', 30, 'cl'], ['sucre', 30, 'g'], ['levure-chimique', 1], ['beurre', 40, 'g'],
    ['sel', 1, 'pincee']
  ], [
    'Mélanger la farine, la levure, le sucre et le sel.',
    'Ajouter les œufs, le lait, puis 30 g de beurre fondu. La pâte doit être épaisse.',
    'Graisser légèrement une poêle avec le reste du beurre et la chauffer à feu moyen. Y verser des petites louches de pâte.',
    'Retourner quand des bulles apparaissent à la surface (environ 2 min), puis cuire 1 min sur l’autre face.'
  ]);

  R('cookies', 'Cookies aux pépites de chocolat', 'Américaine', 'Dessert', 30, 'Facile', 6, [
    ['farine', 200, 'g'], ['beurre', 100, 'g'], ['sucre', 100, 'g'], ['oeufs', 1], ['chocolat-noir', 100, 'g'],
    ['levure-chimique', 0.5], ['sucre-vanille', 1, 'pc', 'opt'], ['sel', 1, 'pincee']
  ], [
    'Préchauffer le four à 180 °C. Couvrir une plaque de papier cuisson.',
    'Mélanger le beurre mou avec le sucre et le sucre vanillé, puis ajouter l’œuf.',
    'Ajouter la farine, la levure et le sel, puis le chocolat grossièrement haché.',
    'Former des boules, les espacer sur la plaque en les aplatissant légèrement et cuire 10 à 12 min : les bords doivent être dorés et le centre encore mou. Laisser durcir 5 min sur la plaque.'
  ]);

require('./recettes-supplementaires')(R);
require('./recettes-supplementaires-2')(R);
require('./recettes-complements')(R);
require('./recettes-simples-fruits-legumes')(R);
require('./recettes-simples-viandes-poissons')(R);
require('./recettes-simples-cremerie')(R);
require('./recettes-simples-epicerie')(R);

module.exports = recettes;
