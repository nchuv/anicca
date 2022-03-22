import Swiper, { Navigation, Pagination } from 'swiper';

function projectsSlider() {
    let el = document.querySelector('.swiper');
    if (!el) {
        return;
    }
    const swiper = new Swiper('.swiper', {
        modules: [Navigation, Pagination],
        autoHeight: true,
        pagination: {
            el: '.swiper-pagination',
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

    });
}

export default projectsSlider;