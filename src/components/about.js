import '../styles/about.css';

const About = (content) => {
    const aboutContainer = document.createElement('div');
    aboutContainer.classList.add('about-container');
    const aboutTitle = document.createElement('h1');
    aboutTitle.textContent = 'About Us';
    aboutContainer.appendChild(aboutTitle);
    const aboutText = document.createElement('p');
    aboutText.textContent = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
    voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum`;
    aboutContainer.appendChild(aboutText);
    content.appendChild(aboutContainer);
}

export default About;