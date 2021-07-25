<template>
    <div class="w-96 mx-auto h-96 my-10 rounded-full flex justify-center items-center z-40 shadow-2xl" style="background-color: #121733">
        <div class="w-80 h-80 mx-auto rounded-full flex justify-center items-center z-20 bg-red-300 relative" style="background-color: rgba(248,112,112,255)">
            <div class="w-72 h-72 mx-auto rounded-full z-40 shadow-inner flex justify-center items-center flex-col cursor-pointer" style="background-color: #151932" >
                <span class="text-white text-8xl font-bold tracking-tighter">{{time}}</span>
                <span class="text-white text-2xl uppercase tracking-widest">Start</span>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent} from 'vue'
import {ClockState} from '../global'
import {fromNumberToTime} from '../Utils/clockLogin'
export default defineComponent( {
    
    name: "Clock",
    props: {
        clockState: {
            type: Array,
            required: true
        }
    },
    data({ clockState }) {
        let currentClockState: ClockState;
        for(let state of clockState as ClockState[]) {
            if(state.isActive) currentClockState = state;
        }
        let currentTimeInSeonds: number = currentClockState.value * 60
        const time: string = fromNumberToTime(currentTimeInSeonds);
        return {
            time
        }
    },
})
</script>