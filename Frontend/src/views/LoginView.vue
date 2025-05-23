<template>
  <div class="login-container">
    <div class="login-box">
      <!-- Lado Izquierdo: Imagen + Frase -->
      <div class="login-left">
        <img src="/Fondo.jpeg" alt="Login Illustration" />
        <div class="overlay-text">
          <h2>Capturando Momentos,<br />Creando Memorias</h2>
        </div>
      </div>

      <!-- Lado Derecho: Formulario de Login -->
      <div class="login-right">
        <h1>Login</h1>
        <p class="subtitle">
          No tienes cuenta?
          <router-link to="/auth/register">Registrate</router-link>
        </p>
        <p v-if="error" style="color: red; margin-top: 10px;">{{ error }}</p>

        <form @submit.prevent="submitForm">
  <input
    type="email"
    placeholder="Email"
    v-model="email"
    autocomplete="email"
    required
  />
  <input
    type="password"
    placeholder="Ingresa tu contraseña"
    v-model="password"
    autocomplete="current-password"
    required
  />
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
html, body {
  margin: 0;
  padding: 0;
  overflow: hidden;
}

.login-container {
  background-color: #1e1e2f;
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
  background-color: #2c2c3e;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 12px 24px rgba(15, 98, 254, 0.3);
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
  color: #ffffff;
  font-size: 20px;
  font-weight: 500;
}

.login-right {
  width: 50%;
  padding: 40px;
  color: #ffffff;
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
  color: #0f62fe;
  text-decoration: none;
  font-weight: 600;
}

.subtitle a:hover {
  color: #0353e9;
  text-decoration: underline;
}

input[type="email"],
input[type="password"] {
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  background-color: #3a3a4f;
  border: 1px solid #444;
  border-radius: 8px;
  color: white;
  font-size: 15px;
}

input::placeholder {
  color: #b0b0b0;
}

.submit-btn {
  width: 100%;
  background-color: #0f62fe;
  border: none;
  padding: 12px;
  border-radius: 8px;
  font-weight: bold;
  color: #ffffff;
  margin-top: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.submit-btn:hover {
  background-color: #0353e9;
}
</style>
