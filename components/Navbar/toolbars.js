const filterBtn = document.querySelector(".filter");
const filterPanel = document.getElementById("filter-panel");
const closeFilterBtn = document.getElementById("close-filter");
const filterBackdrop = document.getElementById("filter-backdrop");

const openFilterPanel = () => {
  filterPanel.classList.add("open");
  filterBackdrop.classList.add("show");
};

const closeFilterPanel = () => {
  filterPanel.classList.remove("open");
  filterBackdrop.classList.remove("show");
};

filterBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  openFilterPanel();
});

closeFilterBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  closeFilterPanel();
});

document.addEventListener("click", (e) => {
  if (
    filterPanel.classList.contains("open") &&
    !filterPanel.contains(e.target) &&
    !filterBtn.contains(e.target)
  ) {
    closeFilterPanel();
  }
});
