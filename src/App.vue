<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <h1
      text="blue-400 50px"
      class="bd-red"
    >Vue 3 + TypeScript + Vite</h1>
    <el-button>Default</el-button>
    <div class="wrapper">
    </div>
  </header>
  <RouterView />
</template>

<style scoped></style>
