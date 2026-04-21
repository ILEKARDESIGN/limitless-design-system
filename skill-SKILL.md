---
name: limitless-design-system
description: "LIMITLESS Support Co. design system with 116 components. USE for ANY LIMITLESS/NDIS output: dashboards, widgets, artifacts, reports, plans, schedules, budgets, CRM, forms, modals, charts, participant views, case notes, compliance, risk assessments, goal tracking, service agreements, intake forms, referrals, invoices. Triggers on: NDIS, participant, support coordination, dashboard, widget, chart, KPI, donut, progress bar, Gantt, kanban, calendar, Sankey, radar, funnel, candlestick, choropleth, tree/org chart, toast, drawer, modal, skeleton, empty state, waterfall, histogram, burndown, pictogram, sparkline, bento grid, lx- classes. Contains full CSS, 116 HTML patterns, brand rules, typography tokens, JavaScript. ALWAYS use before building ANY HTML — ensures pixel-perfect LIMITLESS branding."
---

# LIMITLESS Design System Skill v3.0 — 116 Components

## HOW THIS SKILL WORKS

1. **Read this SKILL.md first** — it has brand rules, class library, component registry, HTML skeleton, and core JS.
2. **Always load `references/core-css.md`** — paste into every `<style>` block. This is mandatory for every build.
3. **Load `references/component-patterns.md`** when building specific components — it contains ALL 116 render-ready HTML patterns organised by showcase, extracted verbatim from the canonical source files.
4. **For pixel-perfect fidelity**, read the source showcase HTML from GitHub: `https://github.com/ILEKARDESIGN/limitless-design-system/tree/main/pages/`

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

🚫 **BANNED: `#00C853` green — never use.**

### Typography
| Font | Classes | Use |
|------|---------|-----|
| **Bebas Neue** | `.lx-stat`(52px) `.lx-xl`(80px) `.lx-dsm`(24px) `.lx-ghost`(110px) | KPIs, stats, watermarks |
| **Barlow Condensed 900** | `.lx-cxl`(28px) `.lx-clg`(20px) `.lx-cmd`(15px) `.lx-csm`(12px) | Headings, tabs, buttons |
| **Barlow** | `.lx-blg`(15px) `.lx-b`(13px) `.lx-bsm`(11px) `.lx-bxs`(10px) | Body text |
| **JetBrains Mono 700** | `.lx-mlg`(13px) `.lx-mmd`(11px) `.lx-msm`(9px) `.lx-eye`(8px) | Data, metadata, chips |

```html
<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Barlow:wght@400;500;600;700;900&family=Barlow+Condensed:wght@900&family=JetBrains+Mono:wght@500;700&display=swap" rel="stylesheet">
```

### Visual DNA
- Warm off-white `#F5F0E8` background — NEVER cold white
- Black topbar: `LIMIT<span>LESS</span> ∞` + rainbow stripe: `linear-gradient(90deg, #FF2D7D, #FF6600, #CCFF00, #00D4FF)`
- Ghost watermarks — oversized Bebas Neue at ~2.5% opacity behind cards
- Asymmetric card corners — one XL (32px) corner per card (`.tl` `.tr` `.bl` `.br`)
- Card hover — `translateY(-3px)` + shadow bloom
- 12-column bento grid — `.lx-bento` with `.lx-s1`–`.lx-s12`
- Radius: `--r-xs:6px` `--r-sm:10px` `--r-md:16px` `--r-lg:24px` `--r-xl:32px` `--r-p:999px`
- Shadows: `--sh-sm` `--sh-md` `--sh-hv` · Easing: `--ease` `--spring`

### Colour Standards
Calendar: NDIS=pink · School=cyan · Medical=orange · Personal=purple
Priority: Critical=pink · High=orange · Medium=cyan · Low=blue
Alert: Danger=pink · Warning=orange · Info=cyan · Success=yellow-green

---

## COMPLETE CLASS LIBRARY

