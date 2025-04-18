import React, { useState, useEffect, useContext } from "react";
import { ApiContext } from "../contextApi/carApi"; // Import context to get car data

function Search() {
  const [searchQuery, setSearchQuery] = useState(""); // State for search query
  const { carData, searchCars, filteredCars } = useContext(ApiContext); // Using context
  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query); 
    searchCars(query); 
  };
  const displayCars = searchQuery && filteredCars.length === 0 ? (
    <p className="text-center text-gray-600">No cars found.</p>
  ) : (
    filteredCars.map((car) => (
      <div
        key={car.id}
        className="bg-white shadow-md rounded-2xl overflow-hidden mb-4"
      >
        <img
          src={car.image}
          alt={`${car.brand} ${car.model}`}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h2 className="text-xl font-semibold">{car.brand} {car.model}</h2>
          <p className="text-gray-600 mb-2">${car.price.toLocaleString()}</p>
          <p className="text-sm text-gray-500">Fuel: {car.fuel}</p>
          <p className="text-sm text-gray-500">Seats: {car.seats}</p>
        </div>
      </div>
    ))
  );

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center">Search Cars</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {displayCars}
      </div>
    </div>
  );
}

export default Search;
