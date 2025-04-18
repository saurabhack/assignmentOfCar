import React, { useEffect, useState } from "react";

const Wishlist = () => {
  const [wishListCars, setWishListCars] = useState([]);

  useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishListCars(storedWishlist);
  }, []);

  const handleRemove = (id) => {
    const updatedWishlist = wishListCars.filter((car) => car.id !== id);
    setWishListCars(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center">My Wishlist</h1>
      {wishListCars.length === 0 ? (
        <p className="text-center text-gray-600">No cars in your wishlist.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {wishListCars.map((car) => (
            <div key={car.id} className="bg-white shadow-md rounded-2xl overflow-hidden">
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
                <button
                  onClick={() => handleRemove(car.id)}
                  className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
