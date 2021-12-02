const roomSlider = new Swiper('.room-slider', {
  loop: false,
  speed: 500,
  spaceBetween: 30,
  preloadImages: false,
  lazy: {
    loadPrevNext: true,
  },
  loadPrevNextAmount: 1,
  grid: {
    rows: 1,
    columns: 1,
  },
  slidesPerView: 1,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    // when window width is >= 640px
    1750: {
      loadPrevNextAmount: 4,
      slidesPerView: 4,
      grid: {
        rows: 2,
        columns: 4,
      },
    },
    1040: {
      loadPrevNextAmount: 3,
      slidesPerView: 3,
      grid: {
        rows: 2,
        columns: 3,
      },
    },
    610: {
      loadPrevNextAmount: 2,
      slidesPerView: 2,
      grid: {
        rows: 1,
        columns: 2,
      },
    }
  }
});