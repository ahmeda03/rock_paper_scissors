// Rock Paper Scissors - Game will be played entirely in the console

const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";

const humanWinStr = "HW";
const computerWinStr = "CW";
const tieStr = "T";

// Game Scores
let humanScore = 0;
let computerScore = 0;

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

rock.addEventListener("click", playGame);
paper.addEventListener("click", playGame);
scissors.addEventListener("click", playGame);

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
        return ROCK;
    } else if (computerChoice === 2) {
        return PAPER;
    } else if (computerChoice === 3) {
        return SCISSORS;
    } else {
        return "Invalid number generated";
    }
}

function generateChoice() {
    let choice = Math.floor(Math.random() * 3) + 1;
    return choice;
}

function playGame(event) {
    /*
    INIT playerScore, computerScore to 0
    INIT playerChoice, computerChoice to NULL

    FOR each round (5 rounds)
        SET playerChoice by CALLING getHumanChoice
        SET computerChoice by CALLING getComputerChoice
        CALL playRound with playChoice and computerChoice RETURNING winnerString
    ENDFOR

    IF (playerScore == computerScore) THEN
        DISPLAY tie message
    ELSE IF (playerScore > computerScore) THEN
        DISPLAY player 1 win message
    ELSE 
        DISPLAY computer win message
    ENDIF
    */

    function playRound(humanChoice, computerChoice) {
        /*
        SET humanChoice and computerChoice variables to lower case
        IF humanChoice is equal to computerChoice THEN
            DISPLAY tie message
            RETURN tie string
        ELSE IF (humanChoice is rock AND computerChoice is scissors) OR 
                (humanChoice is paper AND computerChoice is rock) OR 
                (humanChoice is scissors AND computerChoice is paper) THEN
            INCREMENT human choice score
            DISPLAY human winner message
            RETURN human winner string
        ELSE IF (computerChoice is rock AND humanChoice is scissors) OR 
                (computerChoice is paper AND humanChoice is rock) OR 
                (computerChoice is scissors AND humanChoice is paper) THEN
            INCREMENT computer choice score
            DISPLAY computer winner message
            RETURN computer winner string
        ELSE 
            DISPLAY invalid round message
        ENDIF
        */
       let hC = humanChoice.toLowerCase();
       let cC = computerChoice.toLowerCase();
    
       if (hC === cC) {
            console.log("Tie Game!");
            return tieStr;
       } else if ((hC === ROCK && cC === SCISSORS) || 
                  (hC === PAPER && cC === ROCK) || 
                  (hC === SCISSORS && cC === PAPER)) {
            console.log(`You win! ${hC} beats ${cC}.`);
            return humanWinStr;
       } else if ((cC === ROCK && hC === SCISSORS) || 
                  (cC === PAPER && hC === ROCK) || 
                  (cC === SCISSORS && hC === PAPER)) {
            console.log(`You lose! ${cC} beats ${hC}.`);  
            return computerWinStr;
        } else {
            console.log("Try again. You have inputted in an invalid choice.");
       }
    }

    let buttonChosen = event.target.id;
    let humanSelection = buttonChosen;
    let computerSelection = getComputerChoice();

    let winnerStr = playRound(humanSelection, computerSelection);
    incrementScore(winnerStr);

    console.log(humanScore, computerScore);
}

function incrementScore(winnerStr) {
    /*
    IF winnerString is player THEN
        INCREMENT playScore
    ELSE IF winnerString is computer THEN
        INCREMENT computerScore
    ELSE
        DISPLAY invalid winner message
    ENDIF
    */

    if (winnerStr === humanWinStr) {
        humanScore += 1;
    } else if (winnerStr === computerWinStr) {
        computerScore += 1;
    } else if (winnerStr === tieStr) {
        // Do nothing
    } else {
        console.log("Invalid winner")
    }
}