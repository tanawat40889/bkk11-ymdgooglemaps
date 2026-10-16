const FAV_KEY = "ymd_favorites";
const AUTH_KEY = "tokan_session_v1";
const CACHE_KEY = "ymd_places_cache";
const VIS_KEY = "ymd_visible_cols";
const TOKAN_URL = "https://tanawat40889.github.io/bkk11-tokan/";
const CUSTOM_KEY = "ymd_custom_places";
const SEED_KEY = "ymd_custom_seeded_v1";
const SEED_NAMES_KEY = "ymd_custom_seeded_names";
const SUPABASE_URL = "https://cqdzfsucpivsgznfpjxl.supabase.co";
const SUPABASE_KEY = "sb_publishable_XkUBjE3M7HUiuDv7YwsbKA_mSu0ToEc";

const DEFAULT_PLACES = [
  {
    name: "สมาคมสร้างคุณค่าในประเทศไทย สำนักงานใหญ่",
    googleMap: "https://www.google.com/maps/place/%E0%B8%AA%E0%B8%A1%E0%B8%B2%E0%B8%84%E0%B8%A1%E0%B8%AA%E0%B8%A3%E0%B9%89%E0%B8%B2%E0%B8%87%E0%B8%84%E0%B8%B8%E0%B8%93%E0%B8%84%E0%B9%88%E0%B8%B2%E0%B9%83%E0%B8%99%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B9%80%E0%B8%97%E0%B8%A8%E0%B9%84%E0%B8%97%E0%B8%A2+%E0%B8%AA%E0%B8%B3%E0%B8%99%E0%B8%B1%E0%B8%81%E0%B8%87%E0%B8%B2%E0%B8%99%E0%B9%83%E0%B8%AB%E0%B8%8D%E0%B9%88/@13.9049052,100.5052611,17z/data=!3m1!4b1!4m6!3m5!1s0x30e284ed1b2cab13:0x4124d6c438427939!8m2!3d13.9049052!4d100.5052611!16s%2Fg%2F1hm1z3b7h",
    note: "102 ถ.ติวานนท์ ต.ปากเกร็ด อ.ปากเกร็ด นนทบุรี",
  },
  {
    name: "สมาคมสร้างคุณค่าในประเทศไทย สาขาธนบุรี",
    googleMap: "https://www.google.com/maps/place/%E0%B8%AA%E0%B8%A1%E0%B8%B2%E0%B8%84%E0%B8%A1%E0%B8%AA%E0%B8%A3%E0%B9%89%E0%B8%B2%E0%B8%87%E0%B8%84%E0%B8%B8%E0%B8%93%E0%B8%84%E0%B9%88%E0%B8%B2%E0%B9%83%E0%B8%99%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B9%80%E0%B8%97%E0%B8%A8%E0%B9%84%E0%B8%97%E0%B8%A2+%E0%B8%AA%E0%B8%B2%E0%B8%82%E0%B8%B2%E0%B8%98%E0%B8%99%E0%B8%9A%E0%B8%B8%E0%B8%A3%E0%B8%B5/@13.7043452,100.4847768,17z/data=!4m6!3m5!1s0x30e299aee0cb7eab:0x489ca1c335f4cbd1!8m2!3d13.7043452!4d100.4869655!16s%2Fg%2F11swpp6871",
    note: "192/1 ถนนมไหสวรรย์ แขวงสำเหร่ เขตธนบุรี กรุงเทพฯ",
  },
  {
    name: "Big C ท่าข้าม",
    googleMap: "https://www.google.com/maps/place/%E0%B8%9A%E0%B8%B4%E0%B9%8A%E0%B8%81%E0%B8%8B%E0%B8%B5+%E0%B8%8B%E0%B8%B9%E0%B9%80%E0%B8%9B%E0%B8%AD%E0%B8%A3%E0%B9%8C%E0%B9%80%E0%B8%8B%E0%B9%87%E0%B8%99%E0%B9%80%E0%B8%95%E0%B8%AD%E0%B8%A3%E0%B9%8C+%E0%B8%9E%E0%B8%A3%E0%B8%B0%E0%B8%A3%E0%B8%B2%E0%B8%A1+2+%E0%B8%AA%E0%B8%B2%E0%B8%82%E0%B8%B2+1/@13.651897,100.3955262,13z/data=!4m6!3m5!1s0x30e2bce442214451:0x499df6e88afaaf3!8m2!3d13.6615153!4d100.4405341!16s%2Fg%2F1thpt8ng",
    note: "127 ถ.พระราม 2 แขวงแสมดำ เขตบางขุนเทียน (บิ๊กซี ซูเปอร์เซ็นเตอร์ พระราม 2 สาขา 1)",
  },
  {
    name: "คริสต้า BKK11",
    googleMap: "https://maps.app.goo.gl/T4tgV9idLhis14Q39?g_st=ipc",
    note: null,
  },
  {
    name: "คริสต้า BKK7",
    googleMap: "https://maps.app.goo.gl/dJm7BSKhmowGSjtBA?g_st=ipc",
    note: null,
  },
];

const state = {
  people: [],
  favorites: new Set(loadFavorites()),
  query: "",
  status: "Active",
  mainTab: "ymd",
  customPlaces: loadCustomPlaces(),
  columns: [],
  visible: loadVisible(),
};

