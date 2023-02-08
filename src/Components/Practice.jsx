import Button from 'react-bootstrap/Button';
import React from "react"
import { useState, useEffect } from "react"
import Data from "./Data";
import { ButtonGroup, Card, Col, Container, Row } from 'react-bootstrap';


var randomCountry = require('random-country');

const Practice = function(){
    const [country, setCountry] = useState(null)
    
    const [flag, setFlag] = useState('');
    const [name, setName] = useState('');
    
    const [fake1, setFake1] = useState(null)
    const [fakeFlag1, setFakeFlag1] = useState(null)
    const [fake2, setFake2] = useState(null)
    const [fakeFlag2, setFakeFlag2] = useState(null)


    useEffect(() => {

        fetch(`https://restcountries.com/v3.1/name/${country}`)
           .then((response) => response.json())
           .then((data) => {
              setName(data[0].name.common);
              setFlag(data[0].flags.png);  
           })
           .catch((err) => {
              console.log(err.message);
           });

           fetch(`https://restcountries.com/v3.1/name/${fake1}`)
           .then((response) => response.json())
           .then((data) => {
              setFakeFlag1(data[0].flags.png);  
           })

           fetch(`https://restcountries.com/v3.1/name/${fake2}`)
           .then((response) => response.json())
           .then((data) => {
              setFakeFlag2(data[0].flags.png);  
           })


     }, [country])

    function GenerateCountry(){
        setCountry(randomCountry())

        setFake1(randomCountry())
        setFake2(randomCountry())
    }

    return(
        <>
            <div className="practice">
                <h1>Practice Section</h1>
                <h3>Flag of {name}:</h3>
              
                {/* <h3>Fake1 {fake1} and Fake2 {fake2}</h3> */}
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