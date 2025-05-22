// src/services/api.js
import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:5000/api' // ← base común para todas las rutas protegidas
})

export default api
