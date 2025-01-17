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

displayScore();

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
    INIT playerChoice to buttonChosen
    INIT computerChoice by CALLING getComputerChoice
    CALL playRound with playChoice and computerChoice RETURNING winnerString
    INCREMENT winner score by CALLING incrementScore with the winnerStr argument
    DISPLAY scores on page by CALLING displayScore
    DISPLAY winner by CALLING announceWinner
    RESET winner text if needed by CALLING resetWinnerText
    RESET score variables if needed by CALLING resetScores
    */

    function playRound(humanChoice, computerChoice) {
        /*
        SET humanChoice and computerChoice variables to lower case
        SET roundResult to reference div that will contain our result string
        IF humanChoice is equal to computerChoice THEN
            DISPLAY tie message within div
            RETURN tie string
        ELSE IF (humanChoice is rock AND computerChoice is scissors) OR 
                (humanChoice is paper AND computerChoice is rock) OR 
                (humanChoice is scissors AND computerChoice is paper) THEN
            DISPLAY human winner message within div 
            RETURN human winner string
        ELSE IF (computerChoice is rock AND humanChoice is scissors) OR 
                (computerChoice is paper AND humanChoice is rock) OR 
                (computerChoice is scissors AND humanChoice is paper) THEN
            DISPLAY computer winner message within div
            RETURN computer winner string
        ELSE 
            DISPLAY invalid round message within div
        ENDIF
        */
       let hC = humanChoice.toLowerCase();
       let cC = computerChoice.toLowerCase();

       let roundResult = document.querySelector("#roundResult");
       roundResult.textContent = "Result: ";
    
       if (hC === cC) {
            roundResult.textContent += "Tie Game!";
            return tieStr;
       } else if ((hC === ROCK && cC === SCISSORS) || 
                  (hC === PAPER && cC === ROCK) || 
                  (hC === SCISSORS && cC === PAPER)) {
            roundResult.textContent += `You win! ${hC} beats ${cC}.`;
            return humanWinStr;
       } else if ((cC === ROCK && hC === SCISSORS) || 
                  (cC === PAPER && hC === ROCK) || 
                  (cC === SCISSORS && hC === PAPER)) {
            roundResult.textContent += `You lose! ${cC} beats ${hC}.`; 
            return computerWinStr;
        } else {
            roundResult.textContent += "Try again. You have inputted in an invalid choice.";
       }
    }

    let buttonChosen = event.target.id;
    let humanSelection = buttonChosen;
    let computerSelection = getComputerChoice();
    let winAmount = 5; // Num of points needed for either player to win

    let winnerStr = playRound(humanSelection, computerSelection);
    incrementScore(winnerStr);
    displayScore();
    let hasWon = announceWinner(winAmount);
    resetWinnerText(hasWon);
    resetScores(hasWon);
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

function displayScore() {
    /*
    INIT score to reference a div that will contain our score string
    SET score text to the display both the human and computer score
    */
    let scores = document.querySelector("#scores");
    scores.textContent = `Human Score: ${humanScore} | Computer Score: ${computerScore}`;
}

function announceWinner(winAmount) {
    /*
    IF humanScore is greater than or equal to winAmount THEN
        DISPLAY human winner message within div
    ELSE IF computerScore is greater than or equal to winAmount THEN
        DISPLAY computer winner message within div
    END IF
    */

    let winnerResult = document.querySelector("#winnerResult");

    if (humanScore >= winAmount) {
        winnerResult.textContent = "Congrats! You've won!"
        return true;
    } else if (computerScore >= winAmount) {
        winnerResult.textContent = "Sorry. The computer has won."
        return true;
    }

    return false;
}

function resetWinnerText(hasWon) {
    /*
    IF neither player has won THEN
        clear winner result text on page
    END IF
    */

    if (!hasWon) {
        let winnerResultStr = document.querySelector("#winnerResult");
        winnerResultStr.textContent = "";
    }
}

function resetScores(hasWon) {
    /*
    IF either player has won THEN
        reset scores
    END IF
    */
    if (hasWon) {
        humanScore = 0;
        computerScore = 0;
    }
}