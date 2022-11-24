import './styles/main.scss'


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