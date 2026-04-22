# Chart Patterns — KPIs, Bar, Line, Area, Donut, Radar, Statistical, Flow, Gantt, Gauge

Copy these directly into output HTML. All CSS classes defined in core-css.md.
GitHub: https://github.com/ILEKARDESIGN/limitless-design-system

---

## S01 — KPI Widgets & Comparison Charts

### 31. Delta Card
**File:** `kpi-widgets/delta-card.html`

```html
<div class="ds"><div class="dl">DELTA / VARIANCE CARDS</div>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px;max-width:600px">
  <div class="lx-card tl" style="text-align:center"><div class="lx-eye" style="color:var(--lx-pink);margin-bottom:6px">BUDGET USED</div>
  <div class="lx-stat cpk">$48.2K</div><div style="display:flex;align-items:center;justify-content:center;gap:4px;margin-top:6px"><span style="font-family:JetBrains Mono,monospace;font-size:9px;color:var(--lx-pink)">▲ +12.4%</span><span class="lx-bxs cm">vs last quarter</span></div></div>
  <div class="lx-card dark tr" style="text-align:center"><div class="lx-eye" style="color:var(--lx-cyan);margin-bottom:6px">HOURS DELIVERED</div>
  <div class="lx-stat ccy">342</div><div style="display:flex;align-items:center;justify-content:center;gap:4px;margin-top:6px"><span style="font-family:JetBrains Mono,monospace;font-size:9px;color:var(--lx-cyan)">▼ -3.2%</span><span class="lx-bxs" style="color:rgba(245,240,232,.5)">vs target</span></div></div>
  <div class="lx-card" style="text-align:center"><div class="lx-eye" style="color:var(--lx-purple);margin-bottom:6px">GOAL PROGRESS</div>
  <div class="lx-stat cpu">87%</div><div style="display:flex;align-items:center;justify-content:center;gap:4px;margin-top:6px"><span style="font-family:JetBrains Mono,monospace;font-size:9px;color:var(--lx-purple)">▲ +8pts</span><span class="lx-bxs cm">this period</span></div></div>
</div></div>
```

### 32. Sparkline Card
**File:** `kpi-widgets/sparkline-card.html`

```html
<div class="ds"><div class="dl">SPARKLINE / MINI TREND CARDS</div>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px;max-width:600px">
  <div class="lx-card"><div class="lx-eye" style="color:var(--lx-pink);margin-bottom:4px">MONTHLY SPEND</div>
  <div class="lx-stat cpk" style="font-size:36px">$6.8K</div>
  <svg viewBox="0 0 120 30" style="width:100%;height:30px;margin-top:8px"><polyline points="0,25 15,20 30,22 45,15 60,18 75,10 90,12 105,5 120,8" fill="none" stroke="#FF2D7D" stroke-width="2" stroke-linecap="round"/></svg></div>
  <div class="lx-card"><div class="lx-eye" style="color:var(--lx-cyan);margin-bottom:4px">ACTIVE CASES</div>
  <div class="lx-stat ccy" style="font-size:36px">24</div>
  <svg viewBox="0 0 120 30" style="width:100%;height:30px;margin-top:8px"><polyline points="0,20 15,18 30,22 45,20 60,15 75,18 90,12 105,14 120,10" fill="none" stroke="#00D4FF" stroke-width="2" stroke-linecap="round"/></svg></div>
  <div class="lx-card"><div class="lx-eye" style="color:var(--lx-orange);margin-bottom:4px">RISK SCORE</div>
  <div class="lx-stat cor" style="font-size:36px">3.2</div>
  <svg viewBox="0 0 120 30" style="width:100%;height:30px;margin-top:8px"><polyline points="0,8 15,12 30,10 45,15 60,18 75,14 90,20 105,22 120,18" fill="none" stroke="#FF6600" stroke-width="2" stroke-linecap="round"/></svg></div>
</div></div>
```

### 33. Bullet KPI
**File:** `kpi-widgets/bullet-kpi.html`

```html
<div class="ds"><div class="dl">BULLET KPI / TARGET VS ACTUAL / BENCHMARK</div>
<div style="max-width:500px;display:flex;flex-direction:column;gap:12px">
  <div class="lx-card" style="padding:14px 20px"><div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:6px"><span class="lx-csm">Core Supports</span><span class="lx-mmd cpk">$32.8K / $42K</span></div>
  <div style="position:relative;height:16px;background:rgba(0,0,0,.04);border-radius:var(--r-xs)"><div style="position:absolute;left:0;top:0;height:100%;width:78%;background:var(--lx-pink);border-radius:var(--r-xs);opacity:.8"></div><div style="position:absolute;left:75%;top:-2px;width:3px;height:20px;background:var(--lx-black);border-radius:2px" title="Target: 75%"></div></div>
  <div class="lx-bxs cm" style="margin-top:4px">78% utilised · Target 75% · <span class="cpk">Over by 3%</span></div></div>
  <div class="lx-card" style="padding:14px 20px"><div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:6px"><span class="lx-csm">Capacity Building</span><span class="lx-mmd ccy">$13.6K / $24.8K</span></div>
  <div style="position:relative;height:16px;background:rgba(0,0,0,.04);border-radius:var(--r-xs)"><div style="position:absolute;left:0;top:0;height:100%;width:55%;background:var(--lx-cyan);border-radius:var(--r-xs);opacity:.8"></div><div style="position:absolute;left:75%;top:-2px;width:3px;height:20px;background:var(--lx-black);border-radius:2px"></div></div>
  <div class="lx-bxs cm" style="margin-top:4px">55% utilised · Target 75% · <span class="ccy">Under by 20%</span></div></div>
  <div class="lx-card" style="padding:14px 20px"><div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:6px"><span class="lx-csm">Capital</span><span class="lx-mmd cpu">$1.8K / $5.6K</span></div>
  <div style="position:relative;height:16px;background:rgba(0,0,0,.04);border-radius:var(--r-xs)"><div style="position:absolute;left:0;top:0;height:100%;width:32%;background:var(--lx-purple);border-radius:var(--r-xs);opacity:.8"></div><div style="position:absolute;left:75%;top:-2px;width:3px;height:20px;background:var(--lx-black);border-radius:2px"></div></div>
  <div class="lx-bxs cm" style="margin-top:4px">32% utilised · Target 75% · <span class="cpu">Under by 43%</span></div></div>
</div></div>
```

### 34. KPI + Sparkline Hybrid
**File:** `kpi-widgets/kpi-sparkline-hybrid.html`

```html
<div class="ds"><div class="dl">KPI + SPARKLINE + IN-CELL BARS — HYBRID DASHBOARD</div>
<div class="lx-card" style="max-width:600px;padding:0;overflow:hidden">
<table class="lx-tbl" style="border:none">
<thead><tr><th>Metric</th><th>Value</th><th>Trend</th><th>vs Target</th></tr></thead>
<tbody>
<tr><td class="lx-tb">Budget Utilisation</td><td style="font-family:Bebas Neue,serif;font-size:24px;color:var(--lx-pink)">68%</td><td><svg viewBox="0 0 60 20" style="width:60px;height:20px"><polyline points="0,18 10,14 20,16 30,10 40,12 50,6 60,8" fill="none" stroke="#FF2D7D" stroke-width="1.5"/></svg></td><td><div style="width:80px;height:6px;background:rgba(0,0,0,.06);border-radius:3px"><div style="width:68%;height:100%;background:var(--lx-pink);border-radius:3px"></div></div></td></tr>
<tr><td class="lx-tb">Active Participants</td><td style="font-family:Bebas Neue,serif;font-size:24px;color:var(--lx-cyan)">24</td><td><svg viewBox="0 0 60 20" style="width:60px;height:20px"><polyline points="0,15 10,12 20,14 30,8 40,10 50,6 60,4" fill="none" stroke="#00D4FF" stroke-width="1.5"/></svg></td><td><div style="width:80px;height:6px;background:rgba(0,0,0,.06);border-radius:3px"><div style="width:92%;height:100%;background:var(--lx-cyan);border-radius:3px"></div></div></td></tr>
<tr><td class="lx-tb">Goal Completion</td><td style="font-family:Bebas Neue,serif;font-size:24px;color:var(--lx-purple)">87%</td><td><svg viewBox="0 0 60 20" style="width:60px;height:20px"><polyline points="0,16 10,14 20,12 30,10 40,8 50,6 60,4" fill="none" stroke="#B14EFF" stroke-width="1.5"/></svg></td><td><div style="width:80px;height:6px;background:rgba(0,0,0,.06);border-radius:3px"><div style="width:87%;height:100%;background:var(--lx-purple);border-radius:3px"></div></div></td></tr>
<tr><td class="lx-tb">Risk Score</td><td style="font-family:Bebas Neue,serif;font-size:24px;color:var(--lx-orange)">3.2</td><td><svg viewBox="0 0 60 20" style="width:60px;height:20px"><polyline points="0,8 10,10 20,6 30,12 40,14 50,10 60,16" fill="none" stroke="#FF6600" stroke-width="1.5"/></svg></td><td><div style="width:80px;height:6px;background:rgba(0,0,0,.06);border-radius:3px"><div style="width:45%;height:100%;background:var(--lx-orange);border-radius:3px"></div></div></td></tr>
</tbody></table></div></div>
```

### 35. Bar Chart
**File:** `charts/bar-chart.html`

```html
<div class="demo-section">
  <div class="demo-label">VERTICAL BAR CHART — NDIS BUDGET BY CATEGORY</div>
  <div class="lx-card" style="max-width:600px;padding:20px">
    <div class="lx-cmd" style="margin-bottom:12px">Monthly Budget Utilisation</div>
    <svg viewBox="0 0 500 220" style="width:100%;overflow:visible">
      <line x1="50" y1="10" x2="50" y2="190" stroke="var(--lx-bdr)" stroke-width="1"/>
      <line x1="50" y1="190" x2="480" y2="190" stroke="var(--lx-bdr)" stroke-width="1"/>
      <!-- Y-axis labels -->
      <text x="45" y="15" text-anchor="end" fill="var(--lx-txl)" font-family="JetBrains Mono" font-size="8" letter-spacing=".1em">$8K</text>
      <text x="45" y="55" text-anchor="end" fill="var(--lx-txl)" font-family="JetBrains Mono" font-size="8">$6K</text>
      <text x="45" y="100" text-anchor="end" fill="var(--lx-txl)" font-family="JetBrains Mono" font-size="8">$4K</text>
      <text x="45" y="145" text-anchor="end" fill="var(--lx-txl)" font-family="JetBrains Mono" font-size="8">$2K</text>
      <text x="45" y="193" text-anchor="end" fill="var(--lx-txl)" font-family="JetBrains Mono" font-size="8">$0</text>
      <!-- Bars -->
      <rect x="70" y="50" width="30" height="140" rx="4" fill="#FF2D7D"/>
      <rect x="115" y="80" width="30" height="110" rx="4" fill="#00D4FF"/>
      <rect x="160" y="30" width="30" height="160" rx="4" fill="#FF2D7D"/>
      <rect x="205" y="60" width="30" height="130" rx="4" fill="#FF6600"/>
      <rect x="250" y="90" width="30" height="100" rx="4" fill="#CCFF00"/>
      <rect x="295" y="40" width="30" height="150" rx="4" fill="#FF2D7D"/>
      <rect x="340" y="70" width="30" height="120" rx="4" fill="#00D4FF"/>
      <rect x="385" y="100" width="30" height="90" rx="4" fill="#B14EFF"/>
      <rect x="430" y="55" width="30" height="135" rx="4" fill="#2979FF"/>
      <!-- X-axis labels -->
      <text x="85" y="208" text-anchor="middle" fill="var(--lx-txl)" font-family="JetBrains Mono" font-size="7" letter-spacing=".1em">JAN</text>
      <text x="130" y="208" text-anchor="middle" fill="var(--lx-txl)" font-family="JetBrains Mono" font-size="7">FEB</text>
      <text x="175" y="208" text-anchor="middle" fill="var(--lx-txl)" font-family="JetBrains Mono" font-size="7">MAR</text>
      <text x="220" y="208" text-anchor="middle" fill="var(--lx-txl)" font-family="JetBrains Mono" font-size="7">APR</text>
      <text x="265" y="208" text-anchor="middle" fill="var(--lx-txl)" font-family="JetBrains Mono" font-size="7">MAY</text>
      <text x="310" y="208" text-anchor="middle" fill="var(--lx-txl)" font-family="JetBrains Mono" font-size="7">JUN</text>
      <text x="355" y="208" text-anchor="middle" fill="var(--lx-txl)" font-family="JetBrains Mono" font-size="7">JUL</text>
      <text x="400" y="208" text-anchor="middle" fill="var(--lx-txl)" font-family="JetBrains Mono" font-size="7">AUG</text>
      <text x="445" y="208" text-anchor="middle" fill="var(--lx-txl)" font-family="JetBrains Mono" font-size="7">SEP</text>
    </svg>
  </div>
</div>
```

### 36. Horizontal Bar
**File:** `charts/horizontal-bar.html`

