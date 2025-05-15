<template>
  <div class="event-card" @click="toggleExpand">
    <div v-if="!isExpanded">
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

<script setup>
import { useEventCard } from '@/controllers/useEventCard'
import { defineProps, defineEmits } from 'vue'

const props = defineProps(['event'])
const emit = defineEmits(['update-event'])

const { localEvent, isExpanded, toggleExpand, saveChanges } = useEventCard(props, emit)
</script>

<style scoped>
/* ... mismo estilo que ya tienes ... */
</style>
