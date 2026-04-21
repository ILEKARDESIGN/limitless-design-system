---
name: limitless-design-system
description: "LIMITLESS Support Co. complete design system — 116 components, 12 showcases. USE THIS SKILL for ANY request involving: LIMITLESS, NDIS, participant, support coordination, widget, dashboard, artifact, chart, graph, form, modal, report, plan, schedule, budget, CRM, kanban, calendar, case notes, invoices, compliance, risk assessment, goal tracking, provider management, plan review, reassessment, intake form, referral, progress report, billable hours, service agreement, or ANY branded HTML output. Also trigger for: bento grid, lx- classes, design system, KPI card, donut chart, progress bar, Gantt chart, funnel, Sankey, radar, pictogram, candlestick, choropleth, force network, tree chart, org chart, toast notification, drawer, bottom sheet, spotlight tabs, skeleton loader, empty state, error state, diff view, or any UI component request from Ile or LIMITLESS Support Co. This skill contains the complete CSS class library, 116 render-ready component patterns, brand rules, typography, colour tokens, and JavaScript for all interactive elements. ALWAYS use this skill before building any HTML output — it ensures pixel-perfect LIMITLESS branding."
---

# LIMITLESS Design System Skill v3.0

## HOW THIS SKILL WORKS

**This SKILL.md contains everything needed for 90% of requests.** Brand rules, colour tokens, full CSS class library, HTML skeleton, core JS, and the complete 116-component registry with copy-paste HTML patterns.

**For full CSS (1,340 lines):** Read `references/core-css.md` and paste into every `<style>` block.

**For render-ready HTML blocks:** Read `references/component-patterns.md` — contains the 40 most-used component HTML patterns extracted verbatim from showcase files.

**For pixel-perfect fidelity:** The GitHub repository at `https://github.com/ILEKARDESIGN/limitless-design-system` contains all 140 files including 12 canonical showcase HTML pages (893 KB). Read the relevant `pages/sNN-*.html` file when exact replication is needed.

**GitHub Component Index:**
| Category | Files | Path |
|----------|-------|------|
| Foundation (topbar, grid, hero, footer) | 8 | `components/foundation/` |
| Typography & headings | 2 | `components/typography/` |
| Cards (7 colours, accent, dark, KPI) | 6 | `components/cards/` |
| Navigation (tabs, sidebar, pagination) | 7 | `components/navigation/` |
| Chips, badges, status dots | 1 | `components/chips-badges/` |
| Tables, info rows, leaderboard, feed | 3 | `components/tables/` |
| Alerts (4 variants) | 1 | `components/alerts/` |
| Buttons (9 colours × 3 sizes) | 1 | `components/buttons/` |
| Forms (inputs, controls, tags, multi-section) | 4 | `components/forms/` |
| Modals & drawers (6 types) | 6 | `components/modals-drawers/` |
| Checklists & steppers | 3 | `components/checklists-steppers/` |
| KPI widgets (delta, sparkline, bullet, hybrid) | 4 | `components/kpi-widgets/` |
| Charts (25 types) | 25 | `components/charts/` |
| Data viz (Sankey, candlestick, forest, etc.) | 7 | `components/data-viz/` |
| CRM (18 NDIS patterns) | 18 | `components/crm/` |
| Calendar & tasks (6 views) | 6 | `components/calendar-tasks/` |
| Productivity (kanban, AI, analytics) | 4 | `components/productivity/` |
| Progress bars & donuts | 2 | `components/progress-donuts/` |
| UI states (empty, skeleton, error, toast, flow, diff) | 6 | `components/ui-states/` |
| Interactions (scroll reveal, 23 patterns) | 2 | `components/interactions/` |

---

## BRAND IDENTITY — NON-NEGOTIABLE

### Colours

