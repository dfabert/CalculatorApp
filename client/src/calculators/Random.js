 'use strict';
import React, { useState } from "react";
import Results from '../results/VerticalResults';
import Button from 'react-bootstrap/Button';

import './Random.scss';
import API from "../utils/API";

//import './random.scss';
import { use } from "passport";

function Random(){
    
    const[random, setRandom]=useState(0);
    var numMax = 10000;
    var numRandom = Math.floor((Math.random() * numMax) + 1);
    const[clicked, setClicked]=useState(false);
    function handleClick(){
        //this.setState({this.state.random + this.Random})
        
    }
    return (
        <div>
            <h1>{random}</h1>
            {
                clicked ?  <button className='resetButton'  onClick={()=>{
                    setRandom(0);
                    setClicked(false);       
               }}>
                   StartAgain</button> : <button className='randomButton' value='Click me' onClick={()=>{ 
                    setRandom(Math.floor(Math.random() * 1000) + 1);
                    setClicked(true);
                }}>ClickMe</button>
            }
            {/* <button className='randomButton' value='Click me' onClick={()=>{ 
                setRandom(Math.floor(Math.random() * 1000) + 1);}}>ClickMe</button>
            <button className='resetButton'  onClick={()=>{
                 setRandom(0);       
            }}>StartAgain</button>     */}
        </div>
    );


}

function click(){
    alert('clicked');
     alert(Math.floor(Math.random() * 1000) + 1);
    
    
 }

// // // export default function App (){
// // //     return (
// // //         <div>
// // //             <button onClick={click}>
// // //                 What's your lucky number?
// // //             </button>
// // //         </div>
// // //     )
// // // }


export default Random;

// // class Button extends React.Component {
// //     constructor(props) {
// //         super(props);
// //         this.state = {
// //             random: 0
// //         }
// //     }

// import React, {Component} from 'react';
// import {Platform, StyleSheet, View, Button, Text} from 'react-native';
// import { render } from 'sass';

// constructor(){
//     super();
//     this.state = {
//         numberHolder: 1
//     }
// }

// generateRandomNumber = () => {
//     var randomNumber = Math.floor(Math.random() * 100) + 1
//     this.setState({numberHolder: randomNumber})
// }
// render() {
//     <View style{StyleSheet.container}>
//     <Text style={StyleSheet.headerText}>{this.state.numberHolder}</Text>
//     <Button title='Generate Random Number' onPress={this.generateRandomNumber}/>
//     </View>
// }
  
