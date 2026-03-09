import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function CategoryCard({ onSelect }) {
  const navigate = useNavigate();

  const categories = [
    { id: "boys", title: "Boys Hostel", subtitle: "Shared & private", icon: "user" },
    { id: "girls", title: "Girls Hostel", subtitle: "Safe & comfy", icon: "female" },
    { id: "flat", title: "Flat—1 & 2 BHK", subtitle: "Compact living", icon: "home" },
    { id: "family", title: "Family Room", subtitle: "Perfect for families", icon: "heart" },
    { id: "shop", title: "Shop Rent", subtitle: "Street-facing shops", icon: "store" },
    { id: "commercial", title: "Commercial Space", subtitle: "Office & retail", icon: "briefcase" },
  ];

  const handleClick = (cat) => {
    onSelect?.(cat);
    navigate(`/listings?type=${cat.id}`);
  };

  const Icon = ({ name }) => {
    const iconClasses =
      "w-7 h-7 stroke-current text-pink-600 group-hover:text-pink-700 transition-all duration-200";

    switch (name) {
      case "user":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" className={iconClasses}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 12a5 5 0 100-10 5 5 0 000 10zM4 21v-1a8 8 0 0116 0v1" />
          </svg>
        );
      case "female":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" className={iconClasses}>
            <circle cx="12" cy="7" r="5" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 12v6m0 0H9m3 0h3" />
          </svg>
        );
      case "home":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" className={iconClasses}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 9.5L12 3l9 6.5M4 10v10a1 1 0 001 1h14a1 1 0 001-1V10" />
          </svg>
        );
      case "heart":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" className={iconClasses}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s-6.5-4.35-9.5-9a5.5 5.5 0 019.5-6 5.5 5.5 0 019.5 6c-3 4.65-9.5 9-9.5 9z" />
          </svg>
        );
      case "store":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" className={iconClasses}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 9h18l-1.5-5h-15L3 9zm0 0v11h18V9M7 13h2v5H7v-5z" />
          </svg>
        );
      case "briefcase":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" className={iconClasses}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 7h18a1 1 0 011 1v11a1 1 0 01-1 1H3a1 1 0 01-1-1V8a1 1 0 011-1zm6-4h6a1 1 0 011 1v3H8V4a1 1 0 011-1z" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 py-2">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-800 tracking-tight"
      >
        Explore by Category
        <div className="mx-auto mt-3 bg-pink-700 w-20 h-1 rounded-full"></div>
      </motion.h2>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 sm:gap-6">
        {categories.map((cat, index) => (
          <motion.button
            key={cat.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            whileHover={{ y: -6, scale: 1.03 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => handleClick(cat)}
            className="group relative flex flex-col justify-between items-center p-3 rounded-2xl bg-white shadow-md hover:shadow-2xl transition-all duration-300 focus:outline-none border border-pink-200 hover:border-pink-500"
          >
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300 bg-gradient-to-br from-pink-100 via-transparent to-pink-200"></div>

            <div className="relative flex flex-col items-center text-center space-y-1">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-pink-100 group-hover:bg-pink-200 transition-colors">
                <Icon name={cat.icon} />
              </div>

              <h3 className="text-sm sm:text-base font-semibold text-pink-700 leading-tight">
                {cat.title}
              </h3>
              <p className="text-xs text-gray-500">{cat.subtitle}</p>
            </div>

            <span className="relative mt-3 text-xs font-medium text-pink-500 opacity-0 group-hover:opacity-100 transition-opacity">
              View →
            </span>
          </motion.button>
        ))}
      </div>
    </div>
  );
}
