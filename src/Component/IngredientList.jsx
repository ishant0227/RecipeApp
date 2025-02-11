import styles from "./IngredientList.module.css"

export default  function IngredinetList({isLoading, fdetail}){
    return(
        <div>
       <div>
        {isLoading ? <p>Loading...</p> : fdetail.extendedIngredients.map((item) => (
            <div>
            <div className={styles.ingcontainer}> 
            <div className={styles.ingimg}> 
            <img className={styles.img} src={`https://spoonacular.com/cdn/ingredients_100x100/`+item.image} alt="" />
            </div>
            <div className={styles.ingnamecontain}>
            <div className={styles.name}>{item.name}</div>
            <div className={styles.amount}>{item.amount}{item.unit}</div>
            </div>
            </div>
            </div>) 
            )}
            
        </div>
        </div>
    )
    
}