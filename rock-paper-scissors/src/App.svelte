<script lang="ts">
  import Game from "./components/Game.svelte";
</script>

<main>
  <Game />
</main>

<style global lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    min-height: 100%;
    background: linear-gradient(hsl(214, 47%, 23%), hsl(237, 49%, 15%));
    background-repeat: no-repeat;
    background-color: hsl(237, 49%, 15%);
  }
</style>
