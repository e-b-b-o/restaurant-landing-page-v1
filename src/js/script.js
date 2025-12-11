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
// Initialize booking only if the booking form exists on the page
const _bookingForm = document.querySelector(".reservation-items");
if (_bookingForm) {
  try {
    initBooking();
  } catch (err) {
    console.error("initBooking threw an error:", err);
  }
} else {
  console.info(
    "No .reservation-items found — skipping booking initialization."
  );
}

// dublicating an carousel content

const tracks = document.querySelectorAll(".carousel--content");

tracks.forEach((track) => {
  const cards = [...track.children];

  for (const card of cards) {
    track.appendChild(card.cloneNode(true));
  }
});
// Animation for About Page
const journey = document.querySelector(".journey");
const journeyTitle = document.querySelector(".journey--title");
const journeyCard = document.querySelectorAll(".journey--card");

if (journey && journeyTitle && journeyCard && journeyCard.length > 0) {
  const journeyObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // CSS for the About journey section uses the `active` class.
          // Add `active` so transitions defined in CSS are applied.
          journeyTitle.classList.add("active");
          journeyCard.forEach((card, index) => {
            setTimeout(() => {
              card.classList.add("active");
            }, 500 + index * 100);
          });
          journeyObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  journeyObserver.observe(journey);
} else {
  console.info(
    "Journey section or required elements missing — skipping journey animation."
  );
}

// Animation for menu page

const menuPageSection = document.querySelector(".menu-page");
const menuPageTitle = document.querySelector(".menu-page-title");
const menuPageItems = document.querySelectorAll(".menu-item");
const menuIntro = document.querySelector(".menu-intro");
const menuSearch = document.querySelector("#menu-search");
const menuFilterBtns = document.querySelector(".filters");

if (menuPageSection) {
  // helper: animate menu elements (re-queries `.menu-item` to pick up newly rendered items)
  function animateMenuPage() {
    if (menuPageTitle) menuPageTitle.classList.add("active");
    if (menuIntro) menuIntro.classList.add("active");
    if (menuFilterBtns) menuFilterBtns.classList.add("active");
    if (menuSearch) menuSearch.classList.add("active");

    // Re-query items in case they were rendered after initial script run
    const items = Array.from(document.querySelectorAll(".menu-item"));
    if (items.length > 0) {
      items.forEach((item, index) => {
        setTimeout(() => {
          item.classList.add("active");
        }, 500 + index * 150);
      });
    }
  }

  const manuPageObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateMenuPage();
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  manuPageObserver.observe(menuPageSection);

  // If menu items are rendered dynamically later, trigger animation after render
  // If the menu section is already in view when rendering completes, animate immediately.
  const onMenuRendered = () => {
    const rect = menuPageSection.getBoundingClientRect();
    const inView = rect.top < window.innerHeight && rect.bottom >= 0;
    if (inView) animateMenuPage();
  };

  // Listen to the custom event dispatched by `renderMenu` after it populates the DOM
  const menuContainerElement = document.querySelector(".menu-container");
  if (menuContainerElement) {
    menuContainerElement.addEventListener("menu:rendered", onMenuRendered);
  }
} else {
  console.info("No .menu-page found — skipping menu page animation.");
}
