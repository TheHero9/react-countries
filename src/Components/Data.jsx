import React from "react"
import { useState } from "react"

function Data(props) {
    
    return (
        <>
    <div style={{display: !props.state ? "none" :  "inline"       }} > 
    
        <h1>➡️ Country name: <span>{props.nameOf}</span></h1>
        <h2>👱‍♂️ Population: <span>{props.population} mil</span> </h2>
        <h2>🏰 Capital: <span>{props.capital}</span> </h2>
        <h2>  </h2>

        <img src={props.flag}></img>
      </div>
      </>
    )
}

export default Data