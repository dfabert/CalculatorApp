import React, { useEffect, useState } from "react";
import './Currency.scss';
import CurrencySelect from './CurrencySelect';

const BASE_URL = 'https://api.exchangeratesapi.io/latest'

function Currency() {
    
    const[currencyOptions, setCurrencyOptions] = useState([])
    const[startCurrency, setStartCurrency] = useState()
    const[resultCurrency, setResultCurrency] = useState()
    const [exchangeRate, setExchangeRate] = useState()
    const [amount, setAmount] = useState(1)
    const [amountInStartCurrency, setAmountInStartCurrency] = useState(true)

    let startAmount, resultAmount
    if (amountInStartCurrency) {
        startAmount = amount
        resultAmount = amount * exchangeRate
    }
    else {
        startAmount = amount
        resultAmount = amount / exchangeRate
    }

    useEffect(() => {
        fetch(BASE_URL)
            .then(res => res.json())
            .then(data => {
                const firstCurrency = Object.keys(data.rates)[0]
                setCurrencyOptions([data.base, ...Object.keys(data.rates)])
                setStartCurrency(data.base)
                setResultCurrency(firstCurrency)
                serExchangeRate(data.rates[firstCurrency])
            })
    }, [])

    useEffect(() => {
        if (startCurrency != null && resultCurrency != null) {
            fetch('${BASE_URL}?base=${startCurrency}&symbols=${resultCurrency}')
            .then(res => res.json())
            .then(date => setExchangeRate(data.rates[startCurrency]))
        }
    }, [startCurrency, resultCurrency])

    function handleStartAmountChange() {
        setAmount(e.target.value)
        setAmountInStartCurrency(true)
    }

    function handleResultAmountChange() {
        setAmount(e.target.value)
        setAmountInResultCurrency(false)
    }

  return (
    <>
        <h1>Convert</h1>
        <CurrencySelect 
            currencyOptions={currencyOptions}
            selectedCurrency={startCurrency}
            onChangeCurrency={e => setStartCurrency(e.target.value)}
            onChangeAmount={handleStartAmountChange}
            onChangeAmount={handleResultAmountChange}
            amount={startAmount}
        />
        <div className='equals'>=</div>
        <CurrencySelect 
            currencyOptions={currencyOptions}
            selectedCurrency={resultCurrency}
            onChangeCurrency={e => setResultCurrency(e.target.value)}
            amount={resultAmount}
        />
    </>

  );
}



export default Currency;