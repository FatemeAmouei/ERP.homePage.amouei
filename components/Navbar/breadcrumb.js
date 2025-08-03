window.updateBreadcrumb = function () {
  const container = document.getElementById("breadcrumb-container");
  if (!container) return;

  container.innerHTML = "";

  const hash = window.location.hash.trim();
  const path = hash.replace(/^#/, "");

  const isHomePage = !hash || hash === "#";

  let breadcrumbItems = [];

  if (isHomePage || path === "dashboard") {
    breadcrumbItems = [{ label: "خانه", icon: "fa-home", url: "#dashboard" }];
  } else if (path === "product") {
    breadcrumbItems = [
      {
        label: "مدیریت انبار / مدیریت کالا / کالا",
        icon: "fa-home",
        url: "#product",
      },
    ];
  } else if (path === "product-category") {
    breadcrumbItems = [
      {
        label: "انبار / مدیریت کالا / کالا های انبار",
        icon: "fa-home",
        url: "#product-category",
      },
    ];
  } else if (path === "warehouses") {
    breadcrumbItems = [
      { label: "مدیریت انبار / انبارها", icon: "fa-home", url: "#warehouses" },
    ];
  } else if (path === "warehouse-products") {
    breadcrumbItems = [
      {
        label: "مدیریت انبار / کالای انبار",
        icon: "fa-home",
        url: "#warehouse-products",
      },
    ];
  } else if (path === "warehouse-receipt") {
    breadcrumbItems = [
      {
        label: "مدیریت انبار / رسید انبار",
        icon: "fa-home",
        url: "#warehouse-receipt",
      },
    ];
  } else if (path === "warehouse-request") {
    breadcrumbItems = [
      {
        label: "مدیریت انبار / درخواست از انبار",
        icon: "fa-home",
        url: "#warehouse-request",
      },
    ];
  } else if (path === "warehouse-to-warehouse") {
    breadcrumbItems = [
      {
        label: "مدیریت انبار / درخواست انبار به انبار",
        icon: "fa-home",
        url: "#warehouse-to-warehouse",
      },
    ];
  } else if (path === "warehouse-confirm") {
    breadcrumbItems = [
      {
        label: "مدیریت انبار / تائید حواله انبار",
        icon: "fa-home",
        url: "#warehouse-confirm",
      },
    ];
  } else if (path === "warehouse-reports") {
    breadcrumbItems = [
      {
        label: "مدیریت انبار / گزارشات انبار",
        icon: "fa-home",
        url: "#warehouse-reports",
      },
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
  } else if (path === "user-list") {
    breadcrumbItems = [
      {
        label: "مدیریت کاربران / لیست کاربران",
        icon: "fa-users",
        url: "#user-list",
      },
    ];
  } else if (path === "user-add") {
    breadcrumbItems = [
      {
        label: "مدیریت کاربران / افزودن کاربر",
        icon: "fa-users",
        url: "#user-add",
      },
    ];
  } else if (path === "user-roles") {
    breadcrumbItems = [
      {
        label: "مدیریت کاربران / نقش های کاربر",
        icon: "fa-users",
        url: "#user-roles",
      },
    ];
  } else if (path === "system") {
    breadcrumbItems = [
      { label: "مدیریت سیستم", icon: "fa-television", url: "#system" },
    ];
  } else {
    breadcrumbItems = [{ label: "صفحه ناشناخته" }];
  }

  // ساختن بردکرامب
  breadcrumbItems.forEach((item, index) => {
    const li = document.createElement("li");
    li.classList.add("breadcrumb-item");

    if (index === breadcrumbItems.length - 1 || !item.url) {
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
