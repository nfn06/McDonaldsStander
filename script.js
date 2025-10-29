const orderBtn = document.getElementById('orderBtn');
const menu = document.getElementById('menu');
const welcomeDiv = document.getElementById('welcomeDiv');

orderBtn.addEventListener('click', () => {
    welcomeDiv.style.display = 'none';
    menu.style.display = 'flex';
})
