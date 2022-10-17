var inputs = document.querySelectorAll('input');
var btn = document.querySelector('button')

btn.addEventListener('click', checkInput)
function checkInput() {

    var all_msg_error = document.querySelectorAll('.myForm div p');
    all_msg_error.forEach(element => {
        element.style.display = "none";
    });

    inputs.forEach(element => {
        element.style.border = "";
        element.style.backgroundImage  = "";
        element.placeholder = "";
        if (element.value == "") {
            var parent = element.parentNode.className;
            if (parent == "field-email") {
                element.placeholder = "email@example/com";
                element.classList.add('ex-email');
            } 
            var msg_error = document.querySelector(`.${parent} p`);
            msg_error.style.display = "block";
            element.style.backgroundImage  = "url(images/icon-error.svg)";
            element.style.border = "0.5px solid hsl(0, 100%, 74%)";
    
        }

        if (element.id == "email") {
            if (element.value.includes('@') == false) {
                var parent = element.parentNode.className;
                var msg_error = document.querySelector(`.${parent} p`);
                msg_error.style.display = "block";
                element.style.backgroundImage  = "url(images/icon-error.svg)";
                element.style.border = "0.5px solid hsl(0, 100%, 74%)";
            }
        }
    })
}