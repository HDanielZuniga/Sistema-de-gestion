<template>
  <div class="login-container">
    <div class="login-box">
      <!-- Lado Izquierdo: Imagen + Frase -->
      <div class="login-left">
        <img src="/desert.jpg" alt="Login Illustration" />
        <div class="overlay-text">
          <h2>Capturando Momentos,<br />Creando Memorias</h2>
        </div>
      </div>

      <!-- Lado Derecho: Formulario de Login -->
      <div class="login-right">
        <h1>Login</h1>
        <p class="subtitle">
          No tienes cuenta?
          <router-link to="/auth/register" style="color: #9a82f4; text-decoration: none;">Registrate </router-link>
        </p>
        <p v-if="error" style="color: red; margin-top: 10px;">{{ error }}</p>

        <form @submit.prevent="submitForm">
          <input type="email" placeholder="Email" v-model="email" required />
          <input type="password" placeholder="Ingresa tu contraseña" v-model="password" required />
          <button class="submit-btn" type="submit">Login</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "LoginView",
  data() {
    return {
      email: "",
      password: "",
      error: null
    };
  },
  methods: {
    async submitForm() {
      try {
        const response = await axios.post("http://localhost:5000/api/auth/login", {
          email: this.email,
          password: this.password
        });

        const token = response.data.token;
        localStorage.setItem("authToken", token);

        //  Redirección segura con recarga
        this.$router.push("/").then(() => {
          window.location.reload();
        });

      } catch (error) {
        this.error = "Credenciales incorrectas o error del servidor.";
        console.error("Error de login:", error);
        alert(this.error);
      }
    }
  }
};
</script>

<style scoped>
/*  Ocupa toda la pantalla SIN scroll */
html, body {
  margin: 0;
  padding: 0;
  overflow: hidden;
}

/*  Fondo principal y contenedor */
.login-container {
  background-color: #2d2a3e;
  position: fixed;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.login-box {
  display: flex;
  width: 900px;
  background-color: #1e1c2e;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.3);
}

.login-left {
  width: 50%;
  position: relative;
}

.login-left img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.overlay-text {
  position: absolute;
  bottom: 40px;
  left: 30px;
  color: #fff;
  font-size: 20px;
  font-weight: 500;
}

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
