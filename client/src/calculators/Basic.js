import React, { useState, useEffect } from "react";
import Results from '../results/VerticalResults';
import Button from 'react-bootstrap/Button';
import './Basic.scss';
import API from "../utils/API";

function Basic() {

  const buttonChars = ['1','2','3','4','5','6','7','8','9','0','/','x','-','+','=',"clear"];
  const [display, setDisplay] = useState('');
  const [num1, setNum1] = useState(0);
  const [oppr, setOppr] = useState(null);

  //Will be a hook later
  const [updateCalculations, setUpdateCalculations] = useState(false);
  const [calculations, setCalculations] = useState([]);

  useEffect(() => {
      loadCalculations()
  }, [updateCalculations])

  function loadCalculations() {
      console.log("----'Loading Calculations'-----");
      API.getCalculations()
          .then(res =>
              setCalculations(res.data)    
          )
          .catch(err => console.log(err));
  };
  //End of will be hook

  const enterChar = char => {
    //addition
    if (char === "+") {
      if (oppr !== null) {
        if (oppr === "+") {
          setNum1(num1 + parseFloat(display));
        } else if (oppr === "−") {
          setNum1(num1 - parseFloat(display));
        } else if (oppr === "×") {
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
    if (char === "-") {
      if (oppr !== null) {
        if (oppr === "+") {
          setNum1(num1 + parseFloat(display));
        } else if (oppr === "−") {
          setNum1(num1 - parseFloat(display));
        } else if (oppr === "×") {
          setNum1(num1 * parseFloat(display));
        } else if (oppr === "/") {
          setNum1(num1 / parseFloat(display));
        }
      } else {
        let newNum1 = parseFloat(display);
        setNum1(newNum1);
      }
      setDisplay("");
      setOppr("-");
      return;
    }

    //multiplication
    if (char === "x") {
      if (oppr !== null) {
        if (oppr === "+") {
          setNum1(num1 + parseFloat(display));
        } else if (oppr === "−") {
          setNum1(num1 - parseFloat(display));
        } else if (oppr === "×") {
          setNum1(num1 * parseFloat(display));
        } else if (oppr === "/") {
          setNum1(num1 / parseFloat(display));
        }
      } else {
        let newNum1 = parseFloat(display);
        setNum1(newNum1);
      }
      setDisplay("");
      setOppr("x");
      return;
    }

    //division
    if (char === "/") {
      if (oppr !== null) {
        if (oppr === "+") {
          setNum1(num1 + parseFloat(display));
        } else if (oppr === "−") {
          setNum1(num1 - parseFloat(display));
        } else if (oppr === "×") {
          setNum1(num1 * parseFloat(display));
        } else if (oppr === "/") {
          setNum1(num1 / parseFloat(display));
        }
      } else {
        let newNum1 = parseFloat(display);
        setNum1(newNum1);
      }
      setDisplay("");
      setOppr("/");
      return;
    }

    if (char === "=") {
      if (!oppr) return;
      if (oppr === "+") {
        setDisplay((num1 + parseFloat(display)).toString());
      } else if (oppr === "−") {
        setDisplay((num1 - parseFloat(display)).toString());
      } else if (oppr === "×") {
        setDisplay((num1 * parseFloat(display)).toString());
      } else if (oppr === "/") {
        setDisplay((num1 / parseFloat(display)).toString());
      }
      setNum1(null);
      setOppr(null);
      return;
    }

    //clear button
    if (char === 'clear'){
      setDisplay('0');
      setNum1('0');
      setOppr('');
      return
    }

    else {
      let newDisplay = display + char;
      setDisplay(newDisplay);
    }
  };
  
  return (    
    <div>
      Basic Calculator
      <div>{display === '' ? num1 : display  } </div>
      <div>
        {buttonChars.map(char => {
          return (
            <Button key ={char} variant="secondary" onClick={() => enterChar(char)}>{char}</Button>
          );
        })}
      </div>
           <Results calculations={calculations} />
    </div>
  );
}

export default Basic;
