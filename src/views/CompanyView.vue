<template>
    <div class="encabezado">
      <br>
      <br>
      <br>
      <div class="imagen">
        <img src="@/assets/images/hitsolutions2.png" alt="hit solutions" class="imagen-centrada" />
      </div>
      <br>
      <br>
      <div class="imagen-completa">
        <img src="@/assets/images/equipo.png" alt="Imagen completa" class="imagen-ancha" />
      </div>
       <!-- Nuevo contenedor con fondo de color -->
       <div class="contenedor-color">
        <p>Juntos, construimos un futuro más saludable con tecnología.</p>
      </div>
     <!-- Sección con los contenedores pequeños -->
     <section class="features-card">
        <div class="card">
          <header class="features-header">
            <!-- <h2>Descripción</h2>-->
          </header>
          <!-- Contenedores pequeños -->
          <div class="contenedores-pequenos">
            <div class="contenedor">
              <p>Creamos herramientas a tu medida: adaptamos nuestra tecnología a tus necesidades.</p>
            </div>
            <div class="contenedor">
              <p>Simplificamos lo complejo: Convertimos datos en información útil para tomar mejores decisiones.</p>
            </div>
            <div class="contenedor">
              <p>Crecemos contigo: Somos una empresa joven y dinámica que evoluciona junto a ti.</p>
            </div>
          </div>
        </div>
      </section>
      <br>
      <br>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CompanyView',
  };
  </script>
  
  <style scoped>
  /* Contenedor general */
  .encabezado {
    text-align: center; /* Centra todo el contenido dentro del encabezado */
  }
  
  /* Contenedor específico HIT SOLUTIONS */
  .imagen {
    display: flex; /* Uso de flexbox */
    justify-content: center; /* Centra horizontalmente */
    align-items: center; /* Centra verticalmente si es necesario */
    width: 100%; /* Ocupa todo el ancho disponible */
  }
  
  /* Estilo de la imagen HIT SOLUTIONS*/
  .imagen-centrada {
    max-width: 50%; /* La imagen ocupará como máximo el 50% del ancho del contenedor */
    height: auto; /* Mantiene la proporción de la imagen */
  }
  
  /* Estilo para la imagen que ocupa todo el ancho */
  .imagen-completa {
    width: 100%; /* El contenedor ocupa todo el ancho */
  }
  
  .imagen-ancha {
    width: 100%; /* Imagen se ajusta al ancho del contenedor */
    height: 500px; /* Cambia este valor para modificar el largo de la imagen */
    object-fit: cover; /*Mantiene un buen recorte de la imagen si es necesario */
    display: block; /* Evita márgenes extra en la imagen */
  }
  
  
  /* Estilo para el contenedor de color */
  .contenedor-color {
    width: 100%; /* Cubre todo el ancho de la pantalla */
    background-color: #2f2f62; /* Fondo de color (puedes cambiarlo) */
    color: #ffffff; /* Color del texto */
    padding: 2rem; /* Espaciado interno del contenedor */
    height: auto; /* Ajusta automáticamente según el contenido */
    min-height: 300px; /* Cambia este valor para personalizar el largo mínimo */
    box-sizing: border-box; /* Incluye el padding dentro del tamaño total */
    font-size: xx-large;
    font-family: sans-serif;
    font-weight: 500;
    text-align: center; /* Centra el texto dentro del cuadro */
  
  }
  
  
  /* Card principal blanca*/
  .features-card {
    margin-top: 2rem;
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
    position: relative;
  }
  
  /* Contenedores pequeños */
  .contenedores-pequenos {
    display: flex;
    justify-content: space-between;
    gap: 1rem; /* Espacio entre los contenedores */
    margin-top: 2rem;
  }
  
  .contenedor {
    background-color: #f4f4f4; /* Fondo gris claro */
    border-radius: 15px; /* Esquinas redondeadas */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Sombra */
    padding: 1.5rem; /* Espaciado interno */
    flex: 1; /* Los contenedores se expanden proporcionalmente */
    text-align: center;
    font-family: sans-serif;
    font-size: medium;
  }
  
  .contenedor p {
    margin: 0;
    color: #333; /* Color del texto */
  }
  
  
  </style>
  
  