"use strict"


const MenuBurger = document.querySelector('.header__burger');
const Sidebar = document.querySelector('.sidebar');
const Container = document.querySelector('.container');
const Body = document.querySelector('body');
MenuBurger.addEventListener("click", function(e) {
    MenuBurger.classList.toggle('_active-burger');
    Sidebar.classList.toggle('_active-burger');
    Container.classList.toggle('_active-burger');
    Body.classList.toggle('_active-burger');
    
});

const SidebarLinkMenu = document.querySelector('.sidebar__link-menu');
const SidebarMenu = document.querySelector('.sidebar__menu');
const SidebarSpan = document.querySelector('.sidebar__link-span');
SidebarLinkMenu.addEventListener("click", function(e) {
    SidebarLinkMenu.classList.toggle('_active-menu');
    SidebarMenu.classList.toggle('_active-menu');
    SidebarSpan.classList.toggle('_active-menu');
});
























































































    
