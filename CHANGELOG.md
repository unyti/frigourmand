# Journal des versions

## 0.9.0 — 27 septembre 2026

- **646 recettes** (254 nouvelles recettes simples, souvent 2 à 6 ingrédients) : melon-feta-menthe, melon au jambon cru,
  salade de pastèque, radis beurre, camembert rôti, galettes de sarrasin, bavette à l'échalote, sardines grillées,
  boudin noir aux pommes, planche de charcuterie, porridge, cookies, curry jaune…
- Presque tous les ingrédients courants du catalogue ont maintenant au moins une recette (fruits, légumes, fromages,
  viandes, poissons, pains, épicerie, surgelés). Il reste surtout des épices et des condiments, utilisés en facultatif.

## 0.8.0 — 27 septembre 2026

- **Ingrédients équivalents** : un ingrédient proche en stock remplace celui de la recette (pâtes pour des spaghetti,
  ail en poudre pour l'ail, fromage râpé pour de l'emmental, blancs de poulet pour des cuisses, crème fraîche pour
  de la crème liquide, oignon pour échalote…). La fiche indique « remplacé par … ».
- **Réalisables pour moins de personnes** : quand il ne manque que de la quantité, la recette est proposée pour le
  nombre de personnes possible (par exemple « pour 2 personnes, limité par les lardons »), dans les recettes et à l'accueil.
- **392 recettes** : 57 nouvelles recettes du quotidien avec peu d'ingrédients (œufs, pâtes, riz, lentilles, poulet,
  canard, tortillas…) dont 12 salades-repas ; les salades composées (riz, pâtes, lentilles, piémontaise, périgourdine)
  passent en plats.
- Blancs de poulet : on peut maintenant les compter à la pièce.

## 0.7.0 — 27 septembre 2026

