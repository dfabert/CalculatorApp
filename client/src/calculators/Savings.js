import React, { useState, useEffect } from "react";
import './Savings.scss';
import { Input, FormBtn } from "../components/Form";
import Results from '../results/VerticalResults';
import API from "../utils/API";
import { LineChart } from '../components/Chart';
import Wrapper from '../components/Wrapper';

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
    createChart();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[total]);

  function createChart() {
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
          data: savingsArray,
          borderColor: "#b8e76c",
          borderWidth: 3,
          borderStyle: "solid",
        }
      ]
    }
    setChartData(newData);
  }

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

      API.saveCalculation({
        equation:  equation,
        result:  amountString,
        calculator:  'Savings',
        userId: id
      }).then(() => {
          setUpdateFlag(!updateFlag);
      }).catch(err => console.log(err));

  };

  return (
    <div className='savingsPage'>
      <h2>Financial Calculator</h2>
      <div className='savingsContainer'>
      <Wrapper>
        <form className='savingsForm'>
          Principal:  
          <Input
          onChange={handlePrincipalChange}
          name="principal"
          value={p}
          />
          APY:  
          <Input
          onChange={handleRateChange}
          name="rate"
          value={r}
          />
          Years:
          <Input
          onChange={handleTimeChange}
          name="years"
          value={t}
          />
          <FormBtn onClick={handleFormSubmit}>
            Calculate!
          </FormBtn>
          <div>{total === 0 ? null : 'Your savings at the end of ' + t + '  years'}</div>
          <div>{total === 0 ? null : "$" + total}</div> 
        </form>
        
        
      </Wrapper>
        <aside className='sidebar'>
          <Results doupdate={updateFlag} />
        </aside>
        </div>
      <LineChart className='lineChart' chartData={chartData} />
      
    </div>
  );
}

export default Savings;
