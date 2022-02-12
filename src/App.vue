<template>
  <main class="w-screen min-h-full font-mono select-none">
    <PomodoroClock />
  </main>
</template>

<script lang="ts">
import { defineComponent, provide } from "vue";
import store from "./store";
import PomodoroClock from "./components/PomodoroClock.vue";

export default defineComponent({
  name: "App",
  components: {
    PomodoroClock,
  },
  setup() {
    provide("store", store);
  },
});
</script>
