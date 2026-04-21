/**
 * LIMITLESS Design System — Core JavaScript v3.0
 * Handles: Tabs, Checklists, Dropdowns, Scroll Reveal,
 *          Donuts, Progress Bars, Toggles
 */

// ── TABS ──
document.querySelectorAll('.lx-tab').forEach(t => {
  t.addEventListener('click', () => {
    const g = t.closest('.lx-tabs') || t.closest('.lx-ptabs') || t.parentElement;
    g.querySelectorAll('.lx-tab').forEach(x => x.classList.remove('active'));
    t.classList.add('active');
    const id = t.dataset.tab;
    if (id) {
      document.querySelectorAll('.lx-tpanel').forEach(p => p.classList.remove('active'));
      const p = document.getElementById(id);
      if (p) p.classList.add('active');
    }
  });
});

// ── CHECKLISTS ──
document.querySelectorAll('.ck, .lx-ck').forEach(c => {
  c.addEventListener('click', () => c.classList.toggle('done'));
});

// ── DROPDOWNS / ACCORDIONS ──
document.querySelectorAll('.dd-h, .lx-dd-h, .lx-dh').forEach(h => {
  h.addEventListener('click', () => h.parentElement.classList.toggle('open'));
});

// ── SCROLL REVEAL ──
const lxObserver = new IntersectionObserver(entries => {
  entries.forEach(x => {
    if (x.isIntersecting) x.target.classList.add('vis');
  });
}, { threshold: 0.15 });
document.querySelectorAll('.lx-rev, .rv').forEach(el => lxObserver.observe(el));

// ── DONUT CHARTS ──
setTimeout(() => {
  document.querySelectorAll('.lx-dfl').forEach(el => {
    const pct = parseFloat(el.dataset.pct || 0);
    const circumference = 2 * Math.PI * 43;
    el.style.strokeDasharray = `${(pct / 100) * circumference} ${circumference}`;
  });
}, 300);

// ── PROGRESS BARS ──
document.querySelectorAll('.lx-pf[data-w]').forEach(bar => {
  const target = bar.dataset.w;
  bar.style.width = '0';
  setTimeout(() => { bar.style.width = target; }, 300);
});

// ── TOGGLES ──
document.querySelectorAll('.lx-toggle-row').forEach(row => {
  row.addEventListener('click', () => {
    const toggle = row.querySelector('.lx-tog');
    if (toggle) toggle.classList.toggle('on');
  });
});
