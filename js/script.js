"use strict"

new Swiper('.gallery-slider',{
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: 'swiper-pagination',
        clickable: true,
    },
    // Количество элементов
    slidesPerView: 4,
    // Отступ
    spaceBetween: 14,
    // Количество пролиствоемых слайдов
    slidesPerGroup: 2,
    breakpoints: {
        300: {
            slidesPerView: 2,
        },
        460: {
            slidesPerView: 3,
        },
        630: {
            slidesPerView: 4,
        }
    },
});



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


























































































    
