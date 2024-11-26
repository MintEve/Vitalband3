<template>
    <nav class="navbar">
      <!-- Logo como imagen -->
      <router-link to="/" class="nav-logo">
        <img src="@/assets/images/logo2.png" alt="Logo VitalBand" class="logo-image" />
      </router-link>
      <div class="nav-links">
        <router-link to="/" style="font-family: Tahoma;">Inicio</router-link>
        <router-link to="/acerca" style="font-family: Tahoma;">Acerca de</router-link>
        <router-link to="/company" style="font-family: Tahoma;">Compañía</router-link>
              <router-link to="/registro" style="font-family: Tahoma;">Registrarse</router-link>
  
        <router-link to="/contact" class="contact-button" style="font-family: Tahoma;">Contáctanos</router-link>
      </div>
    </nav>
  </template>
  
  <style scoped>
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    background-color: #ffffff;
    box-shadow: 0 4px 4px rgba(116, 116, 116, 0.123);
  }
  
  /* Logo */
  .nav-logo {
    display: flex;
    align-items: center;
    text-decoration: none;
  }
  
  .logo-image {
    height: 45px; /* Ajusta la altura según el diseño */
    width: auto; /* Mantiene la proporción del logo */
  }
  
  /* Links de navegación */
  .nav-links {
    display: flex;
    gap: 1rem;
  }
  
  .nav-links a {
    color: #333;
    text-decoration: none;
    padding: 0.5rem;
    transition: color 0.3s;
  }
  
  .nav-links a:hover {
    color: #3b69b8; /* Azul para resaltar */
  }
  
  /* Botón de contacto */
  .contact-button {
    padding: 0.5rem 1rem;
    background-color: #ff8d2f; /* Naranja */
    color: white;
    border-radius: 20px;
    transition: background-color 0.3s;
  }
  
  .contact-button:hover {
    background-color: #ff5900; /* Naranja más oscuro */
    color: #ffffff !important;
  }
  </style>
  