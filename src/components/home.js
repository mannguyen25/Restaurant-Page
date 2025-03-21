import '../styles/home.css'
const Home = (content) => {
    const homeContainer = document.createElement('div');
    homeContainer.classList.add('home-container');
    const h1 = document.createElement('h1');
    h1.textContent = 'Welcome to Hocaa Bubble Tea!';
    homeContainer.appendChild(h1);
    const tea = document.createElement('span');
    tea.textContent = '🧋';
    homeContainer.appendChild(tea);
    content.appendChild(homeContainer);
};

export default Home;