function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getComputerChoice() {
    let int = getRandomInt(3);
    if (int === 0) {
        return "Rock";
    } else if (int === 1) {
        return "Paper";
    }
    return "Scissors";
}


function playRound(p, c) {
    if (p !== "Rock" && p !== "Paper" && p !== "Scissors") {
        return "Invalid";
    }
    if (c !== "Rock" && c !== "Paper" && c !== "Scissors") {
        return "Invalid";
    }
    if (p === "Rock") {
        if (c === "Rock") {
            return "Tie";
        }
        if (c === "Paper") {
            return "Computer won";
        }
        return "Player won";
    }
    if (p === "Paper") {
        if (c === "Rock") {
            return "Player won";
        }
        if (c === "Paper") {
            return "Tie";
        }
        return "Computer won";
    }
    if (c === "Rock") {
        return "Computer won";
    }
    if (c === "Paper") {
        return "Player won";
    }
    return "Tie";
}


for (let i = 0; i < 5; i++) {
    const p = prompt("Rock or Paper or Scissors", "Invalid");
    const c = getComputerChoice();
    let result = playRound(p, c);
    if (result === "Invalid") {
        console.log("Invalid input");
    } else {
    console.log(result);
    }
}