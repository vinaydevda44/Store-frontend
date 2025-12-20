import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const Signup = () => {
  const navigate = useNavigate();
  const BASE_URL=import.meta.env.VITE_BASE_URL

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    secret: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!formData.email || !formData.password || !formData.secret) {
      toast.error("All fields are required ❌");
      return;
    }

    setLoading(true);

    try {
      const res = await axios.post(
        `${BASE_URL}/store/auth/signup`,
        formData
      );

      if (res.data.status) {
        toast.success("Signup successful 🎉");
        navigate("/login");
      }

    } catch (err) {
      console.error("Error at signup", err);
      const msg =
        err.response?.data?.message || "Signup failed. Try again.";

      setError(msg);
      toast.error(msg);

    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F5F5] flex items-center justify-center px-4">
      <form
        className="bg-white w-full max-w-sm p-8 rounded-xl shadow-md border"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-semibold text-[#1B5E20] text-center mb-6">
          Admin Signup
        </h2>

        {error && (
          <p className="text-sm text-red-600 text-center mb-4">
            {error}
          </p>
        )}

       
        <div className="mb-4">
          <label className="block text-sm font-medium text-[#2E2E2E] mb-1">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Enter your email"
            className="w-full px-3 py-2 border rounded
                       focus:outline-none focus:ring-1
                       focus:ring-[#1B5E20] focus:border-[#1B5E20]"
          />
        </div>

        
        <div className="mb-4">
          <label className="block text-sm font-medium text-[#2E2E2E] mb-1">
            Password
          </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            placeholder="Enter your password"
            className="w-full px-3 py-2 border rounded
                       focus:outline-none focus:ring-1
                       focus:ring-[#1B5E20] focus:border-[#1B5E20]"
          />
        </div>

       
        <div className="mb-6">
          <label className="block text-sm font-medium text-[#2E2E2E] mb-1">
            Secret Code
          </label>
          <input
            type="password"
            name="secret"
            value={formData.secret}
            onChange={handleChange}
            required
            placeholder="Enter secret code"
            className="w-full px-3 py-2 border rounded
                       focus:outline-none focus:ring-1
                       focus:ring-[#1B5E20] focus:border-[#1B5E20]"
          />
        </div>

       
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#1B5E20] text-white py-2 rounded-lg
                     font-medium hover:bg-[#134E1A]
                     transition disabled:opacity-60"
        >
          {loading ? "Signing up..." : "Sign Up"}
        </button>

        
        <p className="text-sm text-[#4E4E4E] text-center mt-4">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-medium text-[#1B5E20] hover:underline"
          >
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
