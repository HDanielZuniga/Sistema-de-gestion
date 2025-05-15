// src/controllers/useEventos.js
import { ref } from 'vue'

export function useEventos() {
  const eventos = ref([
    { id: 1, name: 'Conferencia Vue', date: '2025-06-01', time: '10:00', location: 'CDMX', guests: 150 },
    { id: 2, name: 'Charla Tech', date: '2025-06-05', time: '16:00', location: 'Bogotá', guests: 80 },
    { id: 3, name: 'Meetup Devs', date: '2025-06-10', time: '18:30', location: 'Medellín', guests: 40 }
  ])

  const actualizarEvento = (updated) => {
    const index = eventos.value.findIndex(e => e.id === updated.id)
    if (index !== -1) eventos.value[index] = updated
  }

  return { eventos, actualizarEvento }
}
