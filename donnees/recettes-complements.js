/* Recettes ajoutées en 0.6. Même format que recettes.js :
   R(id, nom, cuisine, type, minutes, difficulté, personnes, ingrédients, étapes)
   Types : Entrée | Plat | Dessert */
'use strict';

module.exports = function ajouter(R) {
  /* ───────────── Entrées françaises ───────────── */

  R('celeri-remoulade', 'Céleri rémoulade', 'Française', 'Entrée', 50, 'Facile', 4, [
    ['celeri-rave', 1], ['citron', 0.5], ['mayonnaise', 5, 'cs'], ['moutarde', 1, 'cs'], ['sel', null], ['poivre', null]
  ], [
    'Éplucher le céleri-rave (un petit, environ 600 g), le couper en quartiers et le râper finement, à la grille fine ou en julienne.',
    'L’arroser aussitôt du jus du demi-citron et mélanger pour qu’il ne noircisse pas.',
    'Mélanger la mayonnaise et la moutarde, saler et poivrer.',
    'Enrober le céleri de cette sauce, couvrir et réserver au moins 30 min au frais : le céleri s’attendrit et la sauce l’imprègne.'
  ]);

  R('salade-perigourdine', 'Salade périgourdine', 'Française', 'Plat', 25, 'Facile', 4, [
    ['salade', 1], ['gesiers-de-canard-confits', 250, 'g'], ['magret-de-canard-fume', 80, 'g'], ['cerneaux-de-noix', 40, 'g'],
    ['tomates-cerises', 150, 'g', 'opt'], ['echalotes', 1], ['vinaigre', 1, 'cs'], ['huile-de-noix', 3, 'cs'], ['moutarde', 1, 'cc'],
    ['sel', null], ['poivre', null]
  ], [
    'Laver et essorer la salade. Couper les tomates cerises en deux et ciseler l’échalote.',
    'Préparer la vinaigrette : fouetter la moutarde, le vinaigre, le sel et le poivre, puis l’huile de noix. Ajouter l’échalote.',
    'Égoutter les gésiers de leur graisse, les émincer et les faire revenir 5 min à feu moyen dans une poêle sans matière grasse, jusqu’à ce qu’ils soient chauds et légèrement dorés.',
    'Mélanger la salade avec la vinaigrette et la répartir sur les assiettes. Ajouter les tomates, les gésiers chauds, les tranches de magret fumé et les cerneaux de noix. Servir aussitôt.'
  ]);

  R('terrine-campagne', 'Terrine de campagne', 'Française', 'Entrée', 160, 'Moyenne', 8, [
    ['porc-hache', 500, 'g'], ['foies-de-volaille', 250, 'g'], ['poitrine-de-porc', 200, 'g'], ['echalotes', 2], ['ail', 2],
    ['oeufs', 1], ['cognac', 3, 'cl'], ['quatre-epices', 1, 'cc'], ['thym', 2], ['laurier', 2], ['sel', null], ['poivre', null]
  ], [
    'Nettoyer les foies de volaille (retirer les nerfs et les parties verdâtres) et les hacher grossièrement au couteau, ainsi que la poitrine sans sa couenne. Ciseler finement les échalotes et hacher l’ail.',
    'Mélanger à la main le porc haché, les foies, la poitrine, les échalotes, l’ail, l’œuf, le cognac, le quatre-épices et les feuilles d’une branche de thym. Saler à raison de 15 g de sel par kilo de farce (environ 14 g) et poivrer généreusement.',
    'Préchauffer le four à 160 °C. Tasser la farce dans une terrine de 1,2 L, lisser et poser dessus le laurier et la seconde branche de thym. Couvrir.',
    'Cuire au four à 160 °C, au bain-marie (eau chaude à mi-hauteur), 1 h 45 à 2 h : la terrine est cuite quand le jus qui remonte sur les bords est clair (70 °C à cœur).',
    'Laisser tiédir, puis poser sur la terrine un poids (une planchette et des boîtes de conserve) et réfrigérer au moins 24 h (non compté dans le temps de la recette) avant de servir en tranches épaisses.'
  ]);

  R('rillettes-sardines', 'Rillettes de sardines', 'Française', 'Entrée', 40, 'Facile', 4, [
    ['sardines-en-boite', 230, 'g'], ['fromage-frais-a-tartiner', 100, 'g'], ['citron', 0.5], ['ciboulette', 0.5], ['echalotes', 1],
    ['pain', 8, 'pc', 'opt'], ['poivre', null]
  ], [
    'Égoutter les sardines (deux boîtes) et retirer l’arête centrale si vous le souhaitez.',
    'Les écraser à la fourchette avec le fromage frais et le jus du demi-citron.',
    'Ajouter l’échalote et la ciboulette finement ciselées, poivrer et mélanger. Réserver 30 min au frais.',
    'Servir sur des tranches de pain grillées 2 min au grille-pain.'
  ]);

  R('tartare-saumon', 'Tartare de saumon', 'Française', 'Entrée', 35, 'Facile', 4, [
    ['saumon', 3], ['citron-vert', 1], ['echalotes', 1], ['ciboulette', 0.5], ['aneth', 0.25, 'pc', 'opt'], ['huile-olive', 2, 'cs'],
    ['sel', null], ['poivre', null]
  ], [
    'Utiliser un saumon extra-frais, de qualité à manger cru (ou congelé 7 jours au préalable). Retirer la peau et les arêtes, puis couper la chair en dés de 5 mm avec un couteau bien aiguisé.',
    'Ciseler l’échalote, la ciboulette et l’aneth. Prélever le zeste du citron vert et le presser.',
    'Mélanger le saumon avec l’huile, l’échalote, les herbes et le zeste. Saler, poivrer, couvrir et réserver 15 min au frais.',
    'Ajouter le jus de citron vert au dernier moment (il « cuit » le poisson s’il attend), mélanger et dresser à l’aide d’un cercle. Servir bien frais.'
  ]);

  R('carpaccio-saint-jacques', 'Carpaccio de Saint-Jacques', 'Française', 'Entrée', 35, 'Facile', 4, [
    ['noix-de-saint-jacques', 250, 'g'], ['citron-vert', 1], ['huile-olive', 3, 'cs'], ['fleur-de-sel', 2, 'pincee'],
    ['baies-roses', 1, 'cc', 'opt'], ['ciboulette', 0.25], ['poivre', null]
  ], [
    'Placer les noix de Saint-Jacques (bien fraîches, sans corail) 15 à 20 min au congélateur pour les raffermir.',
    'Prélever le zeste du citron vert, presser le jus et le mélanger avec l’huile d’olive.',
    'Trancher les noix en fines lamelles de 2 mm et les disposer en rosace sur des assiettes froides.',
    'Badigeonner de marinade et laisser reposer 10 min au frais.',
    'Parsemer de zeste, de ciboulette ciselée, de fleur de sel et de baies roses légèrement écrasées. Poivrer et servir aussitôt.'
  ]);

  R('asperges-mousseline', 'Asperges blanches sauce mousseline', 'Française', 'Entrée', 45, 'Moyenne', 4, [
    ['asperges-blanches', 1000, 'g'], ['beurre', 125, 'g'], ['oeufs', 3], ['citron', 0.5], ['creme-liquide', 10, 'cl'],
    ['sel', null], ['poivre', null]
  ], [
    'Éplucher les asperges à l’économe de la pointe vers la base et couper les 2 cm du bas, ligneux. Les lier en botte.',
    'Les cuire 12 à 18 min selon leur grosseur dans une grande casserole d’eau bouillante salée : la pointe d’un couteau doit s’enfoncer sans résistance. Égoutter sur un linge et garder au chaud.',
    'Pendant ce temps, fouetter la crème bien froide en chantilly souple et la réserver au frais. Faire fondre le beurre 2 min à feu doux.',
    'Au bain-marie frémissant, fouetter les 3 jaunes d’œufs avec 3 cs d’eau pendant 5 min, jusqu’à obtenir une mousse épaisse et nappante, sans laisser cuire les œufs.',
    'Hors du feu, verser le beurre fondu tiède en filet sans cesser de fouetter, puis ajouter le jus de citron, le sel et le poivre. Incorporer délicatement la crème fouettée et servir aussitôt avec les asperges tièdes.'
  ]);

  R('oeufs-mayonnaise', 'Œufs mayonnaise', 'Française', 'Entrée', 30, 'Facile', 4, [
    ['oeufs', 7], ['moutarde', 1, 'cc'], ['huile', 10, 'cs'], ['vinaigre', 1, 'cc'], ['ciboulette', 0.25, 'pc', 'opt'],
    ['sel', null], ['poivre', null]
  ], [
    'Plonger 6 œufs dans l’eau bouillante et les cuire 10 min. Les refroidir dans l’eau glacée, puis les écaler.',
    'Préparer la mayonnaise avec des ingrédients à température ambiante : fouetter le jaune du 7e œuf avec la moutarde et une pincée de sel, puis verser l’huile en filet sans cesser de fouetter jusqu’à ce qu’elle soit ferme.',
    'Ajouter le vinaigre et poivrer.',
    'Couper les œufs durs en deux, en disposer 3 moitiés par assiette, face bombée vers le haut, et les napper généreusement de mayonnaise. Parsemer de ciboulette ciselée.'
  ]);

  R('avocats-crevettes', 'Avocats aux crevettes', 'Française', 'Entrée', 15, 'Facile', 4, [
    ['avocat', 2], ['crevettes', 200, 'g'], ['mayonnaise', 3, 'cs'], ['ketchup', 1, 'cs'], ['cognac', 1, 'cl', 'opt'], ['citron', 0.5],
    ['sel', null], ['poivre', null]
  ], [
    'Préparer la sauce cocktail en mélangeant la mayonnaise, le ketchup et le cognac. Poivrer.',
    'Mélanger les crevettes cuites décortiquées avec la sauce.',
    'Couper les avocats en deux, retirer le noyau et arroser la chair de jus de citron. Saler légèrement.',
    'Garnir chaque demi-avocat de crevettes à la sauce cocktail et servir bien frais.'
  ]);

  R('salade-betteraves', 'Salade de betteraves aux noix', 'Française', 'Entrée', 15, 'Facile', 4, [
    ['betteraves-cuites', 3], ['echalotes', 1], ['cerneaux-de-noix', 30, 'g'], ['moutarde', 1, 'cc'], ['vinaigre', 1, 'cs'],
    ['huile', 3, 'cs'], ['persil', 0.25, 'pc', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Éplucher les betteraves et les couper en dés ou en fines tranches.',
    'Fouetter la moutarde, le vinaigre, le sel et le poivre, puis l’huile. Ajouter l’échalote ciselée.',
    'Mélanger les betteraves avec la vinaigrette, parsemer de noix concassées et de persil ciselé. Servir frais.'
  ]);

  R('rillettes-maquereau', 'Rillettes de maquereau fumé', 'Française', 'Entrée', 40, 'Facile', 4, [
    ['maquereau-fume', 200, 'g'], ['fromage-frais-a-tartiner', 100, 'g'], ['moutarde-a-l-ancienne', 1, 'cc'], ['citron', 0.5],
    ['ciboulette', 0.5], ['pain', 8, 'pc', 'opt'], ['poivre', null]
  ], [
    'Retirer la peau et les arêtes des filets de maquereau et les émietter.',
    'Les écraser à la fourchette avec le fromage frais, la moutarde à l’ancienne et le jus du demi-citron, en gardant un peu de texture.',
    'Ajouter la ciboulette ciselée et poivrer (inutile de saler, le poisson fumé l’est déjà). Réserver 30 min au frais.',
    'Servir sur des tranches de pain grillées 2 min au grille-pain.'
  ]);

  R('blinis-saumon-fume', 'Blinis au saumon fumé', 'Française', 'Entrée', 15, 'Facile', 4, [
    ['blinis', 16], ['saumon-fume', 4], ['creme-fraiche', 10, 'cl'], ['citron', 0.5], ['aneth', 0.25], ['oeufs-de-lump', 50, 'g', 'opt'],
    ['poivre', null]
  ], [
    'Préchauffer le four à 180 °C et y réchauffer les blinis 3 à 4 min.',
    'Mélanger la crème fraîche avec le jus du demi-citron et la moitié de l’aneth ciselé. Poivrer.',
    'Couper le saumon fumé en lanières.',
    'Garnir chaque blini d’une cuillerée de crème, d’un morceau de saumon, d’un peu d’œufs de lump et d’un brin d’aneth. Servir tiède.'
  ]);

  R('champignons-farcis', 'Champignons farcis', 'Française', 'Entrée', 40, 'Facile', 4, [
    ['champignons', 500, 'g'], ['echalotes', 2], ['ail', 2], ['persil', 0.5], ['chapelure', 30, 'g'], ['beurre', 40, 'g'],
    ['fromage-rape', 40, 'g', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Préchauffer le four à 200 °C. Nettoyer 12 gros champignons, ôter les pieds et les hacher finement.',
    'Faire fondre les échalotes ciselées 3 min à feu moyen dans 20 g de beurre, puis ajouter les pieds hachés et l’ail haché. Cuire 5 à 7 min à feu moyen-vif, jusqu’à ce que l’eau des champignons soit évaporée.',
    'Hors du feu, ajouter le persil ciselé et la chapelure. Saler, poivrer.',
    'Garnir les têtes de champignons de cette farce, les ranger dans un plat beurré, parsemer de fromage et de noisettes du reste de beurre.',
    'Cuire 15 à 20 min au four à 200 °C, jusqu’à ce que le dessus soit doré et les chapeaux tendres.'
  ]);

  R('cervelle-canut', 'Cervelle de canut', 'Française', 'Entrée', 70, 'Facile', 4, [
    ['fromage-blanc', 400, 'g'], ['creme-fraiche', 5, 'cl'], ['echalotes', 1], ['ail', 1], ['ciboulette', 0.5], ['persil', 0.25],
    ['vinaigre', 1, 'cs'], ['huile-olive', 2, 'cs'], ['sel', null], ['poivre', null]
  ], [
    'Si le fromage blanc est très liquide, le laisser égoutter 30 min dans une passoire fine.',
    'Le battre à la fourchette avec la crème, le vinaigre et l’huile d’olive.',
    'Ajouter l’échalote ciselée, l’ail haché très finement, la ciboulette et le persil ciselés. Saler, poivrer.',
    'Réserver au moins 30 min au frais avant de servir.'
  ]);

  R('salade-haricots-verts', 'Salade de haricots verts', 'Française', 'Entrée', 30, 'Facile', 4, [
    ['haricots-verts', 400, 'g'], ['tomates', 2], ['echalotes', 1], ['moutarde', 1, 'cc'], ['vinaigre', 1, 'cs'], ['huile', 3, 'cs'],
    ['persil', 0.25, 'pc', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Équeuter les haricots verts et les cuire 8 à 10 min à l’eau bouillante salée : ils doivent rester légèrement croquants.',
    'Les plonger dans l’eau glacée pour fixer la couleur, puis les égoutter soigneusement.',
    'Préparer la vinaigrette avec la moutarde, le vinaigre, le sel, le poivre et l’huile. Ajouter l’échalote ciselée.',
    'Couper les tomates en quartiers. Mélanger haricots, tomates et vinaigrette au dernier moment et parsemer de persil.'
  ]);

  R('harengs-pommes-huile', 'Harengs pommes à l’huile', 'Française', 'Entrée', 40, 'Facile', 4, [
    ['harengs-fumes', 300, 'g'], ['huile', 20, 'cl'], ['carottes', 1], ['oignons', 1], ['thym', 2], ['laurier', 1],
    ['pommes-de-terre', 600, 'g'], ['vinaigre', 1, 'cs'], ['echalotes', 1], ['persil', 0.25, 'pc', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Couper les filets de hareng en deux et les ranger dans un plat creux avec la carotte en fines rondelles, l’oignon en rondelles, le thym, le laurier et du poivre. Couvrir d’huile.',
    'Filmer et laisser mariner au moins 12 h au frais (non compté dans le temps de la recette) (ils se gardent ainsi une semaine).',
    'Le jour même, cuire les pommes de terre à chair ferme avec leur peau 20 à 25 min dans l’eau salée frémissante, jusqu’à ce qu’elles soient tendres.',
    'Les éplucher tièdes, les couper en rondelles et les arroser du vinaigre, de l’échalote ciselée et de 3 cs de l’huile de marinade. Saler légèrement.',
    'Servir les pommes de terre tièdes avec les harengs égouttés, les carottes et les oignons, et parsemer de persil.'
  ]);

  R('maquereaux-vin-blanc', 'Maquereaux marinés au vin blanc', 'Française', 'Entrée', 40, 'Facile', 4, [
    ['maquereaux', 4], ['vin-blanc', 30, 'cl'], ['vinaigre', 3, 'cs'], ['carottes', 1], ['oignons', 1], ['citron', 1], ['thym', 2],
    ['laurier', 2], ['graines-de-coriandre', 1, 'cc', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Lever les filets des maquereaux (ou les faire lever par le poissonnier), retirer les arêtes et les ranger côté peau vers le haut dans un plat creux. Saler légèrement.',
    'Dans une casserole, mettre le vin blanc, le vinaigre, la carotte et l’oignon en fines rondelles, le citron en rondelles, le thym, le laurier, la coriandre et du poivre. Porter à ébullition, puis laisser frémir 10 min à feu doux.',
    'Verser la marinade bouillante sur les filets : la chaleur suffit à les cuire.',
    'Laisser refroidir, couvrir et réfrigérer au moins 12 h, 24 h c’est encore mieux (non compté dans le temps de la recette). Servir froid avec la garniture de la marinade.'
  ]);

  R('huitres-champagne', 'Huîtres chaudes au champagne', 'Française', 'Entrée', 40, 'Moyenne', 4, [
    ['huitres', 24], ['champagne', 15, 'cl'], ['echalotes', 2], ['creme-liquide', 15, 'cl'], ['oeufs', 2], ['beurre', 20, 'g'],
    ['poivre', null]
  ], [
    'Ouvrir les huîtres, les détacher et recueillir leur eau en la filtrant. Laver les coquilles creuses et les caler sur une plaque avec du papier aluminium froissé.',
    'Faire fondre les échalotes ciselées 3 min dans le beurre à feu doux. Ajouter le champagne et l’eau des huîtres, porter à frémissement et y pocher les huîtres 30 s, juste jusqu’à ce que leurs bords ondulent. Les remettre dans les coquilles.',
    'Faire réduire le liquide 5 à 6 min à feu vif, jusqu’à ce qu’il en reste environ 5 cl, ajouter la crème et réduire encore 3 min. Allumer le gril du four.',
    'Hors du feu, verser la sauce sur les 2 jaunes d’œufs en fouettant, puis remettre 1 à 2 min sur feu très doux en fouettant, jusqu’à ce qu’elle épaississe légèrement, sans bouillir. Poivrer.',
    'Napper chaque huître de sauce et passer 1 à 2 min sous le gril très chaud, jusqu’à ce que le dessus blondisse. Servir aussitôt.'
  ]);

  /* ───────────── Entrées d’ailleurs ───────────── */

  R('poivrons-marines', 'Poivrons grillés marinés', 'Italienne', 'Entrée', 120, 'Facile', 4, [
    ['poivrons-rouges', 4], ['ail', 2], ['huile-olive', 5, 'cs'], ['vinaigre-balsamique', 1, 'cs', 'opt'], ['basilic', 0.25],
    ['sel', null], ['poivre', null]
  ], [
    'Préchauffer le four en position gril à 240 °C. Y faire griller les poivrons entiers 25 à 30 min en les retournant, jusqu’à ce que la peau soit noircie et boursouflée.',
    'Les enfermer 10 min dans un saladier couvert : la vapeur décolle la peau.',
    'Les peler, retirer le pédoncule et les graines, et les couper en lanières.',
    'Les arroser d’huile d’olive et de vinaigre balsamique, ajouter l’ail émincé et le basilic ciselé. Saler, poivrer et laisser mariner au moins 1 h avant de servir.'
  ]);

  R('vitello-tonnato', 'Vitello tonnato', 'Italienne', 'Entrée', 320, 'Moyenne', 6, [
    ['roti-de-veau', 800, 'g'], ['carottes', 1], ['oignons', 1], ['celeri', 1], ['laurier', 1], ['vin-blanc', 25, 'cl'],
    ['thon-boite', 150, 'g'], ['anchois', 15, 'g'], ['capres', 2, 'cs'], ['mayonnaise', 6, 'cs'], ['citron', 0.5],
    ['sel', null], ['poivre', null]
  ], [
    'Mettre le rôti ficelé dans une cocotte juste à sa taille avec la carotte, l’oignon et le céleri coupés en morceaux, le laurier et le vin blanc. Compléter d’eau à hauteur et saler.',
    'Porter à frémissement et cuire 1 h à feu doux, sans bouillir. Laisser refroidir la viande dans son bouillon 1 h, puis l’égoutter et la réfrigérer 2 h pour pouvoir la trancher finement.',
    'Mixer le thon égoutté, les anchois, 1 cs de câpres, le jus du demi-citron et la mayonnaise, en ajoutant 3 à 4 cs de bouillon pour obtenir une sauce lisse et nappante. Poivrer.',
    'Trancher le veau très finement, disposer les tranches sur un plat, napper de sauce et parsemer du reste de câpres. Réserver 1 h au frais avant de servir.'
  ]);

  R('salade-fenouil-orange', 'Salade de fenouil à l’orange', 'Italienne', 'Entrée', 15, 'Facile', 4, [
    ['fenouil', 2], ['oranges', 2], ['olives', 30, 'g'], ['oignon-rouge', 0.5, 'pc', 'opt'], ['huile-olive', 3, 'cs'],
    ['sel', null], ['poivre', null]
  ], [
    'Émincer très finement les bulbes de fenouil, à la mandoline si possible. Garder quelques pluches.',
    'Peler les oranges à vif et les couper en rondelles, en recueillant le jus.',
    'Mélanger ce jus avec l’huile d’olive, du sel et du poivre.',
    'Disposer le fenouil et les oranges sur un plat, ajouter l’oignon rouge en fines lamelles et les olives, arroser de sauce et parsemer de pluches. Servir frais.'
  ]);

  R('arancini', 'Arancini', 'Italienne', 'Entrée', 190, 'Moyenne', 6, [
    ['riz-risotto', 250, 'g'], ['bouillon', 1], ['oignons', 0.5], ['beurre', 20, 'g'], ['parmesan', 50, 'g'], ['safran', 1, 'pincee', 'opt'],
    ['mozzarella', 125, 'g'], ['oeufs', 2], ['farine', 50, 'g'], ['chapelure', 150, 'g'], ['huile', 1, 'l'], ['sel', null], ['poivre', null]
  ], [
    'Dissoudre le bouillon et le safran dans 80 cl d’eau chaude. Faire fondre l’oignon haché dans le beurre 3 min à feu moyen, ajouter le riz et le remuer 2 min jusqu’à ce qu’il soit nacré.',
    'Ajouter le bouillon louche par louche en remuant, à feu moyen, pendant 18 min environ, jusqu’à ce que le riz soit cuit et le liquide absorbé. Hors du feu, ajouter le parmesan et poivrer. Étaler sur une plaque et laisser refroidir complètement 2 h au frais.',
    'Couper la mozzarella égouttée en 18 dés. Les mains humides, prendre une grosse cuillerée de riz, placer un dé de mozzarella au centre et refermer en boule de 5 cm.',
    'Rouler les boules dans la farine, puis dans les œufs battus, puis dans la chapelure.',
    'Chauffer l’huile à 175 °C et frire les arancini 4 par 4 pendant 4 min environ, jusqu’à ce qu’ils soient bien dorés. Égoutter sur du papier absorbant et servir chaud.'
  ]);

  R('crostini-figues-chevre', 'Crostini figues, chèvre et jambon cru', 'Italienne', 'Entrée', 20, 'Facile', 4, [
    ['baguette', 1], ['figues', 4], ['chevre-frais', 150, 'g'], ['jambon-cru', 4], ['miel', 1, 'cs'], ['huile-olive', 2, 'cs'],
    ['thym-frais', 1, 'pc', 'opt'], ['poivre', null]
  ], [
    'Préchauffer le four à 200 °C. Couper la baguette en 16 tranches, les badigeonner d’huile d’olive et les faire dorer 5 min au four.',
    'Tartiner chaque tranche de chèvre frais.',
    'Couper les figues en quartiers et déchirer le jambon cru en lanières. En garnir les crostini.',
    'Arroser d’un filet de miel, parsemer de thym effeuillé et poivrer. Servir aussitôt, ou après 3 min au four pour tiédir le chèvre.'
  ]);

  R('patatas-bravas', 'Patatas bravas', 'Espagnole', 'Entrée', 55, 'Facile', 4, [
    ['pommes-de-terre', 800, 'g'], ['huile-olive', 4, 'cs'], ['tomates-concassees', 200, 'g'], ['ail', 2], ['paprika-fume', 1, 'cc'],
    ['piment-de-cayenne', 1, 'pincee'], ['vinaigre-de-xeres', 1, 'cs'], ['mayonnaise', 3, 'cs', 'opt'], ['sel', null]
  ], [
    'Préchauffer le four à 220 °C. Éplucher les pommes de terre, les couper en cubes de 2,5 cm, les sécher et les mélanger avec 3 cs d’huile d’olive et du sel.',
    'Les étaler en une seule couche sur une plaque et les cuire 35 à 40 min au four à 220 °C en les retournant à mi-cuisson, jusqu’à ce qu’elles soient dorées et croustillantes.',
    'Pendant ce temps, faire revenir l’ail haché 1 min à feu moyen dans le reste d’huile, ajouter le paprika et le piment, remuer 30 s, puis les tomates. Laisser mijoter 10 min à feu doux.',
    'Ajouter le vinaigre, saler et mixer la sauce.',
    'Servir les pommes de terre chaudes nappées de sauce brava, avec la mayonnaise à part.'
  ]);

  R('calamars-romaine', 'Calamars à la romaine', 'Espagnole', 'Entrée', 25, 'Facile', 4, [
    ['calamars', 500, 'g'], ['farine', 100, 'g'], ['oeufs', 1], ['huile', 1, 'l'], ['citron', 1], ['mayonnaise', 4, 'cs', 'opt'],
    ['sel', null]
  ], [
    'Rincer les anneaux de calamar et bien les sécher dans du papier absorbant.',
    'Préparer la pâte : fouetter la farine, l’œuf, 12 cl d’eau très froide et une pincée de sel pour obtenir une pâte épaisse et lisse.',
    'Chauffer l’huile à 180 °C. Tremper les anneaux dans la pâte et les frire par petites quantités 2 à 3 min, jusqu’à ce qu’ils soient dorés.',
    'Égoutter sur du papier absorbant, saler et servir aussitôt avec des quartiers de citron et la mayonnaise.'
  ]);

  R('piquillos-farcis', 'Piquillos farcis au thon', 'Espagnole', 'Entrée', 30, 'Facile', 4, [
    ['piquillos', 250, 'g'], ['thon-boite', 140, 'g'], ['fromage-frais-a-tartiner', 100, 'g'], ['echalotes', 1], ['persil', 0.25],
    ['huile-olive', 2, 'cs'], ['piment', 1, 'pincee', 'opt'], ['poivre', null]
  ], [
    'Égoutter délicatement les piquillos (environ 12) en les gardant entiers.',
    'Écraser le thon égoutté avec le fromage frais, l’échalote ciselée, le persil haché, le piment et du poivre.',
    'Farcir chaque piquillo de cette préparation à la petite cuillère.',
    'Les disposer sur un plat, arroser d’un filet d’huile d’olive et réserver 15 min au frais avant de servir.'
  ]);

  R('feuilles-vigne-farcies', 'Feuilles de vigne farcies', 'Libanaise', 'Entrée', 150, 'Moyenne', 6, [
    ['feuilles-de-vigne', 250, 'g'], ['riz-rond', 200, 'g'], ['oignons', 1], ['tomates', 2], ['persil', 1], ['menthe', 0.5],
    ['citron', 2], ['huile-olive', 8, 'cs'], ['sel', null], ['poivre', null]
  ], [
    'Rincer les feuilles de vigne en saumure (environ 40), les blanchir 2 min à l’eau bouillante et les égoutter. Rincer le riz.',
    'Préparer la farce : mélanger le riz cru, l’oignon haché finement, les tomates épépinées en petits dés, le persil et la menthe ciselés, le jus d’un citron et 4 cs d’huile d’olive. Saler et poivrer.',
    'Étaler une feuille, nervures vers le haut, déposer 1 cc de farce à la base, rabattre les côtés et rouler sans trop serrer (le riz gonfle). Tapisser le fond d’une cocotte avec les feuilles abîmées et y ranger les rouleaux bien serrés.',
    'Arroser du reste d’huile et du jus du second citron, couvrir d’eau à hauteur et poser une assiette dessus pour les maintenir. Porter à frémissement puis cuire 1 h à 1 h 15 à feu doux, jusqu’à ce que le riz soit tendre et le liquide absorbé.',
    'Laisser refroidir dans la cocotte. Servir tiède ou froid.'
  ]);

  R('muhammara', 'Muhammara (crème de poivrons aux noix)', 'Libanaise', 'Entrée', 15, 'Facile', 4, [
    ['poivrons-grilles', 250, 'g'], ['cerneaux-de-noix', 100, 'g'], ['chapelure', 30, 'g'], ['melasse-de-grenade', 1, 'cs'], ['ail', 1],
    ['cumin', 1, 'cc'], ['piment', 1, 'pincee'], ['huile-olive', 3, 'cs'], ['citron', 0.5], ['pains-pita', 4, 'pc', 'opt'], ['sel', null]
  ], [
    'Faire griller les noix 3 à 4 min à sec dans une poêle à feu moyen, en remuant.',
    'Mixer les poivrons égouttés, les noix, la chapelure, la mélasse de grenade, l’ail, le cumin, le piment et le jus du demi-citron, en gardant une texture légèrement granuleuse.',
    'Ajouter 2 cs d’huile d’olive, saler et goûter : la crème doit être à la fois fumée, acidulée et relevée.',
    'Servir dans une assiette creuse, arrosée du reste d’huile, avec les pains pita.'
  ]);

  R('zaalouk', 'Zaalouk (salade d’aubergines)', 'Maghrébine', 'Entrée', 50, 'Facile', 4, [
    ['aubergines', 2], ['tomates', 4], ['ail', 3], ['cumin', 1, 'cc'], ['paprika', 1, 'cc'], ['coriandre', 0.5], ['persil', 0.25],
    ['huile-olive', 4, 'cs'], ['citron', 0.5, 'pc', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Éplucher les aubergines une bande sur deux, les couper en dés et les cuire 15 min à la vapeur.',
    'Peler et concasser les tomates.',
    'Dans une sauteuse, faire revenir l’ail haché 1 min dans l’huile à feu moyen, ajouter les tomates, le cumin et le paprika, et cuire 10 min à feu moyen.',
    'Ajouter les aubergines, les écraser à la fourchette et cuire encore 15 à 20 min à feu doux en remuant, jusqu’à obtenir une compotée épaisse.',
    'Ajouter la coriandre et le persil ciselés, le jus de citron, saler et poivrer. Servir tiède ou froid.'
  ]);

  R('spanakopita', 'Triangles épinards-feta (spanakopita)', 'Grecque', 'Entrée', 60, 'Moyenne', 6, [
    ['pate-filo', 6], ['epinards', 500, 'g'], ['feta', 200, 'g'], ['oignons', 1], ['oeufs', 1], ['aneth', 0.5], ['beurre', 60, 'g'],
    ['huile-olive', 1, 'cs'], ['muscade', 1, 'pincee', 'opt'], ['poivre', null]
  ], [
    'Préchauffer le four à 180 °C. Faire revenir l’oignon haché 5 min dans l’huile d’olive à feu moyen, ajouter les épinards et cuire jusqu’à ce qu’ils tombent et que leur eau s’évapore, environ 5 min.',
    'Égoutter les épinards, les presser fortement et les hacher. Les mélanger avec la feta émiettée, l’œuf, l’aneth ciselé, la muscade et du poivre (la feta est déjà salée).',
    'Faire fondre le beurre 1 min à feu doux. Couper chaque feuille de filo en 3 bandes dans la longueur, en gardant les autres sous un linge humide. Badigeonner une bande de beurre, déposer 1 cs de farce en bas et replier en triangle jusqu’au bout.',
    'Ranger les triangles sur une plaque couverte de papier cuisson et les badigeonner de beurre.',
    'Cuire 20 à 25 min au four à 180 °C, jusqu’à ce qu’ils soient dorés et croustillants.'
  ]);

  R('gyozas-porc', 'Gyozas au porc', 'Japonaise', 'Entrée', 70, 'Moyenne', 4, [
    ['feuilles-de-wonton', 30], ['porc-hache', 250, 'g'], ['chou-chinois', 0.25], ['ciboule', 0.5], ['gingembre', 10, 'g'], ['ail', 2],
    ['sauce-soja', 4, 'cs'], ['huile-sesame', 1, 'cs'], ['vinaigre-riz', 2, 'cs'], ['huile', 2, 'cs'], ['huile-pimentee', 1, 'cc', 'opt'],
    ['sel', null]
  ], [
    'Hacher finement le chou chinois (environ 200 g), le saler, le laisser dégorger 15 min puis le presser fortement dans un linge.',
    'Mélanger le porc, le chou, la ciboule ciselée, le gingembre et l’ail râpés, 1 cs de sauce soja et l’huile de sésame.',
    'Déposer 1 cc de farce au centre d’une feuille ronde à gyoza, humidifier le bord et refermer en demi-lune en formant des plis d’un côté.',
    'Chauffer 1 cs d’huile dans une grande poêle antiadhésive à feu moyen-vif et y ranger la moitié des gyozas côté plat. Les dorer 2 min, verser 8 cl d’eau, couvrir aussitôt et cuire 5 min à feu moyen. Découvrir et laisser encore 1 min pour que le dessous redevienne croustillant. Recommencer avec le reste.',
    'Servir chaud avec une sauce faite de 3 cs de sauce soja, du vinaigre de riz et de l’huile pimentée.'
  ]);

  R('salade-wakame', 'Salade de wakame', 'Japonaise', 'Entrée', 25, 'Facile', 4, [
    ['algue-wakame-sechee', 10, 'g'], ['concombre', 1], ['vinaigre-riz', 4, 'cs'], ['sauce-soja', 1, 'cs'], ['sucre', 10, 'g'],
    ['huile-sesame', 1, 'cc'], ['graines-sesame', 1, 'cs'], ['sel', null]
  ], [
    'Réhydrater le wakame 10 min dans un grand bol d’eau froide (il gonfle beaucoup). L’égoutter, le presser et couper les grands morceaux.',
    'Couper le concombre en fines rondelles, le saler et le laisser dégorger 10 min, puis le presser.',
    'Mélanger le vinaigre de riz, la sauce soja, le sucre jusqu’à ce qu’il soit dissous, et l’huile de sésame.',
    'Faire griller les graines de sésame 2 min à sec dans une poêle à feu moyen. Mélanger wakame, concombre et sauce, parsemer de sésame et servir frais.'
  ]);

  R('bhajis-oignon', 'Bhajis à l’oignon', 'Indienne', 'Entrée', 35, 'Facile', 4, [
    ['oignons', 3], ['farine-de-pois-chiche', 150, 'g'], ['cumin', 1, 'cc'], ['curcuma', 0.5, 'cc'], ['piment', 1, 'pincee'],
    ['coriandre', 0.5], ['gingembre', 10, 'g'], ['huile', 1, 'l'], ['sel', null]
  ], [
    'Émincer finement les oignons, les saler et les laisser 10 min : ils rendent leur eau.',
    'Ajouter la farine de pois chiche, le cumin, le curcuma, le piment, le gingembre râpé et la coriandre ciselée. Verser 8 à 10 cl d’eau petit à petit pour obtenir une pâte épaisse qui enrobe les oignons.',
    'Chauffer l’huile à 175 °C. Y déposer des cuillerées de pâte et les frire 3 à 4 min en les retournant, jusqu’à ce qu’elles soient dorées et croustillantes.',
    'Égoutter sur du papier absorbant et servir chaud.'
  ]);

  R('raita', 'Raïta au concombre', 'Indienne', 'Entrée', 15, 'Facile', 4, [
    ['yaourt', 2], ['concombre', 0.5], ['cumin', 0.5, 'cc'], ['menthe', 0.25], ['piment', 1, 'pincee', 'opt'], ['sel', null]
  ], [
    'Râper le demi-concombre et le presser dans les mains pour retirer son eau.',
    'Faire griller le cumin 30 s à sec dans une petite poêle à feu doux, jusqu’à ce qu’il embaume.',
    'Mélanger les yaourts, le concombre, la menthe ciselée, le cumin, le piment et le sel.',
    'Servir bien frais.'
  ]);

  R('tempura-crevettes', 'Tempura de crevettes', 'Japonaise', 'Entrée', 30, 'Moyenne', 4, [
    ['gambas', 16], ['farine', 100, 'g'], ['maizena', 30, 'g'], ['oeufs', 1], ['huile', 1, 'l'], ['sauce-soja', 4, 'cs'],
    ['mirin', 2, 'cs', 'opt'], ['sel', null]
  ], [
    'Décortiquer les gambas en gardant la queue, retirer le boyau noir et inciser 3 fois le ventre pour qu’elles ne se recourbent pas. Bien les sécher.',
    'Chauffer l’huile à 180 °C.',
    'Au dernier moment, battre l’œuf avec 20 cl d’eau glacée, ajouter la farine et la maïzena tamisées et mélanger à peine avec des baguettes : quelques grumeaux doivent rester.',
    'Tremper les gambas une à une dans la pâte en les tenant par la queue et les frire 2 min dans l’huile à 180 °C, par 4 ou 5, jusqu’à ce qu’elles soient légèrement blondes et croustillantes. Égoutter sur du papier absorbant et saler.',
    'Servir aussitôt avec une sauce faite de la sauce soja, du mirin et de 2 cs d’eau.'
  ]);

  R('ceviche', 'Ceviche de poisson', 'Péruvienne', 'Entrée', 35, 'Facile', 4, [
    ['cabillaud', 400, 'g'], ['citron-vert', 5], ['oignon-rouge', 1], ['piments-frais', 1], ['coriandre', 0.5], ['mais-doux', 100, 'g', 'opt'],
    ['sel', null]
  ], [
    'Utiliser un poisson blanc extra-frais (dos de cabillaud, bar ou dorade). Retirer peau et arêtes et le couper en dés de 1,5 cm. Réserver au frais.',
    'Émincer très finement l’oignon rouge et le rincer à l’eau froide. Épépiner et hacher le piment. Presser les citrons verts.',
    'Saler le poisson, puis l’arroser du jus de citron vert. Ajouter le piment et l’oignon, mélanger et laisser mariner 10 à 15 min au frais : le poisson devient opaque à l’extérieur.',
    'Ajouter la coriandre ciselée et servir aussitôt, bien froid, avec le maïs.'
  ]);

  R('nachos-gratines', 'Nachos gratinés', 'Mexicaine', 'Entrée', 20, 'Facile', 4, [
    ['tortilla-chips', 200, 'g'], ['cheddar', 8], ['jalapenos', 40, 'g'], ['sauce-salsa', 4, 'cs'], ['creme-fraiche', 10, 'cl'],
    ['avocat', 1, 'pc', 'opt'], ['coriandre', 0.25, 'pc', 'opt']
  ], [
    'Préchauffer le four à 200 °C.',
    'Étaler les tortilla chips dans un plat allant au four, en couche épaisse. Parsemer du cheddar coupé en petits morceaux et des jalapeños émincés.',
    'Enfourner 5 à 7 min à 200 °C, jusqu’à ce que le fromage soit fondu.',
    'Garnir de sauce salsa, de crème fraîche, de dés d’avocat et de coriandre ciselée. Servir immédiatement.'
  ]);

  /* ───────────── Plats ───────────── */

  R('aiguillettes-canard-orange', 'Aiguillettes de canard à l’orange', 'Française', 'Plat', 30, 'Facile', 4, [
    ['aiguillettes-de-canard', 600, 'g'], ['oranges', 3], ['miel', 1, 'cs'], ['vinaigre', 1, 'cs'], ['fond-de-veau', 10, 'g', 'opt'],
    ['beurre', 20, 'g'], ['liqueur-d-orange', 2, 'cl', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Prélever le zeste d’une orange bien lavée, le tailler en fine julienne et le blanchir 1 min à l’eau bouillante. Presser les 3 oranges.',
    'Sécher les aiguillettes, saler et poivrer. Chauffer le beurre dans une grande poêle à feu vif et saisir les aiguillettes en deux fois, 1 min 30 à 2 min par face : elles doivent être dorées et rosées à cœur. Réserver au chaud sous une feuille d’aluminium.',
    'Dans la même poêle, à feu moyen, faire caraméliser le miel 1 min, puis déglacer au vinaigre.',
    'Ajouter le jus d’orange avec le fond de veau délayé dedans et les zestes. Faire réduire 5 à 6 min à feu vif, jusqu’à ce que la sauce soit sirupeuse. Ajouter la liqueur et rectifier l’assaisonnement.',
    'Remettre les aiguillettes et leur jus 1 min dans la sauce à feu doux pour les enrober, sans faire bouillir. Servir aussitôt.'
  ]);

  R('aiguillettes-canard-miel', 'Aiguillettes de canard au miel et au balsamique', 'Française', 'Plat', 25, 'Facile', 4, [
    ['aiguillettes-de-canard', 600, 'g'], ['miel', 2, 'cs'], ['vinaigre-balsamique', 3, 'cs'], ['echalotes', 2], ['sauce-soja', 1, 'cs'],
    ['huile', 1, 'cs'], ['thym', 1, 'pc', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Ciseler les échalotes. Sécher les aiguillettes et les saler légèrement.',
    'Chauffer l’huile dans une grande poêle à feu vif et saisir les aiguillettes en deux fois, 1 min 30 par face. Réserver.',
    'Baisser à feu moyen et faire fondre les échalotes 2 min dans la graisse restante.',
    'Ajouter le miel et le laisser mousser 30 s, puis déglacer avec le vinaigre balsamique, la sauce soja et 3 cs d’eau. Ajouter le thym et laisser réduire 2 à 3 min à feu moyen, jusqu’à ce que la sauce soit sirupeuse.',
    'Remettre les aiguillettes 1 min à feu moyen en les retournant pour bien les laquer. Poivrer et servir.'
  ]);

  R('garbure', 'Garbure', 'Française', 'Plat', 180, 'Moyenne', 6, [
    ['confit-canard', 4], ['haricots-blancs-secs', 250, 'g'], ['chou', 0.5], ['pommes-de-terre', 500, 'g'], ['carottes', 3], ['navets', 2],
    ['poireaux', 2], ['oignons', 1], ['ail', 3], ['bouquet-garni', 1], ['piment', 1, 'pincee'], ['pain', 6, 'pc', 'opt'],
    ['sel', null], ['poivre', null]
  ], [
    'La veille (non compté dans le temps de la recette), faire tremper les haricots 12 h dans un grand volume d’eau froide.',
    'Les égoutter et les mettre dans un grand faitout avec 3 L d’eau froide, l’oignon émincé et le bouquet garni. Porter à ébullition, écumer et cuire 1 h à feu doux, sans saler.',
    'Pendant ce temps, faire chauffer les cuisses confites 5 min à feu doux dans une poêle pour faire fondre leur graisse, et en garder 2 cs. Éplucher et couper les carottes, les navets et les pommes de terre en gros dés, les poireaux en rondelles et le chou en lanières.',
    'Faire suer carottes, navets, poireaux et ail haché 5 min à feu moyen dans la graisse de canard, puis les ajouter aux haricots avec les pommes de terre et le chou. Saler, poivrer, ajouter le piment et cuire 45 min à frémissement.',
    'Ajouter les cuisses de canard et cuire encore 20 min à frémissement : la soupe doit être épaisse et les haricots fondants. Servir dans des assiettes creuses sur une tranche de pain grillée, avec le canard.'
  ]);

  R('filet-mignon-croute', 'Filet mignon en croûte', 'Française', 'Plat', 105, 'Moyenne', 6, [
    ['filet-mignon-de-porc', 800, 'g'], ['pate-feuilletee', 2], ['champignons', 250, 'g'], ['echalotes', 2], ['jambon-cru', 6],
    ['moutarde', 2, 'cs'], ['beurre', 20, 'g'], ['huile', 1, 'cs'], ['oeufs', 1], ['thym', 1, 'pc', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Parer les deux filets mignons en retirant la peau argentée. Saler, poivrer et les saisir 6 à 8 min dans l’huile à feu vif, sur toutes les faces. Laisser refroidir 15 min, puis les badigeonner de moutarde.',
    'Préparer la duxelles : hacher très finement les champignons et les échalotes, les cuire dans le beurre à feu moyen environ 10 min, jusqu’à ce que toute l’eau soit évaporée. Ajouter le thym, saler, poivrer et laisser refroidir.',
    'Préchauffer le four à 200 °C. Sur chaque pâte, disposer 3 tranches de jambon cru qui se chevauchent, étaler la duxelles et poser un filet. Enrouler le jambon autour, puis la pâte, souder les bords à l’œuf battu et placer la soudure dessous.',
    'Dorer à l’œuf battu, dessiner des croisillons avec la pointe d’un couteau et percer une petite cheminée.',
    'Cuire 30 à 35 min au four à 200 °C, jusqu’à ce que la pâte soit bien dorée. Laisser reposer 10 min avant de trancher.'
  ]);

  R('joues-porc-cidre', 'Joues de porc au cidre', 'Française', 'Plat', 150, 'Facile', 4, [
    ['joues-de-porc', 800, 'g'], ['cidre', 50, 'cl'], ['oignons', 2], ['carottes', 2], ['pommes', 2], ['lardons', 100, 'g', 'opt'],
    ['farine', 15, 'g'], ['beurre', 20, 'g'], ['huile', 1, 'cs'], ['thym', 2], ['laurier', 1], ['creme-fraiche', 10, 'cl', 'opt'],
    ['sel', null], ['poivre', null]
  ], [
    'Parer les joues, saler et poivrer. Dans une cocotte, chauffer l’huile et le beurre à feu vif et dorer les joues 2 min par face. Réserver.',
    'Baisser à feu moyen et faire revenir 5 min les lardons, les oignons émincés et les carottes en rondelles. Saupoudrer de farine et remuer 1 min.',
    'Remettre les joues, verser le cidre (compléter d’eau pour les couvrir presque), ajouter le thym et le laurier. Porter à ébullition, couvrir et cuire 2 h à feu très doux : la viande doit se couper à la fourchette.',
    'Ajouter les pommes en quartiers épais 20 min avant la fin de la cuisson.',
    'Retirer joues et pommes, faire réduire la sauce 5 min à feu vif, ajouter la crème et rectifier l’assaisonnement. Napper et servir.'
  ]);

  R('roti-veau-cocotte', 'Rôti de veau en cocotte', 'Française', 'Plat', 120, 'Facile', 6, [
    ['roti-de-veau', 1200, 'g'], ['carottes', 4], ['oignons', 2], ['ail', 3], ['vin-blanc', 15, 'cl'], ['beurre', 30, 'g'], ['huile', 1, 'cs'],
    ['thym', 2], ['laurier', 1], ['sel', null], ['poivre', null]
  ], [
    'Sortir le rôti du réfrigérateur 30 min avant. Le saler et le poivrer.',
    'Dans une cocotte, chauffer le beurre et l’huile à feu moyen-vif et dorer le rôti sur toutes ses faces, environ 10 min.',
    'Ajouter les oignons en quartiers, les carottes en rondelles épaisses, l’ail en chemise, le thym et le laurier, et remuer 3 min à feu moyen.',
    'Verser le vin blanc en grattant les sucs, puis 10 cl d’eau. Couvrir et cuire 1 h 10 à feu doux, en retournant le rôti à mi-cuisson et en ajoutant un peu d’eau si nécessaire.',
    'Laisser reposer 10 min sous une feuille d’aluminium, trancher et servir avec les légumes et le jus.'
  ]);

  R('foie-veau-lyonnaise', 'Foie de veau à la lyonnaise', 'Française', 'Plat', 35, 'Facile', 4, [
    ['foie-de-veau', 4], ['oignons', 4], ['beurre', 50, 'g'], ['farine', 20, 'g'], ['vinaigre', 2, 'cs'], ['persil', 0.25],
    ['sel', null], ['poivre', null]
  ], [
    'Émincer les oignons et les faire fondre dans 30 g de beurre à feu moyen-doux pendant 20 min en remuant, jusqu’à ce qu’ils soient bien dorés et confits. Saler et réserver.',
    'Fariner légèrement les tranches de foie et les tapoter pour retirer l’excédent.',
    'Chauffer le reste du beurre dans une poêle à feu vif jusqu’à ce qu’il mousse et cuire le foie 1 min 30 à 2 min par face : il doit rester rosé à cœur. Saler, poivrer et dresser.',
    'Remettre les oignons dans la poêle, déglacer au vinaigre 30 s en remuant, verser sur le foie et parsemer de persil ciselé.'
  ]);

  R('entrecote-bordelaise', 'Entrecôte à la bordelaise', 'Française', 'Plat', 60, 'Moyenne', 2, [
    ['entrecotes', 2], ['os-a-moelle', 2], ['echalotes', 3], ['vin-rouge', 25, 'cl'], ['fond-de-veau', 15, 'g'], ['beurre', 40, 'g'],
    ['thym', 1], ['laurier', 1], ['huile', 1, 'cs'], ['persil', 0.25, 'pc', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Sortir les entrecôtes du réfrigérateur 30 min avant. Faire tremper les os à moelle 10 min dans l’eau tiède, puis pousser la moelle hors de l’os avec le doigt. La couper en rondelles de 1 cm et la pocher 2 min dans l’eau salée frémissante. Égoutter.',
    'Préparer la sauce : faire fondre les échalotes ciselées dans 10 g de beurre 3 min à feu doux. Ajouter le vin, le thym et le laurier et faire réduire des trois quarts à feu moyen, environ 10 min.',
    'Ajouter le fond de veau délayé dans 15 cl d’eau et réduire 5 min à feu moyen, jusqu’à ce que la sauce soit nappante. Retirer les herbes et, hors du feu, incorporer 20 g de beurre froid en dés. Rectifier l’assaisonnement.',
    'Chauffer l’huile dans une poêle à feu vif et cuire les entrecôtes 2 à 3 min par face pour une cuisson saignante, en les arrosant en fin de cuisson avec le reste de beurre. Saler, poivrer et laisser reposer 5 min.',
    'Dresser, poser les rondelles de moelle sur la viande, napper de sauce et parsemer de persil.'
  ]);

  R('pintade-chou', 'Pintade au chou', 'Française', 'Plat', 110, 'Moyenne', 4, [
    ['pintade', 1], ['chou', 1], ['lardons', 150, 'g'], ['carottes', 2], ['oignons', 1], ['vin-blanc', 15, 'cl'], ['bouillon', 1],
    ['beurre', 30, 'g'], ['thym', 2], ['laurier', 1], ['baies-de-genievre', 1, 'cc', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Couper la pintade en 4 morceaux. Effeuiller le chou vert, retirer les grosses côtes, blanchir les feuilles 5 min à l’eau bouillante salée, les égoutter et les émincer grossièrement.',
    'Dans une grande cocotte, dorer les morceaux de pintade 10 min dans le beurre à feu moyen-vif. Saler, poivrer et réserver.',
    'Dans la même cocotte, faire revenir 5 min à feu moyen les lardons, l’oignon émincé et les carottes en rondelles.',
    'Ajouter le chou, le thym, le laurier et le genièvre, mélanger, puis déposer la pintade par-dessus. Verser le vin blanc et le bouillon délayé dans 20 cl d’eau chaude.',
    'Couvrir et cuire 1 h à feu doux : la chair doit se détacher facilement de l’os. Rectifier l’assaisonnement et servir la pintade sur le chou.'
  ]);

  R('cailles-raisins', 'Cailles aux raisins', 'Française', 'Plat', 50, 'Moyenne', 4, [
    ['cailles', 8], ['raisin', 400, 'g'], ['cognac', 3, 'cl'], ['echalotes', 2], ['beurre', 40, 'g'], ['vin-blanc', 10, 'cl'],
    ['fond-de-veau', 10, 'g', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Saler et poivrer les cailles à l’intérieur et à l’extérieur. Laver et égrener le raisin (le peler et l’épépiner si les grains sont gros).',
    'Dans une cocotte, dorer les cailles 8 à 10 min dans 30 g de beurre à feu moyen, en les retournant.',
    'Ajouter les échalotes ciselées et remuer 2 min à feu moyen. Verser le cognac chauffé et flamber, hotte éteinte.',
    'Ajouter le vin blanc et le fond de veau délayé dans 10 cl d’eau. Couvrir et cuire 15 min à feu doux, puis ajouter le raisin et cuire encore 5 min.',
    'Retirer les cailles, faire réduire la sauce 3 min à feu vif et incorporer le reste du beurre. Napper les cailles et servir.'
  ]);

  R('raie-beurre-noir', 'Raie au beurre noir et aux câpres', 'Française', 'Plat', 35, 'Facile', 4, [
    ['ailes-de-raie', 4], ['vinaigre', 8, 'cs'], ['oignons', 1], ['thym', 1], ['laurier', 1], ['beurre', 100, 'g'], ['capres', 2, 'cs'],
    ['persil', 0.25], ['sel', null], ['poivre', null]
  ], [
    'Préparer un court-bouillon : 2 L d’eau, 6 cs de vinaigre, l’oignon émincé, le thym, le laurier, du sel et du poivre. Porter à ébullition, puis laisser frémir 10 min à feu doux.',
    'Y plonger les ailes de raie rincées et les pocher 10 à 12 min à tout petit frémissement, jusqu’à ce que la chair se détache des cartilages.',
    'Les égoutter, retirer la peau des deux côtés et les dresser dans des assiettes chaudes. Parsemer de câpres et de persil ciselé.',
    'Dans une poêle, cuire le beurre à feu moyen 3 à 4 min, jusqu’à ce qu’il mousse et prenne une couleur noisette foncée, sans brûler. Le verser aussitôt sur la raie.',
    'Déglacer la poêle chaude avec les 2 cs de vinaigre restantes (attention aux projections) et en arroser le poisson. Servir aussitôt.'
  ]);

  R('truites-amandes', 'Truites aux amandes', 'Française', 'Plat', 30, 'Facile', 4, [
    ['truites', 4], ['amandes-effilees', 60, 'g'], ['beurre', 80, 'g'], ['farine', 40, 'g'], ['citron', 1], ['persil', 0.25],
    ['huile', 1, 'cs'], ['sel', null], ['poivre', null]
  ], [
    'Rincer et sécher les truites vidées. Les saler et les poivrer à l’intérieur et à l’extérieur, puis les fariner et les tapoter.',
    'Dans une grande poêle, chauffer 40 g de beurre et l’huile à feu moyen et cuire les truites 5 à 6 min par face, jusqu’à ce que la peau soit dorée et la chair se détache de l’arête. Les dresser au chaud.',
    'Essuyer la poêle, y faire fondre le reste du beurre et dorer les amandes 2 à 3 min à feu moyen en remuant.',
    'Ajouter le jus d’un demi-citron et le persil ciselé, napper les truites et servir avec le reste du citron en quartiers.'
  ]);

  R('bouillabaisse', 'Bouillabaisse', 'Française', 'Plat', 120, 'Difficile', 6, [
    ['filets-de-rouget', 6], ['lotte', 500, 'g'], ['merlan', 400, 'g'], ['dorade', 1], ['fumet-de-poisson', 20, 'g'],
    ['pommes-de-terre', 800, 'g'], ['tomates', 4], ['oignons', 2], ['poireaux', 1], ['fenouil', 1], ['ail', 4], ['safran', 2, 'pincee'],
    ['pastis', 3, 'cl'], ['huile-olive', 6, 'cs'], ['thym', 2], ['laurier', 1], ['rouille', 6, 'cs'], ['baguette', 1],
    ['sel', null], ['poivre', null]
  ], [
    'Couper la lotte en tronçons de 4 cm, le merlan en morceaux de 5 cm et la dorade écaillée et vidée en 4 tronçons. Les arroser de 2 cs d’huile, d’une pincée de safran et du pastis, et réserver 30 min au frais.',
    'Dans une grande marmite, chauffer le reste de l’huile à feu moyen et faire suer 8 min les oignons, le poireau et le fenouil émincés avec 3 gousses d’ail écrasées. Ajouter les tomates pelées et concassées, le thym, le laurier et le reste du safran, et cuire 3 min à feu moyen.',
    'Verser 2 L d’eau chaude dans laquelle on a dissous le fumet. Porter à ébullition, ajouter les pommes de terre en rondelles de 1,5 cm et cuire 15 min à gros bouillons, pour que l’huile s’émulsionne dans le bouillon.',
    'Ajouter d’abord la lotte et la dorade, cuire 5 min à frémissement, puis le merlan et les rougets, et cuire encore 3 à 5 min, jusqu’à ce que la chair soit juste nacrée. Saler et poivrer.',
    'Griller les tranches de baguette 2 à 3 min sous le gril du four et les frotter avec la dernière gousse d’ail. Servir le bouillon brûlant sur les croûtons tartinés de rouille, puis les poissons et les pommes de terre à part.'
  ]);

  R('gratin-quenelles', 'Gratin de quenelles', 'Française', 'Plat', 50, 'Facile', 4, [
    ['quenelles', 8], ['beurre', 50, 'g'], ['farine', 40, 'g'], ['lait', 50, 'cl'], ['champignons', 200, 'g'], ['fromage-rape', 60, 'g'],
    ['muscade', 1, 'pincee'], ['sel', null], ['poivre', null]
  ], [
    'Préchauffer le four à 200 °C.',
    'Préparer une béchamel : faire fondre 40 g de beurre à feu moyen, ajouter la farine et remuer 1 min, puis verser le lait froid en fouettant. Cuire 5 à 8 min à feu moyen en remuant, jusqu’à ce qu’elle nappe. Assaisonner de muscade, de sel et de poivre.',
    'Faire sauter les champignons émincés 5 min à feu vif dans le reste du beurre et les ajouter à la béchamel.',
    'Disposer les quenelles bien espacées dans un plat beurré (elles doublent de volume), napper de sauce et parsemer de fromage.',
    'Cuire 25 à 30 min au four à 200 °C, jusqu’à ce que les quenelles soient gonflées et le dessus doré. Servir aussitôt, avant qu’elles ne retombent.'
  ]);

  R('saucisson-chaud', 'Saucisson chaud, pommes à l’huile', 'Française', 'Plat', 50, 'Facile', 4, [
    ['saucisson-a-cuire', 1], ['pommes-de-terre', 1000, 'g'], ['echalotes', 2], ['vin-blanc', 5, 'cl'], ['vinaigre', 2, 'cs'],
    ['moutarde', 1, 'cs'], ['huile', 5, 'cs'], ['persil', 0.25], ['sel', null], ['poivre', null]
  ], [
    'Plonger le saucisson, sans le piquer, dans une grande casserole d’eau froide. Porter à frémissement et le pocher 35 à 40 min sans jamais laisser bouillir, pour qu’il n’éclate pas.',
    'Pendant ce temps, cuire les pommes de terre à chair ferme avec leur peau dans l’eau froide salée, 20 à 25 min après l’ébullition.',
    'Préparer la vinaigrette avec la moutarde, le vinaigre, le sel, le poivre et l’huile. Ajouter les échalotes ciselées.',
    'Éplucher les pommes de terre chaudes, les couper en rondelles épaisses, les arroser d’abord du vin blanc (elles l’absorbent), puis de la vinaigrette et du persil ciselé.',
    'Trancher le saucisson en rondelles épaisses et le servir chaud sur les pommes de terre tièdes.'
  ]);

  R('cotes-veau-morilles', 'Côtes de veau aux morilles', 'Française', 'Plat', 60, 'Moyenne', 4, [
    ['cotes-de-veau', 4], ['morilles-sechees', 30, 'g'], ['echalotes', 2], ['vin-blanc', 10, 'cl'], ['creme-fraiche', 25, 'cl'],
    ['beurre', 40, 'g'], ['huile', 1, 'cs'], ['sel', null], ['poivre', null]
  ], [
    'Réhydrater les morilles 30 min dans 30 cl d’eau tiède. Les égoutter en gardant l’eau, que l’on filtre dans un filtre à café. Rincer les morilles pour éliminer le sable et couper les plus grosses. Sortir les côtes du réfrigérateur.',
    'Dans une grande poêle, chauffer l’huile et 20 g de beurre à feu moyen-vif et cuire les côtes 5 à 6 min par face en les arrosant, jusqu’à ce qu’elles soient dorées et rosées à cœur. Saler, poivrer et réserver au chaud.',
    'Dans la même poêle, faire fondre les échalotes ciselées 2 min dans le reste du beurre, ajouter les morilles et cuire 3 min à feu moyen.',
    'Déglacer au vin blanc et réduire de moitié, 2 min à feu vif, ajouter 10 cl d’eau de trempage filtrée et réduire 3 min. Verser la crème et cuire 5 min à feu moyen, jusqu’à ce que la sauce nappe.',
    'Remettre les côtes et leur jus 2 min dans la sauce à feu doux, rectifier l’assaisonnement et servir.'
  ]);

  R('souris-agneau', 'Souris d’agneau confites', 'Française', 'Plat', 210, 'Facile', 4, [
    ['souris-d-agneau', 4], ['ail', 8], ['oignons', 2], ['carottes', 2], ['tomates-concassees', 200, 'g'], ['vin-blanc', 20, 'cl'],
    ['romarin-frais', 2], ['thym', 3], ['huile-olive', 3, 'cs'], ['sel', null], ['poivre', null]
  ], [
    'Préchauffer le four à 150 °C.',
    'Dans une cocotte en fonte allant au four, dorer les souris 10 min dans l’huile à feu vif, sur toutes les faces. Saler, poivrer et réserver.',
    'Faire revenir 5 min à feu moyen les oignons émincés et les carottes en rondelles. Ajouter l’ail en chemise, les tomates, le vin blanc, le romarin et le thym, puis remettre les souris et ajouter 20 cl d’eau.',
    'Couvrir et cuire 3 h au four à 150 °C en arrosant les souris toutes les 45 min : la viande doit se détacher de l’os.',
    'Si le jus est trop abondant, le faire réduire 5 min à feu vif. Servir les souris nappées de leur jus.'
  ]);

  R('onglet-echalotes', 'Onglet à l’échalote', 'Française', 'Plat', 45, 'Facile', 4, [
    ['onglet', 700, 'g'], ['echalotes', 6], ['beurre', 50, 'g'], ['vin-rouge', 10, 'cl'], ['huile', 1, 'cs'], ['persil', 0.25, 'pc', 'opt'],
    ['sel', null], ['poivre', null]
  ], [
    'Sortir l’onglet du réfrigérateur 30 min avant. Retirer le nerf central, ce qui le sépare en deux morceaux.',
    'Ciseler les échalotes et les faire fondre 10 min dans 30 g de beurre à feu doux, sans les colorer, avec une pincée de sel. Verser le vin rouge et faire réduire presque à sec, environ 5 min, à feu moyen. Réserver au chaud.',
    'Chauffer l’huile et le reste du beurre dans une poêle à feu vif et saisir l’onglet 2 à 3 min par face : il se mange saignant, sinon il durcit.',
    'Saler, poivrer et laisser reposer 5 min. Trancher dans le sens contraire des fibres, napper d’échalotes et parsemer de persil.'
  ]);

  R('linguine-vongole', 'Linguine aux palourdes', 'Italienne', 'Plat', 100, 'Moyenne', 4, [
    ['linguine', 400, 'g'], ['palourdes', 1000, 'g'], ['ail', 3], ['vin-blanc', 10, 'cl'], ['huile-olive', 4, 'cs'], ['persil', 0.5],
    ['piment', 1, 'pincee'], ['sel', null], ['poivre', null]
  ], [
    'Faire dégorger les palourdes 1 h dans de l’eau froide salée (35 g de sel par litre), puis les rincer. Jeter celles qui sont cassées ou qui restent ouvertes quand on les tapote.',
    'Cuire les linguine 8 à 9 min dans une grande casserole d’eau bouillante salée, soit 2 min de moins que le temps indiqué sur le paquet.',
    'Pendant ce temps, dans une grande sauteuse, chauffer l’huile à feu moyen avec l’ail émincé et le piment 1 min, sans colorer. Ajouter les palourdes et le vin blanc, couvrir et cuire 3 à 4 min à feu vif, jusqu’à ce qu’elles s’ouvrent. Jeter celles qui restent fermées.',
    'Égoutter les pâtes en gardant une louche d’eau de cuisson et les terminer 2 min à feu vif dans la sauteuse avec le jus des palourdes, en remuant et en ajoutant un peu d’eau de cuisson, jusqu’à ce que la sauce les enrobe.',
    'Ajouter le persil ciselé, poivrer et arroser d’un filet d’huile d’olive. Servir aussitôt.'
  ]);

  R('udon-dashi', 'Udon au bouillon dashi', 'Japonaise', 'Plat', 20, 'Facile', 4, [
    ['nouilles-udon', 800, 'g'], ['dashi-en-poudre', 2, 'cc'], ['sauce-soja', 4, 'cs'], ['mirin', 3, 'cs'], ['ciboule', 0.5],
    ['algue-wakame-sechee', 5, 'g'], ['oeufs', 4, 'pc', 'opt']
  ], [
    'Réhydrater le wakame 5 min dans l’eau froide et l’égoutter.',
    'Porter 1,2 L d’eau à ébullition, y dissoudre le dashi, ajouter la sauce soja et le mirin et laisser frémir 2 min à feu doux.',
    'Si vous le souhaitez, casser les œufs dans le bouillon frémissant et les pocher 3 min.',
    'Plonger les udon précuites 1 à 2 min dans l’eau bouillante pour les détacher, puis les égoutter et les répartir dans des bols.',
    'Verser le bouillon brûlant, ajouter les œufs, le wakame et la ciboule ciselée. Servir aussitôt.'
  ]);

  R('couscous-royal', 'Couscous royal', 'Maghrébine', 'Plat', 140, 'Moyenne', 8, [
    ['agneau', 800, 'g'], ['cuisses-poulet', 4], ['merguez', 8], ['semoule', 750, 'g'], ['carottes', 4], ['navets', 3], ['courgettes', 3],
    ['oignons', 2], ['tomates', 3], ['concentre-tomate', 2, 'cs', 'opt'], ['pois-chiches', 400, 'g'], ['epices-a-couscous', 2, 'cc'],
    ['harissa', 1, 'cc'], ['huile-olive', 4, 'cs'], ['beurre', 50, 'g'], ['coriandre', 0.5], ['sel', null], ['poivre', null]
  ], [
    'Dans un grand faitout, chauffer 2 cs d’huile à feu moyen-vif et dorer 10 min l’agneau en morceaux et les cuisses de poulet coupées en deux, puis ajouter les oignons émincés et cuire 5 min.',
    'Ajouter les épices, le concentré et les tomates en quartiers, remuer 2 min, puis couvrir de 2,5 L d’eau. Saler, poivrer, ajouter la coriandre en bouquet ficelé. Porter à ébullition, écumer et cuire 45 min à frémissement, à couvert.',
    'Ajouter les carottes et les navets en gros tronçons et cuire 20 min à frémissement, puis les courgettes en tronçons et les pois chiches égouttés, et cuire encore 20 min.',
    'Préparer la semoule : l’arroser de 75 cl d’eau tiède salée avec le reste d’huile, couvrir 10 min, égrainer à la fourchette, puis la réchauffer 5 min à la vapeur au-dessus du bouillon et l’égrainer avec le beurre.',
    'Griller les merguez 8 à 10 min à la poêle à feu moyen. Délayer la harissa dans une louche de bouillon pour ceux qui aiment relevé. Servir semoule, viandes, légumes et bouillon à part.'
  ]);

  /* ───────────── Desserts français ───────────── */

  R('mille-feuille', 'Mille-feuille', 'Française', 'Dessert', 210, 'Difficile', 6, [
    ['pate-feuilletee', 2], ['lait', 50, 'cl'], ['oeufs', 4], ['sucre', 100, 'g'], ['maizena', 40, 'g'], ['gousses-de-vanille', 1],
    ['beurre', 30, 'g'], ['sucre-glace', 150, 'g'], ['chocolat-noir', 20, 'g', 'opt']
  ], [
    'Préparer la crème pâtissière : porter le lait à frémissement à feu moyen avec la gousse de vanille fendue et grattée. Fouetter les 4 jaunes avec le sucre, puis ajouter la maïzena. Verser le lait chaud dessus en fouettant, remettre dans la casserole et cuire à feu moyen en fouettant, 2 à 3 min jusqu’à épaississement, puis encore 1 min à petits bouillons. Hors du feu, ajouter le beurre, filmer au contact et réfrigérer 2 h.',
    'Préchauffer le four à 200 °C. Poser chaque pâte sur une plaque, la piquer, la couvrir de papier cuisson et d’une seconde plaque pour l’empêcher de gonfler. Cuire 20 à 25 min à 200 °C, jusqu’à ce qu’elle soit bien dorée, puis laisser refroidir.',
    'Découper dans les abaisses 3 rectangles identiques d’environ 8 × 18 cm.',
    'Préparer le glaçage : mélanger le sucre glace avec 2 cs d’eau pour obtenir une pâte épaisse et en napper un rectangle. Faire des traits de chocolat fondu (1 min au micro-ondes ou au bain-marie) et les étirer avec la pointe d’un couteau pour marbrer. Laisser prendre.',
    'Lisser la crème au fouet et la mettre en poche. Monter : un rectangle, une couche de crème, un deuxième rectangle, une couche de crème, puis le rectangle glacé. Réfrigérer 30 min et couper au couteau-scie.'
  ]);

  R('paris-brest', 'Paris-Brest', 'Française', 'Dessert', 200, 'Difficile', 8, [
    ['farine', 150, 'g'], ['beurre', 250, 'g'], ['oeufs', 6], ['lait', 25, 'cl'], ['sucre', 55, 'g'], ['maizena', 25, 'g'],
    ['praline', 150, 'g'], ['amandes-effilees', 30, 'g'], ['sucre-glace', 10, 'g', 'opt'], ['sel', 1, 'pincee']
  ], [
    'Préparer la crème pâtissière : porter le lait à frémissement à feu moyen. Fouetter 2 jaunes avec 50 g de sucre et la maïzena, verser le lait chaud, puis cuire à feu moyen en fouettant, 2 à 3 min jusqu’à épaississement et 1 min de plus. Filmer au contact et laisser refroidir complètement.',
    'Préchauffer le four à 180 °C. Pâte à choux : porter à ébullition 25 cl d’eau, 100 g de beurre, le sel et 5 g de sucre. Hors du feu, verser la farine d’un coup et mélanger vivement, puis dessécher 1 à 2 min à feu moyen jusqu’à ce que la pâte se détache. Laisser tiédir 5 min et incorporer 4 œufs battus petit à petit : la pâte doit être lisse, brillante et retomber en ruban.',
    'Sur une plaque couverte de papier cuisson, pocher avec une douille cannelée une couronne de 22 cm : deux boudins côte à côte et un troisième par-dessus. Dorer avec un peu d’œuf battu, parsemer d’amandes effilées.',
    'Cuire 40 à 45 min à 180 °C sans ouvrir le four, jusqu’à ce que la couronne soit bien dorée et sèche. Laisser refroidir sur une grille.',
    'Crème mousseline : fouetter 150 g de beurre mou avec le praliné, puis ajouter la crème pâtissière à la même température et fouetter 5 min jusqu’à ce qu’elle soit légère.',
    'Couper la couronne en deux horizontalement, garnir généreusement de crème à la douille cannelée, replacer le chapeau et saupoudrer de sucre glace. Réfrigérer 1 h et sortir 20 min avant de servir.'
  ]);

  R('profiteroles', 'Profiteroles au chocolat', 'Française', 'Dessert', 90, 'Moyenne', 6, [
    ['farine', 150, 'g'], ['beurre', 100, 'g'], ['oeufs', 4], ['sucre', 5, 'g'], ['sel', 1, 'pincee'], ['glace-a-la-vanille', 0.75, 'l'],
    ['chocolat-noir', 150, 'g'], ['creme-liquide', 20, 'cl'], ['amandes-effilees', 30, 'g', 'opt']
  ], [
    'Préchauffer le four à 180 °C. Porter à ébullition 25 cl d’eau avec le beurre, le sucre et le sel. Hors du feu, verser la farine d’un coup et mélanger vivement, puis dessécher la pâte 1 à 2 min à feu moyen.',
    'Laisser tiédir 5 min et incorporer les œufs battus petit à petit, jusqu’à obtenir une pâte lisse et brillante qui retombe en ruban.',
    'Pocher une trentaine de petits choux de 3 cm bien espacés sur une plaque couverte de papier cuisson. Cuire 25 à 30 min à 180 °C sans ouvrir le four, jusqu’à ce qu’ils soient dorés et secs. Laisser refroidir.',
    'Préparer la sauce : porter la crème à ébullition à feu moyen et la verser sur le chocolat haché. Attendre 1 min et lisser.',
    'Couper les choux en deux, garnir d’une boule de glace et refermer. Napper de sauce chaude et parsemer d’amandes grillées 2 à 3 min à sec dans une poêle à feu moyen.'
  ]);

  R('chouquettes', 'Chouquettes', 'Française', 'Dessert', 45, 'Moyenne', 6, [
    ['farine', 150, 'g'], ['beurre', 100, 'g'], ['lait', 12, 'cl'], ['oeufs', 4], ['sucre', 10, 'g'], ['sucre-perle', 60, 'g'],
    ['sel', 1, 'pincee']
  ], [
    'Préchauffer le four à 180 °C. Porter à ébullition le lait, 12 cl d’eau, le beurre, le sucre et le sel.',
    'Hors du feu, verser la farine d’un coup et mélanger vivement, puis dessécher la pâte 1 à 2 min à feu moyen, jusqu’à ce qu’elle se détache de la casserole.',
    'Laisser tiédir 5 min et incorporer les œufs battus petit à petit : la pâte doit être lisse, brillante et retomber en ruban.',
    'Pocher des petits tas de 3 cm sur une plaque couverte de papier cuisson et les couvrir généreusement de sucre perlé.',
    'Cuire 20 à 25 min à 180 °C sans ouvrir le four, jusqu’à ce qu’elles soient bien dorées. Laisser refroidir sur une grille.'
  ]);

  R('tarte-abricots', 'Tarte aux abricots', 'Française', 'Dessert', 60, 'Facile', 6, [
    ['pate-sablee', 1], ['abricots', 16], ['amandes-poudre', 40, 'g'], ['sucre', 40, 'g'], ['confiture', 40, 'g', 'opt']
  ], [
    'Préchauffer le four à 180 °C. Foncer un moule à tarte de 26 cm avec la pâte et la piquer à la fourchette.',
    'Mélanger la poudre d’amande avec 20 g de sucre et la répartir sur le fond : elle absorbera le jus des fruits.',
    'Couper les abricots en deux, les dénoyauter et les disposer en rosace, bien serrés, face coupée vers le haut. Saupoudrer du reste de sucre.',
    'Cuire 35 à 40 min au four à 180 °C, jusqu’à ce que la pâte soit dorée et les abricots fondants et légèrement caramélisés.',
    'Faire tiédir la confiture d’abricots 1 min à feu doux avec 1 cs d’eau et en badigeonner les fruits pour les faire briller. Servir tiède ou froid.'
  ]);

  R('tarte-mirabelles', 'Tarte aux mirabelles', 'Française', 'Dessert', 65, 'Facile', 6, [
    ['pate-brisee', 1], ['mirabelles', 600, 'g'], ['amandes-poudre', 30, 'g'], ['oeufs', 2], ['creme-fraiche', 15, 'cl'], ['sucre', 70, 'g'],
    ['sucre-vanille', 1]
  ], [
    'Préchauffer le four à 180 °C. Foncer un moule de 26 cm avec la pâte, la piquer et parsemer le fond de poudre d’amande.',
    'Laver les mirabelles, les ouvrir en deux, les dénoyauter et les disposer serrées sur la pâte. Cuire 15 min au four à 180 °C.',
    'Pendant ce temps, battre les œufs avec la crème, le sucre et le sucre vanillé.',
    'Verser cet appareil sur les fruits et poursuivre la cuisson 25 min à 180 °C, jusqu’à ce qu’il soit pris et doré. Servir tiède.'
  ]);

  R('tarte-chocolat', 'Tarte au chocolat', 'Française', 'Dessert', 130, 'Moyenne', 8, [
    ['pate-sablee', 1], ['chocolat-noir', 200, 'g'], ['creme-liquide', 20, 'cl'], ['lait', 10, 'cl'], ['oeufs', 1],
    ['cacao-en-poudre', 5, 'g', 'opt']
  ], [
    'Préchauffer le four à 180 °C. Foncer un moule de 24 cm avec la pâte, la piquer, la couvrir de papier cuisson et de billes de cuisson (ou de légumes secs) et cuire 15 min à blanc. Retirer les billes et cuire encore 5 à 10 min, jusqu’à ce que le fond soit doré. Baisser le four à 150 °C.',
    'Porter la crème et le lait à frémissement à feu moyen, verser sur le chocolat haché, attendre 1 min puis lisser au centre du bol en élargissant les cercles.',
    'Incorporer l’œuf battu, sans faire mousser.',
    'Verser la ganache sur le fond de tarte et cuire 15 à 20 min à 150 °C : les bords doivent être pris et le centre encore tremblotant.',
    'Laisser refroidir au moins 1 h à température ambiante et saupoudrer légèrement de cacao avant de servir.'
  ]);

  R('tarte-sucre', 'Tarte au sucre', 'Française', 'Dessert', 140, 'Moyenne', 6, [
    ['farine', 250, 'g'], ['levure-boulangere', 1], ['lait', 10, 'cl'], ['oeufs', 2], ['beurre', 80, 'g'], ['sucre', 25, 'g'],
    ['sucre-roux', 100, 'g'], ['creme-fraiche', 5, 'cl'], ['sel', 1, 'pincee']
  ], [
    'Faire tiédir le lait (30 s au micro-ondes : à peine chaud au doigt) et y délayer la levure. Laisser reposer 5 min.',
    'Mélanger la farine, le sucre et le sel, ajouter un œuf et le lait, et pétrir 5 min. Incorporer 60 g de beurre mou et pétrir encore 5 min, jusqu’à obtenir une pâte souple et lisse.',
    'Couvrir et laisser pousser 1 h dans un endroit tiède : la pâte doit doubler de volume.',
    'Dégazer la pâte, l’étaler en disque de 28 cm dans un moule beurré et laisser pousser encore 30 min. Préchauffer le four à 180 °C.',
    'Répartir la vergeoise (sucre roux) sur la pâte et parsemer du reste de beurre en noisettes. Battre le second œuf avec la crème et le verser délicatement.',
    'Cuire 20 à 25 min au four à 180 °C, jusqu’à ce que la tarte soit dorée. Servir tiède.'
  ]);

  R('tarte-normande', 'Tarte normande', 'Française', 'Dessert', 60, 'Facile', 6, [
    ['pate-brisee', 1], ['pommes', 4], ['oeufs', 2], ['creme-fraiche', 20, 'cl'], ['sucre', 80, 'g'], ['sucre-vanille', 1],
    ['farine', 20, 'g'], ['calvados', 2, 'cl', 'opt']
  ], [
    'Préchauffer le four à 180 °C. Foncer un moule de 26 cm avec la pâte et la piquer.',
    'Éplucher les pommes, les couper en quartiers puis en lamelles épaisses et les disposer sur la pâte. Cuire 15 min au four à 180 °C.',
    'Battre les œufs avec le sucre, le sucre vanillé et la farine, puis ajouter la crème et le calvados.',
    'Verser sur les pommes et poursuivre la cuisson 25 à 30 min à 180 °C, jusqu’à ce que l’appareil soit pris et doré. Servir tiède.'
  ]);

  R('gateau-basque', 'Gâteau basque', 'Française', 'Dessert', 150, 'Moyenne', 8, [
    ['farine', 280, 'g'], ['beurre', 150, 'g'], ['sucre', 150, 'g'], ['oeufs', 3], ['amandes-poudre', 50, 'g'], ['confiture', 250, 'g'],
    ['sel', 1, 'pincee']
  ], [
    'Fouetter le beurre mou avec le sucre jusqu’à ce qu’il soit crémeux. Ajouter un œuf entier et un jaune, puis la poudre d’amande, la farine et le sel. Mélanger sans trop travailler, filmer et réfrigérer 1 h.',
    'Préchauffer le four à 180 °C. Beurrer un moule de 24 cm. Étaler les deux tiers de la pâte entre deux feuilles de papier cuisson et foncer le moule en remontant sur les bords.',
    'Étaler la confiture de cerises noires en laissant 1 cm libre sur le bord.',
    'Étaler le reste de pâte en disque, le poser sur la confiture et souder les bords. Dorer au jaune d’œuf restant et strier en croisillons à la fourchette.',
    'Cuire 40 à 45 min au four à 180 °C, jusqu’à ce que le gâteau soit bien doré. Le laisser refroidir complètement avant de le démouler.'
  ]);

  R('crepes-suzette', 'Crêpes Suzette', 'Française', 'Dessert', 90, 'Moyenne', 4, [
    ['farine', 125, 'g'], ['oeufs', 2], ['lait', 25, 'cl'], ['beurre', 80, 'g'], ['sucre', 70, 'g'], ['oranges', 2],
    ['liqueur-d-orange', 6, 'cl'], ['sel', 1, 'pincee']
  ], [
    'Préparer la pâte : mélanger la farine, 10 g de sucre et le sel, ajouter les œufs puis le lait petit à petit en fouettant. Ajouter 20 g de beurre fondu et le zeste d’une demi-orange. Laisser reposer 1 h.',
    'Cuire 8 crêpes fines dans une poêle légèrement beurrée à feu moyen-vif, 1 min par face.',
    'Presser les oranges et prélever le reste du zeste. Dans une grande poêle, faire fondre 60 g de sucre 3 à 4 min à feu moyen, sans remuer, jusqu’à obtenir un caramel blond, ajouter 40 g de beurre, puis le jus et le zeste (attention aux projections). Réduire 3 à 4 min à feu moyen, jusqu’à ce que la sauce soit sirupeuse, et ajouter 2 cl de liqueur.',
    'Plier les crêpes en quatre et les réchauffer 1 min par face dans la sauce, à feu doux.',
    'Chauffer le reste de liqueur 30 s à feu doux dans une petite casserole, l’enflammer hotte éteinte et la verser sur les crêpes. Servir aussitôt.'
  ]);

  R('poires-vin-rouge', 'Poires pochées au vin rouge', 'Française', 'Dessert', 60, 'Facile', 4, [
    ['poires', 4], ['vin-rouge', 75, 'cl'], ['sucre', 150, 'g'], ['oranges', 1], ['badiane', 1], ['gousses-de-vanille', 1, 'pc', 'opt']
  ], [
    'Dans une casserole juste assez grande pour les poires, porter à ébullition le vin, le sucre, le zeste et le jus de l’orange, la badiane et la vanille fendue. Laisser bouillir 5 min.',
    'Peler les poires en gardant la queue et couper une fine tranche à la base pour qu’elles tiennent debout.',
    'Les plonger dans le vin et les cuire 25 à 30 min à frémissement, à couvert, en les retournant de temps en temps, jusqu’à ce que la pointe d’un couteau entre facilement.',
    'Retirer les poires et faire réduire le sirop à feu vif 10 à 15 min, jusqu’à ce qu’il soit sirupeux.',
    'Napper les poires de sirop et servir tiède ou froid.'
  ]);

  R('peches-melba', 'Pêches Melba', 'Française', 'Dessert', 100, 'Facile', 4, [
    ['peches', 4], ['sucre', 150, 'g'], ['gousses-de-vanille', 1], ['framboises', 250, 'g'], ['sucre-glace', 40, 'g'],
    ['glace-a-la-vanille', 0.5, 'l'], ['amandes-effilees', 20, 'g', 'opt'], ['creme-liquide', 15, 'cl', 'opt']
  ], [
    'Porter à ébullition 50 cl d’eau avec le sucre et la vanille fendue. Y pocher les pêches entières 5 à 8 min à frémissement, selon leur maturité.',
    'Les laisser refroidir dans le sirop, puis les peler, les couper en deux et les dénoyauter. Réfrigérer 1 h.',
    'Mixer les framboises avec le sucre glace et passer au tamis pour obtenir un coulis sans pépins.',
    'Fouetter la crème bien froide en chantilly. Faire dorer les amandes 2 à 3 min à sec dans une poêle à feu moyen.',
    'Dans chaque coupe, déposer une boule de glace, deux demi-pêches, napper de coulis et décorer de chantilly et d’amandes.'
  ]);

  R('charlotte-chocolat', 'Charlotte au chocolat', 'Française', 'Dessert', 390, 'Moyenne', 8, [
    ['boudoirs', 24], ['chocolat-noir', 200, 'g'], ['oeufs', 6], ['sucre', 40, 'g'], ['beurre', 50, 'g'], ['cafe', 20, 'cl'],
    ['sel', 1, 'pincee']
  ], [
    'Faire fondre le chocolat avec le beurre 5 min au bain-marie à feu doux. Laisser tiédir, puis incorporer les jaunes d’œufs un à un.',
    'Monter les blancs en neige avec le sel, puis les serrer avec le sucre. Les incorporer délicatement au chocolat en trois fois.',
    'Tremper rapidement les biscuits dans le café refroidi et en tapisser le fond et les bords d’un moule à charlotte, face bombée contre le moule.',
    'Verser la moitié de la mousse, ajouter une couche de biscuits imbibés, puis le reste de mousse, et terminer par des biscuits.',
    'Couvrir d’une assiette avec un poids léger et réfrigérer au moins 6 h. Démouler au moment de servir (la mousse contient des œufs crus : à consommer dans les 24 h).'
  ]);

  R('petits-pots-creme', 'Petits pots de crème à la vanille', 'Française', 'Dessert', 210, 'Facile', 6, [
    ['lait', 50, 'cl'], ['creme-liquide', 25, 'cl'], ['oeufs', 6], ['sucre', 100, 'g'], ['gousses-de-vanille', 1]
  ], [
    'Préchauffer le four à 150 °C. Porter le lait et la crème à frémissement à feu moyen avec la gousse de vanille fendue et grattée, puis laisser infuser 15 min hors du feu.',
    'Fouetter les 6 jaunes d’œufs avec le sucre, sans faire mousser. Verser le lait chaud filtré en remuant et retirer la mousse en surface.',
    'Répartir dans 6 petits pots ou ramequins et les placer dans un plat rempli d’eau chaude à mi-hauteur.',
    'Cuire 35 à 40 min au four à 150 °C, au bain-marie : les bords doivent être pris et le centre encore légèrement tremblotant.',
    'Laisser refroidir, puis réfrigérer au moins 2 h avant de servir.'
  ]);

  R('gateau-nantais', 'Gâteau nantais', 'Française', 'Dessert', 100, 'Moyenne', 8, [
    ['beurre', 125, 'g'], ['sucre', 150, 'g'], ['amandes-poudre', 125, 'g'], ['oeufs', 3], ['farine', 40, 'g'], ['rhum', 10, 'cl'],
    ['sucre-glace', 100, 'g']
  ], [
    'Préchauffer le four à 180 °C. Beurrer et fariner un moule de 22 cm.',
    'Fouetter le beurre mou avec le sucre jusqu’à ce qu’il blanchisse. Ajouter la poudre d’amande, puis les œufs un à un, la farine et 4 cl de rhum.',
    'Verser dans le moule et cuire 35 à 40 min à 180 °C, jusqu’à ce que le gâteau soit doré et qu’une lame en ressorte sèche.',
    'Démouler tiède et imbiber le gâteau de 4 cl de rhum au pinceau. Laisser refroidir complètement.',
    'Mélanger le sucre glace avec le reste du rhum pour obtenir un glaçage épais, en napper le gâteau et laisser figer.'
  ]);

  R('canneles', 'Cannelés bordelais', 'Française', 'Dessert', 90, 'Difficile', 6, [
    ['lait', 50, 'cl'], ['beurre', 60, 'g'], ['farine', 100, 'g'], ['sucre', 250, 'g'], ['oeufs', 3], ['rhum', 5, 'cl'],
    ['gousses-de-vanille', 1]
  ], [
    'Porter à ébullition le lait avec la gousse de vanille fendue et 50 g de beurre, puis laisser infuser 10 min hors du feu.',
    'Mélanger la farine et le sucre, ajouter un œuf entier et deux jaunes, puis verser le lait chaud peu à peu en remuant doucement, sans fouetter, pour ne pas incorporer d’air.',
    'Laisser tiédir, ajouter le rhum, couvrir et réfrigérer 24 h, 48 h c’est encore mieux (non compté dans le temps de la recette).',
    'Préchauffer le four à 250 °C. Beurrer généreusement 12 moules à cannelés avec le reste du beurre. Remélanger doucement la pâte et remplir les moules jusqu’à 1 cm du bord.',
    'Cuire 15 min à 250 °C, puis baisser à 180 °C et cuire encore 45 à 50 min : la croûte doit être brun foncé et caramélisée. Démouler aussitôt et laisser refroidir sur une grille.'
  ]);

  R('gateau-ardechois', 'Gâteau ardéchois à la crème de marrons', 'Française', 'Dessert', 60, 'Facile', 8, [
    ['creme-de-marrons', 500, 'g'], ['beurre', 100, 'g'], ['oeufs', 3], ['farine', 30, 'g'], ['rhum', 2, 'cl', 'opt'], ['sel', 1, 'pincee']
  ], [
    'Préchauffer le four à 180 °C. Beurrer un moule de 22 cm.',
    'Faire fondre le beurre 1 min à feu doux. Le mélanger avec la crème de marrons, les jaunes d’œufs, la farine et le rhum.',
    'Monter les blancs en neige ferme avec le sel et les incorporer délicatement.',
    'Verser dans le moule et cuire 30 à 35 min à 180 °C : une lame doit ressortir légèrement humide, le gâteau reste moelleux.',
    'Laisser tiédir avant de démouler.'
  ]);

  R('teurgoule', 'Teurgoule', 'Française', 'Dessert', 310, 'Facile', 8, [
    ['riz-rond', 150, 'g'], ['lait-entier', 200, 'cl'], ['sucre', 150, 'g'], ['cannelle', 2, 'cc'], ['sel', 1, 'pincee']
  ], [
    'Préchauffer le four à 150 °C.',
    'Dans une terrine en terre cuite d’au moins 2,5 L, mélanger le riz (sans le laver), le sucre, la cannelle et le sel.',
    'Verser le lait froid et bien mélanger.',
    'Cuire 1 h au four à 150 °C, puis baisser à 110 °C et cuire encore 4 h, sans remuer : une croûte brune épaisse se forme et le riz devient très crémeux dessous. Servir tiède ou froid.'
  ]);

  R('beignets-pommes', 'Beignets aux pommes', 'Française', 'Dessert', 60, 'Moyenne', 4, [
    ['pommes', 3], ['farine', 125, 'g'], ['oeufs', 2], ['biere-blonde', 15, 'cl'], ['sucre', 20, 'g'], ['sucre-glace', 30, 'g'],
    ['cannelle', 1, 'cc', 'opt'], ['huile', 1, 'l'], ['sel', 1, 'pincee']
  ], [
    'Préparer la pâte : mélanger la farine, le sucre et le sel, ajouter les jaunes d’œufs puis la bière petit à petit en fouettant. Laisser reposer 30 min.',
    'Éplucher les pommes, retirer le cœur au vide-pomme et les couper en rondelles de 1 cm.',
    'Monter les blancs en neige et les incorporer délicatement à la pâte. Chauffer l’huile à 170 °C.',
    'Tremper les rondelles dans la pâte et les frire 2 min par face dans l’huile à 170 °C, jusqu’à ce qu’elles soient dorées. Égoutter sur du papier absorbant.',
    'Saupoudrer de sucre glace mélangé à la cannelle et servir chaud.'
  ]);

  R('sables-bretons', 'Sablés bretons', 'Française', 'Dessert', 110, 'Facile', 8, [
    ['beurre-demi-sel', 200, 'g'], ['sucre', 180, 'g'], ['oeufs', 5], ['farine', 250, 'g'], ['levure-chimique', 1]
  ], [
    'Fouetter 4 jaunes d’œufs avec le sucre jusqu’à ce que le mélange blanchisse. Ajouter le beurre demi-sel mou et mélanger.',
    'Incorporer la farine et la levure sans trop travailler la pâte. La former en boudin de 5 cm de diamètre, filmer et réfrigérer 1 h.',
    'Préchauffer le four à 180 °C. Couper le boudin en tranches de 1 cm et les poser dans des cercles de 7 cm placés sur une plaque couverte de papier cuisson, pour qu’ils gardent leur forme.',
    'Dorer au dernier jaune d’œuf et strier à la fourchette.',
    'Cuire 15 à 18 min au four à 180 °C, jusqu’à ce qu’ils soient bien dorés. Démouler tiède et laisser refroidir sur une grille.'
  ]);

  R('palmiers', 'Palmiers', 'Française', 'Dessert', 45, 'Facile', 6, [
    ['pate-feuilletee', 1], ['sucre', 100, 'g']
  ], [
    'Saupoudrer le plan de travail de la moitié du sucre, y dérouler la pâte et la couvrir du reste du sucre. Passer le rouleau pour faire pénétrer le sucre.',
    'Rabattre deux bords opposés vers le centre, puis recommencer une fois, et plier les deux moitiés l’une sur l’autre. Réfrigérer 20 min.',
    'Préchauffer le four à 200 °C. Couper le boudin en tranches de 1 cm et les poser bien espacées sur une plaque couverte de papier cuisson.',
    'Cuire 8 à 10 min au four à 200 °C, retourner les palmiers et cuire encore 5 min, jusqu’à ce qu’ils soient caramélisés. Laisser refroidir sur une grille.'
  ]);

  R('kougelhopf', 'Kougelhopf', 'Française', 'Dessert', 360, 'Difficile', 8, [
    ['farine', 500, 'g'], ['levure-fraiche', 20, 'g'], ['lait', 20, 'cl'], ['oeufs', 2], ['sucre', 80, 'g'], ['beurre', 170, 'g'],
    ['raisins-secs', 100, 'g'], ['kirsch', 3, 'cl'], ['amandes', 20, 'g'], ['sucre-glace', 20, 'g'], ['sel', null]
  ], [
    'Faire macérer les raisins secs 1 h dans le kirsch.',
    'Faire tiédir le lait (à peine chaud au doigt) et y délayer la levure émiettée.',
    'Dans le bol d’un robot, mettre la farine, le sucre et 8 g de sel, ajouter le lait et les œufs, et pétrir 10 min en commençant lentement, jusqu’à ce que la pâte soit élastique. Ajouter 150 g de beurre mou en morceaux et pétrir encore 5 à 8 min, jusqu’à ce que la pâte se décolle du bol. Incorporer les raisins égouttés.',
    'Couvrir et laisser pousser 1 h 30 à 2 h dans un endroit tiède, jusqu’à ce que la pâte double.',
    'Beurrer généreusement un moule à kougelhopf avec le reste du beurre et placer une amande au fond de chaque cannelure. Dégazer la pâte, la former en boule, percer le centre et la déposer dans le moule. Laisser pousser encore 1 h 30, jusqu’à 1 cm du bord.',
    'Préchauffer le four à 180 °C et cuire 40 à 45 min, en couvrant d’aluminium si le dessus colore trop. Démouler tiède, laisser refroidir et saupoudrer de sucre glace.'
  ]);

  R('tarte-fromage-blanc', 'Tarte au fromage blanc', 'Française', 'Dessert', 215, 'Moyenne', 8, [
    ['pate-brisee', 1], ['fromage-blanc', 500, 'g'], ['oeufs', 4], ['sucre', 120, 'g'], ['creme-fraiche', 20, 'cl'], ['maizena', 40, 'g'],
    ['sucre-vanille', 1], ['citron', 1]
  ], [
    'Préchauffer le four à 180 °C. Foncer un moule à manqué de 24 cm avec la pâte, en remontant bien sur les bords.',
    'Mélanger le fromage blanc, les jaunes d’œufs, 60 g de sucre, la crème, la maïzena, le sucre vanillé et le zeste du citron.',
    'Monter les blancs en neige, les serrer avec le reste du sucre et les incorporer délicatement.',
    'Verser sur la pâte et cuire 50 à 60 min à 180 °C, jusqu’à ce que la tarte soit gonflée et dorée.',
    'Éteindre le four et laisser la tarte 15 min dans le four entrouvert pour qu’elle ne retombe pas trop, puis la laisser refroidir complètement avant de la démouler.'
  ]);

  /* ───────────── Desserts d’ailleurs ───────────── */

  R('salade-oranges-cannelle', 'Salade d’oranges à la cannelle', 'Maghrébine', 'Dessert', 45, 'Facile', 4, [
    ['oranges', 4], ['fleur-d-oranger', 1, 'cs'], ['cannelle', 1, 'cc'], ['sucre-glace', 20, 'g'], ['menthe', 0.25, 'pc', 'opt']
  ], [
    'Peler les oranges à vif, en retirant toute la peau blanche, et les couper en fines rondelles au-dessus d’un plat pour recueillir le jus.',
    'Disposer les rondelles sur un plat, arroser du jus mélangé à la fleur d’oranger.',
    'Saupoudrer de sucre glace et de cannelle, puis réserver 30 min au frais.',
    'Parsemer de feuilles de menthe ciselées au moment de servir.'
  ]);

  R('mouhalabieh', 'Mouhalabieh (crème à la fleur d’oranger)', 'Libanaise', 'Dessert', 200, 'Facile', 6, [
    ['lait', 75, 'cl'], ['maizena', 60, 'g'], ['sucre', 80, 'g'], ['fleur-d-oranger', 1, 'cs'], ['eau-de-rose', 1, 'cs', 'opt'],
    ['pistaches', 30, 'g']
  ], [
    'Délayer la maïzena dans 15 cl de lait froid.',
    'Chauffer le reste du lait avec le sucre à feu moyen. Verser la maïzena délayée en fouettant et cuire en remuant sans arrêt 3 à 4 min, jusqu’à épaississement, puis encore 2 min à petits bouillons.',
    'Hors du feu, ajouter la fleur d’oranger et l’eau de rose.',
    'Répartir dans des coupelles, laisser refroidir puis réfrigérer au moins 3 h. Parsemer de pistaches concassées avant de servir.'
  ]);

  R('zabaione', 'Zabaione', 'Italienne', 'Dessert', 15, 'Moyenne', 4, [
    ['oeufs', 4], ['sucre', 80, 'g'], ['marsala', 8, 'cl'], ['boudoirs', 8, 'pc', 'opt']
  ], [
    'Préparer un bain-marie frémissant : l’eau ne doit pas toucher le fond du récipient.',
    'Dans un cul-de-poule, fouetter les 4 jaunes d’œufs avec le sucre jusqu’à ce qu’ils blanchissent, puis ajouter le marsala.',
    'Placer sur le bain-marie et fouetter sans arrêt 8 à 10 min, jusqu’à ce que la crème triple de volume, devienne épaisse et forme un ruban.',
    'Servir aussitôt, tiède, dans des coupes, avec les biscuits.'
  ]);

  R('torta-caprese', 'Torta caprese (gâteau chocolat-amandes)', 'Italienne', 'Dessert', 75, 'Facile', 8, [
    ['chocolat-noir', 200, 'g'], ['beurre', 150, 'g'], ['sucre', 150, 'g'], ['oeufs', 4], ['amandes-poudre', 200, 'g'],
    ['sucre-glace', 10, 'g']
  ], [
    'Préchauffer le four à 170 °C. Beurrer un moule de 24 cm et en tapisser le fond de papier cuisson.',
    'Faire fondre le chocolat avec le beurre 5 min au bain-marie, à feu doux.',
    'Fouetter les jaunes d’œufs avec la moitié du sucre jusqu’à ce qu’ils blanchissent, ajouter le chocolat fondu puis la poudre d’amande.',
    'Monter les blancs en neige, les serrer avec le reste du sucre et les incorporer délicatement en trois fois.',
    'Verser dans le moule et cuire 40 à 45 min à 170 °C : le dessus doit être craquelé et le centre encore humide. Laisser refroidir dans le moule, démouler et saupoudrer de sucre glace.'
  ]);

  R('crema-catalana', 'Crema catalana', 'Espagnole', 'Dessert', 210, 'Moyenne', 6, [
    ['lait', 50, 'cl'], ['oeufs', 5], ['sucre', 150, 'g'], ['maizena', 25, 'g'], ['citron', 1], ['cannelle', 0.5, 'cc']
  ], [
    'Porter 40 cl de lait à frémissement à feu moyen avec le zeste du citron prélevé en rubans et la cannelle (un bâton, ou ½ cc en poudre). Laisser infuser 10 min hors du feu.',
    'Fouetter les 5 jaunes d’œufs avec 100 g de sucre, puis ajouter la maïzena délayée dans le reste du lait froid.',
    'Verser le lait chaud filtré sur les jaunes en fouettant, remettre dans la casserole et cuire à feu doux en remuant sans arrêt environ 5 min, jusqu’à ce que la crème épaississe, sans la laisser bouillir fort.',
    'Répartir dans 6 cassolettes plates, laisser refroidir puis réfrigérer au moins 3 h.',
    'Au moment de servir, saupoudrer du reste de sucre et le caraméliser au chalumeau (ou 2 min sous le gril du four très chaud).'
  ]);

  R('pasteis-nata', 'Pastéis de nata', 'Portugaise', 'Dessert', 60, 'Moyenne', 6, [
    ['pate-feuilletee', 1], ['lait', 25, 'cl'], ['creme-liquide', 10, 'cl'], ['oeufs', 4], ['sucre', 100, 'g'], ['maizena', 20, 'g'],
    ['citron', 1], ['cannelle', 1, 'cc'], ['beurre', 10, 'g']
  ], [
    'Préchauffer le four à 250 °C (chaleur statique). Beurrer 12 alvéoles d’un moule à muffins.',
    'Rouler la pâte feuilletée en boudin serré et le couper en 12 tronçons de 2 cm. Poser chaque tronçon à plat, spirale vers le haut, dans une alvéole et l’étaler avec le pouce en remontant sur les bords. Réfrigérer pendant la préparation de la crème.',
    'Porter le lait et la crème à frémissement à feu moyen avec le zeste du citron. Fouetter les 4 jaunes d’œufs avec le sucre et la maïzena, verser le lait chaud, puis cuire à feu moyen 3 à 4 min en remuant, jusqu’à épaississement. Laisser tiédir et retirer le zeste.',
    'Remplir les fonds aux trois quarts de crème.',
    'Cuire 12 à 15 min à 250 °C, jusqu’à ce que la pâte soit dorée et le dessus tacheté de brun. Laisser tiédir et saupoudrer de cannelle.'
  ]);

  R('riz-gluant-mangue', 'Riz gluant à la mangue', 'Thaïlandaise', 'Dessert', 300, 'Moyenne', 4, [
    ['riz-gluant', 250, 'g'], ['lait-coco', 40, 'cl'], ['sucre', 80, 'g'], ['mangues', 2], ['graines-sesame', 1, 'cs', 'opt'],
    ['sel', 2, 'pincee']
  ], [
    'Faire tremper le riz gluant 4 h dans l’eau froide (ou toute la nuit, la veille).',
    'L’égoutter et le cuire 20 à 25 min à la vapeur dans un panier tapissé d’un linge, jusqu’à ce que les grains soient translucides et tendres.',
    'Chauffer 30 cl de lait de coco avec 60 g de sucre et une pincée de sel 3 min à feu doux, sans faire bouillir. Le verser sur le riz chaud, couvrir et laisser absorber 20 min.',
    'Chauffer le reste du lait de coco avec le reste du sucre et une pincée de sel 3 min à feu doux pour faire la sauce.',
    'Peler les mangues et les couper en tranches. Servir le riz avec la mangue, napper de sauce et parsemer de sésame grillé.'
  ]);

  R('bananes-flambees', 'Bananes flambées au rhum', 'Antillaise', 'Dessert', 15, 'Facile', 4, [
    ['bananes', 4], ['beurre', 30, 'g'], ['sucre-roux', 40, 'g'], ['citron-vert', 1], ['rhum', 5, 'cl'], ['glace-a-la-vanille', 0.5, 'l', 'opt']
  ], [
    'Éplucher les bananes et les couper en deux dans la longueur.',
    'Dans une grande poêle, faire fondre le beurre et le sucre à feu moyen, poser les bananes et les cuire 2 min par face, jusqu’à ce qu’elles soient caramélisées. Arroser du jus du citron vert.',
    'Chauffer le rhum 30 s à feu doux dans une petite casserole, le verser sur les bananes et l’enflammer à distance, hotte éteinte. Arroser les bananes jusqu’à ce que la flamme s’éteigne.',
    'Servir aussitôt, avec une boule de glace.'
  ]);

  R('gaufres-liege', 'Gaufres de Liège', 'Belge', 'Dessert', 110, 'Moyenne', 6, [
    ['farine', 500, 'g'], ['levure-fraiche', 20, 'g'], ['lait', 15, 'cl'], ['oeufs', 2], ['beurre', 250, 'g'], ['sucre', 25, 'g'],
    ['sucre-perle', 250, 'g'], ['sucre-vanille', 1], ['sel', 1, 'pincee']
  ], [
    'Faire tiédir le lait (30 s au micro-ondes : à peine chaud au doigt) et y délayer la levure émiettée avec le sucre.',
    'Mélanger la farine, les œufs, le lait levuré et le sel, et pétrir 5 min. Incorporer le beurre mou en morceaux et pétrir encore 5 à 8 min, jusqu’à obtenir une pâte lisse et collante.',
    'Couvrir et laisser lever 1 h dans un endroit tiède.',
    'Incorporer à la main le sucre perlé et le sucre vanillé, puis laisser reposer 15 min. Diviser en 12 boules.',
    'Chauffer le gaufrier sur thermostat moyen (environ 180 °C) et cuire les gaufres 3 à 4 min, jusqu’à ce qu’elles soient dorées et caramélisées. Attention, le sucre fondu brûle : nettoyer le gaufrier encore chaud.'
  ]);

  R('carrot-cake', 'Carrot cake', 'Américaine', 'Dessert', 150, 'Moyenne', 10, [
    ['carottes', 3], ['farine', 250, 'g'], ['sucre-roux', 200, 'g'], ['oeufs', 3], ['huile', 15, 'cl'], ['levure-chimique', 1],
    ['bicarbonate-de-soude', 1, 'cc'], ['cannelle', 2, 'cc'], ['cerneaux-de-noix', 80, 'g'], ['fromage-frais-a-tartiner', 250, 'g'],
    ['beurre', 60, 'g'], ['sucre-glace', 100, 'g'], ['sel', 1, 'pincee']
  ], [
    'Préchauffer le four à 180 °C. Tapisser un moule de 24 cm de papier cuisson.',
    'Fouetter les œufs avec le sucre roux 2 min, puis ajouter l’huile.',
    'Mélanger la farine, la levure, le bicarbonate, la cannelle et le sel, et les incorporer. Ajouter les carottes finement râpées et les noix concassées.',
    'Verser dans le moule et cuire 45 à 50 min à 180 °C, jusqu’à ce qu’une lame en ressorte sèche. Laisser refroidir complètement, au moins 1 h.',
    'Glaçage : fouetter le beurre mou avec le sucre glace, puis ajouter le fromage frais bien froid et fouetter brièvement (trop battu, il devient liquide). En couvrir le gâteau.'
  ]);

  R('banana-bread', 'Banana bread', 'Américaine', 'Dessert', 75, 'Facile', 8, [
    ['bananes', 3], ['farine', 250, 'g'], ['sucre-roux', 120, 'g'], ['beurre', 90, 'g'], ['oeufs', 2], ['levure-chimique', 1],
    ['cannelle', 1, 'cc', 'opt'], ['cerneaux-de-noix', 60, 'g', 'opt'], ['sel', 1, 'pincee']
  ], [
    'Préchauffer le four à 180 °C. Beurrer un moule à cake de 25 cm.',
    'Écraser les bananes bien mûres à la fourchette. Ajouter le beurre fondu (30 s au micro-ondes), le sucre roux et les œufs, et mélanger.',
    'Incorporer la farine, la levure, la cannelle et le sel sans trop travailler la pâte, puis les noix concassées.',
    'Verser dans le moule et cuire 50 à 55 min à 180 °C, jusqu’à ce qu’une lame en ressorte sèche. Laisser tiédir avant de démouler.'
  ]);

  R('foret-noire', 'Forêt-noire', 'Allemande', 'Dessert', 400, 'Difficile', 10, [
    ['oeufs', 4], ['sucre', 170, 'g'], ['farine', 80, 'g'], ['cacao-en-poudre', 30, 'g'], ['kirsch', 5, 'cl'], ['griottes', 300, 'g'],
    ['creme-liquide', 60, 'cl'], ['sucre-glace', 60, 'g'], ['mascarpone', 100, 'g', 'opt'], ['chocolat-noir', 50, 'g']
  ], [
    'Préchauffer le four à 180 °C. Tapisser un moule de 22 cm de papier cuisson.',
    'Génoise : fouetter les œufs avec 120 g de sucre au bain-marie tiède, puis hors du feu, 8 à 10 min, jusqu’à ce que le mélange triple de volume et forme un ruban. Incorporer délicatement la farine et le cacao tamisés. Verser dans le moule et cuire 25 à 30 min à 180 °C, jusqu’à ce qu’une lame ressorte sèche. Laisser refroidir 1 h, puis couper en 3 disques.',
    'Sirop : faire bouillir 1 min à feu vif 10 cl d’eau avec le reste du sucre, laisser refroidir et ajouter le kirsch.',
    'Chantilly : fouetter la crème très froide avec le mascarpone et le sucre glace jusqu’à ce qu’elle soit ferme.',
    'Montage : poser un disque, l’imbiber de sirop, étaler de la chantilly et la moitié des griottes égouttées. Recommencer, puis poser le dernier disque imbibé et couvrir tout le gâteau de chantilly.',
    'Décorer de copeaux de chocolat faits à l’économe et de quelques griottes. Réfrigérer au moins 4 h avant de servir.'
  ]);

  /* ───────────── Cuisine du placard et du frigo ───────────── */

  R('omelette-fromage', 'Omelette au fromage', 'Française', 'Plat', 10, 'Facile', 2, [
    ['oeufs', 5], ['fromage-rape', 60, 'g'], ['beurre', 15, 'g'], ['ciboulette', 0.25, 'pc', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Battre les œufs à la fourchette avec une pincée de sel, du poivre et la ciboulette ciselée, sans les faire mousser.',
    'Faire fondre le beurre dans une poêle de 24 cm à feu moyen jusqu’à ce qu’il mousse. Verser les œufs et cuire 2 à 3 min en ramenant les bords vers le centre avec une spatule.',
    'Quand le dessus est encore légèrement baveux, parsemer de fromage râpé, laisser fondre 30 s à feu moyen, puis plier l’omelette en deux et la faire glisser sur l’assiette.'
  ]);

  R('oeufs-brouilles', 'Œufs brouillés crémeux', 'Française', 'Plat', 10, 'Facile', 2, [
    ['oeufs', 6], ['beurre', 20, 'g'], ['creme-fraiche', 3, 'cl', 'opt'], ['pain', 2, 'pc', 'opt'], ['ciboulette', 0.25, 'pc', 'opt'],
    ['sel', null], ['poivre', null]
  ], [
    'Battre les œufs dans une casserole froide avec la moitié du beurre en dés.',
    'Cuire à feu doux en remuant sans cesse avec une spatule, 5 à 6 min : les œufs doivent prendre en petits grumeaux crémeux. Retirer du feu dès qu’ils sont encore un peu coulants, la cuisson continue.',
    'Hors du feu, ajouter le reste du beurre et la crème pour stopper la cuisson. Saler, poivrer et parsemer de ciboulette ciselée.',
    'Servir aussitôt avec les tranches de pain grillées 2 min au grille-pain.'
  ]);

  R('omelette-paysanne', 'Omelette paysanne', 'Française', 'Plat', 30, 'Facile', 2, [
    ['oeufs', 5], ['pommes-de-terre', 300, 'g'], ['lardons', 100, 'g'], ['oignons', 1], ['huile', 1, 'cs'],
    ['persil', 0.25, 'pc', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Éplucher les pommes de terre et les couper en dés de 1 cm. Émincer l’oignon.',
    'Faire revenir les lardons 3 min à feu moyen dans une poêle de 26 cm, sans matière grasse. Ajouter l’huile, les pommes de terre et l’oignon, couvrir et cuire 15 min à feu moyen en remuant souvent, jusqu’à ce que les pommes de terre soient dorées et tendres.',
    'Battre les œufs avec le persil ciselé, peu de sel (les lardons sont salés) et du poivre. Les verser dans la poêle.',
    'Cuire 4 à 5 min à feu doux, en ramenant les bords vers le centre, jusqu’à ce que l’omelette soit prise mais encore moelleuse au centre. La servir à plat, sans la plier.'
  ]);

  R('frittata-pommes-fromage', 'Frittata aux pommes de terre et au fromage', 'Italienne', 'Plat', 45, 'Facile', 4, [
    ['oeufs', 8], ['pommes-de-terre', 500, 'g'], ['oignons', 1], ['fromage-rape', 80, 'g'], ['huile-olive', 3, 'cs'],
    ['persil', 0.25, 'pc', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Préchauffer le four à 180 °C. Éplucher les pommes de terre et les couper en fines rondelles de 3 mm. Émincer l’oignon.',
    'Chauffer l’huile à feu moyen dans une poêle de 26 cm allant au four. Cuire les pommes de terre et l’oignon 15 min, couvercle posé, en remuant de temps en temps, jusqu’à ce qu’ils soient tendres et légèrement dorés. Saler.',
    'Battre les œufs avec le fromage râpé, le persil ciselé, du sel et du poivre. Verser sur les pommes de terre et cuire 3 min à feu doux, sans remuer, pour saisir le dessous.',
    'Enfourner 12 à 15 min à 180 °C, jusqu’à ce que le centre soit pris et le dessus doré. Laisser tiédir 5 min avant de découper en parts.'
  ]);

  R('frittata-pates', 'Frittata de pâtes', 'Italienne', 'Plat', 30, 'Facile', 4, [
    ['spaghetti', 200, 'g'], ['oeufs', 6], ['fromage-rape', 80, 'g'], ['beurre', 20, 'g'], ['huile-olive', 1, 'cs'],
    ['persil', 0.25, 'pc', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Cuire les spaghetti 8 à 9 min dans 2 L d’eau bouillante salée, soit 2 min de moins que le temps indiqué sur le paquet. Les égoutter et les laisser tiédir 5 min.',
    'Battre les œufs avec le fromage râpé, le persil ciselé, du sel et beaucoup de poivre, puis y mélanger les pâtes.',
    'Chauffer le beurre et l’huile à feu moyen dans une poêle de 26 cm. Verser les pâtes, bien tasser et cuire 8 min à feu moyen-doux, jusqu’à ce que le dessous soit doré et croustillant.',
    'Retourner la frittata à l’aide d’une assiette, la faire glisser dans la poêle et cuire encore 5 min à feu moyen-doux. Servir chaude ou tiède.'
  ]);

  R('oeufs-durs-curry', 'Œufs durs sauce curry', 'Française', 'Plat', 35, 'Facile', 4, [
    ['oeufs', 8], ['oignons', 1], ['curry', 2, 'cc'], ['creme-fraiche', 20, 'cl'], ['beurre', 20, 'g'], ['riz', 280, 'g'],
    ['coriandre', 0.25, 'pc', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Cuire le riz 10 à 12 min dans 3 L d’eau bouillante salée (selon le paquet), puis l’égoutter.',
    'Pendant ce temps, cuire les œufs 10 min à l’eau bouillante, les plonger dans l’eau froide et les écaler.',
    'Faire fondre le beurre à feu doux et y cuire l’oignon finement émincé 8 min, jusqu’à ce qu’il soit tendre et translucide. Ajouter le curry et remuer 1 min pour le torréfier.',
    'Verser la crème et 5 cl d’eau, saler, poivrer et laisser frémir 3 min à feu doux, jusqu’à ce que la sauce nappe la cuillère.',
    'Couper les œufs en deux, les poser dans la sauce 2 min à feu doux pour les réchauffer. Servir sur le riz, parsemé de coriandre.'
  ]);

  R('quiche-sans-pate', 'Quiche sans pâte aux lardons', 'Française', 'Plat', 55, 'Facile', 4, [
    ['oeufs', 4], ['farine', 60, 'g'], ['lait', 25, 'cl'], ['creme-fraiche', 20, 'cl'], ['lardons', 200, 'g'], ['fromage-rape', 100, 'g'],
    ['beurre', 10, 'g'], ['muscade', 1, 'pincee', 'opt'], ['poivre', null]
  ], [
    'Préchauffer le four à 180 °C. Beurrer un moule à gratin de 24 cm environ.',
    'Faire revenir les lardons 5 min à feu moyen dans une poêle sans matière grasse, puis les égoutter sur du papier absorbant.',
    'Fouetter les œufs avec la farine jusqu’à ce qu’il n’y ait plus de grumeaux, puis ajouter peu à peu le lait et la crème. Poivrer, ajouter la muscade (ne pas saler : lardons et fromage le sont).',
    'Répartir les lardons et le fromage dans le moule, verser l’appareil et enfourner 35 à 40 min à 180 °C, jusqu’à ce que la quiche soit gonflée, dorée et que la lame d’un couteau ressorte sèche.'
  ]);

  R('pates-creme-fromage', 'Pâtes à la crème et au fromage', 'Française', 'Plat', 20, 'Facile', 4, [
    ['pates', 400, 'g'], ['creme-fraiche', 20, 'cl'], ['fromage-rape', 100, 'g'], ['beurre', 20, 'g', 'opt'], ['muscade', 1, 'pincee', 'opt'],
    ['sel', null], ['poivre', null]
  ], [
    'Cuire les pâtes 10 à 12 min dans 4 L d’eau bouillante salée (al dente, selon le paquet). Réserver une tasse d’eau de cuisson avant de les égoutter.',
    'Dans la casserole encore chaude, à feu doux, faire chauffer la crème et le beurre 2 min, avec la muscade et beaucoup de poivre.',
    'Remettre les pâtes, ajouter le fromage râpé et mélanger 1 min à feu doux jusqu’à ce qu’il soit fondu. Détendre avec un peu d’eau de cuisson si la sauce est trop épaisse. Servir aussitôt.'
  ]);

  R('pates-thon-creme', 'Pâtes au thon et à la crème', 'Française', 'Plat', 20, 'Facile', 4, [
    ['pates', 400, 'g'], ['thon-boite', 280, 'g'], ['creme-fraiche', 20, 'cl'], ['oignons', 1], ['huile', 1, 'cs'],
    ['citron', 0.5, 'pc', 'opt'], ['persil', 0.25, 'pc', 'opt'], ['fromage-rape', 50, 'g', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Cuire les pâtes 10 à 12 min dans 4 L d’eau bouillante salée (al dente, selon le paquet), puis les égoutter.',
    'Pendant ce temps, faire revenir l’oignon émincé dans l’huile 5 min à feu moyen, jusqu’à ce qu’il soit tendre.',
    'Ajouter le thon égoutté et émietté, puis la crème. Poivrer et laisser chauffer 3 min à feu doux. Ajouter le jus du demi-citron et goûter pour le sel.',
    'Mélanger la sauce avec les pâtes, parsemer de persil ciselé et servir avec le fromage râpé.'
  ]);

  R('spaghetti-aglio-olio', 'Spaghetti ail, huile et piment', 'Italienne', 'Plat', 15, 'Facile', 4, [
    ['spaghetti', 400, 'g'], ['ail', 4], ['huile-olive', 8, 'cs'], ['piment', 2, 'pincee', 'opt'], ['persil', 0.5, 'pc', 'opt'],
    ['parmesan', 40, 'g', 'opt'], ['sel', null]
  ], [
    'Cuire les spaghetti 9 à 10 min dans 4 L d’eau bouillante salée, soit 1 min de moins que le temps indiqué sur le paquet. Réserver un verre d’eau de cuisson avant d’égoutter.',
    'Pendant ce temps, chauffer l’huile à feu doux dans une grande poêle avec l’ail coupé en fines lamelles et le piment, 3 à 4 min : l’ail doit à peine blondir, jamais brunir, sinon il devient amer.',
    'Ajouter les spaghetti égouttés et 5 cl d’eau de cuisson, et faire sauter 1 min à feu vif pour lier l’huile en une sauce légère.',
    'Parsemer de persil ciselé et servir aussitôt, avec du parmesan râpé.'
  ]);

  R('gratin-pates-fromage', 'Gratin de pâtes au fromage', 'Française', 'Plat', 40, 'Facile', 4, [
    ['pates', 350, 'g'], ['creme-fraiche', 20, 'cl'], ['lait', 20, 'cl'], ['fromage-rape', 150, 'g'], ['beurre', 10, 'g'],
    ['muscade', 1, 'pincee', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Préchauffer le four à 200 °C. Beurrer un plat à gratin.',
    'Cuire les pâtes 8 à 10 min dans 4 L d’eau bouillante salée, soit 2 min de moins que le temps indiqué sur le paquet (elles finiront de cuire au four), puis les égoutter.',
    'Mélanger la crème, le lait, les deux tiers du fromage, la muscade, du sel et du poivre. Y enrober les pâtes et verser dans le plat.',
    'Parsemer du reste de fromage et enfourner 20 min à 200 °C, jusqu’à ce que le dessus soit bien doré et que la sauce bouillonne sur les bords.'
  ]);

  R('pates-lardons-tomate', 'Pâtes à la tomate et aux lardons', 'Française', 'Plat', 25, 'Facile', 4, [
    ['pates', 400, 'g'], ['lardons', 200, 'g'], ['tomates-concassees', 400, 'g'], ['oignons', 1], ['ail', 1, 'pc', 'opt'],
    ['herbes-provence', 1, 'cc', 'opt'], ['fromage-rape', 50, 'g', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Faire revenir les lardons 3 min à feu moyen dans une sauteuse sans matière grasse, puis ajouter l’oignon émincé et l’ail haché et cuire 5 min à feu moyen, jusqu’à ce que l’oignon soit tendre.',
    'Ajouter les tomates concassées et les herbes, poivrer et laisser mijoter 15 min à feu doux, à découvert, jusqu’à ce que la sauce épaississe. Goûter avant de saler.',
    'Pendant ce temps, cuire les pâtes 10 à 12 min dans 4 L d’eau bouillante salée (al dente, selon le paquet), puis les égoutter.',
    'Mélanger les pâtes à la sauce et servir avec le fromage râpé.'
  ]);

  R('pates-sauce-tomate', 'Pâtes à la sauce tomate maison', 'Italienne', 'Plat', 35, 'Facile', 4, [
    ['pates', 400, 'g'], ['tomates-concassees', 800, 'g'], ['oignons', 1], ['ail', 2], ['huile-olive', 3, 'cs'], ['sucre', 1, 'cc', 'opt'],
    ['basilic', 0.25, 'pc', 'opt'], ['parmesan', 40, 'g', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Chauffer l’huile à feu doux dans une sauteuse et y cuire l’oignon finement haché 8 min, jusqu’à ce qu’il soit tendre sans colorer. Ajouter l’ail haché et cuire 1 min.',
    'Verser les tomates concassées, saler, poivrer et ajouter le sucre si les tomates sont acides. Laisser mijoter 20 min à feu doux, à découvert, en remuant de temps en temps, jusqu’à ce que la sauce soit épaisse.',
    'Pendant ce temps, cuire les pâtes 10 à 12 min dans 4 L d’eau bouillante salée (al dente, selon le paquet), puis les égoutter.',
    'Mélanger les pâtes à la sauce, ajouter le basilic déchiré et servir avec le parmesan râpé.'
  ]);

  R('pates-poulet-creme', 'Pâtes au poulet et à la crème', 'Française', 'Plat', 25, 'Facile', 4, [
    ['pates', 350, 'g'], ['poulet', 400, 'g'], ['creme-fraiche', 20, 'cl'], ['oignons', 1], ['huile', 1, 'cs'],
    ['champignons', 200, 'g', 'opt'], ['fromage-rape', 50, 'g', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Cuire les pâtes 10 à 12 min dans 4 L d’eau bouillante salée (al dente, selon le paquet), puis les égoutter.',
    'Pendant ce temps, couper le poulet en lanières. Le faire dorer 5 min à feu vif dans l’huile, jusqu’à ce qu’il ne soit plus rosé à cœur. Saler, poivrer et réserver.',
    'Dans la même poêle, faire revenir à feu moyen l’oignon émincé et les champignons en lamelles 6 min, jusqu’à ce que leur eau soit évaporée.',
    'Remettre le poulet, verser la crème et laisser frémir 2 min à feu doux. Mélanger avec les pâtes et servir avec le fromage râpé.'
  ]);

  R('riz-saute-poulet-soja', 'Riz sauté au poulet et à la sauce soja', 'Chinoise', 'Plat', 40, 'Facile', 4, [
    ['riz', 280, 'g'], ['poulet', 350, 'g'], ['oeufs', 2], ['oignons', 1], ['sauce-soja', 4, 'cs'], ['huile', 3, 'cs'],
    ['ail', 1, 'pc', 'opt'], ['petits-pois', 150, 'g', 'opt'], ['ciboule', 0.5, 'pc', 'opt'], ['poivre', null]
  ], [
    'Cuire le riz 10 à 12 min dans 3 L d’eau bouillante salée (selon le paquet). L’égoutter, l’étaler sur une plaque et le laisser refroidir au moins 15 min (idéalement, utiliser du riz cuit la veille : il colle moins).',
    'Couper le poulet en petits dés. Le faire sauter 4 à 5 min à feu vif dans une grande poêle ou un wok avec 1 cuillère à soupe d’huile, jusqu’à ce qu’il soit doré et cuit. Réserver.',
    'Battre les œufs, les cuire en omelette brouillée 1 min à feu vif dans un peu d’huile, puis réserver avec le poulet.',
    'Faire sauter l’oignon émincé et l’ail haché 2 min à feu vif dans le reste d’huile. Ajouter les petits pois et le riz, et faire sauter 4 min en remuant sans cesse.',
    'Remettre le poulet et les œufs, arroser de sauce soja, poivrer et faire sauter encore 1 min à feu vif. Parsemer de ciboule émincée.'
  ]);

  R('poulet-curry-creme', 'Poulet au curry et à la crème', 'Française', 'Plat', 35, 'Facile', 4, [
    ['poulet', 600, 'g'], ['oignons', 1], ['curry', 2, 'cc'], ['creme-fraiche', 20, 'cl'], ['huile', 1, 'cs'], ['riz', 280, 'g'],
    ['coriandre', 0.25, 'pc', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Cuire le riz 10 à 12 min dans 3 L d’eau bouillante salée (selon le paquet), puis l’égoutter.',
    'Pendant ce temps, couper le poulet en cubes de 3 cm. Les faire dorer 5 min à feu vif dans l’huile, dans une sauteuse. Réserver.',
    'Baisser à feu moyen et faire revenir l’oignon émincé 5 min, jusqu’à ce qu’il soit tendre. Ajouter le curry et remuer 1 min.',
    'Remettre le poulet, verser la crème et 10 cl d’eau, saler, poivrer et laisser mijoter 10 min à feu doux, jusqu’à ce que le poulet soit cuit à cœur et la sauce nappante.',
    'Servir avec le riz, parsemé de coriandre ciselée.'
  ]);

  R('poulet-paprika', 'Poulet au paprika', 'Hongroise', 'Plat', 40, 'Facile', 4, [
    ['poulet', 600, 'g'], ['oignons', 2], ['paprika', 3, 'cc'], ['creme-fraiche', 15, 'cl'], ['bouillon', 0.5], ['huile', 2, 'cs'],
    ['pates', 300, 'g'], ['tomates-concassees', 200, 'g', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Couper le poulet en cubes de 3 cm. Les faire dorer 4 à 5 min à feu vif dans l’huile, dans une sauteuse. Réserver.',
    'Baisser à feu doux et cuire les oignons émincés 8 min, jusqu’à ce qu’ils soient fondants. Retirer du feu, ajouter le paprika et remuer 30 s (il brûle vite et devient amer).',
    'Remettre le poulet, ajouter les tomates et le demi-cube de bouillon délayé dans 15 cl d’eau chaude. Couvrir et laisser mijoter 15 min à feu doux.',
    'Pendant ce temps, cuire les pâtes 10 à 12 min dans 3 L d’eau bouillante salée (al dente, selon le paquet), puis les égoutter.',
    'Hors du feu, incorporer la crème, poivrer et goûter pour le sel. Servir avec les pâtes.'
  ]);

  R('poulet-soja-miel', 'Poulet sauté soja et miel', 'Chinoise', 'Plat', 35, 'Facile', 4, [
    ['poulet', 600, 'g'], ['sauce-soja', 4, 'cs'], ['miel', 2, 'cs'], ['ail', 2], ['huile', 1, 'cs'], ['riz', 280, 'g'],
    ['graines-sesame', 1, 'cs', 'opt'], ['ciboule', 0.5, 'pc', 'opt'], ['sel', null]
  ], [
    'Cuire le riz 10 à 12 min dans 3 L d’eau bouillante salée (selon le paquet), puis l’égoutter.',
    'Pendant ce temps, mélanger la sauce soja, le miel, l’ail haché et 3 cuillères à soupe d’eau.',
    'Couper le poulet en cubes de 2 cm et les faire dorer 5 à 6 min à feu vif dans l’huile, dans une grande poêle, jusqu’à ce qu’ils soient cuits à cœur.',
    'Verser la sauce et laisser réduire 2 à 3 min à feu moyen en remuant, jusqu’à ce qu’elle devienne sirupeuse et enrobe le poulet.',
    'Parsemer de sésame et de ciboule émincée, et servir avec le riz.'
  ]);

  R('poulet-tomate', 'Poulet à la tomate et aux herbes', 'Française', 'Plat', 35, 'Facile', 4, [
    ['poulet', 600, 'g'], ['tomates-concassees', 400, 'g'], ['oignons', 1], ['ail', 2], ['huile-olive', 2, 'cs'],
    ['herbes-provence', 1, 'cc', 'opt'], ['riz', 280, 'g', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Si vous servez du riz, le cuire 10 à 12 min dans 3 L d’eau bouillante salée (selon le paquet), puis l’égoutter.',
    'Couper le poulet en gros cubes et les faire dorer 5 min à feu vif dans l’huile, dans une sauteuse. Réserver.',
    'Baisser à feu moyen et faire revenir l’oignon émincé 5 min, puis l’ail haché 1 min.',
    'Ajouter les tomates concassées et les herbes, saler, poivrer, puis remettre le poulet. Couvrir et laisser mijoter 15 min à feu doux, jusqu’à ce que le poulet soit cuit à cœur et la sauce épaissie.'
  ]);

  R('poulet-oignons-fond-veau', 'Poulet aux oignons fondants', 'Française', 'Plat', 40, 'Facile', 4, [
    ['poulet', 600, 'g'], ['oignons', 3], ['fond-de-veau', 20, 'g'], ['beurre', 20, 'g'], ['huile', 1, 'cs'],
    ['vinaigre-balsamique', 1, 'cs', 'opt'], ['thym', 2, 'pc', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Faire dorer les blancs de poulet entiers dans l’huile et la moitié du beurre, 3 min par face à feu moyen-vif. Saler, poivrer et réserver.',
    'Dans la même sauteuse, cuire à feu doux les oignons finement émincés avec le reste du beurre et le thym, 15 min, en remuant souvent, jusqu’à ce qu’ils soient fondants et blonds.',
    'Déglacer avec le vinaigre balsamique, puis ajouter le fond de veau délayé dans 25 cl d’eau chaude. Porter à frémissement.',
    'Remettre le poulet, couvrir et laisser mijoter 10 à 12 min à feu doux, en le retournant à mi-cuisson, jusqu’à ce qu’il soit cuit à cœur. Trancher et servir nappé de sauce, avec des pâtes, du riz ou une purée.'
  ]);

  R('poulet-pane', 'Escalopes de poulet panées', 'Française', 'Plat', 25, 'Facile', 4, [
    ['poulet', 600, 'g'], ['oeufs', 2], ['farine', 50, 'g'], ['chapelure', 100, 'g'], ['huile', 5, 'cs'],
    ['citron', 1, 'pc', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Ouvrir les blancs de poulet en deux dans l’épaisseur pour obtenir des escalopes d’environ 1 cm. Saler et poivrer.',
    'Préparer trois assiettes creuses : la farine, les œufs battus, la chapelure. Passer chaque escalope successivement dans la farine (tapoter l’excédent), dans l’œuf, puis dans la chapelure en appuyant.',
    'Chauffer l’huile à feu moyen dans une grande poêle. Cuire les escalopes 3 à 4 min par face, jusqu’à ce qu’elles soient bien dorées et que la chair soit blanche à cœur.',
    'Les égoutter sur du papier absorbant et servir aussitôt avec des quartiers de citron.'
  ]);

  R('lentilles-curry', 'Lentilles au curry', 'Indienne', 'Plat', 45, 'Facile', 4, [
    ['lentilles', 300, 'g'], ['oignons', 1], ['ail', 2], ['curry', 2, 'cc'], ['tomates-concassees', 400, 'g'], ['bouillon', 1],
    ['huile', 2, 'cs'], ['lait-coco', 20, 'cl', 'opt'], ['coriandre', 0.25, 'pc', 'opt'], ['sel', null]
  ], [
    'Rincer les lentilles. Faire revenir l’oignon émincé dans l’huile 5 min à feu moyen, puis ajouter l’ail haché et le curry et remuer 1 min.',
    'Ajouter les lentilles, les tomates concassées, le cube de bouillon émietté et 70 cl d’eau. Porter à ébullition, puis couvrir et cuire 25 à 30 min à feu doux, jusqu’à ce que les lentilles soient tendres. Ajouter un peu d’eau en cours de cuisson si elles attachent.',
    'Verser le lait de coco et laisser épaissir 5 min à feu moyen, à découvert. Goûter pour le sel.',
    'Parsemer de coriandre ciselée et servir avec du riz ou du pain.'
  ]);

  R('lentilles-lardons', 'Lentilles aux lardons', 'Française', 'Plat', 45, 'Facile', 4, [
    ['lentilles', 300, 'g'], ['lardons', 200, 'g'], ['oignons', 1], ['carottes', 2, 'pc', 'opt'], ['bouillon', 1],
    ['laurier', 1, 'pc', 'opt'], ['thym', 1, 'pc', 'opt'], ['persil', 0.25, 'pc', 'opt'], ['poivre', null]
  ], [
    'Faire revenir les lardons 5 min à feu moyen dans une cocotte sans matière grasse, jusqu’à ce qu’ils soient dorés. Ajouter l’oignon émincé et les carottes en rondelles, et cuire 3 min.',
    'Ajouter les lentilles rincées, le laurier, le thym, le cube de bouillon émietté et 80 cl d’eau. Porter à ébullition.',
    'Couvrir et cuire 25 à 30 min à feu doux, jusqu’à ce que les lentilles soient tendres et aient absorbé presque tout le liquide. Poivrer (le sel est souvent inutile avec les lardons et le bouillon).',
    'Retirer le laurier et le thym et parsemer de persil ciselé.'
  ]);

  R('lentilles-confit-canard', 'Lentilles au confit de canard', 'Française', 'Plat', 60, 'Facile', 4, [
    ['lentilles', 300, 'g'], ['confit-canard', 4], ['oignons', 1], ['carottes', 2], ['bouillon', 1], ['ail', 1, 'pc', 'opt'],
    ['laurier', 1, 'pc', 'opt'], ['thym', 1, 'pc', 'opt'], ['poivre', null]
  ], [
    'Préchauffer le four à 200 °C. Réchauffer la boîte de confit 5 min au bain-marie frémissant pour liquéfier la graisse, puis sortir les cuisses.',
    'Dans une cocotte, faire revenir l’oignon émincé et les carottes en dés 5 min à feu moyen dans 1 cuillère à soupe de graisse de canard.',
    'Ajouter les lentilles rincées, l’ail écrasé, le laurier, le thym, le cube de bouillon émietté et 80 cl d’eau. Porter à ébullition, puis couvrir et cuire 25 à 30 min à feu doux.',
    'Pendant ce temps, poser les cuisses côté peau vers le haut dans un plat et les enfourner 20 à 25 min à 200 °C, jusqu’à ce que la peau soit croustillante.',
    'Poivrer les lentilles, retirer le laurier et le thym, et servir avec les cuisses posées dessus.'
  ]);

  R('semoule-legumes-epices', 'Semoule aux légumes et aux épices', 'Maghrébine', 'Plat', 40, 'Facile', 4, [
    ['semoule', 250, 'g'], ['oignons', 1], ['carottes', 2], ['tomates-concassees', 400, 'g'], ['cumin', 1, 'cc'], ['bouillon', 1],
    ['huile-olive', 3, 'cs'], ['pois-chiches', 250, 'g', 'opt'], ['courgettes', 1, 'pc', 'opt'], ['paprika', 1, 'cc', 'opt'],
    ['beurre', 20, 'g', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Faire revenir l’oignon émincé dans 2 cuillères à soupe d’huile 5 min à feu moyen. Ajouter le cumin et le paprika et remuer 30 s.',
    'Ajouter les carottes en rondelles, la courgette en dés, les tomates concassées, le cube de bouillon émietté et 40 cl d’eau. Couvrir et cuire 20 min à feu doux, jusqu’à ce que les carottes soient tendres. Ajouter les pois chiches égouttés les 5 dernières minutes. Saler et poivrer.',
    'Pendant ce temps, mettre la semoule dans un saladier avec le reste d’huile et une pincée de sel. Verser 25 cl d’eau bouillante, couvrir et laisser gonfler 5 min.',
    'Égrainer la semoule à la fourchette avec le beurre. Servir avec les légumes et leur bouillon.'
  ]);

  R('riz-tomate', 'Riz à la tomate', 'Française', 'Plat', 30, 'Facile', 4, [
    ['riz', 250, 'g'], ['tomates-concassees', 400, 'g'], ['oignons', 1], ['ail', 1], ['bouillon', 1], ['huile-olive', 2, 'cs'],
    ['fromage-rape', 60, 'g', 'opt'], ['paprika', 1, 'cc', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Faire revenir l’oignon finement haché dans l’huile 5 min à feu moyen, puis l’ail haché et le paprika 30 s.',
    'Ajouter le riz et le nacrer 2 min à feu moyen en remuant, jusqu’à ce que les grains deviennent translucides.',
    'Verser les tomates concassées et le cube de bouillon délayé dans 35 cl d’eau chaude. Porter à ébullition, couvrir et cuire 15 à 18 min à feu doux, sans remuer, jusqu’à ce que le liquide soit absorbé.',
    'Laisser reposer 5 min à couvert hors du feu, égrainer à la fourchette, goûter pour le sel et servir avec le fromage râpé.'
  ]);

  R('riz-fromage', 'Riz crémeux au fromage', 'Française', 'Plat', 25, 'Facile', 4, [
    ['riz', 280, 'g'], ['bouillon', 1], ['fromage-rape', 100, 'g'], ['beurre', 30, 'g'], ['oignons', 1, 'pc', 'opt'],
    ['creme-fraiche', 5, 'cl', 'opt'], ['poivre', null]
  ], [
    'Faire fondre la moitié du beurre à feu moyen et y cuire l’oignon finement haché 4 min, sans colorer.',
    'Ajouter le riz et le nacrer 2 min à feu moyen en remuant. Verser le cube de bouillon délayé dans 60 cl d’eau chaude, couvrir et cuire 15 à 18 min à feu doux, jusqu’à ce que le riz soit tendre et le liquide presque absorbé.',
    'Hors du feu, incorporer le reste du beurre, le fromage râpé et la crème en remuant vivement pour rendre le riz crémeux. Poivrer et servir aussitôt.'
  ]);

  R('riz-pilaf', 'Riz pilaf', 'Française', 'Plat', 25, 'Facile', 4, [
    ['riz', 250, 'g'], ['oignons', 1], ['bouillon', 1], ['beurre', 30, 'g'], ['laurier', 1, 'pc', 'opt'], ['thym', 1, 'pc', 'opt'], ['sel', null]
  ], [
    'Préchauffer le four à 180 °C. Délayer le cube de bouillon dans 45 cl d’eau bouillante.',
    'Dans une cocotte allant au four, faire fondre 20 g de beurre à feu moyen et y cuire l’oignon finement haché 3 min, sans colorer.',
    'Ajouter le riz et le nacrer 2 min à feu moyen en remuant, jusqu’à ce que les grains deviennent translucides. Verser le bouillon bouillant, ajouter le laurier et le thym, et porter à ébullition.',
    'Couvrir et enfourner 17 min à 180 °C. Laisser reposer 5 min à couvert, retirer les herbes, ajouter le reste du beurre et égrainer à la fourchette. Goûter pour le sel.'
  ]);

  R('curry-pommes-de-terre', 'Curry de pommes de terre', 'Indienne', 'Plat', 40, 'Facile', 4, [
    ['pommes-de-terre', 800, 'g'], ['oignons', 1], ['ail', 2], ['curry', 2, 'cc'], ['tomates-concassees', 400, 'g'], ['huile', 2, 'cs'],
    ['lait-coco', 20, 'cl', 'opt'], ['cumin', 1, 'cc', 'opt'], ['coriandre', 0.25, 'pc', 'opt'], ['sel', null]
  ], [
    'Éplucher les pommes de terre et les couper en cubes de 3 cm.',
    'Faire revenir l’oignon émincé dans l’huile 5 min à feu moyen, puis ajouter l’ail haché, le cumin et le curry et remuer 1 min.',
    'Ajouter les pommes de terre, les tomates concassées, 20 cl d’eau et du sel. Porter à ébullition, couvrir et cuire 20 à 25 min à feu doux, jusqu’à ce que les pommes de terre soient tendres sous la pointe d’un couteau.',
    'Verser le lait de coco et laisser épaissir 5 min à feu moyen, à découvert. Parsemer de coriandre ciselée et servir avec du riz ou du pain.'
  ]);

  R('pommes-terre-paprika', 'Quartiers de pommes de terre au paprika', 'Française', 'Plat', 45, 'Facile', 4, [
    ['pommes-de-terre', 1000, 'g'], ['huile-olive', 4, 'cs'], ['paprika', 2, 'cc'], ['ail-en-poudre', 1, 'cc', 'opt'],
    ['herbes-provence', 1, 'cc', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Préchauffer le four à 210 °C. Laver les pommes de terre sans les éplucher et les couper en quartiers dans la longueur.',
    'Les sécher dans un torchon, puis les mélanger dans un saladier avec l’huile, le paprika, l’ail en poudre, les herbes, du sel et du poivre.',
    'Les étaler en une seule couche sur une plaque tapissée de papier cuisson, peau vers le bas. Enfourner 35 à 40 min à 210 °C en les retournant à mi-cuisson, jusqu’à ce qu’elles soient dorées et croustillantes, et tendres à cœur.'
  ]);

  R('rosti', 'Rösti', 'Suisse', 'Plat', 40, 'Facile', 4, [
    ['pommes-de-terre', 800, 'g'], ['beurre', 40, 'g'], ['huile', 2, 'cs'], ['oignons', 1, 'pc', 'opt'], ['oeufs', 4, 'pc', 'opt'],
    ['sel', null], ['poivre', null]
  ], [
    'Éplucher les pommes de terre (à chair ferme de préférence) et les râper à la grosse grille avec l’oignon. Les presser fortement dans un torchon pour en retirer le maximum d’eau. Saler et poivrer.',
    'Chauffer la moitié du beurre et de l’huile à feu moyen dans une poêle de 26 cm. Y étaler les pommes de terre en galette de 2 cm en tassant légèrement.',
    'Cuire 10 à 12 min à feu moyen, sans remuer, jusqu’à ce que le dessous soit bien doré. Retourner la galette à l’aide d’une assiette, ajouter le reste de beurre et d’huile, et cuire encore 10 min à feu moyen.',
    'Si vous le souhaitez, cuire les œufs au plat 3 min à feu moyen dans une poêle huilée et les servir sur les parts de rösti.'
  ]);

  R('gratin-pommes-terre-lardons', 'Gratin de pommes de terre aux lardons', 'Française', 'Plat', 75, 'Facile', 4, [
    ['pommes-de-terre', 1000, 'g'], ['lardons', 200, 'g'], ['oignons', 1], ['creme-fraiche', 20, 'cl'], ['lait', 20, 'cl'],
    ['fromage-rape', 100, 'g'], ['beurre', 10, 'g'], ['muscade', 1, 'pincee', 'opt'], ['poivre', null]
  ], [
    'Préchauffer le four à 180 °C. Beurrer un plat à gratin.',
    'Faire revenir les lardons et l’oignon émincé 5 min à feu moyen, sans matière grasse.',
    'Éplucher les pommes de terre et les couper en rondelles de 3 mm. Les mettre dans une casserole avec le lait et la crème, poivrer, ajouter la muscade et porter à frémissement à feu moyen. Cuire 8 min en remuant délicatement, jusqu’à ce que la crème épaississe.',
    'Alterner dans le plat pommes de terre et lardons, verser le reste de crème et parsemer de fromage râpé.',
    'Enfourner 45 min à 180 °C, jusqu’à ce que le dessus soit doré et qu’une lame traverse les pommes de terre sans résistance.'
  ]);

  R('pommes-terre-farcies', 'Pommes de terre farcies lardons et fromage', 'Française', 'Plat', 85, 'Facile', 4, [
    ['pommes-de-terre', 1200, 'g'], ['lardons', 150, 'g'], ['creme-fraiche', 10, 'cl'], ['fromage-rape', 100, 'g'],
    ['ciboulette', 0.25, 'pc', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Préchauffer le four à 200 °C. Laver 4 grosses pommes de terre de même taille, les piquer à la fourchette et les cuire 50 min à 1 h à 200 °C sur la grille du four, jusqu’à ce qu’une lame les traverse sans résistance.',
    'Pendant ce temps, faire dorer les lardons 5 min à feu moyen, sans matière grasse.',
    'Couper un chapeau dans la longueur de chaque pomme de terre et évider la chair à la cuillère en laissant 5 mm autour de la peau.',
    'Écraser la chair à la fourchette avec la crème, les lardons, la moitié du fromage et la ciboulette ciselée. Saler légèrement et poivrer.',
    'Remplir les pommes de terre de cette farce, parsemer du reste de fromage et gratiner 10 à 15 min au four à 200 °C, jusqu’à ce que le dessus soit doré.'
  ]);

  R('parmentier-poulet', 'Parmentier de poulet', 'Française', 'Plat', 70, 'Facile', 4, [
    ['poulet', 500, 'g'], ['pommes-de-terre', 1000, 'g'], ['oignons', 1], ['lait', 20, 'cl'], ['beurre', 40, 'g'], ['fromage-rape', 60, 'g'],
    ['creme-fraiche', 10, 'cl', 'opt'], ['muscade', 1, 'pincee', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Éplucher les pommes de terre, les couper en morceaux et les cuire 20 à 25 min à l’eau salée frémissante, jusqu’à ce qu’elles s’écrasent facilement.',
    'Pendant ce temps, couper le poulet en petits dés. Faire revenir l’oignon haché dans 10 g de beurre 4 min à feu moyen, ajouter le poulet et le cuire 6 min à feu moyen-vif, jusqu’à ce qu’il soit cuit à cœur. Ajouter la crème, saler et poivrer.',
    'Préchauffer le four à 200 °C. Écraser les pommes de terre égouttées avec le lait chaud, le reste du beurre et la muscade. Saler et poivrer.',
    'Étaler le poulet dans un plat à gratin, couvrir de purée, parsemer de fromage râpé et enfourner 20 min à 200 °C, jusqu’à ce que le dessus soit doré.'
  ]);

  R('confit-pommes-sautees', 'Confit de canard et pommes de terre sautées', 'Française', 'Plat', 50, 'Facile', 4, [
    ['confit-canard', 4], ['pommes-de-terre', 1000, 'g'], ['ail', 3], ['persil', 0.5, 'pc', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Préchauffer le four à 200 °C. Réchauffer la boîte de confit 5 min au bain-marie frémissant pour liquéfier la graisse, sortir les cuisses et récupérer 3 cuillères à soupe de graisse.',
    'Poser les cuisses côté peau vers le haut dans un plat et les enfourner 25 min à 200 °C, jusqu’à ce que la peau soit dorée et croustillante.',
    'Pendant ce temps, éplucher les pommes de terre et les couper en cubes de 2 cm. Les sécher dans un torchon.',
    'Chauffer la graisse de canard à feu moyen-vif dans une grande poêle et y faire sauter les pommes de terre 20 à 25 min, en les retournant régulièrement, jusqu’à ce qu’elles soient dorées et tendres. Saler et poivrer.',
    'Ajouter l’ail et le persil hachés 1 min avant la fin de la cuisson. Servir les pommes de terre avec les cuisses de canard.'
  ]);

  R('aiguillettes-canard-moutarde', 'Aiguillettes de canard à la crème moutardée', 'Française', 'Plat', 25, 'Facile', 4, [
    ['aiguillettes-de-canard', 600, 'g'], ['oignons', 1], ['creme-fraiche', 15, 'cl'], ['moutarde', 1, 'cs'], ['huile', 1, 'cs'],
    ['fond-de-veau', 10, 'g', 'opt'], ['pates', 300, 'g', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Si vous servez des pâtes, les cuire 10 à 12 min dans 3 L d’eau bouillante salée (al dente, selon le paquet), puis les égoutter.',
    'Chauffer l’huile à feu vif dans une grande poêle et saisir les aiguillettes 2 min en les retournant : elles doivent rester rosées. Saler, poivrer et réserver.',
    'Baisser à feu moyen et faire revenir l’oignon finement émincé 4 min. Ajouter le fond de veau délayé dans 10 cl d’eau chaude et laisser réduire 2 min à feu moyen.',
    'Incorporer la crème et la moutarde, et laisser épaissir 2 min à feu doux, sans faire bouillir. Remettre les aiguillettes 1 min à feu doux pour les réchauffer et servir aussitôt.'
  ]);

  R('aiguillettes-canard-haricots', 'Aiguillettes de canard aux haricots verts, sauce soja', 'Chinoise', 'Plat', 25, 'Facile', 4, [
    ['aiguillettes-de-canard', 500, 'g'], ['haricots-verts-surgeles', 500, 'g'], ['sauce-soja', 3, 'cs'], ['ail', 2], ['huile', 2, 'cs'],
    ['miel', 1, 'cs', 'opt'], ['graines-sesame', 1, 'cs', 'opt'], ['riz', 250, 'g', 'opt'], ['sel', null]
  ], [
    'Si vous servez du riz, le cuire 10 à 12 min dans 3 L d’eau bouillante salée (selon le paquet), puis l’égoutter.',
    'Cuire les haricots verts surgelés 6 min à l’eau bouillante salée : ils doivent rester croquants. Les égoutter.',
    'Chauffer 1 cuillère à soupe d’huile à feu vif dans un wok ou une grande poêle et saisir les aiguillettes 2 min en les retournant. Réserver.',
    'Ajouter le reste d’huile, l’ail haché et les haricots, et faire sauter 3 min à feu vif. Ajouter la sauce soja et le miel, remettre le canard et faire sauter 1 min à feu vif, jusqu’à ce que la sauce enrobe le tout. Parsemer de sésame.'
  ]);

  R('haricots-verts-lardons', 'Haricots verts aux lardons', 'Française', 'Plat', 25, 'Facile', 4, [
    ['haricots-verts-surgeles', 600, 'g'], ['lardons', 150, 'g'], ['oignons', 1], ['beurre', 10, 'g', 'opt'], ['ail', 1, 'pc', 'opt'],
    ['sel', null], ['poivre', null]
  ], [
    'Cuire les haricots verts surgelés 8 min à l’eau bouillante salée, jusqu’à ce qu’ils soient tendres mais encore un peu croquants. Les égoutter.',
    'Pendant ce temps, faire revenir les lardons 5 min à feu moyen dans une grande poêle sans matière grasse, puis ajouter l’oignon émincé et cuire 5 min à feu moyen, jusqu’à ce qu’il soit doré.',
    'Ajouter les haricots, le beurre et l’ail haché, et faire sauter 3 min à feu moyen. Poivrer et goûter avant de saler.'
  ]);

  R('haricots-verts-ail', 'Haricots verts sautés à l’ail', 'Française', 'Plat', 20, 'Facile', 4, [
    ['haricots-verts-surgeles', 600, 'g'], ['ail', 3], ['beurre', 30, 'g'], ['persil', 0.5, 'pc', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Cuire les haricots verts surgelés 7 à 8 min à l’eau bouillante salée, jusqu’à ce qu’ils soient tendres mais encore croquants. Les égoutter.',
    'Faire fondre le beurre à feu moyen dans une grande poêle, ajouter les haricots et les faire sauter 3 min.',
    'Ajouter l’ail et le persil hachés et cuire encore 1 min à feu moyen, sans laisser brunir l’ail. Saler, poivrer et servir.'
  ]);

  R('wraps-poulet-cheddar', 'Wraps poulet cheddar', 'Américaine', 'Plat', 25, 'Facile', 2, [
    ['tortillas', 4], ['poulet', 300, 'g'], ['cheddar', 4], ['paprika', 1, 'cc'], ['huile', 1, 'cs'], ['creme-fraiche', 6, 'cl', 'opt'],
    ['salade', 0.25, 'pc', 'opt'], ['tomates', 1, 'pc', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Couper le poulet en lanières, le mélanger avec le paprika, du sel et du poivre. Le faire sauter 5 à 6 min à feu vif dans l’huile, jusqu’à ce qu’il soit doré et cuit à cœur.',
    'Chauffer les tortillas 20 s de chaque côté dans une poêle sèche à feu moyen pour les assouplir.',
    'Tartiner chaque tortilla de crème, poser une tranche de cheddar, le poulet chaud, quelques feuilles de salade et des rondelles de tomate.',
    'Rouler serré en repliant le bas. Pour un wrap croustillant, le dorer 1 min de chaque côté dans la poêle à feu moyen, soudure en dessous. Couper en deux en biais.'
  ]);

  R('burritos-poulet-riz', 'Burritos au poulet et au riz', 'Mexicaine', 'Plat', 35, 'Facile', 4, [
    ['tortillas', 4], ['riz', 120, 'g'], ['poulet', 300, 'g'], ['cheddar', 4], ['cumin', 1, 'cc'], ['paprika', 1, 'cc'], ['huile', 1, 'cs'],
    ['haricots-rouges', 250, 'g', 'opt'], ['creme-fraiche', 8, 'cl', 'opt'], ['sel', null]
  ], [
    'Cuire le riz 10 à 12 min dans 2 L d’eau bouillante salée (selon le paquet), puis l’égoutter.',
    'Couper le poulet en petits dés et le faire sauter 5 min à feu vif dans l’huile avec le cumin, le paprika et du sel. Ajouter les haricots rouges rincés et égouttés, et chauffer 2 min à feu moyen.',
    'Chauffer les tortillas 20 s de chaque côté dans une poêle sèche à feu moyen. Au centre de chacune, poser une tranche de cheddar, du riz, la garniture au poulet et une cuillerée de crème.',
    'Replier les côtés, puis rouler serré. Dorer les burritos 1 à 2 min de chaque côté à feu moyen, soudure en dessous, jusqu’à ce qu’ils soient croustillants.'
  ]);

  R('croque-tortillas', 'Croque-tortillas jambon fromage', 'Française', 'Plat', 15, 'Facile', 2, [
    ['tortillas', 4], ['jambon', 2], ['fromage-rape', 100, 'g'], ['beurre', 10, 'g'], ['moutarde', 1, 'cc', 'opt']
  ], [
    'Tartiner légèrement 2 tortillas de moutarde. Répartir la moitié du fromage, les tranches de jambon, puis le reste du fromage. Couvrir avec les 2 autres tortillas en appuyant.',
    'Faire fondre la moitié du beurre à feu moyen dans une grande poêle, y poser un croque et le cuire 2 à 3 min, jusqu’à ce qu’il soit doré.',
    'Le retourner à l’aide d’une assiette et cuire encore 2 min à feu moyen, jusqu’à ce que le fromage soit fondu. Recommencer avec le second. Couper en quartiers.'
  ]);

  R('pizzas-tortilla', 'Pizzas express sur tortilla', 'Italienne', 'Plat', 20, 'Facile', 2, [
    ['tortillas', 4], ['coulis-tomate', 12, 'cl'], ['fromage-rape', 120, 'g'], ['jambon', 2, 'pc', 'opt'], ['olives', 30, 'g', 'opt'],
    ['origan', 1, 'cc', 'opt'], ['huile-olive', 1, 'cs', 'opt']
  ], [
    'Préchauffer le four à 220 °C. Poser les tortillas sur deux plaques tapissées de papier cuisson.',
    'Les tartiner de coulis de tomate en laissant 1 cm de bord. Ajouter le jambon en morceaux, les olives, puis le fromage râpé et l’origan.',
    'Enfourner 7 à 9 min à 220 °C, jusqu’à ce que le fromage soit fondu et les bords croustillants. Arroser d’un filet d’huile et servir aussitôt.'
  ]);

  R('wraps-thon', 'Wraps au thon', 'Française', 'Plat', 15, 'Facile', 2, [
    ['tortillas', 4], ['thon-boite', 140, 'g'], ['creme-fraiche', 8, 'cl'], ['citron', 0.5, 'pc', 'opt'], ['salade', 0.25, 'pc', 'opt'],
    ['tomates', 1, 'pc', 'opt'], ['mais-doux', 70, 'g', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Égoutter et émietter le thon. Le mélanger avec la crème, le jus du demi-citron, le maïs égoutté, du sel et du poivre.',
    'Répartir la préparation au centre des tortillas, ajouter quelques feuilles de salade et des rondelles de tomate.',
    'Rouler serré en repliant le bas et couper en deux. Servir aussitôt ou garder au frais, filmés, jusqu’au repas.'
  ]);

  R('tartines-pate-fromage', 'Tartines gratinées pâté et fromage', 'Française', 'Plat', 15, 'Facile', 2, [
    ['pain', 4], ['pate', 150, 'g'], ['fromage-rape', 80, 'g'], ['cornichons', 30, 'g', 'opt'], ['salade', 0.25, 'pc', 'opt']
  ], [
    'Préchauffer le four en position gril à 220 °C.',
    'Tartiner généreusement les tranches de pain de pâté, ajouter quelques rondelles de cornichon et couvrir de fromage râpé.',
    'Poser les tartines sur une plaque et les enfourner 6 à 8 min sous le gril, en haut du four, jusqu’à ce que le fromage soit fondu et doré. Servir aussitôt avec la salade.'
  ]);

  /* ───────────── Salades-repas ───────────── */

  R('salade-lentilles-feta', 'Salade de lentilles à la feta', 'Française', 'Plat', 40, 'Facile', 4, [
    ['lentilles', 250, 'g'], ['feta', 150, 'g'], ['vinaigre', 2, 'cs'], ['huile-olive', 4, 'cs'], ['moutarde', 1, 'cc'],
    ['oignon-rouge', 1, 'pc', 'opt'], ['tomates-cerises', 200, 'g', 'opt'], ['persil', 0.5, 'pc', 'opt'], ['laurier', 1, 'pc', 'opt'],
    ['sel', null], ['poivre', null]
  ], [
    'Mettre les lentilles rincées dans 3 fois leur volume d’eau froide avec le laurier. Porter à ébullition puis cuire 20 à 25 min à feu doux : elles doivent être tendres mais se tenir. Saler en fin de cuisson, égoutter et laisser tiédir.',
    'Préparer la vinaigrette : fouetter la moutarde, le vinaigre, du sel et du poivre, puis l’huile.',
    'Émincer finement l’oignon rouge et couper les tomates cerises en deux.',
    'Mélanger les lentilles tièdes avec la vinaigrette, l’oignon et les tomates. Émietter la feta par-dessus et parsemer de persil ciselé.'
  ]);

  R('salade-pates-poulet', 'Salade de pâtes au poulet', 'Française', 'Plat', 35, 'Facile', 4, [
    ['pates', 300, 'g'], ['poulet', 350, 'g'], ['tomates', 3], ['huile', 5, 'cs'], ['vinaigre', 2, 'cs'], ['moutarde', 1, 'cc'],
    ['mais-doux', 140, 'g', 'opt'], ['fromage-rape', 60, 'g', 'opt'], ['ciboulette', 0.25, 'pc', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Cuire les pâtes 10 à 12 min dans 3 L d’eau bouillante salée (al dente, selon le paquet). Les rincer à l’eau froide, les égoutter et les mélanger avec 1 cuillère à soupe d’huile.',
    'Saler et poivrer les blancs de poulet, les cuire 5 à 6 min par face à feu moyen dans 1 cuillère à soupe d’huile, jusqu’à ce qu’ils soient cuits à cœur. Laisser tiédir et couper en dés.',
    'Préparer la vinaigrette : fouetter la moutarde, le vinaigre, du sel et du poivre, puis le reste d’huile.',
    'Couper les tomates en dés. Mélanger les pâtes, le poulet, les tomates, le maïs égoutté et le fromage avec la vinaigrette. Parsemer de ciboulette et servir frais.'
  ]);

  R('salade-riz-poulet-curry', 'Salade de riz au poulet et au curry', 'Française', 'Plat', 40, 'Facile', 4, [
    ['riz', 250, 'g'], ['poulet', 350, 'g'], ['curry', 2, 'cc'], ['yaourt', 1], ['huile', 1, 'cs'], ['citron', 0.5, 'pc', 'opt'],
    ['pommes', 1, 'pc', 'opt'], ['raisins-secs', 40, 'g', 'opt'], ['mais-doux', 140, 'g', 'opt'], ['coriandre', 0.25, 'pc', 'opt'],
    ['sel', null], ['poivre', null]
  ], [
    'Cuire le riz 10 à 12 min dans 3 L d’eau bouillante salée (selon le paquet), le rincer à l’eau froide et l’égoutter.',
    'Couper le poulet en dés, le saupoudrer de 1 cuillère à café de curry et le faire sauter 5 à 6 min à feu vif dans l’huile, jusqu’à ce qu’il soit doré et cuit à cœur. Saler et laisser tiédir.',
    'Préparer la sauce : mélanger le yaourt avec le reste du curry, le jus du demi-citron, du sel et du poivre.',
    'Mélanger le riz, le poulet, la pomme en petits dés, les raisins secs, le maïs égoutté et la sauce. Parsemer de coriandre ciselée et servir frais.'
  ]);

  R('taboule-poulet', 'Taboulé au poulet', 'Maghrébine', 'Plat', 45, 'Facile', 4, [
    ['semoule', 250, 'g'], ['poulet', 350, 'g'], ['tomates', 3], ['citron', 2], ['huile-olive', 6, 'cs'], ['cumin', 1, 'cc'],
    ['concombre', 0.5, 'pc', 'opt'], ['menthe', 0.5, 'pc', 'opt'], ['persil', 0.5, 'pc', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Mélanger la semoule avec le jus des citrons, 5 cuillères à soupe d’huile, une pincée de sel et 20 cl d’eau froide. Couvrir et laisser gonfler 30 min au réfrigérateur, en l’égrainant à la fourchette à mi-temps.',
    'Pendant ce temps, couper le poulet en dés, le mélanger avec le cumin, du sel et du poivre, et le faire sauter 5 à 6 min à feu vif dans le reste d’huile, jusqu’à ce qu’il soit doré et cuit à cœur. Laisser refroidir.',
    'Couper les tomates et le concombre en petits dés, ciseler la menthe et le persil.',
    'Égrainer la semoule, ajouter les légumes, les herbes et le poulet. Goûter, rectifier en sel et en citron, et servir bien frais.'
  ]);

  R('salade-pommes-terre-lardons', 'Salade tiède de pommes de terre aux lardons', 'Française', 'Plat', 40, 'Facile', 4, [
    ['pommes-de-terre', 800, 'g'], ['lardons', 200, 'g'], ['echalotes', 1], ['vinaigre', 2, 'cs'], ['huile', 4, 'cs'], ['moutarde', 1, 'cc'],
    ['oeufs', 4, 'pc', 'opt'], ['salade', 0.5, 'pc', 'opt'], ['persil', 0.25, 'pc', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Cuire les pommes de terre dans leur peau 20 à 25 min à l’eau salée frémissante, jusqu’à ce qu’une lame les traverse sans résistance. Cuire les œufs 9 min à l’eau bouillante, les refroidir et les écaler.',
    'Pendant ce temps, faire dorer les lardons 5 à 6 min à feu moyen, sans matière grasse.',
    'Préparer la vinaigrette : fouetter la moutarde, le vinaigre, du sel et du poivre, puis l’huile. Ajouter l’échalote ciselée.',
    'Éplucher les pommes de terre encore chaudes, les couper en rondelles et les arroser aussitôt de vinaigrette : elles l’absorbent mieux tièdes.',
    'Ajouter les lardons chauds et les œufs en quartiers, parsemer de persil ciselé et servir tiède, sur un lit de salade.'
  ]);

  R('salade-tiede-canard', 'Salade tiède au confit de canard', 'Française', 'Plat', 45, 'Facile', 2, [
    ['confit-canard', 2], ['pommes-de-terre', 400, 'g'], ['salade', 0.5], ['vinaigre', 1, 'cs'], ['moutarde', 1, 'cc'], ['huile', 2, 'cs'],
    ['cerneaux-de-noix', 30, 'g', 'opt'], ['echalotes', 1, 'pc', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Préchauffer le four à 200 °C. Réchauffer la boîte de confit 5 min au bain-marie frémissant, sortir les cuisses et récupérer 2 cuillères à soupe de graisse.',
    'Poser les cuisses côté peau vers le haut dans un plat et les enfourner 20 à 25 min à 200 °C, jusqu’à ce que la peau soit croustillante.',
    'Pendant ce temps, éplucher les pommes de terre, les couper en cubes de 2 cm et les faire sauter 20 min à feu moyen-vif dans la graisse de canard, jusqu’à ce qu’elles soient dorées et tendres. Saler.',
    'Préparer la vinaigrette : fouetter la moutarde, le vinaigre, du sel et du poivre, puis l’huile. Ajouter l’échalote ciselée. Laver et essorer la salade.',
    'Effilocher la chair des cuisses en gardant la peau croustillante en morceaux. Assaisonner la salade, ajouter les pommes de terre chaudes, le canard et les noix. Servir aussitôt.'
  ]);

  R('salade-aiguillettes-canard', 'Salade tiède d’aiguillettes de canard au balsamique', 'Française', 'Plat', 20, 'Facile', 4, [
    ['aiguillettes-de-canard', 500, 'g'], ['salade', 1], ['vinaigre-balsamique', 3, 'cs'], ['huile-olive', 3, 'cs'],
    ['miel', 1, 'cs', 'opt'], ['tomates-cerises', 200, 'g', 'opt'], ['cerneaux-de-noix', 40, 'g', 'opt'], ['pain', 4, 'pc', 'opt'],
    ['sel', null], ['poivre', null]
  ], [
    'Laver et essorer la salade. Couper les tomates cerises en deux. Faire griller les tranches de pain 2 min au grille-pain et les couper en croûtons.',
    'Préparer la vinaigrette avec 1 cuillère à soupe de vinaigre balsamique, l’huile, du sel et du poivre.',
    'Saisir les aiguillettes 2 min à feu vif dans une poêle sans matière grasse, en les retournant : elles doivent rester rosées. Saler et poivrer.',
    'Hors du feu, verser dans la poêle le reste du vinaigre balsamique et le miel, et remuer 30 s pour enrober les aiguillettes d’un jus sirupeux.',
    'Assaisonner la salade, la répartir dans les assiettes avec les tomates, les noix et les croûtons, puis poser les aiguillettes chaudes et leur jus. Servir aussitôt.'
  ]);

  R('salade-haricots-verts-thon', 'Salade de haricots verts, œufs et thon', 'Française', 'Plat', 30, 'Facile', 4, [
    ['haricots-verts-surgeles', 500, 'g'], ['oeufs', 4], ['thon-boite', 200, 'g'], ['vinaigre', 2, 'cs'], ['huile', 4, 'cs'], ['moutarde', 1, 'cc'],
    ['tomates', 2, 'pc', 'opt'], ['echalotes', 1, 'pc', 'opt'], ['olives', 50, 'g', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Cuire les haricots verts surgelés 7 à 8 min à l’eau bouillante salée : ils doivent rester légèrement croquants. Les plonger dans l’eau glacée, puis les égoutter soigneusement.',
    'Cuire les œufs 9 min à l’eau bouillante, les refroidir à l’eau froide et les écaler.',
    'Préparer la vinaigrette : fouetter la moutarde, le vinaigre, du sel et du poivre, puis l’huile. Ajouter l’échalote ciselée.',
    'Mélanger les haricots avec la vinaigrette, ajouter les tomates en quartiers, le thon égoutté en gros morceaux, les œufs en quartiers et les olives.'
  ]);

  R('bowl-riz-poulet-soja', 'Bowl de riz au poulet et à la sauce soja', 'Japonaise', 'Plat', 35, 'Facile', 4, [
    ['riz', 280, 'g'], ['poulet', 500, 'g'], ['sauce-soja', 5, 'cs'], ['carottes', 2], ['huile', 1, 'cs'], ['miel', 1, 'cs', 'opt'],
    ['concombre', 0.5, 'pc', 'opt'], ['avocat', 1, 'pc', 'opt'], ['graines-sesame', 1, 'cs', 'opt'], ['vinaigre-riz', 1, 'cs', 'opt'], ['sel', null]
  ], [
    'Cuire le riz 10 à 12 min dans 3 L d’eau bouillante salée (selon le paquet), l’égoutter et le laisser tiédir.',
    'Couper le poulet en lanières et le mariner 10 min avec 3 cuillères à soupe de sauce soja et le miel.',
    'Râper les carottes, couper le concombre en fines rondelles et l’avocat en tranches. Mélanger le reste de sauce soja avec le vinaigre de riz pour l’assaisonnement.',
    'Faire sauter le poulet égoutté 5 à 6 min à feu vif dans l’huile, puis ajouter la marinade et laisser réduire 1 min à feu vif, jusqu’à ce qu’elle soit sirupeuse.',
    'Répartir le riz dans des bols, disposer le poulet et les légumes en secteurs, arroser d’assaisonnement et parsemer de sésame.'
  ]);

  R('salade-pates-thon', 'Salade de pâtes au thon', 'Française', 'Plat', 25, 'Facile', 4, [
    ['pates', 300, 'g'], ['thon-boite', 200, 'g'], ['tomates', 3], ['huile', 4, 'cs'], ['vinaigre', 2, 'cs'], ['moutarde', 1, 'cc'],
    ['oeufs', 2, 'pc', 'opt'], ['mais-doux', 140, 'g', 'opt'], ['oignon-rouge', 0.5, 'pc', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Cuire les pâtes 10 à 12 min dans 3 L d’eau bouillante salée (al dente, selon le paquet), les rincer à l’eau froide et les égoutter. Cuire les œufs 9 min à l’eau bouillante, les refroidir et les écaler.',
    'Préparer la vinaigrette : fouetter la moutarde, le vinaigre, du sel et du poivre, puis l’huile.',
    'Couper les tomates en dés et émincer finement l’oignon rouge. Égoutter le thon et le maïs.',
    'Mélanger les pâtes avec la vinaigrette, les tomates, l’oignon, le thon émietté en gros morceaux et le maïs. Ajouter les œufs en quartiers et servir frais.'
  ]);

  R('salade-pates-feta', 'Salade de pâtes à la feta et aux tomates', 'Grecque', 'Plat', 25, 'Facile', 4, [
    ['pates', 300, 'g'], ['feta', 200, 'g'], ['tomates-cerises', 250, 'g'], ['huile-olive', 4, 'cs'], ['vinaigre', 1, 'cs'],
    ['olives', 60, 'g', 'opt'], ['concombre', 0.5, 'pc', 'opt'], ['oignon-rouge', 0.5, 'pc', 'opt'], ['origan', 1, 'cc', 'opt'],
    ['sel', null], ['poivre', null]
  ], [
    'Cuire les pâtes 10 à 12 min dans 3 L d’eau bouillante salée (al dente, selon le paquet), les rincer à l’eau froide et les égoutter.',
    'Couper les tomates cerises en deux, le concombre en dés et l’oignon rouge en fines lamelles.',
    'Fouetter l’huile, le vinaigre, l’origan, peu de sel (la feta est salée) et du poivre.',
    'Mélanger les pâtes, les légumes, les olives et la vinaigrette. Émietter la feta en gros morceaux par-dessus et servir frais.'
  ]);

  R('salade-pois-chiches-thon', 'Salade de pois chiches au thon', 'Maghrébine', 'Plat', 15, 'Facile', 4, [
    ['pois-chiches', 500, 'g'], ['thon-boite', 200, 'g'], ['tomates', 3], ['citron', 1], ['huile-olive', 4, 'cs'],
    ['oignon-rouge', 1, 'pc', 'opt'], ['cumin', 1, 'cc', 'opt'], ['persil', 0.5, 'pc', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Rincer et égoutter les pois chiches. Égoutter le thon.',
    'Couper les tomates en dés et émincer finement l’oignon rouge. Ciseler le persil.',
    'Fouetter le jus du citron, l’huile, le cumin, du sel et du poivre.',
    'Mélanger les pois chiches, les tomates, l’oignon, le persil et la sauce. Ajouter le thon en gros morceaux et laisser reposer 10 min au frais avant de servir.'
  ]);
};
