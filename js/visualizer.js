/* ============================================================
   Sorting Visualizer — records frames, then animates bars
   প্রতিটি অ্যালগরিদম compare/swap এর snapshot তৈরি করে,
   তারপর সেগুলো একে একে দেখানো হয়।
   ============================================================ */

(function () {
  "use strict";

  const barsEl = document.getElementById("viz-bars");
  if (!barsEl) return;   // visualizer page না থাকলে চুপচাপ থামো

  const algoSel = document.getElementById("viz-algo");
  const sizeIn = document.getElementById("viz-size");
  const speedIn = document.getElementById("viz-speed");
  const genBtn = document.getElementById("viz-gen");
  const runBtn = document.getElementById("viz-run");
  const cmpEl = document.getElementById("viz-cmp");
  const swpEl = document.getElementById("viz-swp");
  const nameEl = document.getElementById("viz-name");

  let array = [];
  let running = false;

  /* ---------- frame helper ----------
     frame = { arr: [...], compare: [i,j], swap: bool, sortedUpto: idx, pivot: idx }
  */
  function snapshot(arr, opts = {}) {
    return Object.assign({ arr: arr.slice() }, opts);
  }

  /* ---------- Algorithms that RECORD frames ---------- */
  function bubble(a) {
    const f = []; const n = a.length; let cmp = 0, swp = 0;
    for (let i = 0; i < n; i++) {
      let swapped = false;
      for (let j = 0; j < n - i - 1; j++) {
        cmp++; f.push(snapshot(a, { compare: [j, j + 1], cmp, swp, sortedFrom: n - i }));
        if (a[j] > a[j + 1]) {
          [a[j], a[j + 1]] = [a[j + 1], a[j]]; swp++; swapped = true;
          f.push(snapshot(a, { swap: [j, j + 1], cmp, swp, sortedFrom: n - i }));
        }
      }
      if (!swapped) break;
    }
    f.push(snapshot(a, { cmp, swp, sortedFrom: 0 }));
    return f;
  }

  function selection(a) {
    const f = []; const n = a.length; let cmp = 0, swp = 0;
    for (let i = 0; i < n; i++) {
      let min = i;
      for (let j = i + 1; j < n; j++) {
        cmp++; f.push(snapshot(a, { compare: [min, j], cmp, swp, sortedFrom: i, pivot: min }));
        if (a[j] < a[min]) min = j;
      }
      if (min !== i) { [a[i], a[min]] = [a[min], a[i]]; swp++; }
      f.push(snapshot(a, { swap: [i, min], cmp, swp, sortedFrom: i + 1 }));
    }
    f.push(snapshot(a, { cmp, swp, sortedFrom: 0 }));
    return f;
  }

  function insertion(a) {
    const f = []; const n = a.length; let cmp = 0, swp = 0;
    for (let i = 1; i < n; i++) {
      let key = a[i], j = i - 1;
      while (j >= 0) {
        cmp++; f.push(snapshot(a, { compare: [j, i], cmp, swp, pivot: i }));
        if (a[j] > key) { a[j + 1] = a[j]; swp++; j--; f.push(snapshot(a, { swap: [j + 1, j + 2], cmp, swp })); }
        else break;
      }
      a[j + 1] = key;
    }
    f.push(snapshot(a, { cmp, swp, sortedFrom: 0 }));
    return f;
  }

  function quick(a) {
    const f = []; let cmp = 0, swp = 0;
    function qs(lo, hi) {
      if (lo >= hi) return;
      const pivot = a[hi]; let i = lo;
      for (let j = lo; j < hi; j++) {
        cmp++; f.push(snapshot(a, { compare: [j, hi], cmp, swp, pivot: hi }));
        if (a[j] < pivot) {
          [a[i], a[j]] = [a[j], a[i]]; swp++;
          f.push(snapshot(a, { swap: [i, j], cmp, swp, pivot: hi })); i++;
        }
      }
      [a[i], a[hi]] = [a[hi], a[i]]; swp++;
      f.push(snapshot(a, { swap: [i, hi], cmp, swp }));
      qs(lo, i - 1); qs(i + 1, hi);
    }
    qs(0, a.length - 1);
    f.push(snapshot(a, { cmp, swp, sortedFrom: 0 }));
    return f;
  }

  function merge(a) {
    const f = []; let cmp = 0, swp = 0;
    function ms(lo, hi) {
      if (lo >= hi) return;
      const mid = (lo + hi) >> 1;
      ms(lo, mid); ms(mid + 1, hi);
      const tmp = []; let i = lo, j = mid + 1;
      while (i <= mid && j <= hi) {
        cmp++; f.push(snapshot(a, { compare: [i, j], cmp, swp }));
        if (a[i] <= a[j]) tmp.push(a[i++]); else tmp.push(a[j++]);
      }
      while (i <= mid) tmp.push(a[i++]);
      while (j <= hi) tmp.push(a[j++]);
      for (let k = 0; k < tmp.length; k++) { a[lo + k] = tmp[k]; swp++; f.push(snapshot(a, { swap: [lo + k, lo + k], cmp, swp })); }
    }
    ms(0, a.length - 1);
    f.push(snapshot(a, { cmp, swp, sortedFrom: 0 }));
    return f;
  }

  const ALGOS = { bubble, selection, insertion, quick, merge };

  /* ---------- Rendering ---------- */
  function renderBars(arr) {
    barsEl.innerHTML = "";
    const max = Math.max(...arr);
    for (const v of arr) {
      const bar = document.createElement("div");
      bar.className = "viz-bar";
      bar.style.height = (v / max * 100) + "%";
      barsEl.appendChild(bar);
    }
  }

  function paintFrame(frame) {
    const max = Math.max(...frame.arr);
    const children = barsEl.children;
    for (let i = 0; i < frame.arr.length; i++) {
      const bar = children[i];
      bar.style.height = (frame.arr[i] / max * 100) + "%";
      bar.className = "viz-bar";
      if (frame.sortedFrom !== undefined && i >= frame.sortedFrom) bar.classList.add("sorted");
      if (frame.pivot === i) bar.classList.add("pivot");
      if (frame.compare && (i === frame.compare[0] || i === frame.compare[1])) bar.classList.add("compare");
      if (frame.swap && (i === frame.swap[0] || i === frame.swap[1])) bar.classList.add("swap");
    }
    if (cmpEl) cmpEl.textContent = frame.cmp ?? 0;
    if (swpEl) swpEl.textContent = frame.swp ?? 0;
  }

  function generate() {
    const n = parseInt(sizeIn.value, 10);
    array = [];
    // bn: এলোমেলো উচ্চতা (5..100) — প্রকৃত random, তাই sort স্পষ্ট দেখা যায়
    for (let i = 0; i < n; i++) array.push(5 + Math.floor(Math.random() * 96));
    renderBars(array);
    if (cmpEl) cmpEl.textContent = "0";
    if (swpEl) swpEl.textContent = "0";
    if (nameEl) nameEl.textContent = "—";
  }

  function delay() {
    // speed slider 1(slow)..100(fast) -> ms
    const s = parseInt(speedIn.value, 10);
    return Math.max(2, 220 - s * 2);
  }

  async function run() {
    if (running) return;
    running = true; runBtn.disabled = true; genBtn.disabled = true; algoSel.disabled = true;
    const name = algoSel.value;
    if (nameEl) nameEl.textContent = algoSel.options[algoSel.selectedIndex].text;
    const frames = ALGOS[name](array.slice());
    for (const frame of frames) {
      if (!running) break;
      paintFrame(frame);
      await new Promise(r => setTimeout(r, delay()));
    }
    // final: সব সবুজ
    paintFrame(snapshot(array.length ? frames[frames.length - 1].arr : [], { sortedFrom: 0, cmp: frames[frames.length-1].cmp, swp: frames[frames.length-1].swp }));
    array = frames[frames.length - 1].arr;
    running = false; runBtn.disabled = false; genBtn.disabled = false; algoSel.disabled = false;
  }

  genBtn.addEventListener("click", () => { running = false; generate(); });
  runBtn.addEventListener("click", run);
  sizeIn.addEventListener("input", () => { running = false; generate(); });

  generate();   // প্রথমবার লোডে
})();
