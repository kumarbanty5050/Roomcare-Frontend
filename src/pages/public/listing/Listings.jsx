import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import SearchBar from "../../../components/common/SearchBar";

export default function Listings() {
  const [searchParams] = useSearchParams();
  const type = searchParams.get("type") || "boys";

  // Dummy data for each category
  const dummyData = {
    boys: [
      {
        id: 1,
        title: "Sunrise Boys Hostel",
        location: "Hirapur, Dhanbad",
        price: 4500,
        image:
          "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=800",
      },
      {
        id: 2,
        title: "City View PG",
        location: "Bank More",
        price: 5200,
        image:
          "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800",
      },
    ],
    girls: [
      {
        id: 3,
        title: "Pink Nest Girls Hostel",
        location: "Saraidhela",
        price: 6000,
        image:
          "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800",
      },
      {
        id: 4,
        title: "Safe Stay PG",
        location: "Steel Gate",
        price: 5500,
        image:
          "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800",
      },
    ],
    flat: [
      {
        id: 5,
        title: "Modern 1BHK Apartment",
        location: "City Centre",
        price: 9000,
        image:
          "https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?w=800",
      },
      {
        id: 6,
        title: "Cozy 2BHK Flat",
        location: "Koyla Nagar",
        price: 12000,
        image:
          "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800",
      },
    ],
  };

  const listings = dummyData[type] || [];

  return (
    <>
      <SearchBar />
      <div className="max-w-7xl mx-auto px-4 py-3">
        {/* Page title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 capitalize text-center"
        >
          Only 4 {type} 
          <div className="mx-auto mt-2 bg-pink-700 w-20 h-1 rounded-full"></div>
        </motion.h1>

        {/* Section 1: Trending */}
        <h2 className="text-xl font-semibold mb-2">Trending</h2>
        <div className="flex overflow-x-scroll gap-6 pb-4 scrollbar-hide">
          {listings.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="min-w-[240px] bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-28 object-cover"
                />
                <div className="absolute top-3 right-3 bg-pink-600 text-white text-sm font-semibold px-3 py-1 rounded-full shadow">
                  ₹{item.price}
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm">{item.location}</p>
                <button className="mt-4 w-full bg-pink-600 text-white py-2 rounded-xl font-medium hover:bg-pink-700 transition">
                  View Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Section 2: Recommended */}
        <h2 className="text-xl font-semibold mb-4 mt-2">Recommended</h2>
        <div className="flex overflow-x-scroll gap-6 pb-4 scrollbar-hide">
          {listings.map((item, index) => (
            <motion.div
              key={item.id + "-rec"}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="min-w-[180px] bg-gradient-to-tr from-pink-50 to-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-36 object-cover"
              />
              <div className="p-3">
                <h3 className="text-md font-semibold">{item.title}</h3>
                <p className="text-gray-500 text-sm">{item.location}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Section 3: Top Rated */}
        <h2 className="text-xl font-semibold mb-4 mt-10">Top Rated</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {listings.map((item, index) => (
            <motion.div
              key={item.id + "-top"}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-gray-500 text-sm">{item.location}</p>
                <p className="text-pink-600 font-bold mt-2">₹{item.price}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Empty state */}
        {listings.length === 0 && (
          <p className="text-center text-gray-500 mt-10">No listings found.</p>
        )}
      </div>
    </>
  );
}
