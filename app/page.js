"use client";
import ProductExplore from "@/components/ProductExplore";
import BilingDetails from "@/components/BillingDetails";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import Track from "@/components/Track";
import Filters from "@/components/Filter";
import TrackOrder from "@/components/TrackOrder";
import SearchBar from "@/components/Search";
import AddProduct from "@/components/AddProduct";
import OrderConformation from "@/components/OrderConformation";
import CheckOut from "@/components/CheckOut";
import { useState } from "react";

export default function Home() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <SearchBar />
      <button
        onClick={() => setOpen(!open)}
        className="fixed top-4 right-4 z-100 bg-indigo-600 text-white px-4 py-2 rounded "
      >
        {open ? "Close Cart" : "Open Cart"}
      </button>
      {open && (
        <div>
          <CheckOut />
        </div>
      )}
      <div
        className={`transition-all duration-300 ${
          open ? "filter blur-sm" : ""
        }`}
      >
        <AddProduct />

        <ProductExplore />
        <Filters />
        <Contact />
        <Track />
        <BilingDetails />
        <OrderConformation />
        <TrackOrder />
        <Footer />
      </div>
    </>
  );
}
