// var productSlider = new Splide( '.product__slider', {
//   autoplay   : true,
//   type       : 'fade',
//   heightRatio: 0.5,
//   pagination : false,
//   arrows     : false,
//   cover      : true,
//   fixedWidth : 375,
//   fixedHeight: 550,
// } );

var productSliderSecond = new Splide( '.product__slider_second', {
  autoplay        : true,
  perPage         : 6,
  // rewind          : true,
  fixedWidth      : 75,
  fixedHeight     : 75,
  gap             : 10,
  focus           : 'center',
  pagination      : false,
  arrows          : false,
  direction       : 'ttb',
  cover           : true,
  dragMinThreshold: {
    mouse: 4,
    touch: 10,
  },
} );

// productSlider.sync( productSliderSecond );
// productSlider.mount();
productSliderSecond.mount();
