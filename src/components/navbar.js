import '../styles/navbar.css';

const showSidebar = (sidebar) => {
    sidebar.style.display = 'flex';
}
const hideSidebar = (sidebar) => {
    sidebar.style.display = 'none';
}

export { showSidebar, hideSidebar };