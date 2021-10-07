<script lang="ts">
  import { theme } from "../styles/theme";
  import {
    checkIPAddressIPv4,
    checkIPPrivate,
    handleErrors,
  } from "../utils/formHelper";
  import { onMount } from "svelte";
  import type { Writable } from "svelte/store";
  import InfoBar from "./InfoBar.svelte";

  // Props
  export let IPInfo: Writable<IPResponse | null>;
  // State
  let error: FormCompError = {
    isError: false,
    msg: null,
  };
  let infoBarProps: InfoBarProps;
  let isLoading = true;
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
  /** Populates the IPInfo store and infobarProps state */
  const populateState = (val: IPResponse) => {
    error = checkIPPrivate(val);
    if (error.isError) return;
    isLoading = false;
    IPInfo.set(val);
    infoBarProps = {
      ip: val.ip,
      isp: val.isp,
      timezone: val.location.timezone,
      location: `${val.location.city}, ${val.location.country}, ${
        val.location.postalCode || val.location.region
      }`,
    };
  };
  // Get data function and caching data
  const getData = async () => {
    ipAddress = ipAddress.trim();
    if (checkIPAddressIPv4(ipAddress)) {
      const cachedInfo = sessionStorage.getItem(ipAddress);
      if (!!cachedInfo) {
        const cachedInfoObj = JSON.parse(cachedInfo) as IPResponse;
        populateState(cachedInfoObj);
      } else {
        try {
          const token = sessionStorage.getItem("token");
          if (!token) return;
          const response = await fetch("http://localhost:8080/getInfo", {
            method: "POST",
            cache: "no-cache",
            mode: "cors",
            credentials: "same-origin",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              token,
              ipAddress: ipAddress.replace(/\b0/g, ""),
            }),
            redirect: "follow",
            referrerPolicy: "no-referrer",
          });
          console.log(response);
          const result = (await response.json()) as IPResponse;
          populateState(result);
          sessionStorage.setItem(ipAddress, JSON.stringify(result));
        } catch (e) {
          ipAddress = "";
          error = handleErrors("BAD_API_RESPONSE");
        }
      }
    } else {
      isLoading = false;
      error = handleErrors("INVALID_IP");
      ipAddress = "";
    }
  };
  // On Submit get the ip data the user writen
  const handleSubmit = (e: Event) => {
    e.preventDefault();
    error = {
      isError: false,
      msg: null,
    };
    isLoading = true;
    IPInfo.set(null);
    infoBarProps = undefined;
    getData();
  };
  // On Mount get the random ip data
  onMount(() => getData());
</script>

<main
  class="bg-cover text-center md:p-5 flex items-center flex-col justify-center w-full relative"
  style="background-image: url('{bgImage}'); min-height: 33.34vh"
>
  <h1 class="text-3xl text-white mb-7 md:mt-0 mt-1 font-bold">
    IP Address Tracker
  </h1>
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
  <InfoBar {infoBarProps} {isLoading} {error} />
</main>
