import { createContext, ReactNode, useEffect, useReducer } from "react";

import {
  addItemAction,
  checkoutCartAction,
  decrementItemQuantityAction,
  incrementItemQuantityAction,
  removeItemAction,
} from "../reducers/cart/actions";
import { cartReducer, Item, Order } from "../reducers/cart/reducer";
import { OrderInfo } from "../pages/Cart";
import { useNavigate } from "react-router-dom";

interface CartContextType {
  cart: Item[];
  orders: Order[];
  addItem: (item: Item) => void;
  removeItem: (itemId: Item["id"]) => void;
  decrementItemQuantity: (itemId: Item["id"]) => void;
  incrementItemQuantity: (itemId: Item["id"]) => void;
  checkout: (order: OrderInfo) => void;
}

// eslint-disable-next-line react-refresh/only-export-components
export const CartContext = createContext({} as CartContextType);

interface CartContextProviderProps {
  children: ReactNode;
}

const CartContextProvider = ({ children }: CartContextProviderProps) => {
  const [cartState, dispatch] = useReducer(
    cartReducer, {
      cart: [],
      orders: [],
    },
    (cartState) => {
      const storedStateAsJSON = localStorage.getItem(
        '@coffee-delivery:cart-state-1.0.0',
      )

      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON)
      }

      return cartState
    }
  );

  const navigate = useNavigate()

  const { cart, orders } = cartState

  const addItem = (item: Item) => {
    dispatch(addItemAction(item))
  }

  const removeItem = (itemId: Item['id']) => {
    dispatch(removeItemAction(itemId))
  }

  const checkout = (order: OrderInfo) => {
    dispatch(checkoutCartAction(order, navigate))
  }

  const incrementItemQuantity = (itemId: Item['id']) => {
    dispatch(incrementItemQuantityAction(itemId))
  }

  const decrementItemQuantity = (itemId: Item['id']) => {
    dispatch(decrementItemQuantityAction(itemId))
  }

  useEffect(() => {
    if (cartState) {
      const stateJSON = JSON.stringify(cartState)

      localStorage.setItem('@coffee-delivery:car-state-1.0.0', stateJSON)
    }
  }, [cartState])

  return (
    <CartContext.Provider
      value={{
        addItem,
        cart,
        orders,
        decrementItemQuantity,
        incrementItemQuantity,
        removeItem,
        checkout
      }}
    >
      { children }
    </CartContext.Provider>
  )
};

export { CartContextProvider }
