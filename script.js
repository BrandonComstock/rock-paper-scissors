let humanScore = 0;
let computerScore = 0;



function getComputerChoice () { 
    let choices = ["rock", "paper", "scissors"];
    let choiceNum = Math.floor(Math.random() * 3);
    return choices[choiceNum];
};

function getHumanChoice () { 
    let choice = prompt("rock, paper, or scissors?");
    return choice;
}

console.log(getHumanChoice());