import { NavigateFunction } from 'react-router-dom'
import { OrderInfo } from '../../pages/Cart'
import { Item } from './reducer'

export enum ActionTypes {
  ADD_ITEM = 'ADD_ITEM',
  REMOVE_ITEM = 'REMOVE_ITEM',
  INCREMENT_ITEM_QUANTITY = 'INCREMENT_ITEM_QUANTITY',
  DECREMENT_ITEM_QUANTITY = 'DECREMENT_ITEM_QUANTITY',
  CHECKOUT_CART = 'CHECKOUT_CART',
}

export type Actions =
  | {
    type: ActionTypes.ADD_ITEM
    payload: {
      item: Item
    }
  }
  | {
    type:
    | ActionTypes.INCREMENT_ITEM_QUANTITY
    | ActionTypes.DECREMENT_ITEM_QUANTITY
    | ActionTypes.REMOVE_ITEM
    payload: {
      itemId: Item['id']
    }
  }
  | {
    type: ActionTypes.CHECKOUT_CART
    payload: {
      order: OrderInfo
      navigate: NavigateFunction
    }
  }

const addItemAction = (item: Item) => {
  return {
    type: ActionTypes.ADD_ITEM,
    payload: {
      item,
    },
  } satisfies Actions
}

const removeItemAction = (itemId: Item['id']) => {
  return {
    type: ActionTypes.REMOVE_ITEM,
    payload: {
      itemId,
    },
  } satisfies Actions
}

const incrementItemQuantityAction = (itemId: Item['id']) => {
  return {
    type: ActionTypes.INCREMENT_ITEM_QUANTITY,
    payload: {
      itemId,
    },
  } satisfies Actions
}

const decrementItemQuantityAction = (itemId: Item['id']) => {
  return {
    type: ActionTypes.DECREMENT_ITEM_QUANTITY,
    payload: {
      itemId,
    },
  } satisfies Actions
}

const checkoutCartAction = (
  order: OrderInfo,
  navigate: NavigateFunction
) => {
  return {
    type: ActionTypes.CHECKOUT_CART,
    payload: {
      order,
      navigate,
    },
  } satisfies Actions
}

export {
  addItemAction,
  removeItemAction,
  incrementItemQuantityAction,
  decrementItemQuantityAction,
  checkoutCartAction
}
