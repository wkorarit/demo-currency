<script setup>
import InputNumber from 'primevue/inputnumber'

const input = defineModel('input')
const props = defineProps({
  disabled: Boolean,
})
</script>

<template>
  <InputNumber
    v-model="input"
    :minFractionDigits="2"
    :disabled="disabled"
    fluid
  />
</template>
