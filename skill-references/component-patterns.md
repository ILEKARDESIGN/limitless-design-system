# Component Patterns — 40 Most-Used Render-Ready HTML Blocks

Copy these directly into output HTML. All classes defined in core-css.md.

---

## 01. Topbar + Stripe

```html
<div class="lx-topbar">
  <div class="lx-tlogo">LIMIT<span>LESS</span> ∞</div>
  <div style="display:flex;gap:8px;align-items:center">
    <span class="lx-tmeta">CONTEXT LABEL</span>
    <span class="lx-tbadge">BADGE</span>
    <span class="lx-tbadge pink">PINK</span>
    <span class="lx-tbadge cyan">CYAN</span>
  </div>
</div>
<div class="lx-stripe"></div>
```

## 02. Suite Hero

```html
<div style="text-align:center;padding:30px 10px">
  <div class="lx-eye" style="color:var(--lx-pink);margin-bottom:8px">LIMITLESS SUPPORT CO.</div>
  <div style="font-family:Bebas Neue,serif;font-size:clamp(32px,6vw,56px);line-height:.9">PAGE TITLE</div>
  <div class="lx-cmd" style="color:var(--lx-pink);margin-top:10px">Subtitle Text</div>
  <div class="lx-bsm cm" style="margin-top:8px">Description text goes here.</div>
</div>
```

## 03. KPI Stat Card

```html
<div class="lx-card tl" style="text-align:center">
  <div class="lx-eye" style="color:var(--lx-pink);margin-bottom:6px">METRIC LABEL</div>
  <div class="lx-stat cpk">$48.2K</div>
  <div style="font-family:JetBrains Mono,monospace;font-size:9px;color:var(--lx-pink);margin-top:4px">▲ +12.4% FROM LAST PERIOD</div>
  <span class="lx-ghost">$</span>
</div>
```

## 04. Delta / Variance Card (Dark)

```html
<div class="lx-card dark tr" style="text-align:center">
  <div class="lx-eye" style="color:var(--lx-cyan);margin-bottom:6px">METRIC</div>
  <div class="lx-stat ccy">342</div>
  <div style="display:flex;align-items:center;justify-content:center;gap:4px;margin-top:6px">
    <span style="font-family:JetBrains Mono,monospace;font-size:9px;color:var(--lx-cyan)">▼ -3.2%</span>
    <span class="lx-bxs" style="color:rgba(245,240,232,.5)">vs target</span>
  </div>
  <span class="lx-ghost inv">342</span>
</div>
```

## 05. Sparkline Card

```html
<div class="lx-card">
  <div class="lx-eye" style="color:var(--lx-pink);margin-bottom:4px">MONTHLY SPEND</div>
  <div class="lx-stat cpk" style="font-size:36px">$6.8K</div>
  <svg viewBox="0 0 120 30" style="width:100%;height:30px;margin-top:8px">
    <polyline points="0,25 15,20 30,22 45,15 60,18 75,10 90,12 105,5 120,8" fill="none" stroke="#FF2D7D" stroke-width="2" stroke-linecap="round"/>
  </svg>
</div>
```

## 06. Bullet KPI / Target vs Actual

```html
<div class="lx-card" style="padding:14px 20px">
  <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:6px">
    <span class="lx-csm">Core Supports</span>
    <span class="lx-mmd cpk">$32.8K / $42K</span>
  </div>
  <div style="position:relative;height:16px;background:rgba(0,0,0,.04);border-radius:var(--r-xs)">
    <div style="position:absolute;left:0;top:0;height:100%;width:78%;background:var(--lx-pink);border-radius:var(--r-xs);opacity:.8"></div>
    <div style="position:absolute;left:75%;top:-2px;width:3px;height:20px;background:var(--lx-black);border-radius:2px" title="Target"></div>
  </div>
</div>
```

## 07. Data Table