**Layout:** `.lx-bento` `.lx-s1`–`.lx-s12` `.lx-r2` `.lx-r3`
**Cards:** `.lx-card` (`.dark` `.pink` `.yellow` `.cyan` `.cream` `.navy`) · `.tl` `.tr` `.bl` `.br` `.ptop` `.pbot` · `.lx-acc` (`.yel` `.cyn` `.org` `.pur` `.blu`) · `.lx-dbox` `.lx-dtitle`
**Topbar:** `.lx-topbar` `.lx-tlogo` `.lx-tmeta` `.lx-tbadge` (`.pink` `.cyan` `.alert`) · `.lx-stripe`
**Headings:** `.lx-sh` (`.v1` `.v2` `.v3` `.v4` inline highlight) · (`.pk` `.cy` `.yw` `.or` `.bl` `.pu` underline)
**Chips:** `.lx-chip` (`.pk` `.yw` `.cy` `.or` `.pu` `.bl` `.gn` `.dk` outlined) · (`.spk` `.syw` `.scy` `.sbk` solid)
**Buttons:** `.lx-btn` (`.pk` `.cy` `.yw` `.or` `.pu` `.bl` `.bk` `.ghost`) · `.sm` `.lg`
**Tables:** `.lx-tbl` `th` `td` `.lx-tb` `.lx-tm` `.lx-ttot` · `.lx-ir` `.lx-ik` `.lx-iv` `.lx-iv.n` · `.lx-krow` `.lx-k` `.lx-kv` `.lx-kl`
**Alerts:** `.lx-al` (`.inf` `.wrn` `.dng` `.suc`) · `.lx-at` `.lx-ab`
**Progress:** `.lx-pw` `.lx-ph` `.lx-pk2` `.lx-pv` `.lx-pt` (`.tk`) `.lx-pf` (`.cy` `.or` `.pu` `.bl` `.yw` `.gn` · `.st`)
**Donuts:** `.lx-dw` `.lx-dtrk` `.lx-dfl` (data-pct) `.lx-dlbl` `.lx-dsl`
**Tabs:** `.lx-tabs` `.lx-tab` (`.tc-pk` `.tc-cy` `.tc-yw` `.tc-or` `.tc-pu` `.tc-bl`) · `.lx-ptabs` (`.pk` `.cy` `.yw` `.ul`) · `.lx-tpanel` `.lx-tc`
**Nav:** `.lx-snav` `.lx-ni` `.lx-nbadge` `.lx-nsec` · `.lx-tnav` `.lx-tni` · `.lx-bc` `.lx-bci` · `.lx-pag` (`.pk` `.cy` `.dk` `.pl`)
**Dropdowns:** `.dd` `.dd-h` `.dd-body` `.dd-arrow` (`.arr-pk` `.arr-cy` `.arr-bl` `.arr-or` `.arr-yw` `.arr-pu`)
**Checklists:** `.ck` `.ck-box` `.ck-text` `.done` · `.urg-c` `.urg-h` `.urg-m` `.urg-s`
**Dots:** `.lx-dot` `.pulse` `.gn` `.cy` `.or` `.yw` `.pu`
**Cards:** `.resp` (`.school` `.sc` `.both` `.gov` `.warn`) `.resp-tag` · `.rec` `.rec-num`
**Utils:** `.fx` `.fxb` `.fxc` · `.g2`–`.g6` · `.mb2`–`.mb4` `.mt2`–`.mt4` · `.cpk` `.cyw` `.ccy` `.cor` `.cpu` `.cbl` `.cm` `.cl` `.bld`

---

## COMPLETE 116-COMPONENT REGISTRY

Every mandatory item mapped to its showcase source and GitHub component file. When asked to build any of these, load `references/component-patterns.md` for the render-ready HTML.

### S00 — Foundation (14 components)
| Component | GitHub File |
|-----------|-----------|
| Colour Tokens | `components/foundation/colour-tokens.html` |
| Typography Scale | `components/typography/type-scale.html` |
| Topbar | `components/foundation/topbar.html` |
| Bento Grid + Card System | `components/foundation/bento-grid.html` |
| Card Variants (7 colours + radius) | `components/cards/card-variants.html` |
| Accent Cards (6 borders) | `components/cards/accent-cards.html` |
| Chips / Badges / Status Dots | `components/chips-badges/chips.html` |
| Info Rows + Dark Box + KPI Row | `components/cards/dark-box.html` + `components/tables/data-table.html` |
| Checklist (interactive toggle) | `components/checklists-steppers/checklists.html` |
| Responsibility Cards | `components/cards/responsibility-cards.html` |
| Numbered Recommendation Cards | `components/cards/numbered-rec.html` |
| Buttons (9 colours × 3 sizes) + Status Dots | `components/buttons/buttons.html` |
| Light Pill Tabs / Underline Tabs | `components/navigation/tabs-pill.html` |
| Pagination | `components/navigation/pagination.html` |
| Sidebar Nav + Top Nav + Breadcrumb | `components/navigation/sidebar-nav.html` + `components/navigation/top-nav-breadcrumb.html` |
| Scroll Reveal | `components/interactions/scroll-reveal.html` |

