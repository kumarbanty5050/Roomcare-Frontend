// components/AreaSlider.jsx
import { motion } from "framer-motion";

const AreaSlider = ({ areas, activeArea, setActiveArea }) => {
  return (
    <div className="overflow-x-auto py-3 px-4 bg-white">
      <div className="flex gap-3 min-w-max">
        <button
          onClick={() => setActiveArea("All")}
          className={`px-4 py-2 rounded-full text-sm font-medium border ${
            activeArea === "All"
              ? "bg-pink-700 text-white"
              : "bg-gray-100"
          }`}
        >
          All
        </button>

        {areas.map((area) => (
          <motion.button
            key={area}
            whileTap={{ scale: 0.9 }}
            onClick={() => setActiveArea(area)}
            className={`px-4 py-2 rounded-full text-sm font-medium border ${
              activeArea === area
                ? "bg-pink-700 text-white"
                : "bg-gray-100"
            }`}
          >
            {area}
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default AreaSlider;
