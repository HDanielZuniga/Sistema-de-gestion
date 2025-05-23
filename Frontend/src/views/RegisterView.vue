<template>
  <div class="register-container">
    <div class="register-box">
      <!-- Lado Izquierdo: Imagen + Frase -->
      <div class="register-left">
        <img src="/Fondo2.jpeg" alt="Register Illustration" />
        <div class="overlay-text">
          <h2>Unete,<br />Captura tus momentos</h2>
        </div>
      </div>

      <!-- Lado Derecho: Formulario de Registro -->
      <div class="register-right">
        <h1>Registrate</h1>
        <p class="subtitle">
          Ya tienes tu cuenta?
          <router-link to="/auth/login" class="enlace-login">Ingresa aquí</router-link>
        </p>
        <p v-if="error" style="color: red; margin-top: 10px;">{{ error }}</p>

       <form @submit.prevent="submitForm">
  <input
    type="text"
    placeholder="Primer nombre"
    v-model="firstName"
    autocomplete="given-name"
    required
  />
  <input
    type="text"
    placeholder="Segundo nombre"
    v-model="lastName"
    autocomplete="family-name"
    required
  />
  <input
    type="email"
    placeholder="Email"
    v-model="email"
    autocomplete="email"
    required
  />
  <input
    type="password"
    placeholder="Contraseña"
    v-model="password"
    autocomplete="new-password"
    required
  />
  <button class="submit-btn" type="submit">Registrate</button>
</form>

      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "RegisterView",
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      error: null
    };
  },
  methods: {
    async submitForm() {
      try {
        await axios.post("http://localhost:5000/api/auth/register", {
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email,
          password: this.password
        });

        alert("Usuario registrado exitosamente.");
        this.$router.push("/auth/login");
      } catch (error) {
        this.error = "Registro fallido. Verifica los datos o si ya existe el usuario.";
        console.error("Error de registro:", error);
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

.register-container {
  background-color: #1e1e2f;
  position: fixed;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.register-box {
  display: flex;
  width: 900px;
  background-color: #2c2c3e;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 12px 24px rgba(15, 98, 254, 0.3);
}

.register-left {
  width: 50%;
  position: relative;
}

.register-left img {
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

.register-right {
  width: 50%;
  padding: 40px;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.register-right h1 {
  font-size: 28px;
  margin-bottom: 10px;
}

.subtitle {
  font-size: 14px;
  margin-bottom: 25px;
  color: #aaa;
}

/* Enlace con color de paleta unificada */
.enlace-login {
  color: #0f62fe;
  text-decoration: none;
  font-weight: 600;
}

.enlace-login:hover {
  text-decoration: underline;
  color: #0353e9;
}

input {
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
  color: #fff;
  margin-top: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.submit-btn:hover {
  background-color: #0353e9;
}
</style>
