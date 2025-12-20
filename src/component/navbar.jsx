import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo1 from "../assets/Logo/Logo2.png";
import toast from "react-hot-toast";

const Navbar = () => {
  const navigate = useNavigate();

   const whatsappPhone = import.meta.env.VITE_PHONE;
  
  const isLoggedIn = Boolean(localStorage.getItem("token"));

  const handleLogout = () => {
    localStorage.removeItem("token");

    toast.success("Logged out successfully 👋");

    navigate("/");
  };

  const handleAdminClick = () => {
    toast("Redirecting to admin login...", {
      icon: "🔐",
    });
  };

  const handleOrderClick = () => {
    toast.success("Opening WhatsApp 📲");
  };

  return (
    <header className="sticky top-0 z-50 bg-[#1B5E20] shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        
       
        <Link to="/" className="flex items-center gap-2">
          <img
            src={Logo1}
            alt="Logo"
            className="h-16 w-auto object-contain"
          />
        </Link>

        
        <nav className="hidden md:flex items-center gap-8 text-white font-medium">
          <Link
            to="/"
            className="hover:text-[#C8E6C9] transition"
          >
            Home
          </Link>

          <a
            href="#products"
            className="hover:text-[#C8E6C9] transition"
          >
            Products
          </a>

          <a
            href="#about"
            className="hover:text-[#C8E6C9] transition"
          >
            Contact
          </a>
        </nav>

    
        <div className="flex items-center gap-4">

          <a
           href={`https://api.whatsapp.com/send?phone=${whatsappPhone}`}
            target="_blank"
            rel="noreferrer"
            onClick={handleOrderClick}
            className="
              bg-white text-[#1B5E20]
              hover:bg-[#E8F5E9]
              px-4 py-2 rounded-xl
              text-sm font-semibold
              transition
              flex items-center gap-1
            "
          >
            📲 Order
          </a>

         
          {isLoggedIn ? (
            <>
              <Link
                to="/dashboard"
                className="text-sm font-medium text-white hover:text-[#C8E6C9] transition"
              >
                Dashboard
              </Link>

              <button
                onClick={handleLogout}
                className="text-sm font-medium text-red-200 hover:text-red-400 transition"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              to="/login"
              onClick={handleAdminClick}
              className="text-sm font-medium text-white hover:text-[#C8E6C9] transition"
            >
              Admin
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
