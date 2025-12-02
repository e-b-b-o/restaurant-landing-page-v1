import { qs } from "../utils/dom.js";

export function initBooking() {
  console.log("initBooking: initializing booking module");
  const form = qs(".reservation-items");
  if (!form) {
    console.warn(
      "initBooking: .reservation-items form not found — booking disabled"
    );
    return;
  }
  const errorMsg = qs(".error-msg");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const firstName = qs("#first-name").value.trim();
    const lastName = qs("#last-name").value.trim();
    const email = qs("#email").value.trim();
    const phone = qs("#phone").value.trim();
    const time = qs("#time").value;
    const date = qs("#date").value;
    const person = qs("#person").value;
    if (
      !firstName ||
      !lastName ||
      !email ||
      !phone ||
      !time ||
      !date ||
      !person
    ) {
      return ShowError("Please fill all fields");
    }
    const phoneRegex = /^[0-9]{9,15}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!phoneRegex.test(phone)) {
      return ShowError("Enter a valid phone number");
    }
    if (!emailRegex.test(email)) {
      return ShowError("Enter a valid email");
    }
    if (person <= 0) {
      return ShowError("Guests must be at least 1");
    }

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const selectedDate = new Date(date);
    if (selectedDate < today) {
      return ShowError("Select a valid date");
    }
    if (time < "10:00" || time > "22:00") {
      return ShowError("We are only open from 10:00AM to 10:00PM");
    }
    showSuccess();
  });

  function ShowError(text) {
    if (!errorMsg) return;
    errorMsg.style.color = "red";
    errorMsg.textContent = text;
  }

  function showSuccess() {
    if (!errorMsg) return;
    errorMsg.style.color = "green";
    errorMsg.textContent = "Booking Successful";

    // clear form and message after a short delay
    setTimeout(() => {
      form.reset();
      errorMsg.textContent = "";
    }, 1500);
  }
}
