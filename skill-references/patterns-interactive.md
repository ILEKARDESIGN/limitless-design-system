# Interactive Patterns — Modals, Drawers, Forms, Calendar, Tasks, Kanban, AI, Toasts, States

Copy these directly into output HTML. All CSS classes defined in core-css.md.
GitHub: https://github.com/ILEKARDESIGN/limitless-design-system

---

## S04 — Hybrid & Interactive

### 64. Bar + Line Combo
**File:** `charts/bar-line-combo.html`

```html
<div class="ds"><div class="dl">BAR + LINE COMBO / DUAL AXIS</div>
<div class="lx-card" style="max-width:550px"><div class="lx-cmd" style="margin-bottom:12px">Monthly Spend (Bar) vs Participant Count (Line)</div>
<svg viewBox="0 0 440 200" style="width:100%"><line x1="50" y1="180" x2="420" y2="180" stroke="var(--lx-bdr)" stroke-width="1"/>
<rect x="60" y="60" width="30" height="120" rx="3" fill="#FF2D7D" opacity=".8"/><rect x="110" y="80" width="30" height="100" rx="3" fill="#FF2D7D" opacity=".8"/><rect x="160" y="40" width="30" height="140" rx="3" fill="#FF2D7D" opacity=".8"/><rect x="210" y="70" width="30" height="110" rx="3" fill="#FF2D7D" opacity=".8"/><rect x="260" y="90" width="30" height="90" rx="3" fill="#FF2D7D" opacity=".8"/><rect x="310" y="50" width="30" height="130" rx="3" fill="#FF2D7D" opacity=".8"/><rect x="360" y="65" width="30" height="115" rx="3" fill="#FF2D7D" opacity=".8"/>
<polyline points="75,120 125,110 175,90 225,95 275,105 325,80 375,85" fill="none" stroke="#00D4FF" stroke-width="2.5" stroke-linecap="round"/><circle cx="75" cy="120" r="3" fill="#00D4FF"/><circle cx="125" cy="110" r="3" fill="#00D4FF"/><circle cx="175" cy="90" r="3" fill="#00D4FF"/><circle cx="225" cy="95" r="3" fill="#00D4FF"/><circle cx="275" cy="105" r="3" fill="#00D4FF"/><circle cx="325" cy="80" r="3" fill="#00D4FF"/><circle cx="375" cy="85" r="3" fill="#00D4FF"/>
<text x="45" y="60" text-anchor="end" fill="var(--lx-pink)" font-family="JetBrains Mono" font-size="7">$8K</text><text x="45" y="180" text-anchor="end" fill="var(--lx-pink)" font-family="JetBrains Mono" font-size="7">$0</text>
<text x="425" y="80" fill="var(--lx-cyan)" font-family="JetBrains Mono" font-size="7">30</text><text x="425" y="120" fill="var(--lx-cyan)" font-family="JetBrains Mono" font-size="7">20</text>
</svg>
<div style="display:flex;gap:12px;margin-top:4px"><div style="display:flex;align-items:center;gap:4px"><div style="width:10px;height:10px;border-radius:2px;background:#FF2D7D"></div><span class="lx-bxs cm">Spend ($)</span></div><div style="display:flex;align-items:center;gap:4px"><div style="width:10px;height:3px;background:#00D4FF;border-radius:2px"></div><span class="lx-bxs cm">Participants</span></div></div></div></div>
```

### 65. Horizon / Multi-Sparkline
**File:** `charts/horizon-sparkline-dashboard.html`

```html
<div class="ds"><div class="dl">HORIZON GRAPH / MULTI-ROW SPARKLINE DASHBOARD</div>
<div class="lx-card" style="max-width:500px;padding:0;overflow:hidden">
<div style="padding:14px 20px;border-bottom:1px solid var(--lx-bdr)"><div class="lx-cmd">KPI Sparkline Dashboard</div></div>
<div style="display:flex;align-items:center;gap:12px;padding:10px 20px;border-bottom:1px solid rgba(0,0,0,.03)"><span style="width:90px" class="lx-bsm bld">Budget</span><svg viewBox="0 0 120 24" style="width:120px;height:24px;flex-shrink:0"><defs><linearGradient id="h1" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#FF2D7D" stop-opacity=".3"/><stop offset="100%" stop-color="#FF2D7D" stop-opacity=".02"/></linearGradient></defs><path d="M0,20 15,16 30,18 45,12 60,14 75,8 90,10 105,4 120,6 120,24 0,24Z" fill="url(#h1)"/><polyline points="0,20 15,16 30,18 45,12 60,14 75,8 90,10 105,4 120,6" fill="none" stroke="#FF2D7D" stroke-width="1.5"/></svg><span class="lx-mmd cpk" style="width:50px;text-align:right">$48.2K</span><span style="font-family:JetBrains Mono,monospace;font-size:8px;color:var(--lx-pink)">▲ 12%</span></div>
<div style="display:flex;align-items:center;gap:12px;padding:10px 20px;border-bottom:1px solid rgba(0,0,0,.03)"><span style="width:90px" class="lx-bsm bld">Participants</span><svg viewBox="0 0 120 24" style="width:120px;height:24px"><defs><linearGradient id="h2" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#00D4FF" stop-opacity=".3"/><stop offset="100%" stop-color="#00D4FF" stop-opacity=".02"/></linearGradient></defs><path d="M0,18 15,15 30,17 45,12 60,14 75,10 90,8 105,10 120,6 120,24 0,24Z" fill="url(#h2)"/><polyline points="0,18 15,15 30,17 45,12 60,14 75,10 90,8 105,10 120,6" fill="none" stroke="#00D4FF" stroke-width="1.5"/></svg><span class="lx-mmd ccy" style="width:50px;text-align:right">24</span><span style="font-family:JetBrains Mono,monospace;font-size:8px;color:var(--lx-cyan)">▲ 8%</span></div>
<div style="display:flex;align-items:center;gap:12px;padding:10px 20px;border-bottom:1px solid rgba(0,0,0,.03)"><span style="width:90px" class="lx-bsm bld">Goals</span><svg viewBox="0 0 120 24" style="width:120px;height:24px"><polyline points="0,16 15,14 30,12 45,10 60,8 75,7 90,6 105,5 120,4" fill="none" stroke="#B14EFF" stroke-width="1.5"/></svg><span class="lx-mmd cpu" style="width:50px;text-align:right">87%</span><span style="font-family:JetBrains Mono,monospace;font-size:8px;color:var(--lx-purple)">▲ 5%</span></div>
<div style="display:flex;align-items:center;gap:12px;padding:10px 20px"><span style="width:90px" class="lx-bsm bld">Risk</span><svg viewBox="0 0 120 24" style="width:120px;height:24px"><polyline points="0,8 15,10 30,6 45,12 60,16 75,12 90,18 105,20 120,14" fill="none" stroke="#FF6600" stroke-width="1.5"/></svg><span class="lx-mmd cor" style="width:50px;text-align:right">3.2</span><span style="font-family:JetBrains Mono,monospace;font-size:8px;color:var(--lx-orange)">▲ Alert</span></div>
</div></div>
```

### 66. Compact Master Checklist
**File:** `checklists-steppers/compact-master-checklist.html`

```html
<div class="ds"><div class="dl">COMPACT MASTER CHECKLIST — PLAN IMPLEMENTATION</div>
<div class="lx-card" style="max-width:500px;padding:0;overflow:hidden">
<div style="padding:14px 20px;background:var(--lx-black);color:var(--lx-offwhite);display:flex;justify-content:space-between;align-items:center"><div class="lx-cmd" style="color:var(--lx-offwhite)">Implementation Checklist</div><span style="font-family:Bebas Neue,serif;font-size:22px;color:var(--lx-pink)">7/12</span></div>
<div style="height:4px;background:rgba(0,0,0,.06)"><div style="width:58%;height:100%;background:var(--lx-pink)"></div></div>
<div style="padding:8px 0">
<div class="ck done urg-c" style="margin:0;border-radius:0;border-left-width:3px;border-top:none;border-right:none;border-bottom:1px solid rgba(0,0,0,.04)"><div class="ck-box"><svg viewBox="0 0 14 14"><polyline points="2.5 7 5.5 10 11.5 4"/></svg></div><div class="ck-text"><div class="lx-cmd" style="font-size:11px">Initial plan meeting</div></div></div>
<div class="ck done urg-c" style="margin:0;border-radius:0;border-left-width:3px;border-top:none;border-right:none;border-bottom:1px solid rgba(0,0,0,.04)"><div class="ck-box"><svg viewBox="0 0 14 14"><polyline points="2.5 7 5.5 10 11.5 4"/></svg></div><div class="ck-text"><div class="lx-cmd" style="font-size:11px">Service bookings established</div></div></div>
<div class="ck done urg-h" style="margin:0;border-radius:0;border-left-width:3px;border-top:none;border-right:none;border-bottom:1px solid rgba(0,0,0,.04)"><div class="ck-box"><svg viewBox="0 0 14 14"><polyline points="2.5 7 5.5 10 11.5 4"/></svg></div><div class="ck-text"><div class="lx-cmd" style="font-size:11px">OT assessment completed</div></div></div>
<div class="ck urg-h" style="margin:0;border-radius:0;border-left-width:3px;border-top:none;border-right:none;border-bottom:1px solid rgba(0,0,0,.04)"><div class="ck-box"><svg viewBox="0 0 14 14"><polyline points="2.5 7 5.5 10 11.5 4"/></svg></div><div class="ck-text"><div class="lx-cmd" style="font-size:11px">Submit plan review docs</div></div></div>
<div class="ck urg-m" style="margin:0;border-radius:0;border-left-width:3px;border-top:none;border-right:none;border-bottom:1px solid rgba(0,0,0,.04)"><div class="ck-box"><svg viewBox="0 0 14 14"><polyline points="2.5 7 5.5 10 11.5 4"/></svg></div><div class="ck-text"><div class="lx-cmd" style="font-size:11px">Renew Therapy Plus agreement</div></div></div>
<div class="ck urg-s" style="margin:0;border-radius:0;border-left-width:3px;border-top:none;border-right:none"><div class="ck-box"><svg viewBox="0 0 14 14"><polyline points="2.5 7 5.5 10 11.5 4"/></svg></div><div class="ck-text"><div class="lx-cmd" style="font-size:11px">Schedule quarterly check-in</div></div></div>
</div></div></div>
```

### 67. Interactive Patterns
**File:** `interactions/interactive-patterns-master.html`

