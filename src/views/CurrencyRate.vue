<script setup>
import { ref, onMounted, watch, computed, inject } from 'vue'
import { DateTime } from 'luxon'
import { currencyList } from '@/constants/currency-list'
import { getCurrencyData } from '@/api/api-module-currency'

import AtomCurrencySelect from '@/components/Atoms/AtomCurrencySelect.vue'
import MoleculeLineChart from '@/components/Molecules/MoleculeLineChart.vue'
import OrganismCurrencyInfo from '@/components/Organisms/OrganismCurrencyInfo.vue'
import OrganismCurrencyCalculator from '@/components/Organisms/OrganismCurrencyCalculator.vue'
import Card from 'primevue/card'
import Skeleton from 'primevue/skeleton'
import Dialog from 'primevue/dialog'
import Button from 'primevue/button'

const selectedCurrency = ref({ label: 'USD', name: 'United States Dollar', symbol: '$' })
const currentRate = ref(0)
const percentageChange = ref(0)
const percentageChangeWeek = ref(0)
const currencyCompare = ref(1)
const currencyBase = ref(0)
const isSwapped = ref(false)
const showContent = ref(false)
const label = ref([])
const dataset = ref([])
const latestDate = ref()
const showDisclaimer = ref(true)

const now = DateTime.now()
const today = now.toFormat('yyyy-MM-dd')
const startOfMonth = now.startOf('month').toFormat('yyyy-MM-dd')
const lastMonthStart = now.minus({ months: 1 }).startOf('month').toFormat('yyyy-MM-dd')
const lastMonthEnd = now.startOf('month').minus({ days: 1 }).toFormat('yyyy-MM-dd')

const latestDateFormatted = computed(() =>
  DateTime.fromISO(latestDate.value).toFormat('dd LLL yyyy'),
)

onMounted(async () => {
  await fetchCurrencyData()
  calculateValue()
  setTimeout(() => {
    showContent.value = true
  }, 1000)
})

const fetchCurrencyData = async () => {
  const res = await getCurrencyData(startOfMonth, today, selectedCurrency.value.label)
  const rates = res?.rates || {}
  const dateKeys = Object.keys(rates)

  if (dateKeys.length === 0) {
    const fallback = await getCurrencyData(
      lastMonthStart,
      lastMonthEnd,
      selectedCurrency.value.label,
    )
    setChartData(fallback?.rates || {})
  } else {
    setChartData(rates)
  }
}

const setChartData = (rates) => {
  const keys = Object.keys(rates)
  label.value = keys
  dataset.value = keys.map((date) => rates[date].THB)
  latestDate.value = keys[keys.length - 1]

  currentRate.value = dataset.value.at(-1)
  const startRate = dataset.value[0]

  percentageChange.value = (((currentRate.value - startRate) / startRate) * 100).toFixed(2)

  const monday = DateTime.now().startOf('week').plus({ days: 1 }).toFormat('yyyy-MM-dd')
  const weekRate = findNextAvailableRate(rates, monday)

  percentageChangeWeek.value = weekRate
    ? (((currentRate.value - weekRate.rate) / weekRate.rate) * 100).toFixed(2)
    : null
}

const findNextAvailableRate = (rates, startDateISO) => {
  let date = DateTime.fromISO(startDateISO)
  for (let i = 0; i < 7; i++) {
    const str = date.toFormat('yyyy-MM-dd')
    if (rates[str]?.THB) return { rate: rates[str].THB, date: str }
    date = date.plus({ days: 1 })
  }
  return null
}

const calculateValue = () => {
  const base = isSwapped.value ? currencyBase.value : currencyCompare.value
  const value = parseFloat(base || 1)
  if (isSwapped.value) currencyCompare.value = value / currentRate.value
  else currencyBase.value = value * currentRate.value
}

const swapCurrency = () => {
  isSwapped.value = !isSwapped.value
}

watch(selectedCurrency, async (newVal, oldVal) => {
  if (newVal !== oldVal) {
    await fetchCurrencyData()
    calculateValue()
  }
})

watch([currencyCompare, currencyBase, isSwapped], calculateValue)
</script>

<template>
  <Transition name="fade">
    <main v-if="showContent">
      <div class="flex items-center">
        <AtomCurrencySelect v-model:currency="selectedCurrency" :options="currencyList" />
        <div class="hidden md:block md:ml-5 border-l border-slate-500 pl-5">
          <h1 class="font-semibold text-2xl text-neutral-500">Demo</h1>
        </div>
      </div>

      <div class="md:flex w-full mt-5 gap-x-3">
        <div class="md:w-[35%] xl:w-[25%]">
          <OrganismCurrencyInfo
            :currency="selectedCurrency"
            :currentRate="currentRate"
            :latestDate="latestDateFormatted"
            :weekChange="percentageChangeWeek"
            :monthChange="percentageChange"
          />

          <OrganismCurrencyCalculator
            class="mt-3"
            v-model:compare="currencyCompare"
            v-model:base="currencyBase"
            :compareLabel="selectedCurrency.label"
            :isSwapped="isSwapped"
            @swap="swapCurrency"
            @calculate="calculateValue"
          />
        </div>

        <div class="mt-3 md:mt-0 md:w-[65%] xl:w-[75%]">
          <Card>
            <template #title>Latest Exchange Rates</template>
            <template #content>
              <MoleculeLineChart :dataset="dataset" :label="label" />
            </template>
          </Card>
        </div>
      </div>
    </main>
  </Transition>

  <section v-if="!showContent" class="space-y-5 animate-pulse">
    <p class="text-sm mb-3">Loading exchange rate data...</p>
    <Skeleton height="2rem" width="30%" class="mb-2" />

    <div class="md:flex w-full mt-5 gap-x-3">
      <div class="md:w-[35%] xl:w-[25%] gap-y-4">
        <Skeleton height="13rem" width="100%" class="md:w-[35%]" />
        <Skeleton height="16rem" width="100%" class="md:w-[65%] mt-4" />
      </div>
      <div class="mt-3 md:mt-0 md:w-[65%] xl:w-[75%]">
        <Skeleton height="30rem" width="100%" />
      </div>
    </div>
  </section>
  <Dialog
    v-model:visible="showDisclaimer"
    position="bottom"
    :modal="false"
    :draggable="false"
    :dismissableMask="false"
    :closable="false"
    :style="{ width: '96%', borderRadius: 0 }"
    class="p-0"
  >
    <template #container>
      <div
        class="px-5 py-3 text-sm text-[#333333] bg-[#FFFBEA] md:flex md:justify-center md:items-center"
      >
        <span>
          This is a prototype website. Data may be outdated and is not intended for real-world use.
        </span>
        <div class="flex justify-center mt-2 md:mt-0">
          <Button
            class="ml-2"
            label="Close"
            size="small"
            severity="warn"
            @click="showDisclaimer = false"
          />
        </div>
      </div>
    </template>
  </Dialog>
</template>

<style scoped>
.fade-enter-active {
  transition: opacity 0.6s ease;
}
.fade-enter-from {
  opacity: 0;
}
</style>
