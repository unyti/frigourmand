/* Variantes des grands classiques, ajoutées en 0.10 (même format que recettes.js). */
'use strict';

module.exports = function ajouter(R) {

  /* ───────────── Croques, sandwichs, burgers, wraps, tartines ───────────── */

  R('croque-madame', 'Croque-madame', 'Française', 'Plat', 25, 'Facile', 4, [
    ['pain-mie', 8], ['jambon', 4], ['fromage-rape', 160, 'g'], ['oeufs', 4], ['beurre', 40, 'g'],
    ['sel', null], ['poivre', null]
  ], [
    'Préchauffer le four à 200 °C. Beurrer les tranches de pain de mie sur une face avec 30 g de beurre.',
    'Poser 4 tranches sur une plaque, côté beurré dessous. Garnir d’un peu de fromage, d’une tranche de jambon pliée et de fromage, puis refermer, côté beurré dessus. Parsemer du reste de fromage.',
    'Enfourner 10 à 12 min, jusqu’à ce que le dessus soit doré et le fromage fondu.',
    'Pendant ce temps, cuire les œufs au plat dans le reste du beurre, 3 min à feu moyen : le blanc doit être pris et le jaune coulant. Saler, poivrer.',
    'Poser un œuf sur chaque croque et servir aussitôt.'
  ]);

  R('croque-monsieur-bechamel', 'Croque-monsieur à la béchamel', 'Française', 'Plat', 35, 'Facile', 4, [
    ['pain-mie', 8], ['jambon', 4], ['fromage-rape', 160, 'g'], ['beurre', 25, 'g'], ['farine', 25, 'g'],
    ['lait', 25, 'cl'], ['muscade', 1, 'pincee', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Préchauffer le four à 200 °C.',
    'Faire fondre le beurre dans une casserole à feu moyen, ajouter la farine et remuer 1 min. Verser le lait froid peu à peu en fouettant et cuire 4 à 5 min, jusqu’à ce que la béchamel nappe la cuillère. Saler, poivrer et ajouter la muscade.',
    'Tartiner 4 tranches de pain d’une cuillerée de béchamel, parsemer d’un peu de fromage, poser le jambon et refermer.',
    'Napper le dessus du reste de béchamel et couvrir du reste de fromage.',
    'Enfourner 12 à 15 min sur une plaque couverte de papier cuisson, jusqu’à ce que le dessus soit bien gratiné.'
  ]);

  R('croque-chevre-miel', 'Croque chèvre-miel', 'Française', 'Plat', 15, 'Facile', 4, [
    ['pain-mie', 8], ['chevre', 200, 'g'], ['miel', 2, 'cs'], ['beurre', 30, 'g'],
    ['cerneaux-de-noix', 30, 'g', 'opt'], ['thym', 1, 'pc', 'opt'], ['poivre', null]
  ], [
    'Couper la bûche de chèvre en rondelles. Beurrer les tranches de pain de mie sur une face.',
    'Retourner 4 tranches, côté beurré dessous. Répartir le chèvre, arroser de miel, ajouter les noix concassées et le thym effeuillé, poivrer. Refermer, côté beurré dessus.',
    'Chauffer une grande poêle à feu moyen et y cuire les croques 3 min de chaque côté, en appuyant avec une spatule, jusqu’à ce qu’ils soient bien dorés et que le chèvre commence à fondre.'
  ]);

  R('croque-saumon', 'Croque au saumon fumé', 'Française', 'Plat', 15, 'Facile', 4, [
    ['pain-mie', 8], ['saumon-fume', 4], ['fromage-frais-a-tartiner', 120, 'g'], ['beurre', 30, 'g'],
    ['citron', 0.5, 'pc', 'opt'], ['aneth', 0.25, 'pc', 'opt'], ['poivre', null]
  ], [
    'Beurrer les tranches de pain de mie sur une face. Mélanger le fromage frais avec l’aneth ciselé, quelques gouttes de jus de citron et du poivre.',
    'Tartiner de fromage la face non beurrée de toutes les tranches. Poser une tranche de saumon sur 4 d’entre elles et refermer, côté beurré à l’extérieur.',
    'Cuire les croques dans une poêle à feu moyen, 2 à 3 min de chaque côté, jusqu’à ce que le pain soit doré et croustillant. Le saumon doit juste tiédir.'
  ]);

  R('croque-raclette', 'Croque raclette', 'Française', 'Plat', 20, 'Facile', 4, [
    ['pain-mie', 8], ['fromage-a-raclette', 250, 'g'], ['jambon-cru', 4], ['beurre', 30, 'g'],
    ['cornichons', 40, 'g', 'opt'], ['moutarde', 1, 'cs', 'opt'], ['poivre', null]
  ], [
    'Retirer la croûte du fromage à raclette et le couper en tranches. Beurrer les tranches de pain de mie sur une face.',
    'Retourner 4 tranches, côté beurré dessous, et tartiner d’un voile de moutarde. Couvrir de la moitié du fromage, du jambon cru et des cornichons en rondelles, puis du reste de fromage. Poivrer et refermer, côté beurré dessus.',
    'Cuire dans une poêle à feu moyen-doux, 4 min de chaque côté, à couvert : le pain doit être doré et le fromage coulant.'
  ]);

  R('tartines-jambon-fromage', 'Tartines gratinées jambon-fromage', 'Française', 'Plat', 15, 'Facile', 2, [
    ['pain', 4], ['jambon', 2], ['fromage-rape', 100, 'g'], ['creme-fraiche', 6, 'cl'],
    ['moutarde', 1, 'cs', 'opt'], ['poivre', null]
  ], [
    'Préchauffer le four à 210 °C. Mélanger la crème avec la moutarde et du poivre.',
    'Poser les tranches de pain sur une plaque couverte de papier cuisson et les tartiner de crème.',
    'Répartir le jambon coupé en lanières, puis le fromage râpé.',
    'Enfourner 8 à 10 min, jusqu’à ce que le fromage soit doré et bouillonnant.'
  ]);

  R('tartines-chevre-miel', 'Tartines chaudes chèvre-miel', 'Française', 'Plat', 15, 'Facile', 2, [
    ['pain', 4], ['chevre', 150, 'g'], ['miel', 2, 'cs'], ['huile-olive', 1, 'cs'],
    ['thym', 1, 'pc', 'opt'], ['cerneaux-de-noix', 20, 'g', 'opt'], ['salade', 0.25, 'pc', 'opt'], ['poivre', null]
  ], [
    'Préchauffer le four à 200 °C. Poser les tranches de pain sur une plaque et les arroser d’un filet d’huile d’olive.',
    'Couper le chèvre en rondelles et les répartir sur le pain. Parsemer de thym effeuillé et poivrer.',
    'Enfourner 8 à 10 min, jusqu’à ce que le chèvre soit fondant et légèrement doré.',
    'Arroser de miel à la sortie du four, ajouter les noix concassées et servir avec la salade.'
  ]);

  R('tartines-avocat-oeuf', 'Tartines avocat et œuf au plat', 'Française', 'Plat', 15, 'Facile', 2, [
    ['pain', 2], ['avocat', 1], ['oeufs', 2], ['citron', 0.5], ['huile-olive', 1, 'cs'],
    ['piment', 1, 'pincee', 'opt'], ['graines-sesame', 1, 'cc', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Faire griller les tranches de pain 2 min au grille-pain, jusqu’à ce qu’elles soient dorées.',
    'Écraser la chair de l’avocat à la fourchette avec le jus du demi-citron, du sel et du poivre. Tartiner le pain.',
    'Chauffer l’huile dans une poêle à feu moyen et y cuire les œufs au plat 3 min, jusqu’à ce que le blanc soit pris et le jaune encore coulant.',
    'Poser un œuf sur chaque tartine, saler, saupoudrer de piment et de graines de sésame.'
  ]);

  R('bruschettas-jambon-cru-mozzarella', 'Bruschettas jambon cru et mozzarella', 'Italienne', 'Plat', 15, 'Facile', 2, [
    ['pain', 4], ['mozzarella', 125, 'g'], ['jambon-cru', 4], ['ail', 1], ['huile-olive', 2, 'cs'],
    ['tomates-cerises', 100, 'g', 'opt'], ['roquette', 30, 'g', 'opt'], ['poivre', null]
  ], [
    'Préchauffer le four à 220 °C. Faire griller les tranches de pain 3 min au four, puis les frotter avec la gousse d’ail coupée en deux et les arroser d’huile d’olive.',
    'Répartir la mozzarella égouttée en tranches et les tomates cerises coupées en deux. Poivrer.',
    'Enfourner 5 min, jusqu’à ce que la mozzarella soit fondue.',
    'Poser une tranche de jambon cru et quelques feuilles de roquette sur chaque bruschetta à la sortie du four.'
  ]);

  R('bruschettas-champignons', 'Bruschettas aux champignons', 'Italienne', 'Entrée', 20, 'Facile', 4, [
    ['pain', 4], ['champignons', 300, 'g'], ['ail', 2], ['huile-olive', 3, 'cs'],
    ['persil', 0.25, 'pc', 'opt'], ['parmesan', 30, 'g', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Nettoyer les champignons et les couper en lamelles. Hacher une gousse d’ail.',
    'Chauffer 2 cuillerées d’huile dans une poêle à feu vif et y faire sauter les champignons 6 à 8 min, jusqu’à ce que leur eau soit évaporée et qu’ils soient dorés. Ajouter l’ail haché, saler, poivrer et cuire encore 1 min.',
    'Faire griller les tranches de pain 2 min au grille-pain (ou 2 min par face sous le gril du four), les frotter avec la seconde gousse d’ail coupée en deux et les arroser du reste d’huile.',
    'Répartir les champignons sur le pain, parsemer de persil haché et de copeaux de parmesan.'
  ]);

  R('bruschettas-poivrons-feta', 'Bruschettas aux poivrons grillés et à la feta', 'Méditerranéenne', 'Entrée', 15, 'Facile', 4, [
    ['pain', 4], ['poivrons-grilles', 200, 'g'], ['feta', 100, 'g'], ['ail', 1], ['huile-olive', 2, 'cs'],
    ['origan', 1, 'cc', 'opt'], ['basilic', 0.25, 'pc', 'opt'], ['poivre', null]
  ], [
    'Égoutter les poivrons grillés et les couper en lanières.',
    'Faire griller les tranches de pain au grille-pain ou 3 min sous le gril du four. Les frotter avec la gousse d’ail coupée en deux et les arroser d’huile d’olive.',
    'Répartir les poivrons sur le pain, émietter la feta par-dessus, saupoudrer d’origan et poivrer.',
    'Passer 3 min sous le gril pour tiédir la feta, puis parsemer de basilic ciselé.'
  ]);

  R('jambon-beurre', 'Sandwich jambon-beurre', 'Française', 'Plat', 5, 'Facile', 2, [
    ['baguette', 1], ['jambon', 4], ['beurre', 40, 'g'], ['cornichons', 40, 'g', 'opt']
  ], [
    'Sortir le beurre 15 min à l’avance pour qu’il soit facile à tartiner.',
    'Couper la baguette en deux tronçons et les ouvrir dans la longueur sans les séparer complètement.',
    'Beurrer généreusement les deux faces de la mie.',
    'Garnir de jambon plié et de cornichons coupés en deux dans la longueur, puis refermer.'
  ]);

  R('sandwich-thon-crudites', 'Sandwich thon-crudités', 'Française', 'Plat', 15, 'Facile', 2, [
    ['baguette', 1], ['thon-boite', 140, 'g'], ['mayonnaise', 2, 'cs'], ['tomates', 1], ['salade', 0.25],
    ['oeufs', 2, 'pc', 'opt'], ['cornichons', 30, 'g', 'opt'], ['citron', 0.5, 'pc', 'opt'], ['poivre', null]
  ], [
    'Si on ajoute les œufs, les cuire 10 min dans l’eau bouillante, les refroidir sous l’eau froide, les écaler et les couper en rondelles.',
    'Égoutter le thon et l’émietter avec la mayonnaise, quelques gouttes de jus de citron et du poivre. Ajouter les cornichons hachés.',
    'Laver et essorer la salade, couper la tomate en rondelles.',
    'Couper la baguette en deux tronçons et les ouvrir dans la longueur. Garnir de salade, de thon, de tomate et d’œuf, puis refermer.'
  ]);

  R('pan-bagnat', 'Pan bagnat', 'Française', 'Plat', 25, 'Facile', 4, [
    ['baguette', 2], ['thon-boite', 280, 'g'], ['tomates', 3], ['oeufs', 3], ['olives', 50, 'g'],
    ['huile-olive', 4, 'cs'], ['vinaigre', 1, 'cs'], ['ail', 1, 'pc', 'opt'], ['poivrons-verts', 1, 'pc', 'opt'],
    ['ciboule', 0.5, 'pc', 'opt'], ['anchois', 40, 'g', 'opt'], ['radis', 0.5, 'pc', 'opt'], ['basilic', 0.25, 'pc', 'opt'],
    ['sel', null], ['poivre', null]
  ], [
    'Cuire les œufs 10 min dans l’eau bouillante, les refroidir sous l’eau froide, les écaler et les couper en rondelles.',
    'Couper les tomates en rondelles et les saler légèrement. Émincer finement le poivron, la ciboule et les radis. Dénoyauter les olives.',
    'Couper chaque baguette en deux tronçons (ou utiliser 4 petits pains ronds) et les ouvrir en deux. Retirer un peu de mie, frotter l’intérieur avec la gousse d’ail coupée, puis arroser d’huile d’olive et de vinaigre.',
    'Garnir de tomates, de thon égoutté, d’œufs, de légumes, d’olives, d’anchois et de basilic. Poivrer et refermer en appuyant.',
    'Envelopper et laisser reposer 1 h au frais si possible : le pain doit s’imbiber (« pan bagnat » signifie « pain mouillé »).'
  ]);

  R('club-sandwich-thon-oeuf', 'Club sandwich au thon et à l’œuf', 'Française', 'Plat', 20, 'Facile', 2, [
    ['pain-mie', 6], ['thon-boite', 140, 'g'], ['oeufs', 2], ['mayonnaise', 3, 'cs'], ['tomates', 1],
    ['salade', 0.25, 'pc', 'opt'], ['concombre', 0.25, 'pc', 'opt'], ['poivre', null]
  ], [
    'Cuire les œufs 10 min dans l’eau bouillante, les refroidir, les écaler et les couper en rondelles.',
    'Égoutter le thon et l’émietter avec 2 cuillerées de mayonnaise et du poivre.',
    'Faire griller les tranches de pain de mie 1 à 2 min au grille-pain, jusqu’à ce qu’elles soient dorées. Couper la tomate et le concombre en fines rondelles, laver et essorer la salade.',
    'Pour chaque sandwich : étaler le thon sur une tranche, couvrir de concombre et d’une deuxième tranche tartinée du reste de mayonnaise, puis ajouter salade, tomate et œuf, et fermer avec la troisième tranche.',
    'Maintenir avec des piques et couper en deux triangles en diagonale.'
  ]);

  R('panini-jambon-mozzarella', 'Panini jambon-mozzarella', 'Italienne', 'Plat', 15, 'Facile', 2, [
    ['baguette', 1], ['jambon', 2], ['mozzarella', 125, 'g'], ['huile-olive', 1, 'cs'],
    ['tomates', 1, 'pc', 'opt'], ['pesto', 30, 'g', 'opt'], ['poivre', null]
  ], [
    'Couper la baguette en deux tronçons (ou utiliser 2 pains à panini) et les ouvrir dans la longueur. Égoutter la mozzarella et la couper en tranches.',
    'Tartiner l’intérieur de pesto, garnir de jambon, de mozzarella et de fines rondelles de tomate. Poivrer et refermer.',
    'Badigeonner l’extérieur du pain d’huile d’olive.',
    'Cuire dans une poêle à feu moyen, 3 à 4 min de chaque côté, en écrasant les paninis avec une casserole lourde posée dessus (ou dans un appareil à panini), jusqu’à ce que le pain soit doré et la mozzarella filante.'
  ]);

  R('panini-poulet-pesto', 'Panini poulet-pesto', 'Italienne', 'Plat', 25, 'Facile', 2, [
    ['baguette', 1], ['poulet', 250, 'g'], ['pesto', 50, 'g'], ['mozzarella', 125, 'g'], ['huile-olive', 2, 'cs'],
    ['tomates-sechees', 30, 'g', 'opt'], ['roquette', 20, 'g', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Couper le poulet en fines lamelles. Les faire dorer dans une cuillerée d’huile à feu vif, 5 à 6 min, jusqu’à ce qu’elles soient cuites à cœur. Saler, poivrer.',
    'Couper la baguette en deux tronçons et les ouvrir dans la longueur. Tartiner l’intérieur de pesto.',
    'Garnir de poulet, de mozzarella égouttée en tranches et de tomates séchées. Refermer et badigeonner l’extérieur du reste d’huile.',
    'Cuire dans une poêle à feu moyen, 3 à 4 min de chaque côté, en pressant avec une casserole lourde, jusqu’à ce que le pain soit croustillant et le fromage fondu.',
    'Glisser la roquette dans les paninis au moment de servir.'
  ]);

  R('burger-poulet-croustillant', 'Burger au poulet croustillant', 'Américaine', 'Plat', 35, 'Facile', 4, [
    ['pain-burger', 4], ['poulet', 500, 'g'], ['farine', 40, 'g'], ['oeufs', 1], ['chapelure', 80, 'g'],
    ['huile', 6, 'cs'], ['mayonnaise', 4, 'cs'], ['salade', 0.25], ['paprika', 1, 'cc', 'opt'],
    ['tomates', 1, 'pc', 'opt'], ['cheddar', 4, 'pc', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Couper les blancs de poulet en 4 escalopes de la taille des pains et les aplatir à 1 cm d’épaisseur. Saler, poivrer.',
    'Préparer trois assiettes : la farine mélangée au paprika, l’œuf battu, la chapelure. Y passer les escalopes dans cet ordre en appuyant bien.',
    'Chauffer l’huile dans une grande poêle à feu moyen et cuire le poulet 4 à 5 min de chaque côté, jusqu’à ce que la panure soit bien dorée et la chair cuite à cœur. Égoutter sur du papier absorbant et poser aussitôt le cheddar dessus.',
    'Toaster les pains, face coupée, 1 min dans une poêle sèche à feu moyen.',
    'Tartiner les pains de mayonnaise et garnir de salade, de poulet et de rondelles de tomate.'
  ]);

  R('cheeseburger-bacon', 'Cheeseburger au bacon', 'Américaine', 'Plat', 25, 'Facile', 4, [
    ['pain-burger', 4], ['boeuf-hache', 500, 'g'], ['cheddar', 4], ['bacon', 8], ['ketchup', 2, 'cs'],
    ['huile', 1, 'cs'], ['moutarde', 1, 'cs', 'opt'], ['oignon-rouge', 1, 'pc', 'opt'], ['salade', 0.25, 'pc', 'opt'],
    ['cornichons', 40, 'g', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Former 4 steaks de 2 cm d’épaisseur avec la viande, sans trop la tasser.',
    'Faire griller le bacon à sec dans une poêle à feu moyen, 3 à 4 min, jusqu’à ce qu’il soit croustillant. Réserver sur du papier absorbant.',
    'Dans la même poêle, ajouter l’huile et cuire les steaks à feu vif, 3 min de chaque côté pour une viande rosée (4 min pour bien cuite). Saler, poivrer, poser le cheddar la dernière minute et couvrir pour qu’il fonde.',
    'Toaster les pains, face coupée, 1 min à la poêle à feu moyen.',
    'Tartiner les pains de ketchup et de moutarde, puis monter avec la salade, le steak au cheddar, le bacon, l’oignon en fines rondelles et les cornichons émincés.'
  ]);

  R('burger-vegetarien', 'Burger végétarien aux haricots rouges', 'Américaine', 'Plat', 35, 'Facile', 4, [
    ['pain-burger', 4], ['haricots-rouges', 400, 'g'], ['oignons', 1], ['chapelure', 60, 'g'], ['oeufs', 1],
    ['huile', 3, 'cs'], ['cumin', 1, 'cc', 'opt'], ['paprika', 1, 'cc', 'opt'], ['ketchup', 2, 'cs', 'opt'],
    ['avocat', 1, 'pc', 'opt'], ['tomates', 1, 'pc', 'opt'], ['salade', 0.25, 'pc', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Hacher finement l’oignon et le faire fondre 5 min dans une cuillerée d’huile à feu moyen.',
    'Rincer et égoutter soigneusement les haricots rouges, puis les écraser grossièrement à la fourchette : il doit rester des morceaux.',
    'Mélanger les haricots avec l’oignon, la chapelure, l’œuf, le cumin et le paprika. Saler, poivrer. Former 4 galettes épaisses et les laisser raffermir 10 min au frais.',
    'Chauffer le reste de l’huile dans une poêle à feu moyen et cuire les galettes 4 min de chaque côté, en les retournant délicatement, jusqu’à ce qu’elles soient bien dorées.',
    'Toaster les pains, face coupée, 1 min dans une poêle sèche à feu moyen. Les garnir de ketchup, de salade, d’une galette, de rondelles de tomate et de lamelles d’avocat.'
  ]);

  R('wraps-poulet-crudites', 'Wraps poulet-crudités', 'Française', 'Plat', 25, 'Facile', 4, [
    ['tortillas', 4], ['poulet', 300, 'g'], ['carottes', 2], ['salade', 0.25], ['mayonnaise', 3, 'cs'],
    ['huile', 1, 'cs'], ['concombre', 0.5, 'pc', 'opt'], ['tomates', 1, 'pc', 'opt'], ['paprika', 1, 'cc', 'opt'],
    ['sel', null], ['poivre', null]
  ], [
    'Couper le poulet en lanières et les saupoudrer de paprika, de sel et de poivre. Les faire dorer dans l’huile à feu vif, 6 à 7 min, jusqu’à ce qu’elles soient cuites à cœur. Laisser tiédir.',
    'Râper les carottes, couper le concombre en bâtonnets et la tomate en dés, émincer la salade.',
    'Tiédir les tortillas 20 s de chaque côté dans une poêle sèche à feu moyen pour les assouplir.',
    'Tartiner chaque tortilla de mayonnaise, répartir les crudités et le poulet au centre.',
    'Rabattre le bas de la tortilla sur la garniture, puis rouler en serrant. Couper en deux en biais.'
  ]);

  R('wraps-saumon-fume', 'Wraps au saumon fumé', 'Française', 'Plat', 10, 'Facile', 4, [
    ['tortillas', 4], ['saumon-fume', 8], ['fromage-frais-a-tartiner', 150, 'g'], ['concombre', 0.5],
    ['citron', 0.5, 'pc', 'opt'], ['aneth', 0.25, 'pc', 'opt'], ['roquette', 40, 'g', 'opt'], ['poivre', null]
  ], [
    'Mélanger le fromage frais avec l’aneth ciselé, un trait de jus de citron et du poivre.',
    'Couper le concombre en fins bâtonnets.',
    'Tartiner les tortillas de fromage frais jusqu’aux bords. Poser 2 tranches de saumon sur chacune, puis le concombre et la roquette.',
    'Rouler en serrant bien et couper chaque wrap en deux en biais. Servir aussitôt ou garder au frais sous film.'
  ]);

  R('bagels-poulet-avocat', 'Bagels au poulet et à l’avocat', 'Américaine', 'Plat', 10, 'Facile', 2, [
    ['bagels', 2], ['blanc-de-poulet', 4], ['avocat', 1], ['fromage-frais-a-tartiner', 60, 'g'],
    ['salade', 0.25, 'pc', 'opt'], ['tomates', 1, 'pc', 'opt'], ['citron', 0.5, 'pc', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Couper les bagels en deux et les faire griller 2 min au grille-pain, jusqu’à ce qu’ils soient dorés.',
    'Couper l’avocat en lamelles et les arroser de jus de citron. Couper la tomate en rondelles.',
    'Tartiner les deux moitiés de fromage frais. Poivrer.',
    'Garnir de salade, de blanc de poulet, d’avocat et de tomate. Saler légèrement et refermer.'
  ]);

  R('hot-dogs-gratines', 'Hot-dogs gratinés au fromage', 'Française', 'Plat', 20, 'Facile', 4, [
    ['pain-a-hot-dog', 4], ['saucisses-de-strasbourg', 4], ['fromage-rape', 100, 'g'], ['moutarde', 2, 'cs'],
    ['oignons-frits', 20, 'g', 'opt'], ['ketchup', 2, 'cs', 'opt']
  ], [
    'Préchauffer le four à 210 °C. Plonger les saucisses 5 min dans une casserole d’eau frémissante, sans bouillir pour qu’elles n’éclatent pas, puis les égoutter.',
    'Ouvrir les pains dans la longueur sans les séparer et tartiner l’intérieur de moutarde.',
    'Glisser une saucisse dans chaque pain, les poser sur une plaque et couvrir de fromage râpé.',
    'Enfourner 6 à 8 min, jusqu’à ce que le fromage soit fondu et doré.',
    'Parsemer d’oignons frits et servir avec le ketchup.'
  ]);

  R('tacos-poulet', 'Tacos au poulet', 'Mexicaine', 'Plat', 30, 'Facile', 4, [
    ['tortillas', 8], ['poulet', 500, 'g'], ['oignon-rouge', 1], ['tomates', 2], ['paprika', 2, 'cc'], ['cumin', 1, 'cc'],
    ['huile', 2, 'cs'], ['avocat', 1, 'pc', 'opt'], ['citron-vert', 1, 'pc', 'opt'], ['coriandre', 0.25, 'pc', 'opt'],
    ['creme-fraiche', 10, 'cl', 'opt'], ['piment', 1, 'pincee', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Couper le poulet en petits dés. Les mélanger avec le paprika, le cumin, le piment, du sel, du poivre et une cuillerée d’huile.',
    'Couper les tomates en petits dés, émincer finement l’oignon rouge et couper l’avocat en dés. Arroser l’avocat de jus de citron vert.',
    'Chauffer le reste de l’huile dans une poêle à feu vif et y faire sauter le poulet 7 à 8 min, jusqu’à ce qu’il soit bien doré et cuit à cœur.',
    'Chauffer les tortillas 20 s de chaque côté dans une poêle sèche à feu moyen et les garder au chaud dans un torchon.',
    'Garnir chaque tortilla de poulet, de tomate, d’oignon et d’avocat. Ajouter une cuillerée de crème, de la coriandre ciselée, et plier en deux.'
  ]);

  R('tacos-francais-poulet', 'Tacos français au poulet et sauce fromagère', 'Française', 'Plat', 40, 'Facile', 4, [
    ['tortillas', 4], ['poulet', 400, 'g'], ['frites-surgelees', 400, 'g'], ['creme-liquide', 15, 'cl'],
    ['fromage-rape', 120, 'g'], ['huile', 1, 'cs'], ['paprika', 1, 'cc', 'opt'], ['cheddar', 4, 'pc', 'opt'],
    ['sauce-algerienne', 4, 'cs', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Cuire les frites au four selon les indications du paquet (en général 20 min à 220 °C), jusqu’à ce qu’elles soient dorées. Les saler.',
    'Couper le poulet en petits dés, les assaisonner de paprika, de sel et de poivre, et les faire dorer dans l’huile dans une poêle à feu vif, 7 à 8 min, jusqu’à ce qu’ils soient cuits à cœur.',
    'Chauffer la crème dans une petite casserole à feu doux, ajouter le fromage râpé et le cheddar en morceaux, et remuer 3 à 4 min jusqu’à obtenir une sauce lisse et nappante. Poivrer.',
    'Étaler la sauce algérienne au centre de chaque tortilla, répartir le poulet et les frites, et napper de sauce fromagère.',
    'Rabattre les côtés puis le bas et le haut pour former un rectangle bien fermé.',
    'Faire griller les tacos dans une poêle sèche à feu moyen, pliure dessous d’abord, 2 min de chaque côté en appuyant, jusqu’à ce qu’ils soient dorés et croustillants.'
  ]);

  R('kebab-maison', 'Kebab maison au poulet', 'Française', 'Plat', 35, 'Facile', 4, [
    ['pains-pita', 4], ['poulet', 500, 'g'], ['yaourt', 1], ['paprika', 2, 'cc'], ['cumin', 1, 'cc'], ['ail', 2, 'pc', 'opt'],
    ['tomates', 2], ['oignon-rouge', 1, 'pc', 'opt'], ['salade', 0.25], ['huile-olive', 2, 'cs'],
    ['sauce-blanche', 4, 'cs', 'opt'], ['harissa', 1, 'cc', 'opt'], ['citron', 0.5, 'pc', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Couper le poulet en très fines lamelles. Les mélanger avec le yaourt, le paprika, le cumin, l’ail haché, une cuillerée d’huile, le jus du demi-citron, du sel et du poivre. Laisser mariner au moins 15 min (jusqu’à une nuit au frais).',
    'Émincer la salade et l’oignon rouge, couper les tomates en fines rondelles.',
    'Chauffer le reste de l’huile dans une grande poêle à feu vif. Y saisir le poulet en une seule couche, 6 à 8 min, en remuant peu pour qu’il grille : les bords doivent être bien colorés.',
    'Réchauffer les pains pita 1 min au grille-pain ou dans une poêle sèche, puis les ouvrir en poche.',
    'Garnir de salade, de tomates, d’oignon et de poulet. Napper de sauce blanche et ajouter une pointe de harissa.'
  ]);

  /* ───────────── Œufs ───────────── */

  R('omelette-jambon', 'Omelette au jambon', 'Française', 'Plat', 10, 'Facile', 2, [
    ['oeufs', 6], ['jambon', 2], ['beurre', 20, 'g'], ['ciboulette', 0.25, 'pc', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Couper le jambon en lanières. Battre les œufs à la fourchette, sans trop insister, avec peu de sel et du poivre.',
    'Faire mousser le beurre dans une poêle à feu moyen-vif et y faire revenir le jambon 1 min.',
    'Verser les œufs. Ramener les bords pris vers le centre avec une spatule en inclinant la poêle, pendant 2 à 3 min, jusqu’à ce que l’omelette soit prise dessous et encore baveuse dessus.',
    'Plier l’omelette en deux, la glisser sur un plat et parsemer de ciboulette ciselée.'
  ]);

  R('omelette-chorizo', 'Omelette au chorizo', 'Espagnole', 'Plat', 15, 'Facile', 2, [
    ['oeufs', 6], ['chorizo', 80, 'g'], ['huile-olive', 1, 'cs'], ['oignons', 1],
    ['poivrons', 0.5, 'pc', 'opt'], ['persil', 0.25, 'pc', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Retirer la peau du chorizo et le couper en fines rondelles. Émincer l’oignon et le poivron.',
    'Faire revenir l’oignon et le poivron dans l’huile à feu moyen, 5 min. Ajouter le chorizo et cuire 2 min, jusqu’à ce qu’il rende son gras rouge.',
    'Battre les œufs avec très peu de sel (le chorizo est salé) et du poivre, puis les verser dans la poêle.',
    'Cuire 3 min à feu moyen en ramenant les bords vers le centre, jusqu’à ce que l’omelette soit prise mais encore moelleuse.',
    'Plier en deux et parsemer de persil haché.'
  ]);

  R('omelette-pommes-de-terre', 'Omelette aux pommes de terre', 'Française', 'Plat', 30, 'Facile', 2, [
    ['oeufs', 6], ['pommes-de-terre', 400, 'g'], ['oignons', 1], ['beurre', 20, 'g'], ['huile', 2, 'cs'],
    ['persil', 0.25, 'pc', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Éplucher les pommes de terre et les couper en dés de 1 cm. Les rincer et les sécher dans un torchon. Émincer l’oignon.',
    'Chauffer l’huile dans une poêle à feu moyen-vif et y faire sauter les pommes de terre 15 min, en remuant régulièrement, jusqu’à ce qu’elles soient dorées et tendres. Ajouter l’oignon à mi-cuisson. Saler.',
    'Battre les œufs avec du sel et du poivre. Ajouter le beurre dans la poêle, puis verser les œufs sur les pommes de terre.',
    'Cuire 3 à 4 min à feu moyen en soulevant les bords pour faire couler l’œuf cru dessous, jusqu’à ce que l’omelette soit prise.',
    'Servir à plat ou pliée, parsemée de persil haché.'
  ]);

  R('omelette-fines-herbes', 'Omelette aux fines herbes', 'Française', 'Plat', 10, 'Facile', 2, [
    ['oeufs', 6], ['ciboulette', 0.5], ['persil', 0.25], ['beurre', 20, 'g'],
    ['cerfeuil', 0.25, 'pc', 'opt'], ['estragon', 0.25, 'pc', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Laver, sécher et ciseler finement les herbes.',
    'Battre les œufs à la fourchette avec les herbes, du sel et du poivre, juste assez pour mélanger blancs et jaunes.',
    'Faire mousser le beurre 1 min dans une poêle à feu moyen-vif, sans le laisser colorer, et verser les œufs.',
    'Remuer 30 s à la fourchette, puis laisser prendre 1 à 2 min en ramenant les bords vers le centre : l’omelette doit rester baveuse et ne pas colorer.',
    'Rouler l’omelette sur elle-même en inclinant la poêle et la faire glisser sur une assiette.'
  ]);

  R('omelette-lardons', 'Omelette aux lardons', 'Française', 'Plat', 15, 'Facile', 2, [
    ['oeufs', 6], ['lardons', 100, 'g'], ['beurre', 10, 'g'], ['oignons', 1, 'pc', 'opt'],
    ['persil', 0.25, 'pc', 'opt'], ['poivre', null]
  ], [
    'Faire revenir les lardons à sec dans une poêle à feu moyen, 5 min, avec l’oignon émincé, jusqu’à ce qu’ils soient dorés. Retirer l’excédent de gras.',
    'Battre les œufs à la fourchette avec du poivre, sans saler (les lardons suffisent).',
    'Ajouter le beurre dans la poêle, puis verser les œufs sur les lardons.',
    'Cuire 2 à 3 min à feu moyen-vif en ramenant les bords pris vers le centre, jusqu’à ce que l’omelette soit prise mais encore moelleuse.',
    'Plier en deux et parsemer de persil haché.'
  ]);

  R('oeufs-plat-bacon', 'Œufs au plat au bacon', 'Anglaise', 'Plat', 10, 'Facile', 2, [
    ['oeufs', 4], ['bacon', 6], ['beurre', 10, 'g'], ['pain', 2, 'pc', 'opt'], ['poivre', null]
  ], [
    'Faire griller le bacon à sec dans une grande poêle à feu moyen, 2 min de chaque côté, jusqu’à ce qu’il soit doré et croustillant. Le pousser sur le bord.',
    'Ajouter le beurre au centre et y casser les œufs. Cuire 3 min à feu moyen-doux, jusqu’à ce que le blanc soit entièrement pris et le jaune encore coulant.',
    'Poivrer, sans saler (le bacon s’en charge), et servir avec le pain grillé.'
  ]);

  R('oeufs-plat-jambon-fromage', 'Œufs au plat au jambon et au fromage', 'Française', 'Plat', 10, 'Facile', 2, [
    ['oeufs', 4], ['jambon', 2], ['fromage-rape', 40, 'g'], ['beurre', 15, 'g'],
    ['ciboulette', 0.25, 'pc', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Faire fondre le beurre dans une grande poêle à feu moyen. Y poser les tranches de jambon et les laisser dorer 1 min.',
    'Casser 2 œufs sur chaque tranche de jambon et parsemer le blanc de fromage râpé, en évitant les jaunes.',
    'Couvrir et cuire 3 min à feu moyen-doux, jusqu’à ce que le blanc soit pris et le fromage fondu.',
    'Saler très légèrement, poivrer et parsemer de ciboulette ciselée.'
  ]);

  R('oeufs-coque-mouillettes', 'Œufs à la coque et mouillettes', 'Française', 'Plat', 10, 'Facile', 2, [
    ['oeufs', 4], ['pain', 2], ['beurre-demi-sel', 20, 'g'], ['sel', null], ['poivre', null]
  ], [
    'Sortir les œufs du réfrigérateur 15 min à l’avance pour éviter qu’ils ne se fendent.',
    'Porter une casserole d’eau à ébullition. Y déposer délicatement les œufs à l’aide d’une cuillère et compter 3 min à partir de la reprise de l’ébullition : le blanc doit être pris et le jaune coulant.',
    'Pendant ce temps, faire griller le pain 2 min au grille-pain, le beurrer et le couper en bâtonnets de 1,5 cm de large.',
    'Poser les œufs dans des coquetiers, les décalotter et servir aussitôt avec les mouillettes, du sel et du poivre.'
  ]);

  R('oeufs-brouilles-saumon-fume', 'Œufs brouillés au saumon fumé', 'Française', 'Plat', 15, 'Facile', 2, [
    ['oeufs', 6], ['saumon-fume', 4], ['beurre', 20, 'g'], ['creme-fraiche', 3, 'cl'],
    ['ciboulette', 0.25, 'pc', 'opt'], ['pain', 2, 'pc', 'opt'], ['poivre', null]
  ], [
    'Couper le saumon fumé en lanières. Battre légèrement les œufs avec du poivre, sans saler.',
    'Faire fondre le beurre dans une casserole à fond épais à feu doux. Verser les œufs et remuer sans arrêt avec une spatule, en raclant le fond, pendant 6 à 8 min : les œufs doivent épaissir en petits grains crémeux, sans jamais sécher. Les retirer du feu encore un peu coulants et ajouter aussitôt la crème pour stopper la cuisson.',
    'Incorporer le saumon et la ciboulette ciselée. Servir aussitôt sur le pain grillé.'
  ]);

  R('oeufs-brouilles-champignons', 'Œufs brouillés aux champignons', 'Française', 'Plat', 20, 'Facile', 2, [
    ['oeufs', 6], ['champignons', 200, 'g'], ['beurre', 30, 'g'], ['creme-fraiche', 3, 'cl', 'opt'],
    ['ail', 1, 'pc', 'opt'], ['persil', 0.25, 'pc', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Nettoyer les champignons et les couper en lamelles. Les faire sauter dans 15 g de beurre à feu vif, 6 min, jusqu’à ce qu’ils soient dorés et que leur eau soit évaporée. Ajouter l’ail haché, saler, poivrer et réserver.',
    'Battre légèrement les œufs avec du sel et du poivre.',
    'Faire fondre le reste du beurre dans une casserole à feu doux, verser les œufs et remuer sans arrêt à la spatule 6 à 8 min, jusqu’à obtenir une texture crémeuse.',
    'Hors du feu, ajouter la crème et les champignons. Parsemer de persil haché et servir aussitôt.'
  ]);

  R('oeufs-brouilles-fromage', 'Œufs brouillés au fromage', 'Française', 'Plat', 10, 'Facile', 2, [
    ['oeufs', 6], ['fromage-rape', 50, 'g'], ['beurre', 20, 'g'], ['lait', 3, 'cl', 'opt'],
    ['ciboulette', 0.25, 'pc', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Battre légèrement les œufs avec le lait, peu de sel et du poivre.',
    'Faire fondre le beurre dans une poêle antiadhésive à feu doux. Verser les œufs et remuer sans arrêt à la spatule 4 à 5 min, jusqu’à ce qu’ils forment de gros grains moelleux.',
    'Quand ils sont encore un peu coulants, ajouter le fromage râpé et remuer 30 s hors du feu, le temps qu’il fonde.',
    'Parsemer de ciboulette ciselée et servir aussitôt.'
  ]);

  R('oeufs-cocotte-jambon-fromage', 'Œufs cocotte au jambon et au fromage', 'Française', 'Entrée', 20, 'Facile', 4, [
    ['oeufs', 4], ['jambon', 2], ['creme-fraiche', 8, 'cl'], ['fromage-rape', 40, 'g'], ['beurre', 10, 'g'],
    ['ciboulette', 0.25, 'pc', 'opt'], ['pain', 4, 'pc', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Préchauffer le four à 180 °C. Beurrer 4 ramequins.',
    'Répartir le jambon coupé en petits dés au fond des ramequins, ajouter une cuillerée de crème, puis casser un œuf dans chacun sans crever le jaune.',
    'Parsemer le blanc de fromage râpé. Saler légèrement et poivrer.',
    'Poser les ramequins dans un plat, verser de l’eau bouillante à mi-hauteur et enfourner 10 à 12 min : le blanc doit être juste pris et le jaune encore coulant.',
    'Parsemer de ciboulette ciselée et servir avec du pain grillé.'
  ]);

  R('oeufs-cocotte-champignons', 'Œufs cocotte aux champignons', 'Française', 'Entrée', 25, 'Facile', 4, [
    ['oeufs', 4], ['champignons', 200, 'g'], ['creme-fraiche', 8, 'cl'], ['beurre', 20, 'g'],
    ['echalotes', 1, 'pc', 'opt'], ['persil', 0.25, 'pc', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Préchauffer le four à 180 °C. Beurrer 4 ramequins avec 5 g de beurre.',
    'Hacher les champignons et l’échalote. Les faire revenir dans le reste du beurre à feu vif, 6 à 7 min, jusqu’à évaporation complète de l’eau. Saler, poivrer, ajouter la moitié de la crème.',
    'Répartir les champignons dans les ramequins, casser un œuf dans chacun et ajouter une cuillerée de crème autour du jaune.',
    'Poser les ramequins dans un plat, verser de l’eau bouillante à mi-hauteur et enfourner 10 à 12 min, jusqu’à ce que le blanc soit pris et le jaune encore coulant.',
    'Parsemer de persil haché.'
  ]);

  R('oeufs-florentine', 'Œufs à la florentine', 'Française', 'Plat', 40, 'Facile', 4, [
    ['oeufs', 4], ['epinards', 600, 'g'], ['beurre', 45, 'g'], ['farine', 30, 'g'], ['lait', 35, 'cl'],
    ['fromage-rape', 70, 'g'], ['muscade', 1, 'pincee', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Cuire les œufs 6 min dans l’eau bouillante (œufs mollets), les rafraîchir sous l’eau froide et les écaler délicatement.',
    'Laver et équeuter les épinards. Les faire tomber dans 15 g de beurre à feu vif, 3 à 4 min, puis les presser dans une passoire pour retirer toute l’eau. Saler, poivrer.',
    'Allumer le gril du four. Faire fondre le reste du beurre dans une casserole à feu moyen, ajouter la farine et remuer 1 min. Verser le lait peu à peu en fouettant et cuire 5 min, jusqu’à épaississement. Saler, poivrer, ajouter la muscade et la moitié du fromage.',
    'Étaler les épinards dans un plat à gratin, creuser 4 nids et y poser les œufs. Napper de sauce et parsemer du reste de fromage.',
    'Passer 5 à 6 min sous le gril du four, jusqu’à ce que le dessus soit doré : le jaune doit rester coulant.'
  ]);

  R('frittata-courgettes', 'Frittata aux courgettes', 'Italienne', 'Plat', 30, 'Facile', 4, [
    ['oeufs', 6], ['courgettes', 2], ['parmesan', 50, 'g'], ['oignons', 1], ['huile-olive', 2, 'cs'],
    ['menthe', 0.25, 'pc', 'opt'], ['ail', 1, 'pc', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Couper les courgettes en fines rondelles et émincer l’oignon.',
    'Chauffer l’huile dans une poêle de 24 cm allant au four, à feu moyen. Y faire revenir l’oignon 3 min, puis les courgettes et l’ail haché 8 à 10 min, jusqu’à ce qu’elles soient tendres et légèrement dorées. Saler.',
    'Allumer le gril du four. Battre les œufs avec le parmesan râpé, la menthe ciselée, du sel et du poivre.',
    'Verser les œufs sur les courgettes et cuire 5 à 6 min à feu doux, sans remuer, jusqu’à ce que les bords soient pris.',
    'Passer la poêle 3 à 4 min sous le gril, jusqu’à ce que le dessus soit pris et doré. Servir chaud ou tiède, en parts.'
  ]);

  R('frittata-epinards', 'Frittata aux épinards et à la feta', 'Italienne', 'Plat', 25, 'Facile', 4, [
    ['oeufs', 6], ['epinards', 300, 'g'], ['feta', 100, 'g'], ['ail', 1], ['huile-olive', 2, 'cs'],
    ['parmesan', 30, 'g', 'opt'], ['muscade', 1, 'pincee', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Laver et équeuter les épinards. Chauffer l’huile dans une poêle de 24 cm allant au four, à feu vif, et y faire tomber les épinards avec l’ail haché 3 à 4 min, jusqu’à ce que leur eau soit évaporée.',
    'Allumer le gril du four. Battre les œufs avec le parmesan râpé, la muscade, du poivre et peu de sel (la feta est salée).',
    'Baisser à feu doux, verser les œufs sur les épinards et répartir la feta émiettée.',
    'Cuire 5 à 6 min à feu doux, sans remuer, jusqu’à ce que les bords soient pris.',
    'Finir 3 à 4 min sous le gril, jusqu’à ce que le dessus soit pris et doré.'
  ]);

  R('tortilla-chorizo', 'Tortilla au chorizo', 'Espagnole', 'Plat', 45, 'Moyenne', 4, [
    ['oeufs', 6], ['pommes-de-terre', 600, 'g'], ['chorizo', 100, 'g'], ['oignons', 1], ['huile-olive', 6, 'cs'],
    ['sel', null], ['poivre', null]
  ], [
    'Éplucher les pommes de terre et les couper en fines lamelles. Émincer l’oignon. Retirer la peau du chorizo et le couper en petits dés.',
    'Chauffer l’huile dans une poêle antiadhésive de 24 cm à feu moyen-doux. Y cuire les pommes de terre et l’oignon 20 min, en remuant de temps en temps : ils doivent confire sans dorer. Ajouter le chorizo les 2 dernières minutes.',
    'Égoutter le tout dans une passoire en gardant une cuillerée d’huile. Battre les œufs dans un saladier avec du sel et du poivre, puis y mélanger les pommes de terre.',
    'Remettre l’huile réservée dans la poêle à feu moyen, verser la préparation et cuire 5 min, jusqu’à ce que les bords soient pris.',
    'Poser une assiette sur la poêle, retourner la tortilla d’un geste franc et la faire glisser dans la poêle. Cuire encore 3 à 4 min à feu moyen : le centre doit rester moelleux.'
  ]);

  /* ───────────── Gratins et plats gratinés ───────────── */

  R('gratin-brocoli', 'Gratin de brocoli', 'Française', 'Plat', 40, 'Facile', 4, [
    ['brocoli', 2], ['beurre', 30, 'g'], ['farine', 30, 'g'], ['lait', 40, 'cl'], ['fromage-rape', 100, 'g'],
    ['muscade', 1, 'pincee', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Préchauffer le four à 200 °C. Détailler les brocolis en bouquets et les cuire 5 min dans une grande casserole d’eau bouillante salée : ils doivent rester un peu fermes. Bien les égoutter.',
    'Faire fondre le beurre dans une casserole à feu moyen, ajouter la farine et remuer 1 min. Verser le lait peu à peu en fouettant et cuire 5 min, jusqu’à ce que la sauce nappe la cuillère.',
    'Saler, poivrer, ajouter la muscade et la moitié du fromage.',
    'Disposer les brocolis dans un plat à gratin, napper de béchamel et couvrir du reste de fromage.',
    'Enfourner 20 min, jusqu’à ce que le dessus soit doré et bouillonnant.'
  ]);

  R('gratin-chou-fleur-jambon', 'Gratin de chou-fleur au jambon', 'Française', 'Plat', 50, 'Facile', 4, [
    ['chou-fleur', 1], ['jambon', 4], ['beurre', 40, 'g'], ['farine', 40, 'g'], ['lait', 50, 'cl'],
    ['fromage-rape', 120, 'g'], ['muscade', 1, 'pincee', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Préchauffer le four à 200 °C. Détailler le chou-fleur en bouquets et les cuire 10 min dans une grande casserole d’eau bouillante salée, jusqu’à ce qu’ils soient juste tendres. Bien égoutter.',
    'Faire fondre le beurre dans une casserole à feu moyen, ajouter la farine et remuer 1 min. Verser le lait peu à peu en fouettant et cuire 5 min, jusqu’à épaississement. Saler, poivrer, ajouter la muscade et la moitié du fromage.',
    'Couper le jambon en lanières. Mélanger le chou-fleur et le jambon dans un plat à gratin.',
    'Napper de béchamel et couvrir du reste de fromage.',
    'Enfourner 20 à 25 min, jusqu’à ce que le gratin soit bien doré.'
  ]);

  R('gratin-pommes-de-terre-jambon', 'Gratin de pommes de terre au jambon', 'Française', 'Plat', 75, 'Facile', 4, [
    ['pommes-de-terre', 1000, 'g'], ['jambon', 4], ['creme-liquide', 30, 'cl'], ['lait', 20, 'cl'],
    ['fromage-rape', 100, 'g'], ['ail', 1, 'pc', 'opt'], ['beurre', 10, 'g', 'opt'], ['muscade', 1, 'pincee', 'opt'],
    ['sel', null], ['poivre', null]
  ], [
    'Préchauffer le four à 180 °C. Frotter un plat à gratin avec la gousse d’ail coupée en deux, puis le beurrer.',
    'Éplucher les pommes de terre et les couper en rondelles de 3 mm, sans les laver. Couper le jambon en lanières.',
    'Mélanger la crème et le lait avec du sel, du poivre et la muscade.',
    'Disposer la moitié des pommes de terre dans le plat, répartir le jambon et la moitié du fromage, puis couvrir du reste de pommes de terre. Verser le mélange crème-lait et parsemer du reste de fromage.',
    'Enfourner 55 min à 1 h, jusqu’à ce que le dessus soit doré et que la pointe d’un couteau s’enfonce sans résistance. Couvrir de papier d’aluminium si le gratin colore trop vite.'
  ]);

  R('gratin-savoyard', 'Gratin savoyard', 'Française', 'Plat', 80, 'Facile', 6, [
    ['pommes-de-terre', 1200, 'g'], ['beaufort', 150, 'g'], ['bouillon', 1], ['beurre', 40, 'g'], ['ail', 1],
    ['muscade', 1, 'pincee', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Préchauffer le four à 190 °C. Dissoudre le cube de bouillon dans 40 cl d’eau bouillante. Râper le beaufort.',
    'Frotter un plat à gratin avec la gousse d’ail coupée en deux et le beurrer avec 10 g de beurre.',
    'Éplucher les pommes de terre et les couper en rondelles de 3 mm. Les disposer en couches dans le plat en alternant avec le beaufort, du poivre, la muscade et très peu de sel. Terminer par du fromage.',
    'Verser le bouillon chaud : il doit arriver juste sous la dernière couche. Parsemer du reste de beurre en noisettes.',
    'Enfourner 1 h, jusqu’à ce que le bouillon soit absorbé, les pommes de terre fondantes et le dessus bien doré.'
  ]);

  R('gratin-pommes-de-terre-saumon-fume', 'Gratin de pommes de terre au saumon fumé', 'Française', 'Plat', 70, 'Facile', 4, [
    ['pommes-de-terre', 800, 'g'], ['saumon-fume', 6], ['creme-liquide', 30, 'cl'], ['lait', 10, 'cl'],
    ['beurre', 10, 'g'], ['aneth', 0.25, 'pc', 'opt'], ['fromage-rape', 50, 'g', 'opt'], ['poivre', null]
  ], [
    'Préchauffer le four à 180 °C et beurrer un plat à gratin.',
    'Éplucher les pommes de terre et les couper en rondelles de 3 mm. Couper le saumon fumé en lanières.',
    'Mélanger la crème et le lait avec l’aneth ciselé et du poivre. Ne pas saler : le saumon s’en charge.',
    'Disposer un tiers des pommes de terre dans le plat, couvrir de la moitié du saumon, puis recommencer et terminer par des pommes de terre. Verser la crème et parsemer de fromage.',
    'Enfourner 50 à 55 min, jusqu’à ce que les pommes de terre soient tendres sous la pointe d’un couteau et le dessus doré.'
  ]);

  R('gratin-poireaux-jambon', 'Poireaux au jambon gratinés', 'Française', 'Plat', 55, 'Facile', 4, [
    ['poireaux', 4], ['jambon', 4], ['beurre', 40, 'g'], ['farine', 40, 'g'], ['lait', 50, 'cl'],
    ['fromage-rape', 100, 'g'], ['muscade', 1, 'pincee', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Retirer le vert foncé des poireaux, les laver soigneusement et couper chaque blanc en deux tronçons. Les cuire 12 à 15 min dans une casserole d’eau bouillante salée, jusqu’à ce qu’ils soient tendres. Bien les égoutter en les pressant.',
    'Préchauffer le four à 200 °C. Faire fondre le beurre dans une casserole à feu moyen, ajouter la farine et remuer 1 min. Verser le lait peu à peu en fouettant et cuire 5 min, jusqu’à épaississement. Saler, poivrer, ajouter la muscade et la moitié du fromage.',
    'Couper les tranches de jambon en deux et enrouler chaque tronçon de poireau dans une demi-tranche.',
    'Ranger les roulés dans un plat à gratin, napper de béchamel et parsemer du reste de fromage.',
    'Enfourner 20 min, jusqu’à ce que le dessus soit doré et bouillonnant.'
  ]);

  R('gratin-poireaux', 'Gratin de poireaux', 'Française', 'Plat', 45, 'Facile', 4, [
    ['poireaux', 6], ['creme-fraiche', 20, 'cl'], ['fromage-rape', 100, 'g'], ['beurre', 25, 'g'],
    ['moutarde', 1, 'cs', 'opt'], ['muscade', 1, 'pincee', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Préchauffer le four à 200 °C. Retirer le vert foncé des poireaux, les fendre, les laver et les couper en tronçons de 2 cm.',
    'Les faire fondre dans le beurre, dans une sauteuse à feu moyen-doux, à couvert, 15 min, en remuant de temps en temps : ils doivent être tendres sans colorer. Saler, poivrer.',
    'Mélanger la crème avec la moutarde, la muscade et la moitié du fromage.',
    'Verser les poireaux dans un plat à gratin, napper de crème et couvrir du reste de fromage.',
    'Enfourner 20 min, jusqu’à ce que le dessus soit bien doré.'
  ]);

  R('gratin-epinards', 'Gratin d’épinards', 'Française', 'Plat', 45, 'Facile', 4, [
    ['epinards', 1000, 'g'], ['creme-fraiche', 20, 'cl'], ['oeufs', 2], ['fromage-rape', 100, 'g'], ['beurre', 20, 'g'],
    ['ail', 1, 'pc', 'opt'], ['muscade', 1, 'pincee', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Préchauffer le four à 200 °C. Laver et équeuter les épinards.',
    'Les faire tomber en plusieurs fois dans le beurre, avec l’ail haché, dans une grande sauteuse à feu vif, 4 à 5 min. Les égoutter dans une passoire en les pressant fortement, puis les hacher grossièrement.',
    'Battre les œufs avec la crème, la moitié du fromage, la muscade, du sel et du poivre. Y mélanger les épinards.',
    'Verser dans un plat à gratin et parsemer du reste de fromage.',
    'Enfourner 20 à 25 min, jusqu’à ce que le gratin soit pris et doré.'
  ]);

  R('gratin-potiron', 'Gratin de potiron', 'Française', 'Plat', 55, 'Facile', 4, [
    ['potiron', 1200, 'g'], ['creme-liquide', 20, 'cl'], ['fromage-rape', 100, 'g'], ['ail', 1],
    ['chapelure', 20, 'g', 'opt'], ['muscade', 1, 'pincee', 'opt'], ['beurre', 10, 'g', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Préchauffer le four à 200 °C. Éplucher le potiron, retirer les graines et couper la chair en cubes de 2 cm.',
    'Cuire les cubes 12 à 15 min à la vapeur ou dans une casserole d’eau bouillante salée, jusqu’à ce qu’ils soient tendres. Les égoutter longuement, puis les écraser grossièrement à la fourchette.',
    'Mélanger avec la crème, l’ail haché, la muscade et la moitié du fromage. Saler et poivrer.',
    'Verser dans un plat à gratin beurré, parsemer du reste de fromage et de chapelure.',
    'Enfourner 25 min, jusqu’à ce que le dessus soit bien gratiné.'
  ]);

  R('gratin-patates-douces', 'Gratin de patates douces', 'Française', 'Plat', 65, 'Facile', 4, [
    ['patate-douce', 3], ['creme-liquide', 30, 'cl'], ['ail', 2], ['fromage-rape', 80, 'g'],
    ['thym', 2, 'pc', 'opt'], ['beurre', 10, 'g', 'opt'], ['muscade', 1, 'pincee', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Préchauffer le four à 180 °C. Beurrer un plat à gratin.',
    'Éplucher les patates douces et les couper en rondelles de 3 mm.',
    'Chauffer la crème 3 à 4 min dans une casserole à feu moyen, avec l’ail haché, le thym effeuillé, la muscade, du sel et du poivre, jusqu’au premier frémissement.',
    'Disposer les rondelles en couches dans le plat, verser la crème chaude et parsemer de fromage.',
    'Enfourner 45 à 50 min, jusqu’à ce que les patates douces soient fondantes sous la pointe d’un couteau et le dessus doré.'
  ]);

  R('gratin-aubergines-chevre', 'Gratin d’aubergines à la tomate et au chèvre', 'Française', 'Plat', 60, 'Facile', 4, [
    ['aubergines', 3], ['tomates-concassees', 400, 'g'], ['chevre', 150, 'g'], ['ail', 2], ['huile-olive', 4, 'cs'],
    ['herbes-provence', 1, 'cc', 'opt'], ['basilic', 0.25, 'pc', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Préchauffer le four à 210 °C. Couper les aubergines en rondelles de 1 cm, les étaler sur deux plaques couvertes de papier cuisson, les badigeonner de 3 cuillerées d’huile et saler.',
    'Enfourner 20 min en les retournant à mi-cuisson, jusqu’à ce qu’elles soient tendres et dorées.',
    'Pendant ce temps, faire revenir l’ail haché 1 min dans le reste d’huile à feu moyen, ajouter les tomates concassées et les herbes de Provence. Laisser réduire 10 min à feu doux. Saler, poivrer.',
    'Dans un plat à gratin, alterner des couches d’aubergines et de sauce tomate. Terminer par le chèvre coupé en rondelles.',
    'Baisser le four à 190 °C et enfourner 20 min, jusqu’à ce que le chèvre soit doré. Parsemer de basilic ciselé.'
  ]);

  R('gratin-courgettes-chevre', 'Gratin de courgettes au chèvre', 'Française', 'Plat', 50, 'Facile', 4, [
    ['courgettes', 4], ['chevre', 150, 'g'], ['creme-fraiche', 20, 'cl'], ['oeufs', 2], ['huile-olive', 2, 'cs'],
    ['ail', 1, 'pc', 'opt'], ['thym', 2, 'pc', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Préchauffer le four à 190 °C. Couper les courgettes en rondelles de 5 mm.',
    'Les faire sauter dans l’huile à feu vif, avec l’ail haché, 8 à 10 min, jusqu’à ce qu’elles soient légèrement dorées et que leur eau soit évaporée. Saler, poivrer.',
    'Battre les œufs avec la crème, le thym effeuillé, du sel et du poivre.',
    'Étaler les courgettes dans un plat à gratin, verser l’appareil et répartir le chèvre coupé en rondelles.',
    'Enfourner 25 à 30 min, jusqu’à ce que le gratin soit pris et le chèvre doré.'
  ]);

  R('gratin-courgettes-riz', 'Gratin de courgettes au riz', 'Française', 'Plat', 60, 'Facile', 4, [
    ['courgettes', 4], ['riz', 120, 'g'], ['oeufs', 2], ['creme-fraiche', 20, 'cl'], ['fromage-rape', 100, 'g'],
    ['oignons', 1], ['huile-olive', 2, 'cs'], ['herbes-provence', 1, 'cc', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Préchauffer le four à 190 °C. Cuire le riz 8 min dans une casserole d’eau bouillante salée : il doit rester ferme, il finira de cuire au four. L’égoutter.',
    'Râper grossièrement les courgettes sans les éplucher et émincer l’oignon. Faire revenir l’oignon 3 min dans l’huile à feu moyen, puis ajouter les courgettes et cuire 8 min à feu vif pour évaporer leur eau. Saler, poivrer.',
    'Battre les œufs avec la crème, les herbes de Provence et la moitié du fromage.',
    'Mélanger le riz, les courgettes et l’appareil, puis verser dans un plat à gratin. Parsemer du reste de fromage.',
    'Enfourner 30 min, jusqu’à ce que le gratin soit pris et bien doré.'
  ]);

  R('gratin-carottes', 'Gratin de carottes', 'Française', 'Plat', 55, 'Facile', 4, [
    ['carottes', 8], ['creme-fraiche', 20, 'cl'], ['oeufs', 2], ['fromage-rape', 80, 'g'],
    ['cumin', 1, 'cc', 'opt'], ['beurre', 10, 'g', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Préchauffer le four à 190 °C. Éplucher les carottes et les couper en rondelles de 5 mm.',
    'Les cuire 12 min dans une casserole d’eau bouillante salée, jusqu’à ce qu’elles soient tendres mais encore un peu fermes. Bien égoutter.',
    'Battre les œufs avec la crème, le cumin, la moitié du fromage, du sel et du poivre.',
    'Disposer les carottes dans un plat à gratin beurré, verser l’appareil et parsemer du reste de fromage.',
    'Enfourner 25 à 30 min, jusqu’à ce que le gratin soit pris et doré.'
  ]);

  R('gratin-fenouil', 'Gratin de fenouil au parmesan', 'Italienne', 'Plat', 50, 'Facile', 4, [
    ['fenouil', 4], ['parmesan', 60, 'g'], ['creme-liquide', 20, 'cl'], ['beurre', 15, 'g'],
    ['chapelure', 20, 'g', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Préchauffer le four à 200 °C. Retirer les tiges et la première feuille des fenouils, puis couper chaque bulbe en 6 quartiers.',
    'Les cuire 12 à 15 min dans une casserole d’eau bouillante salée, jusqu’à ce que la pointe d’un couteau s’enfonce facilement. Bien égoutter.',
    'Ranger les quartiers dans un plat à gratin beurré. Saler légèrement, poivrer et verser la crème.',
    'Couvrir de parmesan râpé et de chapelure.',
    'Enfourner 20 à 25 min, jusqu’à ce que le dessus soit doré et croustillant.'
  ]);

  R('gratin-legumes', 'Gratin de légumes', 'Française', 'Plat', 60, 'Facile', 4, [
    ['pommes-de-terre', 400, 'g'], ['carottes', 3], ['courgettes', 2], ['creme-liquide', 25, 'cl'], ['oeufs', 2],
    ['fromage-rape', 100, 'g'], ['brocoli', 0.5, 'pc', 'opt'], ['ail', 1, 'pc', 'opt'], ['muscade', 1, 'pincee', 'opt'],
    ['beurre', 10, 'g', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Préchauffer le four à 190 °C. Éplucher les pommes de terre et les carottes, et les couper en rondelles de 5 mm. Couper les courgettes en rondelles de 1 cm et détailler le brocoli en petits bouquets.',
    'Plonger les pommes de terre et les carottes dans une grande casserole d’eau bouillante salée. Au bout de 8 min, ajouter les courgettes et le brocoli et cuire encore 4 min. Bien égoutter.',
    'Battre les œufs avec la crème, l’ail haché, la muscade, la moitié du fromage, du sel et du poivre.',
    'Répartir les légumes dans un plat à gratin beurré, verser l’appareil et parsemer du reste de fromage.',
    'Enfourner 30 min, jusqu’à ce que le gratin soit pris et doré.'
  ]);

  R('tian-pommes-de-terre-tomates', 'Tian de pommes de terre, tomates et oignons', 'Française', 'Plat', 80, 'Facile', 4, [
    ['pommes-de-terre', 600, 'g'], ['tomates', 4], ['oignons', 2], ['ail', 2], ['huile-olive', 4, 'cs'],
    ['thym', 2, 'pc', 'opt'], ['herbes-provence', 1, 'cc', 'opt'], ['parmesan', 40, 'g', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Préchauffer le four à 180 °C. Frotter un plat à gratin avec une gousse d’ail coupée en deux et l’huiler.',
    'Éplucher les pommes de terre et les couper en rondelles de 3 mm. Couper les tomates et les oignons en rondelles de la même épaisseur. Hacher l’ail restant.',
    'Ranger les légumes debout dans le plat, bien serrés, en alternant pomme de terre, tomate et oignon.',
    'Parsemer d’ail haché, de thym et d’herbes de Provence, saler, poivrer et arroser du reste d’huile d’olive.',
    'Couvrir de papier d’aluminium et enfourner 40 min. Retirer le papier, parsemer de parmesan râpé et poursuivre 20 à 25 min, jusqu’à ce que les pommes de terre soient fondantes et le dessus doré.'
  ]);

  R('gratin-poisson', 'Gratin de poisson', 'Française', 'Plat', 45, 'Facile', 4, [
    ['cabillaud', 600, 'g'], ['beurre', 40, 'g'], ['farine', 40, 'g'], ['lait', 50, 'cl'], ['fromage-rape', 80, 'g'],
    ['champignons', 200, 'g', 'opt'], ['chapelure', 20, 'g', 'opt'], ['citron', 0.5, 'pc', 'opt'],
    ['muscade', 1, 'pincee', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Préchauffer le four à 200 °C. Couper le poisson en gros cubes en retirant les arêtes, les saler, les poivrer et les arroser de jus de citron.',
    'Faire fondre le beurre dans une casserole à feu moyen. Y faire revenir les champignons émincés 5 min, puis ajouter la farine et remuer 1 min.',
    'Verser le lait peu à peu en fouettant et cuire 5 min à feu moyen, jusqu’à ce que la sauce épaississe. Saler, poivrer, ajouter la muscade et la moitié du fromage.',
    'Répartir le poisson cru dans un plat à gratin, napper de sauce, puis parsemer du reste de fromage et de chapelure.',
    'Enfourner 20 min, jusqu’à ce que le dessus soit doré et que le poisson s’effeuille facilement.'
  ]);

  R('parmentier-poisson', 'Parmentier de poisson', 'Française', 'Plat', 60, 'Facile', 4, [
    ['pommes-de-terre', 1000, 'g'], ['cabillaud', 500, 'g'], ['lait', 40, 'cl'], ['beurre', 50, 'g'],
    ['fromage-rape', 60, 'g'], ['echalotes', 2, 'pc', 'opt'], ['persil', 0.25, 'pc', 'opt'], ['laurier', 1, 'pc', 'opt'],
    ['muscade', 1, 'pincee', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Éplucher les pommes de terre, les couper en morceaux et les couvrir d’eau froide salée dans une casserole. Porter à ébullition, puis cuire 20 à 25 min à petits bouillons, jusqu’à ce que la pointe d’un couteau s’y enfonce sans résistance.',
    'Pendant ce temps, porter le lait à frémissement avec le laurier. Y pocher le poisson 8 min à feu doux, à couvert. L’égoutter en gardant le lait, puis l’effeuiller en retirant les arêtes.',
    'Faire fondre les échalotes hachées dans 10 g de beurre, 3 min à feu doux. Les mélanger au poisson avec le persil haché, du sel et du poivre.',
    'Égoutter les pommes de terre et les écraser avec le reste du beurre et 20 cl du lait de pochage filtré. Saler, ajouter la muscade.',
    'Préchauffer le four à 200 °C. Étaler le poisson dans un plat, couvrir de purée, strier à la fourchette et parsemer de fromage.',
    'Enfourner 20 min à 200 °C, jusqu’à ce que le dessus soit doré.'
  ]);

  R('parmentier-patate-douce', 'Parmentier de bœuf à la patate douce', 'Française', 'Plat', 60, 'Facile', 4, [
    ['patate-douce', 3], ['boeuf-hache', 500, 'g'], ['oignons', 2], ['beurre', 30, 'g'], ['huile-olive', 1, 'cs'],
    ['ail', 1, 'pc', 'opt'], ['concentre-tomate', 1, 'cs', 'opt'], ['cumin', 1, 'cc', 'opt'],
    ['fromage-rape', 60, 'g', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Éplucher les patates douces, les couper en gros cubes et les cuire 15 à 20 min dans une casserole d’eau bouillante salée, jusqu’à ce qu’elles s’écrasent facilement.',
    'Pendant ce temps, faire revenir les oignons et l’ail hachés dans l’huile, dans une sauteuse, 5 min à feu moyen. Ajouter la viande, le concentré de tomate et le cumin, et cuire 8 min à feu vif en égrenant. Saler, poivrer.',
    'Égoutter soigneusement les patates douces et les écraser avec le beurre. Saler et poivrer.',
    'Préchauffer le four à 200 °C. Étaler la viande dans un plat à gratin, couvrir de purée et parsemer de fromage.',
    'Enfourner 20 min à 200 °C, jusqu’à ce que le dessus soit légèrement doré.'
  ]);

  R('parmentier-lentilles', 'Parmentier végétarien aux lentilles', 'Française', 'Plat', 70, 'Facile', 4, [
    ['pommes-de-terre', 1000, 'g'], ['lentilles', 250, 'g'], ['oignons', 1], ['carottes', 2], ['lait', 20, 'cl'],
    ['beurre', 50, 'g'], ['concentre-tomate', 1, 'cs', 'opt'], ['ail', 1, 'pc', 'opt'], ['thym', 2, 'pc', 'opt'],
    ['fromage-rape', 60, 'g', 'opt'], ['muscade', 1, 'pincee', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Hacher l’oignon et l’ail, couper les carottes en petits dés. Les faire revenir 5 min dans 10 g de beurre, dans une casserole à feu moyen.',
    'Ajouter les lentilles rincées, le concentré de tomate, le thym et 75 cl d’eau. Couvrir et laisser mijoter 25 à 30 min à feu doux, jusqu’à ce que les lentilles soient tendres et le liquide presque absorbé. Saler et poivrer en fin de cuisson.',
    'Pendant ce temps, éplucher les pommes de terre, les couper en morceaux et les couvrir d’eau froide salée. Porter à ébullition, puis cuire 20 à 25 min à petits bouillons, jusqu’à ce qu’elles soient tendres à la pointe du couteau.',
    'Les égoutter et les écraser avec le lait chaud, le reste du beurre et la muscade. Saler.',
    'Préchauffer le four à 200 °C. Étaler les lentilles dans un plat à gratin, couvrir de purée et parsemer de fromage.',
    'Enfourner 20 min à 200 °C, jusqu’à ce que le dessus soit doré.'
  ]);

  /* ───────────── Galettes, crêpes salées et galettes de légumes ───────────── */

  R('galettes-completes-express', 'Galettes complètes express', 'Bretonne', 'Plat', 20, 'Facile', 4, [
    ['galettes-de-sarrasin', 4], ['oeufs', 4], ['jambon', 4], ['fromage-rape', 120, 'g'], ['beurre-demi-sel', 30, 'g'],
    ['poivre', null]
  ], [
    'Faire fondre une noisette de beurre dans une grande poêle à feu moyen et y réchauffer une galette 30 s.',
    'Parsemer de fromage râpé, poser une tranche de jambon et casser un œuf au centre, en étalant un peu le blanc à la spatule.',
    'Rabattre les quatre bords pour former un carré en laissant le jaune apparent.',
    'Cuire 3 à 4 min à feu moyen, à couvert la dernière minute, jusqu’à ce que le blanc soit pris, le jaune encore coulant et le dessous croustillant. Poivrer.',
    'Garder au chaud et recommencer avec les autres galettes.'
  ]);

  R('galettes-saucisse', 'Galettes-saucisses', 'Bretonne', 'Plat', 30, 'Facile', 4, [
    ['galettes-de-sarrasin', 4], ['saucisses', 4], ['beurre-demi-sel', 20, 'g'],
    ['moutarde', 2, 'cs', 'opt'], ['oignons', 2, 'pc', 'opt']
  ], [
    'Piquer les saucisses et les cuire dans une poêle à feu moyen, 15 à 18 min, en les retournant régulièrement, jusqu’à ce qu’elles soient bien dorées et cuites à cœur.',
    'Si on ajoute les oignons, les émincer et les faire fondre 10 min à feu doux dans la même poêle, dans le gras des saucisses.',
    'Réchauffer chaque galette 1 min de chaque côté dans une poêle beurrée, à feu moyen.',
    'Tartiner d’un trait de moutarde, poser une saucisse et un peu d’oignons au bord de la galette, puis rouler serré. Manger chaud, à la main.'
  ]);

  R('galettes-saumon-fume', 'Galettes au saumon fumé et à la crème citronnée', 'Bretonne', 'Plat', 15, 'Facile', 4, [
    ['galettes-de-sarrasin', 4], ['saumon-fume', 8], ['creme-fraiche', 15, 'cl'], ['citron', 0.5],
    ['beurre-demi-sel', 20, 'g'], ['ciboulette', 0.25, 'pc', 'opt'], ['aneth', 0.25, 'pc', 'opt'], ['poivre', null]
  ], [
    'Mélanger la crème avec le zeste et quelques gouttes de jus du demi-citron, la ciboulette ciselée et du poivre.',
    'Faire fondre une noisette de beurre dans une poêle à feu moyen et y réchauffer une galette 1 min de chaque côté, jusqu’à ce qu’elle soit souple et légèrement croustillante.',
    'Hors du feu, étaler une cuillerée de crème citronnée, poser 2 tranches de saumon et rabattre les bords en carré.',
    'Recommencer avec les autres galettes. Servir aussitôt avec le reste de crème et l’aneth.'
  ]);

  R('galettes-chevre-miel', 'Galettes chèvre-miel aux noix', 'Bretonne', 'Plat', 20, 'Facile', 4, [
    ['galettes-de-sarrasin', 4], ['chevre', 200, 'g'], ['miel', 2, 'cs'], ['beurre-demi-sel', 20, 'g'],
    ['cerneaux-de-noix', 40, 'g', 'opt'], ['roquette', 40, 'g', 'opt'], ['poivre', null]
  ], [
    'Couper le chèvre en rondelles et concasser les noix.',
    'Faire fondre une noisette de beurre dans une poêle à feu moyen et y réchauffer une galette 30 s.',
    'Répartir le chèvre au centre, ajouter les noix et poivrer. Rabattre les bords en carré.',
    'Cuire 3 min à feu moyen, à couvert, jusqu’à ce que le chèvre soit fondant et le dessous croustillant.',
    'Arroser de miel et servir avec la roquette. Recommencer avec les autres galettes.'
  ]);

  R('galettes-savoyardes', 'Galettes savoyardes pommes de terre, lardons et raclette', 'Française', 'Plat', 50, 'Facile', 4, [
    ['galettes-de-sarrasin', 4], ['pommes-de-terre', 400, 'g'], ['lardons', 150, 'g'], ['fromage-a-raclette', 200, 'g'],
    ['oignons', 1, 'pc', 'opt'], ['creme-fraiche', 8, 'cl', 'opt'], ['beurre', 20, 'g'], ['poivre', null]
  ], [
    'Cuire les pommes de terre avec leur peau 20 à 25 min dans une casserole d’eau bouillante salée, jusqu’à ce que la pointe d’un couteau s’y enfonce facilement. Les éplucher et les couper en rondelles.',
    'Faire revenir les lardons et l’oignon émincé à sec dans une poêle, 5 min à feu moyen. Ajouter les pommes de terre et les faire dorer 3 min. Poivrer.',
    'Retirer la croûte du fromage à raclette et le couper en tranches.',
    'Faire fondre une noisette de beurre dans une poêle à feu moyen, y réchauffer une galette 30 s, étaler une cuillerée de crème, puis répartir le quart de la garniture et du fromage.',
    'Rabattre les bords et cuire 3 à 4 min à feu moyen, à couvert, jusqu’à ce que le fromage soit fondu. Recommencer avec les autres galettes.'
  ]);

  R('galettes-poireaux-lardons', 'Galettes poireaux-lardons', 'Bretonne', 'Plat', 40, 'Facile', 4, [
    ['galettes-de-sarrasin', 4], ['poireaux', 3], ['lardons', 150, 'g'], ['creme-fraiche', 10, 'cl'], ['beurre', 30, 'g'],
    ['fromage-rape', 60, 'g', 'opt'], ['poivre', null]
  ], [
    'Retirer le vert foncé des poireaux, les fendre, les laver et les émincer finement.',
    'Faire revenir les lardons à sec dans une sauteuse, 4 min à feu moyen. Ajouter 10 g de beurre et les poireaux, couvrir et laisser fondre 15 min à feu doux en remuant de temps en temps.',
    'Ajouter la crème, poivrer et laisser réduire 2 min à feu moyen. Ne saler qu’après avoir goûté.',
    'Faire fondre une noisette de beurre dans une poêle à feu moyen, y réchauffer une galette 30 s, répartir le quart de la fondue de poireaux et un peu de fromage râpé.',
    'Rabattre les bords et cuire 2 à 3 min à feu moyen, jusqu’à ce que le dessous soit croustillant. Recommencer avec les autres galettes.'
  ]);

  R('crepes-roulees-jambon-fromage', 'Crêpes roulées jambon-fromage', 'Française', 'Plat', 15, 'Facile', 4, [
    ['crepes', 4], ['jambon', 4], ['fromage-rape', 120, 'g'], ['beurre', 20, 'g'],
    ['creme-fraiche', 6, 'cl', 'opt'], ['poivre', null]
  ], [
    'Étaler une fine couche de crème sur chaque crêpe, poser une tranche de jambon et parsemer de fromage râpé. Poivrer.',
    'Rouler les crêpes en serrant, ou les plier en quatre.',
    'Faire fondre le beurre dans une grande poêle à feu moyen et y poser les crêpes, pliure dessous. Cuire 2 à 3 min de chaque côté, jusqu’à ce qu’elles soient dorées et que le fromage soit fondu.'
  ]);

  R('galettes-courgettes', 'Galettes de courgettes', 'Française', 'Plat', 30, 'Facile', 4, [
    ['courgettes', 3], ['oeufs', 2], ['farine', 80, 'g'], ['parmesan', 50, 'g'], ['huile-olive', 3, 'cs'],
    ['ail', 1, 'pc', 'opt'], ['menthe', 0.25, 'pc', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Râper grossièrement les courgettes sans les éplucher. Les mélanger avec une demi-cuillerée à café de sel et les laisser dégorger 10 min dans une passoire, puis les presser fortement dans un torchon.',
    'Mélanger les courgettes avec les œufs, la farine, le parmesan râpé, l’ail haché et la menthe ciselée. Poivrer.',
    'Chauffer la moitié de l’huile 1 min dans une grande poêle à feu moyen. Y déposer des cuillerées de pâte et les aplatir à 1 cm d’épaisseur.',
    'Cuire 3 à 4 min de chaque côté à feu moyen, jusqu’à ce que les galettes soient bien dorées. Égoutter sur du papier absorbant.',
    'Recommencer avec le reste de pâte en rajoutant de l’huile.'
  ]);

  R('galettes-pommes-de-terre', 'Galettes de pommes de terre râpées', 'Française', 'Plat', 30, 'Facile', 4, [
    ['pommes-de-terre', 800, 'g'], ['oeufs', 2], ['farine', 30, 'g'], ['huile', 4, 'cs'],
    ['ail', 1, 'pc', 'opt'], ['persil', 0.25, 'pc', 'opt'], ['oignons', 1, 'pc', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Éplucher les pommes de terre et les râper avec une râpe à gros trous. Les presser fortement dans un torchon pour en extraire l’eau.',
    'Les mélanger aussitôt avec les œufs, la farine, l’ail et le persil hachés, l’oignon râpé, du sel et du poivre.',
    'Chauffer la moitié de l’huile 1 min dans une grande poêle à feu moyen. Y déposer des tas de pâte et les aplatir en galettes de 1 cm d’épaisseur.',
    'Cuire 5 min de chaque côté à feu moyen, jusqu’à ce qu’elles soient bien dorées et croustillantes, et tendres à cœur.',
    'Égoutter sur du papier absorbant et recommencer avec le reste de pâte et d’huile.'
  ]);

  R('galettes-carottes', 'Galettes de carottes au cumin', 'Française', 'Plat', 30, 'Facile', 4, [
    ['carottes', 5], ['oeufs', 2], ['farine', 60, 'g'], ['huile-olive', 3, 'cs'], ['cumin', 1, 'cc', 'opt'],
    ['oignons', 1, 'pc', 'opt'], ['coriandre', 0.25, 'pc', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Éplucher les carottes et les râper finement. Hacher l’oignon.',
    'Mélanger les carottes avec l’oignon, les œufs, la farine, le cumin et la coriandre ciselée. Saler et poivrer.',
    'Chauffer la moitié de l’huile 1 min dans une grande poêle à feu moyen. Y déposer des cuillerées de pâte et les aplatir à 1 cm d’épaisseur.',
    'Cuire 4 min de chaque côté à feu moyen, sans monter le feu pour que les carottes aient le temps de cuire, jusqu’à ce que les galettes soient bien dorées.',
    'Recommencer avec le reste de pâte et d’huile.'
  ]);

  R('galettes-chou-fleur', 'Galettes de chou-fleur au fromage', 'Française', 'Plat', 35, 'Facile', 4, [
    ['chou-fleur', 0.5], ['oeufs', 2], ['fromage-rape', 80, 'g'], ['farine', 50, 'g'], ['huile', 3, 'cs'],
    ['ciboulette', 0.25, 'pc', 'opt'], ['muscade', 1, 'pincee', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Détailler le chou-fleur en bouquets et les cuire 10 min dans une casserole d’eau bouillante salée, jusqu’à ce qu’ils soient bien tendres. Les égoutter longuement.',
    'Écraser grossièrement le chou-fleur à la fourchette. Ajouter les œufs, le fromage, la farine, la ciboulette ciselée et la muscade. Saler et poivrer.',
    'Chauffer la moitié de l’huile 1 min dans une grande poêle à feu moyen. Y déposer des cuillerées de pâte et les aplatir à 1 cm d’épaisseur.',
    'Cuire 3 à 4 min de chaque côté à feu moyen, en les retournant délicatement, jusqu’à ce que les galettes soient dorées.',
    'Recommencer avec le reste de pâte et d’huile.'
  ]);

  R('galettes-mais', 'Galettes de maïs', 'Américaine', 'Plat', 20, 'Facile', 4, [
    ['mais-doux', 300, 'g'], ['farine', 100, 'g'], ['oeufs', 2], ['lait', 8, 'cl'], ['huile', 3, 'cs'],
    ['ciboule', 0.5, 'pc', 'opt'], ['paprika', 1, 'cc', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Égoutter soigneusement le maïs.',
    'Fouetter la farine avec les œufs et le lait jusqu’à obtenir une pâte épaisse et lisse. Ajouter le maïs, la ciboule émincée et le paprika. Saler et poivrer.',
    'Chauffer la moitié de l’huile 1 min dans une grande poêle à feu moyen. Y déposer des cuillerées de pâte en les espaçant.',
    'Cuire 2 à 3 min de chaque côté à feu moyen, jusqu’à ce que les galettes soient gonflées et bien dorées.',
    'Recommencer avec le reste de pâte et d’huile. Servir chaud.'
  ]);
};
