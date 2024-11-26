<template>
  <div class="home">
    <div class="hero-section">
      <img src="@/assets/images/pulsera.jpg" alt="Imagen de plataforma" class="hero-image">
      <div class="hero-text">
        <h1>VitalBand: Detector de signos vitales</h1>
        <p>Tu compañero de salud 24/7, diseñado para brindarte la tranquilidad de conocer tu cuerpo en profundidad.</p>
        <router-link to="/acerca">
          <button class="full-rounded">
            <span style="color: aliceblue;">Ver más</span>
            <div class="border full-rounded"></div>
          </button>
        </router-link>
      </div>
    </div>

    <div class="features-section">
      <h2>Innovación en Tecnología</h2>
      <div class="features-grid">
        <div class="feature-card" v-for="feature in features" :key="feature.title">
          <h3>{{ feature.title }}</h3>
          <p>{{ feature.description }}</p>
        </div>
      </div>
    </div>

    <div class="cta-section">
      <h2>¿Listo para transformar tu bienestar?</h2>
      <p>Adquiere VitalBand puede ayudarte a vivir de manera más saludable y consciente.</p>
      <button class="cta-button">Cómo adquirir</button>
    </div>

  


  </div>
</template>

<script setup>
const features = [
  { title: "Monitoreo Avanzado", description: "Controla tu frecuencia cardíaca y más en tiempo real." },
  { title: "Alertas Personalizadas", description: "Recibe notificaciones según tu estado de salud." },
  { title: "Temperatura corporal", description: "Monitorea tu temperatura con análisis detallados." },
  { title: "Conectividad", description: "Sincroniza con tus dispositivos para una experiencia completa." }
]
</script>

<style scoped>
/* Estilos de la sección principal */
.home {
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}

.hero-section {
  display: flex;
  align-items: center;
  padding: 2rem;
  background-color: #e1edfa;
  margin-top: 2ch;
}

.hero-image {
  width: 45%;
  border-radius: 8px;
  margin-right: 2rem;
}

.hero-text {
  flex: 1;
}

.hero-text h1 {
  font-size: 2.5rem;
  color: #333;
}

.hero-text p {
  font-size: 1.2rem;
  color: #666;
}

.get-started-button {
  margin-top: 1rem;
  padding: 0.75rem 1.5rem;
  background-color: #ff8d2f;
  color: white;
  border: none;
  border-radius: 20px;
  cursor: pointer;
}

.features-section {
  padding: 3rem;
  text-align: center;
}

.features-section h2 {
  font-size: 2rem;
  color: #3C5A8D;
}

.features-grid {
  display: flex;
  gap: 2rem;
  margin-top: 1.5rem;
}

.feature-card {
  flex: 1;
  padding: 1rem;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.feature-card h3 {
  font-size: 1.2rem;
  color: #38415f;
}

.feature-card p {
  color: #666;
}

.cta-section {
  text-align: center;
  padding: 2rem;
  background-color: #f0f4f8;
}

.cta-section h2 {
  font-size: 1.8rem;
  color: #333;
}

.cta-button {
  margin-top: 1rem;
  padding: 0.75rem 1.5rem;
  background-color: #ff6a00;
  color: white;
  border: none;
  border-radius: 20px;
  cursor: pointer;
}


/* BOTÓN From Uiverse.io by felipesntr */ 
button {
 font-size: 17px;
 position: relative;
 margin: auto;
 padding: 0.5em 2.0em 0.5em 2.9em;
 border: none;
 background: #ff852d;
 transition: all 0.1s linear;
 box-shadow: 0 0.4em 1em rgba(0, 0, 0, 0.1);
}

button:active {
 transform: scale(0.90);
}

button span {
 color: #464646;
}

button .border {
 position: absolute;
 border: 0.15em solid #ff6a00;
 transition: all 0.2s 0.07s linear;
 top: 50%;
 left: 50%;
 width: 8.4em;
 height: 2em;
 transform: translate(-50%, -50%);
}

button:hover .border {
 display: block;
 width: 9.0em;
 height: 2.5em;
}

.full-rounded {
 border-radius: 2em;
}


</style>
