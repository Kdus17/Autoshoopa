import Link from "next/link";

export default function SideBar() {
  return (
    <div className="fixed top-0 left-0 h-screen w-64 bg-white shadow-lg  pt-24 px-4">
      <nav className="flex flex-col gap-4">
        {[
          { href: "/MyOrders", label: "My Orders" },
          { href: "/shop", label: "Products" },
          { href: "/contact", label: "Contact" },
          { href: "/add", label: "Add Product" },
        ].map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="text-lg font-mono hover:bg-yellow-400 py-2 px-4 text-center
            "
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
