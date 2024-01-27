import React from "react";
import { Link } from "react-router-dom";

const Nav = (props) => {
  return (
    <nav>
      <div>
        <ul className="holder">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/resoluciones">Resoluciones</Link>
          </li>
          <li>
            <Link to="/novedades">Novedades</Link>
          </li>
          <li>
            <Link to="/contactos">Contactos</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
