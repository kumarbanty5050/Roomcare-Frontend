// src/components/auth/Register.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import Input from "../../components/common/Input";
import Button from "../../components/common/Button";
import Page from "../../components/common/Page";
import { useAuth } from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";

export default function Register() {
  const { sendOtp, verifyOtp, register } = useAuth();

  const [step, setStep] = useState("mobile"); // mobile → otp → form → success
  const [role, setRole] = useState("tenant");
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [agree, setAgree] = useState(false);

  /* =====================
     VALIDATION
  ===================== */
  const validateFields = () => {
    if (!name.trim()) {
      Swal.fire("Name Required", "", "error");
      return false;
    }

    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      Swal.fire("Invalid Email", "", "error");
      return false;
    }

    const pwdRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&]).{8,}$/;
    if (!pwdRegex.test(password)) {
      Swal.fire(
        "Weak Password",
        "Min 8 chars, letters, numbers & special chars",
        "error",
      );
      return false;
    }

    if (!agree) {
      Swal.fire("Accept Terms", "Please accept terms & conditions", "error");
      return false;
    }

    return true;
  };

  /* =====================
     SEND OTP
  ===================== */
  const handleSendOtp = async () => {
    if (!mobile.match(/^[6-9]\d{9}$/)) {
      Swal.fire("Invalid Mobile", "", "error");
      return;
    }

    setLoading(true);
    try {
      await sendOtp(mobile);
      Swal.fire("OTP Sent", "Check your phone", "success");
      setStep("otp");
    } catch (err) {
      Swal.fire("Failed", err?.message || "Unable to send OTP", "error");
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

  /* =====================
     REGISTER
  ===================== */
  const handleRegister = async () => {
    if (!validateFields()) return;

    setLoading(true);
    try {
      await register({
        role,
        name,
        mobile,
        email,
        password,
      });

      Swal.fire("Success", "Registration complete", "success");
      setStep("success");
    } catch (err) {
      Swal.fire("Failed", err?.message || "Registration failed", "error");
    } finally {
      setLoading(false);
    }
  };

  /* =====================
     STEP INDICATOR
  ===================== */
  const StepIndicator = () => {
    const steps = ["Verify Mobile", "Enter OTP", "Fill Details", "Success"];
    const index = ["mobile", "otp", "form", "success"].indexOf(step);

    return (
      <div className="flex justify-between mb-6">
        {steps.map((s, i) => (
          <div
            key={s}
            className={`flex-1 text-center text-sm ${
              i === index ? "text-red-600 font-bold" : "text-gray-400"
            }`}
          >
            Step {i + 1}: {s}
          </div>
        ))}
      </div>
    );
  };

  return (
    <Page>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow-lg"
      >
        <p className="text-sm mb-2">
          <a href="/login" className="text-red-600 underline">
            Already have an account?
          </a>
        </p>

        <h2 className="text-2xl font-bold">Create Account</h2>
        <p className="text-pink-500 mb-4">Join Roomcare Today</p>

        <StepIndicator />

        {/* STEP 1 */}
        {step === "mobile" && (
          <>
            <Input
              label="Mobile Number"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
            />
            <div className="mt-2">
              <Button onClick={handleSendOtp} loading={loading}>
                Send OTP
              </Button>
            </div>
          </>
        )}

        {/* STEP 2 */}
        {step === "otp" && (
          <>
            <Input
              label="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
            <Button onClick={handleVerifyOtp} loading={loading}>
              Verify OTP
            </Button>
          </>
        )}

        {/* STEP 3 */}
        {step === "form" && (
          <>
            <div className="flex gap-4 mb-3">
              {["tenant", "owner"].map((r) => (
                <button
                  key={r}
                  onClick={() => setRole(r)}
                  className={`px-4 py-2 rounded border ${
                    role === r
                      ? "border-red-600 bg-red-50 font-semibold"
                      : "border-gray-300"
                  }`}
                >
                  {r}
                </button>
              ))}
            </div>

            <Input
              label="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
                className="absolute right-3 top-9"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeSlashIcon className="h-5 w-5" />
                ) : (
                  <EyeIcon className="h-5 w-5" />
                )}
              </button>
            </div>

            <label className="flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                checked={agree}
                onChange={() => setAgree(!agree)}
              />
              I agree to Terms & Conditions
            </label>

            <Button onClick={handleRegister} loading={loading}>
              Register
            </Button>
          </>
        )}

        {/* STEP 4 */}
        {step === "success" && (
          <div className="text-center">
            <h3 className="text-green-600 text-xl font-semibold">
              🎉 Registration Successful!
            </h3>
            <p>Welcome to Roomcare</p>
          </div>
        )}
      </motion.div>
    </Page>
  );
}
