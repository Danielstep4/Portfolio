<script lang="ts">
  import L from "leaflet";

  export let mapProps: MapProps;

  let map: L.Map;

  const createMap = (lat: number, lng: number, text: string) => {
    if (map) {
      map.setView([lat, lng], 13);

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        zIndex: 999,
      }).addTo(map);
      L.marker([lat, lng]).addTo(map).bindPopup(text).openPopup();
    }
  };
  const initMap = (node: HTMLElement, props: MapProps) => {
    map = L.map("map");
    return {
      update(props: MapProps) {
        if (!!props) {
          const { lat, lng, text } = props;
          createMap(lat, lng, text);
        }
      },
      destroy() {
        console.log("destroied");
      },
    };
  };
</script>

<main>
  <div id="map" style="height: 66.67vh;" use:initMap={mapProps} />
</main>
