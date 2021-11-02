const leisureSlider = new Swiper('.leisure__slider', {
   simulateTouch: false,
   loop: true,
   speed: 300,
   preloadImages: false,
   lazy: true,
   navigation: {
     nextEl: '.swiper-button-next',
     prevEl: '.swiper-button-prev',
   },
 });