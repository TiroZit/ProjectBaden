const roomSlider = new Swiper('.room-slider', {
  grabCursor: true,
  loop: true,
  speed: 500,
  preloadImages: false,
  lazy: {
    loadPrevNext: true,
  },
  slidesPerView: 4,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});