```html
<table class="lx-tbl">
  <thead><tr><th>Provider</th><th>Service</th><th>Rate</th><th>Status</th></tr></thead>
  <tbody>
    <tr><td class="lx-tb">Therapy Plus</td><td>OT</td><td class="lx-tm">$193.99</td><td><span class="lx-chip spk">Active</span></td></tr>
    <tr class="lx-ttot"><td colspan="2">Total</td><td class="lx-tm" colspan="2">$3,420</td></tr>
  </tbody>
</table>
```

## 08. Info Rows + Dark Box

```html
<div class="lx-dbox">
  <div class="lx-dtitle">Summary</div>
  <div class="lx-ir"><span class="lx-ik">NDIS Number</span><span class="lx-iv n" style="color:var(--lx-offwhite)">12345678</span></div>
  <div class="lx-ir"><span class="lx-ik">Budget Used</span><span class="lx-iv">$48,230</span></div>
</div>
```

## 09. KPI Row

```html
<div class="lx-krow">
  <div class="lx-k"><div class="lx-kv cpk">24</div><div class="lx-kl">Active Cases</div></div>
  <div class="lx-k"><div class="lx-kv ccy">$12.4K</div><div class="lx-kl">Budget Used</div></div>
  <div class="lx-k"><div class="lx-kv cor">7</div><div class="lx-kl">Pending</div></div>
</div>
```

## 10. Progress Bars

```html
<div class="lx-pw">
  <div class="lx-ph"><span class="lx-pk2">Core Supports</span><span class="lx-pv">78%</span></div>
  <div class="lx-pt"><div class="lx-pf" data-w="78%" style="width:0"></div></div>
</div>
<!-- Colours: default=pink, .cy .or .pu .bl .yw — Thick: .lx-pt.tk — Striped: .lx-pf.st -->
```

## 11. Donut Chart

```html
<div class="lx-dw">
  <svg viewBox="0 0 96 96"><circle class="lx-dtrk" cx="48" cy="48" r="43"/>
  <circle class="lx-dfl" cx="48" cy="48" r="43" stroke="var(--lx-pink)" data-pct="72"/></svg>
  <div class="lx-dlbl">72<span class="lx-dsl">%</span></div>
</div>
```

## 12. Accent Card

```html
<div class="lx-acc">
  <div class="lx-cmd">Title</div>
  <div class="lx-bsm cm">Description text.</div>
</div>
<!-- Variants: .yel .cyn .org .pur .blu -->
```

## 13. Alert Banner

```html
<div class="lx-al inf">
  <div><div class="lx-at">Information</div><div class="lx-ab">Alert body text.</div></div>
</div>
<!-- Variants: .inf (cyan) .wrn (orange) .dng (pink) .suc (green) -->
```

## 14. Buttons (All 9 Colours)

```html
<button class="lx-btn pk">Pink</button>
<button class="lx-btn cy">Cyan</button>
<button class="lx-btn yw">Yellow</button>
<button class="lx-btn or">Orange</button>
<button class="lx-btn pu">Purple</button>
<button class="lx-btn bl">Blue</button>
<button class="lx-btn bk">Black</button>
<button class="lx-btn ghost">Ghost</button>
<!-- Sizes: .sm .lg -->
```

## 15. Chips (All Variants)

```html
<span class="lx-chip pk">Outlined Pink</span>
<span class="lx-chip spk">Solid Pink</span>
<span class="lx-chip syw">Solid Yellow</span>
<span class="lx-chip scy">Solid Cyan</span>
<span class="lx-chip sbk">Solid Black</span>
<!-- Outlined: .pk .yw .cy .or .pu .bl .gn .dk -->
```

## 16. Dark Tabs

```html
<div class="lx-tabs">
  <button class="lx-tab tc-pk active" data-tab="t1">Tab 1 <span class="lx-tc">4</span></button>
  <button class="lx-tab tc-cy" data-tab="t2">Tab 2</button>
</div>
<div class="lx-tpanels"><div class="lx-tpanel active" id="t1">Content</div></div>
```

## 17. Pill Tabs

