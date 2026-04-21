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
