import './styles/styles.css';
import { showSidebar, hideSidebar } from './components/navbar';
import Menu from './components/menu';

// event handlers
const menuBtn = document.getElementById('menuBtn');
const closeMenuBtn = document.getElementById('closeMenuBtn');
menuBtn.addEventListener('click', () => {
    const sidebar = document.querySelector('.sidebar');
    showSidebar(sidebar);
});
closeMenuBtn.addEventListener('click', () => {
    const sidebar = document.querySelector('.sidebar');
    hideSidebar(sidebar);
});


// Load Menu
const content = document.getElementById('content');
const menu = Menu(content);