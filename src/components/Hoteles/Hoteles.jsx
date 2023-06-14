import React from "react";
import "./Hoteles.scss";
import Hotel from "../Hotel/Hotel";

function Hoteles({ listData }) {
  return listData.length === 0 ? (
    <div className="not-available">
      <h3>LO SENTIMOS, NO HAY HOTELES CON LOS FILTROS SELECCIONADOS</h3>
      <img src="../../../images/not.jpg" alt="not"/>
    </div>
  ) : (
    <div className="Hoteles">
      {listData.map((hotelInfo, index) => {
        return (
          <Hotel
            photo={hotelInfo.photo}
            description={hotelInfo.description}
            name={hotelInfo.name}
            city={hotelInfo.city}
            country={hotelInfo.country}
            rooms={hotelInfo.rooms}
            price={hotelInfo.price}
            availabilityFrom={hotelInfo.availabilityFrom}
            availabilityTo={hotelInfo.availabilityTo}
            key={index}
          />
        );
      })}
    </div>
  );
}
export default Hoteles;
