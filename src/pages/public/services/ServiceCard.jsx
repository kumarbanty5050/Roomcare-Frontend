import React from "react";
import FacilityCard from "./FacilityCard";
import img1 from "../../Image/singleBed.jpg";
import img2 from "../../Image//SingleBed2.jpg";
import img3 from "../../Image//room.jpg";

const facilities = [
  {
    title: "Single Bed Room",
    description:
      "A cozy and comfortable single 120SqFoots bedroom designed for your privacy and relaxation. Equipped with modern amenities, it offers a peaceful retreat, perfect for solo Boys or anyone seeking a personal space to unwind and living like home enviroment.",
    image: img1,
  },
  {
    title: "Double Bed Room",
    description:
      "A spacious and inviting double bedroom, perfect for Two Boys or those who prefer extra space. Featuring a comfortable double bed, modern amenities, and a cozy atmosphere, it provides a relaxing environment for a restful stay.",
    image: img2,
  },
  {
    title: "Pure Drinking Water",
    description:
      "Enjoy round-the-clock access to clean and safe drinking water, available 24/7. Our facility ensures that you never have to worry about water shortages, providing constant availability for all your hydration needs at any time of the day or night.",
    image:
      "https://cdn.pixabay.com/photo/2025/02/28/01/55/world-water-day-9436446_1280.png",
  },
  {
    title: "Lighting",
    description:
      "Experience uninterrupted lighting with 24/7 availability. Our facility guarantees a reliable power supply, ensuring that lights are always on, providing a safe and well-lit environment at all hours, day or night.",
    image:
      "https://cdn.pixabay.com/photo/2020/12/30/15/49/light-bulb-5873817_1280.jpg",
  },
  {
    title: "Security CCTV Camera",
    description:
      "Stay secure with 24/7 surveillance through our state-of-the-art CCTV camera system. With continuous monitoring, our facility ensures a safe environment, providing peace of mind with real-time video coverage and recorded footage, day and night.",
    image:
      "https://cdn.pixabay.com/photo/2023/10/17/11/17/ai-generated-8320893_1280.jpg",
  },
  {
    title: "Parking",
    description:
      "Convenient and secure parking for cycles and bikes is available, ensuring a safe place to store your two-wheeled vehicles. Our dedicated bike parking area is designed to offer peace of mind, with easy access and protection for your cycle or bike at all times.",
    image:
      "https://cdn.pixabay.com/photo/2022/07/24/19/42/bike-7342379_1280.png",
  },
  {
    title: "clean & shine Washroom",
    description:
      'Experience unint"Experience a fresh and spotless washroom with our Clean and Shine service. We ensure that every corner is meticulously cleaned, offering a hygienic, well-maintained space. Enjoy the comfort of a sparkling washroom that not only looks great but also promotes cleanliness and freshness throughout from health issue."',
    image:
      "https://media.istockphoto.com/id/1381311705/photo/modern-bright-teenager-room.jpg?s=612x612&w=0&k=20&c=INQT8KATeIWIiJa9GGN7eotDcwJ8eGBvSvx5j9MvK70=",
  },
];

const ServiceCard = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2
        className="text-3xl font-semibold text-center mb-8 underline decoration-pink-500 underline-offset-8"
        id="about"
      >
        About
      </h2>
      <div className="bg-slate-950 rounded-sm w-24 h-2 "></div>
      <div className="container mx-auto px-4 py-8 mb-4 rounded-md text-white bg-pink-600">
        <p className="text-base">
          Our Boys Hostel offers a comfortable, secure, and welcoming
          environment for students and young professionals. With well-furnished
          rooms, 24/7 water and electricity supply, high-speed internet, and
          delicious home-style meals, we ensure a hassle-free living experience.
          The hostel is designed for safety and convenience, with CCTV
          surveillance, friendly staff, and ample recreational facilities.
          Whether you're here for studies or work, our hostel provides the
          perfect balance of comfort, affordability, and community.
        </p>
      </div>
      <h2
        className="text-3xl font-semibold text-center mb-8 underline decoration-pink-500 underline-offset-8"
        id="services"
      >
        Our Facilities
      </h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {facilities.map((facility, index) => (
          <FacilityCard
            key={index}
            title={facility.title}
            description={facility.description}
            image={facility.image}
          />
        ))}
      </div>
    </div>
  );
};

export default ServiceCard;
