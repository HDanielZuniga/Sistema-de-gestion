<template>
    <div>
      <h1>Aquí puede ir el menú principal</h1>
  
      <button  @click="router.push('/')"> user </button>
      <button  @click="router.push('/vistados')" > dos </button>
    </div>
    <router-view />
  
    <div>
      <h1>Este es el footer</h1>
    </div>
  </template>
  
  <script setup>
  import { useRouter } from 'vue-router'
  
  const router = useRouter()
  </script>
  