```html
<div class="ds"><div class="dl">23 INTERACTIVE PATTERNS — MASTER REFERENCE</div>
<div class="lx-al inf" style="margin-bottom:16px"><div><div class="lx-at">Note</div><div class="lx-ab">Full interactive implementations of all 23 patterns are in <strong>pages/s04-interactive.html</strong> (93 KB). This component provides the pattern index with hover-preview examples.</div></div></div>
<div class="lx-card" style="max-width:600px;padding:0;overflow:hidden">
<table class="lx-tbl" style="border:none"><thead><tr><th>#</th><th>Pattern</th><th>Category</th><th>Interaction</th></tr></thead>
<tbody>
<tr><td class="lx-tb">01</td><td>Hover Reveal</td><td><span class="lx-chip pk" style="font-size:6px">Discovery</span></td><td>Tooltip on hover</td></tr>
<tr><td class="lx-tb">02</td><td>Drill-Down</td><td><span class="lx-chip pk" style="font-size:6px">Discovery</span></td><td>Click to expand detail</td></tr>
<tr><td class="lx-tb">03</td><td>Cross-Filter</td><td><span class="lx-chip cy" style="font-size:6px">Filter</span></td><td>Click filters all charts</td></tr>
<tr><td class="lx-tb">04</td><td>Zoom / Pan</td><td><span class="lx-chip cy" style="font-size:6px">Navigation</span></td><td>Scroll to zoom</td></tr>
<tr><td class="lx-tb">05</td><td>Playback / Scrub</td><td><span class="lx-chip pu" style="font-size:6px">Temporal</span></td><td>Slider animates data</td></tr>
<tr><td class="lx-tb">06</td><td>Spotlight / Focus</td><td><span class="lx-chip pu" style="font-size:6px">Highlight</span></td><td>Click highlights series</td></tr>
<tr><td class="lx-tb">07</td><td>Threshold Toggle</td><td><span class="lx-chip or" style="font-size:6px">Analysis</span></td><td>Toggle reference lines</td></tr>
<tr><td class="lx-tb">08</td><td>Segmentation Switch</td><td><span class="lx-chip or" style="font-size:6px">Analysis</span></td><td>Toggle grouping</td></tr>
<tr><td class="lx-tb">09</td><td>Parameterized View</td><td><span class="lx-chip bl" style="font-size:6px">Config</span></td><td>Adjust parameters</td></tr>
<tr><td class="lx-tb">10</td><td>Progressive Disclosure</td><td><span class="lx-chip bl" style="font-size:6px">Layout</span></td><td>Expand for detail</td></tr>
<tr><td class="lx-tb">11</td><td>AI Explanation</td><td><span class="lx-chip pu" style="font-size:6px">AI</span></td><td>Click for AI insight</td></tr>
<tr><td class="lx-tb">12</td><td>Normalize Toggle</td><td><span class="lx-chip cy" style="font-size:6px">Transform</span></td><td>% vs absolute</td></tr>
<tr><td class="lx-tb">13</td><td>Linked Brushing</td><td><span class="lx-chip pk" style="font-size:6px">Selection</span></td><td>Drag selects across</td></tr>
<tr><td class="lx-tb">14</td><td>Forecast Toggle</td><td><span class="lx-chip or" style="font-size:6px">Temporal</span></td><td>Show/hide forecast</td></tr>
<tr><td class="lx-tb">15</td><td>Confidence Bands</td><td><span class="lx-chip or" style="font-size:6px">Statistical</span></td><td>Toggle CI bands</td></tr>
<tr><td class="lx-tb">16</td><td>Cohort Selector</td><td><span class="lx-chip bl" style="font-size:6px">Filter</span></td><td>Select cohort</td></tr>
<tr><td class="lx-tb">17</td><td>Annotations</td><td><span class="lx-chip pu" style="font-size:6px">Commentary</span></td><td>Toggle annotations</td></tr>
<tr><td class="lx-tb">18</td><td>Benchmark Overlay</td><td><span class="lx-chip cy" style="font-size:6px">Comparison</span></td><td>Toggle benchmark</td></tr>
<tr><td class="lx-tb">19</td><td>Outlier Reveal</td><td><span class="lx-chip pk" style="font-size:6px">Discovery</span></td><td>Highlight outliers</td></tr>
<tr><td class="lx-tb">20</td><td>Compact / Expanded</td><td><span class="lx-chip bl" style="font-size:6px">Layout</span></td><td>Toggle density</td></tr>
</tbody></table></div></div>
```

## S07 — Calendar, Tasks, Projects

### 84. Calendar Month
**File:** `calendar-tasks/calendar-month.html`

```html
<div class="demo-section">
  <div class="demo-label">MONTH CALENDAR WITH EVENTS</div>
  <div class="lx-card" style="max-width:600px">
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px">
      <button class="lx-btn gh sm">‹</button>
      <div class="lx-clg">April 2026</div>
      <button class="lx-btn gh sm">›</button>
    </div>
    <div style="display:grid;grid-template-columns:repeat(7,1fr);gap:2px;text-align:center">
      <div class="lx-eye" style="padding:6px">MON</div>
      <div class="lx-eye" style="padding:6px">TUE</div>
      <div class="lx-eye" style="padding:6px">WED</div>
      <div class="lx-eye" style="padding:6px">THU</div>
      <div class="lx-eye" style="padding:6px">FRI</div>
      <div class="lx-eye" style="padding:6px">SAT</div>
      <div class="lx-eye" style="padding:6px">SUN</div>
      <div style="padding:6px;color:var(--lx-txl);font-size:11px">30</div>
      <div style="padding:6px;color:var(--lx-txl);font-size:11px">31</div>
      <div style="padding:6px;font-size:11px">1</div>
      <div style="padding:6px;font-size:11px">2</div>
      <div style="padding:6px;font-size:11px">3</div>
      <div style="padding:6px;font-size:11px">4</div>
      <div style="padding:6px;font-size:11px">5</div>
      <div style="padding:6px;font-size:11px">6</div>
      <div style="padding:6px;font-size:11px">7<div style="height:3px;background:var(--lx-pink);border-radius:2px;margin-top:2px" title="NDIS Review"></div></div>
      <div style="padding:6px;font-size:11px">8</div>
      <div style="padding:6px;font-size:11px">9</div>
      <div style="padding:6px;font-size:11px">10<div style="height:3px;background:var(--lx-orange);border-radius:2px;margin-top:2px" title="Medical"></div></div>
      <div style="padding:6px;font-size:11px">11</div>
      <div style="padding:6px;font-size:11px">12</div>
      <div style="padding:6px;font-size:11px">13</div>
      <div style="padding:6px;font-size:11px">14<div style="height:3px;background:var(--lx-cyan);border-radius:2px;margin-top:2px" title="School"></div></div>
      <div style="padding:6px;font-size:11px">15</div>
      <div style="padding:6px;font-size:11px">16</div>
      <div style="padding:6px;font-size:11px">17</div>
      <div style="padding:6px;font-size:11px">18</div>
      <div style="padding:6px;font-size:11px">19</div>
      <div style="padding:6px;font-size:11px;font-weight:700;color:var(--lx-pink);background:rgba(255,45,125,.07);border-radius:var(--r-xs)">20</div>
      <div style="padding:6px;font-size:11px">21<div style="height:3px;background:var(--lx-pink);border-radius:2px;margin-top:2px" title="NDIS"></div><div style="height:3px;background:var(--lx-purple);border-radius:2px;margin-top:1px" title="Personal"></div></div>
      <div style="padding:6px;font-size:11px">22</div>
      <div style="padding:6px;font-size:11px">23</div>
      <div style="padding:6px;font-size:11px">24</div>
      <div style="padding:6px;font-size:11px">25</div>
      <div style="padding:6px;font-size:11px">26</div>
      <div style="padding:6px;font-size:11px">27</div>
      <div style="padding:6px;font-size:11px">28</div>
      <div style="padding:6px;font-size:11px">29</div>
      <div style="padding:6px;font-size:11px">30</div>
    </div>
    <div class="lx-div"></div>
    <div style="display:flex;gap:12px;flex-wrap:wrap">
      <div style="display:flex;align-items:center;gap:4px"><div style="width:10px;height:3px;background:var(--lx-pink);border-radius:2px"></div><span class="lx-bxs cm">NDIS</span></div>
      <div style="display:flex;align-items:center;gap:4px"><div style="width:10px;height:3px;background:var(--lx-cyan);border-radius:2px"></div><span class="lx-bxs cm">School</span></div>
      <div style="display:flex;align-items:center;gap:4px"><div style="width:10px;height:3px;background:var(--lx-orange);border-radius:2px"></div><span class="lx-bxs cm">Medical</span></div>
      <div style="display:flex;align-items:center;gap:4px"><div style="width:10px;height:3px;background:var(--lx-purple);border-radius:2px"></div><span class="lx-bxs cm">Personal</span></div>
    </div>
  </div>
</div>
```

### 85. Daily Schedule
**File:** `calendar-tasks/daily-schedule.html`

```html
<div class="ds"><div class="dl">DAILY SCHEDULE / DAY VIEW</div>
<div class="lx-card" style="max-width:400px;padding:0;overflow:hidden">
<div style="padding:14px 20px;border-bottom:1px solid var(--lx-bdr)"><div class="lx-cmd">Tuesday, 21 April 2026</div></div>
<div style="padding:0">
  <div style="display:flex;border-bottom:1px solid rgba(0,0,0,.03)"><div style="width:60px;padding:10px 8px;text-align:right;font-family:JetBrains Mono,monospace;font-size:9px;color:var(--lx-txl);flex-shrink:0">8:00</div><div style="flex:1;padding:10px 12px;border-left:1px solid rgba(0,0,0,.03)"><div style="background:rgba(0,0,0,.03);padding:6px 10px;border-radius:var(--r-xs)"><div class="lx-bsm cm">Morning routine</div></div></div></div>
  <div style="display:flex;border-bottom:1px solid rgba(0,0,0,.03)"><div style="width:60px;padding:10px 8px;text-align:right;font-family:JetBrains Mono,monospace;font-size:9px;color:var(--lx-txl);flex-shrink:0">9:00</div><div style="flex:1;padding:10px 12px;border-left:3px solid var(--lx-pink)"><div class="lx-b bld">NDIS Plan Review Meeting</div><div class="lx-bxs cm">With Ile Karamacoski · Video Call</div></div></div>
  <div style="display:flex;border-bottom:1px solid rgba(0,0,0,.03)"><div style="width:60px;padding:10px 8px;text-align:right;font-family:JetBrains Mono,monospace;font-size:9px;color:var(--lx-txl);flex-shrink:0">10:30</div><div style="flex:1;padding:10px 12px;border-left:3px solid var(--lx-cyan)"><div class="lx-b bld">OT Session — Therapy Plus</div><div class="lx-bxs cm">Home visit · 1.5 hours</div></div></div>
  <div style="display:flex;border-bottom:1px solid rgba(0,0,0,.03)"><div style="width:60px;padding:10px 8px;text-align:right;font-family:JetBrains Mono,monospace;font-size:9px;color:var(--lx-txl);flex-shrink:0">12:00</div><div style="flex:1;padding:10px 12px;border-left:1px solid rgba(0,0,0,.03)"><div style="background:rgba(0,0,0,.03);padding:6px 10px;border-radius:var(--r-xs)"><div class="lx-bsm cm">Lunch break</div></div></div></div>
  <div style="display:flex;border-bottom:1px solid rgba(0,0,0,.03)"><div style="width:60px;padding:10px 8px;text-align:right;font-family:JetBrains Mono,monospace;font-size:9px;color:var(--lx-txl);flex-shrink:0">1:00</div><div style="flex:1;padding:10px 12px;border-left:3px solid var(--lx-purple)"><div class="lx-b bld">Community Access — Art Group</div><div class="lx-bsm cm">Community centre · Support worker</div></div></div>
  <div style="display:flex"><div style="width:60px;padding:10px 8px;text-align:right;font-family:JetBrains Mono,monospace;font-size:9px;color:var(--lx-txl);flex-shrink:0">3:30</div><div style="flex:1;padding:10px 12px;border-left:3px solid var(--lx-orange)"><div class="lx-b bld">GP Appointment</div><div class="lx-bsm cm">Dr. Smith · In person</div></div></div>
</div></div></div>
```

### 86. Weekly Schedule
**File:** `calendar-tasks/weekly-schedule.html`

