export function setActiveLinks() {
  const currentPage =
    window.location.pathname.split("/").pop() || "index.html";

  const links = document.querySelectorAll(".nav__item a, .footer-lists a");

  links.forEach((link) => {
    const linkPage = link.getAttribute("href");

    if (linkPage === currentPage) {
      link.classList.add("highlight");
    }
  });
}
