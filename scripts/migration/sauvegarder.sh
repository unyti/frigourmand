#!/usr/bin/env bash
# Sauvegarde des données Frigourmand d'une base Supabase (comptes + données des utilisateurs).
#
# Usage :
#   SOURCE_DB_URL="postgresql://postgres.xxxx:MOT_DE_PASSE@aws-0-eu-west-3.pooler.supabase.com:5432/postgres" \
#     ./scripts/migration/sauvegarder.sh [dossier]
#   (adresse : Supabase → bouton « Connect » en haut → « Session pooler »)
#
# Optionnel : CHIFFREMENT="une phrase secrète" → le fichier est chiffré (gpg), à garder hors de GitHub en clair.
#
# Le schéma (tables, règles d'accès) n'est pas sauvegardé ici : il est dans supabase/migrations/.
set -euo pipefail
: "${SOURCE_DB_URL:?Indique l’adresse de la base dans SOURCE_DB_URL}"
DOSSIER="${1:-sauvegardes}"
mkdir -p "$DOSSIER"
FICHIER="$DOSSIER/frigourmand-$(date +%Y-%m-%d-%H%M).sql.gz"

# Comptes (auth.users + auth.identities : les mots de passe restent valables, chiffrés en bcrypt)
# et toutes les tables de l'appli (schéma public).
pg_dump "$SOURCE_DB_URL" --data-only --no-owner --no-privileges \
  --table=auth.users --table=auth.identities --table='public.*' \
  | gzip -9 > "$FICHIER"

if [ -n "${CHIFFREMENT:-}" ]; then
  gpg --batch --yes --pinentry-mode loopback --passphrase "$CHIFFREMENT" --symmetric --cipher-algo AES256 -o "$FICHIER.gpg" "$FICHIER"
  rm -f "$FICHIER"
  FICHIER="$FICHIER.gpg"
fi
echo "Sauvegarde : $FICHIER ($(du -h "$FICHIER" | cut -f1))"
