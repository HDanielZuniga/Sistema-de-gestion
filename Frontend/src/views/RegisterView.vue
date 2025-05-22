<template>
  <div class="register-container">
    <div class="register-box">
      <!-- Lado Izquierdo: Imagen + Frase -->
      <div class="register-left">
        <img src="/register.jpg" alt="Register Illustration" />
        <div class="overlay-text">
          <h2>Unete,<br />Captura tus momentos</h2>
        </div>
      </div>

      <!-- Lado Derecho: Formulario de Registro -->
      <div class="register-right">
        <h1>Registrate</h1>
        <p class="subtitle">
          Ya tienes tu cuenta?
          <router-link to="/auth/login" style="color: #9a82f4; text-decoration: none;">Ingresa aqui</router-link>
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
  background-color: #2d2a3e;
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
  background-color: #1e1c2e;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.3);
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
  color: #fff;
  font-size: 20px;
  font-weight: 500;
}

.register-right {
  width: 50%;
  padding: 40px;
  color: #fff;
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

.subtitle a {
  color: #9a82f4;
  text-decoration: none;
}

input {
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
