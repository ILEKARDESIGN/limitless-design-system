# Foundation Patterns — Topbar, Cards, Nav, Typography, Buttons, Chips, Tables, Alerts

Copy these directly into output HTML. All CSS classes defined in core-css.md.
GitHub: https://github.com/ILEKARDESIGN/limitless-design-system

---

# Component Patterns — ALL 116 Render-Ready HTML Blocks

Copy these directly into output HTML. All CSS classes defined in core-css.md.
GitHub repo: https://github.com/ILEKARDESIGN/limitless-design-system

---

## S00 — Foundation & Navigation

### 1. Topbar
**File:** `foundation/topbar.html`

```html
<!-- Component: Topbar | Category: Foundation -->

<div class="demo-section">
  <div class="demo-label">TOPBAR — DEFAULT</div>
  <div class="lx-topbar">
    <div class="lx-tlogo">LIMIT<span>LESS</span> ∞</div>
    <div style="display:flex;gap:8px;align-items:center">
      <span class="lx-tmeta">DESIGN SYSTEM v3.0</span>
      <span class="lx-tbadge">BADGE</span>
      <span class="lx-tbadge pink">PINK</span>
      <span class="lx-tbadge cyan">CYAN</span>
    </div>
  </div>
  <div class="lx-stripe"></div>
</div>

<div class="demo-section">
  <div class="demo-label">TOPBAR — WITH ALERT BADGE</div>
  <div class="lx-topbar">
    <div style="display:flex;gap:12px;align-items:center">
      <span class="lx-tlogo">LIMIT<span>LESS</span></span>
      <span class="lx-tmeta">SUPPORT COORDINATION</span>
    </div>
    <div style="display:flex;gap:8px;align-items:center;flex-wrap:wrap">
      <span class="lx-tbadge">v3.0</span>
      <span class="lx-tbadge pink">35 Components</span>
      <span class="lx-tbadge cyan">All Verified</span>
      <span class="lx-tbadge alert">3 Alerts</span>
    </div>
  </div>
  <div class="lx-stripe" style="margin:0;border-radius:0 0 4px 4px"></div>
</div>
```

### 2. Bento Grid
**File:** `foundation/bento-grid.html`

```html
<!-- Component: Bento Grid | Category: Foundation -->

<div class="demo-section">
  <div class="demo-label">12-COLUMN BENTO GRID</div>
  <div class="lx-bento">
    <div class="lx-s12 lx-card dark" style="text-align:center;padding:12px"><span class="lx-csm">lx-s12</span></div>
    <div class="lx-s6 lx-card pink" style="text-align:center;padding:12px"><span class="lx-csm">lx-s6</span></div>
    <div class="lx-s6 lx-card cyan" style="text-align:center;padding:12px"><span class="lx-csm">lx-s6</span></div>
    <div class="lx-s4 lx-card yellow" style="text-align:center;padding:12px"><span class="lx-csm">lx-s4</span></div>
    <div class="lx-s4 lx-card" style="text-align:center;padding:12px"><span class="lx-csm">lx-s4</span></div>
    <div class="lx-s4 lx-card cream" style="text-align:center;padding:12px"><span class="lx-csm">lx-s4</span></div>
    <div class="lx-s3 lx-card" style="text-align:center;padding:12px"><span class="lx-csm">lx-s3</span></div>
    <div class="lx-s3 lx-card" style="text-align:center;padding:12px"><span class="lx-csm">lx-s3</span></div>
    <div class="lx-s3 lx-card" style="text-align:center;padding:12px"><span class="lx-csm">lx-s3</span></div>
    <div class="lx-s3 lx-card" style="text-align:center;padding:12px"><span class="lx-csm">lx-s3</span></div>
    <div class="lx-s8 lx-card tl" style="text-align:center;padding:12px"><span class="lx-csm">lx-s8 tl</span></div>
    <div class="lx-s4 lx-card br lx-r2" style="text-align:center;padding:12px"><span class="lx-csm">lx-s4 br lx-r2</span></div>
  </div>
</div>
```

### 3. Rainbow Stripe
**File:** `foundation/stripe.html`

```html
<!-- Component: Rainbow Stripe | Category: Foundation -->

<div class="demo-section">
  <div class="demo-label">GRADIENT STRIPE — DEFAULT (5px)</div>
  <div class="lx-stripe"></div>
</div>

<div class="demo-section" style="margin-top:24px">
  <div class="demo-label">GRADIENT STRIPE — THICK (10px)</div>
  <div class="lx-stripe" style="height:10px;border-radius:4px"></div>
</div>
```

### 4. Suite Hero
**File:** `foundation/hero.html`

```html
<!-- Component: Suite Hero | Category: Foundation -->

<div class="demo-section">
  <div class="demo-label">SUITE HERO — DARK VARIANT</div>
  <div style="background:var(--lx-black);color:var(--lx-offwhite);border-radius:var(--r-lg);padding:40px;position:relative;overflow:hidden;text-align:center">
    <div class="lx-eye" style="color:var(--lx-pink);margin-bottom:8px">LIMITLESS SUPPORT CO. ∞ DESIGN SYSTEM v3.0</div>
    <div style="font-family:Bebas Neue,serif;font-size:clamp(38px,7vw,76px);line-height:.9">PARTICIPANT<br>OVERVIEW</div>
    <div class="lx-cmd" style="color:var(--lx-pink);margin-top:12px">Iona Karamacoski · NDIS #12345678</div>
    <div class="lx-bsm cm" style="max-width:500px;margin:12px auto 0">Comprehensive dashboard for participant support coordination, budget tracking, and goal management.</div>
    <div style="position:absolute;right:-10px;bottom:-30px;font-family:Bebas Neue,serif;font-size:140px;color:rgba(255,255,255,.03);line-height:.85;pointer-events:none">LIMITLESS</div>
  </div>
</div>

<div class="demo-section">
  <div class="demo-label">SUITE HERO — MINIMAL</div>
  <div style="text-align:center;padding:30px 10px">
    <div class="lx-eye" style="color:var(--lx-pink);margin-bottom:8px">LIMITLESS SUPPORT CO.</div>
    <div style="font-family:Bebas Neue,serif;font-size:clamp(32px,6vw,56px);line-height:.9">WEEKLY SCHEDULE</div>
    <div class="lx-bsm cm" style="margin-top:8px">Thursday Meal Prep & Activities</div>
  </div>
</div>
```

### 5. Footer
**File:** `foundation/footer.html`