```html
<div class="ds"><div class="dl">WEEKLY SCHEDULE / PLANNER</div>
<div class="lx-card" style="max-width:700px;padding:0;overflow:hidden">
<div style="padding:14px 20px;border-bottom:1px solid var(--lx-bdr);display:flex;justify-content:space-between;align-items:center"><div class="lx-cmd">Week of 20 Apr 2026</div><div class="dr" style="margin:0"><button class="lx-btn gh" style="padding:4px 8px;font-size:12px;border:1px solid var(--lx-bdr2)">‹</button><button class="lx-btn gh" style="padding:4px 8px;font-size:12px;border:1px solid var(--lx-bdr2)">›</button></div></div>
<div style="display:grid;grid-template-columns:60px repeat(5,1fr);gap:0;font-size:10px">
  <div style="padding:8px;border-bottom:1px solid var(--lx-bdr)"></div>
  <div style="padding:8px;border-bottom:1px solid var(--lx-bdr);border-left:1px solid rgba(0,0,0,.03);text-align:center" class="lx-eye">MON 20</div>
  <div style="padding:8px;border-bottom:1px solid var(--lx-bdr);border-left:1px solid rgba(0,0,0,.03);text-align:center;background:rgba(255,45,125,.04)" class="lx-eye" style="color:var(--lx-pink)">TUE 21</div>
  <div style="padding:8px;border-bottom:1px solid var(--lx-bdr);border-left:1px solid rgba(0,0,0,.03);text-align:center" class="lx-eye">WED 22</div>
  <div style="padding:8px;border-bottom:1px solid var(--lx-bdr);border-left:1px solid rgba(0,0,0,.03);text-align:center" class="lx-eye">THU 23</div>
  <div style="padding:8px;border-bottom:1px solid var(--lx-bdr);border-left:1px solid rgba(0,0,0,.03);text-align:center" class="lx-eye">FRI 24</div>
  <div style="padding:6px;text-align:right;color:var(--lx-txl);font-family:JetBrains Mono,monospace;font-size:8px">9 AM</div>
  <div style="padding:4px;border-left:1px solid rgba(0,0,0,.03)"><div style="background:var(--lx-pink);color:#fff;padding:4px 6px;border-radius:4px;font-size:9px;font-weight:600">NDIS Review</div></div>
  <div style="padding:4px;border-left:1px solid rgba(0,0,0,.03)"></div>
  <div style="padding:4px;border-left:1px solid rgba(0,0,0,.03)"><div style="background:var(--lx-orange);color:#fff;padding:4px 6px;border-radius:4px;font-size:9px;font-weight:600">Medical Appt</div></div>
  <div style="padding:4px;border-left:1px solid rgba(0,0,0,.03)"></div>
  <div style="padding:4px;border-left:1px solid rgba(0,0,0,.03)"><div style="background:var(--lx-cyan);color:var(--lx-black);padding:4px 6px;border-radius:4px;font-size:9px;font-weight:600">School Visit</div></div>
  <div style="padding:6px;text-align:right;color:var(--lx-txl);font-family:JetBrains Mono,monospace;font-size:8px">11 AM</div>
  <div style="padding:4px;border-left:1px solid rgba(0,0,0,.03)"></div>
  <div style="padding:4px;border-left:1px solid rgba(0,0,0,.03)"><div style="background:var(--lx-purple);color:#fff;padding:4px 6px;border-radius:4px;font-size:9px;font-weight:600">Team Meeting</div></div>
  <div style="padding:4px;border-left:1px solid rgba(0,0,0,.03)"></div>
  <div style="padding:4px;border-left:1px solid rgba(0,0,0,.03)"><div style="background:var(--lx-pink);color:#fff;padding:4px 6px;border-radius:4px;font-size:9px;font-weight:600">Home Visit</div></div>
  <div style="padding:4px;border-left:1px solid rgba(0,0,0,.03)"></div>
  <div style="padding:6px;text-align:right;color:var(--lx-txl);font-family:JetBrains Mono,monospace;font-size:8px">2 PM</div>
  <div style="padding:4px;border-left:1px solid rgba(0,0,0,.03)"><div style="background:var(--lx-cyan);color:var(--lx-black);padding:4px 6px;border-radius:4px;font-size:9px;font-weight:600">OT Session</div></div>
  <div style="padding:4px;border-left:1px solid rgba(0,0,0,.03)"></div>
  <div style="padding:4px;border-left:1px solid rgba(0,0,0,.03)"><div style="background:var(--lx-blue);color:#fff;padding:4px 6px;border-radius:4px;font-size:9px;font-weight:600">Report Writing</div></div>
  <div style="padding:4px;border-left:1px solid rgba(0,0,0,.03)"></div>
  <div style="padding:4px;border-left:1px solid rgba(0,0,0,.03)"></div>
</div></div></div>
```

### 87. Task List
**File:** `calendar-tasks/task-list-priority.html`

```html
<div class="ds"><div class="dl">TASK LIST WITH PRIORITY & DUE DATES</div>
<div class="lx-card" style="max-width:500px;padding:0;overflow:hidden">
<div style="padding:14px 20px;border-bottom:1px solid var(--lx-bdr);display:flex;justify-content:space-between;align-items:center"><div class="lx-cmd">Upcoming Tasks</div><span class="lx-chip pk">5 Open</span></div>
<div style="padding:0">
  <div style="display:flex;align-items:center;gap:12px;padding:10px 20px;border-bottom:1px solid rgba(0,0,0,.04);border-left:3px solid var(--lx-pink)"><div style="width:18px;height:18px;border:2px solid var(--lx-bdr2);border-radius:4px;flex-shrink:0"></div><div style="flex:1"><div class="lx-b bld">Submit Plan Review Documentation</div><div class="lx-bxs cm">Due: 15 May 2026</div></div><span class="lx-chip pk" style="font-size:6px">Critical</span></div>
  <div style="display:flex;align-items:center;gap:12px;padding:10px 20px;border-bottom:1px solid rgba(0,0,0,.04);border-left:3px solid var(--lx-orange)"><div style="width:18px;height:18px;border:2px solid var(--lx-bdr2);border-radius:4px;flex-shrink:0"></div><div style="flex:1"><div class="lx-b bld">Renew Therapy Plus Agreement</div><div class="lx-bxs cm">Due: 28 Apr 2026</div></div><span class="lx-chip or" style="font-size:6px">High</span></div>
  <div style="display:flex;align-items:center;gap:12px;padding:10px 20px;border-bottom:1px solid rgba(0,0,0,.04);border-left:3px solid var(--lx-cyan)"><div style="width:18px;height:18px;border:2px solid var(--lx-bdr2);border-radius:4px;flex-shrink:0"></div><div style="flex:1"><div class="lx-b bld">Schedule OT Assessment</div><div class="lx-bxs cm">Due: 30 May 2026</div></div><span class="lx-chip cy" style="font-size:6px">Medium</span></div>
  <div style="display:flex;align-items:center;gap:12px;padding:10px 20px;border-left:3px solid var(--lx-blue);opacity:.6"><div style="width:18px;height:18px;border:2px solid var(--lx-pink);border-radius:4px;flex-shrink:0;background:var(--lx-pink);display:flex;align-items:center;justify-content:center"><svg width="10" height="8" viewBox="0 0 11 9" fill="none" stroke="#fff" stroke-width="2.5" stroke-linecap="round"><polyline points="1 4 4 7 10 1"/></svg></div><div style="flex:1"><div class="lx-b bld" style="text-decoration:line-through">Update Contact Details</div><div class="lx-bxs cm">Completed 18 Apr 2026</div></div><span class="lx-chip yw" style="font-size:6px">Done</span></div>
</div></div></div>
```

### 88. Project List + Subtasks
**File:** `calendar-tasks/project-list-subtasks.html`

```html
<div class="ds"><div class="dl">PROJECT LIST WITH EXPANDABLE SUBTASKS</div>
<div class="lx-card" style="max-width:550px;padding:0;overflow:hidden">
<div style="padding:14px 20px;border-bottom:1px solid var(--lx-bdr)"><div class="lx-cmd">Active Projects</div></div>
<div class="dd open" style="border:none;border-radius:0;margin:0;border-bottom:1px solid var(--lx-bdr)">
  <div class="dd-h" style="border-radius:0"><div><div class="lx-b bld">Plan Review — Iona K.</div><div class="lx-bxs cm">3 of 5 tasks complete</div></div><div style="display:flex;align-items:center;gap:8px"><div style="width:60px;height:4px;background:rgba(0,0,0,.06);border-radius:2px"><div style="width:60%;height:100%;background:var(--lx-pink);border-radius:2px"></div></div><span class="dd-arrow arr-pk">▼</span></div></div>
  <div class="dd-body" style="padding:0">
    <div style="display:flex;align-items:center;gap:10px;padding:8px 20px;border-bottom:1px solid rgba(0,0,0,.03)"><div style="width:14px;height:14px;border-radius:3px;background:var(--lx-pink);display:flex;align-items:center;justify-content:center"><svg width="8" height="6" viewBox="0 0 11 9" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round"><polyline points="1 4 4 7 10 1"/></svg></div><span class="lx-bsm" style="text-decoration:line-through;opacity:.5">Gather allied health reports</span></div>
    <div style="display:flex;align-items:center;gap:10px;padding:8px 20px;border-bottom:1px solid rgba(0,0,0,.03)"><div style="width:14px;height:14px;border-radius:3px;background:var(--lx-pink);display:flex;align-items:center;justify-content:center"><svg width="8" height="6" viewBox="0 0 11 9" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round"><polyline points="1 4 4 7 10 1"/></svg></div><span class="lx-bsm" style="text-decoration:line-through;opacity:.5">Update budget tracking</span></div>
    <div style="display:flex;align-items:center;gap:10px;padding:8px 20px;border-bottom:1px solid rgba(0,0,0,.03)"><div style="width:14px;height:14px;border-radius:3px;background:var(--lx-pink);display:flex;align-items:center;justify-content:center"><svg width="8" height="6" viewBox="0 0 11 9" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round"><polyline points="1 4 4 7 10 1"/></svg></div><span class="lx-bsm" style="text-decoration:line-through;opacity:.5">Draft progress report</span></div>
    <div style="display:flex;align-items:center;gap:10px;padding:8px 20px;border-bottom:1px solid rgba(0,0,0,.03)"><div style="width:14px;height:14px;border:2px solid var(--lx-bdr2);border-radius:3px"></div><span class="lx-bsm">Submit to NDIA</span><span class="lx-chip or" style="font-size:6px;margin-left:auto">High</span></div>
    <div style="display:flex;align-items:center;gap:10px;padding:8px 20px"><div style="width:14px;height:14px;border:2px solid var(--lx-bdr2);border-radius:3px"></div><span class="lx-bsm">Schedule participant feedback</span><span class="lx-chip cy" style="font-size:6px;margin-left:auto">Medium</span></div>
  </div>
</div>
<div class="dd" style="border:none;border-radius:0;margin:0">
  <div class="dd-h" style="border-radius:0"><div><div class="lx-b bld">Service Agreement Renewal</div><div class="lx-bxs cm">1 of 3 tasks complete</div></div><div style="display:flex;align-items:center;gap:8px"><div style="width:60px;height:4px;background:rgba(0,0,0,.06);border-radius:2px"><div style="width:33%;height:100%;background:var(--lx-cyan);border-radius:2px"></div></div><span class="dd-arrow arr-cy">▼</span></div></div>
  <div class="dd-body"></div>
</div>
</div></div>
```

### 89. Project Board + Subtasks
**File:** `calendar-tasks/project-board-subtasks.html`

```html
<div class="ds"><div class="dl">PROJECT BOARD WITH SUBTASKS (KANBAN-STYLE)</div>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px;max-width:650px">
<div><div style="display:flex;justify-content:space-between;margin-bottom:8px"><div class="lx-csm cpk">TO DO</div><span class="lx-chip pk" style="font-size:6px">2</span></div>
<div class="lx-card" style="padding:12px;margin-bottom:8px"><div class="lx-cmd" style="font-size:11px">Plan Review — Iona K.</div><div class="lx-bxs cm" style="margin:4px 0 6px">Due: 15 May 2026</div>
<div style="display:flex;flex-direction:column;gap:3px"><div style="display:flex;align-items:center;gap:6px;font-size:10px;color:var(--lx-txm)"><div style="width:10px;height:10px;border:1.5px solid var(--lx-bdr2);border-radius:2px"></div>Submit documentation</div><div style="display:flex;align-items:center;gap:6px;font-size:10px;color:var(--lx-txm)"><div style="width:10px;height:10px;border:1.5px solid var(--lx-bdr2);border-radius:2px"></div>Schedule meeting</div><div style="display:flex;align-items:center;gap:6px;font-size:10px;color:var(--lx-txl);text-decoration:line-through"><div style="width:10px;height:10px;border-radius:2px;background:var(--lx-pink)"></div>Gather reports</div></div>
<div style="margin-top:6px"><span class="lx-chip or" style="font-size:6px">High</span></div></div>
<div class="lx-card" style="padding:12px"><div class="lx-cmd" style="font-size:11px">Transport Funding</div><div class="lx-bxs cm" style="margin:4px 0">Due: 30 May</div><span class="lx-chip cy" style="font-size:6px">Medium</span></div></div>
<div><div style="display:flex;justify-content:space-between;margin-bottom:8px"><div class="lx-csm ccy">IN PROGRESS</div><span class="lx-chip cy" style="font-size:6px">1</span></div>
<div class="lx-card" style="padding:12px"><div class="lx-cmd" style="font-size:11px">Budget Reconciliation</div><div class="lx-bxs cm" style="margin:4px 0 6px">Q1 review</div>
<div style="display:flex;flex-direction:column;gap:3px"><div style="display:flex;align-items:center;gap:6px;font-size:10px;color:var(--lx-txl);text-decoration:line-through"><div style="width:10px;height:10px;border-radius:2px;background:var(--lx-cyan)"></div>Export claims</div><div style="display:flex;align-items:center;gap:6px;font-size:10px;color:var(--lx-txl);text-decoration:line-through"><div style="width:10px;height:10px;border-radius:2px;background:var(--lx-cyan)"></div>Match invoices</div><div style="display:flex;align-items:center;gap:6px;font-size:10px;color:var(--lx-txm)"><div style="width:10px;height:10px;border:1.5px solid var(--lx-bdr2);border-radius:2px"></div>Flag discrepancies</div></div></div></div>
<div><div style="display:flex;justify-content:space-between;margin-bottom:8px"><div class="lx-csm" style="color:var(--lx-yellow)">DONE</div><span class="lx-chip yw" style="font-size:6px">1</span></div>
<div class="lx-card cream" style="padding:12px;opacity:.7"><div class="lx-cmd" style="font-size:11px;text-decoration:line-through">Service Agreements</div><div class="lx-bxs cm" style="margin:4px 0">All 4 providers signed</div><span class="lx-chip syw" style="font-size:6px">Complete</span></div></div>
</div></div>
```

