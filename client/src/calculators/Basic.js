import React, { useEffect, useState, useContext } from "react";
import Results from '../results/VerticalResults';
import Button from 'react-bootstrap/Button';
import './Basic.scss';
import API from "../utils/API";
import UserContext from '../utils/UserContext';
import Wrapper from '../components/Wrapper';

function Basic() {



  const buttonChars = ['1','2','3','+','4','5','6','-','7','8','9','x','.','0','=',"/"];
  const [display, setDisplay] = useState('');
  const [num1, setNum1] = useState(0);
  const [oppr, setOppr] = useState(null);
  const [equalsOn, setEqualsOn] = useState([false, null, '']);  //was equals last oppr?
  const [updateFlag, setUpdateFlag] = useState(false);
  const [equationString, setEquationString] = useState('');


  const { id } = useContext(UserContext);

  useEffect(() => {
    saveThisCalculation();
  },[num1]);


  const saveThisCalculation = () => {;
    if (equationString !== ''){     
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
      setEqualsOn([false, null, '']);
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
        if (display !== ''){
          setNum1(parseFloat(display));
        }
      }
      setDisplay("");
      setOppr("+");
      return;
    }

    //subtraction
    if (char === '-') {
      setEqualsOn([false, null, '']);
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
        if (display !== ''){
          setNum1(parseFloat(display));
        }
      }
      setDisplay("");
      setOppr("-");
      return;
    }

    //multiplication
    if (char === "x") {
      setEqualsOn([false, null, '']);
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
        if (display !== ''){
          setNum1(parseFloat(display));
        }
      }
      setDisplay("");
      setOppr("x");
      return;
    }

    //division
    if (char === "/") {
      setEqualsOn([false, null, '']);
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
        if (display !== ''){
          setNum1(parseFloat(display));
        }
      }
      setDisplay("");
      setOppr("/");
      return;
    }

    //equals
    if (char === "=") {
      if (equalsOn[0]){
        if (equalsOn[1] === "+") {
          setEquationString(num1.toString() +  " + " + equalsOn[2]);
          setNum1(num1 + parseFloat(equalsOn[2]));
        } else if (equalsOn[1] === '-') {
          setEquationString(num1.toString() +  " - " + equalsOn[2]);
          setNum1(num1 - parseFloat(equalsOn[2]));
        } else if (equalsOn[1] === "x") {
          setEquationString(num1.toString() +  " x " + equalsOn[2]);
          setNum1(num1 * parseFloat(equalsOn[2]));
        } else if (equalsOn[1] === "/") {
          setEquationString(num1.toString() +  " / " + equalsOn[2]);
          setNum1(num1 / parseFloat(equalsOn[2]));
        }
      }
      if (!oppr) return;
      if (oppr === "+") {
        setEquationString(num1.toString() +  " + " + display);
        setNum1(num1 + parseFloat(display));
        setEqualsOn([true, '+', display]);
      } else if (oppr === '-') {
        setEquationString(num1.toString() +  " - " + display);
        setNum1(num1 - parseFloat(display));
        setEqualsOn([true, '-', display]);
      } else if (oppr === "x") {
        setEquationString(num1.toString() +  " x " + display);
        setNum1(num1 * parseFloat(display));
        setEqualsOn([true, 'x', display]);
      } else if (oppr === "/") {
        setEquationString(num1.toString() +  " / " + display);
        setNum1(num1 / parseFloat(display));
        setEqualsOn([true, '/', display]);
      }
      setDisplay('');
      setOppr(null);
      return;
    }

    //clear button
    if (char === 'clear'){
      setDisplay('');
      setNum1(0);
      setOppr(null);
      setEqualsOn([false, null, '']);
      return
    }

    else {
      setEqualsOn([false, null, '']);
      let newDisplay = display + char;
      setDisplay(newDisplay);
    }
  };
  
  return ( 
    <div className='basicPage'> 
      <title>Basic Calculator</title> 
    <Wrapper>
    <div className='calculatorContainer'>
      <div className='calculator-screen'>{display === '' ? num1 : display  } </div>
      <div className='calculatorInputs'>
        {buttonChars.map(char => {
          return (
            <Button key ={char} variant="secondary" onClick={() => enterChar(char)}>{char}</Button>
          );
        })}
         <Button key = 'clear' variant="secondary" onClick={() => enterChar('clear')}>C</Button>
         </div>
    </div>
    </Wrapper>
      <aside className='sidebar'>
        <Results doupdate={updateFlag} />
      </aside>
    </div>

  );
  
}

export default Basic;
