new Splide( '.banner__slider', {
  perMove: 1,
  type   : 'loop',
  perPage: 1,
  autoplay: true,
  flickMaxPages: 1,
  gap: 20,
  breakpoints: {
    576: {
      gap: 5,
    },
  }
} ).mount();