## S08 — UI States, Process, Forms

### 90. Empty State
**File:** `ui-states/empty-state.html`

```html
<div class="demo-section">
  <div class="demo-label">EMPTY STATE</div>
  <div class="lx-card" style="max-width:400px;text-align:center;padding:40px">
    <div style="font-size:48px;margin-bottom:12px;opacity:.3">📋</div>
    <div class="lx-clg" style="margin-bottom:4px">No Participants Yet</div>
    <div class="lx-bsm cm" style="margin-bottom:16px">Start by adding your first participant to begin support coordination.</div>
    <button class="lx-btn pri">Add Participant</button>
  </div>
</div>
```

### 91. Loading Skeleton
**File:** `ui-states/loading-skeleton.html`

```html
<div class="demo-section">
  <div class="demo-label">LOADING SKELETON — SHIMMER ANIMATION</div>
  <div class="lx-card" style="max-width:400px">
    <div style="height:12px;width:40%;background:linear-gradient(90deg,var(--lx-cream) 25%,#ede8df 37%,var(--lx-cream) 63%);background-size:400% 100%;animation:shimmer 1.4s ease infinite;border-radius:var(--r-xs);margin-bottom:12px"></div>
    <div style="height:32px;width:60%;background:linear-gradient(90deg,var(--lx-cream) 25%,#ede8df 37%,var(--lx-cream) 63%);background-size:400% 100%;animation:shimmer 1.4s ease infinite;border-radius:var(--r-xs);margin-bottom:16px"></div>
    <div style="height:10px;width:100%;background:linear-gradient(90deg,var(--lx-cream) 25%,#ede8df 37%,var(--lx-cream) 63%);background-size:400% 100%;animation:shimmer 1.4s ease infinite;border-radius:var(--r-xs);margin-bottom:8px"></div>
    <div style="height:10px;width:80%;background:linear-gradient(90deg,var(--lx-cream) 25%,#ede8df 37%,var(--lx-cream) 63%);background-size:400% 100%;animation:shimmer 1.4s ease infinite;border-radius:var(--r-xs);margin-bottom:8px"></div>
    <div style="height:10px;width:90%;background:linear-gradient(90deg,var(--lx-cream) 25%,#ede8df 37%,var(--lx-cream) 63%);background-size:400% 100%;animation:shimmer 1.4s ease infinite;border-radius:var(--r-xs)"></div>
  </div>
</div>
<style>@keyframes shimmer{0%{background-position:100% 0}100%{background-position:-100% 0}}</style>
```

### 92. Error State
**File:** `ui-states/error-state.html`

```html
<div class="demo-section">
  <div class="demo-label">ERROR STATE</div>
  <div class="lx-card" style="max-width:400px;text-align:center;padding:40px;border-color:rgba(255,45,125,.2)">
    <div style="font-size:48px;margin-bottom:12px">⚠️</div>
    <div class="lx-clg cpk" style="margin-bottom:4px">Something Went Wrong</div>
    <div class="lx-bsm cm" style="margin-bottom:16px">We couldn't load the participant data. Please try again or contact support.</div>
    <div style="display:flex;gap:8px;justify-content:center">
      <button class="lx-btn pri">Retry</button>
      <button class="lx-btn out">Contact Support</button>
    </div>
  </div>
</div>
```

### 93. Process Flow
**File:** `ui-states/process-flow.html`

```html
<div class="demo-section" style="max-width:600px">
  <div class="demo-label">PROCESS FLOW — STATUS LIFECYCLE</div>
  <div style="display:flex;align-items:center;gap:0;flex-wrap:wrap">
    <div style="background:var(--lx-pink);color:#fff;padding:8px 16px;border-radius:var(--r-sm) 0 0 var(--r-sm);font-family:Barlow Condensed,sans-serif;font-weight:900;font-size:11px;text-transform:uppercase;letter-spacing:.06em;white-space:nowrap">Intake</div>
    <div style="width:0;height:0;border-top:16px solid transparent;border-bottom:16px solid transparent;border-left:10px solid var(--lx-pink)"></div>
    <div style="background:var(--lx-orange);color:#fff;padding:8px 16px;font-family:Barlow Condensed,sans-serif;font-weight:900;font-size:11px;text-transform:uppercase;letter-spacing:.06em;margin-left:-1px;white-space:nowrap">Assessment</div>
    <div style="width:0;height:0;border-top:16px solid transparent;border-bottom:16px solid transparent;border-left:10px solid var(--lx-orange)"></div>
    <div style="background:var(--lx-cyan);color:var(--lx-black);padding:8px 16px;font-family:Barlow Condensed,sans-serif;font-weight:900;font-size:11px;text-transform:uppercase;letter-spacing:.06em;margin-left:-1px;white-space:nowrap">Plan Active</div>
    <div style="width:0;height:0;border-top:16px solid transparent;border-bottom:16px solid transparent;border-left:10px solid var(--lx-cyan)"></div>
    <div style="background:var(--lx-purple);color:#fff;padding:8px 16px;font-family:Barlow Condensed,sans-serif;font-weight:900;font-size:11px;text-transform:uppercase;letter-spacing:.06em;margin-left:-1px;white-space:nowrap">Review</div>
    <div style="width:0;height:0;border-top:16px solid transparent;border-bottom:16px solid transparent;border-left:10px solid var(--lx-purple)"></div>
    <div style="background:var(--lx-yellow);color:var(--lx-black);padding:8px 16px;border-radius:0 var(--r-sm) var(--r-sm) 0;font-family:Barlow Condensed,sans-serif;font-weight:900;font-size:11px;text-transform:uppercase;letter-spacing:.06em;margin-left:-1px;white-space:nowrap">Renewed</div>
  </div>
</div>

<div class="demo-section" style="max-width:600px">
  <div class="demo-label">APPROVAL CHAIN</div>
  <div style="display:flex;flex-direction:column;gap:8px">
    <div style="display:flex;align-items:center;gap:12px">
      <div style="width:32px;height:32px;border-radius:50%;background:var(--lx-pink);color:#fff;display:flex;align-items:center;justify-content:center;font-size:14px">✓</div>
      <div class="lx-cmd" style="font-size:12px">Support Coordinator Submitted</div>
      <span class="lx-chip spk" style="font-size:6px;margin-left:auto">Complete</span>
    </div>
    <div style="width:2px;height:20px;background:var(--lx-pink);margin-left:15px"></div>
    <div style="display:flex;align-items:center;gap:12px">
      <div style="width:32px;height:32px;border-radius:50%;background:var(--lx-orange);color:#fff;display:flex;align-items:center;justify-content:center;font-size:14px">⏳</div>
      <div class="lx-cmd" style="font-size:12px">Manager Review</div>
      <span class="lx-chip or" style="font-size:6px;margin-left:auto">In Progress</span>
    </div>
    <div style="width:2px;height:20px;background:var(--lx-bdr2);margin-left:15px"></div>
    <div style="display:flex;align-items:center;gap:12px;opacity:.5">
      <div style="width:32px;height:32px;border-radius:50%;background:var(--lx-bdr2);color:var(--lx-txl);display:flex;align-items:center;justify-content:center;font-size:14px">3</div>
      <div class="lx-cmd" style="font-size:12px">NDIA Submission</div>
      <span class="lx-chip dk" style="font-size:6px;margin-left:auto">Pending</span>
    </div>
  </div>
</div>
```

### 94. Comparison / Diff View
**File:** `ui-states/comparison-diff-view.html`

```html
<div class="ds"><div class="dl">COMPARISON / DIFF VIEW — PLAN CHANGES</div>
<div class="lx-card" style="max-width:650px">
  <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px">
    <div class="lx-cmd">Plan Revision — Before vs After</div>
    <div style="display:flex;gap:6px">
      <span class="lx-chip pk" style="font-size:6px">3 Removed</span>
      <span class="lx-chip yw" style="font-size:6px">4 Added</span>
      <span class="lx-chip cy" style="font-size:6px">2 Modified</span>
    </div>
  </div>

  <div class="lx-eye" style="margin-bottom:6px">CORE SUPPORTS</div>
  <div class="diff-row diff-mod"><strong>Assistance with Daily Life:</strong> $42,000 → <strong style="color:var(--lx-cyan)">$48,500</strong> <span class="lx-bxs cm">(+$6,500 — increased hours)</span></div>
  <div class="diff-row" style="padding:8px 12px;font-size:12px;margin-bottom:2px;border-left:3px solid transparent">Transport: $3,120 <span class="lx-bxs cm">(unchanged)</span></div>
  <div class="diff-row diff-del">Consumables: $1,040 <span class="lx-bxs cm">(removed — now mainstream)</span></div>
  <div class="diff-row diff-add"><strong>Home & Living — SIL Explore:</strong> <strong style="color:#7a9900">$8,200</strong> <span class="lx-bxs cm">(new — SIL exploration funding)</span></div>

  <div class="lx-div"></div>
  <div class="lx-eye" style="margin-bottom:6px">CAPACITY BUILDING</div>
  <div class="diff-row diff-mod"><strong>Support Coordination:</strong> Level 2 → <strong style="color:var(--lx-cyan)">Specialist</strong> <span class="lx-bxs cm">(escalated complexity)</span></div>
  <div class="diff-row" style="padding:8px 12px;font-size:12px;margin-bottom:2px;border-left:3px solid transparent">Improved Daily Living: $7,800 <span class="lx-bxs cm">(unchanged)</span></div>
  <div class="diff-row diff-del">Finding & Keeping a Job: $4,000 <span class="lx-bxs cm">(removed — goal deprioritised)</span></div>
  <div class="diff-row diff-add"><strong>Behaviour Support Plan:</strong> <strong style="color:#7a9900">$16,947</strong> <span class="lx-bxs cm">(new — specialist behavioural intervention)</span></div>
  <div class="diff-row diff-add"><strong>Specialist Driving OT:</strong> <strong style="color:#7a9900">$4,460</strong> <span class="lx-bxs cm">(new — capacity building for independence)</span></div>

  <div class="lx-div"></div>
  <div class="lx-eye" style="margin-bottom:6px">CAPITAL</div>
  <div class="diff-row" style="padding:8px 12px;font-size:12px;margin-bottom:2px;border-left:3px solid transparent">Assistive Technology: $5,600 <span class="lx-bxs cm">(unchanged)</span></div>
  <div class="diff-row diff-del">Home Modifications: $3,000 <span class="lx-bxs cm">(removed — completed)</span></div>
  <div class="diff-row diff-add"><strong>Vehicle Modifications:</strong> <strong style="color:#7a9900">$12,000</strong> <span class="lx-bxs cm">(new — pending OT assessment)</span></div>

  <div class="lx-div" style="height:2px;background:var(--lx-tx)"></div>
  <div style="display:flex;justify-content:space-between;align-items:center">
    <div><div class="lx-csm">Total Budget Change</div></div>
    <div style="text-align:right">
      <div style="display:flex;align-items:baseline;gap:8px">
        <span style="font-family:Bebas Neue,serif;font-size:22px;color:var(--lx-txl);text-decoration:line-through">$72,400</span>
        <span style="font-family:JetBrains Mono,monospace;font-size:10px;color:var(--lx-txl)">→</span>
        <span style="font-family:Bebas Neue,serif;font-size:28px;color:var(--lx-pink)">$98,707</span>
      </div>
      <div style="font-family:JetBrains Mono,monospace;font-size:9px;color:var(--lx-pink)">▲ +$26,307 (+36.3%)</div>
    </div>
  </div>
</div></div>

<div class="ds"><div class="dl">SIDE-BY-SIDE COMPARISON — PROVIDER RATES</div>
<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;max-width:650px">
  <div class="lx-card" style="border-top:3px solid var(--lx-pink)">
    <div class="lx-eye cpk" style="margin-bottom:6px">CURRENT PROVIDER</div>
    <div class="lx-cmd" style="margin-bottom:8px">Therapy Plus</div>
    <div class="lx-ir"><span class="lx-ik">OT Rate</span><span class="lx-iv" style="font-size:16px">$193.99</span></div>
    <div class="lx-ir"><span class="lx-ik">Availability</span><span class="lx-iv n">3 days/week</span></div>
    <div class="lx-ir"><span class="lx-ik">Travel</span><span class="lx-iv n">Included</span></div>
    <div class="lx-ir"><span class="lx-ik">Rating</span><span><span class="lx-chip spk">Excellent</span></span></div>
  </div>
  <div class="lx-card" style="border-top:3px solid var(--lx-cyan)">
    <div class="lx-eye ccy" style="margin-bottom:6px">ALTERNATIVE PROVIDER</div>
    <div class="lx-cmd" style="margin-bottom:8px">OT Solutions</div>
    <div class="lx-ir"><span class="lx-ik">OT Rate</span><span class="lx-iv ccy" style="font-size:16px">$185.50</span></div>
    <div class="lx-ir"><span class="lx-ik">Availability</span><span class="lx-iv n">5 days/week</span></div>
    <div class="lx-ir"><span class="lx-ik">Travel</span><span class="lx-iv n">$0.96/km</span></div>
    <div class="lx-ir"><span class="lx-ik">Rating</span><span><span class="lx-chip cy">Good</span></span></div>
  </div>
</div></div>
```

