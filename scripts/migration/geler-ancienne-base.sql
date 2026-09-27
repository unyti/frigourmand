-- À exécuter sur l'ANCIENNE base, juste après la dernière sauvegarde (SQL Editor de Supabase).
-- Les tables de l'appli passent dans un schéma « archive » : les anciennes versions de Frigourmand
-- reçoivent alors une erreur « table introuvable » et GARDENT leurs modifications en file d'attente
-- (au lieu de les perdre). Elles seront envoyées au nouveau serveur dès la mise à jour de l'appli.
-- Pour annuler : même chose en sens inverse (ALTER TABLE archive.x SET SCHEMA public).
create schema if not exists archive;
alter table public.garde_manger set schema archive;
alter table public.courses set schema archive;
alter table public.ingredients_perso set schema archive;
alter table public.recettes_perso set schema archive;
alter table public.favoris set schema archive;
alter table public.reglages set schema archive;
-- Plus d'inscriptions sur l'ancien serveur : Authentication → Sign In / Providers → désactiver « Allow new users to sign up ».
