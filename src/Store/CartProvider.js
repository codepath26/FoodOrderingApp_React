import React, { useReducer } from 'react'
import CartContext from './cart-context'

const defaultCartState = {
   items : [],
   totalAmount : 0,
}
const cartReducer = (state, action)=>{
  if(action.type === "ADD"){
    const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
    const existingItemIndex = state.items.findIndex(item => item.id === action.item.id);
    const existingCartItem = state.items[existingItemIndex];
    console.log("existing" ,existingCartItem)
    let updatedItems;
    if(existingCartItem){
      console.log("here")
     const updatedItem = {
        ...existingCartItem,
        amount : existingCartItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingItemIndex] = updatedItem;
    }else{
      updatedItems = state.items.concat(action.item);
    }

    return {
      items : updatedItems,
      totalAmount : updatedTotalAmount,
    }
  }
  if(action.type === "REMOVE"){
    const existingCartItemIndex = state.items.findIndex(item => item.id === action.id);
    const existingItem = state.items[existingCartItemIndex];
    const updatedtotalAmount = state.totalAmount - existingItem.price;
    let updatedItems ;
    if(existingItem.amount === 1){
       updatedItems = state.items.filter(item => item.id !== action.id);
    }else{

     const updatedItem = {...existingItem,amount : existingItem.amount -1}
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }
    return {
      items : updatedItems,
      totalAmount : updatedtotalAmount,
    }
  }
  return defaultCartState;
}
export default function CartProvider(props) {
  const [cartState , dispatchCartAction] = useReducer(cartReducer, defaultCartState) 
  const addItemFromCartHandler = item =>{
    dispatchCartAction({
      type : "ADD",
      item : item
    })
  };
  const removeitemFromCartHandler = id => { 
    dispatchCartAction({
    type : "REMOVE",
    id : id
  })
};
  const cartContext = {
    items : cartState.items,
    totalAmount : cartState.totalAmount,
    addItem : addItemFromCartHandler,
    removeItem : removeitemFromCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  )
}
