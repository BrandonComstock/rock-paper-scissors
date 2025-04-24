function getComputerChoice () { 
    let choices = ["rock", "paper", "scissors"];
    let choiceNum = Math.floor(Math.random() * 3);
    return choices[choiceNum];
};

console.log(getComputerChoice());