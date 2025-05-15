// src/controllers/useEventCard.js
import { ref } from 'vue'

export function useEventCard(props, emit) {
  const localEvent = ref({ ...props.event })
  const isExpanded = ref(false)

  const toggleExpand = () => {
    isExpanded.value = !isExpanded.value
  }

  const saveChanges = () => {
    emit('update-event', localEvent.value)
    isExpanded.value = false
  }

  return {
    localEvent,
    isExpanded,
    toggleExpand,
    saveChanges
  }
}
