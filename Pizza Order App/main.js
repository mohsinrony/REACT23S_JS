// Sample pizza menu data (you can expand this)
const menu = [
    { id: 1, name: 'Children', price: 7.50 },
    { id: 2, name: 'Normal', price: 10.50 },
    { id: 3, name: 'Family', price: 12.50 },
    { id: 4, name: 'Pannu', price: 15.50 },
];

const toppings = ['Chicken','Mushrooms', 'Tuna Fish','Olives', 'Pineapple','Red Onions','Garlic', 'Black Peppers', 'Blue Cheese', 'Extra Cheese',];

const cart = [];

// DOM elements
const menuList = document.getElementById('menu-list');
const toppingsList = document.getElementById('toppings-list');
const cartList = document.getElementById('cart-list');
const totalSpan = document.getElementById('total');
const addToCartBtn = document.getElementById('add-to-cart');

// Create pizza menu dynamically
menu.forEach(pizza => {
    const menuItem = document.createElement('li');
    menuItem.innerHTML = `
        <input type="radio" name="pizza" value="${pizza.id}">
        ${pizza.name} - €${pizza.price.toFixed(2)}
    `;
    menuList.appendChild(menuItem);
});

// Create toppings checkboxes dynamically
toppings.forEach(topping => {
    const toppingCheckbox = document.createElement('input');
    toppingCheckbox.type = 'checkbox';
    toppingCheckbox.name = 'topping';
    toppingCheckbox.value = topping;
    const label = document.createElement('label');
    label.appendChild(toppingCheckbox);
    label.appendChild(document.createTextNode(topping));
    toppingsList.appendChild(label);
});

// Handle "Add to Cart" button click
addToCartBtn.addEventListener('click', () => {
    const selectedPizzaId = document.querySelector('input[name="pizza"]:checked');
    const selectedToppings = Array.from(document.querySelectorAll('input[name="topping"]:checked')).map(input => input.value);

    if (!selectedPizzaId) {
        alert('Please select a pizza.');
        return;
    }

    const pizza = menu.find(pizza => pizza.id == selectedPizzaId.value);
    const totalPrice = pizza.price + (selectedToppings.length > 4 * 0.5); // €0.50 per topping

    const order = {
        pizza: pizza.name,
        toppings: selectedToppings.join(', '),
        price: totalPrice.toFixed(2),
    };

    cart.push(order);

    // Update the shopping cart
    const cartItem = document.createElement('li');
    cartItem.textContent = `${order.pizza} with ${order.toppings} - $${order.price}`;
    cartList.appendChild(cartItem);

    // Update the total price
    const currentTotal = parseFloat(totalSpan.textContent);
    totalSpan.textContent = (currentTotal + totalPrice).toFixed(2);
});

