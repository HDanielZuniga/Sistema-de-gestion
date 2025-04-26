<template>
  <GlobalLayout>
    <div class="menu-view">
      <h1 class="title">Gestión De Eventos</h1>
      <EventCard
        v-for="(event, index) in events"
        :key="index"
        :event="event"
        @update-event="updateEvent(index, $event)"
      />
    </div>
  </GlobalLayout>
</template>

<script>
import GlobalLayout from '@/layouts/GlobalLayout.vue'
import EventCard from '@/components/EventCard.vue'

export default {
  name: 'MenuView',
  components: {
    GlobalLayout,
    EventCard,
  },
  data() {
    return {
      events: [
        { name: "Conferencia de trabajo", date: "2025-05-10", time: "10:00", location: "Centro de convenciones", guests: 150 },
        { name: "Festival de música", date: "2025-06-15", time: "18:00", location: "Parque principal", guests: 300 },
        { name: "Cena de gala", date: "2025-07-22", time: "20:00", location: "Hotel Lux", guests: 200 },
        { name: "Reunión empresarial", date: "2025-08-10", time: "09:00", location: "Sala VIP", guests: 50 },
      ]
    }
  },
  methods: {
    updateEvent(index, updatedEvent) {
      this.events[index] = updatedEvent
    }
  }
}
</script>

<style scoped>
.menu-view {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  align-items: flex-start;
}

.title {
  width: 100%;
  text-align: center;
  font-size: 36px;
  font-family: 'Poppins', sans-serif;
  color: #2f3542;
  margin-bottom: 20px;
  font-weight: bold;
}
</style>
