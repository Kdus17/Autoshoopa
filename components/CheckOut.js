import { MdOutlineDeleteOutline } from "react-icons/md";

export default function CheckOut() {
  // const context = useCartContext();
  // console.log(context);
  // {
  //   Array.from(context.state).map(([key, value]) =>
  //     console.log(key, value, "iterator")
  //   );
  // }

  const items = [
    {
      product_name: "something",
      freqency: 10,
      price: 200,
    },
    {
      product_name: "something",
      freqency: 10,
      price: 200,
    },
  ];
  return (
    <div className="fixed pt-20 inset-y-0 right-0 w-1/3 justify-between flex flex-col max-w-sm bg-white shadow-lg overflow-y-auto z-50">
      <div className="flex flex-col w-full items-center gap-3">
        <h1 className="text-3xl font-semibold">Shopping Cart</h1>
        {items.map((item, index) => (
          <div
            key={index}
            className="flex flex-col py-2 items-center justify-between rounded-md bg-white  border border-gray-300 w-full"
          >
            <div className="w-full px-5">
              <div className="flex flex-row justify-between">
                <p className="font-semibold">{item.product_name} </p>
                <span className="cursor-pointer py-1 px-2  inset-0 hover:text-red-600 text-xl">
                  <MdOutlineDeleteOutline />
                </span>
              </div>
              <p className="flex flex-col justify-center">
                {item.freqency} * {item.price} = ${item.price * item.freqency}{" "}
                <br />
              </p>
            </div>
          </div>
        ))}
      </div>
      <button
        className="bg-yellow-400 w-full font-semibold py-2 px-3
       transition delay-150 duration-300 ease-in-out hover:-translate-y-1 rounded-md"
      >
        CheckOut
      </button>
    </div>
  );
}
