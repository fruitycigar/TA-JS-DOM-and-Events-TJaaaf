// Without event delegation
let firstBoxes = document.querySelectorAll(".first li");

firstBoxes.forEach((box, index) => {
    box.addEventListener('click', (event) => {
        event.target.innerText = index + 1;

        setTimeout(()=> {
            event.target.innerText = '';
        }, 2000)
    }) 
})

// With event delegation

let secondBoxes = document.querySelector('.second');

secondBoxes.addEventListener('click', (event) => {

    if(event.target.classList.contains("box")) {
        event.target.innerText = Number(event.target.dataset.text);
    
        setTimeout(() => {
            event.target.innerText = ""
        }, 1000)
    }
});

