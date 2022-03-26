import template from "./template.js"
import home from "./home.js";
import menu from "./menu.js";
import contact from "./contact.js";
import '../styles/styles.css';
import '../images/fine-dine.jpeg';

// Logic for tab switching goes here.
function content(){
    const views = {
        home: home(),
        menu: menu(),
        contact: contact(),
    };
    let current_view = views.home;

    const page = template();
    const dynamic = page.querySelector("#dynamic-view")
    const nav_buttons = [... page.querySelectorAll('button[class="nav-option"]')];

    nav_buttons.forEach(button => {
        button.addEventListener('click', ()=> {
            dynamic.replaceChild(views[button.value], current_view);
            current_view = views[button.value];
        });
    });


    dynamic.appendChild(current_view);
    return page;
}

document.body.appendChild(content());

