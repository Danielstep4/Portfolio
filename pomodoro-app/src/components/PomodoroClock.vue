<template>
  <div class="container mx-auto">
    <h3 class="text-white text-center py-12 text-3xl font-bold select-none">Pomodoro Clock</h3>
    <Indicator v-bind:indicators="indicators" />
    <Clock />
    <Settings />
  </div>
</template>

<script lang="ts">
import {  defineComponent } from 'vue'
import Clock from './Clock.vue'
import Settings from './Settings.vue'
import Indicator from './Indicator.vue'
import { Indicators } from '../global'
export default defineComponent({
  name: 'PomodoroClock',
  components: {
    Clock,
    Settings,
    Indicator
  },
  data() {
    const indicators: Indicators[] = [{ text: "Pomodoro", isActive: true }, { text: "Short Break", isActive: false  }, { text: "Long Break", isActive: false  }]
    return {
      indicators
    }
  }
})
</script>

