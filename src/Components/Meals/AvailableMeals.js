import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
  {
    id: "m5",
    name: "Samosas",
    price: 150.99,
    description:"Crispy pastries with spiced potatoes and peas, a popular snack.",
  },
  {
    id: "m6",
    name: "Paneer Tikka",
    price: 120.5,
    description: "Grilled cottage cheese marinated in aromatic Indian spices.",
  },
  {
    id: "m7",
    name: "Chicken Tikka",
    price: 130.25,
    description:
      "Tandoori chicken with a flavorful spice marinade, a classic choice.",
  },
  {
    id: "m8",
    name: "Biryani",
    price: 180.75,
    description: "Fragrant rice dish with meat, spices, and aromatic herbs.",
  },
  {
    id: "m9",
    name: "Butter Chicken",
    price: 160.0,
    description:
      "Creamy tomato curry with tender chicken pieces, a beloved dish.",
  },
  {
    id: "m10",
    name: "Rogan Josh",
    price: 140.65,
    description: "Kashmiri lamb curry with rich, aromatic flavors, a delight.",
  },
  {
    id: "m11",
    name: "Palak Paneer",
    price: 135.0,
    description:
      "Creamy spinach curry with soft paneer cubes, a vegetarian delight.",
  },
  {
    id: "m12",
    name: "Chole Bhature",
    price: 110.99,
    description: "Spicy chickpea curry with deep-fried bread, a hearty combo.",
  },
  {
    id: "m13",
    name: "Tandoori Naan",
    price: 120.0,
    description: "Soft, oven-baked bread with a charred crust, a classic side.",
  },
  {
    id: "m14",
    name: "Aloo Paratha",
    price: 110.5,
    description:
      "Whole wheat flatbread stuffed with spiced potato filling, comforting.",
  },
  {
    id: "m15",
    name: "Dosas",
    price: 125.75,
    description:
      "Thin, crispy South Indian crepes served with various fillings.",
  },
  {
    id: "m16",
    name: "Hyderabadi Biryani",
    price: 190.0,
    description:
      "Spicy and aromatic rice dish from Hyderabad with meat or vegetables.",
  },
  {
    id: "m17",
    name: "Vada Pav",
    price: 105.25,
    description: "Indian burger with spiced potato fritter in a bun.",
  },
  {
    id: "m18",
    name: "Pav Bhaji",
    price: 115.0,
    description: "Mixed vegetable curry served with buttered rolls.",
  },
  {
    id: "m19",
    name: "Pani Puri (Golgappa)",
    price: 105.5,
    description:
      "Hollow fried balls filled with spicy tamarind water, a street food favorite.",
  },
  {
    id: "m20",
    name: "Bhel Puri",
    price: 120.25,
    description: "Crispy snack mix with puffed rice, vegetables, and chutneys.",
  },
  {
    id: "m21",
    name: "Dahi Puri",
    price: 115.99,
    description: "Small crispy puris filled with yogurt and chutneys.",
  },
  {
    id: "m22",
    name: "Aloo Tikki",
    price: 110.75,
    description: "Fried potato patties with spices, served with chutneys.",
  },
  {
    id: "m23",
    name: "Ragda Pattice",
    price: 130.0,
    description:
      "Spiced potato patties with white peas curry, a popular snack.",
  },
  {
    id: "m24",
    name: "Sev Puri",
    price: 140.99,
    description: "Small crispy puris filled with spiced vegetables and sev.",
  },
  {
    id: "m25",
    name: "Kachori",
    price: 125.5,
    description: "Deep-fried bread filled with spiced lentils or peas.",
  },
  {
    id: "m26",
    name: "Papri Chaat",
    price: 115.25,
    description: "Crispy dough wafers served with spicy and tangy chutneys.",
  },
  {
    id: "m27",
    name: "Mirchi Bajji",
    price: 110.0,
    description: "Spicy deep-fried stuffed chili peppers.",
  },
  {
    id: "m28",
    name: "Rajma Chawal",
    price: 105.75,
    description: "Comforting kidney bean curry served with rice.",
  },
  {
    id: "m29",
    name: "Bhindi Masala",
    price: 120.5,
    description: "Okra stir-fried with spices and herbs.",
  },
  {
    id: "m30",
    name: "Gobi Manchurian",
    price: 135.99,
    description: "Crispy cauliflower in spicy Manchurian sauce.",
  },
  {
    id: "m31",
    name: "Tandoori Fish",
    price: 160.0,
    description: "Marinated fish grilled in a tandoor, full of flavor.",
  },
  {
    id: "m32",
    name: "Jalebi",
    price: 130.25,
    description: "Spiral-shaped deep-fried sweet soaked in sugar syrup.",
  },
  {
    id: "m33",
    name: "Kachori",
    price: 110.99,
    description: "Deep-fried bread filled with spiced lentils or peas.",
  },
  {
    id: "m34",
    name: "Malai Kofta",
    price: 150.75,
    description: "Creamy gravy with soft kofta made of paneer and veggies.",
  },
  {
    id: "m35",
    name: "Mutton Korma",
    price: 190.5,
    description: "Tender mutton in a rich, spiced yogurt-based curry.",
  },
  {
    id: "m36",
    name: "Prawn Curry",
    price: 160.99,
    description: "Spicy and flavorful curry with succulent prawns.",
  },
  {
    id: "m37",
    name: "Tandoori Lamb Chops",
    price: 165.0,
    description:
      "Juicy Juicy lamb chops marinated in tandoori spices, grilled to perfection.",
  },
  {
    id: "m38",
    name: "Phirni",
    price: 120.0,
    description:
      "Creamy Indian rice pudding flavored with cardamom and saffron.",
  },
  {
    id: "m39",
    name: "Rabri",
    price: 110.25,
    description:
      "Thick, sweetened condensed milk dessert, garnished with pistachios.",
  },
  {
    id: "m40",
    name: "Tandoori Salmon",
    price: 155.5,
    description: "Salmon marinated in spices and grilled in a tandoor oven.",
  },
  {
    id: "m41",
    name: "Dabeli",
    price: 145.99,
    description:
      "Spicy potato and chutney-filled burger, a popular street food.",
  },
  {
    id: "m42",
    name: "Samosa Chaat",
    price: 105.75,
    description: "Crispy samosas broken into pieces and topped with chutneys.",
  },
  {
    id: "m43",
    name: "Aloo Masala Dosa",
    price: 120.25,
    description:
      "Thin rice crepe with spiced potato filling, a South Indian favorite.",
  },
  {
    id: "m44",
    name: "Matar Paneer",
    price: 125.0,
    description: "Paneer and green peas in a rich tomato-based gravy.",
  },
  {
    id: "m45",
    name: "Vindaloo",
    price: 135.25,
    description: "Spicy Goan curry with meat marinated in vinegar and spices.",
  },
  {
    id: "m46",
    name: "Rajasthani Dal Baati Churma",
    price: 150.0,
    description:
      "Rajasthani platter with lentil curry, wheat balls, and sweet crumble.",
  },
  {
    id: "m47",
    name: "Aloo Gobi",
    price: 140.75,
    description: "Potato and cauliflower cooked with spices and herbs.",
  },
  {
    id: "m48",
    name: "Pesarattu",
    price: 160.99,
    description: "Crispy green gram dosa, a South Indian specialty.",
  },
  {
    id: "m49",
    name: "Misal Pav",
    price: 120.0,
    description:
      "Spicy sprouted bean curry served with pav, a Maharashtrian dish.",
  },
  {
    id: "m50",
    name: "Tandoori Mushroom",
    price: 105.25,
    description: "Mushrooms marinated in spices and grilled in a tandoor oven.",
  },
  {
    id: "m51",
    name: "Kalaadi",
    price: 110.99,
    description:
      "Fried cheese from Jammu and Kashmir, a unique cheese delicacy.",
  },
  {
    id: "m52",
    name: "Dhokla",
    price: 125.5,
    description: "Steamed savory cake made from rice and chickpea flour.",
  },
  {
    id: "m53",
    name: "Kerala Sadya",
    price: 135.0,
    description:
      "Traditional Kerala feast with a variety of vegetarian dishes.",
  },
  {
    id: "m54",
    name: "Malpua",
    price: 150.25,
    description: "Sweet pancakes soaked in sugar syrup, a delectable dessert.",
  },
];

console.log(DUMMY_MEALS.length)
export default function AvailableMeals({limit}){
  const startPos = (limit -1)*6;
  let endPos = startPos + 6;
  if(endPos > DUMMY_MEALS.length){
    endPos = DUMMY_MEALS.length -1;
  }
const showMeals = DUMMY_MEALS.slice(startPos,endPos);
  const mealsList = showMeals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
}
