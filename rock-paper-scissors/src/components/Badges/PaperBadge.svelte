<script>
  import Paper from "../svg/paper.svelte";
  import { theme } from "../../styles/theme";
  export let pickOne;
</script>

<div
  class="absolute -top-8 sm:-left-8 pick-button left-2"
  on:click={() => pickOne("paper")}
>
  <div
    class="rounded-full w-40 h-40 border border-black "
    style={"background:" + theme.platte.primary.paper}
  >
    <div
      class="rounded-full bg-gray-200 border-black  w-32 h-32 absolute mt-4 ml-4 shadow-inner"
    >
      <div class="absolute left-1/3 top-1/3">
        <Paper />
      </div>
    </div>
  </div>
</div>

<style>
  .pick-button:hover {
    cursor: pointer;
  }
</style>
