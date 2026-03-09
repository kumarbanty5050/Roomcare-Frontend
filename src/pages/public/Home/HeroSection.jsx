import { motion } from "framer-motion";
import SearchBar from "../../../components/common/SearchBar";

const HeroSection = () => {
  return (
    <>
   
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-br from-pink-50 to-white py-2"
      >
        <div className="max-w-6xl mx-auto px-4 my-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-2">
            Find Your Perfect Hostel, PG or Lodge with Roomcare
          </h1>
          <p className="text-pink-600 mb-2">
            Affordable stays near your college or workplace
          </p>
        </div>
      </motion.section>
    </>
  );
};

export default HeroSection;
