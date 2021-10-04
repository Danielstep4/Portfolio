<script lang="ts">
  import L from "leaflet";

  // Props
  export let mapProps: MapProps;
  // Map Object
  let map: L.Map;
  // Updating Map according to the component props
  const updateMap = (lat: number, lng: number, text: string) => {
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
  /**Initializing the map.
   * on update trigers update map.
   * on unmount stoping. */
  const initMap = (node: HTMLElement, props: MapProps) => {
    map = L.map("map");
    return {
      update(props: MapProps) {
        if (!!props) {
          if (props.lat && props.lng && props.text) {
            const { lat, lng, text } = props;
            updateMap(lat, lng, text);
          }
        }
      },
      destroy() {
        map.stop();
      },
    };
  };
</script>

<main>
  <div id="map" style="height: 66.67vh;" use:initMap={mapProps} />
</main>
