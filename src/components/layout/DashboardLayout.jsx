import { Outlet } from "react-router-dom";
import Navbar from "../navigation/Navbar";
import { MainLayout } from "../../client/components/layout/MainLayout";
export default function DashboardLayout() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      {/* <main className="max-w-7xl mx-auto p-6"> */}
        <Outlet />
      {/* </main> */}
    </div>
  );
}