<template>
  <Menubar :model="items">
    <template #item="{ item }">
      <router-link
        v-if="item.route"
        :to="item.route"
        :class="[
          'flex items-center px-2 py-1 no-underline',
          route.path === item.route ? 'bg-sky-100 text-sky-800 rounded-md' : 'text-gray-700'
        ]"
      >
        <span :class="item.icon" class="pr-2" />
        <span>{{ item.label }}</span>
      </router-link>
    </template>
  </Menubar>
</template>

<script setup>
import Menubar from 'primevue/menubar'
import { useRoute } from 'vue-router'
import { ref } from 'vue'

const route = useRoute()

const items = ref([
  {
    label: 'Home',
    icon: 'pi pi-home',
    route: '/',
  },
  {
    label: 'Demo',
    icon: 'pi pi-chart-line',
    route: '/demo',
  },
])
</script>
