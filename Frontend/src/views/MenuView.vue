<template>
    <div class="menu-view">
      <h1 class="title">Gestión De Eventos</h1>
      <EventCard
        v-for="(event, index) in events"
        :key="index"
        :event="event"
        @update-event="updateEvent(index, $event)"
      />
    </div>
  </template>
  
  <script>
  import EventCard from "@/components/EventCard.vue";
  
  export default {
    components: { EventCard },
    data() {
      return {
        events: [
          { name: "Conferencia de trabajo", date: "2025-05-10", time: "10:00", location: "Centro de convenciones", guests: 150 },
          { name: "Festival de música", date: "2025-06-15", time: "18:00", location: "Parque principal", guests: 300 },
          { name: "Cena de gala", date: "2025-07-22", time: "20:00", location: "Hotel Lux", guests: 200 },
          { name: "Reunión empresarial", date: "2025-08-10", time: "09:00", location: "Sala VIP", guests: 50 },
        ],
      };
    },
    methods: {
      updateEvent(index, updatedEvent) {
        this.events[index] = updatedEvent; // Actualiza el evento en el arreglo principal
      },
    },
  };
  </script>
  
  <style>
  .menu-view {
    background: #6a0dad; /* Morado sólido */
    min-height: 100vh;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 20px;
  }
  
  /* 🎨 Estilos del título */
  .title {
    width: 100%;
    text-align: center;
    font-size: 36px;
    font-family: 'Poppins', sans-serif; /* Fuente elegante */
    color: white;
    margin-bottom: 20px;
    font-weight: bold;
  }
  </style>