import { createRouter, createWebHistory } from 'vue-router'

import AboutMe from '@/views/AboutMe.vue'
import CurrencyRate from '@/views/CurrencyRate.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'AboutMe',
      component: AboutMe,
    },

    {
      path: '/demo',
      name: 'Demo',
      component: CurrencyRate,
    },
  ],
})

export default router
