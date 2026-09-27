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
    ['pate-brisee', 1], ['lardons', 200, 'g'], ['oeufs', 3], ['creme-fraiche', 20, 'cl'], ['lait', 20, 'cl'],
    ['muscade', 1, 'pincee', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Préchauffer le four à 180 °C. Étaler la pâte dans un moule et la piquer à la fourchette.',
    'Faire revenir les lardons à sec 5 min, puis les égoutter sur du papier absorbant.',
    'Battre les œufs avec la crème et le lait. Poivrer, saler légèrement et ajouter la muscade.',
    'Répartir les lardons sur la pâte et verser l’appareil par-dessus.',
    'Enfourner 35 à 40 min, jusqu’à ce que la quiche soit dorée et prise au centre.'
  ]);

  R('quiche-poireaux', 'Quiche aux poireaux', 'Française', 'Plat', 60, 'Facile', 6, [
    ['pate-brisee', 1], ['poireaux', 3], ['oeufs', 3], ['creme-fraiche', 20, 'cl'], ['lait', 10, 'cl'],
    ['beurre', 20, 'g'], ['fromage-rape', 70, 'g', 'opt'], ['muscade', 1, 'pincee', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Préchauffer le four à 180 °C. Étaler la pâte dans un moule et la piquer.',
    'Émincer finement les poireaux et les faire fondre 15 min dans le beurre à feu doux, avec une pincée de sel.',
    'Battre les œufs avec la crème et le lait, poivrer et ajouter la muscade.',
    'Étaler les poireaux sur la pâte, verser l’appareil et parsemer de fromage.',
    'Cuire 35 min jusqu’à ce que le dessus soit doré.'
  ]);

  R('gratin-dauphinois', 'Gratin dauphinois', 'Française', 'Accompagnement', 80, 'Facile', 6, [
    ['pommes-de-terre', 1200, 'g'], ['lait', 50, 'cl'], ['creme-liquide', 25, 'cl'], ['ail', 1],
    ['beurre', 10, 'g'], ['muscade', 1, 'pincee', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Préchauffer le four à 160 °C. Frotter un plat à gratin avec la gousse d’ail coupée, puis le beurrer.',
    'Éplucher les pommes de terre et les couper en rondelles fines, sans les laver.',
    'Les porter à frémissement 10 min dans le lait avec sel, poivre et muscade, en remuant délicatement.',
    'Verser le tout dans le plat, napper de crème.',
    'Cuire 1 h, jusqu’à ce que le dessus soit doré et que la pointe d’un couteau s’enfonce sans résistance.'
  ]);

  R('soupe-oignon', 'Soupe à l’oignon gratinée', 'Française', 'Soupe', 60, 'Facile', 4, [
    ['oignons', 6], ['beurre', 40, 'g'], ['farine', 20, 'g'], ['vin-blanc', 10, 'cl', 'opt'], ['bouillon', 1],
    ['pain', 8], ['fromage-rape', 150, 'g'], ['sel', null], ['poivre', null]
  ], [
    'Émincer les oignons et les faire fondre 20 min dans le beurre, à feu moyen, jusqu’à ce qu’ils soient bien dorés.',
    'Saupoudrer de farine et remuer 1 min, puis déglacer au vin blanc.',
    'Ajouter 1 L d’eau et le cube de bouillon. Laisser mijoter 20 min, saler et poivrer.',
    'Répartir la soupe dans des bols allant au four, poser les tranches de pain grillées et couvrir de fromage.',
    'Gratiner 5 min sous le gril du four.'
  ]);

  R('hachis-parmentier', 'Hachis parmentier', 'Française', 'Plat', 60, 'Facile', 4, [
    ['pommes-de-terre', 1000, 'g'], ['boeuf-hache', 500, 'g'], ['oignons', 2], ['ail', 1],
    ['lait', 20, 'cl'], ['beurre', 50, 'g'], ['fromage-rape', 60, 'g'], ['concentre-tomate', 1, 'cs', 'opt'],
    ['muscade', 1, 'pincee', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Cuire les pommes de terre épluchées 20 min à l’eau salée.',
    'Pendant ce temps, faire revenir les oignons et l’ail hachés, ajouter la viande et le concentré de tomate, cuire 8 min. Saler, poivrer.',
    'Écraser les pommes de terre avec le lait chaud, le beurre et la muscade.',
    'Préchauffer le four à 200 °C. Étaler la viande dans un plat, couvrir de purée et de fromage râpé.',
    'Gratiner 20 min.'
  ]);

  R('boeuf-bourguignon', 'Bœuf bourguignon', 'Française', 'Plat', 210, 'Moyenne', 6, [
    ['boeuf-braiser', 1500, 'g'], ['vin-rouge', 75, 'cl'], ['lardons', 200, 'g'], ['carottes', 3], ['oignons', 2],
    ['champignons', 250, 'g'], ['ail', 2], ['farine', 30, 'g'], ['bouquet-garni', 1], ['beurre', 30, 'g'],
    ['huile', 2, 'cs'], ['sel', null], ['poivre', null]
  ], [
    'Couper la viande en gros cubes. Les faire dorer par petites quantités dans l’huile, dans une cocotte. Réserver.',
    'Faire revenir les lardons, les oignons émincés et les carottes en rondelles.',
    'Remettre la viande, saupoudrer de farine et remuer 2 min.',
    'Verser le vin, ajouter l’ail écrasé et le bouquet garni. Compléter d’eau à hauteur si besoin, saler, poivrer.',
    'Couvrir et laisser mijoter 3 h à feu très doux.',
    'Faire sauter les champignons au beurre et les ajouter 15 min avant la fin.'
  ]);

  R('blanquette-veau', 'Blanquette de veau', 'Française', 'Plat', 135, 'Moyenne', 6, [
    ['veau', 1200, 'g'], ['carottes', 3], ['oignons', 1], ['poireaux', 1], ['champignons', 250, 'g'],
    ['bouquet-garni', 1], ['bouillon', 1], ['beurre', 40, 'g'], ['farine', 40, 'g'], ['creme-fraiche', 20, 'cl'],
    ['oeufs', 1], ['citron', 1, 'pc', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Mettre la viande dans une cocotte, couvrir d’eau froide, porter à ébullition et écumer.',
    'Ajouter le bouillon, les carottes, l’oignon, le poireau et le bouquet garni. Mijoter 1 h 30 à couvert.',
    'Faire revenir les champignons dans un peu de beurre.',
    'Dans une casserole, faire fondre le reste de beurre, ajouter la farine puis 75 cl de bouillon de cuisson filtré. Épaissir 5 min en fouettant.',
    'Hors du feu, ajouter la crème mélangée au jaune d’œuf et un filet de citron.',
    'Remettre la viande, les légumes et les champignons dans la sauce. Réchauffer sans faire bouillir.'
  ]);

  R('pot-au-feu', 'Pot-au-feu', 'Française', 'Plat', 240, 'Facile', 6, [
    ['boeuf-braiser', 1500, 'g'], ['carottes', 6], ['poireaux', 3], ['navets', 4], ['pommes-de-terre', 800, 'g'],
    ['oignons', 1], ['bouquet-garni', 1], ['sel', null], ['poivre', null], ['moutarde', null, 'cs', 'opt']
  ], [
    'Mettre la viande dans un grand faitout, couvrir d’eau froide et porter à ébullition. Écumer.',
    'Ajouter l’oignon et le bouquet garni, saler et laisser frémir 2 h 30.',
    'Ajouter les carottes, les poireaux et les navets, cuire encore 45 min.',
    'Cuire les pommes de terre à part dans un peu de bouillon, 25 min.',
    'Servir la viande et les légumes avec du gros sel et de la moutarde. Le bouillon se boit en entrée.'
  ]);

  R('poulet-roti', 'Poulet rôti et pommes de terre', 'Française', 'Plat', 90, 'Facile', 4, [
    ['poulet-entier', 1], ['pommes-de-terre', 1000, 'g'], ['ail', 4], ['thym', 2, 'pc', 'opt'], ['beurre', 30, 'g'],
    ['huile-olive', 2, 'cs'], ['sel', null], ['poivre', null]
  ], [
    'Préchauffer le four à 200 °C. Sortir le poulet du frigo 30 min avant.',
    'Masser le poulet avec le beurre mou, saler et poivrer. Glisser le thym et une gousse d’ail à l’intérieur.',
    'Couper les pommes de terre en quartiers, les mélanger avec l’huile, l’ail en chemise, sel et poivre.',
    'Disposer les pommes de terre autour du poulet dans un grand plat.',
    'Cuire 1 h 15 en arrosant toutes les 20 min. Laisser reposer 10 min sous une feuille d’aluminium avant de découper.'
  ]);

  R('poulet-basquaise', 'Poulet basquaise', 'Française', 'Plat', 75, 'Facile', 4, [
    ['cuisses-poulet', 4], ['poivrons', 3], ['tomates', 4], ['oignons', 2], ['ail', 2],
    ['piment', 1, 'pincee', 'opt'], ['vin-blanc', 10, 'cl', 'opt'], ['huile-olive', 3, 'cs'], ['sel', null], ['poivre', null]
  ], [
    'Faire dorer les cuisses de poulet dans l’huile d’olive, dans une cocotte. Réserver.',
    'Faire revenir les oignons émincés et les poivrons en lanières 10 min.',
    'Ajouter l’ail, les tomates en morceaux, le piment et le vin blanc.',
    'Remettre le poulet, saler, poivrer, couvrir et mijoter 45 min.'
  ]);

  R('poulet-champignons-creme', 'Poulet aux champignons à la crème', 'Française', 'Plat', 35, 'Facile', 4, [
    ['poulet', 600, 'g'], ['champignons', 300, 'g'], ['echalotes', 2], ['creme-fraiche', 20, 'cl'],
    ['vin-blanc', 10, 'cl', 'opt'], ['beurre', 20, 'g'], ['persil', 0.5, 'pc', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Couper le poulet en morceaux et le faire dorer dans le beurre. Réserver.',
    'Faire revenir les échalotes hachées et les champignons émincés 8 min.',
    'Déglacer au vin blanc, ajouter la crème et remettre le poulet.',
    'Mijoter 10 min, saler, poivrer et parsemer de persil. Servir avec du riz ou des pâtes.'
  ]);

  R('poulet-moutarde', 'Poulet à la moutarde', 'Française', 'Plat', 50, 'Facile', 4, [
    ['cuisses-poulet', 4], ['moutarde', 3, 'cs'], ['creme-fraiche', 20, 'cl'], ['oignons', 1],
    ['vin-blanc', 10, 'cl', 'opt'], ['huile', 1, 'cs'], ['sel', null], ['poivre', null]
  ], [
    'Badigeonner les cuisses de poulet avec 2 cuillères de moutarde.',
    'Les faire dorer dans l’huile avec l’oignon émincé.',
    'Déglacer au vin blanc, couvrir et cuire 30 min à feu doux.',
    'Ajouter la crème mélangée au reste de moutarde, laisser épaissir 5 min. Saler et poivrer.'
  ]);

  R('ratatouille', 'Ratatouille', 'Française', 'Plat', 75, 'Facile', 4, [
    ['aubergines', 1], ['courgettes', 2], ['poivrons', 2], ['tomates', 4], ['oignons', 2], ['ail', 2],
    ['herbes-provence', 1, 'cc'], ['huile-olive', 4, 'cs'], ['sel', null], ['poivre', null]
  ], [
    'Couper tous les légumes en dés de même taille.',
    'Faire revenir séparément dans l’huile d’olive l’aubergine, puis les courgettes, puis les poivrons, 5 min chacun.',
    'Dans la cocotte, faire fondre les oignons, ajouter l’ail et les tomates.',
    'Ajouter tous les légumes et les herbes, saler, poivrer. Mijoter 40 min à couvert, puis 10 min sans couvercle.'
  ]);

  R('tian-legumes', 'Tian de légumes provençal', 'Française', 'Accompagnement', 70, 'Facile', 4, [
    ['courgettes', 2], ['tomates', 4], ['aubergines', 1], ['oignons', 1], ['ail', 2],
    ['herbes-provence', 1, 'cc'], ['huile-olive', 4, 'cs'], ['sel', null], ['poivre', null]
  ], [
    'Préchauffer le four à 180 °C. Faire fondre l’oignon émincé et l’ail dans un peu d’huile, et en tapisser le fond du plat.',
    'Couper les légumes en rondelles fines et les disposer debout en les alternant.',
    'Arroser d’huile, saler, poivrer et parsemer d’herbes.',
    'Cuire 1 h, en couvrant d’aluminium à mi-cuisson si le dessus colore trop.'
  ]);

  R('tartiflette', 'Tartiflette', 'Française', 'Plat', 70, 'Facile', 4, [
    ['pommes-de-terre', 1000, 'g'], ['reblochon', 1], ['lardons', 200, 'g'], ['oignons', 2],
    ['vin-blanc', 10, 'cl', 'opt'], ['creme-fraiche', 10, 'cl', 'opt'], ['poivre', null]
  ], [
    'Cuire les pommes de terre 20 min à l’eau, les éplucher et les couper en rondelles.',
    'Faire revenir les lardons et les oignons émincés, déglacer au vin blanc.',
    'Préchauffer le four à 200 °C. Dans un plat, alterner pommes de terre et lardons, ajouter la crème et poivrer.',
    'Couper le reblochon en deux dans l’épaisseur et le poser croûte vers le haut.',
    'Cuire 25 min jusqu’à ce que le fromage soit fondu et doré.'
  ]);

  R('croque-monsieur', 'Croque-monsieur', 'Française', 'Plat', 25, 'Facile', 4, [
    ['pain-mie', 8], ['jambon', 4], ['fromage-rape', 100, 'g'], ['beurre', 30, 'g'], ['farine', 15, 'g'],
    ['lait', 15, 'cl'], ['muscade', 1, 'pincee', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Préparer une béchamel rapide : faire fondre 15 g de beurre, ajouter la farine, puis le lait en fouettant. Épaissir 3 min, assaisonner.',
    'Beurrer légèrement l’extérieur des tranches de pain.',
    'Sur 4 tranches, étaler un peu de béchamel, une tranche de jambon et du fromage. Refermer.',
    'Napper le dessus du reste de béchamel et de fromage.',
    'Cuire 10 min au four à 220 °C, jusqu’à ce que ce soit doré.'
  ]);

  R('omelette-champignons', 'Omelette aux champignons', 'Française', 'Plat', 15, 'Facile', 2, [
    ['oeufs', 5], ['champignons', 150, 'g'], ['beurre', 15, 'g'], ['ciboulette', 0.25, 'pc', 'opt'],
    ['sel', null], ['poivre', null]
  ], [
    'Faire sauter les champignons émincés dans la moitié du beurre, 5 min. Réserver.',
    'Battre les œufs avec sel, poivre et ciboulette ciselée.',
    'Faire fondre le reste de beurre, verser les œufs et cuire à feu moyen en ramenant les bords vers le centre.',
    'Ajouter les champignons quand l’omelette est encore baveuse, plier et servir.'
  ]);

  R('oeufs-cocotte', 'Œufs cocotte à la crème', 'Française', 'Entrée', 15, 'Facile', 4, [
    ['oeufs', 4], ['creme-fraiche', 8, 'cl'], ['beurre', 10, 'g'], ['jambon', 1, 'pc', 'opt'],
    ['ciboulette', 0.25, 'pc', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Préchauffer le four à 180 °C. Beurrer 4 ramequins.',
    'Mettre au fond un peu de jambon émincé et une cuillère de crème.',
    'Casser un œuf dans chaque ramequin, saler, poivrer.',
    'Cuire 8 à 10 min au bain-marie dans le four : le blanc doit être pris et le jaune coulant. Parsemer de ciboulette.'
  ]);

  R('crepes', 'Crêpes', 'Française', 'Dessert', 40, 'Facile', 4, [
    ['farine', 250, 'g'], ['oeufs', 4], ['lait', 50, 'cl'], ['beurre', 50, 'g'], ['sucre', 30, 'g'],
    ['sucre-vanille', 1, 'pc', 'opt'], ['sel', 1, 'pincee']
  ], [
    'Mélanger la farine, le sucre et le sel. Creuser un puits et ajouter les œufs.',
    'Incorporer le lait petit à petit en fouettant pour éviter les grumeaux.',
    'Ajouter le beurre fondu. Laisser reposer 1 h si possible.',
    'Cuire les crêpes une à une dans une poêle chaude légèrement graissée, 1 min de chaque côté.'
  ]);

  R('galettes-completes', 'Galettes complètes', 'Française', 'Plat', 45, 'Moyenne', 4, [
    ['farine-sarrasin', 250, 'g'], ['oeufs', 5], ['jambon', 4], ['fromage-rape', 150, 'g'], ['beurre', 40, 'g'],
    ['sel', 1, 'pincee']
  ], [
    'Mélanger la farine de sarrasin, le sel, 1 œuf et 50 cl d’eau froide jusqu’à obtenir une pâte lisse. Laisser reposer 30 min.',
    'Faire chauffer une grande poêle beurrée, verser une louche de pâte et l’étaler finement.',
    'Quand le dessous est cuit, parsemer de fromage, poser le jambon et casser un œuf au centre.',
    'Rabattre les bords en carré et cuire jusqu’à ce que le blanc soit pris.'
  ]);

  R('salade-nicoise', 'Salade niçoise', 'Française', 'Plat', 30, 'Facile', 4, [
    ['tomates', 4], ['oeufs', 4], ['thon-boite', 200, 'g'], ['haricots-verts', 200, 'g'], ['olives', 60, 'g'],
    ['poivrons', 1, 'pc', 'opt'], ['oignon-rouge', 1, 'pc', 'opt'], ['huile-olive', 4, 'cs'],
    ['vinaigre', 1, 'cs'], ['sel', null], ['poivre', null]
  ], [
    'Cuire les œufs 9 min dans l’eau bouillante, les refroidir et les écaler.',
    'Cuire les haricots verts 8 min à l’eau salée et les refroidir.',
    'Couper les tomates en quartiers, le poivron en lanières et l’oignon en fines rondelles.',
    'Disposer le tout avec le thon émietté et les olives. Assaisonner d’huile d’olive, de vinaigre, sel et poivre.'
  ]);

  R('salade-chevre-chaud', 'Salade de chèvre chaud', 'Française', 'Entrée', 20, 'Facile', 4, [
    ['salade', 1], ['chevre', 200, 'g'], ['baguette', 1], ['miel', 2, 'cs'], ['huile-olive', 3, 'cs'],
    ['vinaigre', 1, 'cs'], ['moutarde', 1, 'cc', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Préchauffer le four en position gril.',
    'Couper la baguette en tranches et le chèvre en rondelles. Poser une rondelle sur chaque tranche.',
    'Arroser d’un filet de miel et passer 5 min sous le gril.',
    'Préparer une vinaigrette avec la moutarde, le vinaigre et l’huile. Assaisonner la salade et servir avec les toasts chauds.'
  ]);

  R('salade-lyonnaise', 'Salade lyonnaise', 'Française', 'Plat', 25, 'Facile', 4, [
    ['salade', 1], ['lardons', 200, 'g'], ['oeufs', 4], ['pain', 4], ['vinaigre', 3, 'cs'], ['moutarde', 1, 'cs'],
    ['huile', 4, 'cs'], ['sel', null], ['poivre', null]
  ], [
    'Faire dorer les lardons à sec, puis les croûtons (pain en dés) dans la graisse des lardons.',
    'Pocher les œufs 3 min dans l’eau frémissante vinaigrée.',
    'Préparer une vinaigrette moutarde, vinaigre, huile.',
    'Assaisonner la salade, ajouter lardons et croûtons, poser un œuf poché sur chaque assiette.'
  ]);

  R('poireaux-vinaigrette', 'Poireaux vinaigrette', 'Française', 'Entrée', 30, 'Facile', 4, [
    ['poireaux', 6], ['moutarde', 1, 'cs'], ['vinaigre', 2, 'cs'], ['huile', 5, 'cs'],
    ['echalotes', 1, 'pc', 'opt'], ['oeufs', 2, 'pc', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Nettoyer les poireaux et les cuire 15 min à l’eau salée ou à la vapeur. Égoutter.',
    'Si vous le souhaitez, cuire les œufs 10 min et les écraser à la fourchette.',
    'Préparer une vinaigrette avec la moutarde, le vinaigre, l’huile et l’échalote hachée.',
    'Napper les poireaux tièdes de vinaigrette et parsemer d’œuf.'
  ]);

  R('carottes-rapees', 'Carottes râpées au citron', 'Française', 'Entrée', 15, 'Facile', 4, [
    ['carottes', 5], ['citron', 1], ['huile-olive', 3, 'cs'], ['moutarde', 1, 'cc', 'opt'],
    ['persil', 0.25, 'pc', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Éplucher et râper finement les carottes.',
    'Mélanger le jus de citron, la moutarde, l’huile, le sel et le poivre.',
    'Assaisonner les carottes et parsemer de persil ciselé.'
  ]);

  R('salade-lentilles', 'Salade de lentilles', 'Française', 'Entrée', 35, 'Facile', 4, [
    ['lentilles', 250, 'g'], ['carottes', 1], ['echalotes', 1], ['moutarde', 1, 'cs'], ['vinaigre', 2, 'cs'],
    ['huile', 4, 'cs'], ['lardons', 100, 'g', 'opt'], ['persil', 0.5, 'pc', 'opt'], ['laurier', 1, 'pc', 'opt'],
    ['sel', null], ['poivre', null]
  ], [
    'Cuire les lentilles 25 min dans 3 fois leur volume d’eau avec la carotte en dés et le laurier. Saler en fin de cuisson.',
    'Faire dorer les lardons si vous en mettez.',
    'Préparer la vinaigrette avec l’échalote hachée, la moutarde, le vinaigre et l’huile.',
    'Mélanger les lentilles égouttées tièdes avec la vinaigrette, les lardons et le persil.'
  ]);

  R('veloute-potiron', 'Velouté de potiron', 'Française', 'Soupe', 45, 'Facile', 4, [
    ['potiron', 1000, 'g'], ['pommes-de-terre', 200, 'g'], ['oignons', 1], ['bouillon', 1], ['beurre', 20, 'g'],
    ['creme-liquide', 10, 'cl', 'opt'], ['muscade', 1, 'pincee', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Faire fondre l’oignon émincé dans le beurre.',
    'Ajouter le potiron et la pomme de terre en cubes, couvrir d’eau (environ 1 L) et ajouter le bouillon.',
    'Cuire 25 min, puis mixer finement.',
    'Ajouter la crème et la muscade, rectifier l’assaisonnement.'
  ]);

  R('soupe-legumes', 'Soupe de légumes', 'Française', 'Soupe', 45, 'Facile', 4, [
    ['carottes', 3], ['poireaux', 2], ['pommes-de-terre', 400, 'g'], ['navets', 2, 'pc', 'opt'], ['celeri', 1, 'pc', 'opt'],
    ['bouillon', 1], ['beurre', 20, 'g'], ['sel', null], ['poivre', null]
  ], [
    'Éplucher et couper tous les légumes en morceaux.',
    'Les faire revenir 5 min dans le beurre.',
    'Couvrir de 1,5 L d’eau, ajouter le bouillon et cuire 30 min.',
    'Mixer ou laisser en morceaux selon les goûts. Saler et poivrer.'
  ]);

  R('veloute-poireaux', 'Velouté poireaux pommes de terre', 'Française', 'Soupe', 40, 'Facile', 4, [
    ['poireaux', 3], ['pommes-de-terre', 500, 'g'], ['oignons', 1], ['bouillon', 1], ['beurre', 20, 'g'],
    ['creme-liquide', 10, 'cl', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Faire fondre les poireaux émincés et l’oignon dans le beurre, 10 min.',
    'Ajouter les pommes de terre en cubes, 1 L d’eau et le bouillon.',
    'Cuire 25 min, mixer, puis ajouter la crème. Assaisonner.'
  ]);

  R('soupe-pistou', 'Soupe au pistou', 'Française', 'Soupe', 75, 'Moyenne', 6, [
    ['haricots-blancs', 250, 'g'], ['haricots-verts', 200, 'g'], ['courgettes', 2], ['carottes', 2],
    ['pommes-de-terre', 300, 'g'], ['tomates', 2], ['pates', 100, 'g'], ['basilic', 1], ['ail', 3],
    ['parmesan', 50, 'g'], ['huile-olive', 5, 'cs'], ['sel', null], ['poivre', null]
  ], [
    'Couper tous les légumes en petits dés et les mettre dans 2 L d’eau salée. Cuire 40 min.',
    'Ajouter les haricots blancs et les petites pâtes, cuire encore 10 min.',
    'Pour le pistou, piler ou mixer le basilic avec l’ail, le parmesan et l’huile d’olive.',
    'Hors du feu, incorporer le pistou à la soupe juste avant de servir.'
  ]);

  R('lentilles-saucisses', 'Lentilles aux saucisses', 'Française', 'Plat', 50, 'Facile', 4, [
    ['lentilles', 300, 'g'], ['saucisses', 4], ['carottes', 2], ['oignons', 1], ['lardons', 100, 'g', 'opt'],
    ['bouquet-garni', 1, 'pc', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Faire dorer les saucisses et les lardons dans une cocotte. Réserver.',
    'Faire revenir l’oignon et les carottes en rondelles.',
    'Ajouter les lentilles, le bouquet garni et 3 fois leur volume d’eau.',
    'Remettre les saucisses, couvrir et cuire 35 min. Saler en fin de cuisson.'
  ]);

  R('cassoulet', 'Cassoulet', 'Française', 'Plat', 180, 'Moyenne', 6, [
    ['haricots-blancs', 1000, 'g'], ['confit-canard', 3], ['saucisses', 6], ['porc-epaule', 400, 'g'],
    ['tomates-concassees', 400, 'g'], ['oignons', 2], ['ail', 3], ['bouquet-garni', 1], ['chapelure', 30, 'g', 'opt'],
    ['sel', null], ['poivre', null]
  ], [
    'Faire dorer les saucisses et le porc en morceaux dans un peu de graisse de canard.',
    'Ajouter les oignons et l’ail hachés, puis les tomates et le bouquet garni. Couvrir d’eau et mijoter 1 h.',
    'Préchauffer le four à 160 °C. Dans une cocotte, alterner haricots, viandes, cuisses de canard coupées en deux et sauce.',
    'Parsemer de chapelure et enfourner 1 h 30. Casser la croûte qui se forme et l’enfoncer 2 ou 3 fois pendant la cuisson.'
  ]);

  R('steak-frites', 'Steak frites maison', 'Française', 'Plat', 45, 'Facile', 4, [
    ['steak', 4], ['pommes-de-terre', 1200, 'g'], ['huile', 1, 'l'], ['beurre', 20, 'g'],
    ['echalotes', 2, 'pc', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Couper les pommes de terre en bâtonnets, les rincer et bien les sécher.',
    'Première cuisson : 6 min dans l’huile à 160 °C. Égoutter.',
    'Cuire les steaks à la poêle bien chaude dans le beurre, 2 à 3 min par face selon la cuisson souhaitée. Saler, poivrer.',
    'Deuxième cuisson des frites : 2 à 3 min à 180 °C jusqu’à ce qu’elles soient dorées. Saler.'
  ]);

  R('pates-lardons-creme', 'Pâtes aux lardons et à la crème', 'Française', 'Plat', 20, 'Facile', 4, [
    ['pates', 400, 'g'], ['lardons', 200, 'g'], ['creme-fraiche', 20, 'cl'], ['oignons', 1, 'pc', 'opt'],
    ['fromage-rape', 50, 'g', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Cuire les pâtes dans une grande casserole d’eau salée.',
    'Faire revenir les lardons et l’oignon émincé.',
    'Ajouter la crème et poivrer généreusement.',
    'Mélanger avec les pâtes égouttées et servir avec le fromage.'
  ]);

  R('gratin-pates-jambon', 'Gratin de pâtes au jambon', 'Française', 'Plat', 35, 'Facile', 4, [
    ['pates', 400, 'g'], ['jambon', 4], ['creme-fraiche', 20, 'cl'], ['lait', 10, 'cl'], ['fromage-rape', 150, 'g'],
    ['sel', null], ['poivre', null]
  ], [
    'Préchauffer le four à 200 °C. Cuire les pâtes 2 min de moins que le temps indiqué.',
    'Mélanger les pâtes avec le jambon en lanières, la crème, le lait et la moitié du fromage.',
    'Verser dans un plat, couvrir du reste de fromage et gratiner 15 min.'
  ]);

  R('gratin-chou-fleur', 'Gratin de chou-fleur', 'Française', 'Accompagnement', 50, 'Facile', 4, [
    ['chou-fleur', 1], ['beurre', 40, 'g'], ['farine', 40, 'g'], ['lait', 50, 'cl'], ['fromage-rape', 100, 'g'],
    ['muscade', 1, 'pincee', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Détailler le chou-fleur en bouquets et les cuire 10 min à l’eau salée. Égoutter.',
    'Préparer une béchamel : beurre fondu, farine, puis lait en fouettant. Épaissir 5 min, assaisonner et ajouter la muscade.',
    'Préchauffer le four à 200 °C. Mettre le chou-fleur dans un plat, napper de béchamel et couvrir de fromage.',
    'Gratiner 20 min.'
  ]);

  R('gratin-courgettes', 'Gratin de courgettes', 'Française', 'Accompagnement', 45, 'Facile', 4, [
    ['courgettes', 4], ['oeufs', 2], ['creme-fraiche', 20, 'cl'], ['fromage-rape', 80, 'g'], ['ail', 1, 'pc', 'opt'],
    ['huile-olive', 1, 'cs'], ['sel', null], ['poivre', null]
  ], [
    'Préchauffer le four à 180 °C. Couper les courgettes en rondelles et les faire revenir 10 min à l’huile avec l’ail.',
    'Battre les œufs avec la crème et la moitié du fromage, saler et poivrer.',
    'Mettre les courgettes dans un plat, verser l’appareil et couvrir du reste de fromage.',
    'Cuire 25 min.'
  ]);

  R('endives-jambon', 'Endives au jambon', 'Française', 'Plat', 60, 'Facile', 4, [
    ['endives', 8], ['jambon', 8], ['beurre', 40, 'g'], ['farine', 40, 'g'], ['lait', 50, 'cl'],
    ['fromage-rape', 100, 'g'], ['muscade', 1, 'pincee', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Cuire les endives 20 min à la vapeur ou à l’eau, puis bien les presser pour retirer l’eau.',
    'Préparer une béchamel avec le beurre, la farine et le lait. Assaisonner et ajouter la muscade.',
    'Préchauffer le four à 200 °C. Rouler chaque endive dans une tranche de jambon et les ranger dans un plat.',
    'Napper de béchamel, parsemer de fromage et gratiner 20 min.'
  ]);

  R('tomates-farcies', 'Tomates farcies', 'Française', 'Plat', 75, 'Facile', 4, [
    ['tomates', 8], ['chair-saucisse', 400, 'g'], ['oignons', 1], ['ail', 1], ['riz', 150, 'g'],
    ['chapelure', 20, 'g', 'opt'], ['persil', 0.5, 'pc', 'opt'], ['huile-olive', 2, 'cs'], ['sel', null], ['poivre', null]
  ], [
    'Préchauffer le four à 180 °C. Couper un chapeau aux tomates, les évider et garder la pulpe.',
    'Mélanger la chair à saucisse avec l’oignon, l’ail et le persil hachés.',
    'Remplir les tomates, parsemer de chapelure et reposer les chapeaux.',
    'Mettre le riz cru et la pulpe hachée au fond du plat avec 30 cl d’eau salée, poser les tomates dessus.',
    'Arroser d’huile d’olive et cuire 1 h.'
  ]);

  R('saumon-papillote', 'Saumon en papillote', 'Française', 'Plat', 30, 'Facile', 4, [
    ['saumon', 4], ['citron', 1], ['tomates-cerises', 200, 'g'], ['courgettes', 1, 'pc', 'opt'],
    ['huile-olive', 2, 'cs'], ['ciboulette', 0.5, 'pc', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Préchauffer le four à 200 °C.',
    'Sur 4 feuilles de papier cuisson, poser la courgette en fines rondelles, un pavé de saumon, des tomates cerises coupées et une rondelle de citron.',
    'Arroser d’huile, saler, poivrer et fermer hermétiquement les papillotes.',
    'Cuire 15 min. Parsemer de ciboulette à l’ouverture.'
  ]);

  R('cabillaud-poireaux', 'Cabillaud à la fondue de poireaux', 'Française', 'Plat', 40, 'Facile', 4, [
    ['cabillaud', 600, 'g'], ['poireaux', 3], ['creme-liquide', 20, 'cl'], ['beurre', 30, 'g'],
    ['citron', 1, 'pc', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Émincer les poireaux et les faire fondre 20 min dans le beurre à couvert, à feu doux.',
    'Ajouter la crème, saler, poivrer et laisser réduire 5 min.',
    'Poser le cabillaud sur la fondue, couvrir et cuire 8 à 10 min à feu doux.',
    'Servir avec un filet de citron.'
  ]);

  R('moules-marinieres', 'Moules marinières', 'Française', 'Plat', 30, 'Facile', 4, [
    ['moules', 2, 'kg'], ['echalotes', 3], ['vin-blanc', 20, 'cl'], ['beurre', 40, 'g'],
    ['persil', 1, 'pc', 'opt'], ['creme-fraiche', 10, 'cl', 'opt'], ['poivre', null]
  ], [
    'Gratter et rincer les moules. Jeter celles qui sont ouvertes et ne se referment pas quand on les tapote.',
    'Faire fondre les échalotes hachées dans le beurre, dans un grand faitout.',
    'Ajouter le vin blanc et les moules, couvrir et cuire à feu vif 5 à 7 min en secouant le faitout.',
    'Ajouter la crème et le persil, poivrer et servir dès que les moules sont ouvertes.'
  ]);

  R('navarin-agneau', 'Navarin d’agneau', 'Française', 'Plat', 120, 'Moyenne', 6, [
    ['agneau', 1200, 'g'], ['pommes-de-terre', 600, 'g'], ['carottes', 4], ['navets', 4], ['oignons', 2], ['ail', 2],
    ['concentre-tomate', 1, 'cs'], ['farine', 20, 'g'], ['bouquet-garni', 1], ['petits-pois', 200, 'g', 'opt'],
    ['huile', 2, 'cs'], ['sel', null], ['poivre', null]
  ], [
    'Faire dorer l’agneau dans l’huile, ajouter les oignons émincés.',
    'Saupoudrer de farine, ajouter le concentré de tomate, l’ail et couvrir d’eau. Ajouter le bouquet garni.',
    'Mijoter 1 h à couvert.',
    'Ajouter les carottes, les navets et les pommes de terre en morceaux, cuire 30 min.',
    'Ajouter les petits pois 10 min avant la fin. Saler et poivrer.'
  ]);

  R('carbonade-flamande', 'Carbonade flamande', 'Française', 'Plat', 180, 'Moyenne', 6, [
    ['boeuf-braiser', 1200, 'g'], ['biere', 75, 'cl'], ['oignons', 4], ['pain', 2], ['moutarde', 2, 'cs'],
    ['sucre', 15, 'g'], ['beurre', 30, 'g'], ['bouquet-garni', 1], ['vinaigre', 1, 'cs', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Faire dorer la viande en cubes dans le beurre. Réserver.',
    'Faire fondre les oignons émincés avec le sucre jusqu’à ce qu’ils caramélisent légèrement.',
    'Remettre la viande, verser la bière, ajouter le bouquet garni.',
    'Tartiner les tranches de pain de moutarde et les poser sur le dessus.',
    'Couvrir et mijoter 2 h 30 à feu très doux. Le pain épaissit la sauce. Ajouter le vinaigre en fin de cuisson.'
  ]);

  R('boeuf-carottes', 'Bœuf carottes', 'Française', 'Plat', 180, 'Facile', 6, [
    ['boeuf-braiser', 1200, 'g'], ['carottes', 10], ['oignons', 2], ['vin-blanc', 25, 'cl'], ['bouquet-garni', 1],
    ['huile', 2, 'cs'], ['sel', null], ['poivre', null]
  ], [
    'Faire dorer la viande en cubes dans l’huile, puis les oignons émincés.',
    'Ajouter le vin blanc, le bouquet garni et de l’eau à hauteur.',
    'Couvrir et cuire 1 h 30 à feu doux.',
    'Ajouter les carottes en rondelles épaisses et cuire encore 1 h. Saler et poivrer.'
  ]);

  R('pissaladiere', 'Pissaladière', 'Française', 'Plat', 75, 'Facile', 6, [
    ['pate-pizza', 1], ['oignons', 10], ['olives', 50, 'g'], ['huile-olive', 4, 'cs'], ['thym', 2, 'pc', 'opt'],
    ['sel', null], ['poivre', null]
  ], [
    'Émincer les oignons et les faire compoter 40 min à feu doux dans l’huile d’olive avec le thym, sans les colorer.',
    'Préchauffer le four à 220 °C. Étaler la pâte sur une plaque.',
    'Répartir les oignons, décorer d’olives.',
    'Cuire 20 min. Délicieuse tiède ou froide.'
  ]);

  R('flammekueche', 'Flammekueche', 'Française', 'Plat', 30, 'Facile', 4, [
    ['pate-pizza', 1], ['creme-fraiche', 20, 'cl'], ['lardons', 200, 'g'], ['oignons', 2],
    ['muscade', 1, 'pincee', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Préchauffer le four à 250 °C. Étaler la pâte très finement.',
    'Assaisonner la crème de sel, poivre et muscade, l’étaler sur la pâte.',
    'Parsemer d’oignons en fines lamelles et de lardons crus.',
    'Cuire 10 à 12 min, jusqu’à ce que les bords soient bien dorés.'
  ]);

  R('tarte-tomate-moutarde', 'Tarte à la tomate et à la moutarde', 'Française', 'Plat', 45, 'Facile', 6, [
    ['pate-brisee', 1], ['tomates', 5], ['moutarde', 3, 'cs'], ['fromage-rape', 60, 'g', 'opt'],
    ['herbes-provence', 1, 'cc'], ['huile-olive', 2, 'cs'], ['sel', null], ['poivre', null]
  ], [
    'Préchauffer le four à 200 °C. Étaler la pâte dans un moule.',
    'Tartiner le fond de moutarde et parsemer de fromage.',
    'Disposer les tomates en rondelles, arroser d’huile, saler, poivrer et parsemer d’herbes.',
    'Cuire 30 min.'
  ]);

  R('cake-sale', 'Cake salé jambon olives', 'Française', 'Entrée', 60, 'Facile', 6, [
    ['farine', 200, 'g'], ['oeufs', 3], ['levure-chimique', 1], ['lait', 12, 'cl'], ['huile', 7, 'cs'],
    ['jambon', 4], ['olives', 80, 'g'], ['fromage-rape', 100, 'g'], ['sel', null], ['poivre', null]
  ], [
    'Préchauffer le four à 180 °C.',
    'Mélanger la farine et la levure, ajouter les œufs un à un, puis le lait et l’huile.',
    'Ajouter le jambon en dés, les olives et le fromage. Saler peu et poivrer.',
    'Verser dans un moule à cake beurré et cuire 45 min.'
  ]);

  R('puree-maison', 'Purée maison', 'Française', 'Accompagnement', 35, 'Facile', 4, [
    ['pommes-de-terre', 1000, 'g'], ['lait', 25, 'cl'], ['beurre', 60, 'g'], ['muscade', 1, 'pincee', 'opt'],
    ['sel', null], ['poivre', null]
  ], [
    'Cuire les pommes de terre épluchées 20 à 25 min à l’eau salée.',
    'Les égoutter et les écraser au presse-purée.',
    'Incorporer le beurre, puis le lait chaud petit à petit. Assaisonner.'
  ]);

  R('pommes-sautees', 'Pommes de terre sautées', 'Française', 'Accompagnement', 35, 'Facile', 4, [
    ['pommes-de-terre', 1000, 'g'], ['huile', 3, 'cs'], ['beurre', 20, 'g'], ['ail', 2, 'pc', 'opt'],
    ['persil', 0.5, 'pc', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Couper les pommes de terre en cubes et bien les sécher.',
    'Les faire dorer 25 min à la poêle dans l’huile et le beurre, en remuant régulièrement.',
    'Ajouter l’ail et le persil hachés 2 min avant la fin. Saler et poivrer.'
  ]);

  R('carottes-vichy', 'Carottes Vichy', 'Française', 'Accompagnement', 35, 'Facile', 4, [
    ['carottes', 8], ['beurre', 30, 'g'], ['sucre', 10, 'g'], ['persil', 0.5, 'pc', 'opt'], ['sel', null]
  ], [
    'Couper les carottes en rondelles fines.',
    'Les mettre dans une sauteuse avec le beurre, le sucre, une pincée de sel et de l’eau à hauteur.',
    'Cuire à découvert jusqu’à évaporation complète de l’eau, environ 25 min. Les carottes doivent être brillantes.',
    'Parsemer de persil.'
  ]);

  R('mousse-chocolat', 'Mousse au chocolat', 'Française', 'Dessert', 20, 'Facile', 6, [
    ['chocolat-noir', 200, 'g'], ['oeufs', 6], ['sucre', 30, 'g', 'opt'], ['sel', 1, 'pincee']
  ], [
    'Faire fondre le chocolat au bain-marie.',
    'Séparer les blancs des jaunes. Incorporer les jaunes au chocolat tiédi.',
    'Monter les blancs en neige ferme avec le sel, en ajoutant le sucre à la fin.',
    'Incorporer délicatement les blancs au chocolat en soulevant la masse.',
    'Réserver au moins 3 h au frais.'
  ]);

  R('fondant-chocolat', 'Fondant au chocolat', 'Française', 'Dessert', 35, 'Facile', 6, [
    ['chocolat-noir', 200, 'g'], ['beurre', 150, 'g'], ['sucre', 120, 'g'], ['oeufs', 4], ['farine', 50, 'g']
  ], [
    'Préchauffer le four à 180 °C.',
    'Faire fondre le chocolat avec le beurre.',
    'Fouetter les œufs avec le sucre, ajouter le chocolat puis la farine.',
    'Verser dans un moule beurré et cuire 20 à 22 min : le centre doit rester tremblotant.'
  ]);

  R('gateau-yaourt', 'Gâteau au yaourt', 'Française', 'Dessert', 45, 'Facile', 8, [
    ['yaourt', 1], ['sucre', 220, 'g'], ['farine', 210, 'g'], ['oeufs', 3], ['huile', 4, 'cs'],
    ['levure-chimique', 1], ['sucre-vanille', 1, 'pc', 'opt']
  ], [
    'Préchauffer le four à 180 °C.',
    'Verser le yaourt dans un saladier et garder le pot pour mesurer : 2 pots de sucre, 3 pots de farine.',
    'Ajouter les œufs, le sucre vanillé, la farine, la levure et l’huile. Bien mélanger.',
    'Verser dans un moule beurré et cuire 30 à 35 min.'
  ]);

  R('tarte-pommes', 'Tarte aux pommes', 'Française', 'Dessert', 50, 'Facile', 8, [
    ['pate-brisee', 1], ['pommes', 5], ['sucre', 40, 'g'], ['beurre', 20, 'g'],
    ['sucre-vanille', 1, 'pc', 'opt'], ['cannelle', 0.5, 'cc', 'opt']
  ], [
    'Préchauffer le four à 200 °C. Étaler la pâte dans un moule et la piquer.',
    'Éplucher les pommes et les couper en fines lamelles.',
    'Les disposer en rosace, saupoudrer de sucre, de sucre vanillé et de cannelle, parsemer de noisettes de beurre.',
    'Cuire 35 min.'
  ]);

  R('crumble-pommes', 'Crumble aux pommes', 'Française', 'Dessert', 50, 'Facile', 6, [
    ['pommes', 6], ['farine', 150, 'g'], ['beurre', 100, 'g'], ['sucre', 100, 'g'], ['cannelle', 1, 'cc', 'opt']
  ], [
    'Préchauffer le four à 180 °C. Couper les pommes en dés et les mettre dans un plat avec la cannelle.',
    'Sabler du bout des doigts la farine, le sucre et le beurre froid en dés.',
    'Recouvrir les pommes de cette pâte sableuse.',
    'Cuire 35 min jusqu’à ce que le dessus soit doré.'
  ]);

  R('clafoutis-cerises', 'Clafoutis aux cerises', 'Française', 'Dessert', 55, 'Facile', 6, [
    ['cerises', 500, 'g'], ['oeufs', 3], ['farine', 60, 'g'], ['sucre', 80, 'g'], ['lait', 25, 'cl'], ['beurre', 20, 'g']
  ], [
    'Préchauffer le four à 180 °C. Beurrer un plat et y répartir les cerises (avec les noyaux, c’est la tradition).',
    'Fouetter les œufs avec le sucre, ajouter la farine puis le lait.',
    'Verser sur les cerises et cuire 40 min.'
  ]);

  R('riz-au-lait', 'Riz au lait', 'Française', 'Dessert', 50, 'Facile', 6, [
    ['riz', 150, 'g'], ['lait', 100, 'cl'], ['sucre', 80, 'g'], ['sucre-vanille', 1], ['cannelle', 0.5, 'cc', 'opt']
  ], [
    'Porter le lait à ébullition avec le sucre vanillé.',
    'Ajouter le riz, baisser le feu et cuire 40 min à tout petit feu en remuant souvent.',
    'Ajouter le sucre en fin de cuisson. Servir tiède ou froid, saupoudré de cannelle.'
  ]);

  R('pain-perdu', 'Pain perdu', 'Française', 'Dessert', 20, 'Facile', 4, [
    ['pain', 8], ['oeufs', 3], ['lait', 25, 'cl'], ['sucre', 40, 'g'], ['beurre', 30, 'g'], ['cannelle', 0.5, 'cc', 'opt']
  ], [
    'Fouetter les œufs avec le lait, le sucre et la cannelle.',
    'Tremper les tranches de pain (idéalement rassis) dans ce mélange.',
    'Les faire dorer à la poêle dans le beurre, 2 min de chaque côté.'
  ]);

  R('poires-belle-helene', 'Poires Belle-Hélène', 'Française', 'Dessert', 40, 'Facile', 4, [
    ['poires', 4], ['sucre', 100, 'g'], ['chocolat-noir', 100, 'g'], ['creme-liquide', 10, 'cl'], ['sucre-vanille', 1, 'pc', 'opt']
  ], [
    'Éplucher les poires en gardant la queue.',
    'Les pocher 20 min dans 1 L d’eau frémissante avec le sucre et le sucre vanillé. Laisser refroidir dans le sirop.',
    'Faire fondre le chocolat avec la crème.',
    'Servir les poires nappées de sauce chocolat chaude.'
  ]);

  R('far-breton', 'Far breton', 'Française', 'Dessert', 75, 'Facile', 8, [
    ['farine', 200, 'g'], ['sucre', 120, 'g'], ['oeufs', 4], ['lait', 75, 'cl'], ['beurre', 30, 'g'],
    ['pruneaux', 200, 'g'], ['sel', 1, 'pincee']
  ], [
    'Préchauffer le four à 200 °C. Beurrer généreusement un plat.',
    'Mélanger la farine, le sucre et le sel, ajouter les œufs puis le lait petit à petit.',
    'Répartir les pruneaux dans le plat et verser la pâte.',
    'Cuire 10 min à 200 °C puis 45 min à 180 °C.'
  ]);

  R('ile-flottante', 'Île flottante', 'Française', 'Dessert', 45, 'Moyenne', 4, [
    ['oeufs', 4], ['lait', 50, 'cl'], ['sucre', 100, 'g'], ['sucre-vanille', 1]
  ], [
    'Crème anglaise : porter le lait à frémissement avec le sucre vanillé. Fouetter les jaunes avec 50 g de sucre, verser le lait chaud dessus.',
    'Remettre sur feu doux et remuer sans cesse jusqu’à ce que la crème nappe la cuillère, sans jamais bouillir. Refroidir.',
    'Monter les blancs en neige avec le reste du sucre.',
    'Pocher des quenelles de blancs 1 min de chaque côté dans de l’eau frémissante, ou 30 s au micro-ondes.',
    'Servir les blancs sur la crème anglaise froide.'
  ]);

  /* ───────────── Italienne ───────────── */

  R('spaghetti-carbonara', 'Spaghetti carbonara', 'Italienne', 'Plat', 20, 'Facile', 4, [
    ['spaghetti', 400, 'g'], ['lardons', 150, 'g'], ['oeufs', 4], ['parmesan', 80, 'g'], ['poivre', null], ['sel', null]
  ], [
    'Cuire les spaghetti dans une grande casserole d’eau salée.',
    'Faire dorer les lardons à sec (l’idéal est le guanciale).',
    'Mélanger les jaunes et un œuf entier avec le parmesan râpé et beaucoup de poivre.',
    'Hors du feu, mélanger les pâtes égouttées avec les lardons, puis l’appareil aux œufs et un peu d’eau de cuisson pour obtenir une sauce crémeuse. Pas de crème !'
  ]);

  R('spaghetti-bolognaise', 'Spaghetti bolognaise', 'Italienne', 'Plat', 60, 'Facile', 4, [
    ['spaghetti', 400, 'g'], ['boeuf-hache', 400, 'g'], ['tomates-concassees', 400, 'g'], ['oignons', 1], ['carottes', 1],
    ['ail', 1], ['concentre-tomate', 1, 'cs'], ['vin-rouge', 10, 'cl', 'opt'], ['huile-olive', 2, 'cs'],
    ['parmesan', 40, 'g', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Faire revenir l’oignon, la carotte et l’ail hachés finement dans l’huile, 5 min.',
    'Ajouter la viande et la faire dorer. Déglacer au vin.',
    'Ajouter les tomates et le concentré, saler, poivrer. Mijoter 40 min à feu doux.',
    'Servir sur les spaghetti cuits al dente, avec du parmesan.'
  ]);

  R('lasagnes', 'Lasagnes à la bolognaise', 'Italienne', 'Plat', 90, 'Moyenne', 6, [
    ['lasagnes', 250, 'g'], ['boeuf-hache', 500, 'g'], ['tomates-concassees', 800, 'g'], ['oignons', 1], ['carottes', 1],
    ['ail', 2], ['beurre', 50, 'g'], ['farine', 50, 'g'], ['lait', 70, 'cl'], ['parmesan', 80, 'g'],
    ['muscade', 1, 'pincee', 'opt'], ['huile-olive', 2, 'cs'], ['sel', null], ['poivre', null]
  ], [
    'Préparer la sauce bolognaise : légumes hachés revenus dans l’huile, viande, tomates. Mijoter 30 min.',
    'Préparer une béchamel avec le beurre, la farine et le lait. Assaisonner avec sel, poivre et muscade.',
    'Préchauffer le four à 180 °C. Dans un plat, alterner sauce, feuilles de lasagne, béchamel, en finissant par la béchamel.',
    'Parsemer de parmesan et cuire 40 min.'
  ]);

  R('risotto-champignons', 'Risotto aux champignons', 'Italienne', 'Plat', 40, 'Moyenne', 4, [
    ['riz-risotto', 300, 'g'], ['champignons', 300, 'g'], ['oignons', 1], ['vin-blanc', 10, 'cl'], ['bouillon', 1],
    ['parmesan', 60, 'g'], ['beurre', 40, 'g'], ['huile-olive', 2, 'cs'], ['sel', null], ['poivre', null]
  ], [
    'Préparer 1 L de bouillon chaud et le garder frémissant.',
    'Faire revenir les champignons émincés dans un peu de beurre. Réserver.',
    'Faire fondre l’oignon haché dans l’huile, ajouter le riz et le nacrer 2 min.',
    'Déglacer au vin blanc, puis ajouter le bouillon louche par louche en remuant, pendant 18 min.',
    'Hors du feu, incorporer les champignons, le reste du beurre et le parmesan. Couvrir 2 min avant de servir.'
  ]);

  R('pates-pesto', 'Pâtes au pesto', 'Italienne', 'Plat', 20, 'Facile', 4, [
    ['pates', 400, 'g'], ['basilic', 1], ['parmesan', 50, 'g'], ['pignons', 30, 'g'], ['ail', 1],
    ['huile-olive', 8, 'cs'], ['sel', null]
  ], [
    'Cuire les pâtes dans l’eau salée.',
    'Mixer le basilic avec l’ail, les pignons légèrement grillés, le parmesan et l’huile d’olive.',
    'Mélanger le pesto avec les pâtes égouttées et un peu d’eau de cuisson.'
  ]);

  R('pates-arrabbiata', 'Penne all’arrabbiata', 'Italienne', 'Plat', 25, 'Facile', 4, [
    ['pates', 400, 'g'], ['tomates-concassees', 400, 'g'], ['ail', 2], ['piment', 2, 'pincee'],
    ['huile-olive', 3, 'cs'], ['persil', 0.5, 'pc', 'opt'], ['sel', null]
  ], [
    'Faire revenir l’ail émincé et le piment dans l’huile d’olive, sans colorer.',
    'Ajouter les tomates, saler et laisser réduire 15 min.',
    'Mélanger avec les pâtes cuites al dente et parsemer de persil.'
  ]);

  R('pates-thon-tomate', 'Pâtes au thon et à la tomate', 'Italienne', 'Plat', 25, 'Facile', 4, [
    ['pates', 400, 'g'], ['thon-boite', 200, 'g'], ['tomates-concassees', 400, 'g'], ['oignons', 1], ['ail', 1],
    ['olives', 50, 'g', 'opt'], ['huile-olive', 2, 'cs'], ['sel', null], ['poivre', null]
  ], [
    'Faire revenir l’oignon et l’ail hachés dans l’huile d’olive.',
    'Ajouter les tomates et laisser mijoter 10 min.',
    'Ajouter le thon émietté et les olives, réchauffer 2 min.',
    'Mélanger avec les pâtes cuites.'
  ]);

  R('pizza-margherita', 'Pizza margherita', 'Italienne', 'Plat', 30, 'Facile', 2, [
    ['pate-pizza', 1], ['coulis-tomate', 15, 'cl'], ['mozzarella', 125, 'g'], ['basilic', 0.25, 'pc', 'opt'],
    ['origan', 0.5, 'cc', 'opt'], ['huile-olive', 1, 'cs'], ['sel', null]
  ], [
    'Préchauffer le four au maximum (250 °C) avec la plaque à l’intérieur.',
    'Étaler la pâte, la couvrir de coulis de tomate salé et d’origan.',
    'Répartir la mozzarella égouttée et coupée en morceaux, arroser d’huile.',
    'Cuire 10 à 12 min. Ajouter le basilic frais à la sortie du four.'
  ]);

  R('aubergines-parmigiana', 'Aubergines à la parmigiana', 'Italienne', 'Plat', 75, 'Moyenne', 4, [
    ['aubergines', 3], ['tomates-concassees', 800, 'g'], ['mozzarella', 250, 'g'], ['parmesan', 80, 'g'], ['ail', 1],
    ['basilic', 0.5, 'pc', 'opt'], ['huile-olive', 6, 'cs'], ['sel', null], ['poivre', null]
  ], [
    'Couper les aubergines en tranches, les badigeonner d’huile et les faire griller au four 20 min à 200 °C.',
    'Faire une sauce avec l’ail, les tomates, sel et poivre, 15 min.',
    'Dans un plat, alterner sauce, aubergines, mozzarella, basilic et parmesan.',
    'Cuire 30 min à 180 °C.'
  ]);

  R('salade-caprese', 'Salade caprese', 'Italienne', 'Entrée', 10, 'Facile', 4, [
    ['tomates', 4], ['mozzarella', 250, 'g'], ['basilic', 0.5], ['huile-olive', 3, 'cs'], ['sel', null], ['poivre', null]
  ], [
    'Couper les tomates et la mozzarella en tranches.',
    'Les alterner dans un plat avec des feuilles de basilic.',
    'Arroser d’huile d’olive, saler et poivrer.'
  ]);

  R('tiramisu', 'Tiramisu', 'Italienne', 'Dessert', 30, 'Facile', 6, [
    ['mascarpone', 250, 'g'], ['oeufs', 3], ['sucre', 80, 'g'], ['boudoirs', 24], ['cafe', 30, 'cl']
  ], [
    'Préparer le café et le laisser refroidir.',
    'Fouetter les jaunes avec le sucre jusqu’à ce que le mélange blanchisse, puis ajouter le mascarpone.',
    'Monter les blancs en neige et les incorporer délicatement.',
    'Tremper rapidement les biscuits dans le café et alterner les couches biscuits et crème.',
    'Réserver au moins 4 h au frais. Saupoudrer de cacao avant de servir.'
  ]);

  R('panna-cotta', 'Panna cotta', 'Italienne', 'Dessert', 15, 'Facile', 4, [
    ['creme-liquide', 50, 'cl'], ['sucre', 60, 'g'], ['gelatine', 3], ['sucre-vanille', 1, 'pc', 'opt']
  ], [
    'Faire ramollir la gélatine 5 min dans l’eau froide.',
    'Chauffer la crème avec le sucre et le sucre vanillé, sans faire bouillir.',
    'Hors du feu, ajouter la gélatine essorée et bien mélanger.',
    'Verser dans des verrines et réserver 4 h au frais. Servir avec un coulis de fruits.'
  ]);

  /* ───────────── Espagnole, grecque ───────────── */

  R('tortilla', 'Tortilla de patatas', 'Espagnole', 'Plat', 45, 'Moyenne', 4, [
    ['pommes-de-terre', 600, 'g'], ['oeufs', 6], ['oignons', 1], ['huile-olive', 10, 'cs'], ['sel', null]
  ], [
    'Couper les pommes de terre en fines lamelles et l’oignon en fines tranches.',
    'Les faire confire 20 min dans l’huile d’olive à feu moyen, sans qu’ils dorent. Égoutter.',
    'Battre les œufs avec du sel et y mélanger les pommes de terre.',
    'Cuire dans une poêle huilée à feu moyen 5 min, retourner à l’aide d’une assiette et cuire encore 3 min.'
  ]);

  R('gaspacho', 'Gaspacho', 'Espagnole', 'Soupe', 15, 'Facile', 4, [
    ['tomates', 8], ['concombre', 1], ['poivrons', 1], ['oignons', 0.5], ['ail', 1], ['pain', 2, 'pc', 'opt'],
    ['huile-olive', 4, 'cs'], ['vinaigre', 2, 'cs'], ['sel', null], ['poivre', null]
  ], [
    'Couper grossièrement tous les légumes.',
    'Mixer avec le pain, l’huile, le vinaigre, le sel et le poivre jusqu’à obtenir une soupe lisse.',
    'Réserver au moins 2 h au frais. Servir bien froid.'
  ]);

  R('paella', 'Paella poulet et crevettes', 'Espagnole', 'Plat', 60, 'Moyenne', 4, [
    ['riz', 300, 'g'], ['poulet', 400, 'g'], ['crevettes', 200, 'g'], ['chorizo', 100, 'g', 'opt'], ['poivrons', 1],
    ['tomates', 2], ['oignons', 1], ['ail', 2], ['petits-pois', 100, 'g', 'opt'], ['bouillon', 1],
    ['paprika', 1, 'cc'], ['curcuma', 0.5, 'cc'], ['huile-olive', 4, 'cs'], ['citron', 1, 'pc', 'opt'], ['sel', null]
  ], [
    'Dans une grande poêle, faire dorer le poulet en morceaux et le chorizo dans l’huile. Réserver.',
    'Faire revenir l’oignon, l’ail et le poivron, puis les tomates râpées.',
    'Ajouter le riz, le paprika et le curcuma, remuer 1 min.',
    'Verser 80 cl de bouillon chaud, remettre la viande et ne plus remuer. Cuire 15 min.',
    'Ajouter les crevettes et les petits pois, cuire encore 5 min. Laisser reposer 5 min sous un torchon. Servir avec du citron.'
  ]);

  R('moussaka', 'Moussaka', 'Grecque', 'Plat', 90, 'Moyenne', 6, [
    ['aubergines', 3], ['boeuf-hache', 500, 'g'], ['tomates-concassees', 400, 'g'], ['oignons', 1], ['ail', 2],
    ['cannelle', 0.5, 'cc'], ['beurre', 40, 'g'], ['farine', 40, 'g'], ['lait', 50, 'cl'], ['oeufs', 1],
    ['parmesan', 50, 'g'], ['huile-olive', 5, 'cs'], ['sel', null], ['poivre', null]
  ], [
    'Couper les aubergines en tranches, les huiler et les rôtir 20 min au four à 200 °C.',
    'Faire revenir l’oignon et l’ail, ajouter la viande, puis les tomates et la cannelle. Mijoter 20 min.',
    'Préparer une béchamel, puis y incorporer l’œuf battu hors du feu.',
    'Alterner aubergines et viande dans un plat, couvrir de béchamel et de parmesan.',
    'Cuire 40 min à 180 °C. Laisser reposer 10 min avant de couper.'
  ]);

  R('salade-grecque', 'Salade grecque', 'Grecque', 'Entrée', 15, 'Facile', 4, [
    ['tomates', 4], ['concombre', 1], ['feta', 200, 'g'], ['oignon-rouge', 1], ['olives', 60, 'g'],
    ['poivrons', 1, 'pc', 'opt'], ['origan', 1, 'cc'], ['huile-olive', 4, 'cs'], ['sel', null]
  ], [
    'Couper les tomates, le concombre et le poivron en morceaux, l’oignon en fines rondelles.',
    'Ajouter les olives et poser la feta en bloc ou en cubes.',
    'Arroser d’huile d’olive, saupoudrer d’origan et saler légèrement.'
  ]);

  R('tzatziki', 'Tzatziki', 'Grecque', 'Entrée', 15, 'Facile', 4, [
    ['yaourt', 4], ['concombre', 1], ['ail', 1], ['menthe', 0.25, 'pc', 'opt'], ['huile-olive', 1, 'cs'],
    ['citron', 0.5, 'pc', 'opt'], ['sel', null]
  ], [
    'Râper le concombre, le saler et le laisser dégorger 10 min, puis bien le presser.',
    'Mélanger avec le yaourt, l’ail écrasé, la menthe ciselée, l’huile et un filet de citron.',
    'Servir frais avec du pain pita ou des crudités.'
  ]);

  /* ───────────── Maghrébine, orientale ───────────── */

  R('couscous-legumes', 'Couscous aux légumes', 'Maghrébine', 'Plat', 75, 'Moyenne', 6, [
    ['semoule', 500, 'g'], ['pois-chiches', 250, 'g'], ['carottes', 4], ['courgettes', 3], ['navets', 3],
    ['oignons', 2], ['tomates-concassees', 400, 'g'], ['ras-el-hanout', 2, 'cc'], ['merguez', 6, 'pc', 'opt'],
    ['harissa', 1, 'cc', 'opt'], ['huile-olive', 4, 'cs'], ['beurre', 30, 'g'], ['sel', null], ['poivre', null]
  ], [
    'Faire revenir les oignons dans l’huile avec le ras el hanout.',
    'Ajouter les tomates, les carottes et les navets en gros morceaux, couvrir de 2 L d’eau. Cuire 30 min.',
    'Ajouter les courgettes et les pois chiches, cuire encore 20 min.',
    'Préparer la semoule : verser le même volume d’eau bouillante salée, couvrir 5 min, puis égrainer avec le beurre.',
    'Griller les merguez. Servir la semoule avec les légumes, le bouillon et la harissa à part.'
  ]);

  R('tajine-poulet-citron', 'Tajine de poulet aux citrons confits', 'Maghrébine', 'Plat', 75, 'Moyenne', 4, [
    ['cuisses-poulet', 4], ['citron-confit', 2], ['olives', 100, 'g'], ['oignons', 2], ['ail', 2],
    ['gingembre', 10, 'g', 'opt'], ['curcuma', 1, 'cc'], ['coriandre', 0.5, 'pc', 'opt'], ['huile-olive', 3, 'cs'],
    ['sel', null], ['poivre', null]
  ], [
    'Faire dorer le poulet dans l’huile avec les oignons émincés, l’ail, le gingembre et le curcuma.',
    'Ajouter 30 cl d’eau, couvrir et cuire 45 min à feu doux.',
    'Ajouter les citrons confits en quartiers et les olives, cuire encore 15 min.',
    'Parsemer de coriandre avant de servir.'
  ]);

  R('chakchouka', 'Chakchouka', 'Maghrébine', 'Plat', 35, 'Facile', 4, [
    ['poivrons', 2], ['tomates', 4], ['oeufs', 4], ['oignons', 1], ['ail', 2], ['cumin', 1, 'cc'],
    ['paprika', 1, 'cc'], ['harissa', 1, 'cc', 'opt'], ['huile-olive', 3, 'cs'], ['coriandre', 0.25, 'pc', 'opt'],
    ['sel', null], ['poivre', null]
  ], [
    'Faire revenir l’oignon et les poivrons en lanières dans l’huile d’olive, 10 min.',
    'Ajouter l’ail, les épices, la harissa et les tomates en dés. Mijoter 15 min.',
    'Creuser 4 puits et y casser les œufs. Couvrir et cuire 5 à 8 min, jusqu’à ce que les blancs soient pris.',
    'Parsemer de coriandre et servir avec du pain.'
  ]);

  R('harira', 'Harira', 'Maghrébine', 'Soupe', 70, 'Moyenne', 6, [
    ['lentilles', 100, 'g'], ['pois-chiches', 250, 'g'], ['tomates-concassees', 400, 'g'], ['oignons', 1],
    ['celeri', 2], ['coriandre', 1], ['persil', 1], ['farine', 30, 'g'], ['agneau', 200, 'g', 'opt'],
    ['gingembre', 5, 'g', 'opt'], ['curcuma', 1, 'cc'], ['cannelle', 0.5, 'cc'], ['concentre-tomate', 1, 'cs'],
    ['huile-olive', 2, 'cs'], ['citron', 1, 'pc', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Faire revenir l’agneau en petits dés et l’oignon haché dans l’huile avec les épices.',
    'Ajouter le céleri, les herbes hachées, les tomates, le concentré et les lentilles. Couvrir de 2 L d’eau.',
    'Cuire 45 min, puis ajouter les pois chiches.',
    'Délayer la farine dans un verre d’eau et l’ajouter en remuant pour épaissir. Cuire 10 min.',
    'Servir avec un quartier de citron.'
  ]);

  R('salade-carottes-cumin', 'Salade de carottes au cumin', 'Maghrébine', 'Entrée', 25, 'Facile', 4, [
    ['carottes', 6], ['ail', 1], ['cumin', 1, 'cc'], ['citron', 1], ['huile-olive', 3, 'cs'],
    ['coriandre', 0.25, 'pc', 'opt'], ['sel', null]
  ], [
    'Cuire les carottes en rondelles 10 min à l’eau salée : elles doivent rester fermes.',
    'Mélanger l’huile, le jus de citron, l’ail écrasé et le cumin.',
    'Assaisonner les carottes tièdes et parsemer de coriandre. Servir frais.'
  ]);

  R('houmous', 'Houmous', 'Libanaise', 'Entrée', 10, 'Facile', 4, [
    ['pois-chiches', 400, 'g'], ['tahini', 3, 'cs'], ['citron', 1], ['ail', 1], ['huile-olive', 3, 'cs'],
    ['cumin', 0.5, 'cc', 'opt'], ['paprika', 1, 'pincee', 'opt'], ['sel', null]
  ], [
    'Égoutter les pois chiches en gardant un peu de leur jus.',
    'Mixer avec le tahini, le jus de citron, l’ail, le cumin, le sel et 4 cuillères de jus, jusqu’à obtenir une crème lisse.',
    'Servir dans une assiette creuse, arrosé d’huile d’olive et saupoudré de paprika.'
  ]);

  R('taboule', 'Taboulé libanais', 'Libanaise', 'Entrée', 25, 'Facile', 4, [
    ['persil', 3], ['menthe', 1], ['tomates', 3], ['boulgour', 50, 'g'], ['oignons', 0.5], ['citron', 2],
    ['huile-olive', 5, 'cs'], ['sel', null], ['poivre', null]
  ], [
    'Faire tremper le boulgour 10 min dans l’eau froide, puis bien l’essorer.',
    'Hacher très finement le persil et la menthe (sans les tiges), couper les tomates en petits dés et l’oignon finement.',
    'Mélanger le tout avec le jus de citron, l’huile, le sel et le poivre. C’est une salade d’herbes : le persil domine.'
  ]);

  R('falafels', 'Falafels', 'Libanaise', 'Plat', 40, 'Moyenne', 4, [
    ['pois-chiches', 400, 'g'], ['oignons', 1], ['ail', 2], ['persil', 0.5], ['coriandre', 0.5], ['cumin', 1, 'cc'],
    ['farine', 30, 'g'], ['levure-chimique', 0.5, 'pc', 'opt'], ['huile', 50, 'cl'], ['sel', null]
  ], [
    'Mixer grossièrement les pois chiches bien égouttés avec l’oignon, l’ail, les herbes, le cumin et le sel.',
    'Ajouter la farine et la levure. La pâte doit se tenir ; ajouter un peu de farine si besoin.',
    'Former des boulettes légèrement aplaties.',
    'Les frire 3 à 4 min dans l’huile chaude. Servir avec du houmous ou une sauce au yaourt.'
  ]);

  /* ───────────── Indienne ───────────── */

  R('curry-pois-chiches', 'Curry de pois chiches', 'Indienne', 'Plat', 30, 'Facile', 4, [
    ['pois-chiches', 500, 'g'], ['lait-coco', 40, 'cl'], ['tomates-concassees', 400, 'g'], ['oignons', 1], ['ail', 2],
    ['gingembre', 10, 'g', 'opt'], ['curry', 2, 'cc'], ['cumin', 1, 'cc', 'opt'], ['huile', 2, 'cs'],
    ['coriandre', 0.25, 'pc', 'opt'], ['sel', null]
  ], [
    'Faire revenir l’oignon haché dans l’huile, ajouter l’ail, le gingembre et les épices. Cuire 1 min.',
    'Ajouter les tomates et laisser réduire 5 min.',
    'Ajouter les pois chiches et le lait de coco, mijoter 15 min. Saler.',
    'Parsemer de coriandre et servir avec du riz.'
  ]);

  R('dal-lentilles-corail', 'Dal de lentilles corail', 'Indienne', 'Plat', 30, 'Facile', 4, [
    ['lentilles-corail', 250, 'g'], ['lait-coco', 20, 'cl'], ['tomates-concassees', 200, 'g'], ['oignons', 1], ['ail', 2],
    ['gingembre', 10, 'g', 'opt'], ['curcuma', 1, 'cc'], ['cumin', 1, 'cc'], ['garam-masala', 1, 'cc', 'opt'],
    ['huile', 2, 'cs'], ['citron', 0.5, 'pc', 'opt'], ['sel', null]
  ], [
    'Faire revenir l’oignon dans l’huile, ajouter l’ail, le gingembre et les épices.',
    'Ajouter les lentilles rincées, les tomates et 60 cl d’eau.',
    'Cuire 20 min en remuant : les lentilles doivent se défaire.',
    'Ajouter le lait de coco, saler et finir avec un filet de citron.'
  ]);

  R('poulet-coco-curry', 'Poulet coco-curry', 'Indienne', 'Plat', 35, 'Facile', 4, [
    ['poulet', 600, 'g'], ['lait-coco', 40, 'cl'], ['oignons', 1], ['ail', 2], ['gingembre', 10, 'g', 'opt'],
    ['curry', 2, 'cc'], ['tomates', 2, 'pc', 'opt'], ['huile', 2, 'cs'], ['coriandre', 0.25, 'pc', 'opt'], ['sel', null]
  ], [
    'Faire dorer le poulet en morceaux dans l’huile. Réserver.',
    'Faire revenir l’oignon, l’ail, le gingembre et le curry 2 min.',
    'Ajouter les tomates en dés et le lait de coco, remettre le poulet.',
    'Mijoter 20 min. Parsemer de coriandre, servir avec du riz basmati.'
  ]);

  R('butter-chicken', 'Butter chicken', 'Indienne', 'Plat', 50, 'Moyenne', 4, [
    ['poulet', 600, 'g'], ['yaourt', 1], ['tomates-concassees', 400, 'g'], ['creme-liquide', 15, 'cl'], ['beurre', 40, 'g'],
    ['oignons', 1], ['ail', 3], ['gingembre', 15, 'g'], ['garam-masala', 2, 'cc'], ['curcuma', 0.5, 'cc'],
    ['piment', 1, 'pincee', 'opt'], ['sel', null]
  ], [
    'Mariner le poulet en morceaux avec le yaourt, 1 cuillère de garam masala, le curcuma et le sel, au moins 30 min.',
    'Faire griller le poulet à la poêle bien chaude. Réserver.',
    'Faire fondre le beurre, y cuire l’oignon, l’ail et le gingembre, puis le reste du garam masala et le piment.',
    'Ajouter les tomates, cuire 10 min puis mixer.',
    'Ajouter la crème et le poulet, mijoter 10 min. Servir avec du riz ou des naans.'
  ]);

  R('aloo-gobi', 'Aloo gobi (pommes de terre et chou-fleur)', 'Indienne', 'Plat', 40, 'Facile', 4, [
    ['pommes-de-terre', 500, 'g'], ['chou-fleur', 1], ['oignons', 1], ['tomates', 2], ['ail', 2],
    ['gingembre', 10, 'g', 'opt'], ['curcuma', 1, 'cc'], ['cumin', 1, 'cc'], ['garam-masala', 1, 'cc', 'opt'],
    ['huile', 3, 'cs'], ['coriandre', 0.25, 'pc', 'opt'], ['sel', null]
  ], [
    'Faire revenir le cumin dans l’huile, puis l’oignon, l’ail et le gingembre.',
    'Ajouter les pommes de terre en cubes et le chou-fleur en petits bouquets, puis le curcuma et le sel.',
    'Ajouter les tomates en dés et un fond d’eau, couvrir et cuire 25 min à feu doux.',
    'Finir avec le garam masala et la coriandre.'
  ]);

  /* ───────────── Chinoise ───────────── */

  R('riz-saute-oeufs', 'Riz sauté aux œufs', 'Chinoise', 'Plat', 20, 'Facile', 3, [
    ['riz', 250, 'g'], ['oeufs', 3], ['ciboule', 1], ['sauce-soja', 2, 'cs'], ['huile', 2, 'cs'],
    ['huile-sesame', 1, 'cc', 'opt'], ['sel', null]
  ], [
    'Cuire le riz la veille ou plusieurs heures avant : un riz froid saute mieux.',
    'Brouiller les œufs dans l’huile très chaude, puis les réserver.',
    'Faire sauter le riz 3 min à feu vif, ajouter la sauce soja.',
    'Remettre les œufs, ajouter la ciboule émincée et l’huile de sésame.'
  ]);

  R('riz-cantonais', 'Riz cantonais', 'Chinoise', 'Plat', 25, 'Facile', 4, [
    ['riz', 300, 'g'], ['oeufs', 3], ['jambon', 3], ['petits-pois', 150, 'g'], ['crevettes', 150, 'g', 'opt'],
    ['ciboule', 0.5, 'pc', 'opt'], ['sauce-soja', 3, 'cs'], ['huile', 3, 'cs']
  ], [
    'Utiliser du riz cuit refroidi.',
    'Faire une omelette fine, la rouler et la couper en lanières.',
    'Faire sauter les petits pois, le jambon en dés et les crevettes 3 min à feu vif.',
    'Ajouter le riz et la sauce soja, sauter 3 min. Ajouter l’omelette et la ciboule.'
  ]);

  R('poulet-cajou', 'Poulet aux noix de cajou', 'Chinoise', 'Plat', 30, 'Facile', 4, [
    ['poulet', 600, 'g'], ['cajou', 80, 'g'], ['poivrons', 1], ['oignons', 1], ['ail', 2], ['gingembre', 10, 'g', 'opt'],
    ['sauce-soja', 3, 'cs'], ['sauce-huitre', 2, 'cs', 'opt'], ['maizena', 10, 'g'], ['sucre', 5, 'g'], ['huile', 2, 'cs']
  ], [
    'Couper le poulet en dés et l’enrober de maïzena et d’une cuillère de sauce soja.',
    'Faire griller les noix de cajou à sec. Réserver.',
    'Saisir le poulet à feu vif dans l’huile, 5 min. Réserver.',
    'Faire sauter l’oignon, le poivron, l’ail et le gingembre 3 min.',
    'Remettre le poulet, ajouter le reste de sauce soja, la sauce d’huître, le sucre et 5 cl d’eau. Ajouter les noix de cajou.'
  ]);

  R('boeuf-oignons', 'Bœuf sauté aux oignons', 'Chinoise', 'Plat', 25, 'Facile', 4, [
    ['boeuf-poeler', 500, 'g'], ['oignons', 3], ['ail', 2], ['gingembre', 10, 'g', 'opt'], ['sauce-soja', 3, 'cs'],
    ['sauce-huitre', 2, 'cs', 'opt'], ['maizena', 10, 'g'], ['sucre', 5, 'g'], ['huile', 3, 'cs']
  ], [
    'Couper le bœuf en fines lamelles et le mariner 15 min avec la maïzena et une cuillère de sauce soja.',
    'Saisir le bœuf 2 min à feu très vif dans l’huile. Réserver.',
    'Faire sauter les oignons en quartiers avec l’ail et le gingembre, 4 min.',
    'Remettre le bœuf avec le reste des sauces et le sucre, 1 min. Servir avec du riz.'
  ]);

  R('nouilles-sautees', 'Nouilles sautées aux légumes', 'Chinoise', 'Plat', 25, 'Facile', 4, [
    ['nouilles', 300, 'g'], ['carottes', 2], ['poivrons', 1], ['chou', 0.25, 'pc', 'opt'], ['germes-soja', 150, 'g', 'opt'],
    ['oignons', 1], ['ail', 2], ['sauce-soja', 4, 'cs'], ['sauce-huitre', 1, 'cs', 'opt'], ['huile', 3, 'cs']
  ], [
    'Cuire les nouilles selon le paquet, les égoutter et les rincer à l’eau froide.',
    'Couper tous les légumes en fines lanières.',
    'Les faire sauter 4 min à feu vif dans l’huile avec l’ail.',
    'Ajouter les nouilles et les sauces, sauter 2 min.'
  ]);

  /* ───────────── Japonaise ───────────── */

  R('poulet-teriyaki', 'Poulet teriyaki', 'Japonaise', 'Plat', 30, 'Facile', 4, [
    ['poulet', 600, 'g'], ['sauce-soja', 4, 'cs'], ['miel', 2, 'cs'], ['vinaigre-riz', 1, 'cs'], ['gingembre', 10, 'g', 'opt'],
    ['ail', 1], ['graines-sesame', 1, 'cs', 'opt'], ['huile', 1, 'cs'], ['riz', 300, 'g']
  ], [
    'Mélanger la sauce soja, le miel, le vinaigre, l’ail et le gingembre râpés.',
    'Faire dorer le poulet en morceaux dans l’huile, 6 min.',
    'Verser la sauce et laisser réduire jusqu’à ce qu’elle nappe le poulet.',
    'Parsemer de sésame et servir sur du riz.'
  ]);

  R('oyakodon', 'Oyakodon (bol de riz poulet et œufs)', 'Japonaise', 'Plat', 30, 'Facile', 2, [
    ['riz', 200, 'g'], ['poulet', 250, 'g'], ['oeufs', 3], ['oignons', 1], ['sauce-soja', 3, 'cs'], ['sucre', 10, 'g'],
    ['bouillon', 1], ['ciboule', 0.25, 'pc', 'opt']
  ], [
    'Cuire le riz.',
    'Dans une petite poêle, porter à frémissement 20 cl de bouillon avec la sauce soja et le sucre.',
    'Ajouter l’oignon émincé et le poulet en petits morceaux, cuire 8 min.',
    'Verser les œufs légèrement battus, couvrir et cuire 1 min : ils doivent rester baveux.',
    'Glisser sur le riz et parsemer de ciboule.'
  ]);

  R('okonomiyaki', 'Okonomiyaki', 'Japonaise', 'Plat', 30, 'Facile', 2, [
    ['chou', 0.25], ['farine', 100, 'g'], ['oeufs', 2], ['lardons', 100, 'g', 'opt'], ['ciboule', 0.5, 'pc', 'opt'],
    ['sauce-soja', 1, 'cs'], ['huile', 1, 'cs']
  ], [
    'Émincer très finement le chou.',
    'Mélanger la farine, les œufs et 10 cl d’eau, puis ajouter le chou et la ciboule.',
    'Verser dans une poêle huilée, poser les lardons dessus et cuire 5 min de chaque côté à feu moyen.',
    'Servir avec de la mayonnaise et une sauce soja un peu sucrée.'
  ]);

  R('soupe-miso', 'Soupe miso', 'Japonaise', 'Soupe', 15, 'Facile', 4, [
    ['miso', 3, 'cs'], ['tofu', 150, 'g'], ['ciboule', 0.5], ['champignons', 80, 'g', 'opt']
  ], [
    'Porter 1 L d’eau à frémissement (idéalement du dashi).',
    'Ajouter le tofu en petits cubes et les champignons émincés, 3 min.',
    'Hors du feu, délayer le miso dans une louche de bouillon et l’ajouter : il ne doit pas bouillir.',
    'Parsemer de ciboule.'
  ]);

  /* ───────────── Thaïlandaise ───────────── */

  R('pad-thai', 'Pad thaï', 'Thaïlandaise', 'Plat', 30, 'Moyenne', 4, [
    ['nouilles-riz', 250, 'g'], ['crevettes', 250, 'g'], ['oeufs', 2], ['germes-soja', 150, 'g'], ['cacahuetes', 50, 'g'],
    ['ciboule', 0.5], ['ail', 2], ['sauce-poisson', 3, 'cs'], ['sucre', 20, 'g'], ['citron-vert', 1],
    ['tofu', 100, 'g', 'opt'], ['huile', 3, 'cs']
  ], [
    'Faire tremper les nouilles 10 min dans l’eau tiède et les égoutter.',
    'Mélanger la sauce poisson, le sucre et le jus d’un demi citron vert.',
    'Faire sauter l’ail et les crevettes (et le tofu) 2 min dans l’huile, pousser sur le côté et brouiller les œufs.',
    'Ajouter les nouilles et la sauce, sauter 3 min.',
    'Ajouter les pousses de soja et la ciboule. Servir avec les cacahuètes concassées et des quartiers de citron vert.'
  ]);

  R('curry-vert-poulet', 'Curry vert au poulet', 'Thaïlandaise', 'Plat', 30, 'Facile', 4, [
    ['poulet', 500, 'g'], ['pate-curry-verte', 2, 'cs'], ['lait-coco', 40, 'cl'], ['courgettes', 1], ['aubergines', 1, 'pc', 'opt'],
    ['sauce-poisson', 1, 'cs'], ['sucre', 5, 'g'], ['basilic', 0.5, 'pc', 'opt'], ['huile', 1, 'cs']
  ], [
    'Faire revenir la pâte de curry dans l’huile avec un peu de lait de coco, 2 min.',
    'Ajouter le poulet en lamelles et le faire cuire 5 min.',
    'Ajouter le reste du lait de coco, les légumes en morceaux, la sauce poisson et le sucre.',
    'Mijoter 12 min. Ajouter le basilic et servir avec du riz.'
  ]);

  R('curry-rouge-crevettes', 'Curry rouge aux crevettes', 'Thaïlandaise', 'Plat', 25, 'Facile', 4, [
    ['crevettes', 400, 'g'], ['pate-curry-rouge', 2, 'cs'], ['lait-coco', 40, 'cl'], ['poivrons', 1],
    ['sauce-poisson', 1, 'cs'], ['citron-vert', 1, 'pc', 'opt'], ['coriandre', 0.25, 'pc', 'opt'], ['huile', 1, 'cs']
  ], [
    'Faire revenir la pâte de curry dans l’huile, 1 min.',
    'Ajouter le lait de coco et le poivron en lanières, mijoter 8 min.',
    'Ajouter les crevettes et la sauce poisson, cuire 3 min.',
    'Finir avec un filet de citron vert et la coriandre.'
  ]);

  R('tom-kha-kai', 'Soupe tom kha kaï', 'Thaïlandaise', 'Soupe', 30, 'Facile', 4, [
    ['poulet', 300, 'g'], ['lait-coco', 40, 'cl'], ['champignons', 150, 'g'], ['citronnelle', 2, 'pc', 'opt'],
    ['gingembre', 20, 'g'], ['citron-vert', 2], ['sauce-poisson', 2, 'cs'], ['bouillon', 1], ['coriandre', 0.25, 'pc', 'opt']
  ], [
    'Porter à frémissement 50 cl de bouillon avec le lait de coco, le gingembre en lamelles et la citronnelle écrasée.',
    'Ajouter le poulet en fines lamelles et les champignons, cuire 10 min.',
    'Hors du feu, ajouter le jus des citrons verts et la sauce poisson. Goûter et ajuster.',
    'Parsemer de coriandre.'
  ]);

  /* ───────────── Vietnamienne, coréenne ───────────── */

  R('bo-bun', 'Bò bún', 'Vietnamienne', 'Plat', 40, 'Moyenne', 4, [
    ['nouilles-riz', 250, 'g'], ['boeuf-poeler', 400, 'g'], ['carottes', 2], ['concombre', 0.5], ['salade', 0.5],
    ['germes-soja', 100, 'g', 'opt'], ['cacahuetes', 50, 'g'], ['menthe', 0.5], ['coriandre', 0.5, 'pc', 'opt'],
    ['oignons', 1], ['ail', 2], ['sauce-poisson', 5, 'cs'], ['sucre', 40, 'g'], ['citron-vert', 1], ['huile', 2, 'cs']
  ], [
    'Sauce : mélanger la sauce poisson, le sucre, le jus du citron vert, une gousse d’ail hachée et 10 cl d’eau.',
    'Cuire les vermicelles selon le paquet, les rincer à l’eau froide.',
    'Mariner le bœuf en lamelles avec l’autre gousse d’ail et un peu de sauce, puis le saisir avec l’oignon à feu vif.',
    'Dans chaque bol : salade, vermicelles, carottes râpées, concombre, herbes, bœuf chaud et cacahuètes. Arroser de sauce.'
  ]);

  R('rouleaux-printemps', 'Rouleaux de printemps', 'Vietnamienne', 'Entrée', 40, 'Moyenne', 4, [
    ['galettes-riz', 12], ['crevettes', 200, 'g'], ['nouilles-riz', 100, 'g'], ['salade', 0.5], ['carottes', 2],
    ['menthe', 0.5], ['coriandre', 0.5, 'pc', 'opt'], ['sauce-poisson', 2, 'cs', 'opt']
  ], [
    'Cuire et refroidir les vermicelles. Râper les carottes.',
    'Tremper une galette 5 s dans l’eau tiède et la poser sur un torchon humide.',
    'Garnir de salade, vermicelles, carottes, herbes et crevettes coupées en deux.',
    'Rouler serré en rabattant les côtés. Servir avec une sauce nuoc-mâm ou cacahuète.'
  ]);

  R('porc-caramel', 'Porc au caramel', 'Vietnamienne', 'Plat', 60, 'Facile', 4, [
    ['porc-epaule', 700, 'g'], ['sucre', 60, 'g'], ['sauce-poisson', 4, 'cs'], ['oignons', 1], ['ail', 3],
    ['ciboule', 0.25, 'pc', 'opt'], ['huile', 1, 'cs']
  ], [
    'Faire un caramel brun avec le sucre et 2 cuillères d’eau.',
    'Ajouter hors du feu la sauce poisson (attention aux projections), puis l’oignon et l’ail.',
    'Ajouter le porc en cubes, bien l’enrober et couvrir d’eau à mi-hauteur.',
    'Mijoter 45 min à découvert jusqu’à ce que la sauce soit sirupeuse. Servir avec du riz et la ciboule.'
  ]);

  R('bibimbap', 'Bibimbap', 'Coréenne', 'Plat', 45, 'Moyenne', 4, [
    ['riz', 300, 'g'], ['boeuf-hache', 300, 'g'], ['epinards', 200, 'g'], ['carottes', 2], ['courgettes', 1],
    ['germes-soja', 150, 'g', 'opt'], ['oeufs', 4], ['gochujang', 2, 'cs'], ['sauce-soja', 3, 'cs'], ['ail', 2],
    ['huile-sesame', 2, 'cs'], ['graines-sesame', 1, 'cs', 'opt'], ['huile', 2, 'cs']
  ], [
    'Cuire le riz.',
    'Faire revenir le bœuf avec l’ail et la sauce soja.',
    'Faire sauter séparément chaque légume (carottes et courgettes en bâtonnets, épinards, pousses de soja) avec un peu d’huile de sésame.',
    'Cuire les œufs au plat.',
    'Dans chaque bol, poser le riz, les légumes en couronne, la viande et l’œuf. Servir avec le gochujang et le sésame.'
  ]);

  /* ───────────── Mexicaine, américaine ───────────── */

  R('chili-con-carne', 'Chili con carne', 'Mexicaine', 'Plat', 60, 'Facile', 4, [
    ['boeuf-hache', 500, 'g'], ['haricots-rouges', 500, 'g'], ['tomates-concassees', 400, 'g'], ['oignons', 1],
    ['poivrons', 1], ['ail', 2], ['cumin', 1, 'cc'], ['paprika', 1, 'cc'], ['piment', 2, 'pincee'],
    ['concentre-tomate', 1, 'cs', 'opt'], ['huile', 2, 'cs'], ['sel', null]
  ], [
    'Faire revenir l’oignon, le poivron et l’ail dans l’huile.',
    'Ajouter la viande et les épices, cuire 5 min.',
    'Ajouter les tomates, le concentré et 15 cl d’eau. Mijoter 30 min.',
    'Ajouter les haricots rouges égouttés, cuire encore 10 min. Servir avec du riz.'
  ]);

  R('fajitas-poulet', 'Fajitas au poulet', 'Mexicaine', 'Plat', 30, 'Facile', 4, [
    ['tortillas', 8], ['poulet', 500, 'g'], ['poivrons', 2], ['oignons', 1], ['paprika', 1, 'cc'], ['cumin', 1, 'cc'],
    ['citron-vert', 1], ['avocat', 1, 'pc', 'opt'], ['creme-fraiche', 10, 'cl', 'opt'], ['huile', 2, 'cs'], ['sel', null]
  ], [
    'Couper le poulet en lanières, les mariner avec les épices, le jus de citron vert et l’huile.',
    'Saisir le poulet à feu vif 5 min, ajouter les poivrons et l’oignon en lanières, cuire 5 min.',
    'Réchauffer les tortillas.',
    'Garnir chaque tortilla de poulet, de légumes, d’avocat et de crème.'
  ]);

  R('guacamole', 'Guacamole', 'Mexicaine', 'Entrée', 10, 'Facile', 4, [
    ['avocat', 3], ['citron-vert', 1], ['oignon-rouge', 0.5], ['tomates', 1, 'pc', 'opt'], ['coriandre', 0.25, 'pc', 'opt'],
    ['piment', 1, 'pincee', 'opt'], ['sel', null]
  ], [
    'Écraser la chair des avocats à la fourchette avec le jus de citron vert.',
    'Ajouter l’oignon finement haché, la tomate en petits dés, la coriandre et le piment.',
    'Saler et servir aussitôt.'
  ]);

  R('burgers-maison', 'Burgers maison', 'Américaine', 'Plat', 30, 'Facile', 4, [
    ['pain-burger', 4], ['boeuf-hache', 600, 'g'], ['cheddar', 4], ['tomates', 1], ['salade', 0.25],
    ['oignon-rouge', 1], ['moutarde', 1, 'cs', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Former 4 steaks de 150 g sans trop tasser la viande.',
    'Les cuire à la poêle bien chaude 3 min de chaque côté. Saler, poivrer, poser le cheddar à la fin.',
    'Toaster les pains.',
    'Monter les burgers avec la sauce, la salade, la tomate, l’oignon et la viande.'
  ]);

  R('pancakes', 'Pancakes', 'Américaine', 'Dessert', 25, 'Facile', 4, [
    ['farine', 250, 'g'], ['oeufs', 2], ['lait', 30, 'cl'], ['sucre', 30, 'g'], ['levure-chimique', 1], ['beurre', 40, 'g'],
    ['sel', 1, 'pincee']
  ], [
    'Mélanger la farine, la levure, le sucre et le sel.',
    'Ajouter les œufs, le lait puis le beurre fondu. La pâte doit être épaisse.',
    'Cuire des petites louches dans une poêle légèrement beurrée. Retourner quand des bulles apparaissent.'
  ]);

  R('cookies', 'Cookies aux pépites de chocolat', 'Américaine', 'Dessert', 30, 'Facile', 6, [
    ['farine', 200, 'g'], ['beurre', 100, 'g'], ['sucre', 100, 'g'], ['oeufs', 1], ['chocolat-noir', 100, 'g'],
    ['levure-chimique', 0.5], ['sucre-vanille', 1, 'pc', 'opt'], ['sel', 1, 'pincee']
  ], [
    'Préchauffer le four à 180 °C.',
    'Mélanger le beurre mou avec le sucre, puis ajouter l’œuf.',
    'Ajouter la farine, la levure, le sel, puis le chocolat en morceaux.',
    'Former des boules, les aplatir sur une plaque et cuire 10 à 12 min : ils doivent rester mous au centre.'
  ]);

require('./recettes-supplementaires')(R);

module.exports = recettes;
