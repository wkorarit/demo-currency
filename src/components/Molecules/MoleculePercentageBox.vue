<script setup>
import { computed } from 'vue'

const props = defineProps({
  title: String,
  percentage: [Number, String, null],
})

const displayValue = computed(() => {
  return props.percentage === null ? '-' : `${props.percentage > 0 ? '+' : ''}${props.percentage}%`
})

const displayClass = computed(() => {
  if (props.percentage > 0) {
    return 'text-green-600'
  } else if (props.percentage < 0) {
    return 'text-red-400'
  }
  return ''
})
</script>

<template>
  <div class="flex flex-col items-center rounded border border-gray-200 px-7 py-4">
    <span class="text-[12px]">{{ props.title }}</span>
    <span
      :class="displayClass"
      class="md:text-[18px]"
    >
      {{ displayValue }}
    </span>
  </div>
</template>
