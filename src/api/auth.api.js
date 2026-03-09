import api from "./axios";

export const loginApi = (data) => api.post("/api/auth/login", data);
export const loginOtpApi = (data) => api.post("/api/auth/login-otp", data);
export const registerApi = (data) => api.post("/api/auth/register", data);
export const sendOtpApi = (mobile) =>
  api.post("/api/otp/send-otp", { mobile });
export const verifyOtpApi = (mobile, otp) =>
  api.post("/api/otp/verify-otp", { mobile, otp });

export const meApi = () => api.get("/api/auth/me");
