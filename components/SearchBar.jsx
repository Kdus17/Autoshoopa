"use client"
import {CiMenuBurger, CiSearch} from "react-icons/ci";
import {useEffect, useRef, useState} from "react";
const menu_names = ["Brake System","Filters","Engine","Body","Suspension","Cooling System"]

export default function SearchBar() {

    // const [displayCategoriesMenu, setDisplayCategoriesMenu] = useState(false)
    // const categoryRef = useRef(null);

    // useEffect(() => {

    //     function handleCategoryChange(event) {
    //         if (categoryRef.current && !categoryRef.current.contains(event.target) ) {
    //             setDisplayCategoriesMenu(false)
    //         }

    //         if (categoryRef.current && categoryRef.current.contains(event.target)) {
    //             setDisplayCategoriesMenu(true)
    //         }

    //     }

    //     document.addEventListener("mouseover", handleCategoryChange );

    //     return () => {
    //         document.removeEventListener("mouseover", handleCategoryChange);
    //     }

    // }, [])


    return (
        <div className="flex justify-center text-black px-3 py-2 my-2 gap-6">

            {/* <div className="relative flex text-white items-center gap-2 px-3 py-2 rounded-sm" ref={categoryRef}>
                {displayCategoriesMenu && <div className="flex flex-col border border-gray-200 p-2 absolute bg-white text-black top-10 left-0 w-full" >
                    {menu_names.map((menu_name) => (
                        <p key={menu_name} className="p-2 border-b-2 border-gray-200 hover:text-yellow-400 cursor-pointer">{menu_name}</p>

                    ))}
                </div>}
            </div> */}


            <div className="flex items-center bg-white rounded-md gap-4 p-2 w-2/3 justify-around">

                <input type="text" placeholder="Search by Product Name " className="outline-none bg-transparent w-4/5 caret-yellow-400"/>
                <button className="text-xl ">
                    <CiSearch />
                </button>

            </div>

        </div>
    )
}