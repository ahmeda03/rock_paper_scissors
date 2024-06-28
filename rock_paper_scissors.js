// Rock Paper Scissors - Game will be played entirely in the console

// Global Variables
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    /*
    Randomly choose value between 1 - 3
    IF random value is equal to 1 THEN
        RETURN "rock"
    ELSE IF random value is equal to 2 THEN
        RETURN "paper"
    ELSE IF random value is equal to 3 THEN
        RETURN "scissors"
    ELSE
        RETURN "invalid number generated"
    ENDIF
    */

    let computerChoice = generateChoice()
    if (computerChoice === 1) {
        return "rock";
    } else if (computerChoice === 2) {
        return "paper";
    } else if (computerChoice === 3) {
        return "scissors";
    } else {
        return "invalid number generated";
    }
}

function generateChoice() {
    let choice = Math.floor(Math.random() * 3) + 1;
    return choice;
}

function getHumanChoice() {
    /*
    READ user input (r = rock, p = paper, s = scissors)
    IF input is equal to p THEN
        RETURN "paper"
    ELSE IF input is equal to r THEN
        RETURN "rock"
    ELSE IF input is equal to s THEN
        RETURN "scissors"
    ELSE IF input is equal to null THEN
        RETURN "no input given"
    ELSE:
        RETURN "invalid input"
    ENDIF
    */

    let humanChoice = prompt("Input your choice (r = rock, p = paper, s = scissors): ")
    if (humanChoice === "r") {
        return "rock";
    } else if (humanChoice === "p") {
        return "paper";
    } else if (humanChoice === "s") {
        return "scissors";
    } else if (humanChoice === null) {
        return "no input given";
    } else {
        return "invalid input";
    }

}

function playRound(humanChoice, computerChoice) {
    /*
    SET humanChoice and computerChoice variables to lower case
    IF humanChoice is equal to computerChoice THEN
        DISPLAY tie message
    ELSE IF (humanChoice is rock AND computerChoice is scissors) OR 
            (humanChoice is paper AND computerChoice is rock) OR 
            (humanChoice is scissors AND computerChoice is paper) THEN
        INCREMENT human choice score
        DISPLAY human winner message
    ELSE IF (computerChoice is rock AND humanChoice is scissors) OR 
            (computerChoice is paper AND humanChoice is rock) OR 
            (computerChoice is scissors AND humanChoice is paper) THEN
        INCREMENT computer choice score
        DISPLAY computer winner message
    ELSE 
        DISPLAY invalid round message
    ENDIF
    */
   let hC = humanChoice.toLowerCase();
   let cC = computerChoice.toLowerCase();

   if (hC === cC) {
        console.log("Tie Game!");

   } else if ((hC === "rock" && cC === "scissors") || 
              (hC === "paper" && cC === "rock") || 
              (hC === "scissors" && cC === "paper")) {
        humanScore++;
        console.log(`You win! ${hC} beats ${cC}.`);

   } else if ((cC === "rock" && hC === "scissors") || 
              (cC === "paper" && hC === "rock") || 
              (cC === "scissors" && hC === "paper")) {
        computerScore++;
        console.log(`You lose! ${cC} beats ${hC}.`);   
    } else {
        console.log("Try again. You have inputted in an invalid choice.");
   }
}

const computerSelection = getComputerChoice();
const humanSelection = getHumanChoice();

console.log(humanSelection, computerSelection);

playRound(humanSelection, computerSelection);