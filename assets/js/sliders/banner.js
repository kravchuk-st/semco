new Splide( '.banner__slider', {
  perMove: 1,
  type   : 'loop',
  perPage: 1,
  autoplay: true,
  flickMaxPages: 1,
  gap: 20,
  breakpoints: {
    768: {
      gap: 3,
    },
  }
} ).mount();
