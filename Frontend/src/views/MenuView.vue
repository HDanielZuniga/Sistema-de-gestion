<template>
  <div class="contenedor-principal">
    <h1 class="titulo">Gestión de Eventos</h1>

    <!-- Tarjetas Crear / Editar -->
    <div class="opciones">
      <div class="opcion crear" @click="mostrarFormulario('crear')">
        <h2>+ Crear Evento</h2>
        <p>Agrega un nuevo evento al sistema</p>
      </div>

      <div class="opcion editar" @click="mostrarFormulario('editar')">
        <h2>Editar Evento</h2>
        <p>Modifica un evento ya creado</p>
      </div>
    </div>

    <!-- Eventos siempre visibles -->
    <div class="eventos-creados">
      <h3 class="titulo">Eventos ya creados:</h3>
      <div class="lista-eventos">
        <div
          v-for="evento in eventos"
          :key="evento.id"
          class="evento"
        >
          <strong>{{ evento.nombre }}</strong><br />
          <span>{{ evento.fecha }}</span> - {{ evento.lugar }} ({{ evento.cantidad }} personas)
        </div>
      </div>
    </div>

    <!-- Selección para edición -->
    <div v-if="modo === 'editar'" class="seleccion-edicion">
      <h3>Selecciona un evento para editar:</h3>
      <div class="lista-eventos">
        <div
          v-for="evento in eventos"
          :key="evento.id"
          class="evento editable"
          @click="cargarEvento(evento)"
        >
          {{ evento.nombre }} - {{ evento.fecha }}
        </div>
      </div>
    </div>

    <!-- Formulario -->
    <div v-if="modo === 'crear' || eventoSeleccionado" class="formulario-evento">
      <h3>{{ modo === 'crear' ? 'Crear Evento' : 'Editar Evento' }}</h3>
      <form @submit.prevent="guardarEvento">
        <input v-model="nombre" placeholder="Nombre del evento" required />
        <input v-model="fecha" type="date" required />
        <input v-model="lugar" placeholder="Lugar del evento" required />
        <input v-model="cantidad" type="number" min="1" required />
        <button type="submit">
          {{ modo === 'crear' ? 'Guardar Evento' : 'Actualizar Evento' }}
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const modo = ref(null);
const nombre = ref('');
const fecha = ref('');
const lugar = ref('');
const cantidad = ref(1);
const eventoSeleccionado = ref(null);

const eventos = ref([
  { id: 1, nombre: 'Concierto de Rock', fecha: '2025-07-20', lugar: 'Estadio Nacional', cantidad: 5000 },
  { id: 2, nombre: 'Conferencia Tech', fecha: '2025-08-15', lugar: 'Centro de Convenciones', cantidad: 300 },
  { id: 3, nombre: 'Festival de Comedia', fecha: '2025-09-10', lugar: 'Teatro Central', cantidad: 200 },
]);

const mostrarFormulario = (tipo) => {
  modo.value = tipo;
  eventoSeleccionado.value = null;
  nombre.value = '';
  fecha.value = '';
  lugar.value = '';
  cantidad.value = 1;
};

const cargarEvento = (evento) => {
  eventoSeleccionado.value = evento;
  nombre.value = evento.nombre;
  fecha.value = evento.fecha;
  lugar.value = evento.lugar;
  cantidad.value = evento.cantidad;
};

const guardarEvento = () => {
  const evento = {
    nombre: nombre.value,
    fecha: fecha.value,
    lugar: lugar.value,
    cantidad: cantidad.value,
  };

  if (modo.value === 'crear') {
    console.log('Evento guardado:', evento);
  } else {
    console.log('Evento actualizado:', evento);
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@500&display=swap');

body {
  background-color: #111;
  color: #f5f5f5;
  font-family: 'Orbitron', sans-serif;
  margin: 0;
  padding: 0;
}

.contenedor-principal {
  max-width: 1200px;
  margin: auto;
  padding: 2rem;
  background-color: #141414;
  border-radius: 1rem;
  box-shadow: 0 0 30px rgba(0, 255, 255, 0.2);
  overflow: hidden;
}

.titulo {
  font-size: 3rem;
  color: #ff007f;
  text-align: center;
  margin-bottom: 2rem;
}

.opciones {
  display: flex;
  justify-content: space-around;
  gap: 2rem;
  margin-bottom: 2rem;
}

.opcion {
  flex: 1;
  padding: 1.5rem;
  border-radius: 1rem;
  background: linear-gradient(135deg, #ff007f, #00bfff);
  color: white;
  cursor: pointer;
  box-shadow: 0 0 20px rgba(255, 0, 255, 0.5);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.opcion:hover {
  transform: translateY(-5px);
  box-shadow: 0 0 35px rgba(255, 0, 255, 0.7);
}

.eventos-creados {
  margin-top: 2rem;
}

.lista-eventos {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
}

.evento {
  background-color: #222;
  padding: 1rem;
  border-radius: 0.8rem;
  border: 1px solid #333;
  color: white;
  transition: background 0.3s ease, transform 0.3s ease;
}

.evento strong {
  color: #ff007f;
  font-size: 1.1rem;
}

.evento:hover {
  background-color: #333;
  transform: scale(1.05);
}

.evento.editable {
  cursor: pointer;
}

.evento.editable:hover {
  background-color: #444;
}

.formulario-evento {
  margin-top: 3rem;
  padding: 1.5rem;
  background-color: #1c1f26;
  border-radius: 1rem;
  box-shadow: inset 0 0 15px rgba(0, 255, 255, 0.1);
}

input {
  width: 100%;
  padding: 1rem;
  margin-bottom: 1rem;
  background-color: #2e2e2e;
  border: 1px solid #444;
  color: #f5f5f5;
  border-radius: 0.5rem;
  font-size: 1.1rem;
}

input:focus {
  border-color: #00ffff;
  outline: none;
}

button {
  background: linear-gradient(135deg, #00bfff, #ff007f);
  border: none;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  color: white;
  cursor: pointer;
  border-radius: 0.5rem;
  box-shadow: 0 0 10px rgba(0, 255, 255, 0.5);
  transition: transform 0.3s ease;
}

button:hover {
  transform: scale(1.05);
  box-shadow: 0 0 15px rgba(255, 0, 255, 0.7);
}
</style>
