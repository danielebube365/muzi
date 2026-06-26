/* BAMBAU · scroll reveals */
(() => {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce) { document.querySelectorAll(".reveal").forEach(e=>e.classList.add("in")); return; }
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add("in"); io.unobserve(e.target); } });
  }, { threshold:.16, rootMargin:"0px 0px -8% 0px" });
  document.querySelectorAll(".reveal").forEach(e=>io.observe(e));
})();
