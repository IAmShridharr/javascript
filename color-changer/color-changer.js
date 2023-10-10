const orangeButton = document.getElementById('orange')
const redButton = document.getElementById('red')
const blueButton = document.getElementById('blue')
const greenButton = document.getElementById('green')
const grayButton = document.getElementById('gray')

const body = document.querySelector('body')

orangeButton.onclick = () => changeColor('orange')
redButton.onclick = () => changeColor('red')
blueButton.onclick = () => changeColor('blue')
greenButton.onclick = () => changeColor('green')
grayButton.onclick = () => changeColor('gray')

function changeColor(color) {
    body.style.backgroundColor = color;
}

/*

// Optional Method 1 - This method can be only used if the ids of the buttons are color names

const body = document.querySelector('body')
const buttons = document.querySelectorAll('.colorButton')

buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
        switch (event.target.id) {
            case "orange":
                body.style.backgroundColor = "orange"
                break;
            case "red":
                body.style.backgroundColor = "red"
                break;
            case "blue":
                body.style.backgroundColor = "blue"
                break;
            case "green":
                body.style.backgroundColor = "green"
                break;
            case "gray":
                body.style.backgroundColor = "gray"
                break;
            default:
                break;
        }
    })
})

*/

/*

// Optional Method 2 - This method can be only used if the ids of the buttons are color names

const body = document.querySelector('body')
const buttons = document.querySelectorAll('.button')

buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
        body.style.backgroundColor = event.target.id
    })
})

*/   