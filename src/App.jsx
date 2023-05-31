import React, { useState } from "react";
import "./styles.css";
import Hoteles from "./components/Hoteles/Hoteles";
import Filtros from "./components/Filtros/Filtros";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { hotelsData } from "./baseDatosHoteles.js";
import {
  filterByCountry,
  filterByPriceCountry,
  filterBySizePC,
  //filterByDateFrom,ss
  //filterByDateTo,
  filterByDate1
  //filterByDate
} from "./filterDatos.js";
//import { filterByPriceCountry } from "./filterDatos.js";
//import { filterBySizePC } from "./filterDatos.js";
//import { filterByDateFrom } from "./filterDatos.js";
//import { filterByDateTo } from "./filterDatos.js";
//It is not neccesary import individually , You can import all in one

export default function App() {
  const [country, setCountry] = useState("todos");
  const [size, setSize] = useState("todos");
  const [price, setPrice] = useState("todos");
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");
  //const [hotelsData,setHotelsData]= useState(true);
  //const [hotelsDataFilter, setHotelsDataFilter] = useState({ hotelsData });
  //const [hotelsDataFilter,setHotelsDataFilter] =useState(hotelsData);
  /*start the filtration process*/
  /*const filter1 = {filterByCountry};
  const filter2 = {filterByPriceCountry};
  const filter3 = {filterBySizePC};
  It is no longer necessary to declare them, the function is pulled from the front with import*/

  let hotelsDataFilter = hotelsData;
  hotelsDataFilter = filterByCountry(country, hotelsDataFilter);
  hotelsDataFilter = filterByPriceCountry(price, hotelsDataFilter);
  hotelsDataFilter = filterBySizePC(size, hotelsDataFilter);
  //hotelsDataFilter = filterByDateFrom(dateFrom, hotelsDataFilter);
  //hotelsDataFilter = filterByDateTo(dateTo, hotelsDataFilter);
  //hotelsDataFilter = filterByDate(dateTo, dateFrom, hotelsDataFilter);
  hotelsDataFilter = filterByDate1(dateFrom, dateTo, hotelsDataFilter);
  //setHotelsDataFilter(hotelsDataFilters);

  /*end the filtration process*/

  return (
    <div className="App">
      <Header
        pais={country}
        desde={dateFrom}
        hasta={dateTo}
        precio={price}
        tamaño={size}
      />
      <Filtros
        country={country}
        size={size}
        price={price}
        dateFrom={dateFrom}
        dateTo={dateTo}
        setCountry={setCountry}
        setSize={setSize}
        setPrice={setPrice}
        setDateFrom={setDateFrom}
        setDateTo={setDateTo}
        //setHotelsDataFilter={setHotelsDataFilter}
      />
      <Hoteles listData={hotelsDataFilter} />
      <Footer />
    </div>
  );
}

/*El nombre de la propiedad puede ser cualquiera por eso para el Header y filtro envio pais y country
pero en el componente a recibir debe ser con el mismo nombre y a ambos se les pasa el estado {country}*/
