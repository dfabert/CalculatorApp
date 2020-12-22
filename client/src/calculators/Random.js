'use strict';
import React, { useState } from "react";
import './Random.scss';
import Wrapper from '../components/Wrapper';


function Random(){
    
    const[random, setRandom]=useState();
    var numMax = 1000;
    var numRandom = Math.floor((Math.random() * numMax) + 1);
    const[clicked, setClicked]=useState(false);
    function handleClick(){
    
        
    }
    return (
        <div className='randomPage'>
            <h2>Random Number Generator</h2>
            <Wrapper>
            {
                clicked ?  <button className='resetButton'  onClick={()=>{
                    setRandom();
                    setClicked(false);       
               }}>
                   Reset to pick again:</button>:<button className='randomButton' value='Click me' onClick={()=>{ 
                    setRandom(Math.floor(Math.random() * 1000) + 1);
                    setClicked(true);
                }}>Pick a random number:</button>
            }
            {}
            <div className='randomOutput'>{random}</div>
            </Wrapper>
        </div>
    );


}

function click(){
    alert('clicked');
     alert(Math.floor(Math.random() * 1000) + 1);
    
    
 }



export default Random;
