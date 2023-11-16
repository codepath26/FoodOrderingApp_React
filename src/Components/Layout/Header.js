import mealsImage from '../../assets/meals01.jpg';
import classes from './Header.module.css'
import HeaderCartButton from './HeaderCartButton';

export default function Header(props) {
  return (
    <>
     <header className={classes.header}>
      <h1>GALI_RESTRO</h1>
      <HeaderCartButton onClick= {props.onShowCart}/>
      </header> 
     <div className={classes['main-image']}>
      <img src={mealsImage} alt="MealsImage" />
     </div>
    </>
  )
}
