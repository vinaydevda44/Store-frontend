import React from "react";
import Logo1 from "../assets/Logo/green_logo.png"; // <-- your logo path

const Footer = () => {

  const Phone=import.meta.env.VITE_PHONE
  return (
    <footer id="about" className="bg-white pt-12">

      
      <div className="max-w-7xl mx-auto px-6 pb-10 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        <div>
          <img
            src={Logo1}
            alt="My Store Logo"
            className="h-16 w-auto object-contain"
          />
          
          <p className="mt-4 text-[#6D4C41] text-sm leading-relaxed max-w-sm">
            Your trusted partner for quality agricultural solutions — 
            seeds, cattle feed, irrigation tools & other agro essentials.
          </p>
        </div>

        <div className="text-center md:text-left">
          <h3 className="font-semibold text-[#1B5E20] text-lg mb-3">
            Quick Links
          </h3>

          <ul className="space-y-2 text-sm font-medium">
            <li>
              <a href="/" className="hover:text-[#2E7D32] transition">
                Home
              </a>
            </li>
            <li>
              <a href="#products" className="hover:text-[#2E7D32] transition">
                Products
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-[#2E7D32] transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div className="text-center md:text-right">
          <h3 className="font-semibold text-[#1B5E20] text-lg mb-3">
            Contact Us
          </h3>

          <p className="text-sm text-[#6D4C41]">📍 Nahargarh, Dist- Mandsour, State-Madhyapradesh , India
            pincode-458558
          </p>

          <p className="text-sm text-[#6D4C41] my-2">
            📞 +{Phone}
          </p>

          <a
            href={`https://api.whatsapp.com/send?phone=${Phone}`}
            target="_blank"
            rel="noreferrer"
            className="inline-block mt-4 bg-[#1B5E20] text-white px-5 py-2 rounded-xl text-sm font-semibold hover:bg-[#14521D] transition"
          >
            📲 WhatsApp Order
          </a>
        </div>
      </div>

      
      <div className="bg-[#F5F5F5] py-3 border-t">
        <p className="text-center text-xs md:text-sm text-[#6D4C41]">
          © {new Date().getFullYear()} MAA GAYATRI | All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