| Token | Hex | Role | Text on |
|-------|-----|------|---------|
| `--lx-pink` | `#FF2D7D` | **Primary** — CTAs, active, accent | White |
| `--lx-yellow` | `#CCFF00` | **Secondary** — highlights, confirm, ticker | Black |
| `--lx-orange` | `#FF6600` | Warnings, urgent, review | White |
| `--lx-cyan` | `#00D4FF` | Info, secondary data | Black |
| `--lx-blue` | `#2979FF` | Progress, data series | White |
| `--lx-purple` | `#B14EFF` | Stats, AI, donuts | White |
| `--lx-black` | `#0D0D0D` | Topbar, dark cards, nav | Off-white |
| `--lx-offwhite` | `#F5F0E8` | **Page background** (NEVER pure white) | Dark |
| `--lx-cream` | `#FAF7F2` | Card alt, panels, table headers | Dark |
| `--lx-navy` | `#0A0F1C` | Footer, nav variant | Off-white |

**🚫 BANNED: `#00C853` (green) — NEVER use as brand colour.**

### Typography

| Font | Classes | Use |
|------|---------|-----|
| **Bebas Neue** | `.lx-stat` (52px) · `.lx-xl` (80px) · `.lx-dsm` (24px) · `.lx-ghost` (110px) | KPI numbers, stats, ghost watermarks |
| **Barlow Condensed 900** | `.lx-cxl` (28px) · `.lx-clg` (20px) · `.lx-cmd` (15px) · `.lx-csm` (12px) | Section headings, tab labels, button text |
| **Barlow** | `.lx-blg` (15px) · `.lx-b` (13px) · `.lx-bsm` (11px) · `.lx-bxs` (10px) | Body text |
| **JetBrains Mono 700** | `.lx-mlg` (13px) · `.lx-mmd` (11px) · `.lx-msm` (9px) · `.lx-eye` (8px) | Data, metadata, eyebrows, chips, table headers |

**Google Fonts link (ALWAYS include):**
```html
<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Barlow:wght@400;500;600;700;900&family=Barlow+Condensed:wght@900&family=JetBrains+Mono:wght@500;700&display=swap" rel="stylesheet">
```

### Spacing, Radius, Shadows, Easing

```
Radius: --r-xs:6px · --r-sm:10px · --r-md:16px · --r-lg:24px · --r-xl:32px · --r-p:999px
Shadows: --sh-sm (subtle) · --sh-md (medium) · --sh-hv (hover bloom: 0 16px 48px rgba(0,0,0,.13))
Easing: --ease (standard) · --spring (bouncy: cubic-bezier(.34,1.56,.64,1))
```

### Visual DNA

- **Warm off-white** `#F5F0E8` background — NEVER cold white
- **Black topbar** with `LIMIT<span>LESS</span> ∞` + JetBrains Mono badges
- **Rainbow gradient stripe**: `linear-gradient(90deg, #FF2D7D, #FF6600, #CCFF00, #00D4FF)`
- **Ghost watermarks** — oversized Bebas Neue behind cards at ~2.5% opacity
- **Asymmetric card corners** — one XL corner (`.tl` `.tr` `.bl` `.br`)
- **Card hover** — `translateY(-3px)` + shadow bloom on every `.lx-card`
- **Neo-brutalist** — thick borders, hard shadows, poster-energy uppercase, monospace data
- **12-column bento grid** — `.lx-bento` with `.lx-s1` through `.lx-s12`

### Colour Standards

| Context | Pink | Orange | Cyan | Blue | Purple | Yellow |
|---------|------|--------|------|------|--------|--------|
| Calendar | NDIS | Medical | School | — | Personal | — |
| Priority | Critical | High | Medium | Low | — | — |
| Alert | Danger | Warning | Info | — | — | Success |

---

## CLASS LIBRARY — COMPLETE REFERENCE

### Layout
`.lx-bento` 12-col grid · `.lx-s1`–`.lx-s12` spans · `.lx-r2` `.lx-r3` row spans

