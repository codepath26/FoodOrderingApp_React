import classes from './Button.module.css'


import React, { useEffect, useState } from 'react'

export default function Button(props) {
  const [page , setPage] = useState(1);
  const onBtnClick = (e)=>{
  // console.log(typeof +e.target.innerHTML);
   setPage(Number(e.target.innerHTML));
   
  }
  useEffect(()=>{
    props.getpage(page);
  },[page]);
  return (
    <div className={classes.btnlist}>
      <button className={classes.btn} onClick={onBtnClick}>1</button>
      <button className={classes.btn} onClick={onBtnClick}>2</button>
      <button className={classes.btn} onClick={onBtnClick}>3</button>
      <button className={classes.btn} onClick={onBtnClick}>4</button>
      <button className={classes.btn} onClick={onBtnClick}>5</button>
      <button className={classes.btn} onClick={onBtnClick}>6</button>
      <button className={classes.btn} onClick={onBtnClick}>7</button>
      <button className={classes.btn} onClick={onBtnClick}>8</button>
      <button className={classes.btn} onClick={onBtnClick}>9</button>
    </div>
  )
}
