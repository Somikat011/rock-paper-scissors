//Rock Paper Scissors javascript file

function computerSelection() {
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


function playerSelection() {
    //Receives and translates input into a desired output

    let selection = prompt("Please input your choice of 'Rock', 'Paper' or 'Scissors'", "");
    selection = selection.toLowerCase();

    if (selection == "rock") {
        return "Rock";
    } else if (selection == "paper") {
        return "Paper";
    } else if (selection == "scissors") {
        return "Scissors";
    } else {
        alert("Sorry, that was an invalid choice. Please check your spelling and try again!");
        selection = playerSelection();
        return selection;
    }
}

function playRound(playerSelection, computerSelection) {
    //Plays a single round of Rock, Paper, Scissors

    console.log(playerSelection);
    console.log(computerSelection);
    if (playerSelection == computerSelection) {
        console.log("It's a draw!");
        return "It's a draw!";
    } else if ((playerSelection == "Rock" && computerSelection == "Scissors") || (playerSelection == "Paper" 
    && computerSelection == "Rock") || (playerSelection == "Scissors" && computerSelection == "Paper")) {
        console.log(`You Win! ${playerSelection} beats ${computerSelection}!`);
        return `You Win! ${playerSelection} beats ${computerSelection}!`;
    } else {
        console.log(`You Lose! ${computerSelection} beats ${playerSelection}!`);
        return `You Lose! ${computerSelection} beats ${playerSelection}!`;
    }
}

function game() {
    //Play a five round game

    let playerWins = 0;
    let computerWins = 0;
    let draws = 0;
    
    for (let i = 0; i < 5; i++) {
        let result = playRound(playerSelection(), computerSelection());
        
        if (result[4] == "W") {
            playerWins++;
        } else if (result[4] == "L") {
            computerWins++;
        } else {
            draws++;
        }
        console.log(playerWins, computerWins, draws);
    }

    displayResults(playerWins, computerWins, draws);
}

function displayResults(wins, losses, draws) {
    //Displays results

    if (wins > losses) {
        alert(`Feeling lucky punk? You must be because you are the overall winner, winning ${wins} out of 5. There were ${draws} draws.`);
    } else if (losses > wins) {
        alert(`You suck at this lol. The computer is the overall winner. You won ${wins} out of 5. There were ${draws} draws.`);
    } else {
        alert(`It's a draw. Lame. There were a total of ${draws} draws`);
    }
}

game();
