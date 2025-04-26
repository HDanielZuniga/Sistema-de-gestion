<template>
    <div class="event-card" @click="toggleExpand">
      <div v-if="!isExpanded">
        <!-- Vista contraída -->
        <h3>{{ localEvent.name }}</h3>
        <p>📅 Fecha: {{ localEvent.date }}</p>
        <p>⏰ Hora: {{ localEvent.time }}</p>
        <p>📍 Lugar: {{ localEvent.location }}</p>
      </div>
      <div v-else>
        
        <input v-model="localEvent.name" placeholder="Nombre del evento" />
        <input v-model="localEvent.date" type="date" />
        <input v-model="localEvent.time" type="time" />
        <input v-model="localEvent.location" placeholder="Lugar" />
        <input v-model="localEvent.guests" type="number" placeholder="Número de invitados" />
        <button @click.stop="saveChanges">Guardar</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: ["event"],
    data() {
      return {
        localEvent: { ...this.event }, // Copia local para edición
        isExpanded: false, // Controla si la tarjeta está expandida
      };
    },
    methods: {
      toggleExpand() {
        this.isExpanded = !this.isExpanded; // Alterna entre expandido y contraído
      },
      saveChanges() {
        this.$emit("update-event", this.localEvent); // Emite los cambios al componente padre
        this.isExpanded = false; // Contrae la tarjeta después de guardar
      },
    },
  };
  </script>
  
  <style scoped>
  .event-card {
    background: white;
    padding: 15px; /* Un poco más de espacio interno */
    border-radius: 15px; /* Bordes más redondeados */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    width: 220px; /* Aumentamos el ancho */
    height: 220px; /* Mismo valor que el ancho para mantener forma cuadrada */
    text-align: left;
    transition: transform 0.2s;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }
  .event-card:hover {
    transform: scale(1.05);
  }
  input, button {
    width: 90%;
    padding: 6px;
    margin: 3px 0;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  button {
    background-color: #6a0dad;
    color: white;
    border: none;
    cursor: pointer;
  }
  button:hover {
    background-color: #5a0cad;
  }
  </style>