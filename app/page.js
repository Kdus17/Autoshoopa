import ProductExplore from "@/components/ProductExplore";
import BilingDetails from "@/components/BillingDetails";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import Track from "@/components/Track";
import Filters from "@/components/Filter";
import TrackOrder from "@/components/TrackOrder";
import SearchBar from "@/components/Search";
import AddProduct from "@/components/AddProduct";
import OrderConformation from "@/components/OrderConformation";
import CheckOut from "@/components/CheckOut";

export default function Home() {
  return (
    <>
      <SearchBar />
      <AddProduct />
      <CheckOut />
      <ProductExplore />
      <Filters />
      <Contact />
      <Track />
      <BilingDetails />
      <OrderConformation />
      <TrackOrder />
      <Footer />
    </>
  );
}