```html
<div class="ds"><div class="dl">HORIZONTAL BAR CHART</div>
<div class="lx-card" style="max-width:500px"><div class="lx-cmd" style="margin-bottom:12px">Hours by Service Category</div>
<svg viewBox="0 0 400 180" style="width:100%">
  <text x="90" y="22" text-anchor="end" fill="var(--lx-txm)" font-family="Barlow" font-size="11">Daily Life</text><rect x="95" y="10" width="280" height="18" rx="3" fill="#FF2D7D"/>
  <text x="90" y="52" text-anchor="end" fill="var(--lx-txm)" font-family="Barlow" font-size="11">Social</text><rect x="95" y="40" width="200" height="18" rx="3" fill="#00D4FF"/>
  <text x="90" y="82" text-anchor="end" fill="var(--lx-txm)" font-family="Barlow" font-size="11">Therapy</text><rect x="95" y="70" width="160" height="18" rx="3" fill="#B14EFF"/>
  <text x="90" y="112" text-anchor="end" fill="var(--lx-txm)" font-family="Barlow" font-size="11">Transport</text><rect x="95" y="100" width="120" height="18" rx="3" fill="#FF6600"/>
  <text x="90" y="142" text-anchor="end" fill="var(--lx-txm)" font-family="Barlow" font-size="11">Coord</text><rect x="95" y="130" width="80" height="18" rx="3" fill="#2979FF"/>
  <text x="380" y="22" fill="var(--lx-txl)" font-family="JetBrains Mono" font-size="9">342h</text>
  <text x="300" y="52" fill="var(--lx-txl)" font-family="JetBrains Mono" font-size="9">245h</text>
  <text x="260" y="82" fill="var(--lx-txl)" font-family="JetBrains Mono" font-size="9">198h</text>
  <text x="220" y="112" fill="var(--lx-txl)" font-family="JetBrains Mono" font-size="9">148h</text>
  <text x="180" y="142" fill="var(--lx-txl)" font-family="JetBrains Mono" font-size="9">104h</text>
</svg></div></div>
```

### 37. Stacked / Grouped Bar
**File:** `charts/stacked-bar.html`

```html
<div class="ds"><div class="dl">STACKED BAR CHART</div>
<div class="lx-card" style="max-width:550px"><div class="lx-cmd" style="margin-bottom:12px">Budget Allocation by Quarter</div>
<svg viewBox="0 0 440 200" style="width:100%">
  <line x1="50" y1="180" x2="420" y2="180" stroke="var(--lx-bdr)" stroke-width="1"/>
  <rect x="70" y="40" width="50" height="60" rx="2" fill="#FF2D7D"/><rect x="70" y="100" width="50" height="40" rx="0" fill="#00D4FF"/><rect x="70" y="140" width="50" height="40" rx="2" fill="#B14EFF"/>
  <rect x="160" y="30" width="50" height="65" rx="2" fill="#FF2D7D"/><rect x="160" y="95" width="50" height="45" rx="0" fill="#00D4FF"/><rect x="160" y="140" width="50" height="40" rx="2" fill="#B14EFF"/>
  <rect x="250" y="50" width="50" height="55" rx="2" fill="#FF2D7D"/><rect x="250" y="105" width="50" height="35" rx="0" fill="#00D4FF"/><rect x="250" y="140" width="50" height="40" rx="2" fill="#B14EFF"/>
  <rect x="340" y="60" width="50" height="50" rx="2" fill="#FF2D7D"/><rect x="340" y="110" width="50" height="30" rx="0" fill="#00D4FF"/><rect x="340" y="140" width="50" height="40" rx="2" fill="#B14EFF"/>
  <text x="95" y="195" text-anchor="middle" fill="var(--lx-txl)" font-family="JetBrains Mono" font-size="8">Q1</text>
  <text x="185" y="195" text-anchor="middle" fill="var(--lx-txl)" font-family="JetBrains Mono" font-size="8">Q2</text>
  <text x="275" y="195" text-anchor="middle" fill="var(--lx-txl)" font-family="JetBrains Mono" font-size="8">Q3</text>
  <text x="365" y="195" text-anchor="middle" fill="var(--lx-txl)" font-family="JetBrains Mono" font-size="8">Q4</text>
</svg>
<div style="display:flex;gap:12px;margin-top:8px"><div style="display:flex;align-items:center;gap:4px"><div style="width:10px;height:10px;border-radius:2px;background:#FF2D7D"></div><span class="lx-bxs cm">Core</span></div><div style="display:flex;align-items:center;gap:4px"><div style="width:10px;height:10px;border-radius:2px;background:#00D4FF"></div><span class="lx-bxs cm">Capacity</span></div><div style="display:flex;align-items:center;gap:4px"><div style="width:10px;height:10px;border-radius:2px;background:#B14EFF"></div><span class="lx-bxs cm">Capital</span></div></div>
</div></div>
```

### 38. Grouped / Clustered Bar
**File:** `charts/grouped-bar.html`

```html
<div class="ds"><div class="dl">GROUPED / CLUSTERED BAR CHART</div>
<div class="lx-card" style="max-width:500px"><div class="lx-cmd" style="margin-bottom:12px">Budget — Allocated vs Spent by Category</div>
<svg viewBox="0 0 400 180" style="width:100%"><line x1="40" y1="160" x2="380" y2="160" stroke="var(--lx-bdr)" stroke-width="1"/>
<rect x="55" y="30" width="22" height="130" rx="3" fill="#FF2D7D" opacity=".3"/><rect x="80" y="55" width="22" height="105" rx="3" fill="#FF2D7D"/>
<rect x="135" y="50" width="22" height="110" rx="3" fill="#00D4FF" opacity=".3"/><rect x="160" y="80" width="22" height="80" rx="3" fill="#00D4FF"/>
<rect x="215" y="100" width="22" height="60" rx="3" fill="#B14EFF" opacity=".3"/><rect x="240" y="130" width="22" height="30" rx="3" fill="#B14EFF"/>
<rect x="295" y="120" width="22" height="40" rx="3" fill="#FF6600" opacity=".3"/><rect x="320" y="125" width="22" height="35" rx="3" fill="#FF6600"/>
<text x="78" y="175" text-anchor="middle" fill="var(--lx-txl)" font-family="JetBrains Mono" font-size="7">CORE</text><text x="158" y="175" text-anchor="middle" fill="var(--lx-txl)" font-family="JetBrains Mono" font-size="7">CAP BLD</text><text x="238" y="175" text-anchor="middle" fill="var(--lx-txl)" font-family="JetBrains Mono" font-size="7">CAPITAL</text><text x="318" y="175" text-anchor="middle" fill="var(--lx-txl)" font-family="JetBrains Mono" font-size="7">TRANS</text>
</svg>
<div style="display:flex;gap:12px;margin-top:4px"><div style="display:flex;align-items:center;gap:4px"><div style="width:10px;height:10px;border-radius:2px;background:currentColor;opacity:.3"></div><span class="lx-bxs cm">Allocated</span></div><div style="display:flex;align-items:center;gap:4px"><div style="width:10px;height:10px;border-radius:2px;background:currentColor"></div><span class="lx-bxs cm">Spent</span></div></div></div></div>
```

### 39. 100% Stacked Bar
**File:** `charts/stacked-100-bar.html`

```html
<div class="ds"><div class="dl">100% STACKED BAR CHART</div>
<div class="lx-card" style="max-width:500px"><div class="lx-cmd" style="margin-bottom:12px">Budget Split by Quarter — Proportional</div>
<svg viewBox="0 0 400 150" style="width:100%">
<text x="25" y="25" text-anchor="end" fill="var(--lx-txm)" font-family="Barlow" font-size="9">Q1</text><rect x="30" y="12" width="140" height="22" rx="0" fill="#FF2D7D"/><rect x="170" y="12" width="100" height="22" rx="0" fill="#00D4FF"/><rect x="270" y="12" width="60" height="22" rx="0" fill="#B14EFF"/><rect x="330" y="12" width="40" height="22" rx="0" fill="#FF6600"/>
<text x="25" y="55" text-anchor="end" fill="var(--lx-txm)" font-family="Barlow" font-size="9">Q2</text><rect x="30" y="42" width="130" height="22" rx="0" fill="#FF2D7D"/><rect x="160" y="42" width="110" height="22" rx="0" fill="#00D4FF"/><rect x="270" y="42" width="55" height="22" rx="0" fill="#B14EFF"/><rect x="325" y="42" width="45" height="22" rx="0" fill="#FF6600"/>
<text x="25" y="85" text-anchor="end" fill="var(--lx-txm)" font-family="Barlow" font-size="9">Q3</text><rect x="30" y="72" width="150" height="22" rx="0" fill="#FF2D7D"/><rect x="180" y="72" width="90" height="22" rx="0" fill="#00D4FF"/><rect x="270" y="72" width="50" height="22" rx="0" fill="#B14EFF"/><rect x="320" y="72" width="50" height="22" rx="0" fill="#FF6600"/>
<text x="25" y="115" text-anchor="end" fill="var(--lx-txm)" font-family="Barlow" font-size="9">Q4</text><rect x="30" y="102" width="120" height="22" rx="0" fill="#FF2D7D"/><rect x="150" y="102" width="120" height="22" rx="0" fill="#00D4FF"/><rect x="270" y="102" width="65" height="22" rx="0" fill="#B14EFF"/><rect x="335" y="102" width="35" height="22" rx="0" fill="#FF6600"/>
<text x="110" y="140" fill="var(--lx-txl)" font-family="JetBrains Mono" font-size="7">0%</text><text x="220" y="140" fill="var(--lx-txl)" font-family="JetBrains Mono" font-size="7">50%</text><text x="360" y="140" fill="var(--lx-txl)" font-family="JetBrains Mono" font-size="7">100%</text>
</svg></div></div>
```

### 40. Lollipop / Dumbbell
**File:** `charts/lollipop-chart.html`

```html
<div class="ds"><div class="dl">LOLLIPOP / DUMBBELL CHART</div>
<div class="lx-card" style="max-width:500px"><div class="lx-cmd" style="margin-bottom:12px">Service Hours — Target vs Actual</div>
<svg viewBox="0 0 400 160" style="width:100%">
<line x1="90" y1="0" x2="90" y2="150" stroke="var(--lx-bdr)" stroke-width=".5"/>
<line x1="90" y1="20" x2="350" y2="20" stroke="var(--lx-bdr)" stroke-width="1" stroke-dasharray="0"/><circle cx="310" cy="20" r="6" fill="#FF2D7D"/><circle cx="260" cy="20" r="4" fill="#00D4FF" stroke="#fff" stroke-width="1.5"/><line x1="260" y1="20" x2="310" y2="20" stroke="var(--lx-bdr2)" stroke-width="2"/><text x="85" y="23" text-anchor="end" fill="var(--lx-txm)" font-family="Barlow" font-size="10">OT</text>
<line x1="90" y1="50" x2="350" y2="50" stroke="var(--lx-bdr)" stroke-width="1" stroke-dasharray="0"/><circle cx="280" cy="50" r="6" fill="#FF2D7D"/><circle cx="290" cy="50" r="4" fill="#00D4FF" stroke="#fff" stroke-width="1.5"/><line x1="280" y1="50" x2="290" y2="50" stroke="var(--lx-bdr2)" stroke-width="2"/><text x="85" y="53" text-anchor="end" fill="var(--lx-txm)" font-family="Barlow" font-size="10">Psych</text>
<line x1="90" y1="80" x2="350" y2="80" stroke="var(--lx-bdr)" stroke-width="1" stroke-dasharray="0"/><circle cx="220" cy="80" r="6" fill="#FF2D7D"/><circle cx="180" cy="80" r="4" fill="#00D4FF" stroke="#fff" stroke-width="1.5"/><line x1="180" y1="80" x2="220" y2="80" stroke="var(--lx-bdr2)" stroke-width="2"/><text x="85" y="83" text-anchor="end" fill="var(--lx-txm)" font-family="Barlow" font-size="10">Speech</text>
<line x1="90" y1="110" x2="350" y2="110" stroke="var(--lx-bdr)" stroke-width="1" stroke-dasharray="0"/><circle cx="340" cy="110" r="6" fill="#FF2D7D"/><circle cx="200" cy="110" r="4" fill="#00D4FF" stroke="#fff" stroke-width="1.5"/><line x1="200" y1="110" x2="340" y2="110" stroke="var(--lx-bdr2)" stroke-width="2"/><text x="85" y="113" text-anchor="end" fill="var(--lx-txm)" font-family="Barlow" font-size="10">Exercise</text>
<line x1="90" y1="140" x2="350" y2="140" stroke="var(--lx-bdr)" stroke-width="1" stroke-dasharray="0"/><circle cx="190" cy="140" r="6" fill="#FF2D7D"/><circle cx="250" cy="140" r="4" fill="#00D4FF" stroke="#fff" stroke-width="1.5"/><line x1="190" y1="140" x2="250" y2="140" stroke="var(--lx-bdr2)" stroke-width="2"/><text x="85" y="143" text-anchor="end" fill="var(--lx-txm)" font-family="Barlow" font-size="10">SC</text>
</svg>
<div style="display:flex;gap:12px;margin-top:8px"><div style="display:flex;align-items:center;gap:4px"><div style="width:10px;height:10px;border-radius:50%;background:#FF2D7D"></div><span class="lx-bxs cm">Actual</span></div><div style="display:flex;align-items:center;gap:4px"><div style="width:10px;height:10px;border-radius:50%;background:#00D4FF;border:1.5px solid #fff"></div><span class="lx-bxs cm">Target</span></div></div></div></div>
```

### 41. Waterfall / P&L
**File:** `charts/waterfall-chart.html`

