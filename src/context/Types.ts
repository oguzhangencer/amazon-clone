export enum ActionType {
  ADD_CART = 'ADD_CART',
  DELETE_CART = 'DELETE_CART',
  ADD_ORDER = 'ADD_ORDER',
  EMPTY_CART = 'EMPTY_CART',
}

export type CartAction =
  | {type: "ADD_CART"; payload: number}
  | {type: "DELETE_CART"; payload: number}
  | {type: "ADD_ORDER"; payload: number}
  | {type: "EMPTY_CART"; payload: number}