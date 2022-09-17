import { ProductItem } from "./productItem.interface";

export interface CartContext {
  cartItems: Array<ProductItem>
  totalAmount: number
  addToCart: (item: ProductItem) => void
  removeFromCart: (id: number) => void
}