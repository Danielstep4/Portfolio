<template>
    <div>
        <button class="text-center" @click="handleModal">
            <SettingsButton />
        </button>
        <div v-if="isOpen" class="fixed top-0 w-screen h-screen flex justify-center items-center flex-col">
            <div class="bg-white w-1/3 h-auto">
                <div class="flex flex-row justify-between p-5 text-lg font-bold">
                    <span >Settings</span>
                    <button @click="handleModal">&times</button>
                </div>
                <hr />
                <div class="p-5">
                    <span class="uppercase tracking-widest font-bold text-lg">time (minutes)</span>
                    <form class="flex flex-row" >
                        <div v-for="input in inputs" v-bind:key="input.name" class="flex flex-row justify-start">
                            <div class="flex flex-col pr-8">
                                <span class="whitespace-nowrap">{{ input.name }}</span>
                                <input type="number" :name="input.name" :id="input.name" :value="input.defaultValue" class="block w-full bg-gray-200 h-10 p-4">
                            </div>
                        </div>
                    </form>
                </div>
                <hr>
            </div>
        </div>
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
    data() {
        const isOpen: boolean = false;
        const inputs = [
            { name: 'pomodoro', defaultValue: 25},
            { name: 'short-break', defaultValue: 5},
            { name: 'long-break', defaultValue: 15},
        ]
        return {
            isOpen,
            inputs
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