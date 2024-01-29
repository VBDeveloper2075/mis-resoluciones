import React from "react";

const HomePage = (props) => {
  return (
    <main className="holder">
      <div className="homeimg">
        <img src="./img/reunidos.jpg" alt="reunidos" />
      </div>
      <div className="columnas">
        <div className="bienvenidos">
          <h2>Bienvenidos</h2>
          <p>
            Tenemos el agrado de compartir esta nueva herramienta para descargar
            las resoluciones de Titularidad, MAD y Acrecentamiento, que ya han
            llegado a esta Secretaría de Asuntos Docentes de Tres de Febrero.
          </p>
        </div>
        <div className="nosotros">
          <h2>Nosotros</h2>
          <div className="consultanos">
            <p>Queremos brindarte un servicio de alta calidad y valor.</p>
            <span className="cita">Consultanos</span>
            <span className="autor">consultas@abc.gob.ar</span>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
