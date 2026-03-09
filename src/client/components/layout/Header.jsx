import { Bell, Menu, X } from "lucide-react";
import { useApp } from "../../context/AppContext";

export const Header = ({ isOpen, onMenuClick, onClose }) => {
  const { user } = useApp();

  const handleMenuToggle = () => {
    if (isOpen) onClose();
    else onMenuClick();
  };

  return (
    <header className="sticky top-0 z-40  bg-white border-b border-gray-200 shadow-sm">

      <div className="px-4 py-4 sm:px-6 lg:px-8">

        <div className="flex items-center justify-between">

          {/* ================= LEFT SIDE ================= */}
          <div className="flex items-center gap-2">

            {/* Menu / Close Button (Mobile) */}
            <button
              onClick={handleMenuToggle}
              className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-all duration-300"
            >
              {/* Animated Icon Swap */}
              <div className="relative w-5 h-5">

                {/* Menu Icon */}
                <Menu
                  size={20}
                  className={`absolute transition-all duration-300 ${
                    isOpen
                      ? "opacity-0 rotate-90 scale-75"
                      : "opacity-100 rotate-0 scale-100"
                  }`}
                />

                {/* X Icon */}
                <X
                  size={20}
                  className={`absolute transition-all duration-300 ${
                    isOpen
                      ? "opacity-100 rotate-0 scale-100"
                      : "opacity-0 -rotate-90 scale-75"
                  }`}
                />

              </div>
            </button>

            {/* App Name */}
            <h1 className="text-xl font-bold text-primary select-none">
              Roomcare
            </h1>

          </div>

          {/* ================= RIGHT SIDE ================= */}
          <div className="flex items-center gap-3 sm:gap-4">

            {/* Notification */}
            <button className="relative p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
              <Bell size={20} />
              <span className="absolute top-1 right-1 w-2 h-2 bg-destructive rounded-full"></span>
            </button>

            {/* Avatar */}
            <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
              <span className="text-sm font-semibold text-primary">
                {user?.name?.charAt(0) || "U"}
              </span>
            </div>

          </div>

        </div>
      </div>
    </header>
  );
};