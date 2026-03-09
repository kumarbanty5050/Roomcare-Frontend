// src/layouts/AuthLayout.jsx
import { Outlet } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../navigation/Navbar";
import Footer from "../navigation/Footer";
import Logo from "../common/Logo";
import Page from "../common/Page";

export default function AuthLayout() {
  return (
    <Page>
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 via-white to-gray-100 py-5">
        {/* Navbar */}
        <header>
          <Navbar />
        </header>

        {/* Main Content */}
        <main className="flex-1 flex flex-col">
          <div className="grid md:grid-cols-2 flex-1 rounded-lg mt-3">
            {/* Left Branding Section */}
            <div className="hidden md:flex relative overflow-hidden items-center justify-center px-12">
              {/* Gradient Background */}
              <div className="absolute inset-0 bg-black" />

              {/* Decorative Blobs */}
              <div className="absolute -top-24 -left-24 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 right-0 w-80 h-80 bg-black/10 rounded-full blur-3xl" />

              {/* Content */}
              <div className="relative z-10 max-w-md text-white">
                <div className="flex flex-row items-center justify-center">
                <Logo size="h-14" text="Roomcare" />
                <h1>Roomcare</h1>
                </div>

                <h1 className="mt-8 text-4xl font-extrabold leading-tight">
                  Smart Lodge Room, hostel & PG management
                </h1>

                <p className="mt-5 text-lg text-white/90">
                  Digitize rooms, tenants, rent, and maintenance with a secure,
                  modern platform built for real owners and tenants.
                </p>

                <ul className="mt-8 space-y-3 text-white/90">
                  <li>✔ Role-based dashboards</li>
                  <li>✔ Secure OTP & JWT login</li>
                  <li>✔ Mobile-first experience</li>
                </ul>
              </div>
            </div>

            {/* Right Auth Form Section */}
            <div className="flex items-center justify-center px-3 py-5">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="relative w-full max-w-md"
              >
                {/* Glass Card */}
                <div className="absolute inset-0 rounded-2xl bg-white/60 backdrop-blur-xl shadow-2xl" />

                <div className="relative rounded-2xl border border-pink-700/60 bg-white/80 backdrop-blur-xl p-4">
                  
                  <Outlet />
                </div>
              </motion.div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer>
          <Footer />
        </footer>
      </div>
    </Page>
  );
}
