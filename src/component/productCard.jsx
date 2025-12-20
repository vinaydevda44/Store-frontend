import React, { useState } from "react";

const ProductCard = ({ product}) => {
  const [qty, setQty] = useState(1);

  
  const whatsappPhone = import.meta.env.VITE_PHONE;
  console.log(whatsappPhone)

  if (!product) return null;

  const increase = () => setQty((prev) => prev + 1);
  const decrease = () => qty > 1 && setQty((prev) => prev - 1);

  const message = encodeURIComponent(
    `Namaste 🙏, mujhe chahiye:\n\n` +
      `🛒 Product: ${product.name}\n` +
      `💰 Price: ₹${product.price}\n` +
      `📦 Quantity: ${qty}\n`
  );

  return (
    <div
      className="
        bg-white border rounded-2xl shadow-sm
        hover:shadow-lg hover:-translate-y-1
        transition-all duration-300
        p-4 flex flex-col
      "
    >
      
      <div className="overflow-hidden rounded-xl bg-gray-50">
        <img
          src={product.image}
          alt={product.name}
          className="
            h-40 w-full object-contain
            transition-transform duration-300
            hover:scale-105
          "
        />
      </div>

      
      <h3 className="mt-3 font-semibold text-lg text-[#1B5E20]">
        {product.name}
      </h3>

      <p className="text-sm text-[#5D4037] mt-1 line-clamp-2">
        {product.description || "High-quality product for your needs"}
      </p>

      
      <p className="mt-2 font-bold text-lg text-[#2E7D32]">
        ₹{product.price}
      </p>

    
      <div className="flex items-center gap-3 mt-4">
        <span className="text-sm font-medium text-gray-600">Quantity</span>

        <button
          onClick={decrease}
          className="
            w-8 h-8 flex items-center justify-center
            border rounded-lg text-lg
            hover:bg-gray-100 active:scale-95
            transition
          "
        >
          −
        </button>

        <span className="font-semibold w-6 text-center">{qty}</span>

        <button
          onClick={increase}
          className="
            w-8 h-8 flex items-center justify-center
            border rounded-lg text-lg
            hover:bg-gray-100 active:scale-95
            transition
          "
        >
          +
        </button>
      </div>

  
    <a
  href={`https://api.whatsapp.com/send?phone=${whatsappPhone}&text=${message}`}
  target="_blank"
  rel="noreferrer"
  className="
    mt-5 text-center
    bg-[#1B5E20] text-white
    hover:bg-[#2E7D32]
    py-2.5 rounded-xl font-semibold
    transition-all duration-300
    flex items-center justify-center gap-2
  "
>
  📲 Order on WhatsApp
</a>

    </div>
  );
};

export default ProductCard;
