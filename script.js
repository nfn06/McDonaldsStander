const orderBtn = document.getElementById('orderBtn');
const content = document.getElementById('content');
const welcomeDiv = document.getElementById('welcomeDiv');
const menu = document.getElementById('menu');

const mainCourse = [
    {
        name: "Big Mac",
        price: 25,
        description:
            "A delicious burger with two beef patties, lettuce, cheese, pickles, onions, and special sauce.",
        img: "https://s7d1.scene7.com/is/image/mcdonalds/Core_Big_Mac_Single_832x822:product-header-desktop?wid=829&hei=455&dpr=off",
    },
    {
        name: "Chicken Salse Cheese",
        price: 30,
        description:
            "Crispy chicken fillet topped with melted cheese and creamy sauce, served in a toasted bun.",
        img: "https://s7d1.scene7.com/is/image/mcdonalds/Coinoffers_Chicken_Salsa_Cheese_Single_832x822:product-header-desktop?wid=829&hei=455&dpr=off",
    },
    {
        name: "McBacon",
        price: 28,
        description:
            "Juicy beef patty topped with crispy bacon, cheese, lettuce, tomato, and special sauce in a toasted bun.",
        img: "https://s7d1.scene7.com/is/image/mcdonalds/mcdonalds_mcbacon:product-header-desktop?wid=829&hei=455&dpr=off",
    },
];

const drinks = [
    {
        name: "Coca-Cola",
        description: "Classic Coca-Cola beverage.",
        price: 10,
        img: "https://s7d1.scene7.com/is/image/mcdonalds/mcd-dk-cocacolamellem:product-header-desktop?wid=829&hei=455&dpr=off",
    },
    {
        name: "McSprite",
        description: "Refreshing McSprite beverage.",
        price: 1,
        img: "https://s7d1.scene7.com/is/image/mcdonalds/212422_Webbilleder_Kolde_drikke_Sprite_Medium:product-header-desktop?wid=829&hei=455&dpr=off",
    },
    {
        name: "Fuze Tea",
        description: "Delicious Fuze Tea beverage.",
        price: 100,
        img: "https://s7d1.scene7.com/is/image/mcdonalds/mcd-dk-fuzeteamellem:product-header-desktop?wid=829&hei=455&dpr=off",
    },
];

const sides = [
    {
        name: "Pommes Frites",
        description: "Crispy golden fries.",
        price: 5,
        img: "https://s7d1.scene7.com/is/image/mcdonalds/mcd-dk-sharingfries-1:product-header-desktop?wid=829&hei=455&dpr=off",
    },
    {
        name: "Chicken McNuggets",
        description: "Crispy chicken nuggets.",
        price: 10,
        img: "https://s7d1.scene7.com/is/image/mcdonalds/mcdonalds_chicken-mcnuggets-9-stk:product-header-desktop?wid=829&hei=455&dpr=off",
    },
    {
        name: "Chilli Cheese Tops",
        description: "Spicy cheese-filled bites.",
        price: 15,
        img: "https://s7d1.scene7.com/is/image/mcdonalds/Sides_Chili_Cheese_Top_18pcs_Productmenu_Single_832x822:product-header-desktop?wid=829&hei=455&dpr=off",
    },
];

const desserts = [
    {
        name: "McFlurry Daim",
        description: "Creamy McFlurry with Daim pieces.",
        price: 12,
        img: "https://s7d1.scene7.com/is/image/mcdonalds/mcd-dk-mcflurry-daim:product-header-desktop?wid=829&hei=455&dpr=off",
    },
    {
        name: "Sundae Karamel",
        description: "Delicious sundae with caramel sauce.",
        price: 10,
        img: "https://s7d1.scene7.com/is/image/mcdonalds/mcd-dk-sundaekaramel-1:product-header-desktop?wid=829&hei=455&dpr=off",
    },
    {
        name: "Sundae",
        description: "Classic sundae.",
        price: 8,
        img: "https://s7d1.scene7.com/is/image/mcdonalds/212510_Sundae_Neutral_productmenu_single_832x822:product-header-desktop?wid=829&hei=455&dpr=off",
    },
];

const items = mainCourse.concat(drinks, sides, desserts)

items.forEach(item => {
    const element = document.createElement('div');

    element.id = item.name;
    element.classList.add('item');

    const nameElement = document.createElement('p');
    const priceElement = document.createElement('p');
    const imgElement = document.createElement('img')

    nameElement.append(item.name)
    priceElement.append(item.price + ' DKK')
    imgElement.src = item.img

    element.appendChild(nameElement)
    element.appendChild(priceElement)
    element.appendChild(imgElement)

    menu.appendChild(element)
});

orderBtn.addEventListener('click', () => {
    welcomeDiv.style.display = 'none';
    content.style.display = 'flex';
})

let basket = 0;
const itemElements = Array.from(document.getElementsByClassName('item'));
const test = document.getElementById('test');

itemElements.forEach(element => {
    element.addEventListener('click', () => {
        basket += items.find((item) => item.name === element.id).price  
    })
});

