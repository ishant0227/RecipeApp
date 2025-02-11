import Fooditem from "./FoodItem";

export default function Recipelist({ foodData, setFoodid }) {
    return (    
          foodData.map((Food) => (
            <Fooditem key={Food.title} Food={Food} setFoodid={setFoodid} />
          ))
        )}
      
  