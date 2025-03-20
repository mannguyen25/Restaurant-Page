import '../styles/menu.css';

const items = [
    {name: 'Original Milk Tea', price: {sm: 4.85, lg: 5.75}, category: 'Classic Milk Tea'},
    {name: 'Brown Sugar Milk Tea', price: {sm: 4.85, lg: 5.75}, category: 'Classic Milk Tea'},
    {name: 'Mango Milk Tea', price: {sm: 4.85, lg: 5.75}, category: 'Classic Milk Tea'}
]
const Menu = (content) => {
    const menu = document.createElement('div');
    menu.classList.add('menu');

    const createCard = (card) => {
        const cardDiv = document.createElement('div');
        cardDiv.classList.add('menu-card');
        cardDiv.innerHTML = `
            <h3>${card.name}</h3>
            <div class="prices">
                <span>Small: ${card.price.sm}</span>
                <span>Large: ${card.price.lg}</span>
            </div>
        `;
        return cardDiv;
    }
    const createSection = (() => {
        const section = document.createElement('section');
        section.classList.add('menu-section');
        const collaspableBtn = document.createElement('button');
        collaspableBtn.textContent = 'Open Collapsible';
        collaspableBtn.type = 'button';
        collaspableBtn.classList.add('collapsible');
        section.appendChild(collaspableBtn);
        items.forEach((item) => section.appendChild(createCard(item)));
        collaspableBtn.addEventListener('click', () => {
            [...section.children].slice(1).forEach((item) => item.style.display == 'none'? item.style.display = 'flex':item.style.display = 'none');
        });
        menu.appendChild(section);
    })();
    content.appendChild(menu);
};

// to do make item cards

export default Menu;