//Rock Paper Scissors javascript file

function computerPlay() {
    //Assign and return random numbers a string value of Rock, Paper or Scissors
    
    let num = randomNumGenerator();

    if (num == 1) {
        return "Rock";
    } else if (num == 2) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function randomNumGenerator() {
    //Generate a random number between 1 and 3

    let num = Math.floor((Math.random()*3) + 1);
    return num;
}


function playerSelection(selection) {
    //Translates input into a desired output

    selection = selection.toLowerCase();

    if (selection == "rock") {
        return "Rock";
    } else if (selection == "paper") {
        return "Paper";
    } else if (selection == "scissors") {
        return "Scissors";
    } else {
        return "Sorry, that was an invalid choice. Please check your spelling and try again!"
    }
}

function playRound(playerSelection, computerSelection) {
    //Plays a single round of Rock, Paper, Scissors

    if (playerSelection == computerSelection) {
        return "It's a draw!";
    } else if ((playerSelection == "Rock" && computerSelection == "Scissors") || (playerSelection == "Paper" 
    && computerSelection == "Rock") || (playerSelection == "Scissors" && computerSelection == "Paper")) {
        return `You Win! ${playerSelection} beats ${computerSelection}!`;
    } else {
        return `You Lose! ${computerSelection} beats ${playerSelection}!`;
    }
}

function game() {
    //Play a five round game

    let playerWins = 0;
    let computerWins = 0;
    let draws = 0;
    
    for (let i = 0; i < 5; i++) {
        const result = playRound();
        
        if (result[4] == "W") {
            playerWins++;
        } else if (result[4] == "L") {
            computerWins++;
        } else {
            draws++;
        }
    }

    if (playerWins > computerWins) {
        alert(`You are the overall winner, winning ${playerWins} out of 5. There were ${draws} draws.`);
    } else if (computerWins > playerWins) {
        alert(`You are the overall winner, winning ${playerWins} out of 5. There were ${draws} draws.`);
    } else {
        alert(`It's a draw. There were a total of ${draws} draws`);
    }
}