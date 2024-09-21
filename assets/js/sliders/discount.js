new Splide( '.discount_slider', {
  perMove: 1,
  type   : 'loop',
  autoplay: true,
  fixedWidth: 360,
  gap: 40,
  pagination: false,
  flickMaxPages: 1,
  breakpoints: {
    576: {
      fixedWidth: 240,
      gap: 10,
    },
    768: {
      gap: 20,
    },
  }
} ).mount();
