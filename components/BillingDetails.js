export default function BilingDetails() {
  return (
    <div className="flex flex-col py-10 px-10 gap-4">
      <h1 className="text-6xl font-bold">Checkout</h1>
      <p className="text-4xl font-semibold">Billing details</p>
      <div className="flex flex-row gap-12">
        <div className="flex flex-col w-full">
          <p className="font-semibold">First name *</p>
          <input
            type="text"
            className="border-1 border-black w-full h-10 px-3"
          />
        </div>

        <div className="flex flex-col w-full">
          <p className="font-semibold">Last name *</p>
          <input
            type="text"
            className="border-1 border-black w-full h-10 px-3"
          />
        </div>
      </div>
      <p className="font-semibold">Company name (optional)</p>
      <input type="text" className="border-1 border-black h-10 px-3" />
      <p className="font-semibold">City *</p>
      <input
        type="text"
        placeholder="Addis Ababa"
        className="border-1 border-black h-10 px-3"
      />
      <p className="font-semibold">Subcity * *</p>
      <input
        type="text"
        placeholder="Yeka"
        className="border-1 border-black h-10 px-3"
      />
      <p className="font-semibold">Phone number *</p>
      <input type="text" className="border-1 border-black h-10 px-3" />
      <p className="font-semibold">Email address *</p>
      <input
        type="email"
        name=""
        id=""
        className="border-1 border-black h-10 px-3"
      />
      {/* <p className="font-semibold">Order notes (optional)</p>
      <input type="textarea" className="h-40 border-1 border-black" /> */}
    </div>
  );
}
