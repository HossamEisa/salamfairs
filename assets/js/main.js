var prevScrollpos = window.scrollY;

/* Get the header element and it's position */
var headerDiv = document.getElementById("header");
// var headerBottom = headerDiv.offsetTop + headerDiv.offsetHeight;

function changeHeaderStyle() {
  var currentScrollPos = window.scrollY;
  /* if scrolling down */
  if (prevScrollpos <= currentScrollPos && prevScrollpos !== currentScrollPos) {
    headerDiv.classList.remove("fixed");
    headerDiv.style.top = "-100%";
  } else {
    /* otherwise if we're scrolling up, fix the nav to the top */
    headerDiv.style.top = "0";
    if (currentScrollPos <= headerDiv.offsetHeight) {
      headerDiv.classList.remove("fixed");
    } else {
      headerDiv.classList.add("fixed");
    }
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
