import { CartContext } from "./CartContext";
import { CartState, Product } from "../interfaces/interface";
import { useReducer } from "react";
import { CartReducer } from "./cartReducer";

const INITIAL_STATE: CartState = {
  productCount: 0,
  products: [],
  total: 0,
};

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const CartProvider = ({ children }: Props): JSX.Element => {
  const [CartState, dispatch] = useReducer(CartReducer, INITIAL_STATE);

  const { products } = CartState;

  const addToCart = (product: Product) => {
    if (products.includes(product)) return;

    dispatch({ type: "addProduct", payload: product });
  };

  const deleteProduct = (product: Product) => {
    dispatch({ type: "deleteProduct", payload: product });
  };

  return (
    <CartContext.Provider
      value={{
        CartState,
        addToCart,
        deleteProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
