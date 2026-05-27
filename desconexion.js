// ── Tabs internos de Ficha Técnica ──
document.querySelectorAll(".ftab").forEach(btn => {
  btn.addEventListener("click", () => {
    const target = btn.dataset.tab;

    document.querySelectorAll(".ftab").forEach(b => b.classList.remove("active"));
    document.querySelectorAll(".ftab-panel").forEach(p => p.classList.remove("active"));

    btn.classList.add("active");
    const panel = document.getElementById("tab-" + target);
    if (panel) panel.classList.add("active");
  });
});

// ── Highlight de nav al hacer scroll ──
const sections = document.querySelectorAll("section[id]");
const dtabs    = document.querySelectorAll(".dtab");

const setActive = id => {
  dtabs.forEach(t => {
    const match = t.getAttribute("href") === "#" + id;
    t.classList.toggle("active", match);
  });
};

new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id); });
}, { rootMargin: "-40% 0px -50% 0px" }).forEach
  ? new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id); });
    }, { rootMargin: "-40% 0px -50% 0px" })
  : null;

const io = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id); });
}, { rootMargin: "-40% 0px -50% 0px" });
sections.forEach(s => io.observe(s));

// Soundtrack — intenta autoplay; si el navegador lo bloquea, arranca al primer click
const audio = document.getElementById("soundtrack");
if (audio) {
  audio.volume = 0.6;
  audio.play().catch(() => {
    const unlock = () => { audio.play(); document.removeEventListener("click", unlock); };
    document.addEventListener("click", unlock);
  });
}

// ── Glitch idle en título del tease ──
const title = document.querySelector(".tease-title");
if (title) {
  setInterval(() => {
    title.style.textShadow = "3px 0 #3a90f0, -3px 0 #9b3aff";
    setTimeout(() => { title.style.textShadow = ""; }, 90);
  }, 2800);
}
