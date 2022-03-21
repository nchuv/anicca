import LocomotiveScroll from 'locomotive-scroll';
import { Cursor } from './cursor';

const cursor = new Cursor(document.querySelector('.cursor'));

// mouse effects on all links and others
// [...document.querySelectorAll('a')].forEach(link => {
//   link.addEventListener('mouseenter', () => cursor.enter());
//   link.addEventListener('mouseleave', () => cursor.leave());
// });

// https://github.com/locomotivemtl/locomotive-scroll
// https://locomotivemtl.github.io/locomotive-scroll/
const lscroll = new LocomotiveScroll({
  el: document.querySelector('[data-scroll-container]'),
  smooth: true,
  direction: 'up',
});

