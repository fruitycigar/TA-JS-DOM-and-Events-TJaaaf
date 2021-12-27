function randomNumber(max) {
    return Math.floor(Math.random() * max);
}

function getRandomColor() {
    let hexcodeArr = [
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
    ];

    let color = "#";

    for (let i = 0; i < 6; i++) {
        color = color + hexcodeArr[randomNumber(16)];
    }

    return color;
}


let parentBox = document.querySelector(".boxes");


for (let i = 0; i < 500; i++) {
    let div = document.createElement("div");
    div.classList.add("box");

    let h3 = document.createElement("h3");
    h3.innerText = randomNumber(500);

    div.append(h3);
    parentBox.append(div);
}

let allBoxes = document.querySelectorAll(".box");

function handleMouseMove() {
    allBoxes.forEach((box) => {
        box.style.backgroundColor = getRandomColor();
        box.querySelector('h3').innerText = randomNumber(500);
    })
}

parentBox.addEventListener("mousemove", handleMouseMove);