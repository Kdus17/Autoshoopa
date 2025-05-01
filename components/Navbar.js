"use client";
import { useState } from "react";
import { GiGears } from "react-icons/gi";
import { IoPersonCircleSharp } from "react-icons/io5";
import { useCartContext } from "@/hooks/useCartContext";
import Link from "next/link";
import { useContext } from "react";
import { AuthContext } from "@/context/AuthContext";
import { MdShoppingCart } from "react-icons/md";
import { MdRemoveShoppingCart } from "react-icons/md";
import SideCheckout from "@/components/SideCheckout";

export default function Navbar() {
  const context = useCartContext();
  const auth_context = useContext(AuthContext);
  const [open, setOpen] = useState(false);

  return (
    <div
      className="flex flex-row w-full font-serif justify-between shadow-lg text-black py-2 items-center max-h-3xl sticky top-0 z-50 bg-white"
      id="navbar"
    >
      <div
        className="hover:text-yellow-400 text-2xl md:text-5xl  space-y-1
       transition delay-150 duration-300 ease-in-out hover:-translate-y-1"
      >
        {" "}
        <Link href={"/"} className="flex flex-row">
          <GiGears />
          <span className="text-xl self-center cursor-pointer">AutoShoppa</span>
        </Link>
      </div>

      <div className="flex flex-row  gap-6 items-center space-x-4 ">
        <Link
          href="/MyOrders"
          className="hover:text-yellow-400
        transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hidden md:block"
        >
          My Orders
        </Link>
        <Link
          href="/shop"
          className="hover:text-yellow-400
         transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hidden md:block"
        >
          Products
        </Link>
        {/* <Link
          href="/checkout"
          className="hover:text-yellow-400
         transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hidden md:block"
        >
          Checkout
        </Link> */}
        <Link
          href="/contact"
          className="hover:text-yellow-400
         transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hidden md:block"
        >
          Contact
        </Link>
        <Link
          href="/add"
          className="hover:text-yellow-400
         transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hidden md:block"
        >
          Add Product
        </Link>
      </div>

      <div className="flex flex-row gap-6 items-center font-mono">
        <div className="flex flex-row">
          <Link
            href="/login"
            className="hover:text-yellow-400 flex flex-row gap-2
         transition delay-150 duration-300 ease-in-out hover:-translate-y-1 text-sm md:text-md"
          >
            <IoPersonCircleSharp className="text-2xl" />
            Login/
          </Link>
          <Link
            href="/register"
            className="hover:text-yellow-400 flex flex-row gap-2
         transition delay-150 duration-300 ease-in-out hover:-translate-y-1 text-sm md:text-md"
          >
            Register
          </Link>
        </div>
        <button
          onClick={() => setOpen(!open)}
          className="flex z-100 flex-row items-center bg-yellow-600 text-white px-4 py-2 rounded "
        >
          {open ? <MdRemoveShoppingCart /> : <MdShoppingCart />}{" "}
          {context.state.size}
        </button>
        {open && (
          <div>
            <SideCheckout />
          </div>
        )}
      </div>
    </div>
  );
}
