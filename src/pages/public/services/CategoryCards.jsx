// CategoryCards.component.jsx
// Modern pink-themed UI with refined icons and responsive layout
// Uses Tailwind CSS and improved hover/animation design

import React from 'react';

export default function CategoryCards({ onSelect }) {
  const categories = [
    { id: 'boys', title: 'Boys Hostel', subtitle: 'Shared & private', icon: 'user' },
    { id: 'girls', title: 'Girls Hostel', subtitle: 'Safe & comfy', icon: 'female' },
    { id: '1bhk', title: 'Flat — 1 BHK', subtitle: 'Compact living', icon: 'home' },
    { id: '2bhk', title: 'Flat — 2 BHK', subtitle: 'Spacious comfort', icon: 'building' },
    { id: 'family', title: 'Family Room', subtitle: 'Perfect for families', icon: 'heart' },
    { id: 'shop', title: 'Shop Rent', subtitle: 'Street-facing shops', icon: 'store' },
    { id: 'commercial', title: 'Commercial Space', subtitle: 'Office & retail', icon: 'briefcase' },
    { id: 'commercial', title: 'Commercial Space', subtitle: 'Office & retail', icon: 'briefcase' },
  ];

  const Icon = ({ name }) => {
    const iconClasses = 'w-7 h-7 stroke-current text-pink-600 group-hover:text-pink-700 transition-all duration-200';

    switch (name) {
      case 'user':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" className={iconClasses}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 12a5 5 0 100-10 5 5 0 000 10zM4 21v-1a8 8 0 0116 0v1" />
          </svg>
        );
      case 'female':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" className={iconClasses}>
            <circle cx="12" cy="7" r="5" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 12v6m0 0H9m3 0h3" />
          </svg>
        );
      case 'home':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" className={iconClasses}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 9.5L12 3l9 6.5M4 10v10a1 1 0 001 1h14a1 1 0 001-1V10" />
          </svg>
        );
      case 'building':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" className={iconClasses}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 21h18M4 21V5a1 1 0 011-1h14a1 1 0 011 1v16M9 9h1m4 0h1m-6 4h1m4 0h1m-6 4h1m4 0h1" />
          </svg>
        );
      case 'heart':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" className={iconClasses}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s-6.5-4.35-9.5-9a5.5 5.5 0 019.5-6 5.5 5.5 0 019.5 6c-3 4.65-9.5 9-9.5 9z" />
          </svg>
        );
      case 'store':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" className={iconClasses}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 9h18l-1.5-5h-15L3 9zm0 0v11h18V9M7 13h2v5H7v-5z" />
          </svg>
        );
      case 'briefcase':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" className={iconClasses}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 7h18a1 1 0 011 1v11a1 1 0 01-1 1H3a1 1 0 01-1-1V8a1 1 0 011-1zm6-4h6a1 1 0 011 1v3H8V4a1 1 0 011-1z" />
          </svg>
        );
      default:
        return (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" className={iconClasses}>
            <circle cx="12" cy="12" r="9" />
          </svg>
        );
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 py-4">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-800 tracking-tight">
        Explore by Category
      </h2>

      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 sm:gap-6 ">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => onSelect?.(cat)}
            className="  group flex flex-col justify-between items-center  p-1 rounded-2xl backdrop-blur-md bg-white/80 shadow-md hover:bg-pink-50 hover:shadow-xl active:scale-95 transition-all duration-300 focus:outline-none border-1 border-pink-700"
          >
            <div className="flex flex-col items-center text-center space-y-1  ">
              <div className="w-7 h-7 flex items-center justify-center rounded-full bg-pink-100 group-hover:bg-pink-200 transition-colors">
                <Icon name={cat.icon} />
              </div>
              <h3 className="text-sm sm:text-base font-semibold text-pink-700 leading-tight">
                {cat.title}
              </h3>
              <p className="text-xs text-gray-500">{cat.subtitle}</p>
            </div>
            <span className="mt-3 text-xs font-medium text-pink-500 opacity-0 group-hover:opacity-100 transition-opacity">
              View →
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