const BUILTIN_COLS = [
  { key: "status", label: "สถานะ" },
  { key: "district", label: "เขต" },
  { key: "note", label: "โน้ต" },
  { key: "phone", label: "เบอร์โทร" },
];
const STATUSES = ["Active", "Visiting", "Passive"];
let currentSession = null;
let editingId = null;
let editLink = { mtCo: null, name: "" };
let editLinkOrig = null;
let linkTimer = null;
let linkSeq = 0;

const els = {
  search: document.getElementById("search"),
  clearSearch: document.getElementById("clearSearch"),
  chips: document.querySelectorAll(".chip"),
  favSection: document.getElementById("favSection"),
  favList: document.getElementById("favList"),
  allList: document.getElementById("allList"),
  allTitle: document.getElementById("allTitle"),
  emptyState: document.getElementById("emptyState"),
  lockScreen: document.getElementById("lockScreen"),
  lockForm: document.getElementById("lockForm"),
  lockName: document.getElementById("lockName"),
  lockCode: document.getElementById("lockCode"),
  lockSubmit: document.getElementById("lockSubmit"),
  lockError: document.getElementById("lockError"),
  lockBtn: document.getElementById("lockBtn"),
  app: document.getElementById("app"),
  mainTabs: document.getElementById("mainTabs"),
  ymdSection: document.getElementById("ymdSection"),
  ymdControls: document.getElementById("ymdControls"),
  statusFilters: document.getElementById("statusFilters"),
  notesSection: document.getElementById("notesSection"),
  noteForm: document.getElementById("noteForm"),
  noteName: document.getElementById("noteName"),
  noteMap: document.getElementById("noteMap"),
  noteText: document.getElementById("noteText"),
  notesList: document.getElementById("notesList"),
  notesEmpty: document.getElementById("notesEmpty"),
  fab: document.getElementById("filterFab"),
  fabDot: document.getElementById("fabDot"),
  filterDialog: document.getElementById("filterDialog"),
  filterClose: document.getElementById("filterClose"),
  addBtn: document.getElementById("addPlaceBtn"),
  colsBtn: document.getElementById("colsBtn"),
  editDialog: document.getElementById("editDialog"),
  editForm: document.getElementById("editForm"),
  editTitle: document.getElementById("editTitle"),
  editFields: document.getElementById("editFields"),
  editError: document.getElementById("editError"),
  editSave: document.getElementById("editSave"),
  editDelete: document.getElementById("editDelete"),
  editCancel: document.getElementById("editCancel"),
  colsDialog: document.getElementById("colsDialog"),
  colsList: document.getElementById("colsList"),
  colForm: document.getElementById("colForm"),
  colLabel: document.getElementById("colLabel"),
  colType: document.getElementById("colType"),
  colError: document.getElementById("colError"),
  colsClose: document.getElementById("colsClose"),
};

// ---------- favorites ----------

function loadFavorites() {
  try {
    return JSON.parse(localStorage.getItem(FAV_KEY) || "[]");
  } catch {
    return [];
  }
}

function saveFavorites() {
  localStorage.setItem(FAV_KEY, JSON.stringify([...state.favorites]));
}

function personId(p) {
  return `id:${p.id}`;
}

function legacyPersonId(p) {
  return `${p.nickname}|${p.googleMap || ""}|${p.note || ""}`;
}

function migrateFavorites(people) {
  let changed = false;
  for (const p of people) {
    const old = legacyPersonId(p);
    if (state.favorites.has(old)) {
      state.favorites.delete(old);
      state.favorites.add(personId(p));
      changed = true;
    }
  }
  if (changed) saveFavorites();
}

function loadVisible() {
  try {
    return JSON.parse(localStorage.getItem(VIS_KEY)) || {};
  } catch {
    return {};
  }
}

function isVisible(key) {
  return state.visible[key] !== false;
}

// ---------- custom places (user notes) ----------

function loadCustomPlaces() {
  try {
    return JSON.parse(localStorage.getItem(CUSTOM_KEY) || "[]");
  } catch {
    return [];
  }
}

function saveCustomPlaces() {
  localStorage.setItem(CUSTOM_KEY, JSON.stringify(state.customPlaces));
}

