import 'bulma/css/bulma.min.css';
import './bulma-custom.css';

const burger = document.querySelector('.navbar-burger');
const menu = document.querySelector('.navbar-menu');

burger.addEventListener('click', () => {
    const isActive = burger.classList.toggle('is-active');

    menu.classList.toggle('is-active', isActive);
    burger.setAttribute('aria-expanded', String(isActive));
});