```html
<div class="ds"><div class="dl">FOOTER — DARK VARIANT</div>
<div style="background:var(--lx-navy);color:var(--lx-offwhite);border-radius:var(--r-lg);padding:28px;position:relative;overflow:hidden">
  <div style="display:flex;justify-content:space-between;flex-wrap:wrap;gap:20px">
    <div><div style="font-family:Bebas Neue,serif;font-size:24px;letter-spacing:.1em">LIMIT<span style="color:var(--lx-pink)">LESS</span> ∞</div>
    <div style="font-family:JetBrains Mono,monospace;font-size:8px;letter-spacing:.12em;text-transform:uppercase;color:rgba(245,240,232,.4);margin-top:6px">SUPPORT COORDINATION · NDIS · 2026</div></div>
    <div style="text-align:right"><div class="lx-csm" style="color:rgba(245,240,232,.5)">Ile Karamacoski</div>
    <div style="font-family:JetBrains Mono,monospace;font-size:9px;color:var(--lx-cyan);margin-top:4px">ile.kar@limitlesssupportco.com.au</div>
    <div style="font-family:JetBrains Mono,monospace;font-size:9px;color:rgba(245,240,232,.4);margin-top:2px">+61 421 742 108</div></div>
  </div>
  <div style="height:1px;background:rgba(255,255,255,.06);margin:16px 0"></div>
  <div style="display:flex;justify-content:space-between;flex-wrap:wrap;gap:8px;font-size:10px;color:rgba(245,240,232,.35)">
    <span>© 2026 LIMITLESS Support Co. All rights reserved.</span><span>ABN XX XXX XXX XXX · NDIS Registered Provider</span>
  </div>
</div></div>
```

### 6. Colour Tokens
**File:** `foundation/colour-tokens.html`

```html
<div class="ds"><div class="dl">COLOUR PALETTE — ALL TOKENS</div>
<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(120px,1fr));gap:8px">
  <div style="background:#FF2D7D;border-radius:var(--r-sm);height:80px;padding:8px;display:flex;flex-direction:column;justify-content:flex-end"><span style="font-family:JetBrains Mono,monospace;font-size:8px;color:#fff;font-weight:700;letter-spacing:.1em">--lx-pink<br>#FF2D7D</span></div>
  <div style="background:#CCFF00;border-radius:var(--r-sm);height:80px;padding:8px;display:flex;flex-direction:column;justify-content:flex-end"><span style="font-family:JetBrains Mono,monospace;font-size:8px;color:#0D0D0D;font-weight:700;letter-spacing:.1em">--lx-yellow<br>#CCFF00</span></div>
  <div style="background:#FF6600;border-radius:var(--r-sm);height:80px;padding:8px;display:flex;flex-direction:column;justify-content:flex-end"><span style="font-family:JetBrains Mono,monospace;font-size:8px;color:#fff;font-weight:700;letter-spacing:.1em">--lx-orange<br>#FF6600</span></div>
  <div style="background:#00D4FF;border-radius:var(--r-sm);height:80px;padding:8px;display:flex;flex-direction:column;justify-content:flex-end"><span style="font-family:JetBrains Mono,monospace;font-size:8px;color:#0D0D0D;font-weight:700;letter-spacing:.1em">--lx-cyan<br>#00D4FF</span></div>
  <div style="background:#2979FF;border-radius:var(--r-sm);height:80px;padding:8px;display:flex;flex-direction:column;justify-content:flex-end"><span style="font-family:JetBrains Mono,monospace;font-size:8px;color:#fff;font-weight:700;letter-spacing:.1em">--lx-blue<br>#2979FF</span></div>
  <div style="background:#B14EFF;border-radius:var(--r-sm);height:80px;padding:8px;display:flex;flex-direction:column;justify-content:flex-end"><span style="font-family:JetBrains Mono,monospace;font-size:8px;color:#fff;font-weight:700;letter-spacing:.1em">--lx-purple<br>#B14EFF</span></div>
  <div style="background:#0D0D0D;border-radius:var(--r-sm);height:80px;padding:8px;display:flex;flex-direction:column;justify-content:flex-end"><span style="font-family:JetBrains Mono,monospace;font-size:8px;color:#F5F0E8;font-weight:700;letter-spacing:.1em">--lx-black<br>#0D0D0D</span></div>
  <div style="background:#F5F0E8;border:1px solid rgba(0,0,0,.1);border-radius:var(--r-sm);height:80px;padding:8px;display:flex;flex-direction:column;justify-content:flex-end"><span style="font-family:JetBrains Mono,monospace;font-size:8px;color:#0D0D0D;font-weight:700;letter-spacing:.1em">--lx-offwhite<br>#F5F0E8</span></div>
  <div style="background:#FAF7F2;border:1px solid rgba(0,0,0,.08);border-radius:var(--r-sm);height:80px;padding:8px;display:flex;flex-direction:column;justify-content:flex-end"><span style="font-family:JetBrains Mono,monospace;font-size:8px;color:#0D0D0D;font-weight:700;letter-spacing:.1em">--lx-cream<br>#FAF7F2</span></div>
  <div style="background:#0A0F1C;border-radius:var(--r-sm);height:80px;padding:8px;display:flex;flex-direction:column;justify-content:flex-end"><span style="font-family:JetBrains Mono,monospace;font-size:8px;color:#F5F0E8;font-weight:700;letter-spacing:.1em">--lx-navy<br>#0A0F1C</span></div>
</div></div>
```

### 7. Ticker
**File:** `foundation/ticker.html`

```html
<!-- Component: Ticker | Category: Foundation -->

<div class="demo-section">
  <div class="demo-label">SCROLLING TICKER</div>
  <div class="lx-ticker">
    <div class="lx-ti">
      <span class="lx-tit">PLAN REVIEW DUE 15 MAY <span class="lx-ts">∞</span> BUDGET 68% UTILISED <span class="lx-ts">∞</span> 3 SERVICE AGREEMENTS ACTIVE <span class="lx-ts">∞</span> NEXT MEETING 28 APR <span class="lx-ts">∞</span></span>
      <span class="lx-tit">PLAN REVIEW DUE 15 MAY <span class="lx-ts">∞</span> BUDGET 68% UTILISED <span class="lx-ts">∞</span> 3 SERVICE AGREEMENTS ACTIVE <span class="lx-ts">∞</span> NEXT MEETING 28 APR <span class="lx-ts">∞</span></span>
    </div>
  </div>
</div>
```

### 8. Dividers
**File:** `foundation/dividers.html`

```html
<!-- Component: Dividers | Category: Foundation -->

<div class="demo-section" style="max-width:500px">
  <div class="demo-label">DIVIDER — THIN (DEFAULT)</div>
  <div class="lx-div"></div>
  <div class="demo-label" style="margin-top:20px">DIVIDER — THICK</div>
  <div class="lx-div tk"></div>
</div>
```

### 9. Type Scale
**File:** `typography/type-scale.html`