function makeId() {
  return crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random().toString(36).slice(2)}`;
}

function addCustomPlace(name, googleMap, note) {
  state.customPlaces.unshift({ id: makeId(), name, googleMap, note, createdAt: Date.now() });
  saveCustomPlaces();
  renderNotes();
}

function deleteCustomPlace(id) {
  state.customPlaces = state.customPlaces.filter((p) => p.id !== id);
  saveCustomPlaces();
  renderNotes();
}

function seedDefaultPlaces() {
  let seeded;
  try {
    seeded = new Set(JSON.parse(localStorage.getItem(SEED_NAMES_KEY) || "null") || []);
  } catch {
    seeded = new Set();
  }
  if (localStorage.getItem(SEED_KEY)) {
    DEFAULT_PLACES.slice(0, 3).forEach((dp) => seeded.add(dp.name));
  }
  const existingNames = new Set(state.customPlaces.map((p) => p.name));
  let added = false;
  for (const dp of DEFAULT_PLACES) {
    if (seeded.has(dp.name)) continue;
    if (!existingNames.has(dp.name)) {
      state.customPlaces.push({ id: makeId(), name: dp.name, googleMap: dp.googleMap, note: dp.note || null, createdAt: Date.now() });
      added = true;
    }
    seeded.add(dp.name);
  }
  if (added) saveCustomPlaces();
  localStorage.setItem(SEED_NAMES_KEY, JSON.stringify([...seeded]));
}

// ---------- auth + data (Supabase) ----------

async function refreshSession(s) {
  const res = await fetch(`${SUPABASE_URL}/auth/v1/token?grant_type=refresh_token`, {
    method: "POST",
    headers: { apikey: SUPABASE_KEY, "Content-Type": "application/json" },
    body: JSON.stringify({ refresh_token: s.refresh_token }),
  });
  if (!res.ok) return null;
  const d = await res.json();
  return { ...s, access_token: d.access_token, refresh_token: d.refresh_token, expires_at: d.expires_at };
}

function loadSession() {
  try { return JSON.parse(localStorage.getItem(AUTH_KEY)); } catch { return null; }
}
function saveSession(s) { localStorage.setItem(AUTH_KEY, JSON.stringify(s)); }
function clearSession() {
  localStorage.removeItem(AUTH_KEY);
  localStorage.removeItem(CACHE_KEY);
}

function mapRow(r) {
  return {
    id: r.id,
    mtCo: r.mt_co,
    nickname: r.nickname,
    googleMap: r.google_map,
    status: r.status,
    khet: r.members ? r.members.sh_nt : null,
    phone: r.phone,
    note: r.note,
    extra: r.extra || {},
  };
}

async function api(method, path, body, retried = false) {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/${path}`, {
    method,
    headers: {
      apikey: SUPABASE_KEY,
      Authorization: `Bearer ${currentSession.access_token}`,
      "Content-Type": "application/json",
      Prefer: "return=representation",
    },
    body: body === undefined ? undefined : JSON.stringify(body),
  });
  if (res.status === 401 && !retried) {
    const next = await refreshSession(currentSession).catch(() => null);
    if (next) {
      currentSession = next;
      saveSession(next);
      return api(method, path, body, true);
    }
  }
  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw Object.assign(new Error(err.message || `HTTP ${res.status}`), { status: res.status });
  }
  return res.json();
}

async function fetchAll() {
  const [rows, cols] = await Promise.all([
    api("GET", "ymd_places?select=*,members(sh_nt)&order=nickname"),
    api("GET", "ymd_columns?select=*&order=sort,id"),
  ]);
  return { people: rows.map(mapRow), columns: cols };
}

function saveCache() {
  try {
    localStorage.setItem(CACHE_KEY, JSON.stringify({ people: state.people, columns: state.columns }));
  } catch { /* storage full */ }
}

function sortPeople() {
  state.people.sort((a, b) => a.nickname.localeCompare(b.nickname, "th"));
}

function showApp(people, columns) {
  state.people = people;
  state.columns = columns;
  sortPeople();
  migrateFavorites(state.people);
  els.lockScreen.hidden = true;
  els.app.hidden = false;
  render();
}

function showLock(msg = "") {
  els.app.hidden = true;
  els.lockScreen.hidden = false;
  els.lockCode.value = "";
  els.lockError.textContent = msg;
  els.lockError.hidden = !msg;
  (els.lockName.value ? els.lockCode : els.lockName).focus();
}

function lockApp() {
  clearSession();
  currentSession = null;
  state.people = [];
  state.columns = [];
  showLock();
}

function readCache() {
  try {
    const c = JSON.parse(localStorage.getItem(CACHE_KEY));
    if (c && Array.isArray(c.people) && c.people.length && c.people[0].id !== undefined) return c;
  } catch { /* ignore */ }
  return null;
}

async function start(s) {
  currentSession = s;
  let data;
  try {
    data = await fetchAll();
  } catch (e) {
    if (e.status === undefined) {
      const c = readCache();
      if (c) return showApp(c.people, c.columns || []);
      return showLock("เชื่อมต่อไม่ได้ ลองใหม่อีกครั้ง");
    }
    clearSession();
    return showLock(e.status === 401 ? "หมดเวลาเข้าสู่ระบบ กรุณาเข้าใหม่" : "โหลดข้อมูลไม่สำเร็จ");
  }
  if (!data.people.length) {
    clearSession();
    return showLock("ไม่มีสิทธิ์ดูข้อมูล");
  }
  showApp(data.people, data.columns);
  saveCache();
}

function attachLockEvents() {
  els.lockForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    els.lockSubmit.disabled = true;
    els.lockError.hidden = true;
    try {
      const res = await fetch(`${SUPABASE_URL}/functions/v1/login`, {
        method: "POST",
        headers: { apikey: SUPABASE_KEY, "Content-Type": "application/json" },
        body: JSON.stringify({ name: els.lockName.value, code: els.lockCode.value }),
      });
      const d = await res.json().catch(() => ({}));
      if (!res.ok || !d.session) {
        showLock(d.error && d.error !== "server" ? d.error : "เข้าสู่ระบบไม่สำเร็จ ลองใหม่อีกครั้ง");
        return;
      }
      const s = { ...d.session, profile: d.profile };
      saveSession(s);
      els.lockCode.value = "";
      await start(s);
    } catch {
      showLock("เชื่อมต่อไม่ได้ ลองใหม่อีกครั้ง");
    } finally {
      els.lockSubmit.disabled = false;
    }
  });

  els.lockBtn.addEventListener("click", lockApp);
}

