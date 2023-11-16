import { useState } from "react";
import Cart from "./Components/Cart/Cart";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import CartProvider from "./Store/CartProvider";
import Button from "./Components/UI/Button";
import classes from './App.module.css'

function App() {
  const [cartIsShown , setCartIsShown] = useState(false);
  const[length , setLength]=useState(1);
  const showCartHandler = ()=>{
    setCartIsShown(true);
  }
  const hideCartHandler = ()=>{
    setCartIsShown(false);
  }
  const onPageChange = (page)=>{
   setLength(page);
  }
  return (
    <CartProvider>
     {cartIsShown && <Cart  onClose={hideCartHandler}/>}
      <Header onShowCart = {showCartHandler}/>
      <main className={classes.main}>
      <Meals itemLimit={length}/>
      </main>
      <Button getpage={onPageChange}/>
    </CartProvider>
  );
}

export default App;



































