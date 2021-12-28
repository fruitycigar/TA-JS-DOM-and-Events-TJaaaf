// 1. Create 500 boxes of size (4rem and 4rem)
// 2. Each box will contain a random number from 0 - 500
// 3. When moving the mouse over the boxes the background color of each box should change to some random color.
// 4. Along with random color the random number should also change.

function randomNumber(max) {
    return Math.floor(Math.random() * max);
}

function randomColor() {
    let hexcodeCharacters = [
        '0',
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        'a',
        'b',
        'c',
        'd',
        'e',
        'f',
    ]
    let color = "#";

    for(let i = 0; i < 6; i++) {
        color = color + hexcodeCharacters[randomNumber(16)];
    }

    return color;
}

let parentBox = document.querySelector(".boxes");

for (let i = 0; i < 500; i++) {
    let div = document.createElement("div");
    div.classList.add("box")

    let h3 = document.createElement("h3");
    h3.innerText = randomNumber(500);

    div.append(h3);
    parentBox.append(div);
}

let allBoxes = document.querySelectorAll(".box");

function handleMouseMove() {
    allBoxes.forEach((elm) => {
        elm.style.backgroundColor = randomColor();
        elm.querySelector('h3').innerText = randomNumber(500);
    })
}

parentBox.addEventListener("mousemove", handleMouseMove);