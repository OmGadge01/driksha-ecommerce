import AuthLayout from "../components/auth/AuthLayout";
import AuthCard from "../components/auth/AuthCard";
import Input from "../components/ui/Input";
import PasswordInput from "../components/ui/PasswordInput";
import Button from "../components/ui/Button";
import SocialButton from "../components/ui/SocialButton";
import { motion } from "framer-motion";
import google from "../../public/Google-logo.png";
import { useState } from "react";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <AuthLayout>
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.45 }}
        className="w-full flex justify-center"
      >
        <AuthCard>

           <div className="text-center">
              <h1
                className="
                  text-2xl
                  font-semibold
                  tracking-tight
                 text-gray-800
                "
              >
                Welcome back!
                </h1>

              <p
                className="
                  mt-1
                  text-sm
                  text-gray-900
                "
              >
               Sign in to continue shopping.
              </p>
            </div>

          <div className="space-y-4">

            <Input
              label="Email Address"
              type="email"
              name="email"
              placeholder="john@example.com"
              value={formData.email}
              onChange={handleChange}
            />

            <div>
              <PasswordInput
                label="Password"
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
              />
              <div className="text-right mt-1">
                <span className="text-xs text-white/60 hover:text-white cursor-pointer transition">
                  Forgot password?
                </span>
              </div>
            </div>

            <div className="pt-2">
              <Button onClick={handleSubmit}>
                Sign In
              </Button>
            </div>

            <div className="space-y-3">
              <SocialButton
                text="Continue with Google"
                icon={google}
              />
            </div>

            <div className="pt-3 text-center">
              <p className="text-sm text-white/70">
                Don't have an account?{" "}
                <span className="text-white font-medium hover:underline cursor-pointer">
                  Sign Up
                </span>
              </p>
            </div>

          </div>
        </AuthCard>
      </motion.div>
    </AuthLayout>
  );
};

export default Login;