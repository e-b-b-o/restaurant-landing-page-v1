// src/js/utils/dom.js

export const qs = (sel) => document.querySelector(sel);
export const qsa = (sel) => document.querySelectorAll(sel);

export function debounce(fn, delay = 300) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}
