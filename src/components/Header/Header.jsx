import React from "react";
import "./Header.scss";

function Header({ pais, desde, hasta, precio, tamaño }) {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  };
  let desde1 = new Date(desde).getTime();
  let hasta1 = new Date(hasta).getTime();
  let desdeNormal = new Date(desde1).toLocaleDateString("es-PE", options);
  let hastaNormal = new Date(hasta1).toLocaleDateString("es-PE", options);

  return (
    <div className="Header">
      <h1>Hoteles</h1>
      <h3>el país seleccionado es: {pais} </h3>
      <h3>el precio seleccionado es: {precio} </h3>
      <h3>el tamaño seleccionado es: {tamaño} </h3>
      {desde ? <h3>desde el {desdeNormal}</h3> : ""}
      {hasta ? <h3>hasta el {hastaNormal}</h3> : ""}
    </div>
  );
}
/* In desde, desdeNormal we use conditional diferent to If */
export default Header;
