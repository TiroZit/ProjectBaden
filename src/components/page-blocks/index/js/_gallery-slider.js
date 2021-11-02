const gallerySlider = new Swiper('.gallery__slider', {
   simulateTouch: false,
   loop: false,
   speed: 500,
   preloadImages: false,
   lazy: true,
   slidesPerView: '5',
   navigation: {
     nextEl: '.swiper-button-next',
     prevEl: '.swiper-button-prev',
   },
 });