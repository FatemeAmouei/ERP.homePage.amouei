async function loadPage() {
  const hash = window.location.hash || "#dashboard";
  const page = hash.replace("#", "");

  try {
    const response = await fetch(`pages/${page}.html`);
    const html = await response.text();
    document.getElementById("content").innerHTML = html;
  } catch (err) {
    document.getElementById(
      "content"
    ).innerHTML = `<h2>صفحه پیدا نشد</h2>${err}`;
  }
}

window.addEventListener("hashchange", () => {
  loadPage();
  window.updateBreadcrumb?.();
});

window.addEventListener("DOMContentLoaded", () => {
  loadPage();
  window.updateBreadcrumb?.();
});
