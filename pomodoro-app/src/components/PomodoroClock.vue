<template>
  <div class="container mx-auto text-center w-screen h-screen">
    <h3 class="text-white text-center py-12 text-3xl font-bold select-none">Pomodoro Clock</h3>
    <Indicator v-bind:store="store"/>
    <Clock v-bind:store="store"/>
    <Settings v-bind:store="store"/>
  </div>
</template>

<script lang="ts">
import {  defineComponent } from 'vue'
import Clock from './Clock.vue'
import Settings from './Settings.vue'
import Indicator from './Indicator.vue'
import { ClockContext, ColorContext, Store } from '../global'
import {theme} from '../Utils/theme'
export default defineComponent({
  name: 'PomodoroClock',
  components: {
    Clock,
    Settings,
    Indicator
  },
  data() {
    const clockContext: ClockContext[] = [
      { name: "Pomodoro", isActive: true, value: '25' },
      { name: "Short Break", isActive: false, value: '5'  },
      { name: "Long Break", isActive: false, value: '15'  }
    ]
    const colorContext: ColorContext[] = [
      { name: 'default', color: theme.pallete.primary, active: true},
      { name: 'blue', color: theme.pallete.secondry,  active: false},
      { name: 'green', color: theme.pallete.success,  active: true},
    ]
    const store: Store = {
      colorContext,
      clockContext
    }
    return {
      store
    }
  },
})
</script>

