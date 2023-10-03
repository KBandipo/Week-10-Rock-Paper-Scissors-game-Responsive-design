/***********************************************************************/
//Game section
export let compMessage = document.querySelector(".compMessage");
// compMessage.classList.add("hide");

/***********************************************************************/
export function getComputerChoice() {
  //Create an array of 'gameChopices'
  let gameChoices = ["rock", "paper", "scissors"];
  let choice = Math.floor(Math.random() * gameChoices.length);
  if (gameChoices[choice] === "rock") {
    compMessage.textContent = "Computer picks Rock";
    compMessage.classList.remove("hide");
  } else if (gameChoices[choice] === "paper") {
    compMessage.textContent = "Computer picks Paper";
    compMessage.classList.remove("hide");
  } else {
    compMessage.textContent = "Computer picks Scissors";
    compMessage.classList.remove("hide");
  }
  return gameChoices[choice];
}
