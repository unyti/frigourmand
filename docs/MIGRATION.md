# Frigourmand : nom de domaine, e-mails, base de données et site web chez PulseHeberg

Guide pas à pas pour passer de la configuration de test actuelle (Supabase gratuit, e-mails via Gmail)
à une installation « pro » : domaine **frigourmand.fr**, e-mails envoyés depuis `noreply@frigourmand.fr`,
sauvegardes automatiques, puis, si tu le souhaites, base de données hébergée chez PulseHeberg,
et enfin le site web.

Chaque étape dit **qui fait quoi** : 🧑 = toi (achats, comptes, clics dans les interfaces),
🤖 = automatique ou fait par Claude dans le dépôt.

---

## Sommaire

0. [Vue d'ensemble](#0-vue-densemble)
1. [Commander l'hébergement web et le nom de domaine](#1-commander-lhébergement-web-et-le-nom-de-domaine)
2. [Créer une adresse e-mail de contact](#2-créer-une-adresse-e-mail-de-contact)
3. [E-mails automatiques pro (codes de connexion)](#3-e-mails-automatiques-pro-codes-de-connexion)
4. [Sauvegardes automatiques de la base](#4-sauvegardes-automatiques-de-la-base)
5. [Base de données : rester chez Supabase ou déménager ?](#5-base-de-données--rester-chez-supabase-ou-déménager-)
6. [Option A : rester chez Supabase (recommandé)](#6-option-a--rester-chez-supabase-recommandé)
7. [Option B : Supabase sur un serveur PulseHeberg](#7-option-b--supabase-sur-un-serveur-pulseheberg)
8. [Mettre le site web en ligne](#8-mettre-le-site-web-en-ligne)
9. [Récapitulatif, coûts et dépannage](#9-récapitulatif-coûts-et-dépannage)

---

## 0. Vue d'ensemble

### Ce qui existe aujourd'hui

| Élément | Où | Remarque |
|---|---|---|
| Appli de bureau | GitHub `unyti/frigourmand`, publiée automatiquement | se met à jour toute seule |
| Comptes + données | Supabase (projet `towsoeuzgrkymphplkdt`), plan gratuit | se met en pause après 7 jours sans activité |
| E-mails (codes) | Gmail via SMTP | limité, pour les tests uniquement |
| Connexion Google | Google Cloud, application « en test » | seuls les testeurs déclarés peuvent l'utiliser |

### Ce qui est prêt dans le dépôt 🤖

| Fichier | Rôle |
|---|---|
| `supabase/migrations/*.sql` | toute la structure de la base (tables, règles d'accès) : rejouable sur n'importe quel serveur Supabase / PostgreSQL |
| `supabase/modeles/*.html` | modèles des e-mails (code de confirmation, code de mot de passe) |
| `scripts/migration/sauvegarder.sh` | sauvegarde comptes + données (option : chiffrée) |
| `scripts/migration/restaurer.sh` | restaure une sauvegarde dans une nouvelle base (structure comprise) |
| `scripts/migration/geler-ancienne-base.sql` | « gèle » l'ancienne base le jour du déménagement sans perdre les modifications des utilisateurs |
| `.github/workflows/sauvegarde-base.yml` | sauvegarde chiffrée chaque lundi (s'active quand tu ajoutes 2 secrets) |
| `.github/workflows/deployer-site.yml` | met le site en ligne à chaque modification (s'active quand le site et les secrets existent) |

### L'ordre conseillé

1. Domaine + hébergement web (étape 1) → e-mails (étapes 2 et 3) → sauvegardes (étape 4).
   **À faire avant d'ouvrir l'appli à d'autres personnes.**
2. Base de données : passer au plan payant Supabase au lancement (étape 6), ou déménager (étape 7) si tu veux tout chez PulseHeberg.
3. Site web (étape 8), quand il aura été développé.

---

## 1. Commander l'hébergement web et le nom de domaine

🧑 **Durée : 15 min. Coût : 3 €/mois (WEB 5), le .fr est offert avec un paiement annuel.**

L'offre **WEB 5** suffit largement pour le site (5 Go, SSL gratuit, SSH, e-mails, PostgreSQL/MySQL, Plesk).
Payée à l'année, elle inclut un nom de domaine .fr gratuit. Sinon, le .fr seul coûte 8 €/an.

1. Va sur [pulseheberg.com](https://pulseheberg.com) → **Web** → **Hébergement** → **WEB 5** → **Commander**.
2. Choisis **Enregistrer un nouveau domaine** et tape `frigourmand.fr`. Vérifie qu'il est disponible.
3. Durée : **12 mois** (pour avoir le domaine offert).
4. Crée ton compte client (ou connecte-toi), remplis les coordonnées du titulaire du domaine :
   - Titulaire : **toi** (particulier). Pour un .fr, l'Afnic masque automatiquement les coordonnées d'un particulier dans l'annuaire public.
   - Utilise une adresse e-mail que tu consultes : l'Afnic peut t'écrire pour vérifier tes coordonnées (réponds sous 15 jours, sinon le domaine est bloqué).
5. Paie. Tu reçois un e-mail avec :
   - l'accès à **l'espace client** PulseHeberg (factures, renouvellements) ;
   - l'accès au **panneau Plesk** (gestion du site, des e-mails et du DNS).
6. Dans l'espace client, active le **renouvellement automatique** du domaine et de l'hébergement
   (un domaine expiré peut être racheté par quelqu'un d'autre).

> **Vérification** : dans Plesk → **Sites Web & Domaines**, `frigourmand.fr` apparaît. Après quelques heures,
> `https://frigourmand.fr` affiche une page par défaut.

### Activer le HTTPS

Plesk → **Sites Web & Domaines** → `frigourmand.fr` → **Certificats SSL/TLS** (ou « SSL It! ») →
**Let's Encrypt** → coche **Sécuriser le domaine** et **www** → **Obtenir gratuitement**.
Active ensuite **Redirection permanente de HTTP vers HTTPS** (onglet « Paramètres d'hébergement »).

---

## 2. Créer une adresse e-mail de contact

🧑 **Durée : 5 min.** Pour recevoir les messages des utilisateurs (et pour les mentions légales du site).

1. Plesk → **Mail** → **Créer une adresse e-mail** : `contact@frigourmand.fr`, mot de passe fort.
2. Pour la lire dans Gmail ou sur ton téléphone : Plesk → Mail → l'adresse → **Paramètres du client de messagerie**
   (serveur IMAP/SMTP, ports). Sinon, webmail : `https://webmail.frigourmand.fr`.
3. Tu peux aussi faire suivre vers ta boîte habituelle : l'adresse → **Redirection** → ton adresse Gmail.

---

## 3. E-mails automatiques pro (codes de connexion)

Les codes de confirmation et de mot de passe sont envoyés par le serveur d'authentification (Supabase).
Pour qu'ils arrivent (et pas dans les spams), il faut un **service d'envoi** et un **domaine authentifié**.

On utilise **Brevo** (français, gratuit jusqu'à 300 e-mails/jour, bien au-delà de nos besoins au début).
Le serveur mail de Plesk pourrait aussi servir, mais un hébergement mutualisé limite les envois et ses adresses
IP sont partagées : c'est moins fiable pour des codes de connexion.

### 3.1 Créer le compte Brevo 🧑

1. [brevo.com](https://www.brevo.com) → **S'inscrire gratuitement** avec `contact@frigourmand.fr`.
2. Profil : particulier / projet personnel. Pas besoin de moyen de paiement pour l'offre gratuite.

### 3.2 Authentifier le domaine 🧑

1. Brevo → menu du compte → **Expéditeurs, domaines et IP dédiées** → **Domaines** → **Ajouter un domaine** → `frigourmand.fr`.
2. Choisis **authentifier le domaine moi-même**. Brevo affiche 3 ou 4 enregistrements DNS à créer
   (code Brevo, DKIM, DMARC, parfois SPF). **Laisse cette page ouverte.**
3. Dans un autre onglet : Plesk → `frigourmand.fr` → **Hébergement & DNS** → **DNS** (ou « Paramètres DNS »).
4. Pour **chaque** ligne donnée par Brevo : **Ajouter un enregistrement** → même **type** (TXT ou CNAME),
   même **nom** (attention : Plesk ajoute `.frigourmand.fr` tout seul, ne tape que la partie avant),
   même **valeur**. Valide.
5. **SPF** : il existe déjà une ligne TXT qui commence par `v=spf1` (créée par Plesk). **Ne crée pas de deuxième SPF** :
   modifie celle-ci en ajoutant `include:spf.brevo.com` avant la fin, par exemple :
   `v=spf1 +a +mx include:spf.brevo.com ~all`
6. **DMARC** si Brevo ne le fournit pas : TXT, nom `_dmarc`, valeur `v=DMARC1; p=none; rua=mailto:contact@frigourmand.fr`.
7. Plesk → **Mettre à jour**. Retourne sur Brevo → **Vérifier**. La propagation prend de quelques minutes à quelques heures.
8. Brevo → **Expéditeurs** → **Ajouter un expéditeur** : nom `Frigourmand`, adresse `noreply@frigourmand.fr`.

### 3.3 Récupérer les identifiants SMTP 🧑

Brevo → menu du compte → **SMTP et API** → onglet **SMTP** → **Générer une nouvelle clé SMTP** (nom : `Supabase`).
Note :
- Serveur : `smtp-relay.brevo.com`
- Port : `587`
- Identifiant : affiché sur la page (du type `xxxxxx@smtp-brevo.com`)
- Mot de passe : **la clé** qui vient d'être générée (elle ne sera plus affichée)

### 3.4 Brancher Supabase sur Brevo 🧑

Supabase → **Authentication** → **Emails** → **SMTP Settings** :

| Champ | Valeur |
|---|---|
| Sender email | `noreply@frigourmand.fr` |
| Sender name | `Frigourmand` |
| Host | `smtp-relay.brevo.com` |
| Port | `587` |
| Username | l'identifiant Brevo |
| Password | la clé SMTP |

**Save**. Puis **Authentication → Rate Limits** : « emails per hour » à `100` (au lieu de la valeur très basse par défaut).

> **Vérification** : dans l'appli, « Mot de passe oublié » avec ton adresse. Le code doit arriver en moins d'une minute,
> expéditeur `Frigourmand <noreply@frigourmand.fr>`. Brevo → **Statistiques** → **E-mails transactionnels** montre l'envoi.
> Tu peux ensuite supprimer le mot de passe d'application Gmail créé pour les tests
> ([myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords)).

### 3.5 Google : sortir du mode « test » 🧑

Pour que tout le monde puisse utiliser « Continuer avec Google » :
[console.cloud.google.com/auth/branding](https://console.cloud.google.com/auth/branding) → complète le logo (facultatif),
la **page d'accueil** `https://frigourmand.fr`, les **règles de confidentialité** `https://frigourmand.fr/confidentialite`
(page à créer avec le site), le **domaine autorisé** `frigourmand.fr`, puis **Audience** → **Publier l'application**.
Frigourmand ne demande que l'adresse e-mail et le nom : pas de vérification longue de la part de Google.

---

## 4. Sauvegardes automatiques de la base

🧑 **Durée : 10 min.** 🤖 Ensuite, tout est automatique.

Une sauvegarde **chiffrée** des comptes et des données est faite chaque lundi à 4 h par GitHub Actions
et gardée 30 jours. Le dépôt étant public, le fichier est chiffré : sans ta phrase secrète, il est illisible.

1. Supabase → bouton **Connect** (en haut) → **Session pooler** → copie l'adresse
   `postgresql://postgres.towsoeuzgrkymphplkdt:[YOUR-PASSWORD]@…pooler.supabase.com:5432/postgres`.
   Remplace `[YOUR-PASSWORD]` par le mot de passe de la base
   (oublié ? **Project Settings → Database → Reset database password** ; l'appli n'est pas concernée).
2. Invente une **phrase secrète** longue (ex. 5 mots au hasard). Range-la dans ton gestionnaire de mots de passe :
   **sans elle, les sauvegardes sont inutilisables**.
3. GitHub → dépôt `unyti/frigourmand` → **Settings** → **Secrets and variables** → **Actions** → **New repository secret** :
   - `SUPABASE_DB_URL` = l'adresse de l'étape 1 ;
   - `SAUVEGARDE_PHRASE` = la phrase secrète.
4. **Actions** → **Sauvegarde de la base** → **Run workflow** pour un premier essai.

> **Vérification** : le run est vert et propose un fichier `sauvegarde-N` en bas de page (un `.sql.gz.gpg`).
>
> **Restaurer ou lire une sauvegarde** (sur un PC Linux/WSL avec `gpg` et `psql`) :
> `CHIFFREMENT="ta phrase" CIBLE_DB_URL="…" ./scripts/migration/restaurer.sh frigourmand-….sql.gz.gpg`

Avec le plan payant de Supabase (étape 6), s'ajoutent des sauvegardes quotidiennes faites par Supabase ;
celles de GitHub restent une copie indépendante, utile en cas de problème de compte.

---

## 5. Base de données : rester chez Supabase ou déménager ?

La base n'est pas un simple PostgreSQL : Supabase fournit aussi **l'authentification** (comptes, codes, Google),
**l'API** utilisée par l'appli et le site, et les **règles d'accès** (chacun ne voit que ses données).
Un hébergement web mutualisé (WEB 5) ne peut pas faire tourner tout ça : pour héberger soi-même, il faut un **serveur (VPS)**.

| | A. Supabase (hébergé) | B. Supabase sur un VPS PulseHeberg |
|---|---|---|
| Coût | 0 € (gratuit) puis ~25 $/mois (Pro) | ~5 à 10 €/mois (VPS) |
| Mises à jour, sécurité | faites par Supabase | **à ta charge** (≈ 30 min/mois) |
| Sauvegardes | quotidiennes (Pro) + GitHub | GitHub (étape 4) + snapshots du VPS |
| Mise en pause | oui en gratuit (7 jours sans activité), non en Pro | non |
| Données | UE (Irlande/Francfort selon le projet) | France (Paris/Marseille) |
| Difficulté | aucune | moyenne : terminal, Docker |

**Conseil** : A pour démarrer et tant qu'il y a peu d'utilisateurs ; B si tu veux maîtriser les coûts et
l'hébergement en France, une fois l'appli stable. Rien n'empêche de faire A puis B plus tard :
les scripts sont prévus pour ça.

---

## 6. Option A : rester chez Supabase (recommandé)

🧑 **À faire au lancement public**, pas avant.

1. Supabase → **Organization** → **Billing** → **Upgrade to Pro** (≈ 25 $/mois, carte bancaire).
   Plus de mise en pause, sauvegardes quotidiennes gardées 7 jours, limites plus larges.
2. **Project Settings → Add-ons** : rien d'obligatoire. Le « Custom domain » (≈ 10 $/mois) permettrait
   d'avoir `api.frigourmand.fr` à la place de l'adresse `…supabase.co` : purement cosmétique.
3. **Authentication → URL Configuration** : **Site URL** = `https://frigourmand.fr` (quand le site existera).
4. Dans **Settings → Billing → Spend cap**, laisse le plafond de dépenses **activé** (pas de mauvaise surprise).

Rien à changer dans l'appli.

---

## 7. Option B : Supabase sur un serveur PulseHeberg

Tu auras besoin : d'un terminal (sous Windows : **Terminal** ou **PowerShell**, la commande `ssh` est intégrée),
d'une heure ou deux pour l'installation, et d'un créneau calme pour la bascule (30 min).

Le principe : on installe Supabase sur le serveur, on le teste à blanc, puis le jour J on copie les données,
on gèle l'ancienne base et on publie une version de l'appli qui pointe vers le nouveau serveur.
**Aucune modification des utilisateurs n'est perdue** : celles faites pendant la bascule restent en attente
dans l'appli et partent vers le nouveau serveur après la mise à jour.

### 7.1 Commander le serveur 🧑

1. PulseHeberg → **Cloud / VPS** → **Classic Cloud**, en prenant **au moins 4 Go de RAM** (2 Go est trop juste pour Supabase),
   40 Go de disque minimum, datacenter **Paris**.
2. Système : **Debian 12**. Ajoute ta clé SSH si l'interface le propose (voir ci-dessous), sinon tu recevras un mot de passe root.
3. Active les **snapshots** si l'option existe (sauvegarde du serveur entier).
4. Note l'**adresse IP** du serveur (ex. `203.0.113.10`).

**Créer une clé SSH** (une fois pour toutes, sur ton PC, dans PowerShell) :
```powershell
ssh-keygen -t ed25519 -C "unyti-frigourmand"
# Entrée pour l'emplacement par défaut, puis une phrase de passe
Get-Content $env:USERPROFILE\.ssh\id_ed25519.pub   # clé PUBLIQUE à coller chez PulseHeberg
```

### 7.2 Pointer `api.frigourmand.fr` vers le serveur 🧑

Plesk → `frigourmand.fr` → **DNS** → **Ajouter un enregistrement** : type **A**, nom `api`, valeur = **IP du VPS**.
(Vérification quelques minutes plus tard : `nslookup api.frigourmand.fr` renvoie l'IP.)

### 7.3 Sécuriser le serveur 🧑 (copier-coller)

```bash
ssh root@203.0.113.10          # remplace par ton IP

apt update && apt -y full-upgrade
apt -y install ufw fail2ban unattended-upgrades curl git gnupg
dpkg-reconfigure -plow unattended-upgrades   # répondre Oui : mises à jour de sécurité automatiques

# Utilisateur de travail (évite de travailler en root)
adduser unyti
usermod -aG sudo unyti
mkdir -p /home/unyti/.ssh && cp ~/.ssh/authorized_keys /home/unyti/.ssh/ 2>/dev/null; chown -R unyti:unyti /home/unyti/.ssh

# Pare-feu : seulement SSH et le web
ufw allow OpenSSH && ufw allow 80,443/tcp && ufw --force enable
```

Reconnecte-toi ensuite avec `ssh unyti@203.0.113.10`.
Quand la connexion par clé fonctionne, désactive le mot de passe SSH :
`sudo sed -i 's/^#\?PasswordAuthentication.*/PasswordAuthentication no/' /etc/ssh/sshd_config && sudo systemctl restart ssh`.

### 7.4 Installer Docker et Supabase 🧑

```bash
# Docker (dépôt officiel)
curl -fsSL https://get.docker.com | sudo sh
sudo usermod -aG docker unyti && newgrp docker

# Supabase (méthode officielle « self-hosting with Docker »)
git clone --depth 1 https://github.com/supabase/supabase
mkdir -p ~/frigourmand-api && cp -rf supabase/docker/* ~/frigourmand-api/ && cp supabase/docker/.env.example ~/frigourmand-api/.env
cd ~/frigourmand-api
```

**Générer les secrets.** Suis la section « Securing your services » de
[supabase.com/docs/guides/self-hosting/docker](https://supabase.com/docs/guides/self-hosting/docker)
(un générateur y fournit `JWT_SECRET`, `ANON_KEY` et `SERVICE_ROLE_KEY` cohérents ; selon la version,
un script `utils/generate-keys.sh` est aussi fourni dans le dossier). Puis `nano .env` et renseigne :

| Variable | Valeur |
|---|---|
| `POSTGRES_PASSWORD` | mot de passe long, **sans caractères spéciaux** gênants (`@ : / ?`) |
| `JWT_SECRET`, `ANON_KEY`, `SERVICE_ROLE_KEY` | générés ci-dessus |
| `DASHBOARD_USERNAME`, `DASHBOARD_PASSWORD` | accès au tableau de bord (Studio) |
| `SITE_URL` | `https://frigourmand.fr` |
| `ADDITIONAL_REDIRECT_URLS` | `http://127.0.0.1:53117/connexion,https://frigourmand.fr/**` |
| `API_EXTERNAL_URL` et `SUPABASE_PUBLIC_URL` | `https://api.frigourmand.fr` |
| `ENABLE_EMAIL_SIGNUP` / `ENABLE_EMAIL_AUTOCONFIRM` | `true` / `false` |
| `SMTP_ADMIN_EMAIL` | `contact@frigourmand.fr` |
| `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS` | ceux de Brevo (étape 3.3) |
| `SMTP_SENDER_NAME` | `Frigourmand` |

Range une copie de ce fichier `.env` dans ton gestionnaire de mots de passe.

**E-mails en code + connexion Google.** Dans `docker-compose.yml`, service **`auth`**, section `environment:`, ajoute :

```yaml
      GOTRUE_MAILER_TEMPLATES_CONFIRMATION: https://raw.githubusercontent.com/unyti/frigourmand/master/supabase/modeles/confirmation.html
      GOTRUE_MAILER_TEMPLATES_RECOVERY: https://raw.githubusercontent.com/unyti/frigourmand/master/supabase/modeles/recuperation.html
      GOTRUE_MAILER_SUBJECTS_CONFIRMATION: "Ton code Frigourmand : {{ .Token }}"
      GOTRUE_MAILER_SUBJECTS_RECOVERY: "Ton code pour changer de mot de passe : {{ .Token }}"
      GOTRUE_EXTERNAL_GOOGLE_ENABLED: "true"
      GOTRUE_EXTERNAL_GOOGLE_CLIENT_ID: "…client ID Google…"
      GOTRUE_EXTERNAL_GOOGLE_SECRET: "…client secret Google…"
      GOTRUE_EXTERNAL_GOOGLE_REDIRECT_URI: https://api.frigourmand.fr/auth/v1/callback
```

**Ne rien exposer directement sur Internet.** Docker contourne le pare-feu `ufw` : dans `docker-compose.yml`,
remplace chaque ligne de `ports:` de la forme `- 8000:8000` / `- 5432:5432` / `- 6543:6543` (et `8443`)
par la même précédée de `127.0.0.1:`, par exemple `- 127.0.0.1:8000:8000`. Seul le proxy HTTPS (ci-dessous) sera public.

```bash
docker compose pull
docker compose up -d
docker compose ps          # tous les services doivent être « healthy » au bout d'une minute
```

### 7.5 HTTPS avec Caddy 🧑

Caddy obtient et renouvelle tout seul les certificats Let's Encrypt.

```bash
sudo apt -y install debian-keyring debian-archive-keyring apt-transport-https
curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/gpg.key' | sudo gpg --dearmor -o /usr/share/keyrings/caddy-stable-archive-keyring.gpg
curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/debian.deb.txt' | sudo tee /etc/apt/sources.list.d/caddy-stable.list
sudo apt update && sudo apt -y install caddy

sudo tee /etc/caddy/Caddyfile >/dev/null <<'FIN'
api.frigourmand.fr {
    reverse_proxy 127.0.0.1:8000
}
FIN
sudo systemctl reload caddy
```

> **Vérification** : `https://api.frigourmand.fr/auth/v1/health` répond (cadenas valide dans le navigateur).
> Le tableau de bord (Studio) est sur `https://api.frigourmand.fr` avec `DASHBOARD_USERNAME` / `DASHBOARD_PASSWORD`.

**Google** : [console.cloud.google.com/auth/clients](https://console.cloud.google.com/auth/clients) → ton client →
**Authorized redirect URIs** → ajoute `https://api.frigourmand.fr/auth/v1/callback` (garde l'ancienne jusqu'à la fin de la bascule).

### 7.6 Répétition générale (sans rien casser) 🧑🤖

Sur le VPS :
```bash
sudo apt -y install postgresql-client gzip gnupg
git clone https://github.com/unyti/frigourmand && cd frigourmand
export SOURCE_DB_URL="adresse Session pooler de Supabase (étape 4)"
export CIBLE_DB_URL="postgresql://supabase_admin:TON_POSTGRES_PASSWORD@127.0.0.1:5432/postgres"
./scripts/migration/sauvegarder.sh ~/sauvegardes
./scripts/migration/restaurer.sh ~/sauvegardes/frigourmand-*.sql.gz
```
Le script crée la structure (tables, règles d'accès) puis copie les comptes et les données, et affiche les totaux.
Si `pg_dump` signale une différence de version (« server version mismatch »), installe le client de la même version
que Supabase (Supabase → Settings → Infrastructure) : `sudo apt -y install postgresql-client-17` depuis le dépôt
[apt.postgresql.org](https://wiki.postgresql.org/wiki/Apt).

Test avec l'appli, sans toucher à la version publiée 🤖 : demande à Claude une version de test qui pointe vers
`https://api.frigourmand.fr` (fichier `main/configuration.js`). Connecte-toi avec ton compte habituel :
**ton mot de passe fonctionne** (il est copié chiffré), tes données sont là. Essaie aussi l'inscription (e-mail de code),
« Mot de passe oublié » et Google.

Tout va bien ? La répétition peut être rejouée autant de fois que nécessaire : le script de restauration
vide la nouvelle base avant de copier.

### 7.7 Le jour J 🧑🤖 (≈ 30 min, dans cet ordre)

1. 🧑 **Dernière copie** : sur le VPS, relance les deux commandes `sauvegarder.sh` puis `restaurer.sh` (7.6).
2. 🧑 **Geler l'ancienne base** : Supabase (ancien projet) → **SQL Editor** → colle le contenu de
   `scripts/migration/geler-ancienne-base.sql` → **Run**. Puis **Authentication → Sign In / Providers** →
   désactive **Allow new users to sign up**.
   Effet : les applis encore à l'ancienne version ne peuvent plus écrire ; leurs modifications restent **en attente**
   sur les ordinateurs (message « Erreur de synchronisation »), rien n'est perdu.
3. 🤖 **Nouvelle version de l'appli** : Claude remplace dans `main/configuration.js`
   `SUPABASE_URL` par `https://api.frigourmand.fr` et `SUPABASE_CLE` par ton `ANON_KEY`, puis publie la version.
   Les applis se mettent à jour (bandeau) ; au redémarrage, chacun doit **se reconnecter une fois**
   (l'appli détecte le changement de serveur et oublie l'ancienne session ; l'adresse e-mail reste pré-remplie),
   puis les modifications en attente partent vers le nouveau serveur.
4. 🧑 **Site web** (s'il existe) : même changement d'adresse, publié automatiquement (étape 8).
5. 🧑 **Vérifie** : connexion, ajout d'un ingrédient, arrivée sur un 2e appareil, e-mail de code.
6. 🧑 **Sauvegardes GitHub** : remplace le secret `SUPABASE_DB_URL` par l'adresse du nouveau serveur
   (il faudra alors ouvrir le port 5432 à GitHub, ou plus simplement programmer la sauvegarde sur le VPS avec `cron`,
   voir 7.8).
7. 🧑 Garde l'ancien projet Supabase **en pause** 1 mois (Settings → General → Pause project), puis supprime-le.

**Retour arrière** (en cas de gros problème) : dans l'ancien projet, exécute le script de gel « à l'envers »
(`alter table archive.xxx set schema public;` pour les 6 tables), réactive les inscriptions,
et Claude republie une version avec l'ancienne adresse.

### 7.8 Entretien du serveur 🧑 (≈ 30 min par mois)

- Sauvegarde quotidienne sur le VPS : `crontab -e` puis ajoute
  `30 3 * * * cd ~/frigourmand && SOURCE_DB_URL="postgresql://supabase_admin:MDP@127.0.0.1:5432/postgres" CHIFFREMENT="phrase" ./scripts/migration/sauvegarder.sh ~/sauvegardes && find ~/sauvegardes -mtime +30 -delete`
  et récupère de temps en temps une copie sur ton PC : `scp unyti@IP:sauvegardes/* D:\Sauvegardes\`.
- Mises à jour de Supabase (tous les 1 à 2 mois) : `cd ~/frigourmand-api && docker compose pull && docker compose up -d`
  (lis d'abord les notes de version de Supabase ; fais un snapshot du VPS avant).
- Les mises à jour de sécurité de Debian sont automatiques (7.3).

---

## 8. Mettre le site web en ligne

### 8.1 Principe

Le site sera une version web de Frigourmand : les mêmes écrans, qui parlent **directement** à Supabase
(mêmes comptes, mêmes données, mêmes règles d'accès). C'est un site **statique** (HTML, CSS, JavaScript) :
pas de serveur applicatif à faire tourner, l'hébergement WEB 5 suffit.

- 🤖 Le site sera développé dans le dossier `site/` du dépôt (à demander à Claude quand tu es prêt).
- 🤖 À chaque modification, GitHub Actions le met en ligne sur PulseHeberg (`.github/workflows/deployer-site.yml`).
- 🧑 Une seule configuration à faire, ci-dessous.

### 8.2 Autoriser GitHub à déposer les fichiers (une fois) 🧑

1. Plesk → `frigourmand.fr` → **Accès FTP / SSH** (ou « Paramètres d'hébergement ») → **Accès au serveur via SSH** :
   choisis `/bin/bash`. Note l'**identifiant système** (login) et le **nom du serveur**.
   (Si l'option est absente : ticket au support PulseHeberg pour activer SSH sur l'abonnement.)
2. Crée une clé dédiée au déploiement, **sans phrase de passe**, dans PowerShell :
   ```powershell
   ssh-keygen -t ed25519 -f $env:USERPROFILE\.ssh\frigourmand-deploiement -N '""' -C "github-deploiement"
   Get-Content $env:USERPROFILE\.ssh\frigourmand-deploiement.pub   # publique → Plesk
   Get-Content $env:USERPROFILE\.ssh\frigourmand-deploiement       # privée → GitHub
   ```
3. Plesk → **Clés SSH** (extension « SSH Keys Manager ») → **Ajouter une clé** → colle la clé **publique**.
   Sans cette extension : connecte-toi une fois en SSH avec ton mot de passe et ajoute la clé dans `~/.ssh/authorized_keys`.
4. GitHub → **Settings → Secrets and variables → Actions** → crée :
   - `SSH_HOTE` : le nom du serveur (ex. `web12.pulseheberg.net`) ;
   - `SSH_UTILISATEUR` : l'identifiant système ;
   - `SSH_CLE` : tout le contenu de la clé **privée** (lignes `BEGIN` et `END` comprises) ;
   - `SSH_DOSSIER` : `httpdocs` (dossier du site dans Plesk).
5. Supprime la clé privée de ton PC si tu veux : elle n'est utile qu'à GitHub.

### 8.3 Adresses à déclarer 🧑

- Supabase → **Authentication → URL Configuration** : **Site URL** = `https://frigourmand.fr`,
  **Redirect URLs** : ajoute `https://frigourmand.fr/**` (garde `http://127.0.0.1:53117/connexion` pour l'appli de bureau).
- Google → ton client OAuth → **Authorized JavaScript origins** : `https://frigourmand.fr`.

### 8.4 Mise en ligne 🤖

Dès que `site/` existe et que les secrets sont là, chaque modification poussée sur `master` est en ligne
en une ou deux minutes (onglet **Actions** → « Déployer le site »). Pour relancer à la main : **Run workflow**.

> **Vérification** : `https://frigourmand.fr` affiche le site, la connexion fonctionne avec ton compte,
> et une modification faite sur le site apparaît dans l'appli de bureau (et inversement).

### 8.5 Pages obligatoires 🤖🧑

Avant d'ouvrir au public, le site devra contenir (Claude peut les rédiger, tu les valides) :
**mentions légales** (éditeur : toi, hébergeur : PulseHeberg), **politique de confidentialité**
(données collectées, durée, droit de suppression — l'appli propose déjà « Tout effacer »), et une page de **contact**.

---

## 9. Récapitulatif, coûts et dépannage

### Coûts mensuels indicatifs

| Poste | Option A | Option B |
|---|---|---|
| Hébergement WEB 5 + domaine .fr | 3 € | 3 € |
| Brevo (≤ 300 e-mails/jour) | 0 € | 0 € |
| Base de données | 0 € puis ~25 $ (Pro) | VPS 4 Go ≈ 6 à 10 € |
| GitHub (dépôt public, Actions) | 0 € | 0 € |
| **Total** | **3 € → ~26 €** | **≈ 10 à 13 €** |

### Liste de contrôle

- [ ] 1. WEB 5 + `frigourmand.fr` commandés, renouvellement automatique activé, HTTPS actif
- [ ] 2. `contact@frigourmand.fr` créée
- [ ] 3. Brevo : domaine authentifié, SMTP branché dans Supabase, e-mail de test reçu
- [ ] 3.5 Google : application publiée
- [ ] 4. Secrets `SUPABASE_DB_URL` et `SAUVEGARDE_PHRASE`, premier run vert
- [ ] 6. (A) Supabase Pro au lancement **ou** 7. (B) VPS installé, répétition réussie, bascule faite
- [ ] 8. Secrets SSH, adresses du site déclarées, site en ligne, pages légales

### Dépannage

| Problème | Piste |
|---|---|
| Les codes n'arrivent pas | Supabase → **Logs → Auth** ; Brevo → **Logs** ; vérifier les spams ; domaine « Authentifié » chez Brevo |
| Erreur « rate limit » à l'inscription | Authentication → Rate Limits (étape 3.4) |
| « Connexion avec Google pas activée » | fournisseur Google activé (`supabase/LISEZMOI.md`, section 3, ou 7.4) ? adresse de retour déclarée chez Google ? |
| Retour Google vers `localhost:3000` | `http://127.0.0.1:53117/connexion` absent des Redirect URLs |
| Sauvegarde GitHub en échec « version mismatch » | le workflow installe `postgresql-client-17` : adapter si Supabase passe à une version supérieure |
| Déploiement du site refusé (« Permission denied (publickey) ») | clé publique absente dans Plesk ou SSH non activé sur l'abonnement |
| Appli « Erreur de synchronisation » après la bascule | normal pour les anciennes versions : mettre à jour l'appli (bandeau) et se reconnecter |

Documentation officielle utile : [Supabase self-hosting](https://supabase.com/docs/guides/self-hosting/docker) ·
[Supabase SMTP](https://supabase.com/docs/guides/auth/auth-smtp) ·
[Documentation PulseHeberg](https://docs.pulseheberg.com/fr/) · [Brevo : authentifier un domaine](https://help.brevo.com/hc/fr).
