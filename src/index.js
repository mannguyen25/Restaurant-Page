import './styles.css';
import { showSidebar, hideSidebar } from './components/navbar';
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