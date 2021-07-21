<script lang="ts">
  import RulesModal from "./RulesModal.svelte";
  import ScoreBoard from "./ScoreBoard.svelte";
  import Pick from "./Pick.svelte";
  import Play from "./Play.svelte";
  import { writable } from "svelte/store";

  // Score State Store
  let score: number;
  const scoreStore = writable(0);
  scoreStore.subscribe((value) => (score = value));

  // PlayerPick State Store
  let currentPick: PickChoices | undefined;
  const playerPickStore = writable<PickChoices | undefined>(undefined);
  playerPickStore.subscribe((value) => (currentPick = value));
  const pickOne = (e: PickChoices) => playerPickStore.update(() => e);
</script>

<main class="py-10">
  <svelte:component this={ScoreBoard} {score} />
  {#if !currentPick}
    <Pick {pickOne} />
  {/if}
  {#if currentPick}
    <Play {currentPick} {scoreStore} {playerPickStore} />
  {/if}
  <RulesModal />
</main>
