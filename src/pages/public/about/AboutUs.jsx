import React from "react";
import { motion } from "framer-motion";
import aboutImage from "../../../assets/images/contactUs.jpg" // Add an image in your assets folder
import Team from "./Team";
import HowItWorks from "../services/HowItWorks";

const AboutUs = () => {
  return (
    <>
    <section className="bg-white py-10 px-4 sm:px-10 lg:px-20" id="about">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <img
            src={aboutImage}
            alt="About RoomCare"
            className="rounded-3xl shadow-lg w-full max-w-md lg:max-w-lg object-cover"
          />
        </motion.div>

        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-800 mb-6">
            About <span className="text-pink-600">RoomCare</span>
          </h2>

          <p className="text-gray-600 mb-6 leading-relaxed">
            <strong className="text-pink-700 text-lg">RoomCare</strong> is a smart and modern accommodation
            management platform built to simplify how universities, hostel
            owners, and students manage room-related activities. From
            admissions to checkouts, library management to room allocation —
            everything is handled in one unified system.
          </p>

          <p className="text-gray-600 mb-6 leading-relaxed">
            Our goal is to bridge the communication gap between property owners
            and students or renters, providing a transparent, digital platform
            for room booking, payments, and record management. Whether it’s a
            single hostel or a chain of lodges — RoomCare makes it easier,
            faster, and more reliable.
          </p>

          <div className="grid sm:grid-cols-2 gap-6 mt-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-indigo-50 p-6 rounded-2xl shadow hover:shadow-md transition"
            >
              <h3 className="text-lg font-semibold text-pink-700 mb-2">
                🎯 Our Mission
              </h3>
              <p className="text-gray-600 text-sm">
                To digitalize hostel and room management for educational
                institutions and independent owners by creating an intelligent,
                user-friendly web solution.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-indigo-50 p-6 rounded-2xl shadow hover:shadow-md transition"
            >
              <h3 className="text-lg font-semibold text-pink-700 mb-2">
                🌍 Our Vision
              </h3>
              <p className="text-gray-600 text-sm">
                To make every student and owner’s accommodation experience smooth,
                connected, and smart through technology-driven room management.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            viewport={{ once: true }}
            className="mt-10"
          >
            <button className="bg-pink-600 text-white px-6 py-3 rounded-full font-medium hover:bg-cyan-700 transition duration-300">
              Learn More
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
    <HowItWorks/>
    <Team/>
    </>
  );
};

export default AboutUs;
