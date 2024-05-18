const body = document.querySelector('body')

const start = document.getElementById('start')
const stop = document.getElementById('stop')

let intervalID

start.addEventListener('click', () => {
    generateRandomColor()
})

stop.addEventListener('click', () => {
    clearInterval(intervalID)
    intervalID = null
})

function generateRandomHex() {
    const hex = "0123456789ABCDEF"
    let color = "#"

    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)]
    }
    console.log(color)
    return color
}

function generateRandomColor() {
    if (!intervalID) {
        intervalID = setInterval(() => { body.style.backgroundColor = generateRandomHex() }, 1000)
    }
}