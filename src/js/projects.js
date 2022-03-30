import Swiper, { Navigation, Pagination, Scrollbar } from 'swiper';
import { projects, products } from "../i18n";

export function projectsSlider() {
    let el = document.querySelector('#projects .swiper');
    if (!el) {
        return;
    }
    const swiper = new Swiper('#projects .swiper', {
        modules: [Navigation, Pagination, Scrollbar],
        loop: true,
        // scrollbar
        scrollbar: {
            el: "#projects .swiper-scrollbar",
            draggable: true,
        },
        // Navigation arrows
        navigation: {
            nextEl: '#projects .projects-next',
            prevEl: '#projects .projects-prev',
        },
        pagination: {
            el: '#projects .swiper-pagination',
            clickable: true,
            renderBullet: function (index, className) {
                return '<button class="' + className + '">' + (projects[index].title) + '</button>';
            },
        },
    });
}

export function productsSlider() {
    let el = document.querySelector('#products .swiper');
    if (!el) {
        return;
    }
    const swiper = new Swiper('#products .swiper', {
        modules: [Navigation, Pagination, Scrollbar],
        loop: true,
        // scrollbar
        scrollbar: {
            el: "#products .swiper-scrollbar",
            draggable: true,
        },
        // Navigation arrows
        navigation: {
            nextEl: '#products .projects-next',
            prevEl: '#products .projects-prev',
        },
        pagination: {
            el: '#products .swiper-pagination',
            clickable: true,
            renderBullet: function (index, className) {
                return '<button class="' + className + '">' + (products[index].title) + '</button>';
            },
        },
    });
}
