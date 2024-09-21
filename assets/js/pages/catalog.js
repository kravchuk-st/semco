const sidebarMenu = document.querySelector('.sidebar');
const sidebarBtn = document.querySelector('.filter-btn');
const catalogBtns = [...document.querySelectorAll('.catalog-view__btn')];
const catalogContent = document.querySelector('.catalog-grid');

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
  if (!e.target.classList.contains('sidebar__layout') && !e.target.closest('.sidebar__layout') || e.target.classList.contains('close-btn')) {
    hideSidebar();
  }
});

catalogBtns.forEach(el => {
  el.addEventListener('click', (e) => {
    catalogBtns.forEach(el => el.classList.remove('catalog-view__btn_active'));
    e.currentTarget.classList.add('catalog-view__btn_active')
    const dataset = e.currentTarget.dataset.view;
    if (dataset === 'col') {
      catalogContent.classList.add('catalog-grid_col');
    } else {
      catalogContent.classList.remove('catalog-grid_col');
    }
  })
});
