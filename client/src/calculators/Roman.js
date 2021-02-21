import React, { useState, useEffect } from 'react';
import { Input } from '../components/Form';
import Wrapper from '../components/Wrapper';

function Roman() {
    const [num, setNum] = useState('');
    const [romanNum, setRomanNum] = useState('');    

    useEffect(() => {
        changeToRoman(num);
    }, [num]);

    useEffect(() => {
        changeToNum(romanNum);
    }, [romanNum]);

    function changeToRoman(num) {

        let answer = '';
    
        while(num > 0) {
            if(num >= 1000){
                answer += 'M';
                num -= 1000
            }else if (num >=900){
                answer += 'CM'
                num-=900
            }else if (num >=500){
                answer += 'D'
                num-=500
            }else if (num >=400){
                answer += 'CD'
                num-=400
            }else if (num >=100){
                answer += 'C'
                num-=100
            }else if (num >=90){
                answer += 'XC'
                num-=90
            }else if (num >=50){
                answer += 'L'
                num-=50
            }else if (num >=40){
                answer += 'XL'
                num-=40
            }else if (num >=10){
                answer += 'X'
                num-=10
            }else if (num >=9){
                answer += 'IX'
                num-=9
            }else if (num >=5){
                answer += 'V'
                num-=5
            }else if (num >=4){
                answer += 'IV'
                num-=4
            }else if (num >=1){
                answer += 'I'
                num-=1
            }
        }
        setRomanNum(answer);
    };

    function changeToNum(romanNum) {
        //Set value for each letter
            const values = {
                I: 1,
                V: 5,
                X: 10,
                L: 50,
                C: 100,
                D: 500,
                M: 1000
            }
    
            let total = 0;
    
            for (let i = 0; i < romanNum.length; i++){
                let currentNum = romanNum[i];
                let nextNum = romanNum[i + 1];
    
                let currentVal = values[currentNum];
                let nextVal = values[nextNum];
    
                if (currentVal < nextVal) {
                    total -= currentVal;
                } else {
                    total += currentVal;
                }
    
            }
        
        setNum(total);
    };

    return(
        <div>
          <Wrapper>
            Enter Number:
            <Input onChange={e =>setNum(e.target.value)} name='num' value={num}/>
            Enter Roman Numeral:
            <Input onChange={e =>setRomanNum(e.target.value.toUpperCase())} name='romanNum' value={romanNum}/>
          </Wrapper>
        </div>
    )
}

export default Roman