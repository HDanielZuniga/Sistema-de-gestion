import api from './api'

// Crear nuevo evento
export const crearEvento = async (eventoData) => {
  const token = localStorage.getItem('authToken')

  try {
    const response = await api.post('/events', eventoData, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    return response.data
  } catch (error) {
    console.error('❌ Error creando evento:', error)
    if (error.response) {
      console.error('Backend dice:', error.response.data)
    }
    throw error
  }
}

// Obtener todos los eventos
export const getEventos = async () => {
  const token = localStorage.getItem('authToken')

  try {
    const response = await api.get('/events', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    return response.data
  } catch (error) {
    console.error('❌ Error obteniendo eventos:', error)
    if (error.response) {
      console.error('Backend dice:', error.response.data)
    }
    throw error
  }
}

// ✅ Actualizar evento existente
export const actualizarEvento = async (id, datosActualizados) => {
  const token = localStorage.getItem('authToken')

  try {
    const response = await api.put(`/events/${id}`, datosActualizados, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    return response.data
  } catch (error) {
    console.error('❌ Error actualizando evento:', error)
    if (error.response) {
      console.error('Backend dice:', error.response.data)
    }
    throw error
  }
}
