import '../styles/contact.css'

const Contact = (content) => {
    const addContactInfo = () => {
        const contactInfo = document.createElement('div');
        contactInfo.classList.add('contact-info');
        const address = document.createElement('p');
        address.textContent = '123 Main St, City, State, ZIP';
        contactInfo.appendChild(address);
        const phone = document.createElement('p');
        phone.textContent = 'Phone: (123) 456-7890';
        contactInfo.appendChild(phone);
        const email = document.createElement('p');
        email.textContent = 'Email: info@example.com';
        contactInfo.appendChild(email);
        return contactInfo;
    };
    const contactContainer = document.createElement('div');
    contactContainer.classList.add('contact');
    const contactTitle = document.createElement('h2');
    contactTitle.textContent = 'Contact Us';
    contactContainer.appendChild(contactTitle);
    contactContainer.appendChild(addContactInfo());
    content.appendChild(contactContainer);
}

export default Contact;