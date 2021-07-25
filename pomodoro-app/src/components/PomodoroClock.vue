<template>
  <div class="container mx-auto text-center w-screen h-screen">
    <h3 class="text-white text-center py-12 text-3xl font-bold select-none">Pomodoro Clock</h3>
    <Indicator v-bind:indicators="clockState" />
    <Clock v-bind:clockState="clockState"/>
    <Settings v-bind:indicators="clockState" v-bind:colors="colorContext"/>
  </div>
</template>

<script lang="ts">
import {  defineComponent } from 'vue'
import Clock from './Clock.vue'
import Settings from './Settings.vue'
import Indicator from './Indicator.vue'
import { ClockState, ColorContext } from '../global'
import {theme} from '../Utils/theme'
export default defineComponent({
  name: 'PomodoroClock',
  components: {
    Clock,
    Settings,
    Indicator
  },
  data() {
    const clockState: ClockState[] = [
      { text: "Pomodoro", isActive: true, value: 25 },
      { text: "Short Break", isActive: false, value: 5  },
      { text: "Long Break", isActive: false, value: 15  }
    ]
    const colorContext: ColorContext[] = [
      { name: 'default', color: theme.pallete.primary, active: true},
      { name: 'blue', color: theme.pallete.secondry,  active: false},
      { name: 'green', color: theme.pallete.success,  active: false},
    ]
    return {
      clockState,
      colorContext
    }
  }
})
</script>

