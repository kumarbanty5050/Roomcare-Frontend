import {
  Home,
  Calendar,
  CreditCard,
  AlertCircle,
  FileText,
  User,
  X,
} from "lucide-react";

import { NavLink } from "react-router-dom";

/* ===========================================
   SIDEBAR LINKS (URL-BASED)
=========================================== */
const tabs = [
  { to: "/tenant/dashboard", label: "Home", icon: Home },
  { to: "/tenant/bookings", label: "Bookings", icon: Calendar },
  { to: "/tenant/payments", label: "Payments", icon: CreditCard },
  { to: "/tenant/complaints", label: "Issues & Complaints", icon: AlertCircle },
  { to: "/tenant/notices", label: "Notices", icon: FileText },
  { to: "/tenant/profile", label: "Profile Settings", icon: User },
];

export const Sidebar = ({ isOpen, onClose }) => {
  const handleCloseMobile = () => {
    if (window.innerWidth < 1024) onClose();
  };

  return (
    <>
      {/* ================= MOBILE OVERLAY ================= */}
      {isOpen && (
        <div
          onClick={onClose}
          className="lg:hidden fixed inset-0 bg-black/50 z-20"
        />
      )}

      {/* ================= SIDEBAR ================= */}
      <aside
        className={`fixed lg:static left-0 top-0 h-screen w-72 bg-white border-r border-gray-200 overflow-y-auto z-20 lg:z-0 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        {/* Close Button (Mobile) */}
        <div className="lg:hidden flex justify-end p-4 border-b border-gray-200">
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* ================= NAVIGATION ================= */}
        <nav className="p-4 space-y-2">
          {tabs.map((tab) => {
            const Icon = tab.icon;

            return (
              <NavLink
                key={tab.to}
                to={tab.to}
                onClick={handleCloseMobile}
                className={({ isActive }) =>
                  `w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 font-medium hover:translate-x-1 ${
                    isActive
                      ? "bg-primary/10 text-primary"
                      : "text-gray-700 hover:bg-gray-100"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <Icon size={20} />
                    <span>{tab.label}</span>

                    {isActive && (
                      <div className="ml-auto w-1.5 h-6 bg-primary rounded-full" />
                    )}
                  </>
                )}
              </NavLink>
            );
          })}
        </nav>
      </aside>
    </>
  );
};