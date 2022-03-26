export default function () {
    const content_div = document.createElement('div');
    content_div.setAttribute("id", "menu-page")

    content_div.innerHTML = `
        <h1>Menu Page</h1>
    `;
    
    return content_div;
}