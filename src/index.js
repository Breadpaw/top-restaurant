import './style.css';
import homeLoader from './pages/home';
import menuLoader from './pages/menu';
import contactLoader from './pages/contact';

homeLoader();

function addEventListeners(){
    const homeTab = document.getElementById('Home');
    homeTab.addEventListener('click', () => homeLoader());

    const menuTab = document.getElementById('Menu');
    menuTab.addEventListener('click', () => menuLoader());

    const contactTab = document.getElementById('Contact');
    contactTab.addEventListener('click', () => contactLoader());
}

export { addEventListeners }