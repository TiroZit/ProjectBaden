const gallerySlider = new Swiper('.gallery__slider', {
   simulateTouch: false,
   loop: false,
   speed: 500,
   preloadImages: false,
   lazy: {
    loadPrevNext: true,
   },
   watchSlidesProgress: true,
   slidesPerView: 'auto',
   navigation: {
     nextEl: '.swiper-button-next',
     prevEl: '.swiper-button-prev',
   },
 });