"use client";
import { useEffect, useState } from "react";
import { useCartContext } from "@/hooks/useCartContext";
import ProductList from "@/components/ProductList";
import ProductExplore from "@/components/ProductExplore";
import SideCheckout from "@/components/SideCheckout";
import LoadingScreen from "@/components/LoadingScreen";

export default function Home() {
  const [load, setLoad] = useState(true);
  const [open, setOpen] = useState(false);
  const context = useCartContext();

  const [latest_products, setLatestProducts] = useState([]);
  const [trending_products, setTrendingProducts] = useState([]);
  useEffect(() => {
    fetch("https://ecommerce-backend-er55.onrender.com/api/products/latest")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setLatestProducts(data.products);
        setLoad(false);
      });
  }, []);

  useEffect(() => {
    fetch("https://ecommerce-backend-er55.onrender.com/api/products/trending")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setTrendingProducts(data.products);
        setLoad(false);
      });
  }, []);

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="fixed top-4 right-4 z-100 bg-yellow-600 text-white px-4 py-2 rounded "
      >
        {open ? "Close Cart" : "Open Cart"} {context.state.size}
      </button>
      {open && (
        <div>
          <SideCheckout />
        </div>
      )}

      {!load && (
        <div className="bg-gray-100 pl-8 pt-6">
          {latest_products.length > 0 && (
            <h1 className="text-4xl border-b-4 inline-block border-yellow-400 font-bold mb-4">
              Latest Products{" "}
            </h1>
          )}
          <ProductList products={latest_products} title="latest" />
          <ProductExplore />
          {trending_products.length > 0 && (
            <h1 className="text-4xl border-b-4  inline-block border-yellow-400 font-bold mt-10  mb-3">
              Trending Products{" "}
            </h1>
          )}
          <ProductList products={trending_products} title="trending" />
        </div>
      )}
      {load && <LoadingScreen />}
    </>
  );
}
