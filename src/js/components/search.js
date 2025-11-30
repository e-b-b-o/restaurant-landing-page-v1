// src/js/components/search.js

import { menuItems } from "../data/menu.js";
import { renderMenu } from "./renderMenu.js";
import { debounce } from "../utils/dom.js";

export function initSearch(menuContainer) {
  const searchInput = document.querySelector("#menu-search");

  const handleSearch = debounce(() => {
    const text = searchInput.value.toLowerCase();

    const filtered = menuItems.filter((item) =>
      `${item.name} ${item.ingredients}`.toLowerCase().includes(text)
    );

    renderMenu(menuContainer, filtered);
  }, 300);

  searchInput.addEventListener("input", handleSearch);
}
