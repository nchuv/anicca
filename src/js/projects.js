import Swiper, { Navigation, Pagination, Scrollbar } from 'swiper';
import { projects } from "../i18n";

function projectsSlider() {
    let el = document.querySelector('.swiper');
    if (!el) {
        return;
    }
    const swiper = new Swiper('.swiper', {
        modules: [Navigation, Pagination, Scrollbar],
        loop: true,
        // scrollbar
        scrollbar: {
            el: ".projects-scrollbar",
            draggable: true,
        },
        // Navigation arrows
        navigation: {
            nextEl: '.projects-next',
            prevEl: '.projects-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            renderBullet: function (index, className) {
                return '<button class="' + className + '">' + (projects[index].title) + '</button>';
            },
        },
    });
}

export default projectsSlider;