/* Creator Hub decor: beadazzle gems, pearl trim, bead lines and die-cut stickers.
   Loaded on every page. Purely decorative: pointer-events are off and content stays on top. */
(function(){
  var css = [
    '.gem{position:absolute;width:16px;height:16px;border-radius:50%;pointer-events:none;z-index:2;',
    '  background:radial-gradient(circle at 32% 30%,#fff 0 10%,var(--c) 32%,color-mix(in srgb,var(--c) 55%,#000) 100%);',
    '  box-shadow:0 0 0 2px rgba(255,255,255,.85),0 3px 6px rgba(74,14,22,.28)}',
    '.gem.sq{border-radius:3px;transform:rotate(45deg);width:13px;height:13px}',
    '.gem.tw{animation:twinkle 2.8s ease-in-out infinite}',
    '.card.beaded::after{content:"";position:absolute;inset:7px;border-radius:calc(var(--r,22px) - 7px);',
    '  border:2px dotted rgba(255,255,255,.95);pointer-events:none;z-index:1}',
    '.beadline{height:10px;width:240px;max-width:100%;margin:12px 0 20px;',
    '  background-image:radial-gradient(circle,#ff4f9a 3.2px,transparent 3.8px),radial-gradient(circle,#4fc3f7 3.2px,transparent 3.8px);',
    '  background-size:22px 10px;background-position:0 0,11px 0;background-repeat:repeat-x}',
    '.sticker{position:absolute;pointer-events:none;z-index:0;width:var(--s,70px);height:var(--s,70px);',
    '  filter:drop-shadow(0 4px 0 rgba(74,14,22,.16));animation:bob 5.5s ease-in-out infinite}',
    '.sticker svg{width:100%;height:100%;overflow:visible}',
    '.sticker.r2{animation-delay:-2s}.sticker.r3{animation-delay:-4s}',
    '.nav .sticker{position:relative;width:34px;height:34px;--s:34px;display:inline-block;vertical-align:middle;margin-left:.4rem}',
    '@keyframes twinkle{50%{opacity:.45;transform:scale(.7)}}',
    '@keyframes bob{50%{transform:translateY(-8px) rotate(8deg)}}',
    '@media (prefers-reduced-motion:reduce){.sticker,.gem.tw{animation:none!important}}'
  ].join('\n');

  var style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);

  var INK = '#4a0e16';
  var sprite = [
    '<svg width="0" height="0" style="position:absolute" aria-hidden="true"><defs>',
    '<symbol id="st-star" viewBox="0 0 100 100"><polygon points="50,6 61,38 95,38 67,58 78,91 50,71 22,91 33,58 5,38 39,38" fill="#ffd86b" stroke="#fff" stroke-width="8" paint-order="stroke" stroke-linejoin="round"/><polygon points="50,6 61,38 95,38 67,58 78,91 50,71 22,91 33,58 5,38 39,38" fill="none" stroke="'+INK+'" stroke-width="3" stroke-linejoin="round"/></symbol>',
    '<symbol id="st-heart" viewBox="0 0 100 100"><path d="M50 90 C10 62 4 42 16 26 C28 10 46 16 50 32 C54 16 72 10 84 26 C96 42 90 62 50 90Z" fill="#ff4f9a" stroke="#fff" stroke-width="8" paint-order="stroke" stroke-linejoin="round"/><path d="M28 36 C30 30 36 28 40 32" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round" opacity=".8"/></symbol>',
    '<symbol id="st-flower" viewBox="0 0 100 100"><g fill="#f7b6c8" stroke="#fff" stroke-width="7" paint-order="stroke"><circle cx="50" cy="28" r="18"/><circle cx="72" cy="44" r="18"/><circle cx="64" cy="70" r="18"/><circle cx="36" cy="70" r="18"/><circle cx="28" cy="44" r="18"/></g><circle cx="50" cy="52" r="13" fill="#ffd86b" stroke="'+INK+'" stroke-width="2.5"/></symbol>',
    '<symbol id="st-butterfly" viewBox="0 0 100 100"><g stroke="#fff" stroke-width="6" paint-order="stroke" stroke-linejoin="round"><path d="M50 50 C30 10 5 15 8 40 C10 58 35 60 50 50Z" fill="#bcdcf2"/><path d="M50 50 C70 10 95 15 92 40 C90 58 65 60 50 50Z" fill="#bcdcf2"/><path d="M50 52 C35 60 18 72 26 84 C36 92 46 70 50 56Z" fill="#f7b6c8"/><path d="M50 52 C65 60 82 72 74 84 C64 92 54 70 50 56Z" fill="#f7b6c8"/></g><rect x="47" y="30" width="6" height="60" rx="3" fill="'+INK+'"/></symbol>',
    '<symbol id="st-bow" viewBox="0 0 100 100"><g fill="#ff4f9a" stroke="#fff" stroke-width="7" paint-order="stroke" stroke-linejoin="round"><path d="M50 50 C30 20 8 25 14 45 C18 58 40 54 50 50Z"/><path d="M50 50 C70 20 92 25 86 45 C82 58 60 54 50 50Z"/><path d="M50 50 L36 90 L46 86 L50 56Z"/><path d="M50 50 L64 90 L54 86 L50 56Z"/></g><circle cx="50" cy="50" r="7" fill="#ffd86b" stroke="'+INK+'" stroke-width="2.5"/></symbol>',
    '<symbol id="st-clover" viewBox="0 0 100 100"><path d="M50 70 L50 98" stroke="#fff" stroke-width="9" stroke-linecap="round"/><g fill="#bfe8c8" stroke="#fff" stroke-width="7" paint-order="stroke"><circle cx="38" cy="38" r="17"/><circle cx="62" cy="38" r="17"/><circle cx="38" cy="62" r="17"/><circle cx="62" cy="62" r="17"/></g><circle cx="50" cy="50" r="5" fill="#fff" stroke="'+INK+'" stroke-width="2"/></symbol>',
    '<symbol id="st-moon" viewBox="0 0 100 100"><path d="M60 12 A38 38 0 1 0 88 72 A30 30 0 1 1 60 12Z" fill="#ffd86b" stroke="#fff" stroke-width="8" paint-order="stroke" stroke-linejoin="round"/><path d="M60 12 A38 38 0 1 0 88 72 A30 30 0 1 1 60 12Z" fill="none" stroke="'+INK+'" stroke-width="2.5" stroke-linejoin="round"/></symbol>',
    '<symbol id="st-key" viewBox="0 0 100 100"><g fill="#cdbd6a" stroke="#fff" stroke-width="7" paint-order="stroke" stroke-linejoin="round"><circle cx="28" cy="50" r="14"/><rect x="40" y="45" width="50" height="10" rx="3"/><rect x="74" y="55" width="7" height="12" rx="2"/><rect x="84" y="55" width="7" height="9" rx="2"/></g><circle cx="28" cy="50" r="5" fill="#fff" stroke="'+INK+'" stroke-width="2"/></symbol>',
    '<symbol id="st-pearl" viewBox="0 0 100 100"><circle cx="50" cy="50" r="34" fill="#fff" stroke="#f7b6c8" stroke-width="5"/><ellipse cx="38" cy="36" rx="9" ry="6" fill="#fff" opacity=".9"/></symbol>',
    '<symbol id="st-sparkle" viewBox="0 0 100 100"><path d="M50 4 Q56 44 96 50 Q56 56 50 96 Q44 56 4 50 Q44 44 50 4Z" fill="#fff" stroke="'+INK+'" stroke-width="3" stroke-linejoin="round"/></symbol>',
    '</defs></svg>'
  ].join('');

  var wrap = document.createElement('div');
  wrap.innerHTML = sprite;
  document.body.insertBefore(wrap.firstChild, document.body.firstChild);

  var GEMS = ['#ff4f9a', '#4fc3f7', '#7bd389', '#c9b6f2', '#ffd86b', '#ff8a65'];
  var gi = 0;
  function gem(parent, pos, sq){
    var g = document.createElement('span');
    g.className = 'gem' + (sq ? ' sq' : '') + (sq ? '' : ' tw');
    g.style.setProperty('--c', GEMS[gi++ % GEMS.length]);
    g.style.animationDelay = (gi * -0.37) + 's';
    for (var k in pos) g.style[k] = pos[k];
    parent.appendChild(g);
  }

  // Beadazzle every card: a pearl trim plus jewels on the corners.
  document.querySelectorAll('.card').forEach(function(c){
    c.classList.add('beaded');
    gem(c, {right:'12px', top:'12px'});
    gem(c, {left:'12px', bottom:'12px'}, true);
    gem(c, {right:'12px', bottom:'12px'});
  });

  // A bead line under every page title.
  document.querySelectorAll('h1').forEach(function(h){
    var line = document.createElement('div');
    line.className = 'beadline';
    h.insertAdjacentElement('afterend', line);
  });

  // Die-cut stickers scattered down the margins of the main area.
  function sticker(parent, id, pos, size, cls){
    var s = document.createElement('div');
    s.className = 'sticker ' + (cls || '');
    s.style.setProperty('--s', size + 'px');
    for (var k in pos) s.style[k] = pos[k];
    s.setAttribute('aria-hidden', 'true');
    s.innerHTML = '<svg viewBox="0 0 100 100"><use href="#' + id + '"/></svg>';
    parent.appendChild(s);
  }
  var main = document.querySelector('main');
  if (main) {
    var layout = [
      ['st-star',     {top:'2%',  left:'0'},  64, 'r2'],
      ['st-heart',    {top:'16%', right:'0'}, 56, 'r3'],
      ['st-pearl',    {top:'34%', left:'0'},  40, ''],
      ['st-flower',   {top:'48%', right:'0'}, 78, 'r2'],
      ['st-butterfly',{top:'68%', left:'0'},  84, 'r3'],
      ['st-clover',   {top:'84%', right:'0'}, 60, ''],
      ['st-sparkle',  {top:'94%', left:'2%'}, 34, 'r2']
    ];
    layout.forEach(function(l){ sticker(main, l[0], l[1], l[2], l[3]); });
  }

  // A tiny star sticker in the nav bar, next to the logo.
  var logo = document.querySelector('.logo');
  if (logo) {
    var mini = document.createElement('span');
    mini.className = 'sticker';
    mini.style.position = 'relative';
    mini.style.setProperty('--s', '34px');
    mini.style.display = 'inline-block';
    mini.style.verticalAlign = 'middle';
    mini.style.marginLeft = '.4rem';
    mini.innerHTML = '<svg viewBox="0 0 100 100"><use href="#st-heart"/></svg>';
    logo.appendChild(mini);
  }
})();
