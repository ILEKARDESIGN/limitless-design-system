---
name: limitless-design-system
description: "LIMITLESS Support Co. design system with 116 components. USE for ANY LIMITLESS/NDIS output: dashboards, widgets, artifacts, reports, plans, schedules, budgets, CRM, forms, modals, charts, participant views, case notes, compliance, risk assessments, goal tracking, service agreements, intake forms, referrals, invoices. Triggers on: NDIS, participant, support coordination, dashboard, widget, chart, KPI, donut, progress bar, Gantt, kanban, calendar, Sankey, radar, funnel, candlestick, choropleth, tree/org chart, toast, drawer, modal, skeleton, empty state, waterfall, histogram, burndown, pictogram, sparkline, bento grid, lx- classes. Contains full CSS, 116 HTML patterns, brand rules, typography tokens, JavaScript. ALWAYS use before building ANY HTML — ensures pixel-perfect LIMITLESS branding."
---

# LIMITLESS Design System v3.0 — 116 Components

## HOW TO USE THIS SKILL

**Step 1 — Always load `references/core-css.md`** and paste into every `<style>` block.

**Step 2 — Load ONE pattern file based on what you're building:**

| Building... | Load this reference |
|-------------|-------------------|
| Topbar, cards, nav, tabs, buttons, chips, tables, alerts, typography, pagination, dropdowns, footer | `references/patterns-foundation.md` (30 components) |
| Any chart, KPI widget, donut, progress bar, gauge, Gantt, Sankey, funnel, radar, histogram, pictogram | `references/patterns-charts.md` (36 components) |
| Participant views, budget, caseload, goals, services, billing, timeline, referral pipeline | `references/patterns-crm.md` (20 components) |
| Modals, drawers, forms, toasts, calendar, kanban, AI chat, checklist, stepper, empty/error/skeleton states | `references/patterns-interactive.md` (30 components) |
| Complex multi-domain dashboard | Load ALL pattern files |

**Step 3 — Copy the HTML pattern** from the reference file directly into your output. All patterns are render-ready.

**For pixel-perfect fidelity from original showcases:** Read from GitHub `https://github.com/ILEKARDESIGN/limitless-design-system/tree/main/pages/`

---

## BRAND IDENTITY — NON-NEGOTIABLE

### Colours
| Token | Hex | Role |
|-------|-----|------|
| `--lx-pink` | `#FF2D7D` | **Primary** — CTAs, active, accent |
| `--lx-yellow` | `#CCFF00` | **Secondary** — highlights, confirm |
| `--lx-orange` | `#FF6600` | Warnings, urgent |
| `--lx-cyan` | `#00D4FF` | Info, secondary data |
| `--lx-blue` | `#2979FF` | Progress, data series |
| `--lx-purple` | `#B14EFF` | Stats, AI, donuts |
| `--lx-black` | `#0D0D0D` | Topbar, dark cards |
| `--lx-offwhite` | `#F5F0E8` | Page background (NEVER white) |
| `--lx-cream` | `#FAF7F2` | Card alt, panels |
| `--lx-navy` | `#0A0F1C` | Footer variant |

🚫 **BANNED: `#00C853` green**

### Typography
| Font | Classes | Use |
|------|---------|-----|
| **Bebas Neue** | `.lx-stat`(52px) `.lx-xl`(80px) `.lx-dsm`(24px) `.lx-ghost`(110px) | KPIs, stats, watermarks |
| **Barlow Condensed 900** | `.lx-cxl`(28px) `.lx-clg`(20px) `.lx-cmd`(15px) `.lx-csm`(12px) | Headings, tabs, buttons |
| **Barlow** | `.lx-blg`(15px) `.lx-b`(13px) `.lx-bsm`(11px) `.lx-bxs`(10px) | Body |
| **JetBrains Mono 700** | `.lx-mlg`(13px) `.lx-mmd`(11px) `.lx-msm`(9px) `.lx-eye`(8px) | Data, metadata, chips |

```html
<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Barlow:wght@400;500;600;700;900&family=Barlow+Condensed:wght@900&family=JetBrains+Mono:wght@500;700&display=swap" rel="stylesheet">
```

### Visual DNA
- Warm off-white `#F5F0E8` — NEVER cold white
- Black topbar: `LIMIT<span>LESS</span> ∞` + stripe: `linear-gradient(90deg, #FF2D7D, #FF6600, #CCFF00, #00D4FF)`
- Ghost watermarks — Bebas Neue at ~2.5% opacity
- Asymmetric card corners — one XL (`.tl` `.tr` `.bl` `.br`)
- Card hover — `translateY(-3px)` + shadow bloom
- 12-column bento grid — `.lx-bento` `.lx-s1`–`.lx-s12`

