<script setup>
import Chart from 'primevue/chart'

defineProps({
  chartData: Object,
  chartOptions: Object,
})
</script>

<template>
  <div class="card">
    <Chart type="line" :data="chartData" :options="chartOptions" class="h-[30rem]" />
  </div>
</template>


