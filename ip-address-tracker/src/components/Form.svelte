<script lang="ts">
  import { theme } from "../styles/theme";
  import { checkIPAddressIPv4 } from "../utils/formHelper";
  import { GEO_URL } from "../geoUrl";
  import { onMount } from "svelte";
  import type { Writable } from "svelte/store";

  export let IPInfo: Writable<IPResponse | null>;

  const bgImage = "/assets/pattern-bg.png";
  // let ipAddress =
  //   Math.floor(Math.random() * 255) +
  //   1 +
  //   "." +
  //   Math.floor(Math.random() * 255) +
  //   "." +
  //   Math.floor(Math.random() * 255) +
  //   "." +
  //   Math.floor(Math.random() * 255);
  let ipAddress = "139.236.226.201";
  // Get data function and caching data
  const getData = async () => {
    ipAddress = ipAddress.trim();
    if (checkIPAddressIPv4(ipAddress)) {
      const cachedInfo = sessionStorage.getItem(ipAddress);
      if (!!cachedInfo) {
        const cachedInfoObj = JSON.parse(cachedInfo) as IPResponse;
        IPInfo.set(cachedInfoObj);
      } else {
        try {
          const response = await fetch(GEO_URL + ipAddress);
          const result = (await response.json()) as IPResponse;
          IPInfo.set(result);
          sessionStorage.setItem(ipAddress, JSON.stringify(result));
        } catch (e) {
          console.log(e);
        }
      }
    }
  };
  // On Submit get the ip data the user writen
  const handleSubmit = (e: Event) => {
    e.preventDefault();
    IPInfo.set(null);
    getData();
  };
  // On Mount get the random ip data
  onMount(() => getData());
</script>

<main
  class="bg-cover text-center md:p-5 flex items-center flex-col justify-center w-full"
  style="background-image: url('{bgImage}'); height: 33.34vh"
>
  <h1 class="text-3xl text-white my-7 font-bold">IP Address Tracker</h1>
  <form class="flex md:mb-24 mb-60 md:w-1/4">
    <input
      type="text"
      id="ip"
      placeholder="Insert IP address here"
      bind:value={ipAddress}
      class="px-4 py-2 rounded-l-xl flex-grow focus:outline-none"
    />
    <button
      class="rounded-r-xl px-4"
      type="submit"
      style="background-color: {theme.palette.grey.veryDark};"
      on:click={handleSubmit}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="11" height="14"
        ><path
          fill="none"
          stroke="#FFF"
          stroke-width="3"
          d="M2 1l6 6-6 6"
        /></svg
      >
    </button>
  </form>
</main>
