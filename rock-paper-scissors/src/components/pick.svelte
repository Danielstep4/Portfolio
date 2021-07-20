<script>
  import { theme } from "../styles/theme";

  import BgTriangle from "./svg/bg-triangle.svelte";
  import Paper from "./svg/paper.svelte";
  import Rock from "./svg/rock.svelte";
  import Scissors from "./svg/scissors.svelte";
  export let pickOne;
</script>

<div class="absolute left-0 right-0 mx-auto w-min my-16">
  <BgTriangle />
  <div
    class="absolute -top-8 -left-8 pick-button"
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
  <div
    class="absolute top-0 right-0 pick-button -top-8 -right-8"
    on:click={() => pickOne("scissors")}
    data-label="scissors"
  >
    <div
      class="rounded-full w-40 h-40 border border-black "
      style={"background:" + theme.platte.primary.scissors}
    >
      <div
        class="rounded-full bg-gray-200 border-black  w-32 h-32 absolute mt-4 ml-4 shadow-inner"
      >
        <div class="absolute left-1/3 top-1/3">
          <Scissors />
        </div>
      </div>
    </div>
  </div>
  <div
    class="absolute left-0 right-0 mx-auto flex justify-center bottom-1 pick-button"
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
</div>

<style>
  .pick-button:hover {
    cursor: pointer;
  }
</style>
