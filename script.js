console.log("Hello World");

let humanScore = 0;
let computerScore = 0;

/*
FUNCTION getComputerChoice
    SET randomNumber TO result of call randomInt(0, 2)

    IF randomNumber IS EQUAL TO 0
        RETURN "rock"
    ELSE IF randomNumber IS EQUAL TO 1
        RETURN "paper"
    ELSE IF randomNumber IS EQUAL TO 2
        RETURN "scissors"
    END IF
END FUNCTION
*/

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

/*
FUNCTION getHumanChoice
    SET rawInput TO result of CALL prompt("Enter Rock, Paper, or Scissors:")
    
    SET choice TO rawInput converted to lowercase

    IF choice IS EQUAL TO "rock" OR choice IS EQUAL TO "paper" OR choice IS EQUAL TO "scissors"
        RETURN choice
    ELSE
        DISPLAY ALERT "Invalid choice! Please enter Rock, Paper, or Scissors."
    END IF
END FUNCTION
*/

function getHumanChoice () {
    let humanChoice = prompt("Please choose between rock, paper, or scissors");
    if (humanChoice === null || humanChoice === "" || humanChoice === undefined) {
        alert("Please enter your choice!");
    } else {
        return humanChoice.toLowerCase();
    }
}

/*

//Options: 

Human: Rock + Computer: Scissors -> You Win
Human Rock + Computer: Paper -> You Loose
Both Rock -> No one Wins

Computer: 

FUNCTION playRound
    IF Human Choice is EQUAL to Computer Choice
        DISPLAY "No one wins! Both chose XYZ"
    ELSE IF 
        Human Choice is Rock and Computer Choice is Scissors OR
        Human Choice is Paper and Computer Choice is Stone OR
        Human Choice is Scissors and Computer CHoise is PAPER
            DISPLAY You Win "Human Choice" beats Computer Choice
    ELSE IF 
        
    DISPLAY ALERT "You lose! Paper beats Rock”."
END FUNCTION
*/

function playRound(humanChoice, computerChoice) {

    if (humanChoice === computerChoice) {
        console.log(`No one wins! Both chose ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)}!`);
    } else if (
        humanChoice === "rock" && computerChoice === "scissors" ||
        humanChoice === "paper" && computerChoice === "stone" ||
        humanChoice === "scissors" && computerChoice === "paper") {
            let humanChoiceCapitalized = humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1);
            let computerChoiceCapitalized = computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1);
            console.log(`You win! ${humanChoiceCapitalized} beats ${computerChoiceCapitalized}!`);
    } else if (
        computerChoice === "rock" && humanChoice === "scissors" ||
        computerChoice === "paper" && humanChoice === "stone" ||
        computerChoice === "scissors" && humanChoice === "paper") {
            let humanChoiceCapitalized = humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1);
            let computerChoiceCapitalized = computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1);
            console.log(`You lose! ${computerChoiceCapitalized} beats ${humanChoiceCapitalized}!`);
        }
}


const humanSelection = getHumanChoice();
console.log(`You chose ${humanSelection.charAt(0).toUpperCase() + humanSelection.slice(1)}.`)

const computerSelection = getComputerChoice();
console.log(`The computer chose ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)}.`)

playRound(humanSelection, computerSelection);