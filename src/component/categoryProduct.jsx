import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./productCard";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const CategoryProduct = ({
  category,
  title,
  subtitle,
  phone,
}) => {
  const BASE_URL=import.meta.env.VITE_BASE_URL
  const LIMIT = 4;
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get(
          `${BASE_URL}/store/product/getcategory/${category}`
        );

        setProducts(res.data.data || []);

      } catch (err) {
        setError("Failed to load products");
        console.error(err);

        toast.error(`Failed to load ${category} ❌`, {
          position: "bottom-center",
          duration: 1500,
        });

      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [category]);

  if (loading) {
    return (
      <section className="max-w-7xl mx-auto px-4 py-12 animate-pulse">
        <div className="h-8 w-40 bg-gray-300 rounded mb-6 mx-auto"></div>

        <div className="flex gap-6">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="flex-1 h-72 bg-gray-200 rounded-xl"
            ></div>
          ))}
        </div>
      </section>
    );
  }

  
  if (error) {
    return (
      <p className="text-center text-red-500 mt-10 font-medium">
        {error}
      </p>
    );
  }

  const visibleProducts = products.slice(0, LIMIT);

  const handleViewAll = () => {
    toast("Opening category...", {
      icon: "📦",
      duration: 1200,
      position: "bottom-center",
    });

    navigate(`/products/${category}`);
  };

  

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
     
      <div className="mb-6 text-center">
        <h2 className="text-3xl font-bold text-[#1B5E20]">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-2 text-[#6D4C41] text-sm">
            {subtitle}
          </p>
        )}
      </div>

      <div className="flex flex-wrap gap-6">
        {visibleProducts.length === 0 ? (
          <p className="w-full text-center text-gray-500">
            No products available
          </p>
        ) : (
          visibleProducts.map((product) => (
            <div
              key={product._id}
              className="w-full sm:w-[48%] lg:w-[23%]"
            >
              <ProductCard
                product={product}
                phone={phone}
              />
            </div>
          ))
        )}
      </div>

      {products.length > LIMIT && (
        <div className="text-center mt-8">
          <button
            onClick={handleViewAll}
            className="
              inline-flex items-center gap-2
              px-6 py-2.5 rounded-xl
              border border-[#1B5E20]
              text-[#1B5E20] font-semibold
              hover:bg-[#1B5E20] hover:text-white
              transition
            "
          >
            View All Products →
          </button>
        </div>
      )}
    </section>
  );
};

export default CategoryProduct;
