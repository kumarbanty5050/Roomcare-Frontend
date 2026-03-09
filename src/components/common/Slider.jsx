import PropertyCard from "./PropertyCard";
import { motion } from "framer-motion";

export default function Slider({ properties }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex gap-4 overflow-x-scroll scrollbar-hide py-4"
    >
      {properties.map((p) => (
        <div key={p.id} className="min-w-[250px]">
          <PropertyCard property={p} />
        </div>
      ))}
    </motion.div>
  );
}
