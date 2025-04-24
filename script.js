let humanScore = 0;
let computerScore = 0;



function getComputerChoice () { 
    let choices = ["rock", "paper", "scissors"];
    let choiceNum = Math.floor(Math.random() * 3);
    return choices[choiceNum];
};

function getHumanChoice () { 
    let choice = prompt("rock, paper, or scissors?");
    return choice.toUpperCase();
}

function playRound(humanChoice, computerChoice) {
    let message;
    switch (humanChoice) {
        case "ROCK": {
            switch (computerChoice) {
                case "rock": {
                    message = "Tie! try again";
                }
                case "paper": {
                    message = "You lose! Paper beats rock";
                }
                case "scissors": {
                    message = "You win! Rock beats scissors";
                }
            }
        }
        case "PAPER": {
            switch (computerChoice) {
                case "rock": {
                    message = "You win! Paper beats rock";
                }
                case "paper": {
                    message = "Tie! try again";
                }
                case "scissors": {
                    message = "You lose! Scissors beats paper";
                }
            }
        }
        case "SCISSORS": {
            switch (computerChoice) {
                case "rock": {
                    message = "You lose! Rock beats scissors";
                }
                case "paper": {
                    message = "You win! Scissors beats paper";
                }
                case "scissors": {
                    message = "Tie! try again";
                }
            }
        }
    }
    console.log(message);
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);