# LIMITLESS Design System v3.0

**Neo-brutalist enterprise design system for NDIS support coordination platforms.**

> By LIMITLESS Support Co. — Ile Karamacoski, Director & Senior NDIS Support Coordinator

---

## Quick Start

### Option 1: Claude Design Integration
Link this repository in Claude Design's "Set up your design system" screen → "Link code on GitHub".

### Option 2: Direct HTML Usage
```html
<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Barlow:wght@400;500;600;700;900&family=Barlow+Condensed:wght@900&family=JetBrains+Mono:wght@500;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="css/limitless.css">
<script src="js/core.js" defer></script>
```

---

## Brand Identity

### Colour Palette

| Token | Hex | Role |
|-------|-----|------|
| `--lx-pink` | `#FF2D7D` | **Primary** — CTAs, active, accent |
| `--lx-yellow` | `#CCFF00` | **Secondary** — highlights, confirm |
| `--lx-orange` | `#FF6600` | Warnings, urgent |
| `--lx-cyan` | `#00D4FF` | Info, secondary data |
| `--lx-blue` | `#2979FF` | Progress, data series |
| `--lx-purple` | `#B14EFF` | Stats, AI, donuts |
| `--lx-black` | `#0D0D0D` | Topbar, dark cards |
| `--lx-offwhite` | `#F5F0E8` | Page background |
| `--lx-cream` | `#FAF7F2` | Card alt, panels |
| `--lx-navy` | `#0A0F1C` | Footer variant |

🚫 **BANNED: `#00C853` green** — never use as a brand colour.

### Typography Stack

| Font | Usage | Classes |
|------|-------|---------|
| **Bebas Neue** | KPI numbers, stats, ghost watermarks | `.lx-stat` `.lx-xl` `.lx-dsm` `.lx-ghost` |
| **Barlow Condensed 900** | Section headings, tab labels, buttons | `.lx-cxl` `.lx-clg` `.lx-cmd` `.lx-csm` |
| **Barlow** | Body text | `.lx-blg` `.lx-b` `.lx-bsm` `.lx-bxs` |
| **JetBrains Mono 700** | Data, metadata, eyebrows, chips | `.lx-mlg` `.lx-mmd` `.lx-msm` `.lx-eye` |

### Visual DNA
- Warm off-white `#F5F0E8` background (never pure white)
- Black topbar with `LIMITLESS ∞` logo + rainbow gradient stripe
- Ghost watermarks — oversized Bebas Neue at ~2.5% opacity
- Asymmetric card corners — one XL (32px) corner per card
- Card hover — `translateY(-3px)` + shadow bloom
- 12-column bento grid layout system

---

## Repository Structure

```
limitless-design-system/
├── README.md                    ← You are here
├── package.json
├── tokens/
│   ├── tokens.css               ← Design tokens (colours, spacing, radius, shadows)
│   └── fonts.css                ← Google Fonts @import
├── css/
│   └── limitless.css            ← Complete CSS (1,340 lines — all components)
├── js/
│   ├── core.js                  ← Tabs, checklists, dropdowns, donuts, progress, toggles
│   └── spotlight-tabs.js        ← Animated flying tab navigation system
├── components/                  ← Individual component demos (41 files)
│   ├── foundation/              ← Topbar, stripe, bento grid, hero, ticker, dividers
│   ├── typography/              ← Type scale, section headings
│   ├── cards/                   ← All card variants, accent, dark box, KPI, responsibility
│   ├── navigation/              ← Tabs (dark/pill/underline), sidebar, breadcrumb, pagination, dropdowns
│   ├── chips-badges/            ← Outlined + solid chips, badges, status dots
│   ├── buttons/                 ← Primary, secondary, outline, yellow, ghost (sm/lg)
│   ├── tables/                  ← Data tables, info rows, KPI rows
│   ├── alerts/                  ← Info, warning, danger, success
│   ├── forms/                   ← Text inputs, selects, textareas, toggles, file drops
│   ├── modals-drawers/          ← Confirm modal, intake modal, right drawer
│   ├── checklists-steppers/     ← Interactive checklists with urgency borders
│   ├── progress-donuts/         ← Progress bars (7 colours), donut charts
│   ├── charts/                  ← Bar charts, line charts with forecast
│   ├── crm/                     ← Participant hero, budget envelope, goal staircase
│   ├── calendar-tasks/          ← Month calendar with event indicators
│   ├── ui-states/               ← Empty, loading skeleton, error states
│   └── interactions/            ← Scroll reveal
├── pages/                       ← 12 canonical showcase files (full implementations)
│   ├── s00-foundation.html      ← 93 KB — all foundation components
│   ├── s01-pattern-suite1.html  ← 112 KB — typography, progress, donuts, KPIs
│   ├── s02-svg-viz.html         ← 66 KB — statistical + spatial charts
│   ├── s03-advanced.html        ← 62 KB — Gantt, financial, gauges
│   ├── s04-interactive.html     ← 93 KB — 20 interaction patterns
│   ├── s05-crm.html             ← 67 KB — CRM entity patterns
│   ├── s06-core-charts.html     ← 41 KB — core charts with NDIS context
│   ├── s07-calendar.html        ← 44 KB — calendar + task surfaces
│   ├── s08-states.html          ← 57 KB — UI states + process flows
│   ├── s09-crm-ops.html         ← 56 KB — CRM operations + forms
│   ├── s10-components.html      ← 87 KB — toasts, modals, drawers, alerts
│   └── s11-productivity.html    ← 124 KB — scheduler, AI chat, project wizard
└── examples/                    ← Real-world outputs
    ├── iona-plan-overview-1.html
    ├── iona-budget-funding-v2-2.html
    └── iona-schedule-B-thursday-mealprep-3.html
```

