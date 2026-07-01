/* ============================================================
   Classic Examples hub — category chip filter + text search
   ============================================================ */
(function () {
  "use strict";

  const menu = document.getElementById("exMenu");
  if (!menu) return;

  const chips = Array.from(menu.querySelectorAll(".ex-chip"));
  const cards = Array.from(document.querySelectorAll("#exList .ex-card"));
  const searchBox = document.getElementById("exSearch");
  const empty = document.getElementById("exEmpty");

  let activeCat = "all";

  function apply() {
    const q = (searchBox.value || "").trim().toLowerCase();
    let shown = 0;
    cards.forEach(card => {
      const catOk = activeCat === "all" || card.dataset.cat === activeCat;
      const hay = (card.dataset.name + " " + card.textContent).toLowerCase();
      const textOk = q === "" || hay.includes(q);
      const visible = catOk && textOk;
      card.classList.toggle("hidden", !visible);
      if (visible) shown++;
    });
    empty.style.display = shown === 0 ? "block" : "none";
  }

  chips.forEach(chip => {
    chip.addEventListener("click", () => {
      chips.forEach(c => c.classList.remove("active"));
      chip.classList.add("active");
      activeCat = chip.dataset.cat;
      apply();
    });
  });

  searchBox.addEventListener("input", apply);
})();
