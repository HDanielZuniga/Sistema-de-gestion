<template>
    <div class="auth-container">
      <router-view />
    </div>
  </template>
  
  <script>
  export default {
    name: 'AuthView'
  }
  </script>
  
  <style scoped>
  .auth-container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: #f5f5f5;
  }
  </style>