<template>
    <div class="event-card">
      <h3>{{ localEvent.name }}</h3>
      <p>📅 Fecha: {{ localEvent.date }}</p>
      <p>⏰ Hora: {{ localEvent.time }}</p>
      <p>📍 Lugar: {{ localEvent.location }}</p>
      <p>👥 Invitados: {{ localEvent.guests }}</p>
    </div>
  </template>
  
  <script>
  export default {
    props: ["event"],
    data() {
      return {
        localEvent: { ...this.event }, // Copia para evitar mutar las props
      };
    },
  };
  </script>
  
  <style scoped>
  .event-card {
    background: white;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    width: 180px; /* Tamaño más compacto */
    height: 120px; /* Reduce la altura */
    text-align: left;
    transition: transform 0.2s;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; /* Centra los elementos */
  }
  .event-card:hover {
    transform: scale(1.05);
  }
  h3 {
    margin-bottom: 5px;
    color: #333;
    font-size: 14px;
    text-align: center; /* Centra el título */
  }
  p {
    margin: 2px 0;
    font-size: 11px; /* Reduce tamaño del texto */
    color: #555;
    text-align: center; /* Centra el texto */
  }
  </style>