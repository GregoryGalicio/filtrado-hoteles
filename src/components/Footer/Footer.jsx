import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="main-footer">
        <hr />
        <p >
          &copy;{new Date().getFullYear()} GLOBANT ACAMICA INC Design by Gregory
          Galicio | Todos los derechos reservados | Terminos de servicios |
          Privacidad
        </p>
    </div>
  );
};

export default Footer;
