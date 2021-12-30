// 1. Select the main display portion of the calculator.
// 2. Initialize it's value to 0.

// Collecting and accounting for user-inputs:

// 3. All 17 buttons need to be accounted for, and some of them require different functions (like C has to reset the value, = has to evaluate the expression).
// 4. Select all 17 buttons and add an event listener to each of them to the action 'click' and a handler function.

// Defining the handler function.

// 5. Handler function should be set up to handle events from all buttons.
// 6. Categorise the buttons according to the functions you want them to embody and define logic accordingly.

// 7. Clicking on numbers and operators should change the display to a string.
// 8. Clicking on clear should reset the display to the initial value (0).
// 9. Clicking on '=' should evaluate the expression and replace the display with the result.

//10. To make way for new numbers upon entering the first value, tweak the code slightly to make it disappear.

let display = document.querySelector(".main-display");
let allButtons = document.querySelectorAll("button");

let initialValue = 0;

display.innerText = initialValue;

function handleBtn(event) {
    if (event.target.classList.contains("equals")) {
        display.innerText = eval(display.innerText);
        return;
    }
    if (event.target.classList.contains("clear")) {
        display.innerText = initialValue;
        return;
    }
    if (display.innerText == initialValue) {
        display.innerText = event.target.innerText;
    } else {
        display.innerText += event.target.innerText;
    }
}

allButtons.forEach(btn => {
    btn.addEventListener('click', handleBtn);
})
