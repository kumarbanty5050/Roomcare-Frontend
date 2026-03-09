import { createContext, useState } from "react";
import api from "../api/axios";

export const OwnerContext = createContext(null);

export const OwnerProvider = ({ children }) => {
  const [dashboard, setDashboard] = useState(null);
  const [rooms, setRooms] = useState([]);

  const loadDashboard = async () => {
    if (dashboard) return;
    const res = await api.get("/owner/dashboard");
    setDashboard(res.data);
  };

  const createRoom = async (data) => {
    const res = await api.post("/owner/rooms", data);
    setRooms((prev) => [...prev, res.data]);
  };

  return (
    <OwnerContext.Provider
      value={{
        dashboard,
        rooms,
        loadDashboard,
        createRoom,
      }}
    >
      {children}
    </OwnerContext.Provider>
  );
};