### S01 — Data Presentation & Charts (23 components)
| Component | GitHub File |
|-----------|-----------|
| Layout / Wrapper | `components/foundation/bento-grid.html` |
| Footer | `components/foundation/footer.html` |
| KPI Card / Stat Card / Big Number | `components/cards/kpi-card.html` |
| Delta Card / Variance Card | `components/kpi-widgets/delta-card.html` |
| Sparkline Card / Mini Trend Tile | `components/kpi-widgets/sparkline-card.html` |
| Bullet KPI / Target vs Actual / Benchmark | `components/kpi-widgets/bullet-kpi.html` |
| Data Table Family | `components/tables/data-table.html` |
| Leaderboard / Ranked List / Top-N | `components/tables/leaderboard.html` |
| Activity Feed / Timeline List / Status Board | `components/tables/activity-feed.html` |
| Vertical Bar / Column Chart | `components/charts/bar-chart.html` |
| Horizontal Bar Chart | `components/charts/horizontal-bar.html` |
| Stacked / Grouped / 100% Stacked Bar | `components/charts/stacked-bar.html` + `grouped-bar.html` + `stacked-100-bar.html` |
| Lollipop / Dumbbell / Dot Bar Hybrid | `components/charts/lollipop-chart.html` |
| Waterfall / Bridge / Pareto | `components/charts/waterfall-chart.html` |
| Tornado / Population Pyramid / Diverging Bar | `components/charts/tornado-diverging.html` |
| Slope Chart / Connected Dot Plot | `components/charts/slope-chart.html` |
| Line Chart Family | `components/charts/line-chart.html` |
| Area / Stacked Area / Streamgraph | `components/charts/area-chart.html` |
| Donut / Pie / Nested Donut / Gauge Donut | `components/progress-donuts/donut-charts.html` |
| Sunburst / Radial Treemap / Radial Partition | `components/charts/sunburst.html` |
| Histogram / Density Plot / KDE | `components/charts/histogram.html` |
| Radar / Spider / Star / Petal | `components/charts/radar-chart.html` |

### S02 — Statistical, Flow, Hierarchy, Spatial (7 components)
| Component | GitHub File |
|-----------|-----------|
| Error Bar / Confidence Interval / Prediction Band | `components/data-viz/error-bars.html` |
| Candlestick / OHLC / Range Bar | `components/data-viz/candlestick.html` |
| Forest Plot / Coefficient / Meta-Analysis | `components/data-viz/forest-plot.html` |
| Sankey / Alluvial / Flow Diagram | `components/data-viz/sankey-flow.html` |
| Conversion Funnel / Stepped Funnel / Pipeline | `components/charts/funnel-chart.html` |
| Tree Diagram / Org Chart / Dendrogram | `components/data-viz/tree-org-chart.html` |
| Force-Directed Graph / Network | `components/data-viz/force-network.html` |
| Choropleth / Region / Filled Map | `components/data-viz/choropleth-map.html` |
| Risk Matrix / Priority Matrix | `components/charts/risk-matrix.html` |

### S03 — Scheduling, Financial, Monitoring (8 components)
| Component | GitHub File |
|-----------|-----------|
| Gantt Chart / Resource Timeline | `components/charts/gantt-chart.html` |
| Kanban Board / Swimlane / Status Board | `components/productivity/kanban-board.html` |
| Burndown / Burnup / Workload / Utilization | `components/charts/burndown.html` |
| P&L Waterfall / Revenue Bridge / Budget vs Actual | `components/charts/waterfall-chart.html` |
| Progress Bar / Segmented / Linear Gauge | `components/progress-donuts/progress-bars.html` |
| Gauge / Angular Gauge / SLA Meter / Health Score | `components/charts/gauge.html` |
| Status Dots / Pulse Ring / Stoplight / Badge | `components/chips-badges/chips.html` |
| Pictogram / Icon Array / People Chart / Isotype | `components/charts/pictogram.html` |

