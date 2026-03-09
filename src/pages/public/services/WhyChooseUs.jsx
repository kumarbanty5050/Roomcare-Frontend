import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Clock, HeartHandshake, Sparkles } from "lucide-react";

const features = [
  {
    icon: <CheckCircle2 className="w-12 h-12 text-pink-600" />,
    title: "Verified & Trusted Listings",
    desc: "Every property is verified by our team to ensure complete transparency. RoomCare prioritizes safety, reliability, and accuracy in every listing you see.",
  },
  {
    icon: <Clock className="w-12 h-12 text-pink-600" />,
    title: "Quick & Simple Process",
    desc: "From registration to booking, the process is fast and effortless. Owners and students can connect within minutes, saving time and reducing manual paperwork.",
  },
  {
    icon: <HeartHandshake className="w-12 h-12 text-pink-600" />,
    title: "Reliable Owner–Student Interaction",
    desc: "We bridge the gap between building owners and students through a secure communication system and real-time booking notifications.",
  },
  {
    icon: <Sparkles className="w-12 h-12 text-pink-600" />,
    title: "Smart, Modern, & Secure Platform",
    desc: "Powered by MERN stack technology, RoomCare offers modern UI, real-time database updates, and top-notch security for all users.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const WhyChooseUs = () => {
  return (
    <section className="bg-gray-50 py-10 px-6 sm:px-10 lg:px-24">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-5xl font-extrabold text-gray-800 mb-6"
        >
          Why Choose <span className="text-pink-600">RoomCare?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-gray-600 max-w-xl mx-auto mb-3 leading-relaxed"
        >
          We’re not just a property listing platform — RoomCare is a complete
          digital ecosystem for hostel, lodge, and PG management. Here’s why
          users love us and trust our platform.
        </motion.p>

        {/* Features */}
        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4 mb-20">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              custom={i}
              viewport={{ once: true }}
              className="bg-white p-4 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-transparent hover:border-indigo-100 flex flex-col items-center text-center"
            >
              <div className="mb-2 bg-indigo-50 p-3 rounded-full">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Animated Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-8 justify-center items-center"
        >
          <div className="flex flex-col items-center">
            <h3 className="text-4xl font-bold text-pink-600 mb-2">1000+</h3>
            <p className="text-gray-700 text-sm font-medium">
              Happy Students
            </p>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-4xl font-bold text-pink-600 mb-2">200+</h3>
            <p className="text-gray-700 text-sm font-medium">
              Verified Properties
            </p>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-4xl font-bold text-pink-600 mb-2">150+</h3>
            <p className="text-gray-700 text-sm font-medium">Trusted Owners</p>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-4xl font-bold text-pink-600 mb-2">24/7</h3>
            <p className="text-gray-700 text-sm font-medium">Support Service</p>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-5 bg-pink-600 text-white py-6 px-6 rounded-3xl shadow-lg"
        >
          <h3 className="text-2xl sm:text-3xl font-semibold mb-3">
            Experience Smart Hostel Management with RoomCare
          </h3>
          <p className="text-indigo-100 max-w-2xl mx-auto mb-4">
            Join hundreds of owners and students who’ve transformed the way
            they manage and find accommodations. RoomCare is your next step
            toward a more connected, efficient, and secure living experience.
          </p>
          <button className="bg-white text-pink-700 px-2 py-2 rounded-xl font-medium hover:bg-indigo-100 transition duration-300">
            Explore Now
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
