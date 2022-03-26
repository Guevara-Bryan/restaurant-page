import skillet_lasagna from '../images/skillet-lasagna.webp';
import chicken_alfredo from '../images/chicken-alfredo-caserolle.jpeg';

export default function () {
    const content_div = document.createElement('div');
    content_div.setAttribute("id", "menu-page");
    content_div.classList.add('animation-slide-and-fade-in');

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

    content_div.innerHTML = `
        <div class="view-title">
            <h1>Menu</h1>
        </div>
        <div class="view-container">
    `;

    items.forEach(item => {
        content_div.innerHTML += `
            <div class="item-card">
                <div class="item-title"><h2>${item.name}</h2></div>
                <div class="item-main">
                    <img class="item-img" src="${item.image}">
                    <p>${item.short}</p>
                </div>
            </div>
        `;
    });

    content_div.innerHTML += "\n</div>"
    
    return content_div;
}