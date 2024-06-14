const drawSlider = (el) => {
  return new Splide( `${el}`, {
    padding: { left: 120, right: 120 },
    perMove: 1,
    type   : 'loop',
    perPage: 5,
    autoplay: true,
    pauseOnHover: true,
    gap: 40,
    flickMaxPages: 1,
  } ).mount();
}
