/* Creator Hub extra whimsy: falling petals, a sparkle burst on click, jelly buttons,
   stickers around the hero, and a bobbing logo. Decorative only; off for reduced motion. */
(function(){
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var page = document.body.getAttribute('data-page') || 'index';
  var INK = '#4a0e16';

  var css = [
    /* photo backgrounds for the last two pages */
    'body[data-page=manager]{background-image:linear-gradient(rgba(255,247,234,.84),rgba(255,247,234,.92)),url(img/bg8-quilt.png)}',
    'footer{background-image:linear-gradient(rgba(74,14,22,.84),rgba(107,20,36,.88)),url(img/bg9-floral.png)!important}',
    /* petals falling and swaying */
    '.petal{position:fixed;top:-40px;left:var(--x,50vw);width:var(--w,16px);height:calc(var(--w,16px) * 1.5);pointer-events:none;z-index:1;',
    '  animation:fall var(--d,12s) linear var(--delay,0s) infinite;opacity:.9}',
    '.petal svg{width:100%;height:100%;animation:sway 3s ease-in-out infinite alternate}',
    '@keyframes fall{0%{transform:translate(0,-40px) rotate(0)}100%{transform:translate(var(--dx,60px),112vh) rotate(540deg)}}',
    '@keyframes sway{from{transform:translateX(-14px) rotate(-12deg)}to{transform:translateX(14px) rotate(12deg)}}',
    /* click burst */
    '.burst{position:fixed;width:14px;height:14px;margin:-7px 0 0 -7px;pointer-events:none;z-index:70;',
    '  animation:boom .7s ease-out forwards}',
    '.burst svg{width:100%;height:100%}',
    '@keyframes boom{0%{transform:translate(0,0) scale(.4) rotate(0);opacity:1}100%{transform:translate(var(--bx),var(--by)) scale(1.2) rotate(180deg);opacity:0}}',
    /* jelly buttons and wobbling nav */
    '.btn:hover{animation:jelly .6s ease-in-out}',
    '@keyframes jelly{0%,100%{transform:scale(1,1)}30%{transform:scale(1.08,.92)}55%{transform:scale(.95,1.05)}78%{transform:scale(1.02,.98)}}',
    '.links a:hover{animation:wobble .5s ease-in-out}',
    '@keyframes wobble{0%,100%{rotate:0deg}33%{rotate:-6deg}66%{rotate:5deg}}',
    /* logo bobs gently */
    '.logo{display:inline-block;animation:logobob 4.2s ease-in-out infinite}',
    '@keyframes logobob{50%{transform:translateY(-3px) rotate(-1.5deg)}}',
    /* hero stickers */
    '.hero-sticker{position:absolute;pointer-events:none;z-index:2;width:var(--s,70px);height:var(--s,70px);',
    '  filter:drop-shadow(0 4px 0 rgba(74,14,22,.18));animation:bob 5.5s ease-in-out infinite}',
    '.hero-sticker svg{width:100%;height:100%;overflow:visible}',
    '@media (prefers-reduced-motion:reduce){.petal,.petal svg,.burst,.btn:hover,.links a:hover,.logo,.hero-sticker{animation:none!important}.petal{display:none}}'
  ].join('\n');

  var style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);

  var PETAL_COLORS = ['#f7b6c8', '#ffd1e0', '#ff9fc0', '#fbe3ea'];
  function petal(i){
    var p = document.createElement('div');
    p.className = 'petal';
    p.style.setProperty('--x', (Math.random() * 100) + 'vw');
    p.style.setProperty('--w', (12 + Math.random() * 12) + 'px');
    p.style.setProperty('--d', (9 + Math.random() * 7) + 's');
    p.style.setProperty('--delay', (-Math.random() * 16) + 's');
    p.style.setProperty('--dx', ((Math.random() - 0.5) * 160) + 'px');
    p.innerHTML = '<svg viewBox="0 0 40 60"><path d="M20 2 C34 16 38 36 20 58 C2 36 6 16 20 2Z" fill="' + PETAL_COLORS[i % PETAL_COLORS.length] + '" stroke="#fff" stroke-width="2"/><path d="M20 10 L20 52" stroke="#ff4f9a" stroke-width="1.5" opacity=".5"/></svg>';
    document.body.appendChild(p);
  }

  function addHeroStickers(){
    var hero = document.querySelector('.hero');
    if (!hero) return;
    var items = [
      ['st-star',     {top:'-18px', right:'18px'}, 64],
      ['st-heart',    {bottom:'-16px', left:'-14px'}, 58],
      ['st-bow',      {top:'40%', right:'-22px'}, 66],
      ['st-clover',   {bottom:'18px', right:'30%'}, 50]
    ];
    items.forEach(function(it){
      var s = document.createElement('div');
      s.className = 'hero-sticker';
      s.style.setProperty('--s', it[2] + 'px');
      for (var k in it[1]) s.style[k] = it[1][k];
      s.innerHTML = '<svg viewBox="0 0 100 100"><use href="#' + it[0] + '"/></svg>';
      hero.appendChild(s);
    });
  }

  if (!reduce) {
    for (var i = 0; i < 12; i++) petal(i);

    // Sparkle burst where the viewer taps or clicks.
    document.addEventListener('pointerdown', function(e){
      var ids = ['st-sparkle', 'st-star', 'st-heart'];
      for (var n = 0; n < 7; n++) {
        var a = (Math.PI * 2 / 7) * n + Math.random() * 0.5;
        var d = 36 + Math.random() * 26;
        var b = document.createElement('div');
        b.className = 'burst';
        b.style.left = e.clientX + 'px';
        b.style.top = e.clientY + 'px';
        b.style.setProperty('--bx', (Math.cos(a) * d).toFixed(1) + 'px');
        b.style.setProperty('--by', (Math.sin(a) * d).toFixed(1) + 'px');
        b.innerHTML = '<svg viewBox="0 0 100 100"><use href="#' + ids[n % ids.length] + '"/></svg>';
        document.body.appendChild(b);
        setTimeout(function(el){ return function(){ el.remove(); }; }(b), 760);
      }
    });
  }

  addHeroStickers();
})();
