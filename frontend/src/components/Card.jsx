import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { ApiContext } from "../contextApi/carApi"
import { Link } from "react-router-dom";
function Card() {
  const {carData,wishList}=useContext(ApiContext)
  console.log("car data is here==",carData)
  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {carData.map((car, index) => (
        <div
          key={index}
          className="bg-white shadow-md cursor-pointer rounded-xl overflow-hidden transition-transform hover:scale-105"
        >
          <img
            src={car.image}
            alt={car.model}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-lg font-semibold text-gray-700">
              {car.brand} - {car.model}
            </h2>
            <p className="text-sm text-gray-500">Fuel: {car.fuel}</p>
            <p className="text-sm text-gray-500">
              Seating: {car.seating_capacity}
            </p>
            <p className="text-red-500 font-bold mt-2">₹ {car.price}</p>
            <div className="flex justify-between mt-4">
             <Link to={`/views/${car.id}`}>
              <button className="px-4 py-2 text-sm bg-blue-500 text-white rounded hover:bg-blue-600">
                View Details
              </button>
              </Link>
              <button onClick={()=>wishList(car.id)}  className="px-4 py-2 text-sm bg-pink-500 text-white rounded hover:bg-pink-600">
                ❤️ Wishlist
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
