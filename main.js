import "./style.scss";
// import { greetings } from "./modules/greeting";
// console.log(greetings);

window.addEventListener("DOMContentLoaded", siteLoaded);

function siteLoaded() {}

const formPages = Array.from(document.getElementsByClassName("form-carousel"));
formPages.forEach(function (formPage) {
  initCarousel(formPage);
});

function initCarousel(element) {
  let pageIndex = 1;
  updateFormPages();

  function updateFormPages() {
    let i;
    let pages = element.getElementsByClassName("form-page");
    if (pageIndex > pages.length) {
      pageIndex = 1;
    }
    if (pageIndex < 1) {
      pageIndex = pages.length;
    }
    for (i = 0; i < pages.length; i++) {
      pages[i].style.display = "none";
    }
    pages[pageIndex - 1].style.display = "block";
  }

  const nextButton = element.querySelector(".next");
  const prevButton = element.querySelector(".prev");

  nextButton.addEventListener("click", function () {
    pageIndex++;
    updateFormPages();
  });

  prevButton.addEventListener("click", function () {
    pageIndex--;
    updateFormPages();
  });
}
