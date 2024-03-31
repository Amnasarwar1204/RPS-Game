import inquirer from "inquirer";
async function playGame() {
    console.log("<<<<<<<<<<Welcome to the game>>>>>>>>>>");
    console.log("<<<<<<Lets start!>>>>>");
    const choise = ['rock', 'paper', 'scissors'];
    const compChoiceIndex = Math.floor(Math.random() * choise.length);
    const compChoice = choise[compChoiceIndex];
    let player1 = await inquirer.prompt([
        {
            name: "name",
            type: "string",
            message: " player1.Plz entre rock, paper, scissor (any one, in small letters)"
        }
    ]);
    console.log("your choice: ", player1);
    console.log("computer choice: ", compChoice);
    if (player1.name === compChoice) {
        console.log("It's tie");
    }
    else if ((player1.name === "rock" && compChoice === "paper") || (player1.name === "scissors" && compChoice === "paper") || (player1.name === "rock" && compChoice === "paper")) {
        console.log("You win!");
    }
    else {
        console.log("You loss");
    }
    const ask = await inquirer.prompt([
        {
            type: 'list',
            name: 'response',
            message: 'Do  you want to play again? or Exit',
            choices: ["Play again", "Exit"]
        }
    ]);
    if (ask.response === "Exit") {
        console.log('Butter luck next time');
    }
    else {
        await playGame();
    }
}
playGame();
