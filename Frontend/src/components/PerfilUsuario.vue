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
.btn-cerrar-sesion {
  background: linear-gradient(135deg, #ff6b6b, #f06595);
  border: none;
  color: white;
  padding: 12px 25px;
  font-weight: 700;
  font-size: 1rem;
  border-radius: 30px;
  cursor: pointer;
  box-shadow: 0 6px 12px rgba(240, 101, 149, 0.5);
  transition: background 0.3s ease, transform 0.2s ease;
  margin-top: 20px;
  width: 100%;
  user-select: none;
}

.btn-cerrar-sesion:hover {
  background: linear-gradient(135deg, #f06595, #ff6b6b);
  transform: translateY(-3px);
  box-shadow: 0 8px 16px rgba(240, 101, 149, 0.7);
}

.btn-cerrar-sesion:active {
  transform: translateY(1px);
  box-shadow: 0 4px 8px rgba(240, 101, 149, 0.4);
}

/* Opcional: para que el botón de cerrar modal sea más pequeño y claro */
.btn-cerrar {
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  font-size: 1.3rem;
  cursor: pointer;
  color: #999;
  transition: color 0.2s ease;
}

.btn-cerrar:hover {
  color: #f06595;
}
</style>
