// src/js/components/filters.js

import { menuItems } from "../data/menu.js";
import { qs } from "../utils/dom.js";
import { setPaginationItems } from "./pagination.js";

export function initFilters(menuContainer) {
  const filterButtons = qs(".filters");

  filterButtons.addEventListener("click", (e) => {
    if (!e.target.matches("[data-filter]")) return;

    const category = e.target.dataset.filter;

    const filtered =
      category === "all"
        ? menuItems
        : menuItems.filter((item) => item.category === category);

    // Use pagination API so filters play nicely with "Load More"
    setPaginationItems(menuContainer, filtered);
  });
}
