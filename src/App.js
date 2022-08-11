import React from "react"
import './App.css';
import {useState, useEffect} from "react"
import { hasSelectionSupport } from "@testing-library/user-event/dist/utils";
import Data from "./Components/Data"


function App() {



  const [input, setInput] = useState("")
  const [value, setValue] = useState("")
  const [clicked, setClicked] = useState(false)
  

  const [flag, setFlag] = useState(null);
  const [nameOf, setName] = useState(null);
  const [capital, setCapital] = useState(null)
  const [population, setPopulation] = useState(null)

 
  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${input}`)
       .then((response) => response.json())
       .then((data) => {
        
          
          
          setName(data[0].name.common);
          setFlag(data[0].flags.png);
          setPopulation(data[0].population)
          setCapital(data[0].capital)
          
       })
       .catch((err) => {
          console.log(err.message);
       });
 }, [input])
  


function Submit(){
  setInput(value)
  setClicked(true)
  
}
   

  return (
    <div className="App">
      <input className="input" type="text" placeholder="Enter Country Name" onChange={(e) => setValue(e.target.value)} />
      <button className="button" onClick={Submit}>Submit</button>
      
      <Data 
        nameOf={nameOf} 
        population={(population/1000000).toFixed(2)}
        flag={flag}
        capital={capital}
        state={clicked} />


      
    </div>
  );
}

export default App;
