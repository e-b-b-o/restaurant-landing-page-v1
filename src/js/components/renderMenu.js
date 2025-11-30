// src/js/components/renderMenu.js

export function createMenuItem(item) {
  return `
    <div class="menu-item" data-category="${item.category}">
      <img src="${item.image}" alt="${item.name}">
     <div class="special-item-price"> <h3 class="menu-item-heading">${item.name}</h3>
      <span class="price">$${item.price}</span> </div>
      <p class="item-ingredients">${item.ingredients}</p>
    </div>
  `;
}

export function renderMenu(container, items) {
  container.innerHTML = items.map(createMenuItem).join("");
}
