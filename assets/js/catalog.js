const sidebar = document.querySelector('.sidebar');
const sidebarBtns = [...sidebar.querySelectorAll('.sidebar-block__btn')];
const checkboxLinks = [...sidebar.querySelectorAll('.checkbox-filter__link')]

sidebarBtns.forEach(el => {
  el.addEventListener('click', (e) => {
    const btn = e.currentTarget;
    const sidebarBlock = btn.parentElement;
    sidebarBlock.classList.toggle('open');
  })
});

checkboxLinks.forEach(el => {
  el.addEventListener('click', (e) => {
    e.preventDefault();
    const checkbox = e.currentTarget;
    checkbox.classList.toggle('checkbox-filter__link--checked');
  })
})