```html
<!-- Component: Type Scale | Category: Typography -->

<div class="demo-section">
  <div class="demo-label">BEBAS NEUE — DISPLAY / KPI</div>
  <div style="font-family:Bebas Neue,serif;font-size:80px;line-height:.9;letter-spacing:.01em">.lx-xl — 80px</div>
  <div style="font-family:Bebas Neue,serif;font-size:52px;line-height:1;letter-spacing:.01em;margin-top:8px">.lx-stat — 52px</div>
  <div style="font-family:Bebas Neue,serif;font-size:24px;line-height:1;margin-top:8px">.lx-dsm — 24px</div>
  <div style="font-family:Bebas Neue,serif;font-size:110px;line-height:.85;color:rgba(0,0,0,.025);margin-top:8px">.lx-ghost — 110px (2.5% opacity)</div>
</div>

<div class="demo-section">
  <div class="demo-label">BARLOW CONDENSED 900 — HEADINGS</div>
  <div class="lx-cxl">.lx-cxl — 28px condensed heading</div>
  <div class="lx-clg" style="margin-top:6px">.lx-clg — 20px condensed heading</div>
  <div class="lx-cmd" style="margin-top:6px">.lx-cmd — 15px condensed heading</div>
  <div class="lx-csm" style="margin-top:6px">.lx-csm — 12px condensed heading</div>
</div>

<div class="demo-section">
  <div class="demo-label">BARLOW — BODY TEXT</div>
  <div class="lx-blg">.lx-blg — 15px body large: The quick brown fox jumps over the lazy dog.</div>
  <div class="lx-b" style="margin-top:6px">.lx-b — 13px body: The quick brown fox jumps over the lazy dog.</div>
  <div class="lx-bsm" style="margin-top:6px">.lx-bsm — 11px body small: The quick brown fox jumps over the lazy dog.</div>
  <div class="lx-bxs" style="margin-top:6px">.lx-bxs — 10px body extra small: The quick brown fox jumps over the lazy dog.</div>
</div>

<div class="demo-section">
  <div class="demo-label">JETBRAINS MONO — DATA / META</div>
  <div class="lx-mlg">.lx-mlg — 13px mono: $48,230.00</div>
  <div class="lx-mmd" style="margin-top:6px">.lx-mmd — 11px mono: PLAN #12345678</div>
  <div style="font-family:JetBrains Mono,monospace;font-size:9px;letter-spacing:.12em;text-transform:uppercase;margin-top:6px">.lx-msm — 9px mono: LAST UPDATED 21 APR 2026</div>
  <div class="lx-eye" style="margin-top:6px">.lx-eye — 8px eyebrow: SUPPORT COORDINATION</div>
</div>

<div class="demo-section">
  <div class="demo-label">TEXT COLOUR UTILITIES</div>
  <div class="demo-row">
    <span class="cpk lx-cmd">cpk (pink)</span>
    <span class="cyw lx-cmd" style="background:var(--lx-black);padding:4px 8px;border-radius:4px">cyw (yellow)</span>
    <span class="ccy lx-cmd">ccy (cyan)</span>
    <span class="cor lx-cmd">cor (orange)</span>
    <span class="cpu lx-cmd">cpu (purple)</span>
    <span class="cbl lx-cmd">cbl (blue)</span>
    <span class="cm lx-cmd">cm (muted)</span>
    <span class="cl lx-cmd">cl (light)</span>
  </div>
</div>
```

### 10. Section Headings
**File:** `typography/section-headings.html`

```html
<!-- Component: Section Headings | Category: Typography -->

<div class="demo-section">
  <div class="demo-label">INLINE HIGHLIGHT HEADINGS (.lx-sh)</div>
  <div style="margin-bottom:16px"><div class="lx-sh v1"><span>V1 — PINK BG / YELLOW TEXT</span></div></div>
  <div style="margin-bottom:16px"><div class="lx-sh v2"><span>V2 — YELLOW BG / PINK TEXT</span></div></div>
  <div style="margin-bottom:16px"><div class="lx-sh v3"><span>V3 — PINK BG / WHITE TEXT</span></div></div>
  <div style="margin-bottom:16px"><div class="lx-sh v4"><span>V4 — YELLOW BG / NAVY TEXT</span></div></div>
</div>

<div class="demo-section">
  <div class="demo-label">UNDERLINE HEADINGS</div>
  <div style="margin-bottom:16px"><div class="lx-sh pk">PINK UNDERLINE HEADING</div></div>
  <div style="margin-bottom:16px"><div class="lx-sh cy">CYAN UNDERLINE HEADING</div></div>
  <div style="margin-bottom:16px"><div class="lx-sh yw">YELLOW UNDERLINE HEADING</div></div>
  <div style="margin-bottom:16px"><div class="lx-sh or">ORANGE UNDERLINE HEADING</div></div>
</div>
```

### 11. Card Variants
**File:** `cards/card-variants.html`

```html
<!-- Component: Card Variants | Category: Cards -->

<div class="demo-section">
  <div class="demo-label">CARD COLOUR VARIANTS</div>
  <div class="lx-bento">
    <div class="lx-s4 lx-card tl">
      <div class="lx-eye" style="color:var(--lx-pink);margin-bottom:6px">WHITE CARD</div>
      <div class="lx-cmd">Default • TL Radius</div>
      <div class="lx-bsm cm" style="margin-top:6px">Standard white card with asymmetric top-left XL corner radius.</div>
      <span class="lx-ghost">LX</span>
    </div>
    <div class="lx-s4 lx-card dark tr">
      <div class="lx-eye" style="color:var(--lx-pink);margin-bottom:6px">DARK CARD</div>
      <div class="lx-cmd" style="color:var(--lx-offwhite)">Black BG • TR Radius</div>
      <div class="lx-bsm" style="color:rgba(245,240,232,.6);margin-top:6px">Dark card variant on #0D0D0D background.</div>
      <span class="lx-ghost inv">LX</span>
    </div>
    <div class="lx-s4 lx-card pink bl">
      <div class="lx-eye" style="color:rgba(255,255,255,.7);margin-bottom:6px">PINK CARD</div>
      <div class="lx-cmd">Primary Brand • BL Radius</div>
      <div class="lx-bsm" style="color:rgba(255,255,255,.8);margin-top:6px">Primary pink #FF2D7D card.</div>
    </div>
    <div class="lx-s4 lx-card yellow br">
      <div class="lx-eye" style="color:rgba(0,0,0,.4);margin-bottom:6px">YELLOW CARD</div>
      <div class="lx-cmd">Secondary • BR Radius</div>
      <div class="lx-bsm" style="color:rgba(0,0,0,.6);margin-top:6px">Secondary yellow #CCFF00 card.</div>
    </div>
    <div class="lx-s4 lx-card cyan ptop">
      <div class="lx-eye" style="color:rgba(0,0,0,.4);margin-bottom:6px">CYAN CARD</div>
      <div class="lx-cmd">Info • Ptop Radius</div>
      <div class="lx-bsm" style="color:rgba(0,0,0,.6);margin-top:6px">Cyan #00D4FF card.</div>
    </div>
    <div class="lx-s4 lx-card cream pbot">
      <div class="lx-eye" style="color:var(--lx-pink);margin-bottom:6px">CREAM CARD</div>
      <div class="lx-cmd">Subtle • Pbot Radius</div>
      <div class="lx-bsm cm" style="margin-top:6px">Cream #FAF7F2 card.</div>
    </div>
    <div class="lx-s6 lx-card navy">
      <div class="lx-eye" style="color:var(--lx-cyan);margin-bottom:6px">NAVY CARD</div>
      <div class="lx-cmd" style="color:var(--lx-offwhite)">Footer Variant</div>
      <div class="lx-bsm" style="color:rgba(245,240,232,.6);margin-top:6px">Navy #0A0F1C card.</div>
    </div>
  </div>
</div>
```