```html
<div class="ds"><div class="dl">WATERFALL / BRIDGE — BUDGET FLOW</div>
<div class="lx-card" style="max-width:550px"><div class="lx-cmd" style="margin-bottom:12px">Plan Budget Waterfall</div>
<svg viewBox="0 0 440 200" style="width:100%">
  <line x1="40" y1="170" x2="420" y2="170" stroke="var(--lx-bdr)" stroke-width="1"/>
  <rect x="50" y="20" width="40" height="150" rx="3" fill="#2979FF"/><text x="70" y="15" text-anchor="middle" fill="var(--lx-txl)" font-family="JetBrains Mono" font-size="8">$72.4K</text>
  <line x1="90" y1="20" x2="110" y2="20" stroke="var(--lx-bdr)" stroke-width="1" stroke-dasharray="3"/>
  <rect x="110" y="20" width="40" height="55" rx="3" fill="#FF2D7D"/><text x="130" y="15" text-anchor="middle" fill="var(--lx-txl)" font-family="JetBrains Mono" font-size="8">-$26.4K</text>
  <line x1="150" y1="75" x2="170" y2="75" stroke="var(--lx-bdr)" stroke-width="1" stroke-dasharray="3"/>
  <rect x="170" y="75" width="40" height="30" rx="3" fill="#FF2D7D"/><text x="190" y="70" text-anchor="middle" fill="var(--lx-txl)" font-family="JetBrains Mono" font-size="8">-$13.6K</text>
  <line x1="210" y1="105" x2="230" y2="105" stroke="var(--lx-bdr)" stroke-width="1" stroke-dasharray="3"/>
  <rect x="230" y="105" width="40" height="15" rx="3" fill="#FF2D7D"/><text x="250" y="100" text-anchor="middle" fill="var(--lx-txl)" font-family="JetBrains Mono" font-size="8">-$5.2K</text>
  <line x1="270" y1="120" x2="290" y2="120" stroke="var(--lx-bdr)" stroke-width="1" stroke-dasharray="3"/>
  <rect x="290" y="120" width="40" height="10" rx="3" fill="#FF2D7D"/><text x="310" y="115" text-anchor="middle" fill="var(--lx-txl)" font-family="JetBrains Mono" font-size="8">-$3.1K</text>
  <line x1="330" y1="130" x2="350" y2="130" stroke="var(--lx-bdr)" stroke-width="1" stroke-dasharray="3"/>
  <rect x="350" y="130" width="40" height="40" rx="3" fill="#CCFF00"/><text x="370" y="125" text-anchor="middle" fill="var(--lx-txl)" font-family="JetBrains Mono" font-size="8">$24.2K</text>
  <text x="70" y="185" text-anchor="middle" fill="var(--lx-txm)" font-family="JetBrains Mono" font-size="7">TOTAL</text>
  <text x="130" y="185" text-anchor="middle" fill="var(--lx-txm)" font-family="JetBrains Mono" font-size="7">CORE</text>
  <text x="190" y="185" text-anchor="middle" fill="var(--lx-txm)" font-family="JetBrains Mono" font-size="7">CAP BLD</text>
  <text x="250" y="185" text-anchor="middle" fill="var(--lx-txm)" font-family="JetBrains Mono" font-size="7">CAPITAL</text>
  <text x="310" y="185" text-anchor="middle" fill="var(--lx-txm)" font-family="JetBrains Mono" font-size="7">TRANS</text>
  <text x="370" y="185" text-anchor="middle" fill="var(--lx-txm)" font-family="JetBrains Mono" font-size="7">REMAIN</text>
</svg></div></div>
```

### 42. Tornado / Diverging Bar
**File:** `charts/tornado-diverging.html`

```html
<div class="ds"><div class="dl">TORNADO / DIVERGING BAR — BUDGET VARIANCE</div>
<div class="lx-card" style="max-width:500px"><div class="lx-cmd" style="margin-bottom:12px">Budget Variance by Category</div>
<svg viewBox="0 0 400 150" style="width:100%">
<line x1="200" y1="0" x2="200" y2="140" stroke="var(--lx-tx)" stroke-width="1"/>
<text x="200" y="155" text-anchor="middle" fill="var(--lx-txl)" font-family="JetBrains Mono" font-size="7">$0</text>
<text x="60" y="155" text-anchor="middle" fill="var(--lx-pink)" font-family="JetBrains Mono" font-size="7">OVER</text>
<text x="340" y="155" text-anchor="middle" fill="var(--lx-cyan)" font-family="JetBrains Mono" font-size="7">UNDER</text>
<rect x="120" y="8" width="80" height="20" rx="3" fill="#FF2D7D"/><text x="116" y="22" text-anchor="end" fill="var(--lx-txm)" font-family="Barlow" font-size="10">Core</text><text x="125" y="22" fill="#fff" font-family="JetBrains Mono" font-size="8">-$3.2K</text>
<rect x="200" y="38" width="100" height="20" rx="3" fill="#00D4FF"/><text x="116" y="52" text-anchor="end" fill="var(--lx-txm)" font-family="Barlow" font-size="10">Capacity</text><text x="205" y="52" fill="var(--lx-black)" font-family="JetBrains Mono" font-size="8">+$4.1K</text>
<rect x="200" y="68" width="140" height="20" rx="3" fill="#00D4FF"/><text x="116" y="82" text-anchor="end" fill="var(--lx-txm)" font-family="Barlow" font-size="10">Capital</text><text x="205" y="82" fill="var(--lx-black)" font-family="JetBrains Mono" font-size="8">+$5.8K</text>
<rect x="160" y="98" width="40" height="20" rx="3" fill="#FF2D7D"/><text x="116" y="112" text-anchor="end" fill="var(--lx-txm)" font-family="Barlow" font-size="10">Transport</text><text x="165" y="112" fill="#fff" font-family="JetBrains Mono" font-size="8">-$1.6K</text>
<rect x="200" y="128" width="60" height="20" rx="3" fill="#00D4FF"/><text x="116" y="142" text-anchor="end" fill="var(--lx-txm)" font-family="Barlow" font-size="10">Consumables</text><text x="205" y="142" fill="var(--lx-black)" font-family="JetBrains Mono" font-size="8">+$2.4K</text>
</svg></div></div>
```

### 43. Slope Chart
**File:** `charts/slope-chart.html`

```html
<div class="ds"><div class="dl">SLOPE CHART / CONNECTED DOT PLOT</div>
<div class="lx-card" style="max-width:400px"><div class="lx-cmd" style="margin-bottom:12px">Functioning Score — Before vs After</div>
<svg viewBox="0 0 300 180" style="width:100%">
<text x="60" y="15" text-anchor="middle" fill="var(--lx-txl)" font-family="JetBrains Mono" font-size="8" letter-spacing=".1em">BEFORE</text>
<text x="240" y="15" text-anchor="middle" fill="var(--lx-txl)" font-family="JetBrains Mono" font-size="8" letter-spacing=".1em">AFTER</text>
<line x1="60" y1="25" x2="60" y2="170" stroke="var(--lx-bdr)" stroke-width="1"/>
<line x1="240" y1="25" x2="240" y2="170" stroke="var(--lx-bdr)" stroke-width="1"/>
<line x1="60" y1="50" x2="240" y2="35" stroke="#FF2D7D" stroke-width="2"/><circle cx="60" cy="50" r="5" fill="#FF2D7D"/><circle cx="240" cy="35" r="5" fill="#FF2D7D"/><text x="15" y="53" fill="var(--lx-txm)" font-family="Barlow" font-size="9">Mobility</text><text x="248" y="38" fill="var(--lx-pink)" font-family="JetBrains Mono" font-size="8">▲ 8.2</text>
<line x1="60" y1="80" x2="240" y2="55" stroke="#00D4FF" stroke-width="2"/><circle cx="60" cy="80" r="5" fill="#00D4FF"/><circle cx="240" cy="55" r="5" fill="#00D4FF"/><text x="15" y="83" fill="var(--lx-txm)" font-family="Barlow" font-size="9">Self-care</text><text x="248" y="58" fill="var(--lx-cyan)" font-family="JetBrains Mono" font-size="8">▲ 12.1</text>
<line x1="60" y1="100" x2="240" y2="95" stroke="#B14EFF" stroke-width="2"/><circle cx="60" cy="100" r="5" fill="#B14EFF"/><circle cx="240" cy="95" r="5" fill="#B14EFF"/><text x="15" y="103" fill="var(--lx-txm)" font-family="Barlow" font-size="9">Social</text><text x="248" y="98" fill="var(--lx-purple)" font-family="JetBrains Mono" font-size="8">▲ 2.4</text>
<line x1="60" y1="130" x2="240" y2="145" stroke="#FF6600" stroke-width="2"/><circle cx="60" cy="130" r="5" fill="#FF6600"/><circle cx="240" cy="145" r="5" fill="#FF6600"/><text x="15" y="133" fill="var(--lx-txm)" font-family="Barlow" font-size="9">Cognition</text><text x="248" y="148" fill="var(--lx-orange)" font-family="JetBrains Mono" font-size="8">▼ -3.1</text>
</svg></div></div>
```

### 44. Line Chart
**File:** `charts/line-chart.html`

```html
<div class="demo-section">
  <div class="demo-label">LINE CHART WITH FORECAST</div>
  <div class="lx-card" style="max-width:600px;padding:20px">
    <div class="lx-cmd" style="margin-bottom:4px">Budget Spend Trajectory</div>
    <div class="lx-bxs cm" style="margin-bottom:12px">Actual vs projected spending over plan period</div>
    <svg viewBox="0 0 500 200" style="width:100%;overflow:visible">
      <line x1="50" y1="10" x2="50" y2="180" stroke="var(--lx-bdr)" stroke-width="1"/>
      <line x1="50" y1="180" x2="480" y2="180" stroke="var(--lx-bdr)" stroke-width="1"/>
      <!-- Grid lines -->
      <line x1="50" y1="50" x2="480" y2="50" stroke="var(--lx-bdr)" stroke-width="0.5" stroke-dasharray="4"/>
      <line x1="50" y1="90" x2="480" y2="90" stroke="var(--lx-bdr)" stroke-width="0.5" stroke-dasharray="4"/>
      <line x1="50" y1="130" x2="480" y2="130" stroke="var(--lx-bdr)" stroke-width="0.5" stroke-dasharray="4"/>
      <!-- Actual line (pink) -->
      <polyline points="50,170 100,155 150,140 200,120 250,105 300,85 350,72" fill="none" stroke="#FF2D7D" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
      <!-- Forecast line (cyan dashed) -->
      <polyline points="350,72 400,55 450,40 480,30" fill="none" stroke="#00D4FF" stroke-width="2" stroke-dasharray="6,4" stroke-linecap="round"/>
      <!-- Data points -->
      <circle cx="50" cy="170" r="3.5" fill="#FF2D7D"/>
      <circle cx="100" cy="155" r="3.5" fill="#FF2D7D"/>
      <circle cx="150" cy="140" r="3.5" fill="#FF2D7D"/>
      <circle cx="200" cy="120" r="3.5" fill="#FF2D7D"/>
      <circle cx="250" cy="105" r="3.5" fill="#FF2D7D"/>
      <circle cx="300" cy="85" r="3.5" fill="#FF2D7D"/>
      <circle cx="350" cy="72" r="4" fill="#FF2D7D" stroke="#fff" stroke-width="2"/>
      <!-- Legend -->
      <line x1="60" y1="195" x2="80" y2="195" stroke="#FF2D7D" stroke-width="2.5"/>
      <text x="84" y="198" fill="var(--lx-txm)" font-family="JetBrains Mono" font-size="7" letter-spacing=".08em">ACTUAL</text>
      <line x1="140" y1="195" x2="160" y2="195" stroke="#00D4FF" stroke-width="2" stroke-dasharray="4,3"/>
      <text x="164" y="198" fill="var(--lx-txm)" font-family="JetBrains Mono" font-size="7" letter-spacing=".08em">FORECAST</text>
    </svg>
  </div>
</div>
```

### 45. Area / Stacked Area
**File:** `charts/area-chart.html`