// ---------- render ----------

function normalize(s) {
  return (s || "").toLowerCase().trim();
}

function matchesQuery(p, q) {
  if (!q) return true;
  const extraText = Object.values(p.extra || {}).filter((v) => typeof v === "string").join(" ");
  const hay = normalize(p.nickname + " " + (p.note || "") + " " + (p.khet || "") + " " + extraText);
  return hay.includes(q);
}

function matchesStatus(p, status) {
  if (status === "all") return true;
  return p.status === status;
}

function render() {
  const q = normalize(state.query);
  const filtered = state.people.filter(
    (p) => matchesQuery(p, q) && matchesStatus(p, state.status)
  );

  const favs = filtered.filter((p) => state.favorites.has(personId(p)));
  const rest = filtered.filter((p) => !state.favorites.has(personId(p)));

  els.favSection.hidden = favs.length === 0;
  els.favList.innerHTML = favs.map(cardHtml).join("");

  els.allTitle.textContent = state.query || state.status !== "all"
    ? `ผลการค้นหา (${filtered.length})`
    : `รายชื่อทั้งหมด (${filtered.length})`;
  els.allList.innerHTML = rest.map(cardHtml).join("");

  els.emptyState.hidden = filtered.length !== 0;
  els.fabDot.hidden = !(state.query || state.status !== "Active");
}

function safeUrl(u) {
  return /^https?:\/\//i.test(u || "") ? u : null;
}

function metaParts(p) {
  const parts = [];
  if (isVisible("note") && p.note) parts.push(p.note);
  if (isVisible("district") && p.khet) parts.push(p.khet);
  for (const c of state.columns) {
    if (!isVisible(c.key)) continue;
    const v = (p.extra || {})[c.key];
    if (c.type === "checkbox") {
      if (v === true) parts.push(c.label);
    } else if (v !== undefined && v !== null && v !== "") {
      parts.push(`${c.label}: ${v}`);
    }
  }
  return parts;
}

function cardHtml(p) {
  const id = personId(p);
  const isFav = state.favorites.has(id);
  const badge = p.status && isVisible("status") && STATUSES.includes(p.status)
    ? `<span class="badge ${p.status}">${p.status}</span>` : "";
  const parts = metaParts(p);
  const meta = parts.length ? `<div class="card-meta">${escapeHtml(parts.join(" · "))}</div>` : "";
  const mapUrl = safeUrl(p.googleMap);
  const mapBtn = mapUrl
    ? `<a class="map-btn" href="${escapeAttr(mapUrl)}" target="_blank" rel="noopener noreferrer" aria-label="เปิด Google Maps">📍</a>`
    : '<span class="map-btn disabled" role="link" aria-disabled="true" aria-label="ไม่มีลิงก์ Google Maps">📍</span>';
  const phone = isVisible("phone") && /^[0-9+() -]{1,20}$/.test(p.phone || "") ? p.phone : null;
  const callBtn = phone
    ? `<a class="call-btn" href="tel:${escapeAttr(phone)}" aria-label="โทร ${escapeAttr(p.nickname)}">📞</a>`
    : '<span class="call-btn disabled" role="link" aria-disabled="true" aria-label="ไม่มีเบอร์โทร">📞</span>';

  const mainInner = `
        <div class="card-name-row">
          <span class="card-name">${escapeHtml(p.nickname)}</span>
          ${badge}
          ${p.mtCo ? '<span class="tokan-mark" aria-hidden="true">👤›</span>' : ""}
        </div>
        ${meta}`;
  const main = p.mtCo
    ? `<a class="card-main card-link" href="${TOKAN_URL}?m=${encodeURIComponent(p.mtCo)}" target="_blank" rel="noopener" aria-label="เปิดข้อมูล ${escapeAttr(p.nickname)} ใน Tokan">${mainInner}</a>`
    : `<div class="card-main">${mainInner}</div>`;

  return `
    <li class="card" data-id="${escapeAttr(id)}">
      <button class="star-btn ${isFav ? "on" : ""}" data-action="fav" aria-label="รายการโปรด">${isFav ? "★" : "☆"}</button>
      ${main}
      <div class="card-actions">
        <button class="edit-btn" data-action="edit" aria-label="แก้ไข ${escapeAttr(p.nickname)}">✏️</button>
        ${callBtn}
        ${mapBtn}
      </div>
    </li>
  `;
}

function renderNotes() {
  els.notesList.innerHTML = state.customPlaces.map(noteCardHtml).join("");
  els.notesEmpty.hidden = state.customPlaces.length !== 0;
}

function noteCardHtml(p) {
  const meta = p.note ? `<div class="card-meta">${escapeHtml(p.note)}</div>` : "";
  return `
    <li class="swipe-row" data-note-id="${escapeAttr(p.id)}">
      <div class="swipe-reveal">
        <button class="swipe-delete-btn" data-action="delete-note" aria-label="ลบสถานที่นี้">🗑️</button>
      </div>
      <div class="card swipe-fg">
        <div class="card-main">
          <div class="card-name-row">
            <span class="card-name">${escapeHtml(p.name)}</span>
          </div>
          ${meta}
        </div>
        <div class="card-actions">
          <a class="map-btn" href="${escapeAttr(p.googleMap)}" target="_blank" rel="noopener noreferrer" aria-label="เปิด Google Maps">📍</a>
        </div>
      </div>
    </li>
  `;
}

