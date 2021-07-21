<script>
  import Rock from "../svg/rock.svelte";
  import { theme } from "../../styles/theme";
  export let pickOne;
</script>

<div
  class="absolute left-0 right-0  mx-auto flex justify-center bottom-1 pick-button"
  on:click={() => pickOne("rock")}
>
  <div
    class="rounded-full w-40 h-40 relative border border-black "
    style={"background:" + theme.platte.primary.rock}
  >
    <div
      class="rounded-full bg-gray-200 border-black  w-32 h-32 absolute mt-4 ml-4 shadow-inner"
    >
      <div class="absolute left-1/3 top-1/3">
        <Rock />
      </div>
    </div>
  </div>
</div>

<style>
  .pick-button:hover {
    cursor: pointer;
  }
</style>
