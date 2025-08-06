window.updateBreadcrumb = function () {
  const container = document.getElementById("breadcrumb-container");
  if (!container) return;

  container.innerHTML = "";

  const hash = window.location.hash.trim();
  const path = hash.replace(/^#/, "");
  const isHomePage = !hash || hash === "" || path === "dashboard";

  let breadcrumbItems = [];

  if (isHomePage) {
    breadcrumbItems = [{ label: "خانه", icon: "fa-home", url: "#dashboard" }];
  } else if (path === "user-list") {
    breadcrumbItems = [
      { label: "مدیریت کاربران", icon: "fa-users", url: "#user-list" },
      { label: "لیست کاربران", url: "#user-list" },
    ];
  } else if (path === "user-add") {
    breadcrumbItems = [
      { label: "مدیریت کاربران", icon: "fa-users", url: "#user-add" },
      { label: "افزودن کاربر", url: "#user-add" },
    ];
  } else if (path === "user-roles") {
    breadcrumbItems = [
      { label: "مدیریت کاربران", icon: "fa-users", url: "#user-roles" },
      { label: "نقش‌های کاربر", url: "#user-roles" },
    ];
  } else if (path === "product") {
    breadcrumbItems = [
      { label: "مدیریت انبار", icon: "fa-warehouse", url: "#product" },
      { label: "مدیریت کالا", url: "#product" },
      { label: "کالا ها", url: "#product" },
    ];
  } else if (path === "product-category") {
    breadcrumbItems = [
      { label: "انبار", icon: "fa-warehouse", url: "#product-category" },
      { label: "مدیریت کالا", url: "#product-category" },
      { label: " دسته بندی کالا", url: "#product-category" },
    ];
  } else if (path === "warehouses") {
    breadcrumbItems = [
      { label: "مدیریت انبار", icon: "fa-warehouse", url: "#warehouses" },
      { label: "اطلاعات پایه", url: "#warehouses" },
      { label: "انبارها", url: "#warehouses" },
    ];
  } else if (path === "warehouse-products") {
    breadcrumbItems = [
      {
        label: "مدیریت انبار",
        icon: "fa-warehouse",
        url: "#warehouse-products",
      },
      { label: "اطلاعات پایه", url: "#warehouses" },
      { label: "کالای انبار", url: "#warehouse-products" },
    ];
  } else if (path === "warehouse-receipt") {
    breadcrumbItems = [
      {
        label: "مدیریت انبار",
        icon: "fa-warehouse",
        url: "#warehouse-receipt",
      },
      { label: "رسید انبار", url: "#warehouse-receipt" },
    ];
  } else if (path === "warehouse-request") {
    breadcrumbItems = [
      {
        label: "مدیریت انبار",
        icon: "fa-warehouse",
        url: "#warehouse-request",
      },
      { label: "درخواست از انبار", url: "#warehouse-request" },
    ];
  } else if (path === "warehouse-to-warehouse") {
    breadcrumbItems = [
      {
        label: "مدیریت انبار",
        icon: "fa-warehouse",
        url: "#warehouse-to-warehouse",
      },
      { label: "درخواست انبار به انبار", url: "#warehouse-to-warehouse" },
    ];
  } else if (path === "warehouse-confirm") {
    breadcrumbItems = [
      {
        label: "مدیریت انبار",
        icon: "fa-warehouse",
        url: "#warehouse-confirm",
      },
      { label: "تأیید حواله انبار", url: "#warehouse-confirm" },
    ];
  } else if (path === "warehouse-reports") {
    breadcrumbItems = [
      {
        label: "مدیریت انبار",
        icon: "fa-warehouse",
        url: "#warehouse-reports",
      },
      { label: "گزارشات انبار", url: "#warehouse-reports" },
    ];
  } else if (path === "purchasing") {
    breadcrumbItems = [
      {
        label: "خرید و تدارکات",
        icon: "fa-shopping-basket",
        url: "#purchasing",
      },
    ];
  } else if (path === "sales") {
    breadcrumbItems = [{ label: "فروش", icon: "fa-database", url: "#sales" }];
  } else if (path === "system") {
    breadcrumbItems = [
      { label: "مدیریت سیستم", icon: "fa-television", url: "#system" },
    ];
  } else {
    breadcrumbItems = [{ label: "صفحه ناشناخته" }];
  }

  // ساختن آیتم‌های بردکرامب
  breadcrumbItems.forEach((item, index) => {
    const li = document.createElement("li");
    li.classList.add("breadcrumb-item");

    const isLast = index === breadcrumbItems.length - 1;

    if (isLast || !item.url) {
      li.classList.add("active");
      li.setAttribute("aria-current", "page");
      li.innerHTML = `${item.icon ? `<i class="fas ${item.icon}"></i>` : ""} ${
        item.label
      }`;
    } else {
      const a = document.createElement("a");
      a.href = item.url;
      a.innerHTML = `${item.icon ? `<i class="fas ${item.icon}"></i>` : ""} ${
        item.label
      }`;
      li.appendChild(a);
    }

    container.appendChild(li);
  });
};

window.addEventListener("DOMContentLoaded", window.updateBreadcrumb);
window.addEventListener("hashchange", window.updateBreadcrumb);
