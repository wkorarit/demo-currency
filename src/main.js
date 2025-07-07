import './assets/main.css'

import App from './App.vue'
import Aura from '@primeuix/themes/aura'
import PrimeVue from 'primevue/config'
import VueAxios from 'vue-axios'
import axios from 'axios'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue, {
  theme: {
    preset: Aura,
    options: {
      darkModeSelector: false || 'none',
    },
  },
})
app.use(VueAxios, axios);
app.provide("axios", app.config.globalProperties.axios);

app.mount('#app')
