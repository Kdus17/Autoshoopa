import { FaCartShopping } from "react-icons/fa6";
import { GiGears } from "react-icons/gi";
import { IoPersonCircleSharp } from "react-icons/io5";

export default function Navbar() {
  return (
    <div className="flex flex-row justify-around  mt-2">
      <div
        className="hover:text-yellow-400 text-6xl
       transition delay-150 duration-300 ease-in-out hover:-translate-y-1"
      >
        <GiGears />
      </div>

      <div className="flex flex-row gap-6 mt-4">
        <a
          href=""
          className="hover:text-yellow-400  
        transition delay-150 duration-300 ease-in-out hover:-translate-y-1"
        >
          Home
        </a>
        <a
          href=""
          className="hover:text-yellow-400
         transition delay-150 duration-300 ease-in-out hover:-translate-y-1"
        >
          Shop
        </a>
        <a
          href=""
          className="hover:text-yellow-400
         transition delay-150 duration-300 ease-in-out hover:-translate-y-1"
        >
          Track Order
        </a>
        <a
          href=""
          className="hover:text-yellow-400
         transition delay-150 duration-300 ease-in-out hover:-translate-y-1"
        >
          Contact
        </a>
      </div>

      <div className="flex flex-row gap-6 mt-4">
        <a
          href="#"
          className="hover:text-yellow-400 flex flex-row gap-2
         transition delay-150 duration-300 ease-in-out hover:-translate-y-1"
        >
          <IoPersonCircleSharp className="text-2xl" />
          Login/Register
        </a>
        <a
          href="#"
          className="flex flex-row hover:text-yellow-400
         transition delay-150 duration-300 ease-in-out hover:-translate-y-1"
        >
          <FaCartShopping className="text-2xl" />
          <p>{100}</p>
        </a>
      </div>
    </div>
  );
}
