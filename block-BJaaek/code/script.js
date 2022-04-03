
// 1. Create two boxes with buttons in center
// 2. First button with `click` and second with `move your mouse` label
// 3. When clicked in the first box the background of the box should change to any random color
// 4. When moving the mouse in box 2 will change the background of the the box to random color


let box1 = document.querySelector('.first');
let box2 = document.querySelector('.second');

function randomNumber(upper) {
    return Math.floor(Math.random() * upper);
}

function randomColor() {
    let hexcodeChar = [
        'a',
        'b',
        'c',
        'd',
        'e',
        'f',
        '0',
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9'
    ]

    let color = "#";

    for(let i = 0; i < 6; i++) {
        color = color + hexcodeChar[randomNumber(15)];
    }
    return color;
}

box1.addEventListener('click', function() {
    box1.style.background = randomColor();
});




box2.addEventListener('mousemove', function() {
    box2.style.background = randomColor();
});