```html
<div class="ds"><div class="dl">AREA CHART — SINGLE SERIES</div>
<div class="lx-card" style="max-width:550px"><div class="lx-cmd" style="margin-bottom:12px">Service Utilisation Trend</div>
<svg viewBox="0 0 440 180" style="width:100%">
  <defs><linearGradient id="ag" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#FF2D7D" stop-opacity=".3"/><stop offset="100%" stop-color="#FF2D7D" stop-opacity=".02"/></linearGradient></defs>
  <line x1="40" y1="160" x2="420" y2="160" stroke="var(--lx-bdr)" stroke-width="1"/>
  <path d="M40,140 70,130 100,120 130,100 160,110 190,85 220,90 250,70 280,75 310,55 340,60 370,40 400,45 420,35 420,160 40,160Z" fill="url(#ag)"/>
  <polyline points="40,140 70,130 100,120 130,100 160,110 190,85 220,90 250,70 280,75 310,55 340,60 370,40 400,45 420,35" fill="none" stroke="#FF2D7D" stroke-width="2" stroke-linecap="round"/>
</svg></div></div>
<div class="ds"><div class="dl">STACKED AREA CHART</div>
<div class="lx-card" style="max-width:550px"><div class="lx-cmd" style="margin-bottom:12px">Budget Spend by Category Over Time</div>
<svg viewBox="0 0 440 180" style="width:100%">
  <defs><linearGradient id="g1" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#B14EFF" stop-opacity=".4"/><stop offset="100%" stop-color="#B14EFF" stop-opacity=".05"/></linearGradient>
  <linearGradient id="g2" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#00D4FF" stop-opacity=".4"/><stop offset="100%" stop-color="#00D4FF" stop-opacity=".05"/></linearGradient>
  <linearGradient id="g3" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#FF2D7D" stop-opacity=".4"/><stop offset="100%" stop-color="#FF2D7D" stop-opacity=".05"/></linearGradient></defs>
  <path d="M40,150 100,140 160,130 220,125 280,115 340,100 400,90 400,160 40,160Z" fill="url(#g1)"/>
  <path d="M40,130 100,115 160,105 220,95 280,85 340,70 400,55 400,90 340,100 280,115 220,125 160,130 100,140 40,150Z" fill="url(#g2)"/>
  <path d="M40,100 100,80 160,70 220,55 280,45 340,30 400,20 400,55 340,70 280,85 220,95 160,105 100,115 40,130Z" fill="url(#g3)"/>
  <line x1="40" y1="160" x2="400" y2="160" stroke="var(--lx-bdr)" stroke-width="1"/>
</svg>
<div style="display:flex;gap:12px;margin-top:8px"><div style="display:flex;align-items:center;gap:4px"><div style="width:10px;height:10px;border-radius:2px;background:#FF2D7D"></div><span class="lx-bxs cm">Core</span></div><div style="display:flex;align-items:center;gap:4px"><div style="width:10px;height:10px;border-radius:2px;background:#00D4FF"></div><span class="lx-bxs cm">Capacity</span></div><div style="display:flex;align-items:center;gap:4px"><div style="width:10px;height:10px;border-radius:2px;background:#B14EFF"></div><span class="lx-bxs cm">Capital</span></div></div>
</div></div>
```

### 46. Donut Charts
**File:** `progress-donuts/donut-charts.html`

```html
<!-- Component: Donut Charts | Category: Progress -->

<div class="demo-section">
  <div class="demo-label">DONUT CHART VARIANTS</div>
  <div class="demo-row" style="gap:30px">
    <div style="text-align:center">
      <div class="lx-dw">
        <svg viewBox="0 0 96 96"><circle class="lx-dtrk" cx="48" cy="48" r="43"/><circle class="lx-dfl" cx="48" cy="48" r="43" stroke="var(--lx-pink)" data-pct="72"/></svg>
        <div class="lx-dlbl">72<span class="lx-dsl">%</span></div>
      </div>
      <div class="lx-eye" style="margin-top:8px">BUDGET USED</div>
    </div>
    <div style="text-align:center">
      <div class="lx-dw">
        <svg viewBox="0 0 96 96"><circle class="lx-dtrk" cx="48" cy="48" r="43"/><circle class="lx-dfl" cx="48" cy="48" r="43" stroke="var(--lx-cyan)" data-pct="45"/></svg>
        <div class="lx-dlbl" style="color:var(--lx-cyan)">45<span class="lx-dsl">%</span></div>
      </div>
      <div class="lx-eye" style="margin-top:8px">PLAN ELAPSED</div>
    </div>
    <div style="text-align:center">
      <div class="lx-dw">
        <svg viewBox="0 0 96 96"><circle class="lx-dtrk" cx="48" cy="48" r="43"/><circle class="lx-dfl" cx="48" cy="48" r="43" stroke="var(--lx-purple)" data-pct="89"/></svg>
        <div class="lx-dlbl" style="color:var(--lx-purple)">89<span class="lx-dsl">%</span></div>
      </div>
      <div class="lx-eye" style="margin-top:8px">GOAL COMPLETION</div>
    </div>
    <div style="text-align:center">
      <div class="lx-dw">
        <svg viewBox="0 0 96 96"><circle class="lx-dtrk" cx="48" cy="48" r="43"/><circle class="lx-dfl" cx="48" cy="48" r="43" stroke="var(--lx-orange)" data-pct="28"/></svg>
        <div class="lx-dlbl" style="color:var(--lx-orange)">28<span class="lx-dsl">%</span></div>
      </div>
      <div class="lx-eye" style="margin-top:8px">AT RISK</div>
    </div>
  </div>
</div>
```

### 47. Sunburst / Radial
**File:** `charts/sunburst.html`

```html
<div class="ds"><div class="dl">SUNBURST / RADIAL TREEMAP</div>
<div class="lx-card" style="max-width:350px;text-align:center"><div class="lx-cmd" style="margin-bottom:12px">Budget Hierarchy</div>
<svg viewBox="0 0 200 200" style="width:200px;margin:0 auto">
<circle cx="100" cy="100" r="30" fill="var(--lx-pink)" opacity=".9"/><text x="100" y="103" text-anchor="middle" fill="#fff" font-family="Bebas Neue" font-size="12">$72.4K</text>
<path d="M100,100 L100,30 A70,70 0 0,1 160,60 Z" fill="var(--lx-pink)" opacity=".6"/><text x="135" y="52" fill="#fff" font-family="JetBrains Mono" font-size="6" letter-spacing=".08em">CORE</text>
<path d="M100,100 L160,60 A70,70 0 0,1 155,150 Z" fill="var(--lx-cyan)" opacity=".5"/><text x="148" y="110" fill="var(--lx-black)" font-family="JetBrains Mono" font-size="6">CAP BLD</text>
<path d="M100,100 L155,150 A70,70 0 0,1 60,155 Z" fill="var(--lx-purple)" opacity=".5"/><text x="100" y="158" fill="#fff" font-family="JetBrains Mono" font-size="6">CAPITAL</text>
<path d="M100,100 L60,155 A70,70 0 0,1 100,30 Z" fill="var(--lx-orange)" opacity=".5"/><text x="62" y="90" fill="#fff" font-family="JetBrains Mono" font-size="6">TRANS</text>
<path d="M100,100 L100,10 A90,90 0 0,1 145,20 Z" fill="var(--lx-pink)" opacity=".3"/>
<path d="M100,100 L145,20 A90,90 0 0,1 175,55 Z" fill="var(--lx-pink)" opacity=".25"/>
<path d="M100,100 L175,55 A90,90 0 0,1 185,100 Z" fill="var(--lx-cyan)" opacity=".25"/>
</svg></div></div>
```

### 48. Histogram / Density
**File:** `charts/histogram.html`

```html
<div class="ds"><div class="dl">HISTOGRAM / DENSITY PLOT</div>
<div class="lx-card" style="max-width:500px"><div class="lx-cmd" style="margin-bottom:12px">Service Hour Distribution — Weekly</div>
<svg viewBox="0 0 400 160" style="width:100%">
<line x1="40" y1="140" x2="380" y2="140" stroke="var(--lx-bdr)" stroke-width="1"/>
<rect x="50" y="120" width="25" height="20" rx="2" fill="#FF2D7D" opacity=".3"/><rect x="80" y="100" width="25" height="40" rx="2" fill="#FF2D7D" opacity=".4"/>
<rect x="110" y="70" width="25" height="70" rx="2" fill="#FF2D7D" opacity=".6"/><rect x="140" y="40" width="25" height="100" rx="2" fill="#FF2D7D" opacity=".8"/>
<rect x="170" y="20" width="25" height="120" rx="2" fill="#FF2D7D"/><rect x="200" y="35" width="25" height="105" rx="2" fill="#FF2D7D" opacity=".85"/>
<rect x="230" y="55" width="25" height="85" rx="2" fill="#FF2D7D" opacity=".65"/><rect x="260" y="80" width="25" height="60" rx="2" fill="#FF2D7D" opacity=".45"/>
<rect x="290" y="105" width="25" height="35" rx="2" fill="#FF2D7D" opacity=".3"/><rect x="320" y="125" width="25" height="15" rx="2" fill="#FF2D7D" opacity=".2"/>
<path d="M55,125 C90,105 120,72 155,42 S210,22 185,20 C195,30 225,55 260,85 S310,115 335,130" fill="none" stroke="#00D4FF" stroke-width="2" stroke-dasharray="4,3"/>
<text x="210" y="155" text-anchor="middle" fill="var(--lx-txl)" font-family="JetBrains Mono" font-size="8">HOURS PER WEEK</text>
</svg>
<div style="display:flex;gap:12px;margin-top:4px"><div style="display:flex;align-items:center;gap:4px"><div style="width:10px;height:10px;border-radius:2px;background:#FF2D7D"></div><span class="lx-bxs cm">Frequency</span></div><div style="display:flex;align-items:center;gap:4px"><div style="width:10px;height:3px;border-radius:2px;background:#00D4FF"></div><span class="lx-bxs cm">KDE Curve</span></div></div></div></div>
```

### 49. Radar / Spider
**File:** `charts/radar-chart.html`

```html
<div class="ds"><div class="dl">RADAR / SPIDER CHART — FUNCTIONING ASSESSMENT</div>
<div class="lx-card" style="max-width:400px;text-align:center"><div class="lx-cmd" style="margin-bottom:12px">WHODAS Assessment Profile</div>
<svg viewBox="0 0 300 280" style="width:100%;max-width:300px;margin:0 auto">
  <polygon points="150,30 250,90 230,200 70,200 50,90" fill="none" stroke="var(--lx-bdr)" stroke-width="1"/>
  <polygon points="150,60 220,100 205,180 95,180 80,100" fill="none" stroke="var(--lx-bdr)" stroke-width=".5" stroke-dasharray="3"/>
  <polygon points="150,90 190,115 180,160 120,160 110,115" fill="none" stroke="var(--lx-bdr)" stroke-width=".5" stroke-dasharray="3"/>
  <polygon points="150,50 230,95 215,185 85,185 70,95" fill="rgba(255,45,125,.12)" stroke="#FF2D7D" stroke-width="2"/>
  <polygon points="150,70 200,105 190,170 110,170 100,105" fill="rgba(0,212,255,.08)" stroke="#00D4FF" stroke-width="1.5" stroke-dasharray="4"/>
  <circle cx="150" cy="50" r="3" fill="#FF2D7D"/><circle cx="230" cy="95" r="3" fill="#FF2D7D"/><circle cx="215" cy="185" r="3" fill="#FF2D7D"/><circle cx="85" cy="185" r="3" fill="#FF2D7D"/><circle cx="70" cy="95" r="3" fill="#FF2D7D"/>
  <text x="150" y="20" text-anchor="middle" fill="var(--lx-txm)" font-family="JetBrains Mono" font-size="8" letter-spacing=".1em">COGNITION</text>
  <text x="268" y="90" text-anchor="start" fill="var(--lx-txm)" font-family="JetBrains Mono" font-size="8">MOBILITY</text>
  <text x="240" y="210" text-anchor="start" fill="var(--lx-txm)" font-family="JetBrains Mono" font-size="8">SELF-CARE</text>
  <text x="60" y="210" text-anchor="end" fill="var(--lx-txm)" font-family="JetBrains Mono" font-size="8">SOCIAL</text>
  <text x="35" y="90" text-anchor="end" fill="var(--lx-txm)" font-family="JetBrains Mono" font-size="8">LIFE ACTS</text>
</svg>
<div style="display:flex;gap:12px;justify-content:center;margin-top:8px"><div style="display:flex;align-items:center;gap:4px"><div style="width:10px;height:3px;background:#FF2D7D;border-radius:2px"></div><span class="lx-bxs cm">Current</span></div><div style="display:flex;align-items:center;gap:4px"><div style="width:10px;height:3px;background:#00D4FF;border-radius:2px"></div><span class="lx-bxs cm">Previous</span></div></div>
</div></div>
```

## S02 — Statistical, Flow, Hierarchy, Spatial

### 50. Error Bars / Confidence Interval
**File:** `data-viz/error-bars.html`

```html
<div class="ds"><div class="dl">ERROR BAR / CONFIDENCE INTERVAL / PREDICTION BAND</div>
<div class="lx-card" style="max-width:500px"><div class="lx-cmd" style="margin-bottom:12px">Goal Achievement Score — 95% CI</div>
<svg viewBox="0 0 400 160" style="width:100%">
<line x1="50" y1="140" x2="380" y2="140" stroke="var(--lx-bdr)" stroke-width="1"/>
<defs><linearGradient id="cb" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#FF2D7D" stop-opacity=".15"/><stop offset="100%" stop-color="#FF2D7D" stop-opacity=".03"/></linearGradient></defs>
<path d="M70,90 100,75 130,60 160,50 190,55 220,40 250,35 280,45 310,30 340,38 340,75 310,65 280,80 250,70 220,78 190,90 160,85 130,98 100,110 70,120Z" fill="url(#cb)"/>
<polyline points="70,105 100,92 130,78 160,67 190,72 220,58 250,52 280,62 310,47 340,56" fill="none" stroke="#FF2D7D" stroke-width="2.5" stroke-linecap="round"/>
<g><line x1="70" y1="90" x2="70" y2="120" stroke="#FF2D7D" stroke-width="1.5"/><line x1="65" y1="90" x2="75" y2="90" stroke="#FF2D7D" stroke-width="1.5"/><line x1="65" y1="120" x2="75" y2="120" stroke="#FF2D7D" stroke-width="1.5"/><circle cx="70" cy="105" r="3" fill="#FF2D7D"/></g>
<g><line x1="160" y1="50" x2="160" y2="85" stroke="#FF2D7D" stroke-width="1.5"/><line x1="155" y1="50" x2="165" y2="50" stroke="#FF2D7D" stroke-width="1.5"/><line x1="155" y1="85" x2="165" y2="85" stroke="#FF2D7D" stroke-width="1.5"/><circle cx="160" cy="67" r="3" fill="#FF2D7D"/></g>
<g><line x1="250" y1="35" x2="250" y2="70" stroke="#FF2D7D" stroke-width="1.5"/><line x1="245" y1="35" x2="255" y2="35" stroke="#FF2D7D" stroke-width="1.5"/><line x1="245" y1="70" x2="255" y2="70" stroke="#FF2D7D" stroke-width="1.5"/><circle cx="250" cy="52" r="3" fill="#FF2D7D"/></g>
<g><line x1="340" y1="38" x2="340" y2="75" stroke="#FF2D7D" stroke-width="1.5"/><line x1="335" y1="38" x2="345" y2="38" stroke="#FF2D7D" stroke-width="1.5"/><line x1="335" y1="75" x2="345" y2="75" stroke="#FF2D7D" stroke-width="1.5"/><circle cx="340" cy="56" r="3" fill="#FF2D7D"/></g>
</svg></div></div>
```

