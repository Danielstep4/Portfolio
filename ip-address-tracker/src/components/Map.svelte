<script lang="ts">
  import L from "leaflet";
  import { afterUpdate, onMount } from "svelte";

  export let mapProps: MapProps;

  let map: L.Map;
  const createMap = (lat: number, lng: number, isp: string) => {
    if (map) {
      map.setView([lat, lng], 13);

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        zIndex: 999,
      }).addTo(map);
      L.marker([lat, lng]).addTo(map).bindPopup(isp).openPopup();
    }
  };
  onMount(() => {
    map = L.map("map");
  });
  afterUpdate(() => {
    if (!!mapProps) {
      const { lat, lng, isp } = mapProps;
      createMap(lat, lng, isp);
    }
  });
</script>

<main>
  <div id="map" style="height: 66.67vh;" />
</main>
