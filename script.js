const orderBtn = document.getElementById('orderBtn');
const menu = document.getElementById('menu');
const welcomeDiv = document.getElementById('welcomeDiv');

orderBtn.addEventListener('click', () => {
    welcomeDiv.style.display = 'none';
    menu.style.display = 'flex';
})

let basketValue = 0;
const resultDisplay = document.getElementById('result');

const addButtons = document.querySelectorAll('.addBtn');
addButtons.forEach(button => {
    button.addEventListener('click', () => {
        const price = parseFloat(button.getAttribute('data-price'));
        basketValue += price;
        resultDisplay.textContent = `Basket Value: ${basketValue} DKK`;
    });
});

