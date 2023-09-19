var prevScrollpos = window.scrollY;
/* Get the header element and it's position */
var headerDiv = document.getElementById("header");
function changeHeaderStyle() {
  var currentScrollPos = window.scrollY;
  /* if scrolling down */
  if (prevScrollpos < currentScrollPos && prevScrollpos > 300) {
    headerDiv.style.top = -headerDiv.offsetHeight + "px";
    headerDiv.classList.add("fixed");
  } else if (prevScrollpos < 300) {
    headerDiv.style.top = "0";
    headerDiv.classList.remove("fixed");
  } else {
    /* otherwise if we're scrolling up, fix the nav to the top */
    headerDiv.style.top = "0";
    headerDiv.classList.add("fixed");
  }

  prevScrollpos = currentScrollPos;
}
window.onscroll = function () {
  changeHeaderStyle();
};

if ($("div[data-aos]").length) {
  AOS.init({
    disable: "mobile",
    once: true,
  });
}

if ($(".hero-section-carousel").length) {
  // Init HomePage Latest News Carosuel
  var heroCarousel = new Swiper(".hero-section-carousel ", {
    passiveListeners: false,

    speed: 800,
    autoplay: {
      delay: 15000,
    },
    pagination: {
      el: ".hero-section-carousel  .swiper-pagination",
      clickable: true,
    },
  });
}

if ($(".latest-news-carousel").length) {
  // Init HomePage Latest News Carosuel
  var latestNewsCarousel = new Swiper(".latest-news-carousel ", {
    passiveListeners: false,

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
}

if ($(".abeer-carousel").length) {
  // Init HomePage Latest News Carosuel
  var abeerCarousel = new Swiper(".abeer-carousel ", {
    passiveListeners: false,

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
}
if ($(".international-museums-carousel").length) {
  // Init HomePage international-museums-item  Carosuel
  var internationalCarosuel = new Swiper(".international-museums-carousel ", {
    passiveListeners: false,

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
}

if ($(".news-details-carousel").length) {
  // Init News Details Page  Carosuel
  var newsDetailsCarousel = new Swiper(".news-details-carousel", {
    passiveListeners: false,

    speed: 800,
    autoplay: {
      delay: 5000,
    },
    loop: true,
    pagination: {
      el: ".news-details-carousel .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".news-details-carousel .swiper-button-next",
      prevEl: ".news-details-carousel .swiper-button-prev",
    },
  });
}
// meusemSwiper

if ($(".meusemSwiper").length) {
  // Init News Details Page  Carosuel
  var meusemSwiper = new Swiper(".meusemSwiper", {
    passiveListeners: false,

    speed: 800,
    autoplay: {
      delay: 5000,
    },
    loop: true,
    pagination: {
      el: ".meusemSwiper .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".meusemSwiper .swiper-button-next",
      prevEl: ".meusemSwiper .swiper-button-prev",
    },
  });
}
if ($(".gallery-carousel").length) {
  // Init gallery-carousel   Carosuel
  var galleryCarousel = new Swiper(".gallery-carousel", {
    passiveListeners: false,

    speed: 800,
    slidesPerView: 1,
    spaceBetween: 20,
    autoplay: {
      delay: 5000,
    },
    loop: true,
    navigation: {
      nextEl: ".gallery-carousel .swiper-button-next",
      prevEl: ".gallery-carousel .swiper-button-prev",
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      992: {
        slidesPerView: 4,
      },
    },
  });
}

if ($(".gallery-carousel-madina").length) {
  // Init gallery-carousel   Carosuel
  var galleryCarouselMadina = new Swiper(".gallery-carousel-madina", {
    passiveListeners: false,
    speed: 800,
    slidesPerView: 1,
    spaceBetween: 20,
    autoplay: {
      delay: 5000,
    },
    loop: true,

    navigation: {
      nextEl: ".gallery-carousel-madina .swiper-button-next",
      prevEl: ".gallery-carousel-madina .swiper-button-prev",
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
    },
  });
}

// Init targets-carousel
if ($(".targets-carousel").length) {
  var targetsCarousel = new Swiper(".targets-carousel", {
    speed: 800,
    slidesPerView: 1,
    spaceBetween: 20,
    autoplay: {
      delay: 5000,
    },
    loop: true,
    navigation: {
      nextEl: ".targets-carousel .swiper-button-next",
      prevEl: ".targets-carousel .swiper-button-prev",
    },
    passiveListeners: false,
  });
}


