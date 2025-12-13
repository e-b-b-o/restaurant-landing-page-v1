export function initFiltersHighlight() {
  const filterBtn = document.querySelectorAll(".filters button");
  if (!filterBtn.length) return;
  filterBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtn.forEach((btn) => {
        btn.classList.remove("highlight");
      });
      btn.classList.add("highlight");
    });
  });
}
