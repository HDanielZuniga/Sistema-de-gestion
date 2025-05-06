<template>
  <div class="layout">
    <!-- Si la ruta es /vistauser o /vistados, se usa GlobalLayout -->
    <GlobalLayout v-if="useGlobalLayout">
      <router-view />
    </GlobalLayout>

    <!-- Si la ruta es / (menú), renderizo normal -->
    <router-view v-else />
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import GlobalLayout from '@/layouts/GlobalLayout.vue'

const route = useRoute()
const useGlobalLayout = ['/vistauser', '/vistados'].includes(route.path)
</script>
