<script setup>
import AvatarImage from '@/assets/avatar-color.png'
import Button from 'primevue/button'
import Card from 'primevue/card'
import Divider from 'primevue/divider'
import { useRouter } from 'vue-router'
import { ref, onMounted } from 'vue'

const router = useRouter()

const goTo = (key) => {
  const actions = {
    demo: () => router.push('/demo'),
    resume: () => {
      const link = document.createElement('a')
      link.href = '/files/resume.pdf'
      link.download = 'Korarit Resume.pdf'
      document.body.append(link)
      link.click()
      document.body.removeChild(link)
    },
    gitHub: () => window.open('https://github.com/wkorarit', '_blank'),
    linkedIn: () => window.open('https://www.linkedin.com/in/korarit-p', '_blank'),
  }

  actions[key]?.()
}

const infoItems = [
  { title: 'Experiences', value: '2+ Years' },
  { title: 'Familiar with', value: 'Agile' },
  { title: 'Passionate about', value: 'Clean UI' },
]

const isReady = ref(false)
onMounted(() => {
  requestAnimationFrame(() => {
    isReady.value = true
  })
})
</script>

<template>
  <main class="flex justify-center relative">
    <!-- Avatar -->
    <div
      class="w-40 h-40 md:w-50 md:h-50 bg-sky-100 rounded-full border-[6px] border-white flex justify-center items-center absolute left-1/2 -translate-x-1/2 z-10 transition-all duration-700 ease-out opacity-0 -translate-y-2"
      :class="{ 'opacity-100 translate-y-0': isReady }"
    >
      <img :src="AvatarImage" class="w-[70%] h-[70%]" />
    </div>

    <!-- Card -->
    <div
      class="relative mt-20 md:mt-25 md:w-[70%] xl:w-[50%] rounded-lg shadow transition-all duration-700 ease-out opacity-0 translate-y-4"
      :class="{ 'opacity-100 translate-y-0': isReady }"
    >
      <div class="h-2 w-full bg-blue-300 rounded-t-lg"></div>
      <Card class="rounded-t-none">
        <template #content>
          <section class="flex flex-col items-center mt-16 text-center">
            <!-- Headline -->
            <h2 class="text-[28px] font-medium">
              Hello, I'm <span class="text-blue-500">Korarit Pr</span>
            </h2>
            <p class="text-sm text-gray-400 font-normal">
              Software Developer (Vue.js) | Build Modern and User-Friendly Web Apps
            </p>

            <!-- Action Buttons -->
            <div class="mt-7 flex flex-col md:flex-row md:justify-center gap-4">
              <!-- Buttons -->
              <div class="flex justify-center gap-4">
                <Button label="Demo" icon="pi pi-play-circle" @click="goTo('demo')" />
                <Button
                  label="Resume"
                  icon="pi pi-file"
                  severity="secondary"
                  variant="outlined"
                  @click="goTo('resume')"
                />
              </div>
              <!-- Social Icons -->
              <div class="flex justify-center gap-1 md:mt-0 md:ml-2">
                <Button
                  icon="pi pi-github"
                  variant="text"
                  aria-label="GitHub"
                  @click="goTo('gitHub')"
                />
                <Button
                  icon="pi pi-linkedin"
                  variant="text"
                  aria-label="LinkedIn"
                  @click="goTo('linkedIn')"
                />
              </div>
            </div>

            <!-- Info Items -->
            <div class="w-full md:hidden">
              <Divider />
            </div>
            <div class="md:flex md:justify-between md:mt-10 w-full lg:w-[60%]">
              <div
                v-for="(item, index) in infoItems"
                :key="index"
                :class="[
                  'flex-1 flex flex-col justify-center text-center',
                  index === 1 ? 'md:border-x md:border-gray-200' : '',
                  'mt-4 md:mt-0',
                ]"
              >
                <span class="text-sm text-gray-400">{{ item.title }}</span>
                <span class="text-lg font-medium">{{ item.value }}</span>
              </div>
            </div>
          </section>
        </template>
      </Card>
    </div>
  </main>
</template>

<style scoped>
:deep(.p-card) {
  border-top-left-radius: 0 !important;
  border-top-right-radius: 0 !important;
}
</style>
