import React from "react";
import Navbar from "../component/navbar";
import CategoryProduct from "../component/categoryProduct";
import toast from "react-hot-toast";
import Footer from "../component/footer";
import Logo from "../assets/Logo/green_logo.png";

const Home = () => {
  
  const handleProductClick = () => {
    toast.success("Scroll down to view products 👇");
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#F5F5F5] text-[#1B5E20]">
      <Navbar />

      <section className="bg-gradient-to-b from-white to-[#E8F5E9] py-20 px-4 text-center border-b">
        {/* Logo */}
        <img
          src={Logo}
          alt="Maa Gayatri Logo"
          className="h-32 w-auto mx-auto mb-6 drop-shadow-lg animate-fadeIn"
        />

        <h1 className="text-4xl md:text-5xl font-bold animate-slideUp">
          Order Products on WhatsApp
        </h1>

        <p className="mt-4 text-[#5D4037] max-w-2xl mx-auto text-lg animate-fadeIn">
          High-quality agriculture products delivered fast. Choose — message —
          receive.
        </p>

       
        <a
          href="#products"
          onClick={handleProductClick}
          className="inline-block mt-8 bg-[#1B5E20] hover:bg-[#14521D] text-white px-8 py-3 rounded-xl font-semibold text-lg shadow-md hover:shadow-lg transition"
        >
          View Products 🚜
        </a>
      </section>

      <section className="py-20 px-4 bg-white">
        <h2 className="text-3xl font-bold text-center">How It Works</h2>

        <div className="max-w-6xl mx-auto mt-14 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {[
            {
              icon: "🛍️",
              title: "Choose Product",
              desc: "Explore seeds, cattlefeed, irrigation & more.",
            },
            {
              icon: "🔢",
              title: "Select Quantity",
              desc: "Customize how much you need for your farm.",
            },
            {
              icon: "📲",
              title: "Order on WhatsApp",
              desc: "Instant checkout with direct messaging.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-[#F9FFF9] p-8 rounded-2xl shadow-sm border hover:shadow-xl hover:-translate-y-1 transition"
            >
              <div className="text-5xl mb-4">{item.icon}</div>
              <h3 className="font-semibold text-xl">{item.title}</h3>
              <p className="mt-2 text-[#6D4C41] text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

     
      <section id="products" className="py-20 px-4 max-w-7xl mx-auto w-full">
        <h2 className="text-3xl font-bold mb-10">Our Products</h2>

        <CategoryProduct
          category="Cattlefeed"
          title="🐄 Cattlefeed Products"
          subtitle="Strong nutrition for cattle growth"
          
        />
        <CategoryProduct
          category="Seeds"
          title="🌱 Seed Products"
          subtitle="High-quality seeds for better yield"
          
        />
        <CategoryProduct
          category="Irrigation"
          title="💧 Irrigation Products"
          subtitle="Smart water solutions for farms"
          
        />
        <CategoryProduct
          category="Others"
          title="✨ Other Products"
          subtitle="Special farming essentials"
          
        />
      </section>

   
      <section className="bg-gradient-to-b from-white to-[#E8F5E9] py-20 px-4 border-t border-b">
        <h2 className="text-3xl font-bold text-center">Why Choose Us</h2>

        <div className="max-w-5xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {[
            {
              title: "🚀 Fast Ordering",
              desc: "No checkout forms. Just WhatsApp.",
            },
            {
              title: "🔐 No Login Needed",
              desc: "Order without creating an account.",
            },
            {
              title: "🤝 Direct Deal",
              desc: "No middleman. Direct communication.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="p-6 border rounded-xl bg-white hover:shadow-xl transition"
            >
              <h3 className="font-semibold text-xl">{item.title}</h3>
              <p className="text-sm mt-2 text-[#6D4C41] leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>


      <Footer />
    </div>
  );
};

export default Home;