### 12. Accent Cards
**File:** `cards/accent-cards.html`

```html
<!-- Component: Accent Cards | Category: Cards -->

<div class="demo-section">
  <div class="demo-label">ACCENT CARDS — LEFT BORDER VARIANTS</div>
  <div style="display:flex;flex-direction:column;gap:10px;max-width:500px">
    <div class="lx-acc">
      <div class="lx-cmd">Pink Accent (Default)</div>
      <div class="lx-bsm cm">Left border uses --lx-pink. Background is cream.</div>
    </div>
    <div class="lx-acc yel">
      <div class="lx-cmd">Yellow Accent</div>
      <div class="lx-bsm cm">Left border uses --lx-yellow.</div>
    </div>
    <div class="lx-acc cyn">
      <div class="lx-cmd">Cyan Accent</div>
      <div class="lx-bsm cm">Left border uses --lx-cyan.</div>
    </div>
    <div class="lx-acc org">
      <div class="lx-cmd">Orange Accent</div>
      <div class="lx-bsm cm">Left border uses --lx-orange.</div>
    </div>
    <div class="lx-acc pur">
      <div class="lx-cmd">Purple Accent</div>
      <div class="lx-bsm cm">Left border uses --lx-purple.</div>
    </div>
    <div class="lx-acc blu">
      <div class="lx-cmd">Blue Accent</div>
      <div class="lx-bsm cm">Left border uses --lx-blue.</div>
    </div>
  </div>
</div>
```

### 13. Dark Box
**File:** `cards/dark-box.html`

```html
<!-- Component: Dark Box | Category: Cards -->

<div class="demo-section">
  <div class="demo-label">DARK BOX — INFO DISPLAY</div>
  <div class="lx-dbox" style="max-width:400px">
    <div class="lx-dtitle">Participant Summary</div>
    <div class="lx-ir"><span class="lx-ik">NDIS Number</span><span class="lx-iv n" style="color:var(--lx-offwhite)">12345678</span></div>
    <div class="lx-ir"><span class="lx-ik">Plan Start</span><span class="lx-iv n" style="color:var(--lx-offwhite)">01 Jan 2026</span></div>
    <div class="lx-ir"><span class="lx-ik">Plan End</span><span class="lx-iv n" style="color:var(--lx-offwhite)">31 Dec 2026</span></div>
    <div class="lx-ir"><span class="lx-ik">Budget Used</span><span class="lx-iv">$48,230</span></div>
    <div class="lx-ir"><span class="lx-ik">Status</span><span class="lx-iv n"><a style="color:var(--lx-cyan)">Active</a></span></div>
  </div>
</div>
```

### 14. KPI Stat Card
**File:** `cards/kpi-card.html`

```html
<!-- Component: KPI Stat Card | Category: Cards -->

<div class="demo-section">
  <div class="demo-label">KPI STAT CARDS</div>
  <div class="lx-bento">
    <div class="lx-s3 lx-card tl" style="text-align:center">
      <div class="lx-eye" style="color:var(--lx-pink);margin-bottom:6px">ACTIVE GOALS</div>
      <div class="lx-stat cpk">6</div>
      <div style="font-family:JetBrains Mono,monospace;font-size:9px;color:var(--lx-pink);margin-top:4px">▲ +2 THIS QUARTER</div>
      <span class="lx-ghost">6</span>
    </div>
    <div class="lx-s3 lx-card dark tr" style="text-align:center">
      <div class="lx-eye" style="color:var(--lx-cyan);margin-bottom:6px">BUDGET USED</div>
      <div class="lx-stat ccy">$48.2K</div>
      <div style="font-family:JetBrains Mono,monospace;font-size:9px;color:var(--lx-cyan);margin-top:4px">68% OF ALLOCATION</div>
      <span class="lx-ghost inv">$</span>
    </div>
    <div class="lx-s3 lx-card" style="text-align:center">
      <div class="lx-eye" style="color:var(--lx-purple);margin-bottom:6px">PLAN PROGRESS</div>
      <div class="lx-stat cpu">72%</div>
      <div style="font-family:JetBrains Mono,monospace;font-size:9px;color:var(--lx-purple);margin-top:4px">▲ +8% FROM LAST REVIEW</div>
    </div>
    <div class="lx-s3 lx-card pink bl" style="text-align:center">
      <div class="lx-eye" style="color:rgba(255,255,255,.7);margin-bottom:6px">DAYS REMAINING</div>
      <div class="lx-stat" style="color:#fff">94</div>
      <div style="font-family:JetBrains Mono,monospace;font-size:9px;color:rgba(255,255,255,.7);margin-top:4px">PLAN ENDS 31 DEC 2026</div>
    </div>
  </div>
</div>
```

### 15. Responsibility Cards
**File:** `cards/responsibility-cards.html`

```html
<!-- Component: Responsibility Cards | Category: Cards -->

<div class="demo-section" style="max-width:500px">
  <div class="demo-label">RESPONSIBILITY CARDS — ENTITY TAG VARIANTS</div>
  <div class="resp sc">
    <span class="resp-tag t-sc">Support Coordination</span>
    <div class="lx-cmd">Plan Implementation</div>
    <div class="lx-bsm cm">Responsible for coordinating all service providers and monitoring plan utilization.</div>
  </div>
  <div class="resp school">
    <span class="resp-tag t-school">School</span>
    <div class="lx-cmd">Education Support</div>
    <div class="lx-bsm cm">School provides in-class support and modified curriculum.</div>
  </div>
  <div class="resp both">
    <span class="resp-tag t-both">Shared</span>
    <div class="lx-cmd">Transition Planning</div>
    <div class="lx-bsm cm">Joint responsibility between SC and school for transition to adult services.</div>
  </div>
  <div class="resp gov">
    <span class="resp-tag t-gov">Government</span>
    <div class="lx-cmd">NDIA Funding Decision</div>
    <div class="lx-bsm cm">NDIA responsible for plan approval and funding allocation.</div>
  </div>
  <div class="resp warn">
    <span class="resp-tag t-warn">Alert</span>
    <div class="lx-cmd">Risk Identified</div>
    <div class="lx-bsm cm">Potential service gap identified. Immediate escalation required.</div>
  </div>
</div>
```