```html
<div class="lx-ptabs pk">
  <button class="lx-tab active" data-tab="p1">All <span class="lx-tc">24</span></button>
  <button class="lx-tab" data-tab="p2">Active</button>
</div>
```

## 18. Checklist with Urgency

```html
<div class="ck urg-c">
  <div class="ck-box"><svg viewBox="0 0 14 14"><polyline points="2.5 7 5.5 10 11.5 4"/></svg></div>
  <div class="ck-text"><div class="lx-cmd">Task Title</div><div class="lx-bsm cm">Description</div></div>
</div>
<!-- Urgency: .urg-c (pink) .urg-h (orange) .urg-m (cyan) .urg-s (blue) -->
```

## 19. Dropdown / Accordion

```html
<div class="dd">
  <div class="dd-h">Section Title <span class="dd-arrow arr-pk">▼</span></div>
  <div class="dd-body"><p>Content here.</p></div>
</div>
```

## 20. Participant Hero Card (CRM)

```html
<div class="lx-card dark ptop">
  <div style="display:flex;justify-content:space-between;flex-wrap:wrap;gap:12px">
    <div>
      <div class="lx-eye" style="color:var(--lx-pink);margin-bottom:6px">PARTICIPANT</div>
      <div style="font-family:Bebas Neue,serif;font-size:36px;line-height:.95;color:var(--lx-offwhite)">Participant Name</div>
      <div class="lx-mmd" style="color:var(--lx-cyan);margin-top:4px">NDIS #12345678</div>
    </div>
    <span class="lx-chip spk">Active Plan</span>
  </div>
  <div class="lx-div" style="background:rgba(255,255,255,.07)"></div>
  <div class="lx-krow" style="justify-content:flex-start;gap:32px">
    <div class="lx-k"><div class="lx-kv cpk">$72,400</div><div class="lx-kl" style="color:rgba(245,240,232,.5)">Budget</div></div>
    <div class="lx-k"><div class="lx-kv ccy">$48,230</div><div class="lx-kl" style="color:rgba(245,240,232,.5)">Spent</div></div>
  </div>
  <span class="lx-ghost inv" style="font-size:80px">NAME</span>
</div>
```

## 21. Budget Envelope

```html
<div class="lx-card tl">
  <div class="lx-cmd" style="margin-bottom:16px">NDIS Plan Budget</div>
  <div class="lx-pw">
    <div class="lx-ph"><span class="lx-pk2">Core Supports — $42,000</span><span class="lx-pv">78%</span></div>
    <div class="lx-pt tk"><div class="lx-pf" data-w="78%"></div></div>
    <div class="lx-bxs cm" style="margin-top:2px">$32,760 spent · $9,240 remaining</div>
  </div>
  <!-- Repeat for each category with different colours -->
  <div class="lx-div"></div>
  <div class="lx-ir"><span class="lx-ik">Total Budget</span><span class="lx-iv">$72,400</span></div>
</div>
```

## 22. Toast Notification (JS)

```javascript
function showToast(type, title, msg) {
  const stack = document.getElementById('toast-stack');
  const icons = {suc:'✓', wrn:'⚠', inf:'ℹ', err:'✕'};
  const colors = {suc:'var(--lx-yellow)',wrn:'var(--lx-orange)',inf:'var(--lx-cyan)',err:'var(--lx-pink)'};
  const t = document.createElement('div');
  t.style.cssText = 'background:var(--lx-black);color:var(--lx-offwhite);border-radius:var(--r-md);min-width:280px;max-width:340px;pointer-events:all;transform:translateX(120%);opacity:0;transition:transform .4s var(--spring),opacity .3s;box-shadow:0 8px 32px rgba(0,0,0,.3);overflow:hidden';
  t.innerHTML = `<div style="padding:12px 14px;display:flex;gap:10px"><div style="width:20px;height:20px;border-radius:50%;background:${colors[type]};display:flex;align-items:center;justify-content:center;font-size:11px">${icons[type]}</div><div><div style="font-family:Barlow Condensed,sans-serif;font-weight:900;font-size:12px;text-transform:uppercase;letter-spacing:.06em">${title}</div><div style="font-size:10px;color:rgba(245,240,232,.65)">${msg}</div></div></div>`;
  stack.appendChild(t);
  requestAnimationFrame(()=>{t.style.transform='translateX(0)';t.style.opacity='1'});
  setTimeout(()=>{t.style.transform='translateX(120%)';t.style.opacity='0';setTimeout(()=>t.remove(),400)},3500);
}
// Requires: <div id="toast-stack" style="position:fixed;top:72px;right:16px;z-index:1100;display:flex;flex-direction:column;gap:8px;pointer-events:none"></div>
```

