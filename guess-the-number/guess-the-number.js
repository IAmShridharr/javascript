// Generate a random number between 1 and 100
const generatedNumber = Math.floor(Math.random() * 100) + 1

let attempts = 10
let guesses = []
let won = false
let end = false

const inputGuess = document.getElementById('guess')
const form = document.querySelector('form')
const reset = document.getElementById('reset')
const attemptScreen = document.getElementById('attempts')
const hint = document.getElementById('hint')
const guessesScreen = document.getElementById('guesses')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    if(!won && !end) {
        attempts--
        if(attempts > 0) {
            const guess = inputGuess.value
            hint.textContent = match(guess)
        } else {
            const guess = inputGuess.value
            if(guess == generatedNumber) {
                hint.textContent = match(guess)
            } else {
                guesses.push(guess)
                guessesScreen.textContent = `Previous Guesses: ${guesses}`
                hint.textContent = `All your attempts have finished and You have failed to guess my number. The correct number was ${generatedNumber}`
                end = true
            }
        }
        attemptScreen.textContent = `Attempts: ${attempts}`
        inputGuess.value = ""
    } else {
        alert("Please restart the Game")
    }
})

reset.addEventListener('click', () => {
    attempts = 10
    attemptScreen.textContent = `Attempts: ${attempts}`
    inputGuess.value = ""
    hint.textContent = ""
    guesses = []
    guessesScreen.textContent = ""
    won = false
    end = false
})

function match(guess) {
    guesses.push(guess)
    guessesScreen.textContent = `Previous Guesses: ${guesses}`
    if (guess == generatedNumber) {
        won = true
        return `Congratulations! You have guess the correct number in ${10-attempts} attempts`
    } else if(guess < generatedNumber) {
        return `Your guessed number is smaller than my number!`
    } else {
        return `Your guessed number is greater than my number!`
    }
}