"use strict";

// Make navbar blur when it is scrolled
const navbar = document.querySelector("#navbar");
const navbarHeight = navbar.getBoundingClientRect().height;

document.addEventListener("scroll", () => {
  if (window.scrollY > navbarHeight) {
    navbar.classList.add("navbar--light");
  } else {
    navbar.classList.remove("navbar--light");
  }
});

// Handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector(".navbar__menu");

navbarMenu.addEventListener("click", (event) => {
  console.log("clicked");
  const target = event.target;
  const link = target.dataset.link;
  console.log(link);
  if (link == null) {
    return;
  }
  const scroll = document.querySelector(link);
  scroll.scrollIntoView({ behavior: "smooth" });
});

// Handle click on "explore me" button on home
const exploreBtn = document.querySelector(".home__explore");
const exploreContents = document.querySelector(".home__explore-contents");
exploreBtn.addEventListener("click", () => {
  exploreContents.classList.toggle("show");
});

// Handle click on "LET'S TALK" button on home
const talkBtn = document.querySelector(".talk__btn");

talkBtn.addEventListener("click", () => {
  const scroll = document.querySelector("#contact");
  scroll.scrollIntoView({ behavior: "smooth" });
});

// Handle click on "arrow up" button
const arrowUpBtn = document.querySelector(".arrow-up");
arrowUpBtn.addEventListener("click", () => {
  const scroll = document.querySelector("#home");
  scroll.scrollIntoView({ behavior: "smooth" });
});

// Show "arrow up" button when scrolling down
const home = document.querySelector("#home");
const homeHeight = home.getBoundingClientRect().height / 4;

document.addEventListener("scroll", () => {
  if (window.scrollY > homeHeight) {
    arrowUpBtn.classList.add("visible");
  } else {
    arrowUpBtn.classList.remove("visible");
  }
});
