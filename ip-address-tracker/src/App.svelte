<script lang="ts">
  import { onDestroy, onMount } from "svelte";
  import { writable } from "svelte/store";
  import Form from "./components/form.svelte";
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
  onMount(() =>
    fetch("https://stormy-island-29228.herokuapp.com/getToken")
      .then((response) =>
        response
          ? response.json().then((data) => {
              if (data && data.token) {
                sessionStorage.setItem("token", data.token);
              }
            })
          : null
      )
      .catch(console.log)
  );
</script>

<main class="w-full flex flex-col min-h-screen">
  <Form {IPInfo} />
  <Map {mapProps} />
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
