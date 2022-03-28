export default function () {
    const content_div = document.createElement('div');
    content_div.setAttribute("id", "contact-page");
    content_div.classList.add('animation-bottom-slidein');


    content_div.innerHTML += `
        <div class="view-title">
            <h1>Menu</h1>
        </div>
        <div class="view-container">
        </div>`
    ;
    
    return content_div;
}