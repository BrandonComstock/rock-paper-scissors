function playGame() {
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
                        break;
                    }
                    case "paper": {
                        message = "You lose! Paper beats rock";
                        computerScore++;
                        break;
                    }
                    case "scissors": {
                        message = "You win! Rock beats scissors";
                        humanScore++;
                        break;
                    }
                }
                break;
            }
            case "PAPER": {
                switch (computerChoice) {
                    case "rock": {
                        message = "You win! Paper beats rock";
                        humanScore++;
                        break;
                    }
                    case "paper": {
                        message = "Tie! try again";
                        break;
                    }
                    case "scissors": {
                        message = "You lose! Scissors beats paper";
                        computerScore++;
                        break;
                    }
                }
                break;
            }
            case "SCISSORS": {
                switch (computerChoice) {
                    case "rock": {
                        message = "You lose! Rock beats scissors";
                        computerScore++;
                        break;
                    }
                    case "paper": {
                        message = "You win! Scissors beats paper";
                        humanScore++;
                        break;
                    }
                    case "scissors": {
                        message = "Tie! try again";
                        break;
                    }
                }
                break;
            }
        }
        console.log(message);
    }

    // while (humanScore < 5) {
    //     playRound(getHumanChoice(), getComputerChoice());
    //     if (humanScore === 5) {
    //         console.log("you win!")
    //         break;
    //     } else if (computerScore === 5) {
    //         console.log("you lose!")
    //         break;
    //     }  else {
    //         continue;
    //     }
    // }    
}


playGame();