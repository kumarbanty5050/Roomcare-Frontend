import { motion } from "framer-motion";

export default function Button({ children, loading=false, ...props }) {
  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      disabled={loading || props.disabled}
      className={`w-full  px-4 py-2 rounded-lg text-white bg-pink-600 hover:bg-red-700 transition disabled:opacity-50`}
      {...props}
    >
      {loading ? "Loading..." : children}
    </motion.button>
  );
}
