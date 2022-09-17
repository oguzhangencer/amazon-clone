import { ProductItem } from "./productItem.interface"

export enum CartActionType {
  ADD = "ADD",
  REMOVE = "REMOVE",
  UPDATE_STATE = "UPDATE_STATE",
}

export interface CartState {
  items: ProductItem[]
  totalAmount: number
}

export type CartAction =
| {type: CartActionType.ADD; item: ProductItem}
| {type: CartActionType.REMOVE; id: number}
| {type: CartActionType.UPDATE_STATE; value: any}