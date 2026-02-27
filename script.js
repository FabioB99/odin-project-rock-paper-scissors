function getComputerChoice() {
    let number = getRandomInt(3);

    if (number === 0) {
        return "rock";
    } else if (number === 1) {
        return "paper";
    } else {
        return "scissors"
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}


function getHumanChoice() {
    let humanChoice = prompt("Please choose between rock, paper, or scissors");
    if (humanChoice === null || humanChoice === "" || humanChoice === undefined) {
        alert("Please enter your choice!");
    } else {
        return humanChoice.toLowerCase();
    }
}


function displayWinMessage(humanChoice, computerChoice) {
    let humanChoiceCapitalized = humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1);
    let computerChoiceCapitalized = computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1);
        
    if (humanChoice === "rock" || humanChoice === "paper") {
        console.log(`You win! ${humanChoiceCapitalized} beats ${computerChoiceCapitalized}!`);
    } else {
        console.log(`You win! ${humanChoiceCapitalized} beat ${computerChoiceCapitalized}!`);
    }
}

function displayLossMessage(humanChoice, computerChoice) {
    let humanChoiceCapitalized = humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1);
    let computerChoiceCapitalized = computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1);

    if (computerChoice === "scissors") {
        console.log(`You lose! ${computerChoiceCapitalized} beat ${humanChoiceCapitalized}!`);
    } else {
        console.log(`You lose! ${computerChoiceCapitalized} beats ${humanChoiceCapitalized}!`);
    }
}


function playGame() {

    let humanScore = 0;
    let computerScore = 0;
    let humanSelection = "";
    let computerSelection = "";
    const numberOfRounds = 5;

    function playRound(humanChoice, computerChoice) {

    if (humanChoice === computerChoice) {
        console.log(`No one wins! Both chose ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)}!`);

    } else if (
        humanChoice === "rock" && computerChoice === "scissors" ||
        humanChoice === "paper" && computerChoice === "rock" ||
        humanChoice === "scissors" && computerChoice === "paper") {
        displayWinMessage(humanChoice, computerChoice);
        humanScore++;
    } else {
        displayLossMessage(humanChoice, computerChoice)
        computerScore++;
    }
    }

    for (let i = 0; i < numberOfRounds; i++) {
        console.log(`Round number ${i + 1}:`);

        humanSelection = getHumanChoice();
        console.log(`You chose ${humanSelection.charAt(0).toUpperCase() + humanSelection.slice(1)}.`)
        computerSelection = getComputerChoice();
        console.log(`The computer chose ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)}.`)

        playRound(humanSelection,computerSelection);
        console.log(`Your score is: ${humanScore}`);
        console.log(`The computer's score is: ${computerScore}`);
    }

    if (humanScore === computerScore) {
        console.log("Gamer Over: No one has won!")
    } else if (humanScore > computerScore) {
        console.log("Game Over: Congratulations, you are the winner!")
    } else {
        console.log("Game Over: You have lost!")
    }
}

playGame();