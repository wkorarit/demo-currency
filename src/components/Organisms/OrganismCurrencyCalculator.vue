<script setup>
import Card from 'primevue/card'
import Button from 'primevue/button'
import AtomInputNumber from '@/components/Atoms/AtomInputNumber.vue'
import AtomCurrencyLabel from '@/components/Atoms/AtomCurrencyLabel.vue'

const compare = defineModel('compare')
const base = defineModel('base')
const props = defineProps({
  compareLabel: String,
  isSwapped: Boolean,
})
const emit = defineEmits(['swap', 'calculate'])

const onSwap = () => emit('swap')
const onCalculate = () => emit('calculate')
</script>

<template>
  <Card class="mt-3">
    <template #title>Easy Calculator</template>
    <template #content>
      <div class="relative h-[180px] lg:h-[192px] flex flex-col items-center mt-3">
        <div
          class="absolute left-1/2 -translate-x-1/2 transition-transform duration-500 w-[80%] flex items-center gap-6"
          :class="isSwapped ? 'translate-y-[120px]' : 'translate-y-0'"
        >
          <AtomInputNumber v-model:input="compare" :disabled="isSwapped" />
          <AtomCurrencyLabel :label="compareLabel" />
        </div>

        <div
          class="absolute left-1/2 -translate-x-1/2 transition-transform duration-500 w-[80%] flex items-center gap-6"
          :class="isSwapped ? 'translate-y-0' : 'translate-y-[120px]'"
        >
          <AtomInputNumber v-model:input="base" :disabled="!isSwapped" />
          <AtomCurrencyLabel label="THB" />
        </div>

        <div class="absolute top-[60px] left-1/2 -translate-x-1/2 flex justify-center gap-3">
          <Button label="Compare" icon="pi pi-sync" @click="onCalculate" />
          <Button icon="pi pi-arrows-v" severity="secondary" variant="outlined" @click="onSwap" />
        </div>
      </div>
    </template>
  </Card>
</template>
