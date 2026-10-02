/* Variantes des grands classiques, ajoutées en 0.10 (même format que recettes.js). */
'use strict';

module.exports = function ajouter(R) {

  /* ───────────── Gâteaux du goûter ───────────── */

  R('gateau-yaourt-pommes', 'Gâteau au yaourt aux pommes', 'Française', 'Dessert', 70, 'Facile', 8, [
    ['yaourt', 1], ['sucre', 180, 'g'], ['farine', 210, 'g'], ['oeufs', 3], ['huile', 4, 'cs'], ['levure-chimique', 1],
    ['pommes', 3], ['sucre-vanille', 1, 'pc', 'opt'], ['cannelle', 0.5, 'cc', 'opt']
  ], [
    'Préchauffer le four à 180 °C. Huiler un moule rond de 24 cm.',
    'Fouetter le yaourt avec le sucre, le sucre vanillé et les œufs. Ajouter la farine mélangée à la levure, puis l’huile, et mélanger jusqu’à obtenir une pâte lisse.',
    'Éplucher les pommes. En couper deux en dés et les incorporer à la pâte avec la cannelle ; couper la troisième en fines lamelles.',
    'Verser la pâte dans le moule et disposer les lamelles de pomme en rosace sur le dessus.',
    'Cuire 40 à 45 min au four à 180 °C : le gâteau doit être doré et la lame d’un couteau ressortir sèche. Laisser tiédir 10 min avant de démouler.'
  ]);

  R('gateau-yaourt-chocolat', 'Gâteau au yaourt au chocolat', 'Française', 'Dessert', 60, 'Facile', 8, [
    ['yaourt', 1], ['sucre', 180, 'g'], ['farine', 180, 'g'], ['oeufs', 3], ['huile', 4, 'cs'], ['levure-chimique', 1],
    ['chocolat-noir', 150, 'g'], ['sel', 1, 'pincee', 'opt']
  ], [
    'Préchauffer le four à 180 °C. Huiler un moule rond de 24 cm.',
    'Faire fondre le chocolat cassé en morceaux 5 min au bain-marie à feu doux, ou 1 min 30 au micro-ondes à 500 W, par tranches de 30 s en remuant entre chaque.',
    'Fouetter le yaourt avec le sucre et les œufs. Ajouter la farine mélangée à la levure et au sel, puis l’huile.',
    'Incorporer le chocolat fondu et mélanger jusqu’à ce que la pâte soit lisse et brillante.',
    'Verser dans le moule et cuire 30 à 35 min au four à 180 °C : la lame d’un couteau doit ressortir à peine humide. Laisser tiédir 10 min avant de démouler.'
  ]);

  R('gateau-yaourt-citron', 'Gâteau au yaourt au citron', 'Française', 'Dessert', 60, 'Facile', 8, [
    ['yaourt', 1], ['sucre', 200, 'g'], ['farine', 210, 'g'], ['oeufs', 3], ['huile', 4, 'cs'], ['levure-chimique', 1],
    ['citron', 2], ['sucre-glace', 80, 'g', 'opt']
  ], [
    'Préchauffer le four à 180 °C. Huiler un moule rond de 24 cm ou un moule à cake de 26 cm.',
    'Laver les citrons. Râper finement le zeste des deux et presser le jus d’un seul.',
    'Fouetter le yaourt avec le sucre, les œufs et les zestes. Ajouter la farine mélangée à la levure, puis l’huile et le jus de citron (en garder 1 cuillerée à soupe pour le glaçage).',
    'Verser dans le moule et cuire 30 à 35 min au four à 180 °C (40 à 45 min en moule à cake) : la lame d’un couteau doit ressortir sèche. Démouler après 10 min et laisser refroidir.',
    'Pour le glaçage, délayer le sucre glace avec la cuillerée de jus réservée et en napper le gâteau froid.'
  ]);

  R('gateau-marbre', 'Marbré au chocolat', 'Française', 'Dessert', 80, 'Facile', 8, [
    ['beurre', 200, 'g'], ['sucre', 180, 'g'], ['oeufs', 4], ['farine', 200, 'g'], ['levure-chimique', 0.5], ['lait', 5, 'cl'],
    ['cacao-en-poudre', 20, 'g'], ['sucre-vanille', 1, 'pc', 'opt'], ['sel', 1, 'pincee']
  ], [
    'Préchauffer le four à 170 °C. Beurrer un moule à cake de 26 cm avec une noix du beurre.',
    'Fouetter le reste du beurre, bien mou, avec le sucre et le sucre vanillé jusqu’à obtenir une crème pâle. Ajouter les œufs un à un en fouettant.',
    'Incorporer la farine mélangée à la levure et au sel, sans trop travailler la pâte.',
    'Partager la pâte en deux. Dans une moitié, ajouter le cacao délayé dans le lait tiède.',
    'Verser les deux pâtes dans le moule en les alternant par grosses cuillerées, puis passer une fois la lame d’un couteau en zigzag pour marbrer.',
    'Cuire 50 à 55 min au four à 170 °C : la lame d’un couteau doit ressortir sèche. Couvrir de papier d’aluminium si le dessus colore trop vite. Démouler après 10 min et laisser refroidir sur une grille.'
  ]);

  R('gateau-moelleux-pommes', 'Gâteau moelleux aux pommes', 'Française', 'Dessert', 65, 'Facile', 8, [
    ['pommes', 4], ['farine', 150, 'g'], ['sucre', 120, 'g'], ['oeufs', 3], ['beurre', 100, 'g'], ['levure-chimique', 0.5],
    ['lait', 5, 'cl'], ['sucre-vanille', 1, 'pc', 'opt'], ['cannelle', 0.5, 'cc', 'opt']
  ], [
    'Préchauffer le four à 180 °C. Faire fondre le beurre 2 min à feu doux (ou 40 s au micro-ondes à 800 W) et en utiliser un peu pour beurrer un moule rond de 24 cm.',
    'Fouetter les œufs avec le sucre et le sucre vanillé 2 min, jusqu’à ce que le mélange mousse.',
    'Ajouter la farine mélangée à la levure, puis le lait et le beurre fondu tiède.',
    'Éplucher les pommes, les couper en lamelles de 3 mm et les incorporer à la pâte avec la cannelle : il doit y avoir plus de pommes que de pâte.',
    'Verser dans le moule, lisser et cuire 40 à 45 min au four à 180 °C : le dessus doit être bien doré et la lame d’un couteau ressortir sèche. Servir tiède ou froid.'
  ]);

  R('banana-bread-pepites-chocolat', 'Banana bread aux pépites de chocolat', 'Américaine', 'Dessert', 80, 'Facile', 8, [
    ['bananes', 3], ['farine', 200, 'g'], ['sucre-roux', 100, 'g'], ['oeufs', 2], ['beurre', 80, 'g'], ['levure-chimique', 1],
    ['pepites-de-chocolat', 100, 'g'], ['cannelle', 0.5, 'cc', 'opt'], ['sel', 1, 'pincee']
  ], [
    'Préchauffer le four à 170 °C. Faire fondre le beurre 2 min à feu doux (ou 40 s au micro-ondes à 800 W) et en utiliser un peu pour beurrer un moule à cake de 24 à 26 cm.',
    'Écraser à la fourchette les bananes bien mûres (peau tachetée) jusqu’à obtenir une purée.',
    'Ajouter le sucre roux, les œufs et le beurre fondu tiède, et mélanger.',
    'Incorporer la farine, la levure, le sel et la cannelle sans trop travailler la pâte, puis les pépites de chocolat (en garder une poignée).',
    'Verser dans le moule, parsemer des pépites réservées et cuire 50 à 55 min au four à 170 °C : la lame d’un couteau doit ressortir sèche. Laisser tiédir 10 min avant de démouler.'
  ]);

  R('muffins-tout-chocolat', 'Muffins tout chocolat', 'Américaine', 'Dessert', 35, 'Facile', 6, [
    ['farine', 200, 'g'], ['cacao-en-poudre', 30, 'g'], ['sucre', 130, 'g'], ['levure-chimique', 1], ['oeufs', 2],
    ['lait', 15, 'cl'], ['beurre', 90, 'g'], ['chocolat-noir', 100, 'g'], ['sel', 1, 'pincee']
  ], [
    'Préchauffer le four à 180 °C. Garnir un moule à 12 muffins de caissettes en papier.',
    'Faire fondre le beurre 2 min à feu doux (ou 40 s au micro-ondes à 800 W). Hacher le chocolat en gros éclats.',
    'Dans un saladier, mélanger la farine, le cacao, le sucre, la levure et le sel. Dans un bol, battre les œufs avec le lait et le beurre fondu tiède.',
    'Verser le liquide sur les poudres et mélanger en quelques tours de cuillère : la pâte doit rester grumeleuse. Ajouter les éclats de chocolat.',
    'Remplir les caissettes aux trois quarts et cuire 18 à 20 min au four à 180 °C : les muffins doivent être bombés et la pointe d’un couteau ressortir sèche.'
  ]);

  R('moelleux-chocolat', 'Moelleux au chocolat', 'Française', 'Dessert', 45, 'Facile', 8, [
    ['chocolat-noir', 200, 'g'], ['beurre', 150, 'g'], ['sucre', 150, 'g'], ['oeufs', 4], ['farine', 80, 'g'],
    ['sel', 1, 'pincee'], ['sucre-glace', 10, 'g', 'opt']
  ], [
    'Préchauffer le four à 180 °C. Beurrer un moule rond de 22 cm avec une noix du beurre et le chemiser de papier cuisson.',
    'Faire fondre le chocolat et le reste du beurre 5 min au bain-marie, à feu doux, puis lisser.',
    'Fouetter les œufs avec le sucre et le sel 3 min, jusqu’à ce que le mélange blanchisse et double de volume.',
    'Verser le chocolat tiédi sur les œufs, mélanger, puis incorporer la farine tamisée à la spatule.',
    'Verser dans le moule et cuire 22 à 25 min au four à 180 °C : les bords doivent être pris et le centre encore légèrement tremblant.',
    'Laisser refroidir complètement avant de démouler, puis saupoudrer de sucre glace.'
  ]);

  R('mug-cake-chocolat', 'Mug cake au chocolat', 'Française', 'Dessert', 5, 'Facile', 1, [
    ['chocolat-noir', 40, 'g'], ['beurre', 30, 'g'], ['sucre', 20, 'g'], ['oeufs', 1], ['farine', 20, 'g']
  ], [
    'Dans un grand mug (30 cl), faire fondre le chocolat cassé en morceaux et le beurre 40 s au micro-ondes à 800 W. Mélanger jusqu’à ce que ce soit lisse.',
    'Ajouter le sucre, puis l’œuf, et fouetter à la fourchette. Incorporer la farine (2 cuillerées à soupe rases).',
    'Cuire 50 s à 1 min au micro-ondes à 800 W : le gâteau gonfle puis retombe légèrement ; le dessus doit être pris et le cœur encore moelleux.',
    'Laisser reposer 1 min avant de déguster à la cuillère.'
  ]);

  /* ───────────── Cookies et sablés ───────────── */

  R('cookies-trois-chocolats', 'Cookies aux trois chocolats', 'Américaine', 'Dessert', 40, 'Facile', 6, [
    ['farine', 200, 'g'], ['beurre', 110, 'g'], ['sucre-roux', 120, 'g'], ['oeufs', 1], ['levure-chimique', 0.5],
    ['chocolat-noir', 60, 'g'], ['chocolat-au-lait', 60, 'g'], ['chocolat-blanc', 60, 'g'], ['sel', 1, 'pincee']
  ], [
    'Préchauffer le four à 180 °C. Couvrir deux plaques de papier cuisson.',
    'Mélanger le beurre mou avec le sucre roux jusqu’à obtenir une crème, puis ajouter l’œuf.',
    'Incorporer la farine, la levure et le sel, puis les trois chocolats hachés en gros morceaux.',
    'Former 16 boules de la taille d’une balle de golf, les espacer de 5 cm sur les plaques et les aplatir légèrement.',
    'Cuire 10 à 12 min au four à 180 °C, une plaque après l’autre : les bords doivent être dorés et le centre encore mou. Laisser durcir 5 min sur la plaque avant de décoller.'
  ]);

  R('cookies-beurre-cacahuete', 'Cookies au beurre de cacahuète', 'Américaine', 'Dessert', 40, 'Facile', 6, [
    ['beurre-de-cacahuete', 7, 'cs'], ['beurre', 60, 'g'], ['sucre-roux', 120, 'g'], ['oeufs', 1], ['farine', 150, 'g'],
    ['levure-chimique', 0.5], ['cacahuetes', 50, 'g', 'opt'], ['sel', 1, 'pincee']
  ], [
    'Préchauffer le four à 180 °C. Couvrir deux plaques de papier cuisson.',
    'Fouetter le beurre mou avec le beurre de cacahuète et le sucre roux jusqu’à obtenir une crème, puis ajouter l’œuf.',
    'Incorporer la farine, la levure et le sel, puis les cacahuètes grossièrement concassées.',
    'Former 16 boules, les espacer sur les plaques et les aplatir avec le dos d’une fourchette en croisant les dents pour dessiner un quadrillage.',
    'Cuire 10 à 12 min au four à 180 °C, une plaque après l’autre : les bords doivent être juste dorés. Laisser durcir 5 min sur la plaque : les cookies sont très friables à chaud.'
  ]);

  R('sables-beurre', 'Sablés au beurre', 'Française', 'Dessert', 75, 'Facile', 6, [
    ['farine', 250, 'g'], ['beurre', 125, 'g'], ['sucre', 100, 'g'], ['oeufs', 1], ['sucre-vanille', 1, 'pc', 'opt'], ['sel', 1, 'pincee']
  ], [
    'Mélanger la farine, le sucre, le sucre vanillé et le sel. Ajouter le beurre froid en dés et sabler du bout des doigts jusqu’à obtenir une texture de chapelure.',
    'Ajouter l’œuf et rassembler rapidement en boule, sans pétrir. Aplatir en galette, filmer et réserver 30 min au réfrigérateur.',
    'Préchauffer le four à 180 °C. Étaler la pâte sur 4 mm d’épaisseur sur un plan fariné et découper une trentaine de sablés à l’emporte-pièce ou avec un verre.',
    'Les déposer sur une plaque couverte de papier cuisson et cuire 10 à 12 min au four à 180 °C (en deux fournées si besoin) : les bords doivent être à peine dorés.',
    'Laisser refroidir sur une grille : les sablés durcissent en refroidissant.'
  ]);

  R('sables-confiture', 'Sablés à la confiture', 'Française', 'Dessert', 85, 'Moyenne', 6, [
    ['farine', 250, 'g'], ['beurre', 125, 'g'], ['sucre-glace', 100, 'g'], ['oeufs', 1], ['confiture', 150, 'g'], ['sel', 1, 'pincee']
  ], [
    'Mélanger la farine, 80 g de sucre glace et le sel. Ajouter le beurre froid en dés et sabler du bout des doigts.',
    'Ajouter l’œuf et rassembler en boule sans pétrir. Aplatir, filmer et réserver 30 min au réfrigérateur.',
    'Préchauffer le four à 180 °C. Étaler la pâte sur 3 mm et découper une quarantaine de disques de 5 cm. Évider le centre de la moitié d’entre eux avec un petit emporte-pièce ou un bouchon.',
    'Cuire 10 min au four à 180 °C (en deux fournées si besoin) sur une plaque couverte de papier cuisson : les sablés doivent rester blonds. Laisser refroidir.',
    'Saupoudrer les sablés évidés du reste de sucre glace. Tartiner les sablés pleins d’une cuillerée à café de confiture et les couvrir des sablés évidés.'
  ]);

  /* ───────────── Crêpes, pancakes et brioche ───────────── */

  R('crepes-chocolat-banane', 'Crêpes au chocolat et à la banane', 'Française', 'Dessert', 60, 'Facile', 4, [
    ['farine', 125, 'g'], ['oeufs', 2], ['lait', 30, 'cl'], ['beurre', 30, 'g'], ['chocolat-noir', 100, 'g'], ['bananes', 2],
    ['sel', 1, 'pincee'], ['amandes-effilees', 20, 'g', 'opt']
  ], [
    'Mélanger la farine et le sel, creuser un puits et y casser les œufs. Délayer peu à peu avec 25 cl de lait, puis ajouter 20 g de beurre fondu. Laisser reposer 30 min.',
    'Cuire 8 crêpes dans une poêle chaude légèrement beurrée, 1 min par face à feu moyen-vif. Les empiler sous une assiette pour les garder chaudes.',
    'Faire fondre le chocolat avec les 5 cl de lait restants 3 à 4 min à feu très doux, en remuant jusqu’à obtenir une sauce lisse.',
    'Couper les bananes en rondelles. Garnir chaque crêpe de rondelles de banane et de sauce au chocolat, puis la plier en quatre.',
    'Parsemer d’amandes effilées et servir aussitôt.'
  ]);

  R('crepes-sucre-citron', 'Crêpes au sucre et au citron', 'Française', 'Dessert', 65, 'Facile', 4, [
    ['farine', 250, 'g'], ['oeufs', 3], ['lait', 50, 'cl'], ['beurre', 40, 'g'], ['sucre', 60, 'g'], ['citron', 2], ['sel', 1, 'pincee']
  ], [
    'Mélanger la farine et le sel, creuser un puits et y casser les œufs. Délayer peu à peu avec le lait jusqu’à obtenir une pâte lisse, puis ajouter 30 g de beurre fondu. Laisser reposer 30 min.',
    'Chauffer une poêle à feu moyen-vif et la graisser légèrement avec le reste du beurre. Verser une petite louche de pâte, la répartir en inclinant la poêle et cuire 1 min par face.',
    'Cuire ainsi une douzaine de crêpes, toujours à feu moyen-vif (25 min en tout), et les empiler sous une assiette pour les garder chaudes.',
    'Saupoudrer chaque crêpe d’une cuillerée à café de sucre, arroser d’un filet de jus de citron, plier en quatre et servir chaud.'
  ]);

  R('crepes-caramel-beurre-sale', 'Crêpes au caramel au beurre salé', 'Française', 'Dessert', 65, 'Moyenne', 4, [
    ['farine', 125, 'g'], ['oeufs', 2], ['lait', 25, 'cl'], ['beurre-demi-sel', 60, 'g'], ['sucre', 100, 'g'], ['creme-liquide', 10, 'cl']
  ], [
    'Creuser un puits dans la farine, y casser les œufs et délayer peu à peu avec le lait. Ajouter 10 g de beurre fondu et laisser reposer 30 min.',
    'Pour le caramel, faire fondre le sucre à sec dans une casserole à feu moyen, sans remuer, 6 à 8 min, jusqu’à obtenir une couleur ambrée. Pendant ce temps, chauffer la crème 30 s au micro-ondes à 800 W.',
    'Hors du feu, ajouter 40 g de beurre en dés, puis la crème chaude en filet (attention aux projections). Remettre 1 min sur feu doux en fouettant pour lisser.',
    'Cuire 8 crêpes dans une poêle chaude graissée avec le reste du beurre, 1 min par face à feu moyen-vif.',
    'Napper les crêpes de caramel tiède, les plier en quatre et servir.'
  ]);

  R('pancakes-banane', 'Pancakes à la banane', 'Américaine', 'Dessert', 35, 'Facile', 4, [
    ['bananes', 2], ['farine', 200, 'g'], ['oeufs', 2], ['lait', 20, 'cl'], ['levure-chimique', 1], ['beurre', 30, 'g'],
    ['sel', 1, 'pincee'], ['sirop-d-erable', 4, 'cs', 'opt']
  ], [
    'Écraser à la fourchette les bananes bien mûres. Ajouter les œufs et le lait, et fouetter.',
    'Incorporer la farine, la levure et le sel, puis 20 g de beurre fondu. La pâte doit être épaisse. Laisser reposer 10 min.',
    'Chauffer une poêle à feu moyen et la graisser avec un peu du beurre restant. Verser des petites louches de pâte de 10 cm de diamètre et cuire 2 min.',
    'Retourner quand des bulles crèvent à la surface et cuire encore 1 min à feu moyen : les pancakes doivent être dorés et gonflés.',
    'Servir chaud, arrosé de sirop d’érable.'
  ]);

  R('pancakes-yaourt-fruits-rouges', 'Pancakes au yaourt et aux fruits rouges', 'Américaine', 'Dessert', 35, 'Facile', 4, [
    ['farine', 200, 'g'], ['yaourt', 1], ['oeufs', 2], ['lait', 15, 'cl'], ['sucre', 50, 'g'], ['levure-chimique', 1],
    ['beurre', 20, 'g'], ['fruits-rouges-surgeles', 250, 'g'], ['sel', 1, 'pincee']
  ], [
    'Mettre les fruits rouges encore surgelés dans une petite casserole avec 20 g de sucre. Cuire 8 à 10 min à feu doux, jusqu’à obtenir une compotée sirupeuse.',
    'Mélanger la farine, la levure, le reste du sucre et le sel. Ajouter le yaourt, les œufs et le lait, et fouetter jusqu’à obtenir une pâte épaisse. Laisser reposer 10 min.',
    'Chauffer une poêle à feu moyen, la graisser avec un peu de beurre et y verser des petites louches de pâte. Cuire 2 min.',
    'Retourner quand des bulles crèvent à la surface et cuire encore 1 min à feu moyen : les pancakes doivent être dorés et gonflés.',
    'Empiler les pancakes et les napper de compotée tiède.'
  ]);

  R('brioche-perdue-pommes', 'Brioche perdue aux pommes caramélisées', 'Française', 'Dessert', 25, 'Facile', 4, [
    ['brioche', 240, 'g'], ['oeufs', 2], ['lait', 20, 'cl'], ['sucre', 50, 'g'], ['beurre', 40, 'g'], ['pommes', 2],
    ['cannelle', 0.5, 'cc', 'opt']
  ], [
    'Éplucher les pommes et les couper en quartiers fins. Les faire dorer 8 min à feu moyen dans 20 g de beurre avec 30 g de sucre et la cannelle, jusqu’à ce qu’elles soient tendres et caramélisées. Réserver au chaud.',
    'Battre les œufs avec le lait et le reste du sucre dans une assiette creuse.',
    'Couper la brioche, de préférence rassise, en 8 tranches de 2 cm. Les tremper 10 s par face dans le mélange, sans les détremper.',
    'Les faire dorer dans le reste du beurre, 2 min par face à feu moyen.',
    'Servir aussitôt, garni des pommes caramélisées.'
  ]);

  /* ───────────── Tartes, clafoutis et crumbles ───────────── */

  R('tarte-fine-pommes', 'Tarte fine aux pommes', 'Française', 'Dessert', 45, 'Facile', 6, [
    ['pate-feuilletee', 1], ['pommes', 4], ['beurre', 30, 'g'], ['sucre', 30, 'g'], ['compote', 100, 'g', 'opt'],
    ['confiture', 30, 'g', 'opt']
  ], [
    'Préchauffer le four à 200 °C. Dérouler la pâte sur une plaque couverte de papier cuisson et la piquer à la fourchette en laissant 1 cm de bord intact.',
    'Étaler la compote en fine couche sur la pâte, sans couvrir le bord.',
    'Éplucher les pommes, les couper en deux puis en lamelles de 2 mm. Les disposer en rosace serrée, en les faisant se chevaucher.',
    'Badigeonner de beurre fondu et saupoudrer de sucre.',
    'Cuire 25 à 30 min au four à 200 °C : la pâte doit être bien dorée dessous et le bord des pommes caramélisé.',
    'À la sortie du four, badigeonner de confiture (d’abricots, par exemple) tiédie pour faire briller. Servir tiède.'
  ]);

  R('tarte-poires-chocolat', 'Tarte aux poires et au chocolat', 'Française', 'Dessert', 120, 'Facile', 8, [
    ['pate-sablee', 1], ['poires', 3], ['chocolat-noir', 150, 'g'], ['creme-liquide', 15, 'cl'], ['oeufs', 2], ['sucre', 30, 'g'],
    ['amandes-effilees', 20, 'g', 'opt']
  ], [
    'Préchauffer le four à 180 °C. Foncer un moule à tarte de 26 cm avec la pâte, la piquer à la fourchette, la couvrir de papier cuisson lesté de légumes secs et la cuire à blanc 15 min. Retirer le papier et baisser le four à 170 °C.',
    'Porter la crème à frémissement (2 min à feu moyen), la verser sur le chocolat cassé en morceaux, attendre 1 min, puis mélanger jusqu’à obtenir une crème lisse.',
    'Battre les œufs avec le sucre et les incorporer au chocolat tiédi.',
    'Éplucher les poires, les couper en deux, retirer le cœur et les émincer en lamelles sans les défaire. Les disposer en étoile sur le fond de tarte.',
    'Verser la crème au chocolat autour des poires, parsemer d’amandes effilées et cuire 25 min au four à 170 °C : la crème doit être prise sur les bords et encore tremblante au centre.',
    'Laisser refroidir 1 h à température ambiante avant de servir.'
  ]);

  R('clafoutis-poires', 'Clafoutis aux poires', 'Française', 'Dessert', 55, 'Facile', 6, [
    ['poires', 4], ['oeufs', 3], ['sucre', 80, 'g'], ['farine', 80, 'g'], ['lait', 25, 'cl'], ['beurre', 30, 'g'],
    ['sucre-vanille', 1, 'pc', 'opt'], ['amandes-effilees', 20, 'g', 'opt']
  ], [
    'Préchauffer le four à 180 °C. Faire fondre le beurre 1 min à feu doux (ou 30 s au micro-ondes à 800 W) et en utiliser un peu pour beurrer un plat à gratin de 26 cm.',
    'Éplucher les poires, les couper en quartiers, retirer le cœur et les répartir dans le plat.',
    'Fouetter les œufs avec le sucre et le sucre vanillé. Ajouter la farine, puis délayer peu à peu avec le lait. Incorporer le reste du beurre fondu.',
    'Verser l’appareil sur les poires et parsemer d’amandes effilées.',
    'Cuire 35 à 40 min au four à 180 °C : le clafoutis doit être gonflé, doré et pris au centre. Servir tiède ou froid.'
  ]);

  R('clafoutis-abricots', 'Clafoutis aux abricots', 'Française', 'Dessert', 55, 'Facile', 6, [
    ['abricots', 12], ['oeufs', 3], ['sucre', 100, 'g'], ['farine', 80, 'g'], ['lait', 25, 'cl'], ['beurre', 30, 'g'],
    ['amandes-poudre', 30, 'g', 'opt']
  ], [
    'Préchauffer le four à 180 °C. Faire fondre le beurre 1 min à feu doux (ou 30 s au micro-ondes à 800 W) et en utiliser un peu pour beurrer un plat à gratin de 26 cm.',
    'Couper les abricots en deux, les dénoyauter et les ranger dans le plat, face bombée vers le haut.',
    'Fouetter les œufs avec le sucre. Ajouter la farine et la poudre d’amandes, puis délayer peu à peu avec le lait. Incorporer le reste du beurre fondu.',
    'Verser l’appareil sur les abricots.',
    'Cuire 35 à 40 min au four à 180 °C : le clafoutis doit être gonflé, doré et pris au centre. Laisser tiédir avant de servir.'
  ]);

  R('clafoutis-pommes', 'Clafoutis aux pommes', 'Française', 'Dessert', 60, 'Facile', 6, [
    ['pommes', 3], ['oeufs', 3], ['sucre', 80, 'g'], ['farine', 80, 'g'], ['lait', 25, 'cl'], ['beurre', 40, 'g'],
    ['cannelle', 0.5, 'cc', 'opt'], ['calvados', 2, 'cl', 'opt']
  ], [
    'Préchauffer le four à 180 °C. Beurrer un plat à gratin de 26 cm avec une noix du beurre.',
    'Éplucher les pommes et les couper en quartiers fins. Les faire dorer 5 min à feu moyen dans 20 g de beurre avec 20 g de sucre, puis les répartir dans le plat.',
    'Fouetter les œufs avec le reste du sucre. Ajouter la farine et la cannelle, puis délayer peu à peu avec le lait. Incorporer le reste du beurre fondu et le calvados.',
    'Verser l’appareil sur les pommes.',
    'Cuire 35 à 40 min au four à 180 °C : le clafoutis doit être gonflé, doré et pris au centre. Servir tiède.'
  ]);

  R('crumble-poires-chocolat', 'Crumble aux poires et au chocolat', 'Française', 'Dessert', 50, 'Facile', 6, [
    ['poires', 5], ['chocolat-noir', 80, 'g'], ['farine', 120, 'g'], ['beurre', 90, 'g'], ['sucre', 80, 'g'],
    ['amandes-poudre', 40, 'g', 'opt'], ['sel', 1, 'pincee']
  ], [
    'Préchauffer le four à 180 °C.',
    'Éplucher les poires, les couper en dés de 2 cm et les répartir dans un plat à gratin. Parsemer du chocolat haché en éclats.',
    'Mélanger la farine, le sucre, la poudre d’amandes et le sel. Ajouter le beurre froid en dés et sabler du bout des doigts jusqu’à obtenir de grosses miettes.',
    'Répartir les miettes sur les fruits sans tasser.',
    'Cuire 30 à 35 min au four à 180 °C : le dessus doit être bien doré et le jus des poires bouillonner sur les bords. Servir tiède.'
  ]);

  R('crumble-abricots-amandes', 'Crumble aux abricots et aux amandes', 'Française', 'Dessert', 50, 'Facile', 6, [
    ['abricots', 16], ['farine', 100, 'g'], ['amandes-poudre', 50, 'g'], ['beurre', 90, 'g'], ['sucre', 100, 'g'],
    ['amandes-effilees', 20, 'g', 'opt'], ['sel', 1, 'pincee']
  ], [
    'Préchauffer le four à 180 °C.',
    'Couper les abricots en quatre, les dénoyauter et les répartir dans un plat à gratin. Les saupoudrer de 20 g de sucre.',
    'Mélanger la farine, la poudre d’amandes, le reste du sucre et le sel. Ajouter le beurre froid en dés et sabler du bout des doigts jusqu’à obtenir de grosses miettes.',
    'Répartir les miettes sur les abricots sans tasser et parsemer d’amandes effilées.',
    'Cuire 30 à 35 min au four à 180 °C : le dessus doit être bien doré et le jus des fruits bouillonner sur les bords. Servir tiède.'
  ]);

  /* ───────────── Fruits cuisinés ───────────── */

  R('compote-pommes', 'Compote de pommes maison', 'Française', 'Dessert', 30, 'Facile', 4, [
    ['pommes', 6], ['sucre', 30, 'g'], ['sucre-vanille', 1, 'pc', 'opt'], ['citron', 0.5, 'pc', 'opt'], ['cannelle', 0.5, 'cc', 'opt']
  ], [
    'Éplucher les pommes, retirer le cœur et les couper en morceaux de 2 cm.',
    'Les mettre dans une casserole avec 5 cl d’eau, le sucre, le sucre vanillé et le jus du demi-citron.',
    'Couvrir et cuire 15 à 20 min à feu doux en remuant de temps en temps : les pommes doivent s’écraser facilement.',
    'Écraser à la fourchette pour une compote avec morceaux, ou mixer pour une compote lisse. Ajouter la cannelle. Servir tiède ou froid.'
  ]);

  R('compote-pommes-poires', 'Compote de pommes et poires à la vanille', 'Française', 'Dessert', 30, 'Facile', 4, [
    ['pommes', 4], ['poires', 3], ['sucre-vanille', 2], ['gousses-de-vanille', 0.5, 'pc', 'opt'], ['citron', 0.5, 'pc', 'opt']
  ], [
    'Éplucher les pommes et les poires, retirer les cœurs et couper les fruits en morceaux de 2 cm.',
    'Mettre les pommes dans une casserole avec 5 cl d’eau, le sucre vanillé, la demi-gousse de vanille fendue et le jus du demi-citron. Couvrir et cuire 10 min à feu doux.',
    'Ajouter les poires, qui cuisent plus vite, et poursuivre 10 min à feu doux, à couvert : les fruits doivent s’écraser facilement.',
    'Retirer la gousse de vanille, puis écraser à la fourchette ou mixer. Servir tiède ou froid.'
  ]);

  R('pommes-poelees-cannelle', 'Pommes poêlées à la cannelle', 'Française', 'Dessert', 15, 'Facile', 4, [
    ['pommes', 4], ['beurre', 30, 'g'], ['sucre-roux', 30, 'g'], ['cannelle', 0.5, 'cc'], ['glace-a-la-vanille', 0.25, 'l', 'opt']
  ], [
    'Éplucher les pommes, les couper en huit quartiers et retirer le cœur.',
    'Faire mousser le beurre dans une grande poêle à feu moyen-vif. Ajouter les pommes en une seule couche et les laisser dorer 3 min sans y toucher.',
    'Retourner les quartiers, saupoudrer de sucre roux et de cannelle, et cuire encore 4 à 5 min à feu moyen en remuant : les pommes doivent être tendres et enrobées de caramel.',
    'Servir chaud, avec une boule de glace à la vanille.'
  ]);

  R('poires-roties-miel', 'Poires rôties au miel', 'Française', 'Dessert', 40, 'Facile', 4, [
    ['poires', 4], ['miel', 3, 'cs'], ['beurre', 20, 'g'], ['amandes-effilees', 20, 'g', 'opt'], ['cannelle', 0.5, 'cc', 'opt']
  ], [
    'Préchauffer le four à 190 °C.',
    'Couper les poires en deux sans les éplucher et retirer le cœur à la petite cuillère. Les ranger dans un plat à gratin, face coupée vers le haut.',
    'Déposer une noisette de beurre dans chaque creux, arroser de miel et saupoudrer de cannelle. Verser 3 cuillerées à soupe d’eau au fond du plat.',
    'Cuire 25 à 30 min au four à 190 °C en arrosant les poires de leur jus à mi-cuisson : la pointe d’un couteau doit s’enfoncer sans résistance.',
    'Parsemer d’amandes effilées 5 min avant la fin de la cuisson au four pour les faire dorer. Servir tiède, nappé du jus de cuisson.'
  ]);

  R('bananes-four-chocolat', 'Bananes au four au chocolat', 'Française', 'Dessert', 20, 'Facile', 4, [
    ['bananes', 4], ['chocolat-noir', 60, 'g'], ['noix-de-coco-rapee', 10, 'g', 'opt']
  ], [
    'Préchauffer le four à 200 °C.',
    'Fendre chaque banane dans la longueur, à travers la peau, sans la couper jusqu’au bout ni la transpercer dessous.',
    'Glisser dans chaque fente 3 carrés de chocolat (15 g) et envelopper chaque banane dans du papier d’aluminium.',
    'Cuire 12 à 15 min au four à 200 °C : la peau noircit et la chair devient fondante.',
    'Ouvrir les papillotes, parsemer de noix de coco et déguster à la cuillère, directement dans la peau.'
  ]);

  R('salade-fruits-hiver', 'Salade de fruits d’hiver', 'Française', 'Dessert', 45, 'Facile', 4, [
    ['oranges', 3], ['pommes', 1], ['poires', 1], ['bananes', 1], ['kiwis', 2], ['sucre-vanille', 1, 'pc', 'opt'],
    ['cannelle', 1, 'pincee', 'opt']
  ], [
    'Presser une orange dans un saladier et y dissoudre le sucre vanillé et la cannelle.',
    'Peler à vif les deux autres oranges et les couper en demi-rondelles. Éplucher les kiwis et les couper en dés.',
    'Couper la pomme et la poire en dés, sans les éplucher si elles sont bio, et la banane en rondelles. Les mettre aussitôt dans le jus d’orange pour éviter qu’elles noircissent.',
    'Ajouter les oranges et les kiwis, mélanger délicatement et réserver 30 min au réfrigérateur avant de servir.'
  ]);

  R('fraises-sucre-citron', 'Fraises au sucre et au citron', 'Française', 'Dessert', 30, 'Facile', 4, [
    ['fraises', 500, 'g'], ['sucre', 40, 'g'], ['citron', 0.5], ['menthe', 0.25, 'pc', 'opt']
  ], [
    'Laver rapidement les fraises avant de les équeuter, pour qu’elles ne se gorgent pas d’eau. Couper les plus grosses en deux ou en quatre.',
    'Les mettre dans un saladier avec le sucre et le jus du demi-citron, et mélanger délicatement.',
    'Laisser macérer 15 à 20 min à température ambiante : les fraises rendent un sirop parfumé.',
    'Parsemer de quelques feuilles de menthe ciselées et servir.'
  ]);

  /* ───────────── Entremets et crèmes ───────────── */

  R('riz-au-lait-caramel', 'Riz au lait au caramel', 'Française', 'Dessert', 50, 'Facile', 4, [
    ['riz-rond', 120, 'g'], ['lait', 80, 'cl'], ['sucre', 120, 'g'], ['creme-liquide', 10, 'cl'],
    ['gousses-de-vanille', 1, 'pc', 'opt'], ['beurre-demi-sel', 20, 'g', 'opt']
  ], [
    'Plonger le riz 2 min dans une casserole d’eau bouillante, puis l’égoutter.',
    'Porter le lait à frémissement avec la gousse de vanille fendue et grattée. Verser le riz et cuire 30 à 35 min à feu très doux, en remuant souvent : le riz doit être tendre et encore crémeux.',
    'Hors du feu, retirer la vanille et ajouter 40 g de sucre. Répartir dans 4 ramequins.',
    'Pour le caramel, faire fondre le reste du sucre avec 2 cuillerées à soupe d’eau à feu moyen, sans remuer, 6 à 8 min, jusqu’à obtenir une couleur ambrée. Pendant ce temps, chauffer la crème 30 s au micro-ondes à 800 W.',
    'Hors du feu, verser la crème chaude en filet (attention aux projections), ajouter le beurre demi-sel et remettre 1 min sur feu doux en fouettant.',
    'Napper le riz au lait de caramel. Servir tiède ou froid.'
  ]);

  R('riz-au-lait-chocolat', 'Riz au lait au chocolat', 'Française', 'Dessert', 45, 'Facile', 4, [
    ['riz-rond', 120, 'g'], ['lait', 80, 'cl'], ['sucre', 40, 'g'], ['chocolat-noir', 100, 'g']
  ], [
    'Plonger le riz 2 min dans une casserole d’eau bouillante, puis l’égoutter.',
    'Porter le lait à frémissement, verser le riz et cuire 30 à 35 min à feu très doux, en remuant souvent : le riz doit être tendre et encore crémeux.',
    'Hors du feu, ajouter le sucre et le chocolat cassé en morceaux. Attendre 1 min, puis mélanger jusqu’à ce que le chocolat soit complètement fondu.',
    'Répartir dans 4 ramequins. Servir tiède, ou froid après 2 h au réfrigérateur : le riz épaissit en refroidissant.'
  ]);

  R('gateau-semoule-raisins', 'Gâteau de semoule aux raisins', 'Française', 'Dessert', 200, 'Facile', 6, [
    ['lait', 75, 'cl'], ['semoule-fine-de-ble', 125, 'g'], ['sucre', 80, 'g'], ['oeufs', 2], ['raisins-secs', 60, 'g'], ['caramel', 50, 'g'],
    ['sucre-vanille', 1, 'pc', 'opt'], ['rhum', 2, 'cl', 'opt']
  ], [
    'Préchauffer le four à 180 °C. Faire gonfler les raisins 10 min dans un bol d’eau chaude additionnée du rhum, puis les égoutter.',
    'Napper de caramel le fond et les bords d’un moule à manqué de 20 cm ou d’un moule à cake.',
    'Porter le lait à ébullition avec le sucre et le sucre vanillé. Verser la semoule en pluie et cuire 5 min à feu doux sans cesser de remuer, jusqu’à ce que le mélange épaississe.',
    'Hors du feu, laisser tiédir 5 min, puis incorporer les œufs battus et les raisins.',
    'Verser dans le moule, lisser et cuire 25 min au four à 180 °C : le dessus doit être pris et légèrement doré.',
    'Laisser refroidir 30 min, puis réserver 2 h au réfrigérateur. Passer une lame le long du bord et démouler sur un plat creux.'
  ]);

  R('creme-dessert-vanille', 'Crème dessert à la vanille', 'Française', 'Dessert', 135, 'Facile', 4, [
    ['lait', 50, 'cl'], ['maizena', 30, 'g'], ['sucre', 40, 'g'], ['sucre-vanille', 2], ['oeufs', 2]
  ], [
    'Séparer les blancs des jaunes d’œufs : seuls les jaunes servent ici.',
    'Dans une casserole, fouetter à froid les jaunes avec le sucre, le sucre vanillé et la maïzena, puis délayer peu à peu avec le lait.',
    'Porter à ébullition à feu moyen (5 à 6 min) sans cesser de fouetter, puis cuire encore 1 min : la crème doit napper la cuillère.',
    'Verser dans 4 ramequins, filmer au contact pour éviter la formation d’une peau et réserver 2 h au réfrigérateur.'
  ]);

  R('creme-dessert-caramel', 'Crème dessert au caramel', 'Française', 'Dessert', 140, 'Moyenne', 4, [
    ['lait', 50, 'cl'], ['sucre', 100, 'g'], ['maizena', 30, 'g'], ['beurre-demi-sel', 20, 'g', 'opt']
  ], [
    'Délayer la maïzena dans 10 cl de lait froid. Faire chauffer le reste du lait 3 min à feu moyen, sans le laisser bouillir.',
    'Dans une grande casserole, faire fondre le sucre à sec à feu moyen, sans remuer, 6 à 8 min, jusqu’à obtenir un caramel ambré.',
    'Hors du feu, verser le lait chaud en trois fois sur le caramel (attention aux projections). Remettre 2 à 3 min sur feu doux et remuer jusqu’à ce que le caramel soit entièrement dissous.',
    'Ajouter la maïzena délayée et porter à ébullition à feu moyen (3 min environ) sans cesser de fouetter. Cuire encore 1 min, jusqu’à ce que la crème épaississe, puis incorporer le beurre demi-sel.',
    'Verser dans 4 ramequins, filmer au contact et réserver 2 h au réfrigérateur.'
  ]);

  R('mousse-citron', 'Mousse au citron', 'Française', 'Dessert', 220, 'Moyenne', 4, [
    ['oeufs', 3], ['sucre', 90, 'g'], ['citron', 2], ['maizena', 15, 'g']
  ], [
    'Laver les citrons, râper finement le zeste de l’un et presser le jus des deux. Séparer les blancs des jaunes d’œufs.',
    'Dans une casserole, fouetter les jaunes avec 70 g de sucre et la maïzena. Délayer avec le jus de citron, le zeste et 10 cl d’eau.',
    'Cuire 4 à 5 min à feu doux sans cesser de fouetter, jusqu’au premier bouillon : la crème épaissit d’un coup. Verser dans un saladier et laisser tiédir 20 min en remuant de temps en temps.',
    'Monter les blancs en neige ferme, en ajoutant le reste du sucre à la fin pour les serrer.',
    'Détendre la crème au citron avec un quart des blancs, puis incorporer le reste délicatement à la spatule, en soulevant la masse.',
    'Répartir dans 4 verrines et réserver au moins 3 h au réfrigérateur.'
  ]);

  R('mousse-framboises', 'Mousse de framboises à la crème', 'Française', 'Dessert', 145, 'Facile', 4, [
    ['framboises', 300, 'g'], ['creme-liquide', 25, 'cl'], ['sucre-glace', 50, 'g'], ['citron', 0.5, 'pc', 'opt']
  ], [
    'Placer la crème (entière, à 30 % de matière grasse), le saladier et les fouets 15 min au congélateur.',
    'Réserver une douzaine de framboises pour le décor. Mixer les autres avec 30 g de sucre glace et quelques gouttes de jus de citron, puis filtrer au tamis pour retirer les pépins.',
    'Fouetter la crème bien froide en chantilly ferme, en ajoutant le reste du sucre glace à la fin.',
    'Incorporer délicatement la purée de framboises à la chantilly, à la spatule, en soulevant la masse.',
    'Répartir dans 4 verrines, décorer des framboises réservées et réserver 2 h au réfrigérateur.'
  ]);

  R('verrines-mascarpone-fruits-rouges', 'Verrines mascarpone et fruits rouges', 'Française', 'Dessert', 80, 'Facile', 4, [
    ['mascarpone', 250, 'g'], ['creme-liquide', 15, 'cl'], ['sucre-glace', 40, 'g'], ['fraises', 300, 'g'],
    ['framboises', 125, 'g', 'opt'], ['speculoos', 8, 'pc', 'opt']
  ], [
    'Fouetter le mascarpone avec la crème bien froide et le sucre glace jusqu’à obtenir une crème ferme qui tient au fouet.',
    'Équeuter les fraises et les couper en petits dés.',
    'Émietter un spéculoos au fond de chacune des 4 verrines. Ajouter une couche de crème, une couche de fraises, puis recommencer avec le reste des spéculoos, de la crème et des fraises.',
    'Terminer par les framboises et réserver 1 h au réfrigérateur avant de servir.'
  ]);

  R('verrines-poires-speculoos', 'Verrines de poires au mascarpone et aux spéculoos', 'Française', 'Dessert', 95, 'Facile', 4, [
    ['poires', 3], ['mascarpone', 200, 'g'], ['creme-liquide', 15, 'cl'], ['sucre-glace', 30, 'g'], ['speculoos', 12],
    ['beurre', 15, 'g'], ['sucre', 15, 'g']
  ], [
    'Éplucher les poires et les couper en dés de 1 cm. Les faire dorer 5 min dans le beurre à feu moyen, saupoudrer de sucre et cuire encore 2 min. Laisser refroidir 15 min.',
    'Fouetter le mascarpone avec la crème bien froide et le sucre glace jusqu’à obtenir une crème ferme.',
    'Émietter grossièrement les spéculoos et en répartir les deux tiers au fond de 4 verrines.',
    'Ajouter les poires, puis la crème au mascarpone. Réserver 1 h au réfrigérateur.',
    'Parsemer du reste de spéculoos au moment de servir, pour qu’ils restent croquants.'
  ]);

  R('tiramisu-fraises', 'Tiramisu aux fraises', 'Italienne', 'Dessert', 265, 'Facile', 6, [
    ['mascarpone', 250, 'g'], ['oeufs', 3], ['sucre', 80, 'g'], ['boudoirs', 24], ['fraises', 500, 'g'], ['jus-d-orange', 10, 'cl'],
    ['menthe', 0.25, 'pc', 'opt']
  ], [
    'Équeuter les fraises. En mixer 150 g avec le jus d’orange et verser ce coulis dans une assiette creuse. Couper le reste en lamelles.',
    'Séparer les blancs des jaunes. Fouetter les jaunes avec le sucre jusqu’à ce que le mélange blanchisse, puis incorporer le mascarpone.',
    'Monter les blancs en neige ferme et les incorporer délicatement à la crème, à la spatule.',
    'Tremper rapidement la moitié des biscuits dans le coulis et en tapisser un plat de 20 × 25 cm. Couvrir de la moitié des fraises, puis de la moitié de la crème.',
    'Recommencer avec le reste des biscuits, des fraises (en garder quelques-unes pour le décor) et de la crème. Lisser.',
    'Réserver au moins 4 h au réfrigérateur. Décorer des fraises réservées et de feuilles de menthe avant de servir.'
  ]);

  /* ───────────── Desserts minute ───────────── */

  R('glace-express-banane', 'Glace express à la banane', 'Française', 'Dessert', 10, 'Facile', 4, [
    ['bananes', 4], ['lait', 5, 'cl'], ['extrait-de-vanille', 1, 'cc', 'opt'], ['pepites-de-chocolat', 30, 'g', 'opt']
  ], [
    'La veille (non compté), éplucher les bananes bien mûres, les couper en rondelles de 1 cm et les congeler à plat dans un sac ou une boîte.',
    'Sortir les rondelles 5 min avant de les mixer pour ne pas forcer sur le robot.',
    'Les mixer avec le lait et la vanille, par à-coups, en raclant les bords : le mélange passe par un stade granuleux avant de devenir lisse et crémeux, comme une glace à l’italienne.',
    'Ajouter les pépites de chocolat et servir aussitôt, ou raffermir 30 min au congélateur pour former des boules.'
  ]);

  R('yaourt-fruits-muesli-croustillant', 'Yaourt aux fraises et au muesli croustillant', 'Française', 'Dessert', 15, 'Facile', 4, [
    ['yaourt', 4], ['muesli', 80, 'g'], ['miel', 2, 'cs'], ['fraises', 250, 'g'], ['beurre', 10, 'g', 'opt']
  ], [
    'Faire chauffer une poêle à feu moyen avec le beurre. Ajouter le muesli et le faire dorer 3 min en remuant.',
    'Verser 1 cuillerée à soupe de miel, mélanger 1 min jusqu’à ce que le muesli soit enrobé, puis l’étaler sur une assiette : il devient croustillant en refroidissant.',
    'Équeuter les fraises et les couper en quartiers.',
    'Répartir les yaourts dans 4 bols, ajouter les fraises et le reste du miel, puis parsemer de muesli croustillant au dernier moment.'
  ]);

  R('fromage-blanc-miel-noix', 'Fromage blanc au miel et aux noix', 'Française', 'Dessert', 5, 'Facile', 4, [
    ['fromage-blanc', 500, 'g'], ['miel', 4, 'cs'], ['cerneaux-de-noix', 50, 'g'], ['cannelle', 1, 'pincee', 'opt']
  ], [
    'Concasser grossièrement les cerneaux de noix. Pour plus de goût, les faire griller 2 min à sec dans une poêle, à feu moyen, en remuant.',
    'Répartir le fromage blanc bien froid dans 4 coupelles.',
    'Arroser chaque coupelle d’une cuillerée à soupe de miel, parsemer de noix et d’une pointe de cannelle. Servir aussitôt.'
  ]);

  /* ───────────── Apéritif : dips et tartinades ───────────── */

  R('tapenade-maison', 'Tapenade noire maison', 'Française', 'Entrée', 10, 'Facile', 6, [
    ['olives', 200, 'g'], ['capres', 2, 'cs'], ['anchois', 30, 'g'], ['ail', 1], ['huile-olive', 5, 'cs'],
    ['citron', 0.5, 'pc', 'opt'], ['baguette', 0.5, 'pc', 'opt'], ['poivre', null]
  ], [
    'Dénoyauter les olives si nécessaire. Égoutter les câpres et les filets d’anchois. Éplucher et dégermer l’ail.',
    'Mixer les olives, les câpres, les anchois et l’ail par à-coups, en gardant un peu de grain.',
    'Ajouter l’huile d’olive en filet en mixant brièvement, puis quelques gouttes de jus de citron. Poivrer, sans saler : les anchois et les câpres suffisent.',
    'Servir sur des tranches de baguette grillées. La tapenade se conserve 1 semaine au réfrigérateur, couverte d’un film d’huile.'
  ]);

  R('tapenade-verte-amandes', 'Tapenade verte aux amandes', 'Française', 'Entrée', 10, 'Facile', 6, [
    ['olives-vertes', 200, 'g'], ['amandes-poudre', 40, 'g'], ['capres', 1, 'cs'], ['ail', 1], ['huile-olive', 4, 'cs'],
    ['citron', 0.5], ['basilic', 0.25, 'pc', 'opt'], ['baguette', 0.5, 'pc', 'opt'], ['poivre', null]
  ], [
    'Dénoyauter les olives si nécessaire et égoutter les câpres. Éplucher et dégermer l’ail.',
    'Mixer les olives, les câpres, l’ail, la poudre d’amandes et les feuilles de basilic par à-coups.',
    'Ajouter l’huile d’olive et le jus du demi-citron, puis mixer brièvement : la tapenade doit garder un peu de grain. Poivrer.',
    'Servir frais, sur des tranches de baguette grillées.'
  ]);

  R('rillettes-saumon', 'Rillettes de saumon', 'Française', 'Entrée', 90, 'Facile', 6, [
    ['saumon', 2], ['fromage-frais-a-tartiner', 120, 'g'], ['citron', 0.5], ['saumon-fume', 2, 'pc', 'opt'],
    ['aneth', 0.25, 'pc', 'opt'], ['baguette', 0.5, 'pc', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Porter une casserole d’eau salée à frémissement. Y plonger les pavés de saumon et les pocher 8 min à feu doux : la chair doit se défaire à la fourchette. Égoutter et laisser tiédir 10 min.',
    'Retirer la peau et les arêtes, puis émietter le saumon à la fourchette, sans le réduire en purée.',
    'Mélanger avec le fromage frais, le jus du demi-citron, le saumon fumé coupé en petits dés et l’aneth ciselé. Poivrer, saler légèrement.',
    'Tasser dans un bol, filmer et réserver 1 h au réfrigérateur. Servir sur des tranches de baguette grillées.'
  ]);

  R('rillettes-thon-moutarde', 'Rillettes de thon à la moutarde et aux cornichons', 'Française', 'Entrée', 40, 'Facile', 6, [
    ['thon-boite', 280, 'g'], ['creme-fraiche', 5, 'cl'], ['moutarde', 1, 'cs'], ['cornichons', 40, 'g'], ['echalotes', 1],
    ['citron', 0.5, 'pc', 'opt'], ['baguette', 0.5, 'pc', 'opt'], ['poivre', null]
  ], [
    'Égoutter soigneusement le thon (deux boîtes) et l’émietter à la fourchette.',
    'Hacher finement l’échalote et couper les cornichons en petits dés.',
    'Mélanger le thon avec la crème, la moutarde, l’échalote et les cornichons. Ajouter un filet de jus de citron et poivrer.',
    'Réserver 30 min au réfrigérateur et servir sur des tranches de baguette grillées.'
  ]);

  R('caviar-aubergine-ail-citron', 'Caviar d’aubergine à l’ail et au citron', 'Française', 'Entrée', 80, 'Facile', 6, [
    ['aubergines', 2], ['ail', 2], ['huile-olive', 3, 'cs'], ['citron', 0.5], ['persil', 0.25, 'pc', 'opt'],
    ['cumin', 0.5, 'cc', 'opt'], ['baguette', 0.5, 'pc', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Préchauffer le four à 200 °C. Couper les aubergines en deux dans la longueur, quadriller la chair au couteau et la badigeonner d’une cuillerée d’huile.',
    'Les poser sur une plaque, face coupée vers le haut, avec les gousses d’ail non épluchées. Cuire 40 à 45 min au four à 200 °C : la chair doit être très tendre et dorée.',
    'Laisser tiédir 15 min. Récupérer la chair à la cuillère et la laisser égoutter 5 min dans une passoire. Presser les gousses d’ail pour en extraire la pulpe.',
    'Écraser la chair à la fourchette (ou la mixer brièvement) avec l’ail, le reste de l’huile, le jus du demi-citron et le cumin. Saler et poivrer.',
    'Parsemer de persil ciselé et servir frais ou à température ambiante, avec des tranches de baguette grillées.'
  ]);

  R('dip-fromage-frais-ciboulette', 'Dip de fromage frais à la ciboulette', 'Française', 'Entrée', 10, 'Facile', 6, [
    ['fromage-frais-a-tartiner', 200, 'g'], ['yaourt', 1], ['ciboulette', 0.5], ['citron', 0.5], ['ail', 1, 'pc', 'opt'],
    ['carottes', 3, 'pc', 'opt'], ['concombre', 1, 'pc', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Fouetter le fromage frais avec le yaourt jusqu’à obtenir une crème lisse.',
    'Ajouter la ciboulette finement ciselée, le jus du demi-citron et l’ail râpé. Saler et poivrer.',
    'Éplucher les carottes et les couper en bâtonnets, ainsi que le concombre.',
    'Servir le dip bien frais, avec les bâtonnets de légumes à tremper.'
  ]);

  R('houmous-betterave', 'Houmous de betterave', 'Libanaise', 'Entrée', 10, 'Facile', 6, [
    ['pois-chiches', 250, 'g'], ['betteraves-cuites', 2], ['tahini', 2, 'cs'], ['citron', 1], ['ail', 1], ['huile-olive', 2, 'cs'],
    ['cumin', 0.5, 'cc', 'opt'], ['graines-sesame', 1, 'cs', 'opt'], ['pains-pita', 4, 'pc', 'opt'], ['sel', null]
  ], [
    'Rincer et égoutter les pois chiches. Couper les betteraves en morceaux. Éplucher et dégermer l’ail.',
    'Mixer les pois chiches avec les betteraves, le tahini, le jus du citron, l’ail et le cumin pendant 2 min, jusqu’à obtenir une purée bien lisse.',
    'Ajouter 1 cuillerée d’huile d’olive et saler. Détendre avec 1 ou 2 cuillerées à soupe d’eau froide si le houmous est trop épais.',
    'Verser dans une assiette creuse, arroser du reste d’huile et parsemer de graines de sésame. Servir avec des pains pita coupés en triangles.'
  ]);

  R('feta-fouettee-miel', 'Feta fouettée au miel', 'Grecque', 'Entrée', 10, 'Facile', 6, [
    ['feta', 200, 'g'], ['yaourt-grec', 100, 'g'], ['huile-olive', 2, 'cs'], ['miel', 2, 'cs'], ['origan', 0.5, 'cc', 'opt'],
    ['cerneaux-de-noix', 20, 'g', 'opt'], ['pains-pita', 4, 'pc', 'opt'], ['poivre', null]
  ], [
    'Égoutter la feta et l’émietter dans le bol du mixeur.',
    'Ajouter le yaourt grec et 1 cuillerée d’huile d’olive, puis mixer 1 à 2 min en raclant les bords, jusqu’à obtenir une crème lisse et aérienne.',
    'Étaler dans une assiette creuse en formant un creux avec le dos d’une cuillère.',
    'Arroser de miel et du reste d’huile, parsemer d’origan et de noix concassées, poivrer. Servir avec des pains pita tiédis et coupés en triangles.'
  ]);

  /* ───────────── Apéritif : feuilletés et fournées ───────────── */

  R('roules-feuilletes-jambon-fromage', 'Roulés feuilletés jambon-fromage', 'Française', 'Entrée', 50, 'Facile', 6, [
    ['pate-feuilletee', 1], ['jambon', 3], ['fromage-rape', 80, 'g'], ['moutarde', 1, 'cs'], ['oeufs', 1, 'pc', 'opt']
  ], [
    'Dérouler la pâte et la recouper en rectangle. La tartiner d’une fine couche de moutarde en laissant 2 cm libres sur un grand côté.',
    'Couvrir avec les tranches de jambon, puis parsemer de fromage râpé.',
    'Rouler la pâte en boudin serré en terminant par le bord libre, légèrement humidifié pour le souder. Placer 20 min au congélateur pour raffermir.',
    'Préchauffer le four à 200 °C. Couper le boudin en tranches de 1 cm avec un couteau bien aiguisé et les poser à plat sur une plaque couverte de papier cuisson, en les espaçant.',
    'Badigeonner d’œuf battu et cuire 12 à 15 min au four à 200 °C : les roulés doivent être gonflés et bien dorés. Servir tiède.'
  ]);

  R('roules-jambon-cru-chevre-frais', 'Roulés de jambon cru au chèvre frais', 'Française', 'Entrée', 15, 'Facile', 4, [
    ['jambon-cru', 8], ['chevre-frais', 150, 'g'], ['ciboulette', 0.25], ['roquette', 30, 'g', 'opt'],
    ['miel', 1, 'cs', 'opt'], ['poivre', null]
  ], [
    'Écraser le chèvre frais à la fourchette avec la ciboulette finement ciselée et le miel. Poivrer, sans saler : le jambon l’est déjà.',
    'Étaler les tranches de jambon cru sur le plan de travail et tartiner chacune d’une cuillerée de fromage, sur toute la longueur.',
    'Poser quelques feuilles de roquette à une extrémité et rouler la tranche bien serré.',
    'Couper chaque rouleau en 3 tronçons, les maintenir avec une pique en bois et servir frais.'
  ]);

  R('palmiers-sales-moutarde-comte', 'Palmiers salés à la moutarde et au comté', 'Française', 'Entrée', 50, 'Facile', 6, [
    ['pate-feuilletee', 1], ['moutarde', 2, 'cs'], ['comte', 80, 'g'], ['herbes-provence', 0.5, 'cc', 'opt']
  ], [
    'Dérouler la pâte et la recouper en rectangle. La tartiner de moutarde en fine couche, jusqu’aux bords, puis parsemer de comté finement râpé et d’herbes de Provence.',
    'Rouler les deux grands côtés vers le centre jusqu’à ce qu’ils se rejoignent. Placer 20 min au congélateur pour raffermir.',
    'Préchauffer le four à 200 °C. Couper le rouleau en tranches de 1 cm et les poser à plat sur une plaque couverte de papier cuisson, en les espaçant de 3 cm.',
    'Cuire 12 à 15 min au four à 200 °C, en retournant les palmiers à mi-cuisson : ils doivent être dorés et croustillants. Laisser tiédir sur une grille.'
  ]);

  R('allumettes-fromage', 'Allumettes au fromage', 'Française', 'Entrée', 25, 'Facile', 6, [
    ['pate-feuilletee', 1], ['fromage-rape', 80, 'g'], ['oeufs', 1], ['paprika', 0.5, 'cc', 'opt'],
    ['graines-de-pavot', 1, 'cc', 'opt']
  ], [
    'Préchauffer le four à 200 °C. Couvrir une plaque de papier cuisson.',
    'Dérouler la pâte et la badigeonner d’œuf battu. Parsemer de fromage râpé, de paprika et de graines de pavot, puis appuyer légèrement avec la paume pour faire adhérer.',
    'Couper la pâte en deux, puis en bandes de 1,5 cm de large. Les déposer sur la plaque telles quelles ou torsadées.',
    'Cuire 10 à 12 min au four à 200 °C : les allumettes doivent être gonflées et bien dorées. Laisser tiédir sur une grille avant de servir.'
  ]);

  R('gougeres-lardons', 'Gougères aux lardons', 'Française', 'Entrée', 50, 'Moyenne', 6, [
    ['farine', 150, 'g'], ['beurre', 80, 'g'], ['oeufs', 4], ['fromage-rape', 100, 'g'], ['lardons', 100, 'g'],
    ['muscade', 1, 'pincee', 'opt'], ['sel', 1, 'pincee'], ['poivre', null]
  ], [
    'Préchauffer le four à 200 °C. Faire dorer les lardons 5 min à sec à feu moyen, les égoutter sur du papier absorbant et les hacher grossièrement.',
    'Dans une casserole, porter à ébullition à feu moyen (3 à 4 min) 25 cl d’eau avec le beurre en morceaux et le sel.',
    'Hors du feu, verser la farine d’un coup et mélanger vivement. Remettre 1 min à feu doux en remuant pour dessécher la pâte : elle doit se détacher des parois.',
    'Hors du feu, incorporer les œufs un à un en mélangeant bien entre chaque, puis les trois quarts du fromage, les lardons, la muscade et le poivre.',
    'Former des boules de la taille d’une noix sur une plaque couverte de papier cuisson, en les espaçant de 3 cm, et parsemer du reste de fromage.',
    'Cuire 25 min au four à 200 °C, sans ouvrir la porte : les gougères doivent être gonflées et bien dorées. Servir tiède.'
  ]);

  R('crackers-maison', 'Crackers maison à l’huile d’olive', 'Française', 'Entrée', 35, 'Facile', 6, [
    ['farine', 200, 'g'], ['huile-olive', 3, 'cs'], ['sel', 3, 'pincee'], ['graines-sesame', 2, 'cs', 'opt'],
    ['herbes-provence', 1, 'cc', 'opt'], ['fleur-de-sel', 2, 'pincee', 'opt']
  ], [
    'Préchauffer le four à 180 °C.',
    'Mélanger la farine, le sel, les graines de sésame et les herbes de Provence. Ajouter l’huile d’olive et 9 cl d’eau, puis pétrir 1 min, juste assez pour former une boule souple et non collante.',
    'Étaler la pâte entre deux feuilles de papier cuisson, le plus finement possible (2 mm). Retirer la feuille du dessus et glisser l’autre sur une plaque.',
    'Prédécouper des carrés de 4 cm à la roulette ou au couteau, piquer à la fourchette et parsemer de fleur de sel.',
    'Cuire 15 à 18 min au four à 180 °C : les crackers doivent être dorés, plus foncés sur les bords. Laisser refroidir sur la plaque, puis casser le long des découpes. Ils se conservent 1 semaine dans une boîte hermétique.'
  ]);

  /* ───────────── Apéritif : bouchées et verrines ───────────── */

  R('toasts-chevre-miel', 'Toasts de chèvre chaud au miel', 'Française', 'Entrée', 15, 'Facile', 4, [
    ['baguette', 0.5], ['chevre', 150, 'g'], ['miel', 2, 'cs'], ['thym', 2, 'pc', 'opt'], ['cerneaux-de-noix', 30, 'g', 'opt'],
    ['poivre', null]
  ], [
    'Allumer le gril du four. Couper la baguette en 16 tranches de 1 cm et les ranger sur une plaque.',
    'Les faire dorer 1 à 2 min sous le gril, sur une seule face, puis les retourner.',
    'Couper la bûche de chèvre en 16 rondelles et en poser une sur la face non grillée de chaque toast. Parsemer de thym effeuillé.',
    'Passer 3 à 4 min sous le gril, à 10 cm de la résistance : le fromage doit être fondant et commencer à dorer.',
    'Arroser d’un filet de miel, poivrer, ajouter un éclat de noix et servir aussitôt.'
  ]);

  R('bouchees-chorizo-miel', 'Bouchées de chorizo au miel', 'Espagnole', 'Entrée', 10, 'Facile', 4, [
    ['chorizo', 250, 'g'], ['miel', 1, 'cs'], ['vinaigre-de-xeres', 1, 'cs', 'opt'], ['thym', 2, 'pc', 'opt']
  ], [
    'Retirer la peau du chorizo et le couper en rondelles de 1 cm.',
    'Les faire revenir 2 min par face dans une poêle à feu moyen, sans matière grasse : elles doivent dorer et rendre leur gras.',
    'Retirer l’excès de gras de la poêle. Ajouter le miel, le vinaigre et le thym effeuillé, puis remuer 1 min pour enrober et laquer les rondelles.',
    'Servir chaud ou tiède, avec des piques en bois.'
  ]);

  R('brochettes-tomates-cerises-mozzarella', 'Brochettes de tomates cerises et mozzarella', 'Italienne', 'Entrée', 15, 'Facile', 6, [
    ['tomates-cerises', 250, 'g'], ['mozzarella', 250, 'g'], ['basilic', 0.5], ['huile-olive', 2, 'cs'],
    ['vinaigre-balsamique', 1, 'cs', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Égoutter la mozzarella et la couper en cubes de 2 cm (ou utiliser des billes). Laver et sécher les tomates cerises.',
    'Mélanger la mozzarella avec l’huile d’olive, du sel et du poivre.',
    'Sur chaque pique en bois, enfiler une tomate cerise, une feuille de basilic pliée en deux et un cube de mozzarella : on obtient une vingtaine de brochettes.',
    'Ranger sur un plat, arroser de l’huile restée dans le bol et de quelques gouttes de vinaigre balsamique. Servir frais.'
  ]);

  R('verrines-avocat-crevettes', 'Verrines avocat-crevettes', 'Française', 'Entrée', 30, 'Facile', 4, [
    ['avocat', 2], ['crevettes', 200, 'g'], ['citron', 1], ['tomates', 2], ['huile-olive', 1, 'cs'],
    ['ciboulette', 0.25, 'pc', 'opt'], ['tabasco', 0.5, 'cc', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Épépiner les tomates et les couper en petits dés. Les saler légèrement et les laisser égoutter dans une passoire.',
    'Écraser la chair des avocats à la fourchette avec le jus d’un demi-citron, le tabasco, du sel et du poivre.',
    'Mélanger les crevettes cuites avec l’huile d’olive, le reste du jus de citron et la ciboulette ciselée. Poivrer.',
    'Répartir l’avocat au fond de 4 verrines, ajouter les dés de tomate, puis les crevettes.',
    'Réserver 15 min au réfrigérateur et servir bien frais.'
  ]);

  R('oeufs-mimosa-thon', 'Œufs mimosa au thon', 'Française', 'Entrée', 25, 'Facile', 6, [
    ['oeufs', 6], ['thon-boite', 140, 'g'], ['mayonnaise', 3, 'cs'], ['ciboulette', 0.25, 'pc', 'opt'],
    ['citron', 0.5, 'pc', 'opt'], ['poivre', null]
  ], [
    'Cuire les œufs 10 min dans l’eau bouillante, les refroidir dans l’eau froide et les écaler.',
    'Les couper en deux dans la longueur et retirer les jaunes. En réserver 2 pour le décor.',
    'Écraser les autres jaunes à la fourchette avec le thon bien égoutté, la mayonnaise et un filet de jus de citron. Poivrer.',
    'Garnir les blancs de cette farce en formant un dôme.',
    'Émietter les jaunes réservés par-dessus, à travers une passoire fine, et parsemer de ciboulette ciselée. Servir frais.'
  ]);

  R('oeufs-mimosa-avocat', 'Œufs mimosa à l’avocat', 'Française', 'Entrée', 25, 'Facile', 6, [
    ['oeufs', 6], ['avocat', 1], ['citron', 0.5], ['mayonnaise', 1, 'cs', 'opt'], ['paprika', 1, 'pincee', 'opt'],
    ['coriandre', 0.25, 'pc', 'opt'], ['sel', null], ['poivre', null]
  ], [
    'Cuire les œufs 10 min dans l’eau bouillante, les refroidir dans l’eau froide et les écaler.',
    'Les couper en deux dans la longueur et retirer les jaunes. En réserver 2 pour le décor.',
    'Écraser la chair de l’avocat bien mûr avec le jus du demi-citron, les autres jaunes et la mayonnaise, jusqu’à obtenir une crème lisse. Saler et poivrer.',
    'Garnir les blancs de cette crème, à la cuillère ou à la poche à douille.',
    'Émietter les jaunes réservés par-dessus, saupoudrer de paprika et parsemer de coriandre ciselée. Servir sans attendre : l’avocat s’oxyde vite.'
  ]);

  R('blinis-fromage-frais-crevettes', 'Blinis au fromage frais et aux crevettes', 'Française', 'Entrée', 15, 'Facile', 4, [
    ['blinis', 12], ['fromage-frais-a-tartiner', 120, 'g'], ['crevettes', 150, 'g'], ['citron', 0.5],
    ['aneth', 0.25, 'pc', 'opt'], ['poivre', null]
  ], [
    'Râper finement le zeste du demi-citron et presser son jus.',
    'Mélanger le fromage frais avec le zeste, la moitié du jus et l’aneth ciselé. Poivrer.',
    'Arroser les crevettes cuites du reste de jus de citron.',
    'Tiédir les blinis 1 min au grille-pain ou 3 min au four à 150 °C.',
    'Tartiner chaque blini de fromage frais, poser une ou deux crevettes dessus et décorer d’un brin d’aneth. Servir aussitôt.'
  ]);
};
