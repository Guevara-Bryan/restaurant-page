export default function () {
    const content_div = document.createElement('div');
    content_div.setAttribute("id", "contact-page")

    content_div.innerHTML = `
        <h1>Contact Page</h1>
    `;
    
    return content_div;
}