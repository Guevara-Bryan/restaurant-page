import home from "./home.js";
import menu from "./menu.js";
import contact from "./contact.js";

// Logic for tab switching goes here.
function content(){
    // Basic layout of the content on the page
    let current_content = home();
    const content_div = document.createElement('div');
    const header = document.createElement('div');
    const nav_bar = document.createElement('nav');
    const footer = document.createElement('div');

    content_div.setAttribute("id", "content");
    header.setAttribute("id", "header");
    nav_bar.setAttribute("id", "nav-bar");
    footer.setAttribute("id", "footer");

    // creating all the buttons for the navigation bar
    const nav_buttons = {
        home: document.createElement('button'),
        menu: document.createElement('button'),
        contact: document.createElement('button'),
    }
    // Adding logic to the buttons
    nav_buttons.home.textContent = "Home";
    nav_buttons.home.addEventListener('click', ()=>{ 
        let next_content = home();
        content_div.replaceChild(next_content, current_content);
        current_content = next_content;
    });
    //------------
    nav_buttons.menu.textContent = "Menu";
    nav_buttons.menu.addEventListener('click', ()=>{ 
        let next_content = menu();
        content_div.replaceChild(next_content, current_content);
        current_content = next_content;
    });
    //-------------
    nav_buttons.contact.textContent = "Contact";
    nav_buttons.contact.addEventListener('click', ()=>{ 
        let next_content = contact();
        content_div.replaceChild(next_content, current_content);
        current_content = next_content;
    });
    

    // Adding buttons to the navigation bar
    nav_bar.appendChild(nav_buttons.home);
    nav_bar.appendChild(nav_buttons.menu);
    nav_bar.appendChild(nav_buttons.contact);

    header.innerHTML = `
        <div id="restuarant-name">
            <h1>Giorgio's Fine Dining</h1>
        </div>  
    `;
    header.appendChild(nav_bar);

    
    content_div.appendChild(header);
    content_div.appendChild(current_content);
    content_div.appendChild(footer);
    return content_div;
}

document.body.appendChild(content());