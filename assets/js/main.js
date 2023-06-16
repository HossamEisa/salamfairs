// Init Latest News Carosuel
var latestNewsCarousel = new Swiper(".latest-news-carousel ", {
  effect: "cube",
  speed: 800,
  autoplay: {
    delay: 5000,
  },
  loop: true,
  mousewheel: {
    invert: true,
  },
  cubeEffect: {
    shadow: true,
    slideShadows: true,
    shadowOffset: 20,
    shadowScale: 0.94,
  },
  pagination: {
    el: ".latest-news-carousel  .swiper-pagination",
    clickable: true,
  },
});

// Init Latest News Carosuel
var abeerCarousel = new Swiper(".abeer-carousel ", {
  speed: 800,
  autoplay: {
    delay: 5000,
  },
  loop: true,
  pagination: {
    el: ".abeer-carousel .swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".abeer-carousel .swiper-button-next",
    prevEl: ".abeer-carousel .swiper-button-prev",
  },
});

// Init international-museums-item  Carosuel
var internationalCarosuel = new Swiper(".international-museums-carousel ", {
  speed: 800,
  autoplay: {
    delay: 5000,
  },
  loop: true,
  pagination: {
    el: ".international-museums-carousel .swiper-pagination",
    clickable: true,
  },
});
