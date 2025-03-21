import '../styles/navbar.css';

const showSidebar = (sidebar) => {
    sidebar.style.width = '50vw';
    sidebar.style.right = '0';
}
const hideSidebar = (sidebar) => {
    sidebar.style.width = '0';
    sidebar.style.right = '-50px';
}

export { showSidebar, hideSidebar };