### 16. Numbered Recommendation Cards
**File:** `cards/numbered-rec.html`

```html
<!-- Component: Numbered Recommendation Cards | Category: Cards -->

<div class="demo-section" style="max-width:500px">
  <div class="demo-label">NUMBERED RECOMMENDATION CARDS</div>
  <div class="rec">
    <div class="rec-num cpk">01</div>
    <div class="lx-cmd">Increase Support Worker Hours</div>
    <div class="lx-bsm cm" style="margin-top:6px">Recommend increasing from 10 to 15 hours per week to address deteriorating daily living skills. Aligned with Section 34(1)(aa) of the NDIS Act.</div>
  </div>
  <div class="rec">
    <div class="rec-num ccy">02</div>
    <div class="lx-cmd">Occupational Therapy Assessment</div>
    <div class="lx-bsm cm" style="margin-top:6px">Updated OT assessment required to evaluate home modification needs following recent mobility decline.</div>
  </div>
  <div class="rec">
    <div class="rec-num cor">03</div>
    <div class="lx-cmd">Transport Funding Review</div>
    <div class="lx-bsm cm" style="margin-top:6px">Current transport allocation insufficient for medical appointments. Request increase from $3,120 to $5,200.</div>
  </div>
</div>
```

### 17. Chips & Badges
**File:** `chips-badges/chips.html`

```html
<!-- Component: Chips & Badges | Category: Chips -->

<div class="demo-section">
  <div class="demo-label">OUTLINED CHIPS — 8 COLOUR VARIANTS</div>
  <div class="demo-row">
    <span class="lx-chip pk">Pink</span>
    <span class="lx-chip yw">Yellow</span>
    <span class="lx-chip cy">Cyan</span>
    <span class="lx-chip or">Orange</span>
    <span class="lx-chip pu">Purple</span>
    <span class="lx-chip bl">Blue</span>
    <span class="lx-chip gn">Green</span>
    <span class="lx-chip dk">Dark</span>
  </div>
</div>

<div class="demo-section">
  <div class="demo-label">SOLID CHIPS — 4 VARIANTS</div>
  <div class="demo-row">
    <span class="lx-chip spk">Solid Pink</span>
    <span class="lx-chip syw">Solid Yellow</span>
    <span class="lx-chip scy">Solid Cyan</span>
    <span class="lx-chip sbk">Solid Black</span>
  </div>
</div>

<div class="demo-section">
  <div class="demo-label">TOPBAR BADGES</div>
  <div style="background:var(--lx-black);padding:12px;border-radius:var(--r-md);display:inline-flex;gap:8px;flex-wrap:wrap">
    <span class="lx-tbadge">Default (Yellow)</span>
    <span class="lx-tbadge pink">Pink</span>
    <span class="lx-tbadge cyan">Cyan</span>
    <span class="lx-tbadge alert">Alert (Orange)</span>
  </div>
</div>

<div class="demo-section">
  <div class="demo-label">STATUS DOTS</div>
  <div class="demo-row" style="align-items:center">
    <span class="lx-dot"></span> <span class="lx-bsm">Pink (default)</span>
    <span class="lx-dot pulse" style="margin-left:16px"></span> <span class="lx-bsm">Pulsing</span>
    <span class="lx-dot gn" style="margin-left:16px"></span> <span class="lx-bsm">Green</span>
    <span class="lx-dot cy" style="margin-left:16px"></span> <span class="lx-bsm">Cyan</span>
    <span class="lx-dot or" style="margin-left:16px"></span> <span class="lx-bsm">Orange</span>
    <span class="lx-dot yw" style="margin-left:16px"></span> <span class="lx-bsm">Yellow</span>
    <span class="lx-dot pu" style="margin-left:16px"></span> <span class="lx-bsm">Purple</span>
  </div>
</div>
```

### 18. Button System
**File:** `buttons/buttons.html`

```html
<div class="ds"><div class="dl">BUTTON SYSTEM — 9 COLOUR VARIANTS · 3 SIZES · GHOST (S10)</div>
<div class="dr">
  <button class="lx-btn pk">Pink (Primary)</button>
  <button class="lx-btn cy">Cyan (Info)</button>
  <button class="lx-btn yw">Yellow (Confirm)</button>
  <button class="lx-btn or">Orange (Warning)</button>
  <button class="lx-btn pu">Purple (AI/Stats)</button>
  <button class="lx-btn bl">Blue (Progress)</button>
  <button class="lx-btn bk">Black (Secondary)</button>
  <button class="lx-btn ghost">Ghost (Outline)</button>
</div></div>

<div class="ds"><div class="dl">LARGE — PRIMARY ACTIONS</div>
<div class="dr">
  <button class="lx-btn pk lg">Save Participant</button>
  <button class="lx-btn cy lg">View Case Notes</button>
  <button class="lx-btn yw lg">Approve Plan</button>
  <button class="lx-btn or lg">Flag Risk</button>
  <button class="lx-btn pu lg">Ask ARIA</button>
</div></div>

<div class="ds"><div class="dl">DEFAULT — STANDARD ACTIONS</div>
<div class="dr">
  <button class="lx-btn pk">Save</button>
  <button class="lx-btn bk">Cancel</button>
  <button class="lx-btn cy">View Details</button>
  <button class="lx-btn or">Flag Risk</button>
  <button class="lx-btn ghost">Dismiss</button>
</div></div>

<div class="ds"><div class="dl">SMALL — INLINE & CHIP ACTIONS</div>
<div class="dr">
  <button class="lx-btn pk sm">Edit</button>
  <button class="lx-btn cy sm">View</button>
  <button class="lx-btn yw sm">Approve</button>
  <button class="lx-btn or sm">Alert</button>
  <button class="lx-btn pu sm">AI Suggest</button>
  <button class="lx-btn bl sm">Export</button>
  <button class="lx-btn bk sm">Archive</button>
  <button class="lx-btn ghost sm">Cancel</button>
</div></div>

<div class="ds"><div class="dl">BUTTONS ON DARK BACKGROUND</div>
<div style="background:var(--lx-black);padding:20px;border-radius:var(--r-md)">
<div class="dr">
  <button class="lx-btn pk">Primary</button>
  <button class="lx-btn cy">Cyan</button>
  <button class="lx-btn yw">Yellow</button>
  <button class="lx-btn or">Orange</button>
  <button class="lx-btn pu">Purple</button>
  <button class="lx-btn ghost" style="border-color:rgba(255,255,255,.2);color:var(--lx-offwhite)">Ghost</button>
</div></div></div>

<div class="ds"><div class="dl">BUTTONS WITH ICONS</div>
<div class="dr">
  <button class="lx-btn pk">◉ Dashboard</button>
  <button class="lx-btn cy">📋 Case Notes</button>
  <button class="lx-btn yw">✓ Approve</button>
  <button class="lx-btn or sm">⚠ Flag</button>
  <button class="lx-btn pu sm">🧠 ARIA</button>
</div></div>
```

