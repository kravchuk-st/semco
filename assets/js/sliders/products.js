new Splide( '.products_slider', {
  padding: { left: 120, right: 120 },
  perMove: 1,
  type   : 'loop',
  perPage: 5,
  autoplay: true,
  pauseOnHover: true,
  gap: 40,
  flickMaxPages: number = 1,
} ).mount();
