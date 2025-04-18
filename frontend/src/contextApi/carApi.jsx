import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import { href } from "react-router-dom";

export const ApiContext = createContext();

const CarsProvider = ({ children }) => {
  const [carData, setCarData] = useState([]);
  const [filteredCars, setFilteredCars] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);

  // Fetch data from API
  async function fetchAllData() {
    setLoading(true);
    try {
      const response = await axios.get("http://localhost:3000/api/car");
      console.log("Fetched data:", response.data);
      setCarData(response.data.data);
      setFilteredCars(response.data.data);
    } catch (error) {
      console.error("Error fetching car data:", error);
    } finally {
      setLoading(false);
    }
  }

  // Check if car is already in the wishlist
  function isAlready(id) {
    const items = JSON.parse(localStorage.getItem("wishlist")) || [];
    return items.some((item) => item.id === id);
  }

  // Add car to wishlist
  function wishList(id) {
    const selectedCar = carData.find((car) => car.id === id);
    if (!selectedCar) {
      alert("Car not found!");
      return;
    }

    const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

    if (isAlready(id)) {
      alert("This car is already in your wishlist.");
    } else {
      const updatedWishlist = [...wishlist, selectedCar];
      localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
      alert("Successfully added to wishlist!");
    }
  }

  // Search function accepts navigate as a parameter
  function searchCars(query, navigate) {
    setSearchQuery(query);

    if (query.trim() === "") {
      setFilteredCars(carData);
    } else {
      const filtered = carData.filter(
        (car) =>
          car.brand.toLowerCase().includes(query.toLowerCase()) ||
          car.model.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredCars(filtered);
      // window.location.href='/search'
    }

    
    
  }

  useEffect(() => {
    fetchAllData();
  }, []);

  return (
    <ApiContext.Provider
      value={{
        carData,
        filteredCars,
        setCarData,
        fetchAllData,
        wishList,
        searchQuery,
        searchCars, // Call with navigate when needed
        loading,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};

export default CarsProvider;
