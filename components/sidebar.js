const menuData = [
  {
    title: "داشبورد",
    icon: "fa-tachometer",
    link: "",
  },
  {
    title: "مدیریت انبار",
    icon: "fa-home",
    children: [
      {
        title: "اطلاعات پایه",
        children: [
          {
            title: "مدیریت کالاها",
            children: [
              { title: "کالاها", link: "#" },
              { title: "دسته بندی کالا", link: "#" },
            ],
          },
          { title: "انبارها", link: "#" },
          { title: "کالاهای انبار", link: "#" },
        ],
      },
      { title: "رسیدانبار", link: "#" },
      { title: "درخواست از انبار", link: "#" },
      { title: "درخواست انبار به انبار", link: "#" },
      { title: "تایید حواله انبار", link: "#" },
      { title: "گزارشات انبار", link: "#" },
    ],
  },
  {
    title: "خریدو تدارکات",
    icon: "fa-shopping-basket",
    link: "",
  },
  {
    title: "فروش",
    icon: "fa-database",
    link: "",
  },
  {
    title: "مدیریت کاربران",
    icon: "fa-users",
    children: [
      { title: "لیست کاربران", link: "#" },
      { title: "افزودن کاربر", link: "#" },
      { title: "نقش های کاربر", link: "#" },
    ],
  },
  {
    title: "مدیریت سیستم",
    icon: "fa-television",
    link: "",
  },
];

function createMenu(data, level = 1) {
  const ul = document.createElement("ul");
  ul.className = level === 1 ? "sideBar-top" : "subMenu-list";

  data.forEach((item) => {
    const li = document.createElement("li");
    li.className = item.children ? `subMenu level-${level}` : "menuItem";

    const span = document.createElement("span");
    span.className = "menuItem-title";

    const content = document.createElement("div");
    content.className = "right";

    if (item.icon) {
      const icon = document.createElement("i");
      icon.className = `fa ${item.icon} menuItem-icon`;
      icon.setAttribute("aria-hidden", "true");
      content.appendChild(icon);
    }

    const p = document.createElement("p");

    if (item.link) {
      const a = document.createElement("a");
      a.href = item.link;
      a.textContent = item.title;
      p.appendChild(a);
    } else {
      p.textContent = item.title;
    }

    content.appendChild(p);
    span.appendChild(content);

    if (item.children) {
      const left = document.createElement("div");
      left.className = "left";
      left.innerHTML = `<i class="fa fa-chevron-down arrow" aria-hidden="true"></i>`;
      span.appendChild(left);
    }

    li.appendChild(span);

    if (item.children) {
      const subUl = createMenu(item.children, level + 1);
      li.appendChild(subUl);
    }

    ul.appendChild(li);
  });

  return ul;
}

document.getElementById("menuContainer").appendChild(createMenu(menuData));

document.addEventListener("click", function (e) {
  const title = e.target.closest(".menuItem-title");
  if (!title) return;

  const parentLi = title.parentElement;
  const submenu = parentLi.querySelector(".subMenu-list");

  if (submenu) {
    const isOpen = parentLi.classList.contains("open");
    parentLi.classList.toggle("open", !isOpen);
    submenu.style.display = isOpen ? "none" : "block";

    const arrowIcon = title.querySelector(".arrow");
    if (arrowIcon) {
      arrowIcon.classList.toggle("rotate", !isOpen);
    }
  }
});
