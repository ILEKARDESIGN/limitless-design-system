# CRM Patterns — Participant, Budget, Caseload, Goals, Services, Billing, Timeline

Copy these directly into output HTML. All CSS classes defined in core-css.md.
GitHub: https://github.com/ILEKARDESIGN/limitless-design-system

---

## S05 — CRM & Entity Management

### 68. Entity Card Grid
**File:** `crm/entity-card-grid.html`

```html
<div class="ds"><div class="dl">ENTITY CARD GRID / PARTICIPANT SUMMARY TILES</div>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px;max-width:700px">
  <div class="lx-card tl" style="padding:16px"><div style="display:flex;align-items:center;gap:10px;margin-bottom:10px"><div style="width:36px;height:36px;border-radius:50%;background:var(--lx-pink);color:#fff;display:flex;align-items:center;justify-content:center;font-family:Bebas Neue,serif;font-size:16px">IK</div><div><div class="lx-b bld">Iona K.</div><div class="lx-bxs cm">#12345678</div></div></div><span class="lx-chip spk">Active</span><div class="lx-ir" style="margin-top:8px"><span class="lx-ik">Budget</span><span class="lx-iv" style="font-size:14px">$72.4K</span></div></div>
  <div class="lx-card" style="padding:16px"><div style="display:flex;align-items:center;gap:10px;margin-bottom:10px"><div style="width:36px;height:36px;border-radius:50%;background:var(--lx-cyan);color:var(--lx-black);display:flex;align-items:center;justify-content:center;font-family:Bebas Neue,serif;font-size:16px">SC</div><div><div class="lx-b bld">Saso C.</div><div class="lx-bxs cm">#87654321</div></div></div><span class="lx-chip cy">Review</span><div class="lx-ir" style="margin-top:8px"><span class="lx-ik">Budget</span><span class="lx-iv ccy" style="font-size:14px">$54.8K</span></div></div>
  <div class="lx-card" style="padding:16px"><div style="display:flex;align-items:center;gap:10px;margin-bottom:10px"><div style="width:36px;height:36px;border-radius:50%;background:var(--lx-purple);color:#fff;display:flex;align-items:center;justify-content:center;font-family:Bebas Neue,serif;font-size:16px">MJ</div><div><div class="lx-b bld">Maria J.</div><div class="lx-bxs cm">#11223344</div></div></div><span class="lx-chip pu">New</span><div class="lx-ir" style="margin-top:8px"><span class="lx-ik">Budget</span><span class="lx-iv cpu" style="font-size:14px">$38.2K</span></div></div>
</div></div>
```

### 69. Caseload Distribution
**File:** `crm/caseload-distribution.html`

```html
<div class="ds"><div class="dl">CASELOAD DISTRIBUTION / WORKLOAD BREAKDOWN</div>
<div class="lx-card" style="max-width:500px"><div class="lx-cmd" style="margin-bottom:12px">Coordinator Caseload Distribution</div>
<div style="display:flex;flex-direction:column;gap:8px">
<div style="display:flex;align-items:center;gap:12px"><div style="width:80px" class="lx-bsm bld">Ile K.</div><div style="flex:1;height:20px;background:rgba(0,0,0,.04);border-radius:var(--r-xs);overflow:hidden;display:flex"><div style="width:35%;background:var(--lx-pink);display:flex;align-items:center;justify-content:center"><span style="font-family:JetBrains Mono,monospace;font-size:7px;color:#fff;font-weight:700">14</span></div><div style="width:25%;background:var(--lx-cyan);display:flex;align-items:center;justify-content:center"><span style="font-family:JetBrains Mono,monospace;font-size:7px;color:var(--lx-black);font-weight:700">10</span></div><div style="width:15%;background:var(--lx-orange);display:flex;align-items:center;justify-content:center"><span style="font-family:JetBrains Mono,monospace;font-size:7px;color:#fff;font-weight:700">6</span></div></div><span class="lx-mmd">30</span></div>
<div style="display:flex;align-items:center;gap:12px"><div style="width:80px" class="lx-bsm bld">Sarah M.</div><div style="flex:1;height:20px;background:rgba(0,0,0,.04);border-radius:var(--r-xs);overflow:hidden;display:flex"><div style="width:30%;background:var(--lx-pink)"></div><div style="width:20%;background:var(--lx-cyan)"></div><div style="width:10%;background:var(--lx-orange)"></div></div><span class="lx-mmd">24</span></div>
<div style="display:flex;align-items:center;gap:12px"><div style="width:80px" class="lx-bsm bld">James T.</div><div style="flex:1;height:20px;background:rgba(0,0,0,.04);border-radius:var(--r-xs);overflow:hidden;display:flex"><div style="width:20%;background:var(--lx-pink)"></div><div style="width:25%;background:var(--lx-cyan)"></div><div style="width:5%;background:var(--lx-orange)"></div></div><span class="lx-mmd">18</span></div>
</div>
<div style="display:flex;gap:12px;margin-top:10px"><div style="display:flex;align-items:center;gap:4px"><div style="width:10px;height:10px;border-radius:2px;background:var(--lx-pink)"></div><span class="lx-bxs cm">Active</span></div><div style="display:flex;align-items:center;gap:4px"><div style="width:10px;height:10px;border-radius:2px;background:var(--lx-cyan)"></div><span class="lx-bxs cm">Review</span></div><div style="display:flex;align-items:center;gap:4px"><div style="width:10px;height:10px;border-radius:2px;background:var(--lx-orange)"></div><span class="lx-bxs cm">New</span></div></div></div></div>
```

### 70. Contact Relationship Map
**File:** `crm/contact-relationship-map.html`

