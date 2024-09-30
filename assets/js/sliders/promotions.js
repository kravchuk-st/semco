const drawSlider = (el = '') => {
  return new Splide( `${el}`, {
    perMove: 1,
    type   : 'loop',
    fixedWidth: 260,
    autoplay: true,
    pauseOnHover: true,
    pagination: false,
    padding: { left: 115, right: 115 },
    gap: 40,
    flickMaxPages: 1,
    breakpoints: {
      768: {
        fixedWidth: 180,
        destroy: true,
      },
    },
  } ).mount();
}
