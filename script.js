/* varibales Assigning  */

const navTogglerBtn = document.querySelector(".nav__toggler");
const navList = document.querySelector(".nav__list");
const specialsTitle = document.querySelector(".specials-title");
const specialItem = document.querySelectorAll(".special-item");
const welcomeContent = document.querySelectorAll(".welcome-content-1");
const welcomeImageContainer = document.querySelector(
  ".welcome-image-container"
);
const whyChooseUsItem = document.querySelectorAll(".why-choose-us-item");
const whyChooseUsHeading = document.querySelector(".why-choose-us-heading");
const whyChooseUsTag = document.querySelector(".why-choose-us-tag");

/* Humberger menu */

navTogglerBtn.addEventListener("click", () => {
  navList.classList.toggle("collapsible--expanded");
});

/* JS animation for special */

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        specialsTitle.classList.add("visible");
        specialItem.forEach((card, index) => {
          setTimeout(() => {
            card.classList.add("visible");
          }, 500 + index * 400);
        });
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);
observer.observe(document.querySelector(".specials"));

/* Js animation for welcome  */

const welcomeObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        welcomeContent.forEach((card, index) => {
          setTimeout(() => {
            card.classList.add("visible");
          }, 500 + index * 200);
        });
        setTimeout(() => {
          welcomeImageContainer.classList.add("visible");
        }, 1000);
        welcomeObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

welcomeObserver.observe(document.querySelector(".welcome"));

/* js animation for why choose us */

const whyChooseUsObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        whyChooseUsTag.classList.add("visible");
        setTimeout(() => {
          whyChooseUsHeading.classList.add("visible");
        }, 200);
        whyChooseUsItem.forEach((card, index) => {
          setTimeout(() => {
            card.classList.add("visible");
          }, 500 + index * 400);
        });
        whyChooseUsObserver.unobserve(entries);
      }
    });
  },
  { threshold: 0.2 }
);

whyChooseUsObserver.observe(document.querySelector(".why-choose-us"));
