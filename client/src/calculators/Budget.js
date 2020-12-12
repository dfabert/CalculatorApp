import React,{useState, useEffect} from "react";
import './Savings.scss';

function Savings() {
  const [expenditures, setExpenditures]= useState([]);
  calculateSavings = () => {
    var arrayLength = expenditures.length;
    var totalExpenses = 0;
  
    for (var i = 0; i < arrayLength; i++) {
      totalExpenses =+ parseInt(expenditures[i].slider_amount) + totalExpenses;
    }
  
    var yearlyIncome = parseInt(incomes[0].amount);
    var monthlyIncome = yearlyIncome / 12;
  
    var totalSavingsPerMonth = monthlyIncome - totalExpenses;
  
  
    this.setState({
      monthly_income: Math.round(monthlyIncome),
      monthly_expenses: Math.round(totalExpenses),
      monthly_savings: Math.round(totalSavingsPerMonth),
    })
  }
  
  handleFeedback = (event) => {
    this.setState({
      feedback: event.target.id
    })
  }
  
  handleExpenseChange = (event) => {
    let index = event.target.id;
    // Strip pound sign
    var expenditureNumber = event.target.value.replace(/\D/g,''); 
  
    this.setState({
      expenditures: update(this.state.expenditures, {
        [index]: {
          amount: {$set: expenditureNumber}
        }
      })
    },() => {
      this.calculateSavings();
    })
  }
  
  return (
    <div>
      Savings Calculator
    </div>
  );
}

export default Savings;

