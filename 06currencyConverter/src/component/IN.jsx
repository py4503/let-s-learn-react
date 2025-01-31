import React,{useId} from "react";

function InputBox(
    {label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions=[],
    selectCurrency,
    amountDisable=false,
    currencyDisable=false,
    className="",
    }
){
    const amountInputId=useId();
    // console.log(currencyOptions);
    return(
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
        <div className="w-1/2">
        <label htmlFor={amountInputId} className="text-black/40 mb-2 inline-block">
        {label}
        </label>
        <input 
        className=" w-full bg-transparent py-1.5 outline-none"
         type="number"
         value={amount}
         id={amountInputId}
         disabled={amountDisable}
         placeholder="Amount"
         onChange={(e)=>onAmountChange && onAmountChange(Number(e.target.value))} />
        </div>
        <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 inline-block w-full">Currency Type</p>
        <select name="" id=""
        value={selectCurrency}
        disabled={currencyDisable}
        onChange={(e)=> onCurrencyChange && onCurrencyChange(e.target.value)}
        className="text-black rounded-lg bg-gray-100 cursor-pointer outline-none px-1 py-1"
        >
            {currencyOptions.map((currency)=>(
                <option value={currency} key={currency}>{currency}</option>
            ))}
        </select>
        </div>
        </div>
    )
}
export default InputBox;