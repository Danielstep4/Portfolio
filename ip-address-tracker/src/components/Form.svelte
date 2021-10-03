<script lang="ts">
  import { theme } from "../styles/theme";
  import { checkIPAddressIPv4 } from "../utils/formHelper";
  import { GEO_URL } from "../geoUrl";
  import { Writable } from "svelte/store";

  export let IPInfo: Writable<IPResponse | null>;

  const bgImage = "/assets/pattern-bg.png";
  let ipAddress =
    Math.floor(Math.random() * 255) +
    1 +
    "." +
    Math.floor(Math.random() * 255) +
    "." +
    Math.floor(Math.random() * 255) +
    "." +
    Math.floor(Math.random() * 255);
  const handleSubmit = async (e: Event) => {
    e.preventDefault();
    if (checkIPAddressIPv4(ipAddress)) {
      // const response = await fetch(GEO_URL + ipAddress);
      // const result = (await response.json()) as IPResponse;
      // console.log(JSON.stringify(result));
      const dummy_response = JSON.parse(
        `{"ip":"35.253.100.132","location":{"country":"US","region":"Colorado","city":"Waterton","lat":39.4936,"lng":-105.0886,"postalCode":"","timezone":"-06:00","geonameId":5443367},"as":{"asn":3549,"name":"Lumen AS 3549","route":"35.248.0.0/13","domain":"","type":"NSP"},"isp":"tw telecom holdings, inc.","proxy":{"proxy":false,"vpn":false,"tor":false}}`
      );
      IPInfo.set(dummy_response);
    }
  };
</script>

<main
  class="bg-cover text-center md:p-5 flex items-center flex-col justify-center w-full"
  style="background-image: url('{bgImage}'); "
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
