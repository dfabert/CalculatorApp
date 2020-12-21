import React, { useState, useEffect } from "react";
import './Savings.scss';
import { Input, FormBtn } from "../components/Form";
import Results from '../results/VerticalResults';
import API from "../utils/API";
import { LineChart } from '../components/Chart';

function Savings() {
  //For now, compound monthly

  const [p, setPrincipal] = useState(0);
  const [r, setRate] = useState(0.0);
  const [t, setTime] = useState(0);
  const [total, setTotal] = useState(0);
  const [updateFlag, setUpdateFlag] = useState(false);
  const [chartData, setChartData] = useState({});

  const id = localStorage.getItem('user');

  useEffect(() => {
    createChartData();
  },[total]);

  function handlePrincipalChange(event){
      const { value } = event.target;
      setPrincipal(value);
  };

  function handleRateChange(event) {
    const { value } = event.target;
    setRate(value);
  };

  function handleTimeChange(event) {
    const { value } = event.target;
    setTime(value);
  };

  function createChartData() {
      //Create array for labels
      let timeArray = [];
      let savingsArray = [];

      for(let i = 0; i < t; i++){
        timeArray.push(i+1);

        let n = 12;
        let rate = r/100
        const amount = p * (Math.pow((1 + (rate / n)), (n * i+1)));

        savingsArray.push(amount);
      }

      let newData = {
        labels: timeArray,
        datasets:[
          {
            label:'savings at ' + r + '%',
            data: savingsArray
          }
        ]
      }
      setChartData(newData);
  }

  function handleFormSubmit(event) {
    event.preventDefault();
      // Compound interest example:  A = P(1+r/n)^nt
      // n = 12 for monthly compound
      let n = 12;
      let rate = r/100
      let amount = p * (Math.pow((1 + (rate / n)), (n * t)));
      amount = amount.toFixed(2);
      setTotal(amount);

      let equation = 'Principal: $' + p + '    Rate: ' + r + '%    Years: ' + t ;
      let amountString = '$' + amount.toString();

      console.log(equation);
      console.log(amountString);
      console.log(id);

      API.saveCalculation({
        equation:  equation,
        result:  amountString,
        calculator:  'Savings',
        userId: 'default'
      }).then(() => {
          setUpdateFlag(!updateFlag);
      }).catch(err => console.log(err));

  };

  return (
    <div>
      <div>{id}</div>
      Savings Calculator
      <form>
        Principal:  
        <Input style={{width: '150px'}}
        onChange={handlePrincipalChange}
        name="principal"
        value={p}
        />
        APY:  
        <Input style={{width: '150px'}}
        onChange={handleRateChange}
        name="rate"
        value={r}
        />
        Years:
        <Input style={{width: '150px'}}
        onChange={handleTimeChange}
        name="years"
        value={t}
        />
        <FormBtn onClick={handleFormSubmit}>
          Calculate!
        </FormBtn>
      </form>
      <div>{total === 0 ? null : 'Your savings at the end of ' + t + '  years'}</div>
      <div>{total === 0 ? null : "$" + total}</div>
      {/* <LineChart chartData={chartData} /> */}
      <Results doupdate={updateFlag} />
    </div>
  );
}

export default Savings;