---

## 35 Component Families

### Foundation (01–04)
1. **Brand Shell** — topbar, stripe, bento grid, hero, footer
2. **Typography** — 4-font hierarchy across 16 size classes
3. **Navigation** — spotlight/pill/underline tabs, sidebar, top nav, breadcrumb, pagination
4. **Cards** — white, dark, pink, yellow, cyan, cream, navy + asymmetric radius + accent + dark box

### Content (05–08)
5. **Chips & Badges** — 8 outlined + 4 solid chips, topbar badges, status dots
6. **Tables & Rows** — data tables, info rows, KPI rows, leaderboards
7. **Alerts** — info (cyan), warning (orange), danger (pink), success
8. **Buttons** — primary/secondary/outline/yellow/ghost in sm/default/lg

### Forms & Interaction (09–11)
9. **Forms** — inputs, textareas, selects, file drops, toggles, checkboxes, validation
10. **Modals & Drawers** — confirm/intake/alert modals, right/bottom drawers, dark tray
11. **Checklists & Steppers** — interactive with urgency borders, numbered stepper

### Data Visualization (12–22)
12. **KPI Widgets** — stat cards, delta, sparkline, bullet KPI, benchmark
13. **Bar & Column** — vertical, horizontal, grouped, stacked, lollipop, radial, isometric
14. **Line, Area & Trend** — single/multi-line, stacked area, forecast, rolling average
15. **Part-to-Whole** — donut, waffle, treemap, sunburst, polar area, pictogram
16. **Distribution** — histogram, density, box plot, violin, ridgeline
17. **Relationship** — scatter, radar/spider, correlation matrix, parallel coordinates
18. **Statistical** — error bars, confidence intervals, candlestick, forest plot
19. **Flow & Funnel** — Sankey, funnel, chord, force network, process flow
20. **Hierarchy & Tree** — tree diagram, org chart
21. **Map & Spatial** — choropleth, bubble map, hexbin heatmap
22. **Matrix & Heatmap** — risk matrix, cohort retention, calendar heatmap

### Operations (23–25)
23. **Planning Boards** — Gantt, timeline, kanban, burndown, scheduler
24. **Financial** — P&L waterfall, equity curve, cash runway, budget pacing
25. **Gauges** — angular, radial bar, stoplight, thresholds

### Interaction Patterns (26)
26. **20 Patterns** — hover reveal, drill-down, cross-filter, zoom, playback, spotlight, threshold, segmentation, progressive disclosure, AI explanation, normalize, linked brushing, forecast toggle, confidence bands, cohort selector, annotations, benchmark overlay, outlier reveal, compact/expanded

### CRM & Domain (27–34)
27–30. **CRM** — participant hero, budget envelope, referral pipeline, communication timeline
31–32. **Calendar & Tasks** — month/daily/weekly calendar, task list, kanban, project wizard
33. **AI Brain Chat** — purple-themed with message bubbles
34. **UI States** — empty, loading skeleton (shimmer), error, notification

### Animation (35)
35. **Animations** — card hover, tab bounce/wave, spotlight flyer, scroll reveal, donut/progress animation, shimmer skeleton, ticker, toast slide

---

## CSS Class Prefix

All classes use the `lx-` prefix:
- Layout: `lx-bento`, `lx-s1`–`lx-s12`, `lx-r2`, `lx-r3`
- Cards: `lx-card`, `lx-acc`, `lx-dbox`
- Typography: `lx-stat`, `lx-cxl`, `lx-b`, `lx-eye`
- Navigation: `lx-tabs`, `lx-tab`, `lx-ptabs`, `lx-snav`
- Content: `lx-chip`, `lx-tbl`, `lx-al`, `lx-btn`
- Progress: `lx-pw`, `lx-pt`, `lx-pf`, `lx-dw`, `lx-dfl`

---

## Colour Standards

| Context | Pink | Orange | Cyan | Blue | Purple | Grey |
|---------|------|--------|------|------|--------|------|
| **Calendar** | NDIS | Medical | School | — | Personal | Blocked |
| **Priority** | Critical | High | Medium | Low | — | — |
| **Alert** | Danger | Warning | Info | — | — | — |

---

## Claude Design Integration

To use this as a design system in Claude Design:

1. Push this repository to GitHub
2. Go to [claude.ai/design](https://claude.ai/design) → Organisation Settings
3. Click "Set up your design system"
4. In "Link code on GitHub", paste the repository URL
5. Claude Design will analyse all HTML/CSS files and extract the design system
6. Review the generated UI kit and publish

---

## Contact

**Ile Karamacoski**
Director & Senior NDIS Support Coordinator
LIMITLESS Support Co.
Mobile: +61 421 742 108
Email: ile.kar@limitlesssupportco.com.au
