import React from 'react';

const FacilityCard = ({ title, description, image }) => {
  return (
    <div className="container  rounded overflow-hidden shadow-lg bg-white">
      <img className="w-full h-48  object-cover" src={image} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base text-justify">{description}</p>
      </div>
      <div className="px-6 py-4">
        <button type='sumbit' className="bg-cyan-500 text-white px-4 py-2 rounded hover:bg-cyan-700">
        <a href="Login" className="hover:text-white">Book Now</a>
        </button>
      </div>
    </div>
  );
};

export default FacilityCard;
