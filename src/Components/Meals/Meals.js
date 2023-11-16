import AvailableMeals from "./AvailableMeals"
import MealsSummary from "./MealsSummary"

export default function Meals(props) {
  return (
    <>
   <MealsSummary/>      
   <AvailableMeals limit={props.itemLimit}/>      
    </>
  )
}

