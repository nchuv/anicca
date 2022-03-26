import Swiper, { Navigation, Pagination } from 'swiper';
import { projects } from "../i18n";

function projectsSlider() {
    let el = document.querySelector('.swiper');
    if (!el) {
        return;
    }
    const swiper = new Swiper('.swiper', {
        modules: [Navigation, Pagination],
        loop: true,
        // autoHeight
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