### Colour Standards
Calendar: NDIS=pink · School=cyan · Medical=orange · Personal=purple
Priority: Critical=pink · High=orange · Medium=cyan · Low=blue
Alert: Danger=pink · Warning=orange · Info=cyan · Success=yellow-green

---

## COMPLETE CLASS LIBRARY

**Layout:** `.lx-bento` `.lx-s1`–`.lx-s12` `.lx-r2` `.lx-r3`
**Cards:** `.lx-card` `.dark` `.pink` `.yellow` `.cyan` `.cream` `.navy` · `.tl` `.tr` `.bl` `.br` `.ptop` `.pbot` · `.lx-acc` `.yel` `.cyn` `.org` `.pur` `.blu` · `.lx-dbox` `.lx-dtitle`
**Topbar:** `.lx-topbar` `.lx-tlogo` `.lx-tmeta` `.lx-tbadge` `.pink` `.cyan` `.alert` · `.lx-stripe`
**Headings:** `.lx-sh` `.v1` `.v2` `.v3` `.v4` (highlight) · `.pk` `.cy` `.yw` `.or` `.bl` `.pu` (underline)
**Chips:** `.lx-chip` `.pk` `.yw` `.cy` `.or` `.pu` `.bl` `.gn` `.dk` (outline) · `.spk` `.syw` `.scy` `.sbk` (solid)
**Buttons:** `.lx-btn` `.pk` `.cy` `.yw` `.or` `.pu` `.bl` `.bk` `.ghost` · `.sm` `.lg`
**Tables:** `.lx-tbl` `.lx-tb` `.lx-tm` `.lx-ttot` · `.lx-ir` `.lx-ik` `.lx-iv` `.lx-iv.n` · `.lx-krow` `.lx-kv` `.lx-kl`
**Alerts:** `.lx-al` `.inf` `.wrn` `.dng` `.suc` · `.lx-at` `.lx-ab`
**Progress:** `.lx-pw` `.lx-ph` `.lx-pk2` `.lx-pv` `.lx-pt` `.tk` · `.lx-pf` `.cy` `.or` `.pu` `.bl` `.yw` `.st`
**Donuts:** `.lx-dw` `.lx-dtrk` `.lx-dfl` `data-pct` `.lx-dlbl` `.lx-dsl`
**Tabs:** `.lx-tabs` `.lx-tab` `.tc-pk` `.tc-cy` `.tc-yw` `.tc-or` `.tc-pu` `.tc-bl` · `.lx-ptabs` `.pk` `.cy` `.yw` `.ul` · `.lx-tpanel` `.lx-tc`
**Nav:** `.lx-snav` `.lx-ni` `.lx-nbadge` `.lx-nsec` · `.lx-tnav` `.lx-tni` · `.lx-bc` `.lx-bci` · `.lx-pag`
**Dropdowns:** `.dd` `.dd-h` `.dd-body` `.dd-arrow` `.arr-pk` `.arr-cy` `.arr-bl` `.arr-or` `.arr-yw` `.arr-pu`
**Checklists:** `.ck` `.ck-box` `.ck-text` `.done` · `.urg-c` `.urg-h` `.urg-m` `.urg-s`
**Dots:** `.lx-dot` `.pulse` `.gn` `.cy` `.or` `.yw` `.pu`
**Special:** `.resp` `.school` `.sc` `.both` `.gov` `.warn` · `.rec` `.rec-num`
**Utils:** `.fx` `.fxb` `.fxc` · `.g2`–`.g6` · `.mb2`–`.mb4` `.mt2`–`.mt4` · `.cpk` `.cyw` `.ccy` `.cor` `.cpu` `.cbl` `.cm` `.cl` `.bld`

---

## 116-COMPONENT REGISTRY

### patterns-foundation.md (30 components — S00)
Topbar · Rainbow Stripe · Bento Grid · Suite Hero (dark + minimal) · Footer · Colour Tokens · Ticker · Dividers · Type Scale · Section Headings (highlight + underline) · Card Variants (7 colours + radius) · Accent Cards (6 borders) · Dark Box · KPI Stat Card · Responsibility Cards · Numbered Recommendations · Chips (8 outlined + 4 solid) · Status Dots · Buttons (9 colours × 3 sizes + ghost) · Alerts (4 variants) · Data Table · Leaderboard · Activity Feed · Dark Tabs · Pill Tabs · Spotlight Tabs (animated) · Sidebar Nav · Top Nav + Breadcrumb · Pagination · Dropdowns/Accordions · Scroll Reveal

