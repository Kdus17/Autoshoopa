"use client";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Suspense } from "react";

export default function OrderConformation() {
  const searchParams = useSearchParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const productsParam = searchParams.get("products");
    if (productsParam) {
      try {
        const decodedProducts = JSON.parse(decodeURIComponent(productsParam));
        setProducts(decodedProducts);
        setLoading(false);
      } catch (error) {
        console.error("Error parsing products:", error);
        setLoading(false);
      }
    }
  }, [searchParams]);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center text-black text-center h-screen">
        <p className="mt-4 text-xl">Loading order details...</p>
      </div>
    );
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="flex flex-col items-center justify-center text-black text-center min-h-screen p-8 bg-gray-50">
        <div className="max-w-2xl w-full bg-white rounded-lg shadow-lg p-8">
          <div className="flex flex-col items-center gap-6">
            <IoIosCheckmarkCircleOutline className="text-7xl text-green-600" />
            <h1 className="text-4xl font-bold text-gray-800">
              Thank You for Your Purchase!
            </h1>
            <div className="w-24 h-1 bg-green-600 rounded-full"></div>
            <p className="text-xl text-gray-600">
              Your order has been placed successfully.
            </p>
            <div className="mt-4 p-4 bg-gray-100 rounded-lg w-full">
              <p className="text-2xl font-semibold text-gray-800">
                Purchased Products
              </p>
              <div className="text-xl text-gray-600 mt-2">
                {products.map((product, index) => (
                  <p key={index} className="py-1">
                    {product}
                  </p>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-4 mt-6">
              <p className="text-lg text-gray-600">
                You can track your order status in your account.
              </p>
              <div className="flex gap-4 justify-center">
                <Link
                  href="/MyOrders"
                  className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                >
                  View My Orders
                </Link>
                <Link
                  href="/shop"
                  className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors"
                >
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Suspense>
  );
}
