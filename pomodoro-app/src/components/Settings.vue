<template>
    <div>
        <button class="text-center" @click="handleModal">
            <SettingsButton />
        </button>
        <div v-if="isOpen" class="fixed m-auto left-0 right-0 top-0 bottom-0 w-min h-min flex justify-center items-center flex-col z-20">
            <div class="bg-white w-auto h-auto pb-8 relative">
                <div class="flex flex-row justify-between p-5 text-lg font-bold">
                    <span >Settings</span>
                    <button @click="handleModal">X</button>
                </div>
                <hr />
                <div class="p-5">
                    <span class="uppercase tracking-widest font-bold text-lg">time (minutes)</span>
                    <div class="flex flex-row" >
                        <div v-for="indicator in indicators" v-bind:key="indicator.text" class="flex flex-row justify-start">
                            <div class="flex flex-col pr-8">
                                <span class="whitespace-nowrap">{{ indicator.text }}</span>
                                <input type="number" :name="indicator.text" :id="indicator.text" :value="indicator.value" class="block w-full bg-gray-200 h-10 p-4">
                            </div>
                        </div>
                    </div>
                </div>
                <hr>
                <div class="p-5 flex flex-row justify-between items-center">
                    <span class="uppercase tracking-widest font-bold text-lg">color</span>
                    <div class="flex flex-row justify-between w-min" >
                        <div v-for="color in colors" v-bind:key="color.name" class="rounded-full bg-black w-10 h-10 inline-block mx-1 cursor-pointer relative flex items-center" v-bind:style="{ backgroundColor: color.color }">
                            <span v-if="color.active" class="mx-auto">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"/></svg>
                            </span>
                        </div>
                    </div>
                </div>
            <button class="absolute left-0 right-0 mx-auto -bottom-4 bg-red-500 px-8 py-2 rounded-full text-white" >Apply</button>
            </div>
        </div>
        <div v-if="isOpen" class="fixed top-0 left-0 w-screen h-screen z-10" @click="handleModal"></div>
    </div>

</template>

<script lang="ts">
import {defineComponent} from 'vue'
import SettingsButton from './svg/SettingsButton.vue'

export default defineComponent({
    name: 'Settings',
    components: {
        SettingsButton
    },
    props: {
        indicators: {
            type: Array,
            required: true
        },
        colors: {
            type: Array,
            required: true
        }
    },
    data({ indicators, colors }) {
        const isOpen: boolean = false;
        return {
            isOpen,
            indicators,
            colors
        }
    },
    methods: {
        handleModal() {
            this.isOpen = !this.isOpen
        }
    }
})
</script>

<style>

</style>