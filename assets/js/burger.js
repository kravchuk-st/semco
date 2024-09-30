const burgerBtn = document.querySelector('.burger');
const menu = document.querySelector('.overlay-menu');
const katalogBtns = [...document.querySelectorAll('.katalog-btn')];

burgerBtn.addEventListener('click', () => {
  let paddingOffset = window.innerWidth - document.body.offsetWidth + 'px';

  menu.classList.add('open');
  document.body.style.paddingRight = paddingOffset;
  document.body.classList.add('disable-scroll');
});

menu.addEventListener('click', (e) => {
  if (!e.target.classList.contains('overlay-menu__panel') && !e.target.closest('.overlay-menu__panel') || e.target.classList.contains('close-btn')) {
    menu.classList.remove('open');
    document.body.style.paddingRight = null;
    document.body.classList.remove('disable-scroll');
  }

  if (e.target.classList.contains('katalog-link')) {
    e.target.closest(".katalog-layout").classList.toggle('active');
  }

  if (e.target.classList.contains('katalog-hide')) {
    e.target.closest(".katalog-layout").classList.remove('active');
  }

  if (e.target.classList.contains('katalog-btn--sm')) {
    e.target.classList.toggle('active');
  }

  if (e.target.classList.contains('menu-btn--toggle')) {
    e.target.classList.toggle('active');
  }
});

katalogBtns.forEach(el => {
  el.addEventListener('click', e => e.currentTarget.classList.toggle('active'));
});
