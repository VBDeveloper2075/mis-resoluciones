import React from "react";

const HomePage = (props) => {
  return (
    <main class="holder">
      <div>
        <img src="./img/reunidos.jpg" alt="avion" />
      </div>
    <div class="columnas">
      <section class="bienvenidos">
        <h2>Bienvenidos</h2>
        <p>
          Tenemos el agrado de compartir esta nueva herramienta para descargar las resoluciones de Titularidad, MAD y Acrecentamiento, que ya han llegado a esta Secretaría de Asuntos Docentes de Tres de Febrero. 
        </p>
      </section>
      <section class="nosotros">
        <h2>Nosotros</h2>
        <div class="consultanos">
          <p>Queremos brindarte un servicio de alta calidad y valor.</p>
          <span class="cita">Consultanos</span>
          <span class="autor">consultas@abc.gob.ar</span>
        </div>
      </section>
    </div>
  </main>
  );
};

export default HomePage;
