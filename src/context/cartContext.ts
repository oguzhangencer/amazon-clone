import {createContext} from "react"
import { CartContext } from "./types/cartContext.interface"

export const CartContext = createContext<CartContext>({
  cartItems: [],
  totalAmount: 0,
  addToCart: (product) => {},
  removeFromCart: (id) => {}
})