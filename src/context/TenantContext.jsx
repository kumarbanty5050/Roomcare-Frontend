import { createContext, useState } from "react";
import api from "../api/axios";

export const TenantContext = createContext(null);

export const TenantProvider = ({ children }) => {
  const [dashboard, setDashboard] = useState(null);
  const [payments, setPayments] = useState([]);
  const [complaints, setComplaints] = useState([]);

  const loadDashboard = async () => {
    if (dashboard) return;
    const res = await api.get("/tenant/dashboard");
    setDashboard(res.data);
  };

  const loadPayments = async () => {
    if (payments.length) return;
    const res = await api.get("/tenant/payments");
    setPayments(res.data);
  };

  const createComplaint = async (data) => {
    const res = await api.post("/tenant/complaints", data);
    setComplaints((prev) => [...prev, res.data]);
  };

  return (
    <TenantContext.Provider
      value={{
        dashboard,
        payments,
        complaints,
        loadDashboard,
        loadPayments,
        createComplaint,
      }}
    >
      {children}
    </TenantContext.Provider>
  );
};
