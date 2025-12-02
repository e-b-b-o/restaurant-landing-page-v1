/* varibales Assigning  */

const navTogglerBtn = document.querySelector(".nav__toggler");
const navList = document.querySelector(".nav__list");
const specialsTitle = document.querySelector(".specials-title");
const specialItem = document.querySelectorAll(".special-item");
const specialBtn = document.querySelector(".special-btn");
const welcomeContent = document.querySelector(".welcome-content");
const welcomeImageContainer = document.querySelector(
  ".welcome-image-container"
);
const whyChooseUsItem = document.querySelectorAll(".why-choose-us-item");
const whyChooseUsHeading = document.querySelector(".why-choose-us-heading");
const whyChooseUsTag = document.querySelector(".why-choose-us-tag");
const storySection = document.querySelector(".story");
const storyImageContainer = document.querySelector(".story-image-container");
const storyContent = document.querySelector(".story-content");

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
          }, 500 + index * 150);
        });
        setTimeout(() => {
          specialBtn.classList.add("visible");
        }, 500 + specialItem.length * 150);
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);
const _specialsSection = document.querySelector(".specials");
if (_specialsSection) observer.observe(_specialsSection);

/* Js animation for welcome  */

const welcomeObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        welcomeContent.classList.add("visible");
        welcomeImageContainer.classList.add("visible");
        welcomeObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);
const _welcomeSection = document.querySelector(".welcome");
if (_welcomeSection) welcomeObserver.observe(_welcomeSection);

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
          }, 500 + index * 200);
        });
        whyChooseUsObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);
const _whyChooseUsSection = document.querySelector(".why-choose-us");
if (_whyChooseUsSection) whyChooseUsObserver.observe(_whyChooseUsSection);

/* js animation for story section  */

const storyObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        storyContent.classList.add("visible");
        storyImageContainer.classList.add("visible");
        storyObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);
if (storySection) storyObserver.observe(storySection);

/* animation for unique services  */
const uniqueServicesHeading = document.querySelector(
  ".unique-services-heading"
);
const uniqueServicesItem = document.querySelectorAll(".unique-services-item");

const uniqueServiceObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        uniqueServicesHeading.classList.add("visible");
        uniqueServicesItem.forEach((card, index) => {
          setTimeout(() => {
            card.classList.add("visible");
          }, 500 + index * 200);
        });
      }
      if (entry.isIntersecting) uniqueServiceObserver.unobserve(entry.target);
    });
  },
  { threshold: 0.2 }
);
const _uniqueServicesSection = document.querySelector(".unique-services");
if (_uniqueServicesSection)
  uniqueServiceObserver.observe(_uniqueServicesSection);

/* Animation for Reservation */

const reservationHeading = document.querySelector(".reservation-heading");
const reservationTitle = document.querySelector(".reservation-title");
const reservationItems = document.querySelector(".reservation-items");
const reservationBtn = document.querySelector(".reservation-btn");

const reservationObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          reservationHeading.classList.add("visible");
          reservationTitle.classList.add("visible");
        }, 200);

        setTimeout(() => {
          reservationBtn.classList.add("visible");
          reservationItems.classList.add("visible");
        }, 400);

        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);
const _reservationSection = document.querySelector(".reservation");
if (_reservationSection) reservationObserver.observe(_reservationSection);

/* Animation for footer section */

const footerAbout = document.querySelector(".footer-about");
const footerLinks = document.querySelector(".footer-links");
const footerBottom = document.querySelector(".footer-bottom");

const footerObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          footerAbout.classList.add("visible");
        }, 100);
        setTimeout(() => {
          footerLinks.classList.add("visible");
        }, 300);
        setTimeout(() => {
          footerBottom.classList.add("visible");
        }, 500);
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);
const _footerSection = document.querySelector(".footer");
if (_footerSection) footerObserver.observe(_footerSection);

// Menu render , filter , search and pagination

import { renderMenu } from "./components/renderMenu.js";
import { initFilters } from "./components/filters.js";
import { initSearch } from "./components/search.js";
import { initPagination } from "./components/pagination.js";
import { initBooking } from "./components/booking.js";
import { setupInFiniteMarquee } from "./utils/infiniteMarquee.js";

const menuContainer = document.querySelector(".menu-container");

if (menuContainer) {
  renderMenu(menuContainer, []);

  // Initialize features that depend on the menu container
  initFilters(menuContainer);
  initSearch(menuContainer);
  initPagination(menuContainer);
} else {
  console.info(
    "No .menu-container found on this page — skipping menu initialization."
  );
}
try {
  initBooking();
} catch (err) {
  console.error("initBooking threw an error:", err);
}
try {
  setupInFiniteMarquee(".marquee-track");
} catch (err) {
  console.error("setupInFiniteMarquee threw an error:", err);
}

const marqueeTrack = document.querySelector(".marquee-track");

marqueeTrack.addEventListener("mouseenter", () => {
  marqueeTrack.style.animationPlayState = "paused";
});

marqueeTrack.addEventListener("mouseleave", () => {
  marqueeTrack.style.animationPlayState = "running";
});