```html
<div class="ds"><div class="dl">CONTACT RELATIONSHIP MINI-MAP / SUPPORT NETWORK</div>
<div class="lx-card" style="max-width:450px"><div class="lx-cmd" style="margin-bottom:12px">Support Network — Iona K.</div>
<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">
<div class="lx-acc" style="padding:12px"><div class="lx-eye cpk" style="margin-bottom:4px">PRIMARY CARER</div><div class="lx-b bld">Maria Karamacoski</div><div class="lx-bxs cm">Mother · Lives with participant</div><div style="margin-top:4px"><span class="lx-chip pk" style="font-size:6px">Daily Contact</span></div></div>
<div class="lx-acc cyn" style="padding:12px"><div class="lx-eye ccy" style="margin-bottom:4px">SUPPORT COORDINATOR</div><div class="lx-b bld">Ile Karamacoski</div><div class="lx-bxs cm">LIMITLESS Support Co.</div><div style="margin-top:4px"><span class="lx-chip cy" style="font-size:6px">Weekly</span></div></div>
<div class="lx-acc pur" style="padding:12px"><div class="lx-eye cpu" style="margin-bottom:4px">PLAN MANAGER</div><div class="lx-b bld">Plan Partners</div><div class="lx-bxs cm">Financial intermediary</div><div style="margin-top:4px"><span class="lx-chip pu" style="font-size:6px">Monthly</span></div></div>
<div class="lx-acc org" style="padding:12px"><div class="lx-eye cor" style="margin-bottom:4px">GUARDIAN</div><div class="lx-b bld">Saso Karamacoski</div><div class="lx-bxs cm">Father · Emergency contact</div><div style="margin-top:4px"><span class="lx-chip or" style="font-size:6px">As Needed</span></div></div>
</div></div></div>
```

### 71. Budget Envelope
**File:** `crm/budget-envelope.html`

```html
<div class="demo-section" style="max-width:600px">
  <div class="demo-label">BUDGET ENVELOPE — CATEGORY BREAKDOWN</div>
  <div class="lx-card tl">
    <div class="lx-cmd" style="margin-bottom:16px">NDIS Plan Budget Allocation</div>
    <div class="lx-pw">
      <div class="lx-ph"><span class="lx-pk2">Core Supports — $42,000</span><span class="lx-pv">78%</span></div>
      <div class="lx-pt tk"><div class="lx-pf" data-w="78%"></div></div>
      <div class="lx-bxs cm" style="margin-top:2px">$32,760 spent · $9,240 remaining</div>
    </div>
    <div class="lx-pw">
      <div class="lx-ph"><span class="lx-pk2">Capacity Building — $24,800</span><span class="lx-pv" style="color:var(--lx-cyan)">55%</span></div>
      <div class="lx-pt tk"><div class="lx-pf cy" data-w="55%"></div></div>
      <div class="lx-bxs cm" style="margin-top:2px">$13,640 spent · $11,160 remaining</div>
    </div>
    <div class="lx-pw">
      <div class="lx-ph"><span class="lx-pk2">Capital Supports — $5,600</span><span class="lx-pv" style="color:var(--lx-purple)">32%</span></div>
      <div class="lx-pt tk"><div class="lx-pf pu" data-w="32%"></div></div>
      <div class="lx-bxs cm" style="margin-top:2px">$1,792 spent · $3,808 remaining</div>
    </div>
    <div class="lx-div"></div>
    <div class="lx-ir"><span class="lx-ik">Total Plan Budget</span><span class="lx-iv">$72,400</span></div>
    <div class="lx-ir"><span class="lx-ik">Total Spent</span><span class="lx-iv" style="color:var(--lx-cyan)">$48,192</span></div>
    <div class="lx-ir"><span class="lx-ik">Remaining</span><span class="lx-iv" style="color:var(--lx-yellow)">$24,208</span></div>
  </div>
</div>
```

### 72. Spend Pacing
**File:** `crm/spend-pacing.html`

```html
<div class="ds"><div class="dl">SPEND PACING / BUDGET FORECAST</div>
<div class="lx-card" style="max-width:550px"><div class="lx-cmd" style="margin-bottom:4px">Budget Pacing — Plan Period</div>
<div class="lx-bxs cm" style="margin-bottom:12px">Comparing actual spend trajectory against ideal linear pacing</div>
<svg viewBox="0 0 440 180" style="width:100%">
  <line x1="40" y1="160" x2="420" y2="160" stroke="var(--lx-bdr)" stroke-width="1"/>
  <line x1="40" y1="10" x2="40" y2="160" stroke="var(--lx-bdr)" stroke-width="1"/>
  <line x1="40" y1="10" x2="420" y2="160" stroke="var(--lx-bdr2)" stroke-width="1" stroke-dasharray="6,4"/>
  <polyline points="40,155 80,145 120,130 160,118 200,100 240,82 280,60 320,48" fill="none" stroke="#FF2D7D" stroke-width="2.5" stroke-linecap="round"/>
  <circle cx="320" cy="48" r="4" fill="#FF2D7D" stroke="#fff" stroke-width="2"/>
  <text x="42" y="8" fill="var(--lx-txl)" font-family="JetBrains Mono" font-size="8">$72.4K</text>
  <text x="42" y="88" fill="var(--lx-txl)" font-family="JetBrains Mono" font-size="8">$36K</text>
  <text x="42" y="163" fill="var(--lx-txl)" font-family="JetBrains Mono" font-size="8">$0</text>
  <text x="325" y="44" fill="var(--lx-pink)" font-family="JetBrains Mono" font-size="9" font-weight="700">$48.2K</text>
</svg>
<div style="display:flex;gap:16px;margin-top:4px"><div style="display:flex;align-items:center;gap:4px"><div style="width:12px;height:3px;background:#FF2D7D;border-radius:2px"></div><span class="lx-bxs cm">Actual Spend</span></div><div style="display:flex;align-items:center;gap:4px"><div style="width:12px;height:3px;background:var(--lx-bdr2);border-radius:2px;border:1px dashed var(--lx-bdr2)"></div><span class="lx-bxs cm">Ideal Pacing</span></div></div>
<div class="lx-al wrn" style="margin-top:12px"><div><div class="lx-at">Over-Pacing Alert</div><div class="lx-ab">Spending is 12% ahead of ideal linear pacing. At current rate, budget may be exhausted 6 weeks before plan end.</div></div></div>
</div></div>
```

### 73. Claim Reconciliation
**File:** `crm/claim-reconciliation.html`

