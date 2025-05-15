"use client";
import { useState } from "react";
import { FaGear } from "react-icons/fa6";
import { IoPersonCircleSharp } from "react-icons/io5";
import { useCartContext } from "@/hooks/useCartContext";
import Link from "next/link";
import { useContext } from "react";
import { AuthContext } from "@/context/AuthContext";
import { MdShoppingCart } from "react-icons/md";
import { MdRemoveShoppingCart } from "react-icons/md";
import SideCheckout from "@/components/SideCheckout";
import { TbLogout2 } from "react-icons/tb";
import SideBar from "./SideBar";
import { CiMenuBurger } from "react-icons/ci";

export default function Navbar() {
  const [clicked, setCliked] = useState(false);
  const context = useCartContext();
  const auth_context = useContext(AuthContext);
  const [open, setOpen] = useState(false);
  const [nav, setNav] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("autoshoppa-token");
    localStorage.removeItem("username");
    auth_context.dispatch({ type: "LOGOUT" });
  };

  return (
    <div
      className="flex flex-row w-full font-serif justify-between shadow-lg text-black py-2 items-center max-h-3xl sticky top-0 z-50 bg-white"
      id="navbar"
    >
      <div className=" text-5xl md:text-6xl gap-2 items-center relative flex flex-row">
        <span
          onClick={() => {
            setNav(!nav);
            setCliked(true);
          }}
          className={`z-60 text-black inline-block px-4 hover:-translate-y-1 hover:text-yellow-400
             transform transition-transform duration-600 text-4xl ${
               nav ? "rotate-90" : "rotate-0"
             }`}
        >
          {clicked ? <FaGear /> : <CiMenuBurger />}
        </span>
        {nav && <SideBar />}{" "}
        {
          <Link href={"/"} className="flex flex-row">
            <span
              className="text-2xl self-center  cursor-pointer 
            z-100 transition duration-300 hover:-translate-y-1 hover:text-yellow-400"
            >
              AutoShoppa
            </span>
          </Link>
        }
      </div>

      <div className="flex flex-row  gap-6 items-center space-x-4 ">
        {/* <Link
          href="/MyOrders"
          className="hover:text-yellow-400
        transition duration-300 ease-in-out hover:-translate-y-1 hidden md:block"
        >
          My Orders
        </Link> */}
        <Link
          href="/shop"
          className="hover:text-yellow-400
         transition duration-300 ease-in-out hover:-translate-y-1 hidden md:block"
        >
          Products
        </Link>
        <Link
          href="/contact"
          className="hover:text-yellow-400
         transition duration-300 ease-in-out hover:-translate-y-1 hidden md:block"
        >
          Contact
        </Link>

        <Link
          href="/add"
          className="hover:text-yellow-400
         transition duration-300 ease-in-out hover:-translate-y-1 hidden md:block"
        >
          Add Product
        </Link>
      </div>

      <div className="flex flex-row gap-6 items-center font-mono">
        {!auth_context.state.token && (
          <div className="flex flex-row">
            <Link
              href="/login"
              className="hover:text-yellow-400 flex flex-row gap-2
         transition duration-300 ease-in-out hover:-translate-y-1 text-sm md:text-md"
            >
              <IoPersonCircleSharp className="text-2xl" />
              Login/
            </Link>
            <Link
              href="/register"
              className="hover:text-yellow-400 flex flex-row gap-2
         transition duration-300 ease-in-out hover:-translate-y-1 text-sm md:text-md"
            >
              Register
            </Link>
          </div>
        )}
        {auth_context.state.token && (
          <div className="flex items-center">
            {localStorage.getItem("username")}
            <Link
              href="/"
              onClick={() => handleLogout()}
              className="flex flex-row items-center font-serif text-lg md:text-xl
               transition duration-300 hover:-translate-x-1 hover:text-yellow-400"
            >
              <TbLogout2 />
              Logout
            </Link>
          </div>
        )}
        <button
          onClick={() => setOpen(!open)}
          className="flex z-100 flex-row items-center bg-yellow-600 
          transition duration-300 hover:bg-yellow-400  text-white px-4 py-2 rounded "
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
