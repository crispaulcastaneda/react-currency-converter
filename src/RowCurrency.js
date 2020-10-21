import React from 'react'

export default function RowCurrency(props) {

    const {
        currencyOptions,
        selectedCurrency,
        onChangeCurrency,
        onChangeAmount,
        amount
    } = props

    return (
        <div>
            <input type="number" className="input card" value={amount} onChange={onChangeAmount} />
            <select className="card" value={selectedCurrency} onChange = {onChangeCurrency}>
                {currencyOptions.map(option => (
                    <option key={option} value={option}>{option}</option>
                ))}
            </select>
        </div>
    )
}
