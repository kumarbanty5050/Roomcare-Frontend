import { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Menu,
  Home,
  Info,
  Briefcase,
  Phone,
  Search,
  UserCog,
  LogOut,
  ChevronDown,
  X,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../common/Logo";
import { useAuth } from "../../hooks/useAuth";
import SearchBar from "../common/SearchBar";
export default function Navbar() {
  const { user, logout, isAuthenticated } = useAuth();

  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [ownerMenu, setOwnerMenu] = useState(false);
  const [profileMenu, setProfileMenu] = useState(false);
  const [ownerMenuMobile, setOwnerMenuMobile] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const ownerRef = useRef(null);
  const profileRef = useRef(null);

  /* =============================
     SCROLL EFFECT
  ============================== */
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* =============================
     CLOSE DROPDOWNS ON OUTSIDE CLICK
  ============================== */
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ownerRef.current && !ownerRef.current.contains(e.target)) {
        setOwnerMenu(false);
      }
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setProfileMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-pink-600 shadow-md" : "bg-pink-600"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        {/* ================= LOGO ================= */}
        <div className="flex items-center gap-2">
          <Logo />
          <Link to="/" className="text-xl font-bold text-white">
            RoomCare
          </Link>
        </div>

        {/* ================= DESKTOP MENU ================= */}
        <div className="hidden md:flex items-center space-x-6">
          <NavLink to="/" className="text-white hover:text-black">
            Home
          </NavLink>

          <NavLink to="/rooms" className="text-white hover:text-black">
            Find Rooms
          </NavLink>

          {/* OWNER MENU */}
          <div className="relative" ref={ownerRef}>
            <button
              onClick={() => setOwnerMenu(!ownerMenu)}
              className="flex items-center text-white hover:text-black"
            >
              For Owners <ChevronDown size={16} className="ml-1" />
            </button>

            <AnimatePresence>
              {ownerMenu && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute left-0 mt-2 bg-white shadow-lg rounded-md w-56"
                >
                  <NavLink
                    to="/list-property"
                    onClick={() => setOwnerMenu(false)}
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    List Your Property
                  </NavLink>

                  {user?.role === "owner" && (
                    <NavLink
                      to="/owner/dashboard"
                      onClick={() => setOwnerMenu(false)}
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Owner Dashboard
                    </NavLink>
                  )}

                  <NavLink
                    to="/pricing"
                    onClick={() => setOwnerMenu(false)}
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Pricing
                  </NavLink>

                  <NavLink
                    to="/help-owners"
                    onClick={() => setOwnerMenu(false)}
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Help for Owners
                  </NavLink>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <NavLink to="/services" className="text-white hover:text-black">
            Services
          </NavLink>

          <NavLink to="/about" className="text-white hover:text-black">
            About
          </NavLink>
          <NavLink to="/contact" className="text-white hover:text-black">
            Contact
          </NavLink>
        </div>

        {/* ================= RIGHT AUTH ================= */}
        <div className="hidden md:flex items-center gap-4">
          {!isAuthenticated ? (
            <Link
              to="/login"
              className="px-4 py-2 bg-pink-700 text-white rounded hover:bg-pink-800"
            >
              Login / Register
            </Link>
          ) : (
            <div className="relative" ref={profileRef}>
              <button
                onClick={() => setProfileMenu(!profileMenu)}
                className="flex items-center gap-2"
              >
                <img
                  src={
                    user?.avatar ||
                    `https://ui-avatars.com/api/?name=${user?.name}&background=4F46E5&color=fff`
                  }
                  alt="avatar"
                  className="w-8 h-8 rounded-full"
                />
                <span className="text-white font-medium">{user?.name}</span>
              </button>

              <AnimatePresence>
                {profileMenu && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute right-0 mt-2 bg-white shadow-lg rounded-md w-48"
                  >
                    <NavLink
                      to="/tenant/dashboard"
                      onClick={() => setProfileMenu(false)}
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Dashboard
                    </NavLink>

                    <NavLink
                      to="/settings"
                      onClick={() => setProfileMenu(false)}
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Settings
                    </NavLink>

                    <button
                      onClick={logout}
                      className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                    >
                      Logout
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )}
        </div>

        {/* ================= MOBILE BUTTON ================= */}

        <button
          className="md:hidden text-white"
          onClick={() => setShowSearch(true)}
        >
          <Search size={28} />
        </button>

        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(true)}
        >
          <Menu size={28} />
        </button>
      </div>

      {/* ================= MOBILE DRAWER ================= */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-40"
              onClick={() => setIsOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.3 }}
              className="fixed top-0 left-0 h-full w-3/4 bg-black text-white p-6 z-50"
            >
              {/* Header */}
              <div className="flex justify-between items-center mb-8">
                <span className="text-xl font-bold text-pink-600">
                  RoomCare
                </span>
                <button onClick={() => setIsOpen(false)}>
                  <X size={28} />
                </button>
              </div>

              {/* Menu */}
              <ul className="space-y-5 text-base">
                
                {isAuthenticated ?(
                <li>
                  <NavLink
                    to="/tenent/dashboard"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-3 hover:bg-white/10 hover:text-pink-500 transition rounded-md "
                  >
                    <Home size={20}/>Dashboard
                  </NavLink>
                </li>):(<></>)}


                <li>
                  <NavLink
                    to="/"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-3 hover:bg-white/10 hover:text-pink-500 transition rounded-md "
                  >
                    <Home size={20} /> Home
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/rooms"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-3 hover:bg-white/10 hover:text-pink-500 transition rounded-md"
                  >
                    <Search size={20} /> Find Rooms
                  </NavLink>
                </li>

                {/* Owner Menu */}
                <li>
                  <button
                    className="flex items-center justify-between w-full"
                    onClick={() => setOwnerMenuMobile(!ownerMenuMobile)}
                  >
                    <span className="flex items-center gap-3 hover:bg-white/10 hover:text-pink-500 transition rounded-md">
                      <UserCog size={20} /> For Owners
                    </span>
                    <ChevronDown
                      size={18}
                      className={`transition ${
                        ownerMenuMobile ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {ownerMenuMobile && (
                      <motion.ul
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="pl-8 mt-3 space-y-3 text-sm text-gray-300"
                      >
                        <li>
                          <NavLink
                            to="/list-property"
                            onClick={() => setIsOpen(false)}
                          >
                            List Property
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/owner-login"
                            onClick={() => setIsOpen(false)}
                          >
                            Owner Login
                          </NavLink>
                        </li>
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </li>

                <li>
                  <NavLink
                    to="/services"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-3 hover:bg-white/10 hover:text-pink-500 transition rounded-md"
                  >
                    <Briefcase size={20} /> Services
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/about"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-3 hover:bg-white/10 hover:text-pink-500 transition rounded-md"
                  >
                    <Info size={20} /> About
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/contact"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-3 hover:bg-white/10 hover:text-pink-500 transition rounded-md"
                  >
                    <Phone size={20} /> Contact
                  </NavLink>
                </li>

                {/* Auth Section */}
                {!isAuthenticated ? (
                  <li className="pt-4">
                    <NavLink
                      to="/login"
                      onClick={() => setIsOpen(false)}
                      className="block text-center px-3 py-2 bg-pink-600 rounded-lg"
                    >
                      Login / Register
                    </NavLink>
                  </li>
                ) : (
                  <>
                    <li className="flex items-center gap-3 ">
                      <img
                        src={
                          user?.avatar ||
                          `https://ui-avatars.com/api/?name=${user?.name}`
                        }
                        alt="avatar"
                        className="w-8 h-8 rounded-full "
                      />
                      <span>{user?.name}</span>
                    </li>

                    <li>
                      <button
                        onClick={logout}
                        className="flex items-center gap-3 text-pink-500 hover:bg-white/10 hover:text-white transition rounded-md"
                      >
                        <LogOut size={20} /> Logout
                      </button>
                    </li>
                  </>
                )}
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
{/* 
      {!showSearch ? (
        <AnimatePresence>
          <motion.div className="absolute top-full left-0 w-full z-40">
            <SearchBar />
          </motion.div>
        </AnimatePresence>
      ) : (
        <></>
      )} */}

     
    </nav>
  );
}
