import { useState } from "react";
import { Search, X,LocateFixedIcon } from "lucide-react";

export default function SearchBar() {
  const [location, setLocation] = useState("");
  const [type, setType] = useState("");
  const [price, setPrice] = useState("");

  return (
    <div className="  bg-white shadow-md rounded-lg p-2 flex flex-col gap-2 md:flex-row md:items-center">
      {/* Location Input */}
      <div className="relative flex-1">
        <input
          type="text"
          placeholder="Enter city or area"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full border rounded-md px-3 py-2 focus:outline-pink-700"
        />
        {location && (
          <button
            onClick={() => setLocation("")}
            className="absolute right-2 top-2 text-gray-400 hover:text-pink-700"
          >
            <X size={18} />
          </button>
        )}
      </div>

      {/* Property Type */}
      <select
        value={type}
        onChange={(e) => setType(e.target.value)}
        className="border rounded-md px-3 py-2 focus:outline-pink-700"
      >
        <option value="">Select Type</option>
        <option value="Hostel">Hostel</option>
        <option value="PG">Flat</option>
        <option value="Lodge">Lodge</option>
      </select>

     

      {/* Search Button */}
      <button className="bg-pink-700 text-white px-4 py-2 rounded-md hover:bg-pink-800 transition">
        <Search size={18} className="inline mr-2" /> Search Rooms
      </button>
    </div>
  );
}
