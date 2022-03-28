import gsap from 'gsap';
import LocomotiveScroll from 'locomotive-scroll';
import 'swiper/swiper-bundle.css';

import { Cursor } from './cursor';
import projectsSlider from "./projects";
import ButtonCtrl from './buttonCtrl';

projectsSlider();

const buttonEl = document.querySelectorAll('.button')[0];
const cursorEl = document.querySelectorAll('.cursor')[0];

const cursor = new Cursor(cursorEl);

if (buttonEl && cursorEl) {
  const button = new ButtonCtrl(buttonEl);
  button.on('enter', () => cursor.enter());
  button.on('leave', () => cursor.leave());
}

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

// const hero = document.querySelector('[data-hero]')
//
// window.addEventListener('mousemove', (e) => {
//   const { clientX, clientY } = e
//   const x = Math.round((clientX / window.innerWidth) * 100)
//   const y = Math.round((clientY / window.innerHeight * 100))
//
//   gsap.to(hero, {
//     '--x': `${x}%`,
//     '--y': `${y}%`,
//     duration: 0.3,
//     ease: 'sine.out'
//   })
// })

