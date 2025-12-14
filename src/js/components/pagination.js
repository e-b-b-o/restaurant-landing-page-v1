// src/js/components/pagination.js

import { menuItems } from "../data/menu.js";
import { createMenuItem } from "./renderMenu.js";

let currentIndex = 0;
const batchSize = 8;

// Module scoped references so other modules can call `setPaginationItems`
let items = [];
let menuContainerRef = null;
let loadBtn = null;

function loadBatch() {
  if (!menuContainerRef) return;

  const slice = items.slice(currentIndex, currentIndex + batchSize);

  const html = slice.map(createMenuItem).join("");
  menuContainerRef.insertAdjacentHTML("beforeend", html);

  currentIndex += batchSize;

  if (loadBtn) {
    loadBtn.style.display = currentIndex >= items.length ? "none" : "";
  }

  // Notify animation/listeners that new items were added
  try {
    const event = new CustomEvent("menu:rendered", {
      bubbles: true,
      detail: { items },
    });
    menuContainerRef.dispatchEvent(event);
  } catch (err) {
    // ignore
  }
}

export function initPagination(menuContainer) {
  menuContainerRef = menuContainer;
  loadBtn = document.querySelector("#load-more");

  if (loadBtn) loadBtn.addEventListener("click", loadBatch);

  // Initialize with the full dataset
  setPaginationItems(menuContainerRef, menuItems);
}

// Allows filters/search to replace the paginated source and reset the view
export function setPaginationItems(container, newItems) {
  menuContainerRef = container || menuContainerRef;
  items = Array.isArray(newItems) ? newItems : [];
  currentIndex = 0;

  if (menuContainerRef) menuContainerRef.innerHTML = "";

  // Ensure we have a reference to the button
  if (!loadBtn) loadBtn = document.querySelector("#load-more");

  if (loadBtn) {
    loadBtn.style.display = items.length > batchSize ? "" : "none";
  }

  // Render the first batch
  loadBatch();
}
