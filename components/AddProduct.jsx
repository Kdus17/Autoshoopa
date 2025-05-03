"use client";
import CategoryDetails from "./Details/CategoryDetail";
import BrandDetails from "./Details/BrandDetail";
import { useState } from "react";
import { useAuthContext } from "@/hooks/useAuthContext";
import LoadingScreen from "@/components/LoadingScreen";

export default function AddProduct() {
  const [load, setLoad] = useState(false);
  const [success, setSuccess] = useState(false);
  const [sent, setSent] = useState(false)
  const [fail, setFail] = useState(null);
  const [error, setError] = useState({});
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

  const validateform=()=>{
    const newErrors = {};
    if(!product_name){
      newErrors.name = "Product name is required"
    }
    if(!price){
      newErrors.price = "Price is required";
    }
    if(!description){
      newErrors.description = "description is required";
    }
    if(!brand){
      newErrors.brand = "Product brand is required"
    }
    if(!category){
      newErrors.category = "Product category is required";
    }
    if(!selectedFile){
      newErrors.image = "Product image is required";
    }
    setError(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!validateform()){
      return;
    };
    setSent(false);
    setLoad(true);

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

    const post_options = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage
          .getItem("autoshoppa-token")
          .slice(1, -1)}`,
      },
      body: formData,
    };
    console.log(context.state.token)

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACK_URL}api/products/add`,
      post_options
    );
    if (response.ok) {
      setLoad(false);
      setSuccess(true);
      setSent(true);
      return response;
    } else {
      setFail(true);
      setLoad(false);
      setSent(true)
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
      className="max-w-2xl mx-auto bg-white"
    >
      {!load && (
        <div className=" px-8 py-10 flex text-black rounded-md shadow-lg">
          <div className="flex flex-col gap-8 w-full">
            <div className="flex flex-col gap-2">
              <span className="font-semibold font-serif text-md">Product Name:</span>
              <input
                type="text"
                className="border-1 w-full px-4 py-2 rounded-xl outline-none shadow-md font-serif border-gray-200
                 caret-yellow-500 transition-colors focus:border-transparent focus:ring-2 focus:ring-yellow-400 "
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
            <span className="font-semibold text-md font-serif">Product descrption:</span>
              <textarea
                name=""
                id="descrption"
                className="border-1 w-[100%] h-32 px-4 py-2 rounded- outline-none shadow-md border-gray-200 font-serif
                caret-yellow-500 transition-colors focus:border-transparent focus:ring-2 focus:ring-yellow-400"
                placeholder="Enter Product Descrption"
                value={description}
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
              >
                                 {error.description && (
                  <p className="text-red-500 text-sm mt-1 font-mono">{error.description}</p>
                    )}
              </textarea>
            </div>
            <div className="flex flex-col w-full self-center">
              <div className="flex flex-col gap-2">
                <span className="text-lg font-semibold font-serif border-b-4 border-yellow-400">Categories</span>
                <CategoryDetails
                  inputType="radio"
                  className="items-center"
                  setCategory={setCategory}
                />
                 {error.category && (
                  <p className="text-red-500 text-sm mt-1 font-mono">{error.category}</p>
                    )}
              </div>

              <div className="flex flex-col gap-2">
                <span className="text-lg font-semibold font-serif  border-b-4 border-yellow-400">Brands</span>
                <BrandDetails inputType="radio" setBrand={setBrand} />
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
                id="quantity"
                className="border-1 w-full px-4 py-2 border-gray-200 rounded-sm outline-none shadow-md
                 caret-yellow-500 transition-colors focus:border-transparent focus:ring-2 focus:ring-yellow-400"
                value={quantity}
                placeholder={1}
                min={1}
                onChange={(e) => setQuantity(e.target.value)}
              />
            </div>
            </div>
            <div className="flex flex-row gap-5 self-center items-center">
              <label
                className="block text-xl font-semibold text-gray-900 dark:text-white font-serif"
                htmlFor="photo"
              >
                Upload Photo:
              </label>
              <input
                className="w-50 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 px-2 py-2 shadow-md 
                hover:bg-yellow-400"
                id="photo"
                type="file"
                name="photo"
                onChange={handleFileChange}
              />
                               {error.image && (
                  <p className="text-red-500 text-sm mt-1 font-mono">{error.image}</p>
                    )}
            </div>
            <div className="skeleton h-48 w-48 self-center">
              <img src={imageview} className="w-full h-full"></img>
            </div>

            <input
              type="submit"
              value="Submit"
              className="border-1 w-full rounded-md px-2 py-2 mt-2 bg-yellow-400 shadow-md
                        font-semibold border-gray-100 self-center hover:bg-yellow-500 transition duration-300 ease-in-out  hover:-translate-y-1 font-serif"
              placeholder="Enter your product description"
              onClick={handleSubmit}
            />
          </div>
        </div>
      )}
      {load && <LoadingScreen />}
      {fail && sent && (
        <div className="toast toast-center ">
          <div className="alert alert-error">
            <span>Failed to add!</span>
            {setTimeout(() => {
              setSent(false)
            }, 2000)}
          </div>
        </div>
      )}
      {success && sent && (
        <div className="toast toast-center ">
          <div className="alert alert-success">
            <span>Product added to shop!</span>
            {setTimeout(() => {
              setSent(false)
            }, 2000)}
          </div>
        </div>
      )}
    </form>
  );
}
