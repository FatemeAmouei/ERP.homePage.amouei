import loadComponent from "./scripts/loadComponent.js";

function loadJS(filePath) {
  const script = document.createElement("script");
  script.src = filePath;
  script.defer = true;
  document.body.appendChild(script);
}

document.addEventListener("DOMContentLoaded", () => {
  Promise.all([
    loadComponent("components/Header/header.html", "header-container").then(
      () => loadJS("components/Header/header.js")
    ),
    loadComponent("components/Sidebar/sidebar.html", "sidebar-container").then(
      () => loadJS("components/Sidebar/sidebar.js")
    ),
    loadComponent("components/Footer/footer.html", "Footer-section").then(() =>
      loadJS("components/Footer/footer.js")
    ),
    loadComponent("components/Navbar/navbar.html", "navbar-container").then(
      () => loadJS("components/Navbar/navbar.js")
    ),
  ]).then(() => {
    loadJS("scripts/router.js");
    loadJS("components/Navbar/breadcrumb.js");
  });
});