const SWIPE_REVEAL = 72;
const SWIPE_OPEN_THRESHOLD = 28;

function closeAllSwipeRows(exceptRow) {
  document.querySelectorAll(".swipe-row.open").forEach((row) => {
    if (row === exceptRow) return;
    row.classList.remove("open");
    const fg = row.querySelector(".swipe-fg");
    if (fg) fg.style.transform = "";
  });
}

function attachSwipeToDelete() {
  let drag = null;
  let suppressNextClick = false;

  els.notesList.addEventListener("pointerdown", (e) => {
    const fg = e.target.closest(".swipe-fg");
    if (!fg) return;
    const row = fg.closest(".swipe-row");
    closeAllSwipeRows(row);
    drag = {
      row, fg,
      startX: e.clientX,
      dx: 0,
      pointerId: e.pointerId,
      wasOpen: row.classList.contains("open"),
      dragging: false,
    };
  });

  els.notesList.addEventListener("pointermove", (e) => {
    if (!drag || e.pointerId !== drag.pointerId) return;
    drag.dx = e.clientX - drag.startX;
    if (!drag.dragging && Math.abs(drag.dx) > 6) {
      drag.dragging = true;
      closeAllSwipeRows(drag.row);
      drag.fg.style.transition = "none";
    }
    if (!drag.dragging) return;
    const base = drag.wasOpen ? -SWIPE_REVEAL : 0;
    const tx = Math.max(-SWIPE_REVEAL, Math.min(0, base + drag.dx));
    drag.fg.style.transform = `translateX(${tx}px)`;
  });

  function endDrag(e) {
    if (!drag || (e.pointerId !== undefined && e.pointerId !== drag.pointerId)) return;
    const { row, fg, dragging, wasOpen, dx } = drag;
    fg.style.transition = "";
    if (dragging) {
      const base = wasOpen ? -SWIPE_REVEAL : 0;
      const finalX = Math.max(-SWIPE_REVEAL, Math.min(0, base + dx));
      const shouldOpen = finalX <= -SWIPE_OPEN_THRESHOLD;
      row.classList.toggle("open", shouldOpen);
      fg.style.transform = shouldOpen ? `translateX(-${SWIPE_REVEAL}px)` : "";
      suppressNextClick = true;
    } else if (wasOpen) {
      row.classList.remove("open");
      fg.style.transform = "";
      suppressNextClick = true;
    }
    drag = null;
  }

  els.notesList.addEventListener("pointerup", endDrag);
  els.notesList.addEventListener("pointercancel", endDrag);

  els.notesList.addEventListener("click", (e) => {
    if (suppressNextClick) {
      suppressNextClick = false;
      e.preventDefault();
      e.stopPropagation();
    }
  }, true);

  document.addEventListener("pointerdown", (e) => {
    if (!e.target.closest(".swipe-row")) closeAllSwipeRows(null);
  });
}

// ---------- edit rows + manage columns ----------

const PHONE_RE = /^[0-9+() -]{1,20}$/;

function describeError(e) {
  if (e.status === undefined) return "บันทึกไม่ได้ ตรวจสอบอินเทอร์เน็ตแล้วลองใหม่";
  if (e.status === 401 || e.status === 403) return "ไม่มีสิทธิ์ทำรายการนี้ ลองเข้าสู่ระบบใหม่";
  return `บันทึกไม่สำเร็จ: ${e.message}`;
}

function openEditor(p) {
  const d = p || { nickname: "", googleMap: "", status: "", phone: "", note: "", extra: {} };
  editingId = p ? p.id : null;
  els.editTitle.textContent = p ? "แก้ไขรายชื่อ" : "เพิ่มรายชื่อ";
  const custom = state.columns.map((c) => {
    const v = (d.extra || {})[c.key];
    const name = escapeAttr(c.key);
    if (c.type === "checkbox") {
      return `<label class="fld fld-check"><input type="checkbox" name="${name}" ${v === true ? "checked" : ""}> ${escapeHtml(c.label)}</label>`;
    }
    const type = c.type === "number" ? "number" : "text";
    const step = c.type === "number" ? ' step="any"' : ' maxlength="200"';
    const val = v === undefined || v === null ? "" : escapeAttr(v);
    return `<label class="fld">${escapeHtml(c.label)}<input name="${name}" type="${type}"${step} value="${val}"></label>`;
  }).join("");
  const opts = ['<option value="">-</option>']
    .concat(STATUSES.map((st) => `<option value="${st}" ${d.status === st ? "selected" : ""}>${st}</option>`)).join("");
  els.editFields.innerHTML = `
    <label class="fld">ชื่อเล่น *<input name="nickname" required maxlength="100" value="${escapeAttr(d.nickname)}"></label>
    <label class="fld">ลิงก์ Google Maps<input name="google_map" type="url" inputmode="url" maxlength="1000" value="${escapeAttr(d.googleMap || "")}"></label>
    <label class="fld">สถานะ<select name="status">${opts}</select></label>
    <label class="fld">เบอร์โทร<input name="phone" type="tel" inputmode="tel" maxlength="20" value="${escapeAttr(d.phone || "")}"></label>
    <label class="fld">โน้ต<input name="note" maxlength="500" value="${escapeAttr(d.note || "")}"></label>
    <div class="fld link-box">
      ผูกกับสมาชิก Tokan
      <div id="linkCurrent" class="link-current"></div>
      <input id="linkSearch" type="search" placeholder="พิมพ์ชื่อหรือนามสกุลเพื่อค้นหาสมาชิก" autocomplete="off">
      <ul id="linkResults" class="link-results"></ul>
    </div>
    ${custom}`;
  setupLinkPicker(p);
  els.editDelete.hidden = !p;
  els.editError.hidden = true;
  els.editDialog.showModal();
}

