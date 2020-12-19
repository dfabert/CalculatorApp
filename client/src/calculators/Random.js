 'use strict';
import React, { useState } from "react";
import Results from '../results/VerticalResults';
import Button from 'react-bootstrap/Button';

import './Random.scss';
import API from "../utils/API";

//import './random.scss';
import { use } from "passport";

function Random(){
    
    const[random, setRandom]=useState();
    var numMax = 10000;
    var numRandom = Math.floor((Math.random() * numMax) + 1);
    const[clicked, setClicked]=useState(false);
    function handleClick(){
    
        
    }
    return (
        <div>
            <h1>{random}</h1>
            {
                clicked ?  <button className='resetButton'  onClick={()=>{
                    setRandom();
                    setClicked(false);       
               }}>
                   Reset to pick again:</button> : <button className='randomButton' value='Click me' onClick={()=>{ 
                    setRandom(Math.floor(Math.random() * 1000) + 1);
                    setClicked(true);
                }}>Pick a random number:</button>
            }
            {}
        </div>
    );


}

function click(){
    alert('clicked');
     alert(Math.floor(Math.random() * 1000) + 1);
    
    
 }



export default Random;


  
