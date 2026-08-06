const toggle = document.querySelector('[data-toggle="offerDetails"]');
const details = document.getElementById('offerDetails');
if (toggle && details) {
  toggle.addEventListener('click', () => {
    const isOpen = !details.classList.toggle('hidden');
    toggle.setAttribute('aria-expanded', String(isOpen));
    toggle.innerHTML = `<span class="toggle-dot"></span> detalhes ${isOpen ? 'ligados' : 'desligados'}`;
  });
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add('in-view');
  });
}, { threshold: 0.08 });
document.querySelectorAll('.section-intro,.verdict-grid,.pillars-grid,.offer-stack,.compare-table,.roadmap-grid,.metrics-strip,.decision').forEach((el) => observer.observe(el));
