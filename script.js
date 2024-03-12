// toggle menu
function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

// get current year
const yearElement = document.getElementById("year");
const date = new Date();
const year = date.getFullYear();
yearElement.innerHTML = year;