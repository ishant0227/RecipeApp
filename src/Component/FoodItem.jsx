import styles from "./Fooditem.module.css"
export default function Fooditem({Food, setFoodid}){
    return(
    <div className={styles.itemC}>
        <img className={styles.itemimg} src={Food.image} alt={Food.title} />    
        <div className={styles.itemcontain}>
            <p className={styles.itemname}>{Food.title}</p></div>
        
        <div className={styles.buttoncontainer}>
        <button onClick={()=>{console.log(Food.id); setFoodid(Food.id);}} className={styles.itembutton}>View Recipe</button>
        </div>
    </div>
    )
}