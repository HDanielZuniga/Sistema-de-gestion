import api from './api'

export const obtenerPerfil = async () => {
  const token = localStorage.getItem('authToken')

  try {
    const response = await api.get('/auth/me', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    return response.data
  } catch (error) {
    console.error('Error obteniendo el perfil:', error)
    throw error
  }
}
