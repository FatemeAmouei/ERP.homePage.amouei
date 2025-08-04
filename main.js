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

    const breadcrumbScript = document.createElement("script");
    breadcrumbScript.src = "components/Navbar/breadcrumb.js";
    breadcrumbScript.onload = () => {
      if (typeof window.updateBreadcrumb === "function") {
        window.updateBreadcrumb();
      }
    };
    document.body.appendChild(breadcrumbScript);
  });
});
