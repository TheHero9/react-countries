import Button from 'react-bootstrap/Button';
import React from "react"
import { useState, useEffect } from "react"
import Data from "./Data";
import { ButtonGroup, Card, Col, Container, Row } from 'react-bootstrap';


var randomCountry = require('random-country');

const Practice = function(){
    const [country, setCountry] = useState(null)
    const [score, setScore] = useState(0)
    const [record, setRecord] = useState(0)
    const [lastScore, SetLastScore] = useState(0)
    
    const [flag, setFlag] = useState('');
    const [name, setName] = useState('');
    
    const [fake1, setFake1] = useState(null)
    const [fakeFlag1, setFakeFlag1] = useState(null)
    const [fake2, setFake2] = useState(null)
    const [fakeFlag2, setFakeFlag2] = useState(null)

    const [hovered, setHovered] =useState(false)


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
           
     }, [country])


     const [arrayFlags, setArrayFlags] = useState([])
     
     const [random1, setRandom1] = useState('')
     const [random2, setRandom2] = useState('')
     const [random3, setRandom3] = useState('')

     useEffect(() => {
        setArrayFlags([])

        arrayFlags.push(flag, fakeFlag1, fakeFlag2)
        
        Randomize(arrayFlags)
        setRandom1(arrayFlags[0])
        setRandom2(arrayFlags[1])
        setRandom3(arrayFlags[2])
        

        }, [flag, fakeFlag1, fakeFlag2])

    
    function Randomize(array){
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }

    function Clear(){
        setRandom1('')
        setRandom2('')
        setRandom3('')
        setName(null)
    }

    function GenerateCountry(){
        setCountry(randomCountry())
        setFake1(randomCountry())
        setFake2(randomCountry())
    }


    function SubmitAnswer(e){
        if(e.target.src === flag) {
            setScore(e => e+1)
            GenerateCountry()
        } else{
            if(score > record) setRecord(score)
            setScore(0)
            Clear()

        }

    }


    return(
        <>
            <div className="practice">
                <h1 style={{textDecoration:  "underline"}}>Practice Section</h1>
                
                <h3>Score: {score}</h3>
                <h3>Last score: {lastScore}</h3>
                <h5>Highest: {record}</h5>
                
                <h3>Flag of: {name}</h3>

              

                <Button onClick={(e) => GenerateCountry()}>Start</Button> <br></br>
                
            <Container className='container-practice'>
                <Row className="justify-content-md-center">

                    <Col>
                        <img onClick={e => SubmitAnswer(e)} src={random1}></img>
                    </Col>
                    <Col>
                        <img onClick={e => SubmitAnswer(e)} src={random2}></img>
                    </Col>
                    <Col>
                        <img onClick={e => SubmitAnswer(e)} src={random3}></img>
                    </Col>
             </Row>
            </Container>
            </div>
        </>
    )
}


export default Practice