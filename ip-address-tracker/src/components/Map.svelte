<script lang="ts">
  import L from "leaflet";
  import { onMount } from "svelte";

  export let mapProps: MapProps;
  onMount(() => {
    var map = L.map("map").setView([51.505, -0.09], 13);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      zIndex: 999,
    }).addTo(map);
    L.marker([51.5, -0.09])
      .addTo(map)
      .bindPopup("A pretty CSS3 popup.<br> Easily customizable.")
      .openPopup();

    console.log(mapProps);
  });
</script>

<main class="">
  <div id="map" style="height: 66.67vh;" />
</main>
