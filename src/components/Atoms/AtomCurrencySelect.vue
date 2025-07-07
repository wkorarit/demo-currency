<script setup>
import Select from 'primevue/select'

const currency = defineModel('currency')
const props = defineProps({
  options: Array,
})
</script>

<template>
  <Select
    v-model="currency"
    :options="options"
    optionLabel="label"
    placeholder="Select a Currency"
    class="w-full md:w-[24%]"
  />
</template>
