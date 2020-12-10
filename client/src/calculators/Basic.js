import React, { useState } from "react";
import Results from '../results/VerticalResults';
import Button from 'react-bootstrap/Button';
import './Basic.scss';

function Basic() {

  const buttonChars = ['1','2','3','4','5','6','7','8','9','0','/','x','-','+','='];

  const [input, updateInput] = useState('');
  const [num1, updateNum1] = useState(0);
  const [oppr, updateOppr] = useState('');
  const [equalSave, updateEqualSave] = useState([]);

  const enterChar = char => {
    if(char == '+' || char == '-' || char == 'x' || char == '/' || char == '='){  //determine if we have an operator
      if(oppr === ''){ //if operator has not been saved previously
      console.log('saving ' + char + ' to Oppr');
      let num = parseFloat(input);
      updateNum1(num);
      updateInput('');
      updateOppr(char);
      }
      else if(oppr === '+'){      //addition
        console.log('adding');
        let num = parseFloat(input);
        let answer = num1 + num;
        updateEqualSave([oppr, num, true]);
        updateNum1(answer);
        updateInput('');
        updateOppr(char);     
      }
      else if(oppr === '-'){      //subtraction
        console.log('subtraction');
        let num = parseFloat(input);
        let answer = num1 - num;
        updateEqualSave([oppr, num, true]);
        updateNum1(answer);
        updateInput('');
        updateOppr(char);
      }
      else if(oppr === 'x'){      //multiplication
        console.log('multiplication');
        let num = parseFloat(input);
        let answer = num1*num;
        updateEqualSave([oppr, num, true]);
        updateNum1(answer);
        updateInput('');
        updateOppr(char);
      }
      else if(oppr === '/'){      //division
        console.log('division');
        let num = parseFloat(input);
        let answer = num1/num;
        updateEqualSave([oppr, num, true]);
        updateNum1(answer);
        updateInput('');
        updateOppr(char);
      }
      else if(oppr === '='){  //Handles the user pushing equals several times
        console.log('DOUBLE EQUAL!!!');
        if(equalSave[0] == '+'){
          let answer = num1 + equalSave[1]
          updateNum1(answer);
        }
        else if(equalSave[0] == '-'){
          let answer = num1 - equalSave[1]
          updateNum1(answer);
        }
        else if(equalSave[0] == 'x'){
          let answer = num1 * equalSave[1]
          updateNum1(answer);
        }
        else if(equalSave[0] == '/'){
          let answer = num1 / equalSave[1]
          updateNum1(answer);
        }
      }
    }
    else{   //will catch all non-operators (numbers)
        if(equalSave[2]){
          updateEqualSave([,,false]);
          updateOppr('');
        }
        console.log(char);
        let newInput = input + char;
        updateInput(newInput);
      }
  };
  
  return (    
    <div>
      Basic Calculator
      <div>{input === '' ? num1 : input  } </div>
      <div>
        {buttonChars.map(char => {
          return (
            <Button key ={char}variant="secondary" onClick={() => enterChar(char)}>{char}</Button>
          );
        })}
      </div>
      <Results />
    </div>
  );
}

export default Basic;
