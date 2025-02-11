import { useState } from "react"


export default function Search(){
    const [Recipe,setRecipe]=useState("")

    function handlesubmit(e){
        e.preventDefault();
        console.log(Recipe)
        
    }
    return(
        <div>
           <span> <input type="text" onChange={(e)=>setRecipe(e.target.value)} placeholder="Search for Reicpe" value={Recipe} /> 
           <button onClick={(e)=>handlesubmit(e)} type="submit" >Search</button>
           </span>
        </div>
    

    )

}