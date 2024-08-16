var main = new Splide( '.product__slider', {
  type       : 'loop',
  heightRatio: 0.5,
  pagination : false,
  arrows     : true,
  cover      : true,
  fixedWidth : 375,
  fixedHeight: 550,
  gap        : 2,
} );

var thumbnails = new Splide( '.product__slider_second', {
  type            : 'loop',
  perPage         : 5,
  rewind          : true,
  fixedWidth      : 75,
  fixedHeight     : 75,
  isNavigation    : true,
  gap             : 10,
  focus           : 0,
  pagination      : false,
  arrows          : false,
  cover           : true,
  // direction       : 'ttb',
  dragMinThreshold: {
    mouse: 4,
    touch: 10,
  },
  // breakpoints : {
  //   640: {
  //     fixedWidth  : 66,
  //     fixedHeight : 38,
  //   },
  // },
} );

var thumbnails = document.querySelectorAll( '.product__slider_second-md .splide__slide' );
var current;

for ( var i = 0; i < thumbnails.length; i++ ) {
  initThumbnail( thumbnails[ i ], i );
}

function initThumbnail( thumbnail, index ) {
  thumbnail.addEventListener( 'click', function () {
    main.go( index );
  } );
}

main.on( 'mounted move', function () {
  var thumbnail = thumbnails[ main.index ];

  if ( thumbnail ) {
    if ( current ) {
      current.classList.remove( 'is-active' );
    }

    thumbnail.classList.add( 'is-active' );
    current = thumbnail;
  }
} );

// main.sync( thumbnails );
main.mount();
// thumbnails.mount();
