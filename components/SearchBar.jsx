"use client"
import { CiSearch} from "react-icons/ci";
import {useEffect,  useRef,  useState} from "react";
import Image from "next/image";
import {BiCart} from "react-icons/bi";
import {useCartContext} from "@/hooks/useCartContext";

function SearchProductCard({ product }) {
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
        <div 

            className="flex items-center gap-3 p-3 hover:bg-gray-100 cursor-pointer border-b border-gray-200 last:border-b-0"
        >
            <Image 
                src={product.image} 
                alt={product.product_name} 
                width={50} 
                height={50} 
                className="rounded-md object-cover"
            />
            <div>
                <h3 className="font-medium text-gray-800">{product.product_name}</h3>
                <p>{product.description}</p>
                <p>stock: {product.quantity}</p>
                <p className="text-yellow-500 font-semibold">${product.price}</p>
                <button className="flex flex-row items-center w-full justify-between text-white bg-[#1B283A]  py-2 px-3 rounded-b-md hover:bg-yellow-400"onClick={()=>(handleAddProduct(product))}>
                    <span>
                        Add to cart  
                   </span>
                    <BiCart className="self-center text-2xl"/>
                </button>
            </div>
        </div>
    );
}


export default function SearchBar() {
    const [searchQuery, setSearchQuery] = useState("");
    const [allProducts, setAllProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [showDropdown, setShowDropdown] = useState(false);
    const categoryRef = useRef(null);

    useEffect(() => {
        fetch(`http://localhost:8080/api/products/`)
            .then(response => response.json())
            .then(data => {
                setAllProducts(data.products);
            })
            .catch(error => console.error('Error fetching products:', error));
    }, []);

    useEffect(() => {
        if (searchQuery.trim()) {
            const q = searchQuery.toLocaleLowerCase().trim();
            const filtered = allProducts
                .filter(product => product.quantity > 0)
                .filter(product => 
                    product.product_name.toLowerCase().includes(q)
                )
                .sort((a, b) =>
                    (b.product_name.toLowerCase().startsWith(q) ? 1 : 0)
                    - (a.product_name.toLowerCase().startsWith(q) ? 1 : 0)
                );
            setFilteredProducts(filtered);
            setShowDropdown(true);
        } else {
            setFilteredProducts([]);
            setShowDropdown(false);
        }
    }, [searchQuery, allProducts]);
    useEffect(() => {
        function handleCategoryChange(event) {
          if (categoryRef.current && !categoryRef.current.contains(event.target)) {
            setShowDropdown(false);
          }
        }
    
        document.addEventListener("click", handleCategoryChange);
        return () => {
          document.removeEventListener("click", handleCategoryChange);
        };
      }, []);
    return (
        <div className="relative flex justify-center text-black px-3 py-2 my-2 gap-6 ">
            <div className="flex items-center bg-white rounded-md gap-4 p-2 w-2/3 justify-around">
            <input 
                    type="text" 
                    placeholder="Search by Product Name " 
                    className="outline-none bg-transparent w-4/5 caret-yellow-400"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onFocus={() => searchQuery.trim() && setShowDropdown(true)}
                />
                <button className="text-xl ">
                    <CiSearch />
                </button>
            </div>
            
            {showDropdown && (
                <div ref={categoryRef} className="absolute top-full mt-1 bg-white rounded-lg shadow-lg border border-gray-200 w-2/3 overflow-y-auto z-50">
                    {filteredProducts.length === 0 ? (
                        <div className="p-4 text-center text-gray-500">No products found</div>
                    ) : (
                        filteredProducts.map((product) => (
                            <SearchProductCard 
                                key={product._id} 
                                product={product}
                            />
                        ))
                    )}
                </div>
            )}
        </div>
    )
}