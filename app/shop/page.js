"use client";
import Filters from "@/components/Filters";
import { useEffect, useState } from "react";
import ProductList from "@/components/ProductList";

import { IoChevronForwardOutline } from "react-icons/io5";
import Link from "next/link";

export default function HomePage() {
  const [brands, setBrands] = useState([]);
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [year, setYear] = useState();
  const [year2, setYear2] = useState();
  const [minimum, setMinimum] = useState(0);
  const [maximum, setMaximum] = useState(100000);
  const [apply, setApply] = useState(0);
  let base_url = `${process.env.NEXT_PUBLIC_BACK_URL}api/products/`;

  useEffect(() => {
    console.log("Use effect has ran", brands, categories);

    base_url += "?minimum=" + minimum + "&&maximum=" + maximum;
    if (year && year2) {
      base_url += "&&year=" + year + "&&year2=" + year2;
    }
    if (categories.length > 0 && brands.length > 0) {
      base_url +=
        "&&brands=" +
        brands.join(",") +
        "&&" +
        "categories=" +
        categories.join(",");
    } else if (categories.length > 0) {
      base_url += "&&categories=" + categories.join(",");
    } else if (brands.length > 0) {
      base_url += "&&brands=" + brands.join(",");
    }

    console.log("The base url is " + base_url);

    fetch(base_url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setProducts(data.products);
      });
  }, [apply]);

  return (
    <div className="">
      <div className="flex flex-col bg-[url('https://demo2.wpopal.com/karpart/wp-content/uploads/2023/11/shop-bc.jpg')] h-75 text-center justify-center">
        <h1 className="text-5xl text-white">Shop</h1>
        <p className="flex flex-row items-center justify-center font-bold">
          <Link href="/">Home</Link> <IoChevronForwardOutline /> PageShop
        </p>
      </div>
      <div className="flex gap-6 py-6 flex-col md:flex-row ">
        <div className="w-full flex">
          <Filters
            setBrands={setBrands}
            setCategories={setCategories}
            brands={brands}
            categories={categories}
            setYear={setYear}
            setYear2={setYear2}
            setMinimum={setMinimum}
            setMaximum={setMaximum}
            apply={apply}
            setApply={setApply}
          />
        </div>
        <div>
          <ProductList products={products} />
        </div>
      </div>
    </div>
  );
}
