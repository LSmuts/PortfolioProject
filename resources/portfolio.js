// JavaScript Document

// JavaScript to toggle the dropdown menu
document.addEventListener("DOMContentLoaded", function () {
  var hamburgerMenu = document.querySelector(".hamburger-menu");
  var navbarRightHidden = document.querySelector(".navbar-right-hidden");

  hamburgerMenu.addEventListener("click", function () {
  console.log("Hamburger menu clicked");
  navbarRightHidden.classList.toggle("show-dropdown");
  });
});