const toggleButton = document.getElementById("toggleButton");
const optionsContainer = document.getElementById("optionsContainer");
const userIcon = document.querySelector(".user-icon");

toggleButton.addEventListener("click", function () {
  if (optionsContainer.style.display === "none") {
    optionsContainer.style.display = "block";
    userIcon.style.transform = "rotate(180deg)";
  } else {
    optionsContainer.style.display = "none";
    userIcon.style.transform = "rotate(0deg)";
  }
});
