import { createContext, useEffect, useState } from "react";
import {
  loginApi,
  loginOtpApi,
  registerApi,
  sendOtpApi,
  verifyOtpApi,
  meApi,
} from "../api/auth.api";
import {
  setTokens,
  clearTokens,
  getAccessToken,
  getRefreshToken,
} from "../utils/token";
import axios from "axios";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  /* ================= INIT AUTH (ON REFRESH) ================= */
  useEffect(() => {
    const init = async () => {
      const accessToken = getAccessToken();
      const refreshToken = getRefreshToken();

      if (!accessToken || !refreshToken) {
        setLoading(false);
        return;
      }

      try {
        const res = await meApi();
        setUser(res.data.user);
        setRole(res.data.user.role);
        setIsAuthenticated(true);
      } catch (err) {
        // If 401, try refresh manually
        if (err.response?.status === 401) {
          try {
            const refreshToken = getRefreshToken();
            const res = await axios.post(
              `${import.meta.env.VITE_API_BASE_URL}/api/auth/refresh`,
              { refreshToken },
            );
            setTokens(res.data.accessToken, res.data.refreshToken);
            setUser(res.data.user);
            setRole(res.data.user.role);
            setIsAuthenticated(true);
          } catch (refreshErr) {
            clearTokens();
            setUser(null);
            setRole(null);
            setIsAuthenticated(false);
          }
        }
      } finally {
        setLoading(false);
      }
    };

    init();
  }, []);

  /* ================= LOGIN ================= */
  const login = async (credentials) => {
    try {
      const res = await loginApi(credentials);
      setTokens(res.data.accessToken, res.data.refreshToken);
      setUser(res.data.user);
      setRole(res.data.user.role);
      setIsAuthenticated(true);
      return res.data;
    } catch (err) {
      throw err.response?.data || err;
    }
  };

  /* ================= LOGIN WITH OTP ================= */
  const loginOtp = async (data) => {
    try {
      const res = await loginOtpApi(data);
      setTokens(res.data.accessToken, res.data.refreshToken);
      setUser(res.data.user);
      setRole(res.data.user.role);
      setIsAuthenticated(true);
      return res.data;
    } catch (err) {
      throw err.response?.data || err;
    }
  };

  /* ================= OTP ================= */
  const sendOtp = async (mobile) => {
    const res = await sendOtpApi(mobile);
    return res.data;
  };

  const verifyOtp = async (mobile, otp) => {
    const res = await verifyOtpApi(mobile, otp);
    return res.data;
  };

  /* ================= REGISTER ================= */
  const register = async (data) => {
    const res = await registerApi(data);
    return res.data;
  };

  /* ================= LOGOUT ================= */
  const logout = () => {
    clearTokens();
    setUser(null);
    setRole(null);
    setIsAuthenticated(false);
    window.location.href = "/login"; // ✅ redirect
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        role,
        isAuthenticated,
        loading,
        login,
        loginOtp,
        register,
        logout,
        sendOtp,
        verifyOtp,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
