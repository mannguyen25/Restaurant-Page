import './styles/styles.css';
import { showSidebar, hideSidebar } from './components/navbar';
import Menu from './components/menu';
import Home from './components/home';
import Contact from './components/contact';
import About from './components/about';

// event handlers
const menuBtn = document.getElementById('menuBtn');
const closeMenuBtn = document.getElementById('closeMenuBtn');
const sidebar = document.querySelector('.sidebar');
menuBtn.addEventListener('click', () => {
    showSidebar(sidebar);
});
closeMenuBtn.addEventListener('click', () => {
    hideSidebar(sidebar);
});


// Load Menu
const content = document.getElementById('content');
const navButtons = document.querySelectorAll('.nav-btn');

const tabs = {'about': About, 'home': Home, 'contact': Contact,'menu': Menu};

// default to home tab
Home(content);

// switch based on id of button
navButtons.forEach((btn) => btn.addEventListener('click', (e) => {
    const id = e.target.id.split('-')[0]||'home';
    hideSidebar(sidebar);
    content.innerHTML = ``;
    tabs[id](content);
}));



