import { qs } from "../utils/dom.js";
export function initContactValidation() {
  const contactForm = qs(".contact--form");
  if (!contactForm) {
    console.warn("Contact form not found for validation.");
    return;
  }
  const errorMsgs = qs(".contact-error-msg");

  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = qs("#contact--name").value.trim();
    const email = qs("#contact--email").value.trim();
    const message = qs("#message").value.trim();
    const subject = qs("#subject").value.trim();

    if (!name || !email || !message || !subject) {
      return showError("Please fill all fields");
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return showError("Enter a valid email");
    }

    showSuccess();
  });

  function showError(text) {
    if (!errorMsgs) return;
    errorMsgs.textContent = text;
    errorMsgs.style.color = "red";
  }
  function showSuccess() {
    if (!errorMsgs) return;
    errorMsgs.style.color = "green";
    errorMsgs.textContent = "Message sent successfully!";
  }

  setTimeout(() => {
    contactForm.reset();
    errorMsgs.textContent = "";
  }, 1500);
}
