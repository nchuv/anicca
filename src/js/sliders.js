import Swiper, { Navigation, Pagination, Scrollbar } from 'swiper';
import { products, blockchain } from "../i18n";

export function sliderSlider() {
    let el = document.querySelector('#projects .swiper');
    if (!el) {
        return;
    }
    const swiper = new Swiper('#projects .swiper', {
        modules: [Navigation],
        loop: true,
        // Navigation arrows
        navigation: {
            nextEl: '#projects .slider-next',
            prevEl: '#projects .slider-prev',
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
            nextEl: '#products .slider-next',
            prevEl: '#products .slider-prev',
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

export function blockchainSlider() {
    let el = document.querySelector('#blockchain .swiper');
    if (!el) {
        return;
    }
    const swiper = new Swiper('#blockchain .swiper', {
        modules: [Navigation, Pagination, Scrollbar],
        loop: true,
        // scrollbar
        scrollbar: {
            el: "#blockchain .swiper-scrollbar",
            draggable: true,
        },
        // Navigation arrows
        navigation: {
            nextEl: '#blockchain .slider-next',
            prevEl: '#blockchain .slider-prev',
        },
        pagination: {
            el: '#blockchain .swiper-pagination',
            clickable: true,
            renderBullet: function (index, className) {
                return '<button class="' + className + '">' + (blockchain[index].title) + '</button>';
            },
        },
    });
}