### 51. Candlestick / OHLC
**File:** `data-viz/candlestick.html`

```html
<div class="ds"><div class="dl">CANDLESTICK / OHLC — BUDGET VARIANCE BY PERIOD</div>
<div class="lx-card" style="max-width:500px"><div class="lx-cmd" style="margin-bottom:12px">Monthly Budget High-Low-Open-Close</div>
<svg viewBox="0 0 400 180" style="width:100%">
<line x1="40" y1="170" x2="380" y2="170" stroke="var(--lx-bdr)" stroke-width="1"/>
<line x1="40" y1="10" x2="40" y2="170" stroke="var(--lx-bdr)" stroke-width=".5"/>
<g><line x1="70" y1="20" x2="70" y2="140" stroke="var(--lx-yellow)" stroke-width="1.5"/><rect x="58" y="40" width="24" height="60" rx="2" fill="var(--lx-yellow)"/></g>
<g><line x1="120" y1="30" x2="120" y2="130" stroke="var(--lx-pink)" stroke-width="1.5"/><rect x="108" y="50" width="24" height="50" rx="2" fill="var(--lx-pink)"/></g>
<g><line x1="170" y1="15" x2="170" y2="120" stroke="var(--lx-yellow)" stroke-width="1.5"/><rect x="158" y="30" width="24" height="55" rx="2" fill="var(--lx-yellow)"/></g>
<g><line x1="220" y1="25" x2="220" y2="150" stroke="var(--lx-pink)" stroke-width="1.5"/><rect x="208" y="45" width="24" height="70" rx="2" fill="var(--lx-pink)"/></g>
<g><line x1="270" y1="35" x2="270" y2="125" stroke="var(--lx-yellow)" stroke-width="1.5"/><rect x="258" y="50" width="24" height="40" rx="2" fill="var(--lx-yellow)"/></g>
<g><line x1="320" y1="20" x2="320" y2="110" stroke="var(--lx-yellow)" stroke-width="1.5"/><rect x="308" y="35" width="24" height="45" rx="2" fill="var(--lx-yellow)"/></g>
<g><line x1="370" y1="40" x2="370" y2="135" stroke="var(--lx-pink)" stroke-width="1.5"/><rect x="358" y="55" width="24" height="50" rx="2" fill="var(--lx-pink)"/></g>
</svg>
<div style="display:flex;gap:12px;margin-top:4px"><div style="display:flex;align-items:center;gap:4px"><div style="width:10px;height:10px;border-radius:2px;background:var(--lx-yellow)"></div><span class="lx-bxs cm">Bullish (Under budget)</span></div><div style="display:flex;align-items:center;gap:4px"><div style="width:10px;height:10px;border-radius:2px;background:var(--lx-pink)"></div><span class="lx-bxs cm">Bearish (Over budget)</span></div></div></div></div>
```

### 52. Forest Plot
**File:** `data-viz/forest-plot.html`

```html
<div class="ds"><div class="dl">FOREST PLOT / COEFFICIENT — INTERVENTION EFFECTIVENESS</div>
<div class="lx-card" style="max-width:500px"><div class="lx-cmd" style="margin-bottom:12px">Support Effectiveness — Meta-Analysis</div>
<svg viewBox="0 0 400 170" style="width:100%">
<line x1="220" y1="5" x2="220" y2="150" stroke="var(--lx-bdr2)" stroke-width="1" stroke-dasharray="4"/><text x="220" y="165" text-anchor="middle" fill="var(--lx-txl)" font-family="JetBrains Mono" font-size="7">NULL EFFECT</text>
<text x="85" y="30" text-anchor="end" fill="var(--lx-txm)" font-family="Barlow" font-size="10">OT Intervention</text><line x1="240" y1="28" x2="340" y2="28" stroke="var(--lx-cyan)" stroke-width="2"/><polygon points="288,22 295,28 288,34" fill="var(--lx-pink)"/>
<text x="85" y="58" text-anchor="end" fill="var(--lx-txm)" font-family="Barlow" font-size="10">Psychology</text><line x1="200" y1="56" x2="320" y2="56" stroke="var(--lx-cyan)" stroke-width="2"/><polygon points="258,50 265,56 258,62" fill="var(--lx-pink)"/>
<text x="85" y="86" text-anchor="end" fill="var(--lx-txm)" font-family="Barlow" font-size="10">Exercise Phys</text><line x1="250" y1="84" x2="360" y2="84" stroke="var(--lx-cyan)" stroke-width="2"/><polygon points="303,78 310,84 303,90" fill="var(--lx-pink)"/>
<text x="85" y="114" text-anchor="end" fill="var(--lx-txm)" font-family="Barlow" font-size="10">Speech Path</text><line x1="180" y1="112" x2="290" y2="112" stroke="var(--lx-cyan)" stroke-width="2"/><polygon points="233,106 240,112 233,118" fill="var(--lx-pink)"/>
<line x1="90" y1="135" x2="380" y2="135" stroke="var(--lx-bdr)" stroke-width="1"/>
<text x="85" y="148" text-anchor="end" fill="var(--lx-tx)" font-family="Barlow" font-size="10" font-weight="700">Pooled</text><polygon points="272,140 282,148 272,156 262,148" fill="var(--lx-yellow)" stroke="var(--lx-black)" stroke-width="1"/>
</svg></div></div>
```

### 53. Sankey / Flow Diagram
**File:** `data-viz/sankey-flow.html`

```html
<div class="ds"><div class="dl">SANKEY / ALLUVIAL / FLOW DIAGRAM — FROM S02</div>
<div class="lx-card" style="max-width:500px"><div class="lx-cmd" style="margin-bottom:12px">NDIS Referral Flow</div>
<svg width="100%" height="180" viewBox="0 0 400 180">
<rect x="5" y="10" width="22" height="65" fill="var(--lx-pink)" rx="3"/><rect x="5" y="80" width="22" height="45" fill="var(--lx-cyan)" rx="3"/><rect x="5" y="130" width="22" height="40" fill="var(--lx-yellow)" rx="3"/>
<rect x="180" y="5" width="22" height="55" fill="var(--lx-pink)" rx="3" opacity=".8"/><rect x="180" y="65" width="22" height="50" fill="var(--lx-cyan)" rx="3" opacity=".8"/><rect x="180" y="120" width="22" height="48" fill="var(--lx-orange)" rx="3" opacity=".8"/>
<rect x="370" y="8" width="22" height="65" fill="var(--lx-yellow)" rx="3"/><rect x="370" y="78" width="22" height="38" fill="var(--lx-purple)" rx="3"/><rect x="370" y="121" width="22" height="45" fill="var(--lx-blue)" rx="3"/>
<path d="M27,25 C100,25 100,18 180,18" fill="none" stroke="var(--lx-pink)" stroke-width="24" opacity=".1"/>
<path d="M27,60 C100,60 100,85 180,85" fill="none" stroke="var(--lx-pink)" stroke-width="14" opacity=".08"/>
<path d="M27,95 C100,95 100,78 180,80" fill="none" stroke="var(--lx-cyan)" stroke-width="18" opacity=".08"/>
<path d="M27,142 C100,142 100,140 180,140" fill="none" stroke="var(--lx-yellow)" stroke-width="16" opacity=".08"/>
<path d="M202,25 C280,25 280,30 370,30" fill="none" stroke="var(--lx-pink)" stroke-width="22" opacity=".08"/>
<path d="M202,85 C280,85 280,92 370,95" fill="none" stroke="var(--lx-cyan)" stroke-width="16" opacity=".08"/>
<path d="M202,140 C280,140 280,140 370,140" fill="none" stroke="var(--lx-orange)" stroke-width="20" opacity=".08"/>
<text x="35" y="45" font-family="Barlow Condensed" font-weight="900" font-size="9" fill="var(--lx-tx)" text-transform="uppercase" letter-spacing=".08em">REFERRAL</text>
<text x="35" y="105" font-family="Barlow Condensed" font-weight="900" font-size="9" fill="var(--lx-tx)">DIRECT</text>
<text x="35" y="153" font-family="Barlow Condensed" font-weight="900" font-size="9" fill="var(--lx-tx)">NDIA</text>
<text x="210" y="35" font-family="Barlow Condensed" font-weight="900" font-size="9" fill="var(--lx-tx)">INTAKE</text>
<text x="210" y="93" font-family="Barlow Condensed" font-weight="900" font-size="9" fill="var(--lx-tx)">ASSESSMENT</text>
<text x="210" y="148" font-family="Barlow Condensed" font-weight="900" font-size="9" fill="var(--lx-tx)">PLAN ACTIVE</text>
</svg></div></div>
```

### 54. Funnel / Pipeline
**File:** `charts/funnel-chart.html`

```html
<div class="ds"><div class="dl">FUNNEL / PIPELINE — REFERRAL CONVERSION</div>
<div class="lx-card" style="max-width:400px;text-align:center"><div class="lx-cmd" style="margin-bottom:16px">Referral Pipeline</div>
<div style="display:flex;flex-direction:column;align-items:center;gap:2px">
  <div style="width:100%;background:var(--lx-pink);color:#fff;padding:10px;border-radius:var(--r-xs);font-family:Barlow Condensed,sans-serif;font-weight:900;font-size:13px;text-transform:uppercase;letter-spacing:.06em">Referrals Received — 48</div>
  <div style="width:82%;background:var(--lx-orange);color:#fff;padding:10px;border-radius:var(--r-xs);font-family:Barlow Condensed,sans-serif;font-weight:900;font-size:13px;text-transform:uppercase;letter-spacing:.06em">Intake Completed — 39</div>
  <div style="width:64%;background:var(--lx-cyan);color:var(--lx-black);padding:10px;border-radius:var(--r-xs);font-family:Barlow Condensed,sans-serif;font-weight:900;font-size:13px;text-transform:uppercase;letter-spacing:.06em">Plans Approved — 31</div>
  <div style="width:48%;background:var(--lx-purple);color:#fff;padding:10px;border-radius:var(--r-xs);font-family:Barlow Condensed,sans-serif;font-weight:900;font-size:13px;text-transform:uppercase;letter-spacing:.06em">Active — 23</div>
  <div style="width:32%;background:var(--lx-yellow);color:var(--lx-black);padding:10px;border-radius:var(--r-xs);font-family:Barlow Condensed,sans-serif;font-weight:900;font-size:13px;text-transform:uppercase;letter-spacing:.06em">Goals Met — 15</div>
</div></div></div>
```

### 55. Tree / Org Chart
**File:** `data-viz/tree-org-chart.html`

