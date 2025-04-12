<template>
  <div class="login-container">
    <div class="login-box">
      <!-- Sección izquierda: imagen de fondo y texto inspirador -->
      <div class="login-left">
        <img src="/desert.jpg" alt="Ilustración de inicio de sesión" />
        <div class="overlay-text">
          <h2>Capturando momentos,<br />creando recuerdos</h2>
        </div>
        <button class="back-btn" @click="goBack">Back to website</button>
      </div>

      <!-- Lado Derecho: Formulario de Login -->
      <div class="login-right">
        <h1>Login</h1>
        <p class="subtitle">Need an account? <a href="#">Register here</a></p>

        <!-- Formulario de login -->
        <form @submit.prevent="submitForm">
          <input type="email" placeholder="Email" v-model="email" required />
          <input type="password" placeholder="Enter your password" v-model="password" required />
          <button class="submit-btn" type="submit">Login</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginView",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    submitForm() {
      // Simulación de autenticación: sustituir esta lógica por la llamada real al backend.
      console.log("Datos enviados:", { email: this.email, password: this.password });
      localStorage.setItem("authToken", "example_token");
      this.$router.push("/");
    },
    goBack() {
      this.$router.push("/");
    }
  }
};
</script>

<style scoped>
/* Contenedor general centrado con fondo oscuro */
.login-container {
  background-color: #2d2a3e;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Caja principal dividida en dos secciones */
.login-box {
  display: flex;
  width: 900px;
  background-color: #1e1c2e;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.3);
}

/* Sección izquierda: imagen y botón */
.login-left {
  width: 50%;
  position: relative;
}

.login-left img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Texto superpuesto en la imagen */
.overlay-text {
  position: absolute;
  bottom: 40px;
  left: 30px;
  color: #fff;
  font-size: 20px;
  font-weight: 500;
}

/* Botón para volver al sitio */
.back-btn {
  position: absolute;
  top: 20px;
  right: 20px;
  background: rgba(255, 255, 255, 0.2);
  border: none;
  padding: 8px 14px;
  color: #fff;
  border-radius: 20px;
  cursor: pointer;
  font-size: 14px;
}

/* Sección derecha: formulario */
.login-right {
  width: 50%;
  padding: 40px;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.login-right h1 {
  font-size: 28px;
  margin-bottom: 10px;
}

.subtitle {
  font-size: 14px;
  margin-bottom: 25px;
  color: #aaa;
}

.subtitle a {
  color: #9a82f4;
  text-decoration: none;
}

input[type="email"],
input[type="password"] {
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  background-color: #2e2b43;
  border: 1px solid #444;
  border-radius: 8px;
  color: white;
  font-size: 15px;
}

.submit-btn {
  width: 100%;
  background-color: #9a82f4;
  border: none;
  padding: 12px;
  border-radius: 8px;
  font-weight: bold;
  color: #fff;
  margin-top: 10px;
  cursor: pointer;
  transition: 0.3s;
}

.submit-btn:hover {
  background-color: #7d65d7;
}
</style>
