"use client";
import CategoryDetails from "./Details/CategoryDetail";
import BrandDetails from "./Details/BrandDetail";
import { useState } from "react";
import { useAuthContext } from "@/hooks/useAuthContext";
import LoadingScreen from "@/components/LoadingScreen";

export default function AddProduct() {
  const [load, setLoad] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);
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
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoad(true);

    if (!price || !description || !brand || !category || !selectedFile) {
      alert("fill all");
      // return;
    } else {
    }
    URL.revokeObjectURL(setImageview());
    const formData = new FormData();
    formData.append("product_name", product_name);
    formData.append("price", price);
    formData.append("year", year);
    formData.append("description", description);
    formData.append("brand", brand);
    formData.append("category", category);
    formData.append("imageview", imageview);
    formData.append("quantity", quantity);
    console.log("Sending quantity:", quantity);

    if (selectedFile) {
      formData.append("photo", selectedFile);
    }

    console.log("token is ", context.state.token);
    const post_options = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage
          .getItem("autoshoppa-token")
          .slice(1, -1)}`,
      },
      body: formData,
    };

    const response = await fetch(
      "https://ecommerce-backend-er55.onrender.com/api/products/add",
      post_options
    );
    if (response.ok) {
      setLoad(false);
      setSuccess(true);
      return response;
    } else {
      setError(true);
      setLoad(false);
    }
  };
  const handleFileChange = async (e) => {
    setSelectedFile(e.target.files[0]);
    setImageview(URL.createObjectURL(e.target.files[0]));
  };
  return (
    <form
      action=""
      method="POST"
      encType={"multipart/form-data"}
      onSubmit={handleSubmit}
    >
      {!load && (
        <div className=" px-8 py-10 flex text-black items-center justify-center">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <span className="font-semibold text-md">Product Name:</span>
              <input
                type="text"
                className="border-2 w-full px-2 rounded-sm outline-none focus:border-2 focus:border-yellow-400 caret-yellow-500"
                placeholder="Product Name"
                value={product_name}
                onChange={(e) => {
                  setProductName(e.target.value);
                }}
              />
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-semibold text-md">Product Price:</span>
              <input
                type="number"
                name=""
                id="price"
                className="border-2 w-full px-2  rounded-sm outline-none focus:border-2 focus:border-yellow-400 caret-yellow-500"
                placeholder="Price in Birr"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            <div className="self-center w-full">
              <textarea
                name=""
                id="descrption"
                className="border-2 w-[100%] h-32 px-2 rounded-sm outline-none focus:border-2 focus:border-yellow-400 caret-yellow-500"
                placeholder="Enter Product Descrption"
                value={description}
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
              ></textarea>
            </div>
            <div className="flex flex-row self-center">
              <div className="flex flex-col gap-2">
                <span className="text-lg font-semibold">Categories</span>
                <CategoryDetails
                  inputType="radio"
                  className="items-center"
                  setCategory={setCategory}
                />
              </div>

              <div className="flex flex-col gap-2">
                <span className="text-lg font-semibold">Brands</span>
                <BrandDetails inputType="radio" setBrand={setBrand} />
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <span className="font-semibold text-xl">Year:</span>
              <input
                type="number"
                name=""
                id="Year"
                className="border-2 w-full px-2 border-gray-400 rounded-sm outline-none focus:border-2 focus:border-yellow-400 caret-yellow-500"
                value={year}
                placeholder={2000}
                min={2000}
                onChange={(e) => setYear(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-4">
              <span>Quantity:</span>
              <input
                type="number"
                id="quantity"
                className="border-2 w-full px-2 border-gray-400 rounded-sm outline-none focus:border-2 focus:border-yellow-400 caret-yellow-500"
                value={quantity}
                placeholder={1}
                min={1}
                onChange={(e) => setQuantity(e.target.value)}
              />
            </div>
            <div className="flex flex-row gap-5">
              <label
                className="block text-xl font-semibold text-gray-900 dark:text-white"
                htmlFor="photo"
              >
                Upload Photo
              </label>
              <input
                className="w-50 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 px-2 py-1"
                id="photo"
                type="file"
                name="photo"
                onChange={handleFileChange}
              />
            </div>
            <div className="skeleton h-48 w-48 self-center">
              <img src={imageview} className="w-full h-full"></img>
            </div>

            <input
              type="submit"
              value="Submit"
              className="border-1 w-20 rounded-md px-2 py-1 mt-2
                        font-semibold border-gray-400 self-center hover:bg-yellow-400"
              placeholder="Enter your product description"
              onClick={handleSubmit}
            />
          </div>
        </div>
      )}
      {load && <LoadingScreen />}
      {error && (
        <div className="toast toast-center">
          <div className="alert alert-error">
            <span>Failed to add product</span>
          </div>
        </div>
      )}
      {success && (
        <div className="toast toast-center">
          <div className="alert alert-success">
            <span>Product added</span>
          </div>
        </div>
      )}
    </form>
  );
}
