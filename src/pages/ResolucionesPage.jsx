import React from "react";

const ResolucionesPage = (props) => {
  return (
    <main className="holder">
      <h2 className="reso">Aquí puede ver y descargar sus Resoluciones</h2>
      <input type="number" id="cuilInput" placeholder="Ingrese su CUIL" />
      <div id="cuilMessage" style="display: none">
        Por favor, ingrese un CUIL válido de 11 números.
      </div>
      <div className="button-container">
        <button onclick="validarCUIL()">Enviar</button>
        <button onclick="resetearFormulario()">Reset</button>
      </div>
    </main>
  );
};

export default ResolucionesPage;
