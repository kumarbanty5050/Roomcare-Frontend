import "./global.css";
import { Toaster } from "./components/ui/toaster";
import { Toaster as Sonner } from "./components/ui/sonner";
import { TooltipProvider } from "./components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppProvider, useApp } from "./context/AppContext";
import { MainLayout } from "./components/layout/MainLayout";
import Home from "./pages/Home";
import Bookings from "./pages/Bookings";
import Payments from "./pages/Payments";
import Complaints from "./pages/Complaints";
import Notices from "./pages/Notices";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const AppRoutes = () => {
  const { currentTab } = useApp();

  const renderPage = () => {
    switch (currentTab) {
      case "bookings": return <Bookings />;
      case "payments": return <Payments />;
      case "complaints": return <Complaints />;
      case "notices": return <Notices />;
      case "profile": return <Profile />;
      default: return <Home />;
    }
  };

  return <MainLayout>{renderPage()}</MainLayout>;
};

export default function ClientApp() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <>
          <AppProvider>
            <Routes>
              <Route path="/" element={<AppRoutes />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </AppProvider>
        </>
      </TooltipProvider>
    </QueryClientProvider>
  );
}