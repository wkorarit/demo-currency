import { URL, fileURLToPath } from 'node:url'

import { defineConfig } from 'vite'
import svgLoader from 'vite-svg-loader'
import tailwindcss from '@tailwindcss/vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

export default defineConfig({
  base: '/demo-currency/',
  plugins: [
    vue(),
    vueDevTools(),
    tailwindcss(),
    svgLoader()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
