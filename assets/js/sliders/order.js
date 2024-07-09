const orderSlider = (el = '') => {
  return new Splide( `${el}`, {
    fixedWidth: '195px',
    perMove: 1,
    type   : 'loop',
    perPage: 4,
    autoplay: true,
    pauseOnHover: true,
    gap: 20,
    flickMaxPages: 1,
  } ).mount();
}
