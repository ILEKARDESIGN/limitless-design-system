/**
 * LIMITLESS Spotlight Tab System v3.0
 * Animated "flying tab" navigation with spring easing.
 * 
 * Usage:
 *   initSpotlight('spotBtnId', 'tabGridId', 'panelsContainerId');
 * 
 * Requirements:
 *   - A .spot-btn element (the active spotlight button)
 *   - A grid of .lx-tab elements with data-tab, data-bg, data-fg attributes
 *   - A container of .lx-tpanel elements with data-panel attributes
 */

function initSpotlight(spotBtnId, gridId, panelsId) {
  var spotBtn = document.getElementById(spotBtnId);
  var grid    = document.getElementById(gridId);
  var panels  = document.getElementById(panelsId);
  if (!spotBtn || !grid) return;

  var current = spotBtn.dataset.tab;
  var busy    = false;

  // Build colour map from tab data attributes
  var colourMap = {};
  grid.querySelectorAll('.lx-tab[data-tab]').forEach(function(b) {
    colourMap[b.dataset.tab] = [
      b.dataset.bg || 'var(--lx-pink)',
      b.dataset.fg || '#fff'
    ];
  });

  function getBg(id) {
    return colourMap[id] || ['var(--lx-pink)', '#fff'];
  }

  function syncGrid(id) {
    grid.querySelectorAll('.lx-tab').forEach(function(b) {
      b.classList.toggle('in-spot', b.dataset.tab === id);
    });
  }

  function switchPanel(id) {
    if (!panels) return;
    panels.querySelectorAll('.lx-tpanel').forEach(function(p) {
      p.classList.toggle('active', p.dataset.panel === id);
    });
  }

  function waveOthers(skip) {
    var tabs = Array.from(grid.querySelectorAll('.lx-tab:not(.in-spot)'));
    tabs.forEach(function(t, i) {
      if (t.dataset.tab === skip) return;
      t.classList.remove('wave', 'bounce');
      void t.offsetWidth;
      setTimeout(function() {
        t.classList.add(i % 2 === 0 ? 'wave' : 'bounce');
        t.addEventListener('animationend', function() {
          t.classList.remove('wave', 'bounce');
        }, { once: true });
      }, i * 40);
    });
  }

  function doSwitch(newId, clickedEl) {
    if (busy || newId === current) return;
    busy = true;

    var colours = getBg(newId);
    var bg = colours[0], fg = colours[1];
    var clickRect = clickedEl.getBoundingClientRect();
    var spotRect  = spotBtn.getBoundingClientRect();

    // Create flyer from clicked tab to spotlight position
    var flyer = document.createElement('div');
    flyer.className = 'tab-flyer';
    flyer.textContent = clickedEl.textContent.trim();
    flyer.style.cssText =
      'position:fixed;z-index:9999;pointer-events:none;' +
      'left:' + clickRect.left + 'px;top:' + clickRect.top + 'px;' +
      'width:' + clickRect.width + 'px;height:' + clickRect.height + 'px;' +
      'font-size:13px;padding:10px 18px;' +
      'background:' + bg + ';color:' + fg + ';' +
      "font-family:'Barlow Condensed',sans-serif;font-weight:900;" +
      'text-transform:uppercase;letter-spacing:.06em;' +
      'border-radius:var(--r-sm);display:flex;align-items:center;' +
      'white-space:nowrap;animation:flyUp .45s var(--spring) both;';
    document.body.appendChild(flyer);

    // Fade out spotlight
    spotBtn.style.transition = 'opacity .2s ease, transform .2s ease';
    spotBtn.style.opacity = '0';
    spotBtn.style.transform = 'scale(0.85) translateY(8px)';

    setTimeout(function() {
      flyer.remove();
      spotBtn.textContent = clickedEl.textContent.trim();
      spotBtn.dataset.tab = newId;
      spotBtn.style.background = bg;
      spotBtn.style.color = fg;
      spotBtn.style.transition = 'none';
      spotBtn.style.transform = 'scale(0.88) translateY(16px)';
      void spotBtn.offsetWidth;
      spotBtn.style.transition = 'opacity .3s var(--spring), transform .35s var(--spring)';
      spotBtn.style.opacity = '1';
      spotBtn.style.transform = '';
      switchPanel(newId);
      current = newId;
      syncGrid(newId);
      waveOthers(newId);
      setTimeout(function() {
        spotBtn.style.transition = '';
        busy = false;
      }, 400);
    }, 420);
  }

  // Initialize
  syncGrid(current);
  grid.querySelectorAll('.lx-tab[data-tab]').forEach(function(btn) {
    btn.addEventListener('click', function() {
      doSwitch(btn.dataset.tab, btn);
    });
  });
}
