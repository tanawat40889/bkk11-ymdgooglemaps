-- Optional: drop bkk11_contacts.district (the app now shows tokan.sh_nt via the mt_co link).
-- The app no longer reads or writes this column, so this can be run any time.
-- WARNING: unlinked rows lose their special-district text (e.g. ท่าข้าม, บางบอน, กำนันแม้น). Link them to a member first,
-- or keep a copy below. The backup table has RLS enabled with no policies, so it is not readable through the API.

create table if not exists public.ymd_district_backup as
  select id, nickname, district, mt_co from public.bkk11_contacts where district is not null;
alter table public.ymd_district_backup enable row level security;

alter table public.bkk11_contacts drop column district;

-- Dropping the column also drops bkk11_contacts_len (it referenced district); recreate it without district.
alter table public.bkk11_contacts add constraint bkk11_contacts_len check (
  char_length(nickname) between 1 and 100
  and char_length(coalesce(note, '')) <= 500
  and char_length(coalesce(google_map, '')) <= 1000
);

-- The grants for insert/update on district are dropped together with the column.
