<template>
    <div class="w-96 mx-auto h-96 my-10 rounded-full flex justify-center items-center z-40 shadow-2xl" style="background: radial-gradient(ellipse farthest-corner at 45px 45px, rgba(18,23,51,0.8) 70%, rgba(18,23,51,0.4) 100%)">
        <div class="w-80 h-80 mx-auto rounded-full flex justify-center items-center z-20 bg-red-300 relative" v-bind:style="{backgroundColor: color || 'none' }">
            <div class="w-72 h-72 mx-auto rounded-full z-40 shadow-inner flex justify-center items-center flex-col cursor-pointer" style="background-color: #151932" @click="handleClock" >
                <span class="text-white text-8xl font-bold tracking-tighter">{{time}}</span>
                <span class="text-white text-2xl uppercase tracking-widest">Start</span>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent} from 'vue'
import {ClockContext, ColorContext, Store} from '../global'
import {fromNumberToTime} from '../Utils/clockLogin'
export default defineComponent( {
    
    name: "Clock",
    props: {
        store: Object
    },
    data({ store }) {
        const { clockContext, colorContext} =  store as Store;
        const color = colorContext.filter((color: ColorContext) => color.active)[0].color
        let currentClockState: ClockContext;
        for(let state of clockContext as ClockContext[]) {
            if(state.isActive) currentClockState = state;
        }
        let currentTimeInSeonds: number = +currentClockState.value * 60;
        const time: string = fromNumberToTime(currentTimeInSeonds);
        return {
            time, 
            color
        }
    },
})
</script>