<script lang="ts">
  import { theme } from "../styles/theme";

  let isLoading = false;
  const DUMMY_OBJECT = [
    { name: "ip address", value: "192.212.174.101" },
    { name: "location", value: "Brooklyn, NY, 10001" },
    { name: "timezone", value: "UTC-05:00" },
    { name: "isp", value: "SpaceX Starlink" },
  ];
</script>

<main
  class="bg-white w-3/4 text-center mx-auto shadow-2xl flex items-center justify-between p-10 rounded z-10 transform -translate-y-1/2"
>
  {#if isLoading}
    <h1 class="mx-auto">Loading...</h1>
  {:else}
    {#each DUMMY_OBJECT as object, i}
      {#if i}
        <hr
          class="w-16 transform rotate-90"
          style="color: {theme.palette.grey.dark};"
        />{/if}
      <div class="flex flex-col justify-start items-start">
        <span style="color: {theme.palette.grey.dark};"
          >{object.name.toUpperCase()}</span
        >
        <span class="font-bold text-2xl">{object.value}</span>
      </div>
    {/each}
  {/if}
</main>
