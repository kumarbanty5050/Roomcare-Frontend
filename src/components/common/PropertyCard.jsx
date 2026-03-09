import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const PropertyCard = ({ property }) => {
  const navigate = useNavigate();

  return (
    <motion.div
      whileHover={{ scale: 1.04 }}
      className="min-w-[260px] cursor-pointer"
      onClick={() => navigate(`/property/${property.id}`)}
    >
      <div className="relative rounded-xl overflow-hidden shadow-md">
        <img
          src={property.image}
          alt={property.name}
          className="h-48 w-full object-cover"
        />

        <div className="absolute bottom-0 w-full bg-black/60 text-white p-3">
          <h3 className="font-semibold">{property.name}</h3>
          <p className="text-sm">
            ₹{property.price} / month • {property.capacity}
          </p>
        </div>

        {property.discount && (
          <span className="absolute top-3 left-3 bg-pink-700 text-white text-xs px-2 py-1 rounded">
            {property.discount}% OFF
          </span>
        )}
      </div>
    </motion.div>
  );
};

export default PropertyCard;
