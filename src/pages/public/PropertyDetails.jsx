import { useParams } from "react-router-dom";
import { propertyDetails } from "../../data/properties";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  FaHeart,
  FaRegHeart,
  FaShareAlt,
  FaPhoneAlt,
  FaStar,
  FaMapMarkerAlt,
} from "react-icons/fa";

const PropertyDetails = () => {
  const { propertyId } = useParams();
  const property = propertyDetails[propertyId];
  const [isFav, setIsFav] = useState(false);
  const [currentImg, setCurrentImg] = useState(0);
  const [selectedRoom, setSelectedRoom] = useState(property?.rooms?.[0]);

  if (!property) return <p className="text-center mt-10">Property not found</p>;

  const nextImage = () => {
    setCurrentImg((prev) =>
      prev === property.images.length - 1 ? 0 : prev + 1,
    );
  };

  const prevImage = () => {
    setCurrentImg((prev) =>
      prev === 0 ? property.images.length - 1 : prev - 1,
    );
  };

  return (
    <div className="bg-gray-50 min-h-screen py-5">
      {/* IMAGE SLIDER */}
      <div className="relative h-[320px] md:h-[420px] overflow-hidden">
        <img
          src={property.images[currentImg]}
          alt="property"
          className="w-full h-full object-cover transition duration-500"
        />

        {/* gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

        {/* arrows */}
        <button
          onClick={prevImage}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow"
        >
          ◀
        </button>
        <button
          onClick={nextImage}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow"
        >
          ▶
        </button>

        {/* top actions */}
        <div className="absolute top-4 right-4 flex gap-3">
          <button
            onClick={() => setIsFav(!isFav)}
            className="bg-white p-2 rounded-full shadow"
          >
            {isFav ? <FaHeart className="text-pink-600" /> : <FaRegHeart />}
          </button>

          <button
            onClick={() =>
              navigator.share && navigator.share({ title: property.name })
            }
            className="bg-white p-2 rounded-full shadow"
          >
            <FaShareAlt />
          </button>
        </div>

        {/* property info */}
        <div className="absolute bottom-5 left-5 text-white">
          <h1 className="text-3xl font-bold">{property.name}</h1>
          <p className="flex items-center gap-2 text-sm mt-1">
            <FaMapMarkerAlt />
            {property.location}
          </p>
          <div className="flex items-center gap-3 mt-2">
            <span className="bg-green-600 px-2 py-1 rounded text-sm flex items-center gap-1">
              <FaStar /> {property.rating || 4.2}
            </span>
          </div>
        </div>
      </div>
      
      {/* thumbnails */}
      <div className="  flex gap-2  items-center justify-center mt-2 ">
        {property.images.map((img, i) => (
          <img
            key={i}
            src={img}
            onClick={() => setCurrentImg(i)}
            className={`h-12 w-16 object-cover rounded cursor-pointer border-2 ${
              currentImg === i ? "border-pink-600" : "border-white"
            }`}
          />
        ))}
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-6xl mx-auto px-4 py-6 grid md:grid-cols-3 gap-6">
        {/* LEFT CONTENT */}
        <div className="md:col-span-2 space-y-6">
          {/* ABOUT */}
          <div className="bg-white rounded-xl p-5 shadow">
            <h3 className="text-xl font-semibold mb-2">About this property</h3>
            <p className="text-gray-600">{property.description}</p>
            <p className="text-gray-500 text-sm mt-3">📍 {property.address}</p>
          </div>

          {/* ROOM TYPES */}
          <div className="bg-white rounded-xl p-5 shadow">
            <h3 className="text-xl font-semibold mb-4">Select Room</h3>
            <div className="space-y-3">
              {property.rooms.map((room, i) => (
                <div
                  key={i}
                  onClick={() => setSelectedRoom(room)}
                  className={`border rounded-lg p-4 cursor-pointer transition ${
                    selectedRoom?.type === room.type
                      ? "border-pink-600 bg-pink-50"
                      : "hover:shadow"
                  }`}
                >
                  <div className="flex justify-between">
                    <div>
                      <p className="font-semibold">{room.type} Room</p>
                      <p className="text-sm text-gray-500">
                        {room.features.join(", ")}
                      </p>
                    </div>
                    <p className="font-bold text-lg">₹{room.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* FACILITIES */}
          <div className="bg-white rounded-xl p-5 shadow">
            <h3 className="text-xl font-semibold mb-4">Facilities</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {property.facilities.map((f, i) => (
                <div key={i} className="bg-gray-100 p-3 rounded-lg text-sm">
                  ✔ {f}
                </div>
              ))}
            </div>
          </div>

          {/* POLICIES */}
          <div className="bg-white rounded-xl p-5 shadow">
            <h3 className="text-xl font-semibold mb-3">Policies & Rules</h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              {property.policies?.map((p, i) => (
                <li key={i}>• {p}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* BOOKING CARD */}
        <div className="hidden md:block">
          <div className="bg-white rounded-xl p-5 shadow sticky top-24">
            <p className="text-2xl font-bold mb-2">
              ₹{selectedRoom?.price}
              <span className="text-sm text-gray-500"> / month</span>
            </p>

            <p className="text-sm text-gray-500 mb-4">
              {selectedRoom?.type} Room selected
            </p>

            <button className="w-full bg-pink-600 text-white py-3 rounded-lg font-semibold hover:bg-pink-700 transition mb-3">
              Book Now
            </button>

            <a
              href={`tel:${property.contact}`}
              className="w-full flex items-center justify-center gap-2 border py-3 rounded-lg hover:bg-gray-100 transition"
            >
              <FaPhoneAlt />
              Call Owner
            </a>
          </div>
        </div>


        {/* Reviews */}
          <motion.div
            className="bg-white rounded-xl p-5 shadow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h3 className="text-xl font-semibold mb-4">Reviews</h3>

            <div className="space-y-4">
              {property.reviews?.map((r, i) => (
                <div
                  key={i}
                  className="border rounded-lg p-4 hover:shadow-md transition"
                >
                  <div className="flex justify-between">
                    <p className="font-semibold">{r.user}</p>
                    <p className="text-yellow-500">
                      {"⭐".repeat(r.rating)}
                    </p>
                  </div>
                  <p className="text-gray-600 text-sm mt-1">
                    {r.comment}
                  </p>
                </div>
              )) || <p>No reviews yet.</p>}
            </div>
          </motion.div>
      </div>

      {/* MOBILE BOOK BAR */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg flex justify-between items-center px-4 py-3">
        <div>
          <p className="font-bold text-lg">₹{selectedRoom?.price}</p>
          <p className="text-xs text-gray-500">{selectedRoom?.type} room</p>
        </div>

        <a
          href={`tel:${property.contact}`}
          className="bg-green-600 flex justify-center items-center gap-2 text-white px-6 py-2 rounded-lg font-semibold"
        >
          <FaPhoneAlt />
          Call Now
        </a>
        <button className="bg-pink-600 text-white px-6 py-2 rounded-lg font-semibold">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default PropertyDetails;
