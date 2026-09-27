# Frigourmand

Application de bureau pour trouver quoi cuisiner avec ce qu'on a dans le frigo et les placards.

## Installer

Télécharger `Frigourmand-Installation-x.y.z.exe` depuis https://github.com/unyti/frigourmand/releases et le lancer.
Frigourmand se met ensuite à jour toute seule : elle vérifie au démarrage (puis toutes les 6 h) et propose de redémarrer
quand une nouvelle version est prête.

## Développer

Nécessite Node.js 22 ou plus.

```
npm install
npm start              # lance l'appli en mode développement
npm run check          # vérifie le catalogue et les recettes
npm run installeur     # fabrique l'installeur dans dist\ (sans publier)
```

### Publier une nouvelle version

Tout est automatisé par GitHub Actions (`.github/workflows/publier.yml`) :

1. Monter la version dans `package.json` (ex. 0.2.0 → 0.3.0) et compléter `CHANGELOG.md`.
2. Committer et envoyer sur `master` :

```
git commit -am "Version 0.3.0"
git push
```

Si cette version n'a pas encore de release, GitHub compile l'installeur sur une machine Windows, crée la release
`v0.3.0` et y dépose l'installeur, `latest.yml` et le `.blockmap`. Les Frigourmand installées détectent la nouvelle
version au démarrage (puis toutes les 6 h), la téléchargent et proposent de redémarrer.
Les envois qui ne changent pas la version ne publient rien.

À chaque envoi sur `master`, un second workflow (`verifier.yml`) contrôle la syntaxe et les données.

## Données

Base SQLite locale : `%APPDATA%\Frigourmand\frigourmand.sqlite` (le chemin exact est affiché dans Paramètres).
Les données de l'époque où l'appli s'appelait Popote (`%APPDATA%\Popote`) sont reprises automatiquement au premier lancement.

Le schéma est prévu pour un futur site web : chaque donnée personnelle porte un `utilisateur_id`
(« local » sur le bureau), les ingrédients et recettes du catalogue ont `proprietaire = NULL`.
Il pourra être repris tel quel sur PostgreSQL (Supabase, par exemple) avec des comptes utilisateurs.

## Structure

- `main.js`, `preload.js` : processus Electron (fenêtre, échanges avec l'interface).
- `main/base.js` : base de données (schéma, migrations, lecture, écritures en transaction, import / export).
- `main/mises-a-jour.js` : mises à jour automatiques (electron-updater, GitHub Releases).
- `donnees/` : catalogue d'ingrédients (≈ 540) et recettes de base (117), injectés dans la base à chaque nouvelle version.
- `src/` : interface (HTML, CSS, JavaScript sans framework). Elle ne parle aux données qu'à travers
  `window.frigourmandBureau` : pour le site web, il suffira de fournir la même interface au-dessus d'une API HTTP.
- `build/` : icône et script qui pose l'icône sur `Frigourmand.exe`.
- `scripts/check.js` : contrôle de cohérence des données.