### 95. Multi-Section Form
**File:** `forms/multi-section-form.html`

```html
<div class="ds"><div class="dl">MULTI-SECTION FORM LAYOUT</div>
<div style="max-width:550px">
<div class="lx-card" style="margin-bottom:10px"><div class="lx-eye cpk" style="margin-bottom:4px">SECTION 1</div><div class="lx-clg" style="margin-bottom:12px">Participant Information</div>
<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px">
<div><div style="font-family:JetBrains Mono,monospace;font-size:9px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--lx-txm);margin-bottom:4px">First Name <span style="color:var(--lx-pink)">*</span></div><input type="text" value="Iona" style="width:100%;padding:10px 13px;border:1.5px solid var(--lx-bdr2);border-radius:var(--r-sm);font-size:13px;font-family:Barlow,sans-serif"></div>
<div><div style="font-family:JetBrains Mono,monospace;font-size:9px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--lx-txm);margin-bottom:4px">Last Name <span style="color:var(--lx-pink)">*</span></div><input type="text" value="Karamacoski" style="width:100%;padding:10px 13px;border:1.5px solid var(--lx-bdr2);border-radius:var(--r-sm);font-size:13px;font-family:Barlow,sans-serif"></div>
<div><div style="font-family:JetBrains Mono,monospace;font-size:9px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--lx-txm);margin-bottom:4px">NDIS Number</div><input type="text" value="12345678" style="width:100%;padding:10px 13px;border:1.5px solid var(--lx-bdr2);border-radius:var(--r-sm);font-size:12px;font-family:JetBrains Mono,monospace;letter-spacing:.04em"></div>
<div><div style="font-family:JetBrains Mono,monospace;font-size:9px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--lx-txm);margin-bottom:4px">Date of Birth</div><input type="date" style="width:100%;padding:10px 13px;border:1.5px solid var(--lx-bdr2);border-radius:var(--r-sm);font-size:13px;font-family:Barlow,sans-serif"></div>
</div></div>
<div class="lx-card" style="margin-bottom:10px"><div class="lx-eye ccy" style="margin-bottom:4px">SECTION 2</div><div class="lx-clg" style="margin-bottom:12px">Plan Details</div>
<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px">
<div><div style="font-family:JetBrains Mono,monospace;font-size:9px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--lx-txm);margin-bottom:4px">Plan Start</div><input type="date" style="width:100%;padding:10px 13px;border:1.5px solid var(--lx-bdr2);border-radius:var(--r-sm);font-size:13px;font-family:Barlow,sans-serif"></div>
<div><div style="font-family:JetBrains Mono,monospace;font-size:9px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--lx-txm);margin-bottom:4px">Plan End</div><input type="date" style="width:100%;padding:10px 13px;border:1.5px solid var(--lx-bdr2);border-radius:var(--r-sm);font-size:13px;font-family:Barlow,sans-serif"></div>
<div style="grid-column:1/-1"><div style="font-family:JetBrains Mono,monospace;font-size:9px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--lx-txm);margin-bottom:4px">Management Type</div>
<select style="width:100%;padding:10px 13px;border:1.5px solid var(--lx-bdr2);border-radius:var(--r-sm);font-size:13px;font-family:Barlow,sans-serif"><option>NDIA Managed</option><option>Plan Managed</option><option>Self Managed</option></select></div>
</div></div>
<div style="display:flex;gap:8px;justify-content:flex-end"><button class="lx-btn out">Save Draft</button><button class="lx-btn pri">Submit</button></div>
</div></div>
```

## S10 — Interactive Components

### 103. Confirm Modal
**File:** `modals-drawers/modal-confirm.html`

```html
<div class="demo-section">
  <div class="demo-label">CONFIRM MODAL</div>
  <div style="position:relative;height:300px;background:rgba(0,0,0,.4);border-radius:var(--r-md);display:flex;align-items:center;justify-content:center">
    <div style="background:var(--lx-card);border-radius:var(--r-lg);padding:28px;max-width:400px;width:100%;box-shadow:var(--sh-hv)">
      <div class="lx-clg" style="margin-bottom:4px">Confirm Action</div>
      <div class="lx-bsm cm" style="margin-bottom:20px">Are you sure you want to submit this plan review? This action cannot be undone.</div>
      <div style="display:flex;gap:8px;justify-content:flex-end">
        <button class="lx-btn out">Cancel</button>
        <button class="lx-btn pri">Confirm</button>
      </div>
    </div>
  </div>
</div>
```

### 104. Intake Modal
**File:** `modals-drawers/modal-intake.html`

```html
<div class="demo-section">
  <div class="demo-label">INTAKE MODAL — FORM</div>
  <div style="position:relative;min-height:400px;background:rgba(0,0,0,.4);border-radius:var(--r-md);display:flex;align-items:center;justify-content:center;padding:20px">
    <div style="background:var(--lx-card);border-radius:var(--r-lg);padding:28px;max-width:500px;width:100%;box-shadow:var(--sh-hv)">
      <div class="lx-eye" style="color:var(--lx-pink);margin-bottom:4px">NEW PARTICIPANT</div>
      <div class="lx-clg" style="margin-bottom:16px">Intake Form</div>
      <div style="display:flex;flex-direction:column;gap:12px">
        <div>
          <label class="lx-csm" style="display:block;margin-bottom:4px">Full Name</label>
          <input type="text" placeholder="Enter full name" style="width:100%;padding:10px 14px;border:1px solid var(--lx-bdr2);border-radius:var(--r-sm);font-family:Barlow,sans-serif;font-size:13px">
        </div>
        <div>
          <label class="lx-csm" style="display:block;margin-bottom:4px">NDIS Number</label>
          <input type="text" placeholder="Enter NDIS number" style="width:100%;padding:10px 14px;border:1px solid var(--lx-bdr2);border-radius:var(--r-sm);font-family:JetBrains Mono,monospace;font-size:12px">
        </div>
        <div>
          <label class="lx-csm" style="display:block;margin-bottom:4px">Plan Start Date</label>
          <input type="date" style="width:100%;padding:10px 14px;border:1px solid var(--lx-bdr2);border-radius:var(--r-sm);font-family:Barlow,sans-serif;font-size:13px">
        </div>
        <div>
          <label class="lx-csm" style="display:block;margin-bottom:4px">Priority</label>
          <div style="display:flex;gap:6px">
            <span class="lx-chip pk" style="cursor:pointer">Critical</span>
            <span class="lx-chip or" style="cursor:pointer">High</span>
            <span class="lx-chip cy" style="cursor:pointer">Medium</span>
            <span class="lx-chip bl" style="cursor:pointer">Low</span>
          </div>
        </div>
      </div>
      <div style="display:flex;gap:8px;justify-content:flex-end;margin-top:20px">
        <button class="lx-btn out">Cancel</button>
        <button class="lx-btn pri">Create Participant</button>
      </div>
    </div>
  </div>
</div>
```

### 105. Dark Alert Modal
**File:** `modals-drawers/dark-alert-modal.html`

```html
<div class="ds"><div class="dl">DARK ALERT / COMPLIANCE MODAL</div>
<div style="position:relative;height:320px;background:rgba(13,13,13,.7);border-radius:var(--r-md);display:flex;align-items:center;justify-content:center;padding:20px">
<div style="background:var(--lx-black);color:var(--lx-offwhite);border-radius:var(--r-lg);max-width:440px;width:100%;box-shadow:0 32px 80px rgba(0,0,0,.5);overflow:hidden">
<div style="height:5px;background:var(--lx-orange)"></div>
<div style="padding:20px">
  <div style="display:flex;align-items:center;gap:10px;margin-bottom:12px"><div style="width:36px;height:36px;border-radius:50%;background:rgba(255,102,0,.2);display:flex;align-items:center;justify-content:center;font-size:18px">⚠</div><div class="lx-clg" style="color:var(--lx-orange)">Compliance Alert</div></div>
  <div class="lx-bsm" style="color:rgba(245,240,232,.7);margin-bottom:16px">A mandatory compliance review has been triggered. Service agreement for <strong style="color:var(--lx-offwhite)">Therapy Plus</strong> expires in <strong style="color:var(--lx-orange)">7 days</strong>. Failure to renew may result in service disruption and compliance findings.</div>
  <div style="display:flex;gap:8px;justify-content:flex-end">
    <button style="font-family:Barlow Condensed,sans-serif;font-weight:900;font-size:13px;text-transform:uppercase;letter-spacing:.06em;padding:10px 20px;border-radius:var(--r-sm);border:2px solid rgba(255,255,255,.15);background:transparent;color:var(--lx-offwhite);cursor:pointer">Dismiss</button>
    <button style="font-family:Barlow Condensed,sans-serif;font-weight:900;font-size:13px;text-transform:uppercase;letter-spacing:.06em;padding:10px 20px;border-radius:var(--r-sm);border:none;background:var(--lx-pink);color:#fff;cursor:pointer;box-shadow:0 4px 16px rgba(255,45,125,.3)">Acknowledge & Action</button>
  </div>
</div></div></div></div>
```

### 106. Right Drawer
**File:** `modals-drawers/drawer-right.html`

