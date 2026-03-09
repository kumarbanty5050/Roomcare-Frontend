import {
  Home,
  Calendar,
  CreditCard,
  AlertCircle,
  FileText,
  User,
} from "lucide-react";

import { NavLink } from "react-router-dom";

/* ===========================================
   BOTTOM NAV LINKS (URL-BASED)
=========================================== */
const tabs = [
  { to: "/tenant/dashboard", label: "Home", icon: Home },
  { to: "/tenant/bookings", label: "Bookings", icon: Calendar },
  { to: "/tenant/payments", label: "Payments", icon: CreditCard },
  { to: "/tenant/complaints", label: "Issues", icon: AlertCircle },
  { to: "/tenant/notices", label: "Notices", icon: FileText },
  { to: "/tenant/profile", label: "Profile", icon: User },
];

export const BottomNav = () => {
  return (
    <nav className="fixed lg:hidden bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-30">
      <div className="flex items-center justify-around px-1 py-2">

        {tabs.map((tab) => {
          const Icon = tab.icon;

          return (
            <NavLink
              key={tab.to}
              to={tab.to}
              className={({ isActive }) =>
                `flex flex-col items-center gap-1 px-2 py-2 rounded-lg transition-all duration-200 text-[11px] font-medium ${
                  isActive
                    ? "text-primary bg-primary/10"
                    : "text-gray-600 hover:bg-gray-100"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <Icon
                    size={20}
                    className={isActive ? "scale-110" : ""}
                  />

                  {/* ALWAYS SHOW LABEL */}
                  <span>{tab.label}</span>
                </>
              )}
            </NavLink>
          );
        })}

      </div>
    </nav>
  );
};