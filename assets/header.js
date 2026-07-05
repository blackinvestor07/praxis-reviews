/*
  Praxis Reviews — global site header.
  Single source of truth: every page mounts this into <div id="site-header"></div>
  and includes this script. Change the header once, here, and it updates everywhere.
  Relies on the CSS custom properties (--ink, --ink-soft, --line, --white, --teal,
  --teal-dark) already defined in every page's own stylesheet.
*/
(function () {
  var HEADER_HTML =
    '<header class="site-nav">' +
      '<div class="wrap nav-inner">' +
        '<a class="logo" href="/"><span class="mark">P</span>Praxis Reviews</a>' +
        '<button class="nav-toggle" type="button" aria-label="Toggle menu" aria-expanded="false" aria-controls="site-nav-links">' +
          '<span></span><span></span><span></span>' +
        '</button>' +
        '<nav class="nav-links" id="site-nav-links">' +
          '<a href="/email-marketing/">Business &amp; Marketing Software</a>' +
          '<a href="/about">About</a>' +
          '<a href="/contact">Contact</a>' +
        '</nav>' +
      '</div>' +
    '</header>';

  var STYLE =
    'header.site-nav{border-bottom:1px solid var(--line);background:var(--white);position:relative;z-index:200}' +
    'header.site-nav .nav-inner{display:flex;align-items:center;justify-content:space-between;padding:14px 20px}' +
    'header.site-nav .nav-links{display:flex;align-items:center;gap:28px}' +
    'header.site-nav .nav-links a{color:var(--ink-soft);text-decoration:none;font-size:14.5px;font-weight:600;white-space:nowrap}' +
    'header.site-nav .nav-links a:hover{color:var(--teal-dark)}' +
    'header.site-nav .nav-toggle{display:none;flex-direction:column;justify-content:center;align-items:center;gap:4px;width:36px;height:36px;border:none;background:transparent;cursor:pointer;padding:0;flex-shrink:0}' +
    'header.site-nav .nav-toggle span{display:block;height:2px;width:20px;background:var(--ink);border-radius:2px;transition:transform .18s ease,opacity .18s ease}' +
    '@media (max-width:640px){' +
      'header.site-nav .nav-toggle{display:flex}' +
      'header.site-nav .nav-links{position:absolute;top:100%;left:0;right:0;flex-direction:column;align-items:stretch;gap:0;background:var(--white);border-bottom:1px solid var(--line);box-shadow:0 12px 24px rgba(22,32,46,.10);max-height:0;overflow:hidden;opacity:0;transition:max-height .2s ease,opacity .2s ease}' +
      'header.site-nav .nav-links.open{max-height:220px;opacity:1;padding:4px 20px 12px}' +
      'header.site-nav .nav-links a{padding:12px 0;border-bottom:1px solid var(--line)}' +
      'header.site-nav .nav-links a:last-child{border-bottom:none}' +
      'header.site-nav.menu-open .nav-toggle span:nth-child(1){transform:translateY(6px) rotate(45deg)}' +
      'header.site-nav.menu-open .nav-toggle span:nth-child(2){opacity:0}' +
      'header.site-nav.menu-open .nav-toggle span:nth-child(3){transform:translateY(-6px) rotate(-45deg)}' +
    '}';

  function init() {
    var mount = document.getElementById('site-header');
    if (!mount) return;

    if (!document.getElementById('site-header-style')) {
      var styleEl = document.createElement('style');
      styleEl.id = 'site-header-style';
      styleEl.textContent = STYLE;
      document.head.appendChild(styleEl);
    }

    mount.innerHTML = HEADER_HTML;

    var header = mount.querySelector('.site-nav');
    var toggle = header.querySelector('.nav-toggle');
    var links = header.querySelector('.nav-links');

    toggle.addEventListener('click', function () {
      var isOpen = links.classList.toggle('open');
      header.classList.toggle('menu-open', isOpen);
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
