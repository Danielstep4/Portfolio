<script lang="ts">
  import { onDestroy } from "svelte";
  import { writable } from "svelte/store";
  import Form from "./components/form.svelte";
  import InfoBar from "./components/InfoBar.svelte";
  import Map from "./components/Map.svelte";

  // IPInfo Store
  const IPInfo = writable<IPResponse | null>(null);
  // Components Props State
  let infoBarProps: InfoBarProps;
  let mapProps: MapProps;
  // Subscriber to handle changes
  const unsubscribe = IPInfo.subscribe((val) => {
    if (val !== null) {
      infoBarProps = {
        ip: val.ip,
        isp: val.isp,
        timezone: val.location.timezone,
        location: `${val.location.city}, ${val.location.country}, ${
          val.location.postalCode || val.location.region
        }`,
      };
      mapProps = {
        lat: val.location.lat,
        lng: val.location.lng,
      };
    } else {
      infoBarProps = undefined;
      mapProps = undefined;
    }
  });
  // Clearing Subscriber
  onDestroy(() => unsubscribe());
</script>

<main class="w-full">
  <Form {IPInfo} />
  <InfoBar {infoBarProps} />
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
