import { IoIosCheckmarkCircleOutline } from "react-icons/io";

export default function OrderConformation({ Order_Id }) {
  return (
    <div className="flex flex-col items-center justify-center text-black text-center h-screen">
      <div className="flex flex-row gap-5">
        <IoIosCheckmarkCircleOutline className="text-6xl text-green-800" />
        <h1 className="text-6xl">Thank You for Your Purchase!</h1>
      </div>
      <p className=" text-4xl">
        Your order has been placed successfully.<br></br> Below are your order
        details:
      </p>
      <p className="text-4xl">Order Number:{Order_Id}</p>
    </div>
  );
}
