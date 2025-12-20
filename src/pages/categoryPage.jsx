import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ProductCard from "../component/productCard";
import toast from "react-hot-toast";

const CATEGORY_META = {
  Seeds: {
    title: "Seed Products",
    subtitle: "High-quality seeds for better yield and growth",
  },
  Cattlefeed: {
    title: "Cattle Feed",
    subtitle: "Nutritious feed for healthy livestock",
  },
  Irrigation: {
    title: "Irrigation Products",
    subtitle: "Efficient water solutions for your farm",
  },
  Others: {
    title: "Other Products",
    subtitle: "Additional agricultural essentials",
  },
};

const CategoryPage = () => {
  const { category } = useParams();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const meta = CATEGORY_META[category] || {
    title: `${category} Products`,
    subtitle: "Browse products in this category",
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);

        const res = await axios.get(
          `http://localhost:5000/store/product/getcategory/${category}`
        );

        setProducts(res.data.data || []);

        toast.success(
          `${category} products loaded successfully ✔️`,
          { position: "bottom-center", duration: 1500 }
        );

      } catch (err) {
        console.error(err);
        setError("Failed to load products");

        toast.error(
          `Error fetching ${category} products ❌`,
          { position: "bottom-center", duration: 1500 }
        );

      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [category]);

  return (
    <div className="min-h-screen bg-[#F5F5F5]">
     
      <section className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-12 text-center">
          <h1 className="text-4xl font-bold text-[#1B5E20]">
            {meta.title}
          </h1>
          <p className="mt-3 text-[#6D4C41] max-w-2xl mx-auto">
            {meta.subtitle}
          </p>
        </div>
      </section>

      
      <section className="max-w-7xl mx-auto px-4 py-12">
        
        {loading && (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 animate-pulse">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="h-72 bg-gray-300 rounded-xl"
              ></div>
            ))}
          </div>
        )}

        {!loading && error && (
          <p className="text-center text-red-500 font-medium">
            {error}
          </p>
        )}

        {!loading && !error && products.length === 0 && (
          <>
            {toast("No products found in this category 📦", {
              position: "bottom-center",
              duration: 1500,
            })}

            <div className="text-center py-20">
              <div className="text-6xl mb-4">📦</div>
              <p className="text-gray-500 text-lg">
                No products available in this category
              </p>
            </div>
          </>
        )}

        
        {!loading && !error && products.length > 0 && (
          <>
            <div className="flex justify-between items-center mb-6">
              <p className="text-sm text-gray-600">
                Showing <span className="font-medium">{products.length}</span>{" "}
                products
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
              {products.map((product) => (
                <ProductCard
                  key={product._id}
                  product={product}
                  phone="74847744748"
                />
              ))}
            </div>
          </>
        )}
      </section>
    </div>
  );
};

export default CategoryPage;
