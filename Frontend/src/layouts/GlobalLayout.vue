<template>
    <div class="global-layout">
      <nav class="navbar">
        <div class="nav-links">
    <!--  <router-link to="/" class="nav-link">Inicio</router-link>
          <router-link to="/vistauser" class="nav-link">Vista User</router-link
          <router-link to="/vistados" class="nav-link">Vista Dos</router-link> -->
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
    background-color: #2d2a3e;
    min-height: 100vh;
    font-family: 'Poppins', sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    box-sizing: border-box;
  }
  
  /*  Navbar: ahora separado en links + botón */
  .navbar {
    display: flex;
    justify-content: space-between; /* separa los links y el botón */
    align-items: center;
    width: 100%;
    margin-bottom: 20px;
  }
  
  .nav-links {
    display: flex;
    gap: 15px;
  }
  
  .nav-link {
    background: none;
    border: none;
    color: #9a82f4;
    font-weight: bold;
    text-decoration: none;
    cursor: pointer;
    transition: 0.3s;
  }
  
  .nav-link:hover {
    text-decoration: underline;
  }
  
  .logout-btn {
    background-color: #9a82f4;
    color: white;
    border: none;
    padding: 10px 15px;
    border-radius: 8px;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .logout-btn:hover {
    background-color: #7d65d7;
  }
  
  .main-box {
    background-color: #1e1c2e;
    padding: 40px;
    border-radius: 16px;
    box-shadow: none;
    width: 100%;
    max-width: 1200px;
  }
  
  .content-wrapper {
    color: rgb(0, 0, 0);
  }
  </style>
  
  <style>
  html, body {
    margin: 0;
    padding: 0;
    background-color: #2d2a3e;
  }
  </style>
  