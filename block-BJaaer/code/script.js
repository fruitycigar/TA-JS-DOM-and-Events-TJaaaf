// nothing wrong with starting off like this, keep hammering out the syntax and we should succeed sooner or later.

let form = document.querySelector("form");
let modal = document.querySelector(".modal-overlay");
let modalInfo = document.querySelector(".modal-info");

let userData = {};

form.addEventListener("submit", (event) => {
    event.preventDefault();
    let elements = event.target.elements;

    userData.name = elements.name.value;
    userData.email = elements.email.value;
    userData.gender = elements.gender.value;
    userData.color = elements.color.value;
    userData.rating = elements.rating.value;
    userData.book = elements.book.value;
    userData.terms = elements.terms.checked;

    modal.classList.add("open");

    let close = document.querySelector(".modal_close");

    close.addEventListener('click', () => {
        modal.classList.remove("open");
    })

    displayInfo(userData);
});

function displayInfo(data = {}) {

    modalInfo.innerHTML = "";

    let h1 = document.createElement("h1");
    h1.innerText = `Hello, ${data.name}`;
    let email = document.createElement("p");
    email.innerText = `Email: ${data.email}`;
    let gender = document.createElement("p");
    gender.innerText = `Gender: ${data.gender}`;
    let color = document.createElement("p");
    color.innerText = `Color: ${data.color}`;
    let rating = document.createElement("p");
    rating.innerText = `Rating: ${data.rating}`;
    let book = document.createElement("p");
    book.innerText = `Book: ${data.book}`;
    let terms = document.createElement("p");
    terms.innerText = `Terms : ${
        data.terms
        ? "You have accepted the terms and conditions." :
          "You have not accepted the terms and conditions."  
    }`;

    modalInfo.append(h1, email, gender, color, rating, book, terms);    
};