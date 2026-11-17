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
  const progress = document.getElementById('progress');
  let requested = false;
  const update = () => { const amount = Math.max(0,document.documentElement.scrollHeight-window.innerHeight); progress.style.width = (amount ? window.scrollY/amount*100 : 0) + '%';requested=false;};
  window.addEventListener('scroll',()=>{if(!requested){requested=true;requestAnimationFrame(update)}},{passive:true});
  window.addEventListener('resize',update);update();

  const phoneButton = document.querySelector('[data-phone-reveal]');
  const phoneValue = document.getElementById('phoneValue');
  if (phoneButton && phoneValue) {
    const number = atob('KzcgKDkyOSkgNTk1LTMwLTcx');
    phoneButton.addEventListener('click', () => {
      if (phoneValue.querySelector('a')) return;
      const link = document.createElement('a');
      link.href = 'tel:' + number.replace(/[^\d+]/g, '');
      link.textContent = number;
      phoneValue.replaceChildren(link);
      phoneButton.setAttribute('aria-expanded', 'true');
      link.focus();
    });
  }
})();