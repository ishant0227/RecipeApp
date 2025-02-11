import { useEffect, useState } from "react";
import styles from "./Fooddetail.module.css"
import IngredinetList from "./IngredientList";
export default function Fooddetails( {Foodid} ){
    const [fdetail, setfdetail] = useState({})
    const[isLoading,setisLoading]=useState(true)
    const URL1 =`https://api.spoonacular.com/recipes/${Foodid}/information`
    const API_KEY = "b50c2fd9a74c464985a019f3dd482e67"; 
    useEffect(()=>{
        async function fetchfood(){
            if(Foodid){
        const res1 = await fetch(`${URL1}?apiKey=${API_KEY}`);
        const data1 = await res1.json();
        console.log(data1);
        setfdetail(data1)
        setisLoading(false)
            }
        }
        fetchfood()
    }, [Foodid]);
    return(
    <div>
    <div className={styles.recipeCard}>
    <h2 className={styles.recipetitle}>{fdetail.title}</h2>
    <img  className={styles.recipeimg} src={fdetail.image} alt="" />
    <div className={styles.recipedetails}>
    <span>
    <strong>Time to complete : {fdetail.readyInMinutes}min</strong>
    </span>
    <span>
    <strong>Serves{fdetail.servings}</strong>
    </span>
    <span> <strong>
        {fdetail.vegetarian ? "🟢Vegetarian" : "🔴Non-Vegetarian"}
        </strong>
        <span><strong>
            {fdetail.vegan ? "🐮VEGAN" : ""}
            </strong>
        </span>
    </span>
    
    </div>
    <div>
        <span><strong>
        ₹{fdetail.pricePerServing}/-  Per Serving
        </strong>
        </span>
        </div>
        <h2>Ingredints</h2>
       <IngredinetList  fdetail={fdetail}isLoading={isLoading}/>
        <h2>Instructions</h2>
        <div className={styles.recipeinstruct}>
    <ol>
    {isLoading ? <p>Loading...</p> : fdetail.analyzedInstructions[0].steps.map((step)=>(<li key={step.number}>{step.step}</li>))}
    </ol>
    </div>
    
    </div>
    </div>
    
)
}