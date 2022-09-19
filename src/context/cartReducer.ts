import { CartState, Product } from "../interfaces/interface";

type CartAction =
| { type: "addProduct", payload: Product}
| { type: "deleteProduct", payload: Product}

export const CartReducer = (state: CartState, action: CartAction) => {
  switch (action.type) {
    case "addProduct":
      return {
        ...state,
        productCount: state.productCount + 1,
        products: [...state.products, action.payload],
        total: Number(state.total) + Number(action.payload.price)
      }
    case "deleteProduct":
      return {
        ...state,
        productCount: state.productCount - 1,
        products: [...state.products.filter(product => product?.id !== action.payload?.id)],
        total: Number(state.total) - Number(action.payload.price)
      }
    default:
      return state
  }
}