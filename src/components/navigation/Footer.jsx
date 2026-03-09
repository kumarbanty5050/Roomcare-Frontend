// src/components/Footer.jsx
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-8 px-6">
        
        {/* Company */}
        <div>
          <h4 className="text-pink-600 font-semibold mb-4">RoomCare</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about" className="hover:text-pink-600 transition">About</Link></li>
            <li><Link to="/careers" className="hover:text-pink-600 transition">Careers</Link></li>
            <li><Link to="/blog" className="hover:text-pink-600 transition">Blog</Link></li>
          </ul>
        </div>

        {/* For Owners */}
        <div>
          <h4 className="text-pink-600 font-semibold mb-4">For Owners</h4>
          <ul className="space-y-2 text-sm ">
            <li><Link to="/list-property" className="hover:text-pink-600 transition">List Property</Link></li>
            <li><Link to="/dashboard" className="hover:text-pink-600 transition">Owner Dashboard</Link></li>
            <li><Link to="/pricing" className="hover:text-pink-600 transition">Pricing</Link></li>
          </ul>
        </div>

        {/* For Tenants */}
        <div>
          <h4 className="text-pink-600 font-semibold mb-4">For Tenants</h4>
          <ul className="space-y-2  text-sm ">
            <li><Link to="/rooms" className="hover:text-pink-600 transition">Search Rooms</Link></li>
            <li><Link to="/help" className="hover:text-pink-600 transition">Booking Help</Link></li>
            <li><Link to="/faqs" className="hover:text-pink-600 transition">FAQs</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="text-pink-600 font-semibold mb-4">Support</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/contact" className="hover:text-pink-600 transition">Contact Us</Link></li>
            <li><Link to="/help-center" className="hover:text-pink-600 transition">Help Center</Link></li>
            <li><Link to="/terms" className="hover:text-pink-600 transition">Terms & Privacy</Link></li>
          </ul>
        </div>

        {/* Social & App */}
        <div>
          <h4 className="text-pink-600 font-semibold mb-4">Social & App</h4>
          <ul className="space-y-2 text-sm">
            <li>Android App (Coming Soon)</li>
            <li className="flex space-x-4 mt-2">
              <a href="#" className="hover:text-pink-600 transition"><Facebook size={20} /></a>
              <a href="#" className="hover:text-pink-600 transition"><Twitter size={20} /></a>
              <a href="#" className="hover:text-pink-600 transition"><Instagram size={20} /></a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center mt-10 text-sm text-gray-500 border-t border-gray-700 pt-6">
        © {new Date().getFullYear()} RoomCare. All rights reserved.
      </div>
    </footer>
  );
}
