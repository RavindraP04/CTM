let dropdownMenu = document.querySelector(".menu");
let menuButton = document.querySelectorAll(".fa-bars");
let historyButton = document.querySelector(".tabHistory");
let teamButton = document.querySelector(".tabTeam");
let closeButton = document.querySelector(".fa-xmark");
for (let i = 0; i < menuButton.length; i++) {
  menuButton[i].addEventListener("click", function () {
    dropdownMenu.style.display = "block";
  });
}

closeButton.addEventListener("click", function () {
  dropdownMenu.style.display = "none";
});

// close dropdown menu 
function closeMenu() {
  dropdownMenu.style.display = "none";
}
