/* Recettes ajoutées en 0.3. Même format que recettes.js :
   R(id, nom, cuisine, type, minutes, difficulté, personnes, ingrédients, étapes)
   Types : Entrée | Plat | Dessert */
'use strict';

module.exports = function ajouter(R) {
  /* ───────────── Française : plats ───────────── */

  R('coq-au-vin', 'Coq au vin', 'Française', 'Plat', 120, 'Moyenne', 6, [
    ['cuisses-poulet', 6], ['vin-rouge', 75, 'cl'], ['lardons', 150, 'g'], ['champignons', 250, 'g'], ['oignons', 2],
    ['carottes', 2], ['ail', 2], ['farine', 30, 'g'], ['bouquet-garni', 1], ['beurre', 40, 'g'], ['cognac', 4, 'cl', 'opt'],
    ['sel', null], ['poivre', null]
  ], [
    'Dans une cocotte, faire dorer les cuisses de poulet 10 min à feu moyen-vif dans 30 g de beurre. Flamber au cognac si vous en avez. Réserver.',
    'Dans la même cocotte, faire revenir 5 min à feu moyen les lardons, les oignons émincés et les carottes en rondelles.',
    'Remettre le poulet, saupoudrer de farine et remuer 2 min à feu moyen.',
    'Verser le vin, ajouter l’ail écrasé et le bouquet garni. Porter à ébullition, puis couvrir et laisser mijoter 1 h à feu doux : la chair doit se détacher de l’os.',
    'Faire sauter les champignons émincés 5 min à feu vif dans le reste du beurre et les ajouter 20 min avant la fin. Saler, poivrer et retirer le bouquet garni avant de servir.'
  ]);

  R('poulet-vallee-auge', 'Poulet vallée d’Auge', 'Française', 'Plat', 70, 'Facile', 4, [
    ['cuisses-poulet', 4], ['cidre', 25, 'cl'], ['pommes', 2], ['champignons', 200, 'g'], ['creme-fraiche', 20, 'cl'],
    ['echalotes', 2], ['beurre', 40, 'g'], ['calvados', 4, 'cl', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Dans une cocotte, faire dorer les cuisses de poulet 10 min à feu moyen dans 20 g de beurre, en ajoutant les échalotes émincées à mi-parcours.',
    'Flamber au calvados si vous en avez, puis déglacer au cidre. Couvrir et cuire 35 min à feu doux.',
    'Ajouter les champignons émincés et cuire encore 10 min à feu doux. Pendant ce temps, faire dorer les pommes en quartiers 8 min à feu moyen dans le reste du beurre.',
    'Incorporer la crème dans la cocotte et laisser épaissir 5 min à découvert, à feu moyen. Saler, poivrer et servir avec les pommes.'
  ]);

  R('lapin-moutarde', 'Lapin à la moutarde', 'Française', 'Plat', 75, 'Facile', 4, [
    ['lapin', 1200, 'g'], ['moutarde', 4, 'cs'], ['creme-fraiche', 20, 'cl'], ['vin-blanc', 20, 'cl'], ['echalotes', 3],
    ['thym', 2, 'pc', 'opt'], ['beurre', 30, 'g'], ['sel', null], ['poivre', null]
  ], [
    'Badigeonner les morceaux de lapin de 3 cuillères à soupe de moutarde.',
    'Dans une cocotte, les faire dorer 10 min à feu moyen dans le beurre avec les échalotes émincées.',
    'Verser le vin blanc, ajouter le thym, couvrir et cuire 45 min à feu doux.',
    'Ajouter la crème mélangée au reste de moutarde et laisser réduire 5 min à découvert, à feu moyen. Saler et poivrer.'
  ]);

  R('magret-pommes-sarladaises', 'Magret de canard et pommes sarladaises', 'Française', 'Plat', 55, 'Moyenne', 4, [
    ['magrets-de-canard', 2], ['pommes-de-terre', 800, 'g'], ['ail', 2], ['persil', 0.5],
    ['sel', null], ['poivre', null]
  ], [
    'Éplucher les pommes de terre, les couper en rondelles de 3 mm, les rincer et bien les sécher.',
    'Quadriller la peau des magrets sans entailler la chair. Les cuire côté peau 8 min à feu moyen dans une poêle à sec, en retirant la graisse au fur et à mesure (la garder).',
    'Dans une autre poêle, faire dorer les pommes de terre dans 3 cuillères à soupe de graisse de canard, 20 à 25 min à feu moyen, en les retournant souvent. Saler.',
    'Pendant ce temps, finir les magrets 4 min côté chair à feu moyen (rosé : 55 °C à cœur), puis les laisser reposer 5 min sous aluminium.',
    'Ajouter l’ail et le persil hachés aux pommes de terre 2 min avant la fin. Trancher les magrets, saler, poivrer et servir.'
  ]);

  R('canard-orange', 'Magret de canard à l’orange', 'Française', 'Plat', 45, 'Moyenne', 4, [
    ['magrets-de-canard', 2], ['oranges', 3], ['sucre', 30, 'g'], ['vinaigre', 2, 'cs'], ['fond-de-veau', 10, 'g', 'opt'],
    ['sel', null], ['poivre', null]
  ], [
    'Quadriller la peau des magrets. Les cuire 8 min côté peau à feu moyen en retirant la graisse, puis 4 min côté chair (rosé : 55 °C à cœur). Laisser reposer 5 min sous aluminium.',
    'Dans une casserole, faire fondre le sucre à sec 4 à 5 min à feu moyen, jusqu’au caramel blond, puis déglacer avec le vinaigre et le jus de 2 oranges.',
    'Ajouter 10 cl d’eau (avec le fond de veau délayé si vous en avez) et laisser réduire 10 min à feu moyen, jusqu’à ce que la sauce nappe la cuillère. Saler, poivrer.',
    'Peler la dernière orange à vif et en lever les suprêmes. Servir les magrets tranchés avec la sauce et les suprêmes.'
  ]);

  R('filet-mignon-moutarde', 'Filet mignon à la moutarde', 'Française', 'Plat', 45, 'Facile', 4, [
    ['filet-mignon-de-porc', 600, 'g'], ['moutarde-a-l-ancienne', 2, 'cs'], ['creme-fraiche', 20, 'cl'], ['echalotes', 2],
    ['vin-blanc', 10, 'cl', 'opt'], ['beurre', 20, 'g'], ['sel', null], ['poivre', null]
  ], [
    'Dans une cocotte, faire dorer le filet mignon entier 5 min à feu moyen-vif dans le beurre, sur toutes les faces.',
    'Ajouter les échalotes émincées, déglacer au vin blanc (ou à défaut avec 10 cl d’eau), couvrir et cuire 20 à 25 min à feu doux (68 °C à cœur).',
    'Retirer la viande et la garder au chaud. Ajouter la crème et la moutarde dans la cocotte et laisser épaissir 3 min à feu moyen. Saler, poivrer.',
    'Servir le filet en médaillons nappés de sauce.'
  ]);

  R('roti-porc', 'Rôti de porc aux pommes de terre', 'Française', 'Plat', 110, 'Facile', 6, [
    ['roti-de-porc', 1200, 'g'], ['pommes-de-terre', 1000, 'g'], ['oignons', 2], ['ail', 4], ['thym', 2, 'pc', 'opt'],
    ['beurre', 30, 'g'], ['vin-blanc', 10, 'cl', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Préchauffer le four à 180 °C. Faire dorer le rôti sur toutes les faces dans le beurre, 8 min à feu moyen-vif.',
    'Le poser dans un plat, entouré des pommes de terre en quartiers, des oignons en quartiers et de l’ail en chemise.',
    'Arroser de vin blanc et de 15 cl d’eau, ajouter le thym, saler et poivrer.',
    'Cuire 1 h 15 au four en arrosant régulièrement (68 à 70 °C à cœur). Laisser reposer 10 min sous aluminium avant de trancher.'
  ]);

  R('roti-boeuf', 'Rôti de bœuf', 'Française', 'Plat', 75, 'Moyenne', 6, [
    ['roti-de-boeuf', 1000, 'g'], ['beurre', 20, 'g'], ['huile', 1, 'cs'], ['ail', 3, 'pc', 'opt'], ['thym', 2, 'pc', 'opt'],
    ['sel', null], ['poivre', null]
  ], [
    'Sortir le rôti du réfrigérateur 30 min avant. Préchauffer le four à 220 °C.',
    'Le saisir 5 min sur toutes les faces, à feu vif, dans l’huile et le beurre.',
    'L’enfourner avec l’ail en chemise et le thym : 15 min par 500 g pour une cuisson saignante (30 min pour 1 kg, 50 °C à cœur).',
    'Laisser reposer 10 min sous aluminium avant de trancher. Saler et poivrer au moment de servir.'
  ]);

  R('gigot-agneau', 'Gigot d’agneau aux flageolets', 'Française', 'Plat', 120, 'Moyenne', 8, [
    ['gigot-d-agneau', 2000, 'g'], ['ail', 6], ['romarin-frais', 2, 'pc', 'opt'], ['flageolets', 800, 'g'],
    ['huile-olive', 3, 'cs'], ['beurre', 30, 'g'], ['sel', null], ['poivre', null]
  ], [
    'Sortir le gigot du réfrigérateur 30 min avant. Préchauffer le four à 210 °C.',
    'Piquer le gigot de 4 gousses d’ail coupées en deux, le masser d’huile d’olive, saler et poivrer.',
    'Le cuire au four 15 min par 500 g (1 h pour 2 kg, rosé : 55 à 58 °C à cœur) avec le romarin et les 2 gousses d’ail restantes, en l’arrosant régulièrement ; verser 10 cl d’eau dans le plat à mi-cuisson.',
    'Laisser reposer 15 min sous aluminium. Pendant ce temps, réchauffer les flageolets égouttés 5 min à feu doux avec le beurre et le jus de cuisson.'
  ]);

  R('choucroute-garnie', 'Choucroute garnie', 'Française', 'Plat', 130, 'Facile', 6, [
    ['choucroute-crue', 1500, 'g'], ['saucisses-de-strasbourg', 6], ['saucisse-de-morteau', 1], ['poitrine-de-porc', 500, 'g'],
    ['pommes-de-terre', 800, 'g'], ['vin-blanc', 25, 'cl'], ['oignons', 1], ['huile', 1, 'cs'], ['laurier', 2],
    ['clous-de-girofle', 2, 'pc', 'opt'], ['baies-de-genievre', 1, 'cc', 'opt'], ['poivre', null]
  ], [
    'Rincer la choucroute à l’eau froide et bien l’égoutter en la pressant.',
    'Dans une grande cocotte, faire fondre l’oignon émincé 5 min à feu doux dans l’huile. Ajouter la choucroute, le vin, le laurier, les clous de girofle, les baies de genièvre et 20 cl d’eau. Poivrer.',
    'Enfouir la poitrine et la saucisse de Morteau piquée, couvrir et cuire 1 h 30 à feu doux.',
    'Ajouter les pommes de terre épluchées 30 min avant la fin, puis les saucisses de Strasbourg 10 min avant.'
  ]);

  R('raclette', 'Raclette', 'Française', 'Plat', 40, 'Facile', 4, [
    ['fromage-a-raclette', 800, 'g'], ['pommes-de-terre', 1200, 'g'], ['jambon-cru', 8], ['jambon', 4, 'pc', 'opt'],
    ['saucisson-sec', 150, 'g', 'opt'], ['cornichons', 100, 'g', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Cuire les pommes de terre dans leur peau 25 min à l’eau salée frémissante.',
    'Disposer la charcuterie et les cornichons sur un plat.',
    'Faire fondre le fromage en tranches dans les poêlons de l’appareil à raclette, 3 à 5 min, jusqu’à ce qu’il bouillonne, et le verser sur les pommes de terre. Poivrer.'
  ]);

  R('fondue-savoyarde', 'Fondue savoyarde', 'Française', 'Plat', 30, 'Moyenne', 4, [
    ['comte', 300, 'g'], ['beaufort', 300, 'g'], ['emmental', 200, 'g'], ['vin-blanc', 30, 'cl'], ['ail', 1],
    ['baguette', 2], ['maizena', 10, 'g', 'opt'], ['kirsch', 4, 'cl', 'opt'], ['poivre', null]
  ], [
    'Couper le pain en cubes, en gardant un morceau de croûte sur chacun (un pain de la veille tient mieux).',
    'Frotter le caquelon avec la gousse d’ail coupée, y chauffer le vin blanc 3 min à feu moyen, sans le faire bouillir.',
    'Ajouter les fromages coupés en petits dés, par poignées, et remuer en huit à feu doux, 8 à 10 min, jusqu’à ce que la fondue soit lisse.',
    'Poivrer, ajouter le kirsch et, si la fondue est trop liquide, la maïzena délayée dans un peu de vin : laisser épaissir 1 min à feu doux en remuant. Servir sur le réchaud.'
  ]);

  R('aligot', 'Aligot', 'Française', 'Plat', 50, 'Moyenne', 4, [
    ['pommes-de-terre', 1000, 'g'], ['tomme', 400, 'g'], ['creme-fraiche', 20, 'cl'], ['beurre', 50, 'g'], ['ail', 1],
    ['sel', null], ['poivre', null]
  ], [
    'Cuire les pommes de terre épluchées 25 min à l’eau salée frémissante avec la gousse d’ail.',
    'Les passer au presse-purée avec l’ail, puis les remettre dans la casserole à feu doux avec le beurre et la crème.',
    'Ajouter la tomme en fines lamelles et travailler vigoureusement à la spatule, 5 à 10 min à feu doux, jusqu’à ce que la purée soit lisse et file. Saler, poivrer.',
    'Servir aussitôt, avec des saucisses par exemple.'
  ]);

  R('parmentier-canard', 'Parmentier de canard', 'Française', 'Plat', 75, 'Facile', 6, [
    ['confit-canard', 4], ['pommes-de-terre', 1200, 'g'], ['echalotes', 3], ['lait', 25, 'cl'], ['beurre', 40, 'g'],
    ['chapelure', 20, 'g', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Cuire les pommes de terre épluchées 25 min à l’eau salée frémissante.',
    'Pendant ce temps, réchauffer les cuisses de canard 10 min à feu doux dans une poêle pour faire fondre leur graisse. Retirer la peau et les os, effilocher la chair.',
    'Faire revenir les échalotes émincées 3 min à feu moyen dans 1 cuillère à soupe de graisse de canard, ajouter la chair et mélanger. Poivrer.',
    'Préchauffer le four à 200 °C. Écraser les pommes de terre avec le lait chaud et le beurre. Saler et poivrer.',
    'Étaler le canard dans un plat, couvrir de purée, parsemer de chapelure et gratiner 20 min au four à 200 °C, jusqu’à ce que le dessus soit doré.'
  ]);

  R('escalopes-dinde-creme', 'Escalopes de dinde à la crème', 'Française', 'Plat', 30, 'Facile', 4, [
    ['escalopes-de-dinde', 4], ['champignons', 250, 'g'], ['creme-fraiche', 20, 'cl'], ['echalotes', 1], ['beurre', 20, 'g'],
    ['vin-blanc', 10, 'cl', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Faire dorer les escalopes 3 min de chaque côté à feu moyen dans le beurre. Saler, poivrer et réserver.',
    'Dans la même poêle, faire revenir 5 min à feu moyen l’échalote ciselée et les champignons émincés, puis déglacer au vin blanc si vous en avez.',
    'Ajouter la crème, remettre les escalopes et laisser mijoter 5 min à feu doux.'
  ]);

  R('cordon-bleu', 'Cordons bleus maison', 'Française', 'Plat', 40, 'Moyenne', 4, [
    ['escalopes-de-dinde', 4], ['jambon', 4], ['emmental', 100, 'g'], ['oeufs', 2], ['farine', 50, 'g'], ['chapelure', 100, 'g'],
    ['beurre', 40, 'g'], ['sel', null], ['poivre', null]
  ], [
    'Aplatir les escalopes au rouleau entre deux feuilles de papier sulfurisé.',
    'Poser sur une moitié de chaque escalope une tranche de jambon pliée et des lamelles d’emmental, replier et presser les bords.',
    'Saler, poivrer, puis passer dans la farine, les œufs battus et la chapelure.',
    'Cuire 6 à 7 min de chaque côté à feu moyen dans le beurre, jusqu’à ce qu’ils soient bien dorés.'
  ]);

  R('potee', 'Potée auvergnate', 'Française', 'Plat', 180, 'Facile', 6, [
    ['chou', 1], ['poitrine-de-porc', 600, 'g'], ['saucisse-de-morteau', 1], ['pommes-de-terre', 800, 'g'], ['carottes', 4],
    ['navets', 3], ['oignons', 1], ['bouquet-garni', 1], ['poivre', null]
  ], [
    'Blanchir le chou coupé en quartiers 5 min à l’eau bouillante, puis l’égoutter.',
    'Mettre la poitrine dans un faitout avec l’oignon et le bouquet garni, couvrir d’eau froide, porter à ébullition puis laisser frémir 1 h à feu doux.',
    'Ajouter le chou, les carottes et les navets, cuire 1 h à feu doux.',
    'Ajouter la saucisse et les pommes de terre épluchées, cuire encore 30 min à feu doux. Goûter avant de saler : la viande l’est déjà.'
  ]);

  R('petit-sale-lentilles', 'Petit salé aux lentilles', 'Française', 'Plat', 120, 'Facile', 6, [
    ['poitrine-de-porc', 800, 'g'], ['lentilles', 400, 'g'], ['carottes', 2], ['oignons', 1], ['bouquet-garni', 1],
    ['saucisse-de-morteau', 1, 'pc', 'opt'], ['poivre', null]
  ], [
    'Mettre la poitrine demi-sel dans une cocotte d’eau froide, porter à ébullition, laisser bouillir 5 min puis égoutter : cela retire l’excès de sel.',
    'La recouvrir d’eau froide avec l’oignon et le bouquet garni, porter à frémissement et cuire 1 h à feu doux.',
    'Ajouter les lentilles rincées, les carottes en rondelles et la saucisse, et cuire 30 min à feu doux, jusqu’à ce que les lentilles soient tendres.',
    'Goûter avant de saler : la viande l’est déjà.'
  ]);

  R('poivrons-farcis', 'Poivrons farcis', 'Française', 'Plat', 85, 'Facile', 4, [
    ['poivrons', 4], ['boeuf-hache', 400, 'g'], ['riz', 100, 'g'], ['oignons', 1], ['tomates-concassees', 400, 'g'], ['ail', 1],
    ['herbes-provence', 1, 'cc'], ['fromage-rape', 50, 'g', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Préchauffer le four à 180 °C. Couper le chapeau des poivrons et les épépiner.',
    'Mélanger la viande avec le riz cru, l’oignon et l’ail hachés, les herbes, du sel et du poivre.',
    'Farcir les poivrons, remettre les chapeaux et les poser dans un plat. Verser les tomates autour avec 20 cl d’eau.',
    'Cuire 1 h au four, en parsemant de fromage râpé 10 min avant la fin : les poivrons doivent être tendres et le riz cuit.'
  ]);

  R('courgettes-farcies', 'Courgettes farcies', 'Française', 'Plat', 60, 'Facile', 4, [
    ['courgettes', 4], ['chair-saucisse', 300, 'g'], ['oignons', 1], ['ail', 1], ['chapelure', 20, 'g'],
    ['parmesan', 30, 'g', 'opt'], ['huile-olive', 2, 'cs'], ['sel', null], ['poivre', null]
  ], [
    'Préchauffer le four à 180 °C. Couper les courgettes en deux dans la longueur et les évider à la cuillère.',
    'Hacher la chair des courgettes et la faire revenir 5 min à feu moyen dans 1 cuillère à soupe d’huile avec l’oignon et l’ail hachés. Hors du feu, mélanger avec la chair à saucisse, saler et poivrer.',
    'Garnir les courgettes, parsemer de chapelure et de parmesan râpé, arroser du reste d’huile.',
    'Cuire 40 min au four, jusqu’à ce que les courgettes soient tendres et le dessus doré.'
  ]);

  R('tomates-provencales', 'Tomates à la provençale', 'Française', 'Accompagnement', 40, 'Facile', 4, [
    ['tomates', 6], ['ail', 2], ['persil', 0.5], ['chapelure', 30, 'g'], ['huile-olive', 3, 'cs'], ['sel', null], ['poivre', null]
  ], [
    'Préchauffer le four à 200 °C. Couper les tomates en deux et les poser dans un plat, face coupée vers le haut.',
    'Mélanger l’ail et le persil hachés avec la chapelure.',
    'Saler et poivrer les tomates, les parsemer de ce mélange et les arroser d’huile d’olive.',
    'Cuire 30 min au four, jusqu’à ce qu’elles soient fondantes et bien gratinées. Parfait avec une viande grillée ou du riz.'
  ]);

  R('oeufs-meurette', 'Œufs en meurette', 'Française', 'Plat', 45, 'Moyenne', 4, [
    ['oeufs', 8], ['vin-rouge', 50, 'cl'], ['lardons', 150, 'g'], ['echalotes', 3], ['champignons', 150, 'g'], ['beurre', 30, 'g'],
    ['farine', 15, 'g'], ['pain', 8], ['vinaigre', 2, 'cs'], ['sel', null], ['poivre', null]
  ], [
    'Faire revenir les lardons, les échalotes émincées et les champignons 5 min à feu moyen dans la moitié du beurre.',
    'Verser le vin, porter à ébullition et laisser réduire de moitié à feu moyen, 15 min environ. Lier avec le reste du beurre malaxé avec la farine, en fouettant 2 min. Saler, poivrer.',
    'Porter une casserole d’eau non salée à frémissement avec le vinaigre. Y casser les œufs un à un, par 4 à la fois, et les pocher 3 min (blanc pris, jaune coulant), puis les égoutter sur du papier absorbant.',
    'Griller les tranches de pain 2 min au grille-pain et servir les œufs dessus, nappés de sauce.'
  ]);

  R('souffle-fromage', 'Soufflé au fromage', 'Française', 'Plat', 50, 'Moyenne', 4, [
    ['oeufs', 4], ['lait', 25, 'cl'], ['beurre', 50, 'g'], ['farine', 40, 'g'], ['comte', 100, 'g'], ['muscade', 1, 'pincee', 'opt'],
    ['sel', null], ['poivre', null]
  ], [
    'Préchauffer le four à 200 °C. Beurrer un moule à soufflé avec 10 g de beurre. Râper le comté et séparer les blancs des jaunes.',
    'Béchamel épaisse : faire fondre le reste du beurre à feu moyen, ajouter la farine et cuire 1 min en remuant, puis verser le lait et fouetter 2 à 3 min, jusqu’à épaississement. Saler, poivrer, ajouter la muscade.',
    'Hors du feu, incorporer les jaunes puis le fromage. Monter les blancs en neige ferme avec une pincée de sel et les incorporer délicatement.',
    'Remplir le moule aux trois quarts et cuire 25 min au four, sans ouvrir la porte, jusqu’à ce que le soufflé soit bien gonflé et doré. Servir aussitôt.'
  ]);

  R('flamiche-maroilles', 'Tarte au maroilles', 'Française', 'Plat', 45, 'Facile', 6, [
    ['pate-brisee', 1], ['maroilles', 400, 'g'], ['oeufs', 3], ['creme-fraiche', 20, 'cl'], ['lait', 10, 'cl'], ['poivre', null]
  ], [
    'Préchauffer le four à 200 °C. Étaler la pâte dans un moule et la piquer à la fourchette.',
    'Battre les œufs avec la crème et le lait, poivrer (inutile de saler : le maroilles l’est assez).',
    'Répartir le maroilles en tranches (avec la croûte) sur la pâte et verser l’appareil.',
    'Cuire 30 min au four, jusqu’à ce que la tarte soit dorée.'
  ]);

  R('quiche-saumon-epinards', 'Quiche saumon et épinards', 'Française', 'Plat', 60, 'Facile', 6, [
    ['pate-brisee', 1], ['saumon', 2], ['epinards', 300, 'g'], ['oeufs', 3], ['creme-fraiche', 20, 'cl'], ['lait', 10, 'cl'],
    ['sel', null], ['poivre', null]
  ], [
    'Préchauffer le four à 180 °C. Étaler la pâte dans un moule et la piquer à la fourchette.',
    'Faire tomber les épinards 3 min à feu moyen dans une poêle, puis les presser pour en retirer l’eau.',
    'Répartir les épinards et le saumon cru, sans peau et coupé en dés, sur la pâte.',
    'Battre les œufs avec la crème et le lait, saler, poivrer et verser sur la garniture. Cuire 35 à 40 min au four, jusqu’à ce que la quiche soit prise et dorée.'
  ]);

  R('coquillettes-jambon', 'Coquillettes jambon comté', 'Française', 'Plat', 25, 'Facile', 4, [
    ['pates', 400, 'g'], ['jambon', 4], ['comte', 150, 'g'], ['beurre', 20, 'g'], ['creme-fraiche', 10, 'cl', 'opt'],
    ['sel', null], ['poivre', null]
  ], [
    'Cuire les coquillettes dans 4 L d’eau bouillante salée, 8 à 10 min selon le paquet, puis les égoutter en gardant 5 cl d’eau de cuisson.',
    'Les remettre dans la casserole à feu doux avec le beurre, la crème, le jambon en dés, le comté râpé et l’eau de cuisson réservée. Mélanger 1 à 2 min, jusqu’à ce que ce soit crémeux. Poivrer.'
  ]);

  R('boulettes-tomate', 'Boulettes de bœuf à la sauce tomate', 'Française', 'Plat', 55, 'Facile', 4, [
    ['boeuf-hache', 500, 'g'], ['oeufs', 1], ['chapelure', 40, 'g'], ['oignons', 1], ['ail', 2], ['tomates-concassees', 800, 'g'],
    ['persil', 0.5, 'pc', 'opt'], ['parmesan', 30, 'g', 'opt'], ['huile-olive', 2, 'cs'], ['sel', null], ['poivre', null]
  ], [
    'Mélanger la viande avec l’œuf, la chapelure, la moitié de l’oignon et de l’ail hachés, le persil ciselé et le parmesan râpé. Saler, poivrer.',
    'Former des boulettes et les faire dorer 8 min à feu moyen dans l’huile, dans une sauteuse. Réserver.',
    'Dans la même sauteuse, faire revenir 3 min à feu moyen le reste d’oignon et d’ail, ajouter les tomates et laisser mijoter 10 min à feu doux.',
    'Ajouter les boulettes, couvrir et cuire encore 20 min à feu doux. Servir avec des pâtes ou du riz.'
  ]);

  R('brandade-morue', 'Brandade de morue', 'Française', 'Plat', 90, 'Moyenne', 6, [
    ['morue-salee', 600, 'g'], ['pommes-de-terre', 800, 'g'], ['lait', 30, 'cl'], ['huile-olive', 10, 'cs'], ['ail', 3],
    ['persil', 0.5, 'pc', 'opt'], ['poivre', null]
  ], [
    'La veille (temps non compté), dessaler la morue 24 h dans l’eau froide, au réfrigérateur, en changeant l’eau 3 ou 4 fois.',
    'La pocher 10 min dans le lait frémissant, à feu doux, puis l’égoutter en gardant le lait et l’effeuiller en retirant peau et arêtes.',
    'Cuire les pommes de terre épluchées 25 min à l’eau frémissante et les écraser. Préchauffer le four à 200 °C.',
    'Mélanger la purée avec la morue, l’ail écrasé, l’huile d’olive, le persil haché et un peu du lait réservé, jusqu’à obtenir une texture onctueuse. Poivrer.',
    'Verser dans un plat et gratiner 20 min au four à 200 °C, jusqu’à ce que le dessus soit doré.'
  ]);

  R('sole-meuniere', 'Sole meunière', 'Française', 'Plat', 25, 'Moyenne', 2, [
    ['soles', 2], ['beurre', 60, 'g'], ['farine', 30, 'g'], ['citron', 1], ['persil', 0.25, 'pc', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Fariner légèrement les soles vidées et pelées, saler et poivrer.',
    'Les cuire 4 à 5 min de chaque côté à feu moyen dans la moitié du beurre.',
    'Les réserver sur un plat chaud. Faire mousser le reste du beurre 1 à 2 min à feu moyen, jusqu’à ce qu’il soit noisette, puis ajouter hors du feu le jus de citron et le persil haché.',
    'Napper les soles de ce beurre et servir aussitôt.'
  ]);

  R('dorade-four', 'Dorade au four', 'Française', 'Plat', 45, 'Facile', 4, [
    ['dorade', 4], ['citron', 1], ['tomates-cerises', 250, 'g'], ['oignons', 1], ['fenouil', 1, 'pc', 'opt'], ['huile-olive', 3, 'cs'],
    ['thym-frais', 2, 'pc', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Préchauffer le four à 200 °C.',
    'Disposer l’oignon et le fenouil finement émincés dans un plat, arroser d’un filet d’huile et enfourner 10 min.',
    'Poser dessus les dorades vidées et écaillées. Glisser des rondelles de citron et le thym dans le ventre, ajouter les tomates cerises autour.',
    'Arroser du reste d’huile, saler, poivrer et cuire 20 à 25 min au four : la chair doit se détacher facilement de l’arête.'
  ]);

  R('saint-jacques-poelees', 'Saint-Jacques poêlées', 'Française', 'Plat', 20, 'Moyenne', 4, [
    ['noix-de-saint-jacques', 500, 'g'], ['beurre', 30, 'g'], ['echalotes', 1], ['creme-liquide', 15, 'cl', 'opt'],
    ['persil', 0.25, 'pc', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Sécher les noix sur du papier absorbant.',
    'Les saisir 1 min 30 de chaque côté à feu vif dans le beurre bien chaud et mousseux, sans les serrer. Saler, poivrer et réserver.',
    'Faire fondre l’échalote ciselée 2 min à feu doux dans la poêle, ajouter la crème et laisser réduire 2 min à feu moyen.',
    'Servir les noix nappées de sauce et parsemées de persil haché, avec du riz ou une fondue de poireaux.'
  ]);

  R('colin-beurre-citron', 'Colin au beurre citronné', 'Française', 'Plat', 30, 'Facile', 4, [
    ['colin', 600, 'g'], ['beurre', 60, 'g'], ['echalotes', 2], ['vin-blanc', 10, 'cl'], ['citron', 1], ['riz', 300, 'g', 'opt'],
    ['sel', null], ['poivre', null]
  ], [
    'Cuire le riz dans 3 L d’eau bouillante salée, 10 à 12 min selon le paquet, et l’égoutter.',
    'Cuire le colin 8 à 10 min à la vapeur, ou 12 à 15 min au four préchauffé à 180 °C : la chair doit être opaque et s’effeuiller. Saler, poivrer.',
    'Faire réduire les échalotes hachées avec le vin blanc 5 min à feu moyen, jusqu’à ce qu’il n’en reste presque plus.',
    'Hors du feu, incorporer le beurre froid en morceaux en fouettant, puis le jus de citron. Napper le poisson et servir avec le riz.'
  ]);

  R('maquereaux-moutarde', 'Maquereaux au four à la moutarde', 'Française', 'Plat', 50, 'Facile', 4, [
    ['maquereaux', 4], ['moutarde', 2, 'cs'], ['citron', 1], ['pommes-de-terre', 600, 'g'], ['huile-olive', 2, 'cs'],
    ['sel', null], ['poivre', null]
  ], [
    'Préchauffer le four à 200 °C. Étaler les pommes de terre épluchées, en fines rondelles, dans un plat, arroser d’huile, saler et enfourner 15 min.',
    'Badigeonner l’intérieur des maquereaux vidés de moutarde, saler, poivrer et glisser une rondelle de citron dans chacun.',
    'Les poser sur les pommes de terre et cuire 20 à 25 min au four, jusqu’à ce que la chair se détache de l’arête.'
  ]);

  R('veloute-champignons', 'Velouté de champignons', 'Française', 'Soupe', 40, 'Facile', 4, [
    ['champignons', 500, 'g'], ['oignons', 1], ['bouillon', 1], ['creme-liquide', 20, 'cl'], ['beurre', 20, 'g'], ['sel', null], ['poivre', null]
  ], [
    'Faire fondre l’oignon émincé 3 min à feu moyen dans le beurre, ajouter les champignons émincés et cuire 5 min à feu moyen.',
    'Couvrir de 75 cl d’eau, ajouter le cube de bouillon, porter à ébullition et cuire 20 min à feu doux, à couvert.',
    'Mixer avec la crème. Saler et poivrer.'
  ]);

  R('soupe-carottes-cumin', 'Soupe de carottes au cumin', 'Française', 'Soupe', 40, 'Facile', 4, [
    ['carottes', 8], ['oignons', 1], ['cumin', 1, 'cc'], ['bouillon', 1], ['huile-olive', 1, 'cs'], ['creme-liquide', 10, 'cl', 'opt'],
    ['sel', null], ['poivre', null]
  ], [
    'Faire revenir l’oignon émincé et le cumin 3 min à feu moyen dans l’huile.',
    'Ajouter les carottes en rondelles, 1 L d’eau et le cube de bouillon. Porter à ébullition et cuire 25 min à feu doux, à couvert, jusqu’à ce que les légumes soient tendres.',
    'Mixer, ajouter la crème, saler et poivrer.'
  ]);

  R('veloute-brocoli', 'Velouté de brocoli', 'Française', 'Soupe', 25, 'Facile', 4, [
    ['brocoli', 2], ['pommes-de-terre', 200, 'g'], ['bouillon', 1], ['creme-liquide', 10, 'cl', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Détailler le brocoli en bouquets et couper la pomme de terre épluchée en dés.',
    'Les cuire 15 min à feu moyen dans 1 L d’eau bouillante avec le cube de bouillon : le brocoli doit rester bien vert.',
    'Mixer avec la crème. Saler et poivrer.'
  ]);

  R('veloute-chou-fleur', 'Velouté de chou-fleur', 'Française', 'Soupe', 40, 'Facile', 4, [
    ['chou-fleur', 1], ['pommes-de-terre', 200, 'g'], ['bouillon', 1], ['beurre', 20, 'g'], ['creme-liquide', 10, 'cl', 'opt'],
    ['muscade', 1, 'pincee', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Faire revenir le chou-fleur en bouquets 5 min à feu moyen dans le beurre, sans le colorer.',
    'Ajouter la pomme de terre épluchée en dés, 1 L d’eau et le cube de bouillon. Porter à ébullition et cuire 25 min à feu doux, à couvert, jusqu’à ce que les légumes soient tendres.',
    'Mixer avec la crème, parfumer d’une pincée de muscade. Saler et poivrer.'
  ]);

  R('soupe-courgettes', 'Soupe de courgettes au fromage frais', 'Française', 'Soupe', 25, 'Facile', 4, [
    ['courgettes', 4], ['oignons', 1], ['bouillon', 1], ['fromage-frais-aux-herbes', 100, 'g'], ['sel', null], ['poivre', null]
  ], [
    'Couper les courgettes en morceaux et l’oignon en lamelles.',
    'Les cuire 15 min à feu moyen dans 75 cl d’eau bouillante avec le cube de bouillon, jusqu’à ce qu’elles soient tendres.',
    'Mixer avec le fromage frais. Saler et poivrer.'
  ]);

  R('boeuf-stroganoff', 'Bœuf Stroganoff', 'Russe', 'Plat', 30, 'Facile', 4, [
    ['boeuf-poeler', 600, 'g'], ['champignons', 250, 'g'], ['oignons', 1], ['creme-fraiche', 20, 'cl'], ['paprika', 1, 'cc'],
    ['moutarde', 1, 'cs'], ['beurre', 30, 'g'], ['riz', 300, 'g', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Cuire le riz dans 3 L d’eau bouillante salée, 10 à 12 min selon le paquet, et l’égoutter.',
    'Couper le bœuf en fines lanières et le saisir 2 min à feu vif dans la moitié du beurre, en deux fois. Réserver.',
    'Dans la même poêle, faire revenir 5 min à feu moyen l’oignon et les champignons émincés dans le reste du beurre.',
    'Ajouter le paprika, la moutarde et la crème, laisser épaissir 2 min à feu moyen, puis remettre la viande 1 min à feu doux. Saler, poivrer et servir avec le riz.'
  ]);

  /* ───────────── Française : entrées ───────────── */

  R('oeufs-mimosa', 'Œufs mimosa', 'Française', 'Entrée', 25, 'Facile', 6, [
    ['oeufs', 6], ['mayonnaise', 4, 'cs'], ['ciboulette', 0.25, 'pc', 'opt'], ['paprika', 1, 'pincee', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Cuire les œufs 10 min dans l’eau bouillante, les refroidir dans l’eau froide et les écaler.',
    'Les couper en deux. Réserver 2 jaunes et écraser les autres avec la mayonnaise. Saler, poivrer.',
    'Garnir les blancs de ce mélange, émietter dessus les jaunes réservés, puis parsemer de ciboulette ciselée et de paprika.'
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
    'Émincer les endives en retirant le cône amer à la base, et couper la pomme en fines lamelles.',
    'Préparer une vinaigrette avec la moutarde, le vinaigre et l’huile. Poivrer (le roquefort sale assez).',
    'Mélanger, parsemer de roquefort émietté et de noix concassées.'
  ]);

  R('piemontaise', 'Salade piémontaise', 'Française', 'Plat', 60, 'Facile', 6, [
    ['pommes-de-terre', 800, 'g'], ['oeufs', 3], ['tomates', 3], ['jambon', 3], ['cornichons', 50, 'g'], ['mayonnaise', 5, 'cs'],
    ['persil', 0.25, 'pc', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Cuire les pommes de terre dans leur peau 20 à 25 min à l’eau salée frémissante (tendres à la pointe du couteau) et les œufs 10 min à l’eau bouillante. Laisser refroidir 20 min.',
    'Éplucher les pommes de terre, écaler les œufs, puis couper les pommes de terre, les tomates, le jambon, les cornichons et les œufs en dés.',
    'Mélanger avec la mayonnaise, saler, poivrer et parsemer de persil haché. Servir frais.'
  ]);

  R('salade-riz', 'Salade de riz', 'Française', 'Plat', 40, 'Facile', 6, [
    ['riz', 250, 'g'], ['thon-boite', 150, 'g'], ['tomates', 3], ['mais-doux', 150, 'g'], ['oeufs', 3], ['olives', 50, 'g', 'opt'],
    ['huile', 4, 'cs'], ['vinaigre', 2, 'cs'], ['moutarde', 1, 'cc'], ['sel', null], ['poivre', null]
  ], [
    'Cuire le riz dans 3 L d’eau bouillante salée, 10 à 12 min selon le paquet, le rincer à l’eau froide et l’égoutter. Cuire les œufs 10 min à l’eau bouillante, les refroidir et les écaler.',
    'Couper les tomates et les œufs en morceaux, égoutter le thon et le maïs.',
    'Préparer une vinaigrette avec la moutarde, le vinaigre, l’huile, du sel et du poivre.',
    'Mélanger le riz, la garniture, les olives et la vinaigrette. Servir frais.'
  ]);

  R('taboule-semoule', 'Taboulé à la semoule', 'Française', 'Entrée', 35, 'Facile', 6, [
    ['semoule', 250, 'g'], ['tomates', 3], ['concombre', 1], ['poivrons', 1], ['menthe', 0.5], ['persil', 0.5], ['citron', 2],
    ['huile-olive', 6, 'cs'], ['raisins-secs', 40, 'g', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Mélanger la semoule avec le jus des citrons, l’huile et 20 cl d’eau froide. Laisser gonfler 20 min au frais.',
    'Couper les légumes en petits dés, ciseler la menthe et le persil.',
    'Égrainer la semoule à la fourchette, ajouter les légumes, les herbes et les raisins. Saler, poivrer. Servir frais.'
  ]);

  R('salade-pates', 'Salade de pâtes à l’italienne', 'Française', 'Plat', 25, 'Facile', 4, [
    ['pates', 250, 'g'], ['tomates-cerises', 200, 'g'], ['mozzarella', 125, 'g'], ['olives', 50, 'g'], ['basilic', 0.25, 'pc', 'opt'],
    ['huile-olive', 3, 'cs'], ['vinaigre-balsamique', 1, 'cs'], ['sel', null], ['poivre', null]
  ], [
    'Cuire les pâtes dans 3 L d’eau bouillante salée, 10 à 12 min selon le paquet (al dente), les rincer à l’eau froide et les égoutter.',
    'Ajouter les tomates coupées en deux, la mozzarella en dés et les olives.',
    'Assaisonner d’huile, de vinaigre balsamique, de sel et de poivre, et parsemer de basilic ciselé.'
  ]);

  R('gougeres', 'Gougères au comté', 'Française', 'Entrée', 50, 'Moyenne', 6, [
    ['farine', 125, 'g'], ['beurre', 80, 'g'], ['oeufs', 4], ['comte', 100, 'g'], ['lait', 12, 'cl'], ['muscade', 1, 'pincee', 'opt'],
    ['sel', 1, 'pincee'], ['poivre', null]
  ], [
    'Préchauffer le four à 200 °C. Dans une casserole, porter à ébullition à feu moyen le lait, 12 cl d’eau, le beurre et le sel.',
    'Hors du feu, verser la farine d’un coup et mélanger vivement. Remettre 1 min à feu doux en remuant pour dessécher la pâte : elle doit se détacher des parois.',
    'Hors du feu, incorporer les œufs un à un, puis les deux tiers du comté râpé, la muscade et le poivre.',
    'Former des petites boules à la cuillère ou à la poche sur une plaque couverte de papier cuisson, parsemer du reste de comté et cuire 25 min sans ouvrir le four, jusqu’à ce qu’elles soient gonflées et dorées.'
  ]);

  /* ───────────── Française : desserts ───────────── */

  R('tarte-tatin', 'Tarte Tatin', 'Française', 'Dessert', 85, 'Moyenne', 8, [
    ['pommes', 8], ['pate-feuilletee', 1], ['beurre', 80, 'g'], ['sucre', 120, 'g']
  ], [
    'Préchauffer le four à 200 °C. Dans un moule allant sur le feu, faire fondre le sucre à sec 5 à 8 min à feu moyen, jusqu’au caramel blond, puis ajouter le beurre hors du feu.',
    'Serrer les pommes épluchées en quartiers dans le caramel, bombé contre le fond, et cuire 15 min à feu moyen.',
    'Recouvrir de pâte en rentrant les bords, piquer et cuire 30 min au four, jusqu’à ce que la pâte soit bien dorée.',
    'Laisser tiédir 10 min puis retourner sur un plat.'
  ]);

  R('creme-brulee', 'Crème brûlée', 'Française', 'Dessert', 230, 'Moyenne', 6, [
    ['creme-liquide', 50, 'cl'], ['oeufs', 6], ['sucre', 100, 'g'], ['sucre-roux', 40, 'g'], ['gousses-de-vanille', 1, 'pc', 'opt']
  ], [
    'Préchauffer le four à 100 °C. Chauffer la crème 5 min à feu doux avec la gousse de vanille fendue et grattée, sans la faire bouillir.',
    'Séparer les œufs (garder les blancs pour une autre recette). Fouetter les jaunes avec le sucre, puis verser la crème chaude dessus en mélangeant.',
    'Répartir dans des ramequins et cuire 1 h au four : la crème doit trembler légèrement au centre. Laisser refroidir 30 min, puis réserver au moins 2 h au frais.',
    'Au moment de servir, saupoudrer de sucre roux et caraméliser au chalumeau, ou 1 à 2 min sous le gril du four très chaud, en surveillant.'
  ]);

  R('creme-caramel', 'Crème caramel', 'Française', 'Dessert', 210, 'Facile', 6, [
    ['lait', 50, 'cl'], ['oeufs', 4], ['sucre', 150, 'g'], ['sucre-vanille', 1]
  ], [
    'Préchauffer le four à 160 °C. Cuire 80 g de sucre avec 2 cuillères à soupe d’eau 5 à 8 min à feu moyen, sans remuer, jusqu’au caramel blond, et le verser au fond d’un moule.',
    'Chauffer le lait avec le sucre vanillé 5 min à feu moyen, jusqu’au frémissement. Fouetter les œufs avec le reste du sucre et verser le lait chaud dessus en fouettant.',
    'Verser dans le moule et cuire 45 min au four, au bain-marie d’eau chaude : la lame d’un couteau doit ressortir propre.',
    'Laisser refroidir 30 min, puis réserver au moins 2 h au frais avant de démouler.'
  ]);

  R('flan-patissier', 'Flan pâtissier', 'Française', 'Dessert', 250, 'Facile', 8, [
    ['lait', 75, 'cl'], ['oeufs', 4], ['sucre', 150, 'g'], ['maizena', 80, 'g'], ['pate-brisee', 1], ['sucre-vanille', 1]
  ], [
    'Préchauffer le four à 180 °C. Foncer un moule avec la pâte.',
    'Chauffer le lait avec le sucre vanillé 5 min à feu moyen, jusqu’au frémissement. Fouetter les œufs, le sucre et la maïzena.',
    'Verser le lait chaud dessus, remettre dans la casserole et laisser épaissir 2 min à feu moyen sans cesser de fouetter.',
    'Verser sur la pâte et cuire 45 min au four, jusqu’à ce que le dessus soit bien doré. Laisser refroidir 1 h, puis réserver au moins 2 h au frais.'
  ]);

  R('tarte-citron', 'Tarte au citron', 'Française', 'Dessert', 180, 'Moyenne', 8, [
    ['pate-sablee', 1], ['citron', 4], ['oeufs', 4], ['sucre', 150, 'g'], ['beurre', 100, 'g'], ['maizena', 20, 'g', 'opt']
  ], [
    'Préchauffer le four à 180 °C. Foncer un moule avec la pâte, la piquer et la cuire à blanc au four 20 min, lestée de papier cuisson et de légumes secs, puis 5 min sans lest, jusqu’à ce qu’elle soit dorée.',
    'Dans une casserole, fouetter les œufs, le sucre, le zeste et le jus des citrons (et la maïzena).',
    'Faire épaissir 5 à 8 min à feu doux sans cesser de fouetter, jusqu’à ce que la crème nappe la cuillère, puis ajouter le beurre en morceaux hors du feu.',
    'Verser sur le fond de tarte et laisser prendre au frais 2 h.'
  ]);

  R('tarte-fraises', 'Tarte aux fraises', 'Française', 'Dessert', 110, 'Moyenne', 8, [
    ['pate-sablee', 1], ['fraises', 500, 'g'], ['lait', 50, 'cl'], ['oeufs', 3], ['sucre', 100, 'g'], ['maizena', 40, 'g'],
    ['sucre-vanille', 1, 'pc', 'opt']
  ], [
    'Préchauffer le four à 180 °C. Foncer un moule avec la pâte, la piquer et la cuire à blanc au four 20 min, lestée de papier cuisson et de légumes secs, puis 5 min sans lest, jusqu’à ce qu’elle soit dorée. Laisser refroidir.',
    'Crème pâtissière : chauffer le lait avec le sucre vanillé 5 min à feu moyen, jusqu’au frémissement. Fouetter les jaunes avec le sucre et la maïzena, verser le lait chaud dessus, remettre dans la casserole et épaissir 2 min à feu moyen en fouettant. Filmer au contact et laisser refroidir 1 h au frais.',
    'Étaler la crème sur le fond de tarte.',
    'Disposer les fraises équeutées et coupées en deux.'
  ]);

  R('tarte-poires-amandine', 'Tarte amandine aux poires', 'Française', 'Dessert', 70, 'Moyenne', 8, [
    ['pate-sablee', 1], ['poires', 4], ['amandes-poudre', 100, 'g'], ['beurre', 100, 'g'], ['sucre', 100, 'g'], ['oeufs', 2]
  ], [
    'Préchauffer le four à 180 °C. Foncer un moule avec la pâte.',
    'Crème d’amande : mélanger le beurre mou et le sucre, ajouter les œufs un à un, puis la poudre d’amande.',
    'L’étaler sur la pâte et disposer dessus les poires épluchées, coupées en deux et émincées.',
    'Cuire 40 min au four, jusqu’à ce que la crème soit dorée. Servir tiède ou froid.'
  ]);

  R('galette-rois', 'Galette des rois', 'Française', 'Dessert', 55, 'Moyenne', 8, [
    ['pate-feuilletee', 2], ['amandes-poudre', 125, 'g'], ['sucre', 100, 'g'], ['beurre', 75, 'g'], ['oeufs', 3]
  ], [
    'Préchauffer le four à 200 °C. Mélanger le beurre mou, le sucre, 2 œufs et la poudre d’amande.',
    'Étaler cette crème sur un disque de pâte en laissant 2 cm de bord (sans oublier la fève).',
    'Humidifier le bord, couvrir du second disque et souder les bords. Badigeonner du jaune du dernier œuf, dessiner des motifs à la pointe du couteau et piquer le dessus.',
    'Cuire 30 min au four, jusqu’à ce que la galette soit gonflée et bien dorée.'
  ]);

  R('quatre-quarts', 'Quatre-quarts', 'Française', 'Dessert', 60, 'Facile', 8, [
    ['oeufs', 4], ['farine', 220, 'g'], ['beurre', 220, 'g'], ['sucre', 220, 'g'], ['levure-chimique', 0.5, 'pc', 'opt'],
    ['sel', 1, 'pincee']
  ], [
    'Préchauffer le four à 180 °C.',
    'Fouetter les œufs avec le sucre, ajouter le beurre fondu, puis la farine, la levure et le sel.',
    'Verser dans un moule à cake beurré et cuire 45 min au four : la lame d’un couteau doit ressortir sèche.'
  ]);

  R('cake-citron', 'Cake au citron', 'Française', 'Dessert', 60, 'Facile', 8, [
    ['farine', 200, 'g'], ['sucre', 180, 'g'], ['oeufs', 3], ['beurre', 120, 'g'], ['citron', 2], ['levure-chimique', 1]
  ], [
    'Préchauffer le four à 180 °C.',
    'Fouetter les œufs et le sucre, ajouter le beurre fondu, le zeste et le jus des citrons.',
    'Incorporer la farine et la levure.',
    'Cuire 40 à 45 min au four dans un moule à cake beurré : la lame d’un couteau doit ressortir sèche.'
  ]);

  R('madeleines', 'Madeleines', 'Française', 'Dessert', 90, 'Facile', 6, [
    ['farine', 125, 'g'], ['sucre', 100, 'g'], ['oeufs', 3], ['beurre', 110, 'g'], ['levure-chimique', 0.5], ['citron', 1, 'pc', 'opt']
  ], [
    'Fouetter les œufs et le sucre, ajouter la farine, la levure, le zeste de citron puis 100 g de beurre fondu.',
    'Laisser reposer la pâte 1 h au frais.',
    'Préchauffer le four à 210 °C. Beurrer les moules avec le reste du beurre.',
    'Remplir les moules aux trois quarts et cuire 8 à 10 min au four, jusqu’à ce que les madeleines soient bombées et dorées.'
  ]);

  R('gaufres', 'Gaufres', 'Française', 'Dessert', 40, 'Facile', 6, [
    ['farine', 250, 'g'], ['lait', 50, 'cl'], ['oeufs', 3], ['beurre', 90, 'g'], ['sucre', 30, 'g'], ['levure-chimique', 1],
    ['sel', 1, 'pincee']
  ], [
    'Mélanger la farine, la levure, le sucre et le sel.',
    'Ajouter les œufs, puis le lait petit à petit et enfin 80 g de beurre fondu.',
    'Cuire dans un gaufrier bien chaud, badigeonné du reste de beurre fondu, 3 à 4 min par gaufre, jusqu’à ce qu’elles soient dorées.'
  ]);

  R('semoule-au-lait', 'Semoule au lait', 'Française', 'Dessert', 20, 'Facile', 4, [
    ['semoule-fine-de-ble', 80, 'g'], ['lait', 50, 'cl'], ['sucre', 60, 'g'], ['sucre-vanille', 1], ['raisins-secs', 30, 'g', 'opt']
  ], [
    'Porter le lait à ébullition à feu moyen avec le sucre et le sucre vanillé.',
    'Verser la semoule en pluie et cuire 8 min à feu doux en remuant.',
    'Ajouter les raisins et verser dans des ramequins. Servir tiède ou froid.'
  ]);

  R('pommes-au-four', 'Pommes au four', 'Française', 'Dessert', 50, 'Facile', 4, [
    ['pommes', 4], ['beurre', 40, 'g'], ['sucre-roux', 40, 'g'], ['cannelle', 0.5, 'cc', 'opt'], ['raisins-secs', 30, 'g', 'opt']
  ], [
    'Préchauffer le four à 180 °C. Évider les pommes sans les percer jusqu’en bas.',
    'Remplir le centre de beurre, de sucre, de cannelle et de raisins.',
    'Les poser dans un plat avec 5 cl d’eau et cuire 35 à 40 min au four, jusqu’à ce qu’elles soient tendres à la pointe du couteau.'
  ]);

  R('salade-fruits', 'Salade de fruits frais', 'Française', 'Dessert', 50, 'Facile', 6, [
    ['oranges', 2], ['pommes', 2], ['bananes', 2], ['kiwis', 2], ['fraises', 250, 'g', 'opt'], ['sucre', 30, 'g'], ['citron', 1]
  ], [
    'Éplucher et couper tous les fruits en morceaux.',
    'Arroser de jus de citron pour éviter qu’ils noircissent, sucrer légèrement.',
    'Réserver au frais 30 min avant de servir.'
  ]);
};
