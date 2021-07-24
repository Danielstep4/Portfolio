<template>
  <main class="w-screen h-screen font-mono">
  <PomodoroClock />
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PomodoroClock from './components/PomodoroClock.vue'

export default defineComponent({
  name: 'App',
  components: {
    PomodoroClock
  }
})
</script>

<style>
  main {
    background: rgba(30,33,64,255);
  }
</style>
