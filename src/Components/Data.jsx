import React from "react"
import { useState } from "react"

function Data(props) {
    
    return (
        <>
    <div style={{display: !props.state ? "none" :  "inline"       }} > 
    
        <h1>➡️ Country name: {props.nameOf}</h1>
        <h2>👱‍♂️ Population: {props.population}mil </h2>
        <h2>🏰 Capital: {props.capital} </h2>
        <h2>  </h2>

        <img src={props.flag}></img>
      </div>
      </>
    )
}

export default Data