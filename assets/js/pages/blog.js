const sidebarMenu = document.querySelector('.blog__sidebar');
const sidebarBtn = document.querySelector('.filter-btn');
const filterBtns = [...sidebarMenu.querySelectorAll('.side-filters__btn')];
const selectTema = document.querySelector('.select-tema');

console.log(selectTema.innerText);

const showSidebar = () => {
  let paddingOffset = window.innerWidth - document.body.offsetWidth + 'px';
  document.body.classList.add('disable-scroll');
  document.body.style.paddingRight = paddingOffset;
  sidebarMenu.classList.add('open');
}

const hideSidebar = () => {
  document.body.classList.remove('disable-scroll');
  document.body.style.paddingRight = null;
  sidebarMenu.classList.remove('open');
}

sidebarBtn.addEventListener('click', showSidebar);

sidebarMenu.addEventListener('click', (e) => {
  if (!e.target.classList.contains('side-layout') && !e.target.closest('.side-layout') || e.target.classList.contains('close-btn')) {
    hideSidebar();
  }
});

filterBtns.forEach(el => {
  el.addEventListener('click', (e) => {
    filterBtns.forEach(el => el.classList.remove('active'));
    e.currentTarget.classList.add('active');
    selectTema.querySelector('img').setAttribute('src', `${e.currentTarget.querySelector('img').getAttribute('src')}`);
    selectTema.querySelector('.select-tema__text').innerText = e.currentTarget.innerText;
    hideSidebar();
  })
})
