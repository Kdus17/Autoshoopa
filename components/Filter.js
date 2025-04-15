import { IoChevronForwardOutline } from "react-icons/io5";
import Image from "next/image";
import { BiCart } from "react-icons/bi";
import Link from "next/link";

export default function Product() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col bg-[url('https://demo2.wpopal.com/karpart/wp-content/uploads/2023/11/shop-bc.jpg')] h-75 text-center justify-center">
        <h1 className="text-5xl text-white">Shop</h1>
        <p className="flex flex-row items-center justify-center font-bold">
          <a href="#">Home</a> <IoChevronForwardOutline /> PageShop
        </p>
      </div>

      <div className="flex flex-row px-10 py-10 gap-16">
        <div className="flex flex-col gap-4 border-1 py-10 px-10 rounded-md">
          <div className="flex flex-row gap-8 border-b pb-2">
            <p className="text-3xl font-bold ">Product categories</p>
          </div>
          <div className="flex flex-row items-center gap-3 mt-4">
            <input
              type="checkbox"
              name=""
              id="Brake System"
              className="cursor-pointer"
            />
            <label htmlFor="Brake System" className="cursor-pointer">
              Brake System
            </label>
          </div>
          <div className="flex flex-row items-center gap-3">
            <input
              type="checkbox"
              name=""
              id="Filters"
              className="cursor-pointer"
            />
            <label htmlFor="Filters" className="cursor-pointer">
              Filters
            </label>
          </div>
          <div className="flex flex-row items-center gap-3">
            <input
              type="checkbox"
              name=""
              id="Engine"
              className="cursor-pointer"
            />
            <label htmlFor="Engine" className="cursor-pointer">
              Engine
            </label>
          </div>
          <div className="flex flex-row items-center gap-3">
            <input
              type="checkbox"
              name=""
              id="Body"
              className="cursor-pointer"
            />
            <label htmlFor="Body" className="cursor-pointer">
              Body
            </label>
          </div>
          <div className="flex flex-row items-center gap-3">
            <input
              type="checkbox"
              name=""
              id="Suspension"
              className="cursor-pointer"
            />
            <label htmlFor="Suspension" className="cursor-pointer">
              Suspension
            </label>
          </div>
          <div className="flex flex-row items-center gap-3">
            <input
              type="checkbox"
              name=""
              id="Cooling System"
              className="cursor-pointer"
            />
            <label htmlFor="Cooling System" className="cursor-pointer">
              Cooling System
            </label>
          </div>
          <div className="flex flex-row gap-8 border-b pb-2 ">
            <p className="text-3xl font-bold ">Product categories</p>
          </div>
          <div className="flex flex-row items-center gap-3 ">
            <input
              type="checkbox"
              name=""
              id="Audi"
              className="cursor-pointer"
            />
            <label htmlFor="Audi" className="cursor-pointer">
              Audi
            </label>
          </div>
          <div className="flex flex-row items-center gap-3">
            <input
              type="checkbox"
              name=""
              id="BMW"
              className="cursor-pointer"
            />
            <label htmlFor="BMW" className="cursor-pointer">
              BMW
            </label>
          </div>
          <div className="flex flex-row items-center gap-3 ">
            <input
              type="checkbox"
              name=""
              id="Ford"
              className="cursor-pointer"
            />
            <label htmlFor="Ford" className="cursor-pointer">
              Ford
            </label>
          </div>
          <div className="flex flex-row items-center gap-3 ">
            <input
              type="checkbox"
              name=""
              id="Hyundai"
              className="cursor-pointer"
            />
            <label htmlFor="Hyundai" className="cursor-pointer">
              Hyundai
            </label>
          </div>
          <div className="flex flex-row items-center gap-3">
            <input
              type="checkbox"
              name=""
              id="Kia"
              className="cursor-pointer"
            />
            <label htmlFor="Kia" className="cursor-pointer">
              Kia
            </label>
          </div>
          <div className="flex flex-row items-center gap-3">
            <input
              type="checkbox"
              name=""
              id="Land rover"
              className="cursor-pointer"
            />
            <label htmlFor="Land rover" className="cursor-pointer">
              Land Rover
            </label>
          </div>
          <div className="flex flex-row items-center gap-3 ">
            <input
              type="checkbox"
              name=""
              id="Toyota"
              className="cursor-pointer"
            />
            <label htmlFor="Toyota" className="cursor-pointer">
              Toyota
            </label>
          </div>
          <div className="flex flex-row items-center gap-3">
            <input
              type="checkbox"
              name=""
              id="Lexus"
              className="cursor-pointer"
            />
            <label htmlFor="Lexus" className="cursor-pointer">
              Lexus
            </label>
          </div>
          <div className="flex flex-row items-center gap-3">
            <input
              type="checkbox"
              name=""
              id="Volswagon"
              className="cursor-pointer"
            />
            <label htmlFor="Volswagon" className="cursor-pointer">
              Volswagon
            </label>
          </div>
          <button
            className="hover:bg-yellow-400 text-center py-2 rounded-md bg-black text-white
         transition delay-150 duration-300 ease-in-out hover:-translate-y-1"
          >
            Apply Filter
          </button>
        </div>
        <div className="flex flex-col">
          {/* <div className="flex flex-col p-4 w-96 border border-gray-100 bg-white rounded-t-md ">
            <Image
              src="https://demo2.wpopal.com/karpart/wp-content/uploads/2023/11/product_24-768x768.jpg"
              alt="Test Image"
              width={150}
              height={50}
              className="self-center aspect-square"
            />

            <div className="flex flex-col w-full">
              <p className="font-light text-gray-200 ">Body Parts, Parts</p>
              <p className="font-semibold">
                Portable Mini 12V Automobile Inflator Air Compressor 150 PSI
              </p>
              <p className="text-xl text-orange-300">$919.80</p>
            </div>
          </div>
          <div className="flex items-center justify-between text-white bg-[#1B283A] w-96 py-2 px-3 rounded-b-md hover:bg-yellow-400">
            <button className="w-fit">Add to cart</button>
            <Link href="https://google.com" className="text-xl">
              <BiCart />
            </Link>
          </div> */}
        </div>
      </div>
    </div>
  );
}
