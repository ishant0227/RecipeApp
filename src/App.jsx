import { useState } from 'react'
import Search from './Component/Search'
import Recipelist from './Component/Recipelist'
import Nav from './Component/Nav'
import "./App.css"
import Container from './Component/Container'
import InnerContainer from './Component/InnerContainer'
import Fooddetails from './Component/FoodDetails'

function App() {
  const [foodData,setfoodData]=useState([])
  const [Foodid,setFoodid]=useState("715415")

  return (
    <>
     <Nav />
     <Search foodData={foodData} setfoodData={setfoodData} /> 
     <Container>
    <InnerContainer>
    <Recipelist setFoodid={setFoodid} foodData={foodData} />
    </InnerContainer>
    <InnerContainer>
    <Fooddetails  Foodid={Foodid} />
    </InnerContainer>
     </Container>
     
    </>
  )
}

export default App
