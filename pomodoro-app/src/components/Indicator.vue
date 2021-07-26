<template>
     <div id="indicators" class="flex flex-row text-gray-500  text-center justify-center w-1/3 mx-auto rounded-full h-14">
        <p v-for="clock of clockContext" v-bind:key="clock" v-bind:class="{ active: clock.isActive}" v-bind:style="{ backgroundColor: clock.isActive ? color : 'none' }" class="rounded-full whitespace-nowrap flex-1 flex justify-center items-center select-none">
            {{ clock.name }}
        </p>
     </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import {ColorContext, Store} from '../global'
export default defineComponent({
    name: 'Indicator',
    props: {
        store: Object
    },
    data({ store }) {
        const { clockContext, colorContext} =  store as Store;
        const color = colorContext.filter((color: ColorContext) => color.active)[0].color
        return {
            clockContext,
            color
        }
    },
    created() {
        console.log()
    }
})

</script>

<style scoped>
 div {
    background-color: rgba(21,25,50,255);
 }
 .active {
    color: rgb(12,12,12);
    font-weight: 700;
 }
</style>