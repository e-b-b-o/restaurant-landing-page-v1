/* varibales Assigning  */

const navTogglerBtn = document.querySelector(".nav__toggler");
const navList = document.querySelector(".nav__list");
const specialsTitle = document.querySelector(".specials-title");
const specialItem = document.querySelectorAll(".special-item");
const welcomeContent = document.querySelectorAll(".welcome-content-1");
const welcomeImageContainer = document.querySelector(
  ".welcome-image-container"
);

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
          }, 500 + index * 400);
        });
        setTimeout(() => {
          welcomeImageContainer.classList.add("visible");
        }, 700);
        welcomeObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

welcomeObserver.observe(document.querySelector(".welcome"));
