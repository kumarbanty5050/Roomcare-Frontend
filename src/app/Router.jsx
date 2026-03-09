import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

/* ================= REACT QUERY ================= */
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();

/* ================= LAYOUTS ================= */
import PublicLayout from "../components/layout/PublicLayout";
import AuthLayout from "../components/layout/AuthLayout";
import DashboardLayout from "../components/layout/DashboardLayout";

/* ================= PUBLIC PAGES ================= */
import Home from "../pages/public/Home";
import AboutUs from "../pages/public/about/AboutUs";
import Services from "../pages/public/services/Services";
import Contact from "../pages/public/contact/Contact";
import Listings from "../pages/public/listing/Listings";
import BoyHostel from "../pages/public/boyHostel/BoyHostel";
import PropertyDetails from "../pages/public/PropertyDetails";

/* ================= AUTH PAGES ================= */
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";

/* ================= TENANT (CLIENT APP) ================= */
import { AppProvider } from "../client/context/AppContext";
import TenantDashboard from "../pages/tenant/TenantDashboard";
import { MainLayout } from "../client/components/layout/MainLayout";

import TenantHome from "../client/pages/Home";
import Bookings from "../client/pages/Bookings";
import Payments from "../client/pages/Payments";
import Complaints from "../client/pages/Complaints";
import Notices from "../client/pages/Notices";
import Profile from "../client/pages/Profile";
import NotFound from "../client/pages/NotFound";

/* ================= OWNER ================= */
import OwnerDashboard from "../pages/owner/OwnerDashboard";

/* ================= UI PROVIDERS ================= */
import { Toaster } from "../client/components/ui/toaster";
import { Toaster as Sonner } from "../client/components/ui/sonner";
import { TooltipProvider } from "../client/components/ui/tooltip";

/* ======================================================
   AUTH + ROLE GUARD
====================================================== */
const PrivateRoute = ({ role }) => {
  const { isAuthenticated, role: userRole, loading } = useAuth();

  if (loading) return null;
  if (!isAuthenticated) return <Navigate to="/login" replace />;
  if (role && role !== userRole)
    return <Navigate to="/unauthorized" replace />;

  return <Outlet />;
};

/* ======================================================
   MAIN ROUTER
====================================================== */
export default function Router() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />

        <AppProvider>
          <Routes>

            {/* ================= PUBLIC ================= */}
            <Route element={<PublicLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/listings" element={<Listings />} />
              <Route path="/boys-hostels" element={<BoyHostel />} />
              <Route path="/property/:propertyId" element={<PropertyDetails />} />
            </Route>

            {/* ================= AUTH ================= */}
            <Route element={<AuthLayout />}>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Route>

            {/* ================= TENANT ================= */}
            <Route element={<PrivateRoute role="tenant" />}>
              <Route element={<MainLayout/>}>

                <Route path="/tenant/dashboard" element={<TenantHome />} />
                {/* <Route path="/tenant/dashboard" element={<TenantDashboard />} /> */}
                <Route path="/tenant/bookings" element={<Bookings />} />
                <Route path="/tenant/payments" element={<Payments />} />
                <Route path="/tenant/complaints" element={<Complaints />} />
                <Route path="/tenant/notices" element={<Notices />} />
                <Route path="/tenant/profile" element={<Profile />} />
                <Route path="/tenant/*" element={<NotFound />} />

              </Route>
            </Route>

            {/* ================= OWNER ================= */}
            <Route element={<PrivateRoute role="owner" />}>
              <Route element={<DashboardLayout />}>
                <Route path="/owner" element={<OwnerDashboard />} />
                <Route path="/owner/dashboard" element={<OwnerDashboard />} />
              </Route>
            </Route>

            {/* ================= GLOBAL FALLBACK ================= */}
            <Route path="*" element={<Navigate to="/" replace />} />

          </Routes>
        </AppProvider>

      </TooltipProvider>
    </QueryClientProvider>
  );
}