"use client";
import { GiGears } from "react-icons/gi";
import { IoPersonCircleSharp } from "react-icons/io5";
import { useCartContext } from "@/hooks/useCartContext";
import Link from "next/link";
import { useContext } from "react";
import { AuthContext } from "@/context/AuthContext";

export default function Navbar() {
  const context = useCartContext();
  const auth_context = useContext(AuthContext);

  return (
    <div
      className="flex flex-row font-serif justify-around shadow-lg bg-white mt-2 max-h-3xl"
      id="navbar"
    >
      <div
        className="hover:text-yellow-400 text-5xl  space-y-1
       transition delay-150 duration-300 ease-in-out hover:-translate-y-1"
      >
        {" "}
        <Link href={"/"} className="flex flex-row">
          <GiGears />
          <span className="text-xl self-center cursor-pointer">AutoShoppa</span>
        </Link>
      </div>

      <div className="flex flex-row  gap-6 items-center space-x-4">
        <Link
          href="/MyOrders"
          className="hover:text-yellow-400
        transition delay-150 duration-300 ease-in-out hover:-translate-y-1"
        >
          My Orders
        </Link>
        <Link
          href="/shop"
          className="hover:text-yellow-400
         transition delay-150 duration-300 ease-in-out hover:-translate-y-1"
        >
          Products
        </Link>
        <Link
          href="/checkout"
          className="hover:text-yellow-400
         transition delay-150 duration-300 ease-in-out hover:-translate-y-1"
        >
          Checkout
        </Link>
        <Link
          href="/contact"
          className="hover:text-yellow-400
         transition delay-150 duration-300 ease-in-out hover:-translate-y-1"
        >
          Contact
        </Link>
        <Link
          href="/add"
          className="hover:text-yellow-400
         transition delay-150 duration-300 ease-in-out hover:-translate-y-1"
        >
          Add Product
        </Link>
      </div>

      <div className="flex flex-row items-center px-10 ">
        <Link
          href="/login"
          className="hover:text-yellow-400 flex flex-row gap-2
         transition delay-150 duration-300 ease-in-out hover:-translate-y-1"
        >
          <IoPersonCircleSharp className="text-2xl" />
          Login/
        </Link>
        <Link
          href="/register"
          className="hover:text-yellow-400 flex flex-row gap-2
         transition delay-150 duration-300 ease-in-out hover:-translate-y-1"
        >
          Register
        </Link>
      </div>
    </div>
  );
}
