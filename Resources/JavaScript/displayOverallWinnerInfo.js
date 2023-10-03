import { winnerMessage, play } from "./variablesContainer.js";
/***********************************************************************/
export function displayOverallWinnerInfo(round, userScore, computerScore) {
  if (round === 6) {
    winnerMessage.classList.remove("hide");

    if (userScore > computerScore) {
      winnerMessage.textContent = `You Win! 🏆`;
    }
    if (computerScore > userScore) {
      winnerMessage.textContent = `You Lose!`;
    }
    if (computerScore === userScore) {
      winnerMessage.textContent = `It's a Draw!`;
    }

    play.classList.remove("hide");
  }
}
