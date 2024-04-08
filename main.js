const arrow = document.querySelectorAll(".arrow");
const arrow_left = document.querySelectorAll(".arrow-left");
const movieList = document.querySelectorAll(".movie-list");
const movieListWrapper = document.querySelector(".movie-list-wrapper");
const buttons_event = document.querySelectorAll(".button");

arrow_left.forEach(function (arrow_left, i) {
  arrow_left.addEventListener("click", function () {
    const currentTranslate = getTranslateX(movieList[i]);
    elWidth = movieListWrapper.offsetWidth;
    if (getTranslateX(movieList[i]) > -elWidth)
      movieList[i].style.transform = `translateX(${currentTranslate - 300}px)`;
  });
});

arrow.forEach(function (arrow, i) {
  arrow.addEventListener("click", function () {
    const currentTranslate = getTranslateX(movieList[i]);
    elWidth = movieListWrapper.offsetWidth;
    if (getTranslateX(movieList[i]) < elWidth)
      movieList[i].style.transform = `translateX(${currentTranslate + 300}px)`;
  });
});

function getTranslateX(element) {
  const style = window.getComputedStyle(element);
  const matrix = new WebKitCSSMatrix(style.transform);
  return matrix.m41;
}

arrow.forEach(function (arrow, i) {
  arrow.addEventListener("click", function () {
    movieList[i].style.background = "red";
  });
});

/* dark mode */
const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(
  ".container,.navbar,.sidebar,.sidebar i,.toggle,.toggle-ball,.movie-list-filter select,.movie-list-tittle"
);

ball.addEventListener("click", function () {
  items.forEach((item) => item.classList.toggle("active"));
});
