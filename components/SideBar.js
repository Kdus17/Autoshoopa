import Link from "next/link";
import { AuthContext } from "@/context/AuthContext";
import { useContext } from "react";

export default function SideBar() {
  const auth_context = useContext(AuthContext);
  return (
    <div className="fixed top-0 left-0 h-screen w-64 bg-white shadow-lg  pt-24 px-4">
      <nav className="flex flex-col gap-4">
        <Link
          key="/manage"
          href="/MyOrders"
          className="text-lg font-mono hover:bg-yellow-400 py-2 px-4 text-center
            "
        >
          My Products
        </Link>
        <Link
          key="/shop"
          href="/shop"
          className="text-lg font-mono hover:bg-yellow-400 py-2 px-4 text-center
            "
        >
          Products
        </Link>
        <Link
          key="/contact"
          href="/contact"
          className="text-lg font-mono hover:bg-yellow-400 py-2 px-4 text-center
            "
        >
          Contact
        </Link>
        {auth_context.state.token && (
          <Link
            key="/add"
            href="/add"
            className="text-lg font-mono hover:bg-yellow-400 py-2 px-4 text-center
            "
          >
            Add Product
          </Link>
        )}
      </nav>
    </div>
  );
}
