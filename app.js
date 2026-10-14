const FAV_KEY = "ymd_favorites";
const AUTH_KEY = "tokan_session_v1";
const CACHE_KEY = "ymd_places_cache";
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
};

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
  return `${p.nickname}|${p.googleMap || ""}|${p.note || ""}`;
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

async function fetchPlaces(token) {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/ymd_places?select=*&order=nickname`, {
    headers: { apikey: SUPABASE_KEY, Authorization: `Bearer ${token}` },
  });
  if (!res.ok) throw Object.assign(new Error(`ymd_places ${res.status}`), { status: res.status });
  const rows = await res.json();
  return rows.map((r) => ({
    nickname: r.nickname,
    googleMap: r.google_map,
    status: r.status,
    district: r.district,
    phone: r.phone,
    note: r.note,
  }));
}

function showApp(people) {
  state.people = people;
  state.people.sort((a, b) => a.nickname.localeCompare(b.nickname, "th"));
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
  state.people = [];
  showLock();
}

async function start(s, retried = false) {
  let people;
  try {
    people = await fetchPlaces(s.access_token);
    localStorage.setItem(CACHE_KEY, JSON.stringify(people));
  } catch (e) {
    if (e.status === 401 && !retried) {
      const next = await refreshSession(s).catch(() => null);
      if (next) {
        saveSession(next);
        return start(next, true);
      }
    }
    if (e.status === undefined) {
      try {
        const cached = JSON.parse(localStorage.getItem(CACHE_KEY));
        if (cached && cached.length) return showApp(cached);
      } catch { /* fall through */ }
      return showLock("เชื่อมต่อไม่ได้ ลองใหม่อีกครั้ง");
    }
    clearSession();
    return showLock(e.status === 401 ? "หมดเวลาเข้าสู่ระบบ กรุณาเข้าใหม่" : "โหลดข้อมูลไม่สำเร็จ");
  }
  if (!people.length) {
    clearSession();
    return showLock("ไม่มีสิทธิ์ดูข้อมูล");
  }
  showApp(people);
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
  const hay = normalize(p.nickname + " " + (p.note || "") + " " + (p.district || ""));
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
}

function cardHtml(p) {
  const id = personId(p);
  const isFav = state.favorites.has(id);
  const badge = p.status ? `<span class="badge ${p.status}">${p.status}</span>` : "";
  const metaParts = [p.note, p.district].filter(Boolean);
  const meta = metaParts.length ? `<div class="card-meta">${escapeHtml(metaParts.join(" · "))}</div>` : "";
  const mapHref = p.googleMap ? escapeAttr(p.googleMap) : "#";
  const mapDisabled = p.googleMap ? "" : "disabled";
  const callBtn = p.phone
    ? `<a class="call-btn" href="tel:${escapeAttr(p.phone)}" aria-label="โทร ${escapeAttr(p.nickname)}">📞</a>`
    : "";

  return `
    <li class="card" data-id="${escapeAttr(id)}">
      <button class="star-btn ${isFav ? "on" : ""}" data-action="fav" aria-label="รายการโปรด">${isFav ? "★" : "☆"}</button>
      <div class="card-main">
        <div class="card-name-row">
          <span class="card-name">${escapeHtml(p.nickname)}</span>
          ${badge}
        </div>
        ${meta}
      </div>
      <div class="card-actions">
        ${callBtn}
        <a class="map-btn ${mapDisabled}" href="${mapHref}" target="_blank" rel="noopener noreferrer" aria-label="เปิด Google Maps">📍</a>
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

function setMainTab(tab) {
  state.mainTab = tab;
  document.querySelectorAll(".main-tab").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.tab === tab);
  });
  const isYmd = tab === "ymd";
  els.ymdSection.hidden = !isYmd;
  els.ymdControls.hidden = !isYmd;
  els.statusFilters.hidden = !isYmd;
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
    const delBtn = e.target.closest('[data-action="delete-note"]');
    if (delBtn) {
      const row = delBtn.closest(".swipe-row");
      deleteCustomPlace(row.dataset.noteId);
      return;
    }
  });

  attachSwipeToDelete();

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
          const cached = JSON.parse(localStorage.getItem(CACHE_KEY));
          if (cached && cached.length) return showApp(cached);
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