function memberLabel(m) {
  return `${m.name_t || ""} ${m.saku_t || ""}`.trim();
}

function renderLinkCurrent() {
  const box = els.editFields.querySelector("#linkCurrent");
  if (!box) return;
  if (editLink.mtCo) {
    box.innerHTML = `<span>👤 ${escapeHtml(editLink.name || "รหัส " + editLink.mtCo)}</span> <button type="button" class="link-clear" data-link-clear>ยกเลิกการผูก</button>`;
  } else {
    box.textContent = "ยังไม่ผูกกับสมาชิก";
  }
}

async function searchMembers(q) {
  const tokens = q.split(/\s+/).map((t) => t.replace(/[*,()%\\]/g, "")).filter(Boolean).slice(0, 3);
  if (!tokens.length) return [];
  const conds = tokens.map((t) => {
    const v = `*${encodeURIComponent(t)}*`;
    return `or(name_t.ilike.${v},saku_t.ilike.${v})`;
  });
  return api("GET", `members?select=mt_co,name_t,saku_t,sh_nt,ch_nt,fa_nt&and=(${conds.join(",")})&order=name_t&limit=20`);
}

async function runMemberSearch(q, results) {
  const seq = ++linkSeq;
  results.innerHTML = '<li class="link-note">กำลังค้นหา...</li>';
  try {
    const rows = await searchMembers(q);
    if (seq !== linkSeq) return;
    results.innerHTML = rows.length
      ? rows.map((m) => {
        const taken = state.people.find((x) => x.mtCo === m.mt_co && x.id !== editingId);
        const sub = [m.sh_nt, m.ch_nt, m.fa_nt].filter(Boolean).join(" · ") + (taken ? ` · ผูกกับ "${taken.nickname}" แล้ว` : "");
        return `<li><button type="button" class="link-item" data-mt="${m.mt_co}" data-name="${escapeAttr(memberLabel(m))}"><b>${escapeHtml(memberLabel(m))}</b><small>${escapeHtml(sub)}</small></button></li>`;
      }).join("")
      : '<li class="link-note">ไม่พบสมาชิกที่ตรงกัน (หรืออยู่นอกขอบเขตสิทธิ์ของคุณ)</li>';
  } catch (e) {
    if (seq === linkSeq) {
      results.innerHTML = `<li class="link-note">${e.status === undefined ? "ค้นหาไม่ได้ ตรวจสอบอินเทอร์เน็ต" : "ค้นหาไม่สำเร็จ ลองเข้าสู่ระบบใหม่"}</li>`;
    }
  }
}

function setupLinkPicker(p) {
  editLink = { mtCo: p ? p.mtCo : null, name: "" };
  editLinkOrig = p ? p.mtCo : null;
  renderLinkCurrent();
  const search = els.editFields.querySelector("#linkSearch");
  const results = els.editFields.querySelector("#linkResults");
  search.addEventListener("keydown", (e) => { if (e.key === "Enter") e.preventDefault(); });
  search.addEventListener("input", () => {
    clearTimeout(linkTimer);
    const q = search.value.trim();
    if (!q) { linkSeq++; results.innerHTML = ""; return; }
    linkTimer = setTimeout(() => runMemberSearch(q, results), 300);
  });
  els.editFields.querySelector("#linkCurrent").addEventListener("click", (e) => {
    if (e.target.closest("[data-link-clear]")) {
      editLink = { mtCo: null, name: "" };
      renderLinkCurrent();
    }
  });
  results.addEventListener("click", (e) => {
    const b = e.target.closest("[data-mt]");
    if (!b) return;
    editLink = { mtCo: Number(b.dataset.mt), name: b.dataset.name };
    results.innerHTML = "";
    search.value = "";
    renderLinkCurrent();
  });
  if (p && p.mtCo) {
    const code = p.mtCo;
    api("GET", `members?select=name_t,saku_t&mt_co=eq.${encodeURIComponent(code)}`)
      .then(([m]) => {
        if (m && editLink.mtCo === code) {
          editLink.name = memberLabel(m);
          renderLinkCurrent();
        }
      })
      .catch(() => {});
  }
}

function showEditError(msg) {
  els.editError.textContent = msg;
  els.editError.hidden = false;
}

