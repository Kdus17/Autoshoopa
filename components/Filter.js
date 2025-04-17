import { IoChevronForwardOutline } from "react-icons/io5";
import BrandDetails from "./Details/BrandDetail";
import CategoryDetails from "./Details/CategoryDetail";

export default function Filters() {
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
          <CategoryDetails />
          <div className="flex flex-row gap-8 border-b pb-2 ">
            <p className="text-3xl font-bold ">Brand</p>
          </div>
          <BrandDetails />

          <button
            className="hover:bg-yellow-400 text-center py-2 rounded-md bg-black text-white
         transition delay-150 duration-300 ease-in-out hover:-translate-y-1"
          >
            Apply Filter
          </button>
        </div>
      </div>
    </div>
  );
}
