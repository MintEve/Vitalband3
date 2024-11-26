<template>
    <div class="register-page">
      <!-- Card que contiene el formulario -->
      <div class="register-card">
        <h1>Regístrate</h1>
        <p>Bienvenido, por favor llena el formulario para crear tu cuenta.</p>
  
        <form class="register-form">
          <div class="form-group">
            <label for="name">Nombre Completo</label>
            <input
              type="text"
              id="name"
              placeholder="Ingresa tu nombre completo"
              required
            />
          </div>
  
          <div class="form-group">
            <label for="email">Correo Electrónico</label>
            <input
              type="email"
              id="email"
              placeholder="Ingresa tu correo"
              required
            />
          </div>
  
          <div class="form-group">
            <label for="password">Contraseña</label>
            <input
              type="password"
              id="password"
              placeholder="Ingresa tu contraseña"
              required
            />
          </div>
  
          <div class="form-group">
            <label for="confirm-password">Confirmar Contraseña</label>
            <input
              type="password"
              id="confirm-password"
              placeholder="Confirma tu contraseña"
              required
            />
          </div>
  
          <div class="form-options">
            <label>
              <input type="checkbox" />
              Acepto los términos y condiciones
            </label>
          </div>
  
          <button type="submit" class="btn-register">Crear Cuenta</button>
        </form>
  
        <p class="login-prompt">
            ¿Ya tienes cuenta? <router-link to="/login">Inicia sesión aquí</router-link>
        </p>

      </div>
  
    </div>
  </template>
  
  <script>
  export default {
    name: "RegistroView",
  };
  </script>
  
  <style scoped>
  /* Página principal */
  .register-page {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: linear-gradient(135deg, #eae9ff, #92a2d5);
    color: #333;
    gap: 2rem;
  }
  
  /* Card del formulario */
  .register-card {
    background: white;
    border-radius: 15px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    padding: 2rem;
    max-width: 450px;
    width: 90%;
    text-align: center;
  }
  
  .register-card h1 {
    font-size: 1.8rem;
    margin-bottom: 1rem;
    color: #393849;
    font-family:Verdana;
  }
  
  .register-card p {
    color: #555;
    margin-bottom: 2rem;
    font-family: sans-serif;

  }
  
  /* Formulario */
  .register-form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  
  .form-group label {
    font-size: 0.9rem;
    color: #555;
    margin-bottom: 0.5rem;
    display: block;
    font-family: Helvetica;

  }
  
  .form-group input {
    width: 100%;
    padding: 0.8rem;
    border: 1px solid #ddd;
    border-radius: 8px;
    font-size: 1rem;
    outline: none;
    transition: border 0.3s;
  }
  
  .form-group input:focus {
    border: 1px solid #6a5acd;
  }
  
  .form-options {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 0.9rem;
    color: #555;
    font-family: Helvetica;

  }
  
  .btn-register {
    background: #6a5acd;
    color: white;
    border: none;
    padding: 0.8rem 1rem;
    border-radius: 8px;
    font-size: 1rem;
    cursor: pointer;
    transition: background 0.3s;
  }
  
  .btn-register:hover {
    background: #393849;
  }
  
  .login-prompt a {
    color: #6a5acd;
    text-decoration: none;
    font-weight: bold;
    transition: color 0.3s;
  }
  
  .login-prompt a:hover {
    color: #393849;
  }
  
  
  </style>
  