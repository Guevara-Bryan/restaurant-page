export default function () {
    const content_div = document.createElement('div');
    content_div.setAttribute("id", "home-page");
    content_div.classList.add('animation-right-slidein');

    content_div.innerHTML = `
        <div id='image-text'>
            <h1>Over 20 Years</br>of the</br>Finest Cuisine</h1>
        </div>
    `;
    return content_div;
}