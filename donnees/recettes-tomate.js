/* Recettes à base de conserves de tomate (pulpe, coulis, sauce tomate) — 0.9.2. Même format que recettes.js. */
'use strict';

module.exports = function ajouter(R) {

  /* ───── Sauce tomate cuisinée (bocal) ───── */

  R('pates-sauce-tomate-express', 'Pâtes à la sauce tomate express', 'Italienne', 'Plat', 25, 'Facile', 4, [
    ['pates', 400, 'g'], ['sauce-tomate-cuisinee', 40, 'cl'], ['ail', 1], ['huile-olive', 2, 'cs'],
    ['parmesan', 40, 'g', 'opt'], ['basilic', 0.5, 'pc', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Porter 4 L d’eau salée à ébullition à feu vif et y cuire les pâtes 10 à 12 min à gros bouillons (selon le paquet), jusqu’à ce qu’elles soient al dente.',
    'Pendant ce temps, faire revenir l’ail écrasé 1 min dans l’huile d’olive à feu doux, sans le colorer.',
    'Ajouter la sauce tomate et la laisser chauffer 5 min à feu doux. Poivrer.',
    'Égoutter les pâtes en gardant une petite louche d’eau de cuisson. Les verser dans la sauce et mélanger 1 min à feu moyen, en ajoutant un peu d’eau de cuisson si la sauce est trop épaisse.',
    'Servir aussitôt avec le parmesan râpé et le basilic ciselé.'
  ]);

  R('gnocchis-sorrentine', 'Gnocchis à la sorrentine', 'Italienne', 'Plat', 30, 'Facile', 4, [
    ['gnocchis', 800, 'g'], ['sauce-tomate-cuisinee', 50, 'cl'], ['mozzarella', 250, 'g'], ['parmesan', 40, 'g'],
    ['huile-olive', 1, 'cs'], ['basilic', 0.5, 'pc', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Préchauffer le four à 200 °C et huiler un plat à gratin.',
    'Chauffer la sauce tomate 5 min à feu doux. Couper la mozzarella en dés et la laisser égoutter.',
    'Plonger les gnocchis dans une grande casserole d’eau salée bouillante et les retirer à l’écumoire dès qu’ils remontent à la surface (2 à 3 min).',
    'Mélanger les gnocchis avec la sauce et le basilic ciselé, poivrer, puis verser dans le plat.',
    'Répartir la mozzarella et le parmesan râpé sur le dessus.',
    'Enfourner 12 à 15 min, jusqu’à ce que le fromage soit fondu et légèrement doré.'
  ]);

  R('oeufs-poches-tomate', 'Œufs pochés à la sauce tomate', 'Italienne', 'Plat', 20, 'Facile', 2, [
    ['oeufs', 4], ['sauce-tomate-cuisinee', 40, 'cl'], ['ail', 1], ['huile-olive', 1, 'cs'],
    ['piment', 1, 'pincee', 'opt'], ['parmesan', 20, 'g', 'opt'], ['basilic', 0.5, 'pc', 'opt'], ['pain', 4, 'pc', 'opt'],
    ['sel', null], ['poivre', null]
  ], [
    'Dans une poêle de 24 cm avec couvercle, faire revenir l’ail écrasé 1 min dans l’huile à feu doux.',
    'Ajouter la sauce tomate et le piment, puis laisser frémir 5 min à feu doux.',
    'Creuser 4 puits dans la sauce avec le dos d’une cuillère et casser un œuf dans chacun. Saler légèrement les blancs.',
    'Couvrir et cuire 6 à 8 min à feu doux, jusqu’à ce que les blancs soient pris et les jaunes encore coulants.',
    'Poivrer, parsemer de parmesan et de basilic, et servir dans la poêle avec le pain grillé.'
  ]);

  R('polenta-sauce-tomate', 'Polenta crémeuse à la sauce tomate', 'Italienne', 'Plat', 25, 'Facile', 4, [
    ['polenta', 200, 'g'], ['sauce-tomate-cuisinee', 40, 'cl'], ['parmesan', 60, 'g'], ['beurre', 30, 'g'],
    ['ail', 1], ['huile-olive', 1, 'cs'], ['basilic', 0.5, 'pc', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Faire revenir l’ail écrasé 1 min dans l’huile à feu doux, ajouter la sauce tomate et la laisser frémir 10 min à feu doux.',
    'Porter 1 L d’eau salée à ébullition. Verser la polenta en pluie en fouettant pour éviter les grumeaux.',
    'Cuire 5 min à feu doux en remuant sans cesse (polenta précuite ; vérifier le paquet), jusqu’à ce qu’elle épaississe et se détache des parois.',
    'Hors du feu, incorporer le beurre et 40 g de parmesan râpé. Poivrer.',
    'Répartir la polenta dans des assiettes creuses, napper de sauce tomate, parsemer du reste de parmesan et de basilic ciselé.'
  ]);

  R('pain-perdu-sale-tomate', 'Pain perdu salé à la tomate et mozzarella', 'Française', 'Plat', 30, 'Facile', 4, [
    ['pain', 8, 'pc'], ['oeufs', 3], ['lait', 20, 'cl'], ['sauce-tomate-cuisinee', 30, 'cl'],
    ['mozzarella', 250, 'g'], ['beurre', 30, 'g'], ['basilic', 0.5, 'pc', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Allumer le gril du four (250 °C, grille en haut). Chauffer la sauce tomate 5 min à feu doux.',
    'Battre les œufs avec le lait, saler et poivrer dans une assiette creuse.',
    'Tremper les tranches de pain rassis quelques secondes de chaque côté dans ce mélange.',
    'Les dorer à la poêle dans le beurre à feu moyen, 2 min par face, en 2 ou 3 fournées.',
    'Les disposer sur une plaque, napper chaque tranche de sauce tomate et poser une tranche de mozzarella.',
    'Passer 3 à 5 min sous le gril, jusqu’à ce que la mozzarella soit fondue et commence à dorer. Parsemer de basilic ciselé.'
  ]);

  R('conchiglioni-farcis', 'Conchiglioni farcis à la viande et à la ricotta', 'Italienne', 'Plat', 70, 'Moyenne', 4, [
    ['pates', 250, 'g'], ['boeuf-hache', 400, 'g'], ['ricotta', 250, 'g'], ['sauce-tomate-cuisinee', 60, 'cl'],
    ['parmesan', 50, 'g'], ['ail', 1], ['huile-olive', 2, 'cs'], ['basilic', 0.5, 'pc', 'opt'],
    ['sel', null], ['poivre', null]
  ], [
    'Préchauffer le four à 180 °C.',
    'Cuire les conchiglioni (grosses coquilles) 10 à 12 min dans 3 L d’eau salée bouillante (2 min de moins que le temps du paquet) : elles doivent rester fermes. Les égoutter et les étaler sur un plateau huilé.',
    'Faire revenir la viande dans l’huile 5 min à feu vif en l’égrainant, jusqu’à ce qu’elle soit dorée, en ajoutant l’ail écrasé la dernière minute. Saler, poivrer et laisser tiédir.',
    'Mélanger la viande avec la ricotta, la moitié du parmesan et le basilic ciselé.',
    'Verser la moitié de la sauce tomate dans un plat à gratin. Farcir les coquilles et les disposer côte à côte, ouverture vers le haut.',
    'Napper du reste de sauce, parsemer du reste de parmesan et couvrir d’aluminium.',
    'Enfourner 20 min, retirer l’aluminium et poursuivre 10 min, jusqu’à ce que le dessus soit gratiné.'
  ]);

  R('raviolis-gratines-tomate', 'Raviolis gratinés à la sauce tomate', 'Française', 'Plat', 30, 'Facile', 4, [
    ['raviolis', 800, 'g'], ['sauce-tomate-cuisinee', 50, 'cl'], ['fromage-rape', 100, 'g'],
    ['herbes-provence', 1, 'cc', 'opt'], ['poivre', null], ['sel', null]
  ], [
    'Préchauffer le four à 200 °C.',
    'Plonger les raviolis frais 2 min dans une grande casserole d’eau salée bouillante, puis les égoutter délicatement.',
    'Les mélanger dans un plat à gratin avec la sauce tomate et les herbes de Provence. Poivrer.',
    'Couvrir de fromage râpé et enfourner 15 min, jusqu’à ce que le dessus soit doré et que la sauce bouillonne sur les bords.'
  ]);

  /* ───── Coulis de tomate (passata) ───── */

  R('cabillaud-sauce-tomate', 'Cabillaud à la sauce tomate', 'Française', 'Plat', 30, 'Facile', 4, [
    ['cabillaud', 600, 'g'], ['coulis-tomate', 50, 'cl'], ['oignons', 1], ['ail', 2], ['huile-olive', 2, 'cs'],
    ['herbes-provence', 1, 'cc', 'opt'], ['persil', 0.5, 'pc', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Faire fondre l’oignon ciselé 5 min dans l’huile d’olive à feu moyen, dans une sauteuse avec couvercle. Ajouter l’ail haché et cuire 1 min.',
    'Verser le coulis, ajouter les herbes de Provence, saler, poivrer et laisser mijoter 10 min à feu doux.',
    'Couper le cabillaud en 4 pavés, les saler et les poser dans la sauce.',
    'Couvrir et cuire 8 à 10 min à feu doux, jusqu’à ce que la chair soit nacrée et s’effeuille facilement.',
    'Parsemer de persil ciselé et servir avec du riz ou des pommes de terre vapeur.'
  ]);

  R('riz-espagnole', 'Riz à l’espagnole', 'Espagnole', 'Plat', 45, 'Facile', 4, [
    ['riz', 250, 'g'], ['coulis-tomate', 25, 'cl'], ['oignons', 1], ['poivrons', 1], ['ail', 1],
    ['bouillon', 1], ['huile-olive', 2, 'cs'], ['chorizo', 100, 'g', 'opt'], ['paprika', 1, 'cc', 'opt'], ['sel', null]
  ], [
    'Faire revenir l’oignon et le poivron coupés en petits dés 5 min dans l’huile d’olive à feu moyen, dans une sauteuse avec couvercle.',
    'Ajouter l’ail haché et le chorizo en dés, et cuire 2 min à feu moyen.',
    'Verser le riz et le faire nacrer 2 min à feu moyen en remuant, jusqu’à ce que les grains deviennent translucides.',
    'Ajouter le coulis, 45 cl d’eau chaude, le cube de bouillon émietté et le paprika. Porter à ébullition à feu vif.',
    'Couvrir et cuire 18 min à feu doux sans remuer, jusqu’à ce que le liquide soit absorbé.',
    'Laisser reposer 5 min à couvert hors du feu, goûter pour le sel, puis égrainer à la fourchette.'
  ]);

  R('pates-ricotta-tomate', 'Pâtes à la ricotta et à la tomate', 'Italienne', 'Plat', 25, 'Facile', 4, [
    ['pates', 400, 'g'], ['coulis-tomate', 50, 'cl'], ['ricotta', 200, 'g'], ['ail', 1], ['huile-olive', 2, 'cs'],
    ['parmesan', 40, 'g', 'opt'], ['basilic', 0.5, 'pc', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Porter 4 L d’eau salée à ébullition à feu vif pour les pâtes (mafaldine, tagliatelles ou penne).',
    'Faire revenir l’ail écrasé 1 min dans l’huile à feu doux. Ajouter le coulis, saler, poivrer et laisser mijoter 10 min à feu doux.',
    'Pendant ce temps, cuire les pâtes 10 à 12 min dans l’eau bouillante (selon le paquet), jusqu’à ce qu’elles soient al dente.',
    'Égoutter les pâtes en gardant une louche d’eau de cuisson et les mélanger à la sauce.',
    'Hors du feu, ajouter la ricotta par cuillerées et mélanger juste assez pour faire des marbrures rosées, en détendant avec un peu d’eau de cuisson si besoin.',
    'Servir avec le parmesan râpé et le basilic ciselé.'
  ]);

  R('penne-rosa', 'Penne rosa à la crème et à la tomate', 'Italienne', 'Plat', 25, 'Facile', 4, [
    ['pates', 400, 'g'], ['coulis-tomate', 40, 'cl'], ['creme-liquide', 20, 'cl'], ['echalotes', 2], ['beurre', 20, 'g'],
    ['parmesan', 40, 'g'], ['concentre-tomate', 1, 'cs', 'opt'], ['piment', 1, 'pincee', 'opt'], ['basilic', 0.5, 'pc', 'opt'],
    ['sel', null], ['poivre', null]
  ], [
    'Porter 4 L d’eau salée à ébullition à feu vif pour les penne.',
    'Faire fondre les échalotes ciselées 3 min dans le beurre à feu doux, sans coloration. Ajouter le concentré de tomate et le piment et remuer 1 min.',
    'Verser le coulis et laisser mijoter 10 min à feu doux. Ajouter la crème, saler, poivrer et chauffer 2 min à feu doux sans faire bouillir.',
    'Cuire les penne 10 à 12 min dans l’eau bouillante (selon le paquet), al dente, puis les égoutter en gardant une louche d’eau de cuisson.',
    'Mélanger les pâtes à la sauce avec le parmesan râpé 1 min à feu doux, en ajoutant un peu d’eau de cuisson pour obtenir une sauce nappante. Parsemer de basilic.'
  ]);

  R('moules-sauce-tomate', 'Moules à la sauce tomate', 'Française', 'Plat', 40, 'Facile', 4, [
    ['moules', 2, 'kg'], ['coulis-tomate', 40, 'cl'], ['ail', 3], ['vin-blanc', 15, 'cl'], ['huile-olive', 2, 'cs'],
    ['piment', 1, 'pincee', 'opt'], ['persil', 1, 'pc', 'opt'], ['poivre', null]
  ], [
    'Gratter et rincer les moules à l’eau froide. Jeter celles qui sont cassées ou qui restent ouvertes quand on les tapote.',
    'Dans un grand faitout, faire revenir l’ail émincé et le piment 1 min dans l’huile à feu moyen.',
    'Verser le vin blanc et laisser bouillir 2 min à feu vif, puis ajouter le coulis et laisser mijoter 5 min à feu moyen. Poivrer.',
    'Ajouter les moules, couvrir et cuire 5 à 7 min à feu vif en secouant le faitout, jusqu’à ce qu’elles soient toutes ouvertes. Jeter celles qui restent fermées.',
    'Parsemer de persil haché et servir aussitôt avec du pain ou des frites.'
  ]);

  /* ───── Tomates pelées ───── */

  R('poulet-tomate-olives', 'Hauts de cuisse de poulet à la tomate et aux olives', 'Française', 'Plat', 70, 'Facile', 4, [
    ['hauts-de-cuisse-de-poulet', 8], ['tomates-pelees', 800, 'g'], ['oignons', 1], ['ail', 2], ['olives', 100, 'g'],
    ['huile-olive', 2, 'cs'], ['vin-blanc', 10, 'cl', 'opt'], ['thym', 2, 'pc', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Saler et poivrer les hauts de cuisse. Les dorer côté peau 8 min dans l’huile à feu moyen-vif dans une sauteuse, puis 3 min de l’autre côté. Réserver et retirer l’excès de graisse.',
    'Faire fondre l’oignon émincé 5 min à feu moyen dans la sauteuse, ajouter l’ail haché et cuire 1 min. Déglacer au vin blanc (ou avec 10 cl d’eau) et laisser réduire 1 min à feu vif.',
    'Ajouter les tomates pelées avec leur jus en les écrasant à la cuillère, puis le thym, et porter à frémissement à feu moyen.',
    'Remettre le poulet, peau vers le haut, couvrir et laisser mijoter 30 min à feu doux.',
    'Ajouter les olives et poursuivre 10 min à feu doux sans couvercle, jusqu’à ce que la sauce épaississe et que la chair se détache de l’os.'
  ]);

  R('haricots-blancs-tomate', 'Haricots blancs à la tomate', 'Française', 'Accompagnement', 30, 'Facile', 4, [
    ['haricots-blancs', 500, 'g'], ['tomates-pelees', 400, 'g'], ['oignons', 1], ['ail', 2], ['huile-olive', 2, 'cs'],
    ['thym', 1, 'pc', 'opt'], ['laurier', 1, 'pc', 'opt'], ['paprika-fume', 1, 'cc', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Rincer et égoutter les haricots blancs.',
    'Faire fondre l’oignon ciselé 5 min dans l’huile à feu moyen, puis ajouter l’ail haché et le paprika fumé et cuire 1 min.',
    'Ajouter les tomates pelées avec leur jus en les écrasant, le thym et le laurier. Laisser mijoter 10 min à feu doux.',
    'Ajouter les haricots et poursuivre 10 min à feu doux, en écrasant quelques haricots contre la paroi pour lier la sauce. Saler, poivrer et retirer le thym et le laurier.'
  ]);

  R('soupe-tomate', 'Soupe de tomate', 'Française', 'Soupe', 40, 'Facile', 4, [
    ['tomates-pelees', 800, 'g'], ['oignons', 1], ['ail', 1], ['huile-olive', 2, 'cs'], ['bouillon', 1],
    ['sucre', 5, 'g', 'opt'], ['creme-liquide', 10, 'cl', 'opt'], ['basilic', 0.5, 'pc', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Faire fondre l’oignon émincé 8 min dans l’huile à feu doux, sans coloration. Ajouter l’ail haché et cuire 1 min.',
    'Ajouter les tomates pelées avec leur jus, 40 cl d’eau, le cube de bouillon et le sucre (il corrige l’acidité).',
    'Porter à ébullition à feu vif, puis couvrir et laisser frémir 20 min à feu doux.',
    'Mixer finement, rectifier l’assaisonnement et allonger d’un peu d’eau si la soupe est trop épaisse.',
    'Servir avec un filet de crème et du basilic ciselé.'
  ]);

  R('spaghetti-amatriciana', 'Spaghetti all’amatriciana', 'Italienne', 'Plat', 30, 'Facile', 4, [
    ['spaghetti', 400, 'g'], ['guanciale', 150, 'g'], ['tomates-pelees', 400, 'g'], ['pecorino', 60, 'g'],
    ['vin-blanc', 5, 'cl', 'opt'], ['piment', 1, 'pincee', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Couper le guanciale en bâtonnets et le faire fondre à sec 8 min à feu moyen, jusqu’à ce que le gras soit translucide et le bord doré. Le retirer en laissant la graisse.',
    'Déglacer au vin blanc et laisser évaporer 1 min, puis ajouter les tomates pelées écrasées avec leur jus et le piment. Laisser mijoter 12 min à feu moyen-doux.',
    'Pendant ce temps, cuire les spaghetti 9 à 11 min dans 4 L d’eau salée bouillante (selon le paquet), jusqu’à ce qu’ils soient al dente.',
    'Remettre le guanciale dans la sauce. Égoutter les pâtes en gardant une louche d’eau de cuisson.',
    'Mélanger les pâtes avec la sauce 1 min à feu moyen, en ajoutant un peu d’eau de cuisson. Hors du feu, ajouter le pecorino râpé et poivrer.'
  ]);

  R('steaks-pizzaiola', 'Steaks à la pizzaiola', 'Italienne', 'Plat', 30, 'Facile', 4, [
    ['steak', 4], ['tomates-pelees', 400, 'g'], ['ail', 2], ['huile-olive', 3, 'cs'], ['origan', 1, 'cc'],
    ['capres', 1, 'cs', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Sortir les steaks du réfrigérateur 15 min avant la cuisson.',
    'Faire revenir l’ail émincé 1 min dans 2 cs d’huile à feu doux. Ajouter les tomates pelées écrasées avec leur jus et l’origan, saler et laisser mijoter 15 min à feu moyen.',
    'Saisir les steaks à feu vif dans une poêle très chaude avec le reste d’huile, 1 min par face (saignant) à 2 min par face (à point). Saler et poivrer.',
    'Les glisser dans la sauce avec les câpres et les napper 1 à 2 min à feu doux, sans prolonger pour qu’ils restent tendres.'
  ]);

  /* ───── Tomates concassées (pulpe) ───── */

  R('saucisses-sauce-tomate', 'Saucisses à la sauce tomate', 'Française', 'Plat', 45, 'Facile', 4, [
    ['saucisses', 8], ['tomates-concassees', 800, 'g'], ['oignons', 2], ['ail', 2], ['huile', 1, 'cs'],
    ['concentre-tomate', 1, 'cs', 'opt'], ['herbes-provence', 1, 'cc', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Piquer les saucisses et les dorer 8 min dans l’huile à feu moyen dans une sauteuse, en les retournant, jusqu’à ce qu’elles soient dorées sur toutes les faces. Réserver.',
    'Faire fondre les oignons émincés 5 min à feu moyen dans la même sauteuse. Ajouter l’ail haché et le concentré de tomate et remuer 1 min.',
    'Ajouter les tomates concassées et les herbes, saler légèrement, poivrer et porter à frémissement à feu moyen.',
    'Remettre les saucisses, couvrir et laisser mijoter 20 min à feu doux, puis 5 min à découvert pour épaissir la sauce.',
    'Servir avec une purée, du riz ou des pâtes.'
  ]);

  R('lentilles-tomate', 'Lentilles mijotées à la tomate', 'Française', 'Plat', 50, 'Facile', 4, [
    ['lentilles', 250, 'g'], ['tomates-concassees', 400, 'g'], ['oignons', 1], ['carottes', 1], ['ail', 1],
    ['huile-olive', 2, 'cs'], ['cumin', 1, 'cc', 'opt'], ['laurier', 1, 'pc', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Rincer les lentilles à l’eau froide.',
    'Faire revenir l’oignon et la carotte coupés en petits dés 5 min dans l’huile à feu moyen. Ajouter l’ail haché et le cumin et cuire 1 min.',
    'Ajouter les lentilles, les tomates concassées, le laurier et 60 cl d’eau. Porter à ébullition à feu vif.',
    'Couvrir et laisser mijoter 30 à 35 min à feu doux, jusqu’à ce que les lentilles soient tendres, en ajoutant un peu d’eau si elles attachent.',
    'Saler en fin de cuisson (le sel durcit les lentilles), poivrer et retirer le laurier.'
  ]);

  R('pizza-thon-olives', 'Pizza au thon et aux olives', 'Italienne', 'Plat', 30, 'Facile', 2, [
    ['pate-pizza', 1], ['tomates-concassees', 200, 'g'], ['thon-boite', 140, 'g'], ['mozzarella', 125, 'g'],
    ['oignon-rouge', 0.5], ['olives', 40, 'g', 'opt'], ['origan', 1, 'cc', 'opt'], ['huile-olive', 1, 'cs', 'opt'],
    ['sel', null], ['poivre', null]
  ], [
    'Préchauffer le four à 250 °C avec la plaque à l’intérieur.',
    'Égoutter les tomates concassées 10 min dans une passoire, puis les saler et les poivrer.',
    'Étaler la pâte sur une feuille de papier cuisson et la couvrir de tomates en laissant 1 cm de bord.',
    'Répartir le thon égoutté et émietté, l’oignon rouge en fines rondelles, les olives et la mozzarella en morceaux. Parsemer d’origan et arroser d’un filet d’huile.',
    'Glisser sur la plaque chaude en bas du four et cuire 10 à 12 min à 250 °C, jusqu’à ce que les bords soient dorés et le fromage bouillonnant.'
  ]);

  R('saute-porc-tomate', 'Sauté de porc à la tomate', 'Française', 'Plat', 105, 'Facile', 4, [
    ['porc-epaule', 800, 'g'], ['tomates-concassees', 400, 'g'], ['oignons', 2], ['ail', 2], ['farine', 15, 'g'],
    ['huile', 2, 'cs'], ['vin-blanc', 15, 'cl', 'opt'], ['bouquet-garni', 1, 'pc', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Couper l’épaule en cubes de 4 cm. Les dorer en deux fois dans l’huile à feu vif, 5 min par fournée, dans une cocotte. Saler, poivrer et réserver.',
    'Faire fondre les oignons émincés 5 min à feu moyen dans la cocotte, ajouter l’ail haché, puis saupoudrer de farine et remuer 1 min.',
    'Déglacer au vin blanc (ou avec 15 cl d’eau) en grattant le fond, puis ajouter les tomates concassées, 20 cl d’eau et le bouquet garni. Porter à frémissement à feu moyen.',
    'Remettre la viande, couvrir et laisser mijoter 1 h 15 à feu doux, jusqu’à ce que le porc soit fondant. Retirer le bouquet garni et rectifier l’assaisonnement.'
  ]);

  R('calamars-sauce-tomate', 'Calamars à la sauce tomate', 'Française', 'Plat', 65, 'Facile', 4, [
    ['calamars', 800, 'g'], ['tomates-concassees', 400, 'g'], ['oignons', 1], ['ail', 2], ['vin-blanc', 10, 'cl'],
    ['huile-olive', 2, 'cs'], ['piment', 1, 'pincee', 'opt'], ['persil', 0.5, 'pc', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Rincer les calamars, les couper en anneaux et bien les éponger.',
    'Faire fondre l’oignon ciselé 5 min dans l’huile à feu moyen, puis ajouter l’ail haché et le piment et cuire 1 min.',
    'Ajouter les calamars et les faire sauter 3 min à feu vif. Verser le vin blanc et laisser bouillir 2 min à feu vif.',
    'Ajouter les tomates concassées, saler, poivrer, couvrir et laisser mijoter 40 min à feu doux, jusqu’à ce que les calamars soient tendres.',
    'Si la sauce est trop liquide, poursuivre 5 min à découvert à feu moyen. Parsemer de persil haché.'
  ]);
};