```html
<div class="demo-section">
  <div class="demo-label">RIGHT DRAWER — TASK DETAIL</div>
  <div style="position:relative;height:400px;background:var(--lx-cream);border-radius:var(--r-md);overflow:hidden;display:flex">
    <div style="flex:1;padding:20px">
      <div class="lx-cmd cm">Main content area (dimmed)</div>
    </div>
    <div style="width:360px;background:var(--lx-card);border-left:1px solid var(--lx-bdr);padding:20px;overflow-y:auto;box-shadow:-4px 0 24px rgba(0,0,0,.08)">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px">
        <div class="lx-clg">Task Detail</div>
        <button class="lx-btn gh" style="padding:4px 8px;font-size:16px">✕</button>
      </div>
      <div class="lx-div"></div>
      <div class="lx-eye" style="color:var(--lx-pink);margin-bottom:4px">TASK</div>
      <div class="lx-cmd" style="margin-bottom:12px">Submit Plan Review Documentation</div>
      <div class="lx-ir"><span class="lx-ik">Assignee</span><span class="lx-iv n">Ile Karamacoski</span></div>
      <div class="lx-ir"><span class="lx-ik">Due Date</span><span class="lx-iv n">15 May 2026</span></div>
      <div class="lx-ir"><span class="lx-ik">Priority</span><span><span class="lx-chip or">High</span></span></div>
      <div class="lx-ir"><span class="lx-ik">Status</span><span><span class="lx-chip spk">In Progress</span></span></div>
      <div class="lx-div"></div>
      <div class="lx-eye" style="margin-bottom:6px">NOTES</div>
      <div class="lx-bsm cm">Gather all supporting documentation from allied health providers. Ensure budget tracking is up to date before submission.</div>
      <div style="margin-top:16px;display:flex;gap:8px">
        <button class="lx-btn pri sm">Mark Complete</button>
        <button class="lx-btn out sm">Edit</button>
      </div>
    </div>
  </div>
</div>
```

### 107. Bottom Sheet / Tray
**File:** `modals-drawers/bottom-sheet.html`

```html
<div class="ds"><div class="dl">BOTTOM SHEET + ACTIVITY TRAY</div>
<div style="position:relative;height:350px;background:var(--lx-cream);border-radius:var(--r-md);overflow:hidden">
  <div style="padding:20px;text-align:center" class="lx-bsm cm">Main content area</div>
  <div style="position:absolute;bottom:0;left:0;right:0;background:var(--lx-card);border-radius:var(--r-lg) var(--r-lg) 0 0;box-shadow:0 -8px 40px rgba(0,0,0,.1);padding:0;max-height:60%">
    <div style="width:40px;height:4px;background:var(--lx-bdr2);border-radius:2px;margin:12px auto 8px"></div>
    <div style="padding:0 20px 20px">
      <div class="lx-clg" style="margin-bottom:12px">Quick Actions</div>
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px">
        <button style="padding:16px;background:var(--lx-pink);color:#fff;border:none;border-radius:var(--r-md);cursor:pointer;font-family:Barlow Condensed,sans-serif;font-weight:900;font-size:12px;text-transform:uppercase">📞 Call</button>
        <button style="padding:16px;background:var(--lx-cyan);color:var(--lx-black);border:none;border-radius:var(--r-md);cursor:pointer;font-family:Barlow Condensed,sans-serif;font-weight:900;font-size:12px;text-transform:uppercase">📝 Note</button>
        <button style="padding:16px;background:var(--lx-yellow);color:var(--lx-black);border:none;border-radius:var(--r-md);cursor:pointer;font-family:Barlow Condensed,sans-serif;font-weight:900;font-size:12px;text-transform:uppercase">📅 Book</button>
      </div>
    </div>
  </div>
</div></div>

<div class="ds"><div class="dl">DARK ACTIVITY TRAY</div>
<div style="background:var(--lx-black);border-radius:var(--r-lg) var(--r-lg) 0 0;padding:0;max-width:400px">
  <div style="width:40px;height:4px;background:rgba(255,255,255,.15);border-radius:2px;margin:12px auto 8px"></div>
  <div style="padding:0 20px 20px">
    <div class="lx-clg" style="color:var(--lx-offwhite);margin-bottom:12px">Activity Tray</div>
    <div class="lx-ir" style="border-bottom-color:rgba(255,255,255,.07)"><span class="lx-ik" style="color:rgba(245,240,232,.5)">Last Activity</span><span class="lx-iv n" style="color:var(--lx-offwhite)">2 mins ago</span></div>
    <div class="lx-ir" style="border-bottom-color:rgba(255,255,255,.07)"><span class="lx-ik" style="color:rgba(245,240,232,.5)">Open Tasks</span><span class="lx-iv" style="color:var(--lx-pink)">5</span></div>
    <div class="lx-ir" style="border-bottom:none"><span class="lx-ik" style="color:rgba(245,240,232,.5)">Next Event</span><span class="lx-iv n" style="color:var(--lx-cyan)">OT Session 10:30</span></div>
  </div>
</div></div>
```

### 108. Form Inputs
**File:** `forms/form-inputs.html`

```html
<div class="demo-section" style="max-width:500px">
  <div class="demo-label">TEXT INPUT</div>
  <div style="margin-bottom:12px">
    <label style="font-family:Barlow Condensed,sans-serif;font-weight:900;font-size:12px;text-transform:uppercase;letter-spacing:.06em;display:block;margin-bottom:4px">Participant Name</label>
    <input type="text" value="Iona Karamacoski" style="width:100%;padding:10px 14px;border:1px solid var(--lx-bdr2);border-radius:var(--r-sm);font-family:Barlow,sans-serif;font-size:13px;background:var(--lx-card);outline:none;transition:border-color .2s" onfocus="this.style.borderColor='var(--lx-pink)'" onblur="this.style.borderColor='var(--lx-bdr2)'">
  </div>
  <div style="margin-bottom:12px">
    <label style="font-family:Barlow Condensed,sans-serif;font-weight:900;font-size:12px;text-transform:uppercase;letter-spacing:.06em;display:block;margin-bottom:4px">NDIS Number</label>
    <input type="text" placeholder="Enter NDIS number..." style="width:100%;padding:10px 14px;border:1px solid var(--lx-bdr2);border-radius:var(--r-sm);font-family:JetBrains Mono,monospace;font-size:12px;background:var(--lx-card);outline:none;letter-spacing:.04em">
  </div>
  <div style="margin-bottom:12px">
    <label style="font-family:Barlow Condensed,sans-serif;font-weight:900;font-size:12px;text-transform:uppercase;letter-spacing:.06em;display:block;margin-bottom:4px">Case Notes</label>
    <textarea rows="4" placeholder="Enter case notes..." style="width:100%;padding:10px 14px;border:1px solid var(--lx-bdr2);border-radius:var(--r-sm);font-family:Barlow,sans-serif;font-size:13px;background:var(--lx-card);outline:none;resize:vertical"></textarea>
  </div>
  <div style="margin-bottom:12px">
    <label style="font-family:Barlow Condensed,sans-serif;font-weight:900;font-size:12px;text-transform:uppercase;letter-spacing:.06em;display:block;margin-bottom:4px">Service Category</label>
    <select style="width:100%;padding:10px 14px;border:1px solid var(--lx-bdr2);border-radius:var(--r-sm);font-family:Barlow,sans-serif;font-size:13px;background:var(--lx-card);outline:none">
      <option>Core Supports</option>
      <option>Capacity Building</option>
      <option>Capital Supports</option>
      <option>Transport</option>
    </select>
  </div>
</div>

<div class="demo-section" style="max-width:500px">
  <div class="demo-label">TOGGLE ROW</div>
  <div class="lx-toggle-row" style="display:flex;align-items:center;justify-content:space-between;padding:10px 0;cursor:pointer">
    <span class="lx-cmd">Enable Notifications</span>
    <div class="lx-tog" style="width:40px;height:22px;border-radius:var(--r-p);background:var(--lx-bdr2);position:relative;transition:background .2s">
      <div style="width:18px;height:18px;border-radius:50%;background:#fff;position:absolute;top:2px;left:2px;transition:transform .2s var(--spring);box-shadow:var(--sh-sm)"></div>
    </div>
  </div>
</div>

<div class="demo-section" style="max-width:500px">
  <div class="demo-label">FILE DROP ZONE</div>
  <div style="border:2px dashed var(--lx-bdr2);border-radius:var(--r-md);padding:30px;text-align:center;cursor:pointer;transition:border-color .2s" onmouseover="this.style.borderColor='var(--lx-pink)'" onmouseout="this.style.borderColor='var(--lx-bdr2)'">
    <div class="lx-csm" style="color:var(--lx-txl)">Drop files here or click to browse</div>
    <div class="lx-bxs cm" style="margin-top:4px">PDF, DOCX, PNG up to 10MB</div>
  </div>
</div>
```

### 109. Form Controls
**File:** `forms/form-controls.html`

```html
<div class="demo-section" style="max-width:500px">
  <div class="demo-label">TOGGLES</div>
  <div class="lx-toggle-row" onclick="this.querySelector('.lx-tog').classList.toggle('on')">
    <div class="lx-tog"><div class="lx-tog-thumb" style="position:absolute;top:3px;left:3px;width:18px;height:18px;border-radius:50%;background:white;box-shadow:0 2px 6px rgba(0,0,0,.2);transition:transform .3s var(--spring)"></div></div>
    <span style="font-size:12px;font-weight:600">Enable Email Notifications</span>
  </div>
  <div class="lx-toggle-row" onclick="this.querySelector('.lx-tog').classList.toggle('on')">
    <div class="lx-tog on"><div class="lx-tog-thumb" style="position:absolute;top:3px;left:3px;width:18px;height:18px;border-radius:50%;background:white;box-shadow:0 2px 6px rgba(0,0,0,.2);transition:transform .3s var(--spring);transform:translateX(20px)"></div></div>
    <span style="font-size:12px;font-weight:600">Auto-sync with NDIS Portal</span>
  </div>
</div>

<div class="demo-section" style="max-width:500px">
  <div class="demo-label">CHECKBOXES</div>
  <div class="lx-check on" onclick="this.classList.toggle('on')">
    <div class="lx-check-box"><svg class="lx-check-mark" viewBox="0 0 11 9"><polyline points="1 4 4 7 10 1"/></svg></div>
    <span style="font-size:12px">I confirm this information is accurate</span>
  </div>
  <div class="lx-check" onclick="this.classList.toggle('on')">
    <div class="lx-check-box"><svg class="lx-check-mark" viewBox="0 0 11 9"><polyline points="1 4 4 7 10 1"/></svg></div>
    <span style="font-size:12px">Send copy to participant</span>
  </div>
  <div class="lx-check" onclick="this.classList.toggle('on')">
    <div class="lx-check-box"><svg class="lx-check-mark" viewBox="0 0 11 9"><polyline points="1 4 4 7 10 1"/></svg></div>
    <span style="font-size:12px">Include supporting documentation</span>
  </div>
</div>

<div class="demo-section" style="max-width:500px">
  <div class="demo-label">RADIO BUTTONS</div>
  <div id="radio-group">
    <div class="lx-radio on" onclick="document.querySelectorAll('#radio-group .lx-radio').forEach(r=>r.classList.remove('on'));this.classList.add('on')">
      <div class="lx-radio-o"><div class="lx-radio-dot" style="width:8px;height:8px;border-radius:50%;background:var(--lx-pink);transform:scale(1);transition:transform .25s var(--spring)"></div></div>
      <span style="font-size:12px">NDIA Managed</span>
    </div>
    <div class="lx-radio" onclick="document.querySelectorAll('#radio-group .lx-radio').forEach(r=>r.classList.remove('on'));this.classList.add('on')">
      <div class="lx-radio-o"><div class="lx-radio-dot" style="width:8px;height:8px;border-radius:50%;background:var(--lx-pink);transform:scale(0);transition:transform .25s var(--spring)"></div></div>
      <span style="font-size:12px">Plan Managed</span>
    </div>
    <div class="lx-radio" onclick="document.querySelectorAll('#radio-group .lx-radio').forEach(r=>r.classList.remove('on'));this.classList.add('on')">
      <div class="lx-radio-o"><div class="lx-radio-dot" style="width:8px;height:8px;border-radius:50%;background:var(--lx-pink);transform:scale(0);transition:transform .25s var(--spring)"></div></div>
      <span style="font-size:12px">Self Managed</span>
    </div>
  </div>
</div>

<div class="demo-section" style="max-width:500px">
  <div class="demo-label">SEGMENT CONTROL</div>
  <div style="background:rgba(13,13,13,.06);border-radius:var(--r-sm);padding:3px;display:inline-flex;gap:2px">
    <button onclick="this.parentElement.querySelectorAll('button').forEach(b=>{b.style.background='transparent';b.style.color='var(--lx-txm)';b.style.boxShadow='none'});this.style.background='var(--lx-card)';this.style.color='var(--lx-tx)';this.style.boxShadow='var(--sh-sm)'" style="font-family:Barlow Condensed,sans-serif;font-weight:900;font-size:12px;text-transform:uppercase;letter-spacing:.05em;padding:7px 16px;border:none;background:var(--lx-card);border-radius:6px;cursor:pointer;color:var(--lx-tx);box-shadow:var(--sh-sm)">Weekly</button>
    <button onclick="this.parentElement.querySelectorAll('button').forEach(b=>{b.style.background='transparent';b.style.color='var(--lx-txm)';b.style.boxShadow='none'});this.style.background='var(--lx-card)';this.style.color='var(--lx-tx)';this.style.boxShadow='var(--sh-sm)'" style="font-family:Barlow Condensed,sans-serif;font-weight:900;font-size:12px;text-transform:uppercase;letter-spacing:.05em;padding:7px 16px;border:none;background:transparent;border-radius:6px;cursor:pointer;color:var(--lx-txm)">Monthly</button>
    <button onclick="this.parentElement.querySelectorAll('button').forEach(b=>{b.style.background='transparent';b.style.color='var(--lx-txm)';b.style.boxShadow='none'});this.style.background='var(--lx-card)';this.style.color='var(--lx-tx)';this.style.boxShadow='var(--sh-sm)'" style="font-family:Barlow Condensed,sans-serif;font-weight:900;font-size:12px;text-transform:uppercase;letter-spacing:.05em;padding:7px 16px;border:none;background:transparent;border-radius:6px;cursor:pointer;color:var(--lx-txm)">Yearly</button>
  </div>
</div>

<div class="demo-section" style="max-width:500px">
  <div class="demo-label">RANGE SLIDER</div>
  <input type="range" min="0" max="100" value="68" style="-webkit-appearance:none;width:100%;height:4px;border-radius:2px;background:var(--lx-bdr2);outline:none;cursor:pointer">
  <div class="lx-bxs cm" style="margin-top:4px">Budget allocation: 68%</div>
</div>

<div class="demo-section" style="max-width:500px">
  <div class="demo-label">INPUT WITH VALIDATION STATES</div>
  <div style="margin-bottom:12px">
    <div style="font-family:JetBrains Mono,monospace;font-size:9px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--lx-txm);margin-bottom:4px">Valid Field</div>
    <input type="text" value="Iona Karamacoski" style="width:100%;padding:10px 13px;border:1.5px solid #22c55e;border-radius:var(--r-sm);font-family:Barlow,sans-serif;font-size:13px;background:rgba(34,197,94,.03)">
    <div style="font-size:10px;margin-top:4px;color:#22c55e">✓ Name verified</div>
  </div>
  <div style="margin-bottom:12px">
    <div style="font-family:JetBrains Mono,monospace;font-size:9px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--lx-txm);margin-bottom:4px">Error Field</div>
    <input type="text" value="" placeholder="Required field" style="width:100%;padding:10px 13px;border:1.5px solid var(--lx-pink);border-radius:var(--r-sm);font-family:Barlow,sans-serif;font-size:13px;background:rgba(255,45,125,.03)">
    <div style="font-size:10px;margin-top:4px;color:var(--lx-pink)">✕ This field is required</div>
  </div>
  <div>
    <div style="font-family:JetBrains Mono,monospace;font-size:9px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--lx-txm);margin-bottom:4px">Warning Field</div>
    <input type="text" value="$95,000" style="width:100%;padding:10px 13px;border:1.5px solid var(--lx-orange);border-radius:var(--r-sm);font-family:Barlow,sans-serif;font-size:13px;background:rgba(255,102,0,.03)">
    <div style="font-size:10px;margin-top:4px;color:var(--lx-orange)">⚠ Amount exceeds typical plan budget</div>
  </div>
</div>
```

