const toggleButton = document.getElementById("toggleButton");
const optionsContainer = document.getElementById("options-container");
const userIcon = document.querySelector(".header-user__icon");

toggleButton.addEventListener("click", function () {
  if (optionsContainer.style.display === "none") {
    optionsContainer.style.display = "block";
    userIcon.style.transform = "rotate(180deg)";
  } else {
    optionsContainer.style.display = "none";
    userIcon.style.transform = "rotate(0deg)";
  }
});
