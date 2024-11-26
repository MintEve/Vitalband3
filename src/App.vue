<template>
  <div id="app">
    <Navbar />
    <router-view /> <!-- Renderiza la página según la URL -->
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import HomeView from './views/HomeView.vue'
</script>

<style>
/* Estilos globales si deseas agregar */
</style>
