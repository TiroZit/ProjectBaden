const mainSlider = new Swiper('.main-slider__container', {
   grabCursor: true,
   loop: true,
   speed: 500,
   preloadImages: false,
   lazy: {
    loadPrevNext: true,
   },
   pagination: {
     el: '.swiper-pagination',
     clickable: true,
   },
   navigation: {
     nextEl: '.swiper-button-next',
     prevEl: '.swiper-button-prev',
   },
 });