/* Creator Hub whimsy: photo backgrounds, floating sparkles, drifting butterflies,
   a star trail that follows the cursor, and wiggle-on-hover cards.
   All effects are decorative and turn off when the viewer prefers reduced motion. */
(function(){
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var page = document.body.getAttribute('data-page') || 'index';
  var INK = '#4a0e16';

  var css = [
    /* photo backgrounds, one per page, with a cream wash so text stays readable */
    'body[data-page=index]{background-image:linear-gradient(rgba(255,247,234,.84),rgba(255,247,234,.9)),url(img/bg1-gems.png)}',
    'body[data-page=routine]{background-image:linear-gradient(rgba(255,247,234,.86),rgba(255,247,234,.92)),url(img/bg3-pink-lily.png)}',
    'body[data-page=scripts]{background-image:linear-gradient(rgba(255,247,234,.86),rgba(255,247,234,.92)),url(img/bg4-patches.png)}',
    'body[data-page=manager]{background-image:linear-gradient(rgba(255,247,234,.86),rgba(255,247,234,.92)),url(img/bg5-shells.png)}',
    'body{background-size:cover;background-position:center;background-attachment:fixed;background-repeat:no-repeat}',
    /* hero shows the lily photo behind the headline */
    '.hero{position:relative;padding:2.2rem;border-radius:32px;border:3px solid '+INK+';',
    '  background-image:linear-gradient(115deg,rgba(255,247,234,.94) 30%,rgba(255,247,234,.7)),url(img/bg2-lily-gems.png);',
    '  background-size:cover;background-position:center;box-shadow:0 8px 0 rgba(74,14,22,.18)}',
    /* tile grid sits on the clover sticker sheet */
    '.tiles{padding:1.4rem;border-radius:28px;border:3px dashed '+INK+';',
    '  background-image:linear-gradient(rgba(255,247,234,.9),rgba(255,247,234,.94)),url(img/bg6-clovers.png);background-size:cover;background-position:center}',
    /* footer shows the wind-chime photo under a plum wash */
    'footer{background-image:linear-gradient(rgba(74,14,22,.84),rgba(107,20,36,.86)),url(img/bg7-chime.png);background-size:cover;background-position:center}',
    /* glittering headline */
    'h1.shrik{background:linear-gradient(90deg,'+INK+',#ff4f9a,#c9b6f2,'+INK+');background-size:300% 100%;',
    '  -webkit-background-clip:text;background-clip:text;color:transparent;text-shadow:none!important;',
    '  filter:drop-shadow(3px 3px 0 #f7b6c8);animation:shine 7s linear infinite}',
    '@keyframes shine{to{background-position:300% 0}}',
    /* sparkles that rise and twinkle */
    '.spark{position:fixed;bottom:-30px;pointer-events:none;z-index:1;width:var(--sz,14px);height:var(--sz,14px);',
    '  animation:rise var(--d,9s) linear var(--delay,0s) infinite;opacity:0}',
    '.spark svg{width:100%;height:100%;display:block;animation:twinkle 1.6s ease-in-out infinite}',
    '@keyframes rise{0%{transform:translate(0,0) rotate(0);opacity:0}10%{opacity:1}',
    '  100%{transform:translate(var(--dx,40px),-112vh) rotate(200deg);opacity:0}}',
    '@keyframes twinkle{0%,100%{transform:scale(.6);opacity:.5}50%{transform:scale(1.15);opacity:1}}',
    /* butterflies that drift across the screen */
    '.flutter{position:fixed;left:-120px;pointer-events:none;z-index:1;width:var(--sz,60px);height:var(--sz,60px);',
    '  animation:drift var(--d,28s) linear var(--delay,0s) infinite}',
    '.flutter svg{width:100%;height:100%;animation:flap 1.4s ease-in-out infinite;transform-origin:50% 50%}',
    '@keyframes drift{0%{transform:translate(-120px,var(--y,30vh))}50%{transform:translate(55vw,calc(var(--y,30vh) - 60px))}',
    '  100%{transform:translate(calc(100vw + 120px),var(--y,30vh))}}',
    '@keyframes flap{0%,100%{transform:scaleX(1)}50%{transform:scaleX(.55)}}',
    /* star trail that follows the cursor */
    '.trail{position:fixed;pointer-events:none;z-index:60;width:16px;height:16px;margin:-8px 0 0 -8px;',
    '  animation:fade .8s ease-out forwards}',
    '.trail svg{width:100%;height:100%}',
    '@keyframes fade{to{opacity:0;transform:scale(.2) rotate(120deg)}}',
    /* cards wiggle when touched */
    '.card:hover{animation:wiggle .7s ease-in-out}',
    '@keyframes wiggle{0%,100%{rotate:0deg}25%{rotate:-1.6deg}75%{rotate:1.4deg}}',
    '@media (prefers-reduced-motion:reduce){h1.shrik,.spark,.spark svg,.flutter,.flutter svg,.card:hover,.trail{animation:none!important}.spark,.flutter{display:none}}'
  ].join('\n');

  var style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);

  function svgUse(id){
    return '<svg viewBox="0 0 100 100"><use href="#' + id + '"/></svg>';
  }

  // Sparkles rising from the bottom, and a few butterflies drifting across.
  if (!reduce) {
    var SPARK_COLORS = ['#ffd86b', '#ff4f9a', '#4fc3f7', '#c9b6f2', '#ffffff'];
    for (var i = 0; i < 16; i++) {
      var s = document.createElement('div');
      s.className = 'spark';
      s.style.left = (Math.random() * 100) + 'vw';
      s.style.setProperty('--sz', (10 + Math.random() * 14) + 'px');
      s.style.setProperty('--d', (7 + Math.random() * 8) + 's');
      s.style.setProperty('--delay', (-Math.random() * 14) + 's');
      s.style.setProperty('--dx', ((Math.random() - 0.5) * 120) + 'px');
      s.innerHTML = '<svg viewBox="0 0 100 100"><path d="M50 4 Q56 44 96 50 Q56 56 50 96 Q44 56 4 50 Q44 44 50 4Z" fill="' + SPARK_COLORS[i % SPARK_COLORS.length] + '" stroke="' + INK + '" stroke-width="4"/></svg>';
      document.body.appendChild(s);
    }
    var flyers = [
      {id:'st-butterfly', y:'22vh', sz:70, d:30, delay:0},
      {id:'st-butterfly', y:'64vh', sz:52, d:38, delay:-12},
      {id:'st-flower',    y:'42vh', sz:44, d:44, delay:-22}
    ];
    flyers.forEach(function(f){
      var b = document.createElement('div');
      b.className = 'flutter';
      b.style.setProperty('--y', f.y);
      b.style.setProperty('--sz', f.sz + 'px');
      b.style.setProperty('--d', f.d + 's');
      b.style.setProperty('--delay', f.delay + 's');
      b.innerHTML = svgUse(f.id);
      document.body.appendChild(b);
    });

    // Star trail on pointer move, throttled so it stays light.
    var last = 0;
    function trail(x, y){
      var now = Date.now();
      if (now - last < 70) return;
      last = now;
      var t = document.createElement('div');
      t.className = 'trail';
      t.style.left = x + 'px';
      t.style.top = y + 'px';
      t.innerHTML = svgUse(Math.random() < 0.5 ? 'st-sparkle' : 'st-star');
      document.body.appendChild(t);
      setTimeout(function(){ t.remove(); }, 820);
    }
    document.addEventListener('pointermove', function(e){ trail(e.clientX, e.clientY); });
  }
})();
