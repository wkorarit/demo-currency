<script setup>
import AtomInputNumber from '@/components/Atoms/AtomInputNumber.vue'
import AtomCurrencyLabel from '@/components/Atoms/AtomCurrencyLabel.vue'

defineProps({
  value: Number,
  label: String,
  disabled: Boolean
})
defineEmits(['update:value'])
</script>

<template>
  <div class="flex items-center gap-6 w-[80%]">
    <AtomInputNumber v-model="value" :disabled="disabled" />
    <AtomCurrencyLabel :label="label" />
  </div>
</template>


