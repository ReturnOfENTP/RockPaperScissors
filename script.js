let userWin = 0
let userTie = 0
let userRock = 0
let userPaper = 0
let userScissors = 0
let userLoss = 0

function CheckResults(userChoice, computerChoice) {
    
    if (userChoice ==="R" && computerChoice ==="S") {
        console.log("WINNER");
        userWin++
        userRock++
    } else if (userChoice ==="P" && computerChoice ==="R") {
        console.log("WINNER");
        userWin++
        userPaper++
    } else if (userChoice ==="S" && computerChoice ==="P") {
        console.log("WINNER");
        userWin++
        userScissors++
    } else if (userChoice ==="R" && computerChoice ==="P") {
        console.log("YOU LOOSE, DO BETTER!");
        userLoss++
        userRock++
    } else if (userChoice ==="P" && computerChoice ==="S") {
        console.log("YOU LOOSE, DO BETTER!");
        userLoss++
        userPaper++
    } else if (userChoice ==="S" && computerChoice ==="R") {
        console.log("YOU LOOSE, DO BETTER!");
        userLoss++
        userScissors++
    } else {
        console.log("TRY AGAIN, THE NEXT ONES FOR BLOOD");
        userTie++
    }
}

function userEntry(params) {
    const userPick = prompt("Type R, P, S");
    return userPick
}

function computerEntry() {
    const options = ["R", "P", "S"];
    const randomIndex = Math.floor(Math.random() * 2);
    const randomSelection = options[randomIndex];
    return randomSelection;
} 

function runGame() {
    const userPick = userEntry();
    const computerPick = computerEntry();
    CheckResults(computerPick, userPick);
}

runGame();