### patterns-charts.md (36 components — S01, S02, S03, S06)
Delta Card · Sparkline Card · Bullet KPI · KPI+Sparkline Hybrid · Vertical Bar · Horizontal Bar · Stacked Bar · Grouped Bar · 100% Stacked Bar · Lollipop/Dumbbell · Waterfall/Pareto · Tornado/Diverging · Slope Chart · Line Chart (single + forecast) · Area/Stacked Area · Donut/Gauge · Sunburst · Histogram/KDE · Radar/Spider · Error Bars/CI · Candlestick/OHLC · Forest Plot · Sankey/Flow · Funnel/Pipeline · Tree/Org Chart · Force Network · Choropleth/Map · Risk Matrix · Gantt Chart · Burndown/Burnup · Gauge/Angular · Pictogram · Bar+Line Combo · Horizon/Sparkline Dashboard · NDIS Budget Projection · Risk Forecasting · Trend Analysis/Rolling Average

### patterns-crm.md (20 components — S05, S09)
Participant Hero Card · Entity Card Grid · Budget Envelope · Spend Pacing · Caseload Table · Caseload Distribution · Claim Reconciliation · Communication Timeline · Contact Relationship Map · Goal Staircase · Goals+Plan History · Implementation Progress · Participant Timeline · Referral Pipeline · Service Overlap Timeline · Services Table · Billable Hours Widget · Assessment Delta Radar · Task Creation Modal · Dashboard Shell

### patterns-interactive.md (30 components — S04, S07, S08, S10, S11)
Confirm Modal · Intake Form Modal · Dark Alert Modal · Right Drawer · Bottom Sheet · Activity Tray · Form Inputs · Form Controls (toggles/checkboxes/radios) · Tag Input · Multi-Section Form · Toast Notifications (4 types) · Compact Master Checklist · Checklists with Urgency · Stepper/Wizard · Calendar Month · Daily Schedule · Weekly Schedule · Task List with Priority · Project List+Subtasks · Project Board+Subtasks · Kanban Board · AI Brain Chat · Practice Analytics · Empty State · Loading Skeleton · Error State · Process Flow · Approval Chain · Comparison/Diff View · 23 Interactive Patterns Reference

---

## HTML SKELETON — START EVERY BUILD

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>LIMITLESS ∞ [Name]</title>
  <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Barlow:wght@400;500;600;700;900&family=Barlow+Condensed:wght@900&family=JetBrains+Mono:wght@500;700&display=swap" rel="stylesheet">
  <style>/* PASTE references/core-css.md HERE */</style>
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
  <div style="text-align:center;padding:30px 10px">
    <div class="lx-eye" style="color:var(--lx-pink)">LIMITLESS SUPPORT CO.</div>
    <div style="font-family:Bebas Neue,serif;font-size:clamp(32px,6vw,56px);line-height:.9">[TITLE]</div>
  </div>
  <div class="lx-bento"><!-- Content --></div>
  <script>
  document.querySelectorAll('.lx-tab').forEach(t=>{t.addEventListener('click',()=>{const g=t.closest('.lx-tabs')||t.closest('.lx-ptabs')||t.parentElement;g.querySelectorAll('.lx-tab').forEach(x=>x.classList.remove('active'));t.classList.add('active');const id=t.dataset.tab;if(id){document.querySelectorAll('.lx-tpanel').forEach(p=>p.classList.remove('active'));const p=document.getElementById(id);if(p)p.classList.add('active')}})});
  document.querySelectorAll('.ck,.lx-ck').forEach(c=>{c.addEventListener('click',()=>c.classList.toggle('done'))});
  document.querySelectorAll('.dd-h,.lx-dd-h').forEach(h=>{h.addEventListener('click',()=>h.parentElement.classList.toggle('open'))});
  const ro=new IntersectionObserver(e=>{e.forEach(x=>{if(x.isIntersecting)x.target.classList.add('vis')})},{threshold:.15});document.querySelectorAll('.lx-rev,.rv').forEach(el=>ro.observe(el));
  setTimeout(()=>{document.querySelectorAll('.lx-dfl').forEach(el=>{const p=parseFloat(el.dataset.pct||0),c=2*Math.PI*43;el.style.strokeDasharray=`${(p/100)*c} ${c}`})},300);
  document.querySelectorAll('.lx-pf[data-w]').forEach(b=>{b.style.width='0';setTimeout(()=>{b.style.width=b.dataset.w},300)});
  document.querySelectorAll('.lx-toggle-row').forEach(r=>{r.addEventListener('click',()=>{const t=r.querySelector('.lx-tog');if(t)t.classList.toggle('on')})});
  </script>
</body>
</html>
```

---

## PRE-SHIP CHECKLIST
- [ ] Core CSS from `references/core-css.md` in `<style>`
- [ ] Google Fonts link (all 4 families)
- [ ] Background `#F5F0E8` — not white
- [ ] No `#00C853` green
- [ ] Topbar + stripe
- [ ] Suite hero
- [ ] Cards with `.lx-card` + variants
- [ ] Typography: Bebas → Condensed → Barlow → Mono
- [ ] Core JS included
- [ ] Hover effects + animations working