```html
<div class="ds"><div class="dl">CLAIM RECONCILIATION / INVOICE MATCHING</div>
<div class="lx-card" style="max-width:600px;padding:0;overflow:hidden">
<div style="padding:14px 20px;border-bottom:1px solid var(--lx-bdr);display:flex;justify-content:space-between;align-items:center"><div class="lx-cmd">Claim Reconciliation — April 2026</div><span class="lx-chip or">3 Discrepancies</span></div>
<table class="lx-tbl" style="border:none"><thead><tr><th>Provider</th><th>Claimed</th><th>Approved</th><th>Variance</th><th>Status</th></tr></thead>
<tbody>
<tr><td class="lx-tb">Therapy Plus</td><td class="lx-tm">$2,909.85</td><td class="lx-tm">$2,909.85</td><td class="lx-tm" style="color:var(--lx-txl)">$0</td><td><span class="lx-chip syw" style="font-size:6px">Matched</span></td></tr>
<tr><td class="lx-tb">MindCare</td><td class="lx-tm">$1,337.94</td><td class="lx-tm">$1,114.95</td><td class="lx-tm" style="color:var(--lx-pink)">-$222.99</td><td><span class="lx-chip or" style="font-size:6px">Disputed</span></td></tr>
<tr><td class="lx-tb">FitAbility</td><td class="lx-tm">$667.96</td><td class="lx-tm">$667.96</td><td class="lx-tm" style="color:var(--lx-txl)">$0</td><td><span class="lx-chip syw" style="font-size:6px">Matched</span></td></tr>
<tr><td class="lx-tb">SpeakEasy</td><td class="lx-tm">$581.97</td><td class="lx-tm">$387.98</td><td class="lx-tm" style="color:var(--lx-pink)">-$193.99</td><td><span class="lx-chip pk" style="font-size:6px">Review</span></td></tr>
</tbody></table></div></div>
```

### 74. Service Overlap Timeline
**File:** `crm/service-overlap-timeline.html`

```html
<div class="ds"><div class="dl">SERVICE PERIOD OVERLAP TIMELINE</div>
<div class="lx-card" style="max-width:600px"><div class="lx-cmd" style="margin-bottom:12px">Active Services — Plan Period</div>
<div style="display:grid;grid-template-columns:100px 1fr;gap:0;font-size:11px">
<div style="padding:4px 8px;border-bottom:1px solid var(--lx-bdr)" class="lx-eye">SERVICE</div>
<div style="display:flex;border-bottom:1px solid var(--lx-bdr);padding:4px 0"><span style="flex:1;text-align:center" class="lx-eye">JAN</span><span style="flex:1;text-align:center" class="lx-eye">MAR</span><span style="flex:1;text-align:center" class="lx-eye">MAY</span><span style="flex:1;text-align:center" class="lx-eye">JUL</span><span style="flex:1;text-align:center" class="lx-eye">SEP</span><span style="flex:1;text-align:center" class="lx-eye">NOV</span></div>
<div style="padding:8px 8px;font-weight:600">OT</div><div style="padding:8px 4px;position:relative"><div style="position:absolute;left:5%;top:50%;transform:translateY(-50%);width:90%;height:10px;background:var(--lx-pink);border-radius:5px;opacity:.8"></div></div>
<div style="padding:8px 8px;font-weight:600">Psychology</div><div style="padding:8px 4px;position:relative"><div style="position:absolute;left:10%;top:50%;transform:translateY(-50%);width:55%;height:10px;background:var(--lx-cyan);border-radius:5px;opacity:.8"></div></div>
<div style="padding:8px 8px;font-weight:600">Speech</div><div style="padding:8px 4px;position:relative"><div style="position:absolute;left:20%;top:50%;transform:translateY(-50%);width:40%;height:10px;background:var(--lx-purple);border-radius:5px;opacity:.8"></div></div>
<div style="padding:8px 8px;font-weight:600">Exercise</div><div style="padding:8px 4px;position:relative"><div style="position:absolute;left:0%;top:50%;transform:translateY(-50%);width:100%;height:10px;background:var(--lx-orange);border-radius:5px;opacity:.8"></div></div>
<div style="padding:8px 8px;font-weight:600">SC</div><div style="padding:8px 4px;position:relative"><div style="position:absolute;left:0%;top:50%;transform:translateY(-50%);width:100%;height:10px;background:var(--lx-blue);border-radius:5px;opacity:.8"></div></div>
</div></div></div>
```

### 75. Referral Pipeline
**File:** `crm/referral-pipeline.html`

```html
<div class="ds"><div class="dl">REFERRAL PIPELINE / APPROVAL WORKFLOW</div>
<div class="lx-card" style="max-width:600px"><div class="lx-cmd" style="margin-bottom:12px">Active Referral Pipeline</div>
<table class="lx-tbl">
  <thead><tr><th>Participant</th><th>Stage</th><th>Provider</th><th>Submitted</th><th>Status</th></tr></thead>
  <tbody>
    <tr><td class="lx-tb">Iona K.</td><td><span class="lx-chip spk">Active</span></td><td>Therapy Plus</td><td class="lx-bsm cm">10 Apr</td><td><span class="lx-chip spk">Complete</span></td></tr>
    <tr><td class="lx-tb">Saso C.</td><td><span class="lx-chip or">Intake</span></td><td>MindCare</td><td class="lx-bsm cm">15 Apr</td><td><span class="lx-chip or">Pending</span></td></tr>
    <tr><td class="lx-tb">Maria J.</td><td><span class="lx-chip cy">Assessment</span></td><td>FitAbility</td><td class="lx-bsm cm">18 Apr</td><td><span class="lx-chip cy">In Progress</span></td></tr>
    <tr><td class="lx-tb">Alex T.</td><td><span class="lx-chip pu">Referral</span></td><td>SpeakEasy</td><td class="lx-bsm cm">20 Apr</td><td><span class="lx-chip pu">New</span></td></tr>
  </tbody>
</table></div></div>
```

### 76. Assessment Delta Radar
**File:** `crm/assessment-delta-radar.html`

