console.log("Hello World");

/*
Pseudocode for computer choice function:

CALL random int function
Returns random integer that is either 0, 1, or 2
STORE that value in a variable called number
IF number is 0, return "rock"
IF number is 1, return "paper"
IF number is 2, return "scissor"

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

console.log(getComputerChoice());




