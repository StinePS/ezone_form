import "./style.scss";
import "./data.json";
// import { greetings } from "./modules/greeting";
// console.log(greetings);

const endpoint = "https://mainbase-7e6d.restdb.io/rest/ezone";
const apikey = "617696f28597142da1745a37";
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  //e.preventDefault();
    const data = {
      gamertag: form.elements.tag.value,
      email: form.elements.email.value,
      password: form.elements.password.value,
      age: form.elements.age.value,
      favouriteGame: form.elements.favourite.value,
      gameGenres: form.elements.gametypes.value,
      improvement: form.elements.value,
      hoursGaming: form.elements.gaming.value,
      sleep: form.elements.sleep.value,
      activity: form.elements.physical.value,
    };
    console.log(data);
    postData(data);

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
  fetch("https://mainbase-7e6d.restdb.io/rest/ezone", {
  method: "post",
  headers: {
    "Content-Type": "application/json; charset=utf-8",
    "x-apikey": "617696f28597142da1745a37",
    "cache-control": "no-cache"
  },
      body: postData
    })
      .then(res => res.json())
      .then(data => console.log(data));
}
