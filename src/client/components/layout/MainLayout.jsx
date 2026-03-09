import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { BottomNav } from "./BottomNav";
import Navbar from "../../../components/navigation/Navbar";

export const MainLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
       <> 
       <div className="mb-14">

         <Navbar/>
       </div>
    <div className="flex flex-col h-screen bg-gray-50 ">
      {/* Header */}
      {/* <Header
        isOpen={sidebarOpen}
        onMenuClick={() => setSidebarOpen(true)}
        onClose={() => setSidebarOpen(false)}
      /> */}

      {/* Main Content Area */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto pb-20 lg:pb-6">
          <div className="animate-fade-in">
            <Outlet />
          </div>
        </main>
      </div>

      {/* Bottom Navigation (Mobile only) */}
      <BottomNav />
    </div>
    </>
  );
};
