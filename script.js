(() => {
  'use strict';
  const menuToggle = document.getElementById('menuToggle');
  const siteNav = document.getElementById('siteNav');
  if (menuToggle && siteNav) {
    const setMenu = open => {
      siteNav.classList.toggle('is-open', open);
      menuToggle.setAttribute('aria-expanded', String(open));
    };
    menuToggle.addEventListener('click', () => setMenu(!siteNav.classList.contains('is-open')));
    siteNav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setMenu(false)));
    document.addEventListener('keydown', event => { if (event.key === 'Escape') setMenu(false); });
    window.addEventListener('resize', () => { if (window.innerWidth > 760) setMenu(false); });
  }

  document.getElementById('year').textContent = new Date().getFullYear();

  const marquee = document.querySelector('.marquee');
  const marqueeToggle = document.getElementById('marqueeToggle');
  if (marquee && marqueeToggle) {
    marqueeToggle.addEventListener('click', () => {
      const paused = marquee.classList.toggle('is-paused');
      marqueeToggle.setAttribute('aria-pressed', String(paused));
      marqueeToggle.setAttribute('aria-label', paused ? 'Play the interests ticker' : 'Pause the interests ticker');
      marqueeToggle.title = paused ? 'Play the interests ticker' : 'Pause the interests ticker';
    });
    marqueeToggle.title = 'Pause the interests ticker';
  }

  const progress = document.getElementById('progress');
  let requested = false;
  const update = () => { const amount = Math.max(0,document.documentElement.scrollHeight-window.innerHeight); progress.style.width = (amount ? window.scrollY/amount*100 : 0) + '%';requested=false;};
  window.addEventListener('scroll',()=>{if(!requested){requested=true;requestAnimationFrame(update)}},{passive:true});
  window.addEventListener('resize',update);update();
})();