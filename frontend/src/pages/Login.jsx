import { useState } from "react";

function Login() {
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
    <div className="min-h-screen bg-[#f5f5ff] flex items-center justify-center px-4">
      <div className="bg-white border border-[#e0e0ff] rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-[#1a1a2e] text-xl font-medium mb-1">
          Welcome back
        </h2>
        <p className="text-gray-400 text-sm mb-6">
          Sign in to continue shopping
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-gray-500 text-sm mb-1 block">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full bg-[#f9f9ff] border border-[#e0e0ff] rounded-xl px-4 py-3 text-sm text-[#1a1a2e] outline-none placeholder-gray-300 focus:border-[#6C63FF] transition"
            />
          </div>
          <div>
            <label className="text-gray-500 text-sm mb-1 block">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-full bg-[#f9f9ff] border border-[#e0e0ff] rounded-xl px-4 py-3 text-sm text-[#1a1a2e] outline-none placeholder-gray-300 focus:border-[#6C63FF] transition"
            />
            <div className="text-right mt-1">
              <a href="#" className="text-[#6C63FF] text-xs">
                Forgot password?
              </a>
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-[#6C63FF] hover:bg-[#5a52e0] text-white rounded-xl py-3 text-sm font-medium transition"
          >
            Sign In
          </button>
        </form>
        <div className="flex items-center gap-3 my-5">
          <div className="flex-1 h-px bg-[#ebebff]"></div>
          <span className="text-gray-300 text-xs">OR</span>
          <div className="flex-1 h-px bg-[#ebebff]"></div>
        </div>
        <button className="w-full flex items-center justify-center gap-2 bg-white border border-[#e0e0ff] rounded-xl py-3 text-sm text-gray-500 hover:border-[#6C63FF] transition">
          <span className="text-[#FF6584] font-semibold">G</span>
          Continue with Google
        </button>
        <p className="text-center text-gray-400 text-sm mt-5">
          Don't have an account?{" "}
          <a href="#" className="text-[#6C63FF] font-medium">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}

export default Login;
