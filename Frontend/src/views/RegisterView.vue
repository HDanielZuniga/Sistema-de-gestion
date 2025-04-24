<template>
    <div class="register-container">
      <div class="register-box">
        <!-- Lado Izquierdo: Imagen + Frase -->
        <div class="register-left">
          <img src="/register.jpg" alt="Register Illustration" />
          <div class="overlay-text">
            <h2>Join Us,<br />Start Creating</h2>
          </div>
          <button class="back-btn" @click="goBack">Back to Login</button>
        </div>
  
        <!-- Lado Derecho: Formulario de Registro -->
        <div class="register-right">
          <h1>Register</h1>
          <p class="subtitle">Already have an account? <a href="/login">Login here</a></p>
          <p v-if="error" style="color: red; margin-top: 10px;">{{ error }}</p>
  
          <form @submit.prevent="submitForm">
            <input type="text" placeholder="First Name" v-model="firstName" required />
            <input type="text" placeholder="Last Name" v-model="lastName" required />
            <input type="email" placeholder="Email" v-model="email" required />
            <input type="password" placeholder="Password" v-model="password" required />
  
            <button class="submit-btn" type="submit">Register</button>
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
          this.$router.push("/login");
        } catch (error) {
          this.error = "Registro fallido. Verifica los datos o si ya existe el usuario.";
          console.error("Error de registro:", error);
          alert(this.error);
        }
      },
      goBack() {
        this.$router.push("/login");
      }
    }
  };
  </script>
  
  <style scoped>
  .register-container {
    background-color: #2d2a3e;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
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
  }
  
  .overlay-text {
    position: absolute;
    bottom: 40px;
    left: 30px;
    color: #fff;
    font-size: 20px;
    font-weight: 500;
  }
  
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
  