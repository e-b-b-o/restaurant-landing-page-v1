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

if (navTogglerBtn && navList) {
  navTogglerBtn.addEventListener("click", () => {
    navList.classList.toggle("collapsible--expanded");
  });
} else {
  console.info("nav toggler or nav list not found — skipping hamburger setup.");
}

/* JS animation for special */

const _specialsSection = document.querySelector(".specials");
if (
  _specialsSection &&
  specialsTitle &&
  specialItem &&
  specialItem.length > 0 &&
  specialBtn
) {
  const specialsObserver = new IntersectionObserver(
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
          specialsObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  specialsObserver.observe(_specialsSection);
} else {
  console.info(
    "Specials section or required elements missing — skipping specials animation."
  );
}

/* Js animation for welcome  */
const _welcomeSection = document.querySelector(".welcome");
if (_welcomeSection && welcomeContent && welcomeImageContainer) {
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

  welcomeObserver.observe(_welcomeSection);
} else {
  console.info(
    "Welcome section or its elements missing — skipping welcome animation."
  );
}

/* js animation for why choose us */
const _whyChooseUsSection = document.querySelector(".why-choose-us");
if (
  _whyChooseUsSection &&
  whyChooseUsTag &&
  whyChooseUsHeading &&
  whyChooseUsItem &&
  whyChooseUsItem.length > 0
) {
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

  whyChooseUsObserver.observe(_whyChooseUsSection);
} else {
  console.info(
    "Why-choose-us section or its elements missing — skipping animation."
  );
}

/* js animation for story section  */
if (storySection && storyContent && storyImageContainer) {
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

  storyObserver.observe(storySection);
} else {
  console.info(
    "Story section or its elements missing — skipping story animation."
  );
}

/* animation for unique services  */
const uniqueServicesHeading = document.querySelector(
  ".unique-services-heading"
);
const uniqueServicesItem = document.querySelectorAll(".unique-services-item");
const _uniqueServicesSection = document.querySelector(".unique-services");
if (
  _uniqueServicesSection &&
  uniqueServicesHeading &&
  uniqueServicesItem &&
  uniqueServicesItem.length > 0
) {
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
          uniqueServiceObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  uniqueServiceObserver.observe(_uniqueServicesSection);
} else {
  console.info(
    "Unique services or required elements missing — skipping unique services animation."
  );
}

/* Animation for Reservation */
const reservationHeading = document.querySelector(".reservation-heading");
const reservationTitle = document.querySelector(".reservation-title");
const reservationItems = document.querySelector(".reservation-items");
const reservationBtn = document.querySelector(".reservation-btn");
const _reservationSection = document.querySelector(".reservation");
if (
  _reservationSection &&
  reservationHeading &&
  reservationTitle &&
  reservationItems &&
  reservationBtn
) {
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

  reservationObserver.observe(_reservationSection);
} else {
  console.info(
    "Reservation section or its elements missing — skipping reservation animation."
  );
}

/* Animation for footer section */
const footerAbout = document.querySelector(".footer-about");
const footerLinks = document.querySelector(".footer-links");
const footerBottom = document.querySelector(".footer-bottom");
const _footerSection = document.querySelector(".footer");
if (_footerSection && footerAbout && footerLinks && footerBottom) {
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

  footerObserver.observe(_footerSection);
} else {
  console.info("Footer or its elements missing — skipping footer animation.");
}

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
if (marqueeTrack) {
  marqueeTrack.addEventListener("mouseenter", () => {
    marqueeTrack.style.animationPlayState = "paused";
  });

  marqueeTrack.addEventListener("mouseleave", () => {
    marqueeTrack.style.animationPlayState = "running";
  });
} else {
  console.info(
    "No .marquee-track found — skipping marquee hover pause behavior."
  );
}
