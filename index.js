import data from "./data.js";
console.log(data);

const dataObj = JSON.parse(data);
const users = dataObj.map(user => ({
    name: `${user.name.first} ${user.name.last}`, 
    address: `${user.location.street.name} ${user.location.street.number}, ${user.location.city}`,
    image: user.picture.large
}));

const userCards = document.getElementById('user.cards');

users.forEach(user => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
        <img src="${user.image}" alt="${user.name} ${user.apellido}">
        <div class="info">
        <h2>${user.name}</h2>
        <p>${user.address}</P>
        </div>
    `;
        document.body.appendChild(card);
});
