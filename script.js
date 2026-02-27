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

console.log("Computer choice: " + getComputerChoice());

/*
FUNCTION getHumanChoice
    CALL prompt() function and set humanChoice variable to choice 

    IF humanChoice is Equal to "rock", "paper" OR scissors
        RETURN humanChoice
    ELSE 
        SHOW alert to enter a valid choice
END FUNCTION
*/

function getHumanChoice () {
    let humanChoice = prompt("Please choose between rock, paper, or scissors");
    if (humanChoice === null | humanChoice === "" | humanChoice === undefined) {
        alert("Please enter your choice!");
    } else {
        return humanChoice.toLowerCase();
    }
}

console.log("Human choice: " + getHumanChoice());

/*
FUNCTION getHumanChoice
    CALL prompt() function and set humanChoice variable to choice 

    IF humanChoice is Equal to "rock", "paper" OR scissors
        RETURN humanChoice
    ELSE 
        SHOW alert to enter a valid choice
END FUNCTION
*/

function playRound(humanChoice, computerChoice) {

}