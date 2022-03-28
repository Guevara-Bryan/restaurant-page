import skillet_lasagna from '../images/skillet-lasagna.webp';
import chicken_alfredo from '../images/chicken-alfredo-caserolle.jpeg';

export default function () {
    const content_div = document.createElement('div');
    content_div.setAttribute("id", "menu-page");
    content_div.classList.add('animation-bottom-slidein');

    const items = [
        {
            name: "Skillet Lasagna",
            short: "Delicious lasagna made with the freshest and highest quality cheese, and grassfed beef.",
            image: skillet_lasagna,
        },
        {
            name: "Chicken Alfredo Caserolle",
            short: "Tasty caserolle with a base of pasta topped with delicious chicken, cheese, and our special alfredo sause.",
            image: chicken_alfredo,
        },
        {
            name: "Chicken Alfredo Caserolle",
            short: "Tasty caserolle with a base of pasta topped with delicious chicken, cheese, and our special alfredo sause.",
            image: chicken_alfredo,
        },
        {
            name: "Chicken Alfredo Caserolle",
            short: "Tasty caserolle with a base of pasta topped with delicious chicken, cheese, and our special alfredo sause.",
            image: chicken_alfredo,
        },
    ];

    content_div.innerHTML += `
        <div class="view-title">
            <h1>Menu</h1>
        </div>
        <div class="view-container"></div`
    ;
    const view = content_div.querySelector('.view-container');
    
    items.forEach(item => {
        const temp_item = document.createElement('div');
        temp_item.classList.add('item-card');
        temp_item.innerHTML = `
                <div class="item-title"><h2>${item.name}</h2></div>
                <div class="item-main">
                    <img src="${item.image}">
                    <p>${item.short}</p>
                </div>
        `;
        view.appendChild(temp_item);
    });


        

    
    return content_div;
}