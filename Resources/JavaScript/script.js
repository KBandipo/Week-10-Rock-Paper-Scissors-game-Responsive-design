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

/**********************************************************************/
