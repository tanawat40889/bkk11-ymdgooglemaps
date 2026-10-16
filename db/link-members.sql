-- Run once in Supabase SQL editor (project bkk11-tokan).
-- Lets signed-in users link/unlink a ymd_places row to a member (mt_co) from the web app.
-- Update policy already checks that the chosen member is visible to the user (members RLS).

grant insert (mt_co) on public.ymd_places to authenticated;
grant update (mt_co) on public.ymd_places to authenticated;

drop policy if exists ymd_places_insert on public.ymd_places;
create policy ymd_places_insert on public.ymd_places
  for insert to authenticated
  with check (
    mt_co is null
    or exists (select 1 from public.members m where m.mt_co = ymd_places.mt_co)
  );