async function saveEditor() {
  const fd = new FormData(els.editForm);
  const text = (k) => String(fd.get(k) || "").trim();
  const body = {
    nickname: text("nickname"),
    google_map: text("google_map") || null,
    status: text("status") || null,
    phone: text("phone") || null,
    note: text("note") || null,
  };
  if (!body.nickname) return showEditError("กรุณาใส่ชื่อเล่น");
  if (body.google_map && !/^https?:\/\//i.test(body.google_map)) return showEditError("ลิงก์ต้องขึ้นต้นด้วย http:// หรือ https://");
  if (body.phone && !PHONE_RE.test(body.phone)) return showEditError("เบอร์โทรใส่ได้เฉพาะตัวเลขและ + ( ) -");

  const existing = editingId === null ? null : state.people.find((x) => x.id === editingId);
  const extra = { ...((existing && existing.extra) || {}) };
  for (const c of state.columns) {
    if (c.type === "checkbox") {
      if (fd.has(c.key)) extra[c.key] = true; else delete extra[c.key];
      continue;
    }
    const v = text(c.key);
    if (v === "") delete extra[c.key];
    else extra[c.key] = c.type === "number" ? Number(v) : v;
  }
  body.extra = extra;
  const linkChanged = (editLink.mtCo ?? null) !== (editLinkOrig ?? null);
  if (linkChanged) body.mt_co = editLink.mtCo ?? null;

  els.editSave.disabled = true;
  try {
    let row;
    if (editingId === null) {
      [row] = await api("POST", "ymd_places?select=*,members(sh_nt)", body);
      if (!row) throw new Error("ไม่มีสิทธิ์เพิ่มรายการ");
      state.people.push(mapRow(row));
    } else {
      [row] = await api("PATCH", `ymd_places?id=eq.${editingId}&select=*,members(sh_nt)`, body);
      if (!row) throw Object.assign(new Error("ไม่มีสิทธิ์แก้รายการนี้"), { status: 403 });
      const i = state.people.findIndex((x) => x.id === editingId);
      if (i >= 0) state.people[i] = mapRow(row);
    }
    sortPeople();
    saveCache();
    render();
    els.editDialog.close();
  } catch (e) {
    showEditError(
      linkChanged && (e.status === 403 || e.status === 401)
        ? "ผูกสมาชิกไม่สำเร็จ: ฐานข้อมูลยังไม่เปิดสิทธิ์ผูกสมาชิก (ต้องรัน db/link-members.sql) หรือสมาชิกอยู่นอกขอบเขตสิทธิ์ของคุณ"
        : describeError(e)
    );
  } finally {
    els.editSave.disabled = false;
  }
}

async function deleteEditing() {
  const p = state.people.find((x) => x.id === editingId);
  if (!p || !window.confirm(`ลบ "${p.nickname}" ออกจากฐานข้อมูล? ย้อนกลับไม่ได้`)) return;
  els.editDelete.disabled = true;
  try {
    const rows = await api("DELETE", `ymd_places?id=eq.${editingId}`);
    if (!rows.length) throw Object.assign(new Error("ไม่มีสิทธิ์ลบรายการนี้"), { status: 403 });
    state.people = state.people.filter((x) => x.id !== editingId);
    state.favorites.delete(personId(p));
    saveFavorites();
    saveCache();
    render();
    els.editDialog.close();
  } catch (e) {
    showEditError(describeError(e));
  } finally {
    els.editDelete.disabled = false;
  }
}

function renderCols() {
  const row = (key, label, extraHtml) => `
    <li class="col-row">
      <label class="col-vis"><input type="checkbox" data-vis="${escapeAttr(key)}" ${isVisible(key) ? "checked" : ""}> ${escapeHtml(label)}</label>
      ${extraHtml}
    </li>`;
  const builtin = BUILTIN_COLS.map((c) => row(c.key, c.label, '<span class="col-tag">มีอยู่แล้ว</span>'));
  const custom = state.columns.map((c) => row(
    c.key, c.label,
    `<span class="col-tag">${{ text: "ข้อความ", number: "ตัวเลข", checkbox: "ติ๊กถูก" }[c.type]}</span>
     <button type="button" class="col-del" data-col-del="${c.id}" aria-label="ลบคอลัมน์ ${escapeAttr(c.label)}">🗑️</button>`
  ));
  els.colsList.innerHTML = builtin.concat(custom).join("");
}

function openCols() {
  els.colError.hidden = true;
  renderCols();
  els.colsDialog.showModal();
}

async function addColumn() {
  const label = els.colLabel.value.trim();
  if (!label) return;
  if (state.columns.some((c) => c.label === label) || BUILTIN_COLS.some((c) => c.label === label)) {
    els.colError.textContent = "มีคอลัมน์ชื่อนี้แล้ว";
    els.colError.hidden = false;
    return;
  }
  const key = "c_" + (Math.random().toString(36).slice(2) + "00000000").slice(0, 8);
  try {
    const [row] = await api("POST", "ymd_columns", { key, label, type: els.colType.value, sort: state.columns.length });
    if (!row) throw Object.assign(new Error("ไม่มีสิทธิ์"), { status: 403 });
    state.columns.push(row);
    els.colLabel.value = "";
    els.colError.hidden = true;
    saveCache();
    renderCols();
    render();
  } catch (e) {
    els.colError.textContent = describeError(e);
    els.colError.hidden = false;
  }
}

async function deleteColumn(id) {
  const c = state.columns.find((x) => x.id === id);
  if (!c || !window.confirm(`ลบคอลัมน์ "${c.label}"? ค่าที่กรอกไว้ในคอลัมน์นี้จะไม่แสดงอีก`)) return;
  try {
    const rows = await api("DELETE", `ymd_columns?id=eq.${id}`);
    if (!rows.length) throw Object.assign(new Error("ไม่มีสิทธิ์"), { status: 403 });
    state.columns = state.columns.filter((x) => x.id !== id);
    delete state.visible[c.key];
    localStorage.setItem(VIS_KEY, JSON.stringify(state.visible));
    saveCache();
    renderCols();
    render();
  } catch (e) {
    els.colError.textContent = describeError(e);
    els.colError.hidden = false;
  }
}

function attachFilterEvents() {
  els.fab.addEventListener("click", () => {
    els.filterDialog.showModal();
    els.search.focus();
  });
  els.filterClose.addEventListener("click", () => els.filterDialog.close());
  els.filterDialog.addEventListener("click", (e) => {
    if (e.target === els.filterDialog) els.filterDialog.close();
  });
  els.search.addEventListener("keydown", (e) => {
    if (e.key === "Enter") els.filterDialog.close();
  });
}

function attachEditorEvents() {
  els.addBtn.addEventListener("click", () => openEditor(null));
  els.colsBtn.addEventListener("click", openCols);
  els.editForm.addEventListener("submit", (e) => { e.preventDefault(); saveEditor(); });
  els.editCancel.addEventListener("click", () => els.editDialog.close());
  els.editDelete.addEventListener("click", deleteEditing);
  els.colsClose.addEventListener("click", () => els.colsDialog.close());
  els.colForm.addEventListener("submit", (e) => { e.preventDefault(); addColumn(); });
  els.colsList.addEventListener("change", (e) => {
    const key = e.target.dataset.vis;
    if (!key) return;
    state.visible[key] = e.target.checked;
    localStorage.setItem(VIS_KEY, JSON.stringify(state.visible));
    render();
  });
  els.colsList.addEventListener("click", (e) => {
    const b = e.target.closest("[data-col-del]");
    if (b) deleteColumn(Number(b.dataset.colDel));
  });
}

function setMainTab(tab) {
  state.mainTab = tab;
  document.querySelectorAll(".main-tab").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.tab === tab);
  });
  const isYmd = tab === "ymd";
  els.ymdSection.hidden = !isYmd;
  els.fab.hidden = !isYmd;
  els.notesSection.hidden = isYmd;
  if (!isYmd) renderNotes();
}

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, (c) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
  }[c]));
}

