import "./style.scss";
import "./data.json";
// import { greetings } from "./modules/greeting";
// console.log(greetings);

const endpoint = "https://mainbase-7e6d.restdb.io/rest/ezone";
const apikey = "617696f28597142da1745a37";

window.addEventListener("load", (e) => {
  document.querySelector("button.submitBtn").addEventListener("click", () => {
    const data = {
      gamertag: document.querySelector("#gamertag").value,
      email: document.querySelector("#email").value,
      password: document.querySelector("#password").value,
      age: document.querySelector("#age").value,
      favouriteGame: document.querySelector("#favourite").value,
      gameGenres: document.querySelector("#gametypes").value,
      improvement: document.querySelector('.improveCheckbox:checked').value,
      hoursGaming: document.querySelector("#hoursGaming").value,
      sleep: document.querySelector("#sleep").value,
      activity: document.querySelector("#physical").value,
    };
    postData(data);
  });
});

window.addEventListener("DOMContentLoaded", siteLoaded);

function siteLoaded() {}

const formPages = Array.from(document.getElementsByClassName("form-carousel"));
formPages.forEach((formPage) => {
  initCarousel(formPage);
});

// Carousel from https://www.w3schools.com/howto/howto_js_slideshow.asp
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

  nextButton.addEventListener("click", () => {
    pageIndex++;
    updateFormPages();
  });

  prevButton.addEventListener("click", () => {
    pageIndex--;
    updateFormPages();
  });
}

function postData(data){
  const postData = JSON.stringify(data);
  fetch(endpoint, {
  method: "post",
  headers: {
    "Content-Type": "application/json; charset=utf-8",
    "x-apikey": apikey,
    "cache-control": "no-cache"
  },
      body: postData
    })
      .then(res => res.json())
      .then(data => console.log(data));
}
