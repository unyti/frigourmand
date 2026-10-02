/* Variantes des grands classiques, ajoutées en 0.10 (même format que recettes.js).
   Pâtes, gnocchis, risottos et nouilles. */
'use strict';

module.exports = function ajouter(R) {
  // Étapes communes, pour 400 g de pâtes sèches (4 personnes).
  const cuire = (quoi, duree = '10 à 12 min') => `Cuire ${quoi} ${duree} dans une grande casserole d’eau bouillante salée (4 L pour 400 g), pour une cuisson al dente (selon le paquet). Prélever une louche d’eau de cuisson, puis égoutter.`;
  const BOUILLON = 'Délayer le cube dans 1 L d’eau bouillante et garder ce bouillon frémissant à feu doux.';
  const MOUILLER = 'ajouter le bouillon chaud louche par louche, en remuant et en attendant qu’il soit absorbé avant d’en remettre, pendant 18 à 20 min : le riz doit être tendre mais encore légèrement ferme';
  const NOUILLES = 'Cuire les nouilles 3 à 5 min dans une grande casserole d’eau bouillante (selon le paquet) : elles doivent rester un peu fermes. Les égoutter, les rincer à l’eau froide et les mélanger avec 1 cuillère à soupe d’huile pour qu’elles ne collent pas.';

  /* ───────────── Pâtes ───────────── */

  R('pates-chorizo', 'Pâtes au chorizo', 'Française', 'Plat', 30, 'Facile', 4, [
    ['pates', 400, 'g'], ['chorizo', 150, 'g'], ['tomates-concassees', 400, 'g'], ['oignons', 1], ['ail', 1],
    ['huile-olive', 1, 'cs'], ['parmesan', 40, 'g', 'opt'], ['persil', 0.25, 'pc', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Retirer la peau du chorizo et le couper en demi-rondelles fines. Hacher l’oignon et l’ail.',
    'Faire revenir le chorizo à sec dans une grande poêle, 3 min à feu moyen, jusqu’à ce qu’il rende son gras orangé. Le réserver en laissant le gras dans la poêle.',
    'Faire fondre l’oignon et l’ail dans ce gras avec l’huile, 4 min à feu moyen. Ajouter les tomates concassées et laisser mijoter 10 min à feu doux, jusqu’à ce que la sauce épaississe. Poivrer, saler très peu (le chorizo est salé).',
    cuire('les pâtes'),
    'Verser les pâtes et le chorizo dans la sauce, mélanger 1 min à feu moyen en détendant avec un peu d’eau de cuisson. Servir avec le parmesan râpé et le persil ciselé.'
  ]);

  R('pates-chorizo-creme', 'Pâtes au chorizo et à la crème', 'Française', 'Plat', 20, 'Facile', 4, [
    ['pates', 400, 'g'], ['chorizo', 150, 'g'], ['creme-liquide', 20, 'cl'], ['echalotes', 2], ['concentre-tomate', 1, 'cs', 'opt'],
    ['parmesan', 40, 'g', 'opt'], ['ciboulette', 0.25, 'pc', 'opt'], ['sel', null], ['poivre', null]
  ], [
    cuire('les pâtes'),
    'Pendant ce temps, retirer la peau du chorizo et le couper en petits dés. Émincer les échalotes.',
    'Faire revenir le chorizo à sec dans une grande poêle, 3 min à feu moyen. Ajouter les échalotes et cuire 2 min dans le gras rendu, sans les colorer.',
    'Ajouter le concentré de tomate, puis la crème. Laisser frémir 3 min à feu doux : la sauce doit napper la cuillère. Poivrer.',
    'Ajouter les pâtes, mélanger 1 min à feu doux avec 2 ou 3 cuillères d’eau de cuisson. Goûter avant de saler, puis servir avec le parmesan et la ciboulette ciselée.'
  ]);

  R('pates-pesto-poulet', 'Pâtes au pesto et au poulet', 'Italienne', 'Plat', 25, 'Facile', 4, [
    ['pates', 400, 'g'], ['poulet', 400, 'g'], ['pesto', 120, 'g'], ['huile-olive', 1, 'cs'], ['tomates-cerises', 200, 'g', 'opt'],
    ['parmesan', 40, 'g', 'opt'], ['pignons', 20, 'g', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Couper le poulet en lanières de 1 cm, saler et poivrer.',
    'Les faire dorer dans l’huile, dans une grande poêle, 6 à 7 min à feu vif en les retournant, jusqu’à ce qu’elles soient cuites à cœur. Ajouter les tomates cerises coupées en deux pour la dernière minute.',
    cuire('les pâtes'),
    'Hors du feu, mélanger les pâtes avec le pesto délayé dans 3 cuillères à soupe d’eau de cuisson : le pesto ne doit pas cuire, il perdrait sa couleur et son parfum.',
    'Ajouter le poulet, mélanger et servir avec le parmesan râpé et les pignons grillés à sec, 2 min à feu moyen.'
  ]);

  R('pates-saumon-creme', 'Pâtes au saumon et à la crème', 'Française', 'Plat', 25, 'Facile', 4, [
    ['pates', 400, 'g'], ['saumon', 2], ['creme-liquide', 25, 'cl'], ['echalotes', 2], ['beurre', 15, 'g'],
    ['vin-blanc', 5, 'cl', 'opt'], ['citron', 0.5, 'pc', 'opt'], ['aneth', 0.25, 'pc', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Retirer la peau des pavés de saumon et couper la chair en cubes de 2 cm. Émincer les échalotes.',
    cuire('les pâtes'),
    'Pendant ce temps, faire fondre les échalotes dans le beurre, 3 min à feu doux. Déglacer au vin blanc et laisser réduire 1 min à feu vif.',
    'Verser la crème, porter à frémissement, puis ajouter le saumon. Cuire 3 à 4 min à feu doux sans trop remuer : les cubes doivent rester entiers et à peine rosés à cœur. Saler, poivrer.',
    'Ajouter les pâtes, mélanger délicatement 30 s à feu doux avec un peu d’eau de cuisson, puis finir avec un filet de jus de citron et l’aneth ciselé.'
  ]);

  R('pates-saumon-fume-citron', 'Pâtes au saumon fumé et au citron', 'Française', 'Plat', 20, 'Facile', 4, [
    ['pates', 400, 'g'], ['saumon-fume', 6], ['creme-fraiche', 15, 'cl'], ['citron', 1], ['ciboulette', 0.5, 'pc', 'opt'],
    ['baies-roses', 1, 'cc', 'opt'], ['sel', null], ['poivre', null]
  ], [
    cuire('les pâtes'),
    'Pendant ce temps, couper le saumon fumé en lanières. Râper finement le zeste du citron et presser la moitié de son jus.',
    'Dans la casserole vide, faire tiédir la crème avec le zeste, 1 min à feu doux, sans la faire bouillir.',
    'Remettre les pâtes, ajouter le jus de citron et 2 cuillères à soupe d’eau de cuisson, mélanger 30 s à feu doux. Poivrer, saler très peu.',
    'Hors du feu, ajouter le saumon fumé (il ne doit pas cuire), la ciboulette ciselée et les baies roses. Servir aussitôt.'
  ]);

  R('pates-quatre-fromages', 'Pâtes aux quatre fromages', 'Italienne', 'Plat', 20, 'Facile', 4, [
    ['pates', 400, 'g'], ['gorgonzola', 100, 'g'], ['mozzarella', 125, 'g'], ['parmesan', 60, 'g'], ['comte', 80, 'g'],
    ['creme-liquide', 20, 'cl'], ['muscade', 1, 'pincee', 'opt'], ['poivre', null], ['sel', null]
  ], [
    cuire('les pâtes'),
    'Pendant ce temps, couper le gorgonzola et la mozzarella en dés, râper le comté et le parmesan.',
    'Faire chauffer la crème à feu doux dans une grande casserole. Y faire fondre le gorgonzola et le comté en remuant, 3 à 4 min, sans laisser bouillir.',
    'Ajouter les pâtes, la mozzarella et la moitié du parmesan. Mélanger 1 min à feu doux en détendant avec un peu d’eau de cuisson, jusqu’à ce que la sauce soit lisse et filante.',
    'Poivrer, ajouter la muscade, goûter avant de saler. Servir avec le reste du parmesan.'
  ]);

  R('pates-gorgonzola-noix', 'Pâtes au gorgonzola et aux noix', 'Italienne', 'Plat', 20, 'Facile', 4, [
    ['pates', 400, 'g'], ['gorgonzola', 180, 'g'], ['creme-liquide', 15, 'cl'], ['cerneaux-de-noix', 60, 'g'],
    ['roquette', 50, 'g', 'opt'], ['poivre', null], ['sel', null]
  ], [
    'Concasser grossièrement les noix et les faire griller à sec dans une poêle, 3 min à feu moyen en remuant, jusqu’à ce qu’elles sentent bon. Réserver.',
    cuire('les pâtes'),
    'Pendant ce temps, faire fondre le gorgonzola en morceaux dans la crème, 4 min à feu doux en remuant, sans laisser bouillir.',
    'Mélanger les pâtes avec la sauce, 30 s à feu doux, en ajoutant 2 ou 3 cuillères d’eau de cuisson pour la rendre nappante. Poivrer, saler si besoin (le gorgonzola est salé).',
    'Servir parsemé de noix, avec la roquette par-dessus.'
  ]);

  R('pates-courgettes-citron', 'Pâtes aux courgettes et au citron', 'Italienne', 'Plat', 25, 'Facile', 4, [
    ['pates', 400, 'g'], ['courgettes', 3], ['citron', 1], ['ail', 2], ['huile-olive', 4, 'cs'], ['parmesan', 60, 'g'],
    ['menthe', 0.25, 'pc', 'opt'], ['piment', 1, 'pincee', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Couper les courgettes en demi-rondelles de 3 mm. Écraser l’ail. Râper le zeste du citron et presser son jus.',
    'Faire chauffer 3 cuillères d’huile dans une grande poêle et y saisir les courgettes avec l’ail, 8 à 10 min à feu vif en remuant de temps en temps, jusqu’à ce qu’elles soient bien dorées et fondantes. Saler, ajouter le piment.',
    cuire('les pâtes'),
    'Verser les pâtes dans la poêle avec le zeste, la moitié du jus de citron, le parmesan râpé et une demi-louche d’eau de cuisson. Mélanger 1 min à feu moyen jusqu’à obtenir une sauce crémeuse.',
    'Poivrer, goûter et ajouter du jus de citron si besoin. Servir avec le reste d’huile et la menthe ciselée.'
  ]);

  R('pates-champignons-creme', 'Pâtes aux champignons et à la crème', 'Française', 'Plat', 30, 'Facile', 4, [
    ['pates', 400, 'g'], ['champignons', 500, 'g'], ['creme-liquide', 20, 'cl'], ['echalotes', 2], ['ail', 1], ['beurre', 20, 'g'],
    ['huile-olive', 1, 'cs'], ['vin-blanc', 5, 'cl', 'opt'], ['persil', 0.25, 'pc', 'opt'], ['parmesan', 40, 'g', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Nettoyer les champignons et les couper en lamelles de 5 mm. Émincer les échalotes, hacher l’ail.',
    'Faire chauffer le beurre et l’huile dans une grande poêle. Saisir les champignons 6 à 8 min à feu vif, sans trop remuer, jusqu’à ce que leur eau soit évaporée et qu’ils soient dorés. Saler seulement à la fin.',
    'Ajouter les échalotes et l’ail, cuire 2 min à feu moyen. Déglacer au vin blanc, laisser évaporer 1 min, puis verser la crème et laisser frémir 3 min à feu doux. Poivrer.',
    cuire('les pâtes'),
    'Mélanger les pâtes avec la sauce 1 min à feu doux, en détendant avec un peu d’eau de cuisson, et servir avec le persil ciselé et le parmesan.'
  ]);

  R('linguine-crevettes-ail', 'Linguine aux crevettes et à l’ail', 'Italienne', 'Plat', 20, 'Facile', 4, [
    ['linguine', 400, 'g'], ['crevettes', 400, 'g'], ['ail', 4], ['huile-olive', 5, 'cs'], ['vin-blanc', 10, 'cl'],
    ['citron', 0.5, 'pc'], ['piment', 1, 'pincee', 'opt'], ['persil', 0.5, 'pc', 'opt'], ['sel', null], ['poivre', null]
  ], [
    cuire('les linguine', '9 à 11 min'),
    'Pendant ce temps, émincer l’ail en fines lamelles. Décortiquer les crevettes si besoin et les éponger.',
    'Faire chauffer l’huile dans une grande poêle à feu moyen avec l’ail et le piment, 1 min : l’ail doit blondir sans brunir.',
    'Ajouter les crevettes et les saisir 2 min à feu vif. Verser le vin blanc et laisser réduire de moitié, 2 min. Saler, poivrer.',
    'Ajouter les linguine et une demi-louche d’eau de cuisson, mélanger 1 min à feu vif pour lier la sauce. Finir avec le jus de citron et le persil ciselé. Pas de fromage sur ce plat.'
  ]);

  R('pates-brocoli-anchois', 'Pâtes au brocoli et aux anchois', 'Italienne', 'Plat', 25, 'Facile', 4, [
    ['pates', 400, 'g'], ['brocoli', 1], ['anchois', 40, 'g'], ['ail', 3], ['huile-olive', 5, 'cs'], ['piment', 1, 'pincee', 'opt'],
    ['chapelure', 30, 'g', 'opt'], ['pecorino', 40, 'g', 'opt'], ['sel', null]
  ], [
    'Détailler le brocoli en petits bouquets, éplucher le tronc et le couper en dés.',
    'Porter 4 L d’eau à ébullition dans une grande casserole, saler et y cuire le brocoli 5 min : il doit être tendre. Le sortir à l’écumoire et garder l’eau pour les pâtes.',
    'Cuire les pâtes 10 à 12 min dans cette eau bouillante, pour une cuisson al dente (selon le paquet). Prélever une louche d’eau de cuisson, puis égoutter.',
    'Pendant ce temps, faire chauffer 4 cuillères d’huile à feu doux avec l’ail émincé, le piment et les anchois : les écraser à la cuillère 2 min jusqu’à ce qu’ils fondent. Ajouter le brocoli et l’écraser en partie, 3 min à feu moyen.',
    'Ajouter les pâtes et un peu d’eau de cuisson, mélanger 1 min à feu moyen. Servir avec la chapelure dorée à la poêle dans le reste d’huile, 2 min à feu moyen, et le pecorino râpé.'
  ]);

  R('pates-epinards-ricotta', 'Pâtes aux épinards et à la ricotta', 'Italienne', 'Plat', 20, 'Facile', 4, [
    ['pates', 400, 'g'], ['epinards', 400, 'g'], ['ricotta', 250, 'g'], ['ail', 2], ['huile-olive', 2, 'cs'], ['parmesan', 60, 'g'],
    ['muscade', 1, 'pincee', 'opt'], ['citron', 0.5, 'pc', 'opt'], ['sel', null], ['poivre', null]
  ], [
    cuire('les pâtes'),
    'Pendant ce temps, faire revenir l’ail haché dans l’huile, 30 s à feu moyen, dans une grande sauteuse. Ajouter les épinards lavés et les faire tomber 3 min à feu vif en remuant, jusqu’à ce qu’ils soient flétris. Saler.',
    'Hors du feu, ajouter la ricotta, la moitié du parmesan râpé, la muscade et 4 cuillères à soupe d’eau de cuisson. Mélanger pour obtenir une sauce crémeuse.',
    'Ajouter les pâtes, mélanger, poivrer et rectifier avec un peu de zeste de citron. Servir avec le reste du parmesan.'
  ]);

  R('pates-poulet-tomates-sechees', 'Pâtes au poulet et aux tomates séchées', 'Italienne', 'Plat', 25, 'Facile', 4, [
    ['pates', 400, 'g'], ['poulet', 400, 'g'], ['tomates-sechees', 80, 'g'], ['creme-liquide', 20, 'cl'], ['ail', 2],
    ['huile-olive', 1, 'cs'], ['epinards', 100, 'g', 'opt'], ['parmesan', 40, 'g', 'opt'], ['basilic', 0.5, 'pc', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Couper le poulet en dés de 2 cm, saler et poivrer. Égoutter les tomates séchées et les couper en lanières. Hacher l’ail.',
    'Faire dorer le poulet dans l’huile, dans une grande sauteuse, 6 min à feu vif. Ajouter l’ail et les tomates séchées, cuire 1 min à feu moyen.',
    'Verser la crème et laisser frémir 4 min à feu doux, jusqu’à ce que la sauce épaississe légèrement. Ajouter les épinards et les laisser tomber 1 min.',
    cuire('les pâtes'),
    'Mélanger les pâtes avec la sauce et un peu d’eau de cuisson, 1 min à feu doux. Servir avec le parmesan râpé et le basilic.'
  ]);

  R('pates-thon-citron', 'Pâtes au thon et au citron', 'Italienne', 'Plat', 20, 'Facile', 4, [
    ['pates', 400, 'g'], ['thon-boite', 280, 'g'], ['citron', 1], ['ail', 1], ['huile-olive', 4, 'cs'], ['capres', 1, 'cs', 'opt'],
    ['persil', 0.5, 'pc', 'opt'], ['piment', 1, 'pincee', 'opt'], ['sel', null], ['poivre', null]
  ], [
    cuire('les pâtes'),
    'Pendant ce temps, égoutter le thon et l’émietter grossièrement. Râper le zeste du citron et presser son jus.',
    'Dans une grande poêle, faire chauffer l’huile à feu doux avec l’ail écrasé et le piment, 1 min. Ajouter le thon et les câpres, réchauffer 1 min sans dessécher.',
    'Ajouter les pâtes, le zeste, le jus de citron et 3 cuillères à soupe d’eau de cuisson. Mélanger 30 s à feu doux, poivrer, saler si besoin et parsemer de persil ciselé.'
  ]);

  R('pates-jambon-petits-pois', 'Pâtes au jambon et aux petits pois', 'Française', 'Plat', 20, 'Facile', 4, [
    ['pates', 400, 'g'], ['jambon', 4], ['petits-pois', 250, 'g'], ['creme-fraiche', 15, 'cl'], ['echalotes', 1],
    ['beurre', 15, 'g'], ['parmesan', 40, 'g', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Cuire les pâtes 10 à 12 min dans une grande casserole d’eau bouillante salée (4 L pour 400 g), pour une cuisson al dente (selon le paquet). Ajouter les petits pois (frais ou surgelés) pour les 4 dernières minutes. Prélever une louche d’eau de cuisson, puis égoutter.',
    'Pendant ce temps, couper le jambon en lanières et émincer l’échalote.',
    'Dans la casserole vide, faire fondre l’échalote dans le beurre, 2 min à feu doux. Ajouter la crème et laisser frémir 1 min à feu doux.',
    'Remettre les pâtes et les petits pois, ajouter le jambon et un peu d’eau de cuisson, mélanger 1 min à feu doux. Poivrer, saler peu et servir avec le parmesan râpé.'
  ]);

  R('pates-bolognaise-lentilles', 'Pâtes à la bolognaise végétarienne aux lentilles', 'Française', 'Plat', 60, 'Facile', 4, [
    ['pates', 400, 'g'], ['lentilles', 150, 'g'], ['tomates-concassees', 400, 'g'], ['oignons', 1], ['carottes', 1], ['ail', 2],
    ['concentre-tomate', 1, 'cs'], ['huile-olive', 2, 'cs'], ['celeri', 1, 'pc', 'opt'], ['vin-rouge', 10, 'cl', 'opt'], ['origan', 1, 'cc', 'opt'],
    ['laurier', 1, 'pc', 'opt'], ['parmesan', 40, 'g', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Hacher finement l’oignon, la carotte, le céleri et l’ail. Les faire revenir dans l’huile, dans une cocotte, 6 min à feu moyen, jusqu’à ce qu’ils soient tendres.',
    'Ajouter le concentré de tomate, remuer 1 min à feu moyen, puis déglacer au vin rouge et laisser évaporer 2 min.',
    'Ajouter les lentilles rincées, les tomates concassées, 40 cl d’eau, l’origan et le laurier. Porter à ébullition, couvrir et laisser mijoter 35 à 40 min à feu doux, en remuant de temps en temps : les lentilles doivent être tendres et la sauce épaisse. Saler et poivrer seulement en fin de cuisson.',
    cuire('les pâtes'),
    'Retirer le laurier, mélanger les pâtes avec la sauce 1 min à feu doux, en la détendant avec un peu d’eau de cuisson. Servir avec le parmesan râpé.'
  ]);

  R('pates-alla-norma', 'Pâtes alla Norma', 'Italienne', 'Plat', 55, 'Facile', 4, [
    ['pates', 400, 'g'], ['aubergines', 2], ['tomates-pelees', 800, 'g'], ['ail', 2], ['huile-olive', 6, 'cs'], ['pecorino', 60, 'g'],
    ['basilic', 0.5, 'pc'], ['piment', 1, 'pincee', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Couper les aubergines en cubes de 2 cm, les saler et les laisser dégorger 15 min dans une passoire. Les éponger soigneusement.',
    'Faire chauffer 4 cuillères d’huile dans une grande poêle et y dorer les aubergines 10 à 12 min à feu vif en remuant, jusqu’à ce qu’elles soient brunes et fondantes. Réserver sur du papier absorbant.',
    'Dans la même poêle, faire blondir l’ail écrasé avec le reste d’huile et le piment, 1 min à feu moyen. Ajouter les tomates pelées écrasées à la fourchette et laisser mijoter 20 min à feu moyen, à découvert, jusqu’à ce que la sauce épaississe. Saler, poivrer.',
    cuire('les pâtes (des rigatoni ou des penne)', '11 à 13 min'),
    'Mélanger les pâtes avec la sauce 1 min à feu moyen, avec les deux tiers des aubergines et la moitié du basilic. Servir avec le reste des aubergines, le pecorino râpé (à défaut de ricotta salata, le fromage d’origine) et le reste du basilic.'
  ]);

  R('spaghetti-cacio-e-pepe', 'Spaghetti cacio e pepe', 'Italienne', 'Plat', 20, 'Moyenne', 4, [
    ['spaghetti', 400, 'g'], ['pecorino', 200, 'g'], ['poivre', null], ['sel', null]
  ], [
    'Râper le pecorino très finement et le laisser à température ambiante. Concasser grossièrement 2 cuillères à café de poivre en grains.',
    'Porter 2,5 L d’eau à ébullition (moins que d’habitude, pour une eau riche en amidon), saler peu et y cuire les spaghetti 8 min, soit 2 min de moins que le temps du paquet.',
    'Pendant ce temps, faire griller le poivre à sec dans une grande poêle, 1 min à feu moyen, puis verser une louche d’eau de cuisson.',
    'Délayer le pecorino dans un bol avec une petite louche d’eau de cuisson tiédie 1 min, en fouettant, jusqu’à obtenir une crème épaisse et lisse.',
    'Transférer les spaghetti dans la poêle et finir de les cuire 2 min à feu moyen en remuant, en ajoutant de l’eau de cuisson si besoin.',
    'Hors du feu, attendre 30 s, puis ajouter la crème de pecorino et mélanger vivement : la sauce doit enrober les pâtes sans faire de fils ni de grumeaux. Servir aussitôt.'
  ]);

  R('pates-pesto-rosso', 'Pâtes au pesto rosso', 'Italienne', 'Plat', 20, 'Facile', 4, [
    ['pates', 400, 'g'], ['tomates-sechees', 120, 'g'], ['amandes', 40, 'g'], ['parmesan', 50, 'g'], ['ail', 1], ['huile-olive', 6, 'cs'],
    ['basilic', 0.5, 'pc', 'opt'], ['piment', 1, 'pincee', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Faire griller les amandes à sec dans une poêle, 3 min à feu moyen en remuant.',
    'Mixer les tomates séchées égouttées avec les amandes, l’ail, le parmesan en morceaux, le piment et l’huile, par à-coups, jusqu’à obtenir une pâte encore un peu granuleuse. Poivrer, goûter avant de saler.',
    cuire('les pâtes'),
    'Hors du feu, délayer le pesto avec 4 à 5 cuillères à soupe d’eau de cuisson, puis y mélanger les pâtes. Servir avec le basilic.'
  ]);

  R('pates-saucisse-fenouil', 'Pâtes à la saucisse et au fenouil', 'Italienne', 'Plat', 35, 'Facile', 4, [
    ['pates', 400, 'g'], ['chair-saucisse', 350, 'g'], ['fenouil', 1], ['oignons', 1], ['ail', 2], ['vin-blanc', 10, 'cl'],
    ['graines-de-fenouil', 1, 'cc'], ['huile-olive', 2, 'cs'], ['creme-liquide', 10, 'cl', 'opt'], ['piment', 1, 'pincee', 'opt'],
    ['parmesan', 50, 'g', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Émincer finement le fenouil (garder les pluches vertes) et l’oignon. Hacher l’ail.',
    'Faire chauffer l’huile dans une grande sauteuse et y faire dorer la chair à saucisse 6 min à feu vif, en l’émiettant à la cuillère, avec les graines de fenouil et le piment.',
    'Ajouter le fenouil, l’oignon et l’ail. Cuire 10 min à feu moyen en remuant, jusqu’à ce que le fenouil soit tendre et légèrement caramélisé.',
    'Déglacer au vin blanc en grattant les sucs, laisser réduire 2 min à feu vif, puis ajouter la crème et laisser frémir 2 min à feu doux. Poivrer, saler peu.',
    cuire('les pâtes'),
    'Mélanger les pâtes avec la sauce et une demi-louche d’eau de cuisson, 1 min à feu moyen. Servir avec le parmesan râpé et les pluches de fenouil.'
  ]);

  R('pates-poireaux-lardons', 'Pâtes aux poireaux et aux lardons', 'Française', 'Plat', 35, 'Facile', 4, [
    ['pates', 400, 'g'], ['poireaux', 3], ['lardons', 150, 'g'], ['creme-fraiche', 15, 'cl'], ['beurre', 15, 'g'],
    ['moutarde', 1, 'cc', 'opt'], ['fromage-rape', 50, 'g', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Fendre les poireaux en deux, les laver soigneusement et les émincer finement (blanc et vert tendre).',
    'Faire dorer les lardons à sec dans une grande sauteuse, 4 min à feu moyen. Les réserver et jeter l’excédent de gras.',
    'Dans la même sauteuse, faire fondre les poireaux dans le beurre, 12 à 15 min à feu doux et à couvert, en remuant de temps en temps : ils doivent être fondants, sans coloration.',
    'Ajouter la crème, la moutarde et les lardons. Laisser frémir 2 min à feu doux. Poivrer, saler peu.',
    cuire('les pâtes'),
    'Mélanger les pâtes avec la fondue de poireaux et un peu d’eau de cuisson, 1 min à feu doux. Servir avec le fromage râpé.'
  ]);

  R('one-pot-pasta-tomate-basilic', 'One-pot pasta tomate et basilic', 'Italienne', 'Plat', 20, 'Facile', 4, [
    ['pates', 350, 'g'], ['tomates-cerises', 400, 'g'], ['oignons', 1], ['ail', 2], ['basilic', 0.5, 'pc'], ['huile-olive', 2, 'cs'],
    ['concentre-tomate', 1, 'cs', 'opt'], ['piment', 1, 'pincee', 'opt'], ['parmesan', 50, 'g', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Émincer finement l’oignon et l’ail. Couper les tomates cerises en deux.',
    'Dans une grande sauteuse ou une cocotte, réunir à froid les pâtes crues, les tomates, l’oignon, l’ail, le concentré de tomate, l’huile, le piment, quelques feuilles de basilic, 1 cuillère à café rase de sel et 90 cl d’eau.',
    'Porter à ébullition à feu vif, puis cuire 10 à 12 min à feu moyen, à découvert, en remuant très souvent pour que les pâtes n’attachent pas.',
    'Arrêter quand les pâtes sont al dente et qu’il ne reste qu’un fond de sauce onctueuse ; ajouter un filet d’eau si elle réduit trop vite.',
    'Poivrer, ajouter le reste du basilic et servir avec le parmesan râpé.'
  ]);

  R('one-pot-pasta-chorizo-poivron', 'One-pot pasta au chorizo et au poivron', 'Française', 'Plat', 25, 'Facile', 4, [
    ['pates', 350, 'g'], ['chorizo', 120, 'g'], ['poivrons', 1], ['tomates-concassees', 400, 'g'], ['oignons', 1], ['ail', 1],
    ['paprika', 1, 'cc', 'opt'], ['fromage-rape', 50, 'g', 'opt'], ['persil', 0.25, 'pc', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Couper le chorizo pelé en demi-rondelles, le poivron en petits dés. Émincer l’oignon et l’ail.',
    'Dans une cocotte, faire revenir le chorizo à sec 2 min à feu moyen. Ajouter l’oignon, l’ail et le poivron, cuire 4 min à feu moyen dans le gras rendu.',
    'Ajouter les pâtes crues, les tomates concassées, le paprika, 70 cl d’eau et une pincée de sel. Porter à ébullition à feu vif.',
    'Cuire 11 à 13 min à feu moyen, à découvert, en remuant souvent, jusqu’à ce que les pâtes soient al dente et la sauce nappante.',
    'Poivrer, laisser reposer 2 min hors du feu, puis servir avec le fromage râpé et le persil ciselé.'
  ]);

  R('pates-au-four-tomate-mozzarella', 'Pâtes au four à la tomate et à la mozzarella', 'Italienne', 'Plat', 45, 'Facile', 4, [
    ['pates', 400, 'g'], ['coulis-tomate', 50, 'cl'], ['mozzarella', 250, 'g'], ['parmesan', 50, 'g'], ['oignons', 1], ['ail', 1],
    ['huile-olive', 2, 'cs'], ['origan', 1, 'cc', 'opt'], ['basilic', 0.5, 'pc', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Préchauffer le four à 200 °C. Dans une casserole, faire fondre l’oignon et l’ail hachés dans l’huile, 4 min à feu moyen. Ajouter le coulis et l’origan, saler, poivrer et laisser mijoter 10 min à feu doux.',
    'Cuire les pâtes 8 min dans une grande casserole d’eau bouillante salée (4 L pour 400 g), soit 3 min de moins que le temps du paquet : elles finiront de cuire au four. Égoutter.',
    'Mélanger les pâtes avec la sauce, le basilic et la moitié de la mozzarella coupée en dés. Verser dans un plat à gratin huilé.',
    'Répartir le reste de la mozzarella et le parmesan râpé sur le dessus.',
    'Enfourner 15 à 20 min à 200 °C, jusqu’à ce que le fromage soit fondu et doré par endroits. Laisser reposer 5 min avant de servir.'
  ]);

  R('gratin-pates-bolognaise', 'Gratin de pâtes à la bolognaise', 'Française', 'Plat', 55, 'Facile', 4, [
    ['pates', 350, 'g'], ['boeuf-hache', 350, 'g'], ['tomates-concassees', 400, 'g'], ['oignons', 1], ['ail', 1], ['carottes', 1, 'pc', 'opt'],
    ['concentre-tomate', 1, 'cs'], ['huile-olive', 1, 'cs'], ['fromage-rape', 120, 'g'], ['herbes-provence', 1, 'cc', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Dans une sauteuse, faire revenir l’oignon, l’ail et la carotte hachés dans l’huile, 5 min à feu moyen. Ajouter la viande et la saisir 5 min à feu vif en l’égrenant.',
    'Ajouter le concentré, les tomates concassées et les herbes. Saler, poivrer et laisser mijoter 20 min à feu doux, à demi couvert.',
    'Préchauffer le four à 200 °C. Cuire les pâtes 9 min dans une grande casserole d’eau bouillante salée (3,5 L pour 350 g), soit 2 min de moins que le temps du paquet. Égoutter.',
    'Mélanger les pâtes avec la sauce et la moitié du fromage. Verser dans un plat à gratin et couvrir du reste de fromage.',
    'Gratiner 15 min au four à 200 °C, jusqu’à ce que le dessus soit doré et croustillant.'
  ]);

  R('mac-cheese-bacon', 'Mac and cheese au bacon', 'Américaine', 'Plat', 45, 'Facile', 4, [
    ['pates', 400, 'g'], ['bacon', 10], ['cheddar', 10], ['lait', 60, 'cl'], ['beurre', 40, 'g'], ['farine', 40, 'g'],
    ['chapelure', 30, 'g', 'opt'], ['moutarde', 1, 'cc', 'opt'], ['paprika-fume', 0.5, 'cc', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Préchauffer le four à 200 °C. Faire griller le bacon à sec dans une poêle, 2 à 3 min par face à feu moyen, jusqu’à ce qu’il soit croustillant. L’égoutter sur du papier absorbant et le couper en morceaux.',
    'Cuire les pâtes (des macaronis courts) 7 à 8 min dans une grande casserole d’eau bouillante salée (4 L pour 400 g), soit 2 min de moins que le temps du paquet, et les égoutter.',
    'Dans une grande casserole, faire fondre le beurre à feu moyen, ajouter la farine et remuer 1 min. Verser le lait petit à petit en fouettant et cuire 5 min à feu doux sans cesser de remuer, jusqu’à ce que la sauce épaississe.',
    'Hors du feu, y faire fondre le cheddar coupé en morceaux avec la moutarde et le paprika fumé. Poivrer, saler peu.',
    'Mélanger les pâtes, la sauce et les deux tiers du bacon. Verser dans un plat, parsemer de chapelure et du reste de bacon.',
    'Gratiner 15 min au four à 200 °C, jusqu’à ce que le dessus soit doré et que la sauce bouillonne sur les bords.'
  ]);

  R('lasagnes-saumon-epinards', 'Lasagnes au saumon et aux épinards', 'Française', 'Plat', 75, 'Moyenne', 6, [
    ['lasagnes', 250, 'g'], ['saumon', 4], ['epinards', 600, 'g'], ['lait', 80, 'cl'], ['beurre', 60, 'g'], ['farine', 50, 'g'],
    ['fromage-rape', 100, 'g'], ['ail', 1], ['muscade', 1, 'pincee', 'opt'], ['citron', 0.5, 'pc', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Faire tomber les épinards lavés avec l’ail haché dans 10 g de beurre, 4 min à feu vif. Saler, puis les presser dans une passoire pour retirer toute leur eau et les hacher grossièrement.',
    'Retirer la peau du saumon et couper la chair crue en cubes de 2 cm. Les arroser d’un filet de jus de citron, saler et poivrer.',
    'Préparer la béchamel : faire fondre 50 g de beurre à feu moyen, ajouter la farine et remuer 1 min. Verser le lait petit à petit en fouettant et cuire 6 à 8 min à feu doux sans cesser de remuer, jusqu’à ce qu’elle nappe la cuillère en restant assez fluide (les feuilles crues absorbent du liquide). Saler, poivrer, ajouter la muscade.',
    'Préchauffer le four à 180 °C. Étaler un fond de béchamel dans un plat de 20 × 30 cm, puis alterner trois fois : feuilles de lasagnes, épinards, saumon, béchamel.',
    'Terminer par une couche de lasagnes, le reste de béchamel et le fromage râpé.',
    'Enfourner 40 min à 180 °C, jusqu’à ce que le dessus soit doré et qu’un couteau traverse les pâtes sans résistance. Laisser reposer 10 min avant de couper.'
  ]);

  R('lasagnes-legumes-du-soleil', 'Lasagnes aux légumes du soleil', 'Italienne', 'Plat', 100, 'Moyenne', 6, [
    ['lasagnes', 250, 'g'], ['courgettes', 2], ['aubergines', 1], ['poivrons', 2], ['oignons', 1], ['ail', 2], ['coulis-tomate', 50, 'cl'],
    ['mozzarella', 250, 'g'], ['parmesan', 60, 'g'], ['huile-olive', 4, 'cs'], ['herbes-provence', 1, 'cc', 'opt'], ['basilic', 0.5, 'pc', 'opt'],
    ['sel', null], ['poivre', null]
  ], [
    'Couper les courgettes, l’aubergine et les poivrons en dés de 1 cm. Émincer l’oignon et l’ail.',
    'Faire chauffer l’huile dans une grande sauteuse. Faire revenir l’oignon 3 min à feu moyen, puis ajouter l’aubergine et les poivrons, cuire 8 min à feu vif en remuant. Ajouter les courgettes et l’ail, cuire encore 6 min à feu vif.',
    'Verser le coulis, 10 cl d’eau et les herbes de Provence. Saler, poivrer et laisser mijoter 15 min à feu doux : la sauce doit rester assez fluide pour cuire les pâtes.',
    'Préchauffer le four à 180 °C. Dans un plat de 20 × 30 cm, alterner trois fois : sauce aux légumes, feuilles de lasagnes, quelques dés de mozzarella et feuilles de basilic.',
    'Terminer par une couche de sauce, le reste de la mozzarella et le parmesan râpé.',
    'Couvrir de papier aluminium et enfourner 25 min à 180 °C, puis découvrir et cuire encore 15 à 20 min, jusqu’à ce que le dessus soit gratiné. Laisser reposer 10 min.'
  ]);

  R('lasagnes-poulet-champignons', 'Lasagnes au poulet et aux champignons', 'Française', 'Plat', 80, 'Moyenne', 6, [
    ['lasagnes', 250, 'g'], ['poulet', 500, 'g'], ['champignons', 400, 'g'], ['oignons', 1], ['ail', 1], ['lait', 80, 'cl'],
    ['beurre', 70, 'g'], ['farine', 60, 'g'], ['fromage-rape', 120, 'g'], ['huile-olive', 1, 'cs'], ['muscade', 1, 'pincee', 'opt'],
    ['thym', 1, 'pc', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Couper le poulet en petits dés de 1 cm et émincer les champignons. Hacher l’oignon et l’ail.',
    'Faire dorer le poulet dans l’huile, dans une grande poêle, 5 min à feu vif. Saler, poivrer et réserver. Dans la même poêle, faire sauter les champignons avec 10 g de beurre, l’oignon, l’ail et le thym, 8 min à feu vif, jusqu’à évaporation de l’eau.',
    'Préparer la béchamel : faire fondre 60 g de beurre à feu moyen, ajouter la farine et remuer 1 min. Verser le lait petit à petit en fouettant et cuire 6 à 8 min à feu doux sans cesser de remuer, jusqu’à ce qu’elle nappe la cuillère. Saler, poivrer, ajouter la muscade.',
    'Mélanger le poulet et les champignons avec les deux tiers de la béchamel.',
    'Préchauffer le four à 180 °C. Dans un plat de 20 × 30 cm, étaler un peu de béchamel nature, puis alterner trois fois feuilles de lasagnes et garniture. Finir par des lasagnes, le reste de béchamel et le fromage râpé.',
    'Enfourner 40 min à 180 °C, jusqu’à ce que le dessus soit bien doré. Laisser reposer 10 min avant de servir.'
  ]);

  R('cannellonis-viande', 'Cannellonis à la viande', 'Italienne', 'Plat', 80, 'Moyenne', 4, [
    ['cannellonis', 200, 'g'], ['boeuf-hache', 400, 'g'], ['coulis-tomate', 60, 'cl'], ['oignons', 1], ['ail', 2], ['oeufs', 1],
    ['parmesan', 70, 'g'], ['mozzarella', 125, 'g'], ['huile-olive', 2, 'cs'], ['concentre-tomate', 1, 'cs', 'opt'], ['origan', 1, 'cc', 'opt'],
    ['sel', null], ['poivre', null]
  ], [
    'Dans une poêle, faire revenir l’oignon et l’ail hachés dans 1 cuillère d’huile, 4 min à feu moyen. Ajouter la viande et la saisir 6 min à feu vif en l’égrenant finement. Incorporer le concentré de tomate, saler, poivrer et laisser tiédir 10 min.',
    'Mélanger la viande avec l’œuf, 40 g de parmesan râpé et 4 cuillères à soupe de coulis.',
    'Délayer le reste du coulis avec 15 cl d’eau, l’origan, le reste d’huile, du sel et du poivre : la sauce doit être fluide, les tubes crus en absorbent beaucoup.',
    'Préchauffer le four à 180 °C. Étaler un tiers de la sauce dans un plat à gratin. Farcir les cannellonis crus (16 à 18 tubes) à la petite cuillère et les ranger côte à côte, en une seule couche.',
    'Recouvrir entièrement du reste de sauce, puis de la mozzarella en dés et du reste du parmesan.',
    'Couvrir de papier aluminium et enfourner 30 min à 180 °C. Découvrir et cuire encore 15 min, jusqu’à ce que le dessus soit gratiné et que la pointe d’un couteau traverse les pâtes sans résistance.'
  ]);

  R('pates-tomates-cerises-burrata', 'Pâtes aux tomates cerises et à la burrata', 'Italienne', 'Plat', 25, 'Facile', 4, [
    ['pates', 400, 'g'], ['tomates-cerises', 500, 'g'], ['burrata', 2], ['ail', 2], ['huile-olive', 4, 'cs'], ['basilic', 0.5, 'pc'],
    ['piment', 1, 'pincee', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Sortir les burratas du réfrigérateur pour qu’elles soient à température ambiante.',
    'Faire chauffer 3 cuillères d’huile dans une grande poêle avec l’ail écrasé et le piment, 1 min à feu moyen. Ajouter les tomates cerises entières, saler et cuire 10 à 12 min à feu moyen-vif, en les écrasant légèrement quand elles éclatent, jusqu’à obtenir une sauce courte.',
    cuire('les pâtes'),
    'Verser les pâtes dans la poêle avec un peu d’eau de cuisson et la moitié du basilic, mélanger 1 min à feu vif.',
    'Répartir dans les assiettes, déposer une demi-burrata déchirée sur chacune, poivrer, arroser du reste d’huile et parsemer de basilic.'
  ]);

  R('pates-poivrons-grilles-chevre', 'Pâtes aux poivrons grillés et au chèvre', 'Française', 'Plat', 20, 'Facile', 4, [
    ['pates', 400, 'g'], ['poivrons-grilles', 250, 'g'], ['chevre-frais', 150, 'g'], ['ail', 1], ['huile-olive', 2, 'cs'],
    ['olives', 50, 'g', 'opt'], ['basilic', 0.5, 'pc', 'opt'], ['piment', 1, 'pincee', 'opt'], ['sel', null], ['poivre', null]
  ], [
    cuire('les pâtes'),
    'Pendant ce temps, égoutter les poivrons et les couper en lanières. Hacher l’ail.',
    'Dans une grande poêle, faire revenir l’ail dans l’huile, 30 s à feu moyen, puis ajouter les poivrons et le piment. Réchauffer 3 min à feu moyen.',
    'Hors du feu, ajouter les deux tiers du chèvre et 4 cuillères à soupe d’eau de cuisson, mélanger pour obtenir une sauce crémeuse.',
    'Ajouter les pâtes et les olives, mélanger, poivrer et saler si besoin. Servir avec le reste du chèvre émietté et le basilic.'
  ]);

  R('pates-alla-gricia', 'Pâtes alla gricia', 'Italienne', 'Plat', 25, 'Moyenne', 4, [
    ['pates', 400, 'g'], ['guanciale', 200, 'g'], ['pecorino', 100, 'g'], ['poivre', null], ['sel', null]
  ], [
    'Retirer la couenne du guanciale et le couper en bâtonnets de 5 mm. Râper finement le pecorino.',
    'Faire fondre le guanciale à sec dans une grande poêle, 8 min à feu moyen-doux, jusqu’à ce qu’il soit doré et croustillant à l’extérieur. Couper le feu et garder tout le gras.',
    'Porter 4 L d’eau à ébullition, saler peu (le guanciale et le pecorino sont salés) et y cuire les pâtes (des rigatoni) 11 à 12 min, soit 1 min de moins que le temps du paquet. Garder deux louches d’eau de cuisson, puis égoutter.',
    'Verser les pâtes dans la poêle avec une louche d’eau de cuisson et cuire 1 min à feu vif en remuant, jusqu’à ce que le jus épaississe.',
    'Hors du feu, ajouter le pecorino et beaucoup de poivre, mélanger vivement en ajoutant un peu d’eau pour obtenir une sauce crémeuse. Servir aussitôt.'
  ]);

  R('pates-courgettes-lardons', 'Pâtes aux courgettes et aux lardons', 'Française', 'Plat', 25, 'Facile', 4, [
    ['pates', 400, 'g'], ['courgettes', 2], ['lardons', 150, 'g'], ['creme-fraiche', 15, 'cl'], ['ail', 1],
    ['fromage-rape', 50, 'g', 'opt'], ['thym', 1, 'pc', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Couper les courgettes en dés de 1 cm. Hacher l’ail.',
    'Faire dorer les lardons à sec dans une grande poêle, 4 min à feu moyen. Ajouter les courgettes, l’ail et le thym, et cuire 8 min à feu vif en remuant : elles doivent être dorées mais encore un peu fermes.',
    cuire('les pâtes'),
    'Ajouter la crème dans la poêle, laisser frémir 1 min à feu doux, puis ajouter les pâtes et un peu d’eau de cuisson. Mélanger 1 min.',
    'Poivrer, saler peu et servir avec le fromage râpé.'
  ]);

  R('spaghetti-boulettes', 'Spaghetti aux boulettes de viande', 'Américaine', 'Plat', 50, 'Facile', 4, [
    ['spaghetti', 400, 'g'], ['boeuf-hache', 400, 'g'], ['chapelure', 40, 'g'], ['oeufs', 1], ['parmesan', 60, 'g'], ['ail', 2],
    ['oignons', 1], ['coulis-tomate', 60, 'cl'], ['huile-olive', 3, 'cs'], ['lait', 3, 'cl', 'opt'], ['persil', 0.25, 'pc', 'opt'],
    ['origan', 1, 'cc', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Mélanger la viande avec la chapelure humectée de lait, l’œuf, 30 g de parmesan râpé, 1 gousse d’ail hachée, le persil ciselé, du sel et du poivre. Façonner une vingtaine de boulettes de la taille d’une noix, mains humides.',
    'Dans une grande sauteuse, faire dorer les boulettes dans 2 cuillères d’huile, 5 min à feu moyen-vif, en les retournant délicatement. Réserver.',
    'Dans la même sauteuse, faire fondre l’oignon et le reste d’ail hachés avec le reste d’huile, 4 min à feu moyen. Ajouter le coulis et l’origan, saler, poivrer et porter à frémissement.',
    'Remettre les boulettes, couvrir et laisser mijoter 20 min à feu doux, en les retournant à mi-cuisson.',
    cuire('les spaghetti', '9 à 11 min'),
    'Mélanger les spaghetti avec la sauce 1 min à feu doux, déposer les boulettes par-dessus et servir avec le reste du parmesan.'
  ]);

  R('spaghetti-citron', 'Spaghetti au citron', 'Italienne', 'Plat', 20, 'Facile', 4, [
    ['spaghetti', 400, 'g'], ['citron', 2], ['beurre', 60, 'g'], ['parmesan', 80, 'g'], ['huile-olive', 1, 'cs', 'opt'],
    ['basilic', 0.5, 'pc', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Râper finement le zeste des 2 citrons (non traités) et presser le jus d’un seul. Râper le parmesan.',
    'Cuire les spaghetti 8 à 9 min dans une grande casserole d’eau bouillante salée (4 L pour 400 g), soit 1 min de moins que le temps du paquet. Garder deux louches d’eau de cuisson, puis égoutter.',
    'Dans une grande poêle, faire fondre le beurre à feu doux avec le zeste, 1 min, sans le laisser colorer. Ajouter une louche d’eau de cuisson et fouetter pour émulsionner.',
    'Ajouter les spaghetti et cuire 1 min à feu moyen en remuant. Hors du feu, incorporer le parmesan et le jus de citron en mélangeant vivement, en ajoutant de l’eau de cuisson jusqu’à obtenir une sauce brillante et crémeuse.',
    'Poivrer généreusement, ajouter un filet d’huile d’olive et le basilic. Servir aussitôt.'
  ]);

  R('pates-poulet-curry', 'Pâtes au poulet et au curry', 'Française', 'Plat', 25, 'Facile', 4, [
    ['pates', 400, 'g'], ['poulet', 400, 'g'], ['creme-liquide', 20, 'cl'], ['oignons', 1], ['curry', 2, 'cc'], ['huile', 1, 'cs'],
    ['poivrons', 1, 'pc', 'opt'], ['coriandre', 0.25, 'pc', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Couper le poulet en dés de 2 cm. Émincer l’oignon et couper le poivron en fines lanières.',
    'Faire dorer le poulet dans l’huile, dans une grande sauteuse, 5 min à feu vif. Ajouter l’oignon et le poivron, cuire 4 min à feu moyen.',
    'Saupoudrer de curry, remuer 30 s pour le torréfier, puis verser la crème. Saler, poivrer et laisser frémir 5 min à feu doux.',
    cuire('les pâtes'),
    'Mélanger les pâtes avec la sauce 1 min à feu doux, en la détendant avec un peu d’eau de cuisson. Parsemer de coriandre ciselée.'
  ]);

  R('tagliatelles-alfredo', 'Tagliatelles Alfredo', 'Italienne', 'Plat', 20, 'Facile', 4, [
    ['tagliatelles', 400, 'g'], ['beurre', 120, 'g'], ['parmesan', 150, 'g'], ['poivre', null], ['sel', null]
  ], [
    'Sortir le beurre à l’avance et le couper en petits dés : il doit être mou. Râper très finement le parmesan.',
    'Cuire les tagliatelles 7 à 9 min dans une grande casserole d’eau bouillante salée (4 L pour 400 g), pour une cuisson al dente (selon le paquet ; 2 à 4 min si elles sont fraîches). Garder deux louches d’eau de cuisson.',
    'Mettre le beurre dans un grand saladier tiédi. Y verser les tagliatelles à peine égouttées, avec une demi-louche d’eau de cuisson.',
    'Ajouter le parmesan en trois fois, en soulevant et en mélangeant vivement les pâtes 1 à 2 min, avec un peu d’eau si besoin : le beurre, le fromage et l’amidon forment une sauce crémeuse, sans crème.',
    'Poivrer et servir immédiatement dans des assiettes chaudes.'
  ]);

  R('tagliatelles-poulet-champignons', 'Tagliatelles au poulet et aux champignons', 'Française', 'Plat', 30, 'Facile', 4, [
    ['tagliatelles', 400, 'g'], ['poulet', 400, 'g'], ['champignons', 300, 'g'], ['creme-liquide', 25, 'cl'], ['echalotes', 2],
    ['beurre', 20, 'g'], ['huile', 1, 'cs'], ['vin-blanc', 10, 'cl', 'opt'], ['moutarde', 1, 'cc', 'opt'], ['persil', 0.25, 'pc', 'opt'],
    ['sel', null], ['poivre', null]
  ], [
    'Couper le poulet en lanières, les champignons en lamelles, et émincer les échalotes.',
    'Faire dorer le poulet dans l’huile, dans une grande poêle, 5 min à feu vif. Saler, poivrer et réserver.',
    'Dans la même poêle, faire sauter les champignons dans le beurre, 6 min à feu vif, jusqu’à ce qu’ils soient dorés. Ajouter les échalotes et cuire 2 min à feu moyen.',
    'Déglacer au vin blanc et laisser réduire de moitié, 2 min à feu vif. Ajouter la crème et la moutarde, remettre le poulet et laisser frémir 5 min à feu doux.',
    cuire('les tagliatelles', '7 à 9 min'),
    'Mélanger les tagliatelles avec la sauce 1 min à feu doux, en détendant avec un peu d’eau de cuisson, et parsemer de persil ciselé.'
  ]);

  /* ───────────── Risottos ───────────── */

  R('risotto-chorizo', 'Risotto au chorizo', 'Française', 'Plat', 40, 'Moyenne', 4, [
    ['riz-risotto', 300, 'g'], ['chorizo', 150, 'g'], ['oignons', 1], ['vin-blanc', 10, 'cl'], ['bouillon', 1], ['parmesan', 50, 'g'],
    ['beurre', 20, 'g'], ['poivrons', 1, 'pc', 'opt'], ['paprika', 1, 'cc', 'opt'], ['persil', 0.25, 'pc', 'opt'], ['sel', null], ['poivre', null]
  ], [
    BOUILLON,
    'Retirer la peau du chorizo et le couper en petits dés. Hacher l’oignon et couper le poivron en petits dés.',
    'Dans une sauteuse, faire revenir le chorizo à sec 3 min à feu moyen. En réserver la moitié pour le service. Ajouter l’oignon et le poivron et cuire 4 min à feu moyen dans le gras rendu.',
    'Ajouter le riz et le paprika, nacrer 2 min à feu moyen en remuant, jusqu’à ce que les grains soient translucides. Déglacer au vin blanc et laisser évaporer 1 min.',
    'À feu moyen, ' + MOUILLER + '.',
    'Hors du feu, incorporer le beurre et le parmesan râpé. Poivrer, goûter avant de saler, couvrir 2 min et servir avec le chorizo réservé et le persil.'
  ]);

  R('risotto-courgettes', 'Risotto aux courgettes', 'Italienne', 'Plat', 40, 'Moyenne', 4, [
    ['riz-risotto', 300, 'g'], ['courgettes', 3], ['oignons', 1], ['vin-blanc', 10, 'cl'], ['bouillon', 1], ['parmesan', 60, 'g'],
    ['beurre', 40, 'g'], ['huile-olive', 2, 'cs'], ['citron', 0.5, 'pc', 'opt'], ['menthe', 0.25, 'pc', 'opt'], ['sel', null], ['poivre', null]
  ], [
    BOUILLON,
    'Couper les courgettes en dés de 1 cm. Les faire dorer dans 1 cuillère d’huile, dans une sauteuse, 5 min à feu vif. Saler et réserver.',
    'Faire fondre l’oignon haché dans le reste d’huile, 3 min à feu moyen. Ajouter le riz et le nacrer 2 min à feu moyen en remuant. Déglacer au vin blanc et laisser évaporer 1 min.',
    'À feu moyen, ' + MOUILLER + '. Ajouter les courgettes 5 min avant la fin.',
    'Hors du feu, incorporer le beurre froid en dés, le parmesan râpé et un peu de zeste de citron. Poivrer, couvrir 2 min et servir avec la menthe ciselée.'
  ]);

  R('risotto-asperges', 'Risotto aux asperges', 'Italienne', 'Plat', 45, 'Moyenne', 4, [
    ['riz-risotto', 300, 'g'], ['asperges-vertes', 500, 'g'], ['echalotes', 2], ['vin-blanc', 10, 'cl'], ['bouillon', 1],
    ['parmesan', 70, 'g'], ['beurre', 50, 'g'], ['citron', 0.5, 'pc', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Casser la base dure des asperges. Couper les pointes (5 cm) et détailler les tiges en rondelles de 1 cm.',
    'Délayer le cube dans 1,1 L d’eau bouillante. Y blanchir les pointes 2 min à frémissement, les sortir à l’écumoire et les réserver. Garder le bouillon frémissant à feu doux.',
    'Faire fondre les échalotes hachées dans 20 g de beurre, 3 min à feu doux. Ajouter le riz et le nacrer 2 min à feu moyen. Déglacer au vin blanc et laisser évaporer 1 min.',
    'Ajouter les rondelles d’asperges puis, à feu moyen, ' + MOUILLER + '.',
    'Hors du feu, incorporer le reste du beurre froid, le parmesan râpé et les pointes d’asperges. Poivrer, ajouter quelques gouttes de jus de citron, couvrir 2 min et servir.'
  ]);

  R('risotto-poulet', 'Risotto au poulet', 'Française', 'Plat', 45, 'Moyenne', 4, [
    ['riz-risotto', 300, 'g'], ['poulet', 350, 'g'], ['oignons', 1], ['vin-blanc', 10, 'cl'], ['bouillon', 1], ['parmesan', 60, 'g'],
    ['beurre', 30, 'g'], ['huile-olive', 2, 'cs'], ['champignons', 200, 'g', 'opt'], ['thym', 1, 'pc', 'opt'], ['sel', null], ['poivre', null]
  ], [
    BOUILLON,
    'Couper le poulet en dés de 2 cm. Les faire dorer dans 1 cuillère d’huile, dans une sauteuse, 4 min à feu vif. Ajouter les champignons émincés et le thym, cuire encore 4 min à feu vif. Saler, poivrer et réserver.',
    'Dans la même sauteuse, faire fondre l’oignon haché dans le reste d’huile, 3 min à feu moyen. Ajouter le riz et le nacrer 2 min à feu moyen. Déglacer au vin blanc en grattant les sucs et laisser évaporer 1 min.',
    'À feu moyen, ' + MOUILLER + '. Remettre le poulet 5 min avant la fin pour qu’il finisse de cuire.',
    'Hors du feu, incorporer le beurre et le parmesan râpé. Couvrir 2 min, rectifier l’assaisonnement et servir.'
  ]);

  R('risotto-crevettes', 'Risotto aux crevettes', 'Italienne', 'Plat', 40, 'Moyenne', 4, [
    ['riz-risotto', 300, 'g'], ['crevettes', 350, 'g'], ['echalotes', 2], ['ail', 1], ['vin-blanc', 15, 'cl'], ['bouillon', 1],
    ['beurre', 40, 'g'], ['huile-olive', 2, 'cs'], ['citron', 0.5, 'pc'], ['persil', 0.25, 'pc', 'opt'], ['piment', 1, 'pincee', 'opt'],
    ['sel', null], ['poivre', null]
  ], [
    'Délayer le cube (de légumes de préférence) dans 1 L d’eau bouillante et garder ce bouillon frémissant à feu doux.',
    'Dans une sauteuse, saisir les crevettes décortiquées dans 1 cuillère d’huile avec l’ail haché et le piment, 2 min à feu vif. Saler et réserver.',
    'Dans la même sauteuse, faire fondre les échalotes hachées dans le reste d’huile, 3 min à feu doux. Ajouter le riz et le nacrer 2 min à feu moyen. Déglacer au vin blanc et laisser évaporer 1 min.',
    'À feu moyen, ' + MOUILLER + '.',
    'Hors du feu, incorporer le beurre froid en dés, les crevettes, le zeste et un filet de jus de citron. Poivrer, couvrir 2 min et servir avec le persil ciselé. Traditionnellement, pas de parmesan avec les crustacés.'
  ]);

  R('risotto-potiron', 'Risotto au potiron', 'Italienne', 'Plat', 45, 'Moyenne', 4, [
    ['riz-risotto', 300, 'g'], ['potiron', 500, 'g'], ['oignons', 1], ['vin-blanc', 10, 'cl'], ['bouillon', 1], ['parmesan', 70, 'g'],
    ['beurre', 50, 'g'], ['huile-olive', 1, 'cs'], ['sauge-fraiche', 6, 'pc', 'opt'], ['muscade', 1, 'pincee', 'opt'], ['sel', null], ['poivre', null]
  ], [
    BOUILLON,
    'Éplucher le potiron et couper la chair en dés de 1 cm.',
    'Dans une sauteuse, faire fondre l’oignon haché dans l’huile et 20 g de beurre, 3 min à feu moyen. Ajouter le potiron et le faire revenir 5 min à feu moyen en remuant.',
    'Ajouter le riz et le nacrer 2 min à feu moyen. Déglacer au vin blanc et laisser évaporer 1 min.',
    'À feu moyen, ' + MOUILLER + '. Le potiron fond en partie et donne un risotto orangé et crémeux.',
    'Hors du feu, incorporer 20 g de beurre, le parmesan râpé et la muscade. Poivrer, saler si besoin, couvrir 2 min. Servir avec les feuilles de sauge frites 30 s à feu moyen dans les 10 g de beurre restants.'
  ]);

  R('risotto-petits-pois-lardons', 'Risotto aux petits pois et aux lardons', 'Française', 'Plat', 40, 'Moyenne', 4, [
    ['riz-risotto', 300, 'g'], ['petits-pois', 250, 'g'], ['lardons', 150, 'g'], ['oignons', 1], ['vin-blanc', 10, 'cl'], ['bouillon', 1],
    ['parmesan', 60, 'g'], ['beurre', 30, 'g'], ['menthe', 0.25, 'pc', 'opt'], ['sel', null], ['poivre', null]
  ], [
    BOUILLON,
    'Faire dorer les lardons à sec dans une sauteuse, 4 min à feu moyen. En réserver la moitié.',
    'Ajouter l’oignon haché et le faire fondre 3 min à feu moyen dans le gras des lardons. Ajouter le riz et le nacrer 2 min à feu moyen. Déglacer au vin blanc et laisser évaporer 1 min.',
    'À feu moyen, ' + MOUILLER + '. Ajouter les petits pois (frais ou surgelés) 6 min avant la fin.',
    'Hors du feu, incorporer le beurre et le parmesan râpé. Poivrer, goûter avant de saler, couvrir 2 min. Servir avec les lardons réservés et la menthe ciselée.'
  ]);

  R('risotto-quatre-fromages', 'Risotto aux quatre fromages', 'Italienne', 'Plat', 40, 'Moyenne', 4, [
    ['riz-risotto', 300, 'g'], ['gorgonzola', 80, 'g'], ['mozzarella', 125, 'g'], ['comte', 60, 'g'], ['parmesan', 50, 'g'],
    ['echalotes', 2], ['vin-blanc', 10, 'cl'], ['bouillon', 1], ['beurre', 30, 'g'], ['cerneaux-de-noix', 30, 'g', 'opt'], ['poivre', null], ['sel', null]
  ], [
    BOUILLON,
    'Couper le gorgonzola et la mozzarella en dés, râper le comté et le parmesan.',
    'Dans une sauteuse, faire fondre les échalotes hachées dans le beurre, 3 min à feu doux. Ajouter le riz et le nacrer 2 min à feu moyen. Déglacer au vin blanc et laisser évaporer 1 min.',
    'À feu moyen, ' + MOUILLER + '.',
    'Hors du feu, incorporer les quatre fromages en remuant vivement jusqu’à ce qu’ils soient fondus : le risotto doit rester souple, ajouter une demi-louche de bouillon s’il est trop serré.',
    'Poivrer, goûter avant de saler, couvrir 2 min et servir avec les noix concassées.'
  ]);

  R('risotto-tomate', 'Risotto à la tomate', 'Italienne', 'Plat', 40, 'Moyenne', 4, [
    ['riz-risotto', 300, 'g'], ['coulis-tomate', 30, 'cl'], ['oignons', 1], ['ail', 1], ['vin-blanc', 10, 'cl'], ['bouillon', 1],
    ['parmesan', 60, 'g'], ['beurre', 30, 'g'], ['huile-olive', 2, 'cs'], ['mozzarella', 125, 'g', 'opt'], ['basilic', 0.5, 'pc', 'opt'],
    ['sel', null], ['poivre', null]
  ], [
    'Délayer le cube dans 80 cl d’eau bouillante, ajouter le coulis de tomate et garder ce bouillon frémissant à feu doux.',
    'Faire fondre l’oignon et l’ail hachés dans l’huile, 3 min à feu moyen. Ajouter le riz et le nacrer 2 min à feu moyen en remuant. Déglacer au vin blanc et laisser évaporer 1 min.',
    'À feu moyen, ajouter le bouillon à la tomate chaud louche par louche, en remuant et en attendant qu’il soit absorbé avant d’en remettre, pendant 18 à 20 min : le riz doit être tendre mais encore légèrement ferme.',
    'Hors du feu, incorporer le beurre et le parmesan râpé. Poivrer, goûter avant de saler, couvrir 2 min.',
    'Servir avec la mozzarella déchirée et le basilic.'
  ]);

  R('risotto-poireaux', 'Risotto aux poireaux', 'Française', 'Plat', 45, 'Moyenne', 4, [
    ['riz-risotto', 300, 'g'], ['poireaux', 3], ['vin-blanc', 10, 'cl'], ['bouillon', 1], ['parmesan', 60, 'g'], ['beurre', 50, 'g'],
    ['lardons', 100, 'g', 'opt'], ['creme-fraiche', 5, 'cl', 'opt'], ['sel', null], ['poivre', null]
  ], [
    BOUILLON,
    'Fendre les poireaux, les laver et émincer finement les blancs et le vert tendre.',
    'Dans une sauteuse, faire fondre les poireaux dans 30 g de beurre, 10 min à feu doux avec une pincée de sel, sans coloration. Faire dorer les lardons à part dans une poêle, à sec, 4 min à feu moyen, et les réserver.',
    'Ajouter le riz aux poireaux et le nacrer 2 min à feu moyen. Déglacer au vin blanc et laisser évaporer 1 min.',
    'À feu moyen, ' + MOUILLER + '.',
    'Hors du feu, incorporer le reste du beurre, le parmesan râpé et la crème. Poivrer, couvrir 2 min et servir avec les lardons.'
  ]);

  R('risotto-safran', 'Risotto au safran', 'Italienne', 'Plat', 35, 'Moyenne', 4, [
    ['riz-risotto', 320, 'g'], ['safran', 2], ['oignons', 1], ['vin-blanc', 10, 'cl'], ['bouillon', 1], ['parmesan', 80, 'g'],
    ['beurre', 70, 'g'], ['sel', null], ['poivre', null]
  ], [
    'Délayer le cube dans 1,1 L d’eau bouillante et garder ce bouillon frémissant à feu doux. En prélever une petite louche et y faire infuser le safran.',
    'Faire fondre l’oignon haché très finement dans 30 g de beurre, 5 min à feu doux : il doit devenir translucide, sans colorer.',
    'Ajouter le riz et le nacrer 2 min à feu moyen. Déglacer au vin blanc et laisser évaporer 1 min.',
    'Toujours à feu moyen, ' + MOUILLER + '. Verser l’infusion de safran à mi-cuisson.',
    'Hors du feu, incorporer le reste du beurre froid en dés et le parmesan râpé en remuant vivement : le risotto doit s’étaler en vague dans l’assiette. Couvrir 2 min, poivrer, goûter avant de saler et servir.'
  ]);

  R('risotto-betterave', 'Risotto à la betterave', 'Française', 'Plat', 40, 'Moyenne', 4, [
    ['riz-risotto', 300, 'g'], ['betteraves-cuites', 2], ['echalotes', 2], ['vin-blanc', 10, 'cl'], ['bouillon', 1], ['parmesan', 50, 'g'],
    ['beurre', 30, 'g'], ['huile-olive', 1, 'cs'], ['chevre-frais', 100, 'g', 'opt'], ['cerneaux-de-noix', 30, 'g', 'opt'],
    ['vinaigre-balsamique', 1, 'cc', 'opt'], ['sel', null], ['poivre', null]
  ], [
    BOUILLON,
    'Mixer une betterave en purée fine avec une louche de bouillon. Couper l’autre en petits dés.',
    'Faire fondre les échalotes hachées dans l’huile, 3 min à feu doux. Ajouter le riz et le nacrer 2 min à feu moyen. Déglacer au vin blanc et laisser évaporer 1 min.',
    'À feu moyen, ' + MOUILLER + '. Ajouter la purée et les dés de betterave 5 min avant la fin.',
    'Hors du feu, incorporer le beurre, le parmesan râpé et le vinaigre balsamique. Saler, poivrer, couvrir 2 min.',
    'Servir avec le chèvre frais émietté et les noix concassées.'
  ]);

  R('risotto-fruits-de-mer', 'Risotto aux fruits de mer', 'Italienne', 'Plat', 40, 'Moyenne', 4, [
    ['riz-risotto', 300, 'g'], ['cocktail-de-fruits-de-mer', 400, 'g'], ['echalotes', 2], ['ail', 2], ['vin-blanc', 15, 'cl'], ['bouillon', 1],
    ['huile-olive', 4, 'cs'], ['concentre-tomate', 1, 'cs', 'opt'], ['persil', 0.5, 'pc', 'opt'], ['piment', 1, 'pincee', 'opt'],
    ['citron', 0.5, 'pc', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Décongeler les fruits de mer s’ils sont surgelés et bien les égoutter. Délayer le cube (de légumes) dans 1 L d’eau bouillante et garder ce bouillon frémissant à feu doux.',
    'Saisir les fruits de mer dans 1 cuillère d’huile avec 1 gousse d’ail hachée et le piment, 2 min à feu vif. Réserver avec leur jus.',
    'Faire fondre les échalotes et le reste d’ail hachés dans 2 cuillères d’huile, 3 min à feu doux. Ajouter le riz et le nacrer 2 min à feu moyen. Ajouter le concentré de tomate, puis déglacer au vin blanc et laisser évaporer 2 min.',
    'À feu moyen, ' + MOUILLER + '. Ajouter les fruits de mer et leur jus pour les 2 dernières minutes.',
    'Hors du feu, lier avec le reste d’huile d’olive en remuant vivement (ni beurre ni parmesan). Saler, poivrer, couvrir 2 min et servir avec le persil ciselé et un quartier de citron.'
  ]);

  R('risotto-parmesan', 'Risotto au parmesan', 'Italienne', 'Plat', 35, 'Moyenne', 4, [
    ['riz-risotto', 320, 'g'], ['parmesan', 100, 'g'], ['beurre', 60, 'g'], ['oignons', 1], ['vin-blanc', 10, 'cl'], ['bouillon', 1],
    ['sel', null], ['poivre', null]
  ], [
    'Délayer le cube dans 1,1 L d’eau bouillante et garder ce bouillon frémissant à feu doux.',
    'Faire fondre l’oignon haché très finement dans 20 g de beurre, 5 min à feu doux, sans coloration.',
    'Ajouter le riz et le nacrer 2 min à feu moyen, jusqu’à ce que les grains soient translucides sur les bords. Déglacer au vin blanc et laisser évaporer complètement.',
    'Toujours à feu moyen, ' + MOUILLER + '.',
    'Hors du feu, ajouter le reste du beurre bien froid en dés et le parmesan râpé. Remuer vivement 1 min pour lier, couvrir 2 min, poivrer et goûter avant de saler.'
  ]);

  /* ───────────── Gnocchis ───────────── */

  R('gnocchis-beurre-sauge', 'Gnocchis poêlés au beurre de sauge', 'Italienne', 'Plat', 20, 'Facile', 4, [
    ['gnocchis', 800, 'g'], ['beurre', 70, 'g'], ['sauge-fraiche', 12], ['parmesan', 60, 'g'], ['sel', null], ['poivre', null]
  ], [
    'Porter 3 L d’eau à ébullition, saler et y plonger les gnocchis. Les sortir à l’écumoire dès qu’ils remontent à la surface, au bout de 2 min environ, et bien les égoutter.',
    'Faire fondre le beurre dans une grande poêle à feu moyen. Quand il mousse, ajouter les gnocchis et les faire dorer 4 à 5 min à feu moyen, en les retournant, jusqu’à ce qu’ils soient croustillants par endroits.',
    'Ajouter les feuilles de sauge et cuire encore 1 à 2 min à feu moyen : la sauge doit croustiller et le beurre prendre une couleur noisette, sans brunir.',
    'Poivrer et servir avec le parmesan râpé.'
  ]);

  R('gnocchis-gorgonzola', 'Gnocchis au gorgonzola', 'Italienne', 'Plat', 15, 'Facile', 4, [
    ['gnocchis', 800, 'g'], ['gorgonzola', 200, 'g'], ['creme-liquide', 20, 'cl'], ['cerneaux-de-noix', 40, 'g', 'opt'],
    ['parmesan', 30, 'g', 'opt'], ['poivre', null], ['sel', null]
  ], [
    'Faire chauffer la crème à feu doux dans une grande sauteuse. Y faire fondre le gorgonzola en morceaux, 4 min en remuant, sans laisser bouillir. Poivrer.',
    'Porter 3 L d’eau à ébullition, saler et y plonger les gnocchis. Les sortir à l’écumoire dès qu’ils remontent à la surface, au bout de 2 min environ.',
    'Les verser dans la sauce avec 2 cuillères à soupe d’eau de cuisson et mélanger 1 min à feu doux, jusqu’à ce qu’ils soient bien enrobés.',
    'Servir avec les noix concassées et le parmesan râpé.'
  ]);

  R('gnocchis-pesto-tomates-cerises', 'Gnocchis au pesto et aux tomates cerises', 'Italienne', 'Plat', 15, 'Facile', 4, [
    ['gnocchis', 800, 'g'], ['pesto', 120, 'g'], ['tomates-cerises', 250, 'g'], ['huile-olive', 1, 'cs'], ['mozzarella', 125, 'g', 'opt'],
    ['pignons', 20, 'g', 'opt'], ['basilic', 0.5, 'pc', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Couper les tomates cerises en deux et les faire sauter dans l’huile, dans une poêle, 3 min à feu vif : elles doivent être juste saisies. Saler.',
    'Porter 3 L d’eau à ébullition, saler et y plonger les gnocchis. Les sortir à l’écumoire dès qu’ils remontent à la surface, au bout de 2 min environ, en gardant un peu d’eau de cuisson.',
    'Hors du feu, mélanger les gnocchis avec le pesto délayé dans 3 cuillères à soupe d’eau de cuisson, puis ajouter les tomates.',
    'Servir avec la mozzarella en dés, les pignons grillés à sec 2 min à feu moyen, et le basilic. Poivrer.'
  ]);

  R('gnocchis-chorizo', 'Gnocchis poêlés au chorizo', 'Française', 'Plat', 20, 'Facile', 4, [
    ['gnocchis', 800, 'g'], ['chorizo', 150, 'g'], ['tomates-cerises', 250, 'g'], ['ail', 1], ['huile-olive', 1, 'cs'],
    ['roquette', 50, 'g', 'opt'], ['parmesan', 40, 'g', 'opt'], ['poivre', null]
  ], [
    'Retirer la peau du chorizo et le couper en demi-rondelles. Couper les tomates cerises en deux, hacher l’ail.',
    'Faire revenir le chorizo à sec dans une grande poêle, 3 min à feu moyen. Le réserver en gardant le gras dans la poêle.',
    'Ajouter l’huile et les gnocchis crus, sans les faire bouillir avant. Les faire dorer 7 à 8 min à feu moyen-vif en les remuant régulièrement : ils doivent être croustillants dehors et moelleux dedans.',
    'Ajouter l’ail et les tomates cerises, cuire 2 min à feu moyen, puis remettre le chorizo. Poivrer (le chorizo sale suffisamment).',
    'Servir avec la roquette et des copeaux de parmesan.'
  ]);

  R('gnocchis-champignons-creme', 'Gnocchis à la crème et aux champignons', 'Française', 'Plat', 25, 'Facile', 4, [
    ['gnocchis', 800, 'g'], ['champignons', 400, 'g'], ['creme-liquide', 25, 'cl'], ['echalotes', 2], ['ail', 1], ['beurre', 20, 'g'],
    ['parmesan', 40, 'g', 'opt'], ['persil', 0.25, 'pc', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Émincer les champignons et les échalotes, hacher l’ail.',
    'Dans une grande sauteuse, faire sauter les champignons dans le beurre, 6 à 8 min à feu vif, jusqu’à ce que leur eau soit évaporée et qu’ils soient dorés. Ajouter les échalotes et l’ail, cuire 2 min à feu moyen. Saler, poivrer.',
    'Verser la crème et laisser frémir 3 min à feu doux, jusqu’à ce qu’elle nappe la cuillère.',
    'Porter 3 L d’eau à ébullition, saler et y plonger les gnocchis. Les sortir à l’écumoire dès qu’ils remontent à la surface, au bout de 2 min environ.',
    'Les mélanger à la sauce 1 min à feu doux. Servir avec le parmesan râpé et le persil ciselé.'
  ]);

  R('gnocchis-gratines-epinards', 'Gnocchis gratinés aux épinards', 'Française', 'Plat', 35, 'Facile', 4, [
    ['gnocchis', 800, 'g'], ['epinards', 400, 'g'], ['creme-liquide', 25, 'cl'], ['ail', 1], ['beurre', 15, 'g'], ['fromage-rape', 100, 'g'],
    ['muscade', 1, 'pincee', 'opt'], ['jambon', 2, 'pc', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Préchauffer le four à 200 °C. Faire tomber les épinards lavés dans le beurre avec l’ail haché, 3 min à feu vif. Saler et égoutter en pressant.',
    'Porter 3 L d’eau à ébullition, saler et y plonger les gnocchis. Les sortir à l’écumoire dès qu’ils remontent à la surface, au bout de 2 min environ.',
    'Mélanger les gnocchis avec les épinards, la crème, la muscade, le jambon coupé en lanières et la moitié du fromage. Poivrer.',
    'Verser dans un plat à gratin et couvrir du reste de fromage.',
    'Gratiner 15 min au four à 200 °C, jusqu’à ce que le dessus soit doré et que la crème bouillonne sur les bords.'
  ]);

  /* ───────────── Nouilles ───────────── */

  R('nouilles-sautees-boeuf', 'Nouilles sautées au bœuf', 'Chinoise', 'Plat', 30, 'Facile', 4, [
    ['nouilles', 300, 'g'], ['boeuf-poeler', 400, 'g'], ['oignons', 1], ['poivrons', 1], ['carottes', 1], ['ail', 2],
    ['sauce-soja', 5, 'cs'], ['huile', 3, 'cs'], ['maizena', 5, 'g'], ['sauce-huitre', 2, 'cs', 'opt'], ['gingembre', 10, 'g', 'opt'],
    ['huile-sesame', 1, 'cc', 'opt'], ['ciboule', 0.5, 'pc', 'opt']
  ], [
    'Couper le bœuf en fines lanières, perpendiculairement aux fibres. Le mélanger avec 2 cuillères de sauce soja et la fécule, et laisser mariner 10 min.',
    NOUILLES,
    'Émincer l’oignon, couper le poivron et la carotte en fins bâtonnets, hacher l’ail et le gingembre.',
    'Faire chauffer 1 cuillère d’huile dans un wok à feu vif, jusqu’à ce qu’elle fume légèrement. Saisir le bœuf 1 min 30 en l’étalant, sans le remuer au début : il doit rester rosé. Réserver.',
    'Ajouter le reste d’huile et faire sauter les légumes avec l’ail et le gingembre, 3 min à feu vif : ils doivent rester croquants.',
    'Ajouter les nouilles, le reste de sauce soja et la sauce d’huître, sauter 2 min à feu vif. Remettre le bœuf, mélanger 30 s et finir avec l’huile de sésame et la ciboule émincée.'
  ]);

  R('nouilles-sautees-crevettes', 'Nouilles sautées aux crevettes', 'Chinoise', 'Plat', 25, 'Facile', 4, [
    ['nouilles', 300, 'g'], ['crevettes', 350, 'g'], ['carottes', 1], ['poivrons', 1], ['ail', 2], ['sauce-soja', 4, 'cs'], ['huile', 3, 'cs'],
    ['pois-gourmands', 150, 'g', 'opt'], ['germes-soja', 100, 'g', 'opt'], ['sauce-huitre', 1, 'cs', 'opt'], ['gingembre', 10, 'g', 'opt'],
    ['citron-vert', 1, 'pc', 'opt'], ['coriandre', 0.25, 'pc', 'opt']
  ], [
    NOUILLES,
    'Couper la carotte et le poivron en fins bâtonnets, hacher l’ail et le gingembre. Éponger les crevettes.',
    'Faire chauffer 1 cuillère d’huile dans un wok à feu vif et saisir les crevettes 2 min, jusqu’à ce qu’elles soient roses. Réserver.',
    'Ajouter le reste d’huile et faire sauter la carotte, le poivron et les pois gourmands avec l’ail et le gingembre, 3 min à feu vif.',
    'Ajouter les nouilles, les pousses de soja, la sauce soja et la sauce d’huître. Sauter 2 min à feu vif en mélangeant bien.',
    'Remettre les crevettes 30 s. Servir avec la coriandre et des quartiers de citron vert.'
  ]);

  R('yakisoba', 'Yakisoba', 'Japonaise', 'Plat', 25, 'Facile', 4, [
    ['nouilles', 300, 'g'], ['poitrine-de-porc', 250, 'g'], ['chou', 0.25], ['carottes', 1], ['oignons', 1], ['sauce-worcestershire', 3, 'cs'],
    ['sauce-soja', 2, 'cs'], ['ketchup', 1, 'cs'], ['sucre', 5, 'g'], ['huile', 2, 'cs'], ['sauce-huitre', 1, 'cs', 'opt'],
    ['germes-soja', 100, 'g', 'opt'], ['gingembre-marine', 20, 'g', 'opt'], ['ciboule', 0.5, 'pc', 'opt']
  ], [
    NOUILLES,
    'Mélanger la sauce Worcestershire, la sauce soja, le ketchup, la sauce d’huître et le sucre : c’est la sauce yakisoba.',
    'Couper la poitrine de porc en fines lamelles, le chou en lanières de 1 cm, la carotte en fins bâtonnets, et émincer l’oignon.',
    'Faire chauffer 1 cuillère d’huile dans un wok ou une grande poêle à feu vif. Faire dorer le porc 3 min. Ajouter l’oignon et la carotte, sauter 2 min, puis le chou et les pousses de soja, 2 min de plus : le chou doit rester croquant.',
    'Ajouter les nouilles, les démêler et les faire sauter 2 min à feu vif. Verser la sauce et mélanger 1 à 2 min à feu vif, jusqu’à ce qu’elle caramélise légèrement.',
    'Servir avec la ciboule émincée et le gingembre mariné.'
  ]);

  R('nouilles-sautees-porc-chou', 'Nouilles sautées au porc et au chou chinois', 'Chinoise', 'Plat', 25, 'Facile', 4, [
    ['nouilles', 300, 'g'], ['porc-hache', 300, 'g'], ['chou-chinois', 0.5], ['ail', 2], ['gingembre', 15, 'g'], ['sauce-soja', 4, 'cs'],
    ['huile', 3, 'cs'], ['sauce-huitre', 1, 'cs', 'opt'], ['vinaigre-riz', 1, 'cs', 'opt'], ['huile-sesame', 1, 'cc', 'opt'],
    ['ciboule', 0.5, 'pc', 'opt'], ['pate-de-piment', 1, 'cc', 'opt']
  ], [
    NOUILLES,
    'Émincer le chou chinois en lanières de 1 cm, en séparant les côtes blanches des feuilles. Hacher l’ail et le gingembre.',
    'Faire chauffer 2 cuillères d’huile dans un wok à feu vif. Saisir le porc 4 min en l’émiettant, jusqu’à ce qu’il soit bien doré. Ajouter l’ail, le gingembre et la pâte de piment, remuer 30 s.',
    'Ajouter les côtes du chou et sauter 2 min à feu vif, puis les feuilles, 1 min.',
    'Ajouter les nouilles, la sauce soja, la sauce d’huître et le vinaigre de riz. Sauter 2 min à feu vif en mélangeant.',
    'Finir avec l’huile de sésame et la ciboule émincée.'
  ]);

  R('nouilles-sautees-tofu', 'Nouilles sautées au tofu', 'Chinoise', 'Plat', 30, 'Facile', 4, [
    ['nouilles', 300, 'g'], ['tofu', 400, 'g'], ['brocoli', 0.5], ['carottes', 2], ['ail', 2], ['sauce-soja', 5, 'cs'], ['huile', 4, 'cs'],
    ['maizena', 15, 'g'], ['gingembre', 10, 'g', 'opt'], ['huile-sesame', 1, 'cs', 'opt'], ['graines-sesame', 1, 'cs', 'opt'],
    ['sriracha', 1, 'cc', 'opt']
  ], [
    'Presser le tofu 10 min entre deux feuilles de papier absorbant, sous un poids, puis le couper en cubes de 2 cm et les rouler dans la fécule.',
    NOUILLES,
    'Détailler le brocoli en petits bouquets, couper les carottes en fines rondelles, hacher l’ail et le gingembre.',
    'Faire chauffer 2 cuillères d’huile dans un wok à feu moyen-vif et faire dorer le tofu 6 min, en le retournant, jusqu’à ce qu’il soit croustillant sur toutes les faces. Réserver.',
    'Ajouter le reste d’huile et faire sauter le brocoli et les carottes 4 min à feu vif avec 3 cuillères à soupe d’eau. Ajouter l’ail et le gingembre, 30 s.',
    'Ajouter les nouilles, la sauce soja et la sriracha, sauter 2 min à feu vif. Remettre le tofu, arroser d’huile de sésame et parsemer de graines de sésame.'
  ]);

  R('yaki-udon', 'Udon sautés au poulet', 'Japonaise', 'Plat', 25, 'Facile', 4, [
    ['nouilles-udon', 800, 'g'], ['poulet', 350, 'g'], ['chou', 0.25], ['carottes', 1], ['oignons', 1], ['sauce-soja', 4, 'cs'],
    ['mirin', 2, 'cs'], ['huile', 2, 'cs'], ['shiitakes', 100, 'g', 'opt'], ['sauce-huitre', 1, 'cs', 'opt'], ['ciboule', 0.5, 'pc', 'opt'],
    ['graines-sesame', 1, 'cs', 'opt']
  ], [
    'Plonger les udon précuits 1 à 2 min dans une grande casserole d’eau bouillante pour les détacher, puis les égoutter (pour des udon secs, compter 300 g et 8 à 10 min de cuisson, selon le paquet).',
    'Couper le poulet en fines lanières, le chou en lanières, la carotte en bâtonnets. Émincer l’oignon et les shiitakés.',
    'Faire chauffer l’huile dans un wok à feu vif. Saisir le poulet 3 min, jusqu’à ce qu’il soit doré.',
    'Ajouter l’oignon, la carotte et les shiitakés, sauter 2 min à feu vif, puis le chou, 2 min de plus.',
    'Ajouter les udon, la sauce soja, le mirin et la sauce d’huître. Sauter 2 min à feu vif, jusqu’à ce que les nouilles soient enrobées et brillantes.',
    'Servir avec la ciboule émincée et les graines de sésame.'
  ]);

  R('nouilles-sauce-cacahuete', 'Nouilles à la sauce cacahuète', 'Chinoise', 'Plat', 20, 'Facile', 4, [
    ['nouilles', 300, 'g'], ['beurre-de-cacahuete', 4, 'cs'], ['sauce-soja', 3, 'cs'], ['vinaigre-riz', 1, 'cs'], ['huile-sesame', 1, 'cs'],
    ['ail', 1], ['concombre', 1], ['miel', 1, 'cc', 'opt'], ['carottes', 1, 'pc', 'opt'], ['cacahuetes', 40, 'g', 'opt'],
    ['coriandre', 0.25, 'pc', 'opt'], ['sriracha', 1, 'cc', 'opt']
  ], [
    'Cuire les nouilles 3 à 5 min dans une grande casserole d’eau bouillante (selon le paquet). Prélever une petite louche d’eau de cuisson, puis égoutter les nouilles et les rincer à l’eau froide.',
    'Dans un saladier, fouetter le beurre de cacahuète avec la sauce soja, le vinaigre de riz, l’huile de sésame, le miel, la sriracha et l’ail râpé. Détendre avec 4 à 6 cuillères à soupe d’eau de cuisson, jusqu’à obtenir une sauce lisse et coulante.',
    'Couper le concombre en fins bâtonnets et râper la carotte.',
    'Mélanger les nouilles avec la sauce jusqu’à ce qu’elles soient bien enrobées.',
    'Servir tiède ou froid, avec le concombre, la carotte, les cacahuètes concassées et la coriandre.'
  ]);
};
