<template>
  <div
    id="indicators"
    class="
      flex flex-row
      text-gray-500 text-center
      justify-center
      lg:w-1/3
      w-11/12
      mx-auto
      rounded-full
      h-14
    "
  >
    <p
      v-for="clock of store.methods.getSettings().clockContext"
      v-bind:key="clock.name"
      v-bind:class="{ active: store.state.clockState == clock.name }"
      v-bind:style="{
        backgroundColor:
          store.state.clockState == clock.name ? store.state.color : 'inherit',
      }"
      class="
        rounded-full
        whitespace-nowrap
        flex-1 flex
        justify-center
        items-center
        select-none
      "
    >
      {{ clock.name }}
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject } from "vue";
import { Store } from "../store/store";
export default defineComponent({
  name: "Indicator",
  data() {
    const store: Store = inject("store")! as Store;
    return {
      store,
    };
  },
});
</script>

<style scoped>
div {
  background-color: rgba(21, 25, 50, 255);
}
.active {
  color: rgb(12, 12, 12);
  font-weight: 700;
}
</style>
