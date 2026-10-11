/* Paramètres du serveur Supabase.
   La clé « publishable » est publique par nature : elle permet seulement de parler à l'API,
   les règles d'accès (RLS) côté base empêchent chacun de voir les données des autres. */
'use strict';

module.exports = {
  // Comptes et synchronisation : désactivés tant qu'il n'y a pas de serveur.
  // L'appli fonctionne alors sans connexion, avec les données enregistrées sur cet ordinateur.
  // Pour les réactiver : true, puis vérifier SUPABASE_URL et SUPABASE_CLE.
  COMPTES: false,
  SUPABASE_URL: 'https://towsoeuzgrkymphplkdt.supabase.co',
  SUPABASE_CLE: 'sb_publishable_ZwhSWGTdXHnn7qlI0Nk2ow_D0GlLV9T'
};
