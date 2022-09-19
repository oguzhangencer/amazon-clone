import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Product } from "../interfaces/interface";
import { ProductCart } from "./ProductCart";

export default function Products() {
  const { CartState } = useContext(CartContext);

  const { products } = CartState;
  return (
    <div className="grid grid-cols-4 gap-x-10 gap-y-10 py-10 ">
      {products?.map((product: Product) => (
        <ProductCart
          key={product.id}
          product={product}
          id={""}
          imgUrl={""}
          name={""}
          price={""}
          rating={""}
        />
      ))}
    </div>
  );
}
