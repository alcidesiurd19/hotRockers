const item = document.querySelector(".nav-menu")
const menu = document.querySelector(".menu")

item.addEventListener("click", function() {
    menu.classList.toggle("menu_visible");

});