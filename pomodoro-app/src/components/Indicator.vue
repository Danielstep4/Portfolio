<template>
     <div id="indicators" class="flex flex-row text-gray-500  text-center justify-center w-1/3 mx-auto rounded-full h-14">
        <p v-for="btn of indicators" v-bind:key="btn" v-bind:class="{ active: btn.isActive}" class="rounded-full whitespace-nowrap flex-1 flex justify-center items-center select-none">
            {{ btn.text }}
        </p>
     </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    name: 'Indicator',
    props: {
        indicators: {
            type: Array,
            required: true,
        }
    },
    data({ indicators }) {
        
        return {
            indicators
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
    background-color: rgba(248,112,112,255);
    color: rgb(12,12,12);
    font-weight: 700;
 }
</style>