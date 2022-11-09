"use strict"

const MenuBurger = document.querySelector('.header__burger');
const HeaderMenu = document.querySelector('.header__menu');
const Sidebar = document.querySelector('.sidebar');
MenuBurger.addEventListener("click", function(e) {
    MenuBurger.classList.toggle('_active-burger');
    HeaderMenu.classList.toggle('_active-burger');
    Sidebar.classList.toggle('_active-burger');
});
