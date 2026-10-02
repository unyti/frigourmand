/* Variantes des grands classiques, ajoutées en 0.10 (même format que recettes.js). */
'use strict';

module.exports = function ajouter(R) {
  // Riz d’accompagnement (facultatif dans les recettes concernées).
  const RIZ = 'Pour le riz d’accompagnement : le rincer, le verser dans une casserole avec 1,5 fois son volume d’eau et une pincée de sel. Porter à ébullition à feu vif, couvrir, cuire 11 min à feu très doux, puis laisser gonfler 5 min hors du feu, à couvert.';

  /* ───────────── Plats au chorizo ───────────── */

  R('riz-chorizo', 'Riz au chorizo', 'Espagnole', 'Plat', 45, 'Facile', 4, [
    ['riz', 300, 'g'], ['chorizo', 150, 'g'], ['oignons', 1], ['poivrons', 1], ['tomates-concassees', 400, 'g'], ['ail', 1],
    ['bouillon', 1, 'pc', 'opt'], ['paprika', 1, 'cc', 'opt'], ['huile-olive', 1, 'cs'], ['persil', 0.25, 'pc', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Retirer la peau du chorizo et le couper en demi-rondelles. Émincer l’oignon, hacher l’ail et couper le poivron en dés.',
    'Dans une sauteuse, faire revenir le chorizo 3 min à feu moyen dans l’huile, jusqu’à ce qu’il rende son gras. Ajouter l’oignon et le poivron et cuire 5 min en remuant.',
    'Ajouter l’ail, le paprika et le riz, et remuer 1 min à feu moyen pour bien l’enrober de gras.',
    'Verser les tomates et 45 cl d’eau chaude, émietter le cube de bouillon, saler légèrement et poivrer. Porter à ébullition à feu vif (2 à 3 min).',
    'Couvrir et cuire 15 à 18 min à feu doux, sans remuer, jusqu’à ce que le riz soit tendre et le liquide absorbé. Laisser reposer 5 min à couvert, puis parsemer de persil ciselé.'
  ]);

  R('pommes-terre-chorizo', 'Pommes de terre sautées au chorizo', 'Espagnole', 'Plat', 40, 'Facile', 4, [
    ['pommes-de-terre', 1000, 'g'], ['chorizo', 150, 'g'], ['oignons', 1], ['ail', 2], ['huile-olive', 2, 'cs'],
    ['paprika-fume', 1, 'cc', 'opt'], ['persil', 0.25, 'pc', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Éplucher les pommes de terre et les couper en dés de 2 cm. Les rincer et bien les sécher dans un torchon.',
    'Les faire sauter dans l’huile, dans une grande poêle, 10 min à feu moyen-vif en remuant de temps en temps, puis 10 min à feu moyen à couvert, jusqu’à ce qu’elles soient dorées et tendres.',
    'Pendant ce temps, retirer la peau du chorizo et le couper en demi-rondelles. Émincer l’oignon et hacher l’ail.',
    'Ajouter le chorizo et l’oignon dans la poêle et cuire 5 min à feu moyen, à découvert, jusqu’à ce que l’oignon soit fondant.',
    'Ajouter l’ail et le paprika, cuire encore 1 min à feu moyen, saler peu, poivrer et parsemer de persil ciselé.'
  ]);

  R('pois-chiches-chorizo', 'Pois chiches au chorizo', 'Espagnole', 'Plat', 30, 'Facile', 4, [
    ['pois-chiches', 500, 'g'], ['chorizo', 150, 'g'], ['tomates-concassees', 400, 'g'], ['oignons', 1], ['ail', 2],
    ['paprika', 1, 'cc', 'opt'], ['epinards', 150, 'g', 'opt'], ['huile-olive', 1, 'cs'], ['sel', null], ['poivre', null]
  ], [
    'Retirer la peau du chorizo et le couper en rondelles. Émincer l’oignon et hacher l’ail. Rincer et égoutter les pois chiches.',
    'Faire revenir le chorizo et l’oignon dans l’huile, 5 min à feu moyen, jusqu’à ce que l’oignon soit translucide. Ajouter l’ail et le paprika et remuer 1 min.',
    'Ajouter les tomates, les pois chiches et 10 cl d’eau. Saler légèrement, poivrer et porter à frémissement à feu moyen (2 min).',
    'Laisser mijoter 15 min à feu doux, à découvert, jusqu’à ce que la sauce nappe les pois chiches.',
    'Ajouter les épinards 2 min avant la fin et les laisser tomber dans la sauce.'
  ]);

  R('lentilles-chorizo', 'Lentilles au chorizo', 'Espagnole', 'Plat', 50, 'Facile', 4, [
    ['lentilles', 300, 'g'], ['chorizo', 150, 'g'], ['oignons', 1], ['carottes', 2], ['ail', 2],
    ['concentre-tomate', 1, 'cs', 'opt'], ['laurier', 1, 'pc', 'opt'], ['huile-olive', 1, 'cs'], ['sel', null], ['poivre', null]
  ], [
    'Émincer l’oignon, hacher l’ail et couper les carottes en petits dés. Retirer la peau du chorizo et le couper en rondelles.',
    'Dans une cocotte, faire revenir le chorizo, l’oignon et les carottes dans l’huile, 5 min à feu moyen.',
    'Ajouter l’ail et le concentré de tomate, remuer 1 min, puis ajouter les lentilles rincées, le laurier et 90 cl d’eau froide. Ne pas saler.',
    'Porter à ébullition à feu vif, couvrir et laisser mijoter 25 à 30 min à feu doux : les lentilles doivent être tendres sans éclater et il doit rester un peu de jus.',
    'À la fin, saler, poivrer et retirer le laurier.'
  ]);

  R('cabillaud-chorizo', 'Cabillaud rôti au chorizo', 'Espagnole', 'Plat', 30, 'Facile', 4, [
    ['cabillaud', 600, 'g'], ['chorizo', 80, 'g'], ['tomates-cerises', 250, 'g'], ['ail', 1], ['huile-olive', 2, 'cs'],
    ['citron', 0.5, 'pc', 'opt'], ['persil', 0.25, 'pc', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Préchauffer le four à 200 °C. Couper le cabillaud en 4 pavés et les éponger.',
    'Retirer la peau du chorizo et le couper en fines rondelles. Couper les tomates cerises en deux et émincer l’ail.',
    'Disposer les tomates et l’ail dans un plat, arroser d’huile, poivrer et enfourner 5 min à 200 °C.',
    'Poser les pavés sur les tomates, saler très légèrement et couvrir chaque pavé de rondelles de chorizo qui se chevauchent.',
    'Cuire 10 à 12 min au four à 200 °C : la chair doit être nacrée et se détacher en gros pétales. Arroser du jus de cuisson et du jus de citron, parsemer de persil.'
  ]);

  R('haricots-blancs-chorizo', 'Haricots blancs au chorizo', 'Espagnole', 'Plat', 35, 'Facile', 4, [
    ['haricots-blancs', 500, 'g'], ['chorizo', 150, 'g'], ['oignons', 1], ['ail', 2], ['tomates-concassees', 400, 'g'],
    ['paprika-fume', 1, 'cc', 'opt'], ['thym', 1, 'pc', 'opt'], ['huile-olive', 1, 'cs'], ['sel', null], ['poivre', null]
  ], [
    'Rincer et égoutter les haricots. Retirer la peau du chorizo et le couper en dés. Émincer l’oignon et hacher l’ail.',
    'Dans une sauteuse, faire revenir le chorizo et l’oignon dans l’huile, 5 min à feu moyen. Ajouter l’ail et le paprika, remuer 1 min.',
    'Verser les tomates, ajouter le thym et laisser réduire 5 min à feu moyen.',
    'Ajouter les haricots et 10 cl d’eau, puis laisser mijoter 12 à 15 min à feu doux en remuant délicatement, jusqu’à ce que la sauce soit épaisse.',
    'Goûter, saler si besoin et poivrer.'
  ]);

  R('poelee-courgettes-chorizo', 'Poêlée de courgettes au chorizo', 'Espagnole', 'Plat', 25, 'Facile', 4, [
    ['courgettes', 4], ['chorizo', 120, 'g'], ['oignons', 1], ['ail', 1], ['huile-olive', 1, 'cs'],
    ['feta', 100, 'g', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Couper les courgettes en demi-rondelles de 5 mm. Retirer la peau du chorizo et le couper en demi-rondelles. Émincer l’oignon et hacher l’ail.',
    'Faire revenir le chorizo 2 min à feu moyen dans l’huile, dans une grande poêle, puis le réserver en laissant le gras dans la poêle.',
    'Y faire sauter l’oignon et les courgettes 8 à 10 min à feu vif, en remuant peu : elles doivent dorer et rester légèrement fermes.',
    'Ajouter l’ail et le chorizo, cuire 1 min à feu moyen, saler peu et poivrer. Parsemer de feta émiettée hors du feu.'
  ]);

  R('crevettes-chorizo', 'Crevettes sautées au chorizo', 'Espagnole', 'Plat', 15, 'Facile', 4, [
    ['crevettes', 400, 'g'], ['chorizo', 100, 'g'], ['ail', 2], ['huile-olive', 1, 'cs'], ['citron', 0.5],
    ['persil', 0.25, 'pc', 'opt'], ['piment', 1, 'pincee', 'opt'], ['poivre', null]
  ], [
    'Éponger les crevettes. Retirer la peau du chorizo et le couper en petits dés. Hacher l’ail.',
    'Faire revenir le chorizo dans l’huile, 3 min à feu moyen, jusqu’à ce qu’il soit légèrement croustillant.',
    'Monter à feu vif, ajouter les crevettes et les faire sauter 2 à 3 min : elles doivent être roses et fermes.',
    'Ajouter l’ail et le piment, remuer 30 s, puis arroser de jus de citron. Poivrer, parsemer de persil ciselé et servir aussitôt.'
  ]);

  R('petits-pois-chorizo', 'Petits pois au chorizo', 'Espagnole', 'Plat', 20, 'Facile', 4, [
    ['petits-pois', 600, 'g'], ['chorizo', 120, 'g'], ['oignons', 1], ['huile-olive', 1, 'cs'],
    ['menthe', 0.25, 'pc', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Retirer la peau du chorizo et le couper en petits dés. Émincer finement l’oignon.',
    'Dans une sauteuse, faire revenir le chorizo et l’oignon dans l’huile, 5 min à feu moyen.',
    'Ajouter les petits pois (frais ou surgelés, sans les décongeler) et 10 cl d’eau. Couvrir et cuire 8 à 10 min à feu moyen : ils doivent être tendres et rester bien verts.',
    'Découvrir, laisser évaporer 1 min à feu vif, saler peu, poivrer et ajouter la menthe ciselée.'
  ]);

  /* ───────────── Poêlées ───────────── */

  R('poelee-saucisses-pommes-terre', 'Poêlée de saucisses et pommes de terre', 'Française', 'Plat', 45, 'Facile', 4, [
    ['saucisses', 4], ['pommes-de-terre', 900, 'g'], ['oignons', 2], ['huile', 2, 'cs'],
    ['thym', 1, 'pc', 'opt'], ['moutarde', 1, 'cs', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Éplucher les pommes de terre et les couper en dés de 2 cm. Les rincer et les sécher. Émincer les oignons.',
    'Dans une grande poêle, faire dorer les saucisses 12 min à feu moyen dans 1 cs d’huile, en les retournant. Les réserver et les couper en gros tronçons.',
    'Ajouter le reste d’huile dans la poêle et faire sauter les pommes de terre 10 min à feu moyen-vif, puis ajouter les oignons et le thym.',
    'Couvrir et cuire 10 min à feu moyen en remuant deux ou trois fois, jusqu’à ce que les pommes de terre soient tendres.',
    'Remettre les saucisses, cuire 5 min à feu moyen-vif, à découvert, pour tout dorer : les saucisses doivent être cuites à cœur, sans rose. Saler, poivrer et servir avec la moutarde.'
  ]);

  R('poelee-poulet-legumes', 'Poêlée de poulet aux légumes', 'Française', 'Plat', 35, 'Facile', 4, [
    ['poulet', 500, 'g'], ['poivrons', 1], ['carottes', 2], ['champignons', 200, 'g'], ['oignons', 1], ['ail', 1],
    ['huile-olive', 2, 'cs'], ['herbes-provence', 1, 'cc', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Couper le poulet en lanières. Couper les carottes en fines rondelles, le poivron en lanières, les champignons en quartiers. Émincer l’oignon et hacher l’ail.',
    'Dans une grande poêle, saisir le poulet dans 1 cs d’huile, 5 min à feu vif, jusqu’à ce qu’il soit doré. Saler, poivrer et réserver.',
    'Dans la même poêle, faire revenir l’oignon et les carottes dans le reste d’huile, 5 min à feu moyen.',
    'Ajouter le poivron et les champignons et cuire 7 à 8 min à feu moyen-vif : les légumes doivent être tendres mais encore un peu croquants.',
    'Remettre le poulet avec l’ail et les herbes de Provence, cuire 2 min à feu moyen en remuant et rectifier l’assaisonnement.'
  ]);

  R('poelee-boeuf-hache-riz', 'Poêlée de bœuf haché au riz', 'Française', 'Plat', 40, 'Facile', 4, [
    ['boeuf-hache', 400, 'g'], ['riz', 250, 'g'], ['tomates-concassees', 400, 'g'], ['oignons', 1], ['ail', 1],
    ['bouillon', 1, 'pc', 'opt'], ['paprika', 1, 'cc', 'opt'], ['fromage-rape', 60, 'g', 'opt'], ['huile-olive', 1, 'cs'], ['sel', null], ['poivre', null]
  ], [
    'Émincer l’oignon et hacher l’ail.',
    'Dans une sauteuse, faire revenir l’oignon dans l’huile, 3 min à feu moyen. Ajouter le bœuf et le faire dorer 5 min à feu vif en l’émiettant à la spatule.',
    'Ajouter l’ail, le paprika et le riz, et remuer 1 min à feu moyen.',
    'Verser les tomates et 40 cl d’eau chaude, émietter le cube de bouillon, saler et poivrer. Porter à ébullition à feu vif (2 à 3 min).',
    'Couvrir et cuire 15 à 18 min à feu doux, jusqu’à ce que le riz soit tendre et le liquide absorbé.',
    'Parsemer de fromage râpé, couvrir 2 min hors du feu pour le faire fondre, puis servir.'
  ]);

  R('poelee-courgettes-poulet', 'Poêlée de courgettes au poulet et au citron', 'Française', 'Plat', 25, 'Facile', 4, [
    ['poulet', 500, 'g'], ['courgettes', 3], ['ail', 2], ['citron', 1], ['huile-olive', 2, 'cs'],
    ['basilic', 0.25, 'pc', 'opt'], ['parmesan', 30, 'g', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Couper le poulet en dés de 2 cm et les courgettes en demi-rondelles de 5 mm. Hacher l’ail.',
    'Saisir le poulet dans 1 cs d’huile, 5 à 6 min à feu vif, jusqu’à ce qu’il soit bien doré. Saler, poivrer et réserver.',
    'Faire sauter les courgettes dans le reste d’huile, 7 à 8 min à feu vif, sans trop remuer, jusqu’à ce qu’elles soient dorées et encore un peu fermes.',
    'Remettre le poulet, ajouter l’ail et cuire 1 min à feu moyen. Arroser du jus du citron, remuer et rectifier l’assaisonnement.',
    'Parsemer de basilic ciselé et de copeaux de parmesan.'
  ]);

  R('poelee-pommes-terre-champignons', 'Poêlée de pommes de terre aux champignons', 'Française', 'Plat', 35, 'Facile', 4, [
    ['pommes-de-terre', 800, 'g'], ['champignons', 400, 'g'], ['ail', 2], ['beurre', 20, 'g'], ['huile', 2, 'cs'],
    ['persil', 0.5, 'pc', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Éplucher les pommes de terre et les couper en dés de 1,5 cm. Les rincer et les sécher. Couper les champignons en quartiers et hacher l’ail.',
    'Faire sauter les pommes de terre dans l’huile, 10 min à feu moyen-vif, puis couvrir et cuire 10 min à feu moyen en remuant de temps en temps.',
    'Dans une seconde poêle, faire sauter les champignons dans le beurre, 6 à 8 min à feu vif, jusqu’à ce que leur eau soit évaporée et qu’ils soient dorés.',
    'Réunir champignons et pommes de terre, ajouter l’ail et cuire 2 min à feu moyen.',
    'Saler, poivrer et parsemer de persil ciselé.'
  ]);

  R('poelee-pommes-terre-lardons', 'Poêlée de pommes de terre aux lardons et aux oignons', 'Française', 'Plat', 40, 'Facile', 4, [
    ['pommes-de-terre', 1000, 'g'], ['lardons', 200, 'g'], ['oignons', 2], ['huile', 1, 'cs'],
    ['thym', 1, 'pc', 'opt'], ['persil', 0.25, 'pc', 'opt'], ['poivre', null]
  ], [
    'Éplucher les pommes de terre et les couper en rondelles de 5 mm. Les rincer et les sécher. Émincer les oignons.',
    'Dans une grande poêle, faire dorer les lardons 5 min à feu moyen, sans matière grasse. Les réserver en gardant le gras dans la poêle.',
    'Ajouter l’huile et les pommes de terre, et les faire sauter 10 min à feu moyen-vif en les retournant régulièrement.',
    'Ajouter les oignons et le thym, couvrir et cuire 10 à 12 min à feu moyen, jusqu’à ce que les pommes de terre soient tendres et dorées.',
    'Remettre les lardons 2 min à feu moyen, poivrer (inutile de saler) et parsemer de persil.'
  ]);

  R('poelee-boeuf-hache-courgettes', 'Poêlée de bœuf haché aux courgettes', 'Française', 'Plat', 25, 'Facile', 4, [
    ['boeuf-hache', 500, 'g'], ['courgettes', 3], ['oignons', 1], ['ail', 1], ['concentre-tomate', 1, 'cs'],
    ['huile-olive', 2, 'cs'], ['herbes-provence', 1, 'cc', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Couper les courgettes en dés de 1 cm. Émincer l’oignon et hacher l’ail.',
    'Faire sauter les courgettes dans 1 cs d’huile, 6 à 7 min à feu vif, jusqu’à ce qu’elles soient dorées. Saler et réserver.',
    'Dans la même poêle, faire revenir l’oignon 3 min à feu moyen dans le reste d’huile, puis ajouter le bœuf et le faire dorer 5 min à feu vif en l’émiettant.',
    'Ajouter l’ail, le concentré de tomate, les herbes de Provence et 5 cl d’eau. Remuer 2 min à feu moyen.',
    'Remettre les courgettes, réchauffer 1 min à feu moyen, saler et poivrer.'
  ]);

  /* ───────────── Woks et sautés ───────────── */

  R('porc-gingembre', 'Porc sauté au gingembre', 'Japonaise', 'Plat', 25, 'Facile', 4, [
    ['filet-mignon-de-porc', 500, 'g'], ['gingembre', 30, 'g'], ['oignons', 1], ['sauce-soja', 3, 'cs'], ['sucre', 10, 'g'],
    ['ail', 1, 'pc', 'opt'], ['huile', 2, 'cs'], ['riz', 250, 'g', 'opt'], ['graines-sesame', 1, 'cs', 'opt']
  ], [
    RIZ,
    'Couper le porc en tranches très fines. Râper le gingembre, émincer l’oignon et hacher l’ail.',
    'Mélanger la sauce soja, le sucre, le gingembre, l’ail et 3 cs d’eau.',
    'Dans une grande poêle ou un wok, faire revenir l’oignon dans 1 cs d’huile, 3 min à feu vif, puis le réserver.',
    'Saisir le porc dans le reste d’huile, 3 à 4 min à feu vif, en l’étalant bien pour qu’il dore sans bouillir.',
    'Remettre l’oignon, verser la sauce et laisser réduire 1 à 2 min à feu vif, jusqu’à ce qu’elle enrobe la viande. Parsemer de sésame.'
  ]);

  R('crevettes-sautees-legumes', 'Crevettes sautées aux légumes', 'Chinoise', 'Plat', 25, 'Facile', 4, [
    ['crevettes', 400, 'g'], ['poivrons', 1], ['courgettes', 1], ['carottes', 1], ['ail', 2], ['sauce-soja', 3, 'cs'],
    ['gingembre', 10, 'g', 'opt'], ['huile', 2, 'cs'], ['riz', 250, 'g', 'opt'], ['coriandre', 0.25, 'pc', 'opt']
  ], [
    RIZ,
    'Couper le poivron en lanières, la courgette en demi-rondelles fines et la carotte en bâtonnets fins. Hacher l’ail et râper le gingembre. Éponger les crevettes.',
    'Dans un wok, saisir les crevettes dans 1 cs d’huile, 2 min à feu vif, jusqu’à ce qu’elles soient roses. Réserver.',
    'Faire sauter la carotte 2 min à feu vif dans le reste d’huile, puis ajouter le poivron et la courgette et cuire 4 min en remuant : les légumes doivent rester croquants.',
    'Ajouter l’ail et le gingembre, remuer 30 s, puis remettre les crevettes et verser la sauce soja. Mélanger 1 min à feu vif et parsemer de coriandre.'
  ]);

  R('wok-legumes', 'Légumes sautés au wok', 'Chinoise', 'Plat', 25, 'Facile', 4, [
    ['brocoli', 1], ['carottes', 2], ['poivrons', 1], ['champignons', 200, 'g'], ['ail', 2], ['sauce-soja', 3, 'cs'],
    ['gingembre', 10, 'g', 'opt'], ['huile-sesame', 1, 'cs', 'opt'], ['huile', 2, 'cs'], ['graines-sesame', 1, 'cs', 'opt']
  ], [
    'Détailler le brocoli en petits bouquets. Couper les carottes en rondelles fines en biais, le poivron en lanières et les champignons en lamelles. Hacher l’ail et râper le gingembre.',
    'Chauffer l’huile dans un wok à feu vif. Faire sauter les carottes et le brocoli 3 min en remuant sans cesse.',
    'Ajouter 3 cs d’eau, couvrir 2 min à feu vif pour finir de cuire le brocoli à la vapeur, puis découvrir.',
    'Ajouter le poivron et les champignons et faire sauter 3 à 4 min à feu vif : les légumes doivent être brillants et encore croquants.',
    'Ajouter l’ail et le gingembre, remuer 30 s, puis verser la sauce soja et l’huile de sésame. Mélanger 1 min à feu vif et parsemer de sésame.'
  ]);

  R('poulet-saute-brocoli', 'Poulet sauté au brocoli', 'Chinoise', 'Plat', 30, 'Facile', 4, [
    ['poulet', 500, 'g'], ['brocoli', 1], ['ail', 2], ['sauce-soja', 4, 'cs'], ['maizena', 10, 'g'],
    ['gingembre', 10, 'g', 'opt'], ['miel', 1, 'cs', 'opt'], ['huile', 2, 'cs'], ['riz', 250, 'g', 'opt']
  ], [
    RIZ,
    'Couper le poulet en fines lanières et le mélanger avec la maïzena et 1 cs de sauce soja. Détailler le brocoli en petits bouquets, hacher l’ail et râper le gingembre.',
    'Cuire le brocoli 3 min à l’eau bouillante salée, puis l’égoutter : il doit rester bien vert et ferme.',
    'Saisir le poulet dans l’huile, dans un wok, 4 à 5 min à feu vif, jusqu’à ce qu’il soit doré.',
    'Ajouter l’ail et le gingembre, remuer 30 s, puis le brocoli, le reste de sauce soja, le miel et 5 cl d’eau.',
    'Laisser épaissir 1 à 2 min à feu vif en remuant, jusqu’à ce que la sauce soit nappante et le poulet cuit à cœur, sans rose.'
  ]);

  R('boeuf-saute-poivrons', 'Bœuf sauté aux poivrons', 'Chinoise', 'Plat', 25, 'Facile', 4, [
    ['boeuf-poeler', 500, 'g'], ['poivrons', 2], ['oignons', 1], ['ail', 2], ['sauce-soja', 3, 'cs'], ['maizena', 10, 'g'],
    ['sauce-huitre', 1, 'cs', 'opt'], ['huile', 3, 'cs'], ['riz', 250, 'g', 'opt']
  ], [
    RIZ,
    'Couper le bœuf en fines lamelles, perpendiculairement aux fibres, et le mélanger avec la maïzena et 1 cs de sauce soja. Couper les poivrons en lanières, émincer l’oignon et hacher l’ail.',
    'Dans un wok, saisir le bœuf dans 2 cs d’huile, 2 min à feu très vif, sans le cuire à cœur. Réserver.',
    'Faire sauter l’oignon et les poivrons dans le reste d’huile, 4 à 5 min à feu vif : ils doivent rester croquants.',
    'Ajouter l’ail, remuer 30 s, puis remettre le bœuf avec le reste de sauce soja, la sauce d’huître et 3 cs d’eau. Remuer 1 min à feu vif, le temps que la sauce épaississe.'
  ]);

  R('tofu-saute-legumes', 'Tofu sauté aux légumes', 'Chinoise', 'Plat', 30, 'Facile', 4, [
    ['tofu', 400, 'g'], ['carottes', 2], ['poivrons', 1], ['courgettes', 1], ['ail', 2], ['sauce-soja', 4, 'cs'], ['maizena', 20, 'g'],
    ['gingembre', 10, 'g', 'opt'], ['huile', 3, 'cs'], ['riz', 250, 'g', 'opt'], ['graines-sesame', 1, 'cs', 'opt']
  ], [
    RIZ,
    'Presser le tofu 10 min entre deux feuilles de papier absorbant, sous un poids, puis le couper en dés de 2 cm et les rouler dans la maïzena.',
    'Couper les carottes en bâtonnets fins, le poivron en lanières et la courgette en demi-rondelles. Hacher l’ail et râper le gingembre.',
    'Faire dorer le tofu dans 2 cs d’huile, 6 à 8 min à feu moyen-vif, en le retournant, jusqu’à ce qu’il soit croustillant sur toutes les faces. Réserver.',
    'Faire sauter les carottes 2 min à feu vif dans le reste d’huile, puis ajouter le poivron et la courgette et cuire 4 min à feu vif : les légumes doivent rester croquants.',
    'Ajouter l’ail et le gingembre, remuer 30 s, remettre le tofu et verser la sauce soja avec 3 cs d’eau. Mélanger 1 min à feu vif et parsemer de sésame.'
  ]);

  R('porc-hache-chou', 'Porc haché sauté au chou', 'Chinoise', 'Plat', 25, 'Facile', 4, [
    ['porc-hache', 400, 'g'], ['chou', 0.5], ['ail', 2], ['sauce-soja', 3, 'cs'], ['carottes', 1, 'pc', 'opt'],
    ['gingembre', 10, 'g', 'opt'], ['huile-sesame', 1, 'cs', 'opt'], ['huile', 2, 'cs'], ['riz', 250, 'g', 'opt'], ['poivre', null]
  ], [
    RIZ,
    'Retirer le trognon du chou et l’émincer en lanières de 1 cm. Râper la carotte, hacher l’ail et râper le gingembre.',
    'Dans un wok, faire dorer le porc dans l’huile, 5 min à feu vif, en l’émiettant à la spatule.',
    'Ajouter l’ail et le gingembre, remuer 30 s, puis le chou et la carotte.',
    'Faire sauter 6 à 8 min à feu vif en remuant souvent : le chou doit être tombé mais encore un peu croquant.',
    'Verser la sauce soja et l’huile de sésame, poivrer et mélanger 1 min à feu vif.'
  ]);

  /* ───────────── Currys simples ───────────── */

  R('curry-crevettes-coco', 'Curry de crevettes au lait de coco', 'Indienne', 'Plat', 25, 'Facile', 4, [
    ['crevettes', 500, 'g'], ['lait-coco', 40, 'cl'], ['oignons', 1], ['ail', 2], ['curry', 2, 'cc'], ['concentre-tomate', 1, 'cs'],
    ['gingembre', 10, 'g', 'opt'], ['citron-vert', 0.5, 'pc', 'opt'], ['huile', 1, 'cs'], ['riz', 250, 'g', 'opt'], ['coriandre', 0.25, 'pc', 'opt'], ['sel', null]
  ], [
    RIZ,
    'Émincer finement l’oignon, hacher l’ail et râper le gingembre.',
    'Faire fondre l’oignon dans l’huile, 5 min à feu moyen. Ajouter l’ail, le gingembre, le curry et le concentré de tomate et remuer 1 min à feu moyen.',
    'Verser le lait de coco, saler et laisser frémir 8 min à feu doux, jusqu’à ce que la sauce épaississe légèrement.',
    'Ajouter les crevettes et cuire 3 min à petits frémissements : elles doivent être roses et fermes, sans plus.',
    'Arroser de jus de citron vert et parsemer de coriandre.'
  ]);

  R('curry-lentilles-corail-epinards', 'Curry de lentilles corail aux épinards', 'Indienne', 'Plat', 35, 'Facile', 4, [
    ['lentilles-corail', 250, 'g'], ['epinards', 200, 'g'], ['lait-coco', 20, 'cl'], ['oignons', 1], ['ail', 2], ['curry', 2, 'cc'],
    ['gingembre', 10, 'g', 'opt'], ['huile', 1, 'cs'], ['citron', 0.5, 'pc', 'opt'], ['sel', null]
  ], [
    'Émincer l’oignon, hacher l’ail et râper le gingembre. Rincer les lentilles.',
    'Dans une casserole, faire fondre l’oignon dans l’huile, 5 min à feu moyen. Ajouter l’ail, le gingembre et le curry et remuer 1 min.',
    'Ajouter les lentilles et 60 cl d’eau. Porter à ébullition à feu vif, puis cuire 12 min à feu doux en remuant de temps en temps.',
    'Verser le lait de coco, ajouter les épinards et cuire 5 min à feu doux : les lentilles doivent être défaites et le curry crémeux.',
    'Hors du feu, saler et ajouter le jus de citron.'
  ]);

  R('curry-pois-chiches-patate-douce', 'Curry de pois chiches à la patate douce', 'Indienne', 'Plat', 45, 'Facile', 4, [
    ['pois-chiches', 400, 'g'], ['patate-douce', 2], ['lait-coco', 40, 'cl'], ['oignons', 1], ['ail', 2], ['curry', 2, 'cc'],
    ['gingembre', 10, 'g', 'opt'], ['huile', 1, 'cs'], ['coriandre', 0.25, 'pc', 'opt'], ['sel', null]
  ], [
    'Éplucher les patates douces et les couper en dés de 2 cm. Émincer l’oignon, hacher l’ail et râper le gingembre. Rincer et égoutter les pois chiches.',
    'Dans une cocotte, faire fondre l’oignon dans l’huile, 5 min à feu moyen. Ajouter l’ail, le gingembre et le curry et remuer 1 min.',
    'Ajouter les patates douces, le lait de coco et 20 cl d’eau. Saler, porter à frémissement, couvrir et cuire 15 min à feu doux.',
    'Ajouter les pois chiches et cuire encore 8 à 10 min à feu moyen, à découvert : la patate douce doit s’écraser facilement et la sauce être nappante.',
    'Parsemer de coriandre ciselée.'
  ]);

  R('curry-poulet-pommes-terre', 'Curry de poulet aux pommes de terre', 'Indienne', 'Plat', 50, 'Facile', 4, [
    ['poulet', 500, 'g'], ['pommes-de-terre', 500, 'g'], ['tomates-concassees', 400, 'g'], ['oignons', 2], ['ail', 2], ['curry', 2, 'cc'],
    ['gingembre', 10, 'g', 'opt'], ['yaourt', 1, 'pc', 'opt'], ['huile', 2, 'cs'], ['coriandre', 0.25, 'pc', 'opt'], ['sel', null]
  ], [
    'Couper le poulet en gros dés. Éplucher les pommes de terre et les couper en dés de 2 cm. Émincer les oignons, hacher l’ail et râper le gingembre.',
    'Dans une cocotte, faire dorer les oignons dans l’huile, 8 min à feu moyen. Ajouter l’ail, le gingembre et le curry et remuer 1 min.',
    'Ajouter le poulet et le faire revenir 3 min à feu moyen-vif pour l’enrober d’épices.',
    'Ajouter les pommes de terre, les tomates et 20 cl d’eau. Saler, porter à frémissement, couvrir et cuire 20 à 25 min à feu doux, jusqu’à ce que les pommes de terre soient tendres à la pointe du couteau et le poulet cuit à cœur.',
    'Hors du feu, incorporer le yaourt et parsemer de coriandre.'
  ]);

  R('curry-poisson-coco', 'Curry de poisson au lait de coco', 'Indienne', 'Plat', 30, 'Facile', 4, [
    ['cabillaud', 600, 'g'], ['lait-coco', 40, 'cl'], ['tomates', 2], ['oignons', 1], ['ail', 2], ['curry', 2, 'cc'],
    ['curcuma', 0.5, 'cc', 'opt'], ['citron-vert', 0.5, 'pc', 'opt'], ['huile', 1, 'cs'], ['riz', 250, 'g', 'opt'], ['coriandre', 0.25, 'pc', 'opt'], ['sel', null]
  ], [
    RIZ,
    'Couper le poisson en gros cubes de 4 cm et le saler légèrement. Émincer l’oignon, hacher l’ail et couper les tomates en dés.',
    'Dans une sauteuse, faire fondre l’oignon dans l’huile, 5 min à feu moyen. Ajouter l’ail, le curry et le curcuma et remuer 1 min.',
    'Ajouter les tomates, cuire 3 min à feu moyen, puis verser le lait de coco. Saler et laisser frémir 8 min à feu doux.',
    'Déposer le poisson dans la sauce, couvrir et pocher 5 à 6 min à feu doux, sans remuer, jusqu’à ce que la chair soit opaque et s’effeuille.',
    'Arroser de jus de citron vert et parsemer de coriandre.'
  ]);

  /* ───────────── Plats mijotés et viandes du quotidien ───────────── */

  R('saute-dinde-curry', 'Sauté de dinde au curry', 'Française', 'Plat', 30, 'Facile', 4, [
    ['escalopes-de-dinde', 4], ['oignons', 1], ['creme-liquide', 20, 'cl'], ['curry', 2, 'cc'], ['huile', 1, 'cs'], ['beurre', 15, 'g'],
    ['pommes', 1, 'pc', 'opt'], ['riz', 250, 'g', 'opt'], ['sel', null], ['poivre', null]
  ], [
    RIZ,
    'Couper la dinde en lanières. Émincer l’oignon. Éplucher la pomme et la couper en petits dés.',
    'Dans une sauteuse, faire dorer la dinde dans l’huile et le beurre, 5 min à feu vif. Saler, poivrer et réserver.',
    'Faire fondre l’oignon et la pomme dans la même sauteuse, 5 min à feu moyen. Saupoudrer de curry et remuer 1 min.',
    'Verser la crème et 5 cl d’eau, remettre la dinde et laisser mijoter 8 à 10 min à feu doux, jusqu’à ce que la sauce nappe la cuillère.'
  ]);

  R('saute-dinde-poivrons', 'Sauté de dinde aux poivrons', 'Française', 'Plat', 40, 'Facile', 4, [
    ['escalopes-de-dinde', 4], ['poivrons', 2], ['oignons', 1], ['ail', 2], ['tomates-concassees', 400, 'g'],
    ['paprika', 1, 'cc', 'opt'], ['huile-olive', 2, 'cs'], ['sel', null], ['poivre', null]
  ], [
    'Couper la dinde en gros dés. Couper les poivrons en lanières, émincer l’oignon et hacher l’ail.',
    'Dans une sauteuse, faire dorer la dinde dans 1 cs d’huile, 5 min à feu vif. Saler, poivrer et réserver.',
    'Faire revenir l’oignon et les poivrons dans le reste d’huile, 8 min à feu moyen, jusqu’à ce qu’ils soient souples.',
    'Ajouter l’ail et le paprika, remuer 1 min à feu moyen, puis verser les tomates et porter à frémissement.',
    'Remettre la dinde, couvrir à moitié et laisser mijoter 15 min à feu doux. Rectifier l’assaisonnement.'
  ]);

  R('emince-poulet-poireaux-creme', 'Émincé de poulet aux poireaux et à la crème', 'Française', 'Plat', 35, 'Facile', 4, [
    ['poulet', 500, 'g'], ['poireaux', 3], ['creme-fraiche', 20, 'cl'], ['beurre', 20, 'g'], ['huile', 1, 'cs'],
    ['moutarde', 1, 'cs', 'opt'], ['vin-blanc', 10, 'cl', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Couper le poulet en lanières. Fendre les poireaux, les laver soigneusement et les émincer finement (blanc et vert tendre).',
    'Dans une sauteuse, faire dorer le poulet dans l’huile, 5 min à feu vif. Saler, poivrer et réserver.',
    'Faire fondre les poireaux dans le beurre avec une pincée de sel, 10 min à feu doux et à couvert, sans les colorer.',
    'Verser le vin blanc et laisser réduire 2 min à feu vif. Ajouter la crème et la moutarde.',
    'Remettre le poulet et laisser mijoter 5 min à feu doux, jusqu’à ce que la sauce soit onctueuse.'
  ]);

  R('boulettes-boeuf-creme', 'Boulettes de bœuf à la crème', 'Française', 'Plat', 35, 'Facile', 4, [
    ['boeuf-hache', 500, 'g'], ['oignons', 1], ['oeufs', 1], ['chapelure', 40, 'g'], ['creme-liquide', 20, 'cl'], ['bouillon', 0.5],
    ['moutarde', 1, 'cs', 'opt'], ['beurre', 20, 'g'], ['huile', 1, 'cs'], ['persil', 0.25, 'pc', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Hacher très finement l’oignon. Le mélanger avec le bœuf, l’œuf, la chapelure, du sel et du poivre, sans trop travailler la farce.',
    'Avec les mains mouillées, former une vingtaine de boulettes de la taille d’une noix.',
    'Les faire dorer dans le beurre et l’huile, 8 min à feu moyen, en secouant la poêle pour les colorer de tous côtés. Réserver.',
    'Jeter l’excès de gras, verser 15 cl d’eau avec le demi-cube de bouillon émietté et gratter les sucs. Laisser réduire 2 min à feu vif.',
    'Ajouter la crème et la moutarde, remettre les boulettes et laisser mijoter 8 à 10 min à feu doux, jusqu’à ce que la sauce nappe. Parsemer de persil.'
  ]);

  R('montbeliard-lentilles', 'Saucisses de Montbéliard aux lentilles', 'Française', 'Plat', 50, 'Facile', 4, [
    ['saucisses-de-montbeliard', 4], ['lentilles', 300, 'g'], ['carottes', 2], ['oignons', 1],
    ['bouquet-garni', 1, 'pc', 'opt'], ['ail', 1, 'pc', 'opt'], ['beurre', 15, 'g'], ['moutarde', 1, 'cs', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Émincer l’oignon et couper les carottes en rondelles. Rincer les lentilles.',
    'Dans une cocotte, faire revenir l’oignon et les carottes dans le beurre, 5 min à feu moyen.',
    'Ajouter les lentilles, l’ail entier, le bouquet garni et 1 L d’eau froide. Ne pas saler. Porter à ébullition à feu vif.',
    'Poser les saucisses sur les lentilles, sans les piquer. Couvrir et laisser mijoter 30 min à feu doux, jusqu’à ce que les lentilles soient tendres.',
    'Retirer le bouquet garni, saler légèrement, poivrer et servir avec la moutarde.'
  ]);

  R('poulet-citron', 'Poulet au citron', 'Française', 'Plat', 30, 'Facile', 4, [
    ['poulet', 600, 'g'], ['citron', 2], ['ail', 2], ['miel', 1, 'cs'], ['farine', 20, 'g'], ['huile-olive', 2, 'cs'],
    ['thym', 2, 'pc', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Couper les blancs de poulet en deux dans l’épaisseur. Les saler, les poivrer et les fariner légèrement en tapotant pour retirer l’excédent.',
    'Presser 1 citron et demi, couper le reste en fines rondelles. Hacher l’ail.',
    'Faire dorer le poulet dans l’huile, 3 à 4 min par face à feu moyen-vif. Réserver.',
    'Baisser à feu moyen, ajouter l’ail et le thym, remuer 30 s, puis verser le jus de citron, le miel et 10 cl d’eau en grattant les sucs.',
    'Remettre le poulet avec les rondelles de citron et laisser mijoter 5 à 6 min à feu moyen, en le retournant une fois : la sauce doit être sirupeuse et le poulet cuit à cœur.'
  ]);

  R('escalopes-veau-creme-champignons', 'Escalopes de veau à la crème et aux champignons', 'Française', 'Plat', 25, 'Facile', 4, [
    ['escalopes-de-veau', 4], ['champignons', 300, 'g'], ['creme-fraiche', 20, 'cl'], ['echalotes', 2], ['beurre', 30, 'g'],
    ['vin-blanc', 10, 'cl', 'opt'], ['persil', 0.25, 'pc', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Émincer les champignons et ciseler les échalotes.',
    'Faire dorer les escalopes dans 15 g de beurre mousseux, 2 à 3 min par face à feu moyen-vif. Saler, poivrer et réserver sous une feuille d’aluminium.',
    'Dans la même poêle, faire sauter les champignons dans le reste du beurre, 5 min à feu vif, jusqu’à ce qu’ils soient dorés. Ajouter les échalotes et cuire 2 min.',
    'Déglacer au vin blanc et laisser réduire presque à sec, 1 à 2 min à feu vif. Ajouter la crème et laisser épaissir 3 min à feu moyen.',
    'Remettre les escalopes et leur jus 1 min dans la sauce, à feu doux, pour les réchauffer. Parsemer de persil.'
  ]);

  R('escalopes-dinde-citron', 'Escalopes de dinde au citron', 'Française', 'Plat', 15, 'Facile', 4, [
    ['escalopes-de-dinde', 4], ['citron', 1], ['farine', 20, 'g'], ['beurre', 30, 'g'], ['huile', 1, 'cs'],
    ['capres', 1, 'cs', 'opt'], ['persil', 0.25, 'pc', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Aplatir légèrement les escalopes entre deux feuilles de papier cuisson. Les saler, les poivrer et les fariner en retirant l’excédent.',
    'Les faire dorer dans l’huile et la moitié du beurre, 3 min par face à feu moyen-vif. Réserver au chaud.',
    'Hors du feu, verser le jus du citron et 5 cl d’eau dans la poêle et gratter les sucs.',
    'Remettre à feu doux, ajouter le reste du beurre et les câpres, et remuer 1 min, jusqu’à obtenir une sauce courte et brillante.',
    'Napper les escalopes de sauce et parsemer de persil ciselé.'
  ]);

  R('escalopes-poulet-tomate-mozzarella', 'Escalopes de poulet à la tomate et à la mozzarella', 'Italienne', 'Plat', 35, 'Facile', 4, [
    ['poulet', 600, 'g'], ['coulis-tomate', 25, 'cl'], ['mozzarella', 250, 'g'], ['ail', 1], ['huile-olive', 2, 'cs'],
    ['origan', 1, 'cc', 'opt'], ['basilic', 0.25, 'pc', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Préchauffer le four à 200 °C. Couper les blancs de poulet en deux dans l’épaisseur pour obtenir des escalopes fines. Saler et poivrer.',
    'Les saisir dans l’huile, 2 min par face à feu vif, juste pour les dorer. Les ranger dans un plat à four.',
    'Dans la même poêle, faire revenir l’ail haché 30 s à feu moyen, verser le coulis, ajouter l’origan, saler et laisser réduire 5 min à feu moyen.',
    'Napper le poulet de sauce et répartir la mozzarella en tranches.',
    'Enfourner 12 à 15 min à 200 °C, jusqu’à ce que la mozzarella soit fondue et légèrement dorée et le poulet cuit à cœur. Parsemer de basilic.'
  ]);

  R('roti-dinde-carottes', 'Rôti de dinde aux carottes en cocotte', 'Française', 'Plat', 90, 'Facile', 4, [
    ['roti-de-dinde', 800, 'g'], ['carottes', 6], ['oignons', 2], ['bouillon', 1], ['beurre', 20, 'g'], ['huile', 1, 'cs'],
    ['vin-blanc', 10, 'cl', 'opt'], ['thym', 2, 'pc', 'opt'], ['laurier', 1, 'pc', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Sortir le rôti du réfrigérateur 20 min à l’avance. Couper les carottes en rondelles épaisses et émincer les oignons.',
    'Dans une cocotte, faire dorer le rôti sur toutes ses faces dans le beurre et l’huile, 8 min à feu moyen-vif. Saler, poivrer et réserver.',
    'Faire revenir les oignons et les carottes 5 min à feu moyen dans la cocotte. Déglacer au vin blanc en grattant les sucs.',
    'Remettre le rôti, ajouter 25 cl d’eau, le cube de bouillon émietté, le thym et le laurier. Porter à frémissement à feu moyen (2 à 3 min).',
    'Couvrir et cuire 45 à 50 min à feu doux, en retournant le rôti à mi-cuisson : le jus qui s’écoule quand on le pique doit être clair.',
    'Laisser reposer 5 min, retirer la ficelle et couper en tranches. Servir avec les carottes et le jus.'
  ]);

  R('saute-porc-champignons', 'Sauté de porc aux champignons', 'Française', 'Plat', 85, 'Facile', 4, [
    ['porc-epaule', 700, 'g'], ['champignons', 300, 'g'], ['oignons', 2], ['farine', 15, 'g'], ['bouillon', 1], ['creme-fraiche', 10, 'cl'],
    ['vin-blanc', 15, 'cl', 'opt'], ['moutarde', 1, 'cs', 'opt'], ['huile', 2, 'cs'], ['sel', null], ['poivre', null]
  ], [
    'Couper le porc en cubes de 3 cm. Émincer les oignons et couper les champignons en quartiers.',
    'Dans une cocotte, faire dorer la viande dans l’huile, à feu vif, en deux fois pour ne pas la faire bouillir : 4 à 5 min par fournée. Saler et poivrer.',
    'Remettre toute la viande, ajouter les oignons et cuire 3 min à feu moyen. Saupoudrer de farine et remuer 1 min.',
    'Verser le vin blanc, laisser réduire 2 min à feu vif, puis ajouter 30 cl d’eau et le cube de bouillon. Couvrir et laisser mijoter 45 min à feu doux.',
    'Ajouter les champignons et cuire encore 10 min à feu doux, à découvert : la viande doit être tendre sous la fourchette.',
    'Incorporer la crème et la moutarde, laisser frémir 2 min à feu doux et rectifier l’assaisonnement.'
  ]);

  /* ───────────── Steak haché, jambon, knacks ───────────── */

  R('steaks-haches-oignons', 'Steaks hachés aux oignons', 'Française', 'Plat', 25, 'Facile', 4, [
    ['boeuf-hache', 500, 'g'], ['oignons', 3], ['beurre', 20, 'g'], ['huile', 1, 'cs'],
    ['vinaigre', 1, 'cs', 'opt'], ['moutarde', 1, 'cs', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Émincer finement les oignons. Façonner le bœuf en 4 steaks de 2 cm d’épaisseur, sans trop tasser.',
    'Faire fondre les oignons dans le beurre avec une pincée de sel, 12 à 15 min à feu moyen-doux, en remuant, jusqu’à ce qu’ils soient blonds et confits.',
    'Ajouter le vinaigre, laisser évaporer 1 min à feu moyen et réserver au chaud.',
    'Dans une poêle très chaude, saisir les steaks dans l’huile à feu vif : 2 min par face pour une cuisson saignante, 3 min à point, 4 à 5 min bien cuit.',
    'Saler et poivrer les steaks une fois cuits. Couvrir d’oignons et servir avec la moutarde.'
  ]);

  R('steak-hache-cheval', 'Steak haché à cheval', 'Française', 'Plat', 15, 'Facile', 4, [
    ['boeuf-hache', 500, 'g'], ['oeufs', 4], ['beurre', 20, 'g'], ['huile', 1, 'cs'],
    ['persil', 0.25, 'pc', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Façonner le bœuf en 4 steaks de 2 cm d’épaisseur, sans trop tasser.',
    'Dans une poêle très chaude, saisir les steaks dans l’huile à feu vif : 2 min par face pour saignant, 3 min pour à point. Saler, poivrer et réserver au chaud.',
    'Dans une seconde poêle, faire fondre le beurre 30 s à feu moyen et y casser les œufs.',
    'Cuire 3 min à feu moyen, sans les retourner : le blanc doit être pris et le jaune rester coulant.',
    'Poser un œuf sur chaque steak, saler le blanc, poivrer et parsemer de persil ciselé.'
  ]);

  R('riz-jambon-petits-pois', 'Riz au jambon et aux petits pois', 'Française', 'Plat', 35, 'Facile', 4, [
    ['riz', 300, 'g'], ['jambon', 4], ['petits-pois', 200, 'g'], ['oignons', 1], ['beurre', 30, 'g'], ['bouillon', 1],
    ['fromage-rape', 50, 'g', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Émincer finement l’oignon. Couper le jambon en lanières.',
    'Dans une casserole, faire fondre l’oignon dans 20 g de beurre, 4 min à feu moyen. Ajouter le riz et remuer 1 min, jusqu’à ce qu’il devienne translucide.',
    'Verser 55 cl d’eau chaude, émietter le cube de bouillon et porter à ébullition à feu vif. Couvrir et cuire 10 min à feu doux.',
    'Ajouter les petits pois (frais ou surgelés) sur le riz, sans remuer, couvrir et cuire encore 6 à 8 min à feu doux, jusqu’à absorption du liquide.',
    'Hors du feu, ajouter le jambon et le reste du beurre, mélanger à la fourchette et laisser reposer 3 min à couvert. Poivrer, saler si besoin et parsemer de fromage.'
  ]);

  R('poelee-pommes-terre-jambon', 'Poêlée de pommes de terre au jambon', 'Française', 'Plat', 40, 'Facile', 4, [
    ['pommes-de-terre', 1000, 'g'], ['jambon', 4], ['oignons', 1], ['beurre', 20, 'g'], ['huile', 2, 'cs'],
    ['fromage-rape', 80, 'g', 'opt'], ['ciboulette', 0.25, 'pc', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Éplucher les pommes de terre et les couper en dés de 1,5 cm. Les rincer et les sécher. Émincer l’oignon et couper le jambon en carrés.',
    'Faire sauter les pommes de terre dans l’huile et le beurre, 10 min à feu moyen-vif, en remuant régulièrement.',
    'Ajouter l’oignon, couvrir et cuire 10 à 12 min à feu moyen, jusqu’à ce que les pommes de terre soient tendres et dorées.',
    'Ajouter le jambon et cuire 2 min à feu moyen, à découvert. Saler légèrement et poivrer.',
    'Parsemer de fromage râpé, couvrir 2 min hors du feu pour le faire fondre, puis ajouter la ciboulette ciselée.'
  ]);

  R('poelee-knacks-pommes-terre', 'Poêlée de knacks aux pommes de terre', 'Française', 'Plat', 40, 'Facile', 4, [
    ['saucisses-de-strasbourg', 8], ['pommes-de-terre', 900, 'g'], ['oignons', 2], ['huile', 2, 'cs'], ['beurre', 15, 'g'],
    ['moutarde', 1, 'cs', 'opt'], ['persil', 0.25, 'pc', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Éplucher les pommes de terre et les couper en rondelles de 5 mm. Les rincer et les sécher. Émincer les oignons et couper les knacks en tronçons de 2 cm.',
    'Faire sauter les pommes de terre dans l’huile, 10 min à feu moyen-vif, en les retournant régulièrement.',
    'Ajouter les oignons et le beurre, couvrir et cuire 10 min à feu moyen, jusqu’à ce que les pommes de terre soient tendres.',
    'Ajouter les knacks et cuire 5 min à feu moyen-vif, à découvert, jusqu’à ce qu’elles soient dorées.',
    'Saler, poivrer, parsemer de persil et servir avec la moutarde.'
  ]);

  R('lentilles-knacks', 'Lentilles aux knacks', 'Française', 'Plat', 50, 'Facile', 4, [
    ['saucisses-de-strasbourg', 8], ['lentilles', 300, 'g'], ['carottes', 2], ['oignons', 1],
    ['laurier', 1, 'pc', 'opt'], ['beurre', 15, 'g'], ['moutarde', 1, 'cs', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Émincer l’oignon et couper les carottes en petits dés. Rincer les lentilles.',
    'Dans une cocotte, faire revenir l’oignon et les carottes dans le beurre, 5 min à feu moyen.',
    'Ajouter les lentilles, le laurier et 90 cl d’eau froide. Ne pas saler. Porter à ébullition à feu vif, couvrir et cuire 20 min à feu doux.',
    'Ajouter les knacks entières ou coupées en deux, couvrir et cuire encore 8 à 10 min à feu doux : les lentilles doivent être tendres.',
    'Retirer le laurier, saler, poivrer et servir avec la moutarde.'
  ]);

  /* ───────────── Merguez ───────────── */

  R('merguez-pois-chiches', 'Merguez aux pois chiches et à la tomate', 'Maghrébine', 'Plat', 30, 'Facile', 4, [
    ['merguez', 8], ['pois-chiches', 400, 'g'], ['tomates-concassees', 400, 'g'], ['oignons', 1], ['ail', 2],
    ['cumin', 1, 'cc', 'opt'], ['harissa', 1, 'cc', 'opt'], ['coriandre', 0.25, 'pc', 'opt'], ['sel', null]
  ], [
    'Émincer l’oignon et hacher l’ail. Rincer et égoutter les pois chiches.',
    'Dans une sauteuse, faire dorer les merguez sans matière grasse, 6 à 8 min à feu moyen, en les retournant. Les réserver et ne garder qu’une cuillerée de gras.',
    'Y faire revenir l’oignon 4 min à feu moyen. Ajouter l’ail et le cumin et remuer 1 min.',
    'Verser les tomates, ajouter les pois chiches, la harissa et 10 cl d’eau. Saler légèrement et porter à frémissement à feu moyen (2 min).',
    'Remettre les merguez entières ou en tronçons et laisser mijoter 10 min à feu doux. Parsemer de coriandre.'
  ]);

  R('semoule-merguez-legumes', 'Semoule aux merguez et aux légumes', 'Maghrébine', 'Plat', 35, 'Facile', 4, [
    ['merguez', 8], ['semoule', 300, 'g'], ['courgettes', 2], ['carottes', 2], ['oignons', 1], ['concentre-tomate', 1, 'cs'],
    ['ras-el-hanout', 1, 'cc', 'opt'], ['pois-chiches', 200, 'g', 'opt'], ['huile-olive', 2, 'cs'], ['sel', null]
  ], [
    'Couper les carottes en rondelles et les courgettes en gros dés. Émincer l’oignon.',
    'Dans une sauteuse, faire revenir l’oignon et les carottes dans 1 cs d’huile, 5 min à feu moyen. Ajouter le concentré de tomate et le ras el hanout, remuer 1 min.',
    'Ajouter les courgettes, les pois chiches égouttés et 30 cl d’eau. Saler, couvrir et cuire 15 min à feu moyen : les carottes doivent être tendres.',
    'Pendant ce temps, faire dorer les merguez à la poêle, sans matière grasse, 8 à 10 min à feu moyen.',
    'Verser la semoule dans un saladier avec le reste d’huile et une pincée de sel. Ajouter 30 cl d’eau bouillante, couvrir et laisser gonfler 5 min hors du feu, puis égrainer à la fourchette.',
    'Servir la semoule avec les légumes, leur jus et les merguez.'
  ]);

  R('merguez-four-pommes-terre', 'Merguez au four, pommes de terre et poivrons', 'Maghrébine', 'Plat', 50, 'Facile', 4, [
    ['merguez', 8], ['pommes-de-terre', 800, 'g'], ['poivrons', 2], ['oignons', 2], ['huile-olive', 2, 'cs'],
    ['cumin', 1, 'cc', 'opt'], ['paprika', 1, 'cc', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Préchauffer le four à 200 °C. Couper les pommes de terre non épluchées en quartiers, les poivrons en larges lanières et les oignons en quartiers.',
    'Mélanger les légumes sur une plaque avec l’huile, le cumin, le paprika, du sel et du poivre. Les étaler en une seule couche.',
    'Enfourner 20 min à 200 °C, puis retourner les légumes.',
    'Poser les merguez sur les légumes et cuire encore 20 min à 200 °C, en les retournant à mi-cuisson : elles doivent être bien grillées et les pommes de terre dorées et tendres.'
  ]);

  /* ───────────── Poissons simples ───────────── */

  R('saumon-four-citron', 'Saumon au four au citron', 'Française', 'Plat', 20, 'Facile', 4, [
    ['saumon', 4], ['citron', 1], ['huile-olive', 1, 'cs'],
    ['aneth', 0.25, 'pc', 'opt'], ['ail', 1, 'pc', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Préchauffer le four à 200 °C. Couvrir un plat de papier cuisson.',
    'Poser les pavés côté peau dans le plat. Les badigeonner d’huile, saler, poivrer et parsemer d’ail haché.',
    'Couper la moitié du citron en fines rondelles et les répartir sur le poisson.',
    'Enfourner 10 à 12 min à 200 °C selon l’épaisseur : la chair doit se détacher en pétales tout en restant rosée et moelleuse à cœur.',
    'Arroser du jus du demi-citron restant et parsemer d’aneth.'
  ]);

  R('papillotes-cabillaud-legumes', 'Papillotes de cabillaud aux légumes', 'Française', 'Plat', 30, 'Facile', 4, [
    ['cabillaud', 600, 'g'], ['courgettes', 1], ['carottes', 2], ['citron', 1], ['huile-olive', 2, 'cs'],
    ['tomates-cerises', 150, 'g', 'opt'], ['thym', 2, 'pc', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Préchauffer le four à 200 °C. Couper le cabillaud en 4 pavés.',
    'Tailler la courgette et les carottes en fins rubans à l’économe. Couper les tomates cerises en deux et le citron en rondelles.',
    'Répartir les légumes au centre de 4 grandes feuilles de papier cuisson. Saler, poivrer et poser un pavé sur chaque lit de légumes.',
    'Saler le poisson, ajouter une rondelle de citron, un peu de thym et un filet d’huile. Fermer hermétiquement les papillotes.',
    'Enfourner 15 min à 200 °C : les papillotes doivent être gonflées et le poisson opaque. Ouvrir à table.'
  ]);

  R('poisson-pane-maison', 'Poisson pané maison', 'Française', 'Plat', 25, 'Facile', 4, [
    ['colin', 600, 'g'], ['oeufs', 2], ['farine', 50, 'g'], ['chapelure', 100, 'g'], ['huile', 4, 'cs'],
    ['citron', 1, 'pc', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Couper le poisson en bâtonnets ou en morceaux de 2 cm d’épaisseur, retirer les arêtes et bien l’éponger. Saler et poivrer.',
    'Préparer trois assiettes : la farine, les œufs battus avec une pincée de sel, la chapelure.',
    'Passer chaque morceau dans la farine, puis dans l’œuf, puis dans la chapelure en appuyant pour bien la faire adhérer.',
    'Chauffer l’huile 1 min dans une grande poêle à feu moyen. Cuire le poisson 3 min par face à feu moyen, en deux fois si besoin : la panure doit être bien dorée et croustillante, la chair opaque.',
    'Égoutter sur du papier absorbant et servir avec des quartiers de citron.'
  ]);

  R('colin-creme-citron', 'Filets de colin à la crème et au citron', 'Française', 'Plat', 20, 'Facile', 4, [
    ['colin', 600, 'g'], ['creme-liquide', 20, 'cl'], ['citron', 1], ['echalotes', 2], ['beurre', 20, 'g'],
    ['moutarde', 1, 'cc', 'opt'], ['ciboulette', 0.25, 'pc', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Éponger les filets, les saler et les poivrer. Ciseler finement les échalotes.',
    'Dans une sauteuse, faire fondre les échalotes dans le beurre, 3 min à feu doux, sans coloration.',
    'Verser la crème, ajouter la moutarde et le jus d’un demi-citron. Porter à frémissement à feu moyen (2 min).',
    'Déposer les filets dans la sauce, couvrir et cuire 6 à 8 min à feu doux, sans les retourner : la chair doit être opaque et s’effeuiller.',
    'Rectifier l’assaisonnement, ajouter un peu de jus de citron si besoin et parsemer de ciboulette.'
  ]);

  R('crevettes-ail-citron', 'Crevettes sautées à l’ail et au citron', 'Française', 'Plat', 15, 'Facile', 4, [
    ['crevettes', 500, 'g'], ['ail', 3], ['citron', 0.5], ['huile-olive', 2, 'cs'], ['beurre', 15, 'g'],
    ['persil', 0.5, 'pc', 'opt'], ['piment', 1, 'pincee', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Bien éponger les crevettes. Hacher l’ail et ciseler le persil.',
    'Chauffer l’huile 1 min dans une grande poêle à feu vif. Y saisir les crevettes 1 min 30 par face, en une seule couche, jusqu’à ce qu’elles soient roses.',
    'Baisser à feu moyen, ajouter le beurre, l’ail et le piment, et remuer 30 s sans laisser l’ail brunir.',
    'Arroser de jus de citron, saler, poivrer, parsemer de persil et servir aussitôt.'
  ]);

  R('saumon-creme-epinards', 'Saumon à la crème et aux épinards', 'Française', 'Plat', 25, 'Facile', 4, [
    ['saumon', 4], ['epinards', 400, 'g'], ['creme-liquide', 20, 'cl'], ['ail', 1], ['huile-olive', 1, 'cs'],
    ['citron', 0.5, 'pc', 'opt'], ['muscade', 1, 'pincee', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Laver et essorer les épinards. Hacher l’ail. Saler et poivrer les pavés.',
    'Dans une sauteuse, saisir le saumon dans l’huile, côté peau, 3 min à feu moyen-vif, puis 1 min sur l’autre face. Réserver : il finira de cuire dans la sauce.',
    'Dans la même sauteuse, faire revenir l’ail 30 s à feu moyen, puis ajouter les épinards par poignées et les faire tomber 3 min à feu moyen.',
    'Verser la crème, ajouter la muscade, saler, poivrer et laisser frémir 2 min à feu moyen.',
    'Reposer les pavés dans la sauce, côté peau vers le haut, couvrir et cuire 3 à 4 min à feu doux : la chair doit s’effeuiller en restant rosée à cœur. Arroser de jus de citron.'
  ]);

  R('cabillaud-croute-moutarde', 'Cabillaud en croûte de moutarde', 'Française', 'Plat', 25, 'Facile', 4, [
    ['cabillaud', 600, 'g'], ['moutarde', 2, 'cs'], ['chapelure', 50, 'g'], ['beurre', 30, 'g'],
    ['persil', 0.25, 'pc', 'opt'], ['citron', 0.5, 'pc', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Préchauffer le four à 200 °C. Couper le cabillaud en 4 pavés, les éponger et les poser dans un plat couvert de papier cuisson.',
    'Faire fondre le beurre (1 min à feu doux ou 30 s au micro-ondes) et le mélanger à la chapelure et au persil haché.',
    'Saler légèrement et poivrer les pavés, puis les badigeonner de moutarde sur le dessus.',
    'Couvrir de chapelure en appuyant pour former une croûte.',
    'Enfourner 12 à 15 min à 200 °C : la croûte doit être dorée et la chair nacrée. Servir avec un filet de jus de citron.'
  ]);

  R('galettes-thon-pommes-terre', 'Galettes de thon aux pommes de terre', 'Française', 'Plat', 45, 'Facile', 4, [
    ['thon-boite', 280, 'g'], ['pommes-de-terre', 500, 'g'], ['oeufs', 1], ['chapelure', 60, 'g'], ['huile', 3, 'cs'],
    ['ciboule', 0.5, 'pc', 'opt'], ['citron', 0.5, 'pc', 'opt'], ['moutarde', 1, 'cc', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Éplucher les pommes de terre, les couper en morceaux et les cuire 20 min à l’eau bouillante salée, jusqu’à ce qu’elles soient tendres. Les égoutter soigneusement et les écraser à la fourchette.',
    'Ajouter le thon égoutté et émietté, l’œuf, la moutarde et la ciboule émincée. Saler, poivrer et mélanger.',
    'Former 8 galettes de 2 cm d’épaisseur et les passer dans la chapelure. Si la préparation est trop molle, la laisser 15 min au réfrigérateur.',
    'Chauffer l’huile 1 min dans une poêle à feu moyen et dorer les galettes 4 min par face à feu moyen, en les retournant délicatement.',
    'Servir avec un filet de jus de citron.'
  ]);

  /* ───────────── Plats végétariens ───────────── */

  R('galettes-legumes', 'Galettes de légumes', 'Française', 'Plat', 40, 'Facile', 4, [
    ['courgettes', 2], ['carottes', 2], ['oeufs', 2], ['farine', 60, 'g'], ['huile', 3, 'cs'],
    ['fromage-rape', 50, 'g', 'opt'], ['oignons', 1, 'pc', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Râper les courgettes et les carottes avec une grosse râpe. Les saler, les laisser dégorger 10 min dans une passoire, puis les presser fortement dans un torchon.',
    'Mélanger les légumes avec l’oignon finement haché, les œufs, la farine et le fromage. Poivrer et saler légèrement.',
    'Chauffer l’huile 1 min dans une grande poêle à feu moyen. Déposer des cuillerées de pâte et les aplatir en galettes de 1 cm d’épaisseur.',
    'Cuire 4 min par face à feu moyen, jusqu’à ce qu’elles soient bien dorées et fermes. Procéder en deux ou trois fois.',
    'Égoutter sur du papier absorbant et servir chaud.'
  ]);

  R('pois-chiches-rotis-carottes', 'Pois chiches rôtis aux carottes et au cumin', 'Française', 'Plat', 40, 'Facile', 4, [
    ['pois-chiches', 500, 'g'], ['carottes', 6], ['oignon-rouge', 2], ['cumin', 2, 'cc'], ['huile-olive', 3, 'cs'],
    ['paprika', 1, 'cc', 'opt'], ['yaourt', 2, 'pc', 'opt'], ['citron', 0.5, 'pc', 'opt'], ['coriandre', 0.25, 'pc', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Préchauffer le four à 210 °C. Rincer les pois chiches et les sécher soigneusement dans un torchon.',
    'Couper les carottes en bâtonnets et les oignons en quartiers.',
    'Mélanger pois chiches et légumes sur une plaque avec l’huile, le cumin, le paprika, du sel et du poivre. Étaler en une seule couche.',
    'Enfourner 25 à 30 min à 210 °C en remuant à mi-cuisson : les carottes doivent être tendres et caramélisées, les pois chiches dorés et légèrement croustillants.',
    'Mélanger le yaourt avec le jus de citron et une pincée de sel. Servir les légumes avec cette sauce et la coriandre.'
  ]);

  R('riz-haricots-rouges-mais', 'Riz aux haricots rouges et au maïs', 'Mexicaine', 'Plat', 40, 'Facile', 4, [
    ['riz', 250, 'g'], ['haricots-rouges', 400, 'g'], ['mais-doux', 150, 'g'], ['tomates-concassees', 400, 'g'], ['oignons', 1], ['ail', 2],
    ['cumin', 1, 'cc', 'opt'], ['paprika', 1, 'cc', 'opt'], ['huile-olive', 2, 'cs'], ['coriandre', 0.25, 'pc', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Émincer l’oignon et hacher l’ail. Rincer et égoutter les haricots et le maïs.',
    'Dans une sauteuse, faire revenir l’oignon dans l’huile, 4 min à feu moyen. Ajouter l’ail, le cumin et le paprika, puis le riz, et remuer 1 min.',
    'Verser les tomates et 40 cl d’eau chaude. Saler, poivrer et porter à ébullition à feu vif (2 à 3 min).',
    'Couvrir et cuire 12 min à feu doux. Ajouter les haricots et le maïs sans remuer, couvrir et cuire encore 5 à 6 min à feu doux, jusqu’à ce que le riz soit tendre.',
    'Laisser reposer 5 min à couvert, mélanger à la fourchette et parsemer de coriandre.'
  ]);

  R('galettes-lentilles-corail', 'Galettes de lentilles corail', 'Française', 'Plat', 45, 'Facile', 4, [
    ['lentilles-corail', 200, 'g'], ['carottes', 1], ['oignons', 1], ['oeufs', 1], ['chapelure', 60, 'g'], ['huile', 3, 'cs'],
    ['cumin', 1, 'cc', 'opt'], ['coriandre', 0.25, 'pc', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Rincer les lentilles, les couvrir de 40 cl d’eau, porter à ébullition puis cuire 12 min à feu doux, à petits frémissements : elles doivent être tendres et l’eau absorbée. Égoutter si besoin et laisser tiédir 10 min.',
    'Râper finement la carotte et hacher l’oignon.',
    'Mélanger les lentilles avec la carotte, l’oignon, l’œuf, la chapelure, le cumin et la coriandre ciselée. Saler et poivrer : la préparation doit se tenir.',
    'Former 8 galettes avec les mains mouillées.',
    'Les cuire dans l’huile, 4 min par face à feu moyen, en deux fois si besoin, jusqu’à ce qu’elles soient bien dorées.'
  ]);

  R('legumes-rotis-four', 'Légumes rôtis au four', 'Française', 'Plat', 50, 'Facile', 4, [
    ['courgettes', 2], ['poivrons', 2], ['carottes', 3], ['oignon-rouge', 2], ['huile-olive', 3, 'cs'],
    ['ail', 3, 'pc', 'opt'], ['herbes-provence', 1, 'cc', 'opt'], ['feta', 150, 'g', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Préchauffer le four à 210 °C.',
    'Couper les courgettes en tronçons de 2 cm, les poivrons en larges lanières, les carottes en bâtonnets et les oignons en quartiers.',
    'Mélanger les légumes sur une grande plaque avec l’huile, les gousses d’ail en chemise, les herbes de Provence, du sel et du poivre. Les étaler sans les superposer.',
    'Enfourner 35 à 40 min à 210 °C en remuant à mi-cuisson, jusqu’à ce que les légumes soient tendres et dorés sur les bords.',
    'Parsemer de feta émiettée à la sortie du four.'
  ]);

  R('quinoa-legumes', 'Poêlée de quinoa aux légumes', 'Française', 'Plat', 30, 'Facile', 4, [
    ['quinoa', 250, 'g'], ['courgettes', 2], ['carottes', 2], ['oignons', 1], ['ail', 1], ['huile-olive', 2, 'cs'],
    ['curry', 1, 'cc', 'opt'], ['citron', 0.5, 'pc', 'opt'], ['persil', 0.25, 'pc', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Rincer longuement le quinoa à l’eau froide. Le verser dans 50 cl d’eau salée, porter à ébullition, puis cuire 12 min à feu doux et à couvert, et laisser gonfler 5 min hors du feu : le germe doit se détacher.',
    'Pendant ce temps, couper les carottes et les courgettes en petits dés. Émincer l’oignon et hacher l’ail.',
    'Faire revenir l’oignon et les carottes dans l’huile, 6 min à feu moyen. Ajouter les courgettes et cuire 6 min à feu moyen-vif.',
    'Ajouter l’ail et le curry, remuer 1 min à feu moyen, puis incorporer le quinoa égrainé à la fourchette.',
    'Faire sauter 2 min à feu vif, saler, poivrer, arroser de jus de citron et parsemer de persil.'
  ]);

  /* ───────────── Au four, en une plaque ───────────── */

  R('cuisses-poulet-pommes-terre-four', 'Cuisses de poulet rôties aux pommes de terre', 'Française', 'Plat', 65, 'Facile', 4, [
    ['cuisses-poulet', 4], ['pommes-de-terre', 1000, 'g'], ['ail', 4], ['huile-olive', 3, 'cs'],
    ['paprika', 1, 'cc', 'opt'], ['thym', 3, 'pc', 'opt'], ['citron', 0.5, 'pc', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Préchauffer le four à 200 °C. Couper les pommes de terre non épluchées en quartiers.',
    'Les mélanger sur une grande plaque avec 2 cs d’huile, les gousses d’ail en chemise, le thym, du sel et du poivre.',
    'Frotter les cuisses avec le reste d’huile, le paprika, du sel et du poivre. Les poser sur les pommes de terre, côté peau vers le haut.',
    'Enfourner 45 à 50 min à 200 °C, en remuant les pommes de terre à mi-cuisson : la peau doit être dorée et croustillante et le jus qui s’écoule près de l’os doit être clair.',
    'Arroser de jus de citron avant de servir.'
  ]);

  R('saucisses-legumes-four', 'Saucisses et légumes rôtis au four', 'Française', 'Plat', 55, 'Facile', 4, [
    ['saucisses', 4], ['pommes-de-terre', 600, 'g'], ['carottes', 3], ['oignons', 2], ['huile-olive', 2, 'cs'],
    ['poivrons', 1, 'pc', 'opt'], ['herbes-provence', 1, 'cc', 'opt'], ['moutarde', 1, 'cs', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Préchauffer le four à 200 °C. Couper les pommes de terre en dés de 3 cm, les carottes en bâtonnets, les oignons en quartiers et le poivron en lanières.',
    'Mélanger les légumes sur une plaque avec l’huile, les herbes de Provence, du sel et du poivre. Étaler en une seule couche et enfourner 15 min à 200 °C.',
    'Piquer les saucisses et les poser sur les légumes.',
    'Cuire encore 25 à 30 min à 200 °C, en retournant les saucisses et en remuant les légumes à mi-cuisson : les saucisses doivent être bien dorées et les légumes tendres.',
    'Servir avec la moutarde.'
  ]);

  R('pilons-poulet-legumes-four', 'Pilons de poulet au paprika et légumes rôtis', 'Française', 'Plat', 55, 'Facile', 4, [
    ['pilons-de-poulet', 8], ['courgettes', 2], ['poivrons', 2], ['oignon-rouge', 2], ['paprika', 2, 'cc'], ['huile-olive', 3, 'cs'],
    ['ail', 3, 'pc', 'opt'], ['miel', 1, 'cs', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Préchauffer le four à 200 °C. Mélanger 2 cs d’huile avec le paprika, le miel, du sel et du poivre. En enrober les pilons.',
    'Couper les courgettes en tronçons de 2 cm, les poivrons en lanières larges et les oignons en quartiers.',
    'Mélanger les légumes sur une plaque avec le reste d’huile, l’ail en chemise et du sel. Poser les pilons par-dessus.',
    'Enfourner 40 à 45 min à 200 °C, en retournant les pilons et en remuant les légumes à mi-cuisson : la peau doit être bien dorée et la chair se détacher facilement de l’os.'
  ]);

  R('saumon-brocoli-four', 'Saumon et brocoli rôtis au four, sauce soja', 'Française', 'Plat', 30, 'Facile', 4, [
    ['saumon', 4], ['brocoli', 1], ['sauce-soja', 3, 'cs'], ['miel', 1, 'cs'], ['huile-olive', 2, 'cs'],
    ['ail', 1, 'pc', 'opt'], ['graines-sesame', 1, 'cs', 'opt'], ['riz', 250, 'g', 'opt'], ['sel', null], ['poivre', null]
  ], [
    RIZ,
    'Préchauffer le four à 200 °C. Détailler le brocoli en petits bouquets et les mélanger sur une plaque avec l’huile, du sel et du poivre.',
    'Enfourner le brocoli 8 min à 200 °C.',
    'Mélanger la sauce soja, le miel et l’ail haché. Poser les pavés de saumon sur la plaque, entre les bouquets, et les badigeonner de la moitié de la sauce.',
    'Cuire 10 à 12 min à 200 °C : le saumon doit être laqué et encore rosé à cœur, le brocoli grillé sur les bords.',
    'Arroser du reste de sauce et parsemer de sésame.'
  ]);

  /* ───────────── Brochettes ───────────── */

  R('brochettes-poulet-poivrons', 'Brochettes de poulet aux poivrons', 'Française', 'Plat', 60, 'Facile', 4, [
    ['poulet', 600, 'g'], ['poivrons', 2], ['oignons', 1], ['paprika', 2, 'cc'], ['citron', 1], ['huile-olive', 3, 'cs'],
    ['ail', 1, 'pc', 'opt'], ['herbes-provence', 1, 'cc', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Couper le poulet en cubes de 3 cm. Le mélanger avec l’huile, le jus du citron, le paprika, l’ail haché, les herbes de Provence, du sel et du poivre. Laisser mariner 30 min au frais.',
    'Couper les poivrons et l’oignon en carrés de 3 cm.',
    'Enfiler le poulet sur 8 piques en alternant avec les poivrons et l’oignon, sans trop serrer.',
    'Cuire 10 à 12 min à la poêle-gril ou à la plancha, à feu moyen-vif, en tournant les brochettes tous les 3 min. Au four : 15 min à 220 °C en les retournant à mi-cuisson.',
    'Le poulet doit être bien doré et blanc à cœur.'
  ]);

  R('brochettes-boeuf-oignons', 'Brochettes de bœuf aux oignons et aux poivrons', 'Française', 'Plat', 45, 'Facile', 4, [
    ['boeuf-poeler', 600, 'g'], ['oignon-rouge', 2], ['poivrons', 1], ['huile-olive', 3, 'cs'], ['ail', 2],
    ['thym', 2, 'pc', 'opt'], ['champignons', 150, 'g', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Couper le bœuf en cubes de 3 cm. Le mélanger avec l’huile, l’ail écrasé, le thym effeuillé et du poivre. Laisser mariner 30 min à température ambiante.',
    'Couper les oignons en quartiers et le poivron en carrés. Laisser les champignons entiers.',
    'Enfiler la viande sur 8 piques en alternant avec les légumes.',
    'Saisir les brochettes sur un gril ou dans une poêle très chaude, à feu vif, 6 à 8 min au total en les tournant sur chaque face : la viande doit être bien grillée et rosée à cœur.',
    'Saler à la fin et laisser reposer 2 min avant de servir.'
  ]);

  R('brochettes-dinde-curry', 'Brochettes de dinde au curry', 'Française', 'Plat', 60, 'Facile', 4, [
    ['escalopes-de-dinde', 4], ['yaourt', 1], ['curry', 2, 'cc'], ['citron', 0.5], ['huile', 1, 'cs'],
    ['ail', 1, 'pc', 'opt'], ['courgettes', 1, 'pc', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Couper la dinde en cubes de 3 cm. Mélanger le yaourt, le curry, le jus de citron, l’ail haché, du sel et du poivre. Y enrober la viande et laisser mariner 30 min au frais.',
    'Couper la courgette en rondelles de 1 cm.',
    'Enfiler la dinde sur 8 piques en alternant avec les rondelles de courgette.',
    'Huiler une poêle-gril ou une plancha et cuire les brochettes 10 à 12 min à feu moyen-vif, en les tournant tous les 3 min. Au four : 15 min à 220 °C en les retournant à mi-cuisson.',
    'La viande doit être dorée, avec une marinade légèrement caramélisée, et cuite à cœur.'
  ]);
};
