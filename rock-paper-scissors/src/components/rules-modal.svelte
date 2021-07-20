<script lang="ts">
  import Rules from "./svg/rules.svelte";

  export let modalOpen: boolean = false;
  export const handleClick = () => (modalOpen = !modalOpen);
  export const closeModal = () => {
    if (modalOpen) {
      modalOpen = false;
    }
  };
</script>

<div class="container">
  <button
    class="text-white absolute bottom-10 right-10 px-10 py-2 h-18 rounded-md text-base font-bold"
    on:click={handleClick}>RULES</button
  >
  {#if modalOpen}
    <div
      class="absolute text-white z-10 h-screen container flex items-center justify-center"
    >
      <div class="relative w-min h-min bg-white py-16 px-16 rounded-lg z-20">
        <span class="text-black text-xl absolute left-3 top-2 font-bold "
          >RULES</span
        >
        <button
          class="absolute right-2 top-0 bg-grey text-black border-none text-lg font-bold"
          on:click={closeModal}>X</button
        >
        <Rules />
      </div>
    </div>
  {/if}
</div>
