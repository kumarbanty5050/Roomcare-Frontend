import React from "react";
import { motion } from "framer-motion";
import {
  Building2,
  Users,
  KeyRound,
  Home,
  ShieldCheck,
  BookUser,
  ClipboardList,
} from "lucide-react";
import HowItWorks from "./HowItWorks";
import WhyChooseUs from "./WhyChooseUs";
import TestimonialsAndFAQ from "./TestimonialsAndFAQ";

const services = [
  {
    icon: <Building2 className="w-14 h-14 text-pink-600" />,
    title: "Property Registration & Management",
    desc: `Lodge or building owners can easily register their property with RoomCare. Add full details like address, room types, rent amount, available facilities (Wi-Fi, food, laundry, etc.), and manage all data in one dashboard. Owners can also upload property images and monitor inquiries in real-time.`,
  },
  {
    icon: <Users className="w-14 h-14 text-pink-600" />,
    title: "Student & Renter Dashboard",
    desc: `Students and renters get a personalized dashboard where they can browse rooms by price, location, or amenities. They can check ratings, availability, contact owners directly, and even apply for rooms online. This makes the rental process smooth and transparent for everyone.`,
  },
  {
    icon: <Home className="w-14 h-14 text-pink-600" />,
    title: "Verified & Trusted Properties",
    desc: `Every property listed on RoomCare goes through a verification process to ensure legitimacy. This builds trust between owners and students. Verified listings are marked with a blue check badge for easy recognition.`,
  },
  {
    icon: <KeyRound className="w-14 h-14 text-pink-600" />,
    title: "Smart Booking & Digital Rent Management",
    desc: `Once a room is selected, renters can reserve it online and manage their rent payments digitally. RoomCare provides payment reminders, rent receipts, and digital transaction history for both owners and tenants.`,
  },
  {
    icon: <ClipboardList className="w-14 h-14 text-pink-600" />,
    title: "Maintenance Requests & Support",
    desc: `Renters can submit maintenance or complaint requests directly to the owner or hostel admin via their dashboard. Owners receive real-time notifications, ensuring fast response and efficient service.`,
  },
  {
    icon: <ShieldCheck className="w-14 h-14 text-pink-600" />,
    title: "Data Security & Privacy",
    desc: `Your data and activities are secured with advanced encryption and authentication. RoomCare ensures that only verified users can access property management or booking sections, maintaining complete confidentiality.`,
  },
  {
    icon: <BookUser className="w-14 h-14 text-pink-600" />,
    title: "Community & Reviews",
    desc: `RoomCare encourages a transparent ecosystem. Renters can share feedback, rate properties, and view others’ reviews to make better decisions. Owners can also respond to feedback, helping maintain a positive reputation.`,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const Services = () => {
  return (
    <>
    
      
      <section className="bg-gray-50 py-20 px-6 sm:px-10 lg:px-24">
        <div className="max-w-7xl mx-auto text-center">
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl font-extrabold text-gray-800 mb-4"
          >
            Our <span className="text-pink-600">RoomCare</span> Services
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-gray-600 max-w-2xl mx-auto mb-14 leading-relaxed"
          >
            RoomCare connects building owners and students through a single
            platform designed to make property management, booking, and living
            arrangements smooth, secure, and transparent. Discover the features
            that make RoomCare a next-generation solution for hostel and lodge
            management.
          </motion.p>

          {/* Service Cards */}
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                custom={i}
                viewport={{ once: true }}
                className="bg-white p-4 rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center border border-transparent hover:border-indigo-100"
              >
                <div className="bg-indigo-50 p-3 rounded-full mb-2">
                  {service.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed text-justify">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Bottom Text */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.7 }}
            viewport={{ once: true }}
            className="mt-16 bg-pink-600 text-white py-10 px-6 rounded-3xl shadow-xl"
          >
            <h3 className="text-2xl sm:text-3xl font-semibold mb-3">
              Ready to Get Started with RoomCare?
            </h3>
            <p className="text-gray-100 max-w-2xl mx-auto mb-6">
              Whether you’re a property owner looking to manage rooms easily or
              a student searching for safe and affordable accommodation —
              RoomCare is your complete digital companion.
            </p>
            <button className="bg-white text-pink-700 px-6 py-3 rounded-full font-medium hover:bg-indigo-100 transition duration-300">
              Join RoomCare Today
            </button>
          </motion.div>
        </div>
      </section>

      <HowItWorks />
      <WhyChooseUs />
    </>
  );
};

export default Services;
