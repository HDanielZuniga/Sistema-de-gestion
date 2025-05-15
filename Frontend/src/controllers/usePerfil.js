// src/controllers/usePerfil.js
import { useRouter } from 'vue-router'

export function usePerfil(emit) {
  const router = useRouter()

  function cerrar() {
    if (emit) emit('cerrar')
  }

  function cerrarSesion() {
    router.push('/login')
  }

  return {
    cerrar,
    cerrarSesion
  }
}
