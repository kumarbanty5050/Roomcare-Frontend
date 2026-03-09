// src/components/Logo.jsx
import { Link } from "react-router-dom";
import logo from '../../assets/Logo/logo_512x512.png'
export default function Logo({ size = "h-10", text = "Roomcare" }) {
  return (
    <Link to="/" className="flex items-center space-x-2 ">
      {/* Logo Image */}
      <img
        src={logo} // <-- replace with your actual logo path
        alt="Roomcare Logo"
        className={`${size} w-auto rounded-xl`}
      />
      {/* Optional Text (can hide if you want only image) */}
      <span className="font-bold text-red-600 text-lg"></span>
    </Link>
  );
}
