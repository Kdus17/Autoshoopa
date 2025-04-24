"use client";
import { useState } from "react";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
export default function Track() {
  const [email, setEmail] = useState("");
  const [show, setShow] = useState(false);
  const [orders, setOrders] = useState([]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setShow(true);
    const response = await fetch(
      "https://ecommerce-backend-er55.onrender.com/api/orders/" + email
    );
    const json_response = await response.json();
    if (json_response) {
      setOrders(json_response.orders);
    }
  };
  return (
    <>
      <div className="flex flex-col gap-6 px-25">
        <h1 className="text-6xl font-bold">Track Order</h1>
        <p className="font-light">
          To track your order please enter your Order ID in the box below and
          press the Track button. This was given to you on your receipt and in
          the confirmation email you should have received.
        </p>
        <h1 className="text-3xl font-semibold">Billing email</h1>
        <input
          type="text"
          placeholder="Email used for the order"
          className="border-1 border-black px-5 rounded-md py-4"
          value={email}
          onChange={(e) => setEmail(e.target.value.trim())}
        />
        <button
          className="mt-10 bg-yellow-400 hover:bg-black text-white h-13 rounded-md text-start px-10 uppercase font-bold
      transition delay-150 duration-300 ease-in-out hover:-translate-y-1"
          onClick={handleSubmit}
        >
          Track
        </button>
      </div>
      {show && (
        <div>
          {orders.map((order) => (
            <div key={order._id} className="mb-6">
              <table className="table-auto w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-2 text-center font-medium">
                      Status
                    </th>
                    <th className="border border-gray-300 px-4 py-2 text-center font-medium">
                      Ordered Date
                    </th>
                    <th className="border border-gray-300 px-4 py-2 text-center font-medium">
                      Total Price
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="text-center bg-white hover:bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2">
                      {order.status}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {formatDistanceToNow(new Date(order.createdAt), {
                        addSuffix: true,
                      })}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {order.total_price}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
