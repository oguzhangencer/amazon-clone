import { CartAction } from "./Types";

const initialState = {
  cartItems: [],
  orders: [],
};

function CartReducer(state: typeof initialState, action: CartAction) {
  switch (action.type) {
    case "ADD_CART":
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
    case "DELETE_CART":
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item !== action.payload),
      };
    case "ADD_ORDER":
      return {
        ...state,
        orders: [...state.orders, action.payload],
      };
    case "EMPTY_CART":
      return {
        ...state,
        cartItems: [],
      };
    default:
      return state;
  }
}

export default CartReducer;
