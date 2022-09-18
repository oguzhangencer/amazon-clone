import products from "../data/products.json";
import ProductCart from "./ProductCart";

export default function Products() {
  return (
    <div className="grid grid-cols-4 gap-x-10 gap-y-10 py-10 ">
      {products?.map((product) => (
        <ProductCart key={product.id} product={product} />
      ))}
    </div>
  );
}
