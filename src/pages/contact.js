export default function () {
    const content_div = document.createElement('div');
    content_div.setAttribute("id", "contact-page");
    content_div.classList.add('animation-bottom-slidein');


    content_div.innerHTML += `
        <div class="view-title">
            <h1>Contact Us</h1>
        </div>
        <div class="view-container">
            <form id="contact-form">
                <div class='form-element'>
                    <label for='full-name'>Full Name: </label>
                    <input type='text' id='full-name' name'full-name' required>
                </div>
                <div class='form-element'>
                    <label for='email'>Email: </label>
                    <input type='email' id='email' name'email' required>
                </div>
                <div class='form-element'>
                    <label for='comments'>Comments: </label>
                    <textarea id='comments' rows='4' required></textarea>
                </div>

                <input class='generic-button' type='submit'>
            </form>
        </div>`
    ;
    
    return content_div;
}