```html
<div class="ds"><div class="dl">ASSESSMENT DELTA — BEFORE/AFTER RADAR OVERLAY</div>
<div class="lx-card" style="max-width:400px;text-align:center"><div class="lx-cmd" style="margin-bottom:12px">WHODAS Assessment — 6-Month Delta</div>
<svg viewBox="0 0 280 260" style="width:100%;max-width:280px;margin:0 auto">
<polygon points="140,30 230,80 215,185 65,185 50,80" fill="none" stroke="var(--lx-bdr)" stroke-width="1"/>
<polygon points="140,60 200,90 190,165 90,165 80,90" fill="none" stroke="var(--lx-bdr)" stroke-width=".5" stroke-dasharray="3"/>
<polygon points="140,50 215,82 200,178 80,178 65,82" fill="rgba(255,45,125,.12)" stroke="#FF2D7D" stroke-width="2"/>
<polygon points="140,70 195,95 185,170 95,170 85,95" fill="rgba(0,212,255,.08)" stroke="#00D4FF" stroke-width="1.5" stroke-dasharray="4"/>
<circle cx="140" cy="50" r="3" fill="#FF2D7D"/><circle cx="215" cy="82" r="3" fill="#FF2D7D"/><circle cx="200" cy="178" r="3" fill="#FF2D7D"/><circle cx="80" cy="178" r="3" fill="#FF2D7D"/><circle cx="65" cy="82" r="3" fill="#FF2D7D"/>
<text x="140" y="20" text-anchor="middle" fill="var(--lx-txm)" font-family="JetBrains Mono" font-size="7" letter-spacing=".1em">COGNITION</text>
<text x="248" y="82" fill="var(--lx-txm)" font-family="JetBrains Mono" font-size="7">MOBILITY</text>
<text x="215" y="195" fill="var(--lx-txm)" font-family="JetBrains Mono" font-size="7">SELF-CARE</text>
<text x="55" y="195" text-anchor="end" fill="var(--lx-txm)" font-family="JetBrains Mono" font-size="7">SOCIAL</text>
<text x="35" y="82" text-anchor="end" fill="var(--lx-txm)" font-family="JetBrains Mono" font-size="7">LIFE ACTS</text>
</svg>
<div style="display:flex;gap:12px;justify-content:center;margin-top:8px"><div style="display:flex;align-items:center;gap:4px"><div style="width:10px;height:3px;background:#FF2D7D;border-radius:2px"></div><span class="lx-bxs cm">Current (Apr 2026)</span></div><div style="display:flex;align-items:center;gap:4px"><div style="width:10px;height:3px;background:#00D4FF;border-radius:2px"></div><span class="lx-bxs cm">Previous (Oct 2025)</span></div></div>
<div class="lx-al inf" style="text-align:left;margin-top:12px"><div><div class="lx-at">Improvement Detected</div><div class="lx-ab">Self-care and mobility scores improved by 12.1 and 8.2 points respectively since last assessment.</div></div></div>
</div></div>
```

### 77. Communication Timeline
**File:** `crm/communication-timeline.html`

```html
<div class="demo-section" style="max-width:500px">
  <div class="demo-label">COMMUNICATION TIMELINE</div>
  <div style="display:flex;flex-direction:column;gap:0">
    <div style="display:flex;gap:12px">
      <div style="display:flex;flex-direction:column;align-items:center">
        <div style="width:10px;height:10px;border-radius:50%;background:var(--lx-pink);flex-shrink:0"></div>
        <div style="width:2px;flex:1;background:var(--lx-bdr)"></div>
      </div>
      <div style="padding-bottom:16px;flex:1">
        <div class="lx-cmd" style="font-size:12px">Phone Call — Plan Review Discussion</div>
        <div class="lx-bxs cm" style="margin-top:2px">Discussed upcoming plan review with participant. Confirmed goals remain relevant.</div>
        <div class="lx-eye" style="margin-top:4px">21 APR 2026 · 10:30 AM · ILE KARAMACOSKI</div>
      </div>
    </div>
    <div style="display:flex;gap:12px">
      <div style="display:flex;flex-direction:column;align-items:center">
        <div style="width:10px;height:10px;border-radius:50%;background:var(--lx-cyan);flex-shrink:0"></div>
        <div style="width:2px;flex:1;background:var(--lx-bdr)"></div>
      </div>
      <div style="padding-bottom:16px;flex:1">
        <div class="lx-cmd" style="font-size:12px">Email — Service Agreement Renewal</div>
        <div class="lx-bxs cm" style="margin-top:2px">Sent service agreement renewal to Therapy Plus for OT services.</div>
        <div class="lx-eye" style="margin-top:4px">18 APR 2026 · 2:15 PM · ILE KARAMACOSKI</div>
      </div>
    </div>
    <div style="display:flex;gap:12px">
      <div style="display:flex;flex-direction:column;align-items:center">
        <div style="width:10px;height:10px;border-radius:50%;background:var(--lx-orange);flex-shrink:0"></div>
        <div style="width:2px;flex:1;background:var(--lx-bdr)"></div>
      </div>
      <div style="padding-bottom:16px;flex:1">
        <div class="lx-cmd" style="font-size:12px">In-Person Meeting — Home Visit</div>
        <div class="lx-bxs cm" style="margin-top:2px">Conducted home visit to assess current support needs and environmental safety.</div>
        <div class="lx-eye" style="margin-top:4px">15 APR 2026 · 9:00 AM · ILE KARAMACOSKI</div>
      </div>
    </div>
    <div style="display:flex;gap:12px">
      <div style="display:flex;flex-direction:column;align-items:center">
        <div style="width:10px;height:10px;border-radius:50%;background:var(--lx-purple);flex-shrink:0"></div>
      </div>
      <div style="flex:1">
        <div class="lx-cmd" style="font-size:12px">Case Note — Initial Plan Meeting</div>
        <div class="lx-bxs cm" style="margin-top:2px">Completed initial plan meeting. Established goals and service priorities.</div>
        <div class="lx-eye" style="margin-top:4px">10 APR 2026 · 11:00 AM · ILE KARAMACOSKI</div>
      </div>
    </div>
  </div>
</div>
```

### 78. Participant Hero
**File:** `crm/participant-hero.html`

```html
<div class="demo-section">
  <div class="demo-label">PARTICIPANT HERO CARD</div>
  <div class="lx-card dark ptop" style="max-width:600px">
    <div style="display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:12px">
      <div>
        <div class="lx-eye" style="color:var(--lx-pink);margin-bottom:6px">PARTICIPANT</div>
        <div style="font-family:Bebas Neue,serif;font-size:36px;line-height:.95;color:var(--lx-offwhite)">Iona Karamacoski</div>
        <div class="lx-mmd" style="color:var(--lx-cyan);margin-top:4px">NDIS #12345678</div>
      </div>
      <div style="text-align:right">
        <span class="lx-chip spk">Active Plan</span>
        <div class="lx-bxs" style="color:rgba(245,240,232,.5);margin-top:8px">01 Jan 2026 — 31 Dec 2026</div>
      </div>
    </div>
    <div class="lx-div" style="background:rgba(255,255,255,.07);margin:16px 0"></div>
    <div class="lx-krow" style="justify-content:flex-start;gap:32px">
      <div class="lx-k"><div class="lx-kv cpk">$72,400</div><div class="lx-kl" style="color:rgba(245,240,232,.5)">Total Budget</div></div>
      <div class="lx-k"><div class="lx-kv ccy">$48,230</div><div class="lx-kl" style="color:rgba(245,240,232,.5)">Spent</div></div>
      <div class="lx-k"><div class="lx-kv" style="color:var(--lx-yellow)">$24,170</div><div class="lx-kl" style="color:rgba(245,240,232,.5)">Remaining</div></div>
      <div class="lx-k"><div class="lx-kv cor">94</div><div class="lx-kl" style="color:rgba(245,240,232,.5)">Days Left</div></div>
    </div>
    <span class="lx-ghost inv" style="font-size:80px;right:10px;bottom:-10px">IONA</span>
  </div>
</div>
```

