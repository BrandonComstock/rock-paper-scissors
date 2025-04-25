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
                        computerChoice++;
                        break;
                    }
                    case "scissors": {
                        message = "You win! Rock beats scissors";
                        humanChoice++;
                        break;
                    }
                }
                break;
            }
            case "PAPER": {
                switch (computerChoice) {
                    case "rock": {
                        message = "You win! Paper beats rock";
                        humanChoice++;
                        break;
                    }
                    case "paper": {
                        message = "Tie! try again";
                        break;
                    }
                    case "scissors": {
                        message = "You lose! Scissors beats paper";
                        computerChoice++;
                        break;
                    }
                }
                break;
            }
            case "SCISSORS": {
                switch (computerChoice) {
                    case "rock": {
                        message = "You lose! Rock beats scissors";
                        computerChoice++;
                        break;
                    }
                    case "paper": {
                        message = "You win! Scissors beats paper";
                        humanChoice++;
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


    for (let i = 0; i++; i <=5) {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        
        playRound(humanSelection, computerSelection);
        if (humanScore === 5) {
            console.log("You win!");
            break;
        }
        if (computerScore === 5) {
            console.log("You lose!");
            break;
        }
    }

}


playGame();