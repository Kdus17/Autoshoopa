"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { QRCodeSVG } from "qrcode.react";

export default function OrderConfirmation() {
  const searchParams = useSearchParams();
  const [orderDetails, setOrderDetails] = useState(null);
  const [error, setError] = useState(null);
  const [qrValue, setQrValue] = useState("");

  useEffect(() => {
    const sellerEmail = searchParams.get("selleremail");
    const products = searchParams.get("products");

    console.log("URL Parameters:", {
      sellerEmail,
      products,
      allParams: Object.fromEntries(searchParams.entries()),
    });

    if (!products) {
      setError("Missing order information");
      return;
    }

    try {
      const parsedProducts = JSON.parse(decodeURIComponent(products));
      console.log("Parsed Products:", parsedProducts);
      const qrData = {
        orderDate: new Date().toISOString(),
        products: parsedProducts.map((p) => ({
          name: p.name,
          seller: p.seller,
          sellerEmail: p.selleremail,
          price: p.price,
        })),
      };
      setQrValue(JSON.stringify(qrData));

      if (!Array.isArray(parsedProducts)) {
        throw new Error("Invalid products data");
      }

      // Extract seller email from the first product or use the URL parameter
      const sellerEmailFromProduct = parsedProducts[0]?.selleremail;
      console.log("Seller Email from Product:", sellerEmailFromProduct);

      setOrderDetails({
        sellerEmail: sellerEmailFromProduct || sellerEmail,
        products: parsedProducts,
      });
    } catch (error) {
      console.error("Error parsing products:", error);
      setError("Failed to load order details");
    }
  }, [searchParams]);

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-red-500 text-center">
          <h2 className="text-xl font-semibold mb-2">Error</h2>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  if (!orderDetails || !orderDetails.products) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-yellow-400"></div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl min-h-screen mx-auto p-8">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-green-600 mb-2">
            Order Confirmed!
          </h1>
          <p className="text-gray-600">Thank you for your purchase</p>
          <p className="text-sm text-gray-500 mt-2">
            Seller Email: {orderDetails.sellerEmail}
          </p>
        </div>

        <div className="mt-6 flex flex-col items-center">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <QRCodeSVG
              value={qrValue}
              size={200}
              level="H"
              includeMargin={true}
              className="mx-auto"
            />
          </div>
          <p className="text-sm text-gray-500 mt-2">Order Qr</p>
        </div>

        <div className="border-t border-gray-200 pt-6">
          <h2 className="text-xl font-semibold mb-4">Order Details</h2>
          <div className="space-y-4">
            {orderDetails.products && orderDetails.products.length > 0 ? (
              orderDetails.products.map((product, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                >
                  <div>
                    <h3 className="font-medium">
                      {product.productName || product.name}
                    </h3>
                    <p className="text-sm text-gray-600">
                      Seller: {product.sellerName || product.seller}
                    </p>
                    <p className="text-sm text-gray-500">
                      Email: {product.selleremail}
                    </p>
                    <p>price: {product.price}</p>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-500 text-center">
                No products found in this order
              </p>
            )}
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500 mt-2">
            Please contact the seller at {orderDetails.sellerEmail} for any
            queries.
          </p>
        </div>
      </div>
    </div>
  );
}
