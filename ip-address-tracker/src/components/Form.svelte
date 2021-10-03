<script lang="ts">
  import { theme } from "../styles/theme";
  import { checkIPAddressIPv4 } from "../utils/formHelper";

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
  const handleSubmit = (e: Event) => {
    e.preventDefault();
    console.log(checkIPAddressIPv4(ipAddress));
  };
</script>

<main
  class="bg-cover text-center p-5 flex items-center flex-col justify-center"
  style="background-image: url('{bgImage}'); "
>
  <h1 class="text-3xl text-white my-7 font-bold">IP Address Tracker</h1>
  <form class="flex mb-24 w-1/4">
    <input
      type="text"
      id="ip"
      placeholder="Insert IP address here"
      bind:value={ipAddress}
      class="px-4 py-2 rounded-l-xl  flex-grow focus:outline-none"
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
