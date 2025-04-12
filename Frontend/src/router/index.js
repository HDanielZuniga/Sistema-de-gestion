import { createRouter, createWebHistory } from "vue-router";
import MainLayout from "@/layouts/MainLayout.vue";
import LoginView from "@/views/LoginView.vue";
import VistaUser from "@/views/VistaUser.vue";
import VistaDos from "@/views/VistaDos.vue";

// Se definen dos grupos de rutas: públicas (login) y protegidas (dentro del layout)
const routes = [
  {
    path: "/login",
    name: "Login",
    component: LoginView,
  },
  {
    path: "/",
    component: MainLayout,
    meta: { requiresAuth: true },
    children: [
      {
        path: "", // Ruta por defecto dentro del layout
        name: "VistaUser",
        component: VistaUser,
      },
      {
        path: "vistados", // Nota: sin barra inicial para rutas hijas
        name: "VistaDos",
        component: VistaDos,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// Guardia global de rutas: Si la ruta requiere autenticación, se verifica la existencia de un token.
router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
  const isAuthenticated = !!localStorage.getItem("authToken"); // Se deberá reemplazar por una validación real
  if (requiresAuth && !isAuthenticated) {
    next({ name: "Login" });
  } else {
    next();
  }
});

export default router;