### 79. Goal Staircase
**File:** `crm/goal-staircase.html`

```html
<div class="demo-section" style="max-width:500px">
  <div class="demo-label">GOAL STAIRCASE — PROGRESS TRACKER</div>
  <div class="lx-card">
    <div class="lx-cmd" style="margin-bottom:12px">Participant Goals</div>
    <div style="display:flex;flex-direction:column;gap:10px">
      <div class="lx-acc">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px">
          <div class="lx-cmd">1. Improve Daily Living Skills</div>
          <span class="lx-chip spk">Achieved</span>
        </div>
        <div class="lx-pt"><div class="lx-pf" data-w="100%"></div></div>
      </div>
      <div class="lx-acc cyn">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px">
          <div class="lx-cmd">2. Increase Community Access</div>
          <span class="lx-chip cy">In Progress</span>
        </div>
        <div class="lx-pt"><div class="lx-pf cy" data-w="72%"></div></div>
      </div>
      <div class="lx-acc org">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px">
          <div class="lx-cmd">3. Employment Readiness</div>
          <span class="lx-chip or">At Risk</span>
        </div>
        <div class="lx-pt"><div class="lx-pf or" data-w="35%"></div></div>
      </div>
      <div class="lx-acc pur">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px">
          <div class="lx-cmd">4. Build Social Networks</div>
          <span class="lx-chip pu">Started</span>
        </div>
        <div class="lx-pt"><div class="lx-pf pu" data-w="18%"></div></div>
      </div>
    </div>
  </div>
</div>
```

### 80. Participant Timeline
**File:** `crm/participant-timeline.html`

```html
<div class="ds"><div class="dl">PARTICIPANT TIMELINE — KEY MILESTONES</div>
<div class="lx-card" style="max-width:600px"><div class="lx-cmd" style="margin-bottom:16px">Plan Lifecycle Timeline</div>
<div style="position:relative;padding-left:24px;border-left:2px solid var(--lx-bdr)">
<div style="margin-bottom:20px;position:relative"><div style="position:absolute;left:-31px;width:16px;height:16px;border-radius:50%;background:var(--lx-pink)"></div><div class="lx-csm cpk">01 Jan 2026</div><div class="lx-b bld" style="margin-top:2px">Plan Commenced</div><div class="lx-bxs cm">New plan activated — $72,400 total budget across Core, Capacity Building, Capital</div></div>
<div style="margin-bottom:20px;position:relative"><div style="position:absolute;left:-31px;width:16px;height:16px;border-radius:50%;background:var(--lx-cyan)"></div><div class="lx-csm ccy">15 Jan 2026</div><div class="lx-b bld" style="margin-top:2px">Service Agreements Signed</div><div class="lx-bxs cm">OT, Psychology, Exercise Physiology providers engaged</div></div>
<div style="margin-bottom:20px;position:relative"><div style="position:absolute;left:-31px;width:16px;height:16px;border-radius:50%;background:var(--lx-purple)"></div><div class="lx-csm cpu">01 Mar 2026</div><div class="lx-b bld" style="margin-top:2px">Mid-Plan Review</div><div class="lx-bxs cm">Progress review completed — 4 of 6 goals on track</div></div>
<div style="margin-bottom:20px;position:relative"><div style="position:absolute;left:-31px;width:16px;height:16px;border-radius:50%;background:var(--lx-orange)"></div><div class="lx-csm cor">15 Apr 2026</div><div class="lx-b bld" style="margin-top:2px">Change of Circumstances</div><div class="lx-bxs cm">Mobility decline identified — OT reassessment requested</div></div>
<div style="position:relative"><div style="position:absolute;left:-31px;width:16px;height:16px;border-radius:50%;background:var(--lx-bdr2)"></div><div class="lx-csm cm">31 Dec 2026</div><div class="lx-b bld" style="margin-top:2px;color:var(--lx-txm)">Plan End Date</div><div class="lx-bxs cm">Scheduled plan reassessment and renewal</div></div>
</div></div></div>
```

## S09 — CRM Operations & Billing

### 96. Caseload Table
**File:** `crm/caseload-table.html`

```html
<div class="ds"><div class="dl">CASELOAD TABLE WITH CHECK-IN RECENCY</div>
<div class="lx-card" style="max-width:650px;padding:0;overflow:hidden">
<table class="lx-tbl" style="border:none">
<thead><tr><th>Participant</th><th>NDIS #</th><th>Last Check-In</th><th>Budget %</th><th>Status</th><th>Priority</th></tr></thead>
<tbody>
<tr><td class="lx-tb">Iona K.</td><td style="font-family:JetBrains Mono,monospace;font-size:10px">12345678</td><td><span class="lx-chip spk" style="font-size:6px">2 days ago</span></td><td><div style="width:60px;height:4px;background:rgba(0,0,0,.06);border-radius:2px;display:inline-block;vertical-align:middle"><div style="width:68%;height:100%;background:var(--lx-pink);border-radius:2px"></div></div> <span class="lx-bxs">68%</span></td><td><span class="lx-chip spk">Active</span></td><td><span class="lx-chip pk">Critical</span></td></tr>
<tr><td class="lx-tb">Saso C.</td><td style="font-family:JetBrains Mono,monospace;font-size:10px">87654321</td><td><span class="lx-chip or" style="font-size:6px">2 weeks ago</span></td><td><div style="width:60px;height:4px;background:rgba(0,0,0,.06);border-radius:2px;display:inline-block;vertical-align:middle"><div style="width:45%;height:100%;background:var(--lx-cyan);border-radius:2px"></div></div> <span class="lx-bxs">45%</span></td><td><span class="lx-chip cy">Review</span></td><td><span class="lx-chip or">High</span></td></tr>
<tr><td class="lx-tb">Maria J.</td><td style="font-family:JetBrains Mono,monospace;font-size:10px">11223344</td><td><span class="lx-chip syw" style="font-size:6px">Yesterday</span></td><td><div style="width:60px;height:4px;background:rgba(0,0,0,.06);border-radius:2px;display:inline-block;vertical-align:middle"><div style="width:82%;height:100%;background:var(--lx-purple);border-radius:2px"></div></div> <span class="lx-bxs">82%</span></td><td><span class="lx-chip spk">Active</span></td><td><span class="lx-chip cy">Medium</span></td></tr>
<tr><td class="lx-tb">Alex T.</td><td style="font-family:JetBrains Mono,monospace;font-size:10px">99887766</td><td><span class="lx-chip sbk" style="font-size:6px">1 month ago</span></td><td><div style="width:60px;height:4px;background:rgba(0,0,0,.06);border-radius:2px;display:inline-block;vertical-align:middle"><div style="width:22%;height:100%;background:var(--lx-blue);border-radius:2px"></div></div> <span class="lx-bxs">22%</span></td><td><span class="lx-chip pu">New</span></td><td><span class="lx-chip bl">Low</span></td></tr>
</tbody></table></div></div>
```

