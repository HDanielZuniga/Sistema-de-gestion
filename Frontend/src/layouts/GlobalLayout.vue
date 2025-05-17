<template>
  <div class="global-layout">
    <nav class="navbar">
      <div class="nav-links">
        <!--
        <router-link to="/" class="nav-link">Inicio</router-link>
        <router-link to="/vistauser" class="nav-link">Vista User</router-link>
        <router-link to="/vistados" class="nav-link">Vista Dos</router-link>
        -->
      </div>
      <button @click="logout" class="logout-btn">Cerrar Sesión</button>
    </nav>

    <main class="main-box">
      <div class="content-wrapper">
        <slot />
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'GlobalLayout',
  methods: {
    logout() {
      localStorage.removeItem('authToken');
      this.$router.push('/auth/login').then(() => {
        window.location.reload(); // 🔥 Fuerza la recarga completa
      });
    }
  }
}
</script>

<style scoped>
.global-layout {
  background-color: #f3f2f7;
  min-height: 100vh;
  font-family: 'Poppins', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
}

/* Navbar más estilizada */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 1rem;
  margin-bottom: 20px;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.nav-links {
  display: flex;
  gap: 15px;
}

.nav-link {
  background: none;
  border: none;
  color: #f4828a;
  font-weight: bold;
  text-decoration: none;
  cursor: pointer;
  transition: 0.3s;
}

.nav-link:hover {
  text-decoration: underline;
}

/* Botón de cerrar sesión más visible */
.logout-btn {
  background-color: #e74c3c;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.logout-btn:hover {
  background-color: #c0392b;
}

.main-box {
  background-color: #1e1c2e;
  padding: 40px;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 1200px;
}

.content-wrapper {
  color: #fff;
}
</style>

<style>
html, body {
  margin: 0;
  padding: 0;
  background-color: #2d2a3e;
}
</style>
