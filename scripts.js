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