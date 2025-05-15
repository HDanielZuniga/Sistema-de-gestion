<template>
  <div class="fondo-layout">
    <div class="contenedor">
      <div class="encabezado">
        <h2 class="titulo">Mis Eventos</h2>
        <button class="btn-perfil" @click="mostrarPerfil = true">Ver Perfil</button>
      </div>

      <div class="eventos-grid">
        <EventCard
          v-for="evento in eventos"
          :key="evento.id"
          :event="evento"
          @update-event="actualizarEvento"
        />
      </div>

      <!-- Modal de perfil -->
      <PerfilUsuario v-if="mostrarPerfil" @cerrar="mostrarPerfil = false" />
    </div>
  </div>
</template>

<script setup>
import EventCard from '@/components/EventCard.vue'
import PerfilUsuario from '@/components/PerfilUsuario.vue'
import { ref } from 'vue'

const eventos = ref([
  { id: 1, name: 'Conferencia Vue', date: '2025-06-01', time: '10:00', location: 'CDMX', guests: 150 },
  { id: 2, name: 'Charla Tech', date: '2025-06-05', time: '16:00', location: 'Bogotá', guests: 80 },
  { id: 3, name: 'Meetup Devs', date: '2025-06-10', time: '18:30', location: 'Medellín', guests: 40 }
])

const mostrarPerfil = ref(false)

function actualizarEvento(updated) {
  const index = eventos.value.findIndex(e => e.id === updated.id)
  if (index !== -1) eventos.value[index] = updated
}
</script>

<style scoped>
.fondo-layout {
  min-height: 100vh;
  background-image: url('/img/fondo.jpg');
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
}

.contenedor {
  background-color: rgba(0, 0, 0, 0.8);
  padding: 2rem;
  border-radius: 16px;
  width: 100%;
  max-width: 1000px;
  color: #ffffff;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
}

.encabezado {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.titulo {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.btn-perfil {
  background-color: #6a0dad;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 12px;
  cursor: pointer;
}

.btn-perfil:hover {
  background-color: #5a0cad;
}

.eventos-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: center;
  margin-top: 1rem;
}
</style>
