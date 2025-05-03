"use client";
import { useState } from "react";
import formatDistanceToNow from "date-fns/formatDistanceToNow";

export default function Track() {
  const [order_id, setOrder_id] = useState("");
  const [show, setShow] = useState(false);
  const [orders, setOrders] = useState([]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setShow(true);
    const response = await fetch(
      `https://ecommerce-backend-er55.onrender.com/api/orders/` + order_id
    );
    const json_response = await response.json();
    if (json_response) {
      setOrders(json_response.orders);
    }
  };
  return (
    <>
      <div className="flex flex-col gap-6 text-black px-25">
        <h1 className="text-6xl font-bold">Track Order</h1>
        <p className="font-light">
          To track your order please enter your Order ID in the box below and
          press the Track button. This was given to you on your receipt and in
          the confirmation email you should have received.
        </p>
        <h1 className="text-3xl font-semibold">Billing email</h1>
        <input
          type="text"
          placeholder="Order_id"
          className="border-1 focus:ring-yellow-400 focus:ring-2 px-5 rounded-md py-4 outline-none
          w-2/3 self-center border-gray-200 shadow-md focus:border-yellow-400 caret-yellow-400"
          value={order_id}
          onChange={(e) => setOrder_id(e.target.value.trim())}
        />
        <button
          className="mt-10 bg-yellow-400 hover:bg-yellow-500 border-1 border-gray-200 w-2/3 self-center text-white h-13 rounded-md text-start px-10 uppercase font-bold
      transition delay-150 duration-300 ease-in-out hover:-translate-y-1"
          onClick={handleSubmit}
        >
          Track
        </button>
      </div>
      {show && (
        <div className="mt-8">
          {orders.map((order) => (
            <div key={order._id} className="mb-8">
              <div className="overflow-hidden rounded-lg shadow-lg border border-gray-200">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Status
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Ordered Date
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Total Price
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50 transition-colors duration-150">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                          ${
                            order.status === "Pending"
                              ? "bg-yellow-100 text-yellow-800"
                              : order.status === "Completed"
                              ? "bg-green-100 text-green-800"
                              : "bg-gray-100 text-gray-800"
                          }`}
                        >
                          {order.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {formatDistanceToNow(new Date(order.createdAt), {
                          addSuffix: true,
                        })}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        ${order.total_price}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
