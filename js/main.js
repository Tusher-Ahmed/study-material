/* ============================================================
   Python + DSA Learning Hub — main.js
   Navigation, search, theme, copy, syntax highlight
   ============================================================ */

(function () {
  "use strict";

  const links = Array.from(document.querySelectorAll(".nav-link"));
  const sections = Array.from(document.querySelectorAll("section.topic"));
  const content = document.querySelector(".content");

  /* ---------- Navigation history (back button) ---------- */
  let current = null;
  const visited = [];   // আগে দেখা পেজের stack

  /* ---------- Show a section by id ---------- */
  function show(id, push, isBack) {
    if (current && current !== id && !isBack) visited.push(current);
    current = id;
    sections.forEach(s => s.classList.toggle("visible", s.id === id));
    links.forEach(l => l.classList.toggle("active", l.dataset.target === id));
    if (push !== false) history.replaceState(null, "", "#" + id);
    content.scrollTop = 0;
    window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
    closeSidebar();
    buildPageNav(id);
  }

  /* ---------- Go back to previously visited page ---------- */
  function goBack() {
    if (visited.length) show(visited.pop(), true, true);
    else show("home", true, true);   // ইতিহাস না থাকলে হোমে
  }

  /* ---------- Inject toolbar (← back / 🏠 home) into each section ---------- */
  sections.forEach(sec => {
    if (sec.id === "home") return;   // হোমে দরকার নেই
    const bar = document.createElement("div");
    bar.className = "section-toolbar";
    bar.innerHTML =
      '<button class="tb-btn tb-back" type="button">← আগের পেজ</button>' +
      '<button class="tb-btn tb-home" type="button">🏠 মূল মেনু</button>';
    sec.insertBefore(bar, sec.firstChild);
  });

  document.addEventListener("click", e => {
    if (e.target.closest(".tb-home")) { e.preventDefault(); show("home"); }
    else if (e.target.closest(".tb-back")) { e.preventDefault(); goBack(); }
  });

  /* ---------- Sidebar links ---------- */
  links.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      show(link.dataset.target);
    });
  });

  /* ---------- Home cards (delegated) ---------- */
  document.addEventListener("click", e => {
    const card = e.target.closest("[data-goto]");
    if (card) { e.preventDefault(); show(card.dataset.goto); }
  });

  /* ---------- Prev / Next page nav ---------- */
  function buildPageNav(id) {
    const idx = links.findIndex(l => l.dataset.target === id);
    const prev = links[idx - 1];
    const next = links[idx + 1];
    const nav = document.querySelector("#" + id + " .page-nav");
    if (!nav) return;
    const [pb, nb] = nav.querySelectorAll("button");
    if (prev) { pb.disabled = false; pb.textContent = "← " + prev.textContent; pb.onclick = () => show(prev.dataset.target); }
    else { pb.disabled = true; pb.textContent = "←"; }
    if (next) { nb.disabled = false; nb.textContent = next.textContent + " →"; nb.onclick = () => show(next.dataset.target); }
    else { nb.disabled = true; nb.textContent = "→"; }
  }

  /* ---------- Search filter ---------- */
  const search = document.getElementById("search");
  search.addEventListener("input", () => {
    const q = search.value.trim().toLowerCase();
    links.forEach(l => {
      const hit = l.textContent.toLowerCase().includes(q) ||
                  (l.dataset.keywords || "").toLowerCase().includes(q);
      l.style.display = (q === "" || hit) ? "" : "none";
    });
    document.querySelectorAll(".nav-title").forEach(t => {
      let n = t.nextElementSibling, any = false;
      while (n && n.classList.contains("nav-link")) {
        if (n.style.display !== "none") any = true;
        n = n.nextElementSibling;
      }
      t.style.display = any ? "" : "none";
    });
  });

  /* ---------- Theme ---------- */
  const root = document.documentElement;
  const saved = localStorage.getItem("pydsa-theme");
  if (saved) root.setAttribute("data-theme", saved);
  document.querySelectorAll(".theme-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const cur = root.getAttribute("data-theme") === "light" ? "dark" : "light";
      if (cur === "dark") root.removeAttribute("data-theme");
      else root.setAttribute("data-theme", "light");
      localStorage.setItem("pydsa-theme", cur);
      btn.textContent = cur === "light" ? "🌙" : "☀️";
    });
  });

  /* ---------- Mobile sidebar ---------- */
  const sidebar = document.querySelector(".sidebar");
  const overlay = document.querySelector(".overlay");
  function closeSidebar() { sidebar.classList.remove("open"); overlay.classList.remove("open"); }
  document.querySelector(".menu-btn")?.addEventListener("click", () => {
    sidebar.classList.toggle("open"); overlay.classList.toggle("open");
  });
  overlay.addEventListener("click", closeSidebar);

  /* ---------- Copy buttons + syntax highlight ---------- */
  const KW = ["def","return","if","elif","else","for","while","in","not","and","or","is","None",
    "True","False","class","import","from","as","with","try","except","finally","raise","break",
    "continue","pass","lambda","yield","global","nonlocal","del","assert","self","print","range",
    "len","int","str","float","list","dict","set","tuple","input","enumerate","zip","map","filter",
    "sorted","sum","min","max","abs","type","append","pop","sort","reversed"];

  function escapeHtml(s){return s.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");}

  function highlight(raw) {
    const lines = raw.split("\n");
    return lines.map(line => {
      // Bangla inline comment marker:  # bn: ...
      let out = "";
      let i = 0;
      while (i < line.length) {
        const ch = line[i];
        // comment
        if (ch === "#") {
          const rest = line.slice(i);
          const cls = rest.startsWith("# bn") ? "tok-bn" : "tok-com";
          out += `<span class="${cls}">${escapeHtml(rest)}</span>`;
          break;
        }
        // string
        if (ch === '"' || ch === "'") {
          let j = i + 1;
          while (j < line.length && line[j] !== ch) j++;
          out += `<span class="tok-str">${escapeHtml(line.slice(i, j + 1))}</span>`;
          i = j + 1; continue;
        }
        // number
        if (/[0-9]/.test(ch) && !/[A-Za-z_]/.test(line[i-1] || "")) {
          let j = i; while (j < line.length && /[0-9.]/.test(line[j])) j++;
          out += `<span class="tok-num">${escapeHtml(line.slice(i, j))}</span>`;
          i = j; continue;
        }
        // word
        if (/[A-Za-z_]/.test(ch)) {
          let j = i; while (j < line.length && /[A-Za-z0-9_]/.test(line[j])) j++;
          const word = line.slice(i, j);
          const isCall = line[j] === "(";
          if (KW.includes(word)) out += `<span class="tok-kw">${word}</span>`;
          else if (isCall) out += `<span class="tok-fn">${word}</span>`;
          else out += escapeHtml(word);
          i = j; continue;
        }
        out += escapeHtml(ch); i++;
      }
      return out;
    }).join("\n");
  }

  document.querySelectorAll("pre code").forEach(code => {
    code.innerHTML = highlight(code.textContent);
  });

  document.querySelectorAll(".code-wrap").forEach(wrap => {
    const btn = document.createElement("button");
    btn.className = "copy-btn"; btn.textContent = "Copy";
    btn.addEventListener("click", () => {
      const txt = wrap.querySelector("code").textContent;
      navigator.clipboard.writeText(txt).then(() => {
        btn.textContent = "Copied!";
        setTimeout(() => (btn.textContent = "Copy"), 1500);
      });
    });
    wrap.appendChild(btn);
  });

  /* ---------- Init from hash ---------- */
  const start = location.hash.replace("#", "");
  if (start && document.getElementById(start)) show(start, false);
  else show("home", false);
})();
