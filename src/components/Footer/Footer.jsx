import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row"></div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} GLOBANT ACAMICA INC | Todos los
            derechos reservados | Terminos de servicios | Privacidad
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
