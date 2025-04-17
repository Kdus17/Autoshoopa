export default function CheckOut() {
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
    <div className="flex flex-col h-screen items-center justify-between ">
      <div className="flex flex-col w-full items-center gap-3">
        <h1 className="text-3xl ">Shopping Cart</h1>
        {items.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-between rounded-md  border w-1/3 "
          >
            <div className="w-full px-5">
              <div className="flex flex-row justify-between">
                <p>{item.product_name} </p>
                <button className="cursor-pointer py-1 px-2">x</button>
              </div>
              <p className="flex flex-col justify-center">
                {item.price} x {item.freqency} = ${item.price * item.freqency}{" "}
                <br />
              </p>
            </div>
          </div>
        ))}
      </div>
      <button
        className="bg-yellow-400 w-1/3
         transition delay-150 duration-300 ease-in-out hover:-translate-y-1 rounded-md"
      >
        CheckOut
      </button>
    </div>
  );
}
