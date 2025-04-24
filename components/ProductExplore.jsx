import { FaAngleDoubleRight } from "react-icons/fa";
import Link from "next/link";

export default function ProductExplore() {
  return (
    <div className="flex flex-col items-center justify-center border-b border-black rounded-md bg-[url('https://demo2.wpopal.com/karpart/wp-content/uploads/2023/11/h1_bg-1.jpg')] bg-cover h-100 gap-5 text-white mt-10">
      <p className="">Your Trusted Platform</p>
      <h1 className="text-7xl">
        Get the right part <br />
        at the right price
      </h1>
      <p>Browse a wide range of auto & autoparts</p>
      <Link
        href={"/shop"}
        className=" py-3 px-8 rounded-sm hover:bg-yellow-400 bg-white text-black flex flex-row items-center
      transition delay-150 duration-300 ease-in-out hover:-translate-y-1"
      >
        Explore Products
        <FaAngleDoubleRight className="text-xl" />
      </Link>
    </div>
  );
}
