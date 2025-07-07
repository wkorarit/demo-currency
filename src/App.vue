<script setup>
import { RouterView } from 'vue-router'
import Navbar from './components/layouts/Navbar.vue'
</script>

<template>
  <header class="mb-8">
    <Navbar></Navbar>
  </header>

  <RouterView />
</template>

<style lang="scss" scoped></style>