### 110. Tag Input
**File:** `forms/tag-input.html`

```html
<div class="ds"><div class="dl">TAG INPUT — MULTI-SELECT DIAGNOSES</div>
<div style="max-width:500px">
  <div style="font-family:JetBrains Mono,monospace;font-size:9px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--lx-txm);margin-bottom:4px">Diagnoses / Conditions</div>
  <div style="display:flex;flex-wrap:wrap;gap:6px;padding:8px 12px;border:1.5px solid var(--lx-bdr2);border-radius:var(--r-sm);background:var(--lx-card);min-height:42px;align-items:center">
    <span style="display:inline-flex;align-items:center;gap:4px;font-family:JetBrains Mono,monospace;font-size:8px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;padding:4px 8px;border-radius:var(--r-p);background:var(--lx-pink);color:#fff">Autism <span style="cursor:pointer;opacity:.7;margin-left:2px">✕</span></span>
    <span style="display:inline-flex;align-items:center;gap:4px;font-family:JetBrains Mono,monospace;font-size:8px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;padding:4px 8px;border-radius:var(--r-p);background:var(--lx-cyan);color:var(--lx-black)">ADHD <span style="cursor:pointer;opacity:.7;margin-left:2px">✕</span></span>
    <span style="display:inline-flex;align-items:center;gap:4px;font-family:JetBrains Mono,monospace;font-size:8px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;padding:4px 8px;border-radius:var(--r-p);background:var(--lx-purple);color:#fff">Anxiety <span style="cursor:pointer;opacity:.7;margin-left:2px">✕</span></span>
    <input type="text" placeholder="Add diagnosis..." style="border:none;outline:none;font-family:Barlow,sans-serif;font-size:12px;flex:1;min-width:120px;background:transparent">
  </div>
  <div class="lx-bxs cm" style="margin-top:4px">Type to search and press Enter to add</div>
</div></div>
```

### 111. Toast Notifications
**File:** `ui-states/toast-notifications.html`

```html
<div class="demo-section">
  <div class="demo-label">TOAST NOTIFICATION — 4 VARIANTS (CLICK TO TRIGGER)</div>
  <div class="demo-row">
    <button class="lx-btn pk" onclick="showToast('suc','Success','Record saved','Participant data has been updated successfully')">Success Toast</button>
    <button class="lx-btn or" onclick="showToast('wrn','Warning','Budget Alert','Transport budget has exceeded 85% utilization')">Warning Toast</button>
    <button class="lx-btn cy" onclick="showToast('inf','Info','Sync Complete','All service agreements have been synchronised')">Info Toast</button>
    <button class="lx-btn pk" style="background:var(--lx-pink)" onclick="showToast('err','Error','Connection Failed','Could not reach NDIS API. Please retry.')">Error Toast</button>
  </div>
  <div id="toast-stack" style="position:fixed;top:72px;right:16px;z-index:1100;display:flex;flex-direction:column;gap:8px;pointer-events:none"></div>
</div>

<div class="demo-section">
  <div class="demo-label">TOAST ANATOMY (STATIC PREVIEW)</div>
  <div style="max-width:340px">
    <div style="background:var(--lx-black);color:var(--lx-offwhite);border-radius:var(--r-md);overflow:hidden;box-shadow:0 8px 32px rgba(0,0,0,.3)">
      <div style="padding:12px 14px;display:flex;gap:10px;align-items:flex-start">
        <div style="width:20px;height:20px;border-radius:50%;background:var(--lx-yellow);color:var(--lx-black);display:flex;align-items:center;justify-content:center;font-size:11px;flex-shrink:0">✓</div>
        <div style="flex:1">
          <div style="font-family:Barlow Condensed,sans-serif;font-weight:900;font-size:12px;text-transform:uppercase;letter-spacing:.06em;margin-bottom:1px">Success</div>
          <div style="font-size:10px;color:rgba(245,240,232,.65);line-height:1.4">Action completed successfully</div>
        </div>
        <div style="width:18px;height:18px;border-radius:50%;background:rgba(255,255,255,.1);display:flex;align-items:center;justify-content:center;font-size:10px;color:rgba(245,240,232,.6);cursor:pointer">✕</div>
      </div>
      <div style="height:3px;background:rgba(255,255,255,.08)"><div style="height:100%;width:65%;background:var(--lx-yellow)"></div></div>
    </div>
  </div>
</div>
```

### 112. Checklists
**File:** `checklists-steppers/checklists.html`

```html
<!-- Component: Checklists | Category: Checklists -->

<div class="demo-section" style="max-width:500px">
  <div class="demo-label">INTERACTIVE CHECKLISTS WITH URGENCY BORDERS</div>
  <div class="ck urg-c">
    <div class="ck-box"><svg viewBox="0 0 14 14"><polyline points="2.5 7 5.5 10 11.5 4"/></svg></div>
    <div class="ck-text"><div class="lx-cmd">Critical: Service Agreement Renewal</div><div class="lx-bsm cm">Therapy Plus agreement expires 28 Apr 2026</div></div>
  </div>
  <div class="ck urg-h">
    <div class="ck-box"><svg viewBox="0 0 14 14"><polyline points="2.5 7 5.5 10 11.5 4"/></svg></div>
    <div class="ck-text"><div class="lx-cmd">High: Submit Plan Review Documents</div><div class="lx-bsm cm">Due before scheduled review on 15 May 2026</div></div>
  </div>
  <div class="ck urg-m done">
    <div class="ck-box"><svg viewBox="0 0 14 14"><polyline points="2.5 7 5.5 10 11.5 4"/></svg></div>
    <div class="ck-text"><div class="lx-cmd">Medium: Update Contact Details</div><div class="lx-bsm cm">Phone number change confirmed</div></div>
  </div>
  <div class="ck urg-s">
    <div class="ck-box"><svg viewBox="0 0 14 14"><polyline points="2.5 7 5.5 10 11.5 4"/></svg></div>
    <div class="ck-text"><div class="lx-cmd">Standard: Schedule Monthly Check-In</div><div class="lx-bsm cm">Next check-in due 01 May 2026</div></div>
  </div>
</div>
```

### 113. Stepper / Wizard
**File:** `checklists-steppers/stepper-wizard.html`

```html
<div class="demo-section" style="max-width:500px">
  <div class="demo-label">NUMBERED STEPPER — 3 STEPS</div>
  <div style="display:flex;gap:0;margin-bottom:20px">
    <div style="flex:1;text-align:center">
      <div style="width:32px;height:32px;border-radius:50%;background:var(--lx-pink);color:#fff;display:inline-flex;align-items:center;justify-content:center;font-family:Bebas Neue,serif;font-size:16px">1</div>
      <div class="lx-csm cpk" style="margin-top:4px">Details</div>
      <div class="lx-bxs cm" style="margin-top:2px">Participant info</div>
    </div>
    <div style="flex:0 0 40px;display:flex;align-items:center;padding-bottom:30px"><div style="height:2px;width:100%;background:var(--lx-pink)"></div></div>
    <div style="flex:1;text-align:center">
      <div style="width:32px;height:32px;border-radius:50%;background:var(--lx-pink);color:#fff;display:inline-flex;align-items:center;justify-content:center;font-family:Bebas Neue,serif;font-size:16px">2</div>
      <div class="lx-csm cpk" style="margin-top:4px">Services</div>
      <div class="lx-bxs cm" style="margin-top:2px">Select supports</div>
    </div>
    <div style="flex:0 0 40px;display:flex;align-items:center;padding-bottom:30px"><div style="height:2px;width:100%;background:var(--lx-bdr2)"></div></div>
    <div style="flex:1;text-align:center">
      <div style="width:32px;height:32px;border-radius:50%;background:var(--lx-bdr2);color:var(--lx-txm);display:inline-flex;align-items:center;justify-content:center;font-family:Bebas Neue,serif;font-size:16px">3</div>
      <div class="lx-csm cm" style="margin-top:4px">Confirm</div>
      <div class="lx-bxs cm" style="margin-top:2px">Review & submit</div>
    </div>
  </div>
  <div class="lx-card">
    <div class="lx-eye" style="color:var(--lx-pink);margin-bottom:4px">STEP 2 OF 3</div>
    <div class="lx-clg" style="margin-bottom:12px">Select Supports</div>
    <div class="lx-bsm cm">Choose the support services to include in the participant&rsquo;s plan recommendation.</div>
    <div style="display:flex;gap:8px;margin-top:16px;justify-content:flex-end">
      <button class="lx-btn out sm">← Back</button>
      <button class="lx-btn pri sm">Next Step →</button>
    </div>
  </div>
</div>
```

