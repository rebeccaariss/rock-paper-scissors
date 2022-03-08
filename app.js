const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const userWins = document.getElementById('user-wins');
const computerWins = document.getElementById('computer-wins');
const possibleChoices = document.querySelectorAll('input');

let userChoice;
let computerChoice;
let result;
let userTotal = 0;
let computerTotal = 0;

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (event) => {
    userChoice = event.target.id
    userChoiceDisplay.innerHTML = `<img src='${userChoice}.png' alt='${userChoice}'/>`
    generateComputerChoice()
    getResult()
}));

function generateComputerChoice() {
    // Need to add 1 so that number generated is not 0 (for better human readability; counting starts at 0 with Math module):
    const randomNumber = Math.floor(Math.random() * 3) + 1

    if (randomNumber === 1) {
        computerChoice = "rock"
    } else if (randomNumber === 2) {
        computerChoice = "paper"
    } else if (randomNumber === 3) {
        computerChoice = "scissors"
    }

    computerChoiceDisplay.innerHTML = `<img src='${computerChoice}.png' alt='${computerChoice}'/>`
};

function getResult() {
    if (computerChoice === userChoice) {
        result = "It's a draw!"
    } else if (computerChoice === "rock" && userChoice === "paper") {
        result = "You win!"
        userTotal++
    } else if (computerChoice === "rock" && userChoice === "scissors") {
        result = "You lose!"
        computerTotal++
    } else if (computerChoice === "paper" && userChoice === "rock") {
        result = "You lose!"
        computerTotal++
    } else if (computerChoice === "paper" && userChoice === "scissors") {
        result = "You win!"
        userTotal++
    } else if (computerChoice === "scissors" && userChoice === "rock") {
        result = "You win!"
        userTotal++
    } else if (computerChoice === "scissors" && userChoice === "paper") {
        result = "You lose!"
        computerTotal++
    }

    resultDisplay.innerHTML = result
    userWins.innerHTML = userTotal
    computerWins.innerHTML = computerTotal
};
