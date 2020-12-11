import React, { useState } from "react";
import './Savings.scss';
import { Input, FormBtn } from "../components/Form";

function Savings() {
  //For now, compound monthly

  const [p, setPrincipal] = useState(0);
  const [r, setRate] = useState(0.0);
  const [t, setTime] = useState(0);
  const [total, setTotal] = useState(0);

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
      const amount = p * (Math.pow((1 + (rate / n)), (n * t)));
      setTotal(amount);
  };

  return (
    <div>
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
      <div>Your savings at the end of {t} years</div>
      <div>${total}</div>
    </div>
  );
}

export default Savings;