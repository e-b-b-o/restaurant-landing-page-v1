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
const storySection = document.querySelector(".story");
const storyButton = document.querySelector(".story-button");

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
          }, 500 + index * 200);
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
        }, 800);
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
          }, 500 + index * 200);
        });
        whyChooseUsObserver.unobserve(entries);
      }
    });
  },
  { threshold: 0.2 }
);

whyChooseUsObserver.observe(document.querySelector(".why-choose-us"));

/* js animation for story section  */

const storyObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        storySection.classList.add("visible");
        setTimeout(() => {
          storyButton.classList.add("visible");
        }, 1000);
      }
      storyObserver.unobserve;
    });
  },
  { threshold: 0.2 }
);

storyObserver.observe(storySection);

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
      uniqueServiceObserver.unobserve();
    });
  },
  { threshold: 0.2 }
);

uniqueServiceObserver.observe(document.querySelector(".unique-services"));

/* Testimonial Autoplay  and animation */
const testimonials = document.querySelectorAll(".testimonial");
const testimonialContainer = document.querySelector(".testimonial-container");
const sectionTitle = document.querySelector(".section-title");

const testimonialObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        sectionTitle.classList.add("visible");

        setTimeout(() => {
          testimonialContainer.classList.add("visible");
        }, 100);

        // stop observing only when visible
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

// observe the container, not the list
testimonialObserver.observe(testimonialContainer);

let index = 0;

function showNextTestimonial() {
  testimonials[index].classList.remove("active");
  index = (index + 1) % testimonials.length;
  testimonials[index].classList.add("active");
}

setInterval(showNextTestimonial, 4000);

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

reservationObserver.observe(document.querySelector(".reservation"));

/* Animation for footer section */

const footerAbout = document.querySelector(".footer-about");
const footerLinks = document.querySelector(".footer-links");
const footerBottom = document.querySelector(".footer-bottom");

const footerObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        footerAbout.classList.add("visible");
        setTimeout(() => {
          footerLinks.classList.add("visible");
        }, 400);
        setTimeout(() => {
          footerBottom.classList.add("visible");
        }, 800);
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

footerObserver.observe(document.querySelector(".footer"));
