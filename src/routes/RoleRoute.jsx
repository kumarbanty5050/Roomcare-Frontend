import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export default function RoleRoute({ role }) {
  const { user, loading } = useAuth();

  if (loading) return null;

  if (user?.role !== role) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
}
