const sidebar = document.querySelector('.sidebar');
const sidebarBtn = sidebar.querySelector('.select-btn');
const sidebarLinks = [...sidebar.querySelectorAll('.tabs__nav-btn')];
const sidebarBackdrop = sidebar.querySelector('.sidebar__backdrop');

sidebarBtn.addEventListener('click', () => sidebar.classList.toggle('active'));

sidebarLinks.forEach(el => {
  el.addEventListener('click', (e) => {
    sidebarBtn.innerHTML = e.currentTarget.innerHTML;
    sidebar.classList.remove('active');
  });
});

sidebarBackdrop.addEventListener('click', () => sidebar.classList.remove('active'));
