
'use strict';

/**
 * Add event listener to multiple elements
 */
const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
};

/**
 * Navbar toggle for mobile
 */
const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("nav-active");
};

addEventOnElements(navTogglers, "click", toggleNavbar);

/**
 * Header active on scroll (sticky effect)
 */
const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  header.classList.toggle("active", window.scrollY > 100);
});

/**
 * Scroll Reveal Animation
 */
const revealElements = document.querySelectorAll("[data-reveal]");
const revealDelayElements = document.querySelectorAll("[data-reveal-delay]");

// Apply transition delay from dataset
for (let i = 0, len = revealDelayElements.length; i < len; i++) {
  revealDelayElements[i].style.transitionDelay = revealDelayElements[i].dataset.revealDelay;
}

const reveal = function () {
  for (let i = 0, len = revealElements.length; i < len; i++) {
    const elemTop = revealElements[i].getBoundingClientRect().top;
    const inView = elemTop < window.innerHeight / 1.2;

    if (inView) {
      revealElements[i].classList.add("revealed");
    }
  }
};

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);
