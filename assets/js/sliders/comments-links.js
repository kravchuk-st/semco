new Splide( '.comments_splide', {
  width: 262,
  perMove: 1,
  type   : 'loop',
  perPage: 4,
  fixedWidth: 58,
  fixedHeight: 58,
  autoplay: true,
  gap: 10,
  flickMaxPages: 1,
  arrows: false,
  pagination: false,
  breakpoints: {
    576: {
      width: 152,
      fixedWidth: 32,
      fixedHeight: 32,
    },
    992: {
      width: 184,
      fixedWidth: 40,
      fixedHeight: 40,
      gap: 8,
    }
  },
} ).mount();
