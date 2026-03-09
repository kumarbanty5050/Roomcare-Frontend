import React from "react";
import { motion } from "framer-motion";
import { UserPlus, Settings, Handshake } from "lucide-react";

const steps = [
  {
    icon: <UserPlus className="w-14 h-14 text-pink-600" />,
    title: "1. Register Your Account",
    desc: `Whether you're a building or lodge owner, or a student looking for accommodation — simply sign up on RoomCare. Owners can register their properties with full details and photos, while students can create profiles to explore available rooms.`,
  },
  {
    icon: <Settings className="w-14 h-14 text-pink-600" />,
    title: "2. Manage Your Listings",
    desc: `Owners get a dedicated dashboard to manage room availability, rent, facilities, and tenant information. Students can filter, shortlist, and save their favorite rooms while communicating securely with property owners.`,
  },
  {
    icon: <Handshake className="w-14 h-14 text-pink-600" />,
    title: "3. Connect & Confirm",
    desc: `After finding a suitable match, both parties can communicate directly within RoomCare, finalize the booking, and manage all transactions online. Easy, safe, and transparent.`,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const HowItWorks = () => {
  return (
    <section className="bg-white py-5 px-6 sm:px-8 lg:px-10">
      <div className="max-w-7xl mx-auto text-center">
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-5xl font-extrabold text-gray-800 mb-4"
        >
          How <span className="text-pink-600">RoomCare</span> Works
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-gray-600 max-w-2xl mx-auto mb-3 leading-relaxed"
        >
          RoomCare simplifies property management and rental discovery in just
          three easy steps. Get started today and experience a smarter way to
          handle your hostel or lodge needs.
        </motion.p>

        {/* Steps Section */}
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              custom={i}
              viewport={{ once: true }}
              className="flex flex-col items-center bg-indigo-50 p-4 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-2"
            >
              <div className="bg-white p-2 rounded-full mb-3 shadow-md">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-1">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Animated Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-3 bg-pink-600 text-white py-6 px-6 rounded-3xl shadow-xl"
        >
          <h3 className="text-2xl sm:text-3xl font-semibold mb-3">
            Start Your RoomCare Journey Today
          </h3>
          <p className="text-indigo-100 max-w-2xl mx-auto mb-6">
            Register as an owner to list your property or as a student to find
            your ideal accommodation — all within a single, user-friendly
            platform.
          </p>
          <button className="bg-white text-pink-700 px-3 py-2 rounded-xl font-medium hover:bg-indigo-100 transition duration-300">
            Get Started Now
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
