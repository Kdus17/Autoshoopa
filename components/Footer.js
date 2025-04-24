import Link from "next/link";

export default function Footer() {
  return (
    <div className="flex flex-row justify-around bg-[#1B283A] text-gray-300 py-4 mt-4">
      <p>Copyright © 2025 AutoShoppa. All rights reserved</p>
      <Link
        href="#navbar"
        className="cursor-pointer text-red-400 scroll-smooth"
      >
        Go to Top
      </Link>
    </div>
  );
}
