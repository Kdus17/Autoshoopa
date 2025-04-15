"use client";
import { CiMenuBurger, CiSearch } from "react-icons/ci";
import { useEffect, useRef, useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
const menu_names = [
  "Brake System",
  "Filters",
  "Engine",
  "Body",
  "Suspension",
  "Cooling System",
];

export default function SearchBar() {
  const [displayCategoriesMenu, setDisplayCategoriesMenu] = useState(true);
  const categoryRef = useRef(null);
  const [show, setShow] = useState(false);

  function handleshow() {
    setShow(!show);
  }

  useEffect(() => {
    function handleCategoryChange(event) {
      if (categoryRef.current && !categoryRef.current.contains(event.target)) {
        setDisplayCategoriesMenu(false);
      }

      if (categoryRef.current && categoryRef.current.contains(event.target)) {
        setDisplayCategoriesMenu(true);
      }
    }

    document.addEventListener("mouseover", handleCategoryChange);

    return () => {
      document.removeEventListener("mouseover", handleCategoryChange);
    };
  }, []);

  return (
    <div className="flex bg-[#1B283A] px-3 py-2 gap-6 justify-around">
      <div
        className="relative flex text-white items-center gap-2 px-3 w-1/3  bg-[#FFFFFF1A] rounded-sm"
        ref={categoryRef}
      >
        <CiMenuBurger className="text-xl font-bold cursor-pointer" />
        <p className="cursor-pointer">SHOP BY CATEGORIES</p>
        {displayCategoriesMenu && (
          <div className="flex flex-col border border-gray-200 p-2 absolute bg-white text-black top-10 left-0 w-full">
            {menu_names.map((menu_name) => (
              <p
                key={menu_name}
                className="p-2 border-b-2 border-gray-200 hover:text-yellow-400 cursor-pointer"
              >
                {menu_name}
              </p>
            ))}
          </div>
        )}
      </div>

      <div className="flex items-center bg-white rounded-md gap-4 p-2 w-1/3 justify-around">
        <input
          type="text"
          placeholder="Search by Product Name "
          className="outline-none bg-transparent w-4/5"
        />
        <button className="text-xl ">
          <CiSearch />
        </button>
      </div>
      <div className="relative w-1/3  ">
        <div className="flex flex-row items-center h-full gap-6">
          <button className="bg-white w-9/10 h-full" onClick={handleshow}>
            Add Item
          </button>
          <FaCartShopping className="text-white text-2xl" />
        </div>

        {show && (
          <div className="flex flex-col w-9/10 absolute">
            <div className="bg-white w-full flex flex-col md:flex-row gap-12 px-4">
              <div className="">
                <div className="border-b pb-2">
                  <p className=" font-bold ">categories</p>
                </div>
                <div className="flex flex-row items-center gap-3 mt-4">
                  <input
                    type="radio"
                    name="Category"
                    id="Brake System"
                    className="cursor-pointer"
                  />
                  <label htmlFor="Brake System" className="cursor-pointer">
                    Brake System
                  </label>
                </div>
                <div className="flex flex-row items-center gap-3">
                  <input
                    type="radio"
                    name="Category"
                    id="Filters"
                    className="cursor-pointer"
                  />
                  <label htmlFor="Filters" className="cursor-pointer">
                    Filters
                  </label>
                </div>
                <div className="flex flex-row items-center gap-3">
                  <input
                    type="radio"
                    name="Category"
                    id="Engine"
                    className="cursor-pointer"
                  />
                  <label htmlFor="Engine" className="cursor-pointer">
                    Engine
                  </label>
                </div>
                <div className="flex flex-row items-center gap-3">
                  <input
                    type="radio"
                    name="Category"
                    id="Body"
                    className="cursor-pointer"
                  />
                  <label htmlFor="Body" className="cursor-pointer">
                    Body
                  </label>
                </div>
                <div className="flex flex-row items-center gap-3">
                  <input
                    type="radio"
                    name="Category"
                    id="Suspension"
                    className="cursor-pointer"
                  />
                  <label htmlFor="Suspension" className="cursor-pointer">
                    Suspension
                  </label>
                </div>
                <div className="flex flex-row items-center gap-3">
                  <input
                    type="radio"
                    name="Category"
                    id="Cooling System"
                    className="cursor-pointer"
                  />
                  <label htmlFor="Cooling System" className="cursor-pointer">
                    Cooling System
                  </label>
                </div>
              </div>

              <div className="flex flex-col">
                <div className="border-b pb-2">
                  <p className=" font-bold ">Brand</p>
                </div>
                <div className="flex flex-row items-center gap-3 ">
                  <input
                    type="radio"
                    name="Brand"
                    id="Audi"
                    className="cursor-pointer"
                  />
                  <label htmlFor="Audi" className="cursor-pointer">
                    Audi
                  </label>
                </div>
                <div className="flex flex-row items-center gap-3">
                  <input
                    type="radio"
                    name="Brand"
                    id="BMW"
                    className="cursor-pointer"
                  />
                  <label htmlFor="BMW" className="cursor-pointer">
                    BMW
                  </label>
                </div>
                <div className="flex flex-row items-center gap-3 ">
                  <input
                    type="radio"
                    name="Brand"
                    id="Ford"
                    className="cursor-pointer"
                  />
                  <label htmlFor="Ford" className="cursor-pointer">
                    Ford
                  </label>
                </div>
                <div className="flex flex-row items-center gap-3 ">
                  <input
                    type="radio"
                    name="Brand"
                    id="Hyundai"
                    className="cursor-pointer"
                  />
                  <label htmlFor="Hyundai" className="cursor-pointer">
                    Hyundai
                  </label>
                </div>
                <div className="flex flex-row items-center gap-3">
                  <input
                    type="radio"
                    name="Brand"
                    id="Kia"
                    className="cursor-pointer"
                  />
                  <label htmlFor="Kia" className="cursor-pointer">
                    Kia
                  </label>
                </div>
                <div className="flex flex-row items-center gap-3">
                  <input
                    type="radio"
                    name="Brand"
                    id="Land rover"
                    className="cursor-pointer"
                  />
                  <label htmlFor="Land rover" className="cursor-pointer">
                    Land Rover
                  </label>
                </div>
                <div className="flex flex-row items-center gap-3 ">
                  <input
                    type="radio"
                    name="Brand"
                    id="Toyota"
                    className="cursor-pointer"
                  />
                  <label htmlFor="Toyota" className="cursor-pointer">
                    Toyota
                  </label>
                </div>
                <div className="flex flex-row items-center gap-3">
                  <input
                    type="radio"
                    name="Brand"
                    id="Lexus"
                    className="cursor-pointer"
                  />
                  <label htmlFor="Lexus" className="cursor-pointer">
                    Lexus
                  </label>
                </div>
                <div className="flex flex-row items-center gap-3">
                  <input
                    type="radio"
                    name="Brand"
                    id="Volswagon"
                    className="cursor-pointer"
                  />
                  <label htmlFor="Volswagon" className="cursor-pointer">
                    Volswagon
                  </label>
                </div>
              </div>
            </div>
            <div className="bg-white border-t p-2 flex flex-row justify-between gap-2">
              <input
                type="file"
                className="w-1/2 bg-blue-400 rounded-md py-2 px-1  "
                placeholder="asd"
              ></input>
              <button
                className=" text-center py-2 w-1/2 rounded-md bg-yellow-400 
         transition delay-150 duration-300 ease-in-out hover:-translate-y-1"
              >
                Add Product
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