- **Nouvelle page de présentation** : illustration, et un essai sans compte (touche des ingrédients, les recettes
  réalisables s'affichent aussitôt), les étapes illustrées et le catalogue en chiffres.
- **Nouvel accueil connecté** : une idée de recette selon le moment de la journée (« Une autre idée » pour changer),
  les recettes réalisables en cartes illustrées (filtre entrées / plats / desserts), celles où il ne manque presque rien
  avec « Ajouter à la liste », les favoris, et un ajout rapide d'ingrédients quand le garde-manger est presque vide.
- **Ingrédients exclus** (allergies, goûts) dans Paramètres : les recettes qui en contiennent sont masquées partout ;
  une recette ouverte depuis les favoris le signale.
- Légende des recettes réduite à l'essentiel ; la liste des ingrédients toujours disponibles passe en bas du garde-manger.
- Illustrations dessinées pour l'appli (aucune image externe), adaptées au mode sombre.

## 0.6.0 — 27 septembre 2026

- **Page d'accueil** : une présentation de Frigourmand avant la connexion, et un tableau de bord une fois connecté
  (garde-manger, recettes réalisables, presque prêtes, favoris, derniers ajouts). Le logo ramène à l'accueil.
- **Manque partiel ou total** : en orange quand tu en as mais pas assez (1 œuf sur 4), en rouge quand tu n'en as pas du tout.
- **Nouveau classement** : dans chaque groupe, une recette où il manque de la ciboulette passe avant une recette où il
  manque les œufs. L'importance d'un ingrédient dépend de son rôle (viande, poisson, œufs, ingrédient du titre),
  de sa part dans la recette, et du fait qu'il manque en partie ou en totalité.
- **335 recettes** (94 nouvelles, surtout des entrées et des desserts) et **692 ingrédients** (154 nouveaux, dont les
  aiguillettes de canard), avec de nombreux autres noms reconnus à la saisie.
- **Toutes les recettes relues** : temps total réaliste (repos et réfrigération compris), puissance du feu,
  températures, quantités et listes d'ingrédients corrigées.
- « Pâté » n'est plus confondu avec « pâtes ».
- Préparation du déménagement de la base : guide `docs/MIGRATION.md`, scripts de sauvegarde et de restauration,
  sauvegarde automatique chiffrée, mise en ligne automatique du futur site. L'appli garde les modifications en attente
  si le serveur change ou si la session expire.

## 0.5.0 — 27 septembre 2026

- **Connexion avec Google** (« Continuer avec Google ») sur les écrans de connexion et de création de compte.
- **Rester connecté sur cet ordinateur** : case cochée par défaut ; décochée, il faudra se reconnecter au prochain lancement.
- L’adresse e-mail de la dernière connexion est pré-remplie.
- L’écran de connexion garde le thème (clair ou sombre) choisi sur cet ordinateur.
- Paramètres : les sections sont rangées en deux colonnes sans trou (« Recettes » remonte sous « Mon compte »).

## 0.4.0 — 27 septembre 2026

- **Comptes obligatoires** : inscription avec confirmation par code reçu par e-mail, connexion, mot de passe oublié
  (code + nouveau mot de passe), changement de mot de passe et déconnexion dans Paramètres.
  La session reste ouverte d’un lancement à l’autre, et elle est chiffrée sur le disque.
- **Synchronisation** avec le serveur (Supabase) : garde-manger, liste de courses, recettes perso, favoris et réglages
  sont enregistrés sur le compte. L’appli fonctionne aussi sans Internet : les modifications sont gardées
  et envoyées au retour de la connexion. Les changements faits ailleurs arrivent au démarrage,
  au retour sur la fenêtre et toutes les 2 minutes. Indicateur d’état en haut à droite.
- Les données saisies avant la création du compte sont reprises par le premier compte ouvert.
- **Bandeau de mise à jour** en haut de la fenêtre quand une nouvelle version est prête.
- Garde-manger : les suggestions d’ingrédients ne recouvrent plus le formulaire.

## 0.3.0 — 27 septembre 2026

- **Pages plus compactes** : moins d’espace perdu, textes et lignes resserrés. Le garde-manger passe sur deux colonnes :
  le formulaire d’ajout à gauche (avec le nombre de recettes réalisables), les rangements à droite.
- **Liste de courses** : « Tout cocher / Tout décocher » et « Supprimer les articles cochés » (avec annulation).
- **Favoris depuis la liste des recettes** : bouton étoile à côté de « Ajouter à la liste », dans toutes les sections.
- **241 recettes** au lieu de 117 : coq au vin, blanquette, tarte Tatin, crème brûlée, fondue, raclette, aligot,
  osso buco, biryani, pho, bulgogi, mafé, rougail, cheesecake, brownies… et bien d’autres.
- **Trois types seulement** : Entrée, Plat, Dessert. Les soupes et les accompagnements sont désormais des plats.
- Exemples d’ingrédients plus courants dans les champs de saisie.

## 0.2.0 — 27 septembre 2026

- **Nouveau nom : Frigourmand** (anciennement Popote). Les données déjà saisies sont reprises automatiquement.
- **Base de données SQLite** à la place du fichier JSON, avec un schéma prêt pour un futur site web avec comptes.
  Reprise automatique des données de la 0.1.
- **Installeur Windows** avec raccourcis bureau et menu Démarrer, choix du dossier d'installation.
- **Mises à jour automatiques** depuis GitHub (dépôt `unyti/frigourmand`), état et bouton dans Paramètres.
- **Catalogue d'ingrédients** passé de 160 à environ 540 : fruits (melon, pastèque…), légumes, viandes, poissons,
  fromages, épicerie, sauces (tabasco, sriracha, worcestershire…), épices, surgelés, boulangerie. Nombreux alias.
- **Nouvelle recherche d'ingrédient** : 8 suggestions au maximum, triées par pertinence, navigation au clavier
  (flèches, Entrée, Échap), annoncée aux lecteurs d'écran ; option « Ajouter comme nouvel ingrédient ».
  Utilisée dans le garde-manger, la liste de courses (y compris après une quantité : « 500 g de tagli… ») et l'éditeur.
- **Favoris** : étoile sur chaque recette, filtre « Mes favoris », section Favoris dans « Mes recettes ».
- Import : aperçu du contenu du fichier avant remplacement.
- Une seule fenêtre Frigourmand à la fois.

## 0.1.0 — 27 septembre 2026

Première version.
