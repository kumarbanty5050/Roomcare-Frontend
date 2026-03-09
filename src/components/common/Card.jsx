import { motion } from "framer-motion";

export default function Card({ children, className = "" }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className={`bg-white rounded-xl shadow-sm border p-5 ${className}`}
    >
      {children}
    </motion.div>
  );
}