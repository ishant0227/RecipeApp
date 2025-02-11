import { useEffect, useState } from "react";
import styles from "./Search.module.css"

export default function Search({ foodData, setfoodData }) {
  const [recipes, setRecipes] = useState("");

  const URL = "https://api.spoonacular.com/recipes/complexSearch";
  const key = "b50c2fd9a74c464985a019f3dd482e67"; 

  useEffect(() => {
    async function fetchRecipe() {
      try {
        const res = await fetch(`${URL}?query=${recipes}&apiKey=${key}`);
        if (!res.ok) {
          throw new Error(`Error: ${res.status}`);
        }
        const data = await res.json();
        console.log(data.results); 
        setfoodData(data.results || []); 
      } catch (error) {
        console.error("Failed to fetch recipes:", error);
        setfoodData([]); 
      }
    }
    fetchRecipe();
  }, [recipes]); 

  return (
    <>
      <div className={styles.SearchContainer}>
        <input className={styles.inputarea}
          onChange={(e) => setRecipes(e.target.value)}
          type="text"
          value={recipes}
          placeholder="Search for a recipe..."
        />
      </div>
    </>
  );
}
