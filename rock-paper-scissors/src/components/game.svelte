<script lang="ts">
  import Pick from "./pick.svelte";

  import RulesModal from "./rules-modal.svelte";
  import ScoreBoard from "./score-board.svelte";
  let score: number = 0;
</script>

<main class="py-10">
  <ScoreBoard {score} />
  <Pick />
  <RulesModal />
</main>
