/* Recettes ajoutées en 0.3 (suite). Même format que recettes.js. */
'use strict';

module.exports = function ajouter(R) {
  R('charlotte-fraises', 'Charlotte aux fraises', 'Française', 'Dessert', 400, 'Moyenne', 8, [
    ['boudoirs', 30], ['fraises', 600, 'g'], ['creme-liquide', 30, 'cl'], ['mascarpone', 250, 'g'], ['sucre', 80, 'g']
  ], [
    'Préparer un sirop : porter 20 cl d’eau et 30 g de sucre à ébullition, puis laisser refroidir.',
    'Tremper rapidement les biscuits dans le sirop et en tapisser le fond et les bords d’un moule à charlotte de 18 cm.',
    'Fouetter la crème bien froide avec le mascarpone et le reste du sucre jusqu’à obtenir une chantilly ferme.',
    'Garder quelques fraises pour le décor et couper les autres en morceaux. Alterner couches de crème et de fraises, puis finir par des biscuits imbibés.',
    'Couvrir d’une assiette avec un poids et réserver au moins 6 h au réfrigérateur. Démouler et décorer avec les fraises réservées.'
  ]);

  R('financiers', 'Financiers', 'Française', 'Dessert', 35, 'Facile', 6, [
    ['amandes-poudre', 100, 'g'], ['sucre-glace', 150, 'g'], ['beurre', 110, 'g'], ['oeufs', 4], ['farine', 50, 'g']
  ], [
    'Préchauffer le four à 200 °C. Beurrer des moules à financiers avec 10 g de beurre.',
    'Faire fondre le reste du beurre à feu moyen jusqu’à ce qu’il soit doré et sente la noisette, puis le laisser tiédir.',
    'Mélanger la poudre d’amande, le sucre glace et la farine. Ajouter les blancs d’œufs (garder les jaunes pour une autre recette) et mélanger sans les fouetter.',
    'Incorporer le beurre noisette tiédi.',
    'Remplir les moules aux trois quarts et cuire 12 à 15 min, jusqu’à ce que les bords soient bien dorés.'
  ]);

  R('creme-chocolat', 'Crème au chocolat', 'Française', 'Dessert', 140, 'Facile', 4, [
    ['lait', 50, 'cl'], ['chocolat-noir', 100, 'g'], ['sucre', 50, 'g'], ['maizena', 30, 'g'], ['oeufs', 2]
  ], [
    'Chauffer le lait à feu moyen avec le chocolat en morceaux, en remuant, jusqu’à ce qu’il soit fondu.',
    'Fouetter les jaunes d’œufs avec le sucre et la maïzena, puis verser le lait chocolaté chaud dessus en fouettant.',
    'Remettre dans la casserole à feu doux et faire épaissir 2 à 3 min sans cesser de remuer.',
    'Verser dans des ramequins, filmer au contact et réserver au moins 2 h au réfrigérateur.'
  ]);

  /* ───────────── Antilles, Réunion, Afrique ───────────── */

  R('rougail-saucisse', 'Rougail saucisse', 'Réunionnaise', 'Plat', 70, 'Facile', 4, [
    ['saucisses-de-montbeliard', 6], ['tomates', 6], ['oignons', 2], ['ail', 3], ['gingembre', 15, 'g'], ['curcuma', 1, 'cc'],
    ['thym', 2, 'pc', 'opt'], ['piments-frais', 1, 'pc', 'opt'], ['riz', 300, 'g'], ['huile', 2, 'cs'], ['sel', null]
  ], [
    'Piquer les saucisses et les blanchir 5 min dans une casserole d’eau bouillante. Les égoutter et les couper en rondelles.',
    'Les faire dorer 5 min à feu moyen dans l’huile, dans une cocotte, puis ajouter les oignons émincés et les faire fondre 5 min.',
    'Ajouter l’ail et le gingembre pilés, le curcuma, le thym et le piment, puis les tomates en dés. Saler.',
    'Couvrir et laisser mijoter 30 min à feu doux, puis 10 min à découvert pour réduire la sauce.',
    'Pendant ce temps, cuire le riz dans une grande casserole d’eau bouillante salée, environ 12 min, et l’égoutter. Servir le rougail avec le riz.'
  ]);

  R('colombo-poulet', 'Colombo de poulet', 'Antillaise', 'Plat', 100, 'Facile', 4, [
    ['cuisses-poulet', 4], ['colombo', 3, 'cc'], ['pommes-de-terre', 400, 'g'], ['courgettes', 1], ['aubergines', 1], ['oignons', 1],
    ['ail', 2], ['citron-vert', 1], ['lait-coco', 20, 'cl', 'opt'], ['huile', 2, 'cs'], ['sel', null]
  ], [
    'Mariner le poulet 30 min avec le jus du citron vert, l’ail écrasé, la moitié du colombo et le sel.',
    'Dans une cocotte, faire dorer le poulet 8 min à feu moyen dans l’huile avec l’oignon émincé, puis ajouter le reste du colombo.',
    'Ajouter les pommes de terre, la courgette et l’aubergine en morceaux, puis 30 cl d’eau (ou 10 cl d’eau et le lait de coco).',
    'Couvrir et cuire 40 min à feu doux, jusqu’à ce que le poulet soit tendre et la sauce épaissie.'
  ]);

  R('accras-morue', 'Accras de morue', 'Antillaise', 'Entrée', 110, 'Moyenne', 6, [
    ['morue-salee', 250, 'g'], ['farine', 200, 'g'], ['levure-chimique', 1], ['oeufs', 1], ['ail', 2], ['ciboule', 0.5],
    ['persil', 0.25, 'pc', 'opt'], ['piments-frais', 1, 'pc', 'opt'], ['huile', 1, 'l'], ['poivre', null]
  ], [
    'La veille, dessaler la morue dans un grand volume d’eau froide, au réfrigérateur, en changeant l’eau 3 ou 4 fois.',
    'La pocher 10 min dans une casserole d’eau frémissante, l’égoutter, retirer peau et arêtes et l’émietter.',
    'Mélanger la farine, la levure, l’œuf et environ 20 cl d’eau pour obtenir une pâte épaisse.',
    'Ajouter la morue, l’ail, la ciboule, le persil et le piment hachés, poivrer. Laisser reposer 1 h.',
    'Chauffer l’huile à 170 °C. Y faire tomber des cuillerées de pâte et les frire 3 à 4 min en les retournant, jusqu’à ce qu’elles soient bien dorées. Égoutter sur du papier absorbant.'
  ]);

  R('poulet-yassa', 'Poulet yassa', 'Africaine', 'Plat', 150, 'Facile', 4, [
    ['cuisses-poulet', 4], ['oignons', 6], ['citron', 3], ['moutarde', 2, 'cs'], ['ail', 2], ['bouillon', 1], ['riz', 300, 'g'],
    ['piments-frais', 1, 'pc', 'opt'], ['huile', 3, 'cs'], ['sel', null], ['poivre', null]
  ], [
    'Mariner le poulet au moins 1 h avec les oignons émincés, le jus des citrons, la moutarde, l’ail écrasé, le sel et le poivre.',
    'Égoutter le poulet et le faire dorer 10 min à feu moyen-vif dans une cocotte avec 1 cuillerée d’huile. Réserver.',
    'Égoutter les oignons de la marinade et les faire fondre 20 min à feu moyen-doux dans le reste de l’huile, jusqu’à ce qu’ils soient bien tendres et blonds.',
    'Ajouter le jus de la marinade, le cube de bouillon émietté, 20 cl d’eau, le piment entier et le poulet. Couvrir et mijoter 30 min à feu doux.',
    'Pendant ce temps, cuire le riz dans une grande casserole d’eau bouillante salée, environ 12 min, et l’égoutter. Servir le poulet avec le riz.'
  ]);

  R('mafe', 'Mafé de bœuf', 'Africaine', 'Plat', 100, 'Facile', 4, [
    ['boeuf-braiser', 600, 'g'], ['beurre-de-cacahuete', 5, 'cs'], ['tomates-concassees', 400, 'g'], ['concentre-tomate', 2, 'cs', 'opt'],
    ['oignons', 2], ['carottes', 2], ['patate-douce', 1], ['ail', 2], ['riz', 300, 'g'], ['huile', 2, 'cs'], ['sel', null], ['poivre', null]
  ], [
    'Dans une cocotte, faire dorer la viande en cubes 8 min à feu moyen-vif dans l’huile, puis ajouter les oignons émincés et les faire fondre 5 min.',
    'Ajouter l’ail, les tomates, le concentré et 50 cl d’eau. Saler, poivrer, couvrir et mijoter 40 min à feu doux.',
    'Délayer le beurre de cacahuète dans une louche de sauce et l’ajouter dans la cocotte avec les carottes et la patate douce en morceaux.',
    'Cuire encore 30 min à feu doux en remuant souvent pour que la sauce n’attache pas.',
    'Pendant ce temps, cuire le riz dans une grande casserole d’eau bouillante salée, environ 12 min, et l’égoutter. Servir le mafé avec le riz.'
  ]);

  /* ───────────── Italienne ───────────── */

  R('gnocchis-tomate', 'Gnocchis à la tomate et mozzarella', 'Italienne', 'Plat', 25, 'Facile', 4, [
    ['gnocchis', 800, 'g'], ['tomates-concassees', 400, 'g'], ['mozzarella', 125, 'g'], ['ail', 1], ['basilic', 0.25, 'pc', 'opt'],
    ['huile-olive', 2, 'cs'], ['sel', null], ['poivre', null]
  ], [
    'Faire revenir l’ail haché 1 min à feu moyen dans l’huile, ajouter les tomates, saler, poivrer et laisser réduire 10 min à feu doux.',
    'Cuire les gnocchis dans une grande casserole d’eau bouillante salée : ils sont prêts dès qu’ils remontent à la surface. Les égoutter.',
    'Les mélanger à la sauce, ajouter la mozzarella en morceaux et laisser fondre 1 min hors du feu. Parsemer de basilic.'
  ]);

  R('puttanesca', 'Spaghetti alla puttanesca', 'Italienne', 'Plat', 25, 'Facile', 4, [
    ['spaghetti', 400, 'g'], ['tomates-concassees', 400, 'g'], ['olives', 80, 'g'], ['capres', 1, 'cs'], ['anchois', 30, 'g'], ['ail', 2],
    ['piment', 1, 'pincee', 'opt'], ['persil', 0.25, 'pc', 'opt'], ['huile-olive', 3, 'cs'], ['sel', null]
  ], [
    'Dans une sauteuse, faire fondre les anchois et l’ail haché dans l’huile, 2 min à feu doux.',
    'Ajouter les tomates, les olives, les câpres et le piment. Laisser réduire 10 min à feu moyen.',
    'Pendant ce temps, cuire les spaghetti al dente dans 4 L d’eau bouillante salée, en suivant le temps du paquet.',
    'Égoutter les pâtes, les mélanger à la sauce 1 min sur le feu et parsemer de persil haché.'
  ]);

  R('osso-buco', 'Osso buco', 'Italienne', 'Plat', 120, 'Moyenne', 4, [
    ['osso-buco', 4], ['tomates-concassees', 400, 'g'], ['carottes', 2], ['oignons', 1], ['celeri', 1], ['vin-blanc', 15, 'cl'],
    ['bouillon', 1], ['farine', 20, 'g'], ['citron', 1, 'pc', 'opt'], ['ail', 1, 'pc', 'opt'], ['persil', 0.25, 'pc', 'opt'],
    ['huile-olive', 3, 'cs'], ['sel', null], ['poivre', null]
  ], [
    'Fariner légèrement les tranches de jarret et les faire dorer 3 min de chaque côté à feu moyen-vif dans l’huile, dans une cocotte. Réserver.',
    'Faire revenir l’oignon, les carottes et le céleri en petits dés 5 min à feu moyen.',
    'Déglacer au vin blanc et laisser réduire 2 min. Ajouter les tomates, le cube de bouillon émietté et 25 cl d’eau, saler, poivrer, puis remettre la viande.',
    'Couvrir et mijoter 1 h 30 à feu doux, jusqu’à ce que la viande se détache de l’os.',
    'Au moment de servir, parsemer d’une gremolata : zeste de citron, ail et persil hachés finement.'
  ]);

  R('saltimbocca', 'Saltimbocca', 'Italienne', 'Plat', 20, 'Facile', 4, [
    ['escalopes-de-veau', 4], ['jambon-cru', 4], ['sauge-fraiche', 8], ['farine', 20, 'g', 'opt'], ['beurre', 30, 'g'], ['vin-blanc', 10, 'cl'],
    ['poivre', null]
  ], [
    'Aplatir les escalopes, poser sur chacune une tranche de jambon cru et deux feuilles de sauge, puis fixer avec un pic. Fariner légèrement le côté viande.',
    'Cuire 2 min côté jambon puis 2 min côté viande dans le beurre mousseux, à feu moyen-vif. Poivrer et réserver au chaud.',
    'Déglacer la poêle au vin blanc et laisser réduire 2 min en grattant les sucs, puis napper les escalopes de ce jus.'
  ]);

  R('minestrone', 'Minestrone', 'Italienne', 'Plat', 60, 'Facile', 6, [
    ['courgettes', 1], ['carottes', 2], ['pommes-de-terre', 300, 'g'], ['haricots-blancs', 250, 'g'], ['tomates-concassees', 400, 'g'],
    ['celeri', 1], ['pates', 100, 'g'], ['oignons', 1], ['ail', 1], ['bouillon', 1], ['parmesan', 40, 'g', 'opt'], ['huile-olive', 3, 'cs'],
    ['sel', null], ['poivre', null]
  ], [
    'Dans une grande casserole, faire revenir l’oignon, l’ail, le céleri et les carottes en petits dés dans l’huile, 5 min à feu moyen.',
    'Ajouter les pommes de terre et la courgette en dés, les tomates, le cube de bouillon et 1,5 L d’eau. Porter à ébullition puis cuire 30 min à feu doux.',
    'Ajouter les haricots égouttés et de petites pâtes, cuire encore 10 min. Rectifier l’assaisonnement.',
    'Servir avec du parmesan râpé et un filet d’huile d’olive.'
  ]);

  R('tagliatelles-saumon', 'Tagliatelles au saumon fumé', 'Italienne', 'Plat', 20, 'Facile', 4, [
    ['tagliatelles', 400, 'g'], ['saumon-fume', 6], ['creme-liquide', 20, 'cl'], ['citron', 0.5], ['aneth', 0.25, 'pc', 'opt'], ['sel', null],
    ['poivre', null]
  ], [
    'Cuire les tagliatelles dans 4 L d’eau bouillante salée, en suivant le temps du paquet.',
    'Pendant ce temps, chauffer la crème 3 min à feu doux avec le zeste et un filet de jus de citron. Poivrer.',
    'Égoutter les pâtes et les mélanger à la crème hors du feu avec le saumon en lanières et l’aneth ciselé.'
  ]);

  R('pates-courgettes-ricotta', 'Pâtes courgettes et ricotta', 'Italienne', 'Plat', 25, 'Facile', 4, [
    ['pates', 400, 'g'], ['courgettes', 2], ['ricotta', 250, 'g'], ['citron', 1], ['parmesan', 40, 'g'], ['ail', 1],
    ['huile-olive', 2, 'cs'], ['sel', null], ['poivre', null]
  ], [
    'Faire revenir les courgettes en fines rondelles avec l’ail haché dans l’huile, 8 min à feu moyen, jusqu’à ce qu’elles soient dorées. Saler, poivrer.',
    'Cuire les pâtes dans 4 L d’eau bouillante salée et garder un verre d’eau de cuisson avant de les égoutter.',
    'Mélanger les pâtes, les courgettes, la ricotta, le zeste de citron et le parmesan râpé, avec un peu d’eau de cuisson pour lier.'
  ]);

  R('pizza-reine', 'Pizza reine', 'Italienne', 'Plat', 30, 'Facile', 2, [
    ['pate-pizza', 1], ['coulis-tomate', 15, 'cl'], ['mozzarella', 125, 'g'], ['jambon', 2], ['champignons', 100, 'g'],
    ['origan', 0.5, 'cc', 'opt'], ['huile-olive', 1, 'cs']
  ], [
    'Préchauffer le four à 250 °C (ou au maximum).',
    'Étaler la pâte sur une plaque, la couvrir de coulis, d’origan, de jambon en morceaux et de champignons émincés.',
    'Ajouter la mozzarella en tranches et un filet d’huile. Cuire 10 à 12 min, jusqu’à ce que la pâte soit dorée et le fromage fondu.'
  ]);

  R('lasagnes-epinards', 'Lasagnes épinards et ricotta', 'Italienne', 'Plat', 80, 'Moyenne', 6, [
    ['lasagnes', 250, 'g'], ['epinards', 1000, 'g'], ['ricotta', 500, 'g'], ['mozzarella', 250, 'g'], ['parmesan', 60, 'g'],
    ['coulis-tomate', 50, 'cl'], ['oeufs', 1], ['muscade', 1, 'pincee', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Faire tomber les épinards 3 à 4 min à feu moyen dans une grande casserole, les égoutter en les pressant bien et les hacher. Les mélanger avec la ricotta, l’œuf, la muscade, du sel et du poivre.',
    'Préchauffer le four à 180 °C. Dans un plat, alterner coulis, feuilles de lasagnes et mélange épinards-ricotta.',
    'Finir par une couche de lasagnes, du coulis, la mozzarella en tranches et le parmesan râpé.',
    'Cuire 40 min, jusqu’à ce que le dessus soit gratiné. Laisser reposer 10 min avant de servir.'
  ]);

  R('polenta-champignons', 'Polenta crémeuse aux champignons', 'Italienne', 'Plat', 35, 'Facile', 4, [
    ['polenta', 250, 'g'], ['lait', 50, 'cl'], ['parmesan', 50, 'g'], ['champignons', 400, 'g'], ['beurre', 30, 'g'], ['ail', 2],
    ['persil', 0.25, 'pc', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Porter le lait et 50 cl d’eau salée à ébullition, verser la polenta en pluie en fouettant, puis cuire à feu doux en remuant, environ 5 min pour une polenta précuite (40 min pour une traditionnelle).',
    'Hors du feu, ajouter le parmesan râpé et la moitié du beurre.',
    'Faire sauter les champignons émincés 8 min à feu vif dans le reste du beurre, ajouter l’ail haché en fin de cuisson. Saler, poivrer.',
    'Servir la polenta surmontée des champignons et parsemée de persil.'
  ]);

  R('frittata', 'Frittata aux légumes', 'Italienne', 'Plat', 35, 'Facile', 4, [
    ['oeufs', 8], ['courgettes', 1], ['pommes-de-terre', 300, 'g'], ['oignons', 1], ['parmesan', 40, 'g'], ['huile-olive', 3, 'cs'],
    ['sel', null], ['poivre', null]
  ], [
    'Dans une poêle allant au four, faire revenir les pommes de terre en petits dés, l’oignon émincé et la courgette en dés dans l’huile, 12 min à feu moyen.',
    'Battre les œufs avec le parmesan râpé, saler, poivrer, et verser sur les légumes.',
    'Cuire 10 min à feu doux sans remuer, puis finir 5 min sous le gril du four, jusqu’à ce que le dessus soit pris et doré.'
  ]);

  R('carpaccio-boeuf', 'Carpaccio de bœuf', 'Italienne', 'Entrée', 80, 'Facile', 4, [
    ['boeuf-poeler', 300, 'g'], ['parmesan', 40, 'g'], ['roquette', 60, 'g'], ['citron', 1], ['huile-olive', 4, 'cs'],
    ['capres', 1, 'cs', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Placer la viande 1 h au congélateur pour pouvoir la trancher très finement.',
    'La couper en tranches très fines avec un couteau bien aiguisé et les disposer sur les assiettes froides.',
    'Arroser d’huile d’olive et de jus de citron. Parsemer de copeaux de parmesan, de roquette et de câpres. Saler, poivrer et servir aussitôt.'
  ]);

  R('bruschetta', 'Bruschetta à la tomate', 'Italienne', 'Entrée', 15, 'Facile', 4, [
    ['baguette', 1], ['tomates', 4], ['ail', 1], ['basilic', 0.25, 'pc', 'opt'], ['huile-olive', 3, 'cs'], ['sel', null]
  ], [
    'Couper la baguette en tranches et les faire griller 3 à 4 min sous le gril du four. Les frotter d’ail.',
    'Couper les tomates en petits dés, les assaisonner d’huile, de sel et de basilic ciselé.',
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
    ['gambas', 16], ['ail', 4], ['huile-olive', 6, 'cs'], ['piment', 1, 'pincee', 'opt'], ['persil', 0.25, 'pc', 'opt'],
    ['baguette', 1, 'pc', 'opt'], ['sel', null]
  ], [
    'Décortiquer les gambas en gardant la queue.',
    'Dans une poêle ou une cassolette, chauffer l’huile à feu doux avec l’ail en lamelles et le piment, 2 min, sans colorer.',
    'Monter à feu vif, ajouter les gambas et les cuire 2 à 3 min, jusqu’à ce qu’elles soient roses.',
    'Saler, parsemer de persil haché et servir aussitôt avec du pain.'
  ]);

  R('poulet-chorizo', 'Poulet au chorizo', 'Espagnole', 'Plat', 70, 'Facile', 4, [
    ['cuisses-poulet', 4], ['chorizo', 150, 'g'], ['poivrons', 2], ['tomates-concassees', 400, 'g'], ['oignons', 1], ['ail', 2],
    ['paprika-fume', 1, 'cc'], ['huile-olive', 2, 'cs'], ['sel', null], ['poivre', null]
  ], [
    'Dans une cocotte, faire dorer le poulet 8 min à feu moyen-vif dans l’huile. Réserver.',
    'Faire revenir 5 min à feu moyen le chorizo en rondelles, l’oignon, l’ail et les poivrons en lanières.',
    'Ajouter le paprika et les tomates, saler, poivrer, puis remettre le poulet.',
    'Couvrir et mijoter 40 min à feu doux.'
  ]);

  R('souvlaki', 'Souvlaki de poulet', 'Grecque', 'Plat', 55, 'Facile', 4, [
    ['poulet', 600, 'g'], ['citron', 1], ['origan', 2, 'cc'], ['ail', 2], ['yaourt-grec', 200, 'g'], ['pains-pita', 4], ['tomates', 2],
    ['oignon-rouge', 1], ['huile-olive', 3, 'cs'], ['sel', null], ['poivre', null]
  ], [
    'Mariner le poulet en cubes au moins 30 min avec l’huile, le jus de citron, l’origan, l’ail écrasé, le sel et le poivre.',
    'L’enfiler sur des brochettes et les griller 10 min à la plancha ou à la poêle à feu vif, en les retournant, jusqu’à ce qu’elles soient bien dorées.',
    'Réchauffer les pitas et les garnir de poulet, de yaourt, de tomates en dés et d’oignon rouge émincé.'
  ]);

  R('tajine-agneau-pruneaux', 'Tajine d’agneau aux pruneaux', 'Maghrébine', 'Plat', 150, 'Moyenne', 6, [
    ['agneau', 1200, 'g'], ['pruneaux', 250, 'g'], ['oignons', 2], ['ail', 2], ['miel', 2, 'cs'], ['cannelle', 1, 'cc'], ['ras-el-hanout', 2, 'cc'],
    ['amandes', 60, 'g', 'opt'], ['graines-sesame', 1, 'cs', 'opt'], ['huile-olive', 3, 'cs'], ['sel', null], ['poivre', null]
  ], [
    'Dans un tajine ou une cocotte, faire dorer l’agneau 10 min à feu moyen dans l’huile avec les oignons émincés, l’ail et les épices. Saler, poivrer.',
    'Couvrir d’eau à mi-hauteur et mijoter 1 h 30 à couvert, à feu doux.',
    'Ajouter les pruneaux et le miel, cuire encore 30 min à découvert pour que la sauce devienne sirupeuse.',
    'Faire griller les amandes et le sésame à sec dans une poêle, 3 min à feu moyen, et en parsemer le tajine.'
  ]);

  R('kefta-tomate', 'Tajine de kefta', 'Maghrébine', 'Plat', 50, 'Facile', 4, [
    ['boeuf-hache', 600, 'g'], ['oignons', 1], ['ail', 2], ['persil', 0.5], ['coriandre', 0.5, 'pc', 'opt'], ['cumin', 1, 'cc'], ['paprika', 1, 'cc'],
    ['tomates-concassees', 400, 'g'], ['oeufs', 4, 'pc', 'opt'], ['huile-olive', 2, 'cs'], ['sel', null], ['poivre', null]
  ], [
    'Mélanger la viande avec la moitié de l’oignon haché, les herbes ciselées, la moitié du cumin et du paprika, du sel et du poivre. Former de petites boulettes.',
    'Dans un tajine ou une sauteuse, faire revenir le reste d’oignon et l’ail dans l’huile, 3 min à feu moyen. Ajouter le reste des épices, les tomates et 10 cl d’eau.',
    'Ajouter les boulettes, couvrir et mijoter 25 min à feu doux.',
    'Casser les œufs dans la sauce et cuire 5 min à couvert, jusqu’à ce que les blancs soient pris.'
  ]);

  R('bricks-thon', 'Bricks au thon', 'Maghrébine', 'Entrée', 30, 'Moyenne', 4, [
    ['feuilles-de-brick', 8], ['thon-boite', 150, 'g'], ['oeufs', 4], ['persil', 0.25, 'pc', 'opt'], ['fromage-rape', 50, 'g', 'opt'],
    ['huile', 50, 'cl'], ['citron', 1, 'pc', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Chauffer l’huile dans une grande poêle, à feu moyen-vif.',
    'Poser une feuille de brick doublée dans une assiette, y mettre du thon émietté, du persil haché et du fromage.',
    'Casser un œuf au centre, saler, poivrer et replier rapidement en triangle.',
    'Frire 1 à 2 min de chaque côté dans l’huile chaude, jusqu’à ce que la brick soit dorée. Égoutter et servir avec des quartiers de citron.'
  ]);

  R('mechouia', 'Salade méchouia', 'Maghrébine', 'Entrée', 60, 'Facile', 4, [
    ['poivrons', 3], ['tomates', 4], ['ail', 2], ['cumin', 0.5, 'cc'], ['huile-olive', 4, 'cs'], ['oeufs', 2, 'pc', 'opt'],
    ['thon-boite', 100, 'g', 'opt'], ['sel', null]
  ], [
    'Griller les poivrons et les tomates entiers 25 à 30 min sous le gril du four, en les retournant, jusqu’à ce que la peau noircisse.',
    'Les enfermer 10 min dans un saladier couvert, puis les peler, les épépiner et les hacher grossièrement avec l’ail.',
    'Pendant ce temps, cuire les œufs 10 min dans l’eau bouillante, les refroidir et les écaler.',
    'Assaisonner les légumes d’huile, de cumin et de sel. Garnir d’œufs durs en quartiers et de thon émietté.'
  ]);

  R('moutabal', 'Moutabal (caviar d’aubergine)', 'Libanaise', 'Entrée', 60, 'Facile', 4, [
    ['aubergines', 2], ['tahini', 2, 'cs'], ['citron', 1], ['ail', 1], ['huile-olive', 2, 'cs'], ['cumin', 0.5, 'cc', 'opt'],
    ['pains-pita', 4, 'pc', 'opt'], ['sel', null]
  ], [
    'Piquer les aubergines et les cuire entières 40 min au four à 220 °C, jusqu’à ce qu’elles soient très tendres. Les laisser tiédir.',
    'Récupérer la chair, l’égoutter quelques minutes, puis l’écraser avec le tahini, le jus de citron, l’ail écrasé et le sel.',
    'Servir arrosé d’huile d’olive et saupoudré de cumin, avec du pain pita.'
  ]);

  R('fattouche', 'Fattouche', 'Libanaise', 'Entrée', 25, 'Facile', 4, [
    ['laitue', 1], ['tomates', 3], ['concombre', 1], ['radis', 0.5, 'pc', 'opt'], ['oignon-rouge', 1], ['menthe', 0.5], ['persil', 0.5],
    ['pains-pita', 2], ['sumac', 1, 'cc'], ['citron', 1], ['huile-olive', 4, 'cs'], ['sel', null]
  ], [
    'Couper les pitas en morceaux et les faire griller 8 min au four à 200 °C, jusqu’à ce qu’elles soient croustillantes.',
    'Couper la laitue, les tomates, le concombre, les radis et l’oignon rouge. Ciseler la menthe et le persil.',
    'Assaisonner de jus de citron, d’huile, de sumac et de sel. Ajouter le pain au dernier moment.'
  ]);

  R('chich-taouk', 'Chich taouk', 'Libanaise', 'Plat', 90, 'Facile', 4, [
    ['poulet', 600, 'g'], ['yaourt', 1], ['citron', 1], ['ail', 3], ['paprika', 1, 'cc'], ['pains-pita', 4], ['tahini', 2, 'cs', 'opt'],
    ['tomates', 2, 'pc', 'opt'], ['huile-olive', 2, 'cs'], ['sel', null]
  ], [
    'Mariner le poulet en cubes au moins 1 h avec le yaourt, le jus de citron (en garder un peu), l’ail écrasé, le paprika, l’huile et le sel.',
    'L’enfiler sur des brochettes et les griller 10 à 12 min à la plancha ou sous le gril du four, en les retournant.',
    'Délayer le tahini avec le reste du jus de citron et un peu d’eau.',
    'Servir dans les pitas avec la sauce au tahini et les tomates en tranches.'
  ]);

  /* ───────────── Asie ───────────── */

  R('poulet-tandoori', 'Poulet tandoori', 'Indienne', 'Plat', 175, 'Facile', 4, [
    ['pilons-de-poulet', 8], ['yaourt', 2], ['epices-tandoori', 4, 'cc'], ['citron', 1], ['ail', 2], ['gingembre', 10, 'g'],
    ['riz-basmati', 300, 'g'], ['sel', null]
  ], [
    'Entailler les pilons et les mariner au moins 2 h au réfrigérateur dans le yaourt, les épices, le jus de citron, l’ail et le gingembre râpés et le sel.',
    'Les disposer sur une plaque et les cuire 35 min au four à 220 °C, en les retournant à mi-cuisson.',
    'Pendant ce temps, rincer le riz et le cuire à couvert dans 1,5 fois son volume d’eau salée, 12 min à feu doux, puis le laisser reposer 5 min. Servir avec le poulet.'
  ]);

  R('biryani-poulet', 'Biryani de poulet', 'Indienne', 'Plat', 100, 'Moyenne', 4, [
    ['riz-basmati', 300, 'g'], ['poulet', 500, 'g'], ['oignons', 2], ['yaourt', 1], ['garam-masala', 2, 'cc'], ['curcuma', 1, 'cc'],
    ['cardamome', 4, 'pc', 'opt'], ['gingembre', 10, 'g'], ['ail', 2], ['coriandre', 0.25, 'pc', 'opt'], ['beurre', 30, 'g'], ['sel', null]
  ], [
    'Mariner le poulet en morceaux 30 min avec le yaourt, les épices, l’ail et le gingembre râpés et le sel.',
    'Dans une cocotte, faire dorer les oignons émincés 15 min à feu moyen dans le beurre, en réserver la moitié. Ajouter le poulet et sa marinade, cuire 10 min.',
    'Pendant ce temps, précuire le riz rincé 5 min dans 2 L d’eau bouillante salée avec la cardamome, puis l’égoutter.',
    'Couvrir le poulet de riz, parsemer du reste d’oignons, arroser de 5 cl d’eau, fermer hermétiquement et cuire 25 min à feu très doux. Parsemer de coriandre.'
  ]);

  R('curry-legumes', 'Curry de légumes au lait de coco', 'Indienne', 'Plat', 40, 'Facile', 4, [
    ['patate-douce', 1], ['chou-fleur', 0.5], ['petits-pois', 150, 'g'], ['lait-coco', 40, 'cl'], ['curry', 2, 'cc'],
    ['tomates-concassees', 400, 'g'], ['oignons', 1], ['ail', 2], ['gingembre', 10, 'g', 'opt'], ['huile', 2, 'cs'], ['sel', null]
  ], [
    'Dans une cocotte, faire revenir l’oignon émincé, l’ail et le gingembre râpés 5 min à feu moyen dans l’huile, puis ajouter le curry 1 min.',
    'Ajouter la patate douce en cubes, le chou-fleur en bouquets et les tomates. Saler, couvrir et cuire 15 min à feu moyen-doux.',
    'Ajouter le lait de coco et les petits pois, cuire encore 10 min, jusqu’à ce que les légumes soient tendres.'
  ]);

  R('samoussas', 'Samoussas aux légumes', 'Indienne', 'Entrée', 50, 'Moyenne', 4, [
    ['feuilles-de-brick', 10], ['pommes-de-terre', 300, 'g'], ['petits-pois', 100, 'g'], ['oignons', 1], ['curry', 1, 'cc'],
    ['cumin', 1, 'cc'], ['coriandre', 0.25, 'pc', 'opt'], ['huile', 4, 'cs'], ['sel', null]
  ], [
    'Cuire les pommes de terre en petits dés 10 min à l’eau bouillante salée, en ajoutant les petits pois pour les 5 dernières minutes. Égoutter.',
    'Faire revenir l’oignon haché 3 min à feu moyen dans 1 cuillerée d’huile, ajouter les épices, puis les légumes. Écraser grossièrement, ajouter la coriandre et saler.',
    'Préchauffer le four à 200 °C. Couper les feuilles de brick en deux, plier chaque moitié en bande et former des triangles garnis de farce.',
    'Badigeonner du reste d’huile et cuire 15 min, jusqu’à ce qu’ils soient dorés, en les retournant à mi-cuisson.'
  ]);

  R('porc-aigre-doux', 'Porc aigre-doux', 'Chinoise', 'Plat', 40, 'Moyenne', 4, [
    ['porc-epaule', 600, 'g'], ['poivrons', 2], ['ananas', 0.5], ['oignons', 1], ['maizena', 30, 'g'], ['vinaigre-riz', 3, 'cs'],
    ['sucre', 30, 'g'], ['ketchup', 3, 'cs'], ['sauce-soja', 2, 'cs'], ['riz', 300, 'g'], ['huile', 3, 'cs']
  ], [
    'Cuire le riz dans une grande casserole d’eau bouillante salée, environ 12 min, et l’égoutter.',
    'Enrober le porc en cubes de maïzena et le faire dorer 6 à 8 min à feu vif dans l’huile, au wok ou à la poêle. Réserver.',
    'Faire sauter 3 min à feu vif l’oignon et les poivrons en morceaux.',
    'Ajouter l’ananas en morceaux, le vinaigre, le sucre, le ketchup, la sauce soja et 5 cl d’eau. Porter à ébullition.',
    'Remettre le porc et laisser napper 2 min. Servir avec le riz.'
  ]);

  R('boeuf-brocoli', 'Bœuf sauté au brocoli', 'Chinoise', 'Plat', 30, 'Facile', 4, [
    ['boeuf-poeler', 500, 'g'], ['brocoli', 1], ['ail', 2], ['gingembre', 10, 'g'], ['sauce-huitre', 3, 'cs'], ['sauce-soja', 2, 'cs'],
    ['maizena', 10, 'g'], ['sucre', 5, 'g'], ['huile', 2, 'cs'], ['riz', 300, 'g', 'opt']
  ], [
    'Mariner le bœuf en fines lamelles 15 min avec la maïzena et 1 cuillerée de sauce soja. Pendant ce temps, cuire le riz dans une grande casserole d’eau bouillante salée, environ 12 min.',
    'Blanchir le brocoli en bouquets 2 min dans l’eau bouillante salée, puis l’égoutter.',
    'Saisir le bœuf 2 min à feu vif dans l’huile, ajouter l’ail et le gingembre hachés, puis le brocoli.',
    'Ajouter la sauce d’huître, le reste de sauce soja, le sucre et 5 cl d’eau, sauter 1 min. Servir aussitôt avec le riz.'
  ]);

  R('nouilles-poulet', 'Nouilles sautées au poulet', 'Chinoise', 'Plat', 30, 'Facile', 4, [
    ['nouilles', 300, 'g'], ['poulet', 400, 'g'], ['carottes', 2], ['chou-chinois', 0.5], ['ciboule', 0.5], ['sauce-soja', 4, 'cs'],
    ['sauce-huitre', 2, 'cs', 'opt'], ['ail', 2], ['huile', 3, 'cs']
  ], [
    'Cuire les nouilles à l’eau bouillante en suivant le temps du paquet, les égoutter et les rincer à l’eau froide.',
    'Au wok, saisir le poulet en lamelles 4 min à feu vif dans l’huile, ajouter l’ail haché, les carottes en julienne et le chou émincé, sauter 3 min.',
    'Ajouter les nouilles et les sauces, sauter 2 min à feu vif. Parsemer de ciboule émincée.'
  ]);

  R('mapo-tofu', 'Mapo tofu', 'Chinoise', 'Plat', 30, 'Moyenne', 4, [
    ['tofu', 400, 'g'], ['porc-hache', 200, 'g'], ['pate-de-piment', 2, 'cc'], ['sauce-soja', 2, 'cs'], ['ail', 2], ['gingembre', 10, 'g'],
    ['ciboule', 0.5], ['maizena', 10, 'g'], ['poivre-de-sichuan', 0.5, 'cc', 'opt'], ['riz', 300, 'g'], ['huile', 2, 'cs']
  ], [
    'Cuire le riz dans une grande casserole d’eau bouillante salée, environ 12 min, et l’égoutter.',
    'Au wok, faire revenir le porc 4 min à feu vif dans l’huile, puis ajouter l’ail, le gingembre hachés et la pâte de piment, 1 min.',
    'Ajouter 20 cl d’eau, la sauce soja et le tofu en cubes. Mijoter 5 min à feu doux sans trop remuer.',
    'Lier avec la maïzena délayée dans 3 cuillerées d’eau froide, laisser épaissir 1 min. Parsemer de ciboule et de poivre de Sichuan moulu. Servir avec le riz.'
  ]);

  R('yakitori', 'Yakitori', 'Japonaise', 'Plat', 40, 'Facile', 4, [
    ['hauts-de-cuisse-de-poulet', 8], ['sauce-soja', 5, 'cs'], ['mirin', 3, 'cs'], ['sucre', 20, 'g'], ['ciboule', 1], ['riz', 300, 'g']
  ], [
    'Faire tremper des brochettes en bois dans l’eau. Rincer le riz et le cuire à couvert dans 1,5 fois son volume d’eau, 12 min à feu doux, puis le laisser reposer 10 min.',
    'Faire réduire la sauce soja, le mirin et le sucre 5 min à feu moyen, jusqu’à obtenir une sauce sirupeuse.',
    'Couper le poulet désossé en morceaux et l’enfiler sur les brochettes en alternant avec des tronçons de ciboule.',
    'Griller 10 min sous le gril du four ou à la poêle à feu moyen-vif, en retournant et en badigeonnant de sauce plusieurs fois. Servir avec le riz.'
  ]);

  R('saumon-teriyaki', 'Saumon teriyaki', 'Japonaise', 'Plat', 25, 'Facile', 4, [
    ['saumon', 4], ['sauce-teriyaki', 5, 'cs'], ['riz', 300, 'g'], ['graines-sesame', 1, 'cs', 'opt'], ['ciboule', 0.25, 'pc', 'opt'],
    ['huile', 1, 'cs']
  ], [
    'Rincer le riz et le cuire à couvert dans 1,5 fois son volume d’eau, 12 min à feu doux, puis le laisser reposer 10 min.',
    'Saisir les pavés dans l’huile côté peau 4 min à feu moyen-vif, puis les retourner et cuire 2 min.',
    'Baisser le feu, verser la sauce teriyaki et laisser caraméliser 1 min en nappant le saumon.',
    'Servir sur le riz, parsemé de sésame et de ciboule émincée.'
  ]);

  R('ramen-miso', 'Ramen au miso', 'Japonaise', 'Plat', 30, 'Moyenne', 2, [
    ['nouilles-ramen', 200, 'g'], ['bouillon', 1], ['oeufs', 2], ['miso', 2, 'cs'], ['ciboule', 0.5], ['sauce-soja', 2, 'cs'],
    ['poitrine-de-porc', 200, 'g', 'opt'], ['champignons', 80, 'g', 'opt'], ['germes-soja', 80, 'g', 'opt']
  ], [
    'Plonger les œufs 6 min 30 dans l’eau bouillante, les refroidir dans l’eau glacée et les écaler.',
    'Porter 80 cl d’eau à ébullition avec le cube de bouillon, ajouter la sauce soja, puis, à feu doux, le miso délayé dans une louche de bouillon (sans faire bouillir ensuite).',
    'Cuire les nouilles en suivant le temps du paquet. Faire griller la poitrine en tranches et les champignons émincés 5 min à feu vif dans une poêle.',
    'Dresser les bols : nouilles, bouillon chaud, poitrine, œuf coupé en deux, champignons, pousses de soja et ciboule émincée.'
  ]);

  R('salade-concombre-japonaise', 'Salade de concombre à la japonaise', 'Japonaise', 'Entrée', 20, 'Facile', 4, [
    ['concombre', 1], ['vinaigre-riz', 3, 'cs'], ['sauce-soja', 1, 'cs'], ['sucre', 5, 'g'], ['graines-sesame', 1, 'cs'], ['sel', null]
  ], [
    'Couper le concombre en très fines rondelles, le saler et le laisser dégorger 10 min.',
    'Le presser pour retirer l’eau, puis l’assaisonner avec le vinaigre, la sauce soja et le sucre.',
    'Faire griller le sésame 2 min à sec dans une poêle à feu moyen et en parsemer la salade.'
  ]);

  R('pad-kra-pao', 'Poulet sauté au basilic thaï', 'Thaïlandaise', 'Plat', 30, 'Facile', 4, [
    ['poulet', 500, 'g'], ['basilic-thai', 1], ['ail', 4], ['piments-frais', 2, 'pc', 'opt'], ['sauce-poisson', 2, 'cs'],
    ['sauce-huitre', 2, 'cs'], ['sucre', 10, 'g'], ['riz', 300, 'g'], ['oeufs', 4, 'pc', 'opt'], ['huile', 3, 'cs']
  ], [
    'Rincer le riz et le cuire à couvert dans 1,5 fois son volume d’eau, 12 min à feu doux, puis le laisser reposer 10 min.',
    'Hacher grossièrement le poulet au couteau. Piler l’ail et les piments.',
    'Au wok, faire sauter l’ail et les piments 30 s dans 2 cuillerées d’huile, ajouter le poulet et le cuire 5 min à feu vif.',
    'Ajouter les sauces et le sucre, sauter 1 min, puis ajouter les feuilles de basilic hors du feu.',
    'Faire frire les œufs à feu vif dans le reste de l’huile. Servir le poulet sur le riz, surmonté d’un œuf au plat.'
  ]);

  R('tom-yum', 'Soupe tom yum aux crevettes', 'Thaïlandaise', 'Plat', 25, 'Facile', 4, [
    ['crevettes', 300, 'g'], ['champignons', 200, 'g'], ['citronnelle', 2], ['feuilles-de-citronnier-kaffir', 4, 'pc', 'opt'],
    ['gingembre', 20, 'g'], ['citron-vert', 2], ['sauce-poisson', 3, 'cs'], ['piments-frais', 2, 'pc', 'opt'], ['bouillon', 1],
    ['coriandre', 0.25, 'pc', 'opt'], ['tomates-cerises', 150, 'g', 'opt']
  ], [
    'Porter 1 L d’eau à frémissement avec le cube de bouillon, la citronnelle coupée en tronçons et écrasée, le gingembre en lamelles, les feuilles de kaffir et les piments. Laisser infuser 5 min à feu doux.',
    'Ajouter les champignons émincés et les tomates coupées en deux, cuire 5 min.',
    'Ajouter les crevettes et cuire 2 min, jusqu’à ce qu’elles soient roses.',
    'Hors du feu, ajouter le jus des citrons verts et la sauce poisson. Parsemer de coriandre.'
  ]);

  R('pho', 'Phở au bœuf', 'Vietnamienne', 'Plat', 70, 'Moyenne', 4, [
    ['boeuf-poeler', 300, 'g'], ['nouilles-riz', 300, 'g'], ['bouillon', 2], ['oignons', 1], ['gingembre', 30, 'g'], ['badiane', 2],
    ['cannelle', 0.5, 'cc', 'opt'], ['sauce-poisson', 3, 'cs'], ['germes-soja', 150, 'g'], ['coriandre', 0.5], ['basilic-thai', 0.5, 'pc', 'opt'],
    ['citron-vert', 1]
  ], [
    'Faire noircir l’oignon et le gingembre coupés en deux dans une poêle à sec, à feu vif, 5 min.',
    'Les faire infuser 40 min à feu doux dans 2 L d’eau avec les cubes de bouillon, la badiane et la cannelle. Ajouter la sauce poisson. Pendant ce temps, placer le bœuf 30 min au congélateur.',
    'Trancher le bœuf cru très finement. Cuire les nouilles en suivant le paquet et les répartir dans les bols avec le bœuf.',
    'Verser le bouillon bouillant filtré par-dessus pour cuire la viande. Servir avec les pousses de soja, les herbes et le citron vert en quartiers.'
  ]);

  R('nems', 'Nems au porc', 'Vietnamienne', 'Entrée', 80, 'Moyenne', 6, [
    ['galettes-riz', 20], ['porc-hache', 400, 'g'], ['nouilles-riz', 50, 'g'], ['carottes', 1], ['champignons-noirs-seches', 10, 'g'],
    ['oignons', 1], ['oeufs', 1], ['sauce-poisson', 5, 'cs'], ['citron-vert', 1], ['sucre', 30, 'g'], ['ail', 1], ['huile', 1, 'l'],
    ['salade', 1, 'pc', 'opt'], ['menthe', 0.5, 'pc', 'opt'], ['poivre', null]
  ], [
    'Réhydrater les champignons et les vermicelles 15 min dans l’eau chaude, les égoutter et les hacher.',
    'Mélanger avec le porc, la carotte râpée, l’oignon haché, l’œuf, 1 cuillerée de sauce poisson et du poivre.',
    'Humidifier chaque galette, y déposer une cuillerée de farce, rabattre les côtés et rouler serré.',
    'Frire les nems 8 à 10 min dans l’huile à 160 °C, par petites quantités, jusqu’à ce qu’ils soient dorés. Égoutter sur du papier absorbant.',
    'Sauce : mélanger le reste de sauce poisson, le jus du citron vert, le sucre, l’ail haché et 15 cl d’eau. Servir les nems avec la salade, la menthe et la sauce.'
  ]);

  R('banh-mi', 'Bánh mì au poulet', 'Vietnamienne', 'Plat', 35, 'Facile', 4, [
    ['baguette', 2], ['poulet', 400, 'g'], ['carottes', 2], ['concombre', 0.5], ['coriandre', 0.5], ['mayonnaise', 4, 'cs'],
    ['vinaigre-riz', 3, 'cs'], ['sucre', 10, 'g'], ['sauce-soja', 2, 'cs'], ['sriracha', 1, 'cc', 'opt'], ['huile', 1, 'cs'], ['sel', null]
  ], [
    'Faire mariner les carottes en julienne 20 min dans le vinaigre, le sucre et une pincée de sel.',
    'Faire griller le poulet en lamelles 6 min à feu vif dans l’huile, puis ajouter la sauce soja et laisser caraméliser 1 min.',
    'Couper les baguettes en deux et les réchauffer 5 min au four à 180 °C. Mélanger la mayonnaise et la sriracha.',
    'Garnir les baguettes ouvertes de mayonnaise pimentée, de poulet, de carottes égouttées, de concombre en lamelles et de coriandre.'
  ]);

  R('bulgogi', 'Bulgogi', 'Coréenne', 'Plat', 50, 'Facile', 4, [
    ['boeuf-poeler', 500, 'g'], ['sauce-soja', 5, 'cs'], ['sucre', 20, 'g'], ['huile-sesame', 1, 'cs'], ['ail', 3],
    ['poires', 0.5, 'pc', 'opt'], ['oignons', 1], ['ciboule', 0.5], ['graines-sesame', 1, 'cs', 'opt'], ['riz', 300, 'g'], ['huile', 1, 'cs'],
    ['poivre', null]
  ], [
    'Mariner 30 min le bœuf en tranches très fines avec la sauce soja, le sucre, l’huile de sésame, l’ail écrasé, la poire râpée et du poivre.',
    'Pendant ce temps, rincer le riz et le cuire à couvert dans 1,5 fois son volume d’eau, 12 min à feu doux, puis le laisser reposer 10 min.',
    'Saisir le bœuf avec l’oignon émincé dans l’huile, à feu très vif, 3 à 4 min.',
    'Parsemer de ciboule et de sésame. Servir avec le riz.'
  ]);

  R('riz-kimchi', 'Riz sauté au kimchi', 'Coréenne', 'Plat', 60, 'Facile', 2, [
    ['riz', 150, 'g'], ['kimchi', 150, 'g'], ['oeufs', 2], ['bacon', 3, 'pc', 'opt'], ['gochujang', 1, 'cs'], ['huile-sesame', 1, 'cc'],
    ['ciboule', 0.25, 'pc', 'opt'], ['huile', 1, 'cs']
  ], [
    'Cuire le riz dans une grande casserole d’eau bouillante salée, environ 12 min, l’égoutter, l’étaler sur un plat et le laisser refroidir au moins 30 min au réfrigérateur (ou utiliser du riz cuit la veille).',
    'Au wok, faire revenir le bacon coupé et le kimchi haché 3 min à feu vif dans l’huile, ajouter le riz et le gochujang. Sauter 4 min.',
    'Hors du feu, ajouter l’huile de sésame. Faire cuire les œufs au plat et les poser sur le riz, parsemé de ciboule émincée.'
  ]);

  /* ───────────── Amériques ───────────── */

  R('tacos-boeuf', 'Tacos au bœuf', 'Mexicaine', 'Plat', 30, 'Facile', 4, [
    ['tortillas', 8], ['boeuf-hache', 500, 'g'], ['oignons', 1], ['ail', 1], ['tomates', 2], ['salade', 0.25], ['fromage-rape', 80, 'g'],
    ['cumin', 1, 'cc'], ['paprika', 1, 'cc'], ['avocat', 1, 'pc', 'opt'], ['citron-vert', 1, 'pc', 'opt'], ['huile', 1, 'cs'], ['sel', null]
  ], [
    'Faire revenir l’oignon et l’ail hachés 3 min à feu moyen dans l’huile, ajouter la viande et les épices, saler et cuire 8 min à feu vif en émiettant.',
    'Réchauffer les tortillas 30 s de chaque côté dans une poêle sèche.',
    'Garnir de viande, de salade émincée, de tomates en dés, de fromage et d’avocat en lamelles. Arroser de citron vert.'
  ]);

  R('quesadillas', 'Quesadillas', 'Mexicaine', 'Plat', 25, 'Facile', 4, [
    ['tortillas', 8], ['fromage-rape', 200, 'g'], ['poivrons', 1], ['oignons', 1], ['poulet', 300, 'g', 'opt'], ['mais-doux', 150, 'g', 'opt'],
    ['huile', 1, 'cs'], ['sel', null]
  ], [
    'Faire revenir l’oignon, le poivron et le poulet en petits morceaux 8 min à feu moyen dans l’huile, jusqu’à ce que le poulet soit cuit. Ajouter le maïs égoutté et saler.',
    'Garnir une tortilla de fromage et de garniture, couvrir d’une seconde tortilla.',
    'Dorer 2 min de chaque côté dans une poêle sèche à feu moyen, jusqu’à ce que le fromage soit fondu. Couper en parts.'
  ]);

  R('chili-sin-carne', 'Chili sin carne', 'Mexicaine', 'Plat', 45, 'Facile', 4, [
    ['haricots-rouges', 500, 'g'], ['mais-doux', 150, 'g'], ['tomates-concassees', 400, 'g'], ['poivrons', 1], ['oignons', 1], ['ail', 2],
    ['cumin', 1, 'cc'], ['paprika', 1, 'cc'], ['piment', 1, 'pincee'], ['riz', 300, 'g', 'opt'], ['huile', 2, 'cs'], ['sel', null]
  ], [
    'Faire revenir l’oignon, le poivron en dés et l’ail 5 min à feu moyen dans l’huile.',
    'Ajouter les épices 1 min, puis les tomates. Saler et mijoter 15 min à feu doux.',
    'Ajouter les haricots et le maïs égouttés, cuire encore 15 min.',
    'Pendant ce temps, cuire le riz dans une grande casserole d’eau bouillante salée, environ 12 min, et l’égoutter. Servir le chili avec le riz.'
  ]);

  R('mac-cheese', 'Mac and cheese', 'Américaine', 'Plat', 40, 'Facile', 4, [
    ['pates', 400, 'g'], ['cheddar', 8], ['fromage-rape', 100, 'g'], ['lait', 50, 'cl'], ['beurre', 40, 'g'], ['farine', 40, 'g'],
    ['moutarde', 1, 'cc', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Préchauffer le four à 200 °C. Cuire les macaronis dans 4 L d’eau bouillante salée, 2 min de moins que le temps indiqué, et les égoutter.',
    'Faire fondre le beurre à feu moyen, ajouter la farine et remuer 1 min. Verser le lait petit à petit en fouettant et cuire 5 min jusqu’à épaississement.',
    'Hors du feu, y faire fondre le cheddar en morceaux avec la moutarde. Saler, poivrer.',
    'Mélanger avec les pâtes, verser dans un plat, parsemer de fromage râpé et gratiner 15 min.'
  ]);

  R('salade-cesar', 'Salade César', 'Américaine', 'Plat', 30, 'Facile', 4, [
    ['laitue', 1], ['poulet', 400, 'g'], ['parmesan', 50, 'g'], ['pain', 4], ['mayonnaise', 4, 'cs'], ['citron', 0.5], ['ail', 1],
    ['anchois', 20, 'g', 'opt'], ['huile', 2, 'cs'], ['sel', null], ['poivre', null]
  ], [
    'Faire cuire le poulet 5 à 6 min de chaque côté à feu moyen dans 1 cuillerée d’huile, saler, poivrer, puis le trancher.',
    'Dans la même poêle, faire dorer le pain coupé en cubes 3 min avec le reste de l’huile pour obtenir des croûtons.',
    'Sauce : mélanger la mayonnaise, le jus de citron, l’ail écrasé, les anchois hachés et un peu de parmesan râpé.',
    'Mélanger la laitue en morceaux avec la sauce, ajouter le poulet, les croûtons et des copeaux de parmesan.'
  ]);

  R('coleslaw', 'Coleslaw', 'Américaine', 'Plat', 45, 'Facile', 6, [
    ['chou', 0.5], ['carottes', 2], ['mayonnaise', 5, 'cs'], ['vinaigre-de-cidre', 1, 'cs'], ['moutarde', 1, 'cc'], ['sucre', 5, 'g'], ['sel', null],
    ['poivre', null]
  ], [
    'Émincer très finement le chou et râper les carottes.',
    'Mélanger la mayonnaise, le vinaigre, la moutarde, le sucre, le sel et le poivre.',
    'Assaisonner les légumes et laisser reposer 30 min au réfrigérateur.'
  ]);

  R('pulled-pork', 'Pulled pork', 'Américaine', 'Plat', 300, 'Moyenne', 6, [
    ['porc-epaule', 1500, 'g'], ['sauce-barbecue', 12, 'cs'], ['sucre-roux', 40, 'g'], ['paprika-fume', 2, 'cc'], ['oignons', 1],
    ['pain-burger', 6], ['sel', null], ['poivre', null]
  ], [
    'Préchauffer le four à 150 °C. Frotter l’épaule avec le sucre roux, le paprika, le sel et le poivre.',
    'La cuire 4 h 30 dans une cocotte fermée avec l’oignon émincé et 20 cl d’eau, jusqu’à ce que la viande se défasse à la fourchette.',
    'Effilocher la viande à la fourchette, la mélanger avec la sauce barbecue et un peu de jus de cuisson.',
    'Servir dans les pains à burger toastés, accompagné d’un coleslaw.'
  ]);

  R('brownies', 'Brownies', 'Américaine', 'Dessert', 45, 'Facile', 8, [
    ['chocolat-noir', 200, 'g'], ['beurre', 150, 'g'], ['sucre', 150, 'g'], ['oeufs', 3], ['farine', 80, 'g'],
    ['cerneaux-de-noix', 80, 'g', 'opt']
  ], [
    'Préchauffer le four à 180 °C. Faire fondre le chocolat avec le beurre au bain-marie ou à feu très doux.',
    'Fouetter les œufs et le sucre, ajouter le chocolat fondu, la farine puis les noix concassées.',
    'Verser dans un moule carré de 20 cm chemisé de papier cuisson et cuire 20 à 25 min : le centre doit rester fondant.',
    'Laisser refroidir avant de découper en carrés.'
  ]);

  R('cheesecake', 'Cheesecake', 'Américaine', 'Dessert', 500, 'Moyenne', 8, [
    ['speculoos', 25], ['beurre', 80, 'g'], ['fromage-frais-a-tartiner', 600, 'g'], ['sucre', 150, 'g'], ['oeufs', 3],
    ['creme-liquide', 20, 'cl'], ['citron', 1]
  ], [
    'Préchauffer le four à 150 °C. Mixer les biscuits avec le beurre fondu et tasser au fond d’un moule à charnière de 22 cm.',
    'Fouetter le fromage frais avec le sucre, puis ajouter les œufs un à un, la crème et le zeste de citron, sans trop battre.',
    'Verser sur le biscuit et cuire 1 h : le centre doit rester légèrement tremblotant.',
    'Laisser refroidir 1 h dans le four éteint porte entrouverte, puis réserver au moins 6 h (idéalement une nuit) au réfrigérateur.'
  ]);

  R('muffins-myrtilles', 'Muffins aux myrtilles', 'Américaine', 'Dessert', 35, 'Facile', 6, [
    ['farine', 250, 'g'], ['sucre', 120, 'g'], ['oeufs', 2], ['lait', 20, 'cl'], ['beurre', 80, 'g'], ['levure-chimique', 1],
    ['myrtilles', 150, 'g'], ['sel', 1, 'pincee']
  ], [
    'Préchauffer le four à 180 °C. Faire fondre le beurre.',
    'Mélanger la farine, le sucre, la levure et le sel d’un côté, les œufs, le lait et le beurre fondu de l’autre.',
    'Réunir sans trop mélanger (quelques grumeaux restent), puis ajouter délicatement les myrtilles.',
    'Remplir 12 moules à muffins aux trois quarts et cuire 20 à 25 min : la lame d’un couteau doit ressortir sèche.'
  ]);

  R('churros', 'Churros', 'Espagnole', 'Dessert', 40, 'Moyenne', 4, [
    ['farine', 250, 'g'], ['sucre', 60, 'g'], ['huile', 1, 'l'], ['cannelle', 1, 'cc', 'opt'], ['sel', 1, 'pincee']
  ], [
    'Porter à ébullition 30 cl d’eau avec le sel, verser la farine d’un coup hors du feu et mélanger vivement jusqu’à obtenir une pâte lisse. Laisser tiédir 10 min.',
    'Mettre la pâte dans une poche à douille cannelée.',
    'Chauffer l’huile à 180 °C. Y former des bâtons de 10 cm en coupant la pâte aux ciseaux et les frire 3 min, jusqu’à ce qu’ils soient dorés.',
    'Égoutter sur du papier absorbant et rouler dans le sucre mélangé à la cannelle.'
  ]);
};
