import '../styles/menu.css';

const items = [
    {name: 'Original Milk Tea', price: {sm: 4.85, lg: 5.75}, category: 'Classic Milk Tea'},
    {name: 'Brown Sugar Milk Tea', price: {sm: 4.85, lg: 5.75}, category: 'Classic Milk Tea'},
    {name: 'Mango Milk Tea', price: {sm: 4.85, lg: 5.75}, category: 'Classic Milk Tea'},
    {name: 'Taro Milk Tea', price: {sm: 4.85, lg: 5.75}, category: 'Classic Milk Tea'},
    {name: 'Golden Grapefruit', price: {sm: null, lg: 5.45}, category: 'Fresh Fruit Tea'},
    {name: 'Passion Fruit Green Tea', price: {sm: null, lg: 5.75}, category: 'Fresh Fruit Tea'},
    {name: 'Mango Lemon Green Tea', price: {sm: null, lg: 5.75}, category: 'Fresh Fruit Tea'},
    {name: 'Peach Lemon Green Tea', price: {sm: null, lg: 5.75}, category: 'Fresh Fruit Tea'},
    {name: 'Lychee Black Milk Tea', price: {sm: null, lg: 5.75}, category: 'Special Milk Tea'},
    {name: 'Peach Oolong Milk Tea', price: {sm: null, lg: 5.75}, category: 'Special Milk Tea'},
    {name: 'Rose Black Milk Tea', price: {sm: null, lg: 5.75}, category: 'Special Milk Tea'},
    {name: 'Ruby Black Tea', price: {sm: null, lg: 5.45}, category: 'Fresh Brewed Tea'},
    {name: 'Rose Black Tea', price: {sm: null, lg: 5.45}, category: 'Fresh Brewed Tea'},
]
const Menu = (content) => {
    // Create menu
    const menu = document.createElement('div');
    menu.classList.add('menu');
    const createCard = (card) => {
        const cardDiv = document.createElement('div');
        cardDiv.classList.add('menu-card');
        const cardName = document.createElement('h3');
        cardName.textContent = card.name;
        cardDiv.appendChild(cardName);
        const cardPrice = document.createElement('div');
        cardPrice.classList.add('prices');
        if (card.price.sm !== null){
            const sm = document.createElement('span');
            sm.textContent = `Small: ${card.price.sm}`;
            cardPrice.appendChild(sm);
        }
        if (card.price.lg !== null){
            const lg = document.createElement('span');
            lg.textContent = `Large: ${card.price.lg}`;
            cardPrice.appendChild(lg);
        }
        cardDiv.appendChild(cardPrice);
        return cardDiv;
    }
    const createSection = (category) => {
        const section = document.createElement('section');
        section.classList.add('menu-section');
        section.classList.add(`${category.toLowerCase().split(' ').join('-')}`);
        const collaspableBtn = document.createElement('button');
        collaspableBtn.innerHTML = `<h2>${category}</h2>`;
        const collapseIcon = document.createElement('span');
        collapseIcon.textContent = 'arrow_drop_down';
        collapseIcon.classList.add('material-symbols-outlined');
        collapseIcon.classList.add('collapse-icon');
        collaspableBtn.appendChild(collapseIcon);
        collaspableBtn.type = 'button';
        collaspableBtn.classList.add('collapsible');
        section.appendChild(collaspableBtn);
        const cardsContainer = document.createElement('div');
        cardsContainer.classList.add('cards-container');
        cardsContainer.style.height = 'auto';
        items.filter((item) => item.category == category).forEach((item) => cardsContainer.appendChild(createCard(item)));
        section.appendChild(cardsContainer);
        collaspableBtn.addEventListener('click', () => {
            // when collapse is clicked we rotate icon and collapse menu using height
            collapseIcon.classList.toggle('rotate');
            cardsContainer.classList.toggle('collapsed');
        });
        menu.appendChild(section);
    };

    // create sections for each category
    const categories = new Set(items.map((item) => item.category));
    categories.forEach((category) => createSection(category));
    content.appendChild(menu);
};

// to do make item cards

export default Menu;