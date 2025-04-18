import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ApiContext } from '../contextApi/carApi';

const View = () => {
  const { id } = useParams();
  const { carData } = useContext(ApiContext);

  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(true);

  
  useEffect(() => {
    const selectedCar = carData.find(car => car.id === parseInt(id));
    setCar(selectedCar);
    setLoading(false);
  }, [carData, id]);

  if (loading) {
    return <div className="text-center text-xl text-gray-600">Loading...</div>;
  }

  if (!car) {
    return <div className="text-center text-xl text-red-500">Car not found</div>;
  }

  return (
    <div className="max-w-7xl mx-auto p-6 sm:p-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        <div className="overflow-hidden rounded-lg shadow-lg">
          <img className="w-full h-96 object-cover" src={car.image} alt={`${car.brand} ${car.model}`} />
        </div>

        <div className="space-y-4">
          <h2 className="text-4xl font-bold text-gray-800">{car.brand} {car.model}</h2>
          <p className="text-xl text-gray-600">Price: <span className="font-semibold text-gray-800">${car.price}</span></p>
          <p className="text-xl text-gray-600">Fuel: <span className="font-semibold text-gray-800">{car.fuel}</span></p>
          <p className="text-xl text-gray-600">Seats: <span className="font-semibold text-gray-800">{car.seats}</span></p>
          <p className="text-lg text-gray-600">Description:</p>
          <p className="text-lg text-gray-700">{car.description}</p>
          <div className="mt-6">
            <a href="/" className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
              Back to Cars
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default View;
