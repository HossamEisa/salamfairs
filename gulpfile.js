const gulp = require("gulp");
const { series } = require("gulp");
const { build } = require("gulp");
const minify = require('gulp-minify');

//minify CSS
(cleanCSS = require("gulp-clean-css")),
  //minify JS
  (terser = require("gulp-terser")),
  //concat files
  (concat = require("gulp-concat"));
// Minify CSS to Build
function minifyCSS() {
  return gulp
    .src([
      "./assets/css/bootstrap.rtl.min.css",
      "./assets/css/fontawesome.css",
      "./assets/css/swiper-bundle.min.css",
      "./assets/css/aos.css",
      "./assets/css/style.min.css",
    ])
    .pipe(
      cleanCSS({
        compatibility: "ie8",
      })
    )
    .pipe(concat("main.min.css"))
    .pipe(minify())
    .pipe(gulp.dest("./assets/css/"));
}
// Minify JS to Build

function minifyJS() {
  return gulp
    .src([
      "./assets/js/jquery-3.7.0.min.js",
      "./assets/js/bootstrap.bundle.min.js",
      "./assets/js/swiper-bundle.min.js",
      "./assets/js/aos.js",
      "./assets/js/main.js",
    ])
    .pipe(terser())
    .pipe(concat("main.min.js"))
    .pipe(gulp.dest("./assets/js/"));
}

exports.build = build;
exports.default = series(minifyJS, minifyCSS);
