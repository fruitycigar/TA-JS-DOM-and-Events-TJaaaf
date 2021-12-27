
// 1. Create two boxes with buttons in center
// 2. First button with `click` and second with `move your mouse` label
// 3. When clicked in the first box the background of the box should change to any random color
// 4. When moving the mouse in box 2 will change the background of the the box to random color

let box1 = document.querySelector(".first");
let box2 = document.querySelector(".second");

function generateRandomColor() {
    let hexcodeArray = [
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
        'f'
    ];

    let color = "#";

    for (let i = 0; i < 6; i++) {
        let randomNumber = Math.floor(Math.random() * 16);
        color = color + hexcodeArray[randomNumber];
    }

    return color;
}

function handleClick() {
    // 1. generate random color.
    let randomColor = generateRandomColor();
    // 2. change background color to randomly generated color.
    box1.style.backgroundColor = randomColor;
}

function handleMouseMove() {
    // 1. generate random color.
    let randomColor = generateRandomColor();
    // 2. change background color to randomly generated color.
    box2.style.backgroundColor = randomColor;
}

box1.addEventListener('click', handleClick);
box2.addEventListener('mousemove', handleMouseMove);