### Cards
`.lx-card` white · `.dark` `.pink` `.yellow` `.cyan` `.cream` `.navy` colour variants
`.tl` `.tr` `.bl` `.br` `.ptop` `.pbot` asymmetric radius
`.lx-acc` accent border (`.yel` `.cyn` `.org` `.pur` `.blu` colour variants)
`.lx-dbox` dark box with `.lx-dtitle` (Bebas, yellow)

### Topbar
`.lx-topbar` · `.lx-tlogo` · `.lx-tmeta` · `.lx-tbadge` (`.pink` `.cyan` `.alert`)
`.lx-stripe` rainbow gradient

### Section Headings
`.lx-sh.v1` pink bg/yellow text · `.v2` yellow/pink · `.v3` pink/white · `.v4` yellow/navy
`.lx-sh.pk` `.cy` `.yw` `.or` `.bl` `.pu` underline variants

### Chips
`.lx-chip.pk` `.yw` `.cy` `.or` `.pu` `.bl` `.gn` `.dk` outlined
`.lx-chip.spk` `.syw` `.scy` `.sbk` solid

### Buttons
`.lx-btn.pk` `.cy` `.yw` `.or` `.pu` `.bl` `.bk` `.ghost` 9 variants
`.lx-btn.sm` `.lg` sizes

### Tables
`.lx-tbl` + `th` `td` · `.lx-tb` bold · `.lx-tm` mono · `.lx-ttot` total row
`.lx-ir` info row · `.lx-ik` key · `.lx-iv` value (Bebas pink) · `.lx-iv.n` normal
`.lx-krow` KPI row · `.lx-k` · `.lx-kv` · `.lx-kl`

### Alerts
`.lx-al.inf` cyan · `.wrn` orange · `.dng` pink · `.suc` green
`.lx-at` title · `.lx-ab` body

### Progress Bars
`.lx-pw` wrapper · `.lx-ph` header · `.lx-pk2` label · `.lx-pv` value
`.lx-pt` track (`.tk` thick) · `.lx-pf` fill (`.cy` `.or` `.pu` `.bl` `.yw` `.gn` · `.st` striped)

### Donuts
`.lx-dw` wrapper · `svg` with `.lx-dtrk` track + `.lx-dfl` fill (`data-pct="72"`)
`.lx-dlbl` centre label · `.lx-dsl` percent suffix

### Tabs
`.lx-tabs` dark grid · `.lx-tab` buttons (`.tc-pk` `.tc-cy` `.tc-yw` `.tc-or` `.tc-pu` `.tc-bl`)
`.lx-ptabs` light pill (`.pk` `.cy` `.yw` · `.ul` underline variant)
`.lx-tpanel` panels · `.lx-tc` count badge

### Navigation
`.lx-snav` sidebar · `.lx-ni` nav item (`.active`) · `.lx-nbadge` · `.lx-nsec` section
`.lx-tnav` top nav · `.lx-tni` items · `.lx-bc` breadcrumb · `.lx-bci` crumbs
`.lx-pag` pagination (`.pk` `.cy` `.yw` `.dk` `.pl` `.co`)

### Dropdowns
`.dd` / `.lx-dd` · `.dd-h` header · `.dd-body` content · `.dd-arrow` (`.arr-pk` `.arr-cy` `.arr-bl` `.arr-or` `.arr-yw` `.arr-pu`)

### Checklists
`.ck` / `.lx-ck` · `.ck-box` · `.ck-text` · `.done` state
`.urg-c` critical (pink) · `.urg-h` high (orange) · `.urg-m` medium (cyan) · `.urg-s` standard (blue)

### Status Dots
`.lx-dot` pink default · `.pulse` · `.gn` `.cy` `.or` `.yw` `.pu`

### Utilities
`.fx` `.fxb` `.fxc` flex · `.g2`–`.g6` gaps · `.mb2`–`.mb4` `.mt2`–`.mt4` margins
`.cpk` `.cyw` `.ccy` `.cor` `.cpu` `.cbl` `.cm` `.cl` text colours · `.bld` bold