### 19. Alerts
**File:** `alerts/alerts.html`

```html
<!-- Component: Alerts | Category: Alerts -->

<div class="demo-section" style="max-width:600px">
  <div class="demo-label">ALERT VARIANTS</div>
  <div class="lx-al inf">
    <div><div class="lx-at">Information</div><div class="lx-ab">Your plan review is scheduled for 15 May 2026. Please ensure all documentation is current.</div></div>
  </div>
  <div class="lx-al wrn">
    <div><div class="lx-at">Warning</div><div class="lx-ab">Budget utilization has reached 85%. Consider reviewing allocation to avoid overutilization before plan end.</div></div>
  </div>
  <div class="lx-al dng">
    <div><div class="lx-at">Critical</div><div class="lx-ab">Service agreement with Therapy Plus expires in 7 days. Immediate action required to prevent service disruption.</div></div>
  </div>
  <div class="lx-al suc">
    <div><div class="lx-at">Success</div><div class="lx-ab">Goal "Improve daily living skills" has been marked as achieved. Progress report updated.</div></div>
  </div>
</div>
```

### 20. Data Tables
**File:** `tables/data-table.html`

```html
<!-- Component: Data Tables | Category: Tables -->

<div class="demo-section">
  <div class="demo-label">STANDARD DATA TABLE (.lx-tbl)</div>
  <table class="lx-tbl" style="max-width:700px">
    <thead>
      <tr><th>Provider</th><th>Service Type</th><th>Frequency</th><th>Cost/Hr</th><th>Status</th></tr>
    </thead>
    <tbody>
      <tr><td class="lx-tb">Therapy Plus</td><td>Occupational Therapy</td><td>Weekly</td><td class="lx-tm">$193.99</td><td><span class="lx-chip spk">Active</span></td></tr>
      <tr><td class="lx-tb">MindCare</td><td>Psychology</td><td>Fortnightly</td><td class="lx-tm">$222.99</td><td><span class="lx-chip scy">Review</span></td></tr>
      <tr><td class="lx-tb">FitAbility</td><td>Exercise Physiology</td><td>Weekly</td><td class="lx-tm">$166.99</td><td><span class="lx-chip spk">Active</span></td></tr>
      <tr><td class="lx-tb">SpeakEasy</td><td>Speech Pathology</td><td>Monthly</td><td class="lx-tm">$193.99</td><td><span class="lx-chip sbk">Pending</span></td></tr>
      <tr class="lx-ttot"><td colspan="3">Total Monthly Cost</td><td class="lx-tm">$3,420.00</td><td></td></tr>
    </tbody>
  </table>
</div>

<div class="demo-section">
  <div class="demo-label">INFO ROWS (.lx-ir)</div>
  <div style="max-width:400px">
    <div class="lx-ir"><span class="lx-ik">Participant Name</span><span class="lx-iv">Iona K.</span></div>
    <div class="lx-ir"><span class="lx-ik">NDIS Number</span><span class="lx-iv n">12345678</span></div>
    <div class="lx-ir"><span class="lx-ik">Plan Budget</span><span class="lx-iv">$72,400</span></div>
    <div class="lx-ir"><span class="lx-ik">Remaining</span><span class="lx-iv" style="color:var(--lx-cyan)">$24,170</span></div>
  </div>
</div>

<div class="demo-section">
  <div class="demo-label">KPI ROW (.lx-krow)</div>
  <div class="lx-krow">
    <div class="lx-k"><div class="lx-kv cpk">24</div><div class="lx-kl">Active Cases</div></div>
    <div class="lx-k"><div class="lx-kv ccy">$12.4K</div><div class="lx-kl">Budget Used</div></div>
    <div class="lx-k"><div class="lx-kv cor">7</div><div class="lx-kl">Pending Reviews</div></div>
    <div class="lx-k"><div class="lx-kv cpu">89%</div><div class="lx-kl">Goal Progress</div></div>
  </div>
</div>
```

### 21. Leaderboard
**File:** `tables/leaderboard.html`

```html
<div class="ds"><div class="dl">LEADERBOARD / RANKED LIST</div>
<div class="lx-card" style="max-width:450px;padding:0;overflow:hidden">
<div style="padding:14px 20px;border-bottom:1px solid var(--lx-bdr)"><div class="lx-cmd">Top Providers by Hours Delivered</div></div>
<div style="padding:0 20px 14px">
  <div style="display:flex;align-items:center;gap:12px;padding:10px 0;border-bottom:1px solid rgba(0,0,0,.04)"><span style="font-family:Bebas Neue,serif;font-size:24px;color:var(--lx-pink);width:30px">01</span><div style="flex:1"><div class="lx-b bld">Therapy Plus</div><div class="lx-bxs cm">Occupational Therapy</div></div><span class="lx-mmd">142 hrs</span></div>
  <div style="display:flex;align-items:center;gap:12px;padding:10px 0;border-bottom:1px solid rgba(0,0,0,.04)"><span style="font-family:Bebas Neue,serif;font-size:24px;color:var(--lx-cyan);width:30px">02</span><div style="flex:1"><div class="lx-b bld">FitAbility</div><div class="lx-bxs cm">Exercise Physiology</div></div><span class="lx-mmd">98 hrs</span></div>
  <div style="display:flex;align-items:center;gap:12px;padding:10px 0;border-bottom:1px solid rgba(0,0,0,.04)"><span style="font-family:Bebas Neue,serif;font-size:24px;color:var(--lx-orange);width:30px">03</span><div style="flex:1"><div class="lx-b bld">MindCare</div><div class="lx-bxs cm">Psychology</div></div><span class="lx-mmd">76 hrs</span></div>
  <div style="display:flex;align-items:center;gap:12px;padding:10px 0"><span style="font-family:Bebas Neue,serif;font-size:24px;color:var(--lx-txl);width:30px">04</span><div style="flex:1"><div class="lx-b bld">SpeakEasy</div><div class="lx-bxs cm">Speech Pathology</div></div><span class="lx-mmd">52 hrs</span></div>
</div></div></div>
```

### 22. Activity Feed
**File:** `tables/activity-feed.html`

