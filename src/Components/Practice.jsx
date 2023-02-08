import Button from 'react-bootstrap/Button';
import React from "react"
import { useState, useEffect } from "react"
import Data from "./Data";
import { ButtonGroup, Card, Col, Container, Row } from 'react-bootstrap';


var randomCountry = require('random-country');

const Practice = function(){
    const [country, setCountry] = useState(null)
    const [score, setScore] = useState(0)
    
    const [flag, setFlag] = useState('');
    const [name, setName] = useState('');
    
    const [fake1, setFake1] = useState(null)
    const [fakeFlag1, setFakeFlag1] = useState(null)
    const [fake2, setFake2] = useState(null)
    const [fakeFlag2, setFakeFlag2] = useState(null)


    useEffect(() => {

        !country ? console.log("No country") :
        fetch(`https://restcountries.com/v3.1/name/${country}`)
           .then((response) => response.json())
           .then((data) => {
              setName(data[0].name.common);
              setFlag(data[0].flags.png);  
           })
           .catch((err) => {
              console.log(err.message);
           });

           !fake1 ? console.log("No Country - Practice") :
           fetch(`https://restcountries.com/v3.1/name/${fake1}`)
           .then((response) => response.json())
           .then((data) => {
              setFakeFlag1(data[0].flags.png);  
           })

           !fake2 ? console.log("No Country - Practice") :
           fetch(`https://restcountries.com/v3.1/name/${fake2}`)
           .then((response) => response.json())
           .then((data) => {
              setFakeFlag2(data[0].flags.png);  
           })

        //    console.log(country)
           
     }, [country])

     let arrayFlags = []
     let randomizedFlags = [2,4,5]

     useEffect(() => {
         Randomize(arrayFlags)
        // console.log(randomizedFlags)

        //  console.log(arrayFlags)
        }, [country])

    
    function Randomize(array){
        // for (var i = array.length - 1; i > 0; i--) {
        //     var j = Math.floor(Math.random() * (i + 1));
        //     var temp = array[i];
        //     array[i] = array[j];
        //     array[j] = temp;
        // }

        arrayFlags.push(1)
    }

    function GenerateCountry(){
        setCountry(randomCountry())
        setFake1(randomCountry())
        setFake2(randomCountry())

    }

    function ArrayPush(){
        randomizedFlags = []
        randomizedFlags.push(2)
        // console.log(randomizedFlags)
    }

    return(
        <>
            <div className="practice">
                <h1>Practice Section</h1>
                <h3>Score: {score}</h3>
                <h3>Flag of {name}:</h3>

                <Button onClick={(e) => ArrayPush()}>Array 1</Button> <br></br>

                <Button onClick={(e) => GenerateCountry()}>Start</Button> <br></br>
                
            <Container className='container-practice'>
            <Row className="justify-content-md-center">
                <Col>
                    <img className='' src={flag}></img>
                </Col>
                <Col>
                    <img className='' src={fakeFlag1}></img>
                </Col>
                <Col>
                    <img className='' src={fakeFlag2}></img>
                </Col>
            </Row>
            </Container>
            </div>
        </>
    )
}


export default Practice