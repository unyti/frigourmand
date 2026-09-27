# Configuration de Supabase pour Frigourmand

À faire une seule fois, dans le tableau de bord du projet (https://supabase.com/dashboard).

## 1. Créer les tables

**SQL Editor → New query**, coller le contenu de `migrations/001_comptes_et_donnees.sql`, puis **Run**.
Le script peut être relancé sans risque (il ne recrée que ce qui manque).

Il crée les tables personnelles (garde-manger, courses, recettes perso, favoris, réglages, profil)
et active les règles de sécurité : chaque utilisateur ne voit et ne modifie que ses propres données.

## 2. Envoyer un code plutôt qu'un lien dans les e-mails

L'application de bureau demande un **code à 6 chiffres** (un lien ne peut pas ouvrir l'appli).
Dans **Authentication → Emails → Templates** (ou *Email Templates*) :

### « Confirm signup »

- Sujet : `Ton code Frigourmand : {{ .Token }}`
- Contenu :

```html
<h2>Bienvenue sur Frigourmand</h2>
<p>Voici ton code de confirmation :</p>
<p style="font-size: 28px; font-weight: bold; letter-spacing: 6px;">{{ .Token }}</p>
<p>Saisis-le dans l’application. Il est valable une heure.</p>
<p>Si tu n’as pas créé de compte, tu peux ignorer ce message.</p>
```

### « Reset password »

- Sujet : `Ton code pour changer de mot de passe : {{ .Token }}`
- Contenu :

```html
<h2>Nouveau mot de passe</h2>
<p>Voici ton code :</p>
<p style="font-size: 28px; font-weight: bold; letter-spacing: 6px;">{{ .Token }}</p>
<p>Saisis-le dans Frigourmand pour choisir un nouveau mot de passe. Il est valable une heure.</p>
<p>Si tu n’as rien demandé, ignore ce message : ton mot de passe ne change pas.</p>
```

## 3. Connexion avec Google

1. **Google Cloud** (https://console.cloud.google.com) : créer un projet « Frigourmand », puis
   **APIs & Services → OAuth consent screen** : type « External », nom « Frigourmand », ton adresse en contact.
2. **APIs & Services → Credentials → Create credentials → OAuth client ID** :
   - Application type : **Web application**
   - Authorized redirect URIs : `https://towsoeuzgrkymphplkdt.supabase.co/auth/v1/callback`
   - Copier le **Client ID** et le **Client secret**.
3. **Supabase → Authentication → Sign In / Providers → Google** : activer, coller le Client ID et le secret, enregistrer.
4. **Supabase → Authentication → URL Configuration → Redirect URLs** : ajouter
   `http://127.0.0.1:53117/connexion` (c'est l'adresse locale où Frigourmand reçoit la réponse de Google).

Un compte Google qui a la même adresse qu'un compte déjà créé par e-mail est relié au même compte :
on retrouve les mêmes données.

## 4. Avant d'ouvrir l'appli à d'autres personnes

Le service d'e-mails fourni par Supabase est limité (quelques e-mails par heure, et seulement vers
les adresses des membres du projet). Pour de vrais utilisateurs, brancher un service d'envoi
(Brevo, Resend, Mailjet… souvent gratuits pour de petits volumes) dans
**Authentication → Emails → SMTP Settings**.

Pour la suite (domaine, e-mails pro, sauvegardes, déménagement de la base) : [../docs/MIGRATION.md](../docs/MIGRATION.md).
