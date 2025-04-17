import BilingDetail from "./Details/BilingDetail";

export default function BilingDetails() {
  return (
    <form action="" method="post">
      <div className="flex flex-col py-10 px-10 gap-4">
        <h1 className="text-6xl font-bold">Checkout</h1>
        <p className="text-4xl font-semibold">Billing details</p>
        <div className="flex flex-row gap-12">
          <div className="flex flex-col w-full">
            <label className="font-semibold flex flex-row">First name</label>
            <input
              type="text"
              className="border-1 border-black w-full h-10 px-3"
            />
          </div>

          <div className="flex flex-col w-full">
            <p className="font-semibold ">Last name</p>
            <input
              type="text"
              className="border-1 border-black w-full h-10 px-3"
            />
          </div>
        </div>
        <BilingDetail />

        {/* <p className="font-semibold">Order notes (optional)</p>
      <input type="textarea" className="h-40 border-1 border-black" /> */}
      </div>
    </form>
  );
}