### 97. Implementation Progress
**File:** `crm/implementation-progress.html`

```html
<div class="ds"><div class="dl">IMPLEMENTATION PROGRESS TABLE</div>
<div class="lx-card" style="max-width:600px;padding:0;overflow:hidden">
<table class="lx-tbl" style="border:none">
<thead><tr><th>Support Category</th><th>Provider</th><th>Status</th><th>Hours Used</th><th>Progress</th></tr></thead>
<tbody>
<tr><td class="lx-tb">Occupational Therapy</td><td>Therapy Plus</td><td><span class="lx-chip spk">Active</span></td><td style="font-family:JetBrains Mono,monospace;font-size:10px">28 / 36</td><td><div style="width:70px;height:6px;background:rgba(0,0,0,.06);border-radius:3px"><div style="width:78%;height:100%;background:var(--lx-pink);border-radius:3px"></div></div></td></tr>
<tr><td class="lx-tb">Psychology</td><td>MindCare</td><td><span class="lx-chip cy">Review</span></td><td style="font-family:JetBrains Mono,monospace;font-size:10px">10 / 16</td><td><div style="width:70px;height:6px;background:rgba(0,0,0,.06);border-radius:3px"><div style="width:62%;height:100%;background:var(--lx-cyan);border-radius:3px"></div></div></td></tr>
<tr><td class="lx-tb">Exercise Physiology</td><td>FitAbility</td><td><span class="lx-chip spk">Active</span></td><td style="font-family:JetBrains Mono,monospace;font-size:10px">38 / 45</td><td><div style="width:70px;height:6px;background:rgba(0,0,0,.06);border-radius:3px"><div style="width:84%;height:100%;background:var(--lx-purple);border-radius:3px"></div></div></td></tr>
<tr><td class="lx-tb">Speech Pathology</td><td>SpeakEasy</td><td><span class="lx-chip or">Pending</span></td><td style="font-family:JetBrains Mono,monospace;font-size:10px">0 / 24</td><td><div style="width:70px;height:6px;background:rgba(0,0,0,.06);border-radius:3px"><div style="width:0%;height:100%;background:var(--lx-orange);border-radius:3px"></div></div></td></tr>
<tr><td class="lx-tb">Support Coordination</td><td>LIMITLESS</td><td><span class="lx-chip spk">Active</span></td><td style="font-family:JetBrains Mono,monospace;font-size:10px">72 / 104</td><td><div style="width:70px;height:6px;background:rgba(0,0,0,.06);border-radius:3px"><div style="width:69%;height:100%;background:var(--lx-blue);border-radius:3px"></div></div></td></tr>
</tbody></table></div></div>
```

### 98. Services Table
**File:** `crm/services-table-provider.html`

```html
<div class="ds"><div class="dl">SERVICES TABLE WITH PROVIDER ASSIGNMENT</div>
<div class="lx-card" style="max-width:650px;padding:0;overflow:hidden">
<table class="lx-tbl" style="border:none"><thead><tr><th>Service</th><th>Provider</th><th>Frequency</th><th>Rate</th><th>Funding</th><th>Status</th></tr></thead>
<tbody>
<tr><td class="lx-tb">Occupational Therapy</td><td>Therapy Plus</td><td>Weekly · 1.5h</td><td class="lx-tm">$193.99/h</td><td><span class="lx-chip pk" style="font-size:6px">Core</span></td><td><span class="lx-dot" style="display:inline-block"></span></td></tr>
<tr><td class="lx-tb">Psychology</td><td>MindCare</td><td>Fortnightly · 1h</td><td class="lx-tm">$222.99/h</td><td><span class="lx-chip pu" style="font-size:6px">Cap Bld</span></td><td><span class="lx-dot cy" style="display:inline-block"></span></td></tr>
<tr><td class="lx-tb">Exercise Physiology</td><td>FitAbility</td><td>Weekly · 1h</td><td class="lx-tm">$166.99/h</td><td><span class="lx-chip pk" style="font-size:6px">Core</span></td><td><span class="lx-dot" style="display:inline-block"></span></td></tr>
<tr><td class="lx-tb">Speech Pathology</td><td>SpeakEasy</td><td>Monthly · 1h</td><td class="lx-tm">$193.99/h</td><td><span class="lx-chip pu" style="font-size:6px">Cap Bld</span></td><td><span class="lx-dot or" style="display:inline-block"></span></td></tr>
<tr><td class="lx-tb">Support Coordination</td><td>LIMITLESS</td><td>2h/week</td><td class="lx-tm">$100.14/h</td><td><span class="lx-chip pu" style="font-size:6px">Cap Bld</span></td><td><span class="lx-dot" style="display:inline-block"></span></td></tr>
<tr class="lx-ttot"><td colspan="3">Total Weekly Cost</td><td class="lx-tm" colspan="3">$1,240.00</td></tr>
</tbody></table></div></div>
```

### 99. Goals + Plan History
**File:** `crm/goals-plan-history.html`

