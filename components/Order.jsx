
const products = ["10.25\" Car multimedia Wifi android 10.0 car dvd",
    "Cylinder Engine GM Goodwrench 19178138",
    "Hosim RC Car Suspension Shock Absorbers ",
    "10inch 12V 24V 80W Car Auto Radiator Cooling Fan for Car"    ]

const prices = [80.29, 912.07, 575.46, 148.15]

export default function Order(){

    return (
        <div className="flex flex-col border-4 border-gray-200 rounded-md bg-white p-4">

            <h2 className="text-3xl font-semibold">Your Order</h2>

            <div className="flex justify-between mt-4 font-semibold ">
                <span>Product</span>
                <span>Subtotal</span>
            </div>

            {products.map((product,index)=>{
                return (
                    <div className="flex justify-between border-b border-gray-200 mt-4 pb-3 text-[#9FA4AA]" key={index}>
                        <span>{product}</span>
                        <span>${prices[index]}</span>
                    </div>
                )
            })}

            <div className="flex justify-between font-semibold mt-4">
                <span>Total</span>
                <span>$1,800</span>
            </div>

            <button className="px-3 py-2 bg-yellow-400 mt-4">
                PLACE ORDER
            </button>

        </div>
    )
}