## S11 — Productivity Suite

### 114. Kanban Board
**File:** `productivity/kanban-board.html`

```html
<div class="demo-section">
  <div class="demo-label">KANBAN BOARD — 4 COLUMNS</div>
  <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:10px;min-height:300px">
    <div>
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px">
        <div class="lx-csm cpk">TO DO</div><span class="lx-chip pk" style="font-size:6px">3</span>
      </div>
      <div class="lx-card" style="padding:12px;margin-bottom:8px;border-left:3px solid var(--lx-pink)">
        <div class="lx-cmd" style="font-size:12px">Submit Plan Review</div>
        <div class="lx-bxs cm" style="margin-top:4px">Due: 15 May 2026</div>
        <div style="margin-top:6px"><span class="lx-chip pk" style="font-size:6px">Critical</span></div>
      </div>
      <div class="lx-card" style="padding:12px;margin-bottom:8px;border-left:3px solid var(--lx-orange)">
        <div class="lx-cmd" style="font-size:12px">OT Assessment Follow-up</div>
        <div class="lx-bxs cm" style="margin-top:4px">Due: 22 May 2026</div>
        <div style="margin-top:6px"><span class="lx-chip or" style="font-size:6px">High</span></div>
      </div>
      <div class="lx-card" style="padding:12px;border-left:3px solid var(--lx-cyan)">
        <div class="lx-cmd" style="font-size:12px">Update Service Agreement</div>
        <div class="lx-bxs cm" style="margin-top:4px">Due: 30 May 2026</div>
        <div style="margin-top:6px"><span class="lx-chip cy" style="font-size:6px">Medium</span></div>
      </div>
    </div>
    <div>
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px">
        <div class="lx-csm ccy">IN PROGRESS</div><span class="lx-chip cy" style="font-size:6px">2</span>
      </div>
      <div class="lx-card" style="padding:12px;margin-bottom:8px;border-left:3px solid var(--lx-cyan)">
        <div class="lx-cmd" style="font-size:12px">Budget Reconciliation</div>
        <div class="lx-bxs cm" style="margin-top:4px">Q1 2026 spending review</div>
        <div style="margin-top:6px;display:flex;gap:4px"><span class="lx-chip cy" style="font-size:6px">Finance</span></div>
      </div>
      <div class="lx-card" style="padding:12px;border-left:3px solid var(--lx-purple)">
        <div class="lx-cmd" style="font-size:12px">Provider Research</div>
        <div class="lx-bxs cm" style="margin-top:4px">Finding new speech pathologist</div>
        <div style="margin-top:6px"><span class="lx-chip pu" style="font-size:6px">Research</span></div>
      </div>
    </div>
    <div>
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px">
        <div class="lx-csm cor">REVIEW</div><span class="lx-chip or" style="font-size:6px">1</span>
      </div>
      <div class="lx-card" style="padding:12px;border-left:3px solid var(--lx-orange)">
        <div class="lx-cmd" style="font-size:12px">Change of Circumstance Report</div>
        <div class="lx-bxs cm" style="margin-top:4px">Awaiting SC manager sign-off</div>
        <div style="margin-top:6px"><span class="lx-chip or" style="font-size:6px">Pending Review</span></div>
      </div>
    </div>
    <div>
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px">
        <div class="lx-csm" style="color:var(--lx-yellow)">DONE</div><span class="lx-chip yw" style="font-size:6px">2</span>
      </div>
      <div class="lx-card cream" style="padding:12px;margin-bottom:8px;opacity:.7">
        <div class="lx-cmd" style="font-size:12px;text-decoration:line-through">Initial Plan Meeting</div>
        <div class="lx-bxs cm" style="margin-top:4px">Completed 10 Apr 2026</div>
      </div>
      <div class="lx-card cream" style="padding:12px;opacity:.7">
        <div class="lx-cmd" style="font-size:12px;text-decoration:line-through">Service Bookings Set Up</div>
        <div class="lx-bxs cm" style="margin-top:4px">Completed 15 Apr 2026</div>
      </div>
    </div>
  </div>
</div>
```

### 115. AI Brain Chat
**File:** `productivity/ai-brain-chat.html`

```html
<div class="demo-section" style="max-width:500px">
  <div class="demo-label">AI BRAIN — ARIA CHAT INTERFACE (PURPLE THEMED)</div>
  <div style="background:var(--lx-black);border-radius:var(--r-lg);overflow:hidden">
    <div style="padding:14px 16px;display:flex;align-items:center;gap:10px;border-bottom:1px solid rgba(255,255,255,.06)">
      <div style="width:32px;height:32px;border-radius:50%;background:var(--lx-purple);display:flex;align-items:center;justify-content:center;font-size:14px">🧠</div>
      <div>
        <div style="font-family:Barlow Condensed,sans-serif;font-weight:900;font-size:14px;text-transform:uppercase;letter-spacing:.06em;color:var(--lx-offwhite)">ARIA — AI Brain</div>
        <div style="font-family:JetBrains Mono,monospace;font-size:7px;letter-spacing:.12em;text-transform:uppercase;color:var(--lx-purple)">POWERED BY CLAUDE ∞ ONLINE</div>
      </div>
    </div>
    <div style="padding:16px;display:flex;flex-direction:column;gap:12px;min-height:250px">
      <!-- User message -->
      <div style="display:flex;justify-content:flex-end">
        <div style="background:var(--lx-purple);color:#fff;padding:10px 14px;border-radius:var(--r-md) var(--r-md) var(--r-xs) var(--r-md);max-width:80%;font-size:12px;line-height:1.5">What are the Section 34 criteria for reasonable and necessary supports?</div>
      </div>
      <!-- AI response -->
      <div style="display:flex;gap:8px">
        <div style="width:24px;height:24px;border-radius:50%;background:rgba(177,78,255,.2);display:flex;align-items:center;justify-content:center;font-size:10px;flex-shrink:0;margin-top:2px">🧠</div>
        <div style="background:rgba(255,255,255,.06);color:var(--lx-offwhite);padding:10px 14px;border-radius:var(--r-xs) var(--r-md) var(--r-md) var(--r-md);max-width:85%;font-size:12px;line-height:1.6">
          Under the <strong style="color:var(--lx-purple)">NDIS Act 2013 Section 34</strong>, supports must meet 7 criteria to be considered reasonable and necessary:
          <div style="margin-top:8px;font-size:11px;color:rgba(245,240,232,.7)">
            <div style="margin-bottom:4px">1. Arising from a disability-related need (s34(1)(aa))</div>
            <div style="margin-bottom:4px">2. Aligned with participant goals (s34(1)(a))</div>
            <div style="margin-bottom:4px">3. Facilitates social & economic participation (s34(1)(b))</div>
            <div style="margin-bottom:4px">4. Value for money (s34(1)(c))</div>
            <div style="margin-bottom:4px">5. Effective and beneficial (s34(1)(d))</div>
            <div style="margin-bottom:4px">6. Considers informal supports (s34(1)(e))</div>
            <div>7. Is an NDIS support (s34(1)(f))</div>
          </div>
        </div>
      </div>
    </div>
    <div style="padding:12px 16px;border-top:1px solid rgba(255,255,255,.06);display:flex;gap:8px">
      <input placeholder="Ask ARIA anything about NDIS..." style="flex:1;padding:10px 14px;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.1);border-radius:var(--r-sm);color:var(--lx-offwhite);font-family:Barlow,sans-serif;font-size:12px;outline:none">
      <button style="padding:10px 18px;background:var(--lx-purple);color:#fff;border:none;border-radius:var(--r-sm);font-family:Barlow Condensed,sans-serif;font-weight:900;font-size:12px;text-transform:uppercase;letter-spacing:.06em;cursor:pointer">Send</button>
    </div>
  </div>
</div>
```

### 116. Practice Analytics Dashboard
**File:** `productivity/practice-analytics.html`

```html
<div class="ds"><div class="dl">PRACTICE ANALYTICS DASHBOARD SNAPSHOT</div>
<div class="lx-bento" style="max-width:700px;padding:0;gap:8px">
<div class="lx-s4 lx-card tl" style="text-align:center;padding:14px"><div class="lx-eye cpk" style="margin-bottom:4px">TOTAL PARTICIPANTS</div><div class="lx-stat cpk">124</div><div style="font-family:JetBrains Mono,monospace;font-size:9px;color:var(--lx-pink);margin-top:4px">▲ +8 THIS MONTH</div></div>
<div class="lx-s4 lx-card dark" style="text-align:center;padding:14px"><div class="lx-eye ccy" style="margin-bottom:4px">MONTHLY REVENUE</div><div class="lx-stat ccy">$42.8K</div><div style="font-family:JetBrains Mono,monospace;font-size:9px;color:var(--lx-cyan);margin-top:4px">▲ +12% vs LAST</div></div>
<div class="lx-s4 lx-card" style="text-align:center;padding:14px"><div class="lx-eye cor" style="margin-bottom:4px">AVG CASELOAD</div><div class="lx-stat cor">26</div><div style="font-family:JetBrains Mono,monospace;font-size:9px;color:var(--lx-orange);margin-top:4px">PER COORDINATOR</div></div>
<div class="lx-s6 lx-card" style="padding:14px"><div class="lx-cmd" style="margin-bottom:8px;font-size:12px">Revenue Trend</div>
<svg viewBox="0 0 250 60" style="width:100%;height:60px"><defs><linearGradient id="rv" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#FF2D7D" stop-opacity=".2"/><stop offset="100%" stop-color="#FF2D7D" stop-opacity=".02"/></linearGradient></defs><path d="M0,50 30,42 60,45 90,35 120,38 150,28 180,30 210,20 240,22 250,18 250,60 0,60Z" fill="url(#rv)"/><polyline points="0,50 30,42 60,45 90,35 120,38 150,28 180,30 210,20 240,22 250,18" fill="none" stroke="#FF2D7D" stroke-width="1.5"/></svg></div>
<div class="lx-s6 lx-card" style="padding:14px"><div class="lx-cmd" style="margin-bottom:8px;font-size:12px">Plan Status</div>
<div style="display:flex;gap:3px;height:20px"><div style="flex:5;background:var(--lx-pink);border-radius:3px 0 0 3px"></div><div style="flex:3;background:var(--lx-cyan)"></div><div style="flex:1;background:var(--lx-orange)"></div><div style="flex:1;background:var(--lx-purple);border-radius:0 3px 3px 0"></div></div>
<div style="display:flex;gap:8px;margin-top:6px;flex-wrap:wrap"><span class="lx-bxs cm">Active 54%</span><span class="lx-bxs cm">Review 28%</span><span class="lx-bxs cm">Pending 9%</span><span class="lx-bxs cm">New 9%</span></div></div>
<div class="lx-s12 lx-card" style="padding:14px"><div class="lx-cmd" style="margin-bottom:8px;font-size:12px">Billable Hours This Week</div>
<div style="display:flex;gap:3px;margin-bottom:6px"><div style="flex:8.5;height:20px;background:var(--lx-pink);border-radius:3px 0 0 3px;display:flex;align-items:center;padding-left:6px"><span style="font-family:JetBrains Mono,monospace;font-size:7px;color:#fff;font-weight:700">SC 85h</span></div><div style="flex:5;height:20px;background:var(--lx-cyan);display:flex;align-items:center;padding-left:6px"><span style="font-family:JetBrains Mono,monospace;font-size:7px;color:var(--lx-black);font-weight:700">ADMIN 50h</span></div><div style="flex:3;height:20px;background:var(--lx-purple);border-radius:0 3px 3px 0;display:flex;align-items:center;padding-left:6px"><span style="font-family:JetBrains Mono,monospace;font-size:7px;color:#fff;font-weight:700">30h</span></div></div>
<div class="lx-ir"><span class="lx-ik">Total Hours</span><span class="lx-iv">165</span></div><div class="lx-ir"><span class="lx-ik">Target</span><span class="lx-iv n">180h</span></div></div>
</div></div>
```


---

**Total: 116 component patterns**

