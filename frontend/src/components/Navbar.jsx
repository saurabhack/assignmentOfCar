import { useContext, useEffect, useState } from "react";
import { FaCar, FaHeart, FaMoon } from "react-icons/fa";
import { ApiContext } from "../contextApi/carApi"; // Import the ApiContext

function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");
  const { wishList, searchCars, filteredCars } = useContext(ApiContext); // Consume ApiContext

  const [total, setTotal] = useState(0);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("wishlist")) || [];
    setTotal(data.length);
  }, [filteredCars]); 

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    searchCars(query); 
  };

  return (
    <div className="flex flex-col md:flex-row bg-black text-white p-4 items-center justify-between w-full">
      {/* Logo */}
      <div className="text-3xl mb-4 md:mb-0 md:text-4xl flex items-center justify-center w-full md:w-[20%]">
        <FaCar />
      </div>

      {/* Search Bar */}
      <div className="flex w-full md:w-[60%] justify-center items-center mb-4 md:mb-0">
        <input
          type="text"
          className="border-2 border-red-300 border-r-0 bg-white text-black h-10 w-3/4 md:w-1/2 px-4"
          placeholder="Search..."
          value={searchQuery} // Controlled input
          onChange={handleSearchChange} // Update the search query
        />
        <button
          className="border-2 border-red-300 border-l-0 h-10 px-4 hover:bg-red-300 hover:text-black transition"
          onClick={() => searchCars(searchQuery)} // Trigger search on button click
        >
          Search
        </button>
      </div>

      {/* Icons */}
      <div className="flex justify-center items-center gap-4 w-full md:w-[20%]">
        <button className="text-2xl md:text-3xl" aria-label="Toggle Dark Mode">
          <FaMoon />
        </button>
        <button
          className="text-2xl md:text-3xl flex items-center gap-1"
          aria-label="Wishlist"
        >
          <FaHeart className="text-red-500" />
          <span className="text-sm font-bold">{total}</span> {/* Dynamic wishlist count */}
        </button>
      </div>
    </div>
  );
}

export default Navbar;
