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
import { useRouter } from 'vue-router'
const emit = defineEmits(['cerrar'])
const router = useRouter()

function cerrar() {
  emit('cerrar')
}

function cerrarSesion() {
  router.push('/login')
}
</script>

<style scoped>
.overlay {
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 999;
  display: flex;
  justify-content: flex-end;
}

.sidebar {
  background: white;
  width: 300px;
  height: 100%;
  padding: 2rem;
  position: relative;
  box-shadow: -2px 0 10px rgba(0, 0, 0, 0.3);
  animation: slideIn 0.3s ease-out;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

@keyframes slideIn {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0%);
  }
}

.btn-cerrar {
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  font-size: 20px;
  cursor: pointer;
}

.btn-cerrar-sesion {
  margin-top: auto;
  background-color: #6a0dad;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
}

.btn-cerrar-sesion:hover {
  background-color: #5a0cad;
}
</style>
