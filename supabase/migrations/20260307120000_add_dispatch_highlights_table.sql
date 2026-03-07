create table if not exists public.dispatch_highlights (
    id uuid primary key default gen_random_uuid(),
    eyebrow text not null,
    title text not null,
    description text not null,
    image_url text,
    link text not null,
    cta_label text not null default 'Read the report',
    published boolean not null default true,
    display_order integer default 0,
    created_at timestamptz not null default timezone('utc', now()),
    updated_at timestamptz not null default timezone('utc', now())
);

comment on table public.dispatch_highlights is 'Homepage Research/Dispatch highlights shown in the "What\'s new with us" rail.';

alter table public.dispatch_highlights enable row level security;

create or replace function public.set_dispatch_highlights_updated_at()
returns trigger as $$
begin
  new.updated_at = timezone('utc', now());
  return new;
end;
$$ language plpgsql;

drop trigger if exists set_dispatch_highlights_updated_at on public.dispatch_highlights;
create trigger set_dispatch_highlights_updated_at
before update on public.dispatch_highlights
for each row execute procedure public.set_dispatch_highlights_updated_at();

drop policy if exists "Public read dispatch highlights" on public.dispatch_highlights;
create policy "Public read dispatch highlights"
  on public.dispatch_highlights for select
  using (
    published = true or auth.role() = 'authenticated'
  );

drop policy if exists "Authenticated manage dispatch highlights" on public.dispatch_highlights;
create policy "Authenticated manage dispatch highlights"
  on public.dispatch_highlights for all
  using (auth.role() = 'authenticated')
  with check (auth.role() = 'authenticated');
