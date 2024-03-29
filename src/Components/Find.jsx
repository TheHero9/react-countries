import { useEffect, useState } from "react"
import Data from "./Data"

const FindPage = function(){

//Inputs/values
const [input, setInput] = useState("")
const [value, setValue] = useState("")
const [clicked, setClicked] = useState(false)

//Data for the country
const [flag, setFlag] = useState(null);
const [nameOf, setName] = useState(null);
const [capital, setCapital] = useState(null)
const [population, setPopulation] = useState(null)

const [flag2, setFlag2] = useState(null);
 
// Render Country
useEffect(() => {

  !input ? console.log("No country") :
  fetch(`https://restcountries.com/v3.1/name/${input}`)
     .then((response) => response.json())
     .then((data) => {
        setName(data[0].name.common);
        setFlag(data[0].flags.png);
        setPopulation(data[0].population)
        setCapital(data[0].capital)
        setClicked(true)
        
     })
     .catch((err) => {
        console.log(err.message);
     });
}, [input])


//Submit button
function Submit(){
  setInput(value)
}
   

    return (
    <>
      <input className="input" type="text" placeholder="Enter Country Name" onChange={(e) => setValue(e.target.value)} />
      <button className="button" onClick={Submit}>Submit</button>
      
      <Data 
        nameOf={nameOf} 
        population={(population/1000000).toFixed(2)}
        flag={flag}
        capital={capital}
        state={clicked} />
    </>
    )
}

export default FindPage