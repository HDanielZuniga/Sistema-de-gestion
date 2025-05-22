<template>
  <div class="gestion-container">
    <!-- Botón que abre el menú emergente de perfil -->
    <button class="btn-perfil" @click="mostrarPerfil = true"></button>

    <!-- Ventana emergente del perfil -->
    <div v-if="mostrarPerfil" class="overlay" @click.self="mostrarPerfil = false">
      <div class="perfil-popup">
        <h2>Mi Perfil</h2>
        <p><strong>Nombre:</strong> {{ nombreUsuario }}</p>
        <p><strong>Correo:</strong> {{ correoUsuario }}</p>
        <p><strong>Teléfono:</strong> +57 312 345 6789</p>
        <button class="btn-cerrar-sesion" @click="logout">Cerrar Sesión</button>
        <button class="btn-cerrar" @click="mostrarPerfil = false"></button>
      </div>
    </div>

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
            <div v-if="!eventoSeleccionado || eventoSeleccionado.id !== evento.id">
              <h3>{{ evento.nombre }}</h3>
              <p>{{ evento.fecha }}</p>
              <p>{{ evento.lugar }}</p>
              <p>{{ evento.cantidad }} personas</p>
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
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import {
  crearEvento,
  getEventos,
  actualizarEvento as actualizarEventoBackend
} from '../services/eventService'
import { obtenerPerfil } from '../services/perfilService'

const router = useRouter()

const eventos = ref([])
const nombre = ref('')
const fecha = ref('')
const lugar = ref('')
const cantidad = ref('')
const modo = ref('')
const eventoSeleccionado = ref(null)
const mostrarPerfil = ref(false)

const nombreUsuario = ref('')
const correoUsuario = ref('')

const mostrarFormulario = (tipo) => {
  modo.value = tipo
  eventoSeleccionado.value = null
}

const guardarEvento = async () => {
  try {
    const nuevoEvento = await crearEvento({
      nombre: nombre.value,
      fecha: fecha.value,
      lugar: lugar.value,
      cantidad: cantidad.value
    })

    eventos.value.push(nuevoEvento.evento)
    nombre.value = ''
    fecha.value = ''
    lugar.value = ''
    cantidad.value = ''
  } catch (error) {
    console.error('No se pudo guardar el evento:', error)
    alert('Error al guardar el evento. Verifica tu conexión o vuelve a intentarlo.')
  }
}

const cargarEvento = (evento) => {
  eventoSeleccionado.value = { ...evento } // copia para edición
}

const actualizarEvento = async () => {
  try {
    await actualizarEventoBackend(eventoSeleccionado.value.id, {
      nombre: eventoSeleccionado.value.nombre,
      fecha: eventoSeleccionado.value.fecha,
      lugar: eventoSeleccionado.value.lugar,
      cantidad: eventoSeleccionado.value.cantidad
    })

    eventos.value = await getEventos()
    eventoSeleccionado.value = null
    alert('Evento actualizado correctamente.')
  } catch (error) {
    console.error('❌ Error al actualizar evento:', error)
    alert('No se pudo actualizar el evento. Intenta nuevamente.')
  }
}

const logout = () => {
  localStorage.removeItem('authToken')
  router.push('/auth/login')
}

onMounted(async () => {
  try {
    const perfil = await obtenerPerfil()
    nombreUsuario.value = perfil.firstName + ' ' + perfil.lastName
    correoUsuario.value = perfil.email
  } catch (error) {
    console.error('❌ Error cargando perfil:', error)
  }

  try {
    eventos.value = await getEventos()
  } catch (error) {
    console.error('❌ Error cargando eventos:', error)
  }
})
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

/* Mejoras en las cartas de eventos */
.event-card {
  background: linear-gradient(145deg, #454565, #2b2b3c);
  padding: 1.5rem;
  border-radius: 16px;
  flex: 1 1 45%;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(15, 98, 254, 0.3);
  border: 1px solid transparent;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease,
    border-color 0.3s ease;
  color: #e0e0ff;
}

.event-card:hover {
  transform: translateY(-6px);
  border-color: #0f62fe;
  box-shadow: 0 8px 25px rgba(15, 98, 254, 0.6);
}

.event-card h3 {
  margin-bottom: 0.6rem;
  font-weight: 700;
  color: #cbd5ff;
  text-shadow: 0 0 8px #0f62fe99;
}

.event-card p {
  margin: 0.3rem 0;
  font-weight: 500;
  color: #a0aaffcc;
  text-shadow: 0 0 4px #0f62fe66;
}

.btn-perfil {
  position: fixed;
  top: 20px;
  right: 20px;
  background-color: #9a82f4;
  border: none;
  padding: 10px 16px;
  border-radius: 50%;
  color: white;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 0 0 10px rgba(154, 130, 244, 0.7);
  z-index: 1001;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  padding: 40px;
  z-index: 1000;
}

.perfil-popup {
  background-color: #ffffff;
  color: #333;
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
