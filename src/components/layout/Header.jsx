import React from "react";
import "../../styles/Header.css";

const Header = (props) => {
  return (
    <header>
      <div className="holder">
        <img src="./img/logoSad.jpg" className="logo" />
        <h1>Mis Resoluciones</h1>
      </div>
    </header>
  );
};

export default Header;
