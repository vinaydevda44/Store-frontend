import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const AddProduct = ({ onSuccess }) => {
  const [form, setForm] = useState({
    name: "",
    price: "",
    category: "Seeds",
    description: "",
  });
  const BASE_URL=import.meta.env.VITE_BASE_URL

  const [image, setImage] = useState(null); 
  const [loading, setLoading] = useState(false);

  const token = localStorage.getItem("token");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]); 
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!image) {
      toast.error("Please select an image");
      return;
    }

    try {
      setLoading(true);

      const formData = new FormData();
      formData.append("name", form.name);
      formData.append("price", form.price);
      formData.append("category", form.category);
      formData.append("description", form.description);
      formData.append("productImage", image);

      await axios.post(
        `${BASE_URL}/store/product/addproduct`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      toast.success("Product added successfully 🎉");

      setForm({
        name: "",
        price: "",
        category: "Seeds",
        description: "",
      });
      setImage(null);

      onSuccess();

    } catch (err) {
      console.error(err);
      toast.error("Failed to add product ❌");

    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto bg-white p-8 rounded-2xl shadow-md">
     
      <div className="mb-6 border-b pb-4">
        <h2 className="text-2xl font-bold text-[#1B5E20]">
          Add New Product
        </h2>
        <p className="text-sm text-gray-500 mt-1">
          Fill the details below to add a new product to the store
        </p>
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
            className="
              border rounded-lg px-3 py-2
              focus:outline-none focus:ring-2
              focus:ring-[#1B5E20]/40
            "
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
            className="
              border rounded-lg px-3 py-2
              focus:outline-none focus:ring-2
              focus:ring-[#1B5E20]/40
            "
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
            className="
              border rounded-lg px-3 py-2 bg-white
              focus:outline-none focus:ring-2
              focus:ring-[#1B5E20]/40
            "
          >
            <option>Seeds</option>
            <option>Cattlefeed</option>
            <option>Irrigation</option>
            <option>Others</option>
          </select>
        </div>

       
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-700">
            Product Image
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="
              border rounded-lg px-3 py-2
              file:mr-3 file:py-1 file:px-3
              file:rounded-lg file:border-0
              file:bg-[#E8F5E9] file:text-[#1B5E20]
              hover:file:bg-[#C8E6C9]
            "
            required
          />
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
            className="
              border rounded-lg px-3 py-2 resize-none
              focus:outline-none focus:ring-2
              focus:ring-[#1B5E20]/40
            "
          />
        </div>

       
        <div className="md:col-span-2 mt-4">
          <button
            type="submit"
            disabled={loading}
            className="
              w-full flex items-center justify-center gap-2
              bg-[#1B5E20] text-white
              py-3 rounded-xl font-semibold
              hover:bg-[#2E7D32]
              transition
              disabled:opacity-50
            "
          >
            {loading ? "Uploading Product..." : "Add Product"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
