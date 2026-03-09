import { Outlet } from "react-router-dom";
import Navbar from "../navigation/Navbar";
import Footer from "../navigation/Footer";

export default function PublicLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 pt-16">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}