### Responsive
`@media(max-width:900px)` → 6-col · `@media(max-width:600px)` → 1-col

---

## HTML SKELETON — START EVERY BUILD WITH THIS

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>LIMITLESS ∞ [Name]</title>
  <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Barlow:wght@400;500;600;700;900&family=Barlow+Condensed:wght@900&family=JetBrains+Mono:wght@500;700&display=swap" rel="stylesheet">
  <style>
    /* ══ PASTE references/core-css.md HERE ══ */
  </style>
</head>
<body>
  <div class="lx-topbar">
    <div class="lx-tlogo">LIMIT<span>LESS</span> ∞</div>
    <div style="display:flex;gap:8px;align-items:center">
      <span class="lx-tmeta">[CONTEXT]</span>
      <span class="lx-tbadge">[BADGE]</span>
    </div>
  </div>
  <div class="lx-stripe"></div>
  <!-- Suite hero -->
  <div style="text-align:center;padding:30px 10px">
    <div class="lx-eye" style="color:var(--lx-pink)">LIMITLESS SUPPORT CO.</div>
    <div style="font-family:Bebas Neue,serif;font-size:clamp(32px,6vw,56px);line-height:.9">[TITLE]</div>
    <div class="lx-bsm cm" style="margin-top:8px">[Subtitle]</div>
  </div>
  <div class="lx-bento">
    <!-- Content cards using lx-s1 through lx-s12 -->
  </div>
  <script>
    /* ══ CORE JS ══ */
    document.querySelectorAll('.lx-tab').forEach(t=>{t.addEventListener('click',()=>{const g=t.closest('.lx-tabs')||t.closest('.lx-ptabs')||t.parentElement;g.querySelectorAll('.lx-tab').forEach(x=>x.classList.remove('active'));t.classList.add('active');const id=t.dataset.tab;if(id){document.querySelectorAll('.lx-tpanel').forEach(p=>p.classList.remove('active'));const p=document.getElementById(id);if(p)p.classList.add('active')}})});
    document.querySelectorAll('.ck,.lx-ck').forEach(c=>{c.addEventListener('click',()=>c.classList.toggle('done'))});
    document.querySelectorAll('.dd-h,.lx-dd-h,.lx-dh').forEach(h=>{h.addEventListener('click',()=>h.parentElement.classList.toggle('open'))});
    const ro=new IntersectionObserver(e=>{e.forEach(x=>{if(x.isIntersecting)x.target.classList.add('vis')})},{threshold:.15});document.querySelectorAll('.lx-rev,.rv').forEach(el=>ro.observe(el));
    setTimeout(()=>{document.querySelectorAll('.lx-dfl').forEach(el=>{const p=parseFloat(el.dataset.pct||0),c=2*Math.PI*43;el.style.strokeDasharray=`${(p/100)*c} ${c}`})},300);
    document.querySelectorAll('.lx-pf[data-w]').forEach(b=>{const w=b.dataset.w;b.style.width='0';setTimeout(()=>{b.style.width=w},300)});
    document.querySelectorAll('.lx-toggle-row').forEach(r=>{r.addEventListener('click',()=>{const t=r.querySelector('.lx-tog');if(t)t.classList.toggle('on')})});
  </script>
</body>
</html>
```

---

## PRE-SHIP CHECKLIST

- [ ] Core CSS from `references/core-css.md` pasted into `<style>`
- [ ] Google Fonts link included (all 4 families)
- [ ] Background is `#F5F0E8` — not white
- [ ] No `#00C853` green anywhere
- [ ] Topbar with `LIMITLESS ∞` + gradient stripe
- [ ] Suite hero between stripe and first content
- [ ] Cards use `.lx-card` with colour/radius variants
- [ ] Typography hierarchy: display → condensed → body → mono
- [ ] Core JS block included
- [ ] Card hover effects working
- [ ] Donuts/progress bars animate on load
- [ ] Responsive breakpoints preserved