```html
<div class="ds"><div class="dl">TREE DIAGRAM / ORG CHART — SUPPORT NETWORK</div>
<div class="lx-card" style="max-width:500px;text-align:center"><div class="lx-cmd" style="margin-bottom:16px">Support Coordination Structure</div>
<svg viewBox="0 0 400 200" style="width:100%">
<rect x="165" y="5" width="70" height="30" rx="6" fill="var(--lx-pink)"/><text x="200" y="24" text-anchor="middle" fill="#fff" font-family="Barlow Condensed" font-weight="900" font-size="9" letter-spacing=".06em">PARTICIPANT</text>
<line x1="200" y1="35" x2="200" y2="55" stroke="var(--lx-bdr2)" stroke-width="1.5"/>
<line x1="80" y1="55" x2="320" y2="55" stroke="var(--lx-bdr2)" stroke-width="1.5"/>
<line x1="80" y1="55" x2="80" y2="70" stroke="var(--lx-bdr2)" stroke-width="1.5"/><line x1="200" y1="55" x2="200" y2="70" stroke="var(--lx-bdr2)" stroke-width="1.5"/><line x1="320" y1="55" x2="320" y2="70" stroke="var(--lx-bdr2)" stroke-width="1.5"/>
<rect x="42" y="70" width="76" height="28" rx="5" fill="var(--lx-cyan)"/><text x="80" y="88" text-anchor="middle" fill="var(--lx-black)" font-family="Barlow Condensed" font-weight="900" font-size="8" letter-spacing=".06em">SUPPORT COORD</text>
<rect x="162" y="70" width="76" height="28" rx="5" fill="var(--lx-purple)"/><text x="200" y="88" text-anchor="middle" fill="#fff" font-family="Barlow Condensed" font-weight="900" font-size="8">PLAN MANAGER</text>
<rect x="282" y="70" width="76" height="28" rx="5" fill="var(--lx-orange)"/><text x="320" y="88" text-anchor="middle" fill="#fff" font-family="Barlow Condensed" font-weight="900" font-size="8">FAMILY</text>
<line x1="80" y1="98" x2="80" y2="115" stroke="var(--lx-bdr2)" stroke-width="1"/><line x1="40" y1="115" x2="120" y2="115" stroke="var(--lx-bdr2)" stroke-width="1"/>
<line x1="40" y1="115" x2="40" y2="130" stroke="var(--lx-bdr2)" stroke-width="1"/><line x1="80" y1="115" x2="80" y2="130" stroke="var(--lx-bdr2)" stroke-width="1"/><line x1="120" y1="115" x2="120" y2="130" stroke="var(--lx-bdr2)" stroke-width="1"/>
<rect x="12" y="130" width="56" height="24" rx="4" fill="var(--lx-cream)" stroke="var(--lx-bdr)" stroke-width="1"/><text x="40" y="146" text-anchor="middle" fill="var(--lx-txm)" font-family="Barlow" font-size="7" font-weight="600">OT Provider</text>
<rect x="52" y="130" width="56" height="24" rx="4" fill="var(--lx-cream)" stroke="var(--lx-bdr)" stroke-width="1"/><text x="80" y="146" text-anchor="middle" fill="var(--lx-txm)" font-family="Barlow" font-size="7" font-weight="600">Psychologist</text>
<rect x="92" y="130" width="56" height="24" rx="4" fill="var(--lx-cream)" stroke="var(--lx-bdr)" stroke-width="1"/><text x="120" y="146" text-anchor="middle" fill="var(--lx-txm)" font-family="Barlow" font-size="7" font-weight="600">Speech Path</text>
</svg></div></div>
```

### 56. Force Network
**File:** `data-viz/force-network.html`

```html
<div class="ds"><div class="dl">FORCE-DIRECTED GRAPH / NETWORK</div>
<div class="lx-card" style="max-width:400px;text-align:center"><div class="lx-cmd" style="margin-bottom:12px">Support Network Map</div>
<svg viewBox="0 0 300 250" style="width:100%">
<line x1="150" y1="100" x2="60" y2="50" stroke="var(--lx-bdr2)" stroke-width="2"/><line x1="150" y1="100" x2="240" y2="45" stroke="var(--lx-bdr2)" stroke-width="3"/><line x1="150" y1="100" x2="80" y2="180" stroke="var(--lx-bdr2)" stroke-width="1.5"/>
<line x1="150" y1="100" x2="230" y2="170" stroke="var(--lx-bdr2)" stroke-width="2"/><line x1="150" y1="100" x2="150" y2="210" stroke="var(--lx-bdr2)" stroke-width="1"/>
<line x1="60" y1="50" x2="30" y2="100" stroke="var(--lx-bdr)" stroke-width="1"/><line x1="240" y1="45" x2="280" y2="100" stroke="var(--lx-bdr)" stroke-width="1"/>
<circle cx="150" cy="100" r="22" fill="var(--lx-pink)"/><text x="150" y="103" text-anchor="middle" fill="#fff" font-family="Bebas Neue" font-size="11">IONA</text>
<circle cx="60" cy="50" r="16" fill="var(--lx-cyan)"/><text x="60" y="53" text-anchor="middle" fill="var(--lx-black)" font-family="Barlow" font-size="7" font-weight="700">SC</text>
<circle cx="240" cy="45" r="18" fill="var(--lx-purple)"/><text x="240" y="48" text-anchor="middle" fill="#fff" font-family="Barlow" font-size="7" font-weight="700">Family</text>
<circle cx="80" cy="180" r="14" fill="var(--lx-orange)"/><text x="80" y="183" text-anchor="middle" fill="#fff" font-family="Barlow" font-size="7" font-weight="700">OT</text>
<circle cx="230" cy="170" r="14" fill="var(--lx-blue)"/><text x="230" y="173" text-anchor="middle" fill="#fff" font-family="Barlow" font-size="7" font-weight="700">Psych</text>
<circle cx="150" cy="210" r="12" fill="var(--lx-yellow)"/><text x="150" y="213" text-anchor="middle" fill="var(--lx-black)" font-family="Barlow" font-size="7" font-weight="700">GP</text>
<circle cx="30" cy="100" r="10" fill="var(--lx-cream)" stroke="var(--lx-bdr2)" stroke-width="1"/><text x="30" y="103" text-anchor="middle" fill="var(--lx-txm)" font-family="Barlow" font-size="6" font-weight="600">SLP</text>
<circle cx="280" cy="100" r="10" fill="var(--lx-cream)" stroke="var(--lx-bdr2)" stroke-width="1"/><text x="280" y="103" text-anchor="middle" fill="var(--lx-txm)" font-family="Barlow" font-size="6" font-weight="600">Carer</text>
</svg></div></div>
```

### 57. Choropleth / Map
**File:** `data-viz/choropleth-map.html`

```html
<div class="ds"><div class="dl">CHOROPLETH / REGION MAP — CASELOAD BY AREA</div>
<div class="lx-card dark" style="max-width:450px;text-align:center"><div class="lx-cmd" style="color:var(--lx-offwhite);margin-bottom:12px">Participant Density by Region</div>
<svg viewBox="0 0 300 220" style="width:100%">
<path d="M50,30 L120,20 L150,50 L130,90 L80,80 Z" fill="var(--lx-pink)" opacity=".9" stroke="var(--lx-black)" stroke-width="2"/><text x="100" y="55" text-anchor="middle" fill="#fff" font-family="Bebas Neue" font-size="14">42</text>
<path d="M120,20 L200,15 L220,60 L150,50 Z" fill="var(--lx-pink)" opacity=".6" stroke="var(--lx-black)" stroke-width="2"/><text x="170" y="40" text-anchor="middle" fill="#fff" font-family="Bebas Neue" font-size="14">28</text>
<path d="M200,15 L270,25 L260,80 L220,60 Z" fill="var(--lx-pink)" opacity=".35" stroke="var(--lx-black)" stroke-width="2"/><text x="237" y="52" text-anchor="middle" fill="#fff" font-family="Bebas Neue" font-size="14">15</text>
<path d="M80,80 L130,90 L140,140 L70,130 Z" fill="var(--lx-pink)" opacity=".75" stroke="var(--lx-black)" stroke-width="2"/><text x="105" y="115" text-anchor="middle" fill="#fff" font-family="Bebas Neue" font-size="14">34</text>
<path d="M130,90 L220,60 L240,130 L140,140 Z" fill="var(--lx-pink)" opacity=".5" stroke="var(--lx-black)" stroke-width="2"/><text x="183" y="105" text-anchor="middle" fill="#fff" font-family="Bebas Neue" font-size="14">22</text>
<path d="M220,60 L260,80 L250,140 L240,130 Z" fill="var(--lx-pink)" opacity=".2" stroke="var(--lx-black)" stroke-width="2"/><text x="243" y="110" text-anchor="middle" fill="rgba(255,255,255,.6)" font-family="Bebas Neue" font-size="14">8</text>
<path d="M70,130 L140,140 L130,190 L60,180 Z" fill="var(--lx-pink)" opacity=".45" stroke="var(--lx-black)" stroke-width="2"/><text x="100" y="165" text-anchor="middle" fill="#fff" font-family="Bebas Neue" font-size="14">19</text>
<path d="M140,140 L240,130 L230,195 L130,190 Z" fill="var(--lx-pink)" opacity=".65" stroke="var(--lx-black)" stroke-width="2"/><text x="185" y="168" text-anchor="middle" fill="#fff" font-family="Bebas Neue" font-size="14">31</text>
</svg>
<div style="display:flex;align-items:center;justify-content:center;gap:6px;margin-top:8px"><span class="lx-bxs" style="color:rgba(245,240,232,.5)">LOW</span><div style="width:120px;height:8px;border-radius:4px;background:linear-gradient(90deg,rgba(255,45,125,.2),rgba(255,45,125,.9))"></div><span class="lx-bxs" style="color:rgba(245,240,232,.5)">HIGH</span></div>
</div></div>
```

### 58. Risk Matrix
**File:** `charts/risk-matrix.html`

```html
<div class="ds"><div class="dl">RISK MATRIX / IMPACT-EFFORT</div>
<div class="lx-card" style="max-width:400px"><div class="lx-cmd" style="margin-bottom:12px">Risk Assessment Matrix</div>
<div style="display:grid;grid-template-columns:auto repeat(3,1fr);gap:2px;font-size:10px">
  <div></div><div style="text-align:center;padding:4px" class="lx-eye">LOW</div><div style="text-align:center;padding:4px" class="lx-eye">MEDIUM</div><div style="text-align:center;padding:4px" class="lx-eye">HIGH</div>
  <div style="writing-mode:vertical-lr;transform:rotate(180deg);text-align:center;padding:4px" class="lx-eye">HIGH</div>
  <div style="background:rgba(255,102,0,.15);padding:12px;border-radius:4px;text-align:center"><span class="lx-csm cor">Medium</span></div>
  <div style="background:rgba(255,45,125,.15);padding:12px;border-radius:4px;text-align:center"><span class="lx-csm cpk">High</span></div>
  <div style="background:rgba(255,45,125,.25);padding:12px;border-radius:4px;text-align:center"><span class="lx-csm cpk" style="font-weight:900">Critical</span></div>
  <div style="writing-mode:vertical-lr;transform:rotate(180deg);text-align:center;padding:4px" class="lx-eye">MED</div>
  <div style="background:rgba(0,212,255,.1);padding:12px;border-radius:4px;text-align:center"><span class="lx-csm ccy">Low</span></div>
  <div style="background:rgba(255,102,0,.15);padding:12px;border-radius:4px;text-align:center"><span class="lx-csm cor">Medium</span></div>
  <div style="background:rgba(255,45,125,.15);padding:12px;border-radius:4px;text-align:center"><span class="lx-csm cpk">High</span></div>
  <div style="writing-mode:vertical-lr;transform:rotate(180deg);text-align:center;padding:4px" class="lx-eye">LOW</div>
  <div style="background:rgba(0,212,255,.06);padding:12px;border-radius:4px;text-align:center"><span class="lx-csm" style="color:var(--lx-txl)">Minimal</span></div>
  <div style="background:rgba(0,212,255,.1);padding:12px;border-radius:4px;text-align:center"><span class="lx-csm ccy">Low</span></div>
  <div style="background:rgba(255,102,0,.15);padding:12px;border-radius:4px;text-align:center"><span class="lx-csm cor">Medium</span></div>
</div>
<div class="lx-bxs cm" style="margin-top:8px;text-align:center">Likelihood →&emsp;&emsp;Impact ↑</div>
</div></div>
```

## S03 — Scheduling, Financial, Monitoring

### 59. Gantt Chart
**File:** `charts/gantt-chart.html`

```html
<div class="ds"><div class="dl">GANTT CHART / TIMELINE</div>
<div class="lx-card" style="max-width:600px"><div class="lx-cmd" style="margin-bottom:12px">Support Plan Implementation Timeline</div>
<div style="display:grid;grid-template-columns:120px 1fr;gap:0;font-size:11px">
  <div style="padding:6px 8px;border-bottom:1px solid var(--lx-bdr);font-family:JetBrains Mono,monospace;font-size:8px;letter-spacing:.1em;color:var(--lx-txl)">TASK</div>
  <div style="display:flex;border-bottom:1px solid var(--lx-bdr);padding:6px 0"><span style="flex:1;text-align:center;font-family:JetBrains Mono,monospace;font-size:7px;color:var(--lx-txl)">JAN</span><span style="flex:1;text-align:center;font-family:JetBrains Mono,monospace;font-size:7px;color:var(--lx-txl)">FEB</span><span style="flex:1;text-align:center;font-family:JetBrains Mono,monospace;font-size:7px;color:var(--lx-txl)">MAR</span><span style="flex:1;text-align:center;font-family:JetBrains Mono,monospace;font-size:7px;color:var(--lx-txl)">APR</span><span style="flex:1;text-align:center;font-family:JetBrains Mono,monospace;font-size:7px;color:var(--lx-txl)">MAY</span><span style="flex:1;text-align:center;font-family:JetBrains Mono,monospace;font-size:7px;color:var(--lx-txl)">JUN</span></div>
  <div style="padding:8px 8px;border-bottom:1px solid rgba(0,0,0,.03)">Plan Setup</div><div style="padding:8px 4px;border-bottom:1px solid rgba(0,0,0,.03);position:relative"><div style="position:absolute;left:0;top:50%;transform:translateY(-50%);width:30%;height:8px;background:var(--lx-pink);border-radius:4px"></div></div>
  <div style="padding:8px 8px;border-bottom:1px solid rgba(0,0,0,.03)">OT Assessment</div><div style="padding:8px 4px;border-bottom:1px solid rgba(0,0,0,.03);position:relative"><div style="position:absolute;left:15%;top:50%;transform:translateY(-50%);width:25%;height:8px;background:var(--lx-cyan);border-radius:4px"></div></div>
  <div style="padding:8px 8px;border-bottom:1px solid rgba(0,0,0,.03)">Service Delivery</div><div style="padding:8px 4px;border-bottom:1px solid rgba(0,0,0,.03);position:relative"><div style="position:absolute;left:20%;top:50%;transform:translateY(-50%);width:65%;height:8px;background:var(--lx-purple);border-radius:4px"></div></div>
  <div style="padding:8px 8px;border-bottom:1px solid rgba(0,0,0,.03)">Capacity Build</div><div style="padding:8px 4px;border-bottom:1px solid rgba(0,0,0,.03);position:relative"><div style="position:absolute;left:30%;top:50%;transform:translateY(-50%);width:55%;height:8px;background:var(--lx-blue);border-radius:4px"></div></div>
  <div style="padding:8px 8px">Plan Review</div><div style="padding:8px 4px;position:relative"><div style="position:absolute;left:75%;top:50%;transform:translateY(-50%);width:20%;height:8px;background:var(--lx-orange);border-radius:4px"></div></div>
</div></div></div>
```

