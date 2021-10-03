<script lang="ts">
  import Form from "./components/form.svelte";
  import InfoBar from "./components/InfoBar.svelte";
  import Map from "./components/Map.svelte";
</script>

<main>
  <h1>
    <Form />
    <InfoBar />
    <Map />
  </h1>
</main>

<style global lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
