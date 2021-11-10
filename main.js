import "./style.scss";
import data from "./data.json";
import initCombobox from "./modules/combobox.js";

window.addEventListener("DOMContentLoaded", siteLoaded);

function siteLoaded() {
  const formPages = Array.from(document.getElementsByClassName("form-carousel"));
  // Make a "slide" for each page in the form
  formPages.forEach((formPage) => {
    initCarousel(formPage);
  });

  // Get the names of the available games from the json-file
  let gameData = data.games;
  initCombobox(document.getElementById("favourite"), gameData);
}

// Carousel inspired by https://www.w3schools.com/howto/howto_js_slideshow.asp
function initCarousel(element) {
  let pageIndex = 1;

  const nextButton = element.querySelector(".next");
  const prevButton = element.querySelector(".prev");
  const submitBtn = element.querySelector(".submitBtn");

  updateFormPages();

  function updateFormPages() {
    let i;
    let pages = element.getElementsByClassName("form-page");

    // Carousel that allows you to go "all the way round" - Fixed by hiding buttons further down
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

    // Update visibility of buttons according to form-page
    if (pageIndex > 1) {
      prevButton.classList.remove("hidden");
    } else prevButton.classList.add("hidden");

    if (pageIndex === pages.length) {
      nextButton.classList.add("hidden");
      submitBtn.classList.remove("hidden");
    } else {
      nextButton.classList.remove("hidden");
      submitBtn.classList.add("hidden");
    }
  }

  nextButton.addEventListener("click", () => {
    pageIndex++;
    updateFormPages();
  });

  prevButton.addEventListener("click", () => {
    pageIndex--;
    updateFormPages();
  });
}
