import { createContext } from "react";
import { CartState, Product } from "../interfaces/interface";

export type CartContextProps = {
  CartState: CartState,
  addToCart: (product: Product) => void,
  deleteProduct: (product: Product) => void
}

export const CartContext = createContext<CartContextProps>({} as CartContextProps)