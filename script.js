function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    const results = document.querySelector("#results");
    const score = document.querySelector("#score");
    const container = document.querySelector("#container")
    const winResults = document.createElement("div");

    function getComputerChoice () { 
        let choices = ["rock", "paper", "scissors"];
        let choiceNum = Math.floor(Math.random() * 3);
        return choices[choiceNum];
    };

    function getHumanChoice () { 
        let choice = prompt("rock, paper, or scissors?");
        return choice.toLocaleLowerCase();
    }

    function playRound(humanChoice, computerChoice) {
        let message;
        switch (humanChoice) {
            case "rock": {
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
            case "paper": {
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
            case "scissors": {
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
        results.textContent = message;
        score.textContent = `You: ${humanScore} | Computer: ${computerScore}`;

        if (humanScore === 5) {
            winResults.textContent = "you win!";
            container.appendChild(winResults);
        } else if (computerScore === 5) {
            winResults.textContent = "you lose";
            container.appendChild(winResults);
        }  
    }

        // playRound(getHumanChoice(), getComputerChoice());
    
    const rock = document.querySelector("#rock");
    const paper = document.querySelector("#paper");
    const scissors = document.querySelector("#scissors");

    rock.addEventListener("click", () => {
        playRound("rock", getComputerChoice());
    });

    paper.addEventListener("click", () => {
        playRound("paper", getComputerChoice());
    });

    scissors.addEventListener("click", () => {
        playRound("scissors", getComputerChoice());
    });
}



playGame();