### S04 — Hybrid & Interactive (4 components)
| Component | GitHub File |
|-----------|-----------|
| KPI + Sparkline + In-Cell Bars | `components/kpi-widgets/kpi-sparkline-hybrid.html` |
| Bar + Line Combo / Small Multiples | `components/charts/bar-line-combo.html` |
| 23 Interactive Patterns | `components/interactions/interactive-patterns-master.html` |
| Compact Master Checklist | `components/checklists-steppers/compact-master-checklist.html` |

### S05 — CRM & Entity Management (10 components)
| Component | GitHub File |
|-----------|-----------|
| Entity Card Grid / Participant Summary Tile | `components/crm/entity-card-grid.html` |
| Caseload Distribution / Workload Breakdown | `components/crm/caseload-distribution.html` |
| Contact Relationship Mini-Map / Support Network | `components/crm/contact-relationship-map.html` |
| Budget Envelope / Compartmentalized Budget View | `components/crm/budget-envelope.html` |
| Spend Pacing / Budget Forecast Projection | `components/crm/spend-pacing.html` |
| Claim Reconciliation / Invoice Matching | `components/crm/claim-reconciliation.html` |
| Service Period Overlap Timeline | `components/crm/service-overlap-timeline.html` |
| Referral Pipeline / Approval Workflow Tracker | `components/crm/referral-pipeline.html` |
| Assessment Delta Overlay / Before-After Radar | `components/crm/assessment-delta-radar.html` |
| Communication Thread Timeline / Case Notes Log | `components/crm/communication-timeline.html` |

### S06 — Foundational & NDIS Charts (10 components)
| Component | GitHub File |
|-----------|-----------|
| Line Graph — Single Series | `components/charts/line-chart.html` |
| Multi-Line / Stacked Line Graph | `components/charts/line-chart.html` |
| Area Chart — Single Series | `components/charts/area-chart.html` |
| Stacked Area Chart | `components/charts/area-chart.html` |
| Bar Chart — Categorical Comparison | `components/charts/bar-chart.html` |
| Stacked Bar Chart | `components/charts/stacked-bar.html` |
| Budget Expenditure — Projected · Actual · Trajectory | `components/charts/ndis-budget-projection.html` |
| Participant Timeline | `components/crm/participant-timeline.html` |
| Risk Forecasting / Risk Trajectory | `components/charts/risk-forecasting.html` |
| Trend Analysis — Rolling Average + Regression | `components/charts/trend-rolling-average.html` |

### S07 — Calendar, Tasks, Projects (7 components)
| Component | GitHub File |
|-----------|-----------|
| Calendar Month View | `components/calendar-tasks/calendar-month.html` |
| Daily Schedule / Day View | `components/calendar-tasks/daily-schedule.html` |
| Weekly Schedule / Week Planner | `components/calendar-tasks/weekly-schedule.html` |
| Task List / Checklist with Priority & Due Dates | `components/calendar-tasks/task-list-priority.html` |
| Taskboard / Kanban Board | `components/productivity/kanban-board.html` |
| Project List with Subtasks (Expandable) | `components/calendar-tasks/project-list-subtasks.html` |
| Project Board with Subtasks (Kanban-Style) | `components/calendar-tasks/project-board-subtasks.html` |

### S08 — Chart Variants, Process, UI States, Forms (11 components)
| Component | GitHub File |
|-----------|-----------|
| Grouped / Clustered Bar Chart | `components/charts/grouped-bar.html` |
| 100% Stacked Bar Chart | `components/charts/stacked-100-bar.html` |
| Horizon Graph / Multi-Row Sparkline Dashboard | `components/charts/horizon-sparkline-dashboard.html` |
| Step Progress Indicator | `components/checklists-steppers/stepper-wizard.html` |
| User Journey / Process Flow Diagram | `components/ui-states/process-flow.html` |
| Approval Chain / Sign-Off Tracker | `components/ui-states/process-flow.html` |
| Empty State | `components/ui-states/empty-state.html` |
| Loading Skeleton / Shimmer Placeholder | `components/ui-states/loading-skeleton.html` |
| Error State | `components/ui-states/error-state.html` |
| Multi-Section Form Layout | `components/forms/multi-section-form.html` |
| Comparison / Diff View | `components/ui-states/comparison-diff-view.html` |

### S09 — CRM Operations, Billing, App Chrome (7 components)
| Component | GitHub File |
|-----------|-----------|
| Caseload Table with Check-In Recency | `components/crm/caseload-table.html` |
| Implementation Progress Table | `components/crm/implementation-progress.html` |
| Services Table with Provider Assignment | `components/crm/services-table-provider.html` |
| Goals Display + Plan History List | `components/crm/goals-plan-history.html` |
| Billable Hours Composite Widget | `components/crm/billable-hours.html` |
| Task / Note Creation Modal | `components/modals-drawers/task-creation-modal.html` |
| Application Navigation Sidebar + Dashboard Shell | `components/productivity/dashboard-shell.html` |

### S10 — Interactive Components Suite (20 components)
| Component | GitHub File |
|-----------|-----------|
| Confirm Modal (SM) | `components/modals-drawers/modal-confirm.html` |
| Intake Form Modal (MD) | `components/modals-drawers/modal-intake.html` |
| Dark Alert Modal / Compliance Alert | `components/modals-drawers/dark-alert-modal.html` |
| Right Drawer (Participant) | `components/modals-drawers/drawer-right.html` |
| Bottom Sheet (Quick Actions) | `components/modals-drawers/bottom-sheet.html` |
| Fixed Activity Tray | `components/modals-drawers/bottom-sheet.html` |
| Button System — 9 Colours × 3 Sizes + Ghost | `components/buttons/buttons.html` |
| Chips & Badges — Status Indicators | `components/chips-badges/chips.html` |
| Alert Banners — 4 Variants | `components/alerts/alerts.html` |
| Input States + Select + Textarea + File Upload | `components/forms/form-inputs.html` |
| Tag Input — Multi-Select Diagnoses | `components/forms/tag-input.html` |
| Toast Notifications — Success/Warning/Info/Error | `components/ui-states/toast-notifications.html` |
| Dropdown / Accordion — NDIS Reference | `components/navigation/dropdowns.html` |
| Toggle Switches | `components/forms/form-controls.html` |
| Checkboxes | `components/forms/form-controls.html` |
| Radio Groups | `components/forms/form-controls.html` |
| Priority Checklist — LIMITLESS Caseload Actions | `components/checklists-steppers/compact-master-checklist.html` |
| Progress Stepper — Participant Intake Flow | `components/checklists-steppers/stepper-wizard.html` |

### S11 — Productivity Suite (4 components)
| Component | GitHub File |
|-----------|-----------|
| LIMITLESS Practice — Kanban Task Board | `components/productivity/kanban-board.html` |
| Weekly Scheduler | `components/calendar-tasks/weekly-schedule.html` |
| ARIA — AI Brain Interface | `components/productivity/ai-brain-chat.html` |
| Practice Analytics Dashboard — Snapshot | `components/productivity/practice-analytics.html` |

### Additional Foundation
| Component | GitHub File |
|-----------|-----------|
| Rainbow Stripe | `components/foundation/stripe.html` |
| Suite Hero (dark + minimal) | `components/foundation/hero.html` |
| Scrolling Ticker | `components/foundation/ticker.html` |
| Dividers (thin + thick) | `components/foundation/dividers.html` |
| Dark Tabs (6 colour classes) | `components/navigation/tabs-dark.html` |
| Spotlight Tabs (animated flying) | `components/navigation/spotlight-tabs.html` |
| Notification / Alert Panel | `components/alerts/alerts.html` |
| Goal Staircase | `components/crm/goal-staircase.html` |
| Participant Hero Card | `components/crm/participant-hero.html` |
| Participant Timeline | `components/crm/participant-timeline.html` |

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
  <div class="lx-bento"><!-- Cards here --></div>
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
- [ ] Topbar with LIMITLESS∞ + gradient stripe
- [ ] Suite hero between stripe and content
- [ ] Cards use `.lx-card` with variants
- [ ] Typography: Bebas→Condensed→Barlow→Mono
- [ ] Core JS included
- [ ] Card hover + donut/progress animations working
- [ ] Responsive breakpoints preserved
