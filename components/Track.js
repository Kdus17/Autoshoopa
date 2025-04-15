export default function Track() {
  return (
    <div className="flex flex-col gap-6 px-25">
      <h1 className="text-6xl font-bold">Track Order</h1>
      <p className="font-light">
        To track your order please enter your Order ID in the box below and
        press the "Track" button. This was given to you on your receipt and in
        the confirmation email you should have received.
      </p>
      <h1 className="text-3xl font-semibold">Order ID</h1>
      <input
        type="text"
        placeholder="Found in your reciept"
        className="border-1 border-black px-5 rounded-md py-4"
      />
      <h1 className="text-3xl font-semibold">Billing email</h1>
      <input
        type="text"
        placeholder="Email used for the order"
        className="border-1 border-black px-5 rounded-md py-4"
      />
      <button
        className="mt-10 bg-yellow-400 hover:bg-black text-white h-13 rounded-md text-start px-10 uppercase font-bold 
      transition delay-150 duration-300 ease-in-out hover:-translate-y-1"
      >
        Track
      </button>
    </div>
  );
}
