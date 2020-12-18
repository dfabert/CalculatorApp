import React, { useEffect, useState, useContext } from "react";
import Results from '../results/VerticalResults';
import Button from 'react-bootstrap/Button';
import './Basic.scss';
import API from "../utils/API";
import UserContext from '../utils/UserContext';

function Basic() {


  const buttonChars = ['1','2','3','+','4','5','6','-','7','8','9','x','.','0','=',"/"];
  const [display, setDisplay] = useState('');
  const [num1, setNum1] = useState(0);
  const [oppr, setOppr] = useState(null);
  const [updateFlag, setUpdateFlag] = useState(false);
  const [equationString, setEquationString] = useState('');


  const { id } = useContext(UserContext);

  useEffect(() => {
    saveThisCalculation();
  },[num1]);


  const saveThisCalculation = () => {
    console.log('to the backend');
    if (oppr !== null){      
      console.log(equationString);
      API.saveCalculation({
        equation:  equationString,
        result:  num1,
        calculator:  'Basic'
      }).then(() => {
          setUpdateFlag(!updateFlag);
      }).catch(err => console.log(err));
      }
    }

  const enterChar = char => {
    //addition
    if (char === "+") {
      if (oppr !== null) {
        console.log(num1, oppr, display);
        setEquationString(num1.toString() +  oppr  + display);
        if (oppr === "+") {
          setNum1(num1 + parseFloat(display));
        } else if (oppr === '-') {
          setNum1(num1 - parseFloat(display));
        } else if (oppr === "x") {
          setNum1(num1 * parseFloat(display));
        } else if (oppr === "/") {
          setNum1(num1 / parseFloat(display));
        }
      } else {
        setNum1(parseFloat(display));
      }
      setDisplay("");
      setOppr("+");
      return;
    }

    //subtraction
    if (char === '-') {
      if (oppr !== null) {
        console.log(num1, oppr, display);
        setEquationString(num1.toString() +  oppr  + display);
        if (oppr === "+") {
          setNum1(num1 + parseFloat(display));
        } else if (oppr === '-') {
          setNum1(num1 - parseFloat(display));
        } else if (oppr === "x") {
          setNum1(num1 * parseFloat(display));
        } else if (oppr === "/") {
          setNum1(num1 / parseFloat(display));
        }
      } else {
        setNum1(parseFloat(display));
      }
      setDisplay("");
      setOppr("-");
      return;
    }

    //multiplication
    if (char === "x") {
      if (oppr !== null) {
        console.log(num1, oppr, display);
        setEquationString(num1.toString() +  oppr  + display);
        if (oppr === "+") {
          setNum1(num1 + parseFloat(display));
        } else if (oppr === '-') {
          setNum1(num1 - parseFloat(display));
        } else if (oppr === "x") {
          setNum1(num1 * parseFloat(display));
        } else if (oppr === "/") {
          setNum1(num1 / parseFloat(display));
        }
      } else {
        setNum1(parseFloat(display));
      }
      setDisplay("");
      setOppr("x");
      return;
    }

    //division
    if (char === "/") {
      if (oppr !== null) {
        setEquationString(num1.toString() +  oppr  + display);
        if (oppr === "+") {
          setNum1(num1 + parseFloat(display));
        } else if (oppr === '-') {
          setNum1(num1 - parseFloat(display));
        } else if (oppr === "x") {
          setNum1(num1 * parseFloat(display));
        } else if (oppr === "/") {
          setNum1(num1 / parseFloat(display));
        }
      } else {
        setNum1(parseFloat(display));
      }
      setDisplay("");
      setOppr("/");
      return;
    }

    if (char === "=") {
      console.log(num1, oppr, display);
      if (!oppr) return;
      if (oppr === "+") {
        setEquationString(num1.toString() +  " + " + display);
        setNum1(num1 + parseFloat(display));
      } else if (oppr === '-') {
        setEquationString(num1.toString() +  " + " + display);
        setNum1(num1 - parseFloat(display));
      } else if (oppr === "x") {
        setEquationString(num1.toString() +  " + " + display);
        setNum1(num1 * parseFloat(display));
      } else if (oppr === "/") {
        setEquationString(num1.toString() +  " + " + display);
        setNum1(num1 / parseFloat(display));
      }
      setDisplay('');
      return;
    }

    //clear button
    if (char === 'clear'){
      setDisplay('');
      setNum1(0);
      setOppr('');
      return
    }

    else {
      let newDisplay = display + char;
      setDisplay(newDisplay);
    }
  };
  
  return (    
    <div className='calculatorContainer'>
      <title>Basic Calculator</title>
      <div className='calculator-screen'>{display === '' ? num1 : display  } </div>
      <div className='calculatorInputs'>
        {buttonChars.map(char => {
          return (
            <Button key ={char} variant="secondary" onClick={() => enterChar(char)}>{char}</Button>
          );
        })}
      </div>
      <Button key = 'clear' variant="secondary" onClick={() => enterChar('clear')}>clear</Button>
      <Results doupdate={updateFlag} />
    </div>
  );
  
}

export default Basic;
