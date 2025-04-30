import Product from "@/components/Product";

export default function ProductList({ products, title }) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 font-serif">
      {products.map((product) => {
        return <Product key={product._id + title} product={product} />;
      })}
    </div>
  );
}
