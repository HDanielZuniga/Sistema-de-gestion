<template>
  <div class="event-card" @click="toggleExpand">
    <div v-if="!isExpanded" class="card-content">
      <h3 class="event-title">{{ localEvent.name }}</h3>
      <p>📅 Fecha: {{ localEvent.date }}</p>
      <p>⏰ Hora: {{ localEvent.time }}</p>
      <p>📍 Lugar: {{ localEvent.location }}</p>
      <p>👥 Invitados: {{ localEvent.guests }}</p>
    </div>
    <div v-else class="card-edit">
      <input v-model="localEvent.name" placeholder="Nombre del evento" />
      <input v-model="localEvent.date" type="date" />
      <input v-model="localEvent.time" type="time" />
      <input v-model="localEvent.location" placeholder="Lugar" />
      <input v-model="localEvent.guests" type="number" placeholder="Número de invitados" />
      <button @click.stop="saveChanges">Guardar</button>
    </div>
  </div>
</template>

<script setup>
import { useEventCard } from '@/controllers/useEventCard'
import { defineProps, defineEmits } from 'vue'

const props = defineProps(['event'])
const emit = defineEmits(['update-event'])

const { localEvent, isExpanded, toggleExpand, saveChanges } = useEventCard(props, emit)
</script>

<style scoped>
.event-card {
  background: #ffffff;
  border: 1px solid #ddd;
  border-radius: 12px;
  padding: 20px;
  margin: 16px auto;
  max-width: 400px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
  cursor: pointer;
}

/* Efecto hover */
.event-card:hover {
  border-color: #4a90e2;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
  transform: scale(1.02);
  background-color: #f5faff;
}

.event-title {
  font-size: 1.4rem;
  font-weight: bold;
  margin-bottom: 12px;
  color: #333;
}

.card-edit input {
  display: block;
  width: 100%;
  padding: 10px;
  margin-bottom: 12px;
  font-size: 0.95rem;
  border: 1px solid #ccc;
  border-radius: 8px;
}

.card-edit button {
  background-color: #4a90e2;
  color: white;
  border: none;
  padding: 10px 16px;
  font-size: 0.95rem;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.card-edit button:hover {
  background-color: #357ab8;
}
</style>
