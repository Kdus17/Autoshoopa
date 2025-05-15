"use client";
import CategoryDetails from "./Details/CategoryDetail";
import BrandDetails from "./Details/BrandDetail";
import { useState, useEffect } from "react";
import { useAuthContext } from "@/hooks/useAuthContext";
import LoadingScreen from "@/components/LoadingScreen";
import { MdEdit, MdDelete } from "react-icons/md";

export default function ProductManagement() {
  const [load, setLoad] = useState(false);
  const [success, setSuccess] = useState(false);
  const [fail, setFail] = useState(null);
  const [error, setError] = useState({});
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);
  const context = useAuthContext();
  const [product_name, setProductName] = useState("");
  const [price, setPrice] = useState(0);
  const [year, setYear] = useState(2000);
  const [quantity, setQuantity] = useState(1);
  const [description, setDescription] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [imageview, setImageview] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const username = localStorage.getItem("username");
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACK_URL}api/products/seller/products?seller=${username}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("autoshoppa-token")}`,
          },
        }
      );
      const data = await response.json();
      setProducts(data.products);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const handleEdit = (product) => {
    setEditingProduct(product);
    setProductName(product.product_name);
    setPrice(product.price);
    setYear(product.year);
    setQuantity(product.quantity);
    setDescription(product.product_description);
    setBrand(product.brand);
    setCategory(product.category);
    setImageview(product.image);
  };

  const handleDelete = async (productId) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      try {
        const token = localStorage.getItem("autoshoppa-token");
        const cleanedToken = token.replace(/^"|"$/g, "");
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BACK_URL}api/products/${productId}`,
          {
            method: "DELETE",
            headers: {
              Authorization: `Bearer ${cleanedToken}`,
            },
          }
        );
        if (response.ok) {
          fetchProducts();
        }
      } catch (error) {
        console.error("Error deleting product:", error);
      }
    }
  };

  const validateform = () => {
    const newErrors = {};
    if (!product_name) {
      newErrors.name = "Product name is required";
    }
    if (!price) {
      newErrors.price = "Price is required";
    }
    if (!description) {
      newErrors.description = "description is required";
    }
    if (!brand) {
      newErrors.brand = "Product brand is required";
    }
    if (!category) {
      newErrors.category = "Product category is required";
    }
    setError(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateform()) {
      return;
    }
    setLoad(true);

    if (imageview) {
      URL.revokeObjectURL(imageview);
    }
    const formData = new FormData();
    formData.append("product_name", product_name);
    formData.append("price", price);
    formData.append("year", year);
    formData.append("description", description);
    formData.append("brand", brand);
    formData.append("category", category);
    formData.append("imageview", imageview);
    formData.append("quantity", quantity);
    formData.append("seller", localStorage.getItem("username"));

    if (selectedFile) {
      formData.append("photo", selectedFile);
    }

    const token = localStorage.getItem("autoshoppa-token");
    const cleanedToken = token.replace(/^"|"$/g, "");
    const post_options = {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${cleanedToken}`,
      },
      body: formData,
    };

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACK_URL}api/products/${editingProduct._id}`,
      post_options
    );
    
    if (response.ok) {
      setLoad(false);
      setSuccess(true);
      fetchProducts();
      resetForm();
      return response;
    } else {
      setFail(true);
      setLoad(false);
    }
  };

  const resetForm = () => {
    setEditingProduct(null);
    setProductName("");
    setPrice(0);
    setYear(2000);
    setQuantity(1);
    setDescription("");
    setBrand("");
    setCategory("");
    setSelectedFile(null);
    setImageview(null);
  };

  const handleFileChange = async (e) => {
    setSelectedFile(e.target.files[0]);
    setImageview(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {editingProduct && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Edit Product</h2>
            <form
              action=""
              method="POST"
              encType={"multipart/form-data"}
              onSubmit={handleSubmit}
              className="bg-white rounded-lg shadow-lg p-6"
            >
              <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-2">
                  <span className="font-semibold font-serif text-md">Product Name:</span>
                  <input
                    type="text"
                    className="border-1 w-full px-4 py-2 rounded-xl outline-none shadow-md font-serif border-gray-200
                     caret-yellow-500 transition-colors focus:border-transparent focus:ring-2 focus:ring-yellow-400"
                    placeholder="Product Name"
                    value={product_name}
                    onChange={(e) => {
                      setProductName(e.target.value);
                    }}
                  />
                  {error.name && (
                    <p className="text-red-500 text-sm mt-1 font-mono">{error.name}</p>
                  )}
                </div>
                <div className="flex flex-col gap-2">
                  <span className="font-semibold text-md font-serif">Product Price:</span>
                  <input
                    type="number"
                    name=""
                    id="price"
                    className="border-1 w-full px-4 py-2 rounded-xl outline-none shadow-md border-gray-200 font-serif
                    caret-yellow-500 transition-colors focus:border-transparent focus:ring-2 focus:ring-yellow-400"
                    placeholder="Price in Birr"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                  {error.price && (
                    <p className="text-red-500 text-sm mt-1 font-mono">{error.price}</p>
                  )}
                </div>
                <div className="self-center w-full">
                  <span className="font-semibold text-md font-serif">Product description:</span>
                  <textarea
                    name=""
                    id="description"
                    className="border-1 w-[100%] h-32 px-4 py-2 rounded- outline-none shadow-md border-gray-200 font-serif
                    caret-yellow-500 transition-colors focus:border-transparent focus:ring-2 focus:ring-yellow-400"
                    placeholder="Enter Product Description"
                    value={description}
                    onChange={(e) => {
                      setDescription(e.target.value);
                    }}
                  />
                  {error.description && (
                    <p className="text-red-500 text-sm mt-1 font-mono">{error.description}</p>
                  )}
                </div>
                <div className="flex flex-col w-full self-center">
                  <div className="flex flex-col gap-2">
                    <span className="text-lg font-semibold font-serif border-b-4 border-yellow-400">Categories</span>
                    <CategoryDetails
                      inputType="radio"
                      className="items-center"
                      setCategory={setCategory}
                      selectedCategory={category}
                    />
                    {error.category && (
                      <p className="text-red-500 text-sm mt-1 font-mono">{error.category}</p>
                    )}
                  </div>

                  <div className="flex flex-col gap-2">
                    <span className="text-lg font-semibold font-serif border-b-4 border-yellow-400">Brands</span>
                    <BrandDetails 
                      inputType="radio" 
                      setBrand={setBrand} 
                      selectedBrand={brand}
                    />
                    {error.brand && (
                      <p className="text-red-500 text-sm mt-1 font-mono">{error.brand}</p>
                    )}
                  </div>
                </div>
                <div className="grid grid-cols md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="Year" className="font-semibold text-xl font-serif">Year:</label>
                    <input
                      type="number"
                      name=""
                      id="Year"
                      className="border-1 w-full px-4 py-2 border-gray-200 rounded-sm outline-none shadow-md
                        caret-yellow-500 transition-colors focus:border-transparent focus:ring-2 focus:ring-yellow-400"
                      value={year}
                      placeholder={2000}
                      min={2000}
                      onChange={(e) => setYear(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="quantity" className="font-semibold text-xl font-serif">Quantity:</label>
                    <input
                      type="number"
                      name=""
                      id="quantity"
                      className="border-1 w-full px-4 py-2 border-gray-200 rounded-sm outline-none shadow-md
                        caret-yellow-500 transition-colors focus:border-transparent focus:ring-2 focus:ring-yellow-400"
                      value={quantity}
                      min={1}
                      onChange={(e) => setQuantity(e.target.value)}
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="image" className="font-semibold text-xl font-serif">Product Image:</label>
                  <input
                    type="file"
                    name=""
                    id="image"
                    accept="image/*"
                    className="border-1 w-full px-4 py-2 border-gray-200 rounded-sm outline-none shadow-md
                      caret-yellow-500 transition-colors focus:border-transparent focus:ring-2 focus:ring-yellow-400"
                    onChange={handleFileChange}
                  />
                  {imageview && (
                    <img
                      src={imageview}
                      alt="Preview"
                      className="mt-2 max-w-xs rounded-lg shadow-md"
                    />
                  )}
                </div>
                <div className="flex gap-4">
                  <button
                    type="submit"
                    className="bg-yellow-400 text-black font-semibold py-2 px-4 rounded-lg hover:bg-yellow-500 transition-colors"
                  >
                    Update Product
                  </button>
                  <button
                    type="button"
                    onClick={resetForm}
                    className="bg-gray-400 text-white font-semibold py-2 px-4 rounded-lg hover:bg-gray-500 transition-colors"
                  >
                    Cancel Edit
                  </button>
                </div>
              </div>
            </form>
          </div>
        )}

        <div>
          <h2 className="text-2xl font-bold mb-4">Your Products</h2>
          <div className="bg-white rounded-lg shadow-lg p-6">
            {products.length === 0 ? (
              <p className="text-gray-500 text-center">No products found</p>
            ) : (
              <div className="space-y-4">
                {products.map((product) => (
                  <div
                    key={product._id}
                    className="border rounded-lg p-4 flex items-center justify-between"
                  >
                    <div className="flex items-center gap-4">
                      <img
                        src={product.image}
                        alt={product.product_name}
                        className="w-16 h-16 object-cover rounded"
                      />
                      <div>
                        <h3 className="font-semibold">{product.product_name}</h3>
                        <p className="text-gray-600">${product.price}</p>
                        <p className="text-sm text-gray-500">
                          Quantity: {product.quantity}
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleEdit(product)}
                        className="p-2 text-blue-600 hover:bg-blue-50 rounded"
                      >
                        <MdEdit size={20} />
                      </button>
                      <button
                        onClick={() => handleDelete(product._id)}
                        className="p-2 text-red-600 hover:bg-red-50 rounded"
                      >
                        <MdDelete size={20} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {load && <LoadingScreen />}
      {success && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-green-600 mb-4">Success!</h2>
            <p className="text-gray-700">Product updated successfully.</p>
          </div>
        </div>
      )}
      {fail && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-red-600 mb-4">Error!</h2>
            <p className="text-gray-700">Failed to update product. Please try again.</p>
          </div>
        </div>
      )}
    </div>
  );
} 