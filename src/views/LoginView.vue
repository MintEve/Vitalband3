<template>
    <div class="login-page">
      <!-- Card que contiene el formulario -->
      <div class="login-card">
        <h1>Inicia sesión</h1>
        <p>Bienvenido de vuelta, por favor ingresa tus credenciales para continuar.</p>
  
        <form class="login-form">
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
  
          <div class="form-options">
            <label>
              <input type="checkbox" />
              Recuérdame
            </label>
            <a href="#" class="forgot-password">¿Olvidaste tu contraseña?</a>
          </div>
  
          <button type="submit" class="btn-login">Iniciar Sesión</button>
        </form>
  
        <p class="signup-prompt">
          ¿No tienes cuenta? <router-link to="/registro">Regístrate aquí</router-link>
        </p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "LoginView",
  };
  </script>
  
  <style scoped>
  /* Página principal */
  .login-page {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 90vh;
    background: linear-gradient(135deg,#eae9ff, #92a2d5);
    color: #333;
    gap: 2rem;
  }
  
  /* Card del formulario */
  .login-card {
    background: white;
    border-radius: 15px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    padding: 2rem;
    max-width: 400px;
    width: 90%;
    text-align: center;
  }
  
  .login-card h1 {
    font-size: 1.8rem;
    margin-bottom: 1rem;
    color: #393849;
    font-family:Verdana;

  }
  
  .login-card p {
    color: #555;
    margin-bottom: 2rem;
    font-family: Helvetica;

  }
  
  /* Formulario */
  .login-form {
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
    font-family: Helvetica;

  }
  
  .form-group input:focus {
    border: 1px solid #6a5acd;
  }
  
  .form-options {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.9rem;
    color: #555;
    font-family: Helvetica;

  }
  
  .forgot-password {
    text-decoration: none;
    color: #6a5acd;
    transition: color 0.3s;
  }
  
  .forgot-password:hover {
    color: #393849;
  }
  
  .btn-login {
    background: #6a5acd;
    color: white;
    border: none;
    padding: 0.8rem 1rem;
    border-radius: 8px;
    font-size: 1rem;
    cursor: pointer;
    transition: background 0.3s;
    font-family: Helvetica;

  }
  
  .btn-login:hover {
    background: #393849;
  }
  
  .signup-prompt a {
    color: #6a5acd;
    text-decoration: none;
    font-weight: bold;
    transition: color 0.3s;
    font-family: Helvetica;

  }
  
  .signup-prompt a:hover {
    color: #393849;
  }
  
  
  </style>
  