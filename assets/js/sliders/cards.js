const drawSlider = (el = '') => {
  return new Splide( `${el}`, {
    perMove: 1,
    type   : 'loop',
    fixedWidth: 140,
    autoplay: true,
    pauseOnHover: true,
    pagination: false,
    padding: { left: 10},
    gap: 10,
    flickMaxPages: 1,
    mediaQuery: 'min',
    breakpoints: {
      576: {
        fixedWidth: 180,
      },
      992: {
        fixedWidth: 260,
        padding: { left: 170, right: 170 },
        gap: 40,
      }
    },
  } ).mount();
}
