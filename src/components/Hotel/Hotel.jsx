import React from "react";
import "./Hotel.scss";

const manejarClick = (event) => {
  console.log(event.target);
  alert("El Hotel ha sido reservado");
};

function Hotel({
  photo,
  description,
  name,
  city,
  country,
  rooms,
  price,
  availabilityFrom,
  availabilityTo
}) {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  };
  let availabilityFromNormal = new Date(availabilityFrom).toLocaleDateString(
    "es-PE",
    options
  );
  let availabilityToNormal = new Date(availabilityTo).toLocaleDateString(
    "es-PE",
    options
  );

  return (
    <section className="Hotel">
      <section className="containerImageDescription">
        <div className="image">
          <img width="100%" src={photo} alt={name} />
        </div>
        <h3>{name}</h3>
        <h5>{country}</h5>
        <div className="from">
          <h5>Desde el {availabilityFromNormal}</h5>
        </div>
        <div className="to">
          <h5>Hasta el {availabilityToNormal}</h5>
        </div>
        <div className="description">
          <span>{description}</span>
        </div>
      </section>
      <section>
        <div>
          <span className="cityInformation">
            {city}, {country}
          </span>
        </div>
        <div>
          <span>{rooms} habitaciones</span>
          <span className="price"> Precio: {price}</span>
        </div>
      </section>
      <section onClick={manejarClick} className="btnBook">
        <span className="label">Reservar</span>
      </section>
    </section>
  );
}

export default Hotel;
