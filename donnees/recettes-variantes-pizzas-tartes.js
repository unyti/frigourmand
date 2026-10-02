/* Variantes des grands classiques, ajoutées en 0.10 (même format que recettes.js). */
'use strict';

module.exports = function ajouter(R) {

  /* ───────────── Pizzas et flammekueches ───────────── */

  R('pizza-chorizo', 'Pizza au chorizo', 'Italienne', 'Plat', 30, 'Facile', 2, [
    ['pate-pizza', 1], ['coulis-tomate', 10, 'cl'], ['mozzarella', 125, 'g'], ['chorizo', 80, 'g'],
    ['poivrons', 0.5, 'pc', 'opt'], ['origan', 0.5, 'cc', 'opt'], ['huile-olive', 1, 'cs']
  ], [
    'Préchauffer le four à 250 °C (ou au maximum) avec la plaque à l’intérieur.',
    'Étaler la pâte sur une feuille de papier cuisson et la napper de coulis de tomate en laissant 1 cm de bord. Parsemer d’origan.',
    'Répartir la mozzarella égouttée et coupée en morceaux, le poivron en fines lanières, puis le chorizo en rondelles fines. Arroser d’huile d’olive.',
    'Glisser la pizza sur la plaque chaude et cuire 10 à 12 min, jusqu’à ce que les bords soient dorés et que le chorizo commence à griller.'
  ]);

  R('pizza-quatre-fromages', 'Pizza quatre fromages', 'Italienne', 'Plat', 30, 'Facile', 2, [
    ['pate-pizza', 1], ['coulis-tomate', 10, 'cl'], ['mozzarella', 125, 'g'], ['gorgonzola', 60, 'g'], ['chevre', 60, 'g'],
    ['parmesan', 30, 'g'], ['origan', 0.5, 'cc', 'opt'], ['poivre', null]
  ], [
    'Préchauffer le four à 250 °C (ou au maximum) avec la plaque à l’intérieur.',
    'Étaler la pâte sur une feuille de papier cuisson et la napper de coulis de tomate en laissant 1 cm de bord.',
    'Répartir la mozzarella égouttée en morceaux, le gorgonzola en petits dés et le chèvre en rondelles. Saupoudrer de parmesan râpé et d’origan, poivrer.',
    'Glisser sur la plaque chaude et cuire 10 à 12 min, jusqu’à ce que les fromages bouillonnent et que les bords soient dorés.'
  ]);

  R('pizza-calzone', 'Calzone jambon et champignons', 'Italienne', 'Plat', 40, 'Moyenne', 2, [
    ['pate-pizza', 1], ['coulis-tomate', 8, 'cl'], ['mozzarella', 125, 'g'], ['jambon', 2], ['champignons', 100, 'g'],
    ['oeufs', 1, 'pc', 'opt'], ['origan', 0.5, 'cc', 'opt'], ['huile-olive', 2, 'cs'], ['sel', null], ['poivre', null]
  ], [
    'Préchauffer le four à 220 °C. Émincer les champignons et les faire sauter 5 min à feu vif dans 1 cs d’huile, jusqu’à ce que leur eau soit évaporée. Saler et poivrer.',
    'Étaler la pâte sur une feuille de papier cuisson. Napper une moitié de coulis de tomate en laissant 2 cm de bord.',
    'Garnir cette moitié de mozzarella égouttée en dés, de jambon en lanières et de champignons. Parsemer d’origan et casser l’œuf au centre.',
    'Humecter le bord avec un peu d’eau, rabattre l’autre moitié de pâte et souder en pinçant puis en roulant le bord sur lui-même.',
    'Badigeonner du reste d’huile, percer le dessus d’un coup de couteau et cuire 15 à 18 min sur la plaque, jusqu’à ce que le chausson soit gonflé et bien doré.'
  ]);

  R('pizza-chevre-miel', 'Pizza chèvre et miel', 'Italienne', 'Plat', 30, 'Facile', 2, [
    ['pate-pizza', 1], ['creme-fraiche', 8, 'cl'], ['mozzarella', 125, 'g'], ['chevre', 120, 'g'], ['miel', 1, 'cs'],
    ['cerneaux-de-noix', 20, 'g', 'opt'], ['roquette', 30, 'g', 'opt'], ['poivre', null]
  ], [
    'Préchauffer le four à 250 °C (ou au maximum) avec la plaque à l’intérieur.',
    'Étaler la pâte sur une feuille de papier cuisson et la napper de crème en laissant 1 cm de bord. Poivrer.',
    'Répartir la mozzarella égouttée en morceaux et le chèvre en rondelles. Parsemer de noix concassées.',
    'Glisser sur la plaque chaude et cuire 10 à 12 min, jusqu’à ce que le chèvre soit doré.',
    'À la sortie du four, arroser d’un filet de miel et couvrir de roquette.'
  ]);

  R('pizza-savoyarde', 'Pizza savoyarde à la raclette', 'Italienne', 'Plat', 50, 'Facile', 2, [
    ['pate-pizza', 1], ['creme-fraiche', 8, 'cl'], ['pommes-de-terre', 250, 'g'], ['fromage-a-raclette', 150, 'g'],
    ['lardons', 100, 'g'], ['oignons', 1], ['sel', null], ['poivre', null]
  ], [
    'Cuire les pommes de terre entières, avec leur peau, 20 min à l’eau bouillante salée : la pointe d’un couteau doit s’enfoncer facilement. Les peler et les couper en rondelles fines.',
    'Préchauffer le four à 250 °C (ou au maximum). Faire revenir les lardons et l’oignon émincé 5 min à feu moyen, sans matière grasse, jusqu’à ce que l’oignon soit translucide.',
    'Étaler la pâte sur une plaque couverte de papier cuisson, la napper de crème et poivrer.',
    'Répartir les rondelles de pommes de terre, les lardons et l’oignon, puis couvrir de tranches de fromage à raclette sans la croûte.',
    'Cuire 10 à 12 min, jusqu’à ce que le fromage soit fondu et doré par endroits.'
  ]);

  R('pizza-saumon-creme', 'Pizza au saumon fumé et à la crème', 'Italienne', 'Plat', 30, 'Facile', 2, [
    ['pate-pizza', 1], ['creme-fraiche', 10, 'cl'], ['mozzarella', 125, 'g'], ['saumon-fume', 4], ['aneth', 0.25, 'pc', 'opt'],
    ['citron', 0.5, 'pc', 'opt'], ['poivre', null]
  ], [
    'Préchauffer le four à 250 °C (ou au maximum) avec la plaque à l’intérieur.',
    'Étaler la pâte sur une feuille de papier cuisson, la napper de crème en laissant 1 cm de bord et poivrer.',
    'Répartir la mozzarella égouttée en morceaux. Glisser sur la plaque chaude et cuire 10 à 12 min, jusqu’à ce que les bords soient dorés.',
    'À la sortie du four, déposer le saumon fumé en lanières (il ne doit pas cuire), parsemer d’aneth ciselé et arroser de quelques gouttes de jus de citron.'
  ]);

  R('pizza-vegetarienne', 'Pizza végétarienne aux légumes', 'Italienne', 'Plat', 40, 'Facile', 2, [
    ['pate-pizza', 1], ['coulis-tomate', 10, 'cl'], ['mozzarella', 125, 'g'], ['courgettes', 0.5], ['poivrons', 0.5],
    ['champignons', 80, 'g'], ['oignon-rouge', 0.5, 'pc', 'opt'], ['olives', 30, 'g', 'opt'], ['origan', 0.5, 'cc', 'opt'],
    ['huile-olive', 2, 'cs'], ['sel', null], ['poivre', null]
  ], [
    'Préchauffer le four à 250 °C (ou au maximum) avec la plaque à l’intérieur.',
    'Couper la courgette en fines rondelles et le poivron en lanières. Les faire sauter 5 min à feu vif dans 1 cs d’huile, pour qu’ils perdent leur eau sans compoter. Saler et poivrer.',
    'Étaler la pâte sur une feuille de papier cuisson, la napper de coulis de tomate et parsemer d’origan.',
    'Répartir la mozzarella égouttée en morceaux, les légumes sautés, les champignons crus en fines lamelles, l’oignon rouge émincé et les olives. Arroser du reste d’huile.',
    'Glisser sur la plaque chaude et cuire 10 à 12 min, jusqu’à ce que les bords soient dorés.'
  ]);

  R('pizza-jambon-cru-roquette', 'Pizza jambon cru, roquette et parmesan', 'Italienne', 'Plat', 30, 'Facile', 2, [
    ['pate-pizza', 1], ['coulis-tomate', 10, 'cl'], ['mozzarella', 125, 'g'], ['jambon-cru', 4], ['roquette', 40, 'g'],
    ['parmesan', 30, 'g'], ['tomates-cerises', 100, 'g', 'opt'], ['huile-olive', 1, 'cs'], ['poivre', null]
  ], [
    'Préchauffer le four à 250 °C (ou au maximum) avec la plaque à l’intérieur.',
    'Étaler la pâte sur une feuille de papier cuisson, la napper de coulis de tomate et répartir la mozzarella égouttée en morceaux et les tomates cerises coupées en deux.',
    'Glisser sur la plaque chaude et cuire 10 à 12 min, jusqu’à ce que les bords soient dorés.',
    'À la sortie du four, déposer les tranches de jambon cru, la roquette et le parmesan en copeaux. Arroser d’huile d’olive et poivrer.'
  ]);

  R('pizza-orientale', 'Pizza orientale aux merguez', 'Italienne', 'Plat', 35, 'Facile', 2, [
    ['pate-pizza', 1], ['coulis-tomate', 10, 'cl'], ['mozzarella', 125, 'g'], ['merguez', 3], ['poivrons', 0.5],
    ['oignons', 0.5], ['oeufs', 1, 'pc', 'opt'], ['olives', 30, 'g', 'opt'], ['harissa', 0.5, 'cc', 'opt'], ['cumin', 0.5, 'cc', 'opt']
  ], [
    'Préchauffer le four à 250 °C (ou au maximum) avec la plaque à l’intérieur.',
    'Faire dorer les merguez 5 min à feu moyen dans une poêle, sans matière grasse : elles finiront de cuire au four. Les couper en rondelles épaisses.',
    'Mélanger le coulis de tomate avec la harissa et le cumin. Étaler la pâte sur une feuille de papier cuisson et la napper de coulis.',
    'Répartir la mozzarella égouttée en morceaux, le poivron en fines lanières, l’oignon émincé, les merguez et les olives.',
    'Glisser sur la plaque chaude et cuire 5 min. Casser l’œuf au centre et poursuivre la cuisson 6 à 7 min : le blanc doit être pris et les bords dorés.'
  ]);

  R('pizza-hawaienne', 'Pizza hawaïenne jambon ananas', 'Italienne', 'Plat', 30, 'Facile', 2, [
    ['pate-pizza', 1], ['coulis-tomate', 10, 'cl'], ['mozzarella', 125, 'g'], ['jambon', 2], ['ananas', 0.15],
    ['origan', 0.5, 'cc', 'opt']
  ], [
    'Préchauffer le four à 250 °C (ou au maximum) avec la plaque à l’intérieur.',
    'Peler l’ananas, retirer le cœur dur et couper la chair en petits morceaux. Les éponger avec du papier absorbant pour ne pas détremper la pâte.',
    'Étaler la pâte sur une feuille de papier cuisson, la napper de coulis de tomate et parsemer d’origan.',
    'Répartir la mozzarella égouttée en morceaux, le jambon en lanières et l’ananas.',
    'Glisser sur la plaque chaude et cuire 10 à 12 min, jusqu’à ce que les bords soient dorés et que l’ananas commence à caraméliser.'
  ]);

  R('pizza-bolognaise', 'Pizza bolognaise au bœuf haché', 'Italienne', 'Plat', 40, 'Facile', 2, [
    ['pate-pizza', 1], ['boeuf-hache', 200, 'g'], ['coulis-tomate', 15, 'cl'], ['oignons', 0.5], ['mozzarella', 125, 'g'],
    ['ail', 1, 'pc', 'opt'], ['origan', 0.5, 'cc', 'opt'], ['huile-olive', 1, 'cs'], ['sel', null], ['poivre', null]
  ], [
    'Préchauffer le four à 250 °C (ou au maximum) avec la plaque à l’intérieur.',
    'Faire revenir l’oignon et l’ail hachés 3 min à feu moyen dans l’huile. Ajouter le bœuf et le faire dorer 5 min à feu vif en l’émiettant.',
    'Verser le coulis de tomate, ajouter l’origan, saler, poivrer et laisser réduire 5 min à feu moyen : la sauce doit être épaisse.',
    'Étaler la pâte sur une feuille de papier cuisson, la couvrir de sauce bolognaise en laissant 1 cm de bord, puis de mozzarella égouttée en morceaux.',
    'Glisser sur la plaque chaude et cuire 10 à 12 min, jusqu’à ce que le fromage soit fondu et les bords dorés.'
  ]);

  R('pizza-poulet-barbecue', 'Pizza poulet barbecue', 'Italienne', 'Plat', 35, 'Facile', 2, [
    ['pate-pizza', 1], ['sauce-barbecue', 4, 'cs'], ['poulet', 200, 'g'], ['mozzarella', 125, 'g'], ['oignon-rouge', 0.5],
    ['mais-doux', 50, 'g', 'opt'], ['huile', 1, 'cs'], ['sel', null], ['poivre', null]
  ], [
    'Préchauffer le four à 250 °C (ou au maximum) avec la plaque à l’intérieur.',
    'Couper le poulet en petits dés et les faire dorer 5 min à feu vif dans l’huile. Saler, poivrer et les enrober d’1 cs de sauce barbecue.',
    'Étaler la pâte sur une feuille de papier cuisson et la napper du reste de sauce barbecue en laissant 1 cm de bord.',
    'Répartir la mozzarella égouttée en morceaux, le poulet, l’oignon rouge en fines lamelles et le maïs égoutté.',
    'Glisser sur la plaque chaude et cuire 10 à 12 min, jusqu’à ce que les bords soient dorés.'
  ]);

  R('pizza-napolitaine', 'Pizza napolitaine anchois et câpres', 'Italienne', 'Plat', 30, 'Facile', 2, [
    ['pate-pizza', 1], ['coulis-tomate', 12, 'cl'], ['mozzarella', 125, 'g'], ['anchois', 30, 'g'], ['capres', 1, 'cs'],
    ['olives', 40, 'g'], ['origan', 0.5, 'cc'], ['huile-olive', 1, 'cs']
  ], [
    'Préchauffer le four à 250 °C (ou au maximum) avec la plaque à l’intérieur.',
    'Étaler la pâte sur une feuille de papier cuisson et la napper de coulis de tomate, sans le saler : les anchois et les câpres s’en chargent.',
    'Répartir la mozzarella égouttée en morceaux, les filets d’anchois, les câpres égouttées et les olives. Parsemer d’origan et arroser d’huile d’olive.',
    'Glisser sur la plaque chaude et cuire 10 à 12 min, jusqu’à ce que les bords soient dorés.'
  ]);

  R('pizza-champignons', 'Pizza aux champignons', 'Italienne', 'Plat', 35, 'Facile', 2, [
    ['pate-pizza', 1], ['coulis-tomate', 10, 'cl'], ['mozzarella', 125, 'g'], ['champignons', 250, 'g'], ['ail', 1],
    ['persil', 0.25, 'pc', 'opt'], ['huile-olive', 2, 'cs'], ['sel', null], ['poivre', null]
  ], [
    'Préchauffer le four à 250 °C (ou au maximum) avec la plaque à l’intérieur.',
    'Émincer les champignons et les faire sauter 5 à 6 min à feu vif dans l’huile, jusqu’à ce que leur eau soit évaporée et qu’ils soient dorés. Ajouter l’ail haché, saler et poivrer.',
    'Étaler la pâte sur une feuille de papier cuisson, la napper de coulis de tomate, puis répartir la mozzarella égouttée en morceaux et les champignons.',
    'Glisser sur la plaque chaude et cuire 10 à 12 min, jusqu’à ce que les bords soient dorés. Parsemer de persil ciselé.'
  ]);

  R('pizza-quatre-saisons', 'Pizza quatre saisons', 'Italienne', 'Plat', 30, 'Facile', 2, [
    ['pate-pizza', 1], ['coulis-tomate', 10, 'cl'], ['mozzarella', 125, 'g'], ['jambon', 2], ['champignons', 80, 'g'],
    ['coeurs-d-artichaut', 80, 'g'], ['olives', 40, 'g'], ['origan', 0.5, 'cc', 'opt'], ['huile-olive', 1, 'cs']
  ], [
    'Préchauffer le four à 250 °C (ou au maximum) avec la plaque à l’intérieur.',
    'Étaler la pâte sur une feuille de papier cuisson, la napper de coulis de tomate et répartir la mozzarella égouttée en morceaux.',
    'Garnir chaque quart d’un ingrédient : le jambon en lanières, les champignons en fines lamelles, les cœurs d’artichaut égouttés coupés en quatre et les olives.',
    'Parsemer d’origan, arroser d’huile d’olive, glisser sur la plaque chaude et cuire 10 à 12 min, jusqu’à ce que les bords soient dorés.'
  ]);

  R('pizza-carbonara', 'Pizza carbonara', 'Italienne', 'Plat', 30, 'Facile', 2, [
    ['pate-pizza', 1], ['creme-fraiche', 10, 'cl'], ['mozzarella', 125, 'g'], ['lardons', 100, 'g'], ['oignons', 0.5],
    ['oeufs', 1], ['parmesan', 30, 'g'], ['poivre', null]
  ], [
    'Préchauffer le four à 250 °C (ou au maximum) avec la plaque à l’intérieur.',
    'Étaler la pâte sur une feuille de papier cuisson, la napper de crème en laissant 1 cm de bord et poivrer généreusement.',
    'Répartir la mozzarella égouttée en morceaux, l’oignon en fines lamelles et les lardons crus.',
    'Glisser sur la plaque chaude et cuire 5 min. Casser l’œuf au centre et poursuivre la cuisson 6 à 7 min : le blanc doit être pris et le jaune encore coulant.',
    'Saupoudrer de parmesan râpé à la sortie du four.'
  ]);

  R('pizza-fruits-de-mer', 'Pizza aux fruits de mer', 'Italienne', 'Plat', 35, 'Facile', 2, [
    ['pate-pizza', 1], ['coulis-tomate', 10, 'cl'], ['mozzarella', 125, 'g'], ['cocktail-de-fruits-de-mer', 200, 'g'],
    ['ail', 1], ['persil', 0.25, 'pc', 'opt'], ['huile-olive', 2, 'cs'], ['poivre', null]
  ], [
    'Préchauffer le four à 250 °C (ou au maximum) avec la plaque à l’intérieur.',
    'Faire sauter les fruits de mer (décongelés) 3 min à feu vif dans 1 cs d’huile avec l’ail haché, puis les égoutter soigneusement : ils rendent beaucoup d’eau.',
    'Étaler la pâte sur une feuille de papier cuisson, la napper de coulis de tomate et répartir la mozzarella égouttée en morceaux, puis les fruits de mer.',
    'Arroser du reste d’huile, poivrer, glisser sur la plaque chaude et cuire 10 min, jusqu’à ce que les bords soient dorés. Parsemer de persil ciselé.'
  ]);

  R('pizza-poulet-curry', 'Pizza indienne au poulet et au curry', 'Italienne', 'Plat', 35, 'Facile', 2, [
    ['pate-pizza', 1], ['creme-fraiche', 10, 'cl'], ['curry', 1, 'cc'], ['poulet', 200, 'g'], ['mozzarella', 125, 'g'],
    ['oignons', 0.5], ['poivrons', 0.5, 'pc', 'opt'], ['coriandre', 0.25, 'pc', 'opt'], ['huile', 1, 'cs'], ['sel', null], ['poivre', null]
  ], [
    'Préchauffer le four à 250 °C (ou au maximum) avec la plaque à l’intérieur.',
    'Couper le poulet en petits dés et les faire dorer 5 min à feu vif dans l’huile avec la moitié du curry. Saler et poivrer.',
    'Mélanger la crème avec le reste du curry et une pincée de sel. Étaler la pâte sur une feuille de papier cuisson et la napper de cette crème.',
    'Répartir la mozzarella égouttée en morceaux, le poulet, l’oignon émincé et le poivron en fines lanières.',
    'Glisser sur la plaque chaude et cuire 10 à 12 min, jusqu’à ce que les bords soient dorés. Parsemer de coriandre ciselée.'
  ]);

  R('pizza-pesto-tomates-cerises', 'Pizza au pesto et aux tomates cerises', 'Italienne', 'Plat', 30, 'Facile', 2, [
    ['pate-pizza', 1], ['pesto', 60, 'g'], ['mozzarella', 125, 'g'], ['tomates-cerises', 150, 'g'], ['pignons', 15, 'g', 'opt'],
    ['parmesan', 20, 'g', 'opt'], ['basilic', 0.25, 'pc', 'opt']
  ], [
    'Préchauffer le four à 250 °C (ou au maximum) avec la plaque à l’intérieur.',
    'Étaler la pâte sur une feuille de papier cuisson et la tartiner de pesto en laissant 1 cm de bord.',
    'Répartir la mozzarella égouttée en morceaux, les tomates cerises coupées en deux, face coupée vers le haut, et les pignons.',
    'Glisser sur la plaque chaude et cuire 10 à 12 min, jusqu’à ce que les bords soient dorés. Ajouter le parmesan en copeaux et le basilic frais.'
  ]);

  R('pizza-bianca-pommes-de-terre', 'Pizza bianca aux pommes de terre et au romarin', 'Italienne', 'Plat', 35, 'Facile', 2, [
    ['pate-pizza', 1], ['pommes-de-terre', 250, 'g'], ['mozzarella', 125, 'g'], ['creme-fraiche', 6, 'cl'],
    ['romarin-frais', 1, 'pc', 'opt'], ['parmesan', 20, 'g', 'opt'], ['huile-olive', 2, 'cs'], ['sel', null], ['poivre', null]
  ], [
    'Préchauffer le four à 240 °C avec la plaque à l’intérieur.',
    'Éplucher les pommes de terre et les couper en rondelles très fines (1 à 2 mm), à la mandoline si possible. Les mélanger avec l’huile, le romarin effeuillé, du sel et du poivre.',
    'Étaler la pâte sur une feuille de papier cuisson, la napper de crème et répartir la mozzarella égouttée en morceaux.',
    'Disposer les rondelles de pommes de terre en une seule couche, en les faisant à peine se chevaucher. Saupoudrer de parmesan râpé.',
    'Glisser sur la plaque chaude et cuire 15 min, jusqu’à ce que les pommes de terre soient tendres et dorées sur les bords.'
  ]);

  R('pizza-kebab', 'Pizza kebab au poulet', 'Italienne', 'Plat', 35, 'Facile', 2, [
    ['pate-pizza', 1], ['coulis-tomate', 10, 'cl'], ['mozzarella', 125, 'g'], ['poulet', 200, 'g'], ['oignons', 0.5],
    ['sauce-blanche', 3, 'cs'], ['cumin', 0.5, 'cc'], ['paprika', 0.5, 'cc'], ['tomates', 1, 'pc', 'opt'], ['salade', 0.25, 'pc', 'opt'],
    ['huile', 1, 'cs'], ['sel', null], ['poivre', null]
  ], [
    'Préchauffer le four à 250 °C (ou au maximum) avec la plaque à l’intérieur.',
    'Couper le poulet en fines lamelles, les enrober de cumin, de paprika, de sel et de poivre, et les faire dorer 5 min à feu vif dans l’huile.',
    'Étaler la pâte sur une feuille de papier cuisson, la napper de coulis de tomate, puis répartir la mozzarella égouttée en morceaux, le poulet et l’oignon en fines lamelles.',
    'Glisser sur la plaque chaude et cuire 10 à 12 min, jusqu’à ce que les bords soient dorés.',
    'À la sortie du four, ajouter la tomate en petits dés et la salade émincée, puis zébrer de sauce blanche.'
  ]);

  R('pizza-tartiflette', 'Pizza tartiflette au reblochon', 'Italienne', 'Plat', 50, 'Facile', 2, [
    ['pate-pizza', 1], ['creme-fraiche', 8, 'cl'], ['pommes-de-terre', 250, 'g'], ['reblochon', 0.5], ['lardons', 100, 'g'],
    ['oignons', 1], ['poivre', null]
  ], [
    'Cuire les pommes de terre entières, avec leur peau, 20 min à l’eau bouillante salée : la pointe d’un couteau doit s’enfoncer facilement. Les peler et les couper en rondelles.',
    'Préchauffer le four à 250 °C (ou au maximum). Faire revenir les lardons et l’oignon émincé 5 min à feu moyen, sans matière grasse, jusqu’à ce que l’oignon soit fondant.',
    'Étaler la pâte sur une plaque couverte de papier cuisson, la napper de crème et poivrer.',
    'Répartir les pommes de terre, les lardons et l’oignon, puis le reblochon coupé en lamelles avec sa croûte.',
    'Cuire 10 à 12 min, jusqu’à ce que le reblochon soit fondu et gratiné.'
  ]);

  R('pizza-burrata', 'Pizza à la burrata', 'Italienne', 'Plat', 30, 'Facile', 2, [
    ['pate-pizza', 1], ['coulis-tomate', 12, 'cl'], ['burrata', 1], ['tomates-cerises', 150, 'g'], ['basilic', 0.25],
    ['roquette', 30, 'g', 'opt'], ['origan', 0.5, 'cc', 'opt'], ['huile-olive', 2, 'cs'], ['sel', null], ['poivre', null]
  ], [
    'Préchauffer le four à 250 °C (ou au maximum) avec la plaque à l’intérieur. Sortir la burrata du réfrigérateur pour qu’elle soit à température ambiante.',
    'Étaler la pâte sur une feuille de papier cuisson, la napper de coulis de tomate salé, parsemer d’origan et répartir les tomates cerises coupées en deux. Arroser d’1 cs d’huile.',
    'Glisser sur la plaque chaude et cuire 10 à 12 min, jusqu’à ce que les bords soient dorés.',
    'À la sortie du four, poser la burrata égouttée au centre et l’ouvrir en deux. Ajouter la roquette et le basilic, arroser du reste d’huile et poivrer.'
  ]);

  R('flammekueche-gratinee', 'Flammekueche gratinée', 'Française', 'Plat', 30, 'Facile', 4, [
    ['pate-pizza', 1], ['creme-fraiche', 20, 'cl'], ['fromage-blanc', 100, 'g', 'opt'], ['lardons', 200, 'g'], ['oignons', 2],
    ['emmental', 100, 'g'], ['muscade', 1, 'pincee', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Préchauffer le four à 250 °C. Étaler la pâte très finement sur une plaque couverte de papier cuisson.',
    'Mélanger la crème et le fromage blanc, assaisonner de sel, de poivre et de muscade, et étaler sur la pâte jusqu’aux bords.',
    'Parsemer d’oignons en fines lamelles et de lardons crus, puis d’emmental râpé.',
    'Cuire 10 à 12 min, jusqu’à ce que le fromage soit gratiné et les bords bien dorés.'
  ]);

  R('flammekueche-munster', 'Flammekueche au munster', 'Française', 'Plat', 30, 'Facile', 4, [
    ['pate-pizza', 1], ['creme-fraiche', 20, 'cl'], ['fromage-blanc', 100, 'g', 'opt'], ['lardons', 150, 'g'], ['oignons', 2],
    ['munster', 150, 'g'], ['cumin', 0.5, 'cc', 'opt'], ['poivre', null]
  ], [
    'Préchauffer le four à 250 °C. Étaler la pâte très finement sur une plaque couverte de papier cuisson.',
    'Mélanger la crème et le fromage blanc, poivrer (inutile de saler, le munster et les lardons le sont assez) et étaler sur la pâte jusqu’aux bords.',
    'Parsemer d’oignons en fines lamelles et de lardons crus, puis répartir le munster en fines tranches. Saupoudrer de cumin.',
    'Cuire 10 à 12 min, jusqu’à ce que le munster soit fondu et les bords bien dorés.'
  ]);

  R('flammekueche-forestiere', 'Flammekueche forestière aux champignons', 'Française', 'Plat', 35, 'Facile', 4, [
    ['pate-pizza', 1], ['creme-fraiche', 20, 'cl'], ['fromage-blanc', 100, 'g', 'opt'], ['champignons', 250, 'g'], ['lardons', 150, 'g'],
    ['oignons', 2], ['persil', 0.25, 'pc', 'opt'], ['muscade', 1, 'pincee', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Préchauffer le four à 250 °C. Faire revenir les lardons 2 min à feu vif, ajouter les champignons émincés et les faire sauter 5 min, jusqu’à ce que leur eau soit évaporée.',
    'Étaler la pâte très finement sur une plaque couverte de papier cuisson.',
    'Mélanger la crème et le fromage blanc, assaisonner de sel, de poivre et de muscade, et étaler sur la pâte jusqu’aux bords.',
    'Parsemer d’oignons en fines lamelles, de champignons et de lardons.',
    'Cuire 10 à 12 min, jusqu’à ce que les bords soient bien dorés. Parsemer de persil ciselé.'
  ]);

  /* ───────────── Quiches et tartes salées ───────────── */

  R('tarte-thon-tomate-moutarde', 'Tarte au thon, à la tomate et à la moutarde', 'Française', 'Plat', 55, 'Facile', 6, [
    ['pate-brisee', 1], ['thon-boite', 280, 'g'], ['tomates', 3], ['moutarde', 2, 'cs'], ['oeufs', 3], ['creme-fraiche', 20, 'cl'],
    ['fromage-rape', 70, 'g', 'opt'], ['herbes-provence', 1, 'cc', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Préchauffer le four à 200 °C. Foncer un moule à tarte de 26 à 28 cm avec la pâte, la piquer à la fourchette et tartiner le fond de moutarde.',
    'Égoutter soigneusement le thon, l’émietter et le répartir sur la moutarde.',
    'Battre les œufs avec la crème, saler légèrement, poivrer et verser sur le thon.',
    'Couvrir de tomates coupées en rondelles, parsemer de fromage et d’herbes de Provence.',
    'Cuire 35 à 40 min, jusqu’à ce que l’appareil soit pris et le dessus doré. Servir tiède ou froid.'
  ]);

  R('quiche-chevre-epinards', 'Quiche chèvre et épinards', 'Française', 'Plat', 60, 'Facile', 6, [
    ['pate-brisee', 1], ['epinards', 500, 'g'], ['chevre', 150, 'g'], ['oeufs', 3], ['creme-fraiche', 20, 'cl'], ['lait', 10, 'cl'],
    ['ail', 1, 'pc', 'opt'], ['beurre', 15, 'g'], ['muscade', 1, 'pincee', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Préchauffer le four à 180 °C. Foncer un moule à tarte avec la pâte et la piquer à la fourchette.',
    'Laver et équeuter les épinards. Les faire tomber 5 min à feu moyen dans le beurre avec l’ail haché, puis les presser fortement dans une passoire pour en extraire toute l’eau. Les hacher grossièrement.',
    'Battre les œufs avec la crème et le lait. Saler, poivrer et ajouter la muscade.',
    'Répartir les épinards sur la pâte, verser l’appareil et disposer le chèvre en rondelles sur le dessus.',
    'Cuire 35 à 40 min, jusqu’à ce que le centre soit pris et le chèvre doré.'
  ]);

  R('tarte-courgette-feta', 'Tarte courgettes et feta', 'Française', 'Plat', 60, 'Facile', 6, [
    ['pate-brisee', 1], ['courgettes', 3], ['feta', 150, 'g'], ['oeufs', 3], ['creme-fraiche', 20, 'cl'],
    ['menthe', 0.25, 'pc', 'opt'], ['huile-olive', 1, 'cs'], ['sel', null], ['poivre', null]
  ], [
    'Préchauffer le four à 180 °C. Foncer un moule à tarte avec la pâte et la piquer à la fourchette.',
    'Couper les courgettes en fines rondelles et les faire sauter 8 min à feu vif dans l’huile, jusqu’à ce qu’elles soient dorées et que leur eau soit évaporée. Saler très peu.',
    'Battre les œufs avec la crème, poivrer et ajouter la menthe ciselée. Ne pas saler : la feta l’est suffisamment.',
    'Répartir les courgettes et la feta émiettée sur la pâte, puis verser l’appareil.',
    'Cuire 35 à 40 min, jusqu’à ce que le dessus soit doré et le centre pris.'
  ]);

  R('tarte-oignon', 'Tarte à l’oignon', 'Française', 'Plat', 75, 'Facile', 6, [
    ['pate-brisee', 1], ['oignons', 6], ['beurre', 40, 'g'], ['oeufs', 3], ['creme-fraiche', 20, 'cl'], ['lait', 10, 'cl'],
    ['lardons', 100, 'g', 'opt'], ['muscade', 1, 'pincee', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Émincer finement les oignons et les faire fondre 25 min à feu doux dans le beurre, à couvert, en remuant de temps en temps : ils doivent être très tendres et à peine blonds. Saler.',
    'Préchauffer le four à 180 °C. Foncer un moule à tarte avec la pâte et la piquer à la fourchette.',
    'Battre les œufs avec la crème et le lait, poivrer et ajouter la muscade.',
    'Étaler les oignons sur la pâte, parsemer de lardons crus et verser l’appareil.',
    'Cuire 35 à 40 min, jusqu’à ce que le dessus soit bien doré et le centre pris.'
  ]);

  R('quiche-saumon-poireaux', 'Quiche saumon et poireaux', 'Française', 'Plat', 65, 'Facile', 6, [
    ['pate-brisee', 1], ['saumon', 2], ['poireaux', 2], ['oeufs', 3], ['creme-fraiche', 20, 'cl'], ['lait', 10, 'cl'],
    ['beurre', 20, 'g'], ['aneth', 0.25, 'pc', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Préchauffer le four à 180 °C. Foncer un moule à tarte avec la pâte et la piquer à la fourchette.',
    'Émincer finement les poireaux et les faire fondre 15 min à feu doux dans le beurre, avec une pincée de sel, sans les colorer.',
    'Retirer la peau et les arêtes du saumon et le couper en dés de 2 cm, sans le cuire.',
    'Battre les œufs avec la crème et le lait, saler, poivrer et ajouter l’aneth ciselé.',
    'Répartir les poireaux puis le saumon sur la pâte et verser l’appareil.',
    'Cuire 35 à 40 min, jusqu’à ce que le dessus soit doré et le centre pris.'
  ]);

  R('quiche-champignons', 'Quiche aux champignons', 'Française', 'Plat', 60, 'Facile', 6, [
    ['pate-brisee', 1], ['champignons', 500, 'g'], ['echalotes', 2], ['oeufs', 3], ['creme-fraiche', 20, 'cl'], ['lait', 10, 'cl'],
    ['fromage-rape', 70, 'g'], ['beurre', 20, 'g'], ['persil', 0.25, 'pc', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Préchauffer le four à 180 °C. Foncer un moule à tarte avec la pâte et la piquer à la fourchette.',
    'Émincer les champignons et les faire sauter 8 min à feu vif dans le beurre, jusqu’à ce que leur eau soit évaporée et qu’ils soient dorés. Ajouter les échalotes ciselées, cuire encore 2 min, saler et poivrer.',
    'Battre les œufs avec la crème et le lait, saler, poivrer et ajouter le persil ciselé.',
    'Répartir les champignons sur la pâte, verser l’appareil et parsemer de fromage.',
    'Cuire 35 à 40 min, jusqu’à ce que le dessus soit doré et le centre pris.'
  ]);

  R('quiche-brocoli-bleu', 'Quiche brocoli et bleu', 'Française', 'Plat', 60, 'Facile', 6, [
    ['pate-brisee', 1], ['brocoli', 1], ['bleu-d-auvergne', 120, 'g'], ['oeufs', 3], ['creme-fraiche', 20, 'cl'], ['lait', 10, 'cl'],
    ['cerneaux-de-noix', 30, 'g', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Préchauffer le four à 180 °C. Foncer un moule à tarte avec la pâte et la piquer à la fourchette.',
    'Détailler le brocoli en petites fleurettes et les cuire 4 min à l’eau bouillante salée : elles doivent rester fermes. Les rafraîchir à l’eau froide et bien les égoutter.',
    'Battre les œufs avec la crème et le lait. Poivrer et saler très peu, le bleu étant salé.',
    'Répartir le brocoli, le bleu émietté et les noix concassées sur la pâte, puis verser l’appareil.',
    'Cuire 35 à 40 min, jusqu’à ce que le dessus soit doré et le centre pris.'
  ]);

  R('tarte-fine-courgettes-chevre-miel', 'Tarte fine courgettes, chèvre et miel', 'Française', 'Plat', 40, 'Facile', 4, [
    ['pate-feuilletee', 1], ['courgettes', 2], ['chevre', 150, 'g'], ['miel', 1, 'cs'], ['moutarde', 1, 'cs', 'opt'],
    ['thym', 2, 'pc', 'opt'], ['huile-olive', 1, 'cs'], ['sel', null], ['poivre', null]
  ], [
    'Préchauffer le four à 200 °C. Dérouler la pâte sur une plaque couverte de papier cuisson, la piquer à la fourchette en épargnant 1 cm de bord et la tartiner de moutarde.',
    'Couper les courgettes en rondelles très fines (2 mm) et les disposer en rosace, en les faisant se chevaucher. Saler, poivrer et badigeonner d’huile.',
    'Répartir le chèvre en rondelles et parsemer de thym effeuillé.',
    'Cuire 25 min, jusqu’à ce que la pâte soit gonflée et dorée et les courgettes tendres. Arroser d’un filet de miel à la sortie du four.'
  ]);

  R('quiche-jambon-emmental', 'Quiche jambon et emmental', 'Française', 'Plat', 55, 'Facile', 6, [
    ['pate-brisee', 1], ['jambon', 4], ['emmental', 120, 'g'], ['oeufs', 4], ['creme-fraiche', 20, 'cl'], ['lait', 20, 'cl'],
    ['muscade', 1, 'pincee', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Préchauffer le four à 180 °C. Foncer un moule à tarte de 26 à 28 cm avec la pâte et la piquer à la fourchette.',
    'Battre les œufs avec la crème et le lait. Saler légèrement, poivrer et ajouter la muscade.',
    'Répartir le jambon coupé en lanières et l’emmental râpé sur la pâte, puis verser l’appareil.',
    'Cuire 35 à 40 min, jusqu’à ce que la quiche soit dorée et que le centre soit pris.'
  ]);

  R('quiche-chorizo-poivrons', 'Quiche chorizo et poivrons', 'Française', 'Plat', 65, 'Facile', 6, [
    ['pate-brisee', 1], ['chorizo', 120, 'g'], ['poivrons', 2], ['oignons', 1], ['oeufs', 3], ['creme-fraiche', 20, 'cl'], ['lait', 10, 'cl'],
    ['fromage-rape', 60, 'g', 'opt'], ['huile-olive', 1, 'cs'], ['sel', null], ['poivre', null]
  ], [
    'Préchauffer le four à 180 °C. Foncer un moule à tarte avec la pâte et la piquer à la fourchette.',
    'Couper les poivrons en fines lanières et émincer l’oignon. Les faire revenir 12 min à feu moyen dans l’huile, jusqu’à ce qu’ils soient tendres. Saler légèrement.',
    'Battre les œufs avec la crème et le lait, poivrer et saler peu : le chorizo est salé.',
    'Répartir les poivrons et le chorizo coupé en petits dés sur la pâte, verser l’appareil et parsemer de fromage.',
    'Cuire 35 à 40 min, jusqu’à ce que le dessus soit doré et le centre pris.'
  ]);

  R('tarte-legumes-du-soleil', 'Tarte aux légumes du soleil', 'Française', 'Plat', 70, 'Facile', 6, [
    ['pate-brisee', 1], ['courgettes', 1], ['aubergines', 1], ['tomates', 3], ['moutarde', 2, 'cs'], ['mozzarella', 125, 'g', 'opt'],
    ['ail', 1, 'pc', 'opt'], ['herbes-provence', 1, 'cc'], ['huile-olive', 3, 'cs'], ['sel', null], ['poivre', null]
  ], [
    'Préchauffer le four à 200 °C. Foncer un moule à tarte avec la pâte, la piquer à la fourchette et tartiner le fond de moutarde.',
    'Couper la courgette, l’aubergine et les tomates en rondelles de 3 mm.',
    'Disposer les rondelles debout, en spirale serrée, en alternant les trois légumes et en glissant çà et là une lamelle de mozzarella.',
    'Mélanger l’huile avec l’ail haché et les herbes de Provence, en badigeonner les légumes, saler et poivrer.',
    'Cuire 45 min, jusqu’à ce que les légumes soient fondants et légèrement grillés sur le dessus. Couvrir d’une feuille de papier cuisson s’ils colorent trop vite.'
  ]);

  R('quiche-potiron-lardons', 'Quiche potiron et lardons', 'Française', 'Plat', 70, 'Facile', 6, [
    ['pate-brisee', 1], ['potiron', 600, 'g'], ['lardons', 150, 'g'], ['oignons', 1], ['oeufs', 3], ['creme-fraiche', 20, 'cl'],
    ['fromage-rape', 70, 'g', 'opt'], ['muscade', 1, 'pincee', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Préchauffer le four à 180 °C. Foncer un moule à tarte avec la pâte et la piquer à la fourchette.',
    'Éplucher le potiron et le couper en dés de 1,5 cm. Faire revenir les lardons et l’oignon émincé 3 min à feu moyen, ajouter le potiron et cuire 12 à 15 min à couvert, jusqu’à ce qu’il soit tendre sans se défaire.',
    'Battre les œufs avec la crème, poivrer, ajouter la muscade et saler légèrement.',
    'Répartir le potiron et les lardons sur la pâte, verser l’appareil et parsemer de fromage.',
    'Cuire 35 à 40 min, jusqu’à ce que le dessus soit doré et le centre pris.'
  ]);

  R('tarte-carottes-cumin', 'Tarte aux carottes et au cumin', 'Française', 'Plat', 65, 'Facile', 6, [
    ['pate-brisee', 1], ['carottes', 5], ['oignons', 1], ['oeufs', 3], ['creme-fraiche', 20, 'cl'], ['cumin', 1, 'cc'],
    ['fromage-rape', 70, 'g'], ['coriandre', 0.25, 'pc', 'opt'], ['huile-olive', 2, 'cs'], ['sel', null], ['poivre', null]
  ], [
    'Préchauffer le four à 180 °C. Foncer un moule à tarte avec la pâte et la piquer à la fourchette.',
    'Râper grossièrement les carottes et émincer l’oignon. Les faire revenir 10 min à feu moyen dans l’huile avec le cumin, jusqu’à ce que les carottes soient souples. Saler et poivrer.',
    'Battre les œufs avec la crème, ajouter la coriandre ciselée, saler et poivrer.',
    'Répartir les carottes sur la pâte, verser l’appareil et parsemer de fromage.',
    'Cuire 35 à 40 min, jusqu’à ce que le dessus soit doré et le centre pris.'
  ]);

  R('tarte-fine-tomates-cerises-ricotta', 'Tarte fine tomates cerises et ricotta', 'Française', 'Plat', 40, 'Facile', 4, [
    ['pate-feuilletee', 1], ['ricotta', 250, 'g'], ['tomates-cerises', 300, 'g'], ['parmesan', 30, 'g'], ['basilic', 0.25, 'pc', 'opt'],
    ['ail', 1, 'pc', 'opt'], ['huile-olive', 1, 'cs'], ['sel', null], ['poivre', null]
  ], [
    'Préchauffer le four à 200 °C. Dérouler la pâte sur une plaque couverte de papier cuisson et la piquer à la fourchette en épargnant 1 cm de bord.',
    'Mélanger la ricotta avec le parmesan râpé et l’ail haché, saler et poivrer. Étaler sur la pâte, à l’intérieur du bord.',
    'Couper les tomates cerises en deux et les poser sur la ricotta, face coupée vers le haut. Arroser d’huile, saler et poivrer.',
    'Cuire 25 min, jusqu’à ce que la pâte soit gonflée et dorée et les tomates légèrement confites. Parsemer de basilic frais.'
  ]);

  R('tarte-tartiflette', 'Tarte façon tartiflette', 'Française', 'Plat', 75, 'Facile', 6, [
    ['pate-brisee', 1], ['pommes-de-terre', 600, 'g'], ['reblochon', 0.5], ['lardons', 150, 'g'], ['oignons', 2],
    ['creme-fraiche', 15, 'cl'], ['vin-blanc', 5, 'cl', 'opt'], ['poivre', null]
  ], [
    'Cuire les pommes de terre entières, avec leur peau, 20 min à l’eau bouillante salée : elles doivent être tendres mais se tenir. Les peler et les couper en rondelles.',
    'Préchauffer le four à 200 °C. Foncer un moule à tarte avec la pâte et la piquer à la fourchette.',
    'Faire revenir les lardons et les oignons émincés 8 min à feu moyen, jusqu’à ce que les oignons soient blonds. Déglacer avec le vin blanc et laisser évaporer 1 min.',
    'Répartir les pommes de terre, les lardons et les oignons sur la pâte, napper de crème et poivrer.',
    'Couvrir de reblochon coupé en tranches, croûte vers le haut, et cuire 30 min, jusqu’à ce que le fromage soit fondu et gratiné.'
  ]);

  R('quiche-endives-jambon', 'Quiche aux endives et au jambon', 'Française', 'Plat', 70, 'Facile', 6, [
    ['pate-brisee', 1], ['endives', 4], ['jambon', 3], ['oeufs', 3], ['creme-fraiche', 20, 'cl'], ['lait', 10, 'cl'],
    ['emmental', 80, 'g'], ['beurre', 20, 'g'], ['sucre', 5, 'g', 'opt'], ['muscade', 1, 'pincee', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Préchauffer le four à 180 °C. Foncer un moule à tarte avec la pâte et la piquer à la fourchette.',
    'Retirer le cône amer à la base des endives et les émincer. Les faire fondre 15 min à feu moyen dans le beurre avec le sucre et une pincée de sel, jusqu’à ce qu’elles soient tendres et que leur eau soit évaporée.',
    'Battre les œufs avec la crème et le lait, saler légèrement, poivrer et ajouter la muscade.',
    'Répartir les endives et le jambon en lanières sur la pâte, verser l’appareil et parsemer d’emmental râpé.',
    'Cuire 35 à 40 min, jusqu’à ce que le dessus soit doré et le centre pris.'
  ]);

  /* ───────────── Cakes salés ───────────── */

  R('cake-chorizo-poivron', 'Cake chorizo et poivron', 'Française', 'Entrée', 70, 'Facile', 6, [
    ['farine', 200, 'g'], ['oeufs', 3], ['levure-chimique', 1], ['lait', 12, 'cl'], ['huile-olive', 6, 'cs'],
    ['chorizo', 150, 'g'], ['poivrons-rouges', 1], ['fromage-rape', 100, 'g'], ['sel', null], ['poivre', null]
  ], [
    'Préchauffer le four à 180 °C. Huiler un moule à cake ou le chemiser de papier cuisson.',
    'Couper le poivron en petits dés et les faire revenir 5 min à feu moyen dans 1 cs d’huile, pour les attendrir.',
    'Mélanger la farine et la levure, ajouter les œufs un à un, puis le lait et le reste d’huile, sans trop travailler la pâte.',
    'Ajouter le chorizo en petits dés, le poivron et le fromage. Saler peu et poivrer.',
    'Verser dans le moule et cuire 45 min : la lame d’un couteau doit ressortir sèche. Laisser tiédir avant de démouler.'
  ]);

  R('cake-chevre-courgette', 'Cake chèvre et courgette', 'Française', 'Entrée', 70, 'Facile', 6, [
    ['farine', 200, 'g'], ['oeufs', 3], ['levure-chimique', 1], ['lait', 10, 'cl'], ['huile-olive', 6, 'cs'],
    ['courgettes', 1], ['chevre', 150, 'g'], ['fromage-rape', 50, 'g', 'opt'], ['menthe', 0.25, 'pc', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Préchauffer le four à 180 °C. Huiler un moule à cake ou le chemiser de papier cuisson.',
    'Râper grossièrement la courgette avec sa peau, la saler légèrement et la presser entre les mains pour en extraire l’eau.',
    'Mélanger la farine et la levure, ajouter les œufs un à un, puis le lait et l’huile.',
    'Ajouter la courgette, le chèvre coupé en dés, le fromage râpé et la menthe ciselée. Saler et poivrer.',
    'Verser dans le moule et cuire 45 à 50 min : la lame d’un couteau doit ressortir sèche. Laisser tiédir avant de démouler.'
  ]);

  R('cake-thon', 'Cake au thon', 'Française', 'Entrée', 65, 'Facile', 6, [
    ['farine', 200, 'g'], ['oeufs', 3], ['levure-chimique', 1], ['lait', 12, 'cl'], ['huile-olive', 6, 'cs'],
    ['thon-boite', 280, 'g'], ['emmental', 80, 'g'], ['tomates-sechees', 50, 'g', 'opt'], ['moutarde', 1, 'cs', 'opt'],
    ['ciboulette', 0.25, 'pc', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Préchauffer le four à 180 °C. Huiler un moule à cake ou le chemiser de papier cuisson.',
    'Mélanger la farine et la levure, ajouter les œufs un à un, puis le lait, l’huile et la moutarde.',
    'Ajouter le thon bien égoutté et émietté, l’emmental râpé, les tomates séchées coupées en morceaux et la ciboulette ciselée. Saler et poivrer.',
    'Verser dans le moule et cuire 45 min : la lame d’un couteau doit ressortir sèche. Laisser tiédir avant de démouler.'
  ]);

  R('cake-lardons-comte', 'Cake lardons et comté', 'Française', 'Entrée', 70, 'Facile', 6, [
    ['farine', 200, 'g'], ['oeufs', 3], ['levure-chimique', 1], ['lait', 12, 'cl'], ['huile', 5, 'cs'],
    ['lardons', 200, 'g'], ['comte', 120, 'g'], ['oignons', 1, 'pc', 'opt'], ['poivre', null]
  ], [
    'Préchauffer le four à 180 °C. Huiler un moule à cake ou le chemiser de papier cuisson.',
    'Faire revenir les lardons et l’oignon émincé 5 min à feu moyen, sans matière grasse, puis les égoutter sur du papier absorbant.',
    'Mélanger la farine et la levure, ajouter les œufs un à un, puis le lait et l’huile.',
    'Ajouter les lardons, l’oignon et le comté coupé en petits dés. Poivrer, sans saler.',
    'Verser dans le moule et cuire 45 min : la lame d’un couteau doit ressortir sèche. Laisser tiédir avant de démouler.'
  ]);

  R('cake-lardons-pruneaux', 'Cake aux lardons et aux pruneaux', 'Française', 'Entrée', 70, 'Facile', 6, [
    ['farine', 200, 'g'], ['oeufs', 3], ['levure-chimique', 1], ['lait', 12, 'cl'], ['huile', 5, 'cs'],
    ['lardons', 200, 'g'], ['pruneaux', 150, 'g'], ['fromage-rape', 80, 'g'], ['poivre', null]
  ], [
    'Préchauffer le four à 180 °C. Huiler un moule à cake ou le chemiser de papier cuisson.',
    'Faire dorer les lardons 5 min à feu moyen, sans matière grasse, puis les égoutter. Dénoyauter les pruneaux et les couper en deux.',
    'Mélanger la farine et la levure, ajouter les œufs un à un, puis le lait et l’huile.',
    'Ajouter les lardons, les pruneaux et le fromage. Poivrer, sans saler.',
    'Verser dans le moule et cuire 45 min : la lame d’un couteau doit ressortir sèche. Laisser tiédir avant de démouler.'
  ]);

  R('cake-saumon-fume-aneth', 'Cake au saumon fumé et à l’aneth', 'Française', 'Entrée', 65, 'Facile', 6, [
    ['farine', 200, 'g'], ['oeufs', 3], ['levure-chimique', 1], ['creme-fraiche', 10, 'cl'], ['lait', 5, 'cl'], ['huile-olive', 4, 'cs'],
    ['saumon-fume', 6], ['aneth', 0.5], ['citron', 0.5, 'pc', 'opt'], ['fromage-rape', 50, 'g', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Préchauffer le four à 180 °C. Huiler un moule à cake ou le chemiser de papier cuisson.',
    'Mélanger la farine et la levure, ajouter les œufs un à un, puis la crème, le lait et l’huile.',
    'Ajouter le saumon fumé coupé en lanières, l’aneth ciselé, le zeste râpé du citron et le fromage. Poivrer et saler très peu.',
    'Verser dans le moule et cuire 40 à 45 min : la lame d’un couteau doit ressortir sèche. Laisser refroidir avant de démouler : ce cake est meilleur froid.'
  ]);

  R('cake-poulet-curry', 'Cake au poulet et au curry', 'Française', 'Entrée', 75, 'Facile', 6, [
    ['farine', 200, 'g'], ['oeufs', 3], ['levure-chimique', 1], ['lait', 12, 'cl'], ['huile', 6, 'cs'],
    ['poulet', 250, 'g'], ['curry', 2, 'cc'], ['oignons', 1], ['emmental', 80, 'g'], ['raisins-secs', 40, 'g', 'opt'],
    ['coriandre', 0.25, 'pc', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Préchauffer le four à 180 °C. Huiler un moule à cake ou le chemiser de papier cuisson.',
    'Couper le poulet en petits dés. Les faire dorer 6 à 7 min à feu moyen dans 1 cs d’huile avec l’oignon émincé et la moitié du curry, jusqu’à ce qu’ils soient cuits à cœur. Saler et poivrer.',
    'Mélanger la farine, la levure et le reste du curry, ajouter les œufs un à un, puis le lait et le reste d’huile.',
    'Ajouter le poulet, l’emmental râpé, les raisins secs et la coriandre ciselée. Saler et poivrer.',
    'Verser dans le moule et cuire 45 min : la lame d’un couteau doit ressortir sèche. Laisser tiédir avant de démouler.'
  ]);

  R('cake-roquefort-noix', 'Cake roquefort, poire et noix', 'Française', 'Entrée', 65, 'Facile', 6, [
    ['farine', 200, 'g'], ['oeufs', 3], ['levure-chimique', 1], ['lait', 12, 'cl'], ['huile', 5, 'cs'],
    ['roquefort', 150, 'g'], ['cerneaux-de-noix', 60, 'g'], ['poires', 1, 'pc', 'opt'], ['poivre', null]
  ], [
    'Préchauffer le four à 180 °C. Huiler un moule à cake ou le chemiser de papier cuisson.',
    'Mélanger la farine et la levure, ajouter les œufs un à un, puis le lait et l’huile.',
    'Ajouter le roquefort émietté, les noix concassées et la poire pelée, coupée en petits dés. Poivrer, sans saler.',
    'Verser dans le moule et cuire 45 min : la lame d’un couteau doit ressortir sèche. Laisser tiédir avant de démouler.'
  ]);

  R('cake-tomates-cerises-mozzarella-pesto', 'Cake tomates cerises, mozzarella et pesto', 'Française', 'Entrée', 70, 'Facile', 6, [
    ['farine', 200, 'g'], ['oeufs', 3], ['levure-chimique', 1], ['lait', 10, 'cl'], ['huile-olive', 4, 'cs'],
    ['pesto', 60, 'g'], ['mozzarella', 125, 'g'], ['tomates-cerises', 150, 'g'], ['parmesan', 40, 'g', 'opt'],
    ['pignons', 20, 'g', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Préchauffer le four à 180 °C. Huiler un moule à cake ou le chemiser de papier cuisson.',
    'Mélanger la farine et la levure, ajouter les œufs un à un, puis le lait, l’huile et le pesto.',
    'Ajouter la mozzarella bien égouttée coupée en dés, le parmesan râpé et les tomates cerises entières, légèrement farinées pour qu’elles ne tombent pas au fond. Saler et poivrer.',
    'Verser dans le moule, parsemer de pignons et cuire 45 à 50 min : la lame d’un couteau doit ressortir sèche. Laisser tiédir avant de démouler.'
  ]);

  R('cake-jambon-champignons', 'Cake au jambon et aux champignons', 'Française', 'Entrée', 70, 'Facile', 6, [
    ['farine', 200, 'g'], ['oeufs', 3], ['levure-chimique', 1], ['lait', 12, 'cl'], ['huile', 6, 'cs'],
    ['jambon', 4], ['champignons', 250, 'g'], ['emmental', 100, 'g'], ['persil', 0.25, 'pc', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Préchauffer le four à 180 °C. Huiler un moule à cake ou le chemiser de papier cuisson.',
    'Émincer les champignons et les faire sauter 6 à 8 min à feu vif dans 1 cs d’huile, jusqu’à ce que leur eau soit évaporée. Saler et poivrer.',
    'Mélanger la farine et la levure, ajouter les œufs un à un, puis le lait et le reste d’huile.',
    'Ajouter le jambon en dés, les champignons, l’emmental râpé et le persil ciselé. Saler peu et poivrer.',
    'Verser dans le moule et cuire 45 min : la lame d’un couteau doit ressortir sèche. Laisser tiédir avant de démouler.'
  ]);

  /* ───────────── Feuilletés, tourtes et chaussons ───────────── */

  R('friands-saucisse', 'Friands à la saucisse', 'Française', 'Plat', 45, 'Facile', 4, [
    ['pate-feuilletee', 1], ['chair-saucisse', 300, 'g'], ['echalotes', 1], ['oeufs', 1], ['persil', 0.25, 'pc', 'opt'],
    ['muscade', 1, 'pincee', 'opt'], ['poivre', null]
  ], [
    'Préchauffer le four à 200 °C. Mélanger la chair à saucisse avec l’échalote finement ciselée, le persil haché, la muscade et du poivre.',
    'Dérouler la pâte et la couper en 4 quartiers. Façonner la farce en 4 boudins et en poser un sur chaque quartier.',
    'Humecter les bords avec un peu d’eau, rouler la pâte autour de la farce et placer la soudure dessous. Fermer les extrémités en appuyant avec une fourchette.',
    'Poser sur une plaque couverte de papier cuisson, dorer à l’œuf battu et strier le dessus à la pointe d’un couteau.',
    'Cuire 25 à 30 min, jusqu’à ce que les friands soient bien gonflés et dorés.'
  ]);

  R('feuilletes-jambon-fromage', 'Feuilletés jambon fromage', 'Française', 'Plat', 35, 'Facile', 4, [
    ['pate-feuilletee', 1], ['jambon', 4], ['emmental', 120, 'g'], ['creme-fraiche', 4, 'cl'], ['oeufs', 1],
    ['moutarde', 1, 'cs', 'opt'], ['poivre', null]
  ], [
    'Préchauffer le four à 200 °C. Dérouler la pâte et la couper en 4 quartiers.',
    'Mélanger la crème et la moutarde, poivrer, et en tartiner une moitié de chaque quartier en laissant 1 cm de bord.',
    'Poser dessus une tranche de jambon pliée et l’emmental râpé. Humecter les bords avec un peu d’eau, rabattre la pâte et souder en appuyant avec une fourchette.',
    'Poser sur une plaque couverte de papier cuisson, dorer à l’œuf battu et inciser légèrement le dessus.',
    'Cuire 20 min, jusqu’à ce que les feuilletés soient gonflés et bien dorés.'
  ]);

  R('chaussons-chevre-epinards', 'Chaussons feuilletés chèvre et épinards', 'Française', 'Plat', 45, 'Facile', 4, [
    ['pate-feuilletee', 1], ['epinards', 400, 'g'], ['chevre', 150, 'g'], ['oeufs', 1], ['ail', 1, 'pc', 'opt'],
    ['pignons', 20, 'g', 'opt'], ['huile-olive', 1, 'cs'], ['sel', null], ['poivre', null]
  ], [
    'Préchauffer le four à 200 °C. Laver et équeuter les épinards, puis les faire tomber 5 min à feu moyen dans l’huile avec l’ail haché. Les presser fortement dans une passoire et les hacher.',
    'Mélanger les épinards avec le chèvre émietté et les pignons. Saler peu et poivrer.',
    'Dérouler la pâte et la couper en 4 quartiers. Répartir la farce sur une moitié de chaque quartier en laissant 1 cm de bord.',
    'Humecter les bords avec un peu d’eau, rabattre la pâte et souder en appuyant avec une fourchette. Poser sur une plaque couverte de papier cuisson et dorer à l’œuf battu.',
    'Cuire 20 à 25 min, jusqu’à ce que les chaussons soient gonflés et dorés.'
  ]);

  R('tourte-poulet-champignons', 'Tourte au poulet et aux champignons', 'Française', 'Plat', 75, 'Moyenne', 6, [
    ['pate-feuilletee', 2], ['poulet', 500, 'g'], ['champignons', 300, 'g'], ['oignons', 1], ['creme-fraiche', 20, 'cl'],
    ['farine', 15, 'g'], ['beurre', 25, 'g'], ['oeufs', 1], ['vin-blanc', 5, 'cl', 'opt'], ['persil', 0.25, 'pc', 'opt'],
    ['sel', null], ['poivre', null]
  ], [
    'Couper le poulet en dés de 2 cm et les faire dorer 5 min à feu vif dans le beurre. Ajouter l’oignon et les champignons émincés et cuire 8 min à feu moyen, jusqu’à ce que l’eau des champignons soit évaporée.',
    'Saupoudrer de farine, mélanger 1 min, puis verser le vin blanc et la crème. Laisser épaissir 3 min à feu doux, saler, poivrer, ajouter le persil ciselé et laisser tiédir.',
    'Préchauffer le four à 200 °C. Foncer un moule à tarte avec une pâte en la laissant déborder, et y verser la garniture.',
    'Humecter le bord avec un peu d’eau, couvrir de la seconde pâte et souder en pinçant les deux épaisseurs. Couper l’excédent.',
    'Dorer à l’œuf battu, faire une cheminée au centre et cuire 35 à 40 min, jusqu’à ce que la tourte soit bien dorée. Laisser reposer 5 min avant de couper.'
  ]);

  R('tourte-pommes-de-terre', 'Tourte aux pommes de terre', 'Française', 'Plat', 90, 'Moyenne', 6, [
    ['pate-feuilletee', 2], ['pommes-de-terre', 800, 'g'], ['oignons', 1], ['creme-fraiche', 25, 'cl'], ['oeufs', 1],
    ['persil', 0.5], ['ail', 1, 'pc', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Préchauffer le four à 180 °C. Éplucher les pommes de terre et les couper en rondelles très fines (2 mm). Les mélanger avec l’oignon émincé, l’ail et le persil hachés, du sel et du poivre.',
    'Foncer un moule à tarte avec une pâte en la laissant déborder, et y ranger les pommes de terre en couches régulières.',
    'Humecter le bord avec un peu d’eau, couvrir de la seconde pâte et souder en pinçant. Dorer à l’œuf battu et découper au centre un couvercle rond de 4 cm, sans le retirer.',
    'Cuire 1 h, jusqu’à ce que la pâte soit bien dorée et que la lame d’un couteau traverse les pommes de terre sans résistance.',
    'Soulever le couvercle, verser la crème par l’ouverture en inclinant la tourte pour la répartir, et remettre 10 min au four.'
  ]);

  R('tourte-viande', 'Tourte à la viande', 'Française', 'Plat', 80, 'Moyenne', 6, [
    ['pate-brisee', 2], ['chair-saucisse', 300, 'g'], ['boeuf-hache', 300, 'g'], ['oignons', 1], ['ail', 1], ['oeufs', 2],
    ['persil', 0.5, 'pc', 'opt'], ['cognac', 2, 'cl', 'opt'], ['muscade', 1, 'pincee', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Préchauffer le four à 190 °C. Mélanger la chair à saucisse et le bœuf avec l’oignon et l’ail finement hachés, le persil ciselé, 1 œuf, le cognac, la muscade, du poivre et un peu de sel.',
    'Foncer un moule à tarte avec une pâte en la laissant déborder, et y tasser la farce en couche régulière.',
    'Humecter le bord avec un peu d’eau, couvrir de la seconde pâte et souder en pinçant les deux épaisseurs. Couper l’excédent.',
    'Dorer avec le second œuf battu, faire une cheminée au centre et strier le dessus à la pointe d’un couteau.',
    'Cuire 50 min, jusqu’à ce que la tourte soit bien dorée et que le jus qui remonte par la cheminée soit clair. Laisser reposer 10 min avant de couper.'
  ]);

  R('feuillete-saumon-epinards', 'Feuilleté de saumon aux épinards', 'Française', 'Plat', 60, 'Moyenne', 4, [
    ['pate-feuilletee', 1], ['saumon', 3], ['epinards', 400, 'g'], ['creme-fraiche', 5, 'cl'], ['oeufs', 1],
    ['beurre', 15, 'g'], ['aneth', 0.25, 'pc', 'opt'], ['citron', 0.5, 'pc', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Laver et équeuter les épinards, puis les faire tomber 5 min à feu moyen dans le beurre. Les presser fortement dans une passoire, les hacher et les mélanger avec la crème et l’aneth ciselé. Saler, poivrer et laisser refroidir.',
    'Préchauffer le four à 200 °C. Retirer la peau et les arêtes du saumon, le saler et le poivrer.',
    'Dérouler la pâte sur une plaque couverte de papier cuisson. Étaler la moitié des épinards au centre, en rectangle, poser les pavés côte à côte et couvrir du reste d’épinards.',
    'Rabattre la pâte pour enfermer la garniture, souder les bords avec un peu d’eau et retourner le feuilleté, soudure dessous.',
    'Dorer à l’œuf battu, dessiner des croisillons à la pointe d’un couteau et cuire 25 à 30 min, jusqu’à ce que la pâte soit gonflée et bien dorée. Servir avec le citron.'
  ]);

  R('feuilletes-saucisses-strasbourg', 'Feuilletés aux saucisses de Strasbourg', 'Française', 'Entrée', 30, 'Facile', 6, [
    ['pate-feuilletee', 1], ['saucisses-de-strasbourg', 6], ['moutarde', 2, 'cs'], ['oeufs', 1],
    ['graines-sesame', 1, 'cs', 'opt']
  ], [
    'Préchauffer le four à 200 °C. Dérouler la pâte, la tartiner de moutarde et la couper en 6 bandes de la longueur des saucisses.',
    'Rouler chaque saucisse dans une bande de pâte et couper chaque rouleau en 4 tronçons.',
    'Les poser sur une plaque couverte de papier cuisson, soudure dessous. Dorer à l’œuf battu et parsemer de graines de sésame.',
    'Cuire 15 à 18 min, jusqu’à ce que la pâte soit gonflée et dorée. Servir chaud ou tiède, à l’apéritif.'
  ]);

  R('palmiers-pesto-parmesan', 'Palmiers feuilletés au pesto et au parmesan', 'Française', 'Entrée', 50, 'Facile', 6, [
    ['pate-feuilletee', 1], ['pesto', 60, 'g'], ['parmesan', 40, 'g']
  ], [
    'Dérouler la pâte, la tartiner de pesto jusqu’aux bords et la saupoudrer de parmesan râpé.',
    'Rouler deux bords opposés vers le centre, jusqu’à ce que les deux rouleaux se rejoignent. Placer 20 min au congélateur pour raffermir.',
    'Préchauffer le four à 200 °C. Couper le rouleau en tranches de 1 cm et les poser à plat, bien espacées, sur une plaque couverte de papier cuisson.',
    'Cuire 12 à 15 min, jusqu’à ce que les palmiers soient dorés et croustillants. Laisser tiédir sur une grille.'
  ]);

  R('chaussons-viande-empanadas', 'Chaussons à la viande façon empanadas', 'Espagnole', 'Plat', 55, 'Facile', 4, [
    ['pate-brisee', 1], ['boeuf-hache', 250, 'g'], ['oignons', 1], ['poivrons', 0.5], ['concentre-tomate', 1, 'cs'],
    ['cumin', 1, 'cc'], ['paprika', 1, 'cc'], ['oeufs', 1], ['olives-vertes', 40, 'g', 'opt'], ['huile-olive', 1, 'cs'],
    ['sel', null], ['poivre', null]
  ], [
    'Faire revenir l’oignon haché et le poivron en petits dés 5 min à feu moyen dans l’huile. Ajouter le bœuf et le faire dorer 5 min à feu vif en l’émiettant.',
    'Ajouter le concentré de tomate, le cumin, le paprika et les olives hachées. Saler, poivrer, cuire encore 3 min à feu moyen et laisser tiédir : la farce doit être sèche.',
    'Préchauffer le four à 200 °C. Dérouler la pâte et y découper 4 disques de 13 à 14 cm, en rassemblant et en réétalant les chutes.',
    'Répartir la farce sur une moitié de chaque disque, humecter le bord avec un peu d’eau, rabattre la pâte et souder en appuyant avec une fourchette.',
    'Poser sur une plaque couverte de papier cuisson, dorer à l’œuf battu et cuire 20 à 25 min, jusqu’à ce que les chaussons soient bien dorés.'
  ]);

  R('feuilletes-chevre-miel', 'Feuilletés chèvre et miel', 'Française', 'Entrée', 30, 'Facile', 4, [
    ['pate-feuilletee', 1], ['chevre', 160, 'g'], ['miel', 2, 'cs'], ['oeufs', 1], ['thym', 2, 'pc', 'opt'],
    ['cerneaux-de-noix', 20, 'g', 'opt'], ['poivre', null]
  ], [
    'Préchauffer le four à 200 °C. Dérouler la pâte et y découper 8 carrés d’environ 8 cm.',
    'Poser au centre de chaque carré une rondelle de chèvre, un peu de miel, quelques feuilles de thym et un morceau de noix. Poivrer.',
    'Humecter les coins avec un peu d’eau, les rabattre vers le centre et les pincer ensemble pour former une bourse.',
    'Poser sur une plaque couverte de papier cuisson, dorer à l’œuf battu et cuire 15 à 18 min, jusqu’à ce que les feuilletés soient gonflés et dorés.'
  ]);
};
