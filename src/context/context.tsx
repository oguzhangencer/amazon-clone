import { useLocalStorage } from "@mantine/hooks";
import { createContext, ReactNode, useContext, useState} from "react";
import AppReducer from "./AppReducer";
 
const GlobalProviderProps = {
  shoppingList : []
}

type CartItem ={
  id: number
  quantity: number
}

type GlobalContext = {
  openCart: () => void
  closeCart: () => void
  getItemQuantity: (id: number) => number
  increaseCartQuantity: (id: number) => void
  decreaseCartQuantity: (id: number) => void
  removeFromCart: (id: number) => void
  cartQuantity: number
  cartItems: CartItem[]
}

export const GlobalContext = createContext({} as GlobalContext);

export function GlobalProvider ({ children } : GlobalProviderProps ) {
  const [isOpen, setIsOpen] =useState(false)
  const [cartItems, setCartItems] = useLocalStorage<CartItem[](
    "cart",
    []
  )
  const cartQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  )
  const openCart = () => setIsOpen(true)
  const closeCart = () => setIsOpen(false)

  function increaseCartQuantity(id: number){
    return cartItems.find(item => item.id === id)?.quantity || 0
  }
}

  // Actions for changing state
