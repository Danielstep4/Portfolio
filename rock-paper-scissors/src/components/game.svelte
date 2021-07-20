<script lang="ts">
  import RulesModal from "./RulesModal.svelte";
  import ScoreBoard from "./ScoreBoard.svelte";
  import Pick from "./Pick.svelte";
  let score: number = 0;
  let currentPick: string | undefined;
  const pickOne = (e: string) => {
    currentPick = e;
  };
</script>

<main class="py-10">
  <ScoreBoard {score} />
  {#if !currentPick}
    <Pick {pickOne} />
  {/if}
  {#if currentPick}
    <h1 class="text-white">{currentPick}</h1>
  {/if}
  <RulesModal />
</main>
