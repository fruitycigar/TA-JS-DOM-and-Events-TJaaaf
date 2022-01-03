let form = document.querySelector("form");

let usernameError = "";

function handleSubmit(event) {
    event.preventDefault();

    let usernameElm = event.target.elements.username;
    
    if (usernameElm.length === "") {
        usernameError = "Can't be empty!";
    }
    usernameElm.nextElementSibling.innerText = usernameError; 
}

form.addEventListener("submit", handleSubmit);

// Conditions
// Username can't be less than 4 characters
// Name can't be numbers
// Email must contain the symbol @
// Email must be at least 6 characters
// Phone numbers can only be a number
// Length of phone number can't be less than 7
// Password and confirm password must be same