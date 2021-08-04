<script>
  import Scissors from "../svg/scissors.svelte";
  import { theme } from "../../styles/theme";
  export let pickOne;
</script>

<div
  class="absolute top-0 right-2 cursor-pointer -top-8 sm:-right-8"
  on:click={() => pickOne("scissors")}
>
  <div
    class="rounded-full w-40 h-40 border border-black "
    style={"background:" + theme.platte.primary.scissors}
  >
    <div
      class="rounded-full bg-gray-200 border-black  w-32 h-32 absolute mt-4 ml-4 shadow-inner flex items-center justify-center"
    >
      <div>
        <Scissors />
      </div>
    </div>
  </div>
</div>
