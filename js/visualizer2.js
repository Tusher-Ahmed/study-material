/* ============================================================
   Visualizer 2 — Binary Search + Pathfinding (BFS/DFS)
   ============================================================ */

/* ---------------- Binary Search ---------------- */
(function () {
  "use strict";
  const cellsEl = document.getElementById("bs-cells");
  if (!cellsEl) return;
  const targetIn = document.getElementById("bs-target");
  const genBtn = document.getElementById("bs-gen");
  const runBtn = document.getElementById("bs-run");
  const stepsEl = document.getElementById("bs-steps");
  const msgEl = document.getElementById("bs-msg");

  let arr = [];
  let running = false;

  function generate() {
    arr = [];
    let v = 1 + Math.floor(Math.random() * 5);
    for (let i = 0; i < 15; i++) {           // bn: সাজানো distinct array
      arr.push(v);
      v += 1 + Math.floor(Math.random() * 6);
    }
    render();
    stepsEl.textContent = "0";
    msgEl.textContent = "—";
  }

  function render(frame) {
    cellsEl.innerHTML = "";
    arr.forEach((val, i) => {
      const cell = document.createElement("div");
      cell.className = "bs-cell";
      cell.innerHTML = `<span class="idx">${i}</span>${val}`;
      if (frame) {
        if (i < frame.lo || i > frame.hi) cell.classList.add("out");
        else cell.classList.add("range");
        if (frame.status === "found" && i === frame.mid) cell.classList.add("found");
        else if (i === frame.mid) cell.classList.add("mid");
      }
      cellsEl.appendChild(cell);
    });
  }

  function frames(target) {
    const f = [];
    let lo = 0, hi = arr.length - 1, steps = 0, mid = -1;
    while (lo <= hi) {
      mid = Math.floor((lo + hi) / 2);
      steps++;
      f.push({ lo, hi, mid, steps, status: "compare" });
      if (arr[mid] === target) { f.push({ lo, hi, mid, steps, status: "found" }); return f; }
      else if (arr[mid] < target) lo = mid + 1;
      else hi = mid - 1;
    }
    f.push({ lo, hi, mid: -1, steps, status: "notfound" });
    return f;
  }

  async function run() {
    if (running) return;
    running = true; runBtn.disabled = true; genBtn.disabled = true;
    const target = parseInt(targetIn.value, 10);
    const fs = frames(target);
    for (const frame of fs) {
      render(frame);
      stepsEl.textContent = frame.steps;
      if (frame.status === "found") msgEl.textContent = `✅ index ${frame.mid} এ পাওয়া গেছে`;
      else if (frame.status === "notfound") msgEl.textContent = `❌ ${target} নেই`;
      else msgEl.textContent = `mid=${frame.mid} (মান ${arr[frame.mid]}) — ${arr[frame.mid] < target ? "ছোট → ডানে" : arr[frame.mid] > target ? "বড় → বামে" : "মিলেছে"}`;
      await new Promise(r => setTimeout(r, 900));
    }
    running = false; runBtn.disabled = false; genBtn.disabled = false;
  }

  genBtn.addEventListener("click", generate);
  runBtn.addEventListener("click", run);
  generate();
})();

/* ---------------- Pathfinding (BFS / DFS) ---------------- */
(function () {
  "use strict";
  const gridEl = document.getElementById("pf-grid");
  if (!gridEl) return;
  const algoSel = document.getElementById("pf-algo");
  const speedIn = document.getElementById("pf-speed");
  const genBtn = document.getElementById("pf-gen");
  const runBtn = document.getElementById("pf-run");
  const visitedEl = document.getElementById("pf-visited");
  const pathEl = document.getElementById("pf-path");
  const msgEl = document.getElementById("pf-msg");

  const ROWS = 12, COLS = 22;
  let grid = [];        // 0 = open, 1 = wall
  let running = false;
  const start = [0, 0], end = [ROWS - 1, COLS - 1];
  const key = (r, c) => r + "," + c;

  function generate() {
    grid = [];
    for (let r = 0; r < ROWS; r++) {
      const row = [];
      for (let c = 0; c < COLS; c++) {
        row.push(Math.random() < 0.26 ? 1 : 0);   // bn: ~26% দেয়াল
      }
      grid.push(row);
    }
    grid[start[0]][start[1]] = 0;
    grid[end[0]][end[1]] = 0;
    render();
    visitedEl.textContent = "0"; pathEl.textContent = "0"; msgEl.textContent = "—";
  }

  function render() {
    gridEl.style.gridTemplateColumns = `repeat(${COLS}, 1fr)`;
    gridEl.style.maxWidth = (COLS * 30) + "px";
    gridEl.innerHTML = "";
    for (let r = 0; r < ROWS; r++) {
      for (let c = 0; c < COLS; c++) {
        const cell = document.createElement("div");
        cell.className = "pf-cell";
        cell.id = "pf-" + key(r, c);
        if (grid[r][c] === 1) cell.classList.add("wall");
        if (r === start[0] && c === start[1]) cell.classList.add("start");
        if (r === end[0] && c === end[1]) cell.classList.add("end");
        gridEl.appendChild(cell);
      }
    }
  }

  function search(algo) {
    const visited = new Set([key(...start)]);
    const prev = {};
    const order = [];
    const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    let container = [start];
    while (container.length) {
      const [r, c] = algo === "bfs" ? container.shift() : container.pop();
      order.push([r, c]);
      if (r === end[0] && c === end[1]) break;
      for (const [dr, dc] of dirs) {
        const nr = r + dr, nc = c + dc;
        if (nr < 0 || nc < 0 || nr >= ROWS || nc >= COLS) continue;
        if (grid[nr][nc] === 1 || visited.has(key(nr, nc))) continue;
        visited.add(key(nr, nc));
        prev[key(nr, nc)] = [r, c];
        container.push([nr, nc]);
      }
    }
    // reconstruct path
    const path = [];
    if (visited.has(key(...end))) {
      let cur = end;
      while (cur) { path.push(cur); cur = prev[key(cur[0], cur[1])]; }
      path.reverse();
    }
    return { order, path };
  }

  function delay() { return Math.max(4, 120 - parseInt(speedIn.value, 10)); }

  async function run() {
    if (running) return;
    running = true; runBtn.disabled = true; genBtn.disabled = true; algoSel.disabled = true;
    render();   // reset colors
    const { order, path } = search(algoSel.value);
    let count = 0;
    for (const [r, c] of order) {
      if (!(r === start[0] && c === start[1]) && !(r === end[0] && c === end[1])) {
        document.getElementById("pf-" + key(r, c)).classList.add("visited");
      }
      visitedEl.textContent = ++count;
      await new Promise(res => setTimeout(res, delay()));
    }
    if (path.length) {
      for (const [r, c] of path) {
        if (!(r === start[0] && c === start[1]) && !(r === end[0] && c === end[1])) {
          document.getElementById("pf-" + key(r, c)).classList.add("path");
        }
        await new Promise(res => setTimeout(res, 30));
      }
      pathEl.textContent = path.length;
      msgEl.textContent = `✅ পথ পাওয়া গেছে (${path.length} ঘর)`;
    } else {
      msgEl.textContent = "❌ কোনো পথ নেই (দেয়াল আটকে দিয়েছে) — নতুন গোলকধাঁধা বানাও";
    }
    running = false; runBtn.disabled = false; genBtn.disabled = false; algoSel.disabled = false;
  }

  genBtn.addEventListener("click", generate);
  runBtn.addEventListener("click", run);
  generate();
})();