## 23. Responsibility Card

```html
<div class="resp sc">
  <span class="resp-tag t-sc">Support Coordination</span>
  <div class="lx-cmd">Task Title</div>
  <div class="lx-bsm cm">Description.</div>
</div>
<!-- Variants: .school/.t-school .both/.t-both .gov/.t-gov .warn/.t-warn -->
```

## 24. Numbered Recommendation

```html
<div class="rec">
  <div class="rec-num cpk">01</div>
  <div class="lx-cmd">Recommendation Title</div>
  <div class="lx-bsm cm" style="margin-top:6px">Justification and detail.</div>
</div>
```

## 25. Footer

```html
<div style="background:var(--lx-navy);color:var(--lx-offwhite);border-radius:var(--r-lg);padding:28px;margin:20px 10px">
  <div style="display:flex;justify-content:space-between;flex-wrap:wrap;gap:20px">
    <div>
      <div style="font-family:Bebas Neue,serif;font-size:24px;letter-spacing:.1em">LIMIT<span style="color:var(--lx-pink)">LESS</span> ∞</div>
      <div style="font-family:JetBrains Mono,monospace;font-size:8px;letter-spacing:.12em;text-transform:uppercase;color:rgba(245,240,232,.4);margin-top:6px">SUPPORT COORDINATION · NDIS · 2026</div>
    </div>
    <div style="text-align:right">
      <div class="lx-csm" style="color:rgba(245,240,232,.5)">Ile Karamacoski</div>
      <div style="font-family:JetBrains Mono,monospace;font-size:9px;color:var(--lx-cyan);margin-top:4px">ile.kar@limitlesssupportco.com.au</div>
    </div>
  </div>
  <div style="height:1px;background:rgba(255,255,255,.06);margin:16px 0"></div>
  <div style="font-size:10px;color:rgba(245,240,232,.35)">© 2026 LIMITLESS Support Co. All rights reserved.</div>
</div>
```

## 26–40: Additional Patterns

For these components, read the corresponding HTML file from the GitHub repo:

| # | Component | GitHub Path |
|---|-----------|------------|
| 26 | Gantt Chart | `components/charts/gantt-chart.html` |
| 27 | Kanban Board | `components/productivity/kanban-board.html` |
| 28 | Calendar Month | `components/calendar-tasks/calendar-month.html` |
| 29 | Weekly Schedule | `components/calendar-tasks/weekly-schedule.html` |
| 30 | Daily Schedule | `components/calendar-tasks/daily-schedule.html` |
| 31 | AI Brain Chat | `components/productivity/ai-brain-chat.html` |
| 32 | Sankey Flow | `components/data-viz/sankey-flow.html` |
| 33 | Radar/Spider | `components/charts/radar-chart.html` |
| 34 | Funnel | `components/charts/funnel-chart.html` |
| 35 | Risk Matrix | `components/charts/risk-matrix.html` |
| 36 | Process Flow | `components/ui-states/process-flow.html` |
| 37 | Loading Skeleton | `components/ui-states/loading-skeleton.html` |
| 38 | Modal (Confirm) | `components/modals-drawers/modal-confirm.html` |
| 39 | Right Drawer | `components/modals-drawers/drawer-right.html` |
| 40 | Communication Timeline | `components/crm/communication-timeline.html` |
