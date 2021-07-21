<script lang="ts">
  import Rules from "./svg/rules.svelte";
  // Modal functionality
  let modalOpen: boolean = false;
  const handleClick = () => (modalOpen = !modalOpen);
  const closeModal = () => {
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
      class="fixed text-white z-20 sm:h-min sm:w-min container flex items-center justify-center m-auto left-0 right-0 top-0 bottom-0"
    >
      <div
        class="relative w-min h-min bg-white py-16 sm:px-16  px-4 rounded-lg z-30"
      >
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
    <div
      class="fixed top-0 left-0 bg-gray-500 bg-opacity-10 z-10 w-screen h-screen"
      on:click={closeModal}
    />
  {/if}
</div>
