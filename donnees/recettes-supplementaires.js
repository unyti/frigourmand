/* Recettes ajoutées en 0.3. Même format que recettes.js :
   R(id, nom, cuisine, type, minutes, difficulté, personnes, ingrédients, étapes)
   Types : Entrée | Plat | Dessert */
'use strict';

module.exports = function ajouter(R) {
  /* ───────────── Française : plats ───────────── */

  R('coq-au-vin', 'Coq au vin', 'Française', 'Plat', 180, 'Moyenne', 6, [
    ['cuisses-poulet', 6], ['vin-rouge', 75, 'cl'], ['lardons', 150, 'g'], ['champignons', 250, 'g'], ['oignons', 2],
    ['carottes', 2], ['ail', 2], ['farine', 30, 'g'], ['bouquet-garni', 1], ['beurre', 30, 'g'], ['cognac', 4, 'cl', 'opt'],
    ['sel', null], ['poivre', null]
  ], [
    'Faire dorer les cuisses de poulet dans le beurre, dans une cocotte. Flamber au cognac si vous en avez. Réserver.',
    'Faire revenir les lardons, les oignons émincés et les carottes en rondelles.',
    'Remettre le poulet, saupoudrer de farine et remuer 2 min.',
    'Verser le vin, ajouter l’ail et le bouquet garni. Couvrir et mijoter 2 h à feu doux.',
    'Ajouter les champignons 20 min avant la fin. Saler et poivrer.'
  ]);

  R('poulet-vallee-auge', 'Poulet vallée d’Auge', 'Française', 'Plat', 60, 'Facile', 4, [
    ['cuisses-poulet', 4], ['cidre', 25, 'cl'], ['pommes', 2], ['champignons', 200, 'g'], ['creme-fraiche', 20, 'cl'],
    ['echalotes', 2], ['beurre', 30, 'g'], ['cognac', 3, 'cl', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Faire dorer le poulet dans le beurre avec les échalotes émincées.',
    'Déglacer au cidre (et au calvados ou cognac), couvrir et cuire 35 min.',
    'Ajouter les champignons et les pommes en quartiers, cuire 10 min.',
    'Incorporer la crème, laisser épaissir 5 min. Saler et poivrer.'
  ]);

  R('lapin-moutarde', 'Lapin à la moutarde', 'Française', 'Plat', 75, 'Facile', 4, [
    ['lapin', 1200, 'g'], ['moutarde', 4, 'cs'], ['creme-fraiche', 20, 'cl'], ['vin-blanc', 20, 'cl'], ['echalotes', 3],
    ['thym', 2, 'pc', 'opt'], ['beurre', 30, 'g'], ['sel', null], ['poivre', null]
  ], [
    'Badigeonner les morceaux de lapin de 3 cuillères de moutarde.',
    'Les faire dorer dans le beurre avec les échalotes émincées.',
    'Verser le vin blanc, ajouter le thym, couvrir et cuire 45 min à feu doux.',
    'Ajouter la crème mélangée au reste de moutarde, laisser réduire 5 min.'
  ]);

  R('magret-pommes-sarladaises', 'Magret de canard et pommes sarladaises', 'Française', 'Plat', 50, 'Moyenne', 4, [
    ['magrets-de-canard', 2], ['pommes-de-terre', 800, 'g'], ['ail', 2], ['persil', 0.5, 'pc', 'opt'], ['miel', 1, 'cs', 'opt'],
    ['sel', null], ['poivre', null]
  ], [
    'Quadriller la peau des magrets sans entailler la chair.',
    'Les cuire côté peau 8 min à feu moyen en retirant la graisse au fur et à mesure (la garder), puis 4 min côté chair. Laisser reposer 5 min sous aluminium.',
    'Faire dorer les pommes de terre en rondelles dans 3 cuillères de graisse de canard, 20 min.',
    'Ajouter l’ail et le persil hachés en fin de cuisson. Trancher les magrets, napper d’un filet de miel si vous le souhaitez.'
  ]);

  R('canard-orange', 'Magret de canard à l’orange', 'Française', 'Plat', 45, 'Moyenne', 4, [
    ['magrets-de-canard', 2], ['oranges', 3], ['sucre', 30, 'g'], ['vinaigre', 2, 'cs'], ['fond-de-veau', 10, 'g', 'opt'],
    ['sel', null], ['poivre', null]
  ], [
    'Cuire les magrets comme d’habitude : 8 min côté peau, 4 min côté chair. Laisser reposer.',
    'Faire un caramel blond avec le sucre, déglacer avec le vinaigre puis le jus de 2 oranges.',
    'Ajouter le fond de veau délayé dans un peu d’eau et laisser réduire jusqu’à ce que la sauce nappe.',
    'Servir les magrets tranchés avec la sauce et des suprêmes de la dernière orange.'
  ]);

  R('filet-mignon-moutarde', 'Filet mignon à la moutarde', 'Française', 'Plat', 40, 'Facile', 4, [
    ['filet-mignon-de-porc', 600, 'g'], ['moutarde-a-l-ancienne', 2, 'cs'], ['creme-fraiche', 20, 'cl'], ['echalotes', 2],
    ['vin-blanc', 10, 'cl', 'opt'], ['beurre', 20, 'g'], ['sel', null], ['poivre', null]
  ], [
    'Faire dorer le filet mignon entier dans le beurre sur toutes les faces.',
    'Ajouter les échalotes émincées, déglacer au vin blanc, couvrir et cuire 20 min à feu doux.',
    'Retirer la viande, ajouter la crème et la moutarde, laisser épaissir.',
    'Servir le filet en médaillons nappés de sauce.'
  ]);

  R('roti-porc', 'Rôti de porc aux pommes de terre', 'Française', 'Plat', 90, 'Facile', 6, [
    ['roti-de-porc', 1200, 'g'], ['pommes-de-terre', 1000, 'g'], ['oignons', 2], ['ail', 4], ['thym', 2, 'pc', 'opt'],
    ['beurre', 30, 'g'], ['vin-blanc', 10, 'cl', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Préchauffer le four à 180 °C. Faire dorer le rôti sur toutes les faces dans le beurre.',
    'Le poser dans un plat entouré des pommes de terre en quartiers, des oignons et de l’ail en chemise.',
    'Arroser de vin blanc et d’un verre d’eau, ajouter le thym, saler et poivrer.',
    'Cuire 1 h 15 en arrosant régulièrement.'
  ]);

  R('roti-boeuf', 'Rôti de bœuf', 'Française', 'Plat', 50, 'Moyenne', 6, [
    ['roti-de-boeuf', 1000, 'g'], ['beurre', 20, 'g'], ['huile', 1, 'cs'], ['ail', 3, 'pc', 'opt'], ['thym', 2, 'pc', 'opt'],
    ['sel', null], ['poivre', null]
  ], [
    'Sortir le rôti du frigo 1 h avant. Préchauffer le four à 220 °C.',
    'Le saisir sur toutes les faces dans l’huile et le beurre.',
    'L’enfourner avec l’ail et le thym : 15 min par livre pour une cuisson saignante.',
    'Laisser reposer 10 min sous aluminium avant de trancher. Saler au moment de servir.'
  ]);

  R('gigot-agneau', 'Gigot d’agneau aux flageolets', 'Française', 'Plat', 110, 'Moyenne', 8, [
    ['gigot-d-agneau', 2000, 'g'], ['ail', 6], ['romarin-frais', 2, 'pc', 'opt'], ['flageolets', 500, 'g', 'opt'],
    ['huile-olive', 3, 'cs'], ['beurre', 30, 'g'], ['sel', null], ['poivre', null]
  ], [
    'Sortir le gigot 1 h avant. Préchauffer le four à 210 °C.',
    'Piquer le gigot de gousses d’ail coupées en deux, le masser d’huile, de sel et de poivre.',
    'Le cuire 15 min par livre avec le romarin, en l’arrosant.',
    'Laisser reposer 15 min. Servir avec des flageolets réchauffés dans le jus de cuisson.'
  ]);

  R('choucroute-garnie', 'Choucroute garnie', 'Française', 'Plat', 150, 'Facile', 6, [
    ['choucroute-crue', 1500, 'g'], ['saucisses-de-strasbourg', 6], ['saucisse-de-morteau', 1], ['poitrine-de-porc', 500, 'g'],
    ['pommes-de-terre', 800, 'g'], ['vin-blanc', 25, 'cl'], ['oignons', 1], ['laurier', 2], ['clous-de-girofle', 2, 'pc', 'opt'],
    ['poivre', null]
  ], [
    'Rincer la choucroute et bien l’égoutter.',
    'Faire fondre l’oignon émincé dans une grande cocotte, ajouter la choucroute, le vin, le laurier, les clous de girofle et 20 cl d’eau.',
    'Enfouir la poitrine et la saucisse de Morteau, couvrir et cuire 1 h 30 à feu doux.',
    'Ajouter les pommes de terre épluchées 30 min avant la fin, puis les saucisses de Strasbourg 10 min avant.'
  ]);

  R('raclette', 'Raclette', 'Française', 'Plat', 40, 'Facile', 4, [
    ['fromage-a-raclette', 800, 'g'], ['pommes-de-terre', 1200, 'g'], ['jambon-cru', 8], ['jambon', 4, 'pc', 'opt'],
    ['saucisson-sec', 150, 'g', 'opt'], ['cornichons', 100, 'g', 'opt']
  ], [
    'Cuire les pommes de terre dans leur peau 25 min à l’eau salée.',
    'Disposer la charcuterie et les cornichons sur un plat.',
    'Faire fondre le fromage dans l’appareil à raclette et le verser sur les pommes de terre.'
  ]);

  R('fondue-savoyarde', 'Fondue savoyarde', 'Française', 'Plat', 30, 'Moyenne', 4, [
    ['comte', 300, 'g'], ['beaufort', 300, 'g'], ['emmental', 200, 'g'], ['vin-blanc', 30, 'cl'], ['ail', 1],
    ['baguette', 2], ['maizena', 10, 'g', 'opt'], ['poivre', null]
  ], [
    'Couper le pain en cubes la veille ou quelques heures avant, pour qu’il sèche un peu.',
    'Frotter le caquelon avec l’ail, y chauffer le vin blanc.',
    'Ajouter les fromages coupés en petits dés, par poignées, en remuant en huit jusqu’à ce qu’ils fondent.',
    'Lier avec la maïzena délayée dans un peu de vin si besoin. Poivrer et servir sur le réchaud.'
  ]);

  R('aligot', 'Aligot', 'Française', 'Plat', 50, 'Moyenne', 4, [
    ['pommes-de-terre', 1000, 'g'], ['tomme', 400, 'g'], ['creme-fraiche', 20, 'cl'], ['beurre', 50, 'g'], ['ail', 1],
    ['sel', null], ['poivre', null]
  ], [
    'Cuire les pommes de terre 25 min à l’eau salée avec l’ail.',
    'Les écraser en purée avec le beurre et la crème, sur feu doux.',
    'Ajouter la tomme en fines lamelles et travailler vigoureusement à la spatule jusqu’à ce que la purée file.',
    'Servir aussitôt, avec des saucisses par exemple.'
  ]);

  R('parmentier-canard', 'Parmentier de canard', 'Française', 'Plat', 75, 'Facile', 6, [
    ['confit-canard', 4], ['pommes-de-terre', 1200, 'g'], ['echalotes', 3], ['lait', 25, 'cl'], ['beurre', 40, 'g'],
    ['chapelure', 20, 'g', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Réchauffer les cuisses de canard, retirer la peau et effilocher la chair.',
    'Faire revenir les échalotes émincées dans un peu de graisse de canard, ajouter la chair.',
    'Préparer une purée avec les pommes de terre, le lait chaud et le beurre.',
    'Préchauffer le four à 200 °C. Étaler le canard, couvrir de purée, parsemer de chapelure et gratiner 20 min.'
  ]);

  R('escalopes-dinde-creme', 'Escalopes de dinde à la crème', 'Française', 'Plat', 30, 'Facile', 4, [
    ['escalopes-de-dinde', 4], ['champignons', 250, 'g'], ['creme-fraiche', 20, 'cl'], ['echalotes', 1], ['beurre', 20, 'g'],
    ['vin-blanc', 10, 'cl', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Faire dorer les escalopes 3 min de chaque côté dans le beurre. Réserver.',
    'Faire revenir l’échalote et les champignons émincés, déglacer au vin blanc.',
    'Ajouter la crème, remettre les escalopes et laisser mijoter 5 min.'
  ]);

  R('cordon-bleu', 'Cordons bleus maison', 'Française', 'Plat', 40, 'Moyenne', 4, [
    ['escalopes-de-dinde', 4], ['jambon', 4], ['emmental', 100, 'g'], ['oeufs', 2], ['farine', 50, 'g'], ['chapelure', 100, 'g'],
    ['beurre', 40, 'g'], ['sel', null], ['poivre', null]
  ], [
    'Aplatir les escalopes entre deux feuilles de papier cuisson.',
    'Poser sur chaque moitié une demi-tranche de jambon et du fromage, replier et presser les bords.',
    'Passer dans la farine, l’œuf battu puis la chapelure.',
    'Cuire 6 à 7 min de chaque côté à feu moyen dans le beurre.'
  ]);

  R('potee', 'Potée auvergnate', 'Française', 'Plat', 180, 'Facile', 6, [
    ['chou', 1], ['poitrine-de-porc', 600, 'g'], ['saucisse-de-morteau', 1], ['pommes-de-terre', 800, 'g'], ['carottes', 4],
    ['navets', 3], ['oignons', 1], ['bouquet-garni', 1], ['poivre', null]
  ], [
    'Blanchir le chou coupé en quartiers 5 min à l’eau bouillante.',
    'Mettre la poitrine dans un faitout, couvrir d’eau froide avec l’oignon et le bouquet garni, porter à frémissement 1 h.',
    'Ajouter le chou, les carottes et les navets, cuire 1 h.',
    'Ajouter la saucisse et les pommes de terre, cuire encore 30 min.'
  ]);

  R('petit-sale-lentilles', 'Petit salé aux lentilles', 'Française', 'Plat', 120, 'Facile', 6, [
    ['poitrine-de-porc', 800, 'g'], ['lentilles', 400, 'g'], ['carottes', 2], ['oignons', 1], ['bouquet-garni', 1],
    ['saucisse-de-morteau', 1, 'pc', 'opt'], ['poivre', null]
  ], [
    'Si la poitrine est demi-sel, la faire dessaler 1 h dans l’eau froide.',
    'La cuire 1 h dans l’eau frémissante avec l’oignon et le bouquet garni.',
    'Ajouter les lentilles, les carottes en rondelles et la saucisse, cuire 30 min.',
    'Goûter avant de saler : la viande l’est déjà.'
  ]);

  R('poivrons-farcis', 'Poivrons farcis', 'Française', 'Plat', 75, 'Facile', 4, [
    ['poivrons', 4], ['boeuf-hache', 400, 'g'], ['riz', 100, 'g'], ['oignons', 1], ['tomates-concassees', 400, 'g'], ['ail', 1],
    ['herbes-provence', 1, 'cc'], ['fromage-rape', 50, 'g', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Préchauffer le four à 180 °C. Couper le chapeau des poivrons et les épépiner.',
    'Mélanger la viande avec le riz cru, l’oignon et l’ail hachés, les herbes, sel et poivre.',
    'Farcir les poivrons, les poser dans un plat, verser les tomates autour avec 20 cl d’eau.',
    'Cuire 1 h, parsemer de fromage 10 min avant la fin.'
  ]);

  R('courgettes-farcies', 'Courgettes farcies', 'Française', 'Plat', 60, 'Facile', 4, [
    ['courgettes', 4], ['chair-saucisse', 300, 'g'], ['oignons', 1], ['ail', 1], ['chapelure', 20, 'g'],
    ['parmesan', 30, 'g', 'opt'], ['huile-olive', 2, 'cs'], ['sel', null], ['poivre', null]
  ], [
    'Préchauffer le four à 180 °C. Couper les courgettes en deux et les évider.',
    'Hacher la chair des courgettes et la faire revenir avec l’oignon et l’ail, puis mélanger avec la chair à saucisse.',
    'Garnir les courgettes, parsemer de chapelure et de parmesan, arroser d’huile.',
    'Cuire 40 min.'
  ]);

  R('tomates-provencales', 'Tomates à la provençale', 'Française', 'Plat', 40, 'Facile', 4, [
    ['tomates', 6], ['ail', 2], ['persil', 0.5], ['chapelure', 30, 'g'], ['huile-olive', 3, 'cs'], ['sel', null], ['poivre', null]
  ], [
    'Préchauffer le four à 200 °C. Couper les tomates en deux et les poser dans un plat.',
    'Mélanger l’ail et le persil hachés avec la chapelure.',
    'Parsemer les tomates de ce mélange, saler, poivrer, arroser d’huile d’olive.',
    'Cuire 30 min. Parfait avec une viande grillée ou du riz.'
  ]);

  R('oeufs-meurette', 'Œufs en meurette', 'Française', 'Plat', 45, 'Moyenne', 4, [
    ['oeufs', 8], ['vin-rouge', 50, 'cl'], ['lardons', 150, 'g'], ['echalotes', 3], ['champignons', 150, 'g'], ['beurre', 30, 'g'],
    ['farine', 15, 'g'], ['pain', 8], ['sel', null], ['poivre', null]
  ], [
    'Faire revenir les lardons, les échalotes et les champignons dans la moitié du beurre.',
    'Verser le vin, laisser réduire de moitié, puis lier avec le reste du beurre mélangé à la farine.',
    'Pocher les œufs 3 min dans l’eau frémissante vinaigrée.',
    'Servir les œufs sur les tranches de pain grillées, nappés de sauce.'
  ]);

  R('souffle-fromage', 'Soufflé au fromage', 'Française', 'Plat', 50, 'Moyenne', 4, [
    ['oeufs', 4], ['lait', 25, 'cl'], ['beurre', 40, 'g'], ['farine', 40, 'g'], ['comte', 100, 'g'], ['muscade', 1, 'pincee', 'opt'],
    ['sel', null], ['poivre', null]
  ], [
    'Préchauffer le four à 200 °C. Beurrer un moule à soufflé.',
    'Préparer une béchamel épaisse avec le beurre, la farine et le lait. Hors du feu, ajouter les jaunes et le fromage râpé.',
    'Monter les blancs en neige ferme avec une pincée de sel et les incorporer délicatement.',
    'Remplir le moule aux trois quarts et cuire 25 min sans ouvrir le four. Servir aussitôt.'
  ]);

  R('flamiche-maroilles', 'Tarte au maroilles', 'Française', 'Plat', 50, 'Facile', 6, [
    ['pate-brisee', 1], ['maroilles', 250, 'g'], ['oeufs', 3], ['creme-fraiche', 20, 'cl'], ['lait', 10, 'cl'], ['poivre', null]
  ], [
    'Préchauffer le four à 200 °C. Étaler la pâte dans un moule.',
    'Battre les œufs avec la crème et le lait, poivrer.',
    'Répartir le maroilles en tranches (avec la croûte) sur la pâte et verser l’appareil.',
    'Cuire 30 min.'
  ]);

  R('quiche-saumon-epinards', 'Quiche saumon et épinards', 'Française', 'Plat', 55, 'Facile', 6, [
    ['pate-brisee', 1], ['saumon', 2], ['epinards', 200, 'g'], ['oeufs', 3], ['creme-fraiche', 20, 'cl'], ['lait', 10, 'cl'],
    ['sel', null], ['poivre', null]
  ], [
    'Préchauffer le four à 180 °C. Étaler la pâte dans un moule.',
    'Faire tomber les épinards 2 min dans une poêle et bien les égoutter.',
    'Répartir les épinards et le saumon cru en dés sur la pâte.',
    'Verser les œufs battus avec la crème et le lait. Cuire 35 min.'
  ]);

  R('coquillettes-jambon', 'Coquillettes jambon comté', 'Française', 'Plat', 20, 'Facile', 4, [
    ['pates', 400, 'g'], ['jambon', 4], ['comte', 150, 'g'], ['beurre', 20, 'g'], ['creme-fraiche', 10, 'cl', 'opt'],
    ['sel', null], ['poivre', null]
  ], [
    'Cuire les coquillettes dans l’eau salée.',
    'Les égoutter en gardant un peu d’eau de cuisson.',
    'Remettre dans la casserole avec le beurre, la crème, le jambon en dés et le comté râpé. Mélanger jusqu’à ce que ce soit crémeux.'
  ]);

  R('boulettes-tomate', 'Boulettes de bœuf à la sauce tomate', 'Française', 'Plat', 50, 'Facile', 4, [
    ['boeuf-hache', 500, 'g'], ['oeufs', 1], ['chapelure', 40, 'g'], ['oignons', 1], ['ail', 2], ['tomates-concassees', 800, 'g'],
    ['persil', 0.5, 'pc', 'opt'], ['parmesan', 30, 'g', 'opt'], ['huile-olive', 2, 'cs'], ['sel', null], ['poivre', null]
  ], [
    'Mélanger la viande avec l’œuf, la chapelure, la moitié de l’oignon et de l’ail hachés, le persil et le parmesan.',
    'Former des boulettes et les faire dorer dans l’huile. Réserver.',
    'Faire revenir le reste d’oignon et d’ail, ajouter les tomates et laisser mijoter 10 min.',
    'Ajouter les boulettes et cuire encore 20 min. Servir avec des pâtes ou du riz.'
  ]);

  R('brandade-morue', 'Brandade de morue', 'Française', 'Plat', 90, 'Moyenne', 6, [
    ['morue-salee', 600, 'g'], ['pommes-de-terre', 800, 'g'], ['lait', 30, 'cl'], ['huile-olive', 10, 'cs'], ['ail', 3],
    ['persil', 0.5, 'pc', 'opt'], ['poivre', null]
  ], [
    'Dessaler la morue 24 h dans l’eau froide en changeant l’eau plusieurs fois.',
    'La pocher 10 min dans le lait frémissant, puis l’effeuiller.',
    'Cuire les pommes de terre et les écraser. Mélanger avec la morue, l’ail écrasé, l’huile et un peu de lait de cuisson.',
    'Verser dans un plat et gratiner 20 min à 200 °C.'
  ]);

  R('sole-meuniere', 'Sole meunière', 'Française', 'Plat', 25, 'Moyenne', 2, [
    ['soles', 2], ['beurre', 60, 'g'], ['farine', 30, 'g'], ['citron', 1], ['persil', 0.25, 'pc', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Fariner légèrement les soles, saler et poivrer.',
    'Les cuire 4 à 5 min de chaque côté dans la moitié du beurre, à feu moyen.',
    'Les réserver sur un plat chaud. Faire mousser le reste du beurre, ajouter le jus de citron et le persil.',
    'Napper les soles de ce beurre et servir.'
  ]);

  R('dorade-four', 'Dorade au four', 'Française', 'Plat', 40, 'Facile', 4, [
    ['dorade', 2], ['citron', 1], ['tomates-cerises', 250, 'g'], ['oignons', 1], ['fenouil', 1, 'pc', 'opt'], ['huile-olive', 3, 'cs'],
    ['thym-frais', 2, 'pc', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Préchauffer le four à 200 °C.',
    'Disposer l’oignon et le fenouil émincés dans un plat, poser les dorades vidées et écaillées.',
    'Glisser des rondelles de citron et le thym dans le ventre, ajouter les tomates cerises autour.',
    'Arroser d’huile, saler, poivrer et cuire 25 min.'
  ]);

  R('saint-jacques-poelees', 'Saint-Jacques poêlées', 'Française', 'Plat', 20, 'Moyenne', 4, [
    ['noix-de-saint-jacques', 400, 'g'], ['beurre', 30, 'g'], ['echalotes', 1], ['creme-liquide', 15, 'cl', 'opt'],
    ['persil', 0.25, 'pc', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Sécher les noix sur du papier absorbant.',
    'Les saisir 1 min 30 de chaque côté dans le beurre bien chaud. Réserver.',
    'Faire fondre l’échalote dans la poêle, ajouter la crème et laisser réduire 2 min.',
    'Servir les noix nappées de sauce, avec du riz ou une fondue de poireaux.'
  ]);

  R('colin-beurre-citron', 'Colin au beurre citronné', 'Française', 'Plat', 30, 'Facile', 4, [
    ['colin', 600, 'g'], ['beurre', 60, 'g'], ['echalotes', 2], ['vin-blanc', 10, 'cl'], ['citron', 1], ['riz', 300, 'g', 'opt'],
    ['sel', null], ['poivre', null]
  ], [
    'Cuire le colin 8 min à la vapeur ou au four à 180 °C.',
    'Faire réduire les échalotes hachées avec le vin blanc jusqu’à ce qu’il n’en reste presque plus.',
    'Hors du feu, incorporer le beurre froid en morceaux en fouettant, puis le jus de citron.',
    'Napper le poisson et servir avec du riz.'
  ]);

  R('maquereaux-moutarde', 'Maquereaux au four à la moutarde', 'Française', 'Plat', 35, 'Facile', 4, [
    ['maquereaux', 4], ['moutarde', 2, 'cs'], ['citron', 1], ['pommes-de-terre', 600, 'g', 'opt'], ['huile-olive', 2, 'cs'],
    ['sel', null], ['poivre', null]
  ], [
    'Préchauffer le four à 200 °C.',
    'Badigeonner l’intérieur des maquereaux vidés de moutarde, glisser une rondelle de citron.',
    'Les poser sur un lit de pommes de terre en fines rondelles, arroser d’huile.',
    'Cuire 20 à 25 min.'
  ]);

  R('veloute-champignons', 'Velouté de champignons', 'Française', 'Plat', 35, 'Facile', 4, [
    ['champignons', 500, 'g'], ['oignons', 1], ['bouillon', 1], ['creme-liquide', 20, 'cl'], ['beurre', 20, 'g'], ['sel', null], ['poivre', null]
  ], [
    'Faire fondre l’oignon dans le beurre, ajouter les champignons émincés et cuire 5 min.',
    'Couvrir de 75 cl d’eau, ajouter le bouillon et cuire 20 min.',
    'Mixer avec la crème. Saler et poivrer.'
  ]);

  R('soupe-carottes-cumin', 'Soupe de carottes au cumin', 'Française', 'Plat', 35, 'Facile', 4, [
    ['carottes', 8], ['oignons', 1], ['cumin', 1, 'cc'], ['bouillon', 1], ['huile-olive', 1, 'cs'], ['creme-liquide', 10, 'cl', 'opt'],
    ['sel', null]
  ], [
    'Faire revenir l’oignon et le cumin dans l’huile.',
    'Ajouter les carottes en rondelles, 1 L d’eau et le bouillon. Cuire 25 min.',
    'Mixer, ajouter la crème et rectifier l’assaisonnement.'
  ]);

  R('veloute-brocoli', 'Velouté de brocoli', 'Française', 'Plat', 30, 'Facile', 4, [
    ['brocoli', 2], ['pommes-de-terre', 200, 'g'], ['bouillon', 1], ['creme-liquide', 10, 'cl', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Détailler le brocoli en bouquets et couper la pomme de terre en dés.',
    'Les cuire 20 min dans 1 L d’eau avec le bouillon.',
    'Mixer avec la crème. Saler et poivrer.'
  ]);

  R('veloute-chou-fleur', 'Velouté de chou-fleur', 'Française', 'Plat', 35, 'Facile', 4, [
    ['chou-fleur', 1], ['pommes-de-terre', 200, 'g'], ['bouillon', 1], ['beurre', 20, 'g'], ['creme-liquide', 10, 'cl', 'opt'],
    ['muscade', 1, 'pincee', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Faire revenir le chou-fleur en bouquets dans le beurre, 5 min.',
    'Ajouter la pomme de terre, 1 L d’eau et le bouillon. Cuire 25 min.',
    'Mixer avec la crème, parfumer d’une pincée de muscade.'
  ]);

  R('soupe-courgettes', 'Soupe de courgettes au fromage frais', 'Française', 'Plat', 30, 'Facile', 4, [
    ['courgettes', 4], ['oignons', 1], ['bouillon', 1], ['fromage-frais-aux-herbes', 100, 'g'], ['sel', null], ['poivre', null]
  ], [
    'Couper les courgettes en morceaux et l’oignon en lamelles.',
    'Les cuire 20 min dans 75 cl d’eau avec le bouillon.',
    'Mixer avec le fromage frais. Saler et poivrer.'
  ]);

  R('boeuf-stroganoff', 'Bœuf Stroganoff', 'Russe', 'Plat', 30, 'Facile', 4, [
    ['boeuf-poeler', 600, 'g'], ['champignons', 250, 'g'], ['oignons', 1], ['creme-fraiche', 20, 'cl'], ['paprika', 1, 'cc'],
    ['moutarde', 1, 'cs'], ['beurre', 30, 'g'], ['riz', 300, 'g', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Couper le bœuf en fines lanières et le saisir 2 min à feu vif dans le beurre. Réserver.',
    'Faire revenir l’oignon et les champignons émincés.',
    'Ajouter le paprika, la moutarde et la crème, puis remettre la viande 2 min.',
    'Servir avec du riz.'
  ]);

  /* ───────────── Française : entrées ───────────── */

  R('oeufs-mimosa', 'Œufs mimosa', 'Française', 'Entrée', 20, 'Facile', 6, [
    ['oeufs', 6], ['mayonnaise', 4, 'cs'], ['ciboulette', 0.25, 'pc', 'opt'], ['paprika', 1, 'pincee', 'opt'], ['sel', null]
  ], [
    'Cuire les œufs 10 min dans l’eau bouillante, les refroidir et les écaler.',
    'Les couper en deux, écraser les jaunes avec la mayonnaise.',
    'Garnir les blancs de ce mélange, parsemer de ciboulette et de paprika.'
  ]);

  R('rillettes-thon', 'Rillettes de thon', 'Française', 'Entrée', 10, 'Facile', 4, [
    ['thon-boite', 150, 'g'], ['fromage-frais-a-tartiner', 100, 'g'], ['citron', 0.5], ['ciboulette', 0.25, 'pc', 'opt'], ['poivre', null]
  ], [
    'Écraser le thon égoutté à la fourchette.',
    'Mélanger avec le fromage frais, le jus de citron et la ciboulette ciselée. Poivrer.',
    'Servir frais sur du pain grillé.'
  ]);

  R('salade-endives-roquefort', 'Salade d’endives, noix et roquefort', 'Française', 'Entrée', 15, 'Facile', 4, [
    ['endives', 4], ['roquefort', 100, 'g'], ['cerneaux-de-noix', 50, 'g'], ['pommes', 1, 'pc', 'opt'], ['huile', 3, 'cs'],
    ['vinaigre', 1, 'cs'], ['moutarde', 1, 'cc'], ['poivre', null]
  ], [
    'Émincer les endives et la pomme.',
    'Préparer une vinaigrette avec la moutarde, le vinaigre et l’huile.',
    'Mélanger, parsemer de roquefort émietté et de noix.'
  ]);

  R('piemontaise', 'Salade piémontaise', 'Française', 'Entrée', 40, 'Facile', 6, [
    ['pommes-de-terre', 800, 'g'], ['oeufs', 3], ['tomates', 3], ['jambon', 3], ['cornichons', 50, 'g'], ['mayonnaise', 5, 'cs'],
    ['persil', 0.25, 'pc', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Cuire les pommes de terre 20 min et les œufs 10 min. Laisser refroidir.',
    'Couper les pommes de terre, les tomates, le jambon, les cornichons et les œufs en dés.',
    'Mélanger avec la mayonnaise, saler, poivrer et parsemer de persil. Servir frais.'
  ]);

  R('salade-riz', 'Salade de riz', 'Française', 'Entrée', 30, 'Facile', 6, [
    ['riz', 250, 'g'], ['thon-boite', 150, 'g'], ['tomates', 3], ['mais-doux', 150, 'g'], ['oeufs', 3], ['olives', 50, 'g', 'opt'],
    ['huile', 4, 'cs'], ['vinaigre', 2, 'cs'], ['moutarde', 1, 'cc'], ['sel', null], ['poivre', null]
  ], [
    'Cuire le riz et les œufs, laisser refroidir.',
    'Couper les tomates et les œufs en morceaux, égoutter le thon et le maïs.',
    'Mélanger le tout avec la vinaigrette. Servir frais.'
  ]);

  R('taboule-semoule', 'Taboulé à la semoule', 'Française', 'Entrée', 25, 'Facile', 6, [
    ['semoule', 250, 'g'], ['tomates', 3], ['concombre', 1], ['poivrons', 1], ['menthe', 0.5], ['citron', 2], ['huile-olive', 6, 'cs'],
    ['raisins-secs', 40, 'g', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Mélanger la semoule avec le jus des citrons, l’huile et 20 cl d’eau froide. Laisser gonfler 20 min au frais.',
    'Couper les légumes en petits dés, ciseler la menthe.',
    'Égrainer la semoule, ajouter les légumes, les herbes et les raisins. Saler, poivrer. Servir frais.'
  ]);

  R('salade-pates', 'Salade de pâtes à l’italienne', 'Française', 'Entrée', 25, 'Facile', 4, [
    ['pates', 250, 'g'], ['tomates-cerises', 200, 'g'], ['mozzarella', 125, 'g'], ['olives', 50, 'g'], ['basilic', 0.25, 'pc', 'opt'],
    ['huile-olive', 3, 'cs'], ['vinaigre-balsamique', 1, 'cs'], ['sel', null], ['poivre', null]
  ], [
    'Cuire les pâtes, les rincer à l’eau froide et les égoutter.',
    'Ajouter les tomates coupées en deux, la mozzarella en dés et les olives.',
    'Assaisonner d’huile, de vinaigre balsamique, sel, poivre et basilic.'
  ]);

  R('gougeres', 'Gougères au comté', 'Française', 'Entrée', 50, 'Moyenne', 6, [
    ['farine', 125, 'g'], ['beurre', 80, 'g'], ['oeufs', 4], ['comte', 100, 'g'], ['lait', 12, 'cl'], ['muscade', 1, 'pincee', 'opt'],
    ['sel', 1, 'pincee']
  ], [
    'Préchauffer le four à 200 °C. Porter à ébullition le lait, 12 cl d’eau, le beurre et le sel.',
    'Hors du feu, verser la farine d’un coup et mélanger. Remettre sur feu doux 1 min pour dessécher la pâte.',
    'Incorporer les œufs un à un, puis les deux tiers du comté râpé.',
    'Former des petites boules sur une plaque, parsemer du reste de comté et cuire 25 min sans ouvrir le four.'
  ]);

  /* ───────────── Française : desserts ───────────── */

  R('tarte-tatin', 'Tarte Tatin', 'Française', 'Dessert', 75, 'Moyenne', 8, [
    ['pommes', 8], ['pate-feuilletee', 1], ['beurre', 80, 'g'], ['sucre', 120, 'g']
  ], [
    'Préchauffer le four à 200 °C. Faire un caramel avec le sucre et le beurre dans un moule allant sur le feu.',
    'Serrer les pommes épluchées en quartiers dans le caramel, cuire 15 min sur le feu.',
    'Recouvrir de pâte en rentrant les bords, piquer et cuire 30 min au four.',
    'Laisser tiédir 10 min puis retourner sur un plat.'
  ]);

  R('creme-brulee', 'Crème brûlée', 'Française', 'Dessert', 60, 'Moyenne', 6, [
    ['creme-liquide', 50, 'cl'], ['oeufs', 6], ['sucre', 100, 'g'], ['sucre-roux', 40, 'g'], ['gousses-de-vanille', 1, 'pc', 'opt']
  ], [
    'Préchauffer le four à 100 °C. Chauffer la crème avec la vanille fendue.',
    'Fouetter les jaunes avec le sucre, verser la crème chaude dessus en mélangeant.',
    'Répartir dans des ramequins et cuire 50 min : la crème doit trembler légèrement au centre. Réserver au frais.',
    'Au moment de servir, saupoudrer de sucre roux et caraméliser au chalumeau ou sous le gril.'
  ]);

  R('creme-caramel', 'Crème caramel', 'Française', 'Dessert', 60, 'Facile', 6, [
    ['lait', 50, 'cl'], ['oeufs', 4], ['sucre', 150, 'g'], ['sucre-vanille', 1]
  ], [
    'Préchauffer le four à 160 °C. Faire un caramel avec 80 g de sucre et le verser au fond d’un moule.',
    'Chauffer le lait avec le sucre vanillé. Fouetter les œufs avec le reste du sucre et verser le lait dessus.',
    'Verser dans le moule et cuire 45 min au bain-marie.',
    'Laisser refroidir puis réserver au frais avant de démouler.'
  ]);

  R('flan-patissier', 'Flan pâtissier', 'Française', 'Dessert', 75, 'Facile', 8, [
    ['lait', 75, 'cl'], ['oeufs', 4], ['sucre', 150, 'g'], ['maizena', 80, 'g'], ['pate-brisee', 1], ['sucre-vanille', 1]
  ], [
    'Préchauffer le four à 180 °C. Foncer un moule avec la pâte.',
    'Chauffer le lait avec le sucre vanillé. Fouetter les œufs, le sucre et la maïzena.',
    'Verser le lait chaud dessus, remettre sur le feu et épaissir 2 min en fouettant.',
    'Verser sur la pâte et cuire 45 min. Laisser refroidir complètement.'
  ]);

  R('tarte-citron', 'Tarte au citron', 'Française', 'Dessert', 60, 'Moyenne', 8, [
    ['pate-sablee', 1], ['citron', 4], ['oeufs', 4], ['sucre', 150, 'g'], ['beurre', 100, 'g'], ['maizena', 20, 'g', 'opt']
  ], [
    'Préchauffer le four à 180 °C. Cuire la pâte à blanc 20 min, lestée de papier cuisson et de légumes secs.',
    'Dans une casserole, fouetter les œufs, le sucre, le zeste et le jus des citrons (et la maïzena).',
    'Épaissir à feu doux sans cesser de fouetter, puis ajouter le beurre hors du feu.',
    'Verser sur le fond de tarte et laisser prendre au frais 2 h.'
  ]);

  R('tarte-fraises', 'Tarte aux fraises', 'Française', 'Dessert', 60, 'Moyenne', 8, [
    ['pate-sablee', 1], ['fraises', 500, 'g'], ['lait', 50, 'cl'], ['oeufs', 3], ['sucre', 100, 'g'], ['maizena', 40, 'g'],
    ['sucre-vanille', 1, 'pc', 'opt']
  ], [
    'Cuire la pâte à blanc 20 min à 180 °C.',
    'Crème pâtissière : chauffer le lait, fouetter les jaunes avec le sucre et la maïzena, verser le lait, épaissir 2 min. Refroidir.',
    'Étaler la crème sur le fond de tarte.',
    'Disposer les fraises équeutées et coupées en deux.'
  ]);

  R('tarte-poires-amandine', 'Tarte amandine aux poires', 'Française', 'Dessert', 70, 'Moyenne', 8, [
    ['pate-sablee', 1], ['poires', 4], ['amandes-poudre', 100, 'g'], ['beurre', 100, 'g'], ['sucre', 100, 'g'], ['oeufs', 2]
  ], [
    'Préchauffer le four à 180 °C. Étaler la pâte dans un moule.',
    'Crème d’amande : mélanger le beurre mou, le sucre, les œufs puis la poudre d’amande.',
    'L’étaler sur la pâte et disposer les poires épluchées en lamelles.',
    'Cuire 40 min.'
  ]);

  R('galette-rois', 'Galette des rois', 'Française', 'Dessert', 60, 'Moyenne', 8, [
    ['pate-feuilletee', 2], ['amandes-poudre', 125, 'g'], ['sucre', 100, 'g'], ['beurre', 75, 'g'], ['oeufs', 3]
  ], [
    'Préchauffer le four à 200 °C. Mélanger le beurre mou, le sucre, 2 œufs et la poudre d’amande.',
    'Étaler cette crème sur un disque de pâte en laissant 2 cm de bord (sans oublier la fève).',
    'Couvrir du second disque, souder les bords, dorer au jaune d’œuf et dessiner des motifs.',
    'Cuire 30 min.'
  ]);

  R('quatre-quarts', 'Quatre-quarts', 'Française', 'Dessert', 60, 'Facile', 8, [
    ['oeufs', 4], ['farine', 220, 'g'], ['beurre', 220, 'g'], ['sucre', 220, 'g'], ['levure-chimique', 0.5, 'pc', 'opt'],
    ['sel', 1, 'pincee']
  ], [
    'Préchauffer le four à 180 °C.',
    'Fouetter les œufs avec le sucre, ajouter le beurre fondu, puis la farine, la levure et le sel.',
    'Verser dans un moule à cake beurré et cuire 45 min.'
  ]);

  R('cake-citron', 'Cake au citron', 'Française', 'Dessert', 55, 'Facile', 8, [
    ['farine', 200, 'g'], ['sucre', 180, 'g'], ['oeufs', 3], ['beurre', 120, 'g'], ['citron', 2], ['levure-chimique', 1]
  ], [
    'Préchauffer le four à 180 °C.',
    'Fouetter les œufs et le sucre, ajouter le beurre fondu, le zeste et le jus des citrons.',
    'Incorporer la farine et la levure.',
    'Cuire 40 min dans un moule à cake beurré.'
  ]);

  R('madeleines', 'Madeleines', 'Française', 'Dessert', 30, 'Facile', 6, [
    ['farine', 125, 'g'], ['sucre', 100, 'g'], ['oeufs', 3], ['beurre', 100, 'g'], ['levure-chimique', 0.5], ['citron', 1, 'pc', 'opt']
  ], [
    'Fouetter les œufs et le sucre, ajouter la farine, la levure, le zeste de citron puis le beurre fondu.',
    'Laisser reposer la pâte 1 h au frais.',
    'Remplir les moules aux trois quarts et cuire 10 min à 210 °C.'
  ]);

  R('gaufres', 'Gaufres', 'Française', 'Dessert', 30, 'Facile', 6, [
    ['farine', 250, 'g'], ['lait', 50, 'cl'], ['oeufs', 3], ['beurre', 80, 'g'], ['sucre', 30, 'g'], ['levure-chimique', 1],
    ['sel', 1, 'pincee']
  ], [
    'Mélanger la farine, la levure, le sucre et le sel.',
    'Ajouter les œufs, puis le lait petit à petit et enfin le beurre fondu.',
    'Cuire dans un gaufrier bien chaud et graissé, 3 à 4 min par gaufre.'
  ]);

  R('semoule-au-lait', 'Semoule au lait', 'Française', 'Dessert', 20, 'Facile', 4, [
    ['semoule', 80, 'g'], ['lait', 50, 'cl'], ['sucre', 60, 'g'], ['sucre-vanille', 1], ['raisins-secs', 30, 'g', 'opt']
  ], [
    'Porter le lait à ébullition avec le sucre et le sucre vanillé.',
    'Verser la semoule en pluie et cuire 8 min à feu doux en remuant.',
    'Ajouter les raisins, verser dans des ramequins. Servir tiède ou froid.'
  ]);

  R('pommes-au-four', 'Pommes au four', 'Française', 'Dessert', 45, 'Facile', 4, [
    ['pommes', 4], ['beurre', 40, 'g'], ['sucre-roux', 40, 'g'], ['cannelle', 0.5, 'cc', 'opt'], ['raisins-secs', 30, 'g', 'opt']
  ], [
    'Préchauffer le four à 180 °C. Évider les pommes sans les percer jusqu’en bas.',
    'Remplir le centre de beurre, de sucre, de cannelle et de raisins.',
    'Cuire 35 min avec un fond d’eau dans le plat.'
  ]);

  R('salade-fruits', 'Salade de fruits frais', 'Française', 'Dessert', 20, 'Facile', 6, [
    ['oranges', 2], ['pommes', 2], ['bananes', 2], ['kiwis', 2], ['fraises', 250, 'g', 'opt'], ['sucre', 30, 'g'], ['citron', 1]
  ], [
    'Éplucher et couper tous les fruits en morceaux.',
    'Arroser de jus de citron pour éviter qu’ils noircissent, sucrer légèrement.',
    'Réserver au frais 30 min avant de servir.'
  ]);

  R('charlotte-fraises', 'Charlotte aux fraises', 'Française', 'Dessert', 40, 'Moyenne', 8, [
    ['boudoirs', 30], ['fraises', 500, 'g'], ['creme-liquide', 30, 'cl'], ['mascarpone', 250, 'g'], ['sucre', 80, 'g']
  ], [
    'Tremper rapidement les biscuits dans un sirop léger (eau + un peu de sucre) et en tapisser un moule à charlotte.',
    'Monter la crème bien froide en chantilly avec le mascarpone et le sucre.',
    'Alterner couches de crème et de fraises coupées, finir par des biscuits.',
    'Réserver au moins 6 h au frais avant de démouler.'
  ]);

  R('financiers', 'Financiers', 'Française', 'Dessert', 35, 'Facile', 6, [
    ['amandes-poudre', 100, 'g'], ['sucre-glace', 150, 'g'], ['beurre', 100, 'g'], ['oeufs', 4], ['farine', 50, 'g']
  ], [
    'Préchauffer le four à 200 °C. Faire fondre le beurre jusqu’à ce qu’il devienne noisette.',
    'Mélanger la poudre d’amande, le sucre glace et la farine, ajouter les blancs d’œufs.',
    'Incorporer le beurre tiédi.',
    'Remplir des petits moules beurrés et cuire 12 à 15 min.'
  ]);

  R('creme-chocolat', 'Crème au chocolat', 'Française', 'Dessert', 20, 'Facile', 4, [
    ['lait', 50, 'cl'], ['chocolat-noir', 100, 'g'], ['sucre', 50, 'g'], ['maizena', 30, 'g'], ['oeufs', 2]
  ], [
    'Chauffer le lait avec le chocolat en morceaux jusqu’à ce qu’il fonde.',
    'Fouetter les jaunes avec le sucre et la maïzena, verser le lait chocolaté dessus.',
    'Remettre sur feu doux et épaissir 2 min en remuant.',
    'Verser dans des ramequins et réserver 2 h au frais.'
  ]);

  /* ───────────── Antilles, Réunion, Afrique ───────────── */

  R('rougail-saucisse', 'Rougail saucisse', 'Réunionnaise', 'Plat', 60, 'Facile', 4, [
    ['saucisses', 6], ['tomates', 6], ['oignons', 2], ['ail', 3], ['gingembre', 15, 'g'], ['curcuma', 1, 'cc'],
    ['piments-frais', 1, 'pc', 'opt'], ['riz', 300, 'g'], ['huile', 2, 'cs'], ['sel', null]
  ], [
    'Piquer les saucisses et les blanchir 5 min dans l’eau bouillante. Les couper en rondelles.',
    'Les faire dorer dans l’huile, ajouter les oignons émincés.',
    'Ajouter l’ail et le gingembre pilés, le curcuma, le piment, puis les tomates en dés.',
    'Mijoter 30 min à couvert. Servir avec du riz.'
  ]);

  R('colombo-poulet', 'Colombo de poulet', 'Antillaise', 'Plat', 60, 'Facile', 4, [
    ['cuisses-poulet', 4], ['colombo', 3, 'cc'], ['pommes-de-terre', 400, 'g'], ['courgettes', 1], ['aubergines', 1], ['oignons', 1],
    ['ail', 2], ['citron-vert', 1], ['lait-coco', 20, 'cl', 'opt'], ['huile', 2, 'cs'], ['sel', null]
  ], [
    'Mariner le poulet avec le jus du citron vert, l’ail et la moitié du colombo, 30 min si possible.',
    'Le faire dorer dans l’huile avec l’oignon, ajouter le reste du colombo.',
    'Ajouter les légumes en morceaux et 30 cl d’eau (ou le lait de coco). Cuire 40 min.'
  ]);

  R('accras-morue', 'Accras de morue', 'Antillaise', 'Entrée', 45, 'Moyenne', 6, [
    ['morue-salee', 250, 'g'], ['farine', 200, 'g'], ['levure-chimique', 1], ['oeufs', 1], ['ail', 2], ['ciboule', 0.5],
    ['piments-frais', 1, 'pc', 'opt'], ['huile', 1, 'l']
  ], [
    'Dessaler la morue la veille, la pocher 10 min et l’émietter.',
    'Mélanger la farine, la levure, l’œuf et environ 20 cl d’eau pour obtenir une pâte épaisse.',
    'Ajouter la morue, l’ail, la ciboule et le piment hachés. Laisser reposer 1 h.',
    'Frire des cuillerées de pâte dans l’huile chaude jusqu’à ce qu’elles soient dorées.'
  ]);

  R('poulet-yassa', 'Poulet yassa', 'Africaine', 'Plat', 90, 'Facile', 4, [
    ['cuisses-poulet', 4], ['oignons', 6], ['citron', 3], ['moutarde', 2, 'cs'], ['ail', 2], ['bouillon', 1], ['riz', 300, 'g'],
    ['piments-frais', 1, 'pc', 'opt'], ['huile', 3, 'cs'], ['sel', null], ['poivre', null]
  ], [
    'Mariner le poulet avec les oignons émincés, le jus des citrons, la moutarde et l’ail, au moins 1 h.',
    'Faire griller les morceaux de poulet. Réserver.',
    'Faire fondre longuement les oignons de la marinade dans l’huile, 20 min.',
    'Ajouter la marinade, le bouillon, le piment et le poulet. Mijoter 30 min. Servir avec du riz.'
  ]);

  R('mafe', 'Mafé de bœuf', 'Africaine', 'Plat', 90, 'Facile', 4, [
    ['boeuf-braiser', 600, 'g'], ['beurre-de-cacahuete', 5, 'cs'], ['tomates-concassees', 400, 'g'], ['concentre-tomate', 2, 'cs'],
    ['oignons', 2], ['carottes', 2], ['patate-douce', 1], ['ail', 2], ['riz', 300, 'g'], ['huile', 2, 'cs'], ['sel', null]
  ], [
    'Faire dorer la viande en cubes dans l’huile avec les oignons.',
    'Ajouter l’ail, les tomates, le concentré et 50 cl d’eau. Mijoter 40 min.',
    'Délayer le beurre de cacahuète dans un peu de sauce et l’ajouter avec les légumes en morceaux.',
    'Cuire encore 30 min en remuant. Servir avec du riz.'
  ]);

  /* ───────────── Italienne ───────────── */

  R('gnocchis-tomate', 'Gnocchis à la tomate et mozzarella', 'Italienne', 'Plat', 25, 'Facile', 4, [
    ['gnocchis', 800, 'g'], ['tomates-concassees', 400, 'g'], ['mozzarella', 125, 'g'], ['ail', 1], ['basilic', 0.25, 'pc', 'opt'],
    ['huile-olive', 2, 'cs'], ['sel', null]
  ], [
    'Faire revenir l’ail dans l’huile, ajouter les tomates et laisser réduire 10 min.',
    'Cuire les gnocchis dans l’eau bouillante : ils sont prêts quand ils remontent.',
    'Les mélanger à la sauce, ajouter la mozzarella en morceaux et le basilic.'
  ]);

  R('puttanesca', 'Spaghetti alla puttanesca', 'Italienne', 'Plat', 25, 'Facile', 4, [
    ['spaghetti', 400, 'g'], ['tomates-concassees', 400, 'g'], ['olives', 80, 'g'], ['capres', 1, 'cs'], ['anchois', 30, 'g'], ['ail', 2],
    ['piment', 1, 'pincee', 'opt'], ['huile-olive', 3, 'cs']
  ], [
    'Faire fondre les anchois et l’ail dans l’huile.',
    'Ajouter les tomates, les olives, les câpres et le piment. Laisser réduire 10 min.',
    'Mélanger avec les spaghetti cuits al dente.'
  ]);

  R('osso-buco', 'Osso buco', 'Italienne', 'Plat', 120, 'Moyenne', 4, [
    ['osso-buco', 4], ['tomates-concassees', 400, 'g'], ['carottes', 2], ['oignons', 1], ['celeri', 1], ['vin-blanc', 15, 'cl'],
    ['farine', 20, 'g'], ['citron', 1, 'pc', 'opt'], ['huile-olive', 3, 'cs'], ['sel', null], ['poivre', null]
  ], [
    'Fariner les tranches de jarret et les faire dorer dans l’huile. Réserver.',
    'Faire revenir les légumes coupés en petits dés.',
    'Déglacer au vin blanc, ajouter les tomates et remettre la viande.',
    'Couvrir et mijoter 1 h 30. Parsemer de zeste de citron avant de servir.'
  ]);

  R('saltimbocca', 'Saltimbocca', 'Italienne', 'Plat', 25, 'Facile', 4, [
    ['escalopes-de-veau', 4], ['jambon-cru', 4], ['sauge-fraiche', 8], ['beurre', 30, 'g'], ['vin-blanc', 10, 'cl'], ['poivre', null]
  ], [
    'Poser sur chaque escalope une tranche de jambon cru et deux feuilles de sauge, fixer avec un pic.',
    'Cuire 2 min de chaque côté dans le beurre.',
    'Déglacer au vin blanc et napper les escalopes de ce jus.'
  ]);

  R('minestrone', 'Minestrone', 'Italienne', 'Plat', 60, 'Facile', 6, [
    ['courgettes', 1], ['carottes', 2], ['pommes-de-terre', 300, 'g'], ['haricots-blancs', 250, 'g'], ['tomates-concassees', 400, 'g'],
    ['celeri', 1], ['pates', 100, 'g'], ['oignons', 1], ['parmesan', 40, 'g', 'opt'], ['huile-olive', 3, 'cs'], ['sel', null], ['poivre', null]
  ], [
    'Faire revenir l’oignon et le céleri dans l’huile.',
    'Ajouter les légumes en dés, les tomates et 1,5 L d’eau. Cuire 30 min.',
    'Ajouter les haricots et les pâtes, cuire 10 min.',
    'Servir avec du parmesan râpé.'
  ]);

  R('tagliatelles-saumon', 'Tagliatelles au saumon fumé', 'Italienne', 'Plat', 20, 'Facile', 4, [
    ['tagliatelles', 400, 'g'], ['saumon-fume', 6], ['creme-liquide', 20, 'cl'], ['citron', 0.5], ['aneth', 0.25, 'pc', 'opt'], ['poivre', null]
  ], [
    'Cuire les tagliatelles.',
    'Chauffer la crème avec le zeste de citron, poivrer.',
    'Mélanger avec les pâtes égouttées, le saumon en lanières et l’aneth.'
  ]);

  R('pates-courgettes-ricotta', 'Pâtes courgettes et ricotta', 'Italienne', 'Plat', 25, 'Facile', 4, [
    ['pates', 400, 'g'], ['courgettes', 2], ['ricotta', 250, 'g'], ['citron', 1], ['parmesan', 40, 'g'], ['ail', 1],
    ['huile-olive', 2, 'cs'], ['sel', null], ['poivre', null]
  ], [
    'Faire revenir les courgettes en fines rondelles avec l’ail dans l’huile, 8 min.',
    'Cuire les pâtes et garder un peu d’eau de cuisson.',
    'Mélanger les pâtes, les courgettes, la ricotta, le zeste de citron et le parmesan, avec un peu d’eau de cuisson pour lier.'
  ]);

  R('pizza-reine', 'Pizza reine', 'Italienne', 'Plat', 30, 'Facile', 2, [
    ['pate-pizza', 1], ['coulis-tomate', 15, 'cl'], ['mozzarella', 125, 'g'], ['jambon', 2], ['champignons', 100, 'g'],
    ['origan', 0.5, 'cc', 'opt'], ['huile-olive', 1, 'cs']
  ], [
    'Préchauffer le four au maximum.',
    'Étaler la pâte, la couvrir de coulis, d’origan, de jambon et de champignons émincés.',
    'Ajouter la mozzarella et un filet d’huile. Cuire 10 à 12 min.'
  ]);

  R('lasagnes-epinards', 'Lasagnes épinards et ricotta', 'Italienne', 'Plat', 70, 'Moyenne', 6, [
    ['lasagnes', 250, 'g'], ['epinards', 500, 'g'], ['ricotta', 500, 'g'], ['mozzarella', 250, 'g'], ['parmesan', 60, 'g'],
    ['coulis-tomate', 50, 'cl'], ['oeufs', 1], ['muscade', 1, 'pincee', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Faire tomber les épinards, les égoutter et les hacher. Mélanger avec la ricotta, l’œuf, la muscade, sel et poivre.',
    'Préchauffer le four à 180 °C. Alterner coulis, lasagnes et mélange épinards-ricotta.',
    'Finir par du coulis, la mozzarella et le parmesan.',
    'Cuire 40 min.'
  ]);

  R('polenta-champignons', 'Polenta crémeuse aux champignons', 'Italienne', 'Plat', 35, 'Facile', 4, [
    ['polenta', 250, 'g'], ['lait', 50, 'cl'], ['parmesan', 50, 'g'], ['champignons', 400, 'g'], ['beurre', 30, 'g'], ['ail', 2],
    ['sel', null], ['poivre', null]
  ], [
    'Porter le lait et 50 cl d’eau salée à ébullition, verser la polenta en pluie et cuire en remuant selon le paquet.',
    'Ajouter le parmesan et la moitié du beurre.',
    'Faire sauter les champignons avec l’ail dans le reste du beurre.',
    'Servir la polenta surmontée des champignons.'
  ]);

  R('frittata', 'Frittata aux légumes', 'Italienne', 'Plat', 30, 'Facile', 4, [
    ['oeufs', 8], ['courgettes', 1], ['pommes-de-terre', 300, 'g'], ['oignons', 1], ['parmesan', 40, 'g'], ['huile-olive', 3, 'cs'],
    ['sel', null], ['poivre', null]
  ], [
    'Faire revenir les pommes de terre en petits dés, l’oignon et la courgette dans l’huile, 12 min.',
    'Battre les œufs avec le parmesan, saler, poivrer, et verser sur les légumes.',
    'Cuire à feu doux 10 min, puis finir 5 min sous le gril du four.'
  ]);

  R('carpaccio-boeuf', 'Carpaccio de bœuf', 'Italienne', 'Entrée', 20, 'Facile', 4, [
    ['boeuf-poeler', 300, 'g'], ['parmesan', 40, 'g'], ['roquette', 60, 'g'], ['citron', 1], ['huile-olive', 4, 'cs'],
    ['capres', 1, 'cs', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Placer la viande 1 h au congélateur pour la trancher très finement.',
    'Disposer les tranches sur les assiettes, arroser d’huile et de citron.',
    'Parsemer de copeaux de parmesan, de roquette et de câpres. Saler, poivrer.'
  ]);

  R('bruschetta', 'Bruschetta à la tomate', 'Italienne', 'Entrée', 15, 'Facile', 4, [
    ['baguette', 1], ['tomates', 4], ['ail', 1], ['basilic', 0.25, 'pc', 'opt'], ['huile-olive', 3, 'cs'], ['sel', null]
  ], [
    'Faire griller les tranches de pain et les frotter d’ail.',
    'Couper les tomates en petits dés, les assaisonner d’huile, de sel et de basilic.',
    'Garnir les tranches juste avant de servir.'
  ]);

  R('burrata-tomates', 'Burrata et tomates', 'Italienne', 'Entrée', 10, 'Facile', 4, [
    ['burrata', 2], ['tomates', 4], ['basilic', 0.25, 'pc', 'opt'], ['huile-olive', 3, 'cs'], ['vinaigre-balsamique', 1, 'cs', 'opt'],
    ['sel', null], ['poivre', null]
  ], [
    'Couper les tomates en quartiers et les disposer sur un plat.',
    'Poser les burratas au centre, arroser d’huile et de vinaigre balsamique.',
    'Saler, poivrer, parsemer de basilic.'
  ]);

  /* ───────────── Espagnole, grecque, orientale ───────────── */

  R('gambas-ail', 'Gambas à l’ail', 'Espagnole', 'Entrée', 15, 'Facile', 4, [
    ['gambas', 16], ['ail', 4], ['huile-olive', 6, 'cs'], ['piment', 1, 'pincee', 'opt'], ['persil', 0.25, 'pc', 'opt'], ['sel', null]
  ], [
    'Chauffer l’huile avec l’ail en lamelles et le piment, sans colorer.',
    'Ajouter les gambas décortiquées et les cuire 2 à 3 min.',
    'Saler, parsemer de persil et servir aussitôt avec du pain.'
  ]);

  R('poulet-chorizo', 'Poulet au chorizo', 'Espagnole', 'Plat', 60, 'Facile', 4, [
    ['cuisses-poulet', 4], ['chorizo', 150, 'g'], ['poivrons', 2], ['tomates-concassees', 400, 'g'], ['oignons', 1],
    ['paprika-fume', 1, 'cc'], ['huile-olive', 2, 'cs'], ['sel', null]
  ], [
    'Faire dorer le poulet dans l’huile. Réserver.',
    'Faire revenir le chorizo en rondelles, l’oignon et les poivrons.',
    'Ajouter le paprika et les tomates, remettre le poulet.',
    'Couvrir et mijoter 40 min.'
  ]);

  R('souvlaki', 'Souvlaki de poulet', 'Grecque', 'Plat', 40, 'Facile', 4, [
    ['poulet', 600, 'g'], ['citron', 1], ['origan', 2, 'cc'], ['ail', 2], ['yaourt-grec', 200, 'g'], ['pains-pita', 4], ['tomates', 2],
    ['oignon-rouge', 1], ['huile-olive', 3, 'cs'], ['sel', null]
  ], [
    'Mariner le poulet en cubes avec l’huile, le jus de citron, l’origan et l’ail, au moins 30 min.',
    'L’enfiler sur des brochettes et le griller 10 min.',
    'Servir dans les pitas avec le yaourt, les tomates et l’oignon.'
  ]);

  R('tajine-agneau-pruneaux', 'Tajine d’agneau aux pruneaux', 'Maghrébine', 'Plat', 150, 'Moyenne', 6, [
    ['agneau', 1200, 'g'], ['pruneaux', 250, 'g'], ['oignons', 2], ['miel', 2, 'cs'], ['cannelle', 1, 'cc'], ['ras-el-hanout', 2, 'cc'],
    ['amandes', 60, 'g', 'opt'], ['graines-sesame', 1, 'cs', 'opt'], ['huile-olive', 3, 'cs'], ['sel', null]
  ], [
    'Faire dorer l’agneau avec les oignons et les épices dans l’huile.',
    'Couvrir d’eau à mi-hauteur et mijoter 1 h 30 à couvert.',
    'Ajouter les pruneaux et le miel, cuire encore 30 min.',
    'Servir parsemé d’amandes grillées et de sésame.'
  ]);

  R('kefta-tomate', 'Tajine de kefta', 'Maghrébine', 'Plat', 50, 'Facile', 4, [
    ['boeuf-hache', 600, 'g'], ['oignons', 1], ['persil', 0.5], ['coriandre', 0.5, 'pc', 'opt'], ['cumin', 1, 'cc'], ['paprika', 1, 'cc'],
    ['tomates-concassees', 400, 'g'], ['oeufs', 4, 'pc', 'opt'], ['huile-olive', 2, 'cs'], ['sel', null]
  ], [
    'Mélanger la viande avec la moitié de l’oignon, les herbes et les épices. Former de petites boulettes.',
    'Faire revenir le reste d’oignon dans l’huile, ajouter les tomates et 10 cl d’eau.',
    'Ajouter les boulettes et mijoter 25 min.',
    'Casser les œufs dans la sauce et cuire 5 min à couvert.'
  ]);

  R('bricks-thon', 'Bricks au thon', 'Maghrébine', 'Entrée', 30, 'Moyenne', 4, [
    ['feuilles-de-brick', 8], ['thon-boite', 150, 'g'], ['oeufs', 4], ['persil', 0.25, 'pc', 'opt'], ['fromage-rape', 50, 'g', 'opt'],
    ['huile', 50, 'cl'], ['citron', 1, 'pc', 'opt']
  ], [
    'Poser une feuille de brick doublée, y mettre du thon, du persil et du fromage.',
    'Casser un œuf au centre et replier rapidement en triangle.',
    'Frire 1 à 2 min de chaque côté dans l’huile chaude. Servir avec du citron.'
  ]);

  R('mechouia', 'Salade méchouia', 'Maghrébine', 'Entrée', 45, 'Facile', 4, [
    ['poivrons', 3], ['tomates', 4], ['ail', 2], ['cumin', 0.5, 'cc'], ['huile-olive', 4, 'cs'], ['oeufs', 2, 'pc', 'opt'],
    ['thon-boite', 100, 'g', 'opt'], ['sel', null]
  ], [
    'Griller les poivrons et les tomates au four ou sur le feu jusqu’à ce que la peau noircisse.',
    'Les peler, les épépiner et les hacher grossièrement avec l’ail.',
    'Assaisonner d’huile, de cumin et de sel. Garnir d’œufs durs et de thon.'
  ]);

  R('moutabal', 'Moutabal (caviar d’aubergine)', 'Libanaise', 'Entrée', 45, 'Facile', 4, [
    ['aubergines', 2], ['tahini', 2, 'cs'], ['citron', 1], ['ail', 1], ['huile-olive', 2, 'cs'], ['cumin', 0.5, 'cc', 'opt'], ['sel', null]
  ], [
    'Cuire les aubergines entières 40 min au four à 220 °C, jusqu’à ce qu’elles soient très tendres.',
    'Récupérer la chair et l’écraser avec le tahini, le jus de citron, l’ail et le sel.',
    'Servir arrosé d’huile d’olive, avec du pain pita.'
  ]);

  R('fattouche', 'Fattouche', 'Libanaise', 'Entrée', 20, 'Facile', 4, [
    ['laitue', 1], ['tomates', 3], ['concombre', 1], ['radis', 1, 'pc', 'opt'], ['oignon-rouge', 1], ['menthe', 0.5], ['persil', 0.5],
    ['pains-pita', 2], ['sumac', 1, 'cc'], ['citron', 1], ['huile-olive', 4, 'cs'], ['sel', null]
  ], [
    'Faire griller les pitas coupées en morceaux.',
    'Couper les légumes, ciseler les herbes.',
    'Assaisonner de citron, d’huile, de sumac et de sel. Ajouter le pain au dernier moment.'
  ]);

  R('chich-taouk', 'Chich taouk', 'Libanaise', 'Plat', 45, 'Facile', 4, [
    ['poulet', 600, 'g'], ['yaourt', 1], ['citron', 1], ['ail', 3], ['paprika', 1, 'cc'], ['pains-pita', 4], ['tahini', 2, 'cs', 'opt'],
    ['huile-olive', 2, 'cs'], ['sel', null]
  ], [
    'Mariner le poulet en cubes avec le yaourt, le jus de citron, l’ail, le paprika et l’huile, au moins 1 h.',
    'Griller les brochettes 10 à 12 min.',
    'Servir dans les pitas avec une sauce au tahini et des crudités.'
  ]);

  /* ───────────── Asie ───────────── */

  R('poulet-tandoori', 'Poulet tandoori', 'Indienne', 'Plat', 50, 'Facile', 4, [
    ['pilons-de-poulet', 8], ['yaourt', 2], ['epices-tandoori', 4, 'cc'], ['citron', 1], ['ail', 2], ['gingembre', 10, 'g'],
    ['riz', 300, 'g'], ['sel', null]
  ], [
    'Entailler les pilons et les mariner dans le yaourt, les épices, le jus de citron, l’ail et le gingembre, au moins 2 h.',
    'Les cuire 35 min au four à 220 °C en les retournant à mi-cuisson.',
    'Servir avec du riz basmati.'
  ]);

  R('biryani-poulet', 'Biryani de poulet', 'Indienne', 'Plat', 75, 'Moyenne', 4, [
    ['riz', 300, 'g'], ['poulet', 500, 'g'], ['oignons', 2], ['yaourt', 1], ['garam-masala', 2, 'cc'], ['curcuma', 1, 'cc'],
    ['cardamome', 4, 'pc', 'opt'], ['gingembre', 10, 'g'], ['ail', 2], ['coriandre', 0.25, 'pc', 'opt'], ['beurre', 30, 'g'], ['sel', null]
  ], [
    'Mariner le poulet avec le yaourt, les épices, l’ail et le gingembre, 30 min.',
    'Faire dorer les oignons émincés dans le beurre, en réserver la moitié. Ajouter le poulet et cuire 10 min.',
    'Précuire le riz 5 min à l’eau salée avec la cardamome, l’égoutter.',
    'Couvrir le poulet de riz, parsemer du reste d’oignons, couvrir hermétiquement et cuire 25 min à feu très doux.'
  ]);

  R('curry-legumes', 'Curry de légumes au lait de coco', 'Indienne', 'Plat', 40, 'Facile', 4, [
    ['patate-douce', 1], ['chou-fleur', 0.5], ['petits-pois', 150, 'g'], ['lait-coco', 40, 'cl'], ['curry', 2, 'cc'],
    ['tomates-concassees', 400, 'g'], ['oignons', 1], ['ail', 2], ['gingembre', 10, 'g', 'opt'], ['huile', 2, 'cs'], ['sel', null]
  ], [
    'Faire revenir l’oignon, l’ail, le gingembre et le curry dans l’huile.',
    'Ajouter la patate douce en cubes, le chou-fleur en bouquets et les tomates. Cuire 15 min.',
    'Ajouter le lait de coco et les petits pois, cuire encore 10 min.'
  ]);

  R('samoussas', 'Samoussas aux légumes', 'Indienne', 'Entrée', 50, 'Moyenne', 4, [
    ['feuilles-de-brick', 10], ['pommes-de-terre', 300, 'g'], ['petits-pois', 100, 'g'], ['oignons', 1], ['curry', 1, 'cc'],
    ['cumin', 1, 'cc'], ['coriandre', 0.25, 'pc', 'opt'], ['huile', 4, 'cs'], ['sel', null]
  ], [
    'Cuire les pommes de terre en petits dés et les petits pois. Les faire revenir avec l’oignon et les épices.',
    'Couper les feuilles de brick en deux, les plier en bande et former des triangles garnis.',
    'Badigeonner d’huile et cuire 15 min au four à 200 °C.'
  ]);

  R('porc-aigre-doux', 'Porc aigre-doux', 'Chinoise', 'Plat', 40, 'Moyenne', 4, [
    ['porc-epaule', 600, 'g'], ['poivrons', 2], ['ananas', 0.5], ['oignons', 1], ['maizena', 30, 'g'], ['vinaigre-riz', 3, 'cs'],
    ['sucre', 30, 'g'], ['ketchup', 3, 'cs'], ['sauce-soja', 2, 'cs'], ['huile', 3, 'cs']
  ], [
    'Enrober le porc en cubes de maïzena et le faire dorer dans l’huile. Réserver.',
    'Faire sauter l’oignon et les poivrons en morceaux 3 min.',
    'Ajouter l’ananas, le vinaigre, le sucre, le ketchup, la sauce soja et 5 cl d’eau.',
    'Remettre le porc et laisser napper 2 min. Servir avec du riz.'
  ]);

  R('boeuf-brocoli', 'Bœuf sauté au brocoli', 'Chinoise', 'Plat', 25, 'Facile', 4, [
    ['boeuf-poeler', 500, 'g'], ['brocoli', 1], ['ail', 2], ['gingembre', 10, 'g'], ['sauce-huitre', 3, 'cs'], ['sauce-soja', 2, 'cs'],
    ['maizena', 10, 'g'], ['sucre', 5, 'g'], ['huile', 2, 'cs'], ['riz', 300, 'g', 'opt']
  ], [
    'Mariner le bœuf en lamelles avec la maïzena et une cuillère de sauce soja.',
    'Blanchir le brocoli en bouquets 2 min.',
    'Saisir le bœuf à feu vif, ajouter l’ail, le gingembre, le brocoli, puis les sauces et le sucre.',
    'Servir aussitôt avec du riz.'
  ]);

  R('nouilles-poulet', 'Nouilles sautées au poulet', 'Chinoise', 'Plat', 25, 'Facile', 4, [
    ['nouilles', 300, 'g'], ['poulet', 400, 'g'], ['carottes', 2], ['chou-chinois', 1], ['ciboule', 0.5], ['sauce-soja', 4, 'cs'],
    ['sauce-huitre', 2, 'cs', 'opt'], ['ail', 2], ['huile', 3, 'cs']
  ], [
    'Cuire les nouilles, les rincer à l’eau froide.',
    'Saisir le poulet en lamelles dans l’huile, ajouter l’ail et les légumes émincés.',
    'Ajouter les nouilles et les sauces, sauter 2 min. Parsemer de ciboule.'
  ]);

  R('mapo-tofu', 'Mapo tofu', 'Chinoise', 'Plat', 25, 'Moyenne', 4, [
    ['tofu', 400, 'g'], ['porc-hache', 200, 'g'], ['pate-de-piment', 1, 'cc'], ['sauce-soja', 2, 'cs'], ['ail', 2], ['gingembre', 10, 'g'],
    ['ciboule', 0.5], ['maizena', 10, 'g'], ['poivre-de-sichuan', 0.5, 'cc', 'opt'], ['riz', 300, 'g'], ['huile', 2, 'cs']
  ], [
    'Faire revenir le porc dans l’huile avec l’ail, le gingembre et la pâte de piment.',
    'Ajouter 20 cl d’eau, la sauce soja et le tofu en cubes. Mijoter 5 min.',
    'Lier avec la maïzena délayée, parsemer de ciboule et de poivre de Sichuan. Servir avec du riz.'
  ]);

  R('yakitori', 'Yakitori', 'Japonaise', 'Plat', 40, 'Facile', 4, [
    ['hauts-de-cuisse-de-poulet', 8], ['sauce-soja', 5, 'cs'], ['mirin', 3, 'cs'], ['sucre', 20, 'g'], ['ciboule', 1], ['riz', 300, 'g']
  ], [
    'Faire réduire la sauce soja, le mirin et le sucre jusqu’à obtenir une sauce sirupeuse.',
    'Couper le poulet en morceaux et l’enfiler sur des brochettes en alternant avec la ciboule.',
    'Griller 10 min en badigeonnant de sauce plusieurs fois. Servir avec du riz.'
  ]);

  R('saumon-teriyaki', 'Saumon teriyaki', 'Japonaise', 'Plat', 25, 'Facile', 4, [
    ['saumon', 4], ['sauce-teriyaki', 5, 'cs'], ['riz', 300, 'g'], ['graines-sesame', 1, 'cs', 'opt'], ['ciboule', 0.25, 'pc', 'opt'],
    ['huile', 1, 'cs']
  ], [
    'Cuire le riz.',
    'Saisir les pavés côté peau 4 min, les retourner 2 min.',
    'Verser la sauce teriyaki et laisser caraméliser 1 min en nappant.',
    'Servir sur le riz, parsemé de sésame et de ciboule.'
  ]);

  R('ramen-miso', 'Ramen au miso', 'Japonaise', 'Plat', 30, 'Moyenne', 2, [
    ['nouilles-ramen', 200, 'g'], ['bouillon', 1], ['oeufs', 2], ['miso', 2, 'cs'], ['ciboule', 0.5], ['sauce-soja', 2, 'cs'],
    ['poitrine-de-porc', 200, 'g', 'opt'], ['champignons', 80, 'g', 'opt'], ['germes-soja', 80, 'g', 'opt']
  ], [
    'Cuire les œufs 6 min 30, les refroidir et les écaler.',
    'Préparer 80 cl de bouillon, ajouter la sauce soja et le miso délayé (sans faire bouillir ensuite).',
    'Cuire les nouilles et faire griller la poitrine en tranches.',
    'Dresser les bols : nouilles, bouillon, poitrine, œuf coupé en deux, champignons, pousses de soja et ciboule.'
  ]);

  R('salade-concombre-japonaise', 'Salade de concombre à la japonaise', 'Japonaise', 'Entrée', 10, 'Facile', 4, [
    ['concombre', 1], ['vinaigre-riz', 3, 'cs'], ['sauce-soja', 1, 'cs'], ['sucre', 5, 'g'], ['graines-sesame', 1, 'cs']
  ], [
    'Couper le concombre en très fines rondelles, le saler et le laisser dégorger 10 min.',
    'Le presser, puis l’assaisonner avec le vinaigre, la sauce soja et le sucre.',
    'Parsemer de sésame grillé.'
  ]);

  R('pad-kra-pao', 'Poulet sauté au basilic thaï', 'Thaïlandaise', 'Plat', 20, 'Facile', 4, [
    ['poulet', 500, 'g'], ['basilic-thai', 1], ['ail', 4], ['piments-frais', 2, 'pc', 'opt'], ['sauce-poisson', 2, 'cs'],
    ['sauce-huitre', 2, 'cs'], ['sucre', 10, 'g'], ['riz', 300, 'g'], ['oeufs', 4, 'pc', 'opt'], ['huile', 3, 'cs']
  ], [
    'Hacher grossièrement le poulet au couteau.',
    'Faire sauter l’ail et les piments dans l’huile, ajouter le poulet et cuire 5 min à feu vif.',
    'Ajouter les sauces et le sucre, puis le basilic hors du feu.',
    'Servir sur du riz avec un œuf au plat.'
  ]);

  R('tom-yum', 'Soupe tom yum aux crevettes', 'Thaïlandaise', 'Plat', 25, 'Facile', 4, [
    ['crevettes', 300, 'g'], ['champignons', 200, 'g'], ['citronnelle', 2, 'pc', 'opt'], ['citron-vert', 2], ['sauce-poisson', 3, 'cs'],
    ['piments-frais', 2, 'pc', 'opt'], ['bouillon', 1], ['coriandre', 0.25, 'pc', 'opt'], ['tomates-cerises', 150, 'g', 'opt']
  ], [
    'Porter 1 L de bouillon à frémissement avec la citronnelle écrasée et les piments.',
    'Ajouter les champignons et les tomates, cuire 5 min.',
    'Ajouter les crevettes, cuire 2 min.',
    'Hors du feu, ajouter le jus des citrons verts et la sauce poisson. Parsemer de coriandre.'
  ]);

  R('pho', 'Phở au bœuf', 'Vietnamienne', 'Plat', 60, 'Moyenne', 4, [
    ['boeuf-poeler', 300, 'g'], ['nouilles-riz', 300, 'g'], ['bouillon', 2], ['oignons', 1], ['gingembre', 30, 'g'], ['badiane', 2],
    ['cannelle', 0.5, 'cc', 'opt'], ['sauce-poisson', 3, 'cs'], ['germes-soja', 150, 'g'], ['coriandre', 0.5], ['basilic-thai', 0.5, 'pc', 'opt'],
    ['citron-vert', 1]
  ], [
    'Faire griller l’oignon et le gingembre coupés en deux à sec, jusqu’à ce qu’ils noircissent.',
    'Les faire infuser 40 min dans 2 L de bouillon avec la badiane et la cannelle. Ajouter la sauce poisson.',
    'Cuire les nouilles, les répartir dans les bols avec le bœuf cru en tranches très fines.',
    'Verser le bouillon bouillant filtré par-dessus. Servir avec les pousses de soja, les herbes et le citron vert.'
  ]);

  R('nems', 'Nems au porc', 'Vietnamienne', 'Entrée', 60, 'Moyenne', 6, [
    ['galettes-riz', 20], ['porc-hache', 400, 'g'], ['nouilles-riz', 50, 'g'], ['carottes', 1], ['champignons-noirs-seches', 10, 'g'],
    ['oignons', 1], ['oeufs', 1], ['sauce-poisson', 1, 'cs'], ['huile', 1, 'l'], ['salade', 1, 'pc', 'opt'], ['menthe', 0.5, 'pc', 'opt']
  ], [
    'Réhydrater les champignons et les vermicelles, puis les hacher.',
    'Mélanger avec le porc, la carotte râpée, l’oignon haché, l’œuf et la sauce poisson.',
    'Humidifier chaque galette, y rouler une cuillerée de farce en rabattant les côtés.',
    'Frire 8 à 10 min dans l’huile à 160 °C. Servir avec salade, menthe et sauce nuoc-mâm.'
  ]);

  R('banh-mi', 'Bánh mì au poulet', 'Vietnamienne', 'Plat', 35, 'Facile', 4, [
    ['baguette', 2], ['poulet', 400, 'g'], ['carottes', 2], ['concombre', 0.5], ['coriandre', 0.5], ['mayonnaise', 4, 'cs'],
    ['vinaigre-riz', 3, 'cs'], ['sucre', 10, 'g'], ['sauce-soja', 2, 'cs'], ['sriracha', 1, 'cc', 'opt']
  ], [
    'Faire mariner les carottes en julienne 20 min dans le vinaigre et le sucre.',
    'Faire griller le poulet en lamelles avec la sauce soja.',
    'Garnir les baguettes coupées de mayonnaise pimentée, de poulet, de carottes, de concombre et de coriandre.'
  ]);

  R('bulgogi', 'Bulgogi', 'Coréenne', 'Plat', 30, 'Facile', 4, [
    ['boeuf-poeler', 500, 'g'], ['sauce-soja', 5, 'cs'], ['sucre', 20, 'g'], ['huile-sesame', 1, 'cs'], ['ail', 3],
    ['poires', 0.5, 'pc', 'opt'], ['oignons', 1], ['ciboule', 0.5], ['graines-sesame', 1, 'cs', 'opt'], ['riz', 300, 'g']
  ], [
    'Mariner le bœuf en tranches très fines avec la sauce soja, le sucre, l’huile de sésame, l’ail et la poire râpée, 30 min.',
    'Le saisir à feu très vif avec l’oignon émincé, 3 à 4 min.',
    'Parsemer de ciboule et de sésame. Servir avec du riz.'
  ]);

  R('riz-kimchi', 'Riz sauté au kimchi', 'Coréenne', 'Plat', 20, 'Facile', 2, [
    ['riz', 250, 'g'], ['kimchi', 150, 'g'], ['oeufs', 2], ['bacon', 3, 'pc', 'opt'], ['gochujang', 1, 'cs'], ['huile-sesame', 1, 'cc'],
    ['ciboule', 0.25, 'pc', 'opt'], ['huile', 1, 'cs']
  ], [
    'Utiliser du riz cuit refroidi.',
    'Faire revenir le bacon et le kimchi coupé, ajouter le riz et le gochujang. Sauter 4 min.',
    'Finir avec l’huile de sésame, servir avec un œuf au plat et la ciboule.'
  ]);

  /* ───────────── Amériques ───────────── */

  R('tacos-boeuf', 'Tacos au bœuf', 'Mexicaine', 'Plat', 30, 'Facile', 4, [
    ['tortillas', 8], ['boeuf-hache', 500, 'g'], ['oignons', 1], ['tomates', 2], ['salade', 0.25], ['fromage-rape', 80, 'g'],
    ['cumin', 1, 'cc'], ['paprika', 1, 'cc'], ['avocat', 1, 'pc', 'opt'], ['citron-vert', 1, 'pc', 'opt'], ['huile', 1, 'cs'], ['sel', null]
  ], [
    'Faire revenir l’oignon, ajouter la viande et les épices, cuire 8 min.',
    'Réchauffer les tortillas.',
    'Garnir de viande, de salade, de tomates, de fromage et d’avocat. Arroser de citron vert.'
  ]);

  R('quesadillas', 'Quesadillas', 'Mexicaine', 'Plat', 25, 'Facile', 4, [
    ['tortillas', 8], ['fromage-rape', 200, 'g'], ['poivrons', 1], ['oignons', 1], ['poulet', 300, 'g', 'opt'], ['mais-doux', 150, 'g', 'opt'],
    ['huile', 1, 'cs']
  ], [
    'Faire revenir l’oignon, le poivron et le poulet en petits morceaux.',
    'Garnir une tortilla de fromage et de garniture, couvrir d’une seconde tortilla.',
    'Dorer 2 min de chaque côté dans une poêle, couper en parts.'
  ]);

  R('chili-sin-carne', 'Chili sin carne', 'Mexicaine', 'Plat', 45, 'Facile', 4, [
    ['haricots-rouges', 500, 'g'], ['mais-doux', 150, 'g'], ['tomates-concassees', 400, 'g'], ['poivrons', 1], ['oignons', 1], ['ail', 2],
    ['cumin', 1, 'cc'], ['paprika', 1, 'cc'], ['piment', 1, 'pincee'], ['riz', 300, 'g', 'opt'], ['huile', 2, 'cs'], ['sel', null]
  ], [
    'Faire revenir l’oignon, le poivron et l’ail dans l’huile.',
    'Ajouter les épices puis les tomates, mijoter 15 min.',
    'Ajouter les haricots et le maïs égouttés, cuire 15 min. Servir avec du riz.'
  ]);

  R('mac-cheese', 'Mac and cheese', 'Américaine', 'Plat', 35, 'Facile', 4, [
    ['pates', 400, 'g'], ['cheddar', 8], ['fromage-rape', 100, 'g'], ['lait', 50, 'cl'], ['beurre', 40, 'g'], ['farine', 40, 'g'],
    ['moutarde', 1, 'cc', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Cuire les macaronis 2 min de moins que le temps indiqué.',
    'Préparer une béchamel avec le beurre, la farine et le lait, puis y faire fondre le cheddar et la moutarde.',
    'Mélanger avec les pâtes, verser dans un plat, parsemer de fromage râpé.',
    'Gratiner 15 min à 200 °C.'
  ]);

  R('salade-cesar', 'Salade César', 'Américaine', 'Plat', 30, 'Facile', 4, [
    ['laitue', 1], ['poulet', 400, 'g'], ['parmesan', 50, 'g'], ['pain', 4], ['mayonnaise', 4, 'cs'], ['citron', 0.5], ['ail', 1],
    ['anchois', 20, 'g', 'opt'], ['huile', 2, 'cs'], ['sel', null], ['poivre', null]
  ], [
    'Faire dorer le poulet à la poêle, puis les croûtons dans la même poêle.',
    'Sauce : mayonnaise, jus de citron, ail écrasé, anchois hachés et un peu de parmesan râpé.',
    'Mélanger la salade avec la sauce, ajouter le poulet tranché, les croûtons et des copeaux de parmesan.'
  ]);

  R('coleslaw', 'Coleslaw', 'Américaine', 'Entrée', 15, 'Facile', 6, [
    ['chou', 0.5], ['carottes', 2], ['mayonnaise', 5, 'cs'], ['vinaigre-de-cidre', 1, 'cs'], ['moutarde', 1, 'cc'], ['sucre', 5, 'g'], ['sel', null]
  ], [
    'Émincer très finement le chou et râper les carottes.',
    'Mélanger la mayonnaise, le vinaigre, la moutarde, le sucre et le sel.',
    'Assaisonner les légumes et laisser reposer 30 min au frais.'
  ]);

  R('pulled-pork', 'Pulled pork', 'Américaine', 'Plat', 300, 'Moyenne', 6, [
    ['porc-epaule', 1500, 'g'], ['sauce-barbecue', 15, 'cs'], ['sucre-roux', 40, 'g'], ['paprika-fume', 2, 'cc'], ['oignons', 1],
    ['pain-burger', 6], ['sel', null], ['poivre', null]
  ], [
    'Frotter l’épaule avec le sucre roux, le paprika, le sel et le poivre.',
    'La cuire 4 h 30 à 150 °C dans une cocotte fermée avec l’oignon et un verre d’eau.',
    'Effilocher la viande à la fourchette et la mélanger avec la sauce barbecue.',
    'Servir dans des pains à burger, avec du coleslaw.'
  ]);

  R('brownies', 'Brownies', 'Américaine', 'Dessert', 40, 'Facile', 8, [
    ['chocolat-noir', 200, 'g'], ['beurre', 150, 'g'], ['sucre', 150, 'g'], ['oeufs', 3], ['farine', 80, 'g'],
    ['cerneaux-de-noix', 80, 'g', 'opt']
  ], [
    'Préchauffer le four à 180 °C. Faire fondre le chocolat avec le beurre.',
    'Fouetter les œufs et le sucre, ajouter le chocolat, la farine et les noix.',
    'Verser dans un moule carré et cuire 20 à 25 min : le centre doit rester fondant.'
  ]);

  R('cheesecake', 'Cheesecake', 'Américaine', 'Dessert', 90, 'Moyenne', 8, [
    ['speculoos', 25], ['beurre', 80, 'g'], ['fromage-frais-a-tartiner', 600, 'g'], ['sucre', 150, 'g'], ['oeufs', 3],
    ['creme-liquide', 20, 'cl'], ['citron', 1]
  ], [
    'Mixer les biscuits avec le beurre fondu et tasser au fond d’un moule à charnière.',
    'Fouetter le fromage frais avec le sucre, puis les œufs un à un, la crème et le zeste de citron.',
    'Verser sur le biscuit et cuire 1 h à 150 °C.',
    'Laisser refroidir dans le four entrouvert, puis réserver une nuit au frais.'
  ]);

  R('muffins-myrtilles', 'Muffins aux myrtilles', 'Américaine', 'Dessert', 35, 'Facile', 6, [
    ['farine', 250, 'g'], ['sucre', 120, 'g'], ['oeufs', 2], ['lait', 20, 'cl'], ['beurre', 80, 'g'], ['levure-chimique', 1],
    ['myrtilles', 150, 'g']
  ], [
    'Préchauffer le four à 180 °C.',
    'Mélanger les ingrédients secs d’un côté, les œufs, le lait et le beurre fondu de l’autre.',
    'Réunir sans trop mélanger, puis ajouter les myrtilles.',
    'Remplir des moules à muffins et cuire 20 à 25 min.'
  ]);

  R('churros', 'Churros', 'Espagnole', 'Dessert', 40, 'Moyenne', 4, [
    ['farine', 250, 'g'], ['sucre', 30, 'g'], ['huile', 1, 'l'], ['cannelle', 1, 'cc', 'opt'], ['sel', 1, 'pincee']
  ], [
    'Porter à ébullition 25 cl d’eau avec le sel, verser la farine d’un coup et mélanger jusqu’à obtenir une boule.',
    'Mettre la pâte dans une poche à douille cannelée.',
    'Former des bâtons directement dans l’huile chaude et les frire 3 min.',
    'Égoutter et rouler dans le sucre mélangé à la cannelle.'
  ]);
};
