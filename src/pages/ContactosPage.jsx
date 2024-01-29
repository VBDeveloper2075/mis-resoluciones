import React from "react";

const ContactosPage = (props) => {
  return (
    <main className="holder">
      <div>
        <h2 className="reso">Contacto Rápido</h2>
        <form action="" method="" className="formulario">
          <p>
            <label for="nombre">Nombre</label>
            <input type="text" name="" />
          </p>
          <p>
            <label for="nombre">Email</label>
            <input type="text" name="" />
          </p>
          <p>
            <label for="nombre">Teléfono</label>
            <input type="text" name="" />
          </p>
          <p>
            <label for="nombre">Mensaje</label>
            <textarea name=""></textarea>
          </p>
          <p>
            <input type="submit" value="Enviar" className="button-enviar" />
          </p>
        </form>
      </div>
      <div className="datos">
        <h2 className="reso">Otras vías de comunicación</h2>
        <p>También puede contactar con nosotros usando los siguientes medios</p>
        <ul>
          <li>Teléfono: 4653-0605</li>
          <li>Email: consultas@abc.gob.ar</li>
          <li>Facebook:</li>
          <li>Twitter:</li>
          <li>Skype:</li>
        </ul>
      </div>
    </main>
  );
};

export default ContactosPage;
