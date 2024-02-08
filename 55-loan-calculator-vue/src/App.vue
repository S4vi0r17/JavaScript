<script setup>
import { ref, reactive } from 'vue'
import Header from './components/Header.vue';
import Button from './components/Button.vue';

const quantity = ref(0)

const state = reactive({
    quantity: 0
})

console.log(quantity.value);
console.log(state);

const MIN = 0
const MAX = 20000
const STEP = 100

function handleRangeChange(e) {
    console.log(e.target.value);
}
</script>

<template>
    <div class="my-20 max-w-lg mx-auto bg-white shadow p-10">

        <Header />

        <div class="flex justify-between items-center my-6">
            <Button>-</Button>
            <Button>+</Button>
        </div>

        <input type="range" class="mt-5 w-full h-6 accent-mauve hover:accent-mauve" @input="handleRangeChange" />

        <p class="text-center my-10 text-5xl font-extrabold text-mauve">
            10000
        </p>

        <h2 class="text-center text-2xl font-bold text-gray-500">
            Select your <span class='text-mauve'>plan</span>
        </h2>

        <select
            class='mt-5 w-full h-10 text-center text-xl font-bold text-gray-500 bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none focus:bg-gray-200'>
            <option value="6">6 months</option>
            <option value="12">12 months</option>
            <option value="24">24 months</option>
        </select>

        <div class="my-5 space-y-3 text-center bg-gray-50 p-5">
            <h2 class="text-center text-2xl font-bold text-gray-500">
                <span class='text-lightPink'>
                    Payment</span> details
            </h2>

            <p class="text-center text-xl font-bold text-gray-500">

            </p>

            <p class="text-center text-xl font-bold text-gray-500">

            </p>

            <p class="text-center text-xl font-bold text-gray-500">

            </p>

        </div>

    </div>
</template>