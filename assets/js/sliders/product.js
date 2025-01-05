var main = new Splide( '.product__slider', {
  type       : 'loop',
  heightRatio: 0.5,
  pagination : false,
  arrows     : true,
  cover      : true,
  fixedWidth : 375,
  fixedHeight: 550,
  gap        : 2,
  breakpoints: {
    520: {
      fixedWidth : '100%',
      fixedHeight: 'auto',
      autoHeight: true,
    },
    768: {
      fixedWidth : 350,
      fixedHeight: 500,
    },
  },
  cover      : true,
  video      : {
    volume: 1.0,
    playerOptions: {
      htmlVideo: {
        muted: true,
      },
    },
  },
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

main.mount( window.splide.Extensions );
