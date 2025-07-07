<script setup>
import Card from 'primevue/card'
import MoleculePercentageBox from '@/components/Molecules/MoleculePercentageBox.vue'

defineProps({
  currency: Object,
  currentRate: Number,
  latestDate: String,
  weekChange: [Number, String],
  monthChange: [Number, String]
})
</script>

<template>
  <Card>
    <template #content>
      <div class="flex items-center">
        <div class="flex justify-center items-center px-3 py-1 rounded bg-gray-100">
          {{ currency.symbol }}
        </div>
        <h1 class="ml-2 font-medium text-gray-600">
          {{ currency.name }}
          <span class="font-normal">({{ currency.label }})</span>
        </h1>
      </div>
      <div class="flex justify-center items-center">
        <span class="text-sm text-gray-500">1 {{ currency.label }} =</span>
        <span class="text-[32px] md:text-[24px] lg:text-[32px] font-medium text-blue-500">&nbsp;{{ currentRate }} THB</span>
      </div>
      <div class="flex justify-center text-[10px] text-gray-400">
        <span class="text-red-500">*&nbsp;</span>Latest Update: {{ latestDate }}
      </div>
      <div class="mt-4 flex flex-row md:flex-col lg:flex-row justify-center gap-5 md:gap-2 lg:gap-7">
        <MoleculePercentageBox title="This Week" :percentage="weekChange" />
        <MoleculePercentageBox title="This Month" :percentage="monthChange" />
      </div>
    </template>
  </Card>
</template>


