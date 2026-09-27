-- Frigourmand : données personnelles des utilisateurs (catalogue d'ingrédients et recettes de base embarqués dans l'appli).
-- À exécuter une fois dans Supabase : SQL Editor → New query → coller → Run.
-- Chaque table porte utilisateur_id = auth.uid() et n'est lisible / modifiable que par son propriétaire (RLS).

-- ─── Profils ───
create table if not exists public.profils (
  id uuid primary key references auth.users(id) on delete cascade,
  nom text,
  cree_le timestamptz not null default now()
);

-- Profil créé automatiquement à l'inscription (le prénom vient des métadonnées d'inscription).
create or replace function public.creer_profil()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
begin
  insert into public.profils (id, nom)
  values (new.id, coalesce(new.raw_user_meta_data ->> 'nom', ''))
  on conflict (id) do nothing;
  return new;
end;
$$;

drop trigger if exists a_la_creation_utilisateur on auth.users;
create trigger a_la_creation_utilisateur
  after insert on auth.users
  for each row execute function public.creer_profil();

-- ─── Garde-manger ───
create table if not exists public.garde_manger (
  utilisateur_id uuid not null default auth.uid() references auth.users(id) on delete cascade,
  ingredient_id text not null,
  quantite double precision,
  unite text not null default '',
  rangement text,
  modifie_le timestamptz not null default now(),
  primary key (utilisateur_id, ingredient_id)
);

-- ─── Liste de courses ───
create table if not exists public.courses (
  utilisateur_id uuid not null default auth.uid() references auth.users(id) on delete cascade,
  cle text not null,
  position integer not null default 0,
  ingredient_id text,
  nom text,
  quantite double precision,
  unite text not null default '',
  sources jsonb not null default '[]'::jsonb,
  coche boolean not null default false,
  modifie_le timestamptz not null default now(),
  primary key (utilisateur_id, cle)
);

-- ─── Ingrédients créés par l'utilisateur ───
create table if not exists public.ingredients_perso (
  id text primary key,
  utilisateur_id uuid not null default auth.uid() references auth.users(id) on delete cascade,
  nom text not null,
  rangement text not null default 'placard',
  rayon text not null default 'div',
  unite text not null default '',
  piece_singulier text,
  piece_pluriel text,
  piece_g double precision,
  entier boolean not null default false,
  alias jsonb not null default '[]'::jsonb,
  modifie_le timestamptz not null default now()
);
create index if not exists ingredients_perso_utilisateur on public.ingredients_perso (utilisateur_id);

-- ─── Recettes personnelles ───
create table if not exists public.recettes_perso (
  id text primary key,
  utilisateur_id uuid not null default auth.uid() references auth.users(id) on delete cascade,
  nom text not null,
  cuisine text not null,
  type text not null check (type in ('Entrée', 'Plat', 'Dessert')),
  minutes integer not null check (minutes > 0),
  difficulte text not null,
  personnes integer not null check (personnes > 0),
  ingredients jsonb not null default '[]'::jsonb,
  etapes jsonb not null default '[]'::jsonb,
  cree_le timestamptz not null default now(),
  modifie_le timestamptz not null default now()
);
create index if not exists recettes_perso_utilisateur on public.recettes_perso (utilisateur_id);

-- ─── Favoris ───
create table if not exists public.favoris (
  utilisateur_id uuid not null default auth.uid() references auth.users(id) on delete cascade,
  recette_id text not null,
  ajoute_le timestamptz not null default now(),
  primary key (utilisateur_id, recette_id)
);

-- ─── Réglages ───
create table if not exists public.reglages (
  utilisateur_id uuid not null default auth.uid() references auth.users(id) on delete cascade,
  cle text not null,
  valeur jsonb not null,
  primary key (utilisateur_id, cle)
);

-- ─── Sécurité : chacun ne voit et ne modifie que ses propres lignes ───
alter table public.profils enable row level security;
alter table public.garde_manger enable row level security;
alter table public.courses enable row level security;
alter table public.ingredients_perso enable row level security;
alter table public.recettes_perso enable row level security;
alter table public.favoris enable row level security;
alter table public.reglages enable row level security;

drop policy if exists "profil : lecture" on public.profils;
create policy "profil : lecture" on public.profils for select to authenticated using ((select auth.uid()) = id);
drop policy if exists "profil : modification" on public.profils;
create policy "profil : modification" on public.profils for update to authenticated
  using ((select auth.uid()) = id) with check ((select auth.uid()) = id);

do $$
declare
  t text;
begin
  foreach t in array array['garde_manger', 'courses', 'ingredients_perso', 'recettes_perso', 'favoris', 'reglages'] loop
    execute format('drop policy if exists "proprietaire" on public.%I', t);
    execute format(
      'create policy "proprietaire" on public.%I for all to authenticated '
      'using ((select auth.uid()) = utilisateur_id) with check ((select auth.uid()) = utilisateur_id)', t);
  end loop;
end
$$;

-- ─── Droits d'accès via l'API (les règles ci-dessus filtrent les lignes) ───
grant select, update on public.profils to authenticated;
grant select, insert, update, delete on
  public.garde_manger, public.courses, public.ingredients_perso, public.recettes_perso, public.favoris, public.reglages
  to authenticated;
revoke all on
  public.profils, public.garde_manger, public.courses, public.ingredients_perso, public.recettes_perso, public.favoris, public.reglages
  from anon;
