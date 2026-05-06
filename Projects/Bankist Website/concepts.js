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

//THIS IS HOW WE CAN CREATE ELEMENTS ::::::::::::::::::::::::::::::::::::::::

//.insertAdjacentHTML

const message = document.createElement("div");
message.classList.add("cookie-message");
// message.textContent = "We use cookies for improving funcionality and analytics.";
message.innerHTML = `We use cookies for improving funcionality and analytics.<button class="btn btn--close-cookie">Got it!</button>`;

// header.prepend(message); // prepend means first child
header.append(message); // append means last child
// header.append(message.cloneNode(true)); // if passed false then it will create shallow copy

//THIS IS HOW WE DELETE ELEMENTS ::::::::::::::::::::::::::::::::::::::::::::::
const closeBtn = document.querySelector(".btn--close-cookie");
closeBtn.addEventListener("click", function (e) {
  message.remove();
});

//STYLES :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
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

// ATTRIBRUTES :::::::::::::::::::::::::::::::::::::::::::::::::::::
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

//CLASSES :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// logo.classList.add();
// logo.classList.remove();
// logo.classList.toggle();
// logo.classList.contains();
