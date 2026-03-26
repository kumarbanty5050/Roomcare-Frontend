import { motion } from "framer-motion";
import { fadeUp } from "../../styles/animations";
import HeroSection from "./Home/HeroSection";
import TrendingSlider from "./Home/TrendingSlider";
// import WhyRoomcare from "./Home/WhyRoomCare";
import CallToAction from "./Home/CallToAction"
import FeaturedLocations from "./Home/FeatureLocations";
import CategoryCard from "./Home/CategoryCard";
import SearchBar from "../../components/common/SearchBar";
import BoyHostel from "./boyHostel/BoyHostel";
export default function Home() {
  return (
    <>
       <div className=" z-10 w-full ">
        <SearchBar />
      </div>
      
      <HeroSection />
      <CategoryCard/>
      <TrendingSlider />
      <BoyHostel/>
      <CallToAction />

      {/* Hero */}
      <section className="bg-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-6 py-20 text-center">
          <motion.h1 {...fadeUp} className="text-3xl md:text-5xl font-bold">
            Find your perfect PG, Hostel or Room
          </motion.h1>
          <p className="mt-4 text-lg opacity-90">
            Verified properties · Easy booking · Transparent pricing
          </p>
        </div>
      </section>

      

      
    </>
  );
}
