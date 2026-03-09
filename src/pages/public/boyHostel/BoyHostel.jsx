import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import { boyHostels } from "../../../data/boyHostelData";
import SearchBar from "../../../components/common/SearchBar";
import AreaSlider from "./AreaSlider";
import HostelCard from "./HostelCard";

const BoyHostel = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [activeArea, setActiveArea] = useState("All");

  // extract areas
  const areas = useMemo(() => {
    return [...new Set(boyHostels.map((h) => h.area))];
  }, []);

  // filtering logic
  const filteredHostels = useMemo(() => {
    return boyHostels.filter((hostel) => {
      const matchesSearch =
        hostel.name.toLowerCase().includes(search.toLowerCase()) ||
        hostel.city.toLowerCase().includes(search.toLowerCase()) ||
        hostel.area.toLowerCase().includes(search.toLowerCase());

      const matchesArea =
        activeArea === "All" || hostel.area === activeArea;

      return matchesSearch && matchesArea;
    });
  }, [search, activeArea]);

  const trending = boyHostels.slice(0, 4);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-gray-50 min-h-screen"
    >
      {/* Search */}
      {/* <SearchBar value={search} onChange={setSearch} /> */}


      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Trending */}
        <h2 className="text-xl font-bold mb-4">
          Trending Boys Hostels
        </h2>

        <div className="flex gap-4 overflow-x-auto pb-4">
          {trending.map((hostel) => (
            <div className="min-w-[260px]" key={hostel.id}>
              <HostelCard
                hostel={hostel}
                onClick={() =>
                  navigate(`/property/${hostel.id}`)
                }
              />
            </div>
          ))}
        </div>
        
      {/* Area Slider */}
      <AreaSlider
        areas={areas}
        activeArea={activeArea}
        setActiveArea={setActiveArea}
      />


        {/* All Hostels */}
        <h2 className="text-xl font-bold mt-6 mb-4">
          All Boys Hostels
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredHostels.map((hostel) => (
            <HostelCard
              key={hostel.id}
              hostel={hostel}
              onClick={() =>
                navigate(`/property/${hostel.id}`)
              }
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default BoyHostel;