```html
<div class="ds"><div class="dl">ACTIVITY FEED / TIMELINE / STATUS BOARD</div>
<div class="lx-card" style="max-width:450px">
<div class="lx-cmd" style="margin-bottom:12px">Recent Activity</div>
<div style="display:flex;flex-direction:column;gap:0">
  <div style="display:flex;gap:10px;padding:8px 0;border-bottom:1px solid rgba(0,0,0,.04)"><div style="width:6px;height:6px;border-radius:50%;background:var(--lx-pink);margin-top:5px;flex-shrink:0"></div><div><div class="lx-b">Service agreement signed — <span class="bld">Therapy Plus</span></div><div class="lx-bxs cm">2 hours ago · Ile Karamacoski</div></div></div>
  <div style="display:flex;gap:10px;padding:8px 0;border-bottom:1px solid rgba(0,0,0,.04)"><div style="width:6px;height:6px;border-radius:50%;background:var(--lx-cyan);margin-top:5px;flex-shrink:0"></div><div><div class="lx-b">Budget claim submitted — <span class="bld">$2,340.00</span></div><div class="lx-bxs cm">5 hours ago · Plan Manager</div></div></div>
  <div style="display:flex;gap:10px;padding:8px 0;border-bottom:1px solid rgba(0,0,0,.04)"><div style="width:6px;height:6px;border-radius:50%;background:var(--lx-orange);margin-top:5px;flex-shrink:0"></div><div><div class="lx-b">Risk flag raised — <span class="bld">Transport budget 85%</span></div><div class="lx-bxs cm">Yesterday · System</div></div></div>
  <div style="display:flex;gap:10px;padding:8px 0"><div style="width:6px;height:6px;border-radius:50%;background:var(--lx-purple);margin-top:5px;flex-shrink:0"></div><div><div class="lx-b">Goal achieved — <span class="bld">Daily Living Skills</span></div><div class="lx-bxs cm">2 days ago · Ile Karamacoski</div></div></div>
</div></div></div>
```

### 23. Dark Tabs
**File:** `navigation/tabs-dark.html`

```html
<!-- Component: Dark Tabs | Category: Navigation -->

<div class="demo-section">
  <div class="demo-label">DARK TAB GRID — WITH COLOUR CLASSES</div>
  <div class="lx-tabs">
    <button class="lx-tab tc-pk active" data-tab="t1">Overview <span class="lx-tc">4</span></button>
    <button class="lx-tab tc-cy" data-tab="t2">Budget <span class="lx-tc">12</span></button>
    <button class="lx-tab tc-yw" data-tab="t3">Goals</button>
    <button class="lx-tab tc-or" data-tab="t4">Alerts <span class="lx-tc">3</span></button>
    <button class="lx-tab tc-pu" data-tab="t5">AI Brain</button>
    <button class="lx-tab tc-bl" data-tab="t6">Reports</button>
  </div>
  <div class="lx-tpanels" style="margin-top:10px">
    <div class="lx-tpanel active" id="t1"><div class="lx-card"><div class="lx-cmd">Overview Panel Content</div></div></div>
    <div class="lx-tpanel" id="t2"><div class="lx-card"><div class="lx-cmd">Budget Panel Content</div></div></div>
    <div class="lx-tpanel" id="t3"><div class="lx-card"><div class="lx-cmd">Goals Panel Content</div></div></div>
    <div class="lx-tpanel" id="t4"><div class="lx-card"><div class="lx-cmd">Alerts Panel Content</div></div></div>
    <div class="lx-tpanel" id="t5"><div class="lx-card"><div class="lx-cmd">AI Brain Panel Content</div></div></div>
    <div class="lx-tpanel" id="t6"><div class="lx-card"><div class="lx-cmd">Reports Panel Content</div></div></div>
  </div>
</div>
```

### 24. Pill Tabs
**File:** `navigation/tabs-pill.html`

```html
<!-- Component: Pill Tabs | Category: Navigation -->

<div class="demo-section">
  <div class="demo-label">PILL TABS — LIGHT (.lx-ptabs)</div>
  <div class="lx-ptabs pk">
    <button class="lx-tab active" data-tab="p1">All <span class="lx-tc">24</span></button>
    <button class="lx-tab" data-tab="p2">Active <span class="lx-tc">18</span></button>
    <button class="lx-tab" data-tab="p3">Review <span class="lx-tc">4</span></button>
    <button class="lx-tab" data-tab="p4">Closed <span class="lx-tc">2</span></button>
  </div>
</div>

<div class="demo-section">
  <div class="demo-label">UNDERLINE TABS (.lx-ptabs.ul)</div>
  <div class="lx-ptabs ul" style="max-width:500px">
    <button class="lx-tab active">Overview</button>
    <button class="lx-tab">Services</button>
    <button class="lx-tab">Budget</button>
    <button class="lx-tab">Documents</button>
  </div>
</div>
```

### 25. Spotlight Tabs
**File:** `navigation/spotlight-tabs.html`

```html
<div class="demo-section">
  <div class="demo-label">SPOTLIGHT TAB NAVIGATION — ANIMATED FLYING TABS</div>
  <div style="background:var(--lx-black);border-radius:var(--r-md);padding:10px;border:1px solid rgba(255,255,255,.06)">
    <div style="padding:0 0 8px;position:relative;min-height:52px">
      <button class="spot-btn" id="spotBtn" data-tab="overview" style="font-family:Barlow Condensed,sans-serif;font-weight:900;font-size:17px;text-transform:uppercase;letter-spacing:.06em;padding:14px 28px;border:none;border-radius:var(--r-sm);cursor:pointer;display:inline-flex;align-items:center;gap:8px;background:var(--lx-pink);color:#fff;box-shadow:0 6px 24px rgba(0,0,0,.4)">◉ OVERVIEW</button>
    </div>
    <div class="lx-tabs" id="mainTabs" style="background:transparent;border:none;padding:0">
      <button class="lx-tab" data-tab="overview" data-bg="var(--lx-pink)" data-fg="#fff" style="border-color:var(--lx-pink);color:var(--lx-pink);display:none!important">◉ Overview</button>
      <button class="lx-tab" data-tab="budget" data-bg="var(--lx-cyan)" data-fg="#0D0D0D" style="border-color:var(--lx-cyan);color:var(--lx-cyan)">Budget</button>
      <button class="lx-tab" data-tab="goals" data-bg="var(--lx-yellow)" data-fg="#0D0D0D" style="border-color:var(--lx-yellow);color:var(--lx-yellow)">Goals</button>
      <button class="lx-tab" data-tab="schedule" data-bg="var(--lx-purple)" data-fg="#fff" style="border-color:var(--lx-purple);color:var(--lx-purple)">Schedule</button>
      <button class="lx-tab" data-tab="reports" data-bg="var(--lx-orange)" data-fg="#fff" style="border-color:var(--lx-orange);color:var(--lx-orange)">Reports</button>
    </div>
  </div>
  <div id="mainPanels" style="margin-top:10px">
    <div class="lx-tpanel active" data-panel="overview"><div class="lx-card tl"><div class="lx-cmd">Overview Panel</div><div class="lx-bsm cm" style="margin-top:4px">Click tabs above to see the spring-animated flying tab effect.</div></div></div>
    <div class="lx-tpanel" data-panel="budget"><div class="lx-card" style="border-left:3px solid var(--lx-cyan)"><div class="lx-cmd ccy">Budget Panel</div></div></div>
    <div class="lx-tpanel" data-panel="goals"><div class="lx-card yellow"><div class="lx-cmd">Goals Panel</div></div></div>
    <div class="lx-tpanel" data-panel="schedule"><div class="lx-card" style="border-left:3px solid var(--lx-purple)"><div class="lx-cmd cpu">Schedule Panel</div></div></div>
    <div class="lx-tpanel" data-panel="reports"><div class="lx-card" style="border-left:3px solid var(--lx-orange)"><div class="lx-cmd cor">Reports Panel</div></div></div>
  </div>
</div>
```

