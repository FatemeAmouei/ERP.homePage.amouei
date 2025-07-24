import loadComponent from "./scripts/loadComponent.js";

function loadJS(filePath) {
  const script = document.createElement("script");
  script.src = filePath;
  script.defer = true;
  document.body.appendChild(script);
}

document.addEventListener("DOMContentLoaded", () => {
  loadComponent("components/header.html", "header-container").then(() => {
    loadJS("components/header.js");
  });
  loadComponent("components/sidebar.html", "sidebar-container").then(() => {
    loadJS("components/sidebar.js");
  });
  loadComponent("components/pagination.html", "pagination-container").then(
    () => {
      loadJS("components/pagination.js");
    }
  );
});