```html
<div class="ds"><div class="dl">GOALS DISPLAY + PLAN HISTORY</div>
<div class="lx-card" style="max-width:500px"><div class="lx-cmd" style="margin-bottom:12px">Participant Goals — Current Plan</div>
<div style="display:flex;flex-direction:column;gap:8px">
<div style="display:flex;align-items:flex-start;gap:10px;padding:8px 0;border-bottom:1px solid rgba(0,0,0,.04)"><div style="font-family:Bebas Neue,serif;font-size:22px;color:var(--lx-pink);width:28px;flex-shrink:0">1</div><div><div class="lx-b bld">Improve daily living independence</div><div style="display:flex;gap:6px;margin-top:4px"><span class="lx-chip spk" style="font-size:6px">Achieved</span><span class="lx-bxs cm">Est. Dec 2025 → Achieved Mar 2026</span></div></div></div>
<div style="display:flex;align-items:flex-start;gap:10px;padding:8px 0;border-bottom:1px solid rgba(0,0,0,.04)"><div style="font-family:Bebas Neue,serif;font-size:22px;color:var(--lx-cyan);width:28px;flex-shrink:0">2</div><div><div class="lx-b bld">Increase community access and social participation</div><div style="display:flex;gap:6px;margin-top:4px"><span class="lx-chip cy" style="font-size:6px">In Progress</span><span class="lx-bxs cm">72% complete</span></div></div></div>
<div style="display:flex;align-items:flex-start;gap:10px;padding:8px 0;border-bottom:1px solid rgba(0,0,0,.04)"><div style="font-family:Bebas Neue,serif;font-size:22px;color:var(--lx-orange);width:28px;flex-shrink:0">3</div><div><div class="lx-b bld">Build capacity for employment readiness</div><div style="display:flex;gap:6px;margin-top:4px"><span class="lx-chip or" style="font-size:6px">At Risk</span><span class="lx-bxs cm">35% — behind schedule</span></div></div></div>
<div style="display:flex;align-items:flex-start;gap:10px;padding:8px 0"><div style="font-family:Bebas Neue,serif;font-size:22px;color:var(--lx-purple);width:28px;flex-shrink:0">4</div><div><div class="lx-b bld">Develop stronger social networks</div><div style="display:flex;gap:6px;margin-top:4px"><span class="lx-chip pu" style="font-size:6px">Started</span><span class="lx-bxs cm">18% complete</span></div></div></div>
</div>
<div class="lx-div"></div>
<div class="lx-eye" style="margin-bottom:6px">PLAN HISTORY</div>
<div class="lx-ir"><span class="lx-ik">Plan 3 (Current)</span><span class="lx-iv n">01 Jan 2026 — 31 Dec 2026</span></div>
<div class="lx-ir"><span class="lx-ik">Plan 2</span><span class="lx-iv n">01 Jul 2024 — 31 Dec 2025</span></div>
<div class="lx-ir"><span class="lx-ik">Plan 1</span><span class="lx-iv n">01 Jan 2023 — 30 Jun 2024</span></div>
</div></div>
```

### 100. Billable Hours Widget
**File:** `crm/billable-hours.html`

```html
<div class="ds"><div class="dl">BILLABLE HOURS COMPOSITE WIDGET</div>
<div class="lx-card dark" style="max-width:350px"><div class="lx-eye" style="color:var(--lx-pink);margin-bottom:6px">THIS WEEK</div>
<div style="display:flex;align-items:baseline;gap:8px;margin-bottom:12px"><div style="font-family:Bebas Neue,serif;font-size:48px;color:var(--lx-offwhite)">18.5</div><div style="font-family:JetBrains Mono,monospace;font-size:10px;color:rgba(245,240,232,.4)">HOURS</div></div>
<div style="display:flex;gap:3px;margin-bottom:12px">
<div style="flex:3;height:24px;background:var(--lx-pink);border-radius:4px 0 0 4px;display:flex;align-items:center;justify-content:center"><span style="font-family:JetBrains Mono,monospace;font-size:7px;color:#fff;font-weight:700">SC 8.5h</span></div>
<div style="flex:2;height:24px;background:var(--lx-cyan);display:flex;align-items:center;justify-content:center"><span style="font-family:JetBrains Mono,monospace;font-size:7px;color:var(--lx-black);font-weight:700">ADMIN 5h</span></div>
<div style="flex:1.5;height:24px;background:var(--lx-purple);display:flex;align-items:center;justify-content:center"><span style="font-family:JetBrains Mono,monospace;font-size:7px;color:#fff;font-weight:700">TRAVEL 3h</span></div>
<div style="flex:1;height:24px;background:var(--lx-orange);border-radius:0 4px 4px 0;display:flex;align-items:center;justify-content:center"><span style="font-family:JetBrains Mono,monospace;font-size:7px;color:#fff;font-weight:700">2h</span></div>
</div>
<div class="lx-ir" style="border-bottom-color:rgba(255,255,255,.07)"><span class="lx-ik" style="color:rgba(245,240,232,.5)">Billable Rate</span><span class="lx-iv" style="color:var(--lx-yellow)">$100.14</span></div>
<div class="lx-ir" style="border-bottom-color:rgba(255,255,255,.07)"><span class="lx-ik" style="color:rgba(245,240,232,.5)">Weekly Revenue</span><span class="lx-iv" style="color:var(--lx-pink)">$1,852</span></div>
<div class="lx-ir" style="border-bottom:none"><span class="lx-ik" style="color:rgba(245,240,232,.5)">vs Target (20h)</span><span style="font-family:JetBrains Mono,monospace;font-size:10px;color:var(--lx-orange)">▼ 1.5h under</span></div>
<span class="lx-ghost inv" style="font-size:80px;right:5px;bottom:-10px">18.5</span></div></div>
```

### 101. Task Creation Modal
**File:** `modals-drawers/task-creation-modal.html`

