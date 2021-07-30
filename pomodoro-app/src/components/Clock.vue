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
      v-bind:style="{ backgroundColor: store.state.color || 'white' }"
    >
      <div
        class="
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
          this.store.methods.secondsToString()
        }}</span>
        <span class="text-white text-2xl uppercase tracking-widest">{{
          store.state.isPlaying ? "pause" : "start"
        }}</span>
      </div>
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
