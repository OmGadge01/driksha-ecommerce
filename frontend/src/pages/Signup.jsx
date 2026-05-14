<<<<<<< HEAD
import AuthLayout from "../components/auth/AuthLayout";
import AuthCard from "../components/auth/AuthCard";
import Input from "../components/ui/Input";
import PasswordInput from "../components/ui/PasswordInput";
import Button from "../components/ui/SignUpButton";
import SocialButton from "../components/ui/SocialButton";
import Checkbox from "../components/ui/Checkbox";
import { motion } from "framer-motion";
import googleLogo from "../assets/Google-logo.png";

const Signup = () => {
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
                Create Account
              </h1>

              <p
                className="
                  mt-1
                  text-sm
                  text-gray-900
                "
              >
                Start your modern shopping journey today.
              </p>
            </div>

          

          <div className="space-y-4">

            <Input
              label="Full Name"
              placeholder="John Doe"
            />

            <Input
              label="Email Address"
              type="email"
              placeholder="john@example.com"
            />

            <PasswordInput
              label="Password"
              placeholder="Create password"
            />

            <PasswordInput
              label="Confirm Password"
              placeholder="Confirm password"
            />

           

            <div className="pt-1">
              <Checkbox label="I agree to Terms & Privacy Policy" />
            </div>

            

            <div className="pt-2">
              <Button>
                Create Account
              </Button>
            </div>


            <div className="space-y-3">
              <SocialButton
                text="Continue with Google"
                icon={google}
              />
            </div>

         
            <div className="pt-3 text-center">
              <p className="text-sm text-gray-900">
                Already have an account?{" "}
                <span
                  className="
                    text-gray-900
                    font-medium
                    hover:underline
                    cursor-pointer
                  "
                >
                  Sign In
                </span>
              </p>
            </div>
          </div>
        </AuthCard>
      </motion.div>
    </AuthLayout>
  );
};

=======
import AuthLayout from "../components/auth/AuthLayout";
import AuthCard from "../components/auth/AuthCard";
import Input from "../components/ui/Input";
import PasswordInput from "../components/ui/PasswordInput";
import Button from "../components/ui/SignUpButton";
import SocialButton from "../components/ui/SocialButton";
import Checkbox from "../components/ui/Checkbox";
import { motion } from "framer-motion";
import google from "../../public/Google logo.png"

const Signup = () => {
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
                Create Account
              </h1>

              <p
                className="
                  mt-1
                  text-sm
                  text-gray-900
                "
              >
                Start your modern shopping journey today.
              </p>
            </div>

          

          <div className="space-y-4">

            <Input
              label="Full Name"
              placeholder="John Doe"
            />

            <Input
              label="Email Address"
              type="email"
              placeholder="john@example.com"
            />

            <PasswordInput
              label="Password"
              placeholder="Create password"
            />

            <PasswordInput
              label="Confirm Password"
              placeholder="Confirm password"
            />

           

            <div className="pt-1">
              <Checkbox label="I agree to Terms & Privacy Policy" />
            </div>

            

            <div className="pt-2">
              <Button>
                Create Account
              </Button>
            </div>


            <div className="space-y-3">
              <SocialButton
                text="Continue with Google"
                icon={google}
              />
            </div>

         
            <div className="pt-3 text-center">
              <p className="text-sm text-gray-900">
                Already have an account?{" "}
                <span
                  className="
                    text-gray-900
                    font-medium
                    hover:underline
                    cursor-pointer
                  "
                >
                  Sign In
                </span>
              </p>
            </div>
          </div>
        </AuthCard>
      </motion.div>
    </AuthLayout>
  );
};

>>>>>>> integration
export default Signup;