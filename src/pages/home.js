export default function () {
    const content_div = document.createElement('div');
    content_div.setAttribute("id", "home-page")

    content_div.innerHTML = `<h1>Home Page</h1>`;

    return content_div;
}