import { Button } from '@mantine/core';
import { useReducer} from 'react';
import CartContext from './CartContext';
import CartReducer from './CartReducer';
import { ActionType, CartAction } from './Types';

const CartState = ({ children}) =>{
  const initialState = {
    cartItems: [],
    orders: [],
  }
  
 


  const [state, dispatch] = useReducer(CartReducer, initialState)


  const addToCart = (item: Product) => {
    dispatch({ type: ActionType.ADD_CART, payload: item});
  };

  const deleteCart = (id: string) => {
    dispatch({ type: ActionType.DELETE_CART, payload: id });
  };

  const addOrder = (item: Product) => {
    dispatch({ type: ActionType.ADD_ORDER, payload: item });
  };

  const emptyCart = () => {
    dispatch({ type: ActionType.EMPTY_CART });
  };

  return (
    <CartContext.Provider
      value={{
        cartItems: state.cartItems,
        orders: state.orders,
        addToCart,
        deleteCart,
        addOrder,
        emptyCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}