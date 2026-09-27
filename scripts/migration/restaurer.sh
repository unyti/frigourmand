#!/usr/bin/env bash
# Restaure une sauvegarde Frigourmand dans une nouvelle base Supabase (hébergée ou auto-hébergée).
#
# Usage :
#   CIBLE_DB_URL="postgresql://supabase_admin:MOT_DE_PASSE@127.0.0.1:5432/postgres" \
#     ./scripts/migration/restaurer.sh sauvegardes/frigourmand-AAAA-MM-JJ-HHMM.sql.gz[.gpg]
#
# 1. crée les tables et les règles d'accès (supabase/migrations/*.sql, dans l'ordre) ;
# 2. vide les tables de l'appli puis charge les comptes et les données.
# L'utilisateur de CIBLE_DB_URL doit être super-utilisateur (supabase_admin en auto-hébergé ;
# sur Supabase hébergé, l'utilisateur postgres suffit).
set -euo pipefail
: "${CIBLE_DB_URL:?Indique l’adresse de la nouvelle base dans CIBLE_DB_URL}"
SAUVEGARDE="${1:?Indique le fichier de sauvegarde}"
export PGOPTIONS="${PGOPTIONS:-} -c client_min_messages=warning"
RACINE="$(cd "$(dirname "$0")/../.." && pwd)"

echo "→ Schéma"
for f in "$RACINE"/supabase/migrations/*.sql; do
  echo "   $f"
  psql "$CIBLE_DB_URL" -v ON_ERROR_STOP=1 -q -f "$f"
done

lire() {
  case "$SAUVEGARDE" in
    *.gpg) gpg --batch --quiet --pinentry-mode loopback --passphrase "${CHIFFREMENT:?Phrase secrète dans CHIFFREMENT}" -d "$SAUVEGARDE" | gunzip ;;
    *.gz) gunzip -c "$SAUVEGARDE" ;;
    *) cat "$SAUVEGARDE" ;;
  esac
}

echo "→ Données"
{
  echo "SET session_replication_role = replica;"   # pas de déclencheurs pendant le chargement (profils déjà dans la sauvegarde)
  echo "BEGIN;"
  echo "TRUNCATE public.favoris, public.reglages, public.courses, public.garde_manger, public.recettes_perso, public.ingredients_perso, public.profils;"
  echo "DELETE FROM auth.identities; DELETE FROM auth.users;"
  lire | grep -v -E '^(SET transaction_timeout|\\restrict|\\unrestrict)'
  echo "COMMIT;"
} | psql "$CIBLE_DB_URL" -v ON_ERROR_STOP=1 -q > /dev/null

echo "→ Vérification"
psql "$CIBLE_DB_URL" -At -c "SELECT 'comptes : ' || count(*) FROM auth.users" \
  -c "SELECT 'garde-manger : ' || count(*) FROM public.garde_manger" \
  -c "SELECT 'recettes perso : ' || count(*) FROM public.recettes_perso"
echo "Restauration terminée."