### 60. Burndown / Burnup
**File:** `charts/burndown.html`

```html
<div class="ds"><div class="dl">BURNDOWN / BURNUP — PLAN IMPLEMENTATION</div>
<div class="lx-card" style="max-width:500px"><div class="lx-cmd" style="margin-bottom:12px">Implementation Burndown — Tasks Remaining</div>
<svg viewBox="0 0 400 180" style="width:100%">
<line x1="40" y1="160" x2="380" y2="160" stroke="var(--lx-bdr)" stroke-width="1"/><line x1="40" y1="10" x2="40" y2="160" stroke="var(--lx-bdr)" stroke-width=".5"/>
<line x1="40" y1="20" x2="380" y2="160" stroke="var(--lx-bdr2)" stroke-width="1" stroke-dasharray="6,4"/>
<polyline points="40,20 80,25 120,22 160,35 200,50 240,72 280,95 320,115 360,130" fill="none" stroke="#FF2D7D" stroke-width="2.5" stroke-linecap="round"/>
<circle cx="360" cy="130" r="4" fill="#FF2D7D" stroke="#fff" stroke-width="2"/>
<text x="45" y="18" fill="var(--lx-txl)" font-family="JetBrains Mono" font-size="8">24</text><text x="45" y="95" fill="var(--lx-txl)" font-family="JetBrains Mono" font-size="8">12</text><text x="45" y="163" fill="var(--lx-txl)" font-family="JetBrains Mono" font-size="8">0</text>
<text x="365" y="126" fill="var(--lx-pink)" font-family="JetBrains Mono" font-size="9" font-weight="700">6 left</text>
</svg>
<div style="display:flex;gap:16px;margin-top:4px"><div style="display:flex;align-items:center;gap:4px"><div style="width:12px;height:3px;background:#FF2D7D;border-radius:2px"></div><span class="lx-bxs cm">Actual</span></div><div style="display:flex;align-items:center;gap:4px"><div style="width:12px;height:3px;border-radius:2px;border:1px dashed var(--lx-bdr2)"></div><span class="lx-bxs cm">Ideal</span></div></div></div></div>
```

### 61. Gauge / Angular Gauge
**File:** `charts/gauge.html`

```html
<div class="ds"><div class="dl">GAUGE / ANGULAR GAUGE / SLA METER</div>
<div style="display:flex;gap:20px;flex-wrap:wrap">
<div class="lx-card" style="width:200px;text-align:center"><div class="lx-eye" style="color:var(--lx-pink);margin-bottom:8px">PLAN HEALTH</div>
<svg viewBox="0 0 120 75" style="width:120px;margin:0 auto">
  <path d="M10,65 A50,50 0 0,1 110,65" fill="none" stroke="rgba(0,0,0,.06)" stroke-width="10" stroke-linecap="round"/>
  <path d="M10,65 A50,50 0 0,1 95,25" fill="none" stroke="#FF2D7D" stroke-width="10" stroke-linecap="round"/>
</svg>
<div class="lx-stat cpk" style="margin-top:-8px">78%</div><div class="lx-bxs cm">Good Standing</div></div>
<div class="lx-card" style="width:200px;text-align:center"><div class="lx-eye" style="color:var(--lx-cyan);margin-bottom:8px">UTILISATION</div>
<svg viewBox="0 0 120 75" style="width:120px;margin:0 auto">
  <path d="M10,65 A50,50 0 0,1 110,65" fill="none" stroke="rgba(0,0,0,.06)" stroke-width="10" stroke-linecap="round"/>
  <path d="M10,65 A50,50 0 0,1 60,15" fill="none" stroke="#00D4FF" stroke-width="10" stroke-linecap="round"/>
</svg>
<div class="lx-stat ccy" style="margin-top:-8px">52%</div><div class="lx-bxs cm">On Track</div></div>
<div class="lx-card" style="width:200px;text-align:center"><div class="lx-eye" style="color:var(--lx-orange);margin-bottom:8px">RISK LEVEL</div>
<svg viewBox="0 0 120 75" style="width:120px;margin:0 auto">
  <path d="M10,65 A50,50 0 0,1 110,65" fill="none" stroke="rgba(0,0,0,.06)" stroke-width="10" stroke-linecap="round"/>
  <path d="M10,65 A50,50 0 0,1 105,55" fill="none" stroke="#FF6600" stroke-width="10" stroke-linecap="round"/>
</svg>
<div class="lx-stat cor" style="margin-top:-8px">92%</div><div class="lx-bxs cm">High Alert</div></div>
</div></div>
```

### 62. Pictogram / Icon Array
**File:** `charts/pictogram.html`

```html
<div class="ds"><div class="dl">PICTOGRAM / ICON ARRAY — PARTICIPANT OUTCOMES</div>
<div class="lx-card" style="max-width:400px"><div class="lx-cmd" style="margin-bottom:8px">Goal Achievement Rate — 72%</div>
<div class="lx-bxs cm" style="margin-bottom:12px">72 of 100 participants achieved at least one goal</div>
<div style="display:grid;grid-template-columns:repeat(10,1fr);gap:4px"><div style="width:100%;aspect-ratio:1;border-radius:50%;background:var(--lx-pink)"></div><div style="width:100%;aspect-ratio:1;border-radius:50%;background:var(--lx-pink)"></div><div style="width:100%;aspect-ratio:1;border-radius:50%;background:var(--lx-pink)"></div><div style="width:100%;aspect-ratio:1;border-radius:50%;background:var(--lx-pink)"></div><div style="width:100%;aspect-ratio:1;border-radius:50%;background:var(--lx-pink)"></div><div style="width:100%;aspect-ratio:1;border-radius:50%;background:var(--lx-pink)"></div><div style="width:100%;aspect-ratio:1;border-radius:50%;background:var(--lx-pink)"></div><div style="width:100%;aspect-ratio:1;border-radius:50%;background:var(--lx-pink)"></div><div style="width:100%;aspect-ratio:1;border-radius:50%;background:var(--lx-pink)"></div><div style="width:100%;aspect-ratio:1;border-radius:50%;background:var(--lx-pink)"></div><div style="width:100%;aspect-ratio:1;border-radius:50%;background:var(--lx-pink)"></div><div style="width:100%;aspect-ratio:1;border-radius:50%;background:var(--lx-pink)"></div><div style="width:100%;aspect-ratio:1;border-radius:50%;background:var(--lx-pink)"></div><div style="width:100%;aspect-ratio:1;border-radius:50%;background:var(--lx-pink)"></div><div style="width:100%;aspect-ratio:1;border-radius:50%;background:var(--lx-pink)"></div><div style="width:100%;aspect-ratio:1;border-radius:50%;background:var(--lx-pink)"></div><div style="width:100%;aspect-ratio:1;border-radius:50%;background:var(--lx-pink)"></div><div style="width:100%;aspect-ratio:1;border-radius:50%;background:var(--lx-pink)"></div><div style="width:100%;aspect-ratio:1;border-radius:50%;background:var(--lx-pink)"></div><div style="width:100%;aspect-ratio:1;border-radius:50%;background:var(--lx-pink)"></div><div style="width:100%;aspect-ratio:1;border-radius:50%;background:var(--lx-pink)"></div><div style="width:100%;aspect-ratio:1;border-radius:50%;background:var(--lx-pink)"></div><div style="width:100%;aspect-ratio:1;border-radius:50%;background:var(--lx-pink)"></div><div style="width:100%;aspect-ratio:1;border-radius:50%;background:var(--lx-pink)"></div><div style="width:100%;aspect-ratio:1;border-radius:50%;background:var(--lx-pink)"></div><div style="width:100%;aspect-ratio:1;border-radius:50%;background:var(--lx-pink)"></div><div style="width:100%;aspect-ratio:1;border-radius:50%;background:var(--lx-pink)"></div><div style="width:100%;aspect-ratio:1;border-radius:50%;background:var(--lx-pink)"></div><div style="width:100%;aspect-ratio:1;border-radius:50%;background:var(--lx-pink)"></div><div style="width:100%;aspect-ratio:1;border-radius:50%;background:var(--lx-pink)"></div><div style="width:100%;aspect-ratio:1;border-radius:50%;background:var(--lx-pink)"></div><div style="width:100%;aspect-ratio:1;border-radius:50%;background:var(--lx-pink)"></div><div style="width:100%;aspect-ratio:1;border-radius:50%;background:var(--lx-pink)"></div><div style="width:100%;aspect-ratio:1;border-radius:50%;background:var(--lx-pink)"></div><div style="width:100%;aspect-ratio:1;border-radius:50%;background:var(--lx-pink)"></div><div style="width:100%;aspect-ratio:1;border-radius:50%;background:var(--lx-pink)"></div><div style="width:100%;aspect-ratio:1;border-radius:50%;background:var(--lx-pink)"></div><div style="width:100%;aspect-ratio:1;border-radius:50%;background:var(--lx-pink)"></div><div style="width:100%;aspect-ratio:1;border-radius:50%;background:var(--lx-pink)"></div><div style="width:100%;aspect-ratio:1;border-radius:50%;background:var(--lx-pink)"></div><div style="width:100%;aspect-ratio:1;border-radius:50%;background:var(--lx-pink)"></div><div style="width:100%;aspect-ratio:1;border-radius:50%;background:var(--lx-pink)"></div><div style="width:100%;aspect-ratio:1;border-radius:50%;background:var(--lx-pink)"></div><div style="width:100%;aspect-ratio:1;border-radius:50%;background:var(--lx-pink)"></div><div style="width:100%;aspect-ratio:1;border-radius:50%;background:var(--lx-pink)"></div><div style="width:100%;aspect-ratio:1;border-radius:50%;background:var(--lx-pink)"></div><div style="width:100%;aspect-ratio:1;border-radius:50%;background:var(--lx-pink)"></div><div style="width:100%;aspect-ratio:1;border-radius:50%;background:var(--lx-pink)"></div><div style="width:100%;aspect-ratio:1;border-radius:50%;background:var(--lx-pink)"></div><div style="width:100%;aspect-ratio:1;border-radius:50%;background:var(--lx-pink)"></div><div style="width:100%;aspect-ratio:1;border-radius:50%;background:var(--lx-pink)"></div><div style="width:100%;aspect-ratio:1;border-radius:50%;background:var(--lx-pink)"></div><div style="width:100%;aspect-ratio:1;border-radius:50%;background:var(--lx-pink)"></div><div style="width:100%;aspect-ratio:1;border-radius:50%;background:var(--lx-pink)"></div><div style="width:100%;aspect-ratio:1;border-radius:50%;background:var(--lx-pink)"></div><div style="width:100%;aspect-ratio:1;border-radius:50%;background:var(--lx-pink)"></div><div style="width:100%;aspect-ratio:1;border-radius:50%;background:var(--lx-pink)"></div><div style="width:100%;aspect-ratio:1;border-radius:50%;background:var(--lx-pink)"></div><div style="width:100%;aspect-ratio:1;border-radius:50%;background:var(--lx-pink)"></div><div style="width:100%;aspect-ratio:1;border-radius:50%;background:var(--lx-pink)"></div><div style="width:100%;aspect-ratio:1;border-radius:50%;background:var(--lx-pink)"></div><div style="width:100%;aspect-ratio:1;border-radius:50%;background:var(--lx-pink)"></div><div style="width:100%;aspect-ratio:1;border-radius:50%;background:var(--lx-pink)"></div><div style="width:100%;aspect-ratio:1;border-radius:50%;background:var(--lx-pink)"></div><div style="width:100%;aspect-ratio:1;border-radius:50%;background:var(--lx-pink)"></div><div style="width:100%;aspect-ratio:1;border-radius:50%;background:var(--lx-pink)"></div><div style="width:100%;aspect-ratio:1;border-radius:50%;background:var(--lx-pink)"></div><div style="width:100%;aspect-ratio:1;border-radius:50%;background:var(--lx-pink)"></div><div style="width:100%;aspect-ratio:1;border-radius:50%;background:var(--lx-pink)"></div><div style="width:100%;aspect-ratio:1;border-radius:50%;background:var(--lx-pink)"></div><div style="width:100%;aspect-ratio:1;border-radius:50%;background:var(--lx-pink)"></div><div style="width:100%;aspect-ratio:1;border-radius:50%;background:var(--lx-pink)"></div><div style="width:100%;aspect-ratio:1;border-radius:50%;background:rgba(0,0,0,.06)"></div><div style="width:100%;aspect-ratio:1;border-radius:50%;background:rgba(0,0,0,.06)"></div><div style="width:100%;aspect-ratio:1;border-radius:50%;background:rgba(0,0,0,.06)"></div><div style="width:100%;aspect-ratio:1;border-radius:50%;background:rgba(0,0,0,.06)"></div><div style="width:100%;aspect-ratio:1;border-radius:50%;background:rgba(0,0,0,.06)"></div><div style="width:100%;aspect-ratio:1;border-radius:50%;background:rgba(0,0,0,.06)"></div><div style="width:100%;aspect-ratio:1;border-radius:50%;background:rgba(0,0,0,.06)"></div><div style="width:100%;aspect-ratio:1;border-radius:50%;background:rgba(0,0,0,.06)"></div><div style="width:100%;aspect-ratio:1;border-radius:50%;background:rgba(0,0,0,.06)"></div><div style="width:100%;aspect-ratio:1;border-radius:50%;background:rgba(0,0,0,.06)"></div><div style="width:100%;aspect-ratio:1;border-radius:50%;background:rgba(0,0,0,.06)"></div><div style="width:100%;aspect-ratio:1;border-radius:50%;background:rgba(0,0,0,.06)"></div><div style="width:100%;aspect-ratio:1;border-radius:50%;background:rgba(0,0,0,.06)"></div><div style="width:100%;aspect-ratio:1;border-radius:50%;background:rgba(0,0,0,.06)"></div><div style="width:100%;aspect-ratio:1;border-radius:50%;background:rgba(0,0,0,.06)"></div><div style="width:100%;aspect-ratio:1;border-radius:50%;background:rgba(0,0,0,.06)"></div><div style="width:100%;aspect-ratio:1;border-radius:50%;background:rgba(0,0,0,.06)"></div><div style="width:100%;aspect-ratio:1;border-radius:50%;background:rgba(0,0,0,.06)"></div><div style="width:100%;aspect-ratio:1;border-radius:50%;background:rgba(0,0,0,.06)"></div><div style="width:100%;aspect-ratio:1;border-radius:50%;background:rgba(0,0,0,.06)"></div><div style="width:100%;aspect-ratio:1;border-radius:50%;background:rgba(0,0,0,.06)"></div><div style="width:100%;aspect-ratio:1;border-radius:50%;background:rgba(0,0,0,.06)"></div><div style="width:100%;aspect-ratio:1;border-radius:50%;background:rgba(0,0,0,.06)"></div><div style="width:100%;aspect-ratio:1;border-radius:50%;background:rgba(0,0,0,.06)"></div><div style="width:100%;aspect-ratio:1;border-radius:50%;background:rgba(0,0,0,.06)"></div><div style="width:100%;aspect-ratio:1;border-radius:50%;background:rgba(0,0,0,.06)"></div><div style="width:100%;aspect-ratio:1;border-radius:50%;background:rgba(0,0,0,.06)"></div><div style="width:100%;aspect-ratio:1;border-radius:50%;background:rgba(0,0,0,.06)"></div></div>
<div style="display:flex;gap:12px;margin-top:10px"><div style="display:flex;align-items:center;gap:4px"><div style="width:10px;height:10px;border-radius:50%;background:var(--lx-pink)"></div><span class="lx-bxs cm">Achieved (72)</span></div><div style="display:flex;align-items:center;gap:4px"><div style="width:10px;height:10px;border-radius:50%;background:rgba(0,0,0,.06)"></div><span class="lx-bxs cm">In Progress (28)</span></div></div>
</div></div>
```

