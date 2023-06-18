var prevScrollpos = window.scrollY;

/* Get the header element and it's position */
var headerDiv = document.getElementById("header");
var headerBottom = headerDiv.offsetTop + headerDiv.offsetHeight;

window.onscroll = function () {
  var currentScrollPos = window.scrollY;
  console.log("prevScrollpos", prevScrollpos);
  console.log("طcurrentScrollPos", currentScrollPos);
  /* if scrolling down */
  if (prevScrollpos <= currentScrollPos && prevScrollpos !== currentScrollPos) {
    headerDiv.classList.remove("fixed");
    headerDiv.style.top = "-7.2rem";
  } else {
    /* otherwise if we're scrolling up, fix the nav to the top */
    if (currentScrollPos < 100) {
      headerDiv.classList.remove("fixed");
      headerDiv.style.top = "0";
    } else {
      headerDiv.classList.add("fixed");
      headerDiv.style.top = "0";
    }
  }

  prevScrollpos = currentScrollPos;
};

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
