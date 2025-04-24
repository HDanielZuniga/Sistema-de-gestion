import { createRouter, createWebHistory } from 'vue-router';
import LoginView from '@/views/LoginView.vue';
import RegisterView from '@/views/RegisterView.vue';
import VistaUser from '@/views/VistaUser.vue';
import VistaDos from '@/views/VistaDos.vue';
import MainLayout from '@/layouts/MainLayout.vue';

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: LoginView,
  },
  {
    path: '/register',
    name: 'Register',
    component: RegisterView,
  },
  {
    path: '/',
    component: MainLayout,
    meta: { requiresAuth: true },
    children: [
      {
        path: '',
        name: 'VistaUser',
        component: VistaUser,
      },
      {
        path: 'vistados',
        name: 'VistaDos',
        component: VistaDos,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// Guardia de autenticación
router.beforeEach((to, from, next) => {
  const token = localStorage.getItem("authToken");
  if (to.meta.requiresAuth && !token) {
    alert("Debes iniciar sesión para acceder.");
    next("/login");
  } else {
    next();
  }
});

export default router;
