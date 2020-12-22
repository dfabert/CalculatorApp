import React from 'react';
import './Currency.scss';

function CurrencySelect(props) {
    const {
        currencyOptions,
        selectedCurrency,
        onChangeCurrency,
        onChangeAmount,
        amount
    } = props

    return (
        <>
            <div className='card'>
                <input id='amount' type='number' className='input' value={amount} onChange={onChangeAmount} />
                <select id='select' value={selectedCurrency} onChange={onChangeCurrency}>
                    {currencyOptions.map(option => (
                        <option key={option} value={option}>{option}</option>
                    ))}
                </select>
            </div>
        </>
    )
}
export default CurrencySelect;