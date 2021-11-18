const strokeSlider = new Swiper('.stroke-slider', {
  simulateTouch: false,
  loop: true,
  speed: 500,
  spaceBetween: 10,
  preloadImages: false,
  lazy: {
    loadPrevNext: true,
  },
  watchSlidesProgress: true,
  slidesPerView: 1,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    // when window width is >= 640px
    1400: {
      slidesPerView: 2,
    }
  }
});