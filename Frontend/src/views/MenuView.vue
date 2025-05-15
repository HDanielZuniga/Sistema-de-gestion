<template>
  <div class="gestion-container">
    <!-- Botón cerrar sesión en esquina superior derecha -->
    <button class="btn-logout" @click="logout">Cerrar Sesión</button>

    <div class="gestion-box">
      <h1>Gestión de Eventos</h1>

      <div class="opciones">
        <button class="submit-btn" @click="mostrarFormulario('crear')">+ Crear Evento</button>
        <button class="submit-btn" @click="mostrarFormulario('editar')">Editar Evento</button>
      </div>

      <div v-if="modo === 'crear'" class="formulario-evento">
        <h3>Crear Nuevo Evento</h3>
        <form @submit.prevent="guardarEvento">
          <input v-model="nombre" placeholder="Nombre del evento" required />
          <input v-model="fecha" type="date" required />
          <input v-model="lugar" placeholder="Lugar del evento" required />
          <input v-model="cantidad" type="number" min="1" placeholder="# de personas" required />
          <button class="submit-btn" type="submit">Guardar Evento</button>
        </form>
      </div>

      <div class="eventos-creados">
        <h3>Eventos ya creados:</h3>
        <div class="lista-eventos">
          <div
            v-for="evento in eventos"
            :key="evento.id"
            class="event-card"
            @click="modo === 'editar' ? cargarEvento(evento) : null"
          >
            <div v-if="eventoSeleccionado?.id !== evento.id">
              <h3>{{ evento.nombre }}</h3>
              <p>📅 {{ evento.fecha }}</p>
              <p>📍 {{ evento.lugar }}</p>
              <p>👥 {{ evento.cantidad }} personas</p>
            </div>
            <div v-else>
              <h3>Editar Evento</h3>
              <form @submit.prevent="actualizarEvento">
                <input v-model="eventoSeleccionado.nombre" placeholder="Nombre del evento" required />
                <input v-model="eventoSeleccionado.fecha" type="date" required />
                <input v-model="eventoSeleccionado.lugar" placeholder="Lugar del evento" required />
                <input v-model="eventoSeleccionado.cantidad" type="number" min="1" required />
                <button class="submit-btn" type="submit">Actualizar Evento</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const eventos = ref([])
const nombre = ref('')
const fecha = ref('')
const lugar = ref('')
const cantidad = ref('')
const modo = ref('')
const eventoSeleccionado = ref(null)

const mostrarFormulario = (tipo) => {
  modo.value = tipo
  eventoSeleccionado.value = null
}

const guardarEvento = () => {
  eventos.value.push({
    id: Date.now(),
    nombre: nombre.value,
    fecha: fecha.value,
    lugar: lugar.value,
    cantidad: cantidad.value
  })

  nombre.value = ''
  fecha.value = ''
  lugar.value = ''
  cantidad.value = ''
}

const cargarEvento = (evento) => {
  eventoSeleccionado.value = { ...evento }
}

const actualizarEvento = () => {
  const index = eventos.value.findIndex(e => e.id === eventoSeleccionado.value.id)
  if (index !== -1) {
    eventos.value[index] = { ...eventoSeleccionado.value }
    eventoSeleccionado.value = null
  }
}

const logout = () => {
  localStorage.removeItem('authToken')
  alert('Sesión cerrada con éxito') // ← OPCIONAL
  router.push('/auth/login')
}

</script>

<style scoped>
.gestion-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #1e1e2f;
  color: #ffffff;
  padding: 2rem;
  position: relative;
}

.gestion-box {
  background-color: #2c2c3e;
  padding: 2rem;
  border-radius: 16px;
  width: 100%;
  max-width: 800px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  z-index: 1;
}

h1, h3 {
  color: #ffffff;
  text-align: center;
  margin-bottom: 1rem;
}

.opciones {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
}

.submit-btn {
  padding: 0.6rem 1.2rem;
  background-color: #0f62fe;
  border: none;
  color: white;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s ease;
}

.submit-btn:hover {
  background-color: #0353e9;
}

input {
  display: block;
  width: 100%;
  margin: 0.5rem 0;
  padding: 0.6rem;
  border-radius: 8px;
  border: none;
  background-color: #3a3a4f;
  color: white;
}

input::placeholder {
  color: #b0b0b0;
}

.eventos-creados {
  margin-top: 2rem;
}

.lista-eventos {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

/* Estilo del botón cerrar sesión */
.btn-logout {
  position: fixed;
  top: 20px;
  right: 20px;
  background-color: #9a82f4;
  border: none;
  padding: 6px 12px;
  border-radius: 6px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  font-size: 0.9rem;
  box-shadow: 0 0 10px rgba(154, 130, 244, 0.7);
  transition: background-color 0.3s ease;
  z-index: 1000;
}

.btn-logout:hover {
  background-color: #7d65d7;
}
</style>
