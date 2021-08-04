<script lang="ts">
  export let name: PickChoices;
  import { theme } from "../../styles/theme";
  import Scissors from "../svg/scissors.svelte";
  import Rock from "../svg/rock.svelte";
  import Paper from "../svg/paper.svelte";
</script>

<div class="my-5">
  {#if name == "paper"}
    <div
      class="rounded-full w-40 h-40 border border-black"
      style={"background:" + theme.platte.primary.paper}
    >
      <div
        class="rounded-full bg-gray-200 border-black  w-32 h-32 absolute mt-4 ml-4 shadow-inner flex items-center justify-center"
      >
        <div>
          <Paper />
        </div>
      </div>
    </div>
  {/if}
  {#if name == "rock"}
    <div
      class="rounded-full w-40 h-40 relative border border-black"
      style={"background:" + theme.platte.primary.rock}
    >
      <div
        class="rounded-full bg-gray-200 border-black  w-32 h-32 absolute mt-4 ml-4 shadow-inner flex items-center justify-center"
      >
        <div>
          <Rock />
        </div>
      </div>
    </div>
  {/if}
  {#if name == "scissors"}
    <div
      class="rounded-full w-40 h-40 border border-black"
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
  {/if}
</div>
