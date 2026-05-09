"use strict";

const btnScrollTo = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");

btnScrollTo.addEventListener("click", function (e) {
  const s1coords = section1.getBoundingClientRect();

  //Using scrollTo method to implement scroll:
  // window.scrollTo(
  //   s1coords.left + window.scrollX,
  //   s1coords.top + window.scrollY,
  // );

  //Smooth scroll implementation:
  // window.scrollTo({
  //   left: s1coords.left + window.scrollX,
  //   top: s1coords.top + window.scrollY,
  //   behavior: "smooth",
  // });

  //Modern clean way:
  section1.scrollIntoView({
    behavior: "smooth",
  });
});

// BAD WAY OF ATTACHING EVENT HANDLER
// document.querySelectorAll(".nav__link").forEach((elem) => {
//   elem.addEventListener("click", function (e) {
//     e.preventDefault();
//     console.log("LINK");
//     const id = this.getAttribute("href");
//     document.querySelector(id).scrollIntoView({ behavior: "smooth" });
//   });
// });

//EVENT DELEGATION : Add event listener to common parent element and in that parent listener detect what element originated the event !

document.querySelector(".nav__links").addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.classList.contains("nav__link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

// Building Tabbed Component
const tabs = document.querySelectorAll(".operations__tab");
const tabsContainer = document.querySelector(".operations__tab-container");
const tabsContent = document.querySelectorAll(".operations__content");

tabsContainer.addEventListener("click", function (e) {
  const clickedBtn = e.target.closest(".operations__tab");
  if (!clickedBtn) return;
  tabs.forEach((tab) => {
    tab.classList.remove("operations__tab--active");
  });
  clickedBtn.classList.add("operations__tab--active");

  //Activate content
  const content = document.querySelector(
    `.operations__content--${clickedBtn.dataset.tab}`,
  );
  console.log(content);
  tabsContent.forEach((content) => {
    content.classList.remove("operations__content--active");
  });
  content.classList.add("operations__content--active");
});

// Implementing Faded effect on hover on nav links:
const navbarContainer = document.querySelector(".nav");

const handleHover = function (e) {
  if (e.target.classList.contains("nav__link")) {
    const link = e.target;
    const siblings = link.closest(".nav").querySelectorAll(".nav__link");
    const logo = link.closest(".nav").querySelector(".nav__logo");

    siblings.forEach((item) => {
      if (item !== link) {
        item.style.opacity = this;
      }
      logo.style.opacity = this;
    });
  }
};

//Old way
// navbarContainer.addEventListener("mouseover", function (e) {
//   handleHover(e, "0.5");
// });
// navbarContainer.addEventListener("mouseout", function (e) {
//   handleHover(e, "1");
// });

//Better way
navbarContainer.addEventListener("mouseover", handleHover.bind(0.5));
navbarContainer.addEventListener("mouseout", handleHover.bind(1));

// // Bad way of Implementing sticky navigation after certain scroll point

// const initialCoords = section1.getBoundingClientRect();

// window.addEventListener("scroll", function () {
//   if (window.scrollY >= initialCoords.top) {
//     navbarContainer.classList.add("sticky");
//   } else {
//     navbarContainer.classList.remove("sticky");
//   }
// });

// IntersectionObserver API

const header = document.querySelector(".header");
const navHeight = navbarContainer.getBoundingClientRect().height;

const obsCallback = function ([entry], observer) {
  if (!entry.isIntersecting) {
    navbarContainer.classList.add("sticky");
  } else {
    navbarContainer.classList.remove("sticky");
  }
};

const obsOptions = {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
};

const observer = new IntersectionObserver(obsCallback, obsOptions);

observer.observe(header);

// Implementing lazy loading images using Intersection Observer API
const targetImages = document.querySelectorAll("img[data-src]");

const loading = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  //replace src attribute with data-src
  entry.target.src = entry.target.dataset.src;

  entry.target.addEventListener("load", function () {
    entry.target.classList.remove("lazy-img");
  });
  observer.unobserve(entry.target);
};
const loadingOption = {
  root: null,
  threshold: 0,
  rootMargin: "200px",
};

const imgObserver = new IntersectionObserver(loading, loadingOption);

targetImages.forEach((img) => {
  imgObserver.observe(img);
});

// Revealing section on scroll using Intersection API

const sections = document.querySelectorAll(".section");

const revealCallback = function (entries, observer) {
  console.log("These are entries", entries);
  const [entry] = entries;
  console.log("This is entry", entry);
  console.log("This is entry target", entry.target);

  //remove hidden class
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("section--hidden");

  sectionObserver.unobserve(entry.target);
};

const revealOptions = {
  root: null,
  threshold: 0.15,
};

const sectionObserver = new IntersectionObserver(revealCallback, revealOptions);

sections.forEach((section) => {
  sectionObserver.observe(section);
});

const slider = function () {
  // Building slider component :
  const slides = document.querySelectorAll(".slide");
  const slider = document.querySelector(".slider");
  const dotContainer = document.querySelector(".dots");

  //selecting the buttons
  const btnLeft = document.querySelector(".slider__btn--left");
  const btnRight = document.querySelector(".slider__btn--right");

  let currentSlide = 0;
  const maxSlide = slides.length;

  //goint to next slide:

  const goToSlides = function (slide) {
    slides.forEach((s, index) => {
      s.style.transform = `translateX(${(index - slide) * 100}%)`;
    });
  };

  // implementing the dots

  const createDots = function () {
    slides.forEach((slide, index) => {
      dotContainer.insertAdjacentHTML(
        "beforeend",
        ` <button class="dots__dot" data-slide="${index}"></button>
     `,
      );
    });
  };

  const activateDot = function (slide) {
    document.querySelectorAll(".dots__dot").forEach((dot) => {
      dot.classList.remove("dots__dot--active");
    });
    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add("dots__dot--active");
  };

  dotContainer.addEventListener("click", function (e) {
    if (e.target.classList.contains("dots__dot")) {
      const { slide } = e.target.dataset;
      goToSlides(slide);
      activateDot(slide);
    }
  });

  const goRightSide = function () {
    if (currentSlide === maxSlide - 1) {
      currentSlide = 0;
    } else {
      currentSlide++;
    }
    goToSlides(currentSlide);
    activateDot(currentSlide);
  };

  const goLeftSide = function () {
    if (currentSlide === 0) {
      currentSlide = maxSlide - 1;
    } else {
      currentSlide--;
    }
    goToSlides(currentSlide);
    activateDot(currentSlide);
  };

  //init
  const init = function () {
    goToSlides(0);
    createDots();
    activateDot(0);
  };

  init();

  //evet listeners
  btnRight.addEventListener("click", goRightSide);
  btnLeft.addEventListener("click", goLeftSide);

  // part 2

  document.addEventListener("keydown", function (e) {
    console.log(e);
    if (e.key === "ArrowRight") {
      goRightSide();
    }
    if (e.key === "ArrowLeft") {
      goLeftSide();
    }
  });
};

slider();
