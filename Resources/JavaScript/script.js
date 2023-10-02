"use strict";
let compMessage = document.querySelector(".compMessage");
compMessage.classList.add("hide");

/************************************************/
function getComputerChoice() {
  //-Create an array of 'gameChopices'
  let gameChoices = ["rock", "paper", "scissors"];

  let choice = Math.floor(Math.random() * gameChoices.length);
  // console.log("Computer picked", gameChoices[choice]);
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