### 26. Sidebar Navigation
**File:** `navigation/sidebar-nav.html`

```html
<!-- Component: Sidebar Navigation | Category: Navigation -->

<div class="demo-section">
  <div class="demo-label">SIDEBAR NAV (.lx-snav)</div>
  <div class="lx-snav" style="max-width:240px">
    <div class="lx-nsec">MAIN</div>
    <a class="lx-ni active"><span class="lx-nico">◉</span> Dashboard <span class="lx-nbadge">3</span></a>
    <a class="lx-ni"><span class="lx-nico">◉</span> Participants</a>
    <a class="lx-ni"><span class="lx-nico">◉</span> Calendar</a>
    <div class="lx-ndiv"></div>
    <div class="lx-nsec">MANAGEMENT</div>
    <a class="lx-ni"><span class="lx-nico">◉</span> Budget <span class="lx-nbadge">12</span></a>
    <a class="lx-ni"><span class="lx-nico">◉</span> Reports</a>
    <a class="lx-ni"><span class="lx-nico">◉</span> Settings</a>
  </div>
</div>
```

### 27. Top Nav & Breadcrumb
**File:** `navigation/top-nav-breadcrumb.html`

```html
<!-- Component: Top Nav & Breadcrumb | Category: Navigation -->

<div class="demo-section">
  <div class="demo-label">TOP NAV BAR (.lx-tnav)</div>
  <div class="lx-tnav">
    <a class="lx-tni active">Dashboard</a>
    <a class="lx-tni">Participants</a>
    <span class="lx-tnsep"></span>
    <a class="lx-tni">Budget</a>
    <a class="lx-tni">Reports</a>
    <a class="lx-tni">Settings</a>
  </div>
</div>

<div class="demo-section">
  <div class="demo-label">BREADCRUMB (.lx-bc)</div>
  <div class="lx-bc">
    <span class="lx-bci">Home</span>
    <span class="lx-bcs">›</span>
    <span class="lx-bci">Participants</span>
    <span class="lx-bcs">›</span>
    <span class="lx-bci">Iona Karamacoski</span>
    <span class="lx-bcs">›</span>
    <span class="lx-bci cur">Budget Overview</span>
  </div>
</div>
```

### 28. Pagination
**File:** `navigation/pagination.html`

```html
<!-- Component: Pagination | Category: Navigation -->

<div class="demo-section">
  <div class="demo-label">PAGINATION VARIANTS</div>
  <div style="display:flex;flex-direction:column;gap:16px">
    <div><div class="lx-bsm cm" style="margin-bottom:4px">Default (Pink)</div>
    <div class="lx-pag pk"><button class="lx-pg">‹</button><button class="lx-pg active">1</button><button class="lx-pg">2</button><button class="lx-pg">3</button><button class="lx-pg">4</button><button class="lx-pg">›</button><span class="lx-pi">Page 1 of 4</span></div></div>
    <div><div class="lx-bsm cm" style="margin-bottom:4px">Cyan</div>
    <div class="lx-pag cy"><button class="lx-pg active">1</button><button class="lx-pg">2</button><button class="lx-pg">3</button><span class="lx-pi">3 Pages</span></div></div>
    <div><div class="lx-bsm cm" style="margin-bottom:4px">Pill Shape</div>
    <div class="lx-pag pk pl"><button class="lx-pg active">1</button><button class="lx-pg">2</button><button class="lx-pg">3</button></div></div>
    <div><div class="lx-bsm cm" style="margin-bottom:4px">Dark Background</div>
    <div style="background:var(--lx-black);padding:12px;border-radius:var(--r-md);display:inline-block">
    <div class="lx-pag dk"><button class="lx-pg active">1</button><button class="lx-pg">2</button><button class="lx-pg">3</button></div></div></div>
  </div>
</div>
```

### 29. Dropdowns / Accordions
**File:** `navigation/dropdowns.html`

```html
<!-- Component: Dropdowns / Accordions | Category: Navigation -->

<div class="demo-section" style="max-width:500px">
  <div class="demo-label">DROPDOWN / ACCORDION — ARROW COLOUR VARIANTS</div>
  <div class="dd">
    <div class="dd-h">Core Supports <span class="dd-arrow arr-pk">▼</span></div>
    <div class="dd-body"><p>Includes assistance with daily life, transport, consumables, and social participation. <strong>Budget: $42,000</strong></p></div>
  </div>
  <div class="dd open">
    <div class="dd-h">Capacity Building <span class="dd-arrow arr-cy">▼</span></div>
    <div class="dd-body"><p>Includes support coordination, improved daily living, finding and keeping a job, improved relationships. <strong>Budget: $24,800</strong></p></div>
  </div>
  <div class="dd">
    <div class="dd-h">Capital Supports <span class="dd-arrow arr-or">▼</span></div>
    <div class="dd-body"><p>Includes assistive technology and home modifications. <strong>Budget: $5,600</strong></p></div>
  </div>
  <div class="dd">
    <div class="dd-h">Transport <span class="dd-arrow arr-pu">▼</span></div>
    <div class="dd-body"><p>Recurring transport funding for community access and appointments. <strong>Budget: $3,120</strong></p></div>
  </div>
</div>
```

### 30. Scroll Reveal
**File:** `interactions/scroll-reveal.html`

```html
<!-- Component: Scroll Reveal | Category: Interactions -->

<div class="demo-section">
  <div class="demo-label">SCROLL REVEAL (.lx-rev) — SCROLL DOWN TO SEE ANIMATION</div>
  <div style="height:300px;overflow-y:auto;border:1px solid var(--lx-bdr);border-radius:var(--r-md);padding:20px">
    <div style="height:200px;display:flex;align-items:center;justify-content:center" class="lx-bsm cm">↓ Scroll down ↓</div>
    <div class="lx-rev" style="margin-bottom:16px"><div class="lx-card pink"><div class="lx-cmd">Revealed Card 1</div></div></div>
    <div class="lx-rev" style="margin-bottom:16px"><div class="lx-card dark"><div class="lx-cmd" style="color:var(--lx-offwhite)">Revealed Card 2</div></div></div>
    <div class="lx-rev"><div class="lx-card yellow"><div class="lx-cmd">Revealed Card 3</div></div></div>
  </div>
</div>
```

