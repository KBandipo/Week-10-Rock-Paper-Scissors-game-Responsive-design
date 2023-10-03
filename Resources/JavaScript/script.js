// "use strict";
/***********************************************************************/
/*********Imported Modules*********/
import { getComputerChoice, compMessage } from "./getComputerChoice.js";
import {
  result,
  winnerMessage,
  roundmessage,
  compScoreMessage,
  playerScoreMessage,
  gameContainer,
  playerSection,
  computerSection,
  display,
  play,
  restart,
  rule,
  gameRuleSection,
} from "./variablesContainer.js";
import { displayOverallWinnerInfo } from "./displayOverallWinnerInfo.js";

/***********************************************************************/

compMessage.classList.add("hide");

/***********************************************************************/
play.addEventListener("click", () => {
  gameRuleSection.classList.add("hide");
  play.classList.add("hide");
  restart.classList.remove("hide");
  rule.classList.remove("hide");
  gameContainer.classList.add("two-grid-columns");
  playerSection.classList.remove("hide");
  computerSection.classList.remove("hide");
  display.classList.remove("hide");
});

/***********************************************************************/

let toggle = 0;
rule.addEventListener("click", () => {
  if (toggle >= 1) {
    toggle = 0;
  } else {
    toggle = 1;
  }
  if (toggle === 1) {
    gameRuleSection.classList.remove("hide");
    restart.classList.add("hide");
    gameContainer.classList.remove("two-grid-columns");
    playerSection.classList.add("hide");
    computerSection.classList.add("hide");
    display.classList.add("hide");
    result.classList.add("hide");
  } else {
    gameRuleSection.classList.add("hide");
    restart.classList.remove("hide");
    gameContainer.classList.add("two-grid-columns");
    playerSection.classList.remove("hide");
    computerSection.classList.remove("hide");
    display.classList.remove("hide");
    compMessage.classList.add("hide");
    requestChoice.textContent = "Make a choice";

    // result.classList.remove("hide");
  }
});

/***********************************************************************/

let round = 2;
let computerScore = 0;
let userScore = 0;

/***********************************************************************/

displayRounds(1);
restart.addEventListener("click", () => {
  result.classList.add("hide");
  displayRounds(1);
  computerScore = 0;
  userScore = 0;

  round = 2;
  playerScoreMessage.textContent = `PLAYER SCORE: ${userScore}`;
  compScoreMessage.textContent = `COMPUTER SCORE: ${computerScore}`;
  winnerMessage.classList.add("hide");
  compMessage.classList.add("hide");
  requestChoice.textContent = "Make a choice";
});

/***********************************************************************/

function displayRounds(round) {
  let roundText = `${round}`;
  if (round >= 6) {
    roundText = "";
  }
  roundmessage.textContent = roundText;
  return round;
}

const requestChoice = document.querySelector(".request-choice");

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
    const formattedUserChoice =
      userChoice.charAt(0).toUpperCase() + userChoice.slice(1);
    requestChoice.textContent = `You pick ${formattedUserChoice}`;
    result.classList.remove("hide");
    let computerChoice = getComputerChoice();
    let formattedComputerChoice =
      computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1);
    const computerWins =
      (computerChoice === "rock" && userChoice === "scissors") ||
      (computerChoice === "paper" && userChoice === "rock") ||
      (computerChoice === "scissors" && userChoice === "paper");
    const userWins =
      (userChoice === "rock" && computerChoice === "scissors") ||
      (userChoice === "paper" && computerChoice === "rock") ||
      (userChoice === "scissors" && computerChoice === "paper");
    if (computerChoice === userChoice) {
      result.textContent = "It's a tie! No scores.";
    } else if (computerWins) {
      computerScore += 1;
      compScoreMessage.textContent = `COMPUTER SCORE: ${computerScore}`;
      result.textContent = `You Lose! ${formattedComputerChoice} beats ${formattedUserChoice}`;
    } else if (userWins) {
      userScore += 1;
      playerScoreMessage.textContent = `PLAYER SCORE: ${userScore}`;
      result.textContent = `You Win! ${formattedUserChoice} beats ${formattedComputerChoice}`;
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