function escapeAttr(s) {
  return escapeHtml(s);
}

function toggleFavorite(id) {
  if (state.favorites.has(id)) {
    state.favorites.delete(id);
  } else {
    state.favorites.add(id);
  }
  saveFavorites();
  render();
}

function attachEvents() {
  els.search.addEventListener("input", (e) => {
    state.query = e.target.value;
    els.clearSearch.hidden = !state.query;
    render();
  });

  els.clearSearch.addEventListener("click", () => {
    state.query = "";
    els.search.value = "";
    els.clearSearch.hidden = true;
    els.search.focus();
    render();
  });

  document.getElementById("statusFilters").addEventListener("click", (e) => {
    const chip = e.target.closest(".chip");
    if (!chip) return;
    els.chips.forEach((c) => c.classList.remove("active"));
    chip.classList.add("active");
    state.status = chip.dataset.status;
    render();
  });

  document.addEventListener("click", (e) => {
    const favBtn = e.target.closest('[data-action="fav"]');
    if (favBtn) {
      const li = favBtn.closest(".card");
      toggleFavorite(li.dataset.id);
      return;
    }
    const editBtn = e.target.closest('[data-action="edit"]');
    if (editBtn) {
      const li = editBtn.closest(".card");
      const p = state.people.find((x) => personId(x) === li.dataset.id);
      if (p) openEditor(p);
      return;
    }
    const delBtn = e.target.closest('[data-action="delete-note"]');
    if (delBtn) {
      const row = delBtn.closest(".swipe-row");
      deleteCustomPlace(row.dataset.noteId);
      return;
    }
  });

  attachSwipeToDelete();
  attachEditorEvents();
  attachFilterEvents();

  els.mainTabs.addEventListener("click", (e) => {
    const btn = e.target.closest(".main-tab");
    if (!btn) return;
    setMainTab(btn.dataset.tab);
  });

  els.noteForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = els.noteName.value.trim();
    const googleMap = els.noteMap.value.trim();
    const note = els.noteText.value.trim();
    if (!name || !googleMap) return;
    addCustomPlace(name, googleMap, note);
    els.noteForm.reset();
    els.noteName.focus();
  });
}

// ---------- init ----------

async function init() {
  attachEvents();
  attachLockEvents();
  seedDefaultPlaces();

  let s = loadSession();
  if (s && s.expires_at * 1000 < Date.now() + 60000) {
    try {
      s = await refreshSession(s);
    } catch {
      s = loadSession();
      if (s) {
        try {
          const c = readCache();
          if (c) return showApp(c.people, c.columns || []);
        } catch { /* fall through */ }
      }
      return showLock("เชื่อมต่อไม่ได้ ลองรีเฟรชหน้าอีกครั้ง");
    }
  }
  if (!s) {
    clearSession();
    return showLock();
  }
  saveSession(s);
  await start(s);
}

init();

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("sw.js").catch(() => {});
  });
}
