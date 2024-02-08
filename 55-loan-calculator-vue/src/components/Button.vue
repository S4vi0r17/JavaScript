<script setup>
const props = defineProps(['operator', 'handle'])
// const props = defineProps({
//     operator: String,
//     handle: Function
// })
</script>
<template>
    <button type="button"
        className="h-10 w-10 flex items-center justify-center font-bold text-mauve text-2xl bg-pinkLavender rounded-full hover:outline-none hover:ring-2 hover:ring-offset-2 hover:ring-pinkLavender"
        @click="$emit('handle')">
        {{ operator }}
    </button>
</template>