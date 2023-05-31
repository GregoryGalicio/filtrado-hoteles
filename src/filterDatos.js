//import { hotelsData } from "./baseDatosHoteles.js";
//Function 1 Filter by Country
function filterByCountry(country, listFiltered) {
  let hotelFiltered = listFiltered.filter((hotel, index) => {
    if (country === "todos") {
      return true;
    } else {
      return hotel.country.toLowerCase() === country.toLowerCase();
    }
  });
  return hotelFiltered;
}
//Function 2 Filter by Price
function filterByPriceCountry(price, listFiltered) {
  let hotelFiltered = listFiltered.filter((hotel, index) => {
    if (price === "todos") {
      return true;
    } else {
      let levelPriceNumber = price.length;
      return hotel.price === levelPriceNumber;
    }
  });
  return hotelFiltered;
}
//Function 3 Filter by Size
function filterBySizePC(size, listFiltered) {
  let hotelFiltered = listFiltered.filter((hotel, index) => {
    if (size === "todos") {
      return true;
    } else {
      if (size === "pequeño") {
        return hotel.rooms < 11;
      } else if (size === "mediano") {
        return hotel.rooms > 10 && hotel.rooms < 20;
      } else {
        return hotel.rooms > 19;
      }
    }
  });
  return hotelFiltered;
}
//Function 4 Filter by Date From
function filterByDateFrom(dateFrom, listFiltered) {
  let hotelFiltered = listFiltered.filter((hotel, index) => {
    if (dateFrom === "") {
      return true;
    } else {
      let levelDateFrom = new Date(dateFrom).getTime();
      return hotel.availabilityFrom >= levelDateFrom;
    }
  });
  return hotelFiltered;
}
//Function 5 Filter by Date To
function filterByDateTo(dateTo, listFiltered) {
  let hotelFiltered = listFiltered.filter((hotel, index) => {
    if (dateTo === "") {
      return true;
    } else {
      let levelDateTo = new Date(dateTo).getTime() + 100000;
      return hotel.availabilityTo <= levelDateTo;
    }
  });
  return hotelFiltered;
}
//Function 6 Filter by Date,Is the intersection function of function 3 and function 4
function filterByDate1(dateFrom, dateTo, listFiltered) {
  let hotelFiltered = listFiltered
    .filter((hotel, index) => {
      if (dateFrom === "" || dateTo === "") {
        return true;
      } else if (dateTo === "") {
        return true;
      } else if (dateFrom === "") {
        return true;
      } else {
        let levelDateFrom = new Date(dateFrom).getTime();
        return hotel.availabilityFrom >= levelDateFrom;
      }
    })
    .filter((hotel, index) => {
      if (dateTo === "" || dateFrom === "") {
        return true;
      } else if (dateTo === "") {
        return true;
      } else if (dateFrom === "") {
        return true;
      } else {
        let levelDateTo = new Date(dateTo).getTime() + 100000;
        return hotel.availabilityTo <= levelDateTo;
      }
    });
  return hotelFiltered;
}

/*function filterByDate(dateFrom, dateTo, listFiltered) {
  let hotelFiltered = listFiltered.filter((hotel, index) => {
    if (dateFrom === "" || dateTo === "") {
      return true;
    } else {
      let levelDateFrom = new Date(dateFrom).getTime();
      let levelDateTo = new Date(dateTo).getTime() + 100000;
      return (
        hotel.availabilityFrom >= levelDateFrom &&
        hotel.availabilityTo <= levelDateTo
      );
    }
  });
  return hotelFiltered;
}*/

export { filterByCountry };
export { filterByPriceCountry };
export { filterBySizePC };
export { filterByDateFrom };
export { filterByDateTo };
export { filterByDate1 };
