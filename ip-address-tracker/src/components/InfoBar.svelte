<script lang="ts">
  import { theme } from "../styles/theme";

  // Props
  export let infoBarProps: InfoBarProps;
  export let isLoading: boolean;
  export let error: FormCompError;
  // Flags
  $: isLoading = isLoading;
  $: isError = error && error.isError;
  // Data
  $: data = !!infoBarProps
    ? [
        { name: "ip address", value: infoBarProps.ip },
        { name: "location", value: infoBarProps.location },
        { name: "timezone", value: "UTC " + infoBarProps.timezone },
        { name: "isp", value: infoBarProps.isp },
      ]
    : [];
</script>

<main
  class="bg-white w-5/6 mx-auto shadow-2xl flex md:flex-row flex-col items-center justify-between md:p-10 p-2 rounded-xl z-1000 absolute left-0 right-0 bottom-0 transform translate-y-1/2"
>
  {#if isError}
    <h1 class="mx-auto font-bold text-red-500">{error.msg}</h1>
  {:else if isLoading}
    <h1 class="mx-auto">Loading...</h1>
  {:else if !!infoBarProps}
    {#each data as object, i}
      {#if i}
        <hr
          class="w-24 transform md:rotate-90 hidden md:block"
          style="color: {theme.palette.grey.dark};"
        />{/if}
      <div
        class="flex flex-col md:justify-start md:items-start items-center  mb-5 md:mb-0"
      >
        <span
          class="md:mb-3 mb-1 font-bold select-none"
          style="color: {theme.palette.grey.dark};"
          >{object.name.toUpperCase()}</span
        >
        <span class="font-bold text-xl capitalize text-center"
          >{object.value}</span
        >
      </div>
    {/each}
  {:else}
    <h1 class="mx-auto font-bold text-red-500">
      Error! Please try again later.
    </h1>
  {/if}
</main>
