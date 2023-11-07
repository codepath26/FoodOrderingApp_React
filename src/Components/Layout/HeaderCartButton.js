import classes from './HeaderCartButton.module.css'
import CartIcon from "../Cart/CartIcon";
import { useContext, useEffect, useState } from 'react';
import CartContext from '../../Store/cart-context';
 const HeaderCartButton = (props)=> {
 const cartCtx =  useContext(CartContext);
 const [btnIsHighlighted , setBtnIsHighlited] =useState(false); 
 const {items} = cartCtx;
//  const numberOfCartItems = cartCtx.items.length;
 const numberOfCartItems = items.reduce((curNumber , item)=>{
        // console.log(curNumber)
        // console.log("items",item)
        return curNumber + item.amount;
 } ,0);
//  console.log("numberofitems" , numberOfCartItems)

 const btnClasses = `${classes.button} ${ btnIsHighlighted ? classes.bump : ""}`
 useEffect(()=>{
 if(items.length === 0){
  return;
 }
 setBtnIsHighlited(true);
 const timer = setTimeout(() => { 
  setBtnIsHighlited(false);
  },300);

  return ()=>{
    clearTimeout(timer);
  }
 },[items]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon/>
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>
        {numberOfCartItems}
      </span>
    </button>
  );
}

export default HeaderCartButton;