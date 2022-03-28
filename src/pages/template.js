export default function () {
    const container = document.createElement('div');
    container.classList.add("container");

    container.innerHTML = `
        <div id="header">
            <div id="title"> <h1>Giorgio's Fine Dining</h1> </div>
            <nav id="nav-bar">
                <button class="generic-button" id="home-button" value="home">Home</button>
                <button class="generic-button" id="menu-button" value="menu">Menu</button>
                <button class="generic-button" id="contact-button" value="contact">Contact</button>
            </nav>
        </div>
        <div id="dynamic-view"></div>
        <div id="footer">
            <a href="https://github.com/Guevara-Bryan" target="_blank">By: Bryan Guevara</a>
        </div>
    `;

    return container;
}