<script setup>
import { ref, watchEffect } from 'vue'
import { DateTime } from 'luxon'
import AtomLineChart from '@/components/Atoms/AtomLineChart.vue'

const props = defineProps({
  dataset: Array,
  label: Array,
})

const chartData = ref()
const chartOptions = ref()

const setChartData = () => {
  const documentStyle = getComputedStyle(document.documentElement)
  return {
    labels: props.label.map((date) => DateTime.fromISO(date).toFormat('dd LLL yy')),
    datasets: [
      {
        label: 'THB',
        data: props.dataset,
        fill: false,
        borderColor: documentStyle.getPropertyValue('--color-blue-400'),
        tension: 0.4,
      },
    ],
  }
}

const setChartOptions = () => {
  const documentStyle = getComputedStyle(document.documentElement)
  const textColor = documentStyle.getPropertyValue('--p-text-color')
  const textColorSecondary = documentStyle.getPropertyValue('--p-text-muted-color')
  const surfaceBorder = documentStyle.getPropertyValue('--p-content-border-color')

  return {
    maintainAspectRatio: false,
    aspectRatio: 0.6,
    plugins: {
      legend: {
        labels: {
          color: textColor,
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: textColorSecondary,
        },
        grid: {
          color: surfaceBorder,
        },
      },
      y: {
        ticks: {
          color: textColorSecondary,
          callback: function (value) {
            return `${value.toFixed(3)} THB`
          },
        },
        grid: {
          color: surfaceBorder,
        },
      },
    },
  }
}

watchEffect(() => {
  chartData.value = setChartData()
  chartOptions.value = setChartOptions()
})
</script>

<template>
  <AtomLineChart :chartData="chartData" :chartOptions="chartOptions" />
</template>


