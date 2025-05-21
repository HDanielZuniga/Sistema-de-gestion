<template>
  <div class="overlay" @click.self="cerrarPerfil">
    <div class="perfil-popup">
      <h2>Mi Perfil</h2>
      <p><strong>Nombre:</strong> Juan</p>
      <p><strong>Apellido:</strong> Pérez</p>
      <p><strong>Correo:</strong> juan.perez@example.com</p>
      <button class="btn-cerrar-sesion" @click="logout">Cerrar Sesión</button>
      <button class="btn-cerrar" @click="cerrarPerfil">X</button>
    </div>
  </div>
</template>

<script setup>
import { defineEmits } from 'vue';

const emit = defineEmits(['cerrarPerfil', 'logout']);

const cerrarPerfil = () => emit('cerrarPerfil');
const logout = () => emit('logout');
</script>

<style scoped>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 4000;
}

.perfil-popup {
  background-color: white;
  padding: 2rem;
  border-radius: 12px;
  min-width: 300px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  position: relative;
}

.btn-cerrar-sesion {
  background-color: #e74c3c;
  color: white;
  padding: 10px;
  border-radius: 8px;
  border: none;
  margin-top: 1rem;
  font-weight: bold;
  width: 100%;
  cursor: pointer;
}

.btn-cerrar {
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
}
</style>