```html
<div class="ds"><div class="dl">TASK / NOTE CREATION MODAL</div>
<div style="position:relative;min-height:420px;background:rgba(13,13,13,.6);border-radius:var(--r-md);display:flex;align-items:center;justify-content:center;padding:20px">
<div style="background:var(--lx-card);border-radius:var(--r-lg);max-width:500px;width:100%;box-shadow:0 32px 80px rgba(0,0,0,.3);overflow:hidden">
<div style="height:5px;background:var(--lx-pink);border-radius:var(--r-lg) var(--r-lg) 0 0"></div>
<div style="padding:18px 20px 14px;display:flex;justify-content:space-between;align-items:flex-start;border-bottom:1px solid var(--lx-bdr)">
  <div><div class="lx-eye" style="color:var(--lx-pink);margin-bottom:2px">NEW TASK</div><div class="lx-clg">Create Task</div></div>
  <button style="width:32px;height:32px;border-radius:50%;border:none;background:rgba(13,13,13,.06);cursor:pointer;display:flex;align-items:center;justify-content:center;font-size:16px">✕</button>
</div>
<div style="padding:20px;display:flex;flex-direction:column;gap:12px">
  <div><div style="font-family:JetBrains Mono,monospace;font-size:9px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--lx-txm);margin-bottom:4px">Task Title <span style="color:var(--lx-pink)">*</span></div>
  <input type="text" placeholder="Enter task title..." style="width:100%;padding:10px 13px;border:1.5px solid var(--lx-bdr2);border-radius:var(--r-sm);font-family:Barlow,sans-serif;font-size:13px;outline:none"></div>
  <div><div style="font-family:JetBrains Mono,monospace;font-size:9px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--lx-txm);margin-bottom:4px">Description</div>
  <textarea placeholder="Add details..." rows="3" style="width:100%;padding:10px 13px;border:1.5px solid var(--lx-bdr2);border-radius:var(--r-sm);font-family:Barlow,sans-serif;font-size:13px;outline:none;resize:vertical"></textarea></div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px">
    <div><div style="font-family:JetBrains Mono,monospace;font-size:9px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--lx-txm);margin-bottom:4px">Priority</div>
    <div style="display:flex;gap:4px"><span class="lx-chip pk" style="cursor:pointer;padding:4px 10px">Critical</span><span class="lx-chip or" style="cursor:pointer;padding:4px 10px">High</span><span class="lx-chip cy" style="cursor:pointer;padding:4px 10px">Medium</span></div></div>
    <div><div style="font-family:JetBrains Mono,monospace;font-size:9px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--lx-txm);margin-bottom:4px">Due Date</div>
    <input type="date" style="width:100%;padding:8px 10px;border:1.5px solid var(--lx-bdr2);border-radius:var(--r-sm);font-family:Barlow,sans-serif;font-size:12px;outline:none"></div>
  </div>
  <div><div style="font-family:JetBrains Mono,monospace;font-size:9px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--lx-txm);margin-bottom:4px">Participant</div>
  <select style="width:100%;padding:10px 13px;border:1.5px solid var(--lx-bdr2);border-radius:var(--r-sm);font-family:Barlow,sans-serif;font-size:13px;outline:none"><option>Iona Karamacoski</option><option>Saso Cacoroski</option><option>Maria Johnson</option></select></div>
</div>
<div style="padding:14px 20px;border-top:1px solid var(--lx-bdr);display:flex;justify-content:flex-end;gap:8px">
  <button style="font-family:Barlow Condensed,sans-serif;font-weight:900;font-size:13px;text-transform:uppercase;letter-spacing:.06em;padding:10px 20px;border-radius:var(--r-sm);border:2px solid var(--lx-bdr2);background:transparent;cursor:pointer">Cancel</button>
  <button style="font-family:Barlow Condensed,sans-serif;font-weight:900;font-size:13px;text-transform:uppercase;letter-spacing:.06em;padding:10px 20px;border-radius:var(--r-sm);border:none;background:var(--lx-pink);color:#fff;cursor:pointer;box-shadow:0 4px 16px rgba(255,45,125,.3)">Create Task</button>
</div></div></div></div>
```

### 102. Dashboard Shell
**File:** `productivity/dashboard-shell.html`

```html
<div class="ds"><div class="dl">APPLICATION SHELL — SIDEBAR + DASHBOARD</div>
<div style="display:flex;border:1px solid var(--lx-bdr);border-radius:var(--r-lg);overflow:hidden;height:350px;max-width:700px">
  <div style="width:200px;background:var(--lx-card);border-right:1px solid var(--lx-bdr);padding:12px;flex-shrink:0">
    <div style="font-family:Bebas Neue,serif;font-size:14px;letter-spacing:.1em;margin-bottom:12px">LIMIT<span style="color:var(--lx-pink)">LESS</span></div>
    <div style="font-family:JetBrains Mono,monospace;font-size:8px;font-weight:700;letter-spacing:.16em;text-transform:uppercase;color:var(--lx-txl);padding:8px 0 4px">MAIN</div>
    <div style="display:flex;align-items:center;gap:8px;padding:8px;border-radius:var(--r-sm);background:rgba(255,45,125,.08);color:var(--lx-pink);font-size:12px;font-weight:700;margin-bottom:2px;position:relative"><div style="position:absolute;left:0;top:20%;bottom:20%;width:3px;border-radius:0 99px 99px 0;background:var(--lx-pink)"></div>◉ Dashboard</div>
    <div style="display:flex;align-items:center;gap:8px;padding:8px;font-size:12px;color:var(--lx-txm);margin-bottom:2px">◉ Participants</div>
    <div style="display:flex;align-items:center;gap:8px;padding:8px;font-size:12px;color:var(--lx-txm);margin-bottom:2px">◉ Calendar</div>
    <div style="height:1px;background:var(--lx-bdr);margin:6px 8px"></div>
    <div style="font-family:JetBrains Mono,monospace;font-size:8px;font-weight:700;letter-spacing:.16em;text-transform:uppercase;color:var(--lx-txl);padding:8px 0 4px">MANAGE</div>
    <div style="display:flex;align-items:center;gap:8px;padding:8px;font-size:12px;color:var(--lx-txm)">◉ Budget</div>
    <div style="display:flex;align-items:center;gap:8px;padding:8px;font-size:12px;color:var(--lx-txm)">◉ Reports</div>
  </div>
  <div style="flex:1;background:var(--lx-bg);padding:16px;overflow-y:auto">
    <div class="lx-clg" style="margin-bottom:12px">Dashboard</div>
    <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-bottom:12px">
      <div class="lx-card" style="padding:12px;text-align:center"><div class="lx-eye cpk" style="margin-bottom:4px">ACTIVE</div><div class="lx-stat cpk" style="font-size:28px">24</div></div>
      <div class="lx-card" style="padding:12px;text-align:center"><div class="lx-eye ccy" style="margin-bottom:4px">BUDGET</div><div class="lx-stat ccy" style="font-size:28px">$48K</div></div>
      <div class="lx-card" style="padding:12px;text-align:center"><div class="lx-eye cor" style="margin-bottom:4px">ALERTS</div><div class="lx-stat cor" style="font-size:28px">3</div></div>
    </div>
    <div class="lx-card" style="padding:12px"><div class="lx-cmd" style="margin-bottom:6px;font-size:11px">Recent Activity</div><div class="lx-bxs cm">Service agreement signed · 2h ago</div><div class="lx-bxs cm">Budget claim submitted · 5h ago</div></div>
  </div>
</div></div>
```