### 63. Progress Bars
**File:** `progress-donuts/progress-bars.html`

```html
<!-- Component: Progress Bars | Category: Progress -->

<div class="demo-section" style="max-width:500px">
  <div class="demo-label">PROGRESS BAR COLOURS</div>
  <div class="lx-pw">
    <div class="lx-ph"><span class="lx-pk2">Core Supports</span><span class="lx-pv">78%</span></div>
    <div class="lx-pt"><div class="lx-pf" data-w="78%" style="width:0"></div></div>
  </div>
  <div class="lx-pw">
    <div class="lx-ph"><span class="lx-pk2">Capacity Building</span><span class="lx-pv" style="color:var(--lx-cyan)">62%</span></div>
    <div class="lx-pt"><div class="lx-pf cy" data-w="62%" style="width:0"></div></div>
  </div>
  <div class="lx-pw">
    <div class="lx-ph"><span class="lx-pk2">Capital</span><span class="lx-pv" style="color:var(--lx-orange)">45%</span></div>
    <div class="lx-pt"><div class="lx-pf or" data-w="45%" style="width:0"></div></div>
  </div>
  <div class="lx-pw">
    <div class="lx-ph"><span class="lx-pk2">Transport</span><span class="lx-pv" style="color:var(--lx-purple)">91%</span></div>
    <div class="lx-pt"><div class="lx-pf pu" data-w="91%" style="width:0"></div></div>
  </div>
  <div class="lx-pw">
    <div class="lx-ph"><span class="lx-pk2">Consumables</span><span class="lx-pv" style="color:var(--lx-blue)">33%</span></div>
    <div class="lx-pt"><div class="lx-pf bl" data-w="33%" style="width:0"></div></div>
  </div>
</div>

<div class="demo-section" style="max-width:500px">
  <div class="demo-label">THICK + STRIPED VARIANTS</div>
  <div class="lx-pw">
    <div class="lx-ph"><span class="lx-pk2">Thick Bar</span><span class="lx-pv">68%</span></div>
    <div class="lx-pt tk"><div class="lx-pf" data-w="68%" style="width:0"></div></div>
  </div>
  <div class="lx-pw">
    <div class="lx-ph"><span class="lx-pk2">Striped Bar</span><span class="lx-pv" style="color:var(--lx-cyan)">55%</span></div>
    <div class="lx-pt tk"><div class="lx-pf cy st" data-w="55%" style="width:0"></div></div>
  </div>
</div>
```

## S06 — NDIS Operational Charts

### 81. NDIS Budget Projection
**File:** `charts/ndis-budget-projection.html`

```html
<div class="ds"><div class="dl">NDIS BUDGET EXPENDITURE — PROJECTED · ACTUAL · TRAJECTORY</div>
<div class="lx-card" style="max-width:550px"><div class="lx-cmd" style="margin-bottom:4px">Budget Expenditure Projection</div><div class="lx-bxs cm" style="margin-bottom:12px">Projected vs actual spend with forecast trajectory</div>
<svg viewBox="0 0 440 180" style="width:100%">
<line x1="40" y1="10" x2="40" y2="160" stroke="var(--lx-bdr)" stroke-width=".5"/><line x1="40" y1="160" x2="420" y2="160" stroke="var(--lx-bdr)" stroke-width="1"/>
<line x1="40" y1="10" x2="420" y2="160" stroke="var(--lx-bdr2)" stroke-width="1" stroke-dasharray="6"/>
<defs><linearGradient id="bp" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#FF2D7D" stop-opacity=".15"/><stop offset="100%" stop-color="#FF2D7D" stop-opacity=".02"/></linearGradient></defs>
<path d="M40,155 80,148 120,135 160,120 200,102 240,82 280,65 280,160 40,160Z" fill="url(#bp)"/>
<polyline points="40,155 80,148 120,135 160,120 200,102 240,82 280,65" fill="none" stroke="#FF2D7D" stroke-width="2.5" stroke-linecap="round"/>
<polyline points="280,65 320,45 360,30 400,18" fill="none" stroke="#FF2D7D" stroke-width="2" stroke-dasharray="6,4" stroke-linecap="round"/>
<polyline points="40,155 80,145 120,128 160,115 200,95 240,78 280,58" fill="none" stroke="#00D4FF" stroke-width="1.5" stroke-dasharray="4"/>
<circle cx="280" cy="65" r="4" fill="#FF2D7D" stroke="#fff" stroke-width="2"/>
<text x="285" y="62" fill="var(--lx-pink)" font-family="JetBrains Mono" font-size="9" font-weight="700">$48.2K</text>
<text x="405" y="15" fill="var(--lx-pink)" font-family="JetBrains Mono" font-size="8" opacity=".6">$72.4K</text>
</svg>
<div style="display:flex;gap:12px;margin-top:4px"><div style="display:flex;align-items:center;gap:4px"><div style="width:12px;height:3px;background:#FF2D7D;border-radius:2px"></div><span class="lx-bxs cm">Actual</span></div><div style="display:flex;align-items:center;gap:4px"><div style="width:12px;height:3px;background:#FF2D7D;border-radius:2px;opacity:.4;border:1px dashed #FF2D7D"></div><span class="lx-bxs cm">Forecast</span></div><div style="display:flex;align-items:center;gap:4px"><div style="width:12px;height:3px;background:#00D4FF;border-radius:2px"></div><span class="lx-bxs cm">Ideal Pacing</span></div></div>
</div></div>
```

### 82. Risk Forecasting
**File:** `charts/risk-forecasting.html`

```html
<div class="ds"><div class="dl">RISK FORECASTING / TRAJECTORY</div>
<div class="lx-card" style="max-width:500px"><div class="lx-cmd" style="margin-bottom:12px">Risk Score Trajectory — 12 Month</div>
<svg viewBox="0 0 400 160" style="width:100%"><line x1="40" y1="140" x2="380" y2="140" stroke="var(--lx-bdr)" stroke-width="1"/>
<rect x="40" y="0" width="340" height="35" fill="rgba(255,45,125,.06)" rx="0"/><text x="45" y="12" fill="var(--lx-pink)" font-family="JetBrains Mono" font-size="7" opacity=".6">HIGH RISK ZONE</text>
<rect x="40" y="35" width="340" height="40" fill="rgba(255,102,0,.04)"/><rect x="40" y="75" width="340" height="40" fill="rgba(0,212,255,.03)"/>
<rect x="40" y="115" width="340" height="25" fill="rgba(204,255,0,.04)"/><text x="45" y="132" fill="var(--lx-txl)" font-family="JetBrains Mono" font-size="7">LOW RISK</text>
<polyline points="60,120 100,110 140,100 180,105 220,85 260,70 300,50 340,35" fill="none" stroke="#FF6600" stroke-width="2.5" stroke-linecap="round"/>
<polyline points="300,50 340,35 360,20" fill="none" stroke="#FF2D7D" stroke-width="2" stroke-dasharray="5,3"/>
<circle cx="300" cy="50" r="4" fill="#FF6600" stroke="#fff" stroke-width="2"/>
<text x="305" y="47" fill="var(--lx-orange)" font-family="JetBrains Mono" font-size="8" font-weight="700">3.2</text>
</svg>
<div class="lx-al dng" style="margin-top:8px"><div><div class="lx-at">Escalating Risk</div><div class="lx-ab">Risk score trending upward. Forecast to enter high-risk zone within 2 months without intervention.</div></div></div></div></div>
```

### 83. Trend Analysis / Rolling Avg
**File:** `charts/trend-rolling-average.html`

```html
<div class="ds"><div class="dl">TREND ANALYSIS — ROLLING AVERAGE + REGRESSION</div>
<div class="lx-card" style="max-width:500px"><div class="lx-cmd" style="margin-bottom:12px">Service Hours — Trend with Rolling Average</div>
<svg viewBox="0 0 400 160" style="width:100%"><line x1="40" y1="140" x2="380" y2="140" stroke="var(--lx-bdr)" stroke-width="1"/>
<polyline points="50,100 80,90 110,105 140,85 170,95 200,75 230,80 260,65 290,70 320,55 350,60" fill="none" stroke="var(--lx-bdr2)" stroke-width="1.5" stroke-linecap="round"/>
<circle cx="50" cy="100" r="2.5" fill="var(--lx-bdr2)"/><circle cx="80" cy="90" r="2.5" fill="var(--lx-bdr2)"/><circle cx="110" cy="105" r="2.5" fill="var(--lx-bdr2)"/><circle cx="140" cy="85" r="2.5" fill="var(--lx-bdr2)"/><circle cx="170" cy="95" r="2.5" fill="var(--lx-bdr2)"/><circle cx="200" cy="75" r="2.5" fill="var(--lx-bdr2)"/><circle cx="230" cy="80" r="2.5" fill="var(--lx-bdr2)"/><circle cx="260" cy="65" r="2.5" fill="var(--lx-bdr2)"/><circle cx="290" cy="70" r="2.5" fill="var(--lx-bdr2)"/><circle cx="320" cy="55" r="2.5" fill="var(--lx-bdr2)"/><circle cx="350" cy="60" r="2.5" fill="var(--lx-bdr2)"/>
<polyline points="110,98 140,93 170,88 200,85 230,73 260,72 290,65 320,63 350,58" fill="none" stroke="#FF2D7D" stroke-width="2.5" stroke-linecap="round"/>
<line x1="50" y1="105" x2="370" y2="48" stroke="#00D4FF" stroke-width="1.5" stroke-dasharray="6,4"/>
</svg>
<div style="display:flex;gap:12px;margin-top:4px"><div style="display:flex;align-items:center;gap:4px"><div style="width:10px;height:3px;background:var(--lx-bdr2);border-radius:2px"></div><span class="lx-bxs cm">Raw Data</span></div><div style="display:flex;align-items:center;gap:4px"><div style="width:10px;height:3px;background:#FF2D7D;border-radius:2px"></div><span class="lx-bxs cm">3-Month Rolling Avg</span></div><div style="display:flex;align-items:center;gap:4px"><div style="width:10px;height:3px;background:#00D4FF;border-radius:2px"></div><span class="lx-bxs cm">Regression Line</span></div></div></div></div>
```

