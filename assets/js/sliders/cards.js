const drawSlider = (el = '') => {
  return new Splide( `${el}`, {
    padding: { left: 170, right: 170 },
    perMove: 1,
    type   : 'loop',
    fixedWidth: '260px',
    autoplay: true,
    pauseOnHover: true,
    pagination: false,
    gap: 40,
    flickMaxPages: 1,
  } ).mount();
}
