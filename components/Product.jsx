import {BiCart} from "react-icons/bi";
import Image from "next/image";
import {useCartContext} from "@/hooks/useCartContext";


export default function Product({product}) {

    const context = useCartContext()
    const handleAddProduct = () => {
        console.log(product)

        context.dispatch({
            type:"ADD_PRODUCT",
            payload:{
                product_Id: product._id,
                product_name: product.product_name,
                price: product.price
            }
        })

    }

    return (
        <div className="w-full text-black">
            <div className="flex flex-col p-4  border border-gray-100 bg-white  font-serif">
                <div  className="relative self-center w-[150px] h-[150px] border-b">
                <Image src={product.image} alt="Test Image" fill className="object-contain"sizes="(max-width: 768px) 100vw, 150px"/>
                </div>
                

                <div className="flex flex-col justify-between w-full min-h-40 border-t border-gray-100">
                    <div>
                    <p className="font-semibold text-2xl text-center">{product.product_name}</p>
                    <p className="font-light text-sm ">{product.product_description}</p>
                    </div>
                    <p className="text-md font-bold text-center text-orange-300">price: ${product.price} stock:{product.quantity}</p>
                    
                </div>
            </div>
            <button className="flex flex-row items-center w-full justify-between text-white bg-[#1B283A]  py-2 px-3 rounded-b-md hover:bg-yellow-400"onClick={()=>(handleAddProduct(product))}>
                <span>
                    Add to cart  
                    </span>
                <BiCart className="self-center text-2xl"/>
            </button>
        </div>
    )
}
