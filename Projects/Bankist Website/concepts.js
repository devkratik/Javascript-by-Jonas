"use strict";

//THIS IS HOW WE CAN SELECT ELEMENTS :::::::::::::::::::::::::::::::::::::::
console.log(document.documentElement);
console.log(document.body);
console.log(document.head);

const header = document.querySelector(".header");
const allSection = document.querySelectorAll(".section");
console.log(allSection);

document.getElementById("section--1");
const allButtons = document.getElementsByTagName("button");
console.log(allButtons);

console.log(document.getElementsByClassName("btn"));

//THIS IS HOW WE CAN CREATE ELEMENTS ::::::::::::::::::::::::::::::::::::::::::::::::::::

//.insertAdjacentHTML

const message = document.createElement("div");
message.classList.add("cookie-message");
// message.textContent = "We use cookies for improving funcionality and analytics.";
message.innerHTML = `We use cookies for improving funcionality and analytics.<button class="btn btn--close-cookie">Got it!</button>`;

// header.prepend(message); // prepend means first child
header.append(message); // append means last child
// header.append(message.cloneNode(true)); // if passed false then it will create shallow copy

//THIS IS HOW WE DELETE ELEMENTS :::::::::::::::::::::::::::::::::::::::::::::::::::::::::
const closeBtn = document.querySelector(".btn--close-cookie");
closeBtn.addEventListener("click", function (e) {
  message.remove();
});

//STYLES :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
message.style.backgroundColor = "#37383d";
message.style.width = "105%";

console.log(message.style.color); // nothing as it is inside stylesheet not inline
console.log(message.style.backgroundColor);

console.log(getComputedStyle(message).color); // this is trick to use this getComputedStyle method
console.log(getComputedStyle(message).height);

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 40 + "px";

// manipulating the document root
document.documentElement.style.setProperty("--color-primary", "orangered");

// ATTRIBRUTES ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
const logo = document.querySelector(".nav__logo ");
console.log(logo);

console.log(logo.alt);
console.log(logo.src);

// we can also set alt text
logo.alt = `Beautiful minimalist logo`;

logo.setAttribute("company", "Bankist");
console.log(logo);

//absolute and relative src attribute value in images
console.log(logo.getAttribute("src")); // relative src value
console.log(logo.src); // absolute src value

// same is true for href in anchor tag

//Data attributes
console.log(logo.dataset.versionNumber);

//CLASSES ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

// logo.classList.add();
// logo.classList.remove();
// logo.classList.toggle();
// logo.classList.contains();

// GETTING COORDINATES OF ANY ELEMENTS :::::::::::::::::::::::::::::::::::::::::::::::::::::

/*

🔷Yes — getBoundingClientRect() is the main method used to get an element’s coordinates and size relative to the viewport (visible browser window).
 
top → distance from top of viewport
left → distance from left of viewport
right → distance from left side to element’s right edge
bottom → distance from top side to element’s bottom edge

🔷 To get the coordinated of current scroll position i.e. from top of the page to current viewport top. we use scrollX for horizontal scroll and scrollY for vertical scroll 

🔷 We can also get width and height of viewport by using 

document.DocumentElement.clientHeight
document.DocumentElement.clientWidth methods as well

🔷 To implement the scroll functionality we can use scrollTo() method which is old way of doing this and also we now can use scrollIntoView() method on element where we want scroll to.


*/

//Best way of handlind event
const h1 = document.querySelector("h1");

const h1Handler = function (e) {
  alert("h1:great! You are reading the heading!");
};

h1.addEventListener("mouseenter", h1Handler);

setTimeout(() => h1.removeEventListener("mouseenter", h1Handler), 3000);

// old way of setting event handler:
// h1.onmouseenter = function (e) {
//   alert(
//     "different way of attaching event listener by setting on property on html element",
//   );
// };

// 🔷 Concept : Event Propogation Bubbling and Capturing

//randomInt

const randomInt = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const randomColor = () =>
  `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;
console.log(randomColor());

document.querySelector(".nav__link").addEventListener("click", function (e) {
  this.style.backgroundColor = randomColor();
  console.log("LINK", e.target, e.currentTarget);

  //we can stop propagation
  // e.stopPropagation();
});
document.querySelector(".nav__links").addEventListener("click", function (e) {
  this.style.backgroundColor = randomColor();
  console.log("LINKS CONTAINER", e.target, e.currentTarget);
});
document.querySelector(".nav").addEventListener(
  "click",
  function (e) {
    this.style.backgroundColor = randomColor();
    console.log("NAV", e.target, e.currentTarget);
  },
  true,
);

// DOM TRAVERSING ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

//going downwards of h1

console.log(h1.querySelectorAll(".highlight")); // all elem with classes highlight in h1. will go deep inside no matter what!
console.log(h1.childNodes); // they return all types of nodes in a nodelist okay that is text or comment as well
console.log(h1.children); // this will return only element nodes but inside the html collection also only direct children element only okay

h1.firstElementChild.style.color = `white`;
h1.lastElementChild.style.color = "teal";

//going upwards of h1
console.log(h1.parentNode);
console.log(h1.parentElement);

h1.closest(".header").style.background = `var(--gradient-secondary)`;

//going sideways
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

//both of above method gives only element siblins if not then null

console.log(h1.previousSibling);
console.log(h1.nextSibling);

// both of the above method give any sibling like text and comment as well

// Intersection observer API - concept

const section1 = document.querySelector("#section--1");

const observerCallback = function (entries, observer) {
  entries.forEach((entry) => {
    console.log(entry);
  });
};

const obsOptions = {
  root: null,
  threshold: [0, 0.2],
};

const observer = new IntersectionObserver(observerCallback, obsOptions);
observer.observe(section1);
