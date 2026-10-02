/* Recettes simples ajoutées en 0.9 (même format que recettes.js). */
'use strict';

module.exports = function ajouter(R) {

  /* ───────────── Petits-déjeuners et céréales ───────────── */

  R('porridge-sirop-erable', 'Porridge au sirop d’érable', 'Anglaise', 'Dessert', 10, 'Facile', 2, [
    ['flocons-d-avoine', 80, 'g'], ['lait', 40, 'cl'], ['sirop-d-erable', 2, 'cs'], ['sel', 1, 'pincee'],
    ['bananes', 1, 'pc', 'opt'], ['cannelle', 0.5, 'cc', 'opt']
  ], [
    'Verser les flocons d’avoine, le lait et le sel dans une casserole.',
    'Porter à frémissement à feu moyen, puis cuire 4 à 5 min à feu doux en remuant sans arrêt, jusqu’à ce que le porridge soit crémeux et épaissi.',
    'Répartir dans deux bols, arroser de sirop d’érable, poser la banane coupée en rondelles et saupoudrer de cannelle.'
  ]);

  R('overnight-oats-chia', 'Overnight oats aux graines de chia', 'Américaine', 'Dessert', 10, 'Facile', 2, [
    ['flocons-d-avoine', 80, 'g'], ['graines-de-chia', 20, 'g'], ['lait', 20, 'cl'], ['yaourt', 1],
    ['miel', 2, 'cs'], ['fruits-rouges-surgeles', 100, 'g', 'opt']
  ], [
    'La veille (repos non compté) : mélanger dans un saladier les flocons d’avoine, les graines de chia, le lait, le yaourt et le miel.',
    'Répartir dans deux bocaux, fermer et laisser gonfler une nuit au réfrigérateur.',
    'Le matin, remuer, détendre avec un peu de lait si besoin et garnir de fruits rouges.'
  ]);

  R('bol-muesli-yaourt', 'Bol de muesli au yaourt et à la pomme', 'Suisse', 'Dessert', 5, 'Facile', 2, [
    ['muesli', 80, 'g'], ['yaourt', 2], ['pommes', 1], ['miel', 1, 'cs', 'opt']
  ], [
    'Râper la pomme avec la peau, ou la couper en petits dés.',
    'Mélanger le muesli avec les yaourts et la pomme, puis laisser gonfler 2 à 3 min.',
    'Répartir dans deux bols et arroser d’un filet de miel.'
  ]);

  R('granola-erable', 'Granola maison au sirop d’érable', 'Américaine', 'Dessert', 40, 'Facile', 6, [
    ['flocons-d-avoine', 250, 'g'], ['noisettes', 80, 'g'], ['graines-de-courge', 40, 'g'], ['sirop-d-erable', 5, 'cs'],
    ['huile', 3, 'cs'], ['sel', 1, 'pincee'], ['cannelle', 1, 'cc', 'opt']
  ], [
    'Préchauffer le four à 160 °C. Concasser grossièrement les noisettes.',
    'Mélanger dans un saladier les flocons, les noisettes, les graines de courge, le sel et la cannelle, puis ajouter le sirop d’érable et l’huile et bien enrober.',
    'Étaler en couche fine sur une plaque couverte de papier cuisson.',
    'Cuire 20 à 25 min au four à 160 °C en remuant à mi-cuisson, jusqu’à ce que le granola soit doré.',
    'Laisser refroidir complètement sur la plaque : il durcit en refroidissant. Se conserve 2 semaines en bocal.'
  ]);

  R('cookies-avoine-cranberries', 'Cookies à l’avoine et aux cranberries', 'Américaine', 'Dessert', 35, 'Facile', 6, [
    ['flocons-d-avoine', 120, 'g'], ['farine', 100, 'g'], ['beurre', 100, 'g'], ['sucre-roux', 90, 'g'], ['oeufs', 1],
    ['cranberries-sechees', 80, 'g'], ['levure-chimique', 0.5], ['sel', 1, 'pincee']
  ], [
    'Préchauffer le four à 180 °C. Faire fondre le beurre 1 à 2 min à feu doux.',
    'Fouetter le beurre fondu avec le sucre roux, puis ajouter l’œuf.',
    'Incorporer la farine, la levure, le sel et les flocons, puis les cranberries.',
    'Former une douzaine de boules, les aplatir légèrement sur une plaque couverte de papier cuisson en les espaçant.',
    'Cuire 10 à 12 min au four à 180 °C : les bords doivent être dorés et le centre encore tendre. Laisser raffermir 10 min sur la plaque.'
  ]);

  /* ───────────── Céréales, féculents et légumineuses ───────────── */

  R('salade-quinoa-feta', 'Salade de quinoa, concombre et feta', 'Française', 'Entrée', 40, 'Facile', 4, [
    ['quinoa', 200, 'g'], ['concombre', 1], ['tomates-cerises', 200, 'g'], ['feta', 150, 'g'], ['citron', 1],
    ['huile-olive', 3, 'cs'], ['menthe', 0.5, 'pc', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Rincer le quinoa, le mettre dans une casserole avec deux fois son volume d’eau salée (40 cl), porter à ébullition, puis cuire 12 à 15 min à feu doux, à couvert, jusqu’à absorption : le germe se détache. L’étaler et laisser refroidir 15 min.',
    'Couper le concombre en dés, les tomates cerises en deux et émietter la feta.',
    'Fouetter le jus du citron avec l’huile d’olive, du sel et du poivre.',
    'Mélanger le quinoa, les légumes, la feta, la menthe ciselée et la vinaigrette. Servir frais.'
  ]);

  R('orzo-facon-risotto', 'Orzo façon risotto au parmesan', 'Italienne', 'Plat', 25, 'Facile', 4, [
    ['orzo', 300, 'g'], ['echalotes', 2], ['beurre', 30, 'g'], ['bouillon', 1], ['parmesan', 60, 'g'],
    ['vin-blanc', 10, 'cl', 'opt'], ['poivre', null]
  ], [
    'Délayer le cube de bouillon dans 90 cl d’eau chaude.',
    'Émincer les échalotes et les faire fondre 3 min dans la moitié du beurre à feu moyen.',
    'Ajouter l’orzo et le nacrer 1 min à feu moyen en remuant, puis déglacer au vin blanc et laisser évaporer 1 min.',
    'Verser le bouillon en deux fois et cuire 10 à 12 min à feu doux en remuant souvent, jusqu’à ce que l’orzo soit tendre et crémeux.',
    'Hors du feu, incorporer le reste du beurre et le parmesan râpé. Poivrer et servir aussitôt.'
  ]);

  R('riz-complet-saute-legumes', 'Riz complet sauté aux légumes et à l’œuf', 'Chinoise', 'Plat', 50, 'Facile', 4, [
    ['riz-complet', 250, 'g'], ['carottes', 2], ['courgettes', 1], ['oeufs', 3], ['sauce-soja', 3, 'cs'],
    ['huile', 2, 'cs'], ['sel', null], ['ciboule', 0.25, 'pc', 'opt']
  ], [
    'Cuire le riz complet 30 à 35 min dans une grande casserole d’eau bouillante salée, puis l’égoutter et l’étaler pour qu’il sèche un peu.',
    'Couper les carottes et la courgette en petits dés.',
    'Dans une grande poêle ou un wok, faire sauter les légumes 5 min dans l’huile à feu vif.',
    'Pousser les légumes sur le côté, casser les œufs dans la poêle et les brouiller 1 min à feu vif, jusqu’à ce qu’ils soient juste pris.',
    'Ajouter le riz et la sauce soja, faire sauter 3 min à feu vif en remuant. Parsemer de ciboule émincée.'
  ]);

  R('soupe-pois-casses', 'Soupe de pois cassés', 'Française', 'Soupe', 75, 'Facile', 4, [
    ['pois-casses', 250, 'g'], ['carottes', 2], ['oignons', 1], ['bouillon', 1], ['lardons', 100, 'g', 'opt'],
    ['creme-fraiche', 5, 'cl', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Rincer les pois cassés. Éplucher et couper les carottes et l’oignon en morceaux.',
    'Mettre le tout dans une casserole avec 1,2 L d’eau et le cube de bouillon. Porter à ébullition à feu vif, écumer, puis cuire 1 h à feu doux à couvert, jusqu’à ce que les pois s’écrasent.',
    'Mixer finement, en ajoutant un peu d’eau si la soupe est trop épaisse. Saler et poivrer.',
    'Faire dorer les lardons à sec 5 min à la poêle à feu moyen et les parsemer sur les bols, avec une cuillerée de crème.'
  ]);

  R('lentilles-beluga-carottes-rotie', 'Lentilles beluga aux carottes rôties', 'Française', 'Entrée', 40, 'Facile', 4, [
    ['lentilles-beluga', 200, 'g'], ['carottes', 4], ['graines-de-courge', 30, 'g'], ['echalotes', 1],
    ['huile-olive', 4, 'cs'], ['vinaigre-balsamique', 2, 'cs'], ['cumin', 0.5, 'cc', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Préchauffer le four à 200 °C. Couper les carottes en bâtonnets, les mélanger avec 2 cs d’huile, le cumin et du sel, et les rôtir 25 min au four à 200 °C en les retournant à mi-cuisson, jusqu’à ce qu’elles soient tendres et dorées.',
    'Pendant ce temps, cuire les lentilles 20 à 25 min dans l’eau frémissante non salée, puis les égoutter et les saler.',
    'Faire griller les graines de courge 2 min à sec dans une poêle à feu moyen, jusqu’à ce qu’elles gonflent.',
    'Fouetter le reste d’huile avec le vinaigre et l’échalote ciselée, puis mélanger avec les lentilles tièdes.',
    'Disposer les carottes par-dessus, parsemer de graines de courge et poivrer.'
  ]);

  R('salade-haricots-noirs-mais', 'Salade de haricots noirs et maïs', 'Mexicaine', 'Entrée', 15, 'Facile', 4, [
    ['haricots-noirs', 400, 'g'], ['mais-doux', 150, 'g'], ['poivrons-rouges', 1], ['oignon-rouge', 0.5], ['citron-vert', 2],
    ['huile-olive', 3, 'cs'], ['coriandre', 0.5, 'pc', 'opt'], ['cumin', 0.5, 'cc', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Rincer et égoutter les haricots noirs (en boîte, déjà cuits) et le maïs.',
    'Couper le poivron en petits dés et émincer finement l’oignon rouge.',
    'Fouetter le jus des citrons verts avec l’huile, le cumin, du sel et du poivre.',
    'Mélanger le tout avec la coriandre ciselée et laisser reposer 5 min avant de servir.'
  ]);

  R('tacos-croustillants-haricots-noirs', 'Tacos croustillants aux haricots noirs', 'Mexicaine', 'Plat', 20, 'Facile', 4, [
    ['coques-a-tacos', 8], ['haricots-noirs', 400, 'g'], ['laitue', 0.5], ['tomates', 2], ['fromage-rape', 100, 'g'],
    ['cumin', 1, 'cc'], ['huile', 1, 'cs'], ['sauce-salsa', 4, 'cs', 'opt'], ['creme-fraiche', 10, 'cl', 'opt'], ['sel', null]
  ], [
    'Préchauffer le four à 180 °C. Rincer et égoutter les haricots noirs (en boîte, déjà cuits).',
    'Les faire chauffer 5 min dans l’huile à feu moyen avec le cumin et une pincée de sel, en les écrasant à moitié à la fourchette.',
    'Réchauffer les coques 3 à 4 min au four à 180 °C, jusqu’à ce qu’elles soient croustillantes.',
    'Émincer la laitue et couper les tomates en dés.',
    'Garnir chaque coque de haricots, de fromage râpé, de laitue et de tomates. Servir avec la salsa et la crème.'
  ]);

  R('gratin-puree-jambon', 'Gratin de purée au jambon', 'Française', 'Plat', 30, 'Facile', 4, [
    ['puree-de-pommes-de-terre-en-flocons', 125, 'g'], ['lait', 25, 'cl'], ['beurre', 30, 'g'], ['jambon', 4],
    ['fromage-rape', 80, 'g'], ['muscade', 1, 'pincee', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Préchauffer le four à 200 °C.',
    'Porter à frémissement 50 cl d’eau salée avec le lait, à feu moyen (4 à 5 min). Hors du feu, verser les flocons en pluie, remuer à la fourchette sans fouetter, puis ajouter le beurre, la muscade et du poivre.',
    'Couper le jambon en lanières et le mélanger à la purée avec la moitié du fromage.',
    'Verser dans un plat à gratin beurré et couvrir du reste de fromage.',
    'Gratiner 15 min au four à 200 °C, jusqu’à ce que le dessus soit bien doré.'
  ]);

  R('pancakes-farine-complete', 'Pancakes à la farine complète', 'Américaine', 'Dessert', 35, 'Facile', 4, [
    ['farine-complete', 200, 'g'], ['oeufs', 2], ['lait', 25, 'cl'], ['sucre', 20, 'g'], ['levure-chimique', 1],
    ['beurre', 30, 'g'], ['sel', 1, 'pincee'], ['sirop-d-erable', 4, 'cs', 'opt']
  ], [
    'Faire fondre le beurre 1 min à feu doux. Mélanger la farine complète, la levure, le sucre et le sel.',
    'Ajouter les œufs et le lait, fouetter juste assez pour obtenir une pâte épaisse, puis incorporer le beurre fondu. Laisser reposer 10 min.',
    'Cuire des petites louches de pâte dans une poêle légèrement beurrée à feu moyen : 2 min sur la première face, jusqu’à ce que des bulles apparaissent en surface, puis 1 min sur la seconde.',
    'Servir chaud, arrosé de sirop d’érable.'
  ]);

  R('moelleux-farine-riz-citron', 'Moelleux au citron à la farine de riz', 'Française', 'Dessert', 45, 'Facile', 6, [
    ['farine-de-riz', 150, 'g'], ['oeufs', 3], ['sucre', 130, 'g'], ['beurre', 100, 'g'], ['citron', 1], ['levure-chimique', 1]
  ], [
    'Préchauffer le four à 180 °C. Beurrer un moule à manqué de 22 cm. Faire fondre le beurre 1 à 2 min à feu doux.',
    'Fouetter les œufs et le sucre jusqu’à ce que le mélange blanchisse.',
    'Ajouter le zeste et le jus du citron, le beurre fondu, puis la farine de riz et la levure.',
    'Verser dans le moule et cuire 25 à 30 min au four à 180 °C : la lame d’un couteau doit ressortir sèche. Sans gluten si la levure l’est aussi.'
  ]);

  R('pain-de-mais', 'Pain de maïs (cornbread)', 'Américaine', 'Accompagnement', 40, 'Facile', 6, [
    ['farine-de-mais', 150, 'g'], ['farine', 100, 'g'], ['oeufs', 2], ['lait', 25, 'cl'], ['beurre', 60, 'g'],
    ['sucre', 30, 'g'], ['levure-chimique', 1], ['sel', 2, 'pincee']
  ], [
    'Préchauffer le four à 200 °C. Beurrer un moule carré de 20 cm. Faire fondre le beurre 1 à 2 min à feu doux.',
    'Mélanger les deux farines, le sucre, la levure et le sel.',
    'Fouetter les œufs avec le lait et le beurre fondu, puis verser sur les ingrédients secs et mélanger sans trop travailler.',
    'Verser dans le moule et cuire 20 à 25 min au four à 200 °C, jusqu’à ce que le dessus soit doré et qu’une lame ressorte sèche.',
    'Servir tiède, en carrés, avec un chili ou des haricots.'
  ]);

  R('aiguillettes-poulet-panko', 'Aiguillettes de poulet croustillantes au panko', 'Japonaise', 'Plat', 25, 'Facile', 4, [
    ['aiguillettes-de-poulet', 600, 'g'], ['panko', 100, 'g'], ['farine', 50, 'g'], ['oeufs', 2], ['huile', 6, 'cs'],
    ['sel', null], ['poivre', null], ['mayonnaise-japonaise', 4, 'cs', 'opt'], ['citron', 1, 'pc', 'opt']
  ], [
    'Saler et poivrer les aiguillettes. Préparer trois assiettes : la farine, les œufs battus, le panko.',
    'Passer chaque aiguillette dans la farine, puis dans l’œuf, puis dans le panko en appuyant pour bien le faire adhérer.',
    'Chauffer l’huile dans une grande poêle à feu moyen-vif et cuire les aiguillettes 3 min par face, en plusieurs fois, jusqu’à ce qu’elles soient bien dorées et cuites à cœur.',
    'Égoutter sur du papier absorbant et servir avec la mayonnaise et des quartiers de citron.'
  ]);

  R('pates-champignons-jambon-creme', 'Pâtes crème, jambon et champignons', 'Française', 'Plat', 20, 'Facile', 4, [
    ['pates', 400, 'g'], ['champignons-de-paris-en-conserve', 230, 'g'], ['des-de-jambon', 150, 'g'], ['creme-fraiche', 20, 'cl'],
    ['echalotes', 1], ['beurre', 15, 'g'], ['fromage-rape', 50, 'g', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Cuire les pâtes dans une grande casserole d’eau bouillante salée, 10 à 12 min selon le paquet : elles doivent rester al dente.',
    'Pendant ce temps, égoutter les champignons. Faire fondre l’échalote émincée 2 min dans le beurre à feu moyen, puis ajouter les champignons et les faire dorer 5 min.',
    'Ajouter les dés de jambon et la crème, poivrer et laisser frémir 2 min à feu doux.',
    'Égoutter les pâtes, les mélanger à la sauce et servir avec le fromage râpé.'
  ]);

  R('ble-courgettes-chorizo', 'Blé aux courgettes et au chorizo', 'Française', 'Plat', 25, 'Facile', 4, [
    ['ble-precuit', 250, 'g'], ['courgettes', 2], ['chorizo', 100, 'g'], ['oignons', 1], ['bouillon', 1], ['huile-olive', 1, 'cs'],
    ['sel', null], ['poivre', null]
  ], [
    'Délayer le cube de bouillon dans 60 cl d’eau chaude. Couper le chorizo en petits dés et les courgettes en cubes, émincer l’oignon.',
    'Faire revenir le chorizo 2 min dans l’huile à feu moyen, puis ajouter l’oignon et les courgettes et cuire 5 min à feu moyen en remuant.',
    'Ajouter le blé, remuer 1 min, puis verser le bouillon et porter à ébullition.',
    'Couvrir et cuire 10 à 12 min à feu doux, jusqu’à ce que le blé ait absorbé le liquide. Rectifier l’assaisonnement.'
  ]);

  R('pois-chiches-tomate-epinards', 'Pois chiches mijotés à la tomate et aux épinards', 'Maghrébine', 'Plat', 120, 'Facile', 4, [
    ['pois-chiches-secs', 250, 'g'], ['tomates-concassees', 400, 'g'], ['epinards', 200, 'g'], ['oignons', 1], ['ail', 2],
    ['cumin', 1, 'cc'], ['huile-olive', 2, 'cs'], ['bicarbonate-de-soude', 0.5, 'cc', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'La veille (non compté) : faire tremper les pois chiches 12 h dans un grand volume d’eau froide, avec le bicarbonate.',
    'Les égoutter, les couvrir largement d’eau froide non salée, porter à ébullition et cuire 1 h 15 à 1 h 30 à feu doux, à couvert, jusqu’à ce qu’ils soient fondants. Saler en fin de cuisson et égoutter.',
    'Faire fondre l’oignon émincé 5 min dans l’huile à feu moyen, ajouter l’ail haché et le cumin, remuer 1 min, puis verser les tomates.',
    'Ajouter les pois chiches et laisser mijoter 15 min à feu doux.',
    'Incorporer les épinards et cuire 2 à 3 min à feu doux, jusqu’à ce qu’ils tombent. Saler et poivrer.'
  ]);

  R('tagliatelles-cepes-seches', 'Tagliatelles aux cèpes séchés et à la crème', 'Italienne', 'Plat', 40, 'Facile', 4, [
    ['tagliatelles', 400, 'g'], ['cepes-seches', 30, 'g'], ['echalotes', 2], ['creme-liquide', 20, 'cl'], ['beurre', 20, 'g'],
    ['parmesan', 40, 'g', 'opt'], ['persil', 0.25, 'pc', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Faire tremper les cèpes 20 min dans 25 cl d’eau chaude. Les égoutter en gardant l’eau de trempage, les rincer et les hacher grossièrement.',
    'Faire fondre les échalotes émincées 3 min dans le beurre à feu moyen, ajouter les cèpes et les faire revenir 3 min.',
    'Verser 10 cl d’eau de trempage filtrée et laisser réduire de moitié 2 à 3 min à feu vif, puis ajouter la crème et laisser frémir 3 min à feu doux. Saler et poivrer.',
    'Cuire les tagliatelles 8 à 10 min (selon le paquet, al dente) dans une grande casserole d’eau bouillante salée, les égoutter et les mélanger à la sauce.',
    'Servir avec le parmesan râpé et le persil ciselé.'
  ]);

  R('pommes-de-terre-sarladaises', 'Pommes de terre sarladaises', 'Française', 'Accompagnement', 40, 'Facile', 4, [
    ['pommes-de-terre', 1000, 'g'], ['graisse-de-canard', 3, 'cs'], ['ail', 3], ['persil', 0.5, 'pc'], ['sel', null], ['poivre', null]
  ], [
    'Éplucher les pommes de terre, les couper en rondelles de 5 mm, les rincer et bien les sécher dans un torchon.',
    'Chauffer la graisse de canard 1 min dans une grande poêle à feu moyen-vif, y mettre les pommes de terre et les faire dorer 10 min en les retournant.',
    'Couvrir et cuire 15 min à feu moyen, en remuant de temps en temps.',
    'Découvrir et poursuivre 5 min à feu vif pour qu’elles soient croustillantes et tendres à la pointe du couteau.',
    'Ajouter l’ail et le persil hachés, remuer 1 min à feu doux sans laisser brunir l’ail, saler et poivrer.'
  ]);

  R('marrons-poeles-lardons', 'Marrons poêlés aux lardons', 'Française', 'Accompagnement', 20, 'Facile', 4, [
    ['marrons-cuits', 400, 'g'], ['lardons', 150, 'g'], ['echalotes', 2], ['beurre', 20, 'g'], ['persil', 0.25, 'pc', 'opt'], ['poivre', null]
  ], [
    'Faire dorer les lardons à sec 5 min à feu moyen, puis les réserver.',
    'Dans la même poêle, faire fondre les échalotes émincées 3 min dans le beurre à feu moyen.',
    'Ajouter les marrons et les faire dorer 8 min à feu moyen en remuant délicatement pour ne pas les briser.',
    'Remettre les lardons, poivrer, parsemer de persil ciselé et servir avec une volaille ou un rôti.'
  ]);

  R('cannellonis-ricotta-epinards', 'Cannellonis ricotta et épinards', 'Italienne', 'Plat', 70, 'Moyenne', 4, [
    ['cannellonis', 200, 'g'], ['ricotta', 250, 'g'], ['epinards-surgeles', 400, 'g'], ['coulis-tomate', 50, 'cl'],
    ['parmesan', 60, 'g'], ['ail', 1], ['huile-olive', 1, 'cs'], ['muscade', 1, 'pincee', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Préchauffer le four à 180 °C. Faire décongeler les épinards 8 à 10 min à la poêle à feu moyen, jusqu’à évaporation de l’eau, puis les presser pour retirer toute l’eau.',
    'Mélanger les épinards avec la ricotta, la moitié du parmesan, la muscade, du sel et du poivre.',
    'Chauffer le coulis 5 min à feu moyen avec l’huile, l’ail écrasé et 15 cl d’eau (les pâtes crues boivent beaucoup), saler. En étaler un tiers au fond d’un plat.',
    'Farcir les cannellonis crus à la petite cuillère ou à la poche, les ranger dans le plat et les napper du reste de sauce : ils doivent être entièrement couverts.',
    'Parsemer du reste de parmesan, couvrir d’aluminium et cuire 30 min au four à 180 °C, puis 10 min à découvert, jusqu’à ce que les pâtes soient tendres à la pointe du couteau et le dessus doré.'
  ]);

  R('pates-coeurs-artichaut', 'Pâtes aux cœurs d’artichaut, citron et parmesan', 'Italienne', 'Plat', 20, 'Facile', 4, [
    ['pates', 400, 'g'], ['coeurs-d-artichaut', 250, 'g'], ['citron', 1], ['ail', 2], ['parmesan', 60, 'g'],
    ['huile-olive', 4, 'cs'], ['sel', null], ['poivre', null]
  ], [
    'Cuire les pâtes 10 à 12 min (selon le paquet, al dente) dans une grande casserole d’eau bouillante salée. Garder une louche d’eau de cuisson.',
    'Égoutter les cœurs d’artichaut et les couper en quartiers.',
    'Les faire dorer 5 min dans l’huile à feu moyen, puis ajouter l’ail émincé et cuire 1 min à feu doux sans le colorer.',
    'Hors du feu, ajouter les pâtes égouttées, le zeste et le jus du citron, le parmesan râpé et un peu d’eau de cuisson. Mélanger pour lier, poivrer et servir.'
  ]);

  R('vermicelles-au-lait', 'Vermicelles au lait', 'Française', 'Dessert', 20, 'Facile', 4, [
    ['vermicelles', 80, 'g'], ['lait', 75, 'cl'], ['sucre', 60, 'g'], ['sucre-vanille', 1], ['cannelle', 0.5, 'cc', 'opt']
  ], [
    'Porter le lait à ébullition avec le sucre et le sucre vanillé, à feu moyen.',
    'Verser les vermicelles en pluie en remuant et cuire 8 à 10 min à feu doux, en remuant souvent pour qu’ils n’attachent pas.',
    'Verser dans des coupelles et saupoudrer de cannelle. Se déguste tiède ou froid (il épaissit en refroidissant).'
  ]);

  /* ───────────── Entrées et apéritifs ───────────── */

  R('dip-crabe-crackers', 'Dip au crabe et crackers', 'Américaine', 'Entrée', 10, 'Facile', 4, [
    ['chair-de-crabe', 150, 'g'], ['fromage-frais-a-tartiner', 150, 'g'], ['citron', 0.5], ['crackers', 150, 'g'],
    ['ciboulette', 0.5, 'pc', 'opt'], ['piment', 1, 'pincee', 'opt'], ['poivre', null]
  ], [
    'Égoutter la chair de crabe et l’émietter en retirant les éventuels cartilages.',
    'Mélanger le fromage frais avec le jus du demi-citron, puis incorporer le crabe et la ciboulette ciselée.',
    'Poivrer, ajouter le piment et réserver au frais jusqu’au service.',
    'Servir dans un bol, entouré de crackers.'
  ]);

  R('tartinade-maquereau-citron', 'Tartinade de maquereau au citron', 'Française', 'Entrée', 10, 'Facile', 4, [
    ['maquereaux-en-boite', 220, 'g'], ['fromage-frais-a-tartiner', 100, 'g'], ['citron', 0.5], ['moutarde', 1, 'cs'],
    ['pain', 8], ['ciboulette', 0.5, 'pc', 'opt'], ['poivre', null]
  ], [
    'Égoutter les maquereaux, retirer la peau et les arêtes visibles.',
    'Les écraser à la fourchette avec le fromage frais, la moutarde et le jus du demi-citron.',
    'Ajouter la ciboulette ciselée et poivrer généreusement.',
    'Faire griller les tranches de pain 2 à 3 min au grille-pain ou sous le gril du four, jusqu’à ce qu’elles soient dorées, et les tartiner.'
  ]);

  R('torsades-feuilletees-tapenade', 'Torsades feuilletées à la tapenade', 'Française', 'Entrée', 30, 'Facile', 6, [
    ['pate-feuilletee', 1], ['tapenade', 100, 'g'], ['oeufs', 1], ['parmesan', 30, 'g', 'opt']
  ], [
    'Préchauffer le four à 200 °C.',
    'Dérouler la pâte, étaler la tapenade sur une moitié et saupoudrer de parmesan. Replier l’autre moitié par-dessus et appuyer légèrement.',
    'Couper des bandes de 1,5 cm, les torsader et les poser sur une plaque couverte de papier cuisson.',
    'Dorer à l’œuf battu et cuire 12 à 15 min au four à 200 °C, jusqu’à ce qu’elles soient bien dorées. Servir tiède à l’apéritif.'
  ]);

  R('biscottes-avocat-oeuf', 'Biscottes à l’avocat et à l’œuf mollet', 'Française', 'Entrée', 15, 'Facile', 2, [
    ['biscottes', 4], ['avocat', 1], ['oeufs', 2], ['citron', 0.5], ['piment', 1, 'pincee', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Plonger les œufs dans l’eau bouillante et les cuire 6 min à petits bouillons (jaune coulant), puis les rafraîchir dans l’eau froide et les écaler.',
    'Écraser la chair de l’avocat avec le jus du demi-citron, du sel et du poivre.',
    'Tartiner les biscottes d’avocat juste avant de servir, pour qu’elles restent croustillantes.',
    'Couper les œufs en deux, les poser dessus et saupoudrer de piment.'
  ]);

  R('salade-verte-croutons-oeuf', 'Salade verte aux croûtons et à l’œuf mollet', 'Française', 'Entrée', 15, 'Facile', 4, [
    ['laitue', 1], ['croutons', 60, 'g'], ['oeufs', 4], ['moutarde', 1, 'cs'], ['vinaigre', 1, 'cs'], ['huile', 3, 'cs'],
    ['echalotes', 1, 'pc', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Cuire les œufs 6 min dans l’eau bouillante, à petits bouillons (jaune coulant), puis les rafraîchir à l’eau froide et les écaler.',
    'Laver et essorer la laitue.',
    'Dans le saladier, fouetter la moutarde, le vinaigre, du sel et du poivre, puis l’huile et l’échalote ciselée.',
    'Mélanger la salade à la vinaigrette au moment de servir, ajouter les croûtons et les œufs coupés en deux.'
  ]);

  R('cake-tomates-sechees-feta', 'Cake aux tomates séchées et à la feta', 'Française', 'Entrée', 60, 'Facile', 6, [
    ['farine', 180, 'g'], ['oeufs', 3], ['lait', 10, 'cl'], ['huile-olive', 8, 'cs'], ['levure-chimique', 1],
    ['tomates-sechees', 100, 'g'], ['feta', 150, 'g'], ['basilic', 0.5, 'pc', 'opt'], ['poivre', null]
  ], [
    'Préchauffer le four à 180 °C. Huiler un moule à cake.',
    'Égoutter les tomates séchées et les couper en morceaux. Couper la feta en dés.',
    'Fouetter les œufs, puis ajouter la farine et la levure, le lait et l’huile. Poivrer (la feta est salée).',
    'Incorporer les tomates, la feta et le basilic ciselé. Verser dans le moule.',
    'Cuire 40 à 45 min au four à 180 °C, jusqu’à ce qu’une lame ressorte sèche. Laisser tiédir 10 min avant de démouler.'
  ]);

  R('salade-coeurs-palmier-avocat', 'Salade de cœurs de palmier, avocat et crevettes', 'Antillaise', 'Entrée', 15, 'Facile', 4, [
    ['coeurs-de-palmier', 400, 'g'], ['avocat', 2], ['crevettes', 200, 'g'], ['tomates-cerises', 150, 'g'], ['citron-vert', 1],
    ['huile-olive', 3, 'cs'], ['coriandre', 0.25, 'pc', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Égoutter les cœurs de palmier et les couper en rondelles. Couper les avocats en dés et les tomates cerises en deux.',
    'Fouetter le jus du citron vert avec l’huile, du sel et du poivre.',
    'Mélanger délicatement les légumes et les crevettes (cuites et décortiquées) avec la vinaigrette et la coriandre ciselée. Servir bien frais.'
  ]);

  /* ───────────── Plats ───────────── */

  R('tajine-agneau-abricots-secs', 'Tajine d’agneau aux abricots secs', 'Maghrébine', 'Plat', 115, 'Facile', 4, [
    ['agneau', 800, 'g'], ['abricots-secs', 150, 'g'], ['oignons', 2], ['ras-el-hanout', 2, 'cc'], ['miel', 1, 'cs'],
    ['huile-olive', 2, 'cs'], ['amandes', 50, 'g', 'opt'], ['coriandre', 0.25, 'pc', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Faire dorer les morceaux d’agneau 5 min dans l’huile à feu vif, dans une cocotte ou un tajine.',
    'Ajouter les oignons émincés et le ras el hanout, saler, poivrer et cuire 5 min à feu moyen.',
    'Verser 40 cl d’eau, porter à frémissement, couvrir et laisser mijoter 1 h à feu doux.',
    'Ajouter les abricots secs et le miel et poursuivre 30 min à feu doux, à demi couvert, jusqu’à ce que la viande soit fondante et la sauce nappante.',
    'Faire griller les amandes 3 min à sec dans une poêle à feu moyen et les parsemer sur le tajine avec la coriandre.'
  ]);

  R('poulet-orange-miel', 'Cuisses de poulet à l’orange et au miel', 'Française', 'Plat', 55, 'Facile', 4, [
    ['cuisses-poulet', 4], ['jus-d-orange', 25, 'cl'], ['miel', 2, 'cs'], ['sauce-soja', 2, 'cs'], ['ail', 2],
    ['oranges', 1, 'pc', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Préchauffer le four à 200 °C. Poser les cuisses de poulet dans un plat, saler et poivrer.',
    'Mélanger le jus d’orange, le miel, la sauce soja et l’ail écrasé, et verser sur le poulet. Ajouter l’orange en rondelles.',
    'Cuire 45 min au four à 200 °C en arrosant toutes les 15 min, jusqu’à ce que la peau soit laquée et que le jus qui s’écoule de la viande soit clair.',
    'Si la sauce est trop liquide, la faire réduire 5 min à feu vif dans une casserole avant de napper.'
  ]);

  /* ───────────── Desserts ───────────── */

  R('gateau-pate-a-tartiner', 'Gâteau deux ingrédients à la pâte à tartiner', 'Française', 'Dessert', 40, 'Facile', 6, [
    ['pate-a-tartiner', 250, 'g'], ['oeufs', 4], ['beurre', 5, 'g']
  ], [
    'Préchauffer le four à 180 °C. Beurrer un moule de 18 à 20 cm et le chemiser de papier cuisson.',
    'Tiédir la pâte à tartiner 20 s au micro-ondes pour la détendre.',
    'Fouetter les œufs au batteur 6 à 8 min, jusqu’à ce qu’ils triplent de volume.',
    'Incorporer la pâte à tartiner en trois fois, délicatement à la maryse, pour ne pas faire retomber les œufs.',
    'Verser dans le moule et cuire 20 à 25 min au four à 180 °C : le centre doit être juste pris. Laisser refroidir avant de démouler.'
  ]);

  R('mousse-chocolat-lait', 'Mousse au chocolat au lait', 'Française', 'Dessert', 200, 'Facile', 4, [
    ['chocolat-au-lait', 150, 'g'], ['oeufs', 4], ['creme-liquide', 10, 'cl'], ['sel', 1, 'pincee']
  ], [
    'Faire fondre le chocolat avec la crème 5 min au bain-marie, sur une eau à peine frémissante (feu doux), lisser et laisser tiédir 5 min.',
    'Séparer les blancs des jaunes et incorporer les jaunes un à un dans le chocolat.',
    'Monter les blancs en neige ferme avec le sel.',
    'Incorporer un tiers des blancs vivement, puis le reste délicatement à la maryse, en soulevant la masse.',
    'Répartir dans des verrines et réserver au moins 3 h au réfrigérateur.'
  ]);

  R('fondant-chocolat-blanc', 'Fondant au chocolat blanc', 'Française', 'Dessert', 45, 'Facile', 6, [
    ['chocolat-blanc', 200, 'g'], ['beurre', 100, 'g'], ['oeufs', 3], ['sucre', 60, 'g'], ['farine', 60, 'g']
  ], [
    'Préchauffer le four à 160 °C. Beurrer un moule de 20 cm et le chemiser de papier cuisson.',
    'Faire fondre le chocolat blanc avec le beurre 5 à 6 min au bain-marie, à feu très doux (il brûle facilement), puis lisser.',
    'Fouetter les œufs et le sucre, ajouter le chocolat fondu, puis la farine.',
    'Verser dans le moule et cuire 25 min au four à 160 °C : le dessus doit être à peine doré et le centre encore tremblotant.',
    'Laisser refroidir complètement avant de démouler : il se raffermit en refroidissant.'
  ]);

  R('muffins-pepites-chocolat', 'Muffins aux pépites de chocolat', 'Américaine', 'Dessert', 35, 'Facile', 6, [
    ['farine', 250, 'g'], ['sucre', 120, 'g'], ['oeufs', 2], ['lait', 15, 'cl'], ['beurre', 100, 'g'], ['levure-chimique', 1],
    ['pepites-de-chocolat', 120, 'g'], ['sel', 1, 'pincee']
  ], [
    'Préchauffer le four à 180 °C. Garnir un moule à muffins de 12 caissettes. Faire fondre le beurre 1 à 2 min à feu doux.',
    'Mélanger la farine, la levure, le sucre, le sel et les trois quarts des pépites.',
    'Fouetter les œufs avec le lait et le beurre fondu, puis verser sur les ingrédients secs et mélanger à peine : la pâte doit rester grumeleuse.',
    'Remplir les caissettes aux trois quarts et parsemer du reste des pépites.',
    'Cuire 20 à 22 min au four à 180 °C, jusqu’à ce que les muffins soient bombés et dorés.'
  ]);

  R('creme-dessert-chocolat', 'Crème dessert au chocolat', 'Française', 'Dessert', 130, 'Facile', 4, [
    ['lait', 50, 'cl'], ['chocolat-en-poudre', 60, 'g'], ['maizena', 30, 'g'], ['sucre', 20, 'g']
  ], [
    'Dans une casserole, mélanger à froid la maïzena, le chocolat en poudre et le sucre, puis délayer avec un peu de lait pour éviter les grumeaux. Ajouter le reste du lait.',
    'Porter à ébullition à feu moyen sans cesser de fouetter (5 min environ), puis cuire 1 min à feu doux, jusqu’à ce que la crème épaississe.',
    'Verser dans des ramequins, filmer au contact et réserver 2 h au réfrigérateur.'
  ]);

  R('panna-cotta-coco-mangue', 'Panna cotta coco-mangue à l’agar-agar', 'Thaïlandaise', 'Dessert', 140, 'Facile', 4, [
    ['lait-coco', 40, 'cl'], ['creme-liquide', 10, 'cl'], ['sucre', 50, 'g'], ['agar-agar', 2, 'g'], ['mangues', 1]
  ], [
    'Mélanger le lait de coco, la crème, le sucre et l’agar-agar dans une casserole.',
    'Porter à ébullition à feu moyen en fouettant (4 à 5 min) et laisser bouillir 1 à 2 min à feu doux : l’agar-agar doit bouillir pour prendre.',
    'Verser dans quatre verrines et laisser prendre 2 h au réfrigérateur.',
    'Mixer la chair de la mangue en coulis, ou la couper en petits dés, et en couvrir les panna cotta au moment de servir.'
  ]);

  R('rochers-coco', 'Rochers à la noix de coco', 'Française', 'Dessert', 30, 'Facile', 6, [
    ['noix-de-coco-rapee', 200, 'g'], ['lait-concentre-sucre', 200, 'g'], ['oeufs', 1]
  ], [
    'Préchauffer le four à 180 °C. Couvrir une plaque de papier cuisson.',
    'Mélanger la noix de coco, le lait concentré et le blanc d’œuf (garder le jaune pour une autre recette).',
    'Former une vingtaine de petites pyramides avec les doigts humides et les poser sur la plaque.',
    'Cuire 12 à 15 min au four à 180 °C, jusqu’à ce que les pointes soient dorées. Laisser refroidir sur la plaque.'
  ]);

  R('truffes-chocolat-blanc-coco', 'Truffes au chocolat blanc et à la noix de coco', 'Française', 'Dessert', 150, 'Facile', 6, [
    ['chocolat-blanc', 200, 'g'], ['creme-liquide', 8, 'cl'], ['noix-de-coco-rapee', 60, 'g']
  ], [
    'Porter la crème à frémissement à feu moyen (1 à 2 min) et la verser sur le chocolat blanc haché. Attendre 1 min, puis mélanger jusqu’à obtenir une ganache lisse.',
    'Ajouter 20 g de noix de coco, filmer et réserver 2 h au réfrigérateur, jusqu’à ce que la ganache soit ferme.',
    'Former des petites boules entre les paumes et les rouler dans le reste de noix de coco.',
    'Garder au frais jusqu’au service.'
  ]);

  R('coupe-glacee-caramel-pecan', 'Coupe glacée caramel, pécan et crêpes dentelle', 'Française', 'Dessert', 10, 'Facile', 4, [
    ['glace-a-la-vanille', 0.5], ['caramel', 100, 'g'], ['noix-de-pecan', 50, 'g'], ['crepes-dentelle', 8],
    ['creme-liquide', 10, 'cl', 'opt']
  ], [
    'Faire griller les noix de pécan 3 min à sec dans une poêle à feu moyen, puis les concasser.',
    'Tiédir le caramel 20 s au micro-ondes pour le rendre coulant.',
    'Répartir des boules de glace dans quatre coupes, napper de caramel et parsemer de noix de pécan.',
    'Émietter grossièrement une crêpe dentelle par coupe et planter la seconde entière. Ajouter un peu de crème fouettée si on le souhaite.'
  ]);

  R('tiramisu-petits-beurre', 'Tiramisu aux petits-beurre', 'Italienne', 'Dessert', 260, 'Facile', 6, [
    ['petits-beurre', 20], ['mascarpone', 250, 'g'], ['oeufs', 3], ['sucre', 70, 'g'], ['cafe', 25, 'cl'],
    ['cacao-en-poudre', 10, 'g']
  ], [
    'Préparer le café et le laisser refroidir.',
    'Fouetter les jaunes avec le sucre jusqu’à ce qu’ils blanchissent, puis incorporer le mascarpone.',
    'Monter les blancs en neige ferme et les incorporer délicatement à la crème.',
    'Tremper rapidement les petits-beurre dans le café et en tapisser le fond d’un plat. Couvrir de la moitié de la crème, puis recommencer.',
    'Réserver au moins 4 h au réfrigérateur. Saupoudrer de cacao juste avant de servir.'
  ]);

  R('gateau-compote', 'Gâteau moelleux à la compote', 'Française', 'Dessert', 50, 'Facile', 6, [
    ['compote', 300, 'g'], ['farine', 200, 'g'], ['oeufs', 2], ['sucre', 80, 'g'], ['levure-chimique', 1],
    ['cannelle', 1, 'cc', 'opt']
  ], [
    'Préchauffer le four à 180 °C. Chemiser un moule à manqué de 22 cm de papier cuisson.',
    'Fouetter les œufs avec le sucre, puis ajouter la compote.',
    'Incorporer la farine, la levure et la cannelle, sans trop travailler.',
    'Verser dans le moule et cuire 35 min au four à 180 °C, jusqu’à ce qu’une lame ressorte sèche. La compote remplace le beurre et garde le gâteau moelleux.'
  ]);

  R('clafoutis-fruits-sirop', 'Clafoutis aux fruits au sirop', 'Française', 'Dessert', 55, 'Facile', 6, [
    ['fruits-au-sirop', 500, 'g'], ['oeufs', 3], ['sucre', 70, 'g'], ['farine', 60, 'g'], ['lait', 25, 'cl'], ['beurre', 10, 'g']
  ], [
    'Préchauffer le four à 180 °C. Beurrer un plat à gratin.',
    'Égoutter soigneusement les fruits (poires, pêches ou abricots) et les couper en morceaux s’ils sont gros. Les répartir dans le plat.',
    'Fouetter les œufs et le sucre, ajouter la farine, puis le lait, pour obtenir une pâte lisse.',
    'Verser sur les fruits et cuire 35 à 40 min au four à 180 °C, jusqu’à ce que le clafoutis soit doré et pris. Servir tiède ou froid.'
  ]);

  R('energy-balls-dattes-noisettes', 'Energy balls aux dattes et noisettes', 'Américaine', 'Dessert', 45, 'Facile', 6, [
    ['dattes', 200, 'g'], ['noisettes', 100, 'g'], ['cacao-en-poudre', 15, 'g'], ['noix-de-coco-rapee', 30, 'g', 'opt']
  ], [
    'Dénoyauter les dattes. Si elles sont sèches, les faire tremper 10 min dans l’eau chaude, puis les égoutter.',
    'Mixer les noisettes en poudre grossière, puis ajouter les dattes et le cacao et mixer jusqu’à obtenir une pâte qui se tient.',
    'Former une vingtaine de boules et les rouler dans la noix de coco.',
    'Réserver 30 min au réfrigérateur pour les raffermir.'
  ]);

  R('figues-sechees-porto', 'Figues sèches pochées au porto', 'Française', 'Dessert', 35, 'Facile', 4, [
    ['figues-seches', 250, 'g'], ['porto', 25, 'cl'], ['miel', 1, 'cs'], ['cannelle', 0.5, 'cc', 'opt'], ['yaourt-grec', 300, 'g', 'opt']
  ], [
    'Mettre les figues dans une casserole avec le porto, 15 cl d’eau, le miel et la cannelle.',
    'Porter à frémissement à feu moyen, puis cuire 20 à 25 min à feu doux, à découvert, jusqu’à ce que les figues soient gonflées et le sirop réduit de moitié.',
    'Servir tiède ou froid, avec du yaourt grec.'
  ]);

  R('sables-noisette', 'Sablés à la noisette', 'Française', 'Dessert', 70, 'Facile', 6, [
    ['farine', 150, 'g'], ['poudre-de-noisette', 75, 'g'], ['beurre', 110, 'g'], ['sucre', 70, 'g'], ['oeufs', 1], ['sel', 1, 'pincee']
  ], [
    'Mélanger la farine, la poudre de noisette, le sucre et le sel. Ajouter le beurre froid en dés et sabler du bout des doigts.',
    'Ajouter le jaune d’œuf et rassembler en boule sans trop pétrir. Réserver 30 min au réfrigérateur.',
    'Préchauffer le four à 180 °C. Étaler la pâte sur 4 mm entre deux feuilles de papier cuisson et découper des sablés.',
    'Poser les sablés sur une plaque et cuire 10 à 12 min au four à 180 °C, jusqu’à ce que les bords soient dorés. Laisser refroidir sur une grille.'
  ]);

  R('dattes-fourrees-pate-amande', 'Dattes fourrées à la pâte d’amande', 'Maghrébine', 'Dessert', 15, 'Facile', 6, [
    ['dattes', 250, 'g'], ['pate-d-amande', 150, 'g'], ['cerneaux-de-noix', 30, 'g', 'opt']
  ], [
    'Fendre les dattes sur la longueur et retirer le noyau.',
    'Rouler la pâte d’amande en petits boudins de la taille d’un noyau.',
    'En garnir chaque datte, refermer légèrement et décorer d’un morceau de cerneau de noix.'
  ]);

  R('cake-fruits-confits', 'Cake aux fruits confits', 'Française', 'Dessert', 75, 'Facile', 8, [
    ['farine', 200, 'g'], ['beurre', 125, 'g'], ['sucre', 125, 'g'], ['oeufs', 3], ['levure-chimique', 0.5],
    ['fruits-confits', 150, 'g'], ['raisins-secs', 50, 'g', 'opt'], ['rhum', 3, 'cl', 'opt']
  ], [
    'Faire macérer les fruits confits et les raisins 15 min dans le rhum, pendant la préparation. Préchauffer le four à 170 °C et beurrer un moule à cake.',
    'Travailler le beurre mou avec le sucre jusqu’à obtenir une crème, puis ajouter les œufs un à un.',
    'Incorporer la farine et la levure. Égoutter les fruits, les rouler dans une cuillerée de farine pour qu’ils ne tombent pas au fond, et les ajouter.',
    'Verser dans le moule et cuire 50 min à 1 h au four à 170 °C, jusqu’à ce qu’une lame ressorte sèche. Couvrir d’aluminium si le dessus colore trop vite.'
  ]);

  R('eton-mess', 'Eton mess aux fraises', 'Anglaise', 'Dessert', 15, 'Facile', 4, [
    ['fraises', 400, 'g'], ['meringues', 8], ['creme-liquide', 25, 'cl'], ['sucre-glace', 20, 'g']
  ], [
    'Équeuter les fraises et les couper en morceaux. En écraser un quart à la fourchette.',
    'Fouetter la crème bien froide avec le sucre glace en chantilly souple.',
    'Concasser grossièrement les meringues.',
    'Mélanger délicatement la chantilly, les fraises et les meringues, et servir aussitôt en verrines pour garder le croustillant.'
  ]);

  R('mendiants-chocolat', 'Mendiants au chocolat', 'Française', 'Dessert', 40, 'Facile', 6, [
    ['chocolat-noir', 150, 'g'], ['noisettes', 30, 'g'], ['abricots-secs', 30, 'g'], ['cranberries-sechees', 20, 'g'],
    ['pistaches', 20, 'g', 'opt']
  ], [
    'Couper les abricots secs en petits morceaux.',
    'Faire fondre le chocolat 5 min au bain-marie, à feu doux, en remuant jusqu’à ce qu’il soit lisse.',
    'Déposer des petits disques de chocolat de 4 cm sur une feuille de papier cuisson avec une cuillère.',
    'Avant qu’ils ne durcissent, poser sur chacun une noisette, un morceau d’abricot, une cranberry et une pistache.',
    'Laisser durcir 30 min au frais.'
  ]);

  /* ───────────── Épicerie du monde ───────────── */

  R('curry-jaune-poulet-coco', 'Curry jaune de poulet à la crème de coco', 'Thaïlandaise', 'Plat', 40, 'Facile', 4, [
    ['poulet', 600, 'g'], ['pate-de-curry-jaune', 2, 'cs'], ['creme-de-coco', 40, 'cl'], ['pommes-de-terre', 400, 'g'], ['oignons', 1],
    ['huile', 1, 'cs'], ['sauce-poisson', 1, 'cs'], ['sucre', 5, 'g'], ['riz', 300, 'g', 'opt']
  ], [
    'Couper le poulet en morceaux, les pommes de terre en cubes de 2 cm et l’oignon en lamelles.',
    'Faire revenir la pâte de curry 1 min dans l’huile avec 5 cl de crème de coco à feu moyen, jusqu’à ce qu’elle embaume.',
    'Ajouter le poulet et l’oignon et les enrober 3 min à feu moyen.',
    'Verser le reste de crème de coco, 15 cl d’eau et les pommes de terre. Porter à frémissement, puis laisser mijoter 20 min à feu doux, à couvert, jusqu’à ce que les pommes de terre soient tendres à la pointe du couteau.',
    'Assaisonner de sauce poisson et de sucre. Servir avec le riz, cuit à part 10 à 12 min dans l’eau bouillante.'
  ]);

  R('poulet-saute-hoisin', 'Poulet sauté à la sauce hoisin', 'Chinoise', 'Plat', 25, 'Facile', 4, [
    ['poulet', 500, 'g'], ['sauce-hoisin', 4, 'cs'], ['poivrons', 2], ['oignons', 1], ['ail', 2], ['sauce-soja', 1, 'cs'],
    ['huile', 2, 'cs'], ['graines-sesame', 1, 'cs', 'opt'], ['riz', 300, 'g', 'opt']
  ], [
    'Couper le poulet en lamelles, les poivrons et l’oignon en lanières.',
    'Faire sauter le poulet 5 min dans l’huile à feu vif dans un wok, jusqu’à ce qu’il soit doré, puis le réserver.',
    'Faire sauter les légumes et l’ail émincé 4 min à feu vif : ils doivent rester croquants.',
    'Remettre le poulet, ajouter la sauce hoisin, la sauce soja et 3 cs d’eau, et faire sauter 1 min à feu vif pour laquer.',
    'Parsemer de sésame et servir avec le riz, cuit à part 10 à 12 min dans l’eau bouillante.'
  ]);

  R('saumon-sweet-chili', 'Saumon laqué à la sauce sweet chili', 'Thaïlandaise', 'Plat', 20, 'Facile', 4, [
    ['saumon', 4], ['sauce-sweet-chili', 4, 'cs'], ['sauce-soja', 1, 'cs'], ['citron-vert', 1], ['coriandre', 0.25, 'pc', 'opt']
  ], [
    'Préchauffer le four à 200 °C. Mélanger la sauce sweet chili, la sauce soja et le jus du citron vert.',
    'Poser les pavés de saumon dans un plat et les badigeonner de sauce.',
    'Cuire 10 à 12 min au four à 200 °C, jusqu’à ce que le saumon soit laqué et se détache en lamelles, encore rosé à cœur.',
    'Parsemer de coriandre et servir avec du riz ou des légumes sautés.'
  ]);

  R('makis-concombre-avocat', 'Makis concombre-avocat', 'Japonaise', 'Plat', 75, 'Moyenne', 4, [
    ['riz-japonais', 300, 'g'], ['vinaigre-riz', 4, 'cs'], ['sucre', 20, 'g'], ['sel', 2, 'pincee'], ['feuilles-de-nori', 4],
    ['concombre', 0.5], ['avocat', 1], ['sauce-soja', 4, 'cs'], ['wasabi', 1, 'cc'], ['gingembre-marine', 40, 'g']
  ], [
    'Rincer le riz jusqu’à ce que l’eau soit claire. Le cuire à couvert dans 36 cl d’eau : porter à ébullition à feu moyen, puis 12 min à feu très doux et 10 min de repos hors du feu, sans soulever le couvercle.',
    'Dissoudre le sucre et le sel dans le vinaigre de riz, verser sur le riz chaud et mélanger à la spatule en le soulevant. Laisser refroidir 20 min à température ambiante.',
    'Couper le concombre et l’avocat en bâtonnets. Couper les feuilles de nori en deux.',
    'Poser une demi-feuille sur une natte, face brillante dessous. L’étaler d’une fine couche de riz avec les mains humides, en laissant 1 cm libre en haut. Placer une rangée de légumes au centre.',
    'Rouler en serrant avec la natte et coller le bord avec un peu d’eau. Couper chaque rouleau en 6 avec un couteau humide.',
    'Servir avec la sauce soja, le wasabi et le gingembre mariné.'
  ]);

  R('onigiris-thon-mayonnaise', 'Onigiris au thon mayonnaise', 'Japonaise', 'Entrée', 50, 'Facile', 4, [
    ['riz-japonais', 300, 'g'], ['feuilles-de-nori', 2], ['thon-boite', 140, 'g'], ['mayonnaise', 2, 'cs'], ['sel', 2, 'pincee'],
    ['sauce-soja', 1, 'cc', 'opt']
  ], [
    'Rincer le riz jusqu’à ce que l’eau soit claire, puis le cuire à couvert dans 36 cl d’eau : porter à ébullition à feu moyen, 12 min à feu très doux, puis 10 min de repos hors du feu, sans soulever le couvercle. Le laisser tiédir 10 min.',
    'Égoutter le thon et le mélanger avec la mayonnaise et la sauce soja.',
    'Les mains mouillées et légèrement salées, prendre une boule de riz, creuser le centre, y mettre une cuillerée de thon et refermer.',
    'Presser en triangle, puis entourer la base d’une bande de nori (un quart de feuille). Déguster rapidement pour que le nori reste croustillant.'
  ]);

  R('nouilles-soba-sautees', 'Nouilles soba sautées aux légumes', 'Japonaise', 'Plat', 25, 'Facile', 4, [
    ['nouilles-soba', 300, 'g'], ['carottes', 2], ['poivrons', 1], ['champignons', 200, 'g'], ['sauce-soja', 4, 'cs'],
    ['huile-sesame', 1, 'cs'], ['huile', 1, 'cs'], ['ciboule', 0.25, 'pc', 'opt'], ['graines-sesame', 1, 'cs', 'opt']
  ], [
    'Cuire les soba 4 à 5 min dans une grande casserole d’eau bouillante non salée, puis les rincer à l’eau froide pour retirer l’amidon et les égoutter.',
    'Couper les carottes et le poivron en fins bâtonnets et émincer les champignons.',
    'Faire sauter les légumes 5 min dans l’huile à feu vif dans un wok.',
    'Ajouter les nouilles, la sauce soja et l’huile de sésame, et faire sauter 2 min à feu moyen en remuant délicatement.',
    'Parsemer de ciboule émincée et de sésame.'
  ]);

  R('naans-garnis-poulet-tandoori', 'Naans garnis au poulet tandoori et raïta', 'Indienne', 'Plat', 30, 'Facile', 4, [
    ['naans', 4], ['poulet', 500, 'g'], ['yaourt', 3], ['epices-tandoori', 2, 'cc'], ['concombre', 0.5], ['oignon-rouge', 1],
    ['huile', 1, 'cs'], ['menthe', 0.25, 'pc', 'opt'], ['sel', null]
  ], [
    'Couper le poulet en lamelles et les mélanger avec 1 yaourt, les épices tandoori et une pincée de sel. Laisser mariner 10 min.',
    'Pour la raïta : râper le concombre, le presser pour retirer l’eau et le mélanger aux 2 yaourts restants avec la menthe ciselée et du sel.',
    'Faire dorer le poulet 6 à 8 min dans l’huile à feu vif, jusqu’à ce qu’il soit doré et cuit à cœur (chair blanche).',
    'Réchauffer les naans 1 min par face dans une poêle sèche à feu moyen.',
    'Garnir chaque naan de poulet, d’oignon rouge en fines lamelles et de raïta, puis replier.'
  ]);

  R('salade-vermicelles-soja-crevettes', 'Salade thaïe de vermicelles de soja aux crevettes', 'Thaïlandaise', 'Entrée', 20, 'Facile', 4, [
    ['vermicelles-de-soja', 100, 'g'], ['crevettes', 200, 'g'], ['oignon-rouge', 0.5], ['tomates-cerises', 150, 'g'], ['citron-vert', 2],
    ['sauce-poisson', 2, 'cs'], ['sucre', 10, 'g'], ['coriandre', 0.5, 'pc', 'opt'], ['piments-frais', 1, 'pc', 'opt']
  ], [
    'Réhydrater les vermicelles 5 à 8 min dans un saladier d’eau bouillante, hors du feu, jusqu’à ce qu’ils soient translucides, puis les égoutter et les couper aux ciseaux.',
    'Mélanger le jus des citrons verts, la sauce poisson, le sucre et le piment finement émincé, jusqu’à dissolution du sucre.',
    'Émincer finement l’oignon rouge et couper les tomates cerises en deux.',
    'Mélanger les vermicelles, les crevettes (cuites et décortiquées), les légumes et la sauce. Parsemer de coriandre et servir tiède ou froid.'
  ]);

  R('brochettes-poulet-satay', 'Brochettes de poulet satay', 'Thaïlandaise', 'Plat', 45, 'Facile', 4, [
    ['poulet', 600, 'g'], ['sauce-satay', 6, 'cs'], ['sauce-soja', 1, 'cs'], ['huile', 1, 'cs'], ['cacahuetes', 30, 'g', 'opt'],
    ['citron-vert', 1, 'pc', 'opt']
  ], [
    'Couper le poulet en lanières et les mélanger avec 2 cs de sauce satay, la sauce soja et l’huile. Laisser mariner 20 min. Faire tremper des pics en bois dans l’eau.',
    'Enfiler les lanières sur les pics en accordéon.',
    'Cuire 8 à 10 min dans une poêle-gril à feu vif ou sous le gril du four (position haute), en les retournant à mi-cuisson, jusqu’à ce qu’elles soient dorées et cuites à cœur.',
    'Tiédir le reste de sauce satay 2 min à feu doux avec 2 cs d’eau et servir en accompagnement, parsemé de cacahuètes concassées, avec des quartiers de citron vert.'
  ]);

  R('aubergines-doubanjiang', 'Aubergines sautées au doubanjiang', 'Chinoise', 'Plat', 30, 'Facile', 4, [
    ['aubergines', 2], ['doubanjiang', 1.5, 'cs'], ['ail', 3], ['gingembre', 10, 'g'], ['sauce-soja', 1, 'cs'], ['sucre', 10, 'g'],
    ['vinaigre-riz', 1, 'cs'], ['huile', 4, 'cs'], ['ciboule', 0.25, 'pc', 'opt'], ['riz', 300, 'g', 'opt']
  ], [
    'Couper les aubergines en bâtonnets de 6 cm. Hacher l’ail et le gingembre.',
    'Faire sauter les aubergines 8 à 10 min dans l’huile à feu vif dans un wok, jusqu’à ce qu’elles soient dorées et fondantes, puis les réserver.',
    'Dans le même wok, faire revenir 30 s le doubanjiang, l’ail et le gingembre à feu moyen, jusqu’à ce que l’huile rougisse.',
    'Ajouter la sauce soja, le sucre, le vinaigre et 5 cl d’eau, remettre les aubergines et laisser réduire 2 min à feu vif pour les enrober.',
    'Parsemer de ciboule et servir avec le riz, cuit à part 10 à 12 min dans l’eau bouillante.'
  ]);
};
