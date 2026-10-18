/* Creator Hub footer detail: a bead divider, a link row to every page,
   a little sticker cluster in the corners, and sparkling gems. Decorative plus navigation. */
(function(){
  var footer = document.querySelector('footer');
  if (!footer) return;
  var INK = '#4a0e16';

  var css = [
    'footer{position:relative;overflow:hidden;text-align:center}',
    '.foot-bead{height:12px;max-width:320px;margin:0 auto 18px;',
    '  background-image:radial-gradient(circle,#ffd86b 3.2px,transparent 3.8px),radial-gradient(circle,#f7b6c8 3.2px,transparent 3.8px);',
    '  background-size:22px 12px;background-position:0 0,11px 0;background-repeat:repeat-x}',
    '.foot-links{display:flex;flex-wrap:wrap;justify-content:center;gap:.5rem;margin:1rem 0 .4rem}',
    '.foot-links a{font-family:"Space Mono",monospace;font-size:.7rem;text-transform:uppercase;letter-spacing:.08em;',
    '  color:var(--cream);text-decoration:none;padding:.45rem .9rem;border-radius:999px;',
    '  border:2px dashed var(--pink);background:rgba(255,247,234,.08);transition:transform .15s,background .15s}',
    '.foot-links a:hover{transform:rotate(-3deg) scale(1.06);background:var(--sun);color:var(--ink)}',
    '.foot-links a.on{background:var(--hot);color:#fff;border-style:solid}',
    '.foot-stamp{font-family:"Caveat",cursive;font-size:1.1rem;color:var(--pink);margin-top:.6rem}',
    '.foot-sticker{position:absolute;pointer-events:none;z-index:0;width:var(--s,60px);height:var(--s,60px);',
    '  animation:bob 5.5s ease-in-out infinite;filter:drop-shadow(0 4px 0 rgba(74,14,22,.3))}',
    '.foot-sticker svg{width:100%;height:100%;overflow:visible}',
    '.foot-gem{position:absolute;width:12px;height:12px;border-radius:50%;pointer-events:none;',
    '  background:radial-gradient(circle at 32% 30%,#fff 0 10%,var(--c) 34%,#222 120%);',
    '  box-shadow:0 0 0 2px rgba(255,255,255,.8);animation:twinkle 2.4s ease-in-out infinite}',
    '.foot-inner{position:relative;z-index:1}',
    '@media (prefers-reduced-motion:reduce){.foot-sticker,.foot-gem{animation:none!important}}'
  ].join('\n');

  var style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);

  // Wrap the existing footer content so the new details sit above the decorations.
  var inner = document.createElement('div');
  inner.className = 'foot-inner';
  while (footer.firstChild) inner.appendChild(footer.firstChild);
  footer.appendChild(inner);

  // Bead divider at the top of the footer.
  var bead = document.createElement('div');
  bead.className = 'foot-bead';
  inner.insertBefore(bead, inner.firstChild);

  // Link row to every page; the current page is highlighted.
  var page = document.body.getAttribute('data-page') || 'index';
  var links = document.createElement('nav');
  links.className = 'foot-links';
  links.setAttribute('aria-label', 'footer');
  [['index.html','Home','index'], ['routine.html','Routine','routine'], ['scripts.html','Ideas & Scripts','scripts'], ['manager.html','Account Manager','manager']]
    .forEach(function(l){
      var a = document.createElement('a');
      a.href = l[0];
      a.textContent = l[1];
      if (l[2] === page) a.className = 'on';
      links.appendChild(a);
    });
  inner.appendChild(links);

  // Little sign-off line.
  var stamp = document.createElement('div');
  stamp.className = 'foot-stamp';
  stamp.textContent = 'your posts, your pace, your little studio ✿';
  inner.appendChild(stamp);

  // Sticker cluster in the corners.
  function sticker(id, pos, size, delay){
    var s = document.createElement('div');
    s.className = 'foot-sticker';
    s.style.setProperty('--s', size + 'px');
    s.style.animationDelay = delay + 's';
    for (var k in pos) s.style[k] = pos[k];
    s.innerHTML = '<svg viewBox="0 0 100 100"><use href="#' + id + '"/></svg>';
    footer.appendChild(s);
  }
  sticker('st-butterfly', {left:'2%', top:'14px'}, 58, 0);
  sticker('st-star',      {right:'3%', top:'10px'}, 52, -2);
  sticker('st-flower',    {left:'7%', bottom:'10px'}, 46, -3);
  sticker('st-bow',       {right:'6%', bottom:'12px'}, 50, -1);

  // Sparkling gems along the edges.
  var GEMS = ['#ff4f9a', '#4fc3f7', '#7bd389', '#c9b6f2', '#ffd86b'];
  [['10%','6px'],['30%','18px'],['70%','10px'],['90%','20px'],['50%','4px']].forEach(function(p, i){
    var g = document.createElement('span');
    g.className = 'foot-gem';
    g.style.setProperty('--c', GEMS[i % GEMS.length]);
    g.style.left = p[0];
    g.style.top = p[1];
    g.style.animationDelay = (-i * 0.5) + 's';
    footer.appendChild(g);
  });
})();
