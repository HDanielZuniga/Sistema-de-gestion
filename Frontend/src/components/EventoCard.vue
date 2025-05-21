<template>
  <div class="event-card" @click="$emit('seleccionarEvento', evento)">
    <h3>{{ evento.nombre }}</h3>
    <p>{{ evento.fecha }}</p>
    <p>{{ evento.lugar }}</p>
    <p>{{ evento.cantidad }} personas</p>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps(['evento']);
</script>

<style scoped>
.event-card {
  background: linear-gradient(145deg, #454565, #2b2b3c);
  padding: 1.5rem;
  border-radius: 16px;
  flex: 1 1 45%;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(15, 98, 254, 0.3);
  border: 1px solid transparent;
  transition: transform 0.3s ease;
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
</style>