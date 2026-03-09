import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronDown, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Student, VBU University",
    text: "RoomCare helped me find a verified hostel near my campus in just two days! The platform is smooth, safe, and full of genuine listings. Highly recommended for all students.",
    rating: 5,
  },
  {
    name: "Rohit Mehta",
    role: "Building Owner, Ranchi",
    text: "I’ve been managing my property using RoomCare for six months. It’s incredibly simple to add rooms, track rent, and communicate with tenants. The dashboard is user-friendly and fast.",
    rating: 4,
  },
  {
    name: "Anjali Verma",
    role: "PG Owner, Deoghar",
    text: "RoomCare has made property management stress-free. Tenants can book directly, and I receive instant notifications. The digital rent system is a game changer!",
    rating: 5,
  },
];

const faqs = [
  {
    question: "How can I register as a property owner?",
    answer:
      "Click on the ‘Register’ button on the homepage and choose ‘Owner’. Fill out your property details, upload images, and verify your email to start listing your rooms immediately.",
  },
  {
    question: "Can students directly contact owners?",
    answer:
      "Yes! RoomCare allows verified students to directly message property owners or send booking requests through the platform’s secure chat system.",
  },
  {
    question: "Is there any fee for using RoomCare?",
    answer:
      "Basic registration and property browsing are completely free. Some advanced management tools or premium placements may come with small subscription fees for owners.",
  },
  {
    question: "Is my data safe on RoomCare?",
    answer:
      "Absolutely. We use encrypted authentication and cloud storage to keep all personal and property data completely secure and private.",
  },
];

const TestimonialsAndFAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="bg-white py-20 px-6 sm:px-10 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* === Testimonials === */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-800 mb-4">
            What Our Users Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from our happy students and property owners who use RoomCare
            every day to simplify accommodation and management.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-8 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center"
            >
              <div className="flex justify-center mb-4">
                <Quote className="text-indigo-600 w-8 h-8" />
              </div>
              <p className="text-gray-700 italic mb-4">“{t.text}”</p>
              <div className="flex justify-center text-yellow-400 mb-2">
                {[...Array(t.rating)].map((_, idx) => (
                  <Star key={idx} className="w-5 h-5 fill-yellow-400" />
                ))}
              </div>
              <h4 className="font-semibold text-gray-800">{t.name}</h4>
              <p className="text-sm text-gray-500">{t.role}</p>
            </motion.div>
          ))}
        </div>

        {/* === FAQ Section === */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-800 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-12">
            Still curious? Here are answers to some of the most common questions
            about how RoomCare works for students and property owners.
          </p>

          {/* FAQ Accordion */}
          <div className="max-w-3xl mx-auto space-y-4 text-left">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-xl overflow-hidden shadow-sm"
              >
                <button
                  onClick={() =>
                    setActiveIndex(activeIndex === index ? null : index)
                  }
                  className="flex justify-between items-center w-full p-5 text-left bg-gray-50 hover:bg-indigo-50 transition-all duration-300"
                >
                  <h3 className="font-semibold text-gray-800">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    className={`w-6 h-6 text-indigo-600 transition-transform duration-300 ${
                      activeIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className="bg-white px-5 pb-5 text-gray-600 text-sm leading-relaxed"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsAndFAQ;
