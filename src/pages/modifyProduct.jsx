import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const ModifyProduct = ({ product, onClose, onSuccess }) => {
  const [form, setForm] = useState({
    name: product.name,
    price: product.price,
    category: product.category,
    description: product.description,
  });
  const BASE_URL=import.meta.env.VITE_BASE_URL
  const [loading, setLoading] = useState(false);
  const token = localStorage.getItem("token");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.price) {
      toast.error("Name & price are required ❌");
      return;
    }

    try {
      setLoading(true);

      const formData = new FormData();
      formData.append("name", form.name);
      formData.append("price", form.price);
      formData.append("category", form.category);
      formData.append("description", form.description);

      await axios.put(
        `${BASE_URL}/store/product/modify/${product._id}`,
        formData,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      toast.success("Product updated successfully ✨");

      onSuccess();
      onClose();
    } catch (err) {
      console.error(err);
      toast.error("Failed to update product ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg- bg-opacity-50 flex justify-center items-center overflow-auto z-50 p-6">
      <div className="max-w-5xl w-full bg-white p-8 rounded-2xl shadow-md">
        
        <div className="mb-6 border-b pb-4 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-[#1B5E20]">Modify Product</h2>
          <button
            onClick={() => {
              onClose();
            }}
            className="text-red-600 font-semibold hover:underline"
          >
            Close ✕
          </button>
        </div>

        
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-700">
              Product Name
            </label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="e.g. Organic Wheat Seeds"
              className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#1B5E20]/40"
              required
            />
          </div>

         
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-700">
              Price (₹)
            </label>
            <input
              name="price"
              type="number"
              value={form.price}
              onChange={handleChange}
              placeholder="e.g. 499"
              className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#1B5E20]/40"
              required
            />
          </div>

          
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-700">
              Category
            </label>
            <select
              name="category"
              value={form.category}
              onChange={handleChange}
              className="border rounded-lg px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-[#1B5E20]/40"
            >
              <option>Seeds</option>
              <option>Cattlefeed</option>
              <option>Irrigation</option>
              <option>Others</option>
            </select>
          </div>

          <div className="md:col-span-2 flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              placeholder="Write a short description about the product..."
              rows={4}
              className="border rounded-lg px-3 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-[#1B5E20]/40"
            />
          </div>

          <div className="md:col-span-2 mt-4">
            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 bg-[#1B5E20] text-white py-3 rounded-xl font-semibold hover:bg-[#2E7D32] transition disabled:opacity-50"
            >
              {loading ? "Updating Product..." : "Update Product"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModifyProduct;
