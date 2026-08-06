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

const references = document.querySelector('.references');
const referencesMethod = document.querySelector('.references-method');
if (references && referencesMethod && !references.querySelector('.reference-card[data-reference="clickfunnels"]')) {
  references.insertAdjacentHTML('beforeend', `
    <article class="reference-card" data-reference="clickfunnels">
      <div class="reference-top"><span>06 / AQUISIÇÃO</span><b class="reference-logo logo-clickfunnels">Click<span>Funnels</span></b></div>
      <a href="https://www.clickfunnels.com/" target="_blank" rel="noreferrer">Russell Brunson / ClickFunnels <span>↗</span></a>
      <p>Funil como produto: aquisição, conversão e ascensão desenhadas como um único sistema.</p>
      <div class="reference-stats">
        <b><strong>2014</strong> ano de fundação</b>
        <b><strong>1M+</strong> empreendedores alcançados</b>
        <b><strong>US$100 bi+</strong> vendas atribuídas à plataforma</b>
      </div>
      <small class="source-note">Fonte: ClickFunnels, Russell Brunson e materiais públicos da plataforma. Os dois últimos números são claims públicos da marca, não faturamento da ClickFunnels.</small>
    </article>
  `);
  const clickFunnelsCard = references.querySelector('[data-reference="clickfunnels"]');
  references.insertBefore(clickFunnelsCard, references.children[1]);
  referencesMethod.children[1].insertAdjacentHTML('afterend', '<span>Funil de aquisição</span>');
}
