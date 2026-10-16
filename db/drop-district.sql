-- Optional: drop ymd_places.district (the app now shows members.sh_nt via the mt_co link).
-- The app no longer reads or writes this column, so this can be run any time.
-- WARNING: unlinked rows lose their special-district text (e.g. ท่าข้าม, บางบอน, กำนันแม้น). Link them to a member first,
-- or keep a copy below. The backup table has RLS enabled with no policies, so it is not readable through the API.

create table if not exists public.ymd_district_backup as
  select id, nickname, district, mt_co from public.ymd_places where district is not null;
alter table public.ymd_district_backup enable row level security;

alter table public.ymd_places drop column district;

-- Dropping the column also drops ymd_places_len (it referenced district); recreate it without district.
alter table public.ymd_places add constraint ymd_places_len check (
  char_length(nickname) between 1 and 100
  and char_length(coalesce(note, '')) <= 500
  and char_length(coalesce(google_map, '')) <= 1000
);

-- The grants for insert/update on district are dropped together with the column.
