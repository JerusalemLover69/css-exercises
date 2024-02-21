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

function looksLike(string) {
    for (char in string) {
        if (char === 'p') {
            return "Paper";
        }
        if (char === 's') {
            return "Scissors";
        }
    }
    return "Rock";
}

function playRound(e) {
    let c = getComputerChoice();
    let p = String(e.target.className);
    p = looksLike(p);
    console.log(`Player = ${p}: Computer = ${c}`);
    let result = document.querySelector('.Result');
    if (p === "Rock") {
        if (c === "Rock") {
            result.textContent = "Tie";
            return;
        }
        if (c === "Paper") {
            result.textContent = "Computer won";
            return;
        }
        result.textContent = "Player won";
        return;
    }
    if (p === "Paper") {
        if (c === "Rock") {
            result.textContent = "Player won";
            return;
        }
        if (c === "Paper") {
            result.textContent = "Tie";
            return;
        }
        result.textContent = "Computer won";
        return;
    }
    if (c === "Rock") {
        result.textContent = "Computer won";
        return;
    }
    if (c === "Paper") {
        result.textContent = "Player won";
        return;
    }
    result.textContent = "Tie";
    return;
}

let Rock = document.querySelector(".Rock");
if (Rock === null || Rock == undefined) {
    console.log("This language sucks ass");
}
Rock.addEventListener('click', playRound);

let Paper = document.querySelector(".Paper");
if (Paper === null || Paper == undefined) {
    console.log("This language sucks ass");
}
Paper.addEventListener('click', playRound);

let Scissors = document.querySelector(".Scissors");
if (Scissors === null || Scissors == undefined) {
    console.log("This language sucks ass");
}
Scissors.addEventListener('click', playRound);

