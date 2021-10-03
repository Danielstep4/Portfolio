<script lang="ts">
  import L from "leaflet";
  import { onMount } from "svelte";

  export let mapProps: MapProps;
  onMount(() => {
    console.log(mapProps);
  });
</script>

<main>
  <div id="map" style="height: 180px" />
</main>
