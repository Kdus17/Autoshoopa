import Image from "next/image";
import ProductExplore from "@/components/ProductExplore";
import BilingDetails from "@/components/BillingDetails";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import Track from "@/components/Track";
import Product from "@/components/Filter";
import TrackOrder from "@/components/TrackOrder";
import SearchBar from "@/components/Search";

export default function Home() {
  return (
    <>
      <SearchBar />
      <ProductExplore />
      <Product />
      <Contact />
      <Track />
      <BilingDetails />
      <TrackOrder />
      <Footer />
    </>
  );
}
