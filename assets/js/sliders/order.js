const orderSlider = (el = '') => {
  return new Splide( `${el}`, {
    fixedWidth: 195,
    perMove: 1,
    type   : 'loop',
    perPage: 4,
    autoplay: true,
    pauseOnHover: true,
    gap: 20,
    flickMaxPages: 1,
    breakpoints: {
      576: {
        fixedWidth: 195,
      },
      768: {
        fixedWidth: 175,
      }
    },
  } ).mount();
}
