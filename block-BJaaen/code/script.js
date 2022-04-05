let userRoot = document.querySelector(".user");
let computerRoot = document.querySelector(".computer");

// This is being done to select these respective divs for future edits.

let dataSet = [
    {
        name: "rock",
        beats: "scissors",
    },
    {
        name: "paper",
        beats: "rock",
    },
    {
        name: "scissors",
        beats: "paper",
    },
];

function getRandomNumber(max = 3) {
    return Math.floor(Math.random() * max);
}

let userSelected = {}, 
computerSelected = {};

function createUserLayout() {
    dataSet.forEach((icon) => {
        let i = document.createElement("i");
        i.className = `far fa-hand-${icon.name}`;

        if (userSelected.name === icon.name) {
            i.classList.add("selected");
        }

        i.addEventListener('click', () => {
            userSelected = icon;
            computerSelected = dataSet[getRandomNumber()];

            console.log(userSelected, computerSelected);
        });

        userRoot.append(i);


    })
}

createUserLayout();

function createComputerLayout() {
    dataSet.forEach((icon) => {
        let i = document.createElement("i");
        i.className = `far fa-hand-${icon.name}`;

        if (computerSelected.name === icon.name) {
            i.classList.add("selected");
        }

        computerRoot.append(i);
    })
}

createComputerLayout();