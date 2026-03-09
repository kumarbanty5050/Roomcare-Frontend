// src/components/Team.jsx
import React from "react";
import Slider from "react-slick";
import { Github, Linkedin } from "lucide-react";

// Team images
import dummyImg from "../../../assets/Logo/logo_512x512.png";
import bantyImg from "../../../assets/Logo/logo_512x512.png";
import artiImg from "../../../assets/Logo/logo_512x512.png";
import omImg from "../../../assets/Logo/logo_512x512.png";
import monikaImg from "../../../assets/Logo/logo_512x512.png";
import princeImg from "../../../assets/Logo/logo_512x512.png";

const teamMembers = [
  {
    name: "Banty Kumar",
    role: "Full Stack Developer",
    description:
      "Expert in building scalable web applications with MERN stack.",
    img: bantyImg || dummyImg,
    github: "#",
    linkedin: "#",
  },
  {
    name: "Arti Kumari",
    role: "Frontend Developer",
    description: "Specializes in creating responsive and user-friendly UI.",
    img: artiImg || dummyImg,
    github: "#",
    linkedin: "#",
  },
  {
    name: "Om Kumar Sharma",
    role: "Backend Engineer",
    description:
      "Handles server-side logic and database management efficiently.",
    img: omImg || dummyImg,
    github: "#",
    linkedin: "#",
  },
  {
    name: "Monika Kumari",
    role: "UI/UX Designer",
    description:
      "Designs intuitive interfaces and delightful user experiences.",
    img: monikaImg || dummyImg,
    github: "#",
    linkedin: "#",
  },
  {
    name: "Prince Kumar",
    role: "Database Manager",
    description:
      "Manages data integrity, storage, and database optimization.",
    img: princeImg || dummyImg,
    github: "#",
    linkedin: "#",
  },
];

const Team = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1, // mobile-first default
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 640, // small tablets
        settings: { slidesToShow: 1 },
      },
      {
        breakpoint: 768, // tablets
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 1024, // laptops
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 1280, // desktops
        settings: { slidesToShow: 4 },
      },
    ],
  };

  return (
    <section className="bg-gray-50 py-12 px-4 sm:px-8 lg:px-20" id="team">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-800 mb-4">
          Meet Our <span className="text-pink-600">Team</span>
        </h2>

        <p className="text-gray-600 max-w-xl mx-auto mb-10 leading-relaxed text-sm sm:text-base">
          We are MCA students of VBU University, dedicated to building smart,
          scalable, and user-friendly web applications. Our RoomCare Management
          System reflects our teamwork, creativity, and technical skills.
        </p>

        {/* Slider */}
        <Slider {...settings}>
          {teamMembers.map((member, index) => (
            <div key={index} className="px-2 sm:px-4">
              <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-6 flex flex-col items-center">
                {/* Profile image */}
                <img
                  src={member.img}
                  alt={member.name}
                  className="h-24 w-24 sm:h-28 sm:w-28 object-cover rounded-full border-4 border-pink-600 mb-4"
                />

                {/* Name, Role & Description */}
                <h3 className="text-base sm:text-lg font-semibold text-gray-800">
                  {member.name}
                </h3>
                <p className="text-pink-600 font-medium text-xs sm:text-sm mb-2">
                  {member.role}
                </p>
                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed text-center">
                  {member.description}
                </p>

                {/* Social Icons */}
                <div className="flex justify-center mt-3 gap-4">
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    <Github className="w-5 h-5 sm:w-6 sm:h-6" />
                  </a>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Team;
