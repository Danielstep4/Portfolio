<script lang="ts">
  // Imports
  import Badge from "./Badges/Badge.svelte";
  import type { Writable } from "svelte/store";
  import { choicesArr, checkWhoWon } from "../Utils/Play";
  // Props
  export let currentPick: PickChoices;
  export let scoreStore: Writable<number>;
  export let playerPickStore: Writable<PickChoices>;
  // Bot Choice
  const botChoice: PickChoices =
    choicesArr[Math.floor(Math.random() * 100) % 3];
  // Verdict and score state update
  const Verdict = (num: number) => {
    scoreStore.update((n) => n + num);
    return num == 1 ? "Player Won!" : num == -1 ? "Player Lost!" : "Draw!";
  };
</script>

<div
  class="font-bold text-white sm:w-1/3 w-screen  sm:h-min  mx-auto my-10  px-2"
>
  <div class=" flex flex-wrap justify-between ">
    <div class="flex flex-col justify-start items-center">
      <span>YOU PICKED</span>
      <Badge name={currentPick} />
    </div>
    <div class="flex flex-col justify-start items-center">
      <span>THE HOUSE PICKED</span>
      <Badge name={botChoice} />
    </div>
  </div>
  <div
    class="flex flex-col text-2xl mx-auto text-center justify-center items-center"
  >
    <span>{Verdict(checkWhoWon(currentPick, botChoice))}</span>
    <button
      class="bg-white rounded text-red-700 px-8 py-2 font-bold text-sm mt-8"
      on:click={() => playerPickStore.update(() => undefined)}
      >PLAY AGAIN</button
    >
  </div>
</div>
