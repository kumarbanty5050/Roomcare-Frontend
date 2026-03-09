// components/HostelCard.jsx
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const HostelCard = ({ hostel, onClick }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3 }}
      onClick={onClick}
      className="bg-white rounded-xl shadow-sm hover:shadow-lg cursor-pointer overflow-hidden"
    >
      <div className="relative">
        <img
          src={hostel.images[0]}
          alt={hostel.name}
          className="w-full h-48 object-cover"
        />

        {/* Discount */}
        {hostel.discount && (
          <div className="absolute top-3 left-3 bg-pink-700 text-white text-xs px-2 py-1 rounded">
            {hostel.discount}% OFF
          </div>
        )}

        {/* Price */}
        <div className="absolute bottom-3 right-3 bg-white px-3 py-1 rounded shadow text-sm font-semibold text-pink-700">
          ₹{hostel.price}/mo
        </div>
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-gray-800">
          {hostel.name}
        </h3>
        <p className="text-sm text-gray-500">
          {hostel.area}, {hostel.city}
        </p>

        <div className="flex justify-between items-center mt-3">
          <span className="text-sm text-gray-600">
            {hostel.capacity}
          </span>
          <span className="flex items-center gap-1 text-sm bg-green-100 text-green-700 px-2 py-1 rounded">
            <Star size={14} />
            {hostel.rating}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default HostelCard;
