<script lang="ts">
  import Pick from "./Pick.svelte";

  import RulesModal from "./RulesModal.svelte";
  import ScoreBoard from "./ScoreBoard.sveltee";
  let score: number = 0;
  const pickOne = (e: string) => {
    console.log(e);
  };
</script>

<main class="py-10">
  <ScoreBoard {score} />
  <Pick {pickOne} />
  <RulesModal />
</main>
