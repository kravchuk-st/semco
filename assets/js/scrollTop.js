const topControl = document.querySelector('.top-control');

window.addEventListener('scroll', () => {
  if (scrollY < 700) {
    topControl.style.opacity = "0";
  } else {
    topControl.style.opacity = "1";
  }
})

topControl.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
