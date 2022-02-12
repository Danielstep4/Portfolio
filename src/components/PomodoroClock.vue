<template>
  <div class="container mx-auto text-center w-screen h-screen">
    <h3 class="text-white text-center py-12 text-3xl font-bold select-none">
      Pomodoro Clock
    </h3>
    <Indicator />
    <Clock />
    <Settings />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Clock from "./Clock.vue";
import Settings from "./Settings.vue";
import Indicator from "./Indicator.vue";
export default defineComponent({
  name: "PomodoroClock",
  components: {
    Clock,
    Settings,
    Indicator,
  },
});
</script>
