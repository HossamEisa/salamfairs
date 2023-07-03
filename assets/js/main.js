var prevScrollpos = window.scrollY;
/* Get the header element and it's position */
var headerDiv = document.getElementById("header");
function changeHeaderStyle() {
  var currentScrollPos = window.scrollY;
  /* if scrolling down */
  if (
    prevScrollpos < currentScrollPos &&
    prevScrollpos > 300
  ) {
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

AOS.init({
  disable: "mobile",
  once: true,
});

// Init HomePage Latest News Carosuel
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

// Init HomePage Latest News Carosuel
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

// Init HomePage international-museums-item  Carosuel
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


// Init News Details Page  Carosuel
var newsDetailsCarousel = new Swiper(".news-details-carousel", {
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

// meusemSwiper
meusemSwiper

// Init News Details Page  Carosuel
var meusemSwiper = new Swiper(".meusemSwiper", {
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