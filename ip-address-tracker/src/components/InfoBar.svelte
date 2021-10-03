<script lang="ts">
  import { theme } from "../styles/theme";

  export let infoBarProps: InfoBarProps;

  $: isLoading = !infoBarProps;
  $: data = !!infoBarProps
    ? [
        { name: "ip address", value: infoBarProps.ip },
        { name: "location", value: infoBarProps.location },
        { name: "timezone", value: "UTC" + infoBarProps.timezone },
        { name: "isp", value: infoBarProps.isp },
      ]
    : [];
</script>

<main
  class="bg-white md:w-3/4 w-4/5 mx-auto shadow-2xl flex md:flex-row flex-col items-center justify-between p-10 rounded-xl z-10 transform -translate-y-1/2"
>
  {#if isLoading}
    <h1 class="mx-auto">Loading...</h1>
  {:else if !!infoBarProps}
    {#each data as object, i}
      {#if i}
        <hr
          class="w-24 transform md:rotate-90 hidden md:block"
          style="color: {theme.palette.grey.dark};"
        />{/if}
      <div class="flex flex-col md:justify-start items-start  mb-5 md:mb-0">
        <span
          class="md:mb-3 mb-1 font-bold"
          style="color: {theme.palette.grey.dark};"
          >{object.name.toUpperCase()}</span
        >
        <span class="font-bold text-xl capitalize">{object.value}</span>
      </div>
    {/each}
  {:else}
    <h1>Error! Please try again later.</h1>
  {/if}
</main>
