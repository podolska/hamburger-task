import Hamburger from './Hamburger.js';
import { SIZE, FILLING, ADDITIVE } from './variables.js';

const form = document.querySelector('form');
form.addEventListener('submit', changeHamburger);

const hamburger = new Hamburger();

function changeHamburger(e) {
    e.preventDefault();

    // Get data from inputs
    const data = Array.from(e.target.elements);
    const size = data.filter(el => el.name === 'size').find(el => el.checked).value;
    const filling = data.filter(el => el.name === 'filling').find(el => el.checked).value;
    const topping = data.filter(el => el.name === 'topping' && el.checked).map(el => el.value);

    // Set hamburger size
    if (size === "big") {
        hamburger.size = SIZE.big;
    } else {
        hamburger.size = SIZE.small;
    };

    // Set hamburger filling
    switch (filling) {
        case 'cheese': hamburger.filling = FILLING.cheese; break;
        case 'salad': hamburger.filling = FILLING.salad; break;
        case 'fries': hamburger.filling = FILLING.fries; break;
        case 'none': hamburger.filling = undefined; break;
    };

    // Set hamburger additives
    let arr = [];
    topping.map(el => arr.push(ADDITIVE[el]));
    hamburger.additive = arr;

    // Get calories
    if (e.submitter.className === 'calories-button') {
        const calories = hamburger.getCalories();
        document.querySelector('.calories span').textContent = `${calories} калорій`;
    };

    // Get price
    if (e.submitter.className === 'price-button') {
        const price = hamburger.getPrice();
        document.querySelector('.price span').textContent = `${price} тугриків`;
    };
};

