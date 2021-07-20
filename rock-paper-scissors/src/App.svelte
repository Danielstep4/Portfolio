<script lang="ts">
  import Game from "./components/game.svelte";
  import { theme } from "./styles/theme";
</script>

<main
  style={"background:" + theme.platte.background}
  class="container h-screen w-screen"
>
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
    padding: 0;
  }
</style>
