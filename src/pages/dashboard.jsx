import React, { useEffect, useState } from "react";
import axios from "axios";
import AddProduct from "./addProduct";
import ModifyProduct from "./modifyProduct";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [products, setProducts] = useState([]);
  const [editProduct, setEditProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);

  const token = localStorage.getItem("token");
  const navigate = useNavigate();

 
  const fetchProducts = async () => {
    try {
      const res = await axios.get("http://localhost:5000/store/product/getall", {
        headers: { Authorization: `Bearer ${token}` },
      });

      setProducts(res.data.data || []);
    } catch (err) {
      toast.error("Failed to fetch products ❌");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const deleteProduct = async (id) => {
    if (!window.confirm("Delete this product?")) return;

    try {
      await axios.delete(
        `http://localhost:5000/store/product/removeproduct/${id}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      setProducts(products.filter((p) => p._id !== id));
      toast.success("Product deleted successfully 🗑️");
    } catch (err) {
      toast.error("Delete failed ❌");
      console.error(err);
    }
  };

  const modifyProduct = (product) => {
    setEditProduct(product);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      
   
      <div className="max-w-7xl mx-auto flex justify-between items-center mb-6">
        
        <h1 className="text-3xl font-bold text-[#1B5E20]">
          Admin Dashboard
        </h1>

        <div className="flex gap-3">
        
          <button
            onClick={() => {
              toast("Redirecting Home 🏠", { duration: 800 });
              navigate("/");
            }}
            className="bg-green-800 text-white px-4 py-2 rounded-lg hover:bg-[#14521D]  transition"
          >
            Home
          </button>

          <button
            onClick={() => {
              setShowForm(!showForm);
              toast(showForm ? "Form closed ❌" : "Form opened ➕", {
                duration: 800,
              });
            }}
            className="bg-[#1B5E20] text-white px-4 py-2 rounded-lg hover:bg-[#14521D] transition"
          >
            {showForm ? "Close Form" : "Add Product"}
          </button>
        </div>
      </div>

      
      {showForm && <AddProduct onSuccess={fetchProducts} />}

      <div className="max-w-7xl mx-auto bg-white rounded-xl shadow mt-6 overflow-x-auto">
        {loading ? (
          <p className="text-center py-10">Loading products...</p>
        ) : products.length === 0 ? (
          <p className="text-center py-10 text-gray-500">
            No products found
          </p>
        ) : (
          <table className="w-full text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-3 text-left">Image</th>
                <th className="p-3 text-left">Name</th>
                <th className="p-3 text-left">Category</th>
                <th className="p-3 text-left">Price</th>
                <th className="p-3 text-left">Modify</th>
                <th className="p-3 text-left">Delete</th>
              </tr>
            </thead>

            <tbody>
              {products.map((product) => (
                <tr key={product._id} className="border-t">
                  
                  <td className="p-3">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-12 w-12 object-contain"
                    />
                  </td>

                  <td className="p-3">{product.name}</td>
                  <td className="p-3">{product.category}</td>
                  <td className="p-3">₹{product.price}</td>

                  <td className="p-3">
                    <button
                      onClick={() => modifyProduct(product)}
                      className=" bg-blue-600 text-white px-3 py-1.5 rounded-lg text-sm font-medium hover:bg-blue-700 active:scale-95 transition "
                    >
                      Modify
                    </button>
                  </td>

                  <td className="p-3">
                    <button
                      onClick={() => deleteProduct(product._id)}
                      className=" bg-red-500 text-white px-3 py-1.5 rounded-lg text-sm font-medium hover:bg-red-600 active:scale-95 transition "
                    >
                      Delete
                    </button>
                  </td>

                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      
      {editProduct && (
        <ModifyProduct
          product={editProduct}
          onClose={() => {
            setEditProduct(null);
            toast("Edit closed ❌", { duration: 800 });
          }}
          onSuccess={() => {
            fetchProducts();
            toast.success("Product updated successfully ✨", {
              duration: 1000,
            });
          }}
        />
      )}
    </div>
  );
};

export default Dashboard;
