import api from './api'

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
