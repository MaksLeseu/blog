"use strict"

const Button = document.querySelector('.header__link-span');
const Menu = document.querySelector('.header__link-menu');
const Link = document.querySelector('.header__link_p');
Button.addEventListener("click", function(e) {
    Button.classList.toggle('_active-btn');
    Menu.classList.toggle('_active-menu');
    Link.classList.toggle('_active-link');
});


const MenuBurger = document.querySelector('.header__burger');
const HeaderMenu = document.querySelector('.header__menu');
const BlockLeft = document.querySelector('.block-left');
MenuBurger.addEventListener("click", function(e) {
    MenuBurger.classList.toggle('_active-burger');
    HeaderMenu.classList.toggle('_active-burger');
    BlockLeft.classList.toggle('_active-burger');
});





















































































    
