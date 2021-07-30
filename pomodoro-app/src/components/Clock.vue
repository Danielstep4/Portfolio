<template>
  <div
    class="
      sm:w-96 sm:h-96
      w-80
      h-80
      mx-auto
      my-10
      rounded-full
      flex
      justify-center
      items-center
      z-40
      shadow-2xl
    "
    style="
      background: radial-gradient(
        ellipse farthest-corner at 45px 45px,
        rgba(18, 23, 51, 0.8) 70%,
        rgba(18, 23, 51, 0.4) 100%
      );
    "
  >
    <div
      class="
        sm:w-80 sm:h-80
        w-72
        h-72
        mx-auto
        rounded-full
        flex
        justify-center
        items-center
        z-20
        bg-red-300
        relative
        overflow-hidden
      "
      v-bind:style="{ backgroundColor: !store.state.color || 'white' }"
    >
      <div
        class="
          progressbar-circle
          sm:w-72 sm:h-72
          w-64
          h-64
          mx-auto
          rounded-full
          z-40
          shadow-inner
          flex
          justify-center
          items-center
          flex-col
          cursor-pointer
        "
        style="background-color: #151932"
        @click="store.methods.play"
      >
        <span class="text-white text-8xl font-bold tracking-tighter">{{
          store.methods.secondsToString()
        }}</span>
        <span class="text-white text-2xl uppercase tracking-widest">{{
          store.state.isPlaying ? "pause" : "start"
        }}</span>
      </div>
      <div
        class="w-1/2 h-full top-0 left-0 absolute half-circle"
        v-bind:style="{
          transform: `rotate(${
            360 - store.methods.getProgressPercentage() * 360 >= 180
              ? 180
              : 180 - store.methods.getProgressPercentage() * 180
          }deg)`,
          backgroundColor: store.state.color || 'green',
        }"
      ></div>
      <div
        class="w-1/2 h-full top-0 left-0 absolute half-circle"
        v-bind:style="{
          transform: `rotate(${
            360 - store.methods.getProgressPercentage() * 360
          }deg)`,
          backgroundColor: store.state.color || 'green',
        }"
      ></div>
      <div
        class="w-1/2 h-full top-0 left-0 absolute half-circle-top"
        v-bind:style="{
          opacity: `${
            360 - store.methods.getProgressPercentage() * 360 > 180 ? 0 : 1
          }`,
          backgroundColor: 'white',
        }"
      ></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject } from "vue";
import { Store } from "../store/store";
export default defineComponent({
  name: "Clock",
  setup() {
    const store: Store = inject("store");
    return {
      store,
    };
  },
});
</script>

<style scoped>
.half-circle,
.half-circle-top {
  transform-origin: right center;
}
</style>
