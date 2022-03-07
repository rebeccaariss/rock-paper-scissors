const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');

const possibleChoices = document.querySelectorAll('input');

let userChoice;
let computerChoice;
let result;

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (event) => {
    userChoice = event.target.id
    userChoiceDisplay.innerHTML = userChoice
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

    computerChoiceDisplay.innerHTML = computerChoice
};

function getResult() {
    if (computerChoice === userChoice) {
        result = "It's a draw!"
    } else if (computerChoice === "rock" && userChoice === "paper") {
        result = "You win!"
    } else if (computerChoice === "rock" && userChoice === "scissors") {
        result = "You lose!"
    } else if (computerChoice === "paper" && userChoice === "rock") {
        result = "You lose!"
    } else if (computerChoice === "paper" && userChoice === "scissors") {
        result = "You win!"
    } else if (computerChoice === "scissors" && userChoice === "rock") {
        result = "You win!"
    } else if (computerChoice === "scissors" && userChoice === "paper") {
        result = "You lose!"
    }

    resultDisplay.innerHTML = result
};
