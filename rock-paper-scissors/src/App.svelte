<script lang="ts">
  import Lizard from "./components/svg/lizard.svelte";
  import { theme } from "./styles/theme";
</script>

<main style={"background:" + theme.platte.background}>
  <p class="text-lg">Rock Paper Scisors</p>
  <Lizard />
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
