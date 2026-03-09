import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully ✅ (Backend connection coming soon!)");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="bg-gradient-to-br from-indigo-50 to-white py-20 px-6 sm:px-10 lg:px-20"
    >
      <div className="max-w-7xl mx-auto text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-5xl font-extrabold text-gray-800 mb-4"
        >
          Get in <span className="text-pink-600">Touch</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-gray-600 max-w-2xl mx-auto leading-relaxed"
        >
          Have any questions or feedback? We’d love to hear from you.  
          Use the form below to reach out or connect through our contact details.
        </motion.p>
      </div>

      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white p-8 rounded-3xl shadow-lg"
        >
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">
            Contact Information
          </h3>
          <div className="space-y-5 text-left">
            <div className="flex items-center gap-4">
              <MapPin className="text-pink-600 w-6 h-6" />
              <p className="text-gray-700">
                Korrah, Hazaribagh, Jharkhand
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="text-pink-600 w-6 h-6" />
              <p className="text-gray-700">+91 7520781681</p>
            </div>
            <div className="flex items-center gap-4">
              <Mail className="text-pink-600 w-6 h-6" />
              <p className="text-gray-700">roomcare.help@gmail.com</p>
            </div>
          </div>

          <div className="mt-10">
            <h4 className="font-semibold text-gray-800 mb-2">
              Office Hours:
            </h4>
            <p className="text-gray-600 text-sm">
              Monday – Saturday: 9:00 AM – 6:00 PM <br />
              Sunday: Closed
            </p>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white p-4 rounded-3xl shadow-lg"
        >
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">
            Send Us a Message
          </h3>

          <div className="flex flex-col gap-2">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
            />
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
            ></textarea>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="bg-pink-600 text-white font-semibold py-3 px-6 rounded-xl flex items-center justify-center gap-2 hover:bg-pink-700 transition"
            >
              <Send className="w-5 h-5" /> Send Message
            </motion.button>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
