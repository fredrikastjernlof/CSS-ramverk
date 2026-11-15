import './tailwind.css';

const menuButton = document.querySelector('#menu-button');
const mobileMenu = document.querySelector('#mobile-menu');

menuButton.addEventListener('click', () => {

    const isOpen = mobileMenu.classList.toggle('hidden') === false;
    
    menuButton.setAttribute('aria-expanded', String(isOpen));
});