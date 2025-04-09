<template>
  <div class="login-container">
    <div class="login-box">
      <!-- Sección izquierda: imagen de fondo y texto inspirador -->
      <div class="login-left">
        <img src="/desert.jpg" alt="Ilustración de inicio de sesión" />
        <div class="overlay-text">
          <h2>Capturando momentos,<br />creando recuerdos</h2>
        </div>
        <button class="back-btn">Volver al sitio</button>
      </div>

      <!-- Sección derecha: formulario de registro -->
      <div class="login-right">
        <h1>Crear una cuenta</h1>
        <p class="subtitle">¿Ya tienes una cuenta? <a href="#">Inicia sesión</a></p>

        <!-- Formulario de creación de cuenta -->
        <form @submit.prevent="submitForm">
          <!-- Campo de nombres (nombre y apellido) -->
          <div class="name-group">
            <input type="text" placeholder="Nombre" v-model="firstName" />
            <input type="text" placeholder="Apellido" v-model="lastName" />
          </div>

          <!-- Campo de correo y contraseña -->
          <input type="email" placeholder="Correo electrónico" v-model="email" />
          <input type="password" placeholder="Contraseña" v-model="password" />

          <!-- Casilla para aceptar términos -->
          <label class="checkbox">
            <input type="checkbox" v-model="acceptedTerms" />
            <span>Acepto los <a href="#">Términos y condiciones</a></span>
          </label>

          <!-- Botón para enviar el formulario -->
          <button class="submit-btn">Crear cuenta</button>

          <!-- Separador visual -->
          <div class="divider">o regístrate con</div>

          <!-- Botones para registro con Google o Apple -->
          <div class="social-buttons">
            <button class="google">Google</button>
            <button class="apple">Apple</button>
          </div>
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
      // Variables para almacenar datos del formulario
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      acceptedTerms: false,
    };
  },
  methods: {
    // Método que se ejecuta al enviar el formulario
    submitForm() {
      console.log("Datos enviados:", {
        nombre: this.firstName,
        apellido: this.lastName,
        correo: this.email,
        contraseña: this.password,
        aceptoTerminos: this.acceptedTerms,
      });
      // Aquí se podría agregar lógica para validar o enviar a backend
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

/* Agrupación horizontal de nombre y apellido */
.name-group {
  display: flex;
  gap: 10px;
}

/* Estilos base para los inputs */
input[type="text"],
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

/* Estilos para la casilla de términos */
.checkbox {
  display: flex;
  align-items: center;
  margin: 15px 0;
  font-size: 14px;
}

.checkbox input {
  margin-right: 8px;
}

.checkbox a {
  color: #9a82f4;
  text-decoration: none;
}

/* Botón de crear cuenta */
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

/* Línea divisoria */
.divider {
  text-align: center;
  margin: 20px 0;
  color: #aaa;
  font-size: 14px;
}

/* Botones de login alternativo */
.social-buttons {
  display: flex;
  justify-content: space-between;
  gap: 10px;
}

.social-buttons button {
  flex: 1;
  padding: 10px;
  background-color: #2e2b43;
  border: 1px solid #555;
  border-radius: 8px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s;
}

.social-buttons button:hover {
  background-color: #444;
}
</style>
