import { createRouter, createWebHistory } from 'vue-router'

// Vistas públicas (Login/Register)
import AuthView from '@/views/AuthView.vue'
import LoginView from '@/views/LoginView.vue'
import RegisterView from '@/views/RegisterView.vue'

// Layout y vistas protegidas
import MainLayout from '@/layouts/MainLayout.vue'
import MenuView from '@/views/MenuView.vue'

const routes = [
  {
    path: '/',
    redirect: '/auth/login' // Vista principal redirige al login
  },
  {
    path: '/auth',
    component: AuthView,
    children: [
      {
        path: 'login',
        name: 'Login',
        component: LoginView,
        meta: { requiresGuest: true }
      },
      {
        path: 'register',
        name: 'Register',
        component: RegisterView,
        meta: { requiresGuest: true }
      }
    ]
  },
  {
    path: '/app',
    component: MainLayout,
    meta: { requiresAuth: true },
    children: [
      {
        path: '',
        name: 'Menu',
        component: MenuView
      }
    ]
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/auth/login' // Redirige rutas no encontradas al login
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// Verifica si hay token en localStorage
function isAuthenticated() {
  return !!localStorage.getItem('authToken')
}

// Protección de rutas
router.beforeEach((to, from, next) => {
  const auth = isAuthenticated()

  if (to.meta.requiresAuth && !auth) {
    next('/auth/login')
  } else if (to.meta.requiresGuest && auth) {
    next('/app')
  } else {
    next()
  }
})

export default router

