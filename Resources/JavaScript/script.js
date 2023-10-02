"use strict";
let compMessage = document.querySelector(".compMessage");
compMessage.classList.add("hide");

/**********************************************************************/
function getComputerChoice() {
  //Create an array of 'gameChopices'
  let gameChoices = ["rock", "paper", "scissors"];

  let choice = Math.floor(Math.random() * gameChoices.length);
  if (gameChoices[choice] === "rock") {
    compMessage.textContent = "Computer selects Rock";
    compMessage.classList.remove("hide");
  } else if (gameChoices[choice] === "paper") {
    compMessage.textContent = "Computer selects Paper";
    compMessage.classList.remove("hide");
  } else {
    compMessage.textContent = "Computer selects Scissors";
    compMessage.classList.remove("hide");
  }
  return gameChoices[choice];
}

/**********************************************************************/

let result = document.querySelector(".result");
let winnerMessage = document.querySelector(".winner-message");
let roundmessage = document.querySelector(".round-count");
let compScoreMessage = document.querySelector(".comp-score");
let playerScoreMessage = document.querySelector(".player-score");

let gameContainer = document.querySelector("#game-container");
let playerSection = document.querySelector(".player-section");
let computerSection = document.querySelector(".computer-section");
let display = document.querySelector(".display");

let play = document.querySelector("#play");
let restart = document.querySelector("#restart");
let rule = document.querySelector("#rule");

let gameRuleSection = document.querySelector(".game-rule-section");

/************************************************/

let round = 2;
let computerScore = 0;
let userScore = 0;

/************************************************/
displayRounds(1);
restart.addEventListener("click", () => {
  displayRounds(1);
  computerScore = 0;
  userScore = 0;

  round = 2;
  playerScoreMessage.textContent = `PLAYER SCORE: ${userScore}`;
  compScoreMessage.textContent = `COMPUTER SCORE: ${computerScore}`;
  winnerMessage.classList.add("hide");
});

/**********************************************************************/
let btns = document.querySelectorAll(".btns");
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", () => {
    // if (round >= 5) {
    //   round = 0;
    //   computerScore = 0;
    //   userScore = 0;
    // } else {
    //   winnerMessage.classList.add("hide");

    //   round += 1; // same as round++
    // }

    displayRounds(round);

    const userChoice = btns[i].getAttribute("id");
    requestChoice.textContent = `You pick ${userChoice}`;

    let computerChoice = getComputerChoice();
    const computerWins =
      (computerChoice === "rock" && userChoice === "scissors") ||
      (computerChoice === "paper" && userChoice === "rock") ||
      (computerChoice === "scissors" && userChoice === "paper");
    const userWins =
      (userChoice === "rock" && computerChoice === "scissors") ||
      (userChoice === "paper" && computerChoice === "rock") ||
      (userChoice === "scissors" && computerChoice === "paper");
    if (computerChoice === userChoice) {
      result.textContent = "It's a tie for this round! No scores.";
    } else if (computerWins) {
      computerScore += 1;
      compScoreMessage.textContent = `COMPUTER SCORE: ${computerScore}`;
      result.textContent = `You Lose! ${computerChoice} beats ${userChoice}`;
    } else if (userWins) {
      userScore += 1;
      playerScoreMessage.textContent = `PLAYER SCORE: ${userScore}`;
      result.textContent = `You Win! ${userChoice} beats ${computerChoice}`;
    }
    displayOverallWinnerInfo(displayRounds(round), userScore, computerScore);
    if (round === 1) {
      computerScore = 0;
      userScore = 0;
      playerScoreMessage.textContent = `PLAYER SCORE: ${userScore}`;
      compScoreMessage.textContent = `COMPUTER SCORE: ${computerScore}`;
    }
    const roundGreaterOrEqualSix = round >= 6;
    if (roundGreaterOrEqualSix) {
      round = 1;
    } else {
      round += 1; // same as round++
    }
    if (!roundGreaterOrEqualSix) {
      winnerMessage.classList.add("hide");
    }
  });
}
