"use strict";

// DOM and DOM Manipulation
// DOM: Document Object Model

// *** DOM !== JAVASCRIPT ***

// Selecting and Manipulating elements
/*
console.log(document.querySelector(".message").textContent);

document.querySelector(".message").textContent = "Correct Number!";
console.log(document.querySelector(".message").textContent);

document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 10;

document.querySelector(".guess").value = 23;
console.log(document.querySelector(".guess").value);
*/

// Handling click events ------------------------------------------------

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = Number(document.querySelector(".score").textContent);
// let score = 20;
let highscore = 0;

const displayMessage = function (message) {
    document.querySelector(".message").textContent = message;
};

const scoreChange = function (score) {
    document.querySelector(".score").textContent = score;
};

const changeBackground = function (color) {
    document.querySelector("body").style.backgroundColor = color;
};

const updateHighscore = function (score) {
    document.querySelector(".highscore").textContent = score;
    highscore = score;
};

const numReveal = function (secretNumber) {
    document.querySelector(".number").textContent = secretNumber;
};

const numRevealSize = function (size) {
    document.querySelector(".number").style.width = size;
};

const guessReset = function () {
    document.querySelector(".guess").value = "";
};

const gameReset = function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    displayMessage("Start guessing...");
    scoreChange(score);
    guessReset();
    numReveal("?");
    changeBackground("#222");
    numRevealSize("15rem");
};

document.querySelector(".check").addEventListener("click", function () {
    const guess = Number(document.querySelector(".guess").value);

    // if guess is empty
    if (!guess) {
        displayMessage("⛔ No number!");
        // if guess is correct
    } else if (guess === secretNumber) {
        // display secretNumber and win screen
        numReveal(secretNumber);
        displayMessage("✅ Correct!");
        changeBackground("#60b347");
        numRevealSize("30rem");

        // update highscore
        if (score > highscore) {
            updateHighscore(score);
        }

        // if guess is not correct
    } else if (guess !== secretNumber) {
        // if you still have guesses
        if (score > 1) {
            displayMessage(guess > secretNumber ? "📉 Lower!" : "📈 Higher!");
            score--;
            scoreChange(score);

            // if you run out of guesses
        } else {
            displayMessage("💀 Game over!");
            scoreChange(0);

            // game over screen
            changeBackground("#ba251a");
        }
    }
});

// reset the game on pressing the "again" button
document.querySelector(".again").addEventListener("click", function () {
    gameReset();
});

/*
document.querySelector(".check").addEventListener("click", function () {
    const guess = Number(document.querySelector(".guess").value);
    // console.log(guess, typeof guess);

    if (!guess) {
        // document.querySelector(".message").textContent = "⛔ No number!";
        displayMessage("⛔ No number!");
    } else if (guess === secretNumber) {
        // document.querySelector(".number").textContent = secretNumber;
        numReveal(secretNumber);
        // document.querySelector(".message").textContent = "✅ Correct!";
        displayMessage("✅ Correct!");

        // document.querySelector("body").style.backgroundColor = "#60b347";
        changeBackground("#60b347");
        // document.querySelector(".number").style.width = "30rem";
        numRevealSize("30rem");

        if (score > highscore) {
            // document.querySelector(".highscore").textContent = score;
            updateHighscore(score);
        }

        // if guess is not correct
    } else if (guess !== secretNumber) {
        if (score > 1) {
            // document.querySelector(".message").textContent = guess > secretNumber ? "📉 Lower!" : "📈 Higher!";
            displayMessage(guess > secretNumber ? "📉 Lower!" : "📈 Higher!");
            score--;
            // document.querySelector(".score").textContent = score;
            scoreChange(score);
        } else {
            // document.querySelector(".message").textContent = "💀 Game over!";
            displayMessage("💀 Game over!");
            // document.querySelector(".score").textContent = 0;
            scoreChange(0);
        }
    }
    else if (guess < secretNumber) {
        if (score > 1) {
            document.querySelector(".message").textContent = "📈 Higher!";
            score--;
            document.querySelector(".score").textContent = score;
        } else {
            document.querySelector(".message").textContent = "💀 Game over!";
            document.querySelector(".score").textContent = 0;
        }
    } else if (guess > secretNumber) {
        if (score > 1) {
            document.querySelector(".message").textContent = "📉 Lower!";
            score--;
            document.querySelector(".score").textContent = score;
        } else {
            document.querySelector(".message").textContent = "💀 Game over!";
            document.querySelector(".score").textContent = 0;
        }
    }
    
});

document.querySelector(".again").addEventListener("click", function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    // document.querySelector(".message").textContent = "Start guessing...";
    displayMessage("Start guessing...");
    // document.querySelector(".score").textContent = score;
    scoreChange(score);
    // document.querySelector(".guess").value = "";
    guessReset();
    // document.querySelector(".number").textContent = "?";
    numReveal("?");

    // document.querySelector("body").style.backgroundColor = "#222";
    changeBackground("#222");
    // document.querySelector(".number").style.width = "15rem";
    numRevealSize("15rem");
});

*/

// when checking if the guess is greater or less than, both blocks are
// identical except for the higher/lower message
//
// only checking if the guess is not equal to the secret number
// so just check if guess !== secretNumber
// then use an if within the string message

// REFORMATTED COMPLETE

/*
document.querySelector(".check").addEventListener("click", function () {
    const guess = Number(document.querySelector(".guess").value);

    // if guess is empty
    if (!guess) {
        displayMessage("⛔ No number!");
        // if guess is correct
    } else if (guess === secretNumber) {
        // display secretNumber and win screen
        numReveal(secretNumber);
        displayMessage("✅ Correct!");
        changeBackground("#60b347");
        numRevealSize("30rem");

        // update highscore
        if (score > highscore) {
            updateHighscore(score);
        }

        // if guess is not correct
    } else if (guess !== secretNumber) {
        // if you still have guesses
        if (score > 1) {
            displayMessage(guess > secretNumber ? "📉 Lower!" : "📈 Higher!");
            score--;
            scoreChange(score);

            // if you run out of guesses
        } else {
            displayMessage("💀 Game over!");
            scoreChange(0);
        }
    }
});

// reset the game
document.querySelector(".again").addEventListener("click", function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    displayMessage("Start guessing...");
    scoreChange(score);
    guessReset();
    numReveal("?");
    changeBackground("#222");
    numRevealSize("15rem");
});
*/
