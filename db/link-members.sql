-- Run once in Supabase SQL editor (project bkk11-tokan).
-- Lets signed-in users link/unlink a bkk11_contacts row to a member (mt_co) from the web app.
-- Update policy already checks that the chosen member is visible to the user (tokan RLS).

grant insert (mt_co) on public.bkk11_contacts to authenticated;
grant update (mt_co) on public.bkk11_contacts to authenticated;

drop policy if exists bkk11_contacts_insert on public.bkk11_contacts;
create policy bkk11_contacts_insert on public.bkk11_contacts
  for insert to authenticated
  with check (
    mt_co is null
    or exists (select 1 from public.tokan m where m.mt_co = bkk11_contacts.mt_co)
  );
