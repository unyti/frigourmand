/* Recettes simples ajoutées en 0.9 (même format que recettes.js). */
'use strict';

module.exports = function ajouter(R) {

  /* ───────────── Fruits : entrées ───────────── */

  R('melon-feta-menthe', 'Melon, feta et menthe à l’huile d’olive', 'Française', 'Entrée', 15, 'Facile', 4, [
    ['melon', 1], ['feta', 150, 'g'], ['menthe', 0.25], ['huile-olive', 2], ['citron-vert', 0.5, 'pc', 'opt'], ['poivre', null]
  ], [
    'Couper le melon en deux, retirer les graines à la cuillère, ôter l’écorce et tailler la chair en cubes de 2 cm.',
    'Émietter grossièrement la feta. Effeuiller la menthe et ciseler les feuilles.',
    'Répartir le melon dans les assiettes, parsemer de feta et de menthe.',
    'Arroser d’huile d’olive et d’un filet de jus de citron vert, poivrer et servir bien frais.'
  ]);

  R('melon-jambon-cru', 'Melon au jambon cru', 'Française', 'Entrée', 10, 'Facile', 4, [
    ['melon', 1], ['jambon-cru', 8], ['huile-olive', 1, 'cs', 'opt'], ['poivre', null]
  ], [
    'Couper le melon en huit tranches, retirer les graines puis glisser la lame entre la chair et l’écorce pour les détacher.',
    'Disposer deux tranches de melon par assiette et enrouler ou draper deux tranches de jambon cru à côté.',
    'Poivrer, arroser d’un filet d’huile d’olive et servir bien frais.'
  ]);

  R('salade-pasteque-feta', 'Salade de pastèque à la feta', 'Grecque', 'Entrée', 20, 'Facile', 4, [
    ['pasteque', 0.25], ['feta', 150, 'g'], ['oignon-rouge', 0.5], ['menthe', 0.25], ['citron-vert', 1],
    ['huile-olive', 2], ['olives', 50, 'g', 'opt'], ['poivre', null]
  ], [
    'Émincer finement l’oignon rouge et le laisser mariner 10 min dans le jus du citron vert pour l’adoucir.',
    'Pendant ce temps, retirer l’écorce de la pastèque, ôter le plus de pépins possible et tailler la chair en cubes de 2 cm.',
    'Disposer la pastèque dans un plat, ajouter l’oignon et son jus, la feta émiettée et les olives.',
    'Arroser d’huile d’olive, parsemer de menthe ciselée, poivrer et servir aussitôt, bien frais.'
  ]);

  R('pamplemousse-avocat-crevettes', 'Salade pamplemousse, avocat et crevettes', 'Française', 'Entrée', 20, 'Facile', 4, [
    ['pamplemousses', 2], ['avocat', 2], ['crevettes', 200, 'g'], ['huile-olive', 2], ['ciboulette', 0.25, 'pc', 'opt'],
    ['sel', null], ['poivre', null]
  ], [
    'Peler les pamplemousses à vif avec un couteau bien aiguisé, puis lever les suprêmes au-dessus d’un bol pour recueillir le jus.',
    'Couper les avocats en deux, retirer le noyau et la peau, puis tailler la chair en lamelles.',
    'Fouetter 3 cuillerées à soupe du jus recueilli avec l’huile d’olive, du sel et du poivre.',
    'Disposer les suprêmes, l’avocat et les crevettes cuites décortiquées dans les assiettes, napper de sauce et parsemer de ciboulette ciselée.'
  ]);

  R('salade-endives-grenade-noix', 'Salade d’endives, grenade et noix', 'Française', 'Entrée', 20, 'Facile', 4, [
    ['endives', 4], ['grenades', 1], ['cerneaux-de-noix', 50, 'g'], ['huile-de-noix', 2], ['vinaigre-de-cidre', 1],
    ['moutarde', 1, 'cc'], ['sel', null], ['poivre', null]
  ], [
    'Couper la grenade en deux et, au-dessus d’un saladier, tapoter le dos de chaque moitié avec une cuillère en bois pour faire tomber les grains. Retirer les membranes blanches.',
    'Retirer le cône amer à la base des endives et les couper en tronçons de 2 cm.',
    'Fouetter la moutarde avec le vinaigre, du sel et du poivre, puis ajouter l’huile de noix.',
    'Au dernier moment, mélanger les endives avec la vinaigrette, les grains de grenade et les noix concassées.'
  ]);

  R('salade-nectarines-burrata', 'Nectarines, burrata et basilic', 'Italienne', 'Entrée', 15, 'Facile', 4, [
    ['nectarines', 3], ['burrata', 2], ['basilic', 0.25], ['huile-olive', 3], ['vinaigre-balsamique', 1, 'cs', 'opt'],
    ['fleur-de-sel', null], ['poivre', null]
  ], [
    'Couper les nectarines en quartiers fins en retirant le noyau.',
    'Les disposer dans un plat et poser les burratas égouttées au centre.',
    'Ouvrir les burratas d’un coup de couteau, arroser d’huile d’olive et de quelques gouttes de vinaigre balsamique.',
    'Parsemer de feuilles de basilic, de fleur de sel et de poivre, puis servir aussitôt.'
  ]);

  R('salade-kaki-mache-noix', 'Salade de mâche, kaki et noix', 'Française', 'Entrée', 15, 'Facile', 4, [
    ['mache', 150, 'g'], ['kakis', 2], ['cerneaux-de-noix', 40, 'g'], ['huile-de-noix', 2], ['vinaigre-balsamique', 1],
    ['sel', null], ['poivre', null]
  ], [
    'Laver la mâche à grande eau et bien l’essorer.',
    'Peler les kakis (mûrs mais encore fermes) et les couper en fines tranches.',
    'Fouetter le vinaigre balsamique avec du sel et du poivre, puis ajouter l’huile de noix.',
    'Mélanger la mâche avec la vinaigrette au dernier moment, ajouter le kaki et les noix concassées.'
  ]);

  /* ───────────── Fruits : desserts ───────────── */

  R('granite-pasteque', 'Granité de pastèque', 'Française', 'Dessert', 250, 'Facile', 4, [
    ['pasteque', 0.25], ['sucre', 60, 'g'], ['citron-vert', 1]
  ], [
    'Retirer l’écorce et les pépins de la pastèque, couper la chair en morceaux et la mixer finement.',
    'Ajouter le sucre et le jus du citron vert, puis mixer encore jusqu’à ce que le sucre soit dissous.',
    'Verser dans un plat large et peu profond et placer au congélateur.',
    'Toutes les 30 min, gratter à la fourchette pour briser les cristaux, pendant 3 h 30 à 4 h, jusqu’à obtenir des paillettes.',
    'Servir aussitôt dans des verres bien froids.'
  ]);

  R('salade-clementines-fleur-oranger', 'Salade de clémentines à la fleur d’oranger', 'Maghrébine', 'Dessert', 45, 'Facile', 4, [
    ['clementines', 10], ['fleur-d-oranger', 1], ['sucre', 20, 'g', 'opt'], ['cannelle', 0.5, 'cc', 'opt'],
    ['menthe', 0.25, 'pc', 'opt']
  ], [
    'Presser deux clémentines. Mélanger leur jus avec l’eau de fleur d’oranger et le sucre.',
    'Éplucher les autres clémentines, retirer le plus possible de peaux blanches et les couper en rondelles.',
    'Disposer les rondelles dans un plat, arroser de sirop et réserver 30 min au réfrigérateur.',
    'Au moment de servir, saupoudrer de cannelle et parsemer de menthe ciselée.'
  ]);

  R('salade-agrumes-miel', 'Salade d’agrumes au miel', 'Française', 'Dessert', 30, 'Facile', 4, [
    ['pamplemousses', 2], ['oranges-sanguines', 3], ['clementines', 4], ['miel', 1], ['menthe', 0.25, 'pc', 'opt']
  ], [
    'Peler à vif les pamplemousses et les oranges sanguines, puis lever les suprêmes au-dessus d’un saladier pour recueillir le jus.',
    'Éplucher les clémentines et les séparer en quartiers.',
    'Délayer le miel dans le jus recueilli et le verser sur les fruits.',
    'Réserver 15 min au réfrigérateur et servir parsemé de menthe ciselée.'
  ]);

  R('salade-fruits-exotiques-coco', 'Salade de fruits exotiques à la noix de coco', 'Antillaise', 'Dessert', 45, 'Facile', 6, [
    ['ananas', 1], ['mangues', 2], ['papayes', 1], ['fruits-de-la-passion', 3], ['noix-de-coco', 1], ['citron-vert', 1],
    ['sucre-roux', 30, 'g', 'opt']
  ], [
    'Percer deux des « yeux » de la noix de coco avec un tournevis et recueillir l’eau. Casser la coque d’un coup de marteau, détacher la chair et en prélever environ 100 g en copeaux à l’économe.',
    'Éplucher l’ananas et les mangues, retirer le cœur de l’ananas et les noyaux, puis couper la chair en cubes.',
    'Couper la papaye en deux, retirer les graines à la cuillère, la peler et la couper en cubes.',
    'Mélanger la pulpe des fruits de la passion avec le jus du citron vert et le sucre, puis verser sur les fruits.',
    'Réserver 15 min au réfrigérateur et parsemer de copeaux de noix de coco au moment de servir.'
  ]);

  R('nectarines-roties-miel', 'Nectarines rôties au miel et au thym', 'Française', 'Dessert', 30, 'Facile', 4, [
    ['nectarines', 4], ['miel', 3], ['beurre', 20, 'g'], ['thym-frais', 3, 'pc', 'opt'], ['glace-a-la-vanille', 0.5, 'l', 'opt']
  ], [
    'Préchauffer le four à 200 °C. Couper les nectarines en deux et retirer les noyaux.',
    'Les ranger dans un plat, face coupée vers le haut. Déposer une noisette de beurre dans chaque creux, arroser de miel et parsemer de thym.',
    'Enfourner 20 min à 200 °C, en arrosant à mi-cuisson avec le jus, jusqu’à ce que les fruits soient tendres et légèrement caramélisés.',
    'Servir tiède, nappé du jus de cuisson, avec une boule de glace à la vanille.'
  ]);

  R('clafoutis-prunes', 'Clafoutis aux prunes', 'Française', 'Dessert', 55, 'Facile', 6, [
    ['prunes', 500, 'g'], ['oeufs', 3], ['sucre', 100, 'g'], ['farine', 60, 'g'], ['lait', 25, 'cl'], ['beurre', 15, 'g'],
    ['sucre-vanille', 1, 'pc', 'opt']
  ], [
    'Préchauffer le four à 180 °C. Beurrer un plat à gratin de 24 cm.',
    'Couper les prunes en deux, retirer les noyaux et les ranger dans le plat, face bombée vers le haut.',
    'Fouetter les œufs avec le sucre et le sucre vanillé, ajouter la farine, puis délayer progressivement avec le lait pour obtenir une pâte lisse.',
    'Verser sur les prunes et enfourner 35 à 40 min à 180 °C, jusqu’à ce que le clafoutis soit gonflé, doré et que la lame d’un couteau ressorte sèche.',
    'Laisser tiédir avant de servir.'
  ]);

  R('tarte-prunes', 'Tarte aux prunes', 'Française', 'Dessert', 55, 'Facile', 6, [
    ['pate-brisee', 1], ['prunes', 800, 'g'], ['sucre', 60, 'g'], ['amandes-poudre', 30, 'g'], ['cannelle', 0.5, 'cc', 'opt']
  ], [
    'Préchauffer le four à 200 °C. Foncer un moule de 26 cm avec la pâte et la piquer à la fourchette.',
    'Mélanger la poudre d’amande avec 20 g de sucre et la répartir sur le fond : elle absorbera le jus des fruits.',
    'Couper les prunes en deux, retirer les noyaux et les ranger en rosace bien serrée, face coupée vers le haut.',
    'Enfourner 35 à 40 min à 200 °C, jusqu’à ce que la pâte soit dorée et les prunes fondantes.',
    'À la sortie du four, saupoudrer du reste de sucre mélangé à la cannelle. Servir tiède ou froid.'
  ]);

  R('reines-claudes-roties-vanille', 'Reines-claudes rôties à la vanille', 'Française', 'Dessert', 35, 'Facile', 4, [
    ['reines-claudes', 600, 'g'], ['sucre', 40, 'g'], ['beurre', 25, 'g'], ['gousses-de-vanille', 1],
    ['glace-a-la-vanille', 0.5, 'l', 'opt']
  ], [
    'Préchauffer le four à 180 °C. Couper les reines-claudes en deux et retirer les noyaux.',
    'Fendre la gousse de vanille, gratter les graines et les mélanger au sucre.',
    'Beurrer un plat, y ranger les fruits face coupée vers le haut, saupoudrer de sucre vanillé, parsemer du reste de beurre en dés et ajouter la gousse.',
    'Enfourner 20 à 25 min à 180 °C, jusqu’à ce que les fruits soient tendres et entourés d’un sirop.',
    'Servir tiède, avec le jus et une boule de glace.'
  ]);

  R('crumble-pommes-mures', 'Crumble pommes et mûres', 'Française', 'Dessert', 50, 'Facile', 6, [
    ['pommes', 4], ['mures', 250, 'g'], ['farine', 150, 'g'], ['beurre', 100, 'g'], ['sucre', 100, 'g'],
    ['cannelle', 0.5, 'cc', 'opt']
  ], [
    'Préchauffer le four à 180 °C. Éplucher les pommes, les épépiner et les couper en dés.',
    'Les mélanger dans un plat avec les mûres, 20 g de sucre et la cannelle.',
    'Du bout des doigts, sabler la farine avec le reste du sucre et le beurre froid coupé en dés, jusqu’à obtenir une texture de grosse chapelure.',
    'Répartir le crumble sur les fruits sans tasser.',
    'Enfourner 30 à 35 min à 180 °C, jusqu’à ce que le dessus soit doré et que le jus bouillonne sur les bords. Servir tiède.'
  ]);

  R('salade-fruits-rouges-groseilles', 'Salade de fruits rouges aux groseilles', 'Française', 'Dessert', 50, 'Facile', 4, [
    ['fraises', 300, 'g'], ['framboises', 125, 'g'], ['groseilles', 125, 'g'], ['sucre', 30, 'g'], ['citron', 0.5],
    ['menthe', 0.25, 'pc', 'opt']
  ], [
    'Laver les fraises avant de les équeuter, puis les couper en quartiers.',
    'Égrapper les groseilles en faisant glisser les grappes entre les dents d’une fourchette.',
    'Mélanger les fraises et les groseilles avec le sucre et le jus du demi-citron.',
    'Ajouter délicatement les framboises et réserver 30 min au réfrigérateur. Servir parsemé de menthe ciselée.'
  ]);

  R('panna-cotta-cassis', 'Panna cotta au coulis de cassis', 'Italienne', 'Dessert', 260, 'Facile', 6, [
    ['creme-liquide', 50, 'cl'], ['sucre', 100, 'g'], ['gelatine', 3], ['cassis', 200, 'g'], ['gousses-de-vanille', 1, 'pc', 'opt']
  ], [
    'Faire tremper les feuilles de gélatine 10 min dans un bol d’eau froide.',
    'Chauffer la crème avec 50 g de sucre et les graines de vanille 4 à 5 min à feu moyen, jusqu’au frémissement, sans laisser bouillir.',
    'Hors du feu, ajouter la gélatine bien essorée et remuer jusqu’à ce qu’elle soit fondue. Répartir dans six verrines et réserver au moins 4 h au réfrigérateur.',
    'Pour le coulis, cuire le cassis avec le reste du sucre et 3 cuillerées à soupe d’eau, 5 min à feu moyen, jusqu’à ce que les baies éclatent. Mixer, passer au tamis et laisser refroidir.',
    'Napper les panna cotta de coulis au moment de servir.'
  ]);

  R('salade-litchis-framboises', 'Salade de litchis et framboises à l’eau de rose', 'Française', 'Dessert', 30, 'Facile', 4, [
    ['litchis', 500, 'g'], ['framboises', 125, 'g'], ['citron-vert', 0.5], ['eau-de-rose', 1, 'cc'], ['sucre', 15, 'g', 'opt'],
    ['menthe', 0.25, 'pc', 'opt']
  ], [
    'Décortiquer les litchis, les ouvrir en deux et retirer les noyaux.',
    'Mélanger le jus du citron vert avec l’eau de rose et le sucre.',
    'Verser sur les litchis, ajouter délicatement les framboises et réserver 15 min au réfrigérateur.',
    'Servir bien frais, parsemé de menthe ciselée.'
  ]);

  R('tarte-rhubarbe', 'Tarte à la rhubarbe', 'Française', 'Dessert', 90, 'Facile', 6, [
    ['pate-brisee', 1], ['rhubarbe', 600, 'g'], ['sucre', 130, 'g'], ['oeufs', 2], ['creme-fraiche', 20, 'cl']
  ], [
    'Éplucher la rhubarbe en retirant les fils, la couper en tronçons de 2 cm et la mélanger avec 50 g de sucre. Laisser dégorger 30 min, puis égoutter.',
    'Préchauffer le four à 200 °C. Foncer un moule de 26 cm avec la pâte et la piquer à la fourchette.',
    'Répartir la rhubarbe sur la pâte et enfourner 20 min à 200 °C.',
    'Pendant ce temps, fouetter les œufs avec le reste du sucre et la crème.',
    'Verser l’appareil sur la rhubarbe, baisser le four à 180 °C et cuire encore 20 min, jusqu’à ce que la crème soit prise et dorée. Servir tiède ou froid.'
  ]);

  R('compote-pommes-coings', 'Compote de pommes et coings', 'Française', 'Dessert', 60, 'Facile', 6, [
    ['coings', 2], ['pommes', 4], ['sucre', 80, 'g'], ['citron', 0.5], ['gousses-de-vanille', 1, 'pc', 'opt']
  ], [
    'Frotter les coings avec un torchon pour retirer le duvet. Les éplucher, les couper en quartiers, retirer le cœur dur avec un couteau solide et tailler en dés de 1 cm. Arroser de jus de citron.',
    'Les mettre dans une casserole avec le sucre, la vanille fendue et 20 cl d’eau. Porter à frémissement, couvrir et cuire 20 min à feu doux.',
    'Ajouter les pommes épluchées et coupées en dés, et poursuivre la cuisson 20 min à feu doux, à couvert, jusqu’à ce que tous les fruits soient fondants.',
    'Retirer la vanille, écraser à la fourchette ou mixer selon la texture souhaitée. Servir tiède ou froid.'
  ]);

  R('yaourt-glace-fruits-rouges', 'Yaourt glacé minute aux fruits rouges', 'Française', 'Dessert', 10, 'Facile', 4, [
    ['fruits-rouges-surgeles', 400, 'g'], ['yaourt-grec', 250, 'g'], ['miel', 3]
  ], [
    'Mettre les fruits rouges encore congelés dans le bol d’un blender puissant avec le yaourt et le miel.',
    'Mixer par à-coups en raclant les parois, jusqu’à obtenir une texture de glace à l’italienne.',
    'Servir aussitôt, ou placer 30 min au congélateur pour une texture plus ferme.'
  ]);

  R('sorbet-champagne-framboises', 'Sorbet au champagne et aux framboises', 'Française', 'Dessert', 20, 'Facile', 4, [
    ['sorbet', 0.5], ['champagne', 20, 'cl'], ['framboises', 125, 'g', 'opt']
  ], [
    'Placer quatre coupes 15 min au congélateur.',
    'Déposer deux boules de sorbet (citron ou framboise) dans chaque coupe.',
    'Ajouter quelques framboises et verser le champagne bien frais au moment de servir.'
  ]);

  /* ───────────── Légumes et herbes : entrées ───────────── */

  R('artichauts-vinaigrette', 'Artichauts vinaigrette', 'Française', 'Entrée', 50, 'Facile', 4, [
    ['artichauts', 4], ['citron', 1], ['echalotes', 1], ['moutarde', 1, 'cc'], ['vinaigre', 1], ['huile', 3],
    ['sel', null], ['poivre', null]
  ], [
    'Casser la queue des artichauts à la main pour arracher les fibres, rincer et frotter la base avec un demi-citron.',
    'Les plonger dans une grande casserole d’eau bouillante salée et citronnée et cuire 30 à 40 min à petits bouillons, selon leur grosseur : une feuille du centre doit se détacher sans effort.',
    'Égoutter les artichauts tête en bas.',
    'Préparer la vinaigrette : fouetter la moutarde avec le vinaigre, du sel et du poivre, ajouter l’huile puis l’échalote finement ciselée.',
    'Servir les artichauts tièdes, avec la vinaigrette pour y tremper les feuilles puis le fond.'
  ]);

  R('asperges-vertes-roties', 'Asperges vertes rôties au parmesan', 'Française', 'Entrée', 25, 'Facile', 4, [
    ['asperges-vertes', 600, 'g'], ['huile-olive', 2], ['parmesan', 40, 'g'], ['citron', 0.5, 'pc', 'opt'],
    ['sel', null], ['poivre', null]
  ], [
    'Préchauffer le four à 220 °C. Casser la base fibreuse des asperges : elle se rompt naturellement au bon endroit.',
    'Les étaler sur une plaque, arroser d’huile d’olive, saler, poivrer et les rouler pour bien les enrober.',
    'Enfourner 10 à 12 min à 220 °C, jusqu’à ce qu’elles soient tendres à la pointe du couteau et légèrement dorées.',
    'Parsemer de copeaux de parmesan et d’un peu de zeste de citron, puis servir aussitôt.'
  ]);

  R('salade-chou-rouge-pommes', 'Salade de chou rouge aux pommes', 'Française', 'Entrée', 50, 'Facile', 4, [
    ['chou-rouge', 0.5], ['pommes', 2], ['vinaigre-de-cidre', 2], ['moutarde', 1, 'cc'], ['huile', 3],
    ['cerneaux-de-noix', 40, 'g', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Retirer les feuilles abîmées et le trognon du chou rouge, puis l’émincer très finement.',
    'Le mélanger avec une bonne pincée de sel et 1 cuillerée à soupe de vinaigre, le malaxer 1 min et laisser reposer 30 min pour l’attendrir.',
    'Couper les pommes épépinées en fins bâtonnets.',
    'Fouetter la moutarde avec le reste du vinaigre et l’huile, poivrer.',
    'Égoutter le chou, le mélanger avec les pommes, la vinaigrette et les noix concassées.'
  ]);

  R('salade-kale-pomme-parmesan', 'Salade de chou kale, pomme et parmesan', 'Française', 'Entrée', 20, 'Facile', 4, [
    ['chou-kale', 200, 'g'], ['pommes', 1], ['parmesan', 30, 'g'], ['citron', 1], ['huile-olive', 3],
    ['graines-de-courge', 30, 'g', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Retirer les grosses tiges du kale et déchirer les feuilles en petits morceaux.',
    'Les masser 2 à 3 min avec 1 cuillerée à soupe d’huile d’olive et une pincée de sel, jusqu’à ce qu’elles soient souples et d’un vert plus foncé.',
    'Couper la pomme épépinée en fines lamelles.',
    'Fouetter le jus du citron avec le reste de l’huile et du poivre, puis mélanger avec le kale et la pomme.',
    'Parsemer de copeaux de parmesan et de graines de courge.'
  ]);

  R('radis-beurre', 'Radis au beurre et à la fleur de sel', 'Française', 'Entrée', 15, 'Facile', 4, [
    ['radis', 1], ['beurre-demi-sel', 60, 'g'], ['baguette', 0.5], ['fleur-de-sel', null]
  ], [
    'Couper les fanes des radis en laissant 1 cm de queue, retirer la racine, puis laver et sécher les radis.',
    'Sortir le beurre du réfrigérateur 15 min avant pour qu’il soit facile à tartiner.',
    'Servir les radis bien frais avec le beurre, la fleur de sel et la baguette : on tartine le radis de beurre avant de le tremper dans le sel.'
  ]);

  R('radis-noir-creme', 'Radis noir à la crème', 'Française', 'Entrée', 45, 'Facile', 4, [
    ['radis-noir', 1], ['creme-fraiche', 15, 'cl'], ['vinaigre', 1], ['ciboulette', 0.25], ['sel', null], ['poivre', null]
  ], [
    'Éplucher le radis noir et le râper finement.',
    'Le saler, mélanger et laisser dégorger 30 min dans une passoire, puis le presser entre les mains pour extraire l’eau.',
    'Mélanger la crème avec le vinaigre, la ciboulette ciselée et du poivre.',
    'Ajouter le radis, mélanger et servir frais.'
  ]);

  R('salade-mache-betterave', 'Salade de mâche et betterave', 'Française', 'Entrée', 15, 'Facile', 4, [
    ['mache', 150, 'g'], ['betteraves-cuites', 2], ['echalotes', 1], ['moutarde', 1, 'cc'], ['vinaigre', 1], ['huile', 3],
    ['cerneaux-de-noix', 40, 'g', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Laver la mâche à grande eau et bien l’essorer.',
    'Peler les betteraves et les couper en dés.',
    'Fouetter la moutarde avec le vinaigre, du sel et du poivre, ajouter l’huile puis l’échalote finement ciselée.',
    'Mélanger la mâche avec la vinaigrette au dernier moment, puis ajouter la betterave et les noix (la betterave colorerait tout si on la mélangeait trop tôt).'
  ]);

  R('salade-jeunes-pousses-poire-roquefort', 'Salade de jeunes pousses, poire et roquefort', 'Française', 'Entrée', 15, 'Facile', 4, [
    ['jeunes-pousses', 150, 'g'], ['poires', 2], ['roquefort', 100, 'g'], ['cerneaux-de-noix', 40, 'g'], ['huile-de-noix', 2],
    ['vinaigre-de-xeres', 1], ['poivre', null]
  ], [
    'Couper les poires en quartiers, retirer le cœur et les tailler en fines lamelles.',
    'Fouetter le vinaigre de xérès avec l’huile de noix et du poivre (le roquefort apporte le sel).',
    'Mélanger les jeunes pousses avec la vinaigrette.',
    'Répartir dans les assiettes avec les poires, le roquefort émietté et les noix concassées.'
  ]);

  R('salade-iceberg-roquefort', 'Salade iceberg, sauce au roquefort', 'Américaine', 'Entrée', 20, 'Facile', 4, [
    ['iceberg', 1], ['roquefort', 80, 'g'], ['creme-fraiche', 10, 'cl'], ['bacon', 6], ['citron', 0.5],
    ['ciboulette', 0.25, 'pc', 'opt'], ['poivre', null]
  ], [
    'Faire griller le bacon à sec dans une poêle, 4 à 5 min à feu moyen, jusqu’à ce qu’il soit croustillant. L’égoutter sur du papier absorbant et l’émietter.',
    'Écraser le roquefort à la fourchette avec la crème et le jus du demi-citron jusqu’à obtenir une sauce presque lisse. Poivrer.',
    'Retirer les feuilles extérieures de la salade et la couper en quatre quartiers, en gardant le trognon pour qu’ils se tiennent.',
    'Napper chaque quartier de sauce, parsemer de bacon et de ciboulette ciselée.'
  ]);

  R('salade-tomates-coeur-de-boeuf', 'Salade de tomates cœur-de-bœuf à l’oignon rouge', 'Française', 'Entrée', 15, 'Facile', 4, [
    ['tomates-coeur-de-boeuf', 3], ['oignon-rouge', 0.5], ['huile-olive', 3], ['vinaigre', 1], ['basilic', 0.25, 'pc', 'opt'],
    ['fleur-de-sel', null], ['poivre', null]
  ], [
    'Couper les tomates en tranches épaisses d’1 cm et les disposer dans un plat.',
    'Émincer très finement l’oignon rouge et le répartir dessus.',
    'Arroser de vinaigre puis d’huile d’olive, parsemer de fleur de sel, de poivre et de feuilles de basilic.',
    'Laisser reposer 5 min à température ambiante avant de servir.'
  ]);

  R('salade-scarole-noix-comte', 'Salade de scarole aux noix et au comté', 'Française', 'Entrée', 15, 'Facile', 4, [
    ['scarole', 1], ['comte', 100, 'g'], ['cerneaux-de-noix', 50, 'g'], ['moutarde', 1, 'cc'], ['vinaigre', 1],
    ['huile-de-noix', 3], ['sel', null], ['poivre', null]
  ], [
    'Retirer les feuilles vertes extérieures de la scarole, trop amères, et garder le cœur jaune. Laver, essorer et déchirer les feuilles.',
    'Couper le comté en petits dés.',
    'Fouetter la moutarde avec le vinaigre, du sel et du poivre, puis ajouter l’huile de noix.',
    'Mélanger la salade avec la vinaigrette, le comté et les noix concassées.'
  ]);

  R('trevise-grillee-balsamique', 'Trévise grillée au balsamique', 'Italienne', 'Entrée', 20, 'Facile', 4, [
    ['trevise', 2], ['huile-olive', 3], ['vinaigre-balsamique', 2], ['parmesan', 30, 'g', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Couper les trévises en quatre dans la longueur en gardant le trognon pour que les quartiers se tiennent.',
    'Les badigeonner d’huile d’olive et saler.',
    'Les griller 3 min par face dans une poêle-gril à feu vif, jusqu’à ce qu’elles soient flétries et marquées.',
    'Arroser de vinaigre balsamique, poivrer et parsemer de copeaux de parmesan. Servir tiède.'
  ]);

  R('salade-sucrines-avocat-radis', 'Salade de sucrines, avocat et radis', 'Française', 'Entrée', 15, 'Facile', 4, [
    ['sucrines', 3], ['avocat', 2], ['radis', 0.5], ['citron', 1], ['huile-olive', 3], ['ciboulette', 0.25, 'pc', 'opt'],
    ['sel', null], ['poivre', null]
  ], [
    'Couper les sucrines en quartiers dans la longueur, les rincer et bien les égoutter.',
    'Laver les radis et les couper en fines rondelles. Couper les avocats en lamelles et les arroser d’un peu de jus de citron.',
    'Fouetter le reste du jus de citron avec l’huile d’olive, du sel et du poivre.',
    'Disposer les sucrines, l’avocat et les radis dans les assiettes, arroser de sauce et parsemer de ciboulette ciselée.'
  ]);

  R('romaine-grillee-parmesan', 'Cœurs de romaine grillés au parmesan', 'Française', 'Entrée', 15, 'Facile', 4, [
    ['salade-romaine', 2], ['huile-olive', 3], ['parmesan', 40, 'g'], ['citron', 1], ['sel', null], ['poivre', null]
  ], [
    'Retirer les feuilles extérieures des romaines et couper les cœurs en deux dans la longueur, en gardant la base.',
    'Badigeonner la face coupée d’un peu d’huile d’olive et saler.',
    'Les saisir face coupée 2 à 3 min dans une poêle-gril à feu vif, jusqu’à ce qu’ils soient marqués mais encore croquants.',
    'Arroser du jus de citron fouetté avec le reste de l’huile, poivrer et couvrir de copeaux de parmesan.'
  ]);

  R('salade-daikon-carotte', 'Salade de daikon et carotte marinés', 'Japonaise', 'Entrée', 40, 'Facile', 4, [
    ['daikon', 0.5], ['carottes', 1], ['vinaigre-riz', 3], ['sucre', 15, 'g'], ['sel', 0.5, 'cc'], ['graines-sesame', 1, 'cs', 'opt']
  ], [
    'Éplucher le daikon et la carotte et les tailler en fine julienne.',
    'Les mélanger avec le sel et laisser dégorger 10 min, puis les presser entre les mains pour extraire l’eau.',
    'Mélanger le vinaigre de riz avec le sucre jusqu’à ce qu’il soit dissous.',
    'Verser sur les légumes et laisser mariner 20 min au réfrigérateur. Servir parsemé de sésame.'
  ]);

  R('edamame-sel-sesame', 'Edamame au sel et au sésame', 'Japonaise', 'Entrée', 15, 'Facile', 4, [
    ['edamame', 400, 'g'], ['fleur-de-sel', null], ['huile-sesame', 1, 'cc', 'opt'], ['graines-sesame', 1, 'cs', 'opt']
  ], [
    'Plonger les edamame encore surgelés dans une casserole d’eau bouillante salée et cuire 4 à 5 min à partir de la reprise de l’ébullition.',
    'Égoutter et mélanger aussitôt avec la fleur de sel, l’huile et les graines de sésame.',
    'Servir chaud ou tiède : on presse les cosses entre les dents pour en extraire les fèves.'
  ]);

  R('gyozas-poeles', 'Gyozas poêlés, sauce soja-vinaigre', 'Japonaise', 'Entrée', 15, 'Facile', 4, [
    ['gyozas', 20], ['huile', 1], ['sauce-soja', 3], ['vinaigre-riz', 2], ['huile-pimentee', 0.5, 'cc', 'opt']
  ], [
    'Chauffer l’huile dans une grande poêle antiadhésive à feu moyen et y ranger les gyozas encore surgelés, face plate dessous. Les laisser dorer 2 à 3 min.',
    'Verser 10 cl d’eau, couvrir aussitôt et cuire 6 à 7 min à feu moyen, jusqu’à ce que l’eau soit évaporée.',
    'Retirer le couvercle et laisser recroustiller 1 à 2 min à feu moyen, jusqu’à ce que le dessous soit bien doré.',
    'Mélanger la sauce soja avec le vinaigre de riz et l’huile pimentée, et servir en trempette.'
  ]);

  /* ───────────── Soupes (3 au total) ───────────── */

  R('veloute-potimarron-chataignes', 'Velouté de potimarron aux châtaignes', 'Française', 'Soupe', 45, 'Facile', 4, [
    ['potimarron', 1], ['chataignes', 200, 'g'], ['oignons', 1], ['beurre', 20, 'g'], ['bouillon', 1],
    ['creme-liquide', 10, 'cl', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Laver le potimarron (inutile de l’éplucher), le couper en deux, retirer les graines et tailler la chair en cubes.',
    'Faire fondre l’oignon émincé dans le beurre, 5 min à feu moyen.',
    'Ajouter le potimarron, 150 g de châtaignes, 1 L d’eau et le cube de bouillon. Porter à ébullition puis cuire 25 min à feu doux, à couvert, jusqu’à ce que le potimarron soit tendre.',
    'Mixer finement, ajouter la crème, saler et poivrer.',
    'Servir parsemé du reste des châtaignes émiettées et dorées à sec dans une poêle, 2 min à feu moyen.'
  ]);

  R('veloute-topinambours', 'Velouté de topinambours', 'Française', 'Soupe', 45, 'Facile', 4, [
    ['topinambours', 600, 'g'], ['pommes-de-terre', 200, 'g'], ['oignons', 1], ['beurre', 20, 'g'], ['bouillon', 1],
    ['lait', 20, 'cl'], ['creme-liquide', 10, 'cl', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Éplucher les topinambours et la pomme de terre à l’économe et les couper en morceaux.',
    'Faire fondre l’oignon émincé dans le beurre, 5 min à feu moyen.',
    'Ajouter les légumes, 80 cl d’eau et le cube de bouillon. Porter à ébullition puis cuire 25 min à feu doux, à couvert, jusqu’à ce que les légumes soient tendres.',
    'Mixer avec le lait et la crème, saler et poivrer. Servir bien chaud.'
  ]);

  R('potage-cresson', 'Potage au cresson', 'Française', 'Soupe', 40, 'Facile', 4, [
    ['cresson', 1], ['pommes-de-terre', 400, 'g'], ['oignons', 1], ['beurre', 20, 'g'], ['creme-fraiche', 10, 'cl'],
    ['sel', null], ['poivre', null]
  ], [
    'Trier le cresson en retirant les grosses tiges et le laver soigneusement. Réserver quelques feuilles.',
    'Faire fondre l’oignon émincé dans le beurre, 5 min à feu moyen.',
    'Ajouter les pommes de terre épluchées et coupées en dés, 1 L d’eau et du sel. Porter à ébullition puis cuire 20 min à feu doux, à couvert.',
    'Ajouter le cresson et cuire encore 5 min à feu doux : il doit rester bien vert.',
    'Mixer, incorporer la crème, poivrer et servir décoré des feuilles réservées.'
  ]);

  /* ───────────── Légumes : plats et accompagnements ───────────── */

  R('poelee-choux-bruxelles-chataignes', 'Poêlée de choux de Bruxelles aux châtaignes', 'Française', 'Plat', 40, 'Facile', 4, [
    ['choux-de-bruxelles', 600, 'g'], ['chataignes', 200, 'g'], ['lardons', 150, 'g'], ['beurre', 20, 'g'], ['sel', null], ['poivre', null]
  ], [
    'Parer les choux de Bruxelles en coupant la base et en retirant les feuilles abîmées, puis les couper en deux.',
    'Les blanchir 5 min dans une casserole d’eau bouillante salée et les égoutter.',
    'Faire revenir les lardons à sec dans une grande poêle, 5 min à feu moyen.',
    'Ajouter le beurre et les choux, face coupée dessous, et les laisser dorer 8 à 10 min à feu moyen en remuant de temps en temps.',
    'Ajouter les châtaignes, cuire encore 5 min à feu moyen pour les réchauffer, poivrer et saler légèrement.'
  ]);

  R('poelee-asperges-pois-gourmands-feves', 'Poêlée d’asperges, pois gourmands et fèves', 'Française', 'Accompagnement', 35, 'Facile', 4, [
    ['asperges-vertes', 400, 'g'], ['pois-gourmands', 200, 'g'], ['feves', 250, 'g'], ['beurre', 30, 'g'],
    ['menthe', 0.25, 'pc', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Plonger les fèves écossées 2 min dans une casserole d’eau bouillante salée, les rafraîchir dans de l’eau glacée puis retirer leur peau en les pinçant.',
    'Casser la base fibreuse des asperges et les couper en tronçons de 4 cm. Effiler les pois gourmands.',
    'Blanchir les asperges et les pois gourmands 3 min dans la même eau bouillante, puis les rafraîchir et les égoutter.',
    'Faire fondre le beurre dans une poêle à feu moyen et y faire sauter tous les légumes 3 à 4 min : ils doivent rester croquants.',
    'Saler, poivrer et parsemer de menthe ciselée.'
  ]);

  R('gratin-blettes', 'Gratin de blettes', 'Française', 'Plat', 60, 'Facile', 4, [
    ['blettes', 1000, 'g'], ['beurre', 30, 'g'], ['farine', 30, 'g'], ['lait', 40, 'cl'], ['fromage-rape', 80, 'g'],
    ['muscade', 1, 'pincee', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Séparer les côtes des feuilles. Effiler les côtes et les couper en tronçons de 2 cm, émincer les feuilles.',
    'Cuire les côtes 10 min dans une casserole d’eau bouillante salée, ajouter les feuilles pour les 2 dernières minutes. Égoutter en pressant bien les feuilles.',
    'Préchauffer le four à 200 °C. Pour la béchamel, faire fondre le beurre à feu moyen, ajouter la farine et remuer 1 min, puis verser le lait froid petit à petit en fouettant. Cuire 5 min à feu moyen jusqu’à ce qu’elle épaississe. Saler, poivrer, ajouter la muscade.',
    'Mélanger les blettes avec la béchamel, verser dans un plat à gratin et parsemer de fromage râpé.',
    'Enfourner 20 à 25 min à 200 °C, jusqu’à ce que le dessus soit doré.'
  ]);

  R('panais-rotis-miel', 'Panais rôtis au miel et au thym', 'Française', 'Accompagnement', 45, 'Facile', 4, [
    ['panais', 6], ['miel', 2], ['huile-olive', 2], ['thym', 3], ['sel', null], ['poivre', null]
  ], [
    'Préchauffer le four à 200 °C. Éplucher les panais et les couper en quatre dans la longueur ; retirer le cœur s’il est ligneux.',
    'Les mélanger sur une plaque avec l’huile d’olive, le thym, du sel et du poivre.',
    'Enfourner 25 min à 200 °C en les retournant à mi-cuisson.',
    'Arroser de miel, remuer et remettre au four 10 min à 200 °C, jusqu’à ce qu’ils soient tendres et caramélisés.'
  ]);

  R('courge-spaghetti-parmesan', 'Courge spaghetti au beurre et au parmesan', 'Française', 'Plat', 60, 'Facile', 4, [
    ['courge-spaghetti', 1], ['beurre', 40, 'g'], ['parmesan', 60, 'g'], ['ail', 1], ['persil', 0.25, 'pc', 'opt'],
    ['sel', null], ['poivre', null]
  ], [
    'Préchauffer le four à 200 °C. Couper la courge en deux dans la longueur et retirer les graines.',
    'La poser face coupée dessous sur une plaque couverte de papier cuisson et enfourner 40 à 45 min à 200 °C, jusqu’à ce que la chair se détache en filaments à la fourchette.',
    'Gratter la chair à la fourchette pour obtenir les « spaghettis ».',
    'Faire fondre le beurre dans une sauteuse avec l’ail haché, 1 min à feu doux, puis y mélanger les filaments 1 min. Saler, poivrer.',
    'Servir couvert de parmesan râpé et de persil ciselé.'
  ]);

  R('potimarron-roti', 'Potimarron rôti au cumin', 'Française', 'Accompagnement', 45, 'Facile', 4, [
    ['potimarron', 1], ['huile-olive', 3], ['cumin', 1], ['miel', 1, 'cs', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Préchauffer le four à 200 °C. Laver le potimarron sans l’éplucher, le couper en deux et retirer les graines.',
    'Le tailler en quartiers de 2 cm d’épaisseur et les mélanger avec l’huile, le cumin, le miel, du sel et du poivre.',
    'Les étaler sur une plaque et enfourner 30 à 35 min à 200 °C en les retournant à mi-cuisson, jusqu’à ce qu’ils soient tendres et dorés sur les bords.'
  ]);

  R('poelee-champignons-persillade', 'Poêlée de champignons en persillade', 'Française', 'Accompagnement', 25, 'Facile', 4, [
    ['melange-de-champignons', 600, 'g'], ['huile', 1], ['beurre', 30, 'g'], ['ail', 2], ['persil', 0.5], ['sel', null], ['poivre', null]
  ], [
    'Nettoyer les champignons avec une brosse ou un linge humide, sans les faire tremper, et couper les plus gros en morceaux.',
    'Chauffer l’huile dans une grande poêle à feu vif et y faire sauter les champignons en deux fois, 5 à 6 min par fournée, jusqu’à ce que leur eau soit évaporée et qu’ils soient dorés.',
    'Remettre tous les champignons dans la poêle, ajouter le beurre, l’ail et le persil hachés, et remuer 1 min à feu moyen.',
    'Saler, poivrer et servir aussitôt.'
  ]);

  R('poelee-girolles', 'Poêlée de girolles à l’échalote', 'Française', 'Accompagnement', 25, 'Facile', 4, [
    ['girolles', 500, 'g'], ['echalotes', 2], ['beurre', 40, 'g'], ['persil', 0.25], ['sel', null], ['poivre', null]
  ], [
    'Nettoyer les girolles au pinceau et couper le bout terreux des pieds.',
    'Les faire rendre leur eau 5 min dans une poêle à sec à feu moyen, puis les égoutter.',
    'Faire fondre le beurre dans la poêle, ajouter les échalotes ciselées et les faire suer 2 min à feu doux.',
    'Remettre les girolles et les faire sauter 5 min à feu vif, jusqu’à ce qu’elles soient dorées.',
    'Saler, poivrer, parsemer de persil ciselé et servir aussitôt.'
  ]);

  R('cepes-bordelaise', 'Cèpes à la bordelaise', 'Française', 'Plat', 30, 'Facile', 4, [
    ['cepes', 600, 'g'], ['echalotes', 2], ['ail', 2], ['persil', 0.5], ['huile-olive', 3], ['sel', null], ['poivre', null]
  ], [
    'Nettoyer les cèpes avec un linge humide et gratter les pieds. Séparer les têtes des pieds.',
    'Couper les têtes en tranches d’1 cm et hacher finement les pieds avec les échalotes, l’ail et le persil.',
    'Chauffer l’huile dans une grande poêle à feu vif et y saisir les têtes 5 à 6 min en les retournant, jusqu’à ce qu’elles soient bien dorées.',
    'Baisser à feu moyen, ajouter le hachis et cuire encore 3 min en remuant.',
    'Saler, poivrer et servir aussitôt.'
  ]);

  R('tartines-pleurotes-chevre', 'Tartines de pleurotes au chèvre frais', 'Française', 'Entrée', 20, 'Facile', 4, [
    ['pleurotes', 300, 'g'], ['pain', 4], ['chevre-frais', 120, 'g'], ['beurre', 20, 'g'], ['ail', 1],
    ['thym-frais', 2, 'pc', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Effilocher les pleurotes en lanières à la main.',
    'Les faire sauter dans le beurre 5 min à feu vif, jusqu’à ce qu’elles soient dorées. Ajouter l’ail haché, remuer 1 min, saler et poivrer.',
    'Pendant ce temps, faire griller les tranches de pain 2 à 3 min au grille-pain, jusqu’à ce qu’elles soient dorées.',
    'Tartiner le pain de chèvre frais, répartir les pleurotes chaudes et parsemer de thym.'
  ]);

  R('nouilles-shiitakes', 'Nouilles sautées aux shiitakes', 'Chinoise', 'Plat', 25, 'Facile', 4, [
    ['nouilles', 300, 'g'], ['shiitakes', 250, 'g'], ['ail', 2], ['gingembre', 15, 'g'], ['sauce-soja', 3], ['huile', 2],
    ['huile-sesame', 1, 'cc'], ['ciboule', 0.5], ['sauce-huitre', 1, 'cs', 'opt']
  ], [
    'Cuire les nouilles 4 à 5 min dans une casserole d’eau bouillante (ou selon le paquet), les égoutter et les rincer à l’eau froide.',
    'Retirer les pieds durs des shiitakes et émincer les chapeaux.',
    'Chauffer l’huile dans un wok à feu vif et y faire sauter les shiitakes 3 à 4 min.',
    'Ajouter l’ail et le gingembre hachés et remuer 30 s.',
    'Ajouter les nouilles, la sauce soja et la sauce d’huître, et faire sauter 2 min à feu vif. Arroser d’huile de sésame et parsemer de ciboule émincée.'
  ]);

  R('epis-mais-grilles', 'Épis de maïs grillés au beurre', 'Américaine', 'Accompagnement', 30, 'Facile', 4, [
    ['mais', 4], ['beurre', 40, 'g'], ['paprika-fume', 0.5, 'cc', 'opt'], ['fleur-de-sel', null]
  ], [
    'Retirer les feuilles et les barbes des épis.',
    'Les cuire 10 min dans une grande casserole d’eau bouillante non salée (le sel durcit les grains), puis les égoutter.',
    'Les griller 8 à 10 min dans une poêle-gril ou au barbecue à feu vif, en les retournant, jusqu’à ce qu’ils soient marqués.',
    'Badigeonner de beurre fondu, parsemer de fleur de sel et de paprika fumé.'
  ]);

  R('saumon-oseille', 'Saumon à l’oseille', 'Française', 'Plat', 30, 'Moyenne', 4, [
    ['saumon', 4], ['oseille', 1], ['echalotes', 2], ['vin-blanc', 10, 'cl'], ['creme-liquide', 20, 'cl'], ['beurre', 20, 'g'],
    ['huile', 1], ['sel', null], ['poivre', null]
  ], [
    'Équeuter l’oseille, la laver et la ciseler grossièrement.',
    'Faire suer les échalotes ciselées dans le beurre, 2 min à feu doux. Verser le vin blanc et laisser réduire presque à sec, 3 à 4 min à feu vif.',
    'Ajouter la crème et laisser réduire 3 min à feu moyen, jusqu’à ce qu’elle nappe la cuillère. Ajouter l’oseille et cuire 1 min : elle fond et prend une couleur kaki, c’est normal. Saler, poivrer.',
    'Chauffer l’huile dans une poêle à feu moyen et cuire les pavés côté peau 4 à 5 min, puis 1 à 2 min de l’autre côté : le cœur doit rester rosé. Saler.',
    'Servir le saumon nappé de sauce à l’oseille.'
  ]);

  R('alloco', 'Alloco (bananes plantains frites)', 'Africaine', 'Accompagnement', 25, 'Facile', 4, [
    ['bananes-plantains', 4], ['huile', 50, 'cl'], ['sel', null], ['piment', 1, 'pincee', 'opt']
  ], [
    'Choisir des bananes plantains bien mûres, à la peau noircie. Couper les extrémités, inciser la peau dans la longueur et la retirer.',
    'Couper les bananes en tronçons de 1,5 cm, en biais.',
    'Chauffer l’huile à 170 °C dans une sauteuse et y frire les bananes en plusieurs fois, 3 à 4 min par fournée en les retournant, jusqu’à ce qu’elles soient bien dorées.',
    'Égoutter sur du papier absorbant, saler et relever d’une pincée de piment.'
  ]);

  R('salsifis-persilles', 'Salsifis sautés au beurre persillé', 'Française', 'Accompagnement', 60, 'Facile', 4, [
    ['salsifis', 1000, 'g'], ['citron', 1], ['farine', 20, 'g'], ['beurre', 40, 'g'], ['persil', 0.5], ['sel', null], ['poivre', null]
  ], [
    'Avec des gants, éplucher les salsifis à l’économe, les couper en tronçons de 5 cm et les plonger au fur et à mesure dans de l’eau additionnée de la moitié du jus de citron pour qu’ils ne noircissent pas.',
    'Délayer la farine dans 1,5 L d’eau froide, ajouter le reste du jus de citron et du sel, et porter à ébullition en remuant.',
    'Y cuire les salsifis 20 à 25 min à feu moyen, à petits bouillons, jusqu’à ce qu’ils soient tendres à la pointe du couteau, puis les égoutter.',
    'Les faire dorer dans le beurre 8 à 10 min à feu moyen. Poivrer et parsemer de persil haché.'
  ]);

  R('romanesco-beurre-noisette', 'Chou romanesco au beurre noisette', 'Française', 'Accompagnement', 25, 'Facile', 4, [
    ['chou-romanesco', 1], ['beurre', 40, 'g'], ['amandes-effilees', 30, 'g', 'opt'], ['citron', 0.5, 'pc', 'opt'],
    ['sel', null], ['poivre', null]
  ], [
    'Détailler le chou romanesco en bouquets et les rincer.',
    'Les cuire 8 à 10 min à la vapeur, jusqu’à ce qu’ils soient tendres mais encore fermes.',
    'Faire fondre le beurre dans une poêle à feu moyen et le laisser mousser 3 à 4 min, jusqu’à ce qu’il prenne une couleur noisette et une odeur de noisette grillée.',
    'Ajouter le romanesco et les amandes, faire sauter 1 min à feu moyen. Saler, poivrer et arroser d’un filet de jus de citron.'
  ]);

  R('haricots-beurre-tomate', 'Haricots beurre à la tomate', 'Française', 'Accompagnement', 40, 'Facile', 4, [
    ['haricots-beurre', 600, 'g'], ['tomates', 4], ['oignons', 1], ['ail', 2], ['huile-olive', 2], ['thym', 2, 'pc', 'opt'],
    ['sel', null], ['poivre', null]
  ], [
    'Équeuter les haricots et les cuire 8 à 10 min dans une casserole d’eau bouillante salée : ils doivent être tendres. Les égoutter.',
    'Faire revenir l’oignon émincé dans l’huile, 5 min à feu moyen, puis ajouter l’ail haché et remuer 30 s.',
    'Ajouter les tomates coupées en dés et le thym, et cuire 10 min à feu moyen, jusqu’à ce qu’elles soient compotées.',
    'Ajouter les haricots et laisser mijoter 5 min à feu doux. Saler et poivrer.'
  ]);

  R('cocos-paimpol-thym', 'Cocos de Paimpol mijotés au thym', 'Française', 'Accompagnement', 50, 'Facile', 4, [
    ['cocos-de-paimpol', 1000, 'g'], ['carottes', 1], ['oignons', 1], ['ail', 2], ['thym', 3], ['laurier', 1], ['huile-olive', 2],
    ['sel', null], ['poivre', null]
  ], [
    'Écosser les cocos.',
    'Faire revenir l’oignon et la carotte coupés en petits dés dans 1 cuillerée d’huile, 5 min à feu moyen.',
    'Ajouter les cocos, l’ail écrasé, le thym et le laurier, et couvrir d’eau à hauteur plus 2 cm. Porter à ébullition, sans saler.',
    'Laisser mijoter 30 à 35 min à feu doux, à couvert, jusqu’à ce que les cocos soient fondants.',
    'Hors du feu, saler, poivrer et arroser du reste de l’huile d’olive.'
  ]);

  R('pates-pesto-ail-des-ours', 'Pâtes au pesto d’ail des ours', 'Italienne', 'Plat', 25, 'Facile', 4, [
    ['pates', 400, 'g'], ['ail-des-ours', 1], ['parmesan', 50, 'g'], ['pignons', 30, 'g'], ['huile-olive', 8], ['sel', null], ['poivre', null]
  ], [
    'Laver et sécher soigneusement l’ail des ours.',
    'Faire griller les pignons à sec 2 min dans une poêle à feu moyen.',
    'Mixer l’ail des ours avec les pignons, le parmesan, l’huile d’olive et une pincée de sel jusqu’à obtenir une pâte.',
    'Cuire les pâtes 10 à 12 min (selon le paquet, al dente) dans une grande casserole d’eau bouillante salée et réserver une louche d’eau de cuisson.',
    'Hors du feu, mélanger les pâtes avec le pesto et un peu de l’eau réservée pour le rendre onctueux. Poivrer et servir.'
  ]);

  /* ───────────── Surgelés ───────────── */

  R('epinards-creme', 'Épinards à la crème', 'Française', 'Accompagnement', 20, 'Facile', 4, [
    ['epinards-surgeles', 600, 'g'], ['creme-fraiche', 15, 'cl'], ['beurre', 20, 'g'], ['muscade', 1, 'pincee', 'opt'],
    ['sel', null], ['poivre', null]
  ], [
    'Mettre les épinards surgelés dans une sauteuse avec le beurre et les faire décongeler à feu moyen, 8 à 10 min en remuant, jusqu’à ce que leur eau soit évaporée.',
    'Ajouter la crème et laisser mijoter 3 min à feu doux.',
    'Saler, poivrer et ajouter la muscade.'
  ]);

  R('poelee-legumes-saucisses', 'Poêlée de légumes aux saucisses', 'Française', 'Plat', 30, 'Facile', 4, [
    ['poelee-de-legumes', 750, 'g'], ['saucisses', 4], ['huile', 1], ['herbes-provence', 1, 'cc', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Cuire les saucisses dans l’huile, 15 min à feu moyen en les retournant régulièrement. Les réserver.',
    'Verser la poêlée de légumes encore surgelée dans la graisse de cuisson et la cuire 10 à 12 min à feu vif en remuant, jusqu’à ce que les légumes soient tendres et légèrement dorés.',
    'Couper les saucisses en rondelles, les remettre dans la poêle avec les herbes et réchauffer 2 min à feu moyen. Saler et poivrer.'
  ]);

  R('poisson-pane-frites', 'Poisson pané et frites au four', 'Française', 'Plat', 35, 'Facile', 4, [
    ['poisson-pane', 4], ['frites-surgelees', 800, 'g'], ['citron', 1], ['mayonnaise', 4, 'cs', 'opt']
  ], [
    'Préchauffer le four à 220 °C. Étaler les frites en une seule couche sur une plaque couverte de papier cuisson.',
    'Enfourner 25 min à 220 °C en les retournant à mi-cuisson.',
    'Au bout de 5 min, enfourner aussi les filets de poisson pané, encore surgelés, sur une seconde plaque et les cuire 20 min à 220 °C, en les retournant à mi-cuisson.',
    'Servir avec des quartiers de citron et un peu de mayonnaise.'
  ]);

  R('wraps-nuggets', 'Wraps aux nuggets de poulet', 'Américaine', 'Plat', 25, 'Facile', 4, [
    ['nuggets-de-poulet', 400, 'g'], ['tortillas', 4], ['salade', 0.5], ['tomates', 2], ['sauce-blanche', 4],
    ['cheddar', 4, 'pc', 'opt']
  ], [
    'Préchauffer le four à 200 °C et y cuire les nuggets 12 à 15 min, en les retournant à mi-cuisson.',
    'Pendant ce temps, émincer la salade et couper les tomates en rondelles.',
    'Réchauffer les tortillas 20 s de chaque côté dans une poêle sèche, à feu moyen.',
    'Tartiner chaque tortilla de sauce, garnir de salade, de tomates, de cheddar et de nuggets coupés en deux, puis rouler bien serré.'
  ]);

  R('gratin-pommes-noisettes-reblochon', 'Gratin de pommes noisettes au reblochon', 'Française', 'Plat', 45, 'Facile', 4, [
    ['pommes-noisettes', 750, 'g'], ['reblochon', 0.5], ['lardons', 150, 'g'], ['oignons', 1], ['creme-fraiche', 10, 'cl'], ['poivre', null]
  ], [
    'Préchauffer le four à 200 °C.',
    'Faire revenir les lardons et l’oignon émincé à sec, 8 min à feu moyen.',
    'Étaler les pommes noisettes encore surgelées dans un plat à gratin, répartir les lardons et l’oignon, puis la crème. Poivrer.',
    'Couvrir de tranches de reblochon, croûte vers le haut.',
    'Enfourner 30 min à 200 °C, jusqu’à ce que le fromage soit fondu et le dessus doré.'
  ]);

  R('potatoes-sauce-herbes', 'Potatoes au four, sauce fromage blanc aux herbes', 'Française', 'Plat', 35, 'Facile', 4, [
    ['potatoes', 800, 'g'], ['fromage-blanc', 200, 'g'], ['ciboulette', 0.5], ['ail', 1], ['citron', 0.5, 'pc', 'opt'],
    ['sel', null], ['poivre', null]
  ], [
    'Préchauffer le four à 220 °C. Étaler les potatoes en une seule couche sur une plaque et enfourner 25 min en les retournant à mi-cuisson.',
    'Pendant ce temps, mélanger le fromage blanc avec la ciboulette ciselée, l’ail râpé et le jus de citron. Saler, poivrer et réserver au frais.',
    'Servir les potatoes bien croustillantes avec la sauce.'
  ]);

  R('linguine-fruits-de-mer', 'Linguine aux fruits de mer', 'Italienne', 'Plat', 35, 'Facile', 4, [
    ['linguine', 350, 'g'], ['cocktail-de-fruits-de-mer', 400, 'g'], ['tomates-cerises', 250, 'g'], ['ail', 3], ['vin-blanc', 10, 'cl'],
    ['huile-olive', 3], ['persil', 0.5], ['piment', 1, 'pincee', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Décongeler les fruits de mer la veille au réfrigérateur (non compté), ou 20 min dans une passoire sous l’eau froide, puis bien les égoutter et les sécher.',
    'Cuire les linguine 9 à 11 min (selon le paquet, al dente) dans une grande casserole d’eau bouillante salée et réserver une louche d’eau de cuisson.',
    'Pendant ce temps, chauffer l’huile dans une sauteuse avec l’ail émincé et le piment, 1 min à feu moyen. Ajouter les tomates cerises coupées en deux et cuire 3 min.',
    'Verser le vin blanc et laisser réduire 2 min à feu vif, puis ajouter les fruits de mer et cuire 3 à 4 min à feu vif, sans plus, pour qu’ils restent tendres.',
    'Ajouter les linguine et un peu de l’eau réservée, mélanger 1 min à feu moyen, poivrer et parsemer de persil haché.'
  ]);
};
