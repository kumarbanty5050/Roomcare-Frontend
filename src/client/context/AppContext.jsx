import { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within AppProvider');
  }
  return context;
};

export const AppProvider = ({ children }) => {
  const [currentTab, setCurrentTab] = useState('home');
  const [user, setUser] = useState({
    id: '1',
    name: 'Rajesh Kumar',
    email: 'rajesh.kumar@email.com',
    phone: '+91 98765 43210',
    roomNumber: '401',
    propertyName: 'Green Tower Apartments',
    address: 'Sector 7, Bangalore',
  });

  const [rentStatus, setRentStatus] = useState({
    monthlyRent: 15000,
    paid: 15000,
    due: 0,
    status: 'paid', // 'paid', 'due', 'overdue'
    nextDueDate: '2024-03-01',
    lastPaidDate: '2024-02-01',
  });

  return (
    <AppContext.Provider
      value={{
        currentTab,
        setCurrentTab,
        user,
        setUser,
        rentStatus,
        setRentStatus,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
