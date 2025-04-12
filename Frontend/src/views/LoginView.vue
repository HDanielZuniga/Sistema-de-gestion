<template>
  <div class="login-container">
    <div class="login-box">
      <!-- Lado Izquierdo: Imagen + Frase -->
      <div class="login-left">
        <img src="/desert.jpg" alt="Login Illustration" />
        <div class="overlay-text">
          <h2>Capturing Moments,<br />Creating Memories</h2>
        </div>
        <button class="back-btn">Back to website</button>
      </div>

      <!-- Lado Derecho: Formulario -->
      <div class="login-right">
        <h1>Create an account</h1>
        <p class="subtitle">Already have an account? <a href="#">Log in</a></p>

        <form @submit.prevent="submitForm">
          <div class="name-group">
            <input type="text" placeholder="First name" v-model="firstName" />
            <input type="text" placeholder="Last name" v-model="lastName" />
          </div>
          <input type="email" placeholder="Email" v-model="email" />
          <input type="password" placeholder="Enter your password" v-model="password" />

          <label class="checkbox">
            <input type="checkbox" v-model="acceptedTerms" />
            <span>I agree to the <a href="#">Terms & Conditions</a></span>
          </label>

          <button class="submit-btn">Create account</button>

          <div class="divider">or register with</div>

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
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      acceptedTerms: false,
    };
  },
  methods: {
    submitForm() {
      console.log("Datos enviados:", {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        password: this.password,
        acceptedTerms: this.acceptedTerms,
      });
    }
  }
};
</script>

<style scoped>
.login-container {
  background-color: #2d2a3e;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
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

.name-group {
  display: flex;
  gap: 10px;
}

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

.divider {
  text-align: center;
  margin: 20px 0;
  color: #aaa;
  font-size: 14px;
}

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
