new Splide( '.comments_slider', {
  perMove: 1,
  type   : 'loop',
  fixedWidth: 240,
  autoplay: true,
  gap: 10,
  flickMaxPages: 1,
  pagination: false,
  padding: { left: 0, right: 0 },
  mediaQuery: 'min',
  breakpoints: {
    577: {
      fixedWidth: 260,
      gap: 16,
    },
    993: {
      gap: 40,
    }
  },
} ).mount();
