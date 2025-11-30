// src/js/components/pagination.js

import { menuItems } from "../data/menu.js";
import { createMenuItem } from "./renderMenu.js";

let currentIndex = 0;
const batchSize = 6;

export function initPagination(menuContainer) {
  const loadBtn = document.querySelector("#load-more");

  function loadBatch() {
    const slice = menuItems.slice(currentIndex, currentIndex + batchSize);

    const html = slice.map(createMenuItem).join("");
    menuContainer.insertAdjacentHTML("beforeend", html);

    currentIndex += batchSize;

    if (currentIndex >= menuItems.length) {
      loadBtn.style.display = "none";
    }
  }

  loadBtn.addEventListener("click", loadBatch);

  loadBatch();
}
