<template>
  <div class="overlay" @click.self="cerrar">
    <div class="sidebar">
      <h2>👤 Mi Perfil</h2>
      <p><strong>Nombre:</strong> Juan Pérez</p>
      <p><strong>Correo:</strong> juan.perez@example.com</p>
      <p><strong>Teléfono:</strong> +57 312 345 6789</p>

      <button class="btn-cerrar-sesion" @click="cerrarSesion">Cerrar Sesión</button>
      <button class="btn-cerrar" @click="cerrar">✖</button>
    </div>
  </div>
</template>

<script setup>
import { usePerfil } from '@/controllers/usePerfil'
const { cerrar, cerrarSesion } = usePerfil()
</script>

<style scoped>
/* ... mismo estilo que ya tienes ... */
</style>
