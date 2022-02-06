"use strict";

// Handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector(".navbar__menu");

navbarMenu.addEventListener("click", (event) => {
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
  console.log("clicked~");

  exploreContents.classList.toggle("show");
});
