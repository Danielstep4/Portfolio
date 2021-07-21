// Hash to check who won
const winHash: { [key: string]: PickChoices } = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper",
  };
// Choices Array
export let choicesArr: PickChoices[] = Object.values(winHash);
// Check Who Won
export const checkWhoWon = (
    playerChoice: PickChoices,
    botChoice: PickChoices
  ): number => {
    if (playerChoice == botChoice) return 0;
    if (winHash[playerChoice] == botChoice) return 1;
    else return -1;
};