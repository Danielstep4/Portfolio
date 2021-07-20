<script lang="ts">
  import Badge from "./Badges/Badge.svelte";
  import type { Writable } from "svelte/store";
  // Props
  export let currentPick: PickChoices;
  export let scoreStore: Writable<number>;
  export let playerPickStore: Writable<PickChoices>;
  // Hash to check who won
  const winHash: { [key: string]: PickChoices } = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper",
  };
  // Bot Choice
  let choicesArr: PickChoices[] = Object.values(winHash);
  const botChoice: PickChoices =
    choicesArr[Math.floor(Math.random() * 100) % 3];
  // Check Who Won
  const checkWhoWon = (
    playerChoice: PickChoices,
    botChoice: PickChoices
  ): number => {
    if (playerChoice == botChoice) return 0;
    if (winHash[playerChoice] == botChoice) return 1;
    else return -1;
  };
  const Verdict = (num: number) => {
    scoreStore.update((n) => n + num);
    return num == 1 ? "Player Won!" : num == -1 ? "Player Lost!" : "Draw!";
  };
</script>

<div
  class="text-white flex flex-row justify-between w-1/3 mx-auto my-10 font-bold"
>
  <div class="flex flex-col justify-between items-center">
    <span>YOU PICKED</span>
    <Badge name={currentPick} />
  </div>
  <div class="my-16 flex flex-col items-center text-2xl">
    <span>{Verdict(checkWhoWon(currentPick, botChoice))}</span>
    <button
      class="bg-white rounded text-red-700 px-8 py-2 font-bold text-sm mt-8"
      on:click={() => playerPickStore.update(() => undefined)}
      >PLAY AGAIN</button
    >
  </div>
  <div class="flex flex-col justify-between items-center">
    <span>THE HOUSE PICKED</span>
    <Badge name={botChoice} />
  </div>
</div>
