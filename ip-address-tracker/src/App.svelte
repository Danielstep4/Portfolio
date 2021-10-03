<script lang="ts">
  import Form from "./components/form.svelte";
  import InfoBar from "./components/InfoBar.svelte";
  import Map from "./components/Map.svelte";
</script>

<main>
  <Form />
  <InfoBar />
  <Map />
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
