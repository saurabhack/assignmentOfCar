import { useState } from "react";

function Filter({ onFilterChange }) {
  const [brand, setBrand] = useState("");
  const [price, setPrice] = useState("");
  const [fuel, setFuel] = useState("");
  const [seating, setSeating] = useState("");

  const handleFilterChange = () => {
    onFilterChange({ brand, price, fuel, seating });
  };
  return (
    <div className="bg-black text-white border rounded-lg shadow-md p-4 space-y-4 ">
      <h2 className="text-lg font-semibold mb-2 text-gray-800 text-white">Filter Cars</h2>

      {/* Brand Filter */}
      <div className="text-white">
        <label className="block text-sm font-medium text-gray-700 text-white  mb-1">Brand</label>
        <select
          value={brand}
          onChange={(e) => {
            setBrand(e.target.value);
            handleFilterChange();
          }}
          className="w-full border rounded px-3 py-2"
        >
          <option value="" className="text-black" >All Brands</option>
          <option value="Toyota" className="text-black">Toyota</option>
          <option value="Honda" className="text-black">Honda</option>
          <option value="Tata" className="text-black">Tata</option>
          <option value="Hyundai" className="text-black">Hyundai</option>
        </select>
      </div>

      {/* Price Filter */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1 text-white">Price</label>
        <select
          value={price}
          onChange={(e) => {
            setPrice(e.target.value);
            handleFilterChange();
          }}
          className="w-full border rounded px-3 py-2"
        >
          <option className="text-black" value="">All Prices</option>
          <option className="text-black" value="0-500000">Below ₹5 Lakhs</option>
          <option className="text-black" value="500000-1000000">₹5L - ₹10L</option>
          <option className="text-black" value="1000000-2000000">₹10L - ₹20L</option>
          <option className="text-black" value="2000000">Above ₹20L</option>
        </select>
      </div>

      {/* Fuel Type Filter */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1 text-white">Fuel Type</label>
        <select
          value={fuel}
          onChange={(e) => {
            setFuel(e.target.value);
            handleFilterChange();
          }}
          className="w-full border rounded px-3 py-2"
        >
          <option value="" className="text-black">All Fuel Types</option>
          <option value="Petrol" className="text-black">Petrol</option>
          <option value="Diesel" className="text-black">Diesel</option>
          <option value="Electric" className="text-black">Electric</option>
          <option value="Hybrid" className="text-black">Hybrid</option>
        </select>
      </div>

      {/* Seating Capacity Filter */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1 text-white">Seating Capacity</label>
        <select
          value={seating}
          onChange={(e) => {
            setSeating(e.target.value);
            handleFilterChange();
          }}
          className="w-full border rounded px-3 py-2"
        >
          <option value=""className="text-black">All</option>
          <option value="2" className="text-black">2-Seater</option>
          <option value="4" className="text-black">4-Seater</option>
          <option value="5" className="text-black">5-Seater</option>
          <option value="7" className="text-black">7-Seater</option>
        </select>
      </div>
    </div>
  );
}

export default Filter;
