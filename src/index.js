import 'aos/dist/aos.css';
import '@splidejs/splide/css';
import './styles/main.scss'
import AOS from 'aos';
import Splide from '@splidejs/splide';


AOS.init({disable: 'mobile'});

const header = document.getElementById("header");

document.getElementById('hamburger').addEventListener('click', () => {
    header.classList.toggle('mobile-nav--expand');
})


document.addEventListener('scroll', (e) => {
    let lastKnownScrollPosition = window.scrollY;
    if (lastKnownScrollPosition >= 100){
        header.classList.add('header--sticky');
    }else if(lastKnownScrollPosition == 0){
        header.classList.remove('header--sticky');
    }
})

let splide = document.getElementById('splide');

new Splide(splide, {
    // clones  : 0,
    type: 'loop',
    fixedWidth: '200px',
    fixedHeight: '200px',
    gap: '40px',
    perPage: 1,
    focus: 'center',
    arrows: true,
    autowidth: false,
    waitForTransition: false,
    // updateOnMove: true,
    snap: true,
    breakpoints: { 470: { fixedWidth: '90%' } }
}).mount();