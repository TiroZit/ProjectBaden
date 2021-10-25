const gallerySlider = new Swiper('.gallery__slider', {
   simulateTouch: false,
   loop: false,
   speed: 500,
   slidesPerView: 'auto',
   navigation: {
     nextEl: '.swiper-button-next',
     prevEl: '.swiper-button-prev',
   },
 });