"use client";

import { MdOutlineDeleteOutline } from "react-icons/md";
import { useCartContext } from "@/hooks/useCartContext";

export default function SideCheckout() {
  const context = useCartContext();
  console.log(context);
  let sub_total = 0;
  {
    Array.from(context.state).map(([key, value]) => {
      sub_total += value[0] * value[1];
    });
  }

  const handleDelete = (product_name) => {
    context.dispatch({
      type: "REMOVE_PRODUCT",
      payload: {
        product_name,
      },
    });
  };
  const handleSubmit = async () => {
    const products = {};
    for (const [key, value] of context.state) {
      products[key] = value;
    }

    const post_options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(products),
    };
    const response = await fetch(
      "https://ecommerce-backend-er55.onrender.com/api/orders/create-checkout-session",
      post_options
    );
    const json_response = await response.json();
    window.location.href = json_response.url;
  };

  return (
    <div className="fixed text-black pt-20 inset-y-0 right-0 w-1/3 justify-between flex flex-col max-w-sm bg-white shadow-lg overflow-y-auto z-50">
      <div className="flex flex-col w-full items-center gap-3">
        <h1 className="text-3xl font-semibold">Shopping Cart</h1>
        {Array.from(context.state).map(([key, value]) => (
          <div
            key={key}
            className="flex flex-col py-2 items-center justify-between rounded-md bg-white  border border-gray-300 w-full"
          >
            <div className="w-full px-5">
              <div className="flex flex-row justify-between">
                <p className="font-semibold">{key} </p>
                <span
                  className="cursor-pointer py-1 px-2  inset-0 hover:text-red-600 text-xl"
                  onClick={() => handleDelete(key)}
                >
                  <MdOutlineDeleteOutline />
                </span>
              </div>
              <p className="flex flex-col justify-center">
                {value[0]} * {value[1]} = ${value[0] * value[1]} <br />
              </p>
            </div>
          </div>
        ))}
      </div>
      <div>
        {" "}
        <div className="flex justify-between font-semibold items-center">
          <span>Subtotal:</span>
          <span>${sub_total}</span>
        </div>
        <button
          className="bg-yellow-400 w-full font-semibold py-2 px-3
       transition delay-150 duration-300 ease-in-out hover:-translate-y-1 rounded-md"
          onClick={handleSubmit}
        >
          CheckOut
        </button>
      </div>
    </div>
  );
}
