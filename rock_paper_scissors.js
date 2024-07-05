// Rock Paper Scissors - Game will be played entirely in the console

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

function playGame() {
    /*
    INIT playerScore, computerScore to 0
    INIT playerChoice, computerChoice to NULL

    FOR each round (5 rounds)
        SET playerChoice by CALLING getHumanChoice
        SET computerChoice by CALLING getComputerChoice
        CALL playRound with playChoice and computerChoice RETURNING winnerString

        IF winnerString is player THEN
            INCREMENT playScore
        ELSE IF winnerString is computer THEN
            INCREMENT computerScore
        ELSE
            DISPLAY invalid winner message
        ENDIF
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
       } else if ((hC === "rock" && cC === "scissors") || 
                  (hC === "paper" && cC === "rock") || 
                  (hC === "scissors" && cC === "paper")) {
            humanScore++;
            console.log(`You win! ${hC} beats ${cC}.`);
            return humanWinStr;
       } else if ((cC === "rock" && hC === "scissors") || 
                  (cC === "paper" && hC === "rock") || 
                  (cC === "scissors" && hC === "paper")) {
            computerScore++;
            console.log(`You lose! ${cC} beats ${hC}.`);  
            return computerWinStr;
        } else {
            console.log("Try again. You have inputted in an invalid choice.");
       }
    }

    // Game Scores
    let humanScore = 0;
    let computerScore = 0;

    // Player Selections
    let humanSelection = null;
    let computerSelection = null;

    let numOfRounds = 5;

    let winnerStr = null;
    let humanWinStr = "HW";
    let computerWinStr = "CW";
    let tieStr = "T";

    for (let i = 0; i < numOfRounds; i++) {
        humanSelection = getHumanChoice();
        computerSelection = getComputerChoice();

        winnerStr = playRound(humanSelection, computerSelection);

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
    
    if (humanScore === computerScore) {
        console.log("Tie game between 5 rounds!")
    } else if (humanScore > computerScore) {
        console.log("You win between the 5 rounds!")
    } else {
        console.log("You lose, the computer wins between the 5 rounds!")
    }
}

playGame();