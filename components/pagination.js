const listItems = [
  { id: 1, name: "name", family: "family1" },
  { id: 2, name: "name", family: "family2" },
  { id: 3, name: "name", family: "family3" },
  { id: 4, name: "name", family: "family4" },
  { id: 5, name: "name", family: "family5" },
  { id: 6, name: "name", family: "family6" },
  { id: 7, name: "name", family: "family7" },
  { id: 8, name: "name", family: "family8" },
  { id: 9, name: "name", family: "family9" },
  { id: 10, name: "name", family: "family10" },
  { id: 11, name: "name", family: "family11" },
  { id: 12, name: "name", family: "family12" },
  { id: 13, name: "name", family: "family13" },
  { id: 14, name: "name", family: "family14" },
  { id: 15, name: "name", family: "family15" },
  { id: 16, name: "name", family: "family16" },
  { id: 17, name: "name", family: "family17" },
  { id: 18, name: "name", family: "family18" },
  { id: 19, name: "name", family: "family19" },
  { id: 20, name: "name", family: "family20" },
  { id: 21, name: "name", family: "family21" },
  { id: 22, name: "name", family: "family22" },
];

let userListContainer = document.querySelector("#list");
let paginationContainer = document.querySelector("#pagination");

let currentPage = 1;
let rowsCount = 6;

function displayUesrsList(
  allUsersArray,
  usersContainer,
  rowsCount,
  currentPage
) {
  usersContainer.innerHTML = "";

  let endIndex = rowsCount * currentPage;
  let startIndex = endIndex - rowsCount;

  let paginatedUsers = allUsersArray.slice(startIndex, endIndex);

  paginatedUsers.forEach(function (user) {
    let userElement = document.createElement("div");
    userElement.classList.add("item");
    userElement.innerHTML = user.name + " " + user.family;

    usersContainer.appendChild(userElement);
  });
}

function setupPagination(allUsersArray, pagesContainer, rowsCount) {
  pagesContainer.innerHTML = "";
  pagesContainer.classList.add("pagination-container");

  let pageCount = Math.ceil(allUsersArray.length / rowsCount);

  // دکمه «
  let firstBtn = document.createElement("div");
  firstBtn.innerHTML = "«";
  firstBtn.addEventListener("click", function () {
    currentPage = 1;
    updatePagination(allUsersArray);
  });
  pagesContainer.appendChild(firstBtn);

  // دکمه ‹
  let prevBtn = document.createElement("div");
  prevBtn.innerHTML = "‹";
  prevBtn.addEventListener("click", function () {
    if (currentPage > 1) {
      currentPage--;
      updatePagination(allUsersArray);
    }
  });
  pagesContainer.appendChild(prevBtn);

  // دکمه‌های شماره صفحه
  for (let i = 1; i <= pageCount; i++) {
    let btn = paginationButtonGenerator(i, allUsersArray);
    pagesContainer.appendChild(btn);
  }

  // ›
  let nextBtn = document.createElement("div");
  nextBtn.innerHTML = "›";
  nextBtn.addEventListener("click", function () {
    if (currentPage < pageCount) {
      currentPage++;
      updatePagination(allUsersArray);
    }
  });
  pagesContainer.appendChild(nextBtn);

  // »
  let lastBtn = document.createElement("div");
  lastBtn.innerHTML = "»";
  lastBtn.addEventListener("click", function () {
    currentPage = pageCount;
    updatePagination(allUsersArray);
  });
  pagesContainer.appendChild(lastBtn);
}

function paginationButtonGenerator(page, allUsersArray) {
  let button = document.createElement("button");
  button.innerHTML = page;
  button.classList.add("page-btn");

  if (page === currentPage) {
    button.classList.add("active");
  }

  button.addEventListener("click", function () {
    currentPage = page;
    updatePagination(allUsersArray);
  });

  return button;
}

function updatePagination(allUsersArray) {
  displayUesrsList(allUsersArray, userListContainer, rowsCount, currentPage);
  setupPagination(allUsersArray, paginationContainer, rowsCount);
}

// شروع کار
displayUesrsList(listItems, userListContainer, rowsCount, currentPage);
setupPagination(listItems, paginationContainer, rowsCount);
