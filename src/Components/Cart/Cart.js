import React from 'react'
import classes from './Cart.module.css'
import Modal from '../UI/Modal'
export default function Cart(props) {
  const cartItems = (
  <ul className={classes['cart-items']}>
    {[{ id:'c1' , name:"Sushi" , amount : 2,price : 12.99}].map((item)=><li key={item.id}>{item.name}</li>)}
  </ul>)
  return (
    <Modal onClose={props.onClose}>
      {cartItems}
    <div className={classes.total}>
      <span>Total Amount</span>
      <span>12.45</span>
    </div>
    <div className={classes.actions}>
      <button className={classes.button} onClick={props.onClose}>Close</button>
      <button className={classes["button--alt"]}>Order</button>
    </div>
    </Modal>
  )
}
