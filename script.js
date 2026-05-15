// Smooth highlight de la tab activa al hacer scroll
const sections = document.querySelectorAll("main section[id]");
const tabs = document.querySelectorAll(".tab");

const setActive = (id) => {
  tabs.forEach(t => {
    const match = t.getAttribute("href") === `#${id}`;
    t.style.color = match ? "#fff" : "";
    t.style.background = match ? "rgba(255,42,42,0.08)" : "";
  });
};

const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) setActive(e.target.id);
  });
}, { rootMargin: "-40% 0px -50% 0px" });

sections.forEach(s => io.observe(s));

// Glitch ocasional en el título
const title = document.querySelector(".hero-title");
if (title) {
  setInterval(() => {
    title.style.textShadow = "2px 0 #4ab8f0, -2px 0 #ffffff";
    setTimeout(() => { title.style.textShadow = "none"; }, 80);
  }, 1900);
}
