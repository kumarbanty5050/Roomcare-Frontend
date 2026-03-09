import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Input from "../../components/common/Input";
import Button from "../../components/common/Button";
import Page from "../../components/common/Page";
import Swal from "sweetalert2";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { useAuth } from "../../hooks/useAuth";

export default function Login() {
  const navigate = useNavigate();
  const { login, loginOtp,sendOtp,verifyOtp } = useAuth();

  const [tab, setTab] = useState("password"); // password | otp
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // OTP timer state
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    let interval;
    if (timer > 0) {
      interval = setInterval(() => setTimer((t) => t - 1), 1000);
    }
    return () => clearInterval(interval);
  }, [timer]);

  const validatePassword = (pwd) => {
    const regex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    return regex.test(pwd);
  };

  /* ======================================================
     LOGIN HANDLER (PASSWORD / OTP)
  ====================================================== */
 const handleLogin = async () => {
  setLoading(true);
  try {
    let res;

    if (tab === "password") {
      if (!validatePassword(password)) {
        Swal.fire({
          icon: "error",
          title: "Weak Password",
          text:
            "Password must include letters, numbers, and special characters (min 8 chars).",
        });
        return;
      }

      res = await login({ mobile, password });
    } else {
      res = await loginOtp({ mobile, otp });
    }

    if (!res?.user?.role) {
      throw new Error("Role missing from login response");
    }

    redirectByRole(res.user.role);

    Swal.fire({
      icon: "success",
      title: "Login Successful",
      text: "Welcome back!",
    });
  } catch (err) {
    Swal.fire({
      icon: "error",
      title: "Login Failed",
      text:
        err?.response?.data?.message ||
        err?.message ||
        "Please check your credentials or OTP.",
    });
  } finally {
    setLoading(false);
  }
};


  /* ======================================================
     SEND OTP
  ====================================================== */
  const handleSendOtp = async () => {
    if (!mobile) {
      Swal.fire({
        icon: "warning",
        title: "Enter Mobile Number",
        text: "Please provide a valid mobile number.",
      });
      return;
    }

    setLoading(true);
    try {
      // backend: POST /auth/login-otp (send otp)
      // await loginOtp({ mobile, sendOnly: true });
       await sendOtp(mobile);
      Swal.fire({
        icon: "success",
        title: "OTP Sent",
        text: "Check your phone for the OTP.",
      });

      // start timer
      setTimer(60);
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Failed to Send OTP",
        text: err?.response?.data?.message || "Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };
  /* =====================
       VERIFY OTP
    ===================== */
    const handleVerifyOtp = async () => {
      if (!otp.trim()) {
        Swal.fire("OTP Required", "", "error");
        return;
      }
  
      setLoading(true);
      try {
        await verifyOtp(mobile, otp);
        Swal.fire("Verified", "Mobile verified", "success");
        setStep("form");
      } catch (err) {
        Swal.fire("Invalid OTP", err?.message || "", "error");
      } finally {
        setLoading(false);
      }
    };

  /* ======================================================
     ROLE BASED REDIRECT
  ====================================================== */
 const redirectByRole = (role) => {
  const normalizedRole = role?.toLowerCase();

  console.log("Login success, redirecting...", normalizedRole);

  if (normalizedRole === "tenant") {
    navigate("/tenant/dashboard", { replace: true });
  } else if (normalizedRole === "owner") {
    navigate("/owner/dashboard", { replace: true });
  } else {
    navigate("/", { replace: true });
  }
};


  return (
    <Page>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow-lg w-full sm:w-11/12"
      >
        <h2 className="text-2xl font-bold mb-1">Welcome back</h2>
        <p className="text-pink-500 mb-2">
          Login to your Roomcare account
        </p>

        {/* ================= TABS ================= */}
        <div className="flex mb-6 border-b">
          <button
            className={`flex-1 py-2 ${
              tab === "password"
                ? "border-b-2 border-red-600 font-semibold"
                : ""
            }`}
            onClick={() => setTab("password")}
          >
            Login with Password
          </button>
          <button
            className={`flex-1 py-2 ${
              tab === "otp"
                ? "border-b-2 border-red-600 font-semibold"
                : ""
            }`}
            onClick={() => setTab("otp")}
          >
            Login with OTP
          </button>
        </div>

        {/* ================= PASSWORD LOGIN ================= */}
        {tab === "password" ? (
          <div className="space-y-4">
            <Input
              label="Mobile Number"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              placeholder="+91 9876543210"
            />

            <div className="relative">
              <Input
                label="Password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                className="absolute right-3 top-9 text-gray-500"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeSlashIcon className="h-5 w-5" />
                ) : (
                  <EyeIcon className="h-5 w-5" />
                )}
              </button>
            </div>

            <div className="flex justify-between text-sm">
              <a href="/forgot" className="text-red-600">
                Forgot password?
              </a>
              <a href="/register" className="text-yellow-600">
                Register?
              </a>
            </div>

            <Button onClick={handleLogin} loading={loading}>
              Login
            </Button>
          </div>
        ) : (
          /* ================= OTP LOGIN ================= */
          <div className="space-y-4">
            <Input
              label="Mobile Number"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              placeholder="+91 9876543210"
            />

            <Button
              onClick={handleSendOtp}
              loading={loading}
              disabled={!mobile || timer > 0}
            >
              {timer > 0 ? `Resend OTP in ${timer}s` : "Send OTP"}
            </Button>

            <Input
              label="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              placeholder="123456"
            />

            <Button onClick={handleLogin} loading={loading}>
              Verify & Login
            </Button>
          </div>
        )}
      </motion.div>
    </Page>
  );
}
