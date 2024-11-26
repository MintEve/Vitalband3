<template>
  <div class="about-page">
    <!-- Encabezado principal -->
    <header class="about-header">
      <h1>VitalBand: Tu compañero de salud inteligente</h1>
      <p>En VitalBand, creemos que la salud es un viaje, no un destino. Por eso, hemos creado una tecnología  
        que te acompaña en cada paso, brindándote información valiosa sobre tu cuerpo para que tomes las mejores decisiones.</p>
    </header>

    <!-- Sección de características dentro de una card con superposición -->
    <section class="features-card">
      <div class="card">
        <header class="features-header">
          <h2>Vitalband</h2>
          <p>Innovación tecnológica para monitorear tu salud en tiempo real.</p>
        </header>

        <div class="features-section">
          <!-- Característica 1 -->
          <div class="feature">
            <div class="feature-text">
              <h3>Personaliza tu monitoreo</h3>
              <p>
                Diseña alertas y reportes personalizados para adaptarlos a tus necesidades. Con 
                VitalBrace, tú tienes el control total de lo que deseas priorizar.
              </p>
              <a href="#" class="learn-more">Aprender más →</a>
            </div>
            <div class="feature-image">
              <div class="image-placeholder"></div>
            </div>
          </div>

          <!-- Característica 2 -->
          <div class="feature reverse">
            <div class="feature-text">
              <h3>Inversión en tu salud</h3>
              <p>
                Gracias a nuestras capacidades avanzadas, VitalBrace te guía en el manejo de 
                tu bienestar general con métricas claras y datos confiables.
              </p>
              <a href="#" class="learn-more">Aprender más →</a>
            </div>
            <div class="feature-image">
              <div class="image-placeholder"></div>
            </div>
          </div>

          <div class="feature">
            <div class="feature-text">
              <h3>Personaliza tu monitoreo</h3>
              <p>
                Diseña alertas y reportes personalizados para adaptarlos a tus necesidades. Con 
                VitalBrace, tú tienes el control total de lo que deseas priorizar.
              </p>
              <a href="#" class="learn-more">Aprender más →</a>
            </div>
            <div class="feature-image">
              <div class="image-placeholder"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  </div>


  
</template>

<script>
export default {
  name: "AboutView",
};
</script>

<style scoped>
/* Estilos generales */
.about-page {
  font-family: 'Arial', sans-serif;
  color: #333;
  background-color: #f9f9f9;
  position: relative;
  margin-top: 2ch;
}

/* Encabezado */
.about-header {
  text-align: center;
  padding: 11rem 1rem;
  background-color: #393849;
  color: white;
  position: relative; /* Permite que los elementos hijos se posicionen con respecto al encabezado */
  z-index: 1; /* Asegura que el encabezado esté detrás de la tarjeta */
}

.about-header h1 {
  font-size: 2.5rem;
  font-weight: bold;
}

.about-header p {
  margin-top: 0.5rem;
  font-size: 1.2rem;
  color: #ccc;
}

.app-buttons {
  margin-top: 1rem;
}

.store-button {
  padding: 0.5rem 1.5rem;
  margin: 0 0.5rem;
  background-color: #007BFF;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;
}

.store-button:hover {
  background-color: #0056b3;
}

/* Card centrada con superposición */
.features-card {
  display: flex;
  justify-content: center;
  margin-top: -6rem; /* Superposición sobre el encabezado */
  z-index: 2; /* Asegura que la tarjeta esté sobre el encabezado */
  position: relative;
}

.card {
  background: white;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  max-width: 900px;
  width: 90%;
}

/* Título de características */
.features-header {
  text-align: center;
  margin-bottom: 2rem;
}

.features-header h2 {
  font-size: 2rem;
  color: #3e415a;
}

.features-header p {
  margin-top: 0.5rem;
  font-size: 1rem;
  color: #555;
}

/* Estilo de las secciones */
.features-section {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.feature {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.feature.reverse {
  flex-direction: row-reverse;
}

.feature-text {
  flex: 1;
}

.feature-text h3 {
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 0.5rem;
}

.feature-text p {
  font-size: 1rem;
  color: #666;
  margin-bottom: 1rem;
}

.learn-more {
  font-size: 1rem;
  color: #007BFF;
  text-decoration: none;
  font-weight: bold;
}

.learn-more:hover {
  text-decoration: underline;
}

/* Marcador de posición de imagen */
.feature-image {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.image-placeholder {
  width: 100%;
  max-width: 300px;
  height: 200px;
  background-color: #e0e0e0;
  border-radius: 10px;
}
</style>
