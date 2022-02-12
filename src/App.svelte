<script lang="ts">
  import { onDestroy } from "svelte";
  import { writable } from "svelte/store";
  import Form from "./components/form.svelte";
  import Loading from "./components/Loading.svelte";
  import Map from "./components/Map.svelte";

  // IPInfo Store
  const IPInfo = writable<IPResponse | null>(null);
  // Components Props States
  let mapProps: MapProps;
  // Subscriber to handle changes
  const unsubscribe = IPInfo.subscribe((val) => {
    if (val !== null) {
      mapProps = {
        lat: val.location.lat,
        lng: val.location.lng,
        text: `${val.location.city}, ${val.location.country}, ${
          val.location.postalCode || val.location.region
        }`,
      };
    } else {
      mapProps = undefined;
    }
  });
  // Clearing Subscriber
  onDestroy(() => unsubscribe());
  // getToken
  const getToken = async () => {
    const cachedToken = sessionStorage.getItem("token");
    const cachedIp = sessionStorage.getItem("ip");
    if (cachedToken && cachedIp) {
      return Promise.resolve(cachedIp);
    }
    try {
      const res = await fetch(
        "https://stormy-island-29228.herokuapp.com/getToken"
      );
      const data = await res.json();
      if (data && data.token) {
        sessionStorage.setItem("token", data.token);
        sessionStorage.setItem("ip", data.ip);
        return data.ip;
      }
    } catch {
      alert("Sorry! There is a problem please try again later.");
    }
  };
</script>

<main class="w-full flex flex-col min-h-screen">
  {#await getToken()}
    <main
      class="flex justify-center items-center h-screen w-screen bg-blue-300 bg-opacity-50"
    >
      <Loading />
    </main>
  {:then userIp}
    <Form {IPInfo} {userIp} />
    <Map {mapProps} />
  {/await}
</main